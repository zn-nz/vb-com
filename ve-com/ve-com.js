import { openBlock as C, createElementBlock as A, createElementVNode as P, ref as x, getCurrentInstance as st, inject as rt, computed as ge, nextTick as te, reactive as it, createApp as ct, toRefs as ut, h as Z, Transition as dt, withCtx as I, withDirectives as q, createVNode as O, vShow as me, isRef as Fe, watch as W, normalizeStyle as ft, unref as w, mergeProps as ht, createSlots as gt, renderSlot as j, createCommentVNode as L, createTextVNode as be, createBlock as N, normalizeProps as mt, guardReactiveProps as pt, toDisplayString as Pe, onMounted as Me, withKeys as vt, Fragment as Ue, renderList as Qe, normalizeClass as Se } from "vue";
import { ElTable as we, ElCheckbox as ie, ElButton as yt, ElTableColumn as X, ElEmpty as Ze, ElPagination as bt, ElInputNumber as St, ElInput as wt, ElIcon as Ce, ElSelect as Ct, ElOption as Et, ElMessageBox as ce, ElMessage as Ee } from "element-plus";
var xt = typeof global == "object" && global && global.Object === Object && global;
const Tt = xt;
var $t = typeof self == "object" && self && self.Object === Object && self, kt = Tt || $t || Function("return this")();
const Ge = kt;
var It = Ge.Symbol;
const ne = It;
var He = Object.prototype, Lt = He.hasOwnProperty, Nt = He.toString, G = ne ? ne.toStringTag : void 0;
function _t(e) {
  var t = Lt.call(e, G), n = e[G];
  try {
    e[G] = void 0;
    var a = !0;
  } catch {
  }
  var l = Nt.call(e);
  return a && (t ? e[G] = n : delete e[G]), l;
}
var Vt = Object.prototype, Dt = Vt.toString;
function Ot(e) {
  return Dt.call(e);
}
var At = "[object Null]", Bt = "[object Undefined]", xe = ne ? ne.toStringTag : void 0;
function jt(e) {
  return e == null ? e === void 0 ? Bt : At : xe && xe in Object(e) ? _t(e) : Ot(e);
}
function Rt(e) {
  return e != null && typeof e == "object";
}
var zt = "[object Symbol]";
function Ft(e) {
  return typeof e == "symbol" || Rt(e) && jt(e) == zt;
}
var Pt = /\s/;
function Mt(e) {
  for (var t = e.length; t-- && Pt.test(e.charAt(t)); )
    ;
  return t;
}
var Ut = /^\s+/;
function Qt(e) {
  return e && e.slice(0, Mt(e) + 1).replace(Ut, "");
}
function ae(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Te = 0 / 0, Zt = /^[-+]0x[0-9a-f]+$/i, Gt = /^0b[01]+$/i, Ht = /^0o[0-7]+$/i, Wt = parseInt;
function $e(e) {
  if (typeof e == "number")
    return e;
  if (Ft(e))
    return Te;
  if (ae(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ae(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Qt(e);
  var n = Gt.test(e);
  return n || Ht.test(e) ? Wt(e.slice(2), n ? 2 : 8) : Zt.test(e) ? Te : +e;
}
var qt = function() {
  return Ge.Date.now();
};
const ue = qt;
var Kt = "Expected a function", Jt = Math.max, Xt = Math.min;
function Yt(e, t, n) {
  var a, l, o, s, r, u, f = 0, v = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Kt);
  t = $e(t) || 0, ae(n) && (v = !!n.leading, d = "maxWait" in n, o = d ? Jt($e(n.maxWait) || 0, t) : o, g = "trailing" in n ? !!n.trailing : g);
  function i(y) {
    var m = a, S = l;
    return a = l = void 0, f = y, s = e.apply(S, m), s;
  }
  function c(y) {
    return f = y, r = setTimeout(T, t), v ? i(y) : s;
  }
  function h(y) {
    var m = y - u, S = y - f, E = t - m;
    return d ? Xt(E, o - S) : E;
  }
  function p(y) {
    var m = y - u, S = y - f;
    return u === void 0 || m >= t || m < 0 || d && S >= o;
  }
  function T() {
    var y = ue();
    if (p(y))
      return $(y);
    r = setTimeout(T, h(y));
  }
  function $(y) {
    return r = void 0, g && a ? i(y) : (a = l = void 0, s);
  }
  function _() {
    r !== void 0 && clearTimeout(r), f = 0, a = u = l = r = void 0;
  }
  function b() {
    return r === void 0 ? s : $(ue());
  }
  function k() {
    var y = ue(), m = p(y);
    if (a = arguments, l = this, u = y, m) {
      if (r === void 0)
        return c(u);
      if (d)
        return clearTimeout(r), r = setTimeout(T, t), i(u);
    }
    return r === void 0 && (r = setTimeout(T, t)), s;
  }
  return k.cancel = _, k.flush = b, k;
}
var en = "Expected a function";
function ke(e, t, n) {
  var a = !0, l = !0;
  if (typeof e != "function")
    throw new TypeError(en);
  return ae(n) && (a = "leading" in n ? !!n.leading : a, l = "trailing" in n ? !!n.trailing : l), Yt(e, t, {
    leading: a,
    maxWait: t,
    trailing: l
  });
}
var Ie;
const K = typeof window < "u";
K && ((Ie = window == null ? void 0 : window.navigator) != null && Ie.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
const Le = (e) => {
  let t = 0, n = e;
  for (; n; )
    t += n.offsetTop, n = n.offsetParent;
  return t;
}, tn = (e, t) => Math.abs(Le(e) - Le(t));
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const nn = (e) => typeof e == "function", We = (e) => typeof e == "string", qe = (e) => e !== null && typeof e == "object", Ke = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, an = /-(\w)/g, ln = Ke((e) => e.replace(an, (t, n) => n ? n.toUpperCase() : "")), on = /\B([A-Z])/g, sn = Ke((e) => e.replace(on, "-$1").toLowerCase());
class rn extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function cn(e, t) {
  throw new rn(`[${e}] ${t}`);
}
const Je = (e = "") => e.split(" ").filter((t) => !!t.trim()), Ne = (e, t) => {
  !e || !t.trim() || e.classList.add(...Je(t));
}, le = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Je(t));
}, U = (e, t) => {
  var n;
  if (!K || !e || !t)
    return "";
  let a = ln(t);
  a === "float" && (a = "cssFloat");
  try {
    const l = e.style[a];
    if (l)
      return l;
    const o = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return o ? o[a] : "";
  } catch {
    return e.style[a];
  }
}, un = (e, t) => {
  if (!K)
    return !1;
  const n = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(t)], a = U(e, n);
  return ["scroll", "auto", "overlay"].some((l) => a.includes(l));
}, dn = (e, t) => {
  if (!K)
    return;
  let n = e;
  for (; n; ) {
    if ([window, document, document.documentElement].includes(n))
      return window;
    if (un(n, t))
      return n;
    n = n.parentNode;
  }
  return n;
};
/*! Element Plus Icons Vue v2.0.10 */
var Xe = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [a, l] of t)
    n[a] = l;
  return n;
}, fn = {
  name: "Loading"
}, hn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gn = /* @__PURE__ */ P("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), mn = [
  gn
];
function pn(e, t, n, a, l, o) {
  return C(), A("svg", hn, mn);
}
var vn = /* @__PURE__ */ Xe(fn, [["render", pn], ["__file", "loading.vue"]]), yn = {
  name: "Search"
}, bn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sn = /* @__PURE__ */ P("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), wn = [
  Sn
];
function Cn(e, t, n, a, l, o) {
  return C(), A("svg", bn, wn);
}
var En = /* @__PURE__ */ Xe(yn, [["render", Cn], ["__file", "search.vue"]]);
const xn = Symbol(), _e = x();
function Ye(e, t = void 0) {
  const n = st() ? rt(xn, _e) : _e;
  return e ? ge(() => {
    var a, l;
    return (l = (a = n.value) == null ? void 0 : a[e]) != null ? l : t;
  }) : n;
}
const Tn = "el", $n = "is-", F = (e, t, n, a, l) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), a && (o += `__${a}`), l && (o += `--${l}`), o;
}, et = (e) => {
  const t = Ye("namespace", Tn);
  return {
    namespace: t,
    b: (c = "") => F(t.value, e, c, "", ""),
    e: (c) => c ? F(t.value, e, "", c, "") : "",
    m: (c) => c ? F(t.value, e, "", "", c) : "",
    be: (c, h) => c && h ? F(t.value, e, c, h, "") : "",
    em: (c, h) => c && h ? F(t.value, e, "", c, h) : "",
    bm: (c, h) => c && h ? F(t.value, e, c, "", h) : "",
    bem: (c, h, p) => c && h && p ? F(t.value, e, c, h, p) : "",
    is: (c, ...h) => {
      const p = h.length >= 1 ? h[0] : !0;
      return c && p ? `${$n}${c}` : "";
    },
    cssVar: (c) => {
      const h = {};
      for (const p in c)
        c[p] && (h[`--${t.value}-${p}`] = c[p]);
      return h;
    },
    cssVarName: (c) => `--${t.value}-${c}`,
    cssVarBlock: (c) => {
      const h = {};
      for (const p in c)
        c[p] && (h[`--${t.value}-${e}-${p}`] = c[p]);
      return h;
    },
    cssVarBlockName: (c) => `--${t.value}-${e}-${c}`
  };
}, Ve = x(0), kn = () => {
  const e = Ye("zIndex", 2e3), t = ge(() => e.value + Ve.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (Ve.value++, t.value)
  };
}, D = "ElInfiniteScroll", In = 50, Ln = 200, Nn = 0, _n = {
  delay: {
    type: Number,
    default: Ln
  },
  distance: {
    type: Number,
    default: Nn
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  immediate: {
    type: Boolean,
    default: !0
  }
}, pe = (e, t) => Object.entries(_n).reduce((n, [a, l]) => {
  var o, s;
  const { type: r, default: u } = l, f = e.getAttribute(`infinite-scroll-${a}`);
  let v = (s = (o = t[f]) != null ? o : f) != null ? s : u;
  return v = v === "false" ? !1 : v, v = r(v), n[a] = Number.isNaN(v) ? u : v, n;
}, {}), tt = (e) => {
  const { observer: t } = e[D];
  t && (t.disconnect(), delete e[D].observer);
}, Vn = (e, t) => {
  const { container: n, containerEl: a, instance: l, observer: o, lastScrollTop: s } = e[D], { disabled: r, distance: u } = pe(e, l), { clientHeight: f, scrollHeight: v, scrollTop: d } = a, g = d - s;
  if (e[D].lastScrollTop = d, o || r || g < 0)
    return;
  let i = !1;
  if (n === e)
    i = v - (f + d) <= u;
  else {
    const { clientTop: c, scrollHeight: h } = e, p = tn(e, a);
    i = d + f >= p + c + h - u;
  }
  i && t.call(l);
};
function de(e, t) {
  const { containerEl: n, instance: a } = e[D], { disabled: l } = pe(e, a);
  l || n.clientHeight === 0 || (n.scrollHeight <= n.clientHeight ? t.call(a) : tt(e));
}
const Dn = {
  async mounted(e, t) {
    const { instance: n, value: a } = t;
    nn(a) || cn(D, "'v-infinite-scroll' binding value must be a function"), await te();
    const { delay: l, immediate: o } = pe(e, n), s = dn(e, !0), r = s === window ? document.documentElement : s, u = ke(Vn.bind(null, e, a), l);
    if (s) {
      if (e[D] = {
        instance: n,
        container: s,
        containerEl: r,
        delay: l,
        cb: a,
        onScroll: u,
        lastScrollTop: r.scrollTop
      }, o) {
        const f = new MutationObserver(ke(de.bind(null, e, a), In));
        e[D].observer = f, f.observe(e, { childList: !0, subtree: !0 }), de(e, a);
      }
      s.addEventListener("scroll", u);
    }
  },
  unmounted(e) {
    const { container: t, onScroll: n } = e[D];
    t == null || t.removeEventListener("scroll", n), tt(e);
  },
  async updated(e) {
    e[D] || await te();
    const { containerEl: t, cb: n, observer: a } = e[D];
    t.clientHeight && a && de(e, n);
  }
}, fe = Dn;
fe.install = (e) => {
  e.directive("InfiniteScroll", fe);
};
const On = fe;
function An(e) {
  let t;
  const n = et("loading"), a = x(!1), l = it({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function o(i) {
    l.text = i;
  }
  function s() {
    const i = l.parent;
    if (!i.vLoadingAddClassList) {
      let c = i.getAttribute("loading-number");
      c = Number.parseInt(c) - 1, c ? i.setAttribute("loading-number", c.toString()) : (le(i, n.bm("parent", "relative")), i.removeAttribute("loading-number")), le(i, n.bm("parent", "hidden"));
    }
    r(), d.unmount();
  }
  function r() {
    var i, c;
    (c = (i = g.$el) == null ? void 0 : i.parentNode) == null || c.removeChild(g.$el);
  }
  function u() {
    var i;
    e.beforeClose && !e.beforeClose() || (a.value = !0, clearTimeout(t), t = window.setTimeout(f, 400), l.visible = !1, (i = e.closed) == null || i.call(e));
  }
  function f() {
    if (!a.value)
      return;
    const i = l.parent;
    a.value = !1, i.vLoadingAddClassList = void 0, s();
  }
  const d = ct({
    name: "ElLoading",
    setup() {
      return () => {
        const i = l.spinner || l.svg, c = Z("svg", {
          class: "circular",
          viewBox: l.svgViewBox ? l.svgViewBox : "0 0 50 50",
          ...i ? { innerHTML: i } : {}
        }, [
          Z("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), h = l.text ? Z("p", { class: n.b("text") }, [l.text]) : void 0;
        return Z(dt, {
          name: n.b("fade"),
          onAfterLeave: f
        }, {
          default: I(() => [
            q(O("div", {
              style: {
                backgroundColor: l.background || ""
              },
              class: [
                n.b("mask"),
                l.customClass,
                l.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              Z("div", {
                class: n.b("spinner")
              }, [c, h])
            ]), [[me, l.visible]])
          ])
        });
      };
    }
  }), g = d.mount(document.createElement("div"));
  return {
    ...ut(l),
    setText: o,
    removeElLoadingChild: r,
    close: u,
    handleAfterLeave: f,
    vm: g,
    get $el() {
      return g.$el;
    }
  };
}
let Y;
const Bn = function(e = {}) {
  if (!K)
    return;
  const t = jn(e);
  if (t.fullscreen && Y)
    return Y;
  const n = An({
    ...t,
    closed: () => {
      var l;
      (l = t.closed) == null || l.call(t), t.fullscreen && (Y = void 0);
    }
  });
  Rn(t, t.parent, n), De(t, t.parent, n), t.parent.vLoadingAddClassList = () => De(t, t.parent, n);
  let a = t.parent.getAttribute("loading-number");
  return a ? a = `${Number.parseInt(a) + 1}` : a = "1", t.parent.setAttribute("loading-number", a), t.parent.appendChild(n.$el), te(() => n.visible.value = t.visible), t.fullscreen && (Y = n), n;
}, jn = (e) => {
  var t, n, a, l;
  let o;
  return We(e.target) ? o = (t = document.querySelector(e.target)) != null ? t : document.body : o = e.target || document.body, {
    parent: o === document.body || e.body ? document.body : o,
    background: e.background || "",
    svg: e.svg || "",
    svgViewBox: e.svgViewBox || "",
    spinner: e.spinner || !1,
    text: e.text || "",
    fullscreen: o === document.body && ((n = e.fullscreen) != null ? n : !0),
    lock: (a = e.lock) != null ? a : !1,
    customClass: e.customClass || "",
    visible: (l = e.visible) != null ? l : !0,
    target: o
  };
}, Rn = async (e, t, n) => {
  const { nextZIndex: a } = kn(), l = {};
  if (e.fullscreen)
    n.originalPosition.value = U(document.body, "position"), n.originalOverflow.value = U(document.body, "overflow"), l.zIndex = a();
  else if (e.parent === document.body) {
    n.originalPosition.value = U(document.body, "position"), await te();
    for (const o of ["top", "left"]) {
      const s = o === "top" ? "scrollTop" : "scrollLeft";
      l[o] = `${e.target.getBoundingClientRect()[o] + document.body[s] + document.documentElement[s] - Number.parseInt(U(document.body, `margin-${o}`), 10)}px`;
    }
    for (const o of ["height", "width"])
      l[o] = `${e.target.getBoundingClientRect()[o]}px`;
  } else
    n.originalPosition.value = U(t, "position");
  for (const [o, s] of Object.entries(l))
    n.$el.style[o] = s;
}, De = (e, t, n) => {
  const a = et("loading");
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? le(t, a.bm("parent", "relative")) : Ne(t, a.bm("parent", "relative")), e.fullscreen && e.lock ? Ne(t, a.bm("parent", "hidden")) : le(t, a.bm("parent", "hidden"));
}, he = Symbol("ElLoading"), Oe = (e, t) => {
  var n, a, l, o;
  const s = t.instance, r = (g) => qe(t.value) ? t.value[g] : void 0, u = (g) => {
    const i = We(g) && (s == null ? void 0 : s[g]) || g;
    return i && x(i);
  }, f = (g) => u(r(g) || e.getAttribute(`element-loading-${sn(g)}`)), v = (n = r("fullscreen")) != null ? n : t.modifiers.fullscreen, d = {
    text: f("text"),
    svg: f("svg"),
    svgViewBox: f("svgViewBox"),
    spinner: f("spinner"),
    background: f("background"),
    customClass: f("customClass"),
    fullscreen: v,
    target: (a = r("target")) != null ? a : v ? void 0 : e,
    body: (l = r("body")) != null ? l : t.modifiers.body,
    lock: (o = r("lock")) != null ? o : t.modifiers.lock
  };
  e[he] = {
    options: d,
    instance: Bn(d)
  };
}, zn = (e, t) => {
  for (const n of Object.keys(t))
    Fe(t[n]) && (t[n].value = e[n]);
}, Fn = {
  mounted(e, t) {
    t.value && Oe(e, t);
  },
  updated(e, t) {
    const n = e[he];
    t.oldValue !== t.value && (t.value && !t.oldValue ? Oe(e, t) : t.value && t.oldValue ? qe(t.value) && zn(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[he]) == null || t.instance.close();
  }
};
const Pn = /* @__PURE__ */ P("i", null, null, -1), Mn = {
  key: 0,
  class: "flex al-center p-y-8 m-b-8"
}, Un = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28"
}, Qn = /* @__PURE__ */ P("i", null, null, -1), Zn = { class: "flex al-center" }, Gn = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28 m-t-24"
}, Hn = { class: "m-t-24" }, nt = {
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
  setup(e, { expose: t, emit: n }) {
    const a = e, l = x();
    W(
      () => [a.tableQuery],
      () => {
        var i;
        (i = l.value) == null || i.setScrollTop(0);
      }
    );
    const o = x([]);
    function s(i) {
      var c, h, p;
      o.value = i, f.value = i.length > 0 && i.length < ((c = a.data) == null ? void 0 : c.length), v.value = ((h = a.data) == null ? void 0 : h.length) > 0 && i.length === ((p = a.data) == null ? void 0 : p.length), n("handleSeleted", o.value);
    }
    function r() {
      n("handleBatchDel", o.value);
    }
    function u(i, c) {
      if (c.rowIndex)
        i = c.rowIndex;
      else if (c.rowIndex === !1)
        return "";
      const { pageIndex: h = 1, pageSize: p = 20 } = a.tableQuery;
      return i + 1 + (h - 1) * p;
    }
    const f = x(!1), v = x(!1);
    function d() {
      l.value.toggleAllSelection();
    }
    function g(i, c) {
      return a.selectDisabled && a.selectDisabled(c) && (i != null && i.isSelected(c)) && i.toggleRowSelection(c), i == null ? void 0 : i.isSelected(c);
    }
    return t({ handleCheckAll: d }), (i, c) => {
      var p, T, $, _;
      const h = Fn;
      return q((C(), A("div", {
        class: "zn-table-content",
        style: ft({ height: e.height })
      }, [
        O(w(we), ht({
          ref_key: "tableRef",
          ref: l,
          class: ["flex-1", { "hide-checkAll": e.hideDftCheckAll && !e.headSelect }],
          data: e.data,
          onSelectionChange: s
        }, { ...i.$attrs, ...e.prop }), gt({
          append: I(() => {
            var b;
            return [
              j(i.$slots, "append"),
              (b = e.data) != null && b.length && e.showBatchDel ? (C(), A("div", Mn, [
                e.showSelect ? (C(), A("div", Un, [
                  O(w(ie), {
                    "model-value": v.value,
                    indeterminate: f.value,
                    class: "table-check-all",
                    onChange: d
                  }, null, 8, ["model-value", "indeterminate"])
                ])) : L("", !0),
                j(i.$slots, "batch-action", { selection: o.value }, () => {
                  var k;
                  return [
                    O(w(yt), {
                      disabled: !((k = o.value) != null && k.length),
                      plain: "",
                      type: "danger",
                      onClick: r
                    }, {
                      default: I(() => [
                        be("批量删除")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                })
              ])) : L("", !0)
            ];
          }),
          default: I(() => [
            e.showSelect ? (C(), N(w(X), {
              key: 0,
              type: "selection",
              width: "55",
              align: "center"
            }, {
              header: I(() => [
                Pn
              ]),
              default: I((b) => [
                j(i.$slots, "select", mt(pt(b)), () => [
                  O(w(ie), {
                    disabled: e.selectDisabled && e.selectDisabled(b.row),
                    "model-value": g(b.store, b.row),
                    onChange: (k) => b.store.toggleRowSelection(b.row)
                  }, null, 8, ["disabled", "model-value", "onChange"])
                ])
              ]),
              _: 3
            })) : L("", !0),
            e.showIndex ? (C(), N(w(X), {
              key: 1,
              label: "序号",
              type: "index",
              align: "center",
              width: "70"
            }, {
              default: I(({ $index: b, row: k }) => [
                be(Pe(u(b, k)), 1)
              ]),
              _: 1
            })) : L("", !0),
            j(i.$slots, "default")
          ]),
          _: 2
        }, [
          e.customEmpty ? {
            name: "empty",
            fn: I(() => [
              P("div", null, [
                e.loading ? L("", !0) : (C(), N(w(Ze), {
                  key: 0,
                  style: { width: "100%", height: "100%" }
                }))
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["class", "data"]),
        (p = e.summaryData) != null && p.length ? (C(), N(w(we), {
          key: 0,
          data: e.summaryData,
          "show-header": !1
        }, {
          empty: I(() => [
            Qn
          ]),
          default: I(() => [
            e.showSelect ? (C(), N(w(X), {
              key: 0,
              width: "55"
            })) : L("", !0),
            e.showIndex ? (C(), N(w(X), {
              key: 1,
              width: "60"
            })) : L("", !0),
            j(i.$slots, "summary-columns", {}, () => [
              j(i.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["data"])) : L("", !0),
        q(P("div", Zn, [
          e.showSelect && !e.headSelect && (e.hideDftCheckAll && !e.showBatchDel || i.$slots.footer) ? (C(), A("div", Gn, [
            O(w(ie), {
              "model-value": v.value,
              indeterminate: f.value,
              class: "table-check-all",
              onChange: d
            }, null, 8, ["model-value", "indeterminate"])
          ])) : L("", !0),
          P("div", Hn, [
            j(i.$slots, "footer", { selection: o.value })
          ]),
          e.showP ? (C(), N(w(bt), {
            key: 1,
            class: "table-pagination m-t-24",
            currentPage: (T = e.tableQuery) == null ? void 0 : T.pageIndex,
            "page-size": ($ = e.tableQuery) == null ? void 0 : $.pageSize,
            "page-sizes": [20, 30, 50, 100, 200],
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total ?? 0,
            onSizeChange: c[0] || (c[0] = (b) => n("handleSizeChange", b)),
            onCurrentChange: c[1] || (c[1] = (b) => n("handleCurrentChange", b))
          }, null, 8, ["currentPage", "page-size", "total"])) : L("", !0)
        ], 512), [
          [me, (_ = e.data) == null ? void 0 : _.length]
        ])
      ], 4)), [
        [h, e.loading]
      ]);
    };
  }
};
const Wn = {
  __name: "index",
  props: ["modelValue"],
  emits: ["update:modelValue", "change", "blur"],
  setup(e, { emit: t }) {
    const n = e, a = ge({
      get() {
        return n.modelValue;
      },
      set(o) {
        n.modelValue !== o && (t("update:modelValue", o), t("change", o));
      }
    });
    function l({ target: { value: o } }) {
      const s = Number(o);
      a.value = s, t("blur", s);
    }
    return (o, s) => (C(), N(w(St), {
      modelValue: w(a),
      "onUpdate:modelValue": s[0] || (s[0] = (r) => Fe(a) ? a.value = r : null),
      class: "el-input-number",
      controls: !1,
      onBlur: l
    }, null, 8, ["modelValue"]));
  }
};
const qn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, Kn = { class: "list-scroll-search" }, Jn = {
  key: 0,
  class: "list"
}, Xn = ["onClick"], Yn = {
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
  setup(e, { expose: t, emit: n }) {
    const a = e, l = x([]), o = x({ pageIndex: 1, pageSize: 20 }), s = x();
    let r = !1;
    const u = x(!1), f = x(!1);
    Me(() => {
      f.value = !0, d();
    }), W(
      () => JSON.stringify(a.defaultParams),
      () => {
        v();
      }
    );
    function v() {
      l.value = [], s.value = void 0, o.value.pageIndex = 1, d();
    }
    async function d() {
      const { option: h, api: p, searchKey: T, formatDataFc: $ } = a;
      u.value = !0;
      const _ = {
        ...a.defaultParams,
        ...o.value,
        [T]: s.value
      }, { data: b } = await p(_);
      u.value = !1;
      const { ok: k, data: y } = b ?? {};
      if (k && (y != null && y.length)) {
        let m = y.filter((S) => l.value.every((E) => E[h.key] !== S[h.key]));
        $ && (m = $(m)), l.value.push(...m), a.modelValue ? l.value.find((E) => E[a.option.key] === a.modelValue) || g() : !a.modelValue && a.defaultFirst && c(0), (y == null ? void 0 : y.length) < o.value.pageSize && (r = !0);
      } else
        r = !0;
      l.value.length || c(-1);
    }
    function g() {
      !r && !u.value && (o.value.pageIndex++, d());
    }
    function i() {
      o.value.pageIndex = 1, l.value = [], d();
    }
    function c(h) {
      let p, T;
      h !== -1 && (p = l.value[h][option.key], T = l.value[h][option.label]), n("update:modelValue", p), n("update:label", T), n("change", p);
    }
    return t({
      handleSearch: i
    }), (h, p) => {
      const T = On;
      return C(), A("div", Kn, [
        O(w(wt), {
          placeholder: e.placeholder,
          modelValue: s.value,
          "onUpdate:modelValue": p[0] || (p[0] = ($) => s.value = $),
          clearable: "",
          onClear: i,
          onKeyup: vt(i, ["enter"])
        }, {
          suffix: I(() => [
            O(w(Ce), {
              class: "pointer",
              onClick: i
            }, {
              default: I(() => [
                O(w(En))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["placeholder", "modelValue", "onKeyup"]),
        f.value ? q((C(), A("ul", Jn, [
          (C(!0), A(Ue, null, Qe(l.value, ($, _) => (C(), A("li", {
            key: _,
            class: Se({ active: e.modelValue === $[e.option.key] }),
            onClick: (b) => c(_)
          }, Pe($[e.option.label]), 11, Xn))), 128))
        ])), [
          [T, g]
        ]) : L("", !0),
        u.value ? (C(), N(w(Ce), {
          key: 1,
          class: Se({ "is-loading": u.value && !w(r) })
        }, {
          default: I(() => [
            O(w(vn))
          ]),
          _: 1
        }, 8, ["class"])) : L("", !0),
        q(O(w(Ze), { style: { width: "100%" } }, null, 512), [
          [me, !u.value && !l.value.length]
        ])
      ]);
    };
  }
}, at = /* @__PURE__ */ qn(Yn, [["__scopeId", "data-v-078657fe"]]), ea = {
  __name: "index",
  props: {
    loading: Boolean,
    diffBottom: {
      type: Number,
      default: 20
    }
  },
  emits: ["loadMore", "visible-change", "remote-method"],
  setup(e, { emit: t }) {
    const n = e, a = x();
    let l, o, s;
    function r(d) {
      (!d || s !== d) && (o = void 0, l == null || l.scrollTo({ top: 0 })), s = d, t("remote-method", d);
    }
    function u(d) {
      t("visible-change", d), d ? f() : l == null || l.removeEventListener("scroll", v);
    }
    function f() {
      setTimeout(() => {
        l = a.value.scrollbar.wrapRef;
        const d = l.querySelector(".selected");
        let g = 0;
        d && (g = d.offsetTop - (l.offsetHeight - 34)), l == null || l.scrollTo({ top: g }), o = void 0, l == null || l.addEventListener("scroll", v);
      }, 0);
    }
    function v({ target: { offsetHeight: d, scrollHeight: g, scrollTop: i } }) {
      d + i > g - n.diffBottom && !n.loading && (o === void 0 || o && o < i) && (o = i, t("loadMore"));
    }
    return (d, g) => (C(), N(w(Ct), {
      ref_key: "selectRef",
      ref: a,
      "remote-method": r,
      onVisibleChange: u
    }, {
      default: I(() => [
        j(d.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}, oe = {
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
  setup(e, { expose: t, emit: n }) {
    const a = e, l = x(null);
    function o(m) {
      if (y(a.modelValue))
        l.value = s.value.filter((S) => a.modelValue.includes(S[a.option.key]));
      else if (a.modelValue) {
        const S = s.value.find((E) => E[a.option.key] === m);
        !S && a.allowCreate ? l.value = a.modelValue : l.value = S;
      } else
        l.value = null;
      m !== a.modelValue && n("change", l.value);
    }
    const s = x([]);
    let r = [], u = [], f = !1;
    const v = x({ pageIndex: 1, pageSize: 20 }), d = x();
    let g = !1;
    const i = x(!1);
    Me(() => {
      a.init && h();
    }), W(
      () => JSON.stringify(a.defaultParams),
      () => {
        c();
      }
    ), W(
      () => a.insertList,
      () => {
        b();
      }
    ), W(() => a.modelValue, o);
    function c() {
      s.value = [], r = [], d.value = void 0, v.value.pageIndex = 1, h();
    }
    async function h() {
      const { option: m, api: S, searchKey: E, formatSearchKey: J, formatDataFc: ye, allowCreate: Va } = a;
      if (!a.api)
        throw "scroll-select-v2 组件 未定义api";
      i.value = !0;
      let re = {
        ...a.defaultParams,
        ...v.value,
        [E]: d.value
      };
      J && (re = { ...re, ...J(d.value) });
      const { data: lt } = await S(re);
      i.value = !1;
      const { ok: ot, data: B } = lt ?? {};
      if (ot) {
        let R = (B == null ? void 0 : B.filter((z) => !s.value.find((Q) => Q[m.key] === z[m.key]))) || [];
        if (ye && (R = ye(R)), d.value)
          g = ~~(B == null ? void 0 : B.length) < v.value.pageSize, u.push(...R), s.value = [...u];
        else {
          if (R != null && R.length && r.push(...R), b(), f = g = ~~(B == null ? void 0 : B.length) < v.value.pageSize, a.modelValue)
            if (y(a.modelValue)) {
              const z = s.value.filter((Q) => a.modelValue.includes(Q[a.option.key]));
              z.length < a.modelValue.length && p(), k(z);
            } else {
              const z = s.value.find((Q) => Q[m.key] === a.modelValue);
              z ? k(z) : p();
            }
          !a.modelValue && a.defaultFirst && k(s.value[0]);
        }
      } else
        g = !0;
    }
    function p() {
      !g && !i.value && (v.value.pageIndex++, h());
    }
    function T(m) {
      m ? (u = [], d.value = m, v.value.pageIndex = 1, s.value = [], h()) : $(!1);
    }
    function $(m) {
      a.modelValue || (m ? (b(), g = f) : d.value = void 0), m || (d.value = void 0, r.push(...(u == null ? void 0 : u.filter((S) => !r.find((E) => E[option.key] === S[option.key]))) || []), b(), g = f), n("visibleChange", m);
    }
    function _() {
      n("clear"), d.value = void 0, v.value.pageIndex = 1, b(), g = f;
    }
    function b() {
      const m = (r == null ? void 0 : r.filter((S) => !a.insertList.find((E) => E[option.key] === S[option.key]))) || [];
      s.value = [...a.insertList, ...m];
    }
    function k(m) {
      let S = m == null ? void 0 : m[a.option.key];
      y(m) && (S = m.map((E) => E[a.option.key])), l.value = m, n("update:modelValue", S), n("update:data", m), S !== a.modelValue && n("change", m);
    }
    function y(m) {
      return Object.prototype.toString.call(m) === "[object Array]";
    }
    return t({ reset: c, initData: b }), (m, S) => (C(), N(ea, {
      loading: i.value,
      "model-value": l.value,
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
      onRemoteMethod: T,
      onLoadMore: p,
      onClear: _,
      onVisibleChange: $,
      onChange: k,
      "value-key": e.option.key
    }, {
      default: I(() => [
        (C(!0), A(Ue, null, Qe(s.value, (E) => (C(), N(w(Et), {
          key: E[e.option.key],
          label: e.option.label.split(",").map((J) => E[J]).join("-"),
          value: E
        }, null, 8, ["label", "value"]))), 128))
      ]),
      _: 1
    }, 8, ["loading", "model-value", "allowCreate", "value-key"]));
  }
};
const ta = {
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
}, Ae = {
  十: { value: 10, secUnit: !1 },
  百: { value: 100, secUnit: !1 },
  千: { value: 1e3, secUnit: !1 },
  万: { value: 1e4, secUnit: !0 },
  亿: { value: 1e8, secUnit: !0 }
};
function Be(e) {
  for (var t = 0, n = 0, a = 0, l = !1, o = e.split(""), s = 0; s < o.length; s++) {
    var r = ta[o[s]];
    if (typeof r < "u")
      a = r, s === o.length - 1 && (n += a);
    else {
      var u = Ae[o[s]].value;
      l = Ae[o[s]].secUnit, l ? (n = (n + a) * u, t += n, n = 0) : n += a * u, a = 0;
    }
  }
  return t + n;
}
const Aa = (e) => new RegExp(`<${e}[^>]*>[\\s\\S]*?</[^>]*${e}>`, "i"), na = /^[\u4e00-\u9fa5]+$/, aa = /^1[3-9]\d{9}$/, la = /^[0-9]{4}-\d{7}$/, oa = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, sa = /^https?:\/\/.{1,}\..{1,}$/i, ra = /^[0-9]+$/, ia = /^\d+\.*[\d+]{0,}$/, ca = /[\u4E00-\u9FFF]+/g, ua = /^[a-z0-9]+$/i, Ba = /^-[0-9]+$/i, da = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, fa = /^[a-zA-Z0-9]{10,20}$/, ha = /^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{6,20}$/, ga = /^[0-9a-zA-Z]{4}$/, ma = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g, pa = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/, ee = /[一二三四五六七八九十]{1,}/, ja = /<tr[^>]*>[^\{^\}]*?\[{1}[\s\S^\{^\}]*?\]{1}[^\{^\}]*?<\/[^>]*tr>/gi, Ra = /<td[^>]*>[\s\S]*?<\/[^>]*td>/gi, za = (e) => typeof e == "string", va = (e) => aa.test(e), ya = (e) => la.test(e), ba = (e) => oa.test(e), Sa = (e) => sa.test(e), wa = (e) => ia.test(e), Ca = (e) => ra.test(e), Ea = (e) => ua.test(e), Fa = (e) => ca.test(e), xa = (e) => da.test(e), Pa = (e) => fa.test(e), Ta = (e) => ha.test(e), $a = (e) => ga.test(e), ka = (e) => ma.test(e), Ia = (e) => pa.test(e), M = (e) => na.test(e), La = (e) => {
  const t = new FormData();
  return Object.keys(e).forEach((n) => {
    e[n] !== null && t.append(n, e[n]);
  }), t;
}, Ma = (e, t = !0) => {
  const n = document.createElement("a");
  n.href = e, t && (n.target = "_blank"), n.click();
}, Ua = (e) => {
  const [t, ...n] = e.split(".").reverse();
  return [n.reverse().reduce((a, l) => a + l, ""), t];
}, Qa = (e) => {
  switch (!0) {
    case e / 1024 < 1024:
      return `${(e / 1024).toFixed(2)}kb`;
    default:
      return `${(e / 1024 / 1024).toFixed(2)}Mb`;
  }
}, se = (e) => Object.prototype.toString.call(e), je = (e, t, n = !1) => {
  if (Object.prototype.toString.call(e) !== "[object Array]")
    return [];
  const a = t == null ? void 0 : t.split(",");
  function l(o, s) {
    var u, f;
    switch (!0) {
      case (!!((u = o == null ? void 0 : o.match(ee)) != null && u.length) && !!((f = s == null ? void 0 : s.match(ee)) != null && f.length)):
        return Be(o.match(ee)[0]) - Be(s == null ? void 0 : s.match(ee)[0]);
      case (M(o) && M(s)):
      case (M(o) && !M(s)):
        return -1;
      case (!M(o) && M(s)):
        return 1;
    }
    let r = 0;
    return (o == null ? void 0 : o.length) !== (s == null ? void 0 : s.length) ? r += (o == null ? void 0 : o.length) - (s == null ? void 0 : s.length) : r += (o == null ? void 0 : o.localeCompare(s)) + ((o - s) * 2 || 0), r;
  }
  return e.sort((o, s) => {
    let r = 0;
    if (a)
      a == null || a.forEach((u) => {
        var f, v;
        try {
          const d = (f = o == null ? void 0 : o[u]) == null ? void 0 : f.toString().trim(), g = (v = s == null ? void 0 : s[u]) == null ? void 0 : v.toString().trim();
          r += l(d, g);
        } catch (d) {
          console.log(d);
        }
      });
    else {
      const u = o == null ? void 0 : o.toString().trim(), f = s == null ? void 0 : s.toString().trim();
      r += l(u, f);
    }
    return r * (n ? -1 : 1);
  });
}, Za = (e, t, n = "children") => je(e, t).map(({ [n]: a, ...l }) => ({ ...l, children: je(a, t) })), Na = (e) => new Promise((t) => {
  const n = document.createElement("input");
  e && (n.accept = e), n.type = "file", n.onchange = (a) => {
    const l = a.target.files[0];
    a.target.value = null, t(l);
  }, n.click();
}), Re = (e, t, n = "application/vnd.ms-excel;charset=utf-8") => {
  let a;
  e instanceof Blob ? a = e : a = new Blob([e], { type: n });
  const l = window.URL.createObjectURL(a), o = document.createElement("a");
  o.download = t, o.href = l, o.click(), o.remove(), window.URL.revokeObjectURL(l);
}, ve = (e, t = 2) => {
  switch (se(e)) {
    case "[object Number]":
      return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
    default:
      return e ?? 0;
  }
}, Ga = (e) => {
  const { columns: t, data: n } = e, a = [];
  return t.forEach((l, o) => {
    if (o === 0) {
      a[o] = "合计";
      return;
    }
    const s = n == null ? void 0 : n.map((r) => Number(r[l.property] || r[l] || 0));
    s.every((r) => Number.isNaN(r)) ? a[o] = "" : a[o] = `${s.reduce((r, u) => {
      const f = Number(u);
      return Number.isNaN(f) ? r : ve(r + u);
    }, 0)}`;
  }), a;
}, Ha = (e) => {
  const { columns: t, data: n } = e, a = [];
  return t.forEach((l, o) => {
    if (o === 0) {
      a[o] = "";
      return;
    }
    if (o === 1) {
      a[o] = "合计";
      return;
    }
    const s = n.map((r) => Number(r[l.property] || 0));
    s.every((r) => Number.isNaN(r)) ? a[o] = "" : a[o] = `${s.reduce((r, u) => {
      const f = Number(u);
      return Number.isNaN(f) ? r : ve(r + u);
    }, 0)}`;
  }), a;
}, Wa = (e, t, n) => {
  const a = {
    [n]: "合计"
  };
  return e.forEach((l) => {
    t.forEach((o) => {
      a[o] = ve((a[o] || 0) + Number(l[o] || 0));
    });
  }), a;
}, V = (e, t = "请正确填写") => ({
  validator: (n, a, l) => {
    let o = !0;
    switch (se(e)) {
      case "[object Function]":
        o = e(a);
        break;
      case "[object Array]":
        o = e.some((r) => r(a));
        break;
      case "[object Object]":
        o = Object.values(e).every((r) => r(a));
        break;
    }
    return !a || a === 0 || o ? l() : l(t);
  },
  trigger: "blur"
}), qa = {
  url: V(Sa),
  phone: V([va, ya]),
  email: V(ba),
  double: V(wa),
  int: V(Ca),
  intAndLetter: V(Ea),
  idCard: V(xa),
  psw: V(Ta, "密码必须包含大小写字母、数字和特殊字符，长度为6-20位"),
  captcha: V($a),
  socialCreditCode: V(ka),
  carNumber: V(Ia)
}, Ka = {
  required: !0,
  message: "必填项",
  validator: function(e, t, n) {
    const a = se(t);
    let l = !0;
    switch (a) {
      case "[object String]":
        t != null && t.trim() || (l = !1);
        break;
      case "[object Number]":
        break;
      case "[object Array]":
        l = !!(t != null && t.length);
        break;
      default:
        l = !!t;
        break;
    }
    return l ? n() : n(this.message);
  },
  trigger: "blur"
};
const _a = {
  image: "image/*",
  xlsx: ".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  video: "video/*",
  all: "*"
}, H = {
  create: "create",
  update: "update"
}, Ja = {
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
      dialogTypeOpt: H,
      dialogType: "",
      dialogTitleMap: {
        [H.create]: "新增",
        [H.update]: "修改"
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
      this.resetTemp(), this.dialogType = H.create, this.dialogVisible = !0;
    },
    // 删
    handleDelete(e, t) {
      this.temp = e, this.showConfirm(t || this.confirmDelete);
    },
    // 批量删除
    handleBatchDel(e) {
      this.showConfirm(e || this.confirmBatchDelete);
    },
    confirmBatchDelete() {
      console.log("未定义confirmBatchDelete方法");
    },
    showConfirm(e) {
      ce.confirm("是否确定此操作？", "系统提示", {
        type: "warning",
        autofocus: !1
      }).then(e).catch();
    },
    // 改之前摇
    async handleUpdateBefore({ id: e }) {
      var t;
      if ((t = this.apiOpt) != null && t.detail) {
        const n = this.getDetailQuery(e), {
          data: { ok: a, data: l }
        } = await this.apiOpt.detail(n);
        a && this.handleUpdate(l, this.next);
      } else
        console.log("未定义handleUpdateBefore方法");
    },
    getDetailQuery(e) {
      return { id: e };
    },
    // 改
    handleUpdate(e, t) {
      this.resetTemp(), this.temp = { ...e }, t && t(e), this.dialogType = H.update, this.dialogVisible = !0;
    },
    // 查
    async getTableData() {
      var e;
      if ((e = this.apiOpt) != null && e.list) {
        const t = this.getTableQuery();
        if (!t) {
          this.total = 0, this.tableData = [];
          return;
        }
        this.tableLoading = !0;
        const { data: n } = await this.apiOpt.list(t);
        this.tableLoading = !1, this.getTableDataNormalSuccess(n);
      } else
        console.log("未定义getTableData方法");
    },
    getTableQuery() {
      return this.tableQuery;
    },
    // 校验并操作
    handleConfirm() {
      var e;
      (e = this.$refs.formRef) == null || e.validate((t) => {
        if (t)
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
        const t = this.getCreateQuery();
        this.handleLoading = !0;
        const { data: n } = await this.apiOpt.create(t);
        this.handleSuccess(n);
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
        const t = this.getDelQuery(), { data: n } = await this.apiOpt.del(t);
        this.handleSuccess(n);
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
        const t = this.getUpdateQuery();
        this.handleLoading = !0;
        const { data: n } = await this.apiOpt.update(t);
        this.handleSuccess(n);
      } else
        console.log("未定义confirmUpdate方法");
    },
    getUpdateQuery() {
      return this.temp;
    },
    // 增删改成功
    handleSuccess({ ok: e }) {
      this.handleLoading = !1, e ? (Ee.success("操作成功"), this.dialogVisible = !1, this.getTableData()) : Ee.warning("操作失败");
    },
    getTableDataNormalSuccess({ ok: e, data: t, count: n }) {
      this.tableLoading = !1, e ? (this.tableData = t, this.total = n) : (this.tableData = [], this.total = 0);
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
        const t = await Na(_a.xlsx), n = this.getImportQuery(t);
        this.handleLoading = !0;
        const { data: a } = await this.apiOpt.import(La(n), { responseType: "blob" });
        this.handleImportSuccess(a);
      } else
        console.log("未定义handleImport方法");
    },
    // 上传接口调用成功
    handleImportSuccess(e) {
      this.handleLoading = !1;
      const t = se(e);
      switch (!0) {
        case t === "[object Object]":
          this.handleImportSomeSuccess(e);
          break;
        case (t === "[object Blob]" && e.type.includes("json")):
          {
            const n = new FileReader();
            n.readAsText(e, "utf-8"), n.onload = () => {
              this.handleImportSomeSuccess(JSON.parse(n.result));
            };
          }
          break;
        case t === "[object Blob]":
          ce.alert("部分上传成功，请修改失败的部分重新上传", "系统提示", { autofocus: !1, type: "warning" }), Re(e, "导入失败部分.xlsx");
          break;
      }
    },
    // 上传内容部分成功
    handleImportSomeSuccess(e) {
      const { ok: t, data: n } = e;
      if (t) {
        const { errorCount: a } = n || {};
        a ? (ce.alert("部分上传成功，请修改失败的部分重新上传", "系统提示", { autofocus: !1, type: "warning" }), this.handleImportError(e)) : this.handleSuccess(e);
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
        const t = this.getDownloadQuery(), { data: n } = await this.apiOpt.download(t, {
          responseType: "blob"
        });
        this.handleLoading = !1, Re(n, `${this.fileName || Date.now()}.xlsx`);
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
}, ze = { VeTable: nt, VeInputNumber: Wn, VeListScrollSearch: at, VeScrollSelectV2: oe, VeScrollSelect: oe }, Xa = {
  VeTable: nt,
  VeListScrollSearch: at,
  VeScrollSelectV2: oe,
  VeScrollSelect: oe,
  install(e) {
    for (const t in ze)
      e.component(t, ze[t]);
  }
};
export {
  fa as REGBUSINESSLICENSE,
  ga as REGCAPTCHA,
  pa as REGCARNUMBER,
  na as REGCH,
  ee as REGCHINESENUM,
  ia as REGDOUBLE,
  oa as REGEMAIL,
  da as REGIDCARD,
  ra as REGINT,
  ua as REGINTANDLETTER,
  la as REGLANDLINE,
  aa as REGMOBILE,
  ha as REGPSW,
  ca as REGRECHINESE,
  Ba as REGRENEGATIVE,
  ja as REGTABLECYCLETR,
  sa as REGURL,
  ma as SOCIALCREDITCODE,
  Xa as default,
  Re as downloadFile,
  Ua as formatFileNameSuffix,
  Qa as formatFileSize,
  ve as formatNumber,
  Ha as getMoreSummaries,
  Ga as getSummaries,
  Wa as getSummaryDatas,
  Pa as isBusinessLicense,
  M as isCH,
  Ia as isCarNumber,
  Fa as isChinese,
  $a as isCpatcha,
  wa as isDouble,
  ba as isEmail,
  xa as isIdCard,
  Ca as isInt,
  Ea as isIntAndLetter,
  ya as isLandLine,
  va as isMobile,
  Ta as isPsw,
  ka as isSocialCreditCode,
  za as isStr,
  Sa as isUrl,
  Ma as jumpExternalChain,
  La as obj2Formdata,
  Za as recursionSort,
  Aa as regTag,
  Ra as regTd,
  Ka as required,
  Na as selectLocalFile,
  je as sortFuc,
  Ja as tableMixin,
  se as typeCheck,
  qa as validatorFun
};
