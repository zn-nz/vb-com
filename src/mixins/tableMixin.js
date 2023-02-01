import { ElMessage, ElMessageBox } from "element-plus";
import { downloadFile, obj2Formdata, selectLocalFile, typeCheck } from "../tools/utils";
import { fileType } from "../constant";

export const dialogTypeOpt = {
	create: "create",
	update: "update"
};
export default {
	data() {
		return {
			tableData: [],
			tableQuery: {
				pageIndex: 1,
				pageSize: 20
			},
			temp: {},
			dialogVisible: false,
			total: 0,
			tableLoading: false,
			handleLoading: false,
			dialogTypeOpt,
			dialogType: "",
			dialogTitleMap: {
				[dialogTypeOpt.create]: "新增",
				[dialogTypeOpt.update]: "修改"
			}
		};
	},
	created() {
		this.fetchData();
		this.getTableData();
	},
	methods: {
		handleSearch() {
			this.tableQuery.pageIndex = 1;
			this.total = 0;
			this.getTableData();
		},
		// 增
		handleCreate() {
			this.resetTemp();
			this.dialogType = dialogTypeOpt.create;
			this.dialogVisible = true;
		},
		// 删
		handleDelete(data, cb) {
			this.temp = data;
			this.showConfirm(cb || this.confirmDelete);
		},
		// 批量删除
		handleBatchDel(cb) {
			this.showConfirm(cb || this.confirmBatchDelete);
		},
		confirmBatchDelete() {
			console.log("未定义confirmBatchDelete方法");
		},
		showConfirm(cb) {
			ElMessageBox.confirm("是否确定此操作？", "系统提示", {
				type: "warning",
				autofocus: false
			})
				.then(cb)
				.catch();
		},
		// 改之前摇
		async handleUpdateBefore({ id }) {
			if (this.apiOpt?.detail) {
				const query = this.getDetailQuery(id);
				const {
					data: { ok, data }
				} = await this.apiOpt.detail(query);
				if (ok) {
					this.handleUpdate(data, this.next);
				}
			} else {
				console.log("未定义handleUpdateBefore方法");
			}
		},
		getDetailQuery(id) {
			return { id };
		},
		// 改
		handleUpdate(row, next) {
			this.resetTemp();
			this.temp = { ...row };
			next && next(row);
			this.dialogType = dialogTypeOpt.update;
			this.dialogVisible = true;
		},
		// 查
		async getTableData() {
			if (this.apiOpt?.list) {
				const query = this.getTableQuery();
				if (!query) {
					this.total = 0;
					this.tableData = [];
					return;
				}
				this.tableLoading = true;
				const { data } = await this.apiOpt.list(query);
				this.tableLoading = false;
				this.getTableDataNormalSuccess(data);
			} else {
				console.log("未定义getTableData方法");
			}
		},
		getTableQuery() {
			return this.tableQuery;
		},
		// 校验并操作
		handleConfirm() {
			this.$refs.formRef?.validate((valid) => {
				if (valid) {
					switch (this.dialogType) {
						case "create":
							this.confirmCreate();
							break;
						case "update":
							this.confirmUpdate();
							break;
						default:
							break;
					}
				} else {
					console.warn(this.temp);
				}
			});
		},
		// 确定新增
		async confirmCreate() {
			if (this.apiOpt?.create) {
				const query = this.getCreateQuery();
				this.handleLoading = true;
				const { data } = await this.apiOpt.create(query);
				this.handleSuccess(data);
			} else {
				console.log("未定义confirmCreate方法");
			}
		},
		getCreateQuery() {
			return this.temp;
		},
		// 确定删除
		async confirmDelete() {
			if (this.apiOpt?.del) {
				const query = this.getDelQuery();
				const { data } = await this.apiOpt.del(query);
				this.handleSuccess(data);
			} else {
				console.log("未定义confirmDelete方法");
			}
		},
		getDelQuery() {
			return { idList: this.temp.id };
		},
		// 确定修改
		async confirmUpdate() {
			if (this.apiOpt?.update) {
				const query = this.getUpdateQuery();
				this.handleLoading = true;
				const { data } = await this.apiOpt.update(query);
				this.handleSuccess(data);
			} else {
				console.log("未定义confirmUpdate方法");
			}
		},
		getUpdateQuery() {
			return this.temp;
		},
		// 增删改成功
		handleSuccess({ ok }) {
			this.handleLoading = false;
			if (ok) {
				ElMessage.success("操作成功");
				this.dialogVisible = false;
				this.getTableData();
			} else {
				ElMessage.warning("操作失败");
			}
		},
		getTableDataNormalSuccess({ ok, data, count }) {
			this.tableLoading = false;
			if (ok) {
				this.tableData = data;
				this.total = count;
			} else {
				this.tableData = [];
				this.total = 0;
			}
		},
		// 页码
		handleCurrentChange(pageIndex) {
			this.tableQuery.pageIndex = pageIndex;
			this.getTableData();
		},
		// 单页数据量
		handleSizeChange(pageSize) {
			this.tableQuery.pageSize = pageSize;
			this.getTableData();
		},
		resetTemp() {
			this.$refs.formRef?.resetFields();
			this.temp = {};
		},
		reset() {
			this.tableQuery = {
				pageIndex: 1,
				pageSize: 20
			};
			this.getTableData();
		},
		async handleImport() {
			if (this.apiOpt?.import) {
				const file = await selectLocalFile(fileType.xlsx);
				const query = this.getImportQuery(file);
				this.handleLoading = true;
				const { data } = await this.apiOpt.import(obj2Formdata(query), { responseType: "blob" });
				this.handleImportSuccess(data);
			} else {
				console.log("未定义handleImport方法");
			}
		},
		// 上传接口调用成功
		handleImportSuccess(res) {
			this.handleLoading = false;
			const type = typeCheck(res);
			switch (true) {
				case type === "[object Object]":
					this.handleImportSomeSuccess(res);
					break;
				case type === "[object Blob]" && res.type.includes("json"):
					{
						const reader = new FileReader();
						reader.readAsText(res, "utf-8");
						reader.onload = () => {
							this.handleImportSomeSuccess(JSON.parse(reader.result));
						};
					}
					break;
				case type === "[object Blob]":
					ElMessageBox.alert("部分上传成功，请修改失败的部分重新上传", "系统提示", { autofocus: false, type: "warning" });
					downloadFile(res, "导入失败部分.xlsx");
					break;
				default:
					break;
			}
		},
		// 上传内容部分成功
		handleImportSomeSuccess(res) {
			const { ok, data } = res;
			if (ok) {
				const { errorCount } = data || {};
				if (!errorCount) {
					// 全部成功，没有失败
					this.handleSuccess(res);
				} else {
					// 部分成功，对失败部分处理成表格
					ElMessageBox.alert("部分上传成功，请修改失败的部分重新上传", "系统提示", { autofocus: false, type: "warning" });
					this.handleImportError(res);
				}
			}
		},
		// 上传内容部分失败处理
		handleImportError() {
			console.log("未定义handleImportError方法");
		},
		getImportQuery(file) {
			return { file };
		},
		// 导出
		async handleDownload() {
			if (this.apiOpt?.download) {
				this.handleLoading = true;
				const query = this.getDownloadQuery();
				const { data } = await this.apiOpt.download(query, {
					responseType: "blob"
				});
				this.handleLoading = false;
				downloadFile(data, `${this.fileName || Date.now()}.xlsx`);
			} else {
				console.log("未定义handleDownload方法");
			}
		},
		getDownloadQuery() {
			return null;
		},
		async handleTemplate() {
			//
		},
		fetchData() {}
	}
};
