import store from '@/store';
import { sortFuc } from '@/utils/utils';


/**
 * 获取字典详情子列表
 * @param {string} dictCode 母项code
 * @returns
 */
export async function getDictDetailByCode(dictCode) {
	let result = [];
	// 走redux
	const { dictMap } = store.state.common;
	if (dictMap[dictCode]) {
		return dictMap[dictCode];
	}
	// 走接口
	try {
		const { data: { ok, data }} = await globalRequest(API.commons.dictItemByCode, { dictCode, appId: "7cde0b257b7b4e0b92f22f74879536d6" });
		if (ok && data) {
			result = data.map(i => ({ ...i, parentCode: dictCode }));
			result = sortFuc(result, 'code');
			store.dispatch('common/setDictMap', { [dictCode]: result });
		} else {
			throw '';
		}
	} catch (error) {
		console.log(error);
	}

	return result;
}
