import { ref as k, watch as Q, resolveDirective as ue, withDirectives as q, openBlock as m, createElementBlock as L, normalizeStyle as ke, createVNode as T, unref as g, mergeProps as De, createSlots as Ee, withCtx as D, renderSlot as z, createCommentVNode as I, createTextVNode as ee, createBlock as V, normalizeProps as xe, guardReactiveProps as Ie, toDisplayString as de, createElementVNode as j, vShow as he, computed as Ve, isRef as $e, onMounted as fe, withKeys as Ne, Fragment as pe, renderList as ge, normalizeClass as te } from "vue";
import { ElTable as ae, ElCheckbox as W, ElButton as _e, ElTableColumn as G, ElEmpty as me, ElPagination as Le, ElInputNumber as Te, ElInput as Be, ElIcon as le, ElSelect as Oe, ElOption as ze, ElMessageBox as J, ElMessage as ne } from "element-plus";
const Re = /* @__PURE__ */ j("i", null, null, -1), Ae = {
  key: 0,
  class: "flex al-center p-y-8 m-b-8"
}, je = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28"
}, Fe = /* @__PURE__ */ j("i", null, null, -1), Me = { class: "flex al-center" }, Ue = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28 m-t-24"
}, Qe = { class: "m-t-24" }, ye = {
  __name: "index",
  props: {
    tableQuery: { type: Object, default: () => ({ pageIndex: 1, pageSize: 20 }) },
    data: Array,
    summaryData: Array,
    total: Number,
    prop: {
      type: Object,
      default: () => {
      }
    },
    height: { type: String || Number, default: "calc(100% - 500px)" },
    showIndex: { type: Boolean, default: !1 },
    // 是否显示序号列
    showSelect: { type: Boolean, default: !1 },
    // 是否显示checkbox
    selectDisabled: Function,
    // 行选项checkbox禁用条件
    headSelect: { type: Boolean, default: !1 },
    hideDftCheckAll: { type: Boolean, default: !0 },
    showP: {
      // 是否显示页码
      type: Boolean,
      default: !0
    },
    showBatchDel: { type: Boolean, default: !1 },
    // 是否显示批量删除
    loading: { type: Boolean, default: !1 },
    customEmpty: { type: Boolean, default: !0 }
    // 是否显示自定义空数据
  },
  emits: ["handleSizeChange", "handleCurrentChange", "handleBatchDel", "handleSeleted"],
  setup(e, { expose: a, emit: l }) {
    const t = e, o = k();
    Q(
      () => [t.tableQuery],
      () => {
        var r;
        (r = o.value) == null || r.setScrollTop(0);
      }
    );
    const n = k([]);
    function s(r) {
      var p, b, v;
      n.value = r, h.value = r.length > 0 && r.length < ((p = t.data) == null ? void 0 : p.length), S.value = ((b = t.data) == null ? void 0 : b.length) > 0 && r.length === ((v = t.data) == null ? void 0 : v.length), l("handleSeleted", n.value);
    }
    function i() {
      l("handleBatchDel", n.value);
    }
    function u(r, p) {
      if (p.rowIndex)
        r = p.rowIndex;
      else if (p.rowIndex === !1)
        return "";
      const { pageIndex: b = 1, pageSize: v = 20 } = t.tableQuery;
      return r + 1 + (b - 1) * v;
    }
    const h = k(!1), S = k(!1);
    function c() {
      o.value.toggleAllSelection();
    }
    function y(r, p) {
      return t.selectDisabled && t.selectDisabled(p) && (r != null && r.isSelected(p)) && r.toggleRowSelection(p), r == null ? void 0 : r.isSelected(p);
    }
    return a({ handleCheckAll: c }), (r, p) => {
      var v, $, E, B;
      const b = ue("loading");
      return q((m(), L("div", {
        class: "zn-table-content",
        style: ke({ height: e.height })
      }, [
        T(g(ae), De({
          ref_key: "tableRef",
          ref: o,
          class: ["flex-1", { "hide-checkAll": e.hideDftCheckAll && !e.headSelect }],
          data: e.data,
          onSelectionChange: s
        }, { ...r.$attrs, ...e.prop }), Ee({
          append: D(() => {
            var f;
            return [
              z(r.$slots, "append"),
              (f = e.data) != null && f.length && e.showBatchDel ? (m(), L("div", Ae, [
                e.showSelect ? (m(), L("div", je, [
                  T(g(W), {
                    "model-value": S.value,
                    indeterminate: h.value,
                    class: "table-check-all",
                    onChange: c
                  }, null, 8, ["model-value", "indeterminate"])
                ])) : I("", !0),
                z(r.$slots, "batch-action", { selection: n.value }, () => {
                  var x;
                  return [
                    T(g(_e), {
                      disabled: !((x = n.value) != null && x.length),
                      plain: "",
                      type: "danger",
                      onClick: i
                    }, {
                      default: D(() => [
                        ee("批量删除")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                })
              ])) : I("", !0)
            ];
          }),
          default: D(() => [
            e.showSelect ? (m(), V(g(G), {
              key: 0,
              type: "selection",
              width: "55",
              align: "center"
            }, {
              header: D(() => [
                Re
              ]),
              default: D((f) => [
                z(r.$slots, "select", xe(Ie(f)), () => [
                  T(g(W), {
                    disabled: e.selectDisabled && e.selectDisabled(f.row),
                    "model-value": y(f.store, f.row),
                    onChange: (x) => f.store.toggleRowSelection(f.row)
                  }, null, 8, ["disabled", "model-value", "onChange"])
                ])
              ]),
              _: 3
            })) : I("", !0),
            e.showIndex ? (m(), V(g(G), {
              key: 1,
              label: "序号",
              type: "index",
              align: "center",
              width: "70"
            }, {
              default: D(({ $index: f, row: x }) => [
                ee(de(u(f, x)), 1)
              ]),
              _: 1
            })) : I("", !0),
            z(r.$slots, "default")
          ]),
          _: 2
        }, [
          e.customEmpty ? {
            name: "empty",
            fn: D(() => [
              j("div", null, [
                e.loading ? I("", !0) : (m(), V(g(me), {
                  key: 0,
                  style: { width: "100%", height: "100%" }
                }))
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["class", "data"]),
        (v = e.summaryData) != null && v.length ? (m(), V(g(ae), {
          key: 0,
          data: e.summaryData,
          "show-header": !1
        }, {
          empty: D(() => [
            Fe
          ]),
          default: D(() => [
            e.showSelect ? (m(), V(g(G), {
              key: 0,
              width: "55"
            })) : I("", !0),
            e.showIndex ? (m(), V(g(G), {
              key: 1,
              width: "60"
            })) : I("", !0),
            z(r.$slots, "summary-columns", {}, () => [
              z(r.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["data"])) : I("", !0),
        q(j("div", Me, [
          e.showSelect && !e.headSelect && (e.hideDftCheckAll && !e.showBatchDel || r.$slots.footer) ? (m(), L("div", Ue, [
            T(g(W), {
              "model-value": S.value,
              indeterminate: h.value,
              class: "table-check-all",
              onChange: c
            }, null, 8, ["model-value", "indeterminate"])
          ])) : I("", !0),
          j("div", Qe, [
            z(r.$slots, "footer", { selection: n.value })
          ]),
          e.showP ? (m(), V(g(Le), {
            key: 1,
            class: "table-pagination m-t-24",
            currentPage: ($ = e.tableQuery) == null ? void 0 : $.pageIndex,
            "page-size": (E = e.tableQuery) == null ? void 0 : E.pageSize,
            "page-sizes": [20, 30, 50, 100, 200],
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total ?? 0,
            onSizeChange: p[0] || (p[0] = (f) => l("handleSizeChange", f)),
            onCurrentChange: p[1] || (p[1] = (f) => l("handleCurrentChange", f))
          }, null, 8, ["currentPage", "page-size", "total"])) : I("", !0)
        ], 512), [
          [he, (B = e.data) == null ? void 0 : B.length]
        ])
      ], 4)), [
        [b, e.loading]
      ]);
    };
  }
};
const Pe = {
  __name: "index",
  props: ["modelValue"],
  emits: ["update:modelValue", "change", "blur"],
  setup(e, { emit: a }) {
    const l = e, t = Ve({
      get() {
        return l.modelValue;
      },
      set(n) {
        l.modelValue !== n && (a("update:modelValue", n), a("change", n));
      }
    });
    function o({ target: { value: n } }) {
      const s = Number(n);
      t.value = s, a("blur", s);
    }
    return (n, s) => (m(), V(g(Te), {
      modelValue: g(t),
      "onUpdate:modelValue": s[0] || (s[0] = (i) => $e(t) ? t.value = i : null),
      class: "el-input-number",
      controls: !1,
      onBlur: o
    }, null, 8, ["modelValue"]));
  }
};
/*! Element Plus Icons Vue v2.0.10 */
var be = (e, a) => {
  let l = e.__vccOpts || e;
  for (let [t, o] of a)
    l[t] = o;
  return l;
}, Ge = {
  name: "Loading"
}, Ze = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qe = /* @__PURE__ */ j("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Ke = [
  qe
];
function He(e, a, l, t, o, n) {
  return m(), L("svg", Ze, Ke);
}
var We = /* @__PURE__ */ be(Ge, [["render", He], ["__file", "loading.vue"]]), Je = {
  name: "Search"
}, Xe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ye = /* @__PURE__ */ j("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), et = [
  Ye
];
function tt(e, a, l, t, o, n) {
  return m(), L("svg", Xe, et);
}
var at = /* @__PURE__ */ be(Je, [["render", tt], ["__file", "search.vue"]]);
const lt = (e, a) => {
  const l = e.__vccOpts || e;
  for (const [t, o] of a)
    l[t] = o;
  return l;
}, nt = { class: "list-scroll-search" }, ot = {
  key: 0,
  class: "list"
}, st = ["onClick"], it = {
  __name: "index",
  props: {
    api: Promise,
    searchKey: String,
    placeholder: String,
    formatDataFc: Function,
    defaultParams: Object,
    modelValue: String,
    label: String,
    defaultFirst: {
      type: Boolean,
      default: !1
    },
    option: {
      type: Object,
      default: () => ({
        key: "id",
        label: "label"
      })
    }
  },
  emits: ["update:modelValue", "change", "update:label"],
  setup(e, { expose: a, emit: l }) {
    const t = e, o = k([]), n = k({ pageIndex: 1, pageSize: 20 }), s = k();
    let i = !1;
    const u = k(!1), h = k(!1);
    fe(() => {
      h.value = !0, c();
    }), Q(
      () => JSON.stringify(t.defaultParams),
      () => {
        S();
      }
    );
    function S() {
      o.value = [], s.value = void 0, n.value.pageIndex = 1, c();
    }
    async function c() {
      const { option: b, api: v, searchKey: $, formatDataFc: E } = t;
      u.value = !0;
      const B = {
        ...t.defaultParams,
        ...n.value,
        [$]: s.value
      }, { data: f } = await v(B);
      u.value = !1;
      const { ok: x, data: N } = f ?? {};
      if (x && (N != null && N.length)) {
        let d = N.filter((w) => o.value.every((C) => C[b.key] !== w[b.key]));
        E && (d = E(d)), o.value.push(...d), t.modelValue ? o.value.find((C) => C[t.option.key] === t.modelValue) || y() : !t.modelValue && t.defaultFirst && p(0), (N == null ? void 0 : N.length) < n.value.pageSize && (i = !0);
      } else
        i = !0;
      o.value.length || p(-1);
    }
    function y() {
      !i && !u.value && (n.value.pageIndex++, c());
    }
    function r() {
      n.value.pageIndex = 1, o.value = [], c();
    }
    function p(b) {
      let v, $;
      b !== -1 && (v = o.value[b][option.key], $ = o.value[b][option.label]), l("update:modelValue", v), l("update:label", $), l("change", v);
    }
    return a({
      handleSearch: r
    }), (b, v) => {
      const $ = ue("infinite-scroll");
      return m(), L("div", nt, [
        T(g(Be), {
          placeholder: e.placeholder,
          modelValue: s.value,
          "onUpdate:modelValue": v[0] || (v[0] = (E) => s.value = E),
          clearable: "",
          onClear: r,
          onKeyup: Ne(r, ["enter"])
        }, {
          suffix: D(() => [
            T(g(le), {
              class: "pointer",
              onClick: r
            }, {
              default: D(() => [
                T(g(at))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["placeholder", "modelValue", "onKeyup"]),
        h.value ? q((m(), L("ul", ot, [
          (m(!0), L(pe, null, ge(o.value, (E, B) => (m(), L("li", {
            key: B,
            class: te({ active: e.modelValue === E[e.option.key] }),
            onClick: (f) => p(B)
          }, de(E[e.option.label]), 11, st))), 128))
        ])), [
          [$, y]
        ]) : I("", !0),
        u.value ? (m(), V(g(le), {
          key: 1,
          class: te({ "is-loading": u.value && !g(i) })
        }, {
          default: D(() => [
            T(g(We))
          ]),
          _: 1
        }, 8, ["class"])) : I("", !0),
        q(T(g(me), { style: { width: "100%" } }, null, 512), [
          [he, !u.value && !o.value.length]
        ])
      ]);
    };
  }
}, ve = /* @__PURE__ */ lt(it, [["__scopeId", "data-v-078657fe"]]), rt = {
  __name: "index",
  props: {
    loading: Boolean,
    diffBottom: {
      type: Number,
      default: 20
    }
  },
  emits: ["loadMore", "visible-change", "remote-method"],
  setup(e, { emit: a }) {
    const l = e, t = k();
    let o, n, s;
    function i(c) {
      (!c || s !== c) && (n = void 0, o == null || o.scrollTo({ top: 0 })), s = c, a("remote-method", c);
    }
    function u(c) {
      a("visible-change", c), c ? h() : o == null || o.removeEventListener("scroll", S);
    }
    function h() {
      setTimeout(() => {
        o = t.value.scrollbar.wrapRef;
        const c = o.querySelector(".selected");
        let y = 0;
        c && (y = c.offsetTop - (o.offsetHeight - 34)), o == null || o.scrollTo({ top: y }), n = void 0, o == null || o.addEventListener("scroll", S);
      }, 0);
    }
    function S({ target: { offsetHeight: c, scrollHeight: y, scrollTop: r } }) {
      c + r > y - l.diffBottom && !l.loading && (n === void 0 || n && n < r) && (n = r, a("loadMore"));
    }
    return (c, y) => (m(), V(g(Oe), {
      ref_key: "selectRef",
      ref: t,
      "remote-method": i,
      onVisibleChange: u
    }, {
      default: D(() => [
        z(c.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}, Se = {
  __name: "index.v2",
  props: {
    api: Promise,
    searchKey: {
      // 检索键值
      type: String,
      default: "name"
    },
    formatSearchKey: Function,
    // 格式化搜索参数
    formatDataFc: Function,
    // 格式化数据的方法
    defaultParams: Object,
    // 默认参数
    modelValue: [String, Array],
    allowCreate: Boolean,
    init: {
      // 是否初始化第一页数据
      type: Boolean,
      default: !0
    },
    defaultFirst: {
      // 是否默认选中第一项
      type: Boolean,
      default: !1
    },
    option: {
      // option   value【key】及label【label】 的键值
      type: Object,
      default: () => ({
        key: "id",
        label: "name"
      })
    },
    insertList: {
      // 回显时，避免浪费接口资源，直接插入要回显的数据
      type: Array,
      default: () => []
    }
  },
  emits: [
    "update:modelValue",
    // 只给选中项的value值
    "change",
    "update:data",
    // 给选中项的全部json对象
    "visibleChange",
    "clear"
  ],
  setup(e, { expose: a, emit: l }) {
    const t = e, o = k(null);
    function n(d) {
      if (N(t.modelValue))
        o.value = s.value.filter((w) => t.modelValue.includes(w[t.option.key]));
      else if (t.modelValue) {
        const w = s.value.find((C) => C[t.option.key] === d);
        !w && t.allowCreate ? o.value = t.modelValue : o.value = w;
      } else
        o.value = null;
      d !== t.modelValue && l("change", o.value);
    }
    const s = k([]);
    let i = [], u = [], h = !1;
    const S = k({ pageIndex: 1, pageSize: 20 }), c = k();
    let y = !1;
    const r = k(!1);
    fe(() => {
      t.init && b();
    }), Q(
      () => JSON.stringify(t.defaultParams),
      () => {
        p();
      }
    ), Q(
      () => t.insertList,
      () => {
        f();
      }
    ), Q(() => t.modelValue, n);
    function p() {
      s.value = [], i = [], c.value = void 0, S.value.pageIndex = 1, b();
    }
    async function b() {
      const { option: d, api: w, searchKey: C, formatSearchKey: P, formatDataFc: Y, allowCreate: Ft } = t;
      if (!t.api)
        throw "scroll-select-v2 组件 未定义api";
      r.value = !0;
      let H = {
        ...t.defaultParams,
        ...S.value,
        [C]: c.value
      };
      P && (H = { ...H, ...P(c.value) });
      const { data: we } = await w(H);
      r.value = !1;
      const { ok: Ce, data: O } = we ?? {};
      if (Ce) {
        let R = (O == null ? void 0 : O.filter((A) => !s.value.find((M) => M[d.key] === A[d.key]))) || [];
        if (Y && (R = Y(R)), c.value)
          y = ~~(O == null ? void 0 : O.length) < S.value.pageSize, u.push(...R), s.value = [...u];
        else {
          if (R != null && R.length && i.push(...R), f(), h = y = ~~(O == null ? void 0 : O.length) < S.value.pageSize, t.modelValue)
            if (N(t.modelValue)) {
              const A = s.value.filter((M) => t.modelValue.includes(M[t.option.key]));
              A.length < t.modelValue.length && v(), x(A);
            } else {
              const A = s.value.find((M) => M[d.key] === t.modelValue);
              A ? x(A) : v();
            }
          !t.modelValue && t.defaultFirst && x(s.value[0]);
        }
      } else
        y = !0;
    }
    function v() {
      !y && !r.value && (S.value.pageIndex++, b());
    }
    function $(d) {
      d ? (u = [], c.value = d, S.value.pageIndex = 1, s.value = [], b()) : E(!1);
    }
    function E(d) {
      t.modelValue || (d ? (f(), y = h) : c.value = void 0), d || (c.value = void 0, i.push(...(u == null ? void 0 : u.filter((w) => !i.find((C) => C[option.key] === w[option.key]))) || []), f(), y = h), l("visibleChange", d);
    }
    function B() {
      l("clear"), c.value = void 0, S.value.pageIndex = 1, f(), y = h;
    }
    function f() {
      const d = (i == null ? void 0 : i.filter((w) => !t.insertList.find((C) => C[option.key] === w[option.key]))) || [];
      s.value = [...t.insertList, ...d];
    }
    function x(d) {
      let w = d == null ? void 0 : d[t.option.key];
      N(d) && (w = d.map((C) => C[t.option.key])), o.value = d, l("update:modelValue", w), l("update:data", d), w !== t.modelValue && l("change", d);
    }
    function N(d) {
      return Object.prototype.toString.call(d) === "[object Array]";
    }
    return a({ reset: p, initData: f }), (d, w) => (m(), V(rt, {
      loading: r.value,
      "model-value": o.value,
      "loading-text": "加载中...",
      "no-match-text": "未查询到数据",
      "no-data-text": "未查询到数据",
      clearable: "",
      filterable: "",
      "fit-input-width": "",
      remote: "",
      "reserve-keyword": "",
      "remote-show-suffix": "",
      allowCreate: e.allowCreate,
      onRemoteMethod: $,
      onLoadMore: v,
      onClear: B,
      onVisibleChange: E,
      onChange: x,
      "value-key": e.option.key
    }, {
      default: D(() => [
        (m(!0), L(pe, null, ge(s.value, (C) => (m(), V(g(ze), {
          key: C[e.option.key],
          label: e.option.label.split(",").map((P) => C[P]).join("-"),
          value: C
        }, null, 8, ["label", "value"]))), 128))
      ]),
      _: 1
    }, 8, ["loading", "model-value", "allowCreate", "value-key"]));
  }
};
const ct = {
  零: 0,
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9
}, oe = {
  十: { value: 10, secUnit: !1 },
  百: { value: 100, secUnit: !1 },
  千: { value: 1e3, secUnit: !1 },
  万: { value: 1e4, secUnit: !0 },
  亿: { value: 1e8, secUnit: !0 }
};
function se(e) {
  for (var a = 0, l = 0, t = 0, o = !1, n = e.split(""), s = 0; s < n.length; s++) {
    var i = ct[n[s]];
    if (typeof i < "u")
      t = i, s === n.length - 1 && (l += t);
    else {
      var u = oe[n[s]].value;
      o = oe[n[s]].secUnit, o ? (l = (l + t) * u, a += l, l = 0) : l += t * u, t = 0;
    }
  }
  return a + l;
}
const Qt = (e) => new RegExp(`<${e}[^>]*>[\\s\\S]*?</[^>]*${e}>`, "i"), ut = /^[\u4e00-\u9fa5]+$/, dt = /^1[3-9]\d{9}$/, ht = /^[0-9]{4}-\d{7}$/, ft = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, pt = /^https?:\/\/.{1,}\..{1,}$/i, gt = /^[0-9]+$/, mt = /^\d+\.*[\d+]{0,}$/, yt = /[\u4E00-\u9FFF]+/g, bt = /^[a-z0-9]+$/i, Pt = /^-[0-9]+$/i, vt = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, St = /^[a-zA-Z0-9]{10,20}$/, wt = /^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{6,20}$/, Ct = /^[0-9a-zA-Z]{4}$/, kt = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g, Dt = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/, Z = /[一二三四五六七八九十]{1,}/, Gt = /<tr[^>]*>[^\{^\}]*?\[{1}[\s\S^\{^\}]*?\]{1}[^\{^\}]*?<\/[^>]*tr>/gi, Zt = /<td[^>]*>[\s\S]*?<\/[^>]*td>/gi, qt = (e) => typeof e == "string", Et = (e) => dt.test(e), xt = (e) => ht.test(e), It = (e) => ft.test(e), Vt = (e) => pt.test(e), $t = (e) => mt.test(e), Nt = (e) => gt.test(e), _t = (e) => bt.test(e), Kt = (e) => yt.test(e), Lt = (e) => vt.test(e), Ht = (e) => St.test(e), Tt = (e) => wt.test(e), Bt = (e) => Ct.test(e), Ot = (e) => kt.test(e), zt = (e) => Dt.test(e), F = (e) => ut.test(e), Rt = (e) => {
  const a = new FormData();
  return Object.keys(e).forEach((l) => {
    e[l] !== null && a.append(l, e[l]);
  }), a;
}, Wt = (e, a = !0) => {
  const l = document.createElement("a");
  l.href = e, a && (l.target = "_blank"), l.click();
}, Jt = (e) => {
  const [a, ...l] = e.split(".").reverse();
  return [l.reverse().reduce((t, o) => t + o, ""), a];
}, Xt = (e) => {
  switch (!0) {
    case e / 1024 < 1024:
      return `${(e / 1024).toFixed(2)}kb`;
    default:
      return `${(e / 1024 / 1024).toFixed(2)}Mb`;
  }
}, K = (e) => Object.prototype.toString.call(e), ie = (e, a, l = !1) => {
  if (Object.prototype.toString.call(e) !== "[object Array]")
    return [];
  const t = a == null ? void 0 : a.split(",");
  function o(n, s) {
    var u, h;
    switch (!0) {
      case (!!((u = n == null ? void 0 : n.match(Z)) != null && u.length) && !!((h = s == null ? void 0 : s.match(Z)) != null && h.length)):
        return se(n.match(Z)[0]) - se(s == null ? void 0 : s.match(Z)[0]);
      case (F(n) && F(s)):
      case (F(n) && !F(s)):
        return -1;
      case (!F(n) && F(s)):
        return 1;
    }
    let i = 0;
    return (n == null ? void 0 : n.length) !== (s == null ? void 0 : s.length) ? i += (n == null ? void 0 : n.length) - (s == null ? void 0 : s.length) : i += (n == null ? void 0 : n.localeCompare(s)) + ((n - s) * 2 || 0), i;
  }
  return e.sort((n, s) => {
    let i = 0;
    if (t)
      t == null || t.forEach((u) => {
        var h, S;
        try {
          const c = (h = n == null ? void 0 : n[u]) == null ? void 0 : h.toString().trim(), y = (S = s == null ? void 0 : s[u]) == null ? void 0 : S.toString().trim();
          i += o(c, y);
        } catch (c) {
          console.log(c);
        }
      });
    else {
      const u = n == null ? void 0 : n.toString().trim(), h = s == null ? void 0 : s.toString().trim();
      i += o(u, h);
    }
    return i * (l ? -1 : 1);
  });
}, Yt = (e, a, l = "children") => ie(e, a).map(({ [l]: t, ...o }) => ({ ...o, children: ie(t, a) })), At = (e) => new Promise((a) => {
  const l = document.createElement("input");
  e && (l.accept = e), l.type = "file", l.onchange = (t) => {
    const o = t.target.files[0];
    t.target.value = null, a(o);
  }, l.click();
}), re = (e, a, l = "application/vnd.ms-excel;charset=utf-8") => {
  let t;
  e instanceof Blob ? t = e : t = new Blob([e], { type: l });
  const o = window.URL.createObjectURL(t), n = document.createElement("a");
  n.download = a, n.href = o, n.click(), n.remove(), window.URL.revokeObjectURL(o);
}, X = (e, a = 2) => {
  switch (K(e)) {
    case "[object Number]":
      return Math.round(e * Math.pow(10, a)) / Math.pow(10, a);
    default:
      return e ?? 0;
  }
}, ea = (e) => {
  const { columns: a, data: l } = e, t = [];
  return a.forEach((o, n) => {
    if (n === 0) {
      t[n] = "合计";
      return;
    }
    const s = l == null ? void 0 : l.map((i) => Number(i[o.property] || i[o] || 0));
    s.every((i) => Number.isNaN(i)) ? t[n] = "" : t[n] = `${s.reduce((i, u) => {
      const h = Number(u);
      return Number.isNaN(h) ? i : X(i + u);
    }, 0)}`;
  }), t;
}, ta = (e) => {
  const { columns: a, data: l } = e, t = [];
  return a.forEach((o, n) => {
    if (n === 0) {
      t[n] = "";
      return;
    }
    if (n === 1) {
      t[n] = "合计";
      return;
    }
    const s = l.map((i) => Number(i[o.property] || 0));
    s.every((i) => Number.isNaN(i)) ? t[n] = "" : t[n] = `${s.reduce((i, u) => {
      const h = Number(u);
      return Number.isNaN(h) ? i : X(i + u);
    }, 0)}`;
  }), t;
}, aa = (e, a, l) => {
  const t = {
    [l]: "合计"
  };
  return e.forEach((o) => {
    a.forEach((n) => {
      t[n] = X((t[n] || 0) + Number(o[n] || 0));
    });
  }), t;
}, _ = (e, a = "请正确填写") => ({
  validator: (l, t, o) => {
    let n = !0;
    switch (K(e)) {
      case "[object Function]":
        n = e(t);
        break;
      case "[object Array]":
        n = e.some((i) => i(t));
        break;
      case "[object Object]":
        n = Object.values(e).every((i) => i(t));
        break;
    }
    return !t || t === 0 || n ? o() : o(a);
  },
  trigger: "blur"
}), la = {
  url: _(Vt),
  phone: _([Et, xt]),
  email: _(It),
  double: _($t),
  int: _(Nt),
  intAndLetter: _(_t),
  idCard: _(Lt),
  psw: _(Tt, "密码必须包含大小写字母、数字和特殊字符，长度为6-20位"),
  captcha: _(Bt),
  socialCreditCode: _(Ot),
  carNumber: _(zt)
}, na = {
  required: !0,
  message: "必填项",
  validator: function(e, a, l) {
    const t = K(a);
    let o = !0;
    switch (t) {
      case "[object String]":
        a != null && a.trim() || (o = !1);
        break;
      case "[object Number]":
        break;
      case "[object Array]":
        o = !!(a != null && a.length);
        break;
      default:
        o = !!a;
        break;
    }
    return o ? l() : l(this.message);
  },
  trigger: "blur"
};
const jt = {
  image: "image/*",
  xlsx: ".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  video: "video/*",
  all: "*"
}, U = {
  create: "create",
  update: "update"
}, oa = {
  data() {
    return {
      tableData: [],
      tableQuery: {
        pageIndex: 1,
        pageSize: 20
      },
      temp: {},
      dialogVisible: !1,
      total: 0,
      tableLoading: !1,
      handleLoading: !1,
      dialogTypeOpt: U,
      dialogType: "",
      dialogTitleMap: {
        [U.create]: "新增",
        [U.update]: "修改"
      }
    };
  },
  created() {
    this.fetchData(), this.getTableData();
  },
  methods: {
    handleSearch() {
      this.tableQuery.pageIndex = 1, this.total = 0, this.getTableData();
    },
    // 增
    handleCreate() {
      this.resetTemp(), this.dialogType = U.create, this.dialogVisible = !0;
    },
    // 删
    handleDelete(e, a) {
      this.temp = e, this.showConfirm(a || this.confirmDelete);
    },
    // 批量删除
    handleBatchDel(e) {
      this.showConfirm(e || this.confirmBatchDelete);
    },
    confirmBatchDelete() {
      console.log("未定义confirmBatchDelete方法");
    },
    showConfirm(e) {
      J.confirm("是否确定此操作？", "系统提示", {
        type: "warning",
        autofocus: !1
      }).then(e).catch();
    },
    // 改之前摇
    async handleUpdateBefore({ id: e }) {
      var a;
      if ((a = this.apiOpt) != null && a.detail) {
        const l = this.getDetailQuery(e), {
          data: { ok: t, data: o }
        } = await this.apiOpt.detail(l);
        t && this.handleUpdate(o, this.next);
      } else
        console.log("未定义handleUpdateBefore方法");
    },
    getDetailQuery(e) {
      return { id: e };
    },
    // 改
    handleUpdate(e, a) {
      this.resetTemp(), this.temp = { ...e }, a && a(e), this.dialogType = U.update, this.dialogVisible = !0;
    },
    // 查
    async getTableData() {
      var e;
      if ((e = this.apiOpt) != null && e.list) {
        const a = this.getTableQuery();
        if (!a) {
          this.total = 0, this.tableData = [];
          return;
        }
        this.tableLoading = !0;
        const { data: l } = await this.apiOpt.list(a);
        this.tableLoading = !1, this.getTableDataNormalSuccess(l);
      } else
        console.log("未定义getTableData方法");
    },
    getTableQuery() {
      return this.tableQuery;
    },
    // 校验并操作
    handleConfirm() {
      var e;
      (e = this.$refs.formRef) == null || e.validate((a) => {
        if (a)
          switch (this.dialogType) {
            case "create":
              this.confirmCreate();
              break;
            case "update":
              this.confirmUpdate();
              break;
          }
        else
          console.warn(this.temp);
      });
    },
    // 确定新增
    async confirmCreate() {
      var e;
      if ((e = this.apiOpt) != null && e.create) {
        const a = this.getCreateQuery();
        this.handleLoading = !0;
        const { data: l } = await this.apiOpt.create(a);
        this.handleSuccess(l);
      } else
        console.log("未定义confirmCreate方法");
    },
    getCreateQuery() {
      return this.temp;
    },
    // 确定删除
    async confirmDelete() {
      var e;
      if ((e = this.apiOpt) != null && e.del) {
        const a = this.getDelQuery(), { data: l } = await this.apiOpt.del(a);
        this.handleSuccess(l);
      } else
        console.log("未定义confirmDelete方法");
    },
    getDelQuery() {
      return { idList: this.temp.id };
    },
    // 确定修改
    async confirmUpdate() {
      var e;
      if ((e = this.apiOpt) != null && e.update) {
        const a = this.getUpdateQuery();
        this.handleLoading = !0;
        const { data: l } = await this.apiOpt.update(a);
        this.handleSuccess(l);
      } else
        console.log("未定义confirmUpdate方法");
    },
    getUpdateQuery() {
      return this.temp;
    },
    // 增删改成功
    handleSuccess({ ok: e }) {
      this.handleLoading = !1, e ? (ne.success("操作成功"), this.dialogVisible = !1, this.getTableData()) : ne.warning("操作失败");
    },
    getTableDataNormalSuccess({ ok: e, data: a, count: l }) {
      this.tableLoading = !1, e ? (this.tableData = a, this.total = l) : (this.tableData = [], this.total = 0);
    },
    // 页码
    handleCurrentChange(e) {
      this.tableQuery.pageIndex = e, this.getTableData();
    },
    // 单页数据量
    handleSizeChange(e) {
      this.tableQuery.pageSize = e, this.getTableData();
    },
    resetTemp() {
      var e;
      (e = this.$refs.formRef) == null || e.resetFields(), this.temp = {};
    },
    reset() {
      this.tableQuery = {
        pageIndex: 1,
        pageSize: 20
      }, this.getTableData();
    },
    async handleImport() {
      var e;
      if ((e = this.apiOpt) != null && e.import) {
        const a = await At(jt.xlsx), l = this.getImportQuery(a);
        this.handleLoading = !0;
        const { data: t } = await this.apiOpt.import(Rt(l), { responseType: "blob" });
        this.handleImportSuccess(t);
      } else
        console.log("未定义handleImport方法");
    },
    // 上传接口调用成功
    handleImportSuccess(e) {
      this.handleLoading = !1;
      const a = K(e);
      switch (!0) {
        case a === "[object Object]":
          this.handleImportSomeSuccess(e);
          break;
        case (a === "[object Blob]" && e.type.includes("json")):
          {
            const l = new FileReader();
            l.readAsText(e, "utf-8"), l.onload = () => {
              this.handleImportSomeSuccess(JSON.parse(l.result));
            };
          }
          break;
        case a === "[object Blob]":
          J.alert("部分上传成功，请修改失败的部分重新上传", "系统提示", { autofocus: !1, type: "warning" }), re(e, "导入失败部分.xlsx");
          break;
      }
    },
    // 上传内容部分成功
    handleImportSomeSuccess(e) {
      const { ok: a, data: l } = e;
      if (a) {
        const { errorCount: t } = l || {};
        t ? (J.alert("部分上传成功，请修改失败的部分重新上传", "系统提示", { autofocus: !1, type: "warning" }), this.handleImportError(e)) : this.handleSuccess(e);
      }
    },
    // 上传内容部分失败处理
    handleImportError() {
      console.log("未定义handleImportError方法");
    },
    getImportQuery(e) {
      return { file: e };
    },
    // 导出
    async handleDownload() {
      var e;
      if ((e = this.apiOpt) != null && e.download) {
        this.handleLoading = !0;
        const a = this.getDownloadQuery(), { data: l } = await this.apiOpt.download(a, {
          responseType: "blob"
        });
        this.handleLoading = !1, re(l, `${this.fileName || Date.now()}.xlsx`);
      } else
        console.log("未定义handleDownload方法");
    },
    getDownloadQuery() {
      return null;
    },
    async handleTemplate() {
    },
    fetchData() {
    }
  }
}, ce = { VeTable: ye, VeInputNumber: Pe, VeListScrollSearch: ve, VeScrollSelect: Se }, sa = {
  VeTable: ye,
  VeListScrollSearch: ve,
  VeScrollSelect: Se,
  install(e) {
    for (const a in ce)
      e.component(a, ce[a]);
  }
};
export {
  St as REGBUSINESSLICENSE,
  Ct as REGCAPTCHA,
  Dt as REGCARNUMBER,
  ut as REGCH,
  Z as REGCHINESENUM,
  mt as REGDOUBLE,
  ft as REGEMAIL,
  vt as REGIDCARD,
  gt as REGINT,
  bt as REGINTANDLETTER,
  ht as REGLANDLINE,
  dt as REGMOBILE,
  wt as REGPSW,
  yt as REGRECHINESE,
  Pt as REGRENEGATIVE,
  Gt as REGTABLECYCLETR,
  pt as REGURL,
  kt as SOCIALCREDITCODE,
  sa as default,
  re as downloadFile,
  Jt as formatFileNameSuffix,
  Xt as formatFileSize,
  X as formatNumber,
  ta as getMoreSummaries,
  ea as getSummaries,
  aa as getSummaryDatas,
  Ht as isBusinessLicense,
  F as isCH,
  zt as isCarNumber,
  Kt as isChinese,
  Bt as isCpatcha,
  $t as isDouble,
  It as isEmail,
  Lt as isIdCard,
  Nt as isInt,
  _t as isIntAndLetter,
  xt as isLandLine,
  Et as isMobile,
  Tt as isPsw,
  Ot as isSocialCreditCode,
  qt as isStr,
  Vt as isUrl,
  Wt as jumpExternalChain,
  Rt as obj2Formdata,
  Yt as recursionSort,
  Qt as regTag,
  Zt as regTd,
  na as required,
  At as selectLocalFile,
  ie as sortFuc,
  oa as tableMixin,
  K as typeCheck,
  la as validatorFun
};
