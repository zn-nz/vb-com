import { getCurrentScope as iu, onScopeDispose as uu, unref as m, getCurrentInstance as we, onMounted as xe, nextTick as ue, watch as Z, ref as T, openBlock as O, createElementBlock as M, createElementVNode as B, warn as cu, computed as k, inject as de, toRef as kt, onUnmounted as Vo, isRef as vn, onBeforeUnmount as Nt, onBeforeMount as jr, provide as st, defineComponent as q, mergeProps as fn, renderSlot as re, useAttrs as du, useSlots as jo, shallowRef as Xn, withDirectives as Te, createCommentVNode as j, Fragment as Ne, normalizeClass as R, createBlock as G, withCtx as Y, resolveDynamicComponent as lt, withModifiers as yt, createVNode as se, toDisplayString as ge, normalizeStyle as Oe, vShow as St, Transition as co, reactive as Sn, onUpdated as ds, cloneVNode as fu, Text as fs, Comment as ps, Teleport as pu, readonly as vu, onDeactivated as hu, toRaw as Ln, vModelCheckbox as Ro, createTextVNode as Rn, toRefs as Wn, triggerRef as Gn, resolveComponent as Pe, resolveDirective as Kr, renderList as tn, withKeys as rt, vModelText as gu, createSlots as vs, watchEffect as An, h as J, createApp as mu, toHandlers as bu } from "vue";
var yu = typeof global == "object" && global && global.Object === Object && global;
const hs = yu;
var wu = typeof self == "object" && self && self.Object === Object && self, Cu = hs || wu || Function("return this")();
const Et = Cu;
var Su = Et.Symbol;
const Lt = Su;
var gs = Object.prototype, Eu = gs.hasOwnProperty, _u = gs.toString, qn = Lt ? Lt.toStringTag : void 0;
function $u(e) {
  var t = Eu.call(e, qn), n = e[qn];
  try {
    e[qn] = void 0;
    var o = !0;
  } catch {
  }
  var r = _u.call(e);
  return o && (t ? e[qn] = n : delete e[qn]), r;
}
var Ou = Object.prototype, Tu = Ou.toString;
function xu(e) {
  return Tu.call(e);
}
var ku = "[object Null]", Pu = "[object Undefined]", Bl = Lt ? Lt.toStringTag : void 0;
function En(e) {
  return e == null ? e === void 0 ? Pu : ku : Bl && Bl in Object(e) ? $u(e) : xu(e);
}
function nn(e) {
  return e != null && typeof e == "object";
}
var Au = "[object Symbol]";
function Ko(e) {
  return typeof e == "symbol" || nn(e) && En(e) == Au;
}
function ms(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Lu = Array.isArray;
const it = Lu;
var Ru = 1 / 0, Fl = Lt ? Lt.prototype : void 0, zl = Fl ? Fl.toString : void 0;
function bs(e) {
  if (typeof e == "string")
    return e;
  if (it(e))
    return ms(e, bs) + "";
  if (Ko(e))
    return zl ? zl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ru ? "-0" : t;
}
var Mu = /\s/;
function Nu(e) {
  for (var t = e.length; t-- && Mu.test(e.charAt(t)); )
    ;
  return t;
}
var Iu = /^\s+/;
function Bu(e) {
  return e && e.slice(0, Nu(e) + 1).replace(Iu, "");
}
function Xe(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Hl = 0 / 0, Fu = /^[-+]0x[0-9a-f]+$/i, zu = /^0b[01]+$/i, Hu = /^0o[0-7]+$/i, Du = parseInt;
function Dl(e) {
  if (typeof e == "number")
    return e;
  if (Ko(e))
    return Hl;
  if (Xe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Xe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Bu(e);
  var n = zu.test(e);
  return n || Hu.test(e) ? Du(e.slice(2), n ? 2 : 8) : Fu.test(e) ? Hl : +e;
}
function Ur(e) {
  return e;
}
var Wu = "[object AsyncFunction]", Vu = "[object Function]", ju = "[object GeneratorFunction]", Ku = "[object Proxy]";
function Gr(e) {
  if (!Xe(e))
    return !1;
  var t = En(e);
  return t == Vu || t == ju || t == Wu || t == Ku;
}
var Uu = Et["__core-js_shared__"];
const ar = Uu;
var Wl = function() {
  var e = /[^.]+$/.exec(ar && ar.keys && ar.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Gu(e) {
  return !!Wl && Wl in e;
}
var qu = Function.prototype, Yu = qu.toString;
function _n(e) {
  if (e != null) {
    try {
      return Yu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xu = /[\\^$.*+?()[\]{}|]/g, Zu = /^\[object .+?Constructor\]$/, Qu = Function.prototype, Ju = Object.prototype, ec = Qu.toString, tc = Ju.hasOwnProperty, nc = RegExp(
  "^" + ec.call(tc).replace(Xu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oc(e) {
  if (!Xe(e) || Gu(e))
    return !1;
  var t = Gr(e) ? nc : Zu;
  return t.test(_n(e));
}
function rc(e, t) {
  return e == null ? void 0 : e[t];
}
function $n(e, t) {
  var n = rc(e, t);
  return oc(n) ? n : void 0;
}
var lc = $n(Et, "WeakMap");
const yr = lc;
var Vl = Object.create, ac = function() {
  function e() {
  }
  return function(t) {
    if (!Xe(t))
      return {};
    if (Vl)
      return Vl(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const sc = ac;
function ic(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function uc(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var cc = 800, dc = 16, fc = Date.now;
function pc(e) {
  var t = 0, n = 0;
  return function() {
    var o = fc(), r = dc - (o - n);
    if (n = o, r > 0) {
      if (++t >= cc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function vc(e) {
  return function() {
    return e;
  };
}
var hc = function() {
  try {
    var e = $n(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Mo = hc;
var gc = Mo ? function(e, t) {
  return Mo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: vc(t),
    writable: !0
  });
} : Ur;
const mc = gc;
var bc = pc(mc);
const ys = bc;
var yc = 9007199254740991, wc = /^(?:0|[1-9]\d*)$/;
function Uo(e, t) {
  var n = typeof e;
  return t = t ?? yc, !!t && (n == "number" || n != "symbol" && wc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function qr(e, t, n) {
  t == "__proto__" && Mo ? Mo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function fo(e, t) {
  return e === t || e !== e && t !== t;
}
var Cc = Object.prototype, Sc = Cc.hasOwnProperty;
function ws(e, t, n) {
  var o = e[t];
  (!(Sc.call(e, t) && fo(o, n)) || n === void 0 && !(t in e)) && qr(e, t, n);
}
function Ec(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var l = -1, a = t.length; ++l < a; ) {
    var s = t[l], i = o ? o(n[s], e[s], s, n, e) : void 0;
    i === void 0 && (i = e[s]), r ? qr(n, s, i) : ws(n, s, i);
  }
  return n;
}
var jl = Math.max;
function Cs(e, t, n) {
  return t = jl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = jl(o.length - t, 0), a = Array(l); ++r < l; )
      a[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(a), ic(e, this, s);
  };
}
function _c(e, t) {
  return ys(Cs(e, t, Ur), e + "");
}
var $c = 9007199254740991;
function Yr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $c;
}
function Vn(e) {
  return e != null && Yr(e.length) && !Gr(e);
}
function Oc(e, t, n) {
  if (!Xe(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? Vn(n) && Uo(t, n.length) : o == "string" && t in n) ? fo(n[t], e) : !1;
}
function Tc(e) {
  return _c(function(t, n) {
    var o = -1, r = n.length, l = r > 1 ? n[r - 1] : void 0, a = r > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (r--, l) : void 0, a && Oc(n[0], n[1], a) && (l = r < 3 ? void 0 : l, r = 1), t = Object(t); ++o < r; ) {
      var s = n[o];
      s && e(t, s, o, l);
    }
    return t;
  });
}
var xc = Object.prototype;
function Xr(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || xc;
  return e === n;
}
function kc(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Pc = "[object Arguments]";
function Kl(e) {
  return nn(e) && En(e) == Pc;
}
var Ss = Object.prototype, Ac = Ss.hasOwnProperty, Lc = Ss.propertyIsEnumerable, Rc = Kl(function() {
  return arguments;
}()) ? Kl : function(e) {
  return nn(e) && Ac.call(e, "callee") && !Lc.call(e, "callee");
};
const no = Rc;
function Mc() {
  return !1;
}
var Es = typeof exports == "object" && exports && !exports.nodeType && exports, Ul = Es && typeof module == "object" && module && !module.nodeType && module, Nc = Ul && Ul.exports === Es, Gl = Nc ? Et.Buffer : void 0, Ic = Gl ? Gl.isBuffer : void 0, Bc = Ic || Mc;
const No = Bc;
var Fc = "[object Arguments]", zc = "[object Array]", Hc = "[object Boolean]", Dc = "[object Date]", Wc = "[object Error]", Vc = "[object Function]", jc = "[object Map]", Kc = "[object Number]", Uc = "[object Object]", Gc = "[object RegExp]", qc = "[object Set]", Yc = "[object String]", Xc = "[object WeakMap]", Zc = "[object ArrayBuffer]", Qc = "[object DataView]", Jc = "[object Float32Array]", ed = "[object Float64Array]", td = "[object Int8Array]", nd = "[object Int16Array]", od = "[object Int32Array]", rd = "[object Uint8Array]", ld = "[object Uint8ClampedArray]", ad = "[object Uint16Array]", sd = "[object Uint32Array]", Se = {};
Se[Jc] = Se[ed] = Se[td] = Se[nd] = Se[od] = Se[rd] = Se[ld] = Se[ad] = Se[sd] = !0;
Se[Fc] = Se[zc] = Se[Zc] = Se[Hc] = Se[Qc] = Se[Dc] = Se[Wc] = Se[Vc] = Se[jc] = Se[Kc] = Se[Uc] = Se[Gc] = Se[qc] = Se[Yc] = Se[Xc] = !1;
function id(e) {
  return nn(e) && Yr(e.length) && !!Se[En(e)];
}
function ud(e) {
  return function(t) {
    return e(t);
  };
}
var _s = typeof exports == "object" && exports && !exports.nodeType && exports, Zn = _s && typeof module == "object" && module && !module.nodeType && module, cd = Zn && Zn.exports === _s, sr = cd && hs.process, dd = function() {
  try {
    var e = Zn && Zn.require && Zn.require("util").types;
    return e || sr && sr.binding && sr.binding("util");
  } catch {
  }
}();
const ql = dd;
var Yl = ql && ql.isTypedArray, fd = Yl ? ud(Yl) : id;
const Zr = fd;
var pd = Object.prototype, vd = pd.hasOwnProperty;
function $s(e, t) {
  var n = it(e), o = !n && no(e), r = !n && !o && No(e), l = !n && !o && !r && Zr(e), a = n || o || r || l, s = a ? kc(e.length, String) : [], i = s.length;
  for (var u in e)
    (t || vd.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Uo(u, i))) && s.push(u);
  return s;
}
function Os(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var hd = Os(Object.keys, Object);
const gd = hd;
var md = Object.prototype, bd = md.hasOwnProperty;
function yd(e) {
  if (!Xr(e))
    return gd(e);
  var t = [];
  for (var n in Object(e))
    bd.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Qr(e) {
  return Vn(e) ? $s(e) : yd(e);
}
function wd(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Cd = Object.prototype, Sd = Cd.hasOwnProperty;
function Ed(e) {
  if (!Xe(e))
    return wd(e);
  var t = Xr(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !Sd.call(e, o)) || n.push(o);
  return n;
}
function Ts(e) {
  return Vn(e) ? $s(e, !0) : Ed(e);
}
var _d = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $d = /^\w*$/;
function Jr(e, t) {
  if (it(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ko(e) ? !0 : $d.test(e) || !_d.test(e) || t != null && e in Object(t);
}
var Od = $n(Object, "create");
const oo = Od;
function Td() {
  this.__data__ = oo ? oo(null) : {}, this.size = 0;
}
function xd(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var kd = "__lodash_hash_undefined__", Pd = Object.prototype, Ad = Pd.hasOwnProperty;
function Ld(e) {
  var t = this.__data__;
  if (oo) {
    var n = t[e];
    return n === kd ? void 0 : n;
  }
  return Ad.call(t, e) ? t[e] : void 0;
}
var Rd = Object.prototype, Md = Rd.hasOwnProperty;
function Nd(e) {
  var t = this.__data__;
  return oo ? t[e] !== void 0 : Md.call(t, e);
}
var Id = "__lodash_hash_undefined__";
function Bd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = oo && t === void 0 ? Id : t, this;
}
function hn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
hn.prototype.clear = Td;
hn.prototype.delete = xd;
hn.prototype.get = Ld;
hn.prototype.has = Nd;
hn.prototype.set = Bd;
function Fd() {
  this.__data__ = [], this.size = 0;
}
function Go(e, t) {
  for (var n = e.length; n--; )
    if (fo(e[n][0], t))
      return n;
  return -1;
}
var zd = Array.prototype, Hd = zd.splice;
function Dd(e) {
  var t = this.__data__, n = Go(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Hd.call(t, n, 1), --this.size, !0;
}
function Wd(e) {
  var t = this.__data__, n = Go(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Vd(e) {
  return Go(this.__data__, e) > -1;
}
function jd(e, t) {
  var n = this.__data__, o = Go(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Ut(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ut.prototype.clear = Fd;
Ut.prototype.delete = Dd;
Ut.prototype.get = Wd;
Ut.prototype.has = Vd;
Ut.prototype.set = jd;
var Kd = $n(Et, "Map");
const ro = Kd;
function Ud() {
  this.size = 0, this.__data__ = {
    hash: new hn(),
    map: new (ro || Ut)(),
    string: new hn()
  };
}
function Gd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qo(e, t) {
  var n = e.__data__;
  return Gd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function qd(e) {
  var t = qo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Yd(e) {
  return qo(this, e).get(e);
}
function Xd(e) {
  return qo(this, e).has(e);
}
function Zd(e, t) {
  var n = qo(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Gt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Gt.prototype.clear = Ud;
Gt.prototype.delete = qd;
Gt.prototype.get = Yd;
Gt.prototype.has = Xd;
Gt.prototype.set = Zd;
var Qd = "Expected a function";
function el(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Qd);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var a = e.apply(this, o);
    return n.cache = l.set(r, a) || l, a;
  };
  return n.cache = new (el.Cache || Gt)(), n;
}
el.Cache = Gt;
var Jd = 500;
function ef(e) {
  var t = el(e, function(o) {
    return n.size === Jd && n.clear(), o;
  }), n = t.cache;
  return t;
}
var tf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nf = /\\(\\)?/g, of = ef(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(tf, function(n, o, r, l) {
    t.push(r ? l.replace(nf, "$1") : o || n);
  }), t;
});
const rf = of;
function lf(e) {
  return e == null ? "" : bs(e);
}
function Yo(e, t) {
  return it(e) ? e : Jr(e, t) ? [e] : rf(lf(e));
}
var af = 1 / 0;
function po(e) {
  if (typeof e == "string" || Ko(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -af ? "-0" : t;
}
function tl(e, t) {
  t = Yo(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[po(t[n++])];
  return n && n == o ? e : void 0;
}
function Fe(e, t, n) {
  var o = e == null ? void 0 : tl(e, t);
  return o === void 0 ? n : o;
}
function xs(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Xl = Lt ? Lt.isConcatSpreadable : void 0;
function sf(e) {
  return it(e) || no(e) || !!(Xl && e && e[Xl]);
}
function nl(e, t, n, o, r) {
  var l = -1, a = e.length;
  for (n || (n = sf), r || (r = []); ++l < a; ) {
    var s = e[l];
    t > 0 && n(s) ? t > 1 ? nl(s, t - 1, n, o, r) : xs(r, s) : o || (r[r.length] = s);
  }
  return r;
}
function uf(e) {
  var t = e == null ? 0 : e.length;
  return t ? nl(e, 1) : [];
}
function cf(e) {
  return ys(Cs(e, void 0, uf), e + "");
}
var df = Os(Object.getPrototypeOf, Object);
const ks = df;
var ff = "[object Object]", pf = Function.prototype, vf = Object.prototype, Ps = pf.toString, hf = vf.hasOwnProperty, gf = Ps.call(Object);
function mf(e) {
  if (!nn(e) || En(e) != ff)
    return !1;
  var t = ks(e);
  if (t === null)
    return !0;
  var n = hf.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ps.call(n) == gf;
}
function bf() {
  this.__data__ = new Ut(), this.size = 0;
}
function yf(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function wf(e) {
  return this.__data__.get(e);
}
function Cf(e) {
  return this.__data__.has(e);
}
var Sf = 200;
function Ef(e, t) {
  var n = this.__data__;
  if (n instanceof Ut) {
    var o = n.__data__;
    if (!ro || o.length < Sf - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Gt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Pt(e) {
  var t = this.__data__ = new Ut(e);
  this.size = t.size;
}
Pt.prototype.clear = bf;
Pt.prototype.delete = yf;
Pt.prototype.get = wf;
Pt.prototype.has = Cf;
Pt.prototype.set = Ef;
var As = typeof exports == "object" && exports && !exports.nodeType && exports, Zl = As && typeof module == "object" && module && !module.nodeType && module, _f = Zl && Zl.exports === As, Ql = _f ? Et.Buffer : void 0, Jl = Ql ? Ql.allocUnsafe : void 0;
function $f(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = Jl ? Jl(n) : new e.constructor(n);
  return e.copy(o), o;
}
function Of(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (l[r++] = a);
  }
  return l;
}
function Tf() {
  return [];
}
var xf = Object.prototype, kf = xf.propertyIsEnumerable, ea = Object.getOwnPropertySymbols, Pf = ea ? function(e) {
  return e == null ? [] : (e = Object(e), Of(ea(e), function(t) {
    return kf.call(e, t);
  }));
} : Tf;
const Af = Pf;
function Lf(e, t, n) {
  var o = t(e);
  return it(e) ? o : xs(o, n(e));
}
function ta(e) {
  return Lf(e, Qr, Af);
}
var Rf = $n(Et, "DataView");
const wr = Rf;
var Mf = $n(Et, "Promise");
const Cr = Mf;
var Nf = $n(Et, "Set");
const Sr = Nf;
var na = "[object Map]", If = "[object Object]", oa = "[object Promise]", ra = "[object Set]", la = "[object WeakMap]", aa = "[object DataView]", Bf = _n(wr), Ff = _n(ro), zf = _n(Cr), Hf = _n(Sr), Df = _n(yr), sn = En;
(wr && sn(new wr(new ArrayBuffer(1))) != aa || ro && sn(new ro()) != na || Cr && sn(Cr.resolve()) != oa || Sr && sn(new Sr()) != ra || yr && sn(new yr()) != la) && (sn = function(e) {
  var t = En(e), n = t == If ? e.constructor : void 0, o = n ? _n(n) : "";
  if (o)
    switch (o) {
      case Bf:
        return aa;
      case Ff:
        return na;
      case zf:
        return oa;
      case Hf:
        return ra;
      case Df:
        return la;
    }
  return t;
});
const sa = sn;
var Wf = Et.Uint8Array;
const Io = Wf;
function Vf(e) {
  var t = new e.constructor(e.byteLength);
  return new Io(t).set(new Io(e)), t;
}
function jf(e, t) {
  var n = t ? Vf(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function Kf(e) {
  return typeof e.constructor == "function" && !Xr(e) ? sc(ks(e)) : {};
}
var Uf = "__lodash_hash_undefined__";
function Gf(e) {
  return this.__data__.set(e, Uf), this;
}
function qf(e) {
  return this.__data__.has(e);
}
function Bo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Gt(); ++t < n; )
    this.add(e[t]);
}
Bo.prototype.add = Bo.prototype.push = Gf;
Bo.prototype.has = qf;
function Yf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Xf(e, t) {
  return e.has(t);
}
var Zf = 1, Qf = 2;
function Ls(e, t, n, o, r, l) {
  var a = n & Zf, s = e.length, i = t.length;
  if (s != i && !(a && i > s))
    return !1;
  var u = l.get(e), d = l.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, p = !0, h = n & Qf ? new Bo() : void 0;
  for (l.set(e, t), l.set(t, e); ++f < s; ) {
    var c = e[f], v = t[f];
    if (o)
      var w = a ? o(v, c, f, t, e, l) : o(c, v, f, e, t, l);
    if (w !== void 0) {
      if (w)
        continue;
      p = !1;
      break;
    }
    if (h) {
      if (!Yf(t, function(g, y) {
        if (!Xf(h, y) && (c === g || r(c, g, n, o, l)))
          return h.push(y);
      })) {
        p = !1;
        break;
      }
    } else if (!(c === v || r(c, v, n, o, l))) {
      p = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), p;
}
function Jf(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function ep(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var tp = 1, np = 2, op = "[object Boolean]", rp = "[object Date]", lp = "[object Error]", ap = "[object Map]", sp = "[object Number]", ip = "[object RegExp]", up = "[object Set]", cp = "[object String]", dp = "[object Symbol]", fp = "[object ArrayBuffer]", pp = "[object DataView]", ia = Lt ? Lt.prototype : void 0, ir = ia ? ia.valueOf : void 0;
function vp(e, t, n, o, r, l, a) {
  switch (n) {
    case pp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case fp:
      return !(e.byteLength != t.byteLength || !l(new Io(e), new Io(t)));
    case op:
    case rp:
    case sp:
      return fo(+e, +t);
    case lp:
      return e.name == t.name && e.message == t.message;
    case ip:
    case cp:
      return e == t + "";
    case ap:
      var s = Jf;
    case up:
      var i = o & tp;
      if (s || (s = ep), e.size != t.size && !i)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= np, a.set(e, t);
      var d = Ls(s(e), s(t), o, r, l, a);
      return a.delete(e), d;
    case dp:
      if (ir)
        return ir.call(e) == ir.call(t);
  }
  return !1;
}
var hp = 1, gp = Object.prototype, mp = gp.hasOwnProperty;
function bp(e, t, n, o, r, l) {
  var a = n & hp, s = ta(e), i = s.length, u = ta(t), d = u.length;
  if (i != d && !a)
    return !1;
  for (var f = i; f--; ) {
    var p = s[f];
    if (!(a ? p in t : mp.call(t, p)))
      return !1;
  }
  var h = l.get(e), c = l.get(t);
  if (h && c)
    return h == t && c == e;
  var v = !0;
  l.set(e, t), l.set(t, e);
  for (var w = a; ++f < i; ) {
    p = s[f];
    var g = e[p], y = t[p];
    if (o)
      var b = a ? o(y, g, p, t, e, l) : o(g, y, p, e, t, l);
    if (!(b === void 0 ? g === y || r(g, y, n, o, l) : b)) {
      v = !1;
      break;
    }
    w || (w = p == "constructor");
  }
  if (v && !w) {
    var C = e.constructor, E = t.constructor;
    C != E && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof E == "function" && E instanceof E) && (v = !1);
  }
  return l.delete(e), l.delete(t), v;
}
var yp = 1, ua = "[object Arguments]", ca = "[object Array]", mo = "[object Object]", wp = Object.prototype, da = wp.hasOwnProperty;
function Cp(e, t, n, o, r, l) {
  var a = it(e), s = it(t), i = a ? ca : sa(e), u = s ? ca : sa(t);
  i = i == ua ? mo : i, u = u == ua ? mo : u;
  var d = i == mo, f = u == mo, p = i == u;
  if (p && No(e)) {
    if (!No(t))
      return !1;
    a = !0, d = !1;
  }
  if (p && !d)
    return l || (l = new Pt()), a || Zr(e) ? Ls(e, t, n, o, r, l) : vp(e, t, i, n, o, r, l);
  if (!(n & yp)) {
    var h = d && da.call(e, "__wrapped__"), c = f && da.call(t, "__wrapped__");
    if (h || c) {
      var v = h ? e.value() : e, w = c ? t.value() : t;
      return l || (l = new Pt()), r(v, w, n, o, l);
    }
  }
  return p ? (l || (l = new Pt()), bp(e, t, n, o, r, l)) : !1;
}
function Xo(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !nn(e) && !nn(t) ? e !== e && t !== t : Cp(e, t, n, o, Xo, r);
}
var Sp = 1, Ep = 2;
function _p(e, t, n, o) {
  var r = n.length, l = r, a = !o;
  if (e == null)
    return !l;
  for (e = Object(e); r--; ) {
    var s = n[r];
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++r < l; ) {
    s = n[r];
    var i = s[0], u = e[i], d = s[1];
    if (a && s[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var f = new Pt();
      if (o)
        var p = o(u, d, i, e, t, f);
      if (!(p === void 0 ? Xo(d, u, Sp | Ep, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function Rs(e) {
  return e === e && !Xe(e);
}
function $p(e) {
  for (var t = Qr(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Rs(r)];
  }
  return t;
}
function Ms(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Op(e) {
  var t = $p(e);
  return t.length == 1 && t[0][2] ? Ms(t[0][0], t[0][1]) : function(n) {
    return n === e || _p(n, e, t);
  };
}
function Tp(e, t) {
  return e != null && t in Object(e);
}
function xp(e, t, n) {
  t = Yo(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var a = po(t[o]);
    if (!(l = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && Yr(r) && Uo(a, r) && (it(e) || no(e)));
}
function Ns(e, t) {
  return e != null && xp(e, t, Tp);
}
var kp = 1, Pp = 2;
function Ap(e, t) {
  return Jr(e) && Rs(t) ? Ms(po(e), t) : function(n) {
    var o = Fe(n, e);
    return o === void 0 && o === t ? Ns(n, e) : Xo(t, o, kp | Pp);
  };
}
function Lp(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Rp(e) {
  return function(t) {
    return tl(t, e);
  };
}
function Mp(e) {
  return Jr(e) ? Lp(po(e)) : Rp(e);
}
function Np(e) {
  return typeof e == "function" ? e : e == null ? Ur : typeof e == "object" ? it(e) ? Ap(e[0], e[1]) : Op(e) : Mp(e);
}
function Ip(e) {
  return function(t, n, o) {
    for (var r = -1, l = Object(t), a = o(t), s = a.length; s--; ) {
      var i = a[e ? s : ++r];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var Bp = Ip();
const Is = Bp;
function Fp(e, t) {
  return e && Is(e, t, Qr);
}
function zp(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!Vn(n))
      return e(n, o);
    for (var r = n.length, l = t ? r : -1, a = Object(n); (t ? l-- : ++l < r) && o(a[l], l, a) !== !1; )
      ;
    return n;
  };
}
var Hp = zp(Fp);
const Dp = Hp;
var Wp = function() {
  return Et.Date.now();
};
const ur = Wp;
var Vp = "Expected a function", jp = Math.max, Kp = Math.min;
function gn(e, t, n) {
  var o, r, l, a, s, i, u = 0, d = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Vp);
  t = Dl(t) || 0, Xe(n) && (d = !!n.leading, f = "maxWait" in n, l = f ? jp(Dl(n.maxWait) || 0, t) : l, p = "trailing" in n ? !!n.trailing : p);
  function h($) {
    var S = o, x = r;
    return o = r = void 0, u = $, a = e.apply(x, S), a;
  }
  function c($) {
    return u = $, s = setTimeout(g, t), d ? h($) : a;
  }
  function v($) {
    var S = $ - i, x = $ - u, P = t - S;
    return f ? Kp(P, l - x) : P;
  }
  function w($) {
    var S = $ - i, x = $ - u;
    return i === void 0 || S >= t || S < 0 || f && x >= l;
  }
  function g() {
    var $ = ur();
    if (w($))
      return y($);
    s = setTimeout(g, v($));
  }
  function y($) {
    return s = void 0, p && o ? h($) : (o = r = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, o = i = r = s = void 0;
  }
  function C() {
    return s === void 0 ? a : y(ur());
  }
  function E() {
    var $ = ur(), S = w($);
    if (o = arguments, r = this, i = $, S) {
      if (s === void 0)
        return c(i);
      if (f)
        return clearTimeout(s), s = setTimeout(g, t), h(i);
    }
    return s === void 0 && (s = setTimeout(g, t)), a;
  }
  return E.cancel = b, E.flush = C, E;
}
function Er(e, t, n) {
  (n !== void 0 && !fo(e[t], n) || n === void 0 && !(t in e)) && qr(e, t, n);
}
function Up(e) {
  return nn(e) && Vn(e);
}
function _r(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Gp(e) {
  return Ec(e, Ts(e));
}
function qp(e, t, n, o, r, l, a) {
  var s = _r(e, n), i = _r(t, n), u = a.get(i);
  if (u) {
    Er(e, n, u);
    return;
  }
  var d = l ? l(s, i, n + "", e, t, a) : void 0, f = d === void 0;
  if (f) {
    var p = it(i), h = !p && No(i), c = !p && !h && Zr(i);
    d = i, p || h || c ? it(s) ? d = s : Up(s) ? d = uc(s) : h ? (f = !1, d = $f(i, !0)) : c ? (f = !1, d = jf(i, !0)) : d = [] : mf(i) || no(i) ? (d = s, no(s) ? d = Gp(s) : (!Xe(s) || Gr(s)) && (d = Kf(i))) : f = !1;
  }
  f && (a.set(i, d), r(d, i, o, l, a), a.delete(i)), Er(e, n, d);
}
function Bs(e, t, n, o, r) {
  e !== t && Is(t, function(l, a) {
    if (r || (r = new Pt()), Xe(l))
      qp(e, t, a, n, Bs, o, r);
    else {
      var s = o ? o(_r(e, a), l, a + "", e, t, r) : void 0;
      s === void 0 && (s = l), Er(e, a, s);
    }
  }, Ts);
}
function Yp(e, t) {
  var n = -1, o = Vn(e) ? Array(e.length) : [];
  return Dp(e, function(r, l, a) {
    o[++n] = t(r, l, a);
  }), o;
}
function Xp(e, t) {
  var n = it(e) ? ms : Yp;
  return n(e, Np(t));
}
function Zp(e, t) {
  return nl(Xp(e, t), 1);
}
function Fs(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Fo(e, t) {
  return Xo(e, t);
}
function Zo(e) {
  return e == null;
}
var Qp = Tc(function(e, t, n) {
  Bs(e, t, n);
});
const zs = Qp;
function Hs(e, t, n, o) {
  if (!Xe(e))
    return e;
  t = Yo(t, e);
  for (var r = -1, l = t.length, a = l - 1, s = e; s != null && ++r < l; ) {
    var i = po(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != a) {
      var d = s[i];
      u = o ? o(d, i, s) : void 0, u === void 0 && (u = Xe(d) ? d : Uo(t[r + 1]) ? [] : {});
    }
    ws(s, i, u), s = s[i];
  }
  return e;
}
function Jp(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var a = t[o], s = tl(e, a);
    n(s, a) && Hs(l, Yo(a, e), s);
  }
  return l;
}
function ev(e, t) {
  return Jp(e, t, function(n, o) {
    return Ns(e, o);
  });
}
var tv = cf(function(e, t) {
  return e == null ? {} : ev(e, t);
});
const nv = tv;
function ov(e, t, n) {
  return e == null ? e : Hs(e, t, n);
}
var rv = "Expected a function";
function fa(e, t, n) {
  var o = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(rv);
  return Xe(n) && (o = "leading" in n ? !!n.leading : o, r = "trailing" in n ? !!n.trailing : r), gn(e, t, {
    leading: o,
    maxWait: t,
    trailing: r
  });
}
const Vt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const l = e == null ? void 0 : e(r);
  if (n === !1 || !l)
    return t == null ? void 0 : t(r);
};
var pa;
const _e = typeof window < "u", Mn = (e) => typeof e == "boolean", Ae = (e) => typeof e == "number", lv = (e) => typeof e == "string", av = () => {
};
_e && ((pa = window == null ? void 0 : window.navigator) != null && pa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function sv(e) {
  return typeof e == "function" ? e() : m(e);
}
function iv(e) {
  return e;
}
function ol(e) {
  return iu() ? (uu(e), !0) : !1;
}
function uv(e, t = !0) {
  we() ? xe(e) : t ? e() : ue(e);
}
function Jt(e) {
  var t;
  const n = sv(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const rl = _e ? window : void 0;
function jt(...e) {
  let t, n, o, r;
  if (lv(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = rl) : [t, n, o, r] = e, !t)
    return av;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], a = () => {
    l.forEach((d) => d()), l.length = 0;
  }, s = (d, f, p) => (d.addEventListener(f, p, r), () => d.removeEventListener(f, p, r)), i = Z(() => Jt(t), (d) => {
    a(), d && l.push(...n.flatMap((f) => o.map((p) => s(d, f, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), a();
  };
  return ol(u), u;
}
function cv(e, t, n = {}) {
  const { window: o = rl, ignore: r = [], capture: l = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  let s = !0, i;
  const u = (h) => r.some((c) => {
    if (typeof c == "string")
      return Array.from(o.document.querySelectorAll(c)).some((v) => v === h.target || h.composedPath().includes(v));
    {
      const v = Jt(c);
      return v && (h.target === v || h.composedPath().includes(v));
    }
  }), d = (h) => {
    o.clearTimeout(i);
    const c = Jt(e);
    if (!(!c || c === h.target || h.composedPath().includes(c))) {
      if (h.detail === 0 && (s = !u(h)), !s) {
        s = !0;
        return;
      }
      t(h);
    }
  }, f = [
    jt(o, "click", d, { passive: !0, capture: l }),
    jt(o, "pointerdown", (h) => {
      const c = Jt(e);
      c && (s = !h.composedPath().includes(c) && !u(h));
    }, { passive: !0 }),
    jt(o, "pointerup", (h) => {
      if (h.button === 0) {
        const c = h.composedPath();
        h.composedPath = () => c, i = o.setTimeout(() => d(h), 50);
      }
    }, { passive: !0 }),
    a && jt(o, "blur", (h) => {
      var c;
      const v = Jt(e);
      ((c = o.document.activeElement) == null ? void 0 : c.tagName) === "IFRAME" && !(v != null && v.contains(o.document.activeElement)) && t(h);
    })
  ].filter(Boolean);
  return () => f.forEach((h) => h());
}
function dv(e, t = !1) {
  const n = T(), o = () => n.value = Boolean(e());
  return o(), uv(o, t), n;
}
const $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Or = "__vueuse_ssr_handlers__";
$r[Or] = $r[Or] || {};
$r[Or];
var va = Object.getOwnPropertySymbols, fv = Object.prototype.hasOwnProperty, pv = Object.prototype.propertyIsEnumerable, vv = (e, t) => {
  var n = {};
  for (var o in e)
    fv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && va)
    for (var o of va(e))
      t.indexOf(o) < 0 && pv.call(e, o) && (n[o] = e[o]);
  return n;
};
function Nn(e, t, n = {}) {
  const o = n, { window: r = rl } = o, l = vv(o, ["window"]);
  let a;
  const s = dv(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Z(() => Jt(e), (f) => {
    i(), s.value && r && f && (a = new ResizeObserver(t), a.observe(f, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), u();
  };
  return ol(d), {
    isSupported: s,
    stop: d
  };
}
var ha;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ha || (ha = {}));
var hv = Object.defineProperty, ga = Object.getOwnPropertySymbols, gv = Object.prototype.hasOwnProperty, mv = Object.prototype.propertyIsEnumerable, ma = (e, t, n) => t in e ? hv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, bv = (e, t) => {
  for (var n in t || (t = {}))
    gv.call(t, n) && ma(e, n, t[n]);
  if (ga)
    for (var n of ga(t))
      mv.call(t, n) && ma(e, n, t[n]);
  return e;
};
const yv = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
bv({
  linear: iv
}, yv);
const ba = (e) => {
  let t = 0, n = e;
  for (; n; )
    t += n.offsetTop, n = n.offsetParent;
  return t;
}, wv = (e, t) => Math.abs(ba(e) - ba(t));
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const lo = () => {
}, Cv = Object.prototype.hasOwnProperty, mn = (e, t) => Cv.call(e, t), bn = Array.isArray, wt = (e) => typeof e == "function", at = (e) => typeof e == "string", ut = (e) => e !== null && typeof e == "object", Sv = Object.prototype.toString, Ev = (e) => Sv.call(e), cr = (e) => Ev(e).slice(8, -1), Ds = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, _v = /-(\w)/g, $v = Ds((e) => e.replace(_v, (t, n) => n ? n.toUpperCase() : "")), Ov = /\B([A-Z])/g, Tv = Ds((e) => e.replace(Ov, "-$1").toLowerCase()), zo = (e) => e === void 0, ao = (e) => typeof Element > "u" ? !1 : e instanceof Element, xv = (e) => at(e) ? !Number.isNaN(Number(e)) : !1, kv = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Pv = (e, t, n) => ({
  get value() {
    return Fe(e, t, n);
  },
  set value(o) {
    ov(e, t, o);
  }
});
class Ws extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ll(e, t) {
  throw new Ws(`[${e}] ${t}`);
}
function He(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = at(e) ? new Ws(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Av = "utils/dom/style", Vs = (e = "") => e.split(" ").filter((t) => !!t.trim()), To = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Ho = (e, t) => {
  !e || !t.trim() || e.classList.add(...Vs(t));
}, yn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Vs(t));
}, Qt = (e, t) => {
  var n;
  if (!_e || !e || !t)
    return "";
  let o = $v(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const l = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return l ? l[o] : "";
  } catch {
    return e.style[o];
  }
};
function Tr(e, t = "px") {
  if (!e)
    return "";
  if (Ae(e) || xv(e))
    return `${e}${t}`;
  if (at(e))
    return e;
  He(Av, "binding value must be a string or number");
}
const Lv = (e, t) => {
  if (!_e)
    return !1;
  const n = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(t)], o = Qt(e, n);
  return ["scroll", "auto", "overlay"].some((r) => o.includes(r));
}, Rv = (e, t) => {
  if (!_e)
    return;
  let n = e;
  for (; n; ) {
    if ([window, document, document.documentElement].includes(n))
      return window;
    if (Lv(n, t))
      return n;
    n = n.parentNode;
  }
  return n;
};
function Mv(e, t) {
  if (!_e)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), l = r + t.offsetHeight, a = e.scrollTop, s = a + e.clientHeight;
  r < a ? e.scrollTop = r : l > s && (e.scrollTop = l - e.clientHeight);
}
/*! Element Plus Icons Vue v2.0.10 */
var Ze = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, Nv = {
  name: "ArrowDown"
}, Iv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bv = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), Fv = [
  Bv
];
function zv(e, t, n, o, r, l) {
  return O(), M("svg", Iv, Fv);
}
var js = /* @__PURE__ */ Ze(Nv, [["render", zv], ["__file", "arrow-down.vue"]]), Hv = {
  name: "ArrowLeft"
}, Dv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wv = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Vv = [
  Wv
];
function jv(e, t, n, o, r, l) {
  return O(), M("svg", Dv, Vv);
}
var Kv = /* @__PURE__ */ Ze(Hv, [["render", jv], ["__file", "arrow-left.vue"]]), Uv = {
  name: "ArrowRight"
}, Gv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qv = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Yv = [
  qv
];
function Xv(e, t, n, o, r, l) {
  return O(), M("svg", Gv, Yv);
}
var al = /* @__PURE__ */ Ze(Uv, [["render", Xv], ["__file", "arrow-right.vue"]]), Zv = {
  name: "ArrowUp"
}, Qv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jv = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), eh = [
  Jv
];
function th(e, t, n, o, r, l) {
  return O(), M("svg", Qv, eh);
}
var nh = /* @__PURE__ */ Ze(Zv, [["render", th], ["__file", "arrow-up.vue"]]), oh = {
  name: "CircleCheck"
}, rh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), ah = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), sh = [
  lh,
  ah
];
function ih(e, t, n, o, r, l) {
  return O(), M("svg", rh, sh);
}
var uh = /* @__PURE__ */ Ze(oh, [["render", ih], ["__file", "circle-check.vue"]]), ch = {
  name: "CircleClose"
}, dh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), ph = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), vh = [
  fh,
  ph
];
function hh(e, t, n, o, r, l) {
  return O(), M("svg", dh, vh);
}
var sl = /* @__PURE__ */ Ze(ch, [["render", hh], ["__file", "circle-close.vue"]]), gh = {
  name: "Close"
}, mh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), yh = [
  bh
];
function wh(e, t, n, o, r, l) {
  return O(), M("svg", mh, yh);
}
var ya = /* @__PURE__ */ Ze(gh, [["render", wh], ["__file", "close.vue"]]), Ch = {
  name: "DArrowLeft"
}, Sh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Eh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), _h = [
  Eh
];
function $h(e, t, n, o, r, l) {
  return O(), M("svg", Sh, _h);
}
var Oh = /* @__PURE__ */ Ze(Ch, [["render", $h], ["__file", "d-arrow-left.vue"]]), Th = {
  name: "DArrowRight"
}, xh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), Ph = [
  kh
];
function Ah(e, t, n, o, r, l) {
  return O(), M("svg", xh, Ph);
}
var Lh = /* @__PURE__ */ Ze(Th, [["render", Ah], ["__file", "d-arrow-right.vue"]]), Rh = {
  name: "Hide"
}, Mh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nh = /* @__PURE__ */ B("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), Ih = /* @__PURE__ */ B("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), Bh = [
  Nh,
  Ih
];
function Fh(e, t, n, o, r, l) {
  return O(), M("svg", Mh, Bh);
}
var zh = /* @__PURE__ */ Ze(Rh, [["render", Fh], ["__file", "hide.vue"]]), Hh = {
  name: "Loading"
}, Dh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Vh = [
  Wh
];
function jh(e, t, n, o, r, l) {
  return O(), M("svg", Dh, Vh);
}
var Qo = /* @__PURE__ */ Ze(Hh, [["render", jh], ["__file", "loading.vue"]]), Kh = {
  name: "MoreFilled"
}, Uh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), qh = [
  Gh
];
function Yh(e, t, n, o, r, l) {
  return O(), M("svg", Uh, qh);
}
var wa = /* @__PURE__ */ Ze(Kh, [["render", Yh], ["__file", "more-filled.vue"]]), Xh = {
  name: "Search"
}, Zh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), Jh = [
  Qh
];
function eg(e, t, n, o, r, l) {
  return O(), M("svg", Zh, Jh);
}
var tg = /* @__PURE__ */ Ze(Xh, [["render", eg], ["__file", "search.vue"]]), ng = {
  name: "View"
}, og = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rg = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), lg = [
  rg
];
function ag(e, t, n, o, r, l) {
  return O(), M("svg", og, lg);
}
var sg = /* @__PURE__ */ Ze(ng, [["render", ag], ["__file", "view.vue"]]);
const Ks = "__epPropKey", he = (e) => e, ig = (e) => ut(e) && !!e[Ks], Jo = (e, t) => {
  if (!ut(e) || ig(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: a } = e, i = {
    type: l,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), mn(e, "default") && f.push(r), d || (d = f.includes(u))), a && (d || (d = a(u))), !d && f.length > 0) {
        const p = [...new Set(f)].map((h) => JSON.stringify(h)).join(", ");
        cu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Ks]: !0
  };
  return mn(e, "default") && (i.default = r), i;
}, $e = (e) => Fs(Object.entries(e).map(([t, n]) => [
  t,
  Jo(n, t)
])), Rt = he([
  String,
  Object,
  Function
]), ug = {
  validating: Qo,
  success: uh,
  error: sl
}, vt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, jn = (e) => (e.install = lo, e), so = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Ve = "update:modelValue", Us = "change", vo = ["", "default", "small", "large"], cg = {
  large: 40,
  default: 32,
  small: 24
}, dg = (e) => cg[e || "default"], fg = (e) => ["", ...vo].includes(e), Gs = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), il = (e) => e, pg = ["class", "style"], vg = /^on[A-Z]/, hg = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = k(() => ((n == null ? void 0 : n.value) || []).concat(pg)), r = we();
  return r ? k(() => {
    var l;
    return Fs(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([a]) => !o.value.includes(a) && !(t && vg.test(a))));
  }) : (He("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), k(() => ({})));
}, qs = Symbol("buttonGroupContextKey"), Kn = Symbol("checkboxGroupContextKey"), gg = Symbol(), ul = Symbol("formContextKey"), Do = Symbol("formItemContextKey"), Ys = Symbol("elPaginationKey"), Xs = Symbol("scrollbarContextKey"), cl = Symbol("popper"), Zs = Symbol("popperContent"), dl = Symbol("elTooltip"), Qs = (e) => {
  const t = we();
  return k(() => {
    var n, o;
    return (o = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? o : void 0;
  });
}, Ca = T();
function On(e, t = void 0) {
  const n = we() ? de(gg, Ca) : Ca;
  return e ? k(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const er = Jo({
  type: String,
  values: vo,
  required: !1
}), wn = (e, t = {}) => {
  const n = T(void 0), o = t.prop ? n : Qs("size"), r = t.global ? n : On("size"), l = t.form ? { size: void 0 } : de(ul, void 0), a = t.formItem ? { size: void 0 } : de(Do, void 0);
  return k(() => o.value || m(e) || (a == null ? void 0 : a.size) || (l == null ? void 0 : l.size) || r.value || "");
}, tr = (e) => {
  const t = Qs("disabled"), n = de(ul, void 0);
  return k(() => t.value || m(e) || (n == null ? void 0 : n.disabled) || !1);
}, Js = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, a) => {
  Z(() => m(a), (s) => {
    s && He(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, mg = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), fl = "el", bg = "is-", an = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, oe = (e) => {
  const t = On("namespace", fl);
  return {
    namespace: t,
    b: (c = "") => an(t.value, e, c, "", ""),
    e: (c) => c ? an(t.value, e, "", c, "") : "",
    m: (c) => c ? an(t.value, e, "", "", c) : "",
    be: (c, v) => c && v ? an(t.value, e, c, v, "") : "",
    em: (c, v) => c && v ? an(t.value, e, "", c, v) : "",
    bm: (c, v) => c && v ? an(t.value, e, c, "", v) : "",
    bem: (c, v, w) => c && v && w ? an(t.value, e, c, v, w) : "",
    is: (c, ...v) => {
      const w = v.length >= 1 ? v[0] : !0;
      return c && w ? `${bg}${c}` : "";
    },
    cssVar: (c) => {
      const v = {};
      for (const w in c)
        c[w] && (v[`--${t.value}-${w}`] = c[w]);
      return v;
    },
    cssVarName: (c) => `--${t.value}-${c}`,
    cssVarBlock: (c) => {
      const v = {};
      for (const w in c)
        c[w] && (v[`--${t.value}-${e}-${w}`] = c[w]);
      return v;
    },
    cssVarBlockName: (c) => `--${t.value}-${e}-${c}`
  };
}, xr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, yg = Symbol("elIdInjection"), ei = () => we() ? de(yg, xr) : xr, ti = (e) => {
  const t = ei();
  !_e && t === xr && He("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = On("namespace", fl);
  return k(() => m(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Un = () => {
  const e = de(ul, void 0), t = de(Do, void 0);
  return {
    form: e,
    formItem: t
  };
}, pl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = T(!1)), o || (o = T(!1));
  const r = T();
  let l;
  const a = k(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return xe(() => {
    l = Z([kt(e, "id"), n], ([s, i]) => {
      const u = s ?? (i ? void 0 : ti().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Vo(() => {
    l && l(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
};
var wg = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const Cg = (e) => (t, n) => Sg(t, n, m(e)), Sg = (e, t, n) => Fe(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t == null ? void 0 : t[r]) != null ? l : `{${r}}`}`;
}), Eg = (e) => {
  const t = k(() => m(e).name), n = vn(e) ? e : T(e);
  return {
    lang: t,
    locale: n,
    t: Cg(e)
  };
}, It = () => {
  const e = On("locale");
  return Eg(k(() => e.value || wg));
}, _g = Jo({
  type: he(Boolean),
  default: null
}), $g = Jo({
  type: he(Function)
}), Og = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: _g,
    [n]: $g
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: s,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: d,
      onHide: f
    }) => {
      const p = we(), { emit: h } = p, c = p.props, v = k(() => wt(c[n])), w = k(() => c[e] === null), g = (S) => {
        a.value !== !0 && (a.value = !0, s && (s.value = S), wt(d) && d(S));
      }, y = (S) => {
        a.value !== !1 && (a.value = !1, s && (s.value = S), wt(f) && f(S));
      }, b = (S) => {
        if (c.disabled === !0 || wt(u) && !u())
          return;
        const x = v.value && _e;
        x && h(t, !0), (w.value || !x) && g(S);
      }, C = (S) => {
        if (c.disabled === !0 || !_e)
          return;
        const x = v.value && _e;
        x && h(t, !1), (w.value || !x) && y(S);
      }, E = (S) => {
        Mn(S) && (c.disabled && S ? v.value && h(t, !1) : a.value !== S && (S ? g() : y()));
      }, $ = () => {
        a.value ? C() : b();
      };
      return Z(() => c[e], E), i && p.appContext.config.globalProperties.$route !== void 0 && Z(() => ({
        ...p.proxy.$route
      }), () => {
        i.value && a.value && C();
      }), xe(() => {
        E(c[e]);
      }), {
        hide: C,
        show: b,
        toggle: $,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
var qe = "top", ft = "bottom", pt = "right", Ye = "left", vl = "auto", ho = [qe, ft, pt, Ye], In = "start", io = "end", Tg = "clippingParents", ni = "viewport", Yn = "popper", xg = "reference", Sa = ho.reduce(function(e, t) {
  return e.concat([t + "-" + In, t + "-" + io]);
}, []), nr = [].concat(ho, [vl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + In, t + "-" + io]);
}, []), kg = "beforeRead", Pg = "read", Ag = "afterRead", Lg = "beforeMain", Rg = "main", Mg = "afterMain", Ng = "beforeWrite", Ig = "write", Bg = "afterWrite", Fg = [kg, Pg, Ag, Lg, Rg, Mg, Ng, Ig, Bg];
function Mt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function _t(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Bn(e) {
  var t = _t(e).Element;
  return e instanceof t || e instanceof Element;
}
function dt(e) {
  var t = _t(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = _t(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function zg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !dt(l) || !Mt(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(a) {
      var s = r[a];
      s === !1 ? l.removeAttribute(a) : l.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Hg(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], l = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = a.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !dt(r) || !Mt(r) || (Object.assign(r.style, s), Object.keys(l).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var oi = { name: "applyStyles", enabled: !0, phase: "write", fn: zg, effect: Hg, requires: ["computeStyles"] };
function At(e) {
  return e.split("-")[0];
}
var pn = Math.max, Wo = Math.min, Fn = Math.round;
function zn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (dt(e) && t) {
    var l = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (o = Fn(n.width) / a || 1), l > 0 && (r = Fn(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function gl(e) {
  var t = zn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function ri(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && hl(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Kt(e) {
  return _t(e).getComputedStyle(e);
}
function Dg(e) {
  return ["table", "td", "th"].indexOf(Mt(e)) >= 0;
}
function on(e) {
  return ((Bn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function or(e) {
  return Mt(e) === "html" ? e : e.assignedSlot || e.parentNode || (hl(e) ? e.host : null) || on(e);
}
function Ea(e) {
  return !dt(e) || Kt(e).position === "fixed" ? null : e.offsetParent;
}
function Wg(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && dt(e)) {
    var o = Kt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = or(e);
  for (hl(r) && (r = r.host); dt(r) && ["html", "body"].indexOf(Mt(r)) < 0; ) {
    var l = Kt(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function go(e) {
  for (var t = _t(e), n = Ea(e); n && Dg(n) && Kt(n).position === "static"; )
    n = Ea(n);
  return n && (Mt(n) === "html" || Mt(n) === "body" && Kt(n).position === "static") ? t : n || Wg(e) || t;
}
function ml(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qn(e, t, n) {
  return pn(e, Wo(t, n));
}
function Vg(e, t, n) {
  var o = Qn(e, t, n);
  return o > n ? n : o;
}
function li() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ai(e) {
  return Object.assign({}, li(), e);
}
function si(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var jg = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ai(typeof e != "number" ? e : si(e, ho));
};
function Kg(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, a = n.modifiersData.popperOffsets, s = At(n.placement), i = ml(s), u = [Ye, pt].indexOf(s) >= 0, d = u ? "height" : "width";
  if (!(!l || !a)) {
    var f = jg(r.padding, n), p = gl(l), h = i === "y" ? qe : Ye, c = i === "y" ? ft : pt, v = n.rects.reference[d] + n.rects.reference[i] - a[i] - n.rects.popper[d], w = a[i] - n.rects.reference[i], g = go(l), y = g ? i === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = v / 2 - w / 2, C = f[h], E = y - p[d] - f[c], $ = y / 2 - p[d] / 2 + b, S = Qn(C, $, E), x = i;
    n.modifiersData[o] = (t = {}, t[x] = S, t.centerOffset = S - $, t);
  }
}
function Ug(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !ri(t.elements.popper, r) || (t.elements.arrow = r));
}
var Gg = { name: "arrow", enabled: !0, phase: "main", fn: Kg, effect: Ug, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Hn(e) {
  return e.split("-")[1];
}
var qg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Yg(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: Fn(t * r) / r || 0, y: Fn(n * r) / r || 0 };
}
function _a(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, a = e.offsets, s = e.position, i = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = a.x, h = p === void 0 ? 0 : p, c = a.y, v = c === void 0 ? 0 : c, w = typeof d == "function" ? d({ x: h, y: v }) : { x: h, y: v };
  h = w.x, v = w.y;
  var g = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), b = Ye, C = qe, E = window;
  if (u) {
    var $ = go(n), S = "clientHeight", x = "clientWidth";
    if ($ === _t(n) && ($ = on(n), Kt($).position !== "static" && s === "absolute" && (S = "scrollHeight", x = "scrollWidth")), $ = $, r === qe || (r === Ye || r === pt) && l === io) {
      C = ft;
      var P = f && $ === E && E.visualViewport ? E.visualViewport.height : $[S];
      v -= P - o.height, v *= i ? 1 : -1;
    }
    if (r === Ye || (r === qe || r === ft) && l === io) {
      b = pt;
      var H = f && $ === E && E.visualViewport ? E.visualViewport.width : $[x];
      h -= H - o.width, h *= i ? 1 : -1;
    }
  }
  var V = Object.assign({ position: s }, u && qg), z = d === !0 ? Yg({ x: h, y: v }) : { x: h, y: v };
  if (h = z.x, v = z.y, i) {
    var Q;
    return Object.assign({}, V, (Q = {}, Q[C] = y ? "0" : "", Q[b] = g ? "0" : "", Q.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", Q));
  }
  return Object.assign({}, V, (t = {}, t[C] = y ? v + "px" : "", t[b] = g ? h + "px" : "", t.transform = "", t));
}
function Xg(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, a = l === void 0 ? !0 : l, s = n.roundOffsets, i = s === void 0 ? !0 : s, u = { placement: At(t.placement), variation: Hn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, _a(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, _a(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ii = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Xg, data: {} }, bo = { passive: !0 };
function Zg(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, a = o.resize, s = a === void 0 ? !0 : a, i = _t(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, bo);
  }), s && i.addEventListener("resize", n.update, bo), function() {
    l && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, bo);
    }), s && i.removeEventListener("resize", n.update, bo);
  };
}
var ui = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Zg, data: {} }, Qg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Qg[t];
  });
}
var Jg = { start: "end", end: "start" };
function $a(e) {
  return e.replace(/start|end/g, function(t) {
    return Jg[t];
  });
}
function bl(e) {
  var t = _t(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function yl(e) {
  return zn(on(e)).left + bl(e).scrollLeft;
}
function em(e) {
  var t = _t(e), n = on(e), o = t.visualViewport, r = n.clientWidth, l = n.clientHeight, a = 0, s = 0;
  return o && (r = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, s = o.offsetTop)), { width: r, height: l, x: a + yl(e), y: s };
}
function tm(e) {
  var t, n = on(e), o = bl(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = pn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = pn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + yl(e), i = -o.scrollTop;
  return Kt(r || n).direction === "rtl" && (s += pn(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: a, x: s, y: i };
}
function wl(e) {
  var t = Kt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function ci(e) {
  return ["html", "body", "#document"].indexOf(Mt(e)) >= 0 ? e.ownerDocument.body : dt(e) && wl(e) ? e : ci(or(e));
}
function Jn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = ci(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = _t(o), a = r ? [l].concat(l.visualViewport || [], wl(o) ? o : []) : o, s = t.concat(a);
  return r ? s : s.concat(Jn(or(a)));
}
function kr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function nm(e) {
  var t = zn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Oa(e, t) {
  return t === ni ? kr(em(e)) : Bn(t) ? nm(t) : kr(tm(on(e)));
}
function om(e) {
  var t = Jn(or(e)), n = ["absolute", "fixed"].indexOf(Kt(e).position) >= 0, o = n && dt(e) ? go(e) : e;
  return Bn(o) ? t.filter(function(r) {
    return Bn(r) && ri(r, o) && Mt(r) !== "body";
  }) : [];
}
function rm(e, t, n) {
  var o = t === "clippingParents" ? om(e) : [].concat(t), r = [].concat(o, [n]), l = r[0], a = r.reduce(function(s, i) {
    var u = Oa(e, i);
    return s.top = pn(u.top, s.top), s.right = Wo(u.right, s.right), s.bottom = Wo(u.bottom, s.bottom), s.left = pn(u.left, s.left), s;
  }, Oa(e, l));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function di(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? At(o) : null, l = o ? Hn(o) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case qe:
      i = { x: a, y: t.y - n.height };
      break;
    case ft:
      i = { x: a, y: t.y + t.height };
      break;
    case pt:
      i = { x: t.x + t.width, y: s };
      break;
    case Ye:
      i = { x: t.x - n.width, y: s };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? ml(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (l) {
      case In:
        i[u] = i[u] - (t[d] / 2 - n[d] / 2);
        break;
      case io:
        i[u] = i[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function uo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.boundary, a = l === void 0 ? Tg : l, s = n.rootBoundary, i = s === void 0 ? ni : s, u = n.elementContext, d = u === void 0 ? Yn : u, f = n.altBoundary, p = f === void 0 ? !1 : f, h = n.padding, c = h === void 0 ? 0 : h, v = ai(typeof c != "number" ? c : si(c, ho)), w = d === Yn ? xg : Yn, g = e.rects.popper, y = e.elements[p ? w : d], b = rm(Bn(y) ? y : y.contextElement || on(e.elements.popper), a, i), C = zn(e.elements.reference), E = di({ reference: C, element: g, strategy: "absolute", placement: r }), $ = kr(Object.assign({}, g, E)), S = d === Yn ? $ : C, x = { top: b.top - S.top + v.top, bottom: S.bottom - b.bottom + v.bottom, left: b.left - S.left + v.left, right: S.right - b.right + v.right }, P = e.modifiersData.offset;
  if (d === Yn && P) {
    var H = P[r];
    Object.keys(x).forEach(function(V) {
      var z = [pt, ft].indexOf(V) >= 0 ? 1 : -1, Q = [qe, ft].indexOf(V) >= 0 ? "y" : "x";
      x[V] += H[Q] * z;
    });
  }
  return x;
}
function lm(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, a = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? nr : i, d = Hn(o), f = d ? s ? Sa : Sa.filter(function(c) {
    return Hn(c) === d;
  }) : ho, p = f.filter(function(c) {
    return u.indexOf(c) >= 0;
  });
  p.length === 0 && (p = f);
  var h = p.reduce(function(c, v) {
    return c[v] = uo(e, { placement: v, boundary: r, rootBoundary: l, padding: a })[At(v)], c;
  }, {});
  return Object.keys(h).sort(function(c, v) {
    return h[c] - h[v];
  });
}
function am(e) {
  if (At(e) === vl)
    return [];
  var t = xo(e);
  return [$a(e), t, $a(t)];
}
function sm(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !0 : a, i = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, c = h === void 0 ? !0 : h, v = n.allowedAutoPlacements, w = t.options.placement, g = At(w), y = g === w, b = i || (y || !c ? [xo(w)] : am(w)), C = [w].concat(b).reduce(function(me, le) {
      return me.concat(At(le) === vl ? lm(t, { placement: le, boundary: d, rootBoundary: f, padding: u, flipVariations: c, allowedAutoPlacements: v }) : le);
    }, []), E = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), x = !0, P = C[0], H = 0; H < C.length; H++) {
      var V = C[H], z = At(V), Q = Hn(V) === In, D = [qe, ft].indexOf(z) >= 0, N = D ? "width" : "height", W = uo(t, { placement: V, boundary: d, rootBoundary: f, altBoundary: p, padding: u }), ne = D ? Q ? pt : Ye : Q ? ft : qe;
      E[N] > $[N] && (ne = xo(ne));
      var F = xo(ne), L = [];
      if (l && L.push(W[z] <= 0), s && L.push(W[ne] <= 0, W[F] <= 0), L.every(function(me) {
        return me;
      })) {
        P = V, x = !1;
        break;
      }
      S.set(V, L);
    }
    if (x)
      for (var X = c ? 3 : 1, ce = function(me) {
        var le = C.find(function(ye) {
          var Ce = S.get(ye);
          if (Ce)
            return Ce.slice(0, me).every(function(ie) {
              return ie;
            });
        });
        if (le)
          return P = le, "break";
      }, ve = X; ve > 0; ve--) {
        var be = ce(ve);
        if (be === "break")
          break;
      }
    t.placement !== P && (t.modifiersData[o]._skip = !0, t.placement = P, t.reset = !0);
  }
}
var im = { name: "flip", enabled: !0, phase: "main", fn: sm, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Ta(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function xa(e) {
  return [qe, pt, ft, Ye].some(function(t) {
    return e[t] >= 0;
  });
}
function um(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, a = uo(t, { elementContext: "reference" }), s = uo(t, { altBoundary: !0 }), i = Ta(a, o), u = Ta(s, r, l), d = xa(i), f = xa(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var cm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: um };
function dm(e, t, n) {
  var o = At(e), r = [Ye, qe].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = l[0], s = l[1];
  return a = a || 0, s = (s || 0) * r, [Ye, pt].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function fm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, a = nr.reduce(function(d, f) {
    return d[f] = dm(f, t.rects, l), d;
  }, {}), s = a[t.placement], i = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var pm = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: fm };
function vm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = di({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var fi = { name: "popperOffsets", enabled: !0, phase: "read", fn: vm, data: {} };
function hm(e) {
  return e === "x" ? "y" : "x";
}
function gm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !1 : a, i = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, h = p === void 0 ? !0 : p, c = n.tetherOffset, v = c === void 0 ? 0 : c, w = uo(t, { boundary: i, rootBoundary: u, padding: f, altBoundary: d }), g = At(t.placement), y = Hn(t.placement), b = !y, C = ml(g), E = hm(C), $ = t.modifiersData.popperOffsets, S = t.rects.reference, x = t.rects.popper, P = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, H = typeof P == "number" ? { mainAxis: P, altAxis: P } : Object.assign({ mainAxis: 0, altAxis: 0 }, P), V = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = { x: 0, y: 0 };
  if ($) {
    if (l) {
      var Q, D = C === "y" ? qe : Ye, N = C === "y" ? ft : pt, W = C === "y" ? "height" : "width", ne = $[C], F = ne + w[D], L = ne - w[N], X = h ? -x[W] / 2 : 0, ce = y === In ? S[W] : x[W], ve = y === In ? -x[W] : -S[W], be = t.elements.arrow, me = h && be ? gl(be) : { width: 0, height: 0 }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : li(), ye = le[D], Ce = le[N], ie = Qn(0, S[W], me[W]), ke = b ? S[W] / 2 - X - ie - ye - H.mainAxis : ce - ie - ye - H.mainAxis, je = b ? -S[W] / 2 + X + ie + Ce + H.mainAxis : ve + ie + Ce + H.mainAxis, ct = t.elements.arrow && go(t.elements.arrow), Ke = ct ? C === "y" ? ct.clientTop || 0 : ct.clientLeft || 0 : 0, Qe = (Q = V == null ? void 0 : V[C]) != null ? Q : 0, $t = ne + ke - Qe - Ke, Ot = ne + je - Qe, Je = Qn(h ? Wo(F, $t) : F, ne, h ? pn(L, Ot) : L);
      $[C] = Je, z[C] = Je - ne;
    }
    if (s) {
      var Tt, Ft = C === "x" ? qe : Ye, De = C === "x" ? ft : pt, Be = $[E], et = E === "y" ? "height" : "width", I = Be + w[Ft], fe = Be - w[De], Le = [qe, Ye].indexOf(g) !== -1, tt = (Tt = V == null ? void 0 : V[E]) != null ? Tt : 0, zt = Le ? I : Be - S[et] - x[et] - tt + H.altAxis, Ht = Le ? Be + S[et] + x[et] - tt - H.altAxis : fe, rn = h && Le ? Vg(zt, Be, Ht) : Qn(h ? zt : I, Be, h ? Ht : fe);
      $[E] = rn, z[E] = rn - Be;
    }
    t.modifiersData[o] = z;
  }
}
var mm = { name: "preventOverflow", enabled: !0, phase: "main", fn: gm, requiresIfExists: ["offset"] };
function bm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ym(e) {
  return e === _t(e) || !dt(e) ? bl(e) : bm(e);
}
function wm(e) {
  var t = e.getBoundingClientRect(), n = Fn(t.width) / e.offsetWidth || 1, o = Fn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Cm(e, t, n) {
  n === void 0 && (n = !1);
  var o = dt(t), r = dt(t) && wm(t), l = on(t), a = zn(e, r), s = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((Mt(t) !== "body" || wl(l)) && (s = ym(t)), dt(t) ? (i = zn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = yl(l))), { x: a.left + s.scrollLeft - i.x, y: a.top + s.scrollTop - i.y, width: a.width, height: a.height };
}
function Sm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function r(l) {
    n.add(l.name);
    var a = [].concat(l.requires || [], l.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var i = t.get(s);
        i && r(i);
      }
    }), o.push(l);
  }
  return e.forEach(function(l) {
    n.has(l.name) || r(l);
  }), o;
}
function Em(e) {
  var t = Sm(e);
  return Fg.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function _m(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function $m(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ka = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Pa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Cl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? ka : r;
  return function(a, s, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ka, l), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, d = [], f = !1, p = { state: u, setOptions: function(v) {
      var w = typeof v == "function" ? v(u.options) : v;
      c(), u.options = Object.assign({}, l, u.options, w), u.scrollParents = { reference: Bn(a) ? Jn(a) : a.contextElement ? Jn(a.contextElement) : [], popper: Jn(s) };
      var g = Em($m([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = g.filter(function(y) {
        return y.enabled;
      }), h(), p.update();
    }, forceUpdate: function() {
      if (!f) {
        var v = u.elements, w = v.reference, g = v.popper;
        if (Pa(w, g)) {
          u.rects = { reference: Cm(w, go(g), u.options.strategy === "fixed"), popper: gl(g) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
            return u.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var y = 0; y < u.orderedModifiers.length; y++) {
            if (u.reset === !0) {
              u.reset = !1, y = -1;
              continue;
            }
            var b = u.orderedModifiers[y], C = b.fn, E = b.options, $ = E === void 0 ? {} : E, S = b.name;
            typeof C == "function" && (u = C({ state: u, options: $, name: S, instance: p }) || u);
          }
        }
      }
    }, update: _m(function() {
      return new Promise(function(v) {
        p.forceUpdate(), v(u);
      });
    }), destroy: function() {
      c(), f = !0;
    } };
    if (!Pa(a, s))
      return p;
    p.setOptions(i).then(function(v) {
      !f && i.onFirstUpdate && i.onFirstUpdate(v);
    });
    function h() {
      u.orderedModifiers.forEach(function(v) {
        var w = v.name, g = v.options, y = g === void 0 ? {} : g, b = v.effect;
        if (typeof b == "function") {
          var C = b({ state: u, name: w, instance: p, options: y }), E = function() {
          };
          d.push(C || E);
        }
      });
    }
    function c() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return p;
  };
}
Cl();
var Om = [ui, fi, ii, oi];
Cl({ defaultModifiers: Om });
var Tm = [ui, fi, ii, oi, pm, im, mm, Gg, cm], pi = Cl({ defaultModifiers: Tm });
function xm() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return ol(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let kn = [];
const Aa = (e) => {
  const t = e;
  t.key === so.esc && kn.forEach((n) => n(t));
}, km = (e) => {
  xe(() => {
    kn.length === 0 && document.addEventListener("keydown", Aa), _e && kn.push(e);
  }), Nt(() => {
    kn = kn.filter((t) => t !== e), kn.length === 0 && _e && document.removeEventListener("keydown", Aa);
  });
};
let La;
const vi = () => {
  const e = On("namespace", fl), t = ei(), n = k(() => `${e.value}-popper-container-${t.prefix}`), o = k(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Pm = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Am = () => {
  jr(() => {
    if (!_e)
      return;
    const { id: e, selector: t } = vi();
    (process.env.NODE_ENV === "test" || !La && !document.body.querySelector(t.value)) && (La = Pm(e.value));
  });
}, Lm = $e({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), hi = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = xm();
  return {
    onOpen: (s) => {
      r(() => {
        n(s);
      }, m(e));
    },
    onClose: (s) => {
      r(() => {
        o(s);
      }, m(t));
    }
  };
}, gi = Symbol("elForwardRef"), Rm = (e) => {
  st(gi, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Mm = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Ra = T(0), Sl = () => {
  const e = On("zIndex", 2e3), t = k(() => e.value + Ra.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (Ra.value++, t.value)
  };
};
function Nm(e) {
  const t = T();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: l, value: a } = e.value;
    if (r == null || l == null)
      return;
    const s = a.slice(0, Math.max(0, r)), i = a.slice(Math.max(0, l));
    t.value = {
      selectionStart: r,
      selectionEnd: l,
      value: a,
      beforeTxt: s,
      afterTxt: i
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: r } = e.value, { beforeTxt: l, afterTxt: a, selectionStart: s } = t.value;
    if (l == null || a == null || s == null)
      return;
    let i = r.length;
    if (r.endsWith(a))
      i = r.length - a.length;
    else if (r.startsWith(l))
      i = l.length;
    else {
      const u = l[s - 1], d = r.indexOf(u, s - 1);
      d !== -1 && (i = d + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, o];
}
var pe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const Im = $e({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), Bm = q({
  name: "ElIcon",
  inheritAttrs: !1
}), Fm = /* @__PURE__ */ q({
  ...Bm,
  props: Im,
  setup(e) {
    const t = e, n = oe("icon"), o = k(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: zo(r) ? void 0 : Tr(r),
        "--color": l
      };
    });
    return (r, l) => (O(), M("i", fn({
      class: m(n).b(),
      style: m(o)
    }, r.$attrs), [
      re(r.$slots, "default")
    ], 16));
  }
});
var zm = /* @__PURE__ */ pe(Fm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const ze = vt(zm);
let gt;
const Hm = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Dm = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Wm(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Dm.map((a) => `${a}:${t.getPropertyValue(a)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function Ma(e, t = 1, n) {
  var o;
  gt || (gt = document.createElement("textarea"), document.body.appendChild(gt));
  const { paddingSize: r, borderSize: l, boxSizing: a, contextStyle: s } = Wm(e);
  gt.setAttribute("style", `${s};${Hm}`), gt.value = e.value || e.placeholder || "";
  let i = gt.scrollHeight;
  const u = {};
  a === "border-box" ? i = i + l : a === "content-box" && (i = i - r), gt.value = "";
  const d = gt.scrollHeight - r;
  if (Ae(t)) {
    let f = d * t;
    a === "border-box" && (f = f + r + l), i = Math.max(f, i), u.minHeight = `${f}px`;
  }
  if (Ae(n)) {
    let f = d * n;
    a === "border-box" && (f = f + r + l), i = Math.min(f, i);
  }
  return u.height = `${i}px`, (o = gt.parentNode) == null || o.removeChild(gt), gt = void 0, u;
}
const Vm = $e({
  id: {
    type: String,
    default: void 0
  },
  size: er,
  disabled: Boolean,
  modelValue: {
    type: he([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: he([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: Rt
  },
  prefixIcon: {
    type: Rt
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: he([Object, Array, String]),
    default: () => il({})
  }
}), jm = {
  [Ve]: (e) => at(e),
  input: (e) => at(e),
  change: (e) => at(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Km = ["role"], Um = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Gm = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], qm = q({
  name: "ElInput",
  inheritAttrs: !1
}), Ym = /* @__PURE__ */ q({
  ...qm,
  props: Vm,
  emits: jm,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = du(), l = jo(), a = k(() => {
      const I = {};
      return o.containerRole === "combobox" && (I["aria-haspopup"] = r["aria-haspopup"], I["aria-owns"] = r["aria-owns"], I["aria-expanded"] = r["aria-expanded"]), I;
    }), s = k(() => [
      o.type === "textarea" ? w.b() : v.b(),
      v.m(h.value),
      v.is("disabled", c.value),
      v.is("exceed", ce.value),
      {
        [v.b("group")]: l.prepend || l.append,
        [v.bm("group", "append")]: l.append,
        [v.bm("group", "prepend")]: l.prepend,
        [v.m("prefix")]: l.prefix || o.prefixIcon,
        [v.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [v.bm("suffix", "password-clear")]: ne.value && F.value
      },
      r.class
    ]), i = k(() => [
      v.e("wrapper"),
      v.is("focus", b.value)
    ]), u = hg({
      excludeKeys: k(() => Object.keys(a.value))
    }), { form: d, formItem: f } = Un(), { inputId: p } = pl(o, {
      formItemContext: f
    }), h = wn(), c = tr(), v = oe("input"), w = oe("textarea"), g = Xn(), y = Xn(), b = T(!1), C = T(!1), E = T(!1), $ = T(!1), S = T(), x = Xn(o.inputStyle), P = k(() => g.value || y.value), H = k(() => {
      var I;
      return (I = d == null ? void 0 : d.statusIcon) != null ? I : !1;
    }), V = k(() => (f == null ? void 0 : f.validateState) || ""), z = k(() => V.value && ug[V.value]), Q = k(() => $.value ? sg : zh), D = k(() => [
      r.style,
      o.inputStyle
    ]), N = k(() => [
      o.inputStyle,
      x.value,
      { resize: o.resize }
    ]), W = k(() => Zo(o.modelValue) ? "" : String(o.modelValue)), ne = k(() => o.clearable && !c.value && !o.readonly && !!W.value && (b.value || C.value)), F = k(() => o.showPassword && !c.value && !o.readonly && !!W.value && (!!W.value || b.value)), L = k(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !c.value && !o.readonly && !o.showPassword), X = k(() => Array.from(W.value).length), ce = k(() => !!L.value && X.value > Number(u.value.maxlength)), ve = k(() => !!l.suffix || !!o.suffixIcon || ne.value || o.showPassword || L.value || !!V.value && H.value), [be, me] = Nm(g);
    Nn(y, (I) => {
      if (!L.value || o.resize !== "both")
        return;
      const fe = I[0], { width: Le } = fe.contentRect;
      S.value = {
        right: `calc(100% - ${Le + 15 + 6}px)`
      };
    });
    const le = () => {
      const { type: I, autosize: fe } = o;
      if (!(!_e || I !== "textarea"))
        if (fe) {
          const Le = ut(fe) ? fe.minRows : void 0, tt = ut(fe) ? fe.maxRows : void 0;
          x.value = {
            ...Ma(y.value, Le, tt)
          };
        } else
          x.value = {
            minHeight: Ma(y.value).minHeight
          };
    }, ye = () => {
      const I = P.value;
      !I || I.value === W.value || (I.value = W.value);
    }, Ce = async (I) => {
      be();
      let { value: fe } = I.target;
      if (o.formatter && (fe = o.parser ? o.parser(fe) : fe, fe = o.formatter(fe)), !E.value) {
        if (fe === W.value) {
          ye();
          return;
        }
        n(Ve, fe), n("input", fe), await ue(), ye(), me();
      }
    }, ie = (I) => {
      n("change", I.target.value);
    }, ke = (I) => {
      n("compositionstart", I), E.value = !0;
    }, je = (I) => {
      var fe;
      n("compositionupdate", I);
      const Le = (fe = I.target) == null ? void 0 : fe.value, tt = Le[Le.length - 1] || "";
      E.value = !Gs(tt);
    }, ct = (I) => {
      n("compositionend", I), E.value && (E.value = !1, Ce(I));
    }, Ke = () => {
      $.value = !$.value, Qe();
    }, Qe = async () => {
      var I;
      await ue(), (I = P.value) == null || I.focus();
    }, $t = () => {
      var I;
      return (I = P.value) == null ? void 0 : I.blur();
    }, Ot = (I) => {
      b.value = !0, n("focus", I);
    }, Je = (I) => {
      var fe;
      b.value = !1, n("blur", I), o.validateEvent && ((fe = f == null ? void 0 : f.validate) == null || fe.call(f, "blur").catch((Le) => He(Le)));
    }, Tt = (I) => {
      C.value = !1, n("mouseleave", I);
    }, Ft = (I) => {
      C.value = !0, n("mouseenter", I);
    }, De = (I) => {
      n("keydown", I);
    }, Be = () => {
      var I;
      (I = P.value) == null || I.select();
    }, et = () => {
      n(Ve, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Z(() => o.modelValue, () => {
      var I;
      ue(() => le()), o.validateEvent && ((I = f == null ? void 0 : f.validate) == null || I.call(f, "change").catch((fe) => He(fe)));
    }), Z(W, () => ye()), Z(() => o.type, async () => {
      await ue(), ye(), le();
    }), xe(() => {
      !o.formatter && o.parser && He("ElInput", "If you set the parser, you also need to set the formatter."), ye(), ue(le);
    }), t({
      input: g,
      textarea: y,
      ref: P,
      textareaStyle: N,
      autosize: kt(o, "autosize"),
      focus: Qe,
      blur: $t,
      select: Be,
      clear: et,
      resizeTextarea: le
    }), (I, fe) => Te((O(), M("div", fn(m(a), {
      class: m(s),
      style: m(D),
      role: I.containerRole,
      onMouseenter: Ft,
      onMouseleave: Tt
    }), [
      j(" input "),
      I.type !== "textarea" ? (O(), M(Ne, { key: 0 }, [
        j(" prepend slot "),
        I.$slots.prepend ? (O(), M("div", {
          key: 0,
          class: R(m(v).be("group", "prepend"))
        }, [
          re(I.$slots, "prepend")
        ], 2)) : j("v-if", !0),
        B("div", {
          class: R(m(i))
        }, [
          j(" prefix slot "),
          I.$slots.prefix || I.prefixIcon ? (O(), M("span", {
            key: 0,
            class: R(m(v).e("prefix"))
          }, [
            B("span", {
              class: R(m(v).e("prefix-inner")),
              onClick: Qe
            }, [
              re(I.$slots, "prefix"),
              I.prefixIcon ? (O(), G(m(ze), {
                key: 0,
                class: R(m(v).e("icon"))
              }, {
                default: Y(() => [
                  (O(), G(lt(I.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0),
          B("input", fn({
            id: m(p),
            ref_key: "input",
            ref: g,
            class: m(v).e("inner")
          }, m(u), {
            type: I.showPassword ? $.value ? "text" : "password" : I.type,
            disabled: m(c),
            formatter: I.formatter,
            parser: I.parser,
            readonly: I.readonly,
            autocomplete: I.autocomplete,
            tabindex: I.tabindex,
            "aria-label": I.label,
            placeholder: I.placeholder,
            style: I.inputStyle,
            form: o.form,
            onCompositionstart: ke,
            onCompositionupdate: je,
            onCompositionend: ct,
            onInput: Ce,
            onFocus: Ot,
            onBlur: Je,
            onChange: ie,
            onKeydown: De
          }), null, 16, Um),
          j(" suffix slot "),
          m(ve) ? (O(), M("span", {
            key: 1,
            class: R(m(v).e("suffix"))
          }, [
            B("span", {
              class: R(m(v).e("suffix-inner")),
              onClick: Qe
            }, [
              !m(ne) || !m(F) || !m(L) ? (O(), M(Ne, { key: 0 }, [
                re(I.$slots, "suffix"),
                I.suffixIcon ? (O(), G(m(ze), {
                  key: 0,
                  class: R(m(v).e("icon"))
                }, {
                  default: Y(() => [
                    (O(), G(lt(I.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : j("v-if", !0)
              ], 64)) : j("v-if", !0),
              m(ne) ? (O(), G(m(ze), {
                key: 1,
                class: R([m(v).e("icon"), m(v).e("clear")]),
                onMousedown: yt(m(lo), ["prevent"]),
                onClick: et
              }, {
                default: Y(() => [
                  se(m(sl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : j("v-if", !0),
              m(F) ? (O(), G(m(ze), {
                key: 2,
                class: R([m(v).e("icon"), m(v).e("password")]),
                onClick: Ke
              }, {
                default: Y(() => [
                  (O(), G(lt(m(Q))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              m(L) ? (O(), M("span", {
                key: 3,
                class: R(m(v).e("count"))
              }, [
                B("span", {
                  class: R(m(v).e("count-inner"))
                }, ge(m(X)) + " / " + ge(m(u).maxlength), 3)
              ], 2)) : j("v-if", !0),
              m(V) && m(z) && m(H) ? (O(), G(m(ze), {
                key: 4,
                class: R([
                  m(v).e("icon"),
                  m(v).e("validateIcon"),
                  m(v).is("loading", m(V) === "validating")
                ])
              }, {
                default: Y(() => [
                  (O(), G(lt(m(z))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0)
        ], 2),
        j(" append slot "),
        I.$slots.append ? (O(), M("div", {
          key: 1,
          class: R(m(v).be("group", "append"))
        }, [
          re(I.$slots, "append")
        ], 2)) : j("v-if", !0)
      ], 64)) : (O(), M(Ne, { key: 1 }, [
        j(" textarea "),
        B("textarea", fn({
          id: m(p),
          ref_key: "textarea",
          ref: y,
          class: m(w).e("inner")
        }, m(u), {
          tabindex: I.tabindex,
          disabled: m(c),
          readonly: I.readonly,
          autocomplete: I.autocomplete,
          style: m(N),
          "aria-label": I.label,
          placeholder: I.placeholder,
          form: o.form,
          onCompositionstart: ke,
          onCompositionupdate: je,
          onCompositionend: ct,
          onInput: Ce,
          onFocus: Ot,
          onBlur: Je,
          onChange: ie,
          onKeydown: De
        }), null, 16, Gm),
        m(L) ? (O(), M("span", {
          key: 0,
          style: Oe(S.value),
          class: R(m(v).e("count"))
        }, ge(m(X)) + " / " + ge(m(u).maxlength), 7)) : j("v-if", !0)
      ], 64))
    ], 16, Km)), [
      [St, I.type !== "hidden"]
    ]);
  }
});
var Xm = /* @__PURE__ */ pe(Ym, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const El = vt(Xm), Pn = 4, Zm = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, Qm = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Jm = $e({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), e0 = "Thumb", t0 = /* @__PURE__ */ q({
  __name: "thumb",
  props: Jm,
  setup(e) {
    const t = e, n = de(Xs), o = oe("scrollbar");
    n || ll(e0, "can not inject scrollbar context");
    const r = T(), l = T(), a = T({}), s = T(!1);
    let i = !1, u = !1, d = _e ? document.onselectstart : null;
    const f = k(() => Zm[t.vertical ? "vertical" : "horizontal"]), p = k(() => Qm({
      size: t.size,
      move: t.move,
      bar: f.value
    })), h = k(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / l.value[f.value.offset]), c = ($) => {
      var S;
      if ($.stopPropagation(), $.ctrlKey || [1, 2].includes($.button))
        return;
      (S = window.getSelection()) == null || S.removeAllRanges(), w($);
      const x = $.currentTarget;
      x && (a.value[f.value.axis] = x[f.value.offset] - ($[f.value.client] - x.getBoundingClientRect()[f.value.direction]));
    }, v = ($) => {
      if (!l.value || !r.value || !n.wrapElement)
        return;
      const S = Math.abs($.target.getBoundingClientRect()[f.value.direction] - $[f.value.client]), x = l.value[f.value.offset] / 2, P = (S - x) * 100 * h.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = P * n.wrapElement[f.value.scrollSize] / 100;
    }, w = ($) => {
      $.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", y), d = document.onselectstart, document.onselectstart = () => !1;
    }, g = ($) => {
      if (!r.value || !l.value || i === !1)
        return;
      const S = a.value[f.value.axis];
      if (!S)
        return;
      const x = (r.value.getBoundingClientRect()[f.value.direction] - $[f.value.client]) * -1, P = l.value[f.value.offset] - S, H = (x - P) * 100 * h.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = H * n.wrapElement[f.value.scrollSize] / 100;
    }, y = () => {
      i = !1, a.value[f.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", y), E(), u && (s.value = !1);
    }, b = () => {
      u = !1, s.value = !!t.size;
    }, C = () => {
      u = !0, s.value = i;
    };
    Nt(() => {
      E(), document.removeEventListener("mouseup", y);
    });
    const E = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return jt(kt(n, "scrollbarElement"), "mousemove", b), jt(kt(n, "scrollbarElement"), "mouseleave", C), ($, S) => (O(), G(co, {
      name: m(o).b("fade"),
      persisted: ""
    }, {
      default: Y(() => [
        Te(B("div", {
          ref_key: "instance",
          ref: r,
          class: R([m(o).e("bar"), m(o).is(m(f).key)]),
          onMousedown: v
        }, [
          B("div", {
            ref_key: "thumb",
            ref: l,
            class: R(m(o).e("thumb")),
            style: Oe(m(p)),
            onMousedown: c
          }, null, 38)
        ], 34), [
          [St, $.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Na = /* @__PURE__ */ pe(t0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const n0 = $e({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), o0 = /* @__PURE__ */ q({
  __name: "bar",
  props: n0,
  setup(e, { expose: t }) {
    const n = e, o = T(0), r = T(0);
    return t({
      handleScroll: (a) => {
        if (a) {
          const s = a.offsetHeight - Pn, i = a.offsetWidth - Pn;
          r.value = a.scrollTop * 100 / s * n.ratioY, o.value = a.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (a, s) => (O(), M(Ne, null, [
      se(Na, {
        move: o.value,
        ratio: a.ratioX,
        size: a.width,
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      se(Na, {
        move: r.value,
        ratio: a.ratioY,
        size: a.height,
        vertical: "",
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var r0 = /* @__PURE__ */ pe(o0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const l0 = $e({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: he([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}), a0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ae)
}, Pr = "ElScrollbar", s0 = q({
  name: Pr
}), i0 = /* @__PURE__ */ q({
  ...s0,
  props: l0,
  emits: a0,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = oe("scrollbar");
    let l, a;
    const s = T(), i = T(), u = T(), d = T("0"), f = T("0"), p = T(), h = T(1), c = T(1), v = k(() => {
      const S = {};
      return o.height && (S.height = Tr(o.height)), o.maxHeight && (S.maxHeight = Tr(o.maxHeight)), [o.wrapStyle, S];
    }), w = k(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), g = k(() => [r.e("view"), o.viewClass]), y = () => {
      var S;
      i.value && ((S = p.value) == null || S.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function b(S, x) {
      ut(S) ? i.value.scrollTo(S) : Ae(S) && Ae(x) && i.value.scrollTo(S, x);
    }
    const C = (S) => {
      if (!Ae(S)) {
        He(Pr, "value must be a number");
        return;
      }
      i.value.scrollTop = S;
    }, E = (S) => {
      if (!Ae(S)) {
        He(Pr, "value must be a number");
        return;
      }
      i.value.scrollLeft = S;
    }, $ = () => {
      if (!i.value)
        return;
      const S = i.value.offsetHeight - Pn, x = i.value.offsetWidth - Pn, P = S ** 2 / i.value.scrollHeight, H = x ** 2 / i.value.scrollWidth, V = Math.max(P, o.minSize), z = Math.max(H, o.minSize);
      h.value = P / (S - P) / (V / (S - V)), c.value = H / (x - H) / (z / (x - z)), f.value = V + Pn < S ? `${V}px` : "", d.value = z + Pn < x ? `${z}px` : "";
    };
    return Z(() => o.noresize, (S) => {
      S ? (l == null || l(), a == null || a()) : ({ stop: l } = Nn(u, $), a = jt("resize", $));
    }, { immediate: !0 }), Z(() => [o.maxHeight, o.height], () => {
      o.native || ue(() => {
        var S;
        $(), i.value && ((S = p.value) == null || S.handleScroll(i.value));
      });
    }), st(Xs, Sn({
      scrollbarElement: s,
      wrapElement: i
    })), xe(() => {
      o.native || ue(() => {
        $();
      });
    }), ds(() => $()), t({
      wrapRef: i,
      update: $,
      scrollTo: b,
      setScrollTop: C,
      setScrollLeft: E,
      handleScroll: y
    }), (S, x) => (O(), M("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: R(m(r).b())
    }, [
      B("div", {
        ref_key: "wrapRef",
        ref: i,
        class: R(m(w)),
        style: Oe(m(v)),
        onScroll: y
      }, [
        (O(), G(lt(S.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: R(m(g)),
          style: Oe(S.viewStyle)
        }, {
          default: Y(() => [
            re(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      S.native ? j("v-if", !0) : (O(), G(r0, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: f.value,
        width: d.value,
        always: S.always,
        "ratio-x": c.value,
        "ratio-y": h.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var u0 = /* @__PURE__ */ pe(i0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const _l = vt(u0), c0 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], mi = $e({
  role: {
    type: String,
    values: c0,
    default: "tooltip"
  }
}), d0 = q({
  name: "ElPopperRoot",
  inheritAttrs: !1
}), f0 = /* @__PURE__ */ q({
  ...d0,
  props: mi,
  setup(e, { expose: t }) {
    const n = e, o = T(), r = T(), l = T(), a = T(), s = k(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: a,
      role: s
    };
    return t(i), st(cl, i), (u, d) => re(u.$slots, "default");
  }
});
var p0 = /* @__PURE__ */ pe(f0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const bi = $e({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), v0 = q({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), h0 = /* @__PURE__ */ q({
  ...v0,
  props: bi,
  setup(e, { expose: t }) {
    const n = e, o = oe("popper"), { arrowOffset: r, arrowRef: l } = de(Zs, void 0);
    return Z(() => n.arrowOffset, (a) => {
      r.value = a;
    }), Nt(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (a, s) => (O(), M("span", {
      ref_key: "arrowRef",
      ref: l,
      class: R(m(o).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var g0 = /* @__PURE__ */ pe(h0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const dr = "ElOnlyChild", m0 = q({
  name: dr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = de(gi), l = Mm((o = r == null ? void 0 : r.setForwardRef) != null ? o : lo);
    return () => {
      var a;
      const s = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return He(dr, "requires exact only one valid child."), null;
      const i = yi(s);
      return i ? Te(fu(i, n), [[l]]) : (He(dr, "no valid child node found"), null);
    };
  }
});
function yi(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (ut(n))
      switch (n.type) {
        case ps:
          continue;
        case fs:
        case "svg":
          return Ia(n);
        case Ne:
          return yi(n.children);
        default:
          return n;
      }
    return Ia(n);
  }
  return null;
}
function Ia(e) {
  const t = oe("only-child");
  return se("span", {
    class: t.e("content")
  }, [e]);
}
const wi = $e({
  virtualRef: {
    type: he(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: he(Function)
  },
  onMouseleave: {
    type: he(Function)
  },
  onClick: {
    type: he(Function)
  },
  onKeydown: {
    type: he(Function)
  },
  onFocus: {
    type: he(Function)
  },
  onBlur: {
    type: he(Function)
  },
  onContextmenu: {
    type: he(Function)
  },
  id: String,
  open: Boolean
}), b0 = q({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), y0 = /* @__PURE__ */ q({
  ...b0,
  props: wi,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = de(cl, void 0);
    Rm(r);
    const l = k(() => s.value ? n.id : void 0), a = k(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = k(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = k(() => s.value ? `${n.open}` : void 0);
    let u;
    return xe(() => {
      Z(() => n.virtualRef, (d) => {
        d && (r.value = Jt(d));
      }, {
        immediate: !0
      }), Z(r, (d, f) => {
        u == null || u(), u = void 0, ao(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((p) => {
          var h;
          const c = n[p];
          c && (d.addEventListener(p.slice(2).toLowerCase(), c), (h = f == null ? void 0 : f.removeEventListener) == null || h.call(f, p.slice(2).toLowerCase(), c));
        }), u = Z([l, a, s, i], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, c) => {
            Zo(p[c]) ? d.removeAttribute(h) : d.setAttribute(h, p[c]);
          });
        }, { immediate: !0 })), ao(f) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => f.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), Nt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (d, f) => d.virtualTriggering ? j("v-if", !0) : (O(), G(m(m0), fn({ key: 0 }, d.$attrs, {
      "aria-controls": m(l),
      "aria-describedby": m(a),
      "aria-expanded": m(i),
      "aria-haspopup": m(s)
    }), {
      default: Y(() => [
        re(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var w0 = /* @__PURE__ */ pe(y0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const fr = "focus-trap.focus-after-trapped", pr = "focus-trap.focus-after-released", C0 = "focus-trap.focusout-prevented", Ba = {
  cancelable: !0,
  bubbles: !1
}, S0 = {
  cancelable: !0,
  bubbles: !1
}, Fa = "focusAfterTrapped", za = "focusAfterReleased", E0 = Symbol("elFocusTrap"), $l = T(), rr = T(0), Ol = T(0);
let yo = 0;
const Ci = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ha = (e, t) => {
  for (const n of e)
    if (!_0(n, t))
      return n;
}, _0 = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, $0 = (e) => {
  const t = Ci(e), n = Ha(t, e), o = Ha(t.reverse(), e);
  return [n, o];
}, O0 = (e) => e instanceof HTMLInputElement && "select" in e, Xt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Ol.value = window.performance.now(), e !== n && O0(e) && t && e.select();
  }
};
function Da(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const T0 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Da(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = Da(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, x0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Xt(o, t), document.activeElement !== n)
      return;
}, Wa = T0(), k0 = () => rr.value > Ol.value, wo = () => {
  $l.value = "pointer", rr.value = window.performance.now();
}, Va = () => {
  $l.value = "keyboard", rr.value = window.performance.now();
}, P0 = () => (xe(() => {
  yo === 0 && (document.addEventListener("mousedown", wo), document.addEventListener("touchstart", wo), document.addEventListener("keydown", Va)), yo++;
}), Nt(() => {
  yo--, yo <= 0 && (document.removeEventListener("mousedown", wo), document.removeEventListener("touchstart", wo), document.removeEventListener("keydown", Va));
}), {
  focusReason: $l,
  lastUserFocusTimestamp: rr,
  lastAutomatedFocusTimestamp: Ol
}), Co = (e) => new CustomEvent(C0, {
  ...S0,
  detail: e
}), A0 = q({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Fa,
    za,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = T();
    let o, r;
    const { focusReason: l } = P0();
    km((c) => {
      e.trapped && !a.paused && t("release-requested", c);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, s = (c) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { key: v, altKey: w, ctrlKey: g, metaKey: y, currentTarget: b, shiftKey: C } = c, { loop: E } = e, $ = v === so.tab && !w && !g && !y, S = document.activeElement;
      if ($ && S) {
        const x = b, [P, H] = $0(x);
        if (P && H) {
          if (!C && S === H) {
            const z = Co({
              focusReason: l.value
            });
            t("focusout-prevented", z), z.defaultPrevented || (c.preventDefault(), E && Xt(P, !0));
          } else if (C && [P, x].includes(S)) {
            const z = Co({
              focusReason: l.value
            });
            t("focusout-prevented", z), z.defaultPrevented || (c.preventDefault(), E && Xt(H, !0));
          }
        } else if (S === x) {
          const z = Co({
            focusReason: l.value
          });
          t("focusout-prevented", z), z.defaultPrevented || c.preventDefault();
        }
      }
    };
    st(E0, {
      focusTrapRef: n,
      onKeydown: s
    }), Z(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), Z([n], ([c], [v]) => {
      c && (c.addEventListener("keydown", s), c.addEventListener("focusin", d), c.addEventListener("focusout", f)), v && (v.removeEventListener("keydown", s), v.removeEventListener("focusin", d), v.removeEventListener("focusout", f));
    });
    const i = (c) => {
      t(Fa, c);
    }, u = (c) => t(za, c), d = (c) => {
      const v = m(n);
      if (!v)
        return;
      const w = c.target, g = c.relatedTarget, y = w && v.contains(w);
      e.trapped || g && v.contains(g) || (o = g), y && t("focusin", c), !a.paused && e.trapped && (y ? r = w : Xt(r, !0));
    }, f = (c) => {
      const v = m(n);
      if (!(a.paused || !v))
        if (e.trapped) {
          const w = c.relatedTarget;
          !Zo(w) && !v.contains(w) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const g = Co({
                focusReason: l.value
              });
              t("focusout-prevented", g), g.defaultPrevented || Xt(r, !0);
            }
          }, 0);
        } else {
          const w = c.target;
          w && v.contains(w) || t("focusout", c);
        }
    };
    async function p() {
      await ue();
      const c = m(n);
      if (c) {
        Wa.push(a);
        const v = c.contains(document.activeElement) ? o : document.activeElement;
        if (o = v, !c.contains(v)) {
          const g = new Event(fr, Ba);
          c.addEventListener(fr, i), c.dispatchEvent(g), g.defaultPrevented || ue(() => {
            let y = e.focusStartEl;
            at(y) || (Xt(y), document.activeElement !== y && (y = "first")), y === "first" && x0(Ci(c), !0), (document.activeElement === v || y === "container") && Xt(c);
          });
        }
      }
    }
    function h() {
      const c = m(n);
      if (c) {
        c.removeEventListener(fr, i);
        const v = new CustomEvent(pr, {
          ...Ba,
          detail: {
            focusReason: l.value
          }
        });
        c.addEventListener(pr, u), c.dispatchEvent(v), !v.defaultPrevented && (l.value == "keyboard" || !k0()) && Xt(o ?? document.body), c.removeEventListener(pr, i), Wa.remove(a);
      }
    }
    return xe(() => {
      e.trapped && p(), Z(() => e.trapped, (c) => {
        c ? p() : h();
      });
    }), Nt(() => {
      e.trapped && h();
    }), {
      onKeydown: s
    };
  }
});
function L0(e, t, n, o, r, l) {
  return re(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var R0 = /* @__PURE__ */ pe(A0, [["render", L0], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const M0 = ["fixed", "absolute"], N0 = $e({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: he(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: nr,
    default: "bottom"
  },
  popperOptions: {
    type: he(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: M0,
    default: "absolute"
  }
}), Si = $e({
  ...N0,
  id: String,
  style: {
    type: he([String, Array, Object])
  },
  className: {
    type: he([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: he([String, Array, Object])
  },
  popperStyle: {
    type: he([String, Array, Object])
  },
  referenceEl: {
    type: he(Object)
  },
  triggerTargetEl: {
    type: he(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), I0 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, ja = (e, t) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: F0(e)
  };
  return z0(l, t), H0(l, r == null ? void 0 : r.modifiers), l;
}, B0 = (e) => {
  if (_e)
    return Jt(e);
};
function F0(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function z0(e, { arrowEl: t, arrowOffset: n }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: t,
      padding: n ?? 5
    }
  });
}
function H0(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const D0 = q({
  name: "ElPopperContent"
}), W0 = /* @__PURE__ */ q({
  ...D0,
  props: Si,
  emits: I0,
  setup(e, { expose: t, emit: n }) {
    const o = e, { popperInstanceRef: r, contentRef: l, triggerRef: a, role: s } = de(cl, void 0), i = de(Do, void 0), { nextZIndex: u } = Sl(), d = oe("popper"), f = T(), p = T("first"), h = T(), c = T();
    st(Zs, {
      arrowRef: h,
      arrowOffset: c
    }), i && (i.addInputId || i.removeInputId) && st(Do, {
      ...i,
      addInputId: lo,
      removeInputId: lo
    });
    const v = T(o.zIndex || u()), w = T(!1);
    let g;
    const y = k(() => B0(o.referenceEl) || m(a)), b = k(() => [{ zIndex: m(v) }, o.popperStyle]), C = k(() => [
      d.b(),
      d.is("pure", o.pure),
      d.is(o.effect),
      o.popperClass
    ]), E = k(() => s && s.value === "dialog" ? "false" : void 0), $ = ({
      referenceEl: D,
      popperContentEl: N,
      arrowEl: W
    }) => {
      const ne = ja(o, {
        arrowEl: W,
        arrowOffset: m(c)
      });
      return pi(D, N, ne);
    }, S = (D = !0) => {
      var N;
      (N = m(r)) == null || N.update(), D && (v.value = o.zIndex || u());
    }, x = () => {
      var D, N;
      const W = { name: "eventListeners", enabled: o.visible };
      (N = (D = m(r)) == null ? void 0 : D.setOptions) == null || N.call(D, (ne) => ({
        ...ne,
        modifiers: [...ne.modifiers || [], W]
      })), S(!1), o.visible && o.focusOnShow ? w.value = !0 : o.visible === !1 && (w.value = !1);
    }, P = () => {
      n("focus");
    }, H = (D) => {
      var N;
      ((N = D.detail) == null ? void 0 : N.focusReason) !== "pointer" && (p.value = "first", n("blur"));
    }, V = (D) => {
      o.visible && !w.value && (D.target && (p.value = D.target), w.value = !0);
    }, z = (D) => {
      o.trapping || (D.detail.focusReason === "pointer" && D.preventDefault(), w.value = !1);
    }, Q = () => {
      w.value = !1, n("close");
    };
    return xe(() => {
      let D;
      Z(y, (N) => {
        var W;
        D == null || D();
        const ne = m(r);
        if ((W = ne == null ? void 0 : ne.destroy) == null || W.call(ne), N) {
          const F = m(f);
          l.value = F, r.value = $({
            referenceEl: N,
            popperContentEl: F,
            arrowEl: m(h)
          }), D = Z(() => N.getBoundingClientRect(), () => S(), {
            immediate: !0
          });
        } else
          r.value = void 0;
      }, {
        immediate: !0
      }), Z(() => o.triggerTargetEl, (N, W) => {
        g == null || g(), g = void 0;
        const ne = m(N || f.value), F = m(W || f.value);
        ao(ne) && (g = Z([s, () => o.ariaLabel, E, () => o.id], (L) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((X, ce) => {
            Zo(L[ce]) ? ne.removeAttribute(X) : ne.setAttribute(X, L[ce]);
          });
        }, { immediate: !0 })), F !== ne && ao(F) && ["role", "aria-label", "aria-modal", "id"].forEach((L) => {
          F.removeAttribute(L);
        });
      }, { immediate: !0 }), Z(() => o.visible, x, { immediate: !0 }), Z(() => ja(o, {
        arrowEl: m(h),
        arrowOffset: m(c)
      }), (N) => {
        var W;
        return (W = r.value) == null ? void 0 : W.setOptions(N);
      });
    }), Nt(() => {
      g == null || g(), g = void 0;
    }), t({
      popperContentRef: f,
      popperInstanceRef: r,
      updatePopper: S,
      contentStyle: b
    }), (D, N) => (O(), M("div", {
      ref_key: "popperContentRef",
      ref: f,
      style: Oe(m(b)),
      class: R(m(C)),
      tabindex: "-1",
      onMouseenter: N[0] || (N[0] = (W) => D.$emit("mouseenter", W)),
      onMouseleave: N[1] || (N[1] = (W) => D.$emit("mouseleave", W))
    }, [
      se(m(R0), {
        trapped: w.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": f.value,
        "focus-start-el": p.value,
        onFocusAfterTrapped: P,
        onFocusAfterReleased: H,
        onFocusin: V,
        onFocusoutPrevented: z,
        onReleaseRequested: Q
      }, {
        default: Y(() => [
          re(D.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var V0 = /* @__PURE__ */ pe(W0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const j0 = vt(p0), K0 = oe("tooltip"), Tl = $e({
  ...Lm,
  ...Si,
  appendTo: {
    type: he([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: he(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${K0.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), Ei = $e({
  ...wi,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [so.enter, so.space]
  }
}), {
  useModelToggleProps: U0,
  useModelToggleEmits: G0,
  useModelToggle: q0
} = Og("visible"), Y0 = $e({
  ...mi,
  ...U0,
  ...Tl,
  ...Ei,
  ...bi,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), X0 = [
  ...G0,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Z0 = (e, t) => bn(e) ? e.includes(t) : e === t, Tn = (e, t, n) => (o) => {
  Z0(m(e), t) && n(o);
}, Q0 = q({
  name: "ElTooltipTrigger"
}), J0 = /* @__PURE__ */ q({
  ...Q0,
  props: Ei,
  setup(e, { expose: t }) {
    const n = e, o = oe("tooltip"), { controlled: r, id: l, open: a, onOpen: s, onClose: i, onToggle: u } = de(dl, void 0), d = T(null), f = () => {
      if (m(r) || n.disabled)
        return !0;
    }, p = kt(n, "trigger"), h = Vt(f, Tn(p, "hover", s)), c = Vt(f, Tn(p, "hover", i)), v = Vt(f, Tn(p, "click", (C) => {
      C.button === 0 && u(C);
    })), w = Vt(f, Tn(p, "focus", s)), g = Vt(f, Tn(p, "focus", i)), y = Vt(f, Tn(p, "contextmenu", (C) => {
      C.preventDefault(), u(C);
    })), b = Vt(f, (C) => {
      const { code: E } = C;
      n.triggerKeys.includes(E) && (C.preventDefault(), u(C));
    });
    return t({
      triggerRef: d
    }), (C, E) => (O(), G(m(w0), {
      id: m(l),
      "virtual-ref": C.virtualRef,
      open: m(a),
      "virtual-triggering": C.virtualTriggering,
      class: R(m(o).e("trigger")),
      onBlur: m(g),
      onClick: m(v),
      onContextmenu: m(y),
      onFocus: m(w),
      onMouseenter: m(h),
      onMouseleave: m(c),
      onKeydown: m(b)
    }, {
      default: Y(() => [
        re(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var eb = /* @__PURE__ */ pe(J0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const tb = q({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), nb = /* @__PURE__ */ q({
  ...tb,
  props: Tl,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = vi(), r = T(null), l = T(!1), {
      controlled: a,
      id: s,
      open: i,
      trigger: u,
      onClose: d,
      onOpen: f,
      onShow: p,
      onHide: h,
      onBeforeShow: c,
      onBeforeHide: v
    } = de(dl, void 0), w = k(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Nt(() => {
      l.value = !0;
    });
    const g = k(() => m(w) ? !0 : m(i)), y = k(() => n.disabled ? !1 : m(i)), b = k(() => n.appendTo || o.value), C = k(() => {
      var N;
      return (N = n.style) != null ? N : {};
    }), E = k(() => !m(i)), $ = () => {
      h();
    }, S = () => {
      if (m(a))
        return !0;
    }, x = Vt(S, () => {
      n.enterable && m(u) === "hover" && f();
    }), P = Vt(S, () => {
      m(u) === "hover" && d();
    }), H = () => {
      var N, W;
      (W = (N = r.value) == null ? void 0 : N.updatePopper) == null || W.call(N), c == null || c();
    }, V = () => {
      v == null || v();
    }, z = () => {
      p(), D = cv(k(() => {
        var N;
        return (N = r.value) == null ? void 0 : N.popperContentRef;
      }), () => {
        if (m(a))
          return;
        m(u) !== "hover" && d();
      });
    }, Q = () => {
      n.virtualTriggering || d();
    };
    let D;
    return Z(() => m(i), (N) => {
      N || D == null || D();
    }, {
      flush: "post"
    }), Z(() => n.content, () => {
      var N, W;
      (W = (N = r.value) == null ? void 0 : N.updatePopper) == null || W.call(N);
    }), t({
      contentRef: r
    }), (N, W) => (O(), G(pu, {
      disabled: !N.teleported,
      to: m(b)
    }, [
      se(co, {
        name: N.transition,
        onAfterLeave: $,
        onBeforeEnter: H,
        onAfterEnter: z,
        onBeforeLeave: V
      }, {
        default: Y(() => [
          m(g) ? Te((O(), G(m(V0), fn({
            key: 0,
            id: m(s),
            ref_key: "contentRef",
            ref: r
          }, N.$attrs, {
            "aria-label": N.ariaLabel,
            "aria-hidden": m(E),
            "boundaries-padding": N.boundariesPadding,
            "fallback-placements": N.fallbackPlacements,
            "gpu-acceleration": N.gpuAcceleration,
            offset: N.offset,
            placement: N.placement,
            "popper-options": N.popperOptions,
            strategy: N.strategy,
            effect: N.effect,
            enterable: N.enterable,
            pure: N.pure,
            "popper-class": N.popperClass,
            "popper-style": [N.popperStyle, m(C)],
            "reference-el": N.referenceEl,
            "trigger-target-el": N.triggerTargetEl,
            visible: m(y),
            "z-index": N.zIndex,
            onMouseenter: m(x),
            onMouseleave: m(P),
            onBlur: Q,
            onClose: m(d)
          }), {
            default: Y(() => [
              l.value ? j("v-if", !0) : re(N.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [St, m(y)]
          ]) : j("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var ob = /* @__PURE__ */ pe(nb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const rb = ["innerHTML"], lb = { key: 1 }, ab = q({
  name: "ElTooltip"
}), sb = /* @__PURE__ */ q({
  ...ab,
  props: Y0,
  emits: X0,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Am();
    const r = ti(), l = T(), a = T(), s = () => {
      var g;
      const y = m(l);
      y && ((g = y.popperInstanceRef) == null || g.update());
    }, i = T(!1), u = T(), { show: d, hide: f, hasUpdateHandler: p } = q0({
      indicator: i,
      toggleReason: u
    }), { onOpen: h, onClose: c } = hi({
      showAfter: kt(o, "showAfter"),
      hideAfter: kt(o, "hideAfter"),
      open: d,
      close: f
    }), v = k(() => Mn(o.visible) && !p.value);
    st(dl, {
      controlled: v,
      id: r,
      open: vu(i),
      trigger: kt(o, "trigger"),
      onOpen: (g) => {
        h(g);
      },
      onClose: (g) => {
        c(g);
      },
      onToggle: (g) => {
        m(i) ? c(g) : h(g);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: s
    }), Z(() => o.disabled, (g) => {
      g && i.value && (i.value = !1);
    });
    const w = () => {
      var g, y;
      const b = (y = (g = a.value) == null ? void 0 : g.contentRef) == null ? void 0 : y.popperContentRef;
      return b && b.contains(document.activeElement);
    };
    return hu(() => i.value && f()), t({
      popperRef: l,
      contentRef: a,
      isFocusInsideContent: w,
      updatePopper: s,
      onOpen: h,
      onClose: c,
      hide: f
    }), (g, y) => (O(), G(m(j0), {
      ref_key: "popperRef",
      ref: l,
      role: g.role
    }, {
      default: Y(() => [
        se(eb, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: Y(() => [
            g.$slots.default ? re(g.$slots, "default", { key: 0 }) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        se(ob, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": g.ariaLabel,
          "boundaries-padding": g.boundariesPadding,
          content: g.content,
          disabled: g.disabled,
          effect: g.effect,
          enterable: g.enterable,
          "fallback-placements": g.fallbackPlacements,
          "hide-after": g.hideAfter,
          "gpu-acceleration": g.gpuAcceleration,
          offset: g.offset,
          persistent: g.persistent,
          "popper-class": g.popperClass,
          "popper-style": g.popperStyle,
          placement: g.placement,
          "popper-options": g.popperOptions,
          pure: g.pure,
          "raw-content": g.rawContent,
          "reference-el": g.referenceEl,
          "trigger-target-el": g.triggerTargetEl,
          "show-after": g.showAfter,
          strategy: g.strategy,
          teleported: g.teleported,
          transition: g.transition,
          "virtual-triggering": g.virtualTriggering,
          "z-index": g.zIndex,
          "append-to": g.appendTo
        }, {
          default: Y(() => [
            re(g.$slots, "content", {}, () => [
              g.rawContent ? (O(), M("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, rb)) : (O(), M("span", lb, ge(g.content), 1))
            ]),
            g.showArrow ? (O(), G(m(g0), {
              key: 0,
              "arrow-offset": g.arrowOffset
            }, null, 8, ["arrow-offset"])) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var ib = /* @__PURE__ */ pe(sb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const _i = vt(ib), ub = (e, t) => {
  Js({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, k(() => e.type === "text"));
  const n = de(qs, void 0), o = On("button"), { form: r } = Un(), l = wn(k(() => n == null ? void 0 : n.size)), a = tr(), s = T(), i = jo(), u = k(() => e.type || (n == null ? void 0 : n.type) || ""), d = k(() => {
    var h, c, v;
    return (v = (c = e.autoInsertSpace) != null ? c : (h = o.value) == null ? void 0 : h.autoInsertSpace) != null ? v : !1;
  }), f = k(() => {
    var h;
    const c = (h = i.default) == null ? void 0 : h.call(i);
    if (d.value && (c == null ? void 0 : c.length) === 1) {
      const v = c[0];
      if ((v == null ? void 0 : v.type) === fs) {
        const w = v.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(w.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: a,
    _size: l,
    _type: u,
    _ref: s,
    shouldAddSpace: f,
    handleClick: (h) => {
      e.nativeType === "reset" && (r == null || r.resetFields()), t("click", h);
    }
  };
}, cb = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], db = ["button", "submit", "reset"], Ar = $e({
  size: er,
  disabled: Boolean,
  type: {
    type: String,
    values: cb,
    default: ""
  },
  icon: {
    type: Rt
  },
  nativeType: {
    type: String,
    values: db,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Rt,
    default: () => Qo
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
}), fb = {
  click: (e) => e instanceof MouseEvent
};
function Ie(e, t) {
  pb(e) && (e = "100%");
  var n = vb(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function So(e) {
  return Math.min(1, Math.max(0, e));
}
function pb(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function vb(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function $i(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Eo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function cn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function hb(e, t, n) {
  return {
    r: Ie(e, 255) * 255,
    g: Ie(t, 255) * 255,
    b: Ie(n, 255) * 255
  };
}
function Ka(e, t, n) {
  e = Ie(e, 255), t = Ie(t, 255), n = Ie(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), l = 0, a = 0, s = (o + r) / 2;
  if (o === r)
    a = 0, l = 0;
  else {
    var i = o - r;
    switch (a = s > 0.5 ? i / (2 - o - r) : i / (o + r), o) {
      case e:
        l = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / i + 2;
        break;
      case n:
        l = (e - t) / i + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: a, l: s };
}
function vr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function gb(e, t, n) {
  var o, r, l;
  if (e = Ie(e, 360), t = Ie(t, 100), n = Ie(n, 100), t === 0)
    r = n, l = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    o = vr(s, a, e + 1 / 3), r = vr(s, a, e), l = vr(s, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: l * 255 };
}
function Ua(e, t, n) {
  e = Ie(e, 255), t = Ie(t, 255), n = Ie(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), l = 0, a = o, s = o - r, i = o === 0 ? 0 : s / o;
  if (o === r)
    l = 0;
  else {
    switch (o) {
      case e:
        l = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / s + 2;
        break;
      case n:
        l = (e - t) / s + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: i, v: a };
}
function mb(e, t, n) {
  e = Ie(e, 360) * 6, t = Ie(t, 100), n = Ie(n, 100);
  var o = Math.floor(e), r = e - o, l = n * (1 - t), a = n * (1 - r * t), s = n * (1 - (1 - r) * t), i = o % 6, u = [n, a, l, l, s, n][i], d = [s, n, n, a, l, l][i], f = [l, l, s, n, n, a][i];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function Ga(e, t, n, o) {
  var r = [
    cn(Math.round(e).toString(16)),
    cn(Math.round(t).toString(16)),
    cn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function bb(e, t, n, o, r) {
  var l = [
    cn(Math.round(e).toString(16)),
    cn(Math.round(t).toString(16)),
    cn(Math.round(n).toString(16)),
    cn(yb(o))
  ];
  return r && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function yb(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function qa(e) {
  return ot(e) / 255;
}
function ot(e) {
  return parseInt(e, 16);
}
function wb(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Lr = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Cb(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, l = null, a = !1, s = !1;
  return typeof e == "string" && (e = _b(e)), typeof e == "object" && (Dt(e.r) && Dt(e.g) && Dt(e.b) ? (t = hb(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Dt(e.h) && Dt(e.s) && Dt(e.v) ? (o = Eo(e.s), r = Eo(e.v), t = mb(e.h, o, r), a = !0, s = "hsv") : Dt(e.h) && Dt(e.s) && Dt(e.l) && (o = Eo(e.s), l = Eo(e.l), t = gb(e.h, o, l), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = $i(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Sb = "[-\\+]?\\d+%?", Eb = "[-\\+]?\\d*\\.\\d+%?", en = "(?:".concat(Eb, ")|(?:").concat(Sb, ")"), hr = "[\\s|\\(]+(".concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")\\s*\\)?"), gr = "[\\s|\\(]+(".concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")\\s*\\)?"), bt = {
  CSS_UNIT: new RegExp(en),
  rgb: new RegExp("rgb" + hr),
  rgba: new RegExp("rgba" + gr),
  hsl: new RegExp("hsl" + hr),
  hsla: new RegExp("hsla" + gr),
  hsv: new RegExp("hsv" + hr),
  hsva: new RegExp("hsva" + gr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function _b(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Lr[e])
    e = Lr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = bt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = bt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = bt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = bt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = bt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = bt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = bt.hex8.exec(e), n ? {
    r: ot(n[1]),
    g: ot(n[2]),
    b: ot(n[3]),
    a: qa(n[4]),
    format: t ? "name" : "hex8"
  } : (n = bt.hex6.exec(e), n ? {
    r: ot(n[1]),
    g: ot(n[2]),
    b: ot(n[3]),
    format: t ? "name" : "hex"
  } : (n = bt.hex4.exec(e), n ? {
    r: ot(n[1] + n[1]),
    g: ot(n[2] + n[2]),
    b: ot(n[3] + n[3]),
    a: qa(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = bt.hex3.exec(e), n ? {
    r: ot(n[1] + n[1]),
    g: ot(n[2] + n[2]),
    b: ot(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Dt(e) {
  return Boolean(bt.CSS_UNIT.exec(String(e)));
}
var $b = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = wb(t)), this.originalInput = t;
      var r = Cb(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, l = t.r / 255, a = t.g / 255, s = t.b / 255;
      return l <= 0.03928 ? n = l / 12.92 : n = Math.pow((l + 0.055) / 1.055, 2.4), a <= 0.03928 ? o = a / 12.92 : o = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? r = s / 12.92 : r = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = $i(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Ua(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Ua(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Ka(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Ka(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Ga(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), bb(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Ie(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Ie(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Ga(this.r, this.g, this.b, !1), n = 0, o = Object.entries(Lr); n < o.length; n++) {
        var r = o[n], l = r[0], a = r[1];
        if (t === a)
          return l;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = Boolean(t);
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, l = !n && r && (t.startsWith("hex") || t === "name");
      return l ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = So(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = So(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = So(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = So(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), l = n / 100, a = {
        r: (r.r - o.r) * l + o.r,
        g: (r.g - o.g) * l + o.g,
        b: (r.b - o.b) * l + o.b,
        a: (r.a - o.a) * l + o.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, l = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, l.push(new e(o));
      return l;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, l = n.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: o, s: r, v: l })), l = (l + s) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb();
      return new e({
        r: o.r + (n.r - o.r) * n.a,
        g: o.g + (n.g - o.g) * n.a,
        b: o.b + (n.b - o.b) * n.a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], l = 360 / t, a = 1; a < t; a++)
        r.push(new e({ h: (o + a * l) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function Yt(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Ob(e) {
  const t = tr(), n = oe("button");
  return k(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const l = new $b(r), a = e.dark ? l.tint(20).toString() : Yt(l, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? Yt(l, 90) : l.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? Yt(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": a,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": a
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Yt(l, 90) : l.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? Yt(l, 50) : l.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? Yt(l, 80) : l.tint(80).toString());
      else {
        const s = e.dark ? Yt(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": i,
          "border-color": r,
          "hover-bg-color": s,
          "hover-text-color": i,
          "hover-border-color": s,
          "active-bg-color": a,
          "active-border-color": a
        }), t.value) {
          const u = e.dark ? Yt(l, 50) : l.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const Tb = ["aria-disabled", "disabled", "autofocus", "type"], xb = q({
  name: "ElButton"
}), kb = /* @__PURE__ */ q({
  ...xb,
  props: Ar,
  emits: fb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Ob(o), l = oe("button"), { _ref: a, _size: s, _type: i, _disabled: u, shouldAddSpace: d, handleClick: f } = ub(o, n);
    return t({
      ref: a,
      size: s,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (p, h) => (O(), M("button", {
      ref_key: "_ref",
      ref: a,
      class: R([
        m(l).b(),
        m(l).m(m(i)),
        m(l).m(m(s)),
        m(l).is("disabled", m(u)),
        m(l).is("loading", p.loading),
        m(l).is("plain", p.plain),
        m(l).is("round", p.round),
        m(l).is("circle", p.circle),
        m(l).is("text", p.text),
        m(l).is("link", p.link),
        m(l).is("has-bg", p.bg)
      ]),
      "aria-disabled": m(u) || p.loading,
      disabled: m(u) || p.loading,
      autofocus: p.autofocus,
      type: p.nativeType,
      style: Oe(m(r)),
      onClick: h[0] || (h[0] = (...c) => m(f) && m(f)(...c))
    }, [
      p.loading ? (O(), M(Ne, { key: 0 }, [
        p.$slots.loading ? re(p.$slots, "loading", { key: 0 }) : (O(), G(m(ze), {
          key: 1,
          class: R(m(l).is("loading"))
        }, {
          default: Y(() => [
            (O(), G(lt(p.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : p.icon || p.$slots.icon ? (O(), G(m(ze), { key: 1 }, {
        default: Y(() => [
          p.icon ? (O(), G(lt(p.icon), { key: 0 })) : re(p.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : j("v-if", !0),
      p.$slots.default ? (O(), M("span", {
        key: 2,
        class: R({ [m(l).em("text", "expand")]: m(d) })
      }, [
        re(p.$slots, "default")
      ], 2)) : j("v-if", !0)
    ], 14, Tb));
  }
});
var Pb = /* @__PURE__ */ pe(kb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const Ab = {
  size: Ar.size,
  type: Ar.type
}, Lb = q({
  name: "ElButtonGroup"
}), Rb = /* @__PURE__ */ q({
  ...Lb,
  props: Ab,
  setup(e) {
    const t = e;
    st(qs, Sn({
      size: kt(t, "size"),
      type: kt(t, "type")
    }));
    const n = oe("button");
    return (o, r) => (O(), M("div", {
      class: R(`${m(n).b("group")}`)
    }, [
      re(o.$slots, "default")
    ], 2));
  }
});
var Oi = /* @__PURE__ */ pe(Rb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Mb = vt(Pb, {
  ButtonGroup: Oi
});
jn(Oi);
const Zt = /* @__PURE__ */ new Map();
let Ya;
_e && (document.addEventListener("mousedown", (e) => Ya = e), document.addEventListener("mouseup", (e) => {
  for (const t of Zt.values())
    for (const { documentHandler: n } of t)
      n(e, Ya);
}));
function Xa(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : ao(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, a = o.target, s = r == null ? void 0 : r.target, i = !t || !t.instance, u = !a || !s, d = e.contains(a) || e.contains(s), f = e === a, p = n.length && n.some((c) => c == null ? void 0 : c.contains(a)) || n.length && n.includes(s), h = l && (l.contains(a) || l.contains(s));
    i || u || d || f || p || h || t.value(o, r);
  };
}
const Ti = {
  beforeMount(e, t) {
    Zt.has(e) || Zt.set(e, []), Zt.get(e).push({
      documentHandler: Xa(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Zt.has(e) || Zt.set(e, []);
    const n = Zt.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: Xa(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    Zt.delete(e);
  }
};
var Za = !1, un, Rr, Mr, ko, Po, xi, Ao, Nr, Ir, Br, ki, Fr, zr, Pi, Ai;
function Ge() {
  if (!Za) {
    Za = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Fr = /\b(iPhone|iP[ao]d)/.exec(e), zr = /\b(iP[ao]d)/.exec(e), Br = /Android/i.exec(e), Pi = /FBAN\/\w+;/i.exec(e), Ai = /Mobile/i.exec(e), ki = !!/Win64/.exec(e), t) {
      un = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, un && document && document.documentMode && (un = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      xi = o ? parseFloat(o[1]) + 4 : un, Rr = t[2] ? parseFloat(t[2]) : NaN, Mr = t[3] ? parseFloat(t[3]) : NaN, ko = t[4] ? parseFloat(t[4]) : NaN, ko ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), Po = t && t[1] ? parseFloat(t[1]) : NaN) : Po = NaN;
    } else
      un = Rr = Mr = Po = ko = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Ao = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        Ao = !1;
      Nr = !!n[2], Ir = !!n[3];
    } else
      Ao = Nr = Ir = !1;
  }
}
var Hr = { ie: function() {
  return Ge() || un;
}, ieCompatibilityMode: function() {
  return Ge() || xi > un;
}, ie64: function() {
  return Hr.ie() && ki;
}, firefox: function() {
  return Ge() || Rr;
}, opera: function() {
  return Ge() || Mr;
}, webkit: function() {
  return Ge() || ko;
}, safari: function() {
  return Hr.webkit();
}, chrome: function() {
  return Ge() || Po;
}, windows: function() {
  return Ge() || Nr;
}, osx: function() {
  return Ge() || Ao;
}, linux: function() {
  return Ge() || Ir;
}, iphone: function() {
  return Ge() || Fr;
}, mobile: function() {
  return Ge() || Fr || zr || Br || Ai;
}, nativeApp: function() {
  return Ge() || Pi;
}, android: function() {
  return Ge() || Br;
}, ipad: function() {
  return Ge() || zr;
} }, Nb = Hr, _o = !!(typeof window < "u" && window.document && window.document.createElement), Ib = { canUseDOM: _o, canUseWorkers: typeof Worker < "u", canUseEventListeners: _o && !!(window.addEventListener || window.attachEvent), canUseViewport: _o && !!window.screen, isInWorker: !_o }, Li = Ib, Ri;
Li.canUseDOM && (Ri = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function Bb(e, t) {
  if (!Li.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), o = typeof r[n] == "function";
  }
  return !o && Ri && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var Fb = Bb, Qa = 10, Ja = 40, es = 800;
function Mi(e) {
  var t = 0, n = 0, o = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * Qa, r = n * Qa, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (e.deltaMode == 1 ? (o *= Ja, r *= Ja) : (o *= es, r *= es)), o && !t && (t = o < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: r };
}
Mi.getEventType = function() {
  return Nb.firefox() ? "DOMMouseScroll" : Fb("wheel") ? "wheel" : "mousewheel";
};
var zb = Mi;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const Hb = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const r = zb(o);
      t && Reflect.apply(t, this, [o, r]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, Db = {
  beforeMount(e, t) {
    Hb(e, t.value);
  }
}, Ni = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: er,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Ii = {
  [Ve]: (e) => at(e) || Ae(e) || Mn(e),
  change: (e) => at(e) || Ae(e) || Mn(e)
}, Wb = ({
  model: e,
  isChecked: t
}) => {
  const n = de(Kn, void 0), o = k(() => {
    var l, a;
    const s = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (a = n == null ? void 0 : n.min) == null ? void 0 : a.value;
    return !zo(s) && e.value.length >= s && !t.value || !zo(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: tr(k(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, Vb = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: l
}) => {
  const a = de(Kn, void 0), { formItem: s } = Un(), { emit: i } = we();
  function u(c) {
    var v, w;
    return c === e.trueLabel || c === !0 ? (v = e.trueLabel) != null ? v : !0 : (w = e.falseLabel) != null ? w : !1;
  }
  function d(c, v) {
    i("change", u(c), v);
  }
  function f(c) {
    if (n.value)
      return;
    const v = c.target;
    i("change", u(v.checked), c);
  }
  async function p(c) {
    n.value || !o.value && !r.value && l.value && (c.composedPath().some((g) => g.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await ue(), d(t.value, c)));
  }
  const h = k(() => (a == null ? void 0 : a.validateEvent) || e.validateEvent);
  return Z(() => e.modelValue, () => {
    h.value && (s == null || s.validate("change").catch((c) => He(c)));
  }), {
    handleChange: f,
    onClickRoot: p
  };
}, jb = (e) => {
  const t = T(!1), { emit: n } = we(), o = de(Kn, void 0), r = k(() => zo(o) === !1), l = T(!1);
  return {
    model: k({
      get() {
        var s, i;
        return r.value ? (s = o == null ? void 0 : o.modelValue) == null ? void 0 : s.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(s) {
        var i, u;
        r.value && bn(s) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && s.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, s))) : (n(Ve, s), t.value = s);
      }
    }),
    isGroup: r,
    isLimitExceeded: l
  };
}, Kb = (e, t, { model: n }) => {
  const o = de(Kn, void 0), r = T(!1), l = k(() => {
    const u = n.value;
    return Mn(u) ? u : bn(u) ? ut(e.label) ? u.map(Ln).some((d) => Fo(d, e.label)) : u.map(Ln).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), a = wn(k(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), s = wn(k(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  })), i = k(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: a,
    isChecked: l,
    isFocused: r,
    checkboxSize: s,
    hasOwnLabel: i
  };
}, Ub = (e, { model: t }) => {
  function n() {
    bn(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Bi = (e, t) => {
  const { formItem: n } = Un(), { model: o, isGroup: r, isLimitExceeded: l } = jb(e), {
    isFocused: a,
    isChecked: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d
  } = Kb(e, t, { model: o }), { isDisabled: f } = Wb({ model: o, isChecked: s }), { inputId: p, isLabeledByFormItem: h } = pl(e, {
    formItemContext: n,
    disableIdGeneration: d,
    disableIdManagement: r
  }), { handleChange: c, onClickRoot: v } = Vb(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: d,
    isDisabled: f,
    isLabeledByFormItem: h
  });
  return Ub(e, { model: o }), {
    inputId: p,
    isLabeledByFormItem: h,
    isChecked: s,
    isDisabled: f,
    isFocused: a,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d,
    model: o,
    handleChange: c,
    onClickRoot: v
  };
}, Gb = ["tabindex", "role", "aria-checked"], qb = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], Yb = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], Xb = q({
  name: "ElCheckbox"
}), Zb = /* @__PURE__ */ q({
  ...Xb,
  props: Ni,
  emits: Ii,
  setup(e) {
    const t = e, n = jo(), {
      inputId: o,
      isLabeledByFormItem: r,
      isChecked: l,
      isDisabled: a,
      isFocused: s,
      checkboxSize: i,
      hasOwnLabel: u,
      model: d,
      handleChange: f,
      onClickRoot: p
    } = Bi(t, n), h = oe("checkbox"), c = k(() => [
      h.b(),
      h.m(i.value),
      h.is("disabled", a.value),
      h.is("bordered", t.border),
      h.is("checked", l.value)
    ]), v = k(() => [
      h.e("input"),
      h.is("disabled", a.value),
      h.is("checked", l.value),
      h.is("indeterminate", t.indeterminate),
      h.is("focus", s.value)
    ]);
    return (w, g) => (O(), G(lt(!m(u) && m(r) ? "span" : "label"), {
      class: R(m(c)),
      "aria-controls": w.indeterminate ? w.controls : null,
      onClick: m(p)
    }, {
      default: Y(() => [
        B("span", {
          class: R(m(v)),
          tabindex: w.indeterminate ? 0 : void 0,
          role: w.indeterminate ? "checkbox" : void 0,
          "aria-checked": w.indeterminate ? "mixed" : void 0
        }, [
          w.trueLabel || w.falseLabel ? Te((O(), M("input", {
            key: 0,
            id: m(o),
            "onUpdate:modelValue": g[0] || (g[0] = (y) => vn(d) ? d.value = y : null),
            class: R(m(h).e("original")),
            type: "checkbox",
            "aria-hidden": w.indeterminate ? "true" : "false",
            name: w.name,
            tabindex: w.tabindex,
            disabled: m(a),
            "true-value": w.trueLabel,
            "false-value": w.falseLabel,
            onChange: g[1] || (g[1] = (...y) => m(f) && m(f)(...y)),
            onFocus: g[2] || (g[2] = (y) => s.value = !0),
            onBlur: g[3] || (g[3] = (y) => s.value = !1)
          }, null, 42, qb)), [
            [Ro, m(d)]
          ]) : Te((O(), M("input", {
            key: 1,
            id: m(o),
            "onUpdate:modelValue": g[4] || (g[4] = (y) => vn(d) ? d.value = y : null),
            class: R(m(h).e("original")),
            type: "checkbox",
            "aria-hidden": w.indeterminate ? "true" : "false",
            disabled: m(a),
            value: w.label,
            name: w.name,
            tabindex: w.tabindex,
            onChange: g[5] || (g[5] = (...y) => m(f) && m(f)(...y)),
            onFocus: g[6] || (g[6] = (y) => s.value = !0),
            onBlur: g[7] || (g[7] = (y) => s.value = !1)
          }, null, 42, Yb)), [
            [Ro, m(d)]
          ]),
          B("span", {
            class: R(m(h).e("inner"))
          }, null, 2)
        ], 10, Gb),
        m(u) ? (O(), M("span", {
          key: 0,
          class: R(m(h).e("label"))
        }, [
          re(w.$slots, "default"),
          w.$slots.default ? j("v-if", !0) : (O(), M(Ne, { key: 0 }, [
            Rn(ge(w.label), 1)
          ], 64))
        ], 2)) : j("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var Qb = /* @__PURE__ */ pe(Zb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const Jb = ["name", "tabindex", "disabled", "true-value", "false-value"], ey = ["name", "tabindex", "disabled", "value"], ty = q({
  name: "ElCheckboxButton"
}), ny = /* @__PURE__ */ q({
  ...ty,
  props: Ni,
  emits: Ii,
  setup(e) {
    const t = e, n = jo(), {
      isFocused: o,
      isChecked: r,
      isDisabled: l,
      checkboxButtonSize: a,
      model: s,
      handleChange: i
    } = Bi(t, n), u = de(Kn, void 0), d = oe("checkbox"), f = k(() => {
      var h, c, v, w;
      const g = (c = (h = u == null ? void 0 : u.fill) == null ? void 0 : h.value) != null ? c : "";
      return {
        backgroundColor: g,
        borderColor: g,
        color: (w = (v = u == null ? void 0 : u.textColor) == null ? void 0 : v.value) != null ? w : "",
        boxShadow: g ? `-1px 0 0 0 ${g}` : void 0
      };
    }), p = k(() => [
      d.b("button"),
      d.bm("button", a.value),
      d.is("disabled", l.value),
      d.is("checked", r.value),
      d.is("focus", o.value)
    ]);
    return (h, c) => (O(), M("label", {
      class: R(m(p))
    }, [
      h.trueLabel || h.falseLabel ? Te((O(), M("input", {
        key: 0,
        "onUpdate:modelValue": c[0] || (c[0] = (v) => vn(s) ? s.value = v : null),
        class: R(m(d).be("button", "original")),
        type: "checkbox",
        name: h.name,
        tabindex: h.tabindex,
        disabled: m(l),
        "true-value": h.trueLabel,
        "false-value": h.falseLabel,
        onChange: c[1] || (c[1] = (...v) => m(i) && m(i)(...v)),
        onFocus: c[2] || (c[2] = (v) => o.value = !0),
        onBlur: c[3] || (c[3] = (v) => o.value = !1)
      }, null, 42, Jb)), [
        [Ro, m(s)]
      ]) : Te((O(), M("input", {
        key: 1,
        "onUpdate:modelValue": c[4] || (c[4] = (v) => vn(s) ? s.value = v : null),
        class: R(m(d).be("button", "original")),
        type: "checkbox",
        name: h.name,
        tabindex: h.tabindex,
        disabled: m(l),
        value: h.label,
        onChange: c[5] || (c[5] = (...v) => m(i) && m(i)(...v)),
        onFocus: c[6] || (c[6] = (v) => o.value = !0),
        onBlur: c[7] || (c[7] = (v) => o.value = !1)
      }, null, 42, ey)), [
        [Ro, m(s)]
      ]),
      h.$slots.default || h.label ? (O(), M("span", {
        key: 2,
        class: R(m(d).be("button", "inner")),
        style: Oe(m(r) ? m(f) : void 0)
      }, [
        re(h.$slots, "default", {}, () => [
          Rn(ge(h.label), 1)
        ])
      ], 6)) : j("v-if", !0)
    ], 2));
  }
});
var Fi = /* @__PURE__ */ pe(ny, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const oy = $e({
  modelValue: {
    type: he(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: er,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), ry = {
  [Ve]: (e) => bn(e),
  change: (e) => bn(e)
}, ly = q({
  name: "ElCheckboxGroup"
}), ay = /* @__PURE__ */ q({
  ...ly,
  props: oy,
  emits: ry,
  setup(e, { emit: t }) {
    const n = e, o = oe("checkbox"), { formItem: r } = Un(), { inputId: l, isLabeledByFormItem: a } = pl(n, {
      formItemContext: r
    }), s = async (u) => {
      t(Ve, u), await ue(), t("change", u);
    }, i = k({
      get() {
        return n.modelValue;
      },
      set(u) {
        s(u);
      }
    });
    return st(Kn, {
      ...nv(Wn(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: i,
      changeEvent: s
    }), Z(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((u) => He(u)));
    }), (u, d) => {
      var f;
      return O(), G(lt(u.tag), {
        id: m(l),
        class: R(m(o).b("group")),
        role: "group",
        "aria-label": m(a) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": m(a) ? (f = m(r)) == null ? void 0 : f.labelId : void 0
      }, {
        default: Y(() => [
          re(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var zi = /* @__PURE__ */ pe(ay, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Cn = vt(Qb, {
  CheckboxButton: Fi,
  CheckboxGroup: zi
});
jn(Fi);
jn(zi);
const Hi = $e({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: vo,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), sy = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, iy = q({
  name: "ElTag"
}), uy = /* @__PURE__ */ q({
  ...iy,
  props: Hi,
  emits: sy,
  setup(e, { emit: t }) {
    const n = e, o = wn(), r = oe("tag"), l = k(() => {
      const { type: i, hit: u, effect: d, closable: f, round: p } = n;
      return [
        r.b(),
        r.is("closable", f),
        r.m(i),
        r.m(o.value),
        r.m(d),
        r.is("hit", u),
        r.is("round", p)
      ];
    }), a = (i) => {
      t("close", i);
    }, s = (i) => {
      t("click", i);
    };
    return (i, u) => i.disableTransitions ? (O(), M("span", {
      key: 0,
      class: R(m(l)),
      style: Oe({ backgroundColor: i.color }),
      onClick: s
    }, [
      B("span", {
        class: R(m(r).e("content"))
      }, [
        re(i.$slots, "default")
      ], 2),
      i.closable ? (O(), G(m(ze), {
        key: 0,
        class: R(m(r).e("close")),
        onClick: yt(a, ["stop"])
      }, {
        default: Y(() => [
          se(m(ya))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : j("v-if", !0)
    ], 6)) : (O(), G(co, {
      key: 1,
      name: `${m(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: Y(() => [
        B("span", {
          class: R(m(l)),
          style: Oe({ backgroundColor: i.color }),
          onClick: s
        }, [
          B("span", {
            class: R(m(r).e("content"))
          }, [
            re(i.$slots, "default")
          ], 2),
          i.closable ? (O(), G(m(ze), {
            key: 0,
            class: R(m(r).e("close")),
            onClick: yt(a, ["stop"])
          }, {
            default: Y(() => [
              se(m(ya))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var cy = /* @__PURE__ */ pe(uy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const dy = vt(cy);
let fy = 0;
const py = q({
  name: "ImgEmpty",
  setup() {
    return {
      ns: oe("empty"),
      id: ++fy
    };
  }
}), vy = {
  viewBox: "0 0 79 86",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, hy = ["id"], gy = ["stop-color"], my = ["stop-color"], by = ["id"], yy = ["stop-color"], wy = ["stop-color"], Cy = ["id"], Sy = {
  id: "Illustrations",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, Ey = {
  id: "B-type",
  transform: "translate(-1268.000000, -535.000000)"
}, _y = {
  id: "Group-2",
  transform: "translate(1268.000000, 535.000000)"
}, $y = ["fill"], Oy = ["fill"], Ty = {
  id: "Group-Copy",
  transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
}, xy = ["fill"], ky = ["fill"], Py = ["fill"], Ay = ["fill"], Ly = ["fill"], Ry = {
  id: "Rectangle-Copy-17",
  transform: "translate(53.000000, 45.000000)"
}, My = ["fill", "xlink:href"], Ny = ["fill", "mask"], Iy = ["fill"];
function By(e, t, n, o, r, l) {
  return O(), M("svg", vy, [
    B("defs", null, [
      B("linearGradient", {
        id: `linearGradient-1-${e.id}`,
        x1: "38.8503086%",
        y1: "0%",
        x2: "61.1496914%",
        y2: "100%"
      }, [
        B("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-1")})`,
          offset: "0%"
        }, null, 8, gy),
        B("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-4")})`,
          offset: "100%"
        }, null, 8, my)
      ], 8, hy),
      B("linearGradient", {
        id: `linearGradient-2-${e.id}`,
        x1: "0%",
        y1: "9.5%",
        x2: "100%",
        y2: "90.5%"
      }, [
        B("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-1")})`,
          offset: "0%"
        }, null, 8, yy),
        B("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-6")})`,
          offset: "100%"
        }, null, 8, wy)
      ], 8, by),
      B("rect", {
        id: `path-3-${e.id}`,
        x: "0",
        y: "0",
        width: "17",
        height: "36"
      }, null, 8, Cy)
    ]),
    B("g", Sy, [
      B("g", Ey, [
        B("g", _y, [
          B("path", {
            id: "Oval-Copy-2",
            d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
            fill: `var(${e.ns.cssVarBlockName("fill-color-3")})`
          }, null, 8, $y),
          B("polygon", {
            id: "Rectangle-Copy-14",
            fill: `var(${e.ns.cssVarBlockName("fill-color-7")})`,
            transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
            points: "13 58 53 58 42 45 2 45"
          }, null, 8, Oy),
          B("g", Ty, [
            B("polygon", {
              id: "Rectangle-Copy-10",
              fill: `var(${e.ns.cssVarBlockName("fill-color-7")})`,
              transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
              points: "2.84078316e-14 3 18 3 23 7 5 7"
            }, null, 8, xy),
            B("polygon", {
              id: "Rectangle-Copy-11",
              fill: `var(${e.ns.cssVarBlockName("fill-color-5")})`,
              points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
            }, null, 8, ky),
            B("rect", {
              id: "Rectangle-Copy-12",
              fill: `url(#linearGradient-1-${e.id})`,
              transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
              x: "38",
              y: "7",
              width: "17",
              height: "36"
            }, null, 8, Py),
            B("polygon", {
              id: "Rectangle-Copy-13",
              fill: `var(${e.ns.cssVarBlockName("fill-color-2")})`,
              transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
              points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
            }, null, 8, Ay)
          ]),
          B("rect", {
            id: "Rectangle-Copy-15",
            fill: `url(#linearGradient-2-${e.id})`,
            x: "13",
            y: "45",
            width: "40",
            height: "36"
          }, null, 8, Ly),
          B("g", Ry, [
            B("use", {
              id: "Mask",
              fill: `var(${e.ns.cssVarBlockName("fill-color-8")})`,
              transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
              "xlink:href": `#path-3-${e.id}`
            }, null, 8, My),
            B("polygon", {
              id: "Rectangle-Copy",
              fill: `var(${e.ns.cssVarBlockName("fill-color-9")})`,
              mask: `url(#mask-4-${e.id})`,
              transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
              points: "7 0 24 0 20 18 7 16.5"
            }, null, 8, Ny)
          ]),
          B("polygon", {
            id: "Rectangle-Copy-18",
            fill: `var(${e.ns.cssVarBlockName("fill-color-2")})`,
            transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
            points: "62 45 79 45 70 58 53 58"
          }, null, 8, Iy)
        ])
      ])
    ])
  ]);
}
var Fy = /* @__PURE__ */ pe(py, [["render", By], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue"]]);
const zy = {
  image: {
    type: String,
    default: ""
  },
  imageSize: Number,
  description: {
    type: String,
    default: ""
  }
}, Hy = ["src"], Dy = { key: 1 }, Wy = q({
  name: "ElEmpty"
}), Vy = /* @__PURE__ */ q({
  ...Wy,
  props: zy,
  setup(e) {
    const t = e, { t: n } = It(), o = oe("empty"), r = k(() => t.description || n("el.table.emptyText")), l = k(() => ({
      width: t.imageSize ? `${t.imageSize}px` : ""
    }));
    return (a, s) => (O(), M("div", {
      class: R(m(o).b())
    }, [
      B("div", {
        class: R(m(o).e("image")),
        style: Oe(m(l))
      }, [
        a.image ? (O(), M("img", {
          key: 0,
          src: a.image,
          ondragstart: "return false"
        }, null, 8, Hy)) : re(a.$slots, "image", { key: 1 }, () => [
          se(Fy)
        ])
      ], 6),
      B("div", {
        class: R(m(o).e("description"))
      }, [
        a.$slots.description ? re(a.$slots, "description", { key: 0 }) : (O(), M("p", Dy, ge(m(r)), 1))
      ], 2),
      a.$slots.default ? (O(), M("div", {
        key: 0,
        class: R(m(o).e("bottom"))
      }, [
        re(a.$slots, "default")
      ], 2)) : j("v-if", !0)
    ], 2));
  }
});
var jy = /* @__PURE__ */ pe(Vy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue"]]);
const Di = vt(jy), Ky = $e({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: Rt
  }
}), Uy = {
  click: (e) => e instanceof MouseEvent
}, Gy = ["disabled", "aria-disabled"], qy = { key: 0 }, Yy = q({
  name: "ElPaginationPrev"
}), Xy = /* @__PURE__ */ q({
  ...Yy,
  props: Ky,
  emits: Uy,
  setup(e) {
    const t = e, n = k(() => t.disabled || t.currentPage <= 1);
    return (o, r) => (O(), M("button", {
      type: "button",
      class: "btn-prev",
      disabled: m(n),
      "aria-disabled": m(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.prevText ? (O(), M("span", qy, ge(o.prevText), 1)) : (O(), G(m(ze), { key: 1 }, {
        default: Y(() => [
          (O(), G(lt(o.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, Gy));
  }
});
var Zy = /* @__PURE__ */ pe(Xy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const Qy = $e({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: Rt
  }
}), Jy = ["disabled", "aria-disabled"], e1 = { key: 0 }, t1 = q({
  name: "ElPaginationNext"
}), n1 = /* @__PURE__ */ q({
  ...t1,
  props: Qy,
  emits: ["click"],
  setup(e) {
    const t = e, n = k(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (o, r) => (O(), M("button", {
      type: "button",
      class: "btn-next",
      disabled: m(n),
      "aria-disabled": m(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.nextText ? (O(), M("span", e1, ge(o.nextText), 1)) : (O(), G(m(ze), { key: 1 }, {
        default: Y(() => [
          (O(), G(lt(o.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, Jy));
  }
});
var o1 = /* @__PURE__ */ pe(n1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Wi = "ElSelectGroup", lr = "ElSelect";
function r1(e, t) {
  const n = de(lr), o = de(Wi, { disabled: !1 }), r = k(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), l = k(() => n.props.multiple ? f(n.props.modelValue, e.value) : p(e.value, n.props.modelValue)), a = k(() => {
    if (n.props.multiple) {
      const v = n.props.modelValue || [];
      return !l.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = k(() => e.label || (r.value ? "" : e.value)), i = k(() => e.value || e.label || ""), u = k(() => e.disabled || t.groupDisabled || a.value), d = we(), f = (v = [], w) => {
    if (r.value) {
      const g = n.props.valueKey;
      return v && v.some((y) => Ln(Fe(y, g)) === Fe(w, g));
    } else
      return v && v.includes(w);
  }, p = (v, w) => {
    if (r.value) {
      const { valueKey: g } = n.props;
      return Fe(v, g) === Fe(w, g);
    } else
      return v === w;
  }, h = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  Z(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Z(() => e.value, (v, w) => {
    const { remote: g, valueKey: y } = n.props;
    if (Object.is(v, w) || (n.onOptionDestroy(w, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !g) {
      if (y && typeof v == "object" && typeof w == "object" && v[y] === w[y])
        return;
      n.setSelected();
    }
  }), Z(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: c } = Ln(n);
  return Z(c, (v) => {
    const { query: w } = m(v), g = new RegExp(kv(w), "i");
    t.visible = g.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: l,
    isDisabled: u,
    hoverItem: h
  };
}
const l1 = q({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = oe("select"), n = Sn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: r, isDisabled: l, select: a, hoverItem: s } = r1(e, n), { visible: i, hover: u } = Wn(n), d = we().proxy;
    a.onOptionCreate(d), Nt(() => {
      const p = d.value, { selected: h } = a, v = (a.props.multiple ? h : [h]).some((w) => w.value === d.value);
      ue(() => {
        a.cachedOptions.get(p) === d && !v && a.cachedOptions.delete(p);
      }), a.onOptionDestroy(p, d);
    });
    function f() {
      e.disabled !== !0 && n.groupDisabled !== !0 && a.handleOptionSelect(d, !0);
    }
    return {
      ns: t,
      currentLabel: o,
      itemSelected: r,
      isDisabled: l,
      select: a,
      hoverItem: s,
      visible: i,
      hover: u,
      selectOptionClick: f,
      states: n
    };
  }
});
function a1(e, t, n, o, r, l) {
  return Te((O(), M("li", {
    class: R([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...a) => e.hoverItem && e.hoverItem(...a)),
    onClick: t[1] || (t[1] = yt((...a) => e.selectOptionClick && e.selectOptionClick(...a), ["stop"]))
  }, [
    re(e.$slots, "default", {}, () => [
      B("span", null, ge(e.currentLabel), 1)
    ])
  ], 34)), [
    [St, e.visible]
  ]);
}
var xl = /* @__PURE__ */ pe(l1, [["render", a1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const s1 = q({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = de(lr), t = oe("select"), n = k(() => e.props.popperClass), o = k(() => e.props.multiple), r = k(() => e.props.fitInputWidth), l = T("");
    function a() {
      var s;
      l.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return xe(() => {
      a(), Nn(e.selectWrapper, a);
    }), {
      ns: t,
      minWidth: l,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function i1(e, t, n, o, r, l) {
  return O(), M("div", {
    class: R([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Oe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    re(e.$slots, "default")
  ], 6);
}
var u1 = /* @__PURE__ */ pe(s1, [["render", i1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function c1(e) {
  const { t } = It();
  return Sn({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1,
    mouseEnter: !1
  });
}
const d1 = (e, t, n) => {
  const { t: o } = It(), r = oe("select");
  Js({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, k(() => e.suffixTransition === !1));
  const l = T(null), a = T(null), s = T(null), i = T(null), u = T(null), d = T(null), f = T(-1), p = Xn({ query: "" }), h = Xn(""), { form: c, formItem: v } = Un(), w = k(() => !e.filterable || e.multiple || !t.visible), g = k(() => e.disabled || (c == null ? void 0 : c.disabled)), y = k(() => {
    const _ = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !g.value && t.inputHovering && _;
  }), b = k(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), C = k(() => r.is("reverse", b.value && t.visible && e.suffixTransition)), E = k(() => e.remote ? 300 : 0), $ = k(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), S = k(() => Array.from(t.options.values())), x = k(() => Array.from(t.cachedOptions.values())), P = k(() => {
    const _ = S.value.filter((A) => !A.created).some((A) => A.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !_;
  }), H = wn(), V = k(() => ["small"].includes(H.value) ? "small" : "default"), z = k({
    get() {
      return t.visible && $.value !== !1;
    },
    set(_) {
      t.visible = _;
    }
  });
  Z([() => g.value, () => H.value, () => c == null ? void 0 : c.size], () => {
    ue(() => {
      Q();
    });
  }), Z(() => e.placeholder, (_) => {
    t.cachedPlaceHolder = t.currentPlaceholder = _;
  }), Z(() => e.modelValue, (_, A) => {
    e.multiple && (Q(), _ && _.length > 0 || a.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", D(t.query))), ne(), e.filterable && !e.multiple && (t.inputLength = 20), !Fo(_, A) && e.validateEvent && (v == null || v.validate("change").catch((U) => He(U)));
  }, {
    flush: "post",
    deep: !0
  }), Z(() => t.visible, (_) => {
    var A, U, ee;
    _ ? ((U = (A = s.value) == null ? void 0 : A.updatePopper) == null || U.call(A), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (ee = a.value) == null || ee.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), D(t.query), !e.multiple && !e.remote && (p.value.query = "", Gn(p), Gn(h)))) : (e.filterable && (wt(e.filterMethod) && e.filterMethod(""), wt(e.remoteMethod) && e.remoteMethod("")), a.value && a.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, L(), ue(() => {
      a.value && a.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", _);
  }), Z(() => t.options.entries(), () => {
    var _, A, U;
    if (!_e)
      return;
    (A = (_ = s.value) == null ? void 0 : _.updatePopper) == null || A.call(_), e.multiple && Q();
    const ee = ((U = u.value) == null ? void 0 : U.querySelectorAll("input")) || [];
    Array.from(ee).includes(document.activeElement) || ne(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && W();
  }, {
    flush: "post"
  }), Z(() => t.hoverIndex, (_) => {
    Ae(_) && _ > -1 ? f.value = S.value[_] || {} : f.value = {}, S.value.forEach((A) => {
      A.hover = f.value === A;
    });
  });
  const Q = () => {
    e.collapseTags && !e.filterable || ue(() => {
      var _, A;
      if (!l.value)
        return;
      const U = l.value.$el.querySelector("input"), ee = i.value, Ee = dg(H.value || (c == null ? void 0 : c.size));
      U.style.height = `${(t.selected.length === 0 ? Ee : Math.max(ee ? ee.clientHeight + (ee.clientHeight > Ee ? 6 : 0) : 0, Ee)) - 2}px`, t.tagInMultiLine = Number.parseFloat(U.style.height) >= Ee, t.visible && $.value !== !1 && ((A = (_ = s.value) == null ? void 0 : _.updatePopper) == null || A.call(_));
    });
  }, D = async (_) => {
    if (!(t.previousQuery === _ || t.isOnComposition)) {
      if (t.previousQuery === null && (wt(e.filterMethod) || wt(e.remoteMethod))) {
        t.previousQuery = _;
        return;
      }
      t.previousQuery = _, ue(() => {
        var A, U;
        t.visible && ((U = (A = s.value) == null ? void 0 : A.updatePopper) == null || U.call(A));
      }), t.hoverIndex = -1, e.multiple && e.filterable && ue(() => {
        const A = a.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, A) : A, N(), Q();
      }), e.remote && wt(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(_)) : wt(e.filterMethod) ? (e.filterMethod(_), Gn(h)) : (t.filteredOptionsCount = t.optionsCount, p.value.query = _, Gn(p), Gn(h)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await ue(), W());
    }
  }, N = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = a.value.value ? "" : t.cachedPlaceHolder);
  }, W = () => {
    const _ = S.value.filter((ee) => ee.visible && !ee.disabled && !ee.states.groupDisabled), A = _.find((ee) => ee.created), U = _[0];
    t.hoverIndex = je(S.value, A || U);
  }, ne = () => {
    var _;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const U = F(e.modelValue);
      (_ = U.props) != null && _.created ? (t.createdLabel = U.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = U.currentLabel, t.selected = U, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const A = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((U) => {
      A.push(F(U));
    }), t.selected = A, ue(() => {
      Q();
    });
  }, F = (_) => {
    let A;
    const U = cr(_).toLowerCase() === "object", ee = cr(_).toLowerCase() === "null", Ee = cr(_).toLowerCase() === "undefined";
    for (let ht = t.cachedOptions.size - 1; ht >= 0; ht--) {
      const Ue = x.value[ht];
      if (U ? Fe(Ue.value, e.valueKey) === Fe(_, e.valueKey) : Ue.value === _) {
        A = {
          value: _,
          currentLabel: Ue.currentLabel,
          isDisabled: Ue.isDisabled
        };
        break;
      }
    }
    if (A)
      return A;
    const Re = U ? _.label : !ee && !Ee ? _ : "", xt = {
      value: _,
      currentLabel: Re
    };
    return e.multiple && (xt.hitState = !1), xt;
  }, L = () => {
    setTimeout(() => {
      const _ = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((A) => S.value.findIndex((U) => Fe(U, _) === Fe(A, _)))) : t.hoverIndex = -1 : t.hoverIndex = S.value.findIndex((A) => Ht(A) === Ht(t.selected));
    }, 300);
  }, X = () => {
    var _, A;
    ce(), (A = (_ = s.value) == null ? void 0 : _.updatePopper) == null || A.call(_), e.multiple && !e.filterable && Q();
  }, ce = () => {
    var _;
    t.inputWidth = (_ = l.value) == null ? void 0 : _.$el.getBoundingClientRect().width;
  }, ve = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, D(t.query));
  }, be = gn(() => {
    ve();
  }, E.value), me = gn((_) => {
    D(_.target.value);
  }, E.value), le = (_) => {
    Fo(e.modelValue, _) || n.emit(Us, _);
  }, ye = (_) => {
    if (_.target.value.length <= 0 && !Je()) {
      const A = e.modelValue.slice();
      A.pop(), n.emit(Ve, A), le(A);
    }
    _.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, Ce = (_, A) => {
    const U = t.selected.indexOf(A);
    if (U > -1 && !g.value) {
      const ee = e.modelValue.slice();
      ee.splice(U, 1), n.emit(Ve, ee), le(ee), n.emit("remove-tag", A.value);
    }
    _.stopPropagation();
  }, ie = (_) => {
    _.stopPropagation();
    const A = e.multiple ? [] : "";
    if (!at(A))
      for (const U of t.selected)
        U.isDisabled && A.push(U.value);
    n.emit(Ve, A), le(A), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, ke = (_, A) => {
    var U;
    if (e.multiple) {
      const ee = (e.modelValue || []).slice(), Ee = je(ee, _.value);
      Ee > -1 ? ee.splice(Ee, 1) : (e.multipleLimit <= 0 || ee.length < e.multipleLimit) && ee.push(_.value), n.emit(Ve, ee), le(ee), _.created && (t.query = "", D(""), t.inputLength = 20), e.filterable && ((U = a.value) == null || U.focus());
    } else
      n.emit(Ve, _.value), le(_.value), t.visible = !1;
    t.isSilentBlur = A, ct(), !t.visible && ue(() => {
      Ke(_);
    });
  }, je = (_ = [], A) => {
    if (!ut(A))
      return _.indexOf(A);
    const U = e.valueKey;
    let ee = -1;
    return _.some((Ee, Re) => Ln(Fe(Ee, U)) === Fe(A, U) ? (ee = Re, !0) : !1), ee;
  }, ct = () => {
    t.softFocus = !0;
    const _ = a.value || l.value;
    _ && (_ == null || _.focus());
  }, Ke = (_) => {
    var A, U, ee, Ee, Re;
    const xt = Array.isArray(_) ? _[0] : _;
    let ht = null;
    if (xt != null && xt.value) {
      const Ue = S.value.filter((qt) => qt.value === xt.value);
      Ue.length > 0 && (ht = Ue[0].$el);
    }
    if (s.value && ht) {
      const Ue = (Ee = (ee = (U = (A = s.value) == null ? void 0 : A.popperRef) == null ? void 0 : U.contentRef) == null ? void 0 : ee.querySelector) == null ? void 0 : Ee.call(ee, `.${r.be("dropdown", "wrap")}`);
      Ue && Mv(Ue, ht);
    }
    (Re = d.value) == null || Re.handleScroll();
  }, Qe = (_) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(_.value, _), t.cachedOptions.set(_.value, _);
  }, $t = (_, A) => {
    t.options.get(_) === A && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(_));
  }, Ot = (_) => {
    _.code !== so.backspace && Je(!1), t.inputLength = a.value.value.length * 15 + 20, Q();
  }, Je = (_) => {
    if (!Array.isArray(t.selected))
      return;
    const A = t.selected[t.selected.length - 1];
    if (A)
      return _ === !0 || _ === !1 ? (A.hitState = _, _) : (A.hitState = !A.hitState, A.hitState);
  }, Tt = (_) => {
    const A = _.target.value;
    if (_.type === "compositionend")
      t.isOnComposition = !1, ue(() => D(A));
    else {
      const U = A[A.length - 1] || "";
      t.isOnComposition = !Gs(U);
    }
  }, Ft = () => {
    ue(() => Ke(t.selected));
  }, De = (_) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", _));
  }, Be = () => {
    var _;
    t.visible = !1, (_ = l.value) == null || _.blur();
  }, et = (_) => {
    ue(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", _);
    }), t.softFocus = !1;
  }, I = (_) => {
    ie(_);
  }, fe = () => {
    t.visible = !1;
  }, Le = (_) => {
    t.visible && (_.preventDefault(), _.stopPropagation(), t.visible = !1);
  }, tt = (_) => {
    var A;
    _ && !t.mouseEnter || g.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!s.value || !s.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((A = a.value || l.value) == null || A.focus()));
  }, zt = () => {
    t.visible ? S.value[t.hoverIndex] && ke(S.value[t.hoverIndex], void 0) : tt();
  }, Ht = (_) => ut(_.value) ? Fe(_.value, e.valueKey) : _.value, rn = k(() => S.value.filter((_) => _.visible).every((_) => _.disabled)), K = (_) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !rn.value) {
      _ === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : _ === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const A = S.value[t.hoverIndex];
      (A.disabled === !0 || A.states.groupDisabled === !0 || !A.visible) && K(_), ue(() => Ke(f.value));
    }
  };
  return {
    optionsArray: S,
    selectSize: H,
    handleResize: X,
    debouncedOnInputChange: be,
    debouncedQueryChange: me,
    deletePrevTag: ye,
    deleteTag: Ce,
    deleteSelected: ie,
    handleOptionSelect: ke,
    scrollToOption: Ke,
    readonly: w,
    resetInputHeight: Q,
    showClose: y,
    iconComponent: b,
    iconReverse: C,
    showNewOption: P,
    collapseTagSize: V,
    setSelected: ne,
    managePlaceholder: N,
    selectDisabled: g,
    emptyText: $,
    toggleLastOptionHitState: Je,
    resetInputState: Ot,
    handleComposition: Tt,
    onOptionCreate: Qe,
    onOptionDestroy: $t,
    handleMenuEnter: Ft,
    handleFocus: De,
    blur: Be,
    handleBlur: et,
    handleClearClick: I,
    handleClose: fe,
    handleKeydownEscape: Le,
    toggleMenu: tt,
    selectOption: zt,
    getValueKey: Ht,
    navigateOptions: K,
    dropMenuVisible: z,
    queryChange: p,
    groupQueryChange: h,
    reference: l,
    input: a,
    tooltipRef: s,
    tags: i,
    selectWrapper: u,
    scrollbar: d,
    handleMouseEnter: () => {
      t.mouseEnter = !0;
    },
    handleMouseLeave: () => {
      t.mouseEnter = !1;
    }
  };
}, ts = "ElSelect", f1 = q({
  name: ts,
  componentName: ts,
  components: {
    ElInput: El,
    ElSelectMenu: u1,
    ElOption: xl,
    ElTag: dy,
    ElScrollbar: _l,
    ElTooltip: _i,
    ElIcon: ze
  },
  directives: { ClickOutside: Ti },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: fg
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    teleported: Tl.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Rt,
      default: sl
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: Rt,
      default: js
    },
    tagType: { ...Hi.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: {
      type: Boolean,
      default: !1
    },
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: nr,
      default: "bottom-start"
    }
  },
  emits: [
    Ve,
    Us,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = oe("select"), o = oe("input"), { t: r } = It(), l = c1(e), {
      optionsArray: a,
      selectSize: s,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: p,
      deletePrevTag: h,
      deleteTag: c,
      deleteSelected: v,
      handleOptionSelect: w,
      scrollToOption: g,
      setSelected: y,
      resetInputHeight: b,
      managePlaceholder: C,
      showClose: E,
      selectDisabled: $,
      iconComponent: S,
      iconReverse: x,
      showNewOption: P,
      emptyText: H,
      toggleLastOptionHitState: V,
      resetInputState: z,
      handleComposition: Q,
      onOptionCreate: D,
      onOptionDestroy: N,
      handleMenuEnter: W,
      handleFocus: ne,
      blur: F,
      handleBlur: L,
      handleClearClick: X,
      handleClose: ce,
      handleKeydownEscape: ve,
      toggleMenu: be,
      selectOption: me,
      getValueKey: le,
      navigateOptions: ye,
      dropMenuVisible: Ce,
      reference: ie,
      input: ke,
      tooltipRef: je,
      tags: ct,
      selectWrapper: Ke,
      scrollbar: Qe,
      queryChange: $t,
      groupQueryChange: Ot,
      handleMouseEnter: Je,
      handleMouseLeave: Tt
    } = d1(e, l, t), { focus: Ft } = mg(ie), {
      inputWidth: De,
      selected: Be,
      inputLength: et,
      filteredOptionsCount: I,
      visible: fe,
      softFocus: Le,
      selectedLabel: tt,
      hoverIndex: zt,
      query: Ht,
      inputHovering: rn,
      currentPlaceholder: K,
      menuVisibleOnFocus: te,
      isOnComposition: ae,
      isSilentBlur: _,
      options: A,
      cachedOptions: U,
      optionsCount: ee,
      prefixWidth: Ee,
      tagInMultiLine: Re
    } = Wn(l), xt = k(() => {
      const nt = [n.b()], ln = m(s);
      return ln && nt.push(n.m(ln)), e.disabled && nt.push(n.m("disabled")), nt;
    }), ht = k(() => ({
      maxWidth: `${m(De) - 32}px`,
      width: "100%"
    })), Ue = k(() => ({ maxWidth: `${m(De) > 123 ? m(De) - 123 : m(De) - 75}px` }));
    st(lr, Sn({
      props: e,
      options: A,
      optionsArray: a,
      cachedOptions: U,
      optionsCount: ee,
      filteredOptionsCount: I,
      hoverIndex: zt,
      handleOptionSelect: w,
      onOptionCreate: D,
      onOptionDestroy: N,
      selectWrapper: Ke,
      selected: Be,
      setSelected: y,
      queryChange: $t,
      groupQueryChange: Ot
    })), xe(() => {
      l.cachedPlaceHolder = K.value = e.placeholder || r("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (K.value = ""), Nn(Ke, u), e.remote && e.multiple && b(), ue(() => {
        const nt = ie.value && ie.value.$el;
        if (nt && (De.value = nt.getBoundingClientRect().width, t.slots.prefix)) {
          const ln = nt.querySelector(`.${o.e("prefix")}`);
          Ee.value = Math.max(ln.getBoundingClientRect().width + 5, 30);
        }
      }), y();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Ve, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Ve, "");
    const qt = k(() => {
      var nt, ln;
      return (ln = (nt = je.value) == null ? void 0 : nt.popperRef) == null ? void 0 : ln.contentRef;
    });
    return {
      tagInMultiLine: Re,
      prefixWidth: Ee,
      selectSize: s,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: p,
      deletePrevTag: h,
      deleteTag: c,
      deleteSelected: v,
      handleOptionSelect: w,
      scrollToOption: g,
      inputWidth: De,
      selected: Be,
      inputLength: et,
      filteredOptionsCount: I,
      visible: fe,
      softFocus: Le,
      selectedLabel: tt,
      hoverIndex: zt,
      query: Ht,
      inputHovering: rn,
      currentPlaceholder: K,
      menuVisibleOnFocus: te,
      isOnComposition: ae,
      isSilentBlur: _,
      options: A,
      resetInputHeight: b,
      managePlaceholder: C,
      showClose: E,
      selectDisabled: $,
      iconComponent: S,
      iconReverse: x,
      showNewOption: P,
      emptyText: H,
      toggleLastOptionHitState: V,
      resetInputState: z,
      handleComposition: Q,
      handleMenuEnter: W,
      handleFocus: ne,
      blur: F,
      handleBlur: L,
      handleClearClick: X,
      handleClose: ce,
      handleKeydownEscape: ve,
      toggleMenu: be,
      selectOption: me,
      getValueKey: le,
      navigateOptions: ye,
      dropMenuVisible: Ce,
      focus: Ft,
      reference: ie,
      input: ke,
      tooltipRef: je,
      popperPaneRef: qt,
      tags: ct,
      selectWrapper: Ke,
      scrollbar: Qe,
      wrapperKls: xt,
      selectTagsStyle: ht,
      nsSelect: n,
      tagTextStyle: Ue,
      handleMouseEnter: Je,
      handleMouseLeave: Tt
    };
  }
}), p1 = ["disabled", "autocomplete"], v1 = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function h1(e, t, n, o, r, l) {
  const a = Pe("el-tag"), s = Pe("el-tooltip"), i = Pe("el-icon"), u = Pe("el-input"), d = Pe("el-option"), f = Pe("el-scrollbar"), p = Pe("el-select-menu"), h = Kr("click-outside");
  return Te((O(), M("div", {
    ref: "selectWrapper",
    class: R(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...c) => e.handleMouseEnter && e.handleMouseEnter(...c)),
    onMouseleave: t[23] || (t[23] = (...c) => e.handleMouseLeave && e.handleMouseLeave(...c)),
    onClick: t[24] || (t[24] = yt((...c) => e.toggleMenu && e.toggleMenu(...c), ["stop"]))
  }, [
    se(s, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: Y(() => [
        B("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (c) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (c) => e.inputHovering = !1)
        }, [
          e.multiple ? (O(), M("div", {
            key: 0,
            ref: "tags",
            class: R(e.nsSelect.e("tags")),
            style: Oe(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (O(), M("span", {
              key: 0,
              class: R([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              se(a, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (c) => e.deleteTag(c, e.selected[0]))
              }, {
                default: Y(() => [
                  B("span", {
                    class: R(e.nsSelect.e("tags-text")),
                    style: Oe(e.tagTextStyle)
                  }, ge(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (O(), G(a, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: Y(() => [
                  e.collapseTagsTooltip ? (O(), G(s, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: Y(() => [
                      B("span", {
                        class: R(e.nsSelect.e("tags-text"))
                      }, "+ " + ge(e.selected.length - 1), 3)
                    ]),
                    content: Y(() => [
                      B("div", {
                        class: R(e.nsSelect.e("collapse-tags"))
                      }, [
                        (O(!0), M(Ne, null, tn(e.selected.slice(1), (c, v) => (O(), M("div", {
                          key: v,
                          class: R(e.nsSelect.e("collapse-tag"))
                        }, [
                          (O(), G(a, {
                            key: e.getValueKey(c),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !c.isDisabled,
                            size: e.collapseTagSize,
                            hit: c.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (w) => e.deleteTag(w, c)
                          }, {
                            default: Y(() => [
                              B("span", {
                                class: R(e.nsSelect.e("tags-text")),
                                style: Oe({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, ge(c.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (O(), M("span", {
                    key: 1,
                    class: R(e.nsSelect.e("tags-text"))
                  }, "+ " + ge(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : j("v-if", !0)
            ], 2)) : j("v-if", !0),
            j(" <div> "),
            e.collapseTags ? j("v-if", !0) : (O(), G(co, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: Y(() => [
                B("span", {
                  class: R([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (O(!0), M(Ne, null, tn(e.selected, (c) => (O(), G(a, {
                    key: e.getValueKey(c),
                    closable: !e.selectDisabled && !c.isDisabled,
                    size: e.collapseTagSize,
                    hit: c.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (v) => e.deleteTag(v, c)
                  }, {
                    default: Y(() => [
                      B("span", {
                        class: R(e.nsSelect.e("tags-text")),
                        style: Oe({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ge(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            j(" </div> "),
            e.filterable ? Te((O(), M("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (c) => e.query = c),
              type: "text",
              class: R([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Oe({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: t[2] || (t[2] = (...c) => e.handleFocus && e.handleFocus(...c)),
              onBlur: t[3] || (t[3] = (...c) => e.handleBlur && e.handleBlur(...c)),
              onKeyup: t[4] || (t[4] = (...c) => e.managePlaceholder && e.managePlaceholder(...c)),
              onKeydown: [
                t[5] || (t[5] = (...c) => e.resetInputState && e.resetInputState(...c)),
                t[6] || (t[6] = rt(yt((c) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = rt(yt((c) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = rt((...c) => e.handleKeydownEscape && e.handleKeydownEscape(...c), ["esc"])),
                t[9] || (t[9] = rt(yt((...c) => e.selectOption && e.selectOption(...c), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = rt((...c) => e.deletePrevTag && e.deletePrevTag(...c), ["delete"])),
                t[11] || (t[11] = rt((c) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionupdate: t[13] || (t[13] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionend: t[14] || (t[14] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onInput: t[15] || (t[15] = (...c) => e.debouncedQueryChange && e.debouncedQueryChange(...c))
            }, null, 46, p1)), [
              [gu, e.query]
            ]) : j("v-if", !0)
          ], 6)) : j("v-if", !0),
          se(u, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (c) => e.selectedLabel = c),
            type: "text",
            placeholder: e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: R([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = rt(yt((c) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = rt(yt((c) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              rt(yt(e.selectOption, ["stop", "prevent"]), ["enter"]),
              rt(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = rt((c) => e.visible = !1, ["tab"]))
            ]
          }, vs({
            suffix: Y(() => [
              e.iconComponent && !e.showClose ? (O(), G(i, {
                key: 0,
                class: R([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: Y(() => [
                  (O(), G(lt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              e.showClose && e.clearIcon ? (O(), G(i, {
                key: 1,
                class: R([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: Y(() => [
                  (O(), G(lt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : j("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: Y(() => [
                B("div", v1, [
                  re(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: Y(() => [
        se(p, null, {
          default: Y(() => [
            Te(se(f, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: R([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: Y(() => [
                e.showNewOption ? (O(), G(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : j("v-if", !0),
                re(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [St, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (O(), M(Ne, { key: 0 }, [
              e.$slots.empty ? re(e.$slots, "empty", { key: 0 }) : (O(), M("p", {
                key: 1,
                class: R(e.nsSelect.be("dropdown", "empty"))
              }, ge(e.emptyText), 3))
            ], 64)) : j("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [h, e.handleClose, e.popperPaneRef]
  ]);
}
var g1 = /* @__PURE__ */ pe(f1, [["render", h1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const m1 = q({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = oe("select"), n = T(!0), o = we(), r = T([]);
    st(Wi, Sn({
      ...Wn(e)
    }));
    const l = de(lr);
    xe(() => {
      r.value = a(o.subTree);
    });
    const a = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((d) => {
        var f;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (f = d.children) != null && f.length && u.push(...a(d));
      }), u;
    }, { groupQueryChange: s } = Ln(l);
    return Z(s, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function b1(e, t, n, o, r, l) {
  return Te((O(), M("ul", {
    class: R(e.ns.be("group", "wrap"))
  }, [
    B("li", {
      class: R(e.ns.be("group", "title"))
    }, ge(e.label), 3),
    B("li", null, [
      B("ul", {
        class: R(e.ns.b("group"))
      }, [
        re(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [St, e.visible]
  ]);
}
var Vi = /* @__PURE__ */ pe(m1, [["render", b1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const ji = vt(g1, {
  Option: xl,
  OptionGroup: Vi
}), Ki = jn(xl);
jn(Vi);
const kl = () => de(Ys, {}), y1 = $e({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: he(Array),
    default: () => il([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: vo
  }
}), w1 = q({
  name: "ElPaginationSizes"
}), C1 = /* @__PURE__ */ q({
  ...w1,
  props: y1,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = It(), r = oe("pagination"), l = kl(), a = T(n.pageSize);
    Z(() => n.pageSizes, (u, d) => {
      if (!Fo(u, d) && Array.isArray(u)) {
        const f = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", f);
      }
    }), Z(() => n.pageSize, (u) => {
      a.value = u;
    });
    const s = k(() => n.pageSizes);
    function i(u) {
      var d;
      u !== a.value && (a.value = u, (d = l.handleSizeChange) == null || d.call(l, Number(u)));
    }
    return (u, d) => (O(), M("span", {
      class: R(m(r).e("sizes"))
    }, [
      se(m(ji), {
        "model-value": a.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        "validate-event": !1,
        onChange: i
      }, {
        default: Y(() => [
          (O(!0), M(Ne, null, tn(m(s), (f) => (O(), G(m(Ki), {
            key: f,
            value: f,
            label: f + m(o)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size"])
    ], 2));
  }
});
var S1 = /* @__PURE__ */ pe(C1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const E1 = $e({
  size: {
    type: String,
    values: vo
  }
}), _1 = ["disabled"], $1 = q({
  name: "ElPaginationJumper"
}), O1 = /* @__PURE__ */ q({
  ...$1,
  props: E1,
  setup(e) {
    const { t } = It(), n = oe("pagination"), { pageCount: o, disabled: r, currentPage: l, changeEvent: a } = kl(), s = T(), i = k(() => {
      var f;
      return (f = s.value) != null ? f : l == null ? void 0 : l.value;
    });
    function u(f) {
      s.value = +f;
    }
    function d(f) {
      f = Math.trunc(+f), a == null || a(+f), s.value = void 0;
    }
    return (f, p) => (O(), M("span", {
      class: R(m(n).e("jump")),
      disabled: m(r)
    }, [
      B("span", {
        class: R([m(n).e("goto")])
      }, ge(m(t)("el.pagination.goto")), 3),
      se(m(El), {
        size: f.size,
        class: R([m(n).e("editor"), m(n).is("in-pagination")]),
        min: 1,
        max: m(o),
        disabled: m(r),
        "model-value": m(i),
        "validate-event": !1,
        type: "number",
        "onUpdate:modelValue": u,
        onChange: d
      }, null, 8, ["size", "class", "max", "disabled", "model-value"]),
      B("span", {
        class: R([m(n).e("classifier")])
      }, ge(m(t)("el.pagination.pageClassifier")), 3)
    ], 10, _1));
  }
});
var T1 = /* @__PURE__ */ pe(O1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const x1 = $e({
  total: {
    type: Number,
    default: 1e3
  }
}), k1 = ["disabled"], P1 = q({
  name: "ElPaginationTotal"
}), A1 = /* @__PURE__ */ q({
  ...P1,
  props: x1,
  setup(e) {
    const { t } = It(), n = oe("pagination"), { disabled: o } = kl();
    return (r, l) => (O(), M("span", {
      class: R(m(n).e("total")),
      disabled: m(o)
    }, ge(m(t)("el.pagination.total", {
      total: r.total
    })), 11, k1));
  }
});
var L1 = /* @__PURE__ */ pe(A1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const R1 = $e({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: !0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
}), M1 = ["onKeyup"], N1 = ["aria-current", "tabindex"], I1 = ["tabindex"], B1 = ["aria-current", "tabindex"], F1 = ["tabindex"], z1 = ["aria-current", "tabindex"], H1 = q({
  name: "ElPaginationPager"
}), D1 = /* @__PURE__ */ q({
  ...H1,
  props: R1,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = oe("pager"), r = oe("icon"), l = T(!1), a = T(!1), s = T(!1), i = T(!1), u = T(!1), d = T(!1), f = k(() => {
      const g = n.pagerCount, y = (g - 1) / 2, b = Number(n.currentPage), C = Number(n.pageCount);
      let E = !1, $ = !1;
      C > g && (b > g - y && (E = !0), b < C - y && ($ = !0));
      const S = [];
      if (E && !$) {
        const x = C - (g - 2);
        for (let P = x; P < C; P++)
          S.push(P);
      } else if (!E && $)
        for (let x = 2; x < g; x++)
          S.push(x);
      else if (E && $) {
        const x = Math.floor(g / 2) - 1;
        for (let P = b - x; P <= b + x; P++)
          S.push(P);
      } else
        for (let x = 2; x < C; x++)
          S.push(x);
      return S;
    }), p = k(() => n.disabled ? -1 : 0);
    An(() => {
      const g = (n.pagerCount - 1) / 2;
      l.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - g && (l.value = !0), n.currentPage < n.pageCount - g && (a.value = !0));
    });
    function h(g = !1) {
      n.disabled || (g ? s.value = !0 : i.value = !0);
    }
    function c(g = !1) {
      g ? u.value = !0 : d.value = !0;
    }
    function v(g) {
      const y = g.target;
      if (y.tagName.toLowerCase() === "li" && Array.from(y.classList).includes("number")) {
        const b = Number(y.textContent);
        b !== n.currentPage && t("change", b);
      } else
        y.tagName.toLowerCase() === "li" && Array.from(y.classList).includes("more") && w(g);
    }
    function w(g) {
      const y = g.target;
      if (y.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let b = Number(y.textContent);
      const C = n.pageCount, E = n.currentPage, $ = n.pagerCount - 2;
      y.className.includes("more") && (y.className.includes("quickprev") ? b = E - $ : y.className.includes("quicknext") && (b = E + $)), Number.isNaN(+b) || (b < 1 && (b = 1), b > C && (b = C)), b !== E && t("change", b);
    }
    return (g, y) => (O(), M("ul", {
      class: R(m(o).b()),
      onClick: w,
      onKeyup: rt(v, ["enter"])
    }, [
      g.pageCount > 0 ? (O(), M("li", {
        key: 0,
        class: R([[
          m(o).is("active", g.currentPage === 1),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === 1,
        tabindex: m(p)
      }, " 1 ", 10, N1)) : j("v-if", !0),
      l.value ? (O(), M("li", {
        key: 1,
        class: R([
          "more",
          "btn-quickprev",
          m(r).b(),
          m(o).is("disabled", g.disabled)
        ]),
        tabindex: m(p),
        onMouseenter: y[0] || (y[0] = (b) => h(!0)),
        onMouseleave: y[1] || (y[1] = (b) => s.value = !1),
        onFocus: y[2] || (y[2] = (b) => c(!0)),
        onBlur: y[3] || (y[3] = (b) => u.value = !1)
      }, [
        (s.value || u.value) && !g.disabled ? (O(), G(m(Oh), { key: 0 })) : (O(), G(m(wa), { key: 1 }))
      ], 42, I1)) : j("v-if", !0),
      (O(!0), M(Ne, null, tn(m(f), (b) => (O(), M("li", {
        key: b,
        class: R([[
          m(o).is("active", g.currentPage === b),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === b,
        tabindex: m(p)
      }, ge(b), 11, B1))), 128)),
      a.value ? (O(), M("li", {
        key: 2,
        class: R([
          "more",
          "btn-quicknext",
          m(r).b(),
          m(o).is("disabled", g.disabled)
        ]),
        tabindex: m(p),
        onMouseenter: y[4] || (y[4] = (b) => h()),
        onMouseleave: y[5] || (y[5] = (b) => i.value = !1),
        onFocus: y[6] || (y[6] = (b) => c()),
        onBlur: y[7] || (y[7] = (b) => d.value = !1)
      }, [
        (i.value || d.value) && !g.disabled ? (O(), G(m(Lh), { key: 0 })) : (O(), G(m(wa), { key: 1 }))
      ], 42, F1)) : j("v-if", !0),
      g.pageCount > 1 ? (O(), M("li", {
        key: 3,
        class: R([[
          m(o).is("active", g.currentPage === g.pageCount),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === g.pageCount,
        tabindex: m(p)
      }, ge(g.pageCount), 11, z1)) : j("v-if", !0)
    ], 42, M1));
  }
});
var W1 = /* @__PURE__ */ pe(D1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const We = (e) => typeof e != "number", V1 = $e({
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => Ae(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: he(Array),
    default: () => il([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: Rt,
    default: () => Kv
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: Rt,
    default: () => al
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), j1 = {
  "update:current-page": (e) => Ae(e),
  "update:page-size": (e) => Ae(e),
  "size-change": (e) => Ae(e),
  "current-change": (e) => Ae(e),
  "prev-click": (e) => Ae(e),
  "next-click": (e) => Ae(e)
}, ns = "ElPagination";
var K1 = q({
  name: ns,
  props: V1,
  emits: j1,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = It(), r = oe("pagination"), l = we().vnode.props || {}, a = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, s = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = k(() => {
      if (We(e.total) && We(e.pageCount) || !We(e.currentPage) && !a)
        return !1;
      if (e.layout.includes("sizes")) {
        if (We(e.pageCount)) {
          if (!We(e.total) && !We(e.pageSize) && !s)
            return !1;
        } else if (!s)
          return !1;
      }
      return !0;
    }), u = T(We(e.defaultPageSize) ? 10 : e.defaultPageSize), d = T(We(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), f = k({
      get() {
        return We(e.pageSize) ? u.value : e.pageSize;
      },
      set(b) {
        We(e.pageSize) && (u.value = b), s && (t("update:page-size", b), t("size-change", b));
      }
    }), p = k(() => {
      let b = 0;
      return We(e.pageCount) ? We(e.total) || (b = Math.max(1, Math.ceil(e.total / f.value))) : b = e.pageCount, b;
    }), h = k({
      get() {
        return We(e.currentPage) ? d.value : e.currentPage;
      },
      set(b) {
        let C = b;
        b < 1 ? C = 1 : b > p.value && (C = p.value), We(e.currentPage) && (d.value = C), a && (t("update:current-page", C), t("current-change", C));
      }
    });
    Z(p, (b) => {
      h.value > b && (h.value = b);
    });
    function c(b) {
      h.value = b;
    }
    function v(b) {
      f.value = b;
      const C = p.value;
      h.value > C && (h.value = C);
    }
    function w() {
      e.disabled || (h.value -= 1, t("prev-click", h.value));
    }
    function g() {
      e.disabled || (h.value += 1, t("next-click", h.value));
    }
    function y(b, C) {
      b && (b.props || (b.props = {}), b.props.class = [b.props.class, C].join(" "));
    }
    return st(Ys, {
      pageCount: p,
      disabled: k(() => e.disabled),
      currentPage: h,
      changeEvent: c,
      handleSizeChange: v
    }), () => {
      var b, C;
      if (!i.value)
        return He(ns, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && p.value <= 1)
        return null;
      const E = [], $ = [], S = J("div", { class: r.e("rightwrapper") }, $), x = {
        prev: J(Zy, {
          disabled: e.disabled,
          currentPage: h.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: w
        }),
        jumper: J(T1, {
          size: e.small ? "small" : "default"
        }),
        pager: J(W1, {
          currentPage: h.value,
          pageCount: p.value,
          pagerCount: e.pagerCount,
          onChange: c,
          disabled: e.disabled
        }),
        next: J(o1, {
          disabled: e.disabled,
          currentPage: h.value,
          pageCount: p.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: g
        }),
        sizes: J(S1, {
          pageSize: f.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (C = (b = n == null ? void 0 : n.default) == null ? void 0 : b.call(n)) != null ? C : null,
        total: J(L1, { total: We(e.total) ? 0 : e.total })
      }, P = e.layout.split(",").map((V) => V.trim());
      let H = !1;
      return P.forEach((V) => {
        if (V === "->") {
          H = !0;
          return;
        }
        H ? $.push(x[V]) : E.push(x[V]);
      }), y(E[0], r.is("first")), y(E[E.length - 1], r.is("last")), H && $.length > 0 && (y($[0], r.is("first")), y($[$.length - 1], r.is("last")), E.push(S)), J("div", {
        role: "pagination",
        "aria-label": "pagination",
        class: [
          r.b(),
          r.is("background", e.background),
          {
            [r.m("small")]: e.small
          }
        ]
      }, E);
    };
  }
});
const U1 = vt(K1);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var G1 = /["'&<>]/, q1 = Y1;
function Y1(e) {
  var t = "" + e, n = G1.exec(t);
  if (!n)
    return t;
  var o, r = "", l = 0, a = 0;
  for (l = n.index; l < t.length; l++) {
    switch (t.charCodeAt(l)) {
      case 34:
        o = "&quot;";
        break;
      case 38:
        o = "&amp;";
        break;
      case 39:
        o = "&#39;";
        break;
      case 60:
        o = "&lt;";
        break;
      case 62:
        o = "&gt;";
        break;
      default:
        continue;
    }
    a !== l && (r += t.substring(a, l)), a = l + 1, r += o;
  }
  return a !== l ? r + t.substring(a, l) : r;
}
const mr = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, X1 = function(e, t, n, o, r) {
  if (!t && !o && (!r || Array.isArray(r) && !r.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = o ? null : function(s, i) {
    return r ? (Array.isArray(r) || (r = [r]), r.map((u) => typeof u == "string" ? Fe(s, u) : u(s, i, e))) : (t !== "$key" && ut(s) && "$value" in s && (s = s.$value), [ut(s) ? Fe(s, t) : s]);
  }, a = function(s, i) {
    if (o)
      return o(s.value, i.value);
    for (let u = 0, d = s.key.length; u < d; u++) {
      if (s.key[u] < i.key[u])
        return -1;
      if (s.key[u] > i.key[u])
        return 1;
    }
    return 0;
  };
  return e.map((s, i) => ({
    value: s,
    index: i,
    key: l ? l(s, i) : null
  })).sort((s, i) => {
    let u = a(s, i);
    return u || (u = s.index - i.index), u * +n;
  }).map((s) => s.value);
}, Ui = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, Z1 = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const r = e.columns[o];
    if (r.columnKey === t) {
      n = r;
      break;
    }
  }
  return n || ll("ElTable", `No column matching with column-key: ${t}`), n;
}, os = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? Ui(e, o[0]) : null;
}, Me = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let o = e;
    for (const r of n)
      o = o[r];
    return `${o}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, dn = function(e, t) {
  const n = {};
  return (e || []).forEach((o, r) => {
    n[Me(o, t)] = { row: o, index: r };
  }), n;
};
function Q1(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (mn(t, o)) {
      const r = t[o];
      typeof r < "u" && (n[o] = r);
    }
  return n;
}
function Pl(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function Gi(e) {
  return e === "" || e !== void 0 && (e = Pl(e), Number.isNaN(e) && (e = 80)), e;
}
function J1(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function ew(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function eo(e, t, n) {
  let o = !1;
  const r = e.indexOf(t), l = r !== -1, a = (s) => {
    s === "add" ? e.push(t) : e.splice(r, 1), o = !0, bn(t.children) && t.children.forEach((i) => {
      eo(e, i, n ?? !l);
    });
  };
  return Mn(n) ? n && !l ? a("add") : !n && l && a("remove") : a(l ? "remove" : "add"), o;
}
function tw(e, t, n = "children", o = "hasChildren") {
  const r = (a) => !(Array.isArray(a) && a.length);
  function l(a, s, i) {
    t(a, s, i), s.forEach((u) => {
      if (u[o]) {
        t(u, null, i + 1);
        return;
      }
      const d = u[n];
      r(d) || l(u, d, i + 1);
    });
  }
  e.forEach((a) => {
    if (a[o]) {
      t(a, null, 0);
      return;
    }
    const s = a[n];
    r(s) || l(a, s, 0);
  });
}
let Wt;
function nw(e, t, n, o) {
  o = zs({
    enterable: !0,
    showArrow: !0
  }, o);
  const { nextZIndex: r } = Sl(), l = e == null ? void 0 : e.dataset.prefix, a = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function s() {
    const w = o.effect === "light", g = document.createElement("div");
    return g.className = [
      `${l}-popper`,
      w ? "is-light" : "is-dark",
      o.popperClass || ""
    ].join(" "), n = q1(n), g.innerHTML = n, g.style.zIndex = String(r()), e == null || e.appendChild(g), g;
  }
  function i() {
    const w = document.createElement("div");
    return w.className = `${l}-popper__arrow`, w;
  }
  function u() {
    d && d.update();
  }
  Wt == null || Wt(), Wt = () => {
    try {
      d && d.destroy(), h && (e == null || e.removeChild(h)), t.removeEventListener("mouseenter", f), t.removeEventListener("mouseleave", p), a == null || a.removeEventListener("scroll", Wt), Wt = void 0;
    } catch {
    }
  };
  let d = null, f = u, p = Wt;
  o.enterable && ({ onOpen: f, onClose: p } = hi({
    showAfter: o.showAfter,
    hideAfter: o.hideAfter,
    open: u,
    close: Wt
  }));
  const h = s();
  h.onmouseenter = f, h.onmouseleave = p;
  const c = [];
  if (o.offset && c.push({
    name: "offset",
    options: {
      offset: [0, o.offset]
    }
  }), o.showArrow) {
    const w = h.appendChild(i());
    c.push({
      name: "arrow",
      options: {
        element: w,
        padding: 10
      }
    });
  }
  const v = o.popperOptions || {};
  return d = pi(t, h, {
    placement: o.placement || "top",
    strategy: "fixed",
    ...v,
    modifiers: v.modifiers ? c.concat(v.modifiers) : c
  }), t.addEventListener("mouseenter", f), t.addEventListener("mouseleave", p), a == null || a.addEventListener("scroll", Wt), d;
}
function qi(e) {
  return e.children ? Zp(e.children, qi) : [e];
}
function rs(e, t) {
  return e + t.colSpan;
}
const Yi = (e, t, n, o) => {
  let r = 0, l = e;
  const a = n.states.columns.value;
  if (o) {
    const i = qi(o[e]);
    r = a.slice(0, a.indexOf(i[0])).reduce(rs, 0), l = r + i.reduce(rs, 0) - 1;
  } else
    r = e;
  let s;
  switch (t) {
    case "left":
      l < n.states.fixedLeafColumnsLength.value && (s = "left");
      break;
    case "right":
      r >= a.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
      break;
    default:
      l < n.states.fixedLeafColumnsLength.value ? s = "left" : r >= a.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
  }
  return s ? {
    direction: s,
    start: r,
    after: l
  } : {};
}, Al = (e, t, n, o, r, l = 0) => {
  const a = [], { direction: s, start: i, after: u } = Yi(t, n, o, r);
  if (s) {
    const d = s === "left";
    a.push(`${e}-fixed-column--${s}`), d && u + l === o.states.fixedLeafColumnsLength.value - 1 ? a.push("is-last-column") : !d && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && a.push("is-first-column");
  }
  return a;
};
function ls(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const Ll = (e, t, n, o) => {
  const {
    direction: r,
    start: l = 0,
    after: a = 0
  } = Yi(e, t, n, o);
  if (!r)
    return;
  const s = {}, i = r === "left", u = n.states.columns.value;
  return i ? s.left = u.slice(0, l).reduce(ls, 0) : s.right = u.slice(a + 1).reverse().reduce(ls, 0), s;
}, Dn = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function ow(e) {
  const t = we(), n = T(!1), o = T([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const d = dn(o.value, u);
        o.value = i.reduce((f, p) => {
          const h = Me(p, u);
          return d[h] && f.push(p), f;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      eo(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], d = e.rowKey.value, f = dn(u, d);
      o.value = i.reduce((p, h) => {
        const c = f[h];
        return c && p.push(c.row), p;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!dn(o.value, u)[Me(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function rw(e) {
  const t = we(), n = T(null), o = T(null), r = (u) => {
    t.store.assertRowKey(), n.value = u, a(u);
  }, l = () => {
    n.value = null;
  }, a = (u) => {
    const { data: d, rowKey: f } = e;
    let p = null;
    f.value && (p = (m(d) || []).find((h) => Me(h, f.value) === u)), o.value = p, t.emit("current-change", o.value, null);
  };
  return {
    setCurrentRowKey: r,
    restoreCurrentRowKey: l,
    setCurrentRowByKey: a,
    updateCurrentRow: (u) => {
      const d = o.value;
      if (u && u !== d) {
        o.value = u, t.emit("current-change", o.value, d);
        return;
      }
      !u && d && (o.value = null, t.emit("current-change", null, d));
    },
    updateCurrentRowData: () => {
      const u = e.rowKey.value, d = e.data.value || [], f = o.value;
      if (!d.includes(f) && f) {
        if (u) {
          const p = Me(f, u);
          a(p);
        } else
          o.value = null;
        o.value === null && t.emit("current-change", null, f);
      } else
        n.value && (a(n.value), l());
    },
    states: {
      _currentRowKey: n,
      currentRow: o
    }
  };
}
function lw(e) {
  const t = T([]), n = T({}), o = T(16), r = T(!1), l = T({}), a = T("hasChildren"), s = T("children"), i = we(), u = k(() => {
    if (!e.rowKey.value)
      return {};
    const g = e.data.value || [];
    return f(g);
  }), d = k(() => {
    const g = e.rowKey.value, y = Object.keys(l.value), b = {};
    return y.length && y.forEach((C) => {
      if (l.value[C].length) {
        const E = { children: [] };
        l.value[C].forEach(($) => {
          const S = Me($, g);
          E.children.push(S), $[a.value] && !b[S] && (b[S] = { children: [] });
        }), b[C] = E;
      }
    }), b;
  }), f = (g) => {
    const y = e.rowKey.value, b = {};
    return tw(g, (C, E, $) => {
      const S = Me(C, y);
      Array.isArray(E) ? b[S] = {
        children: E.map((x) => Me(x, y)),
        level: $
      } : r.value && (b[S] = {
        children: [],
        lazy: !0,
        level: $
      });
    }, s.value, a.value), b;
  }, p = (g = !1, y = ((b) => (b = i.store) == null ? void 0 : b.states.defaultExpandAll.value)()) => {
    var b;
    const C = u.value, E = d.value, $ = Object.keys(C), S = {};
    if ($.length) {
      const x = m(n), P = [], H = (z, Q) => {
        if (g)
          return t.value ? y || t.value.includes(Q) : !!(y || z != null && z.expanded);
        {
          const D = y || t.value && t.value.includes(Q);
          return !!(z != null && z.expanded || D);
        }
      };
      $.forEach((z) => {
        const Q = x[z], D = { ...C[z] };
        if (D.expanded = H(Q, z), D.lazy) {
          const { loaded: N = !1, loading: W = !1 } = Q || {};
          D.loaded = !!N, D.loading = !!W, P.push(z);
        }
        S[z] = D;
      });
      const V = Object.keys(E);
      r.value && V.length && P.length && V.forEach((z) => {
        const Q = x[z], D = E[z].children;
        if (P.includes(z)) {
          if (S[z].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          S[z].children = D;
        } else {
          const { loaded: N = !1, loading: W = !1 } = Q || {};
          S[z] = {
            lazy: !0,
            loaded: !!N,
            loading: !!W,
            expanded: H(Q, z),
            children: D,
            level: ""
          };
        }
      });
    }
    n.value = S, (b = i.store) == null || b.updateTableScrollY();
  };
  Z(() => t.value, () => {
    p(!0);
  }), Z(() => u.value, () => {
    p();
  }), Z(() => d.value, () => {
    p();
  });
  const h = (g) => {
    t.value = g, p();
  }, c = (g, y) => {
    i.store.assertRowKey();
    const b = e.rowKey.value, C = Me(g, b), E = C && n.value[C];
    if (C && E && "expanded" in E) {
      const $ = E.expanded;
      y = typeof y > "u" ? !E.expanded : y, n.value[C].expanded = y, $ !== y && i.emit("expand-change", g, y), i.store.updateTableScrollY();
    }
  }, v = (g) => {
    i.store.assertRowKey();
    const y = e.rowKey.value, b = Me(g, y), C = n.value[b];
    r.value && C && "loaded" in C && !C.loaded ? w(g, b, C) : c(g, void 0);
  }, w = (g, y, b) => {
    const { load: C } = i.props;
    C && !n.value[y].loaded && (n.value[y].loading = !0, C(g, b, (E) => {
      if (!Array.isArray(E))
        throw new TypeError("[ElTable] data must be an array");
      n.value[y].loading = !1, n.value[y].loaded = !0, n.value[y].expanded = !0, E.length && (l.value[y] = E), i.emit("expand-change", g, !0);
    }));
  };
  return {
    loadData: w,
    loadOrToggle: v,
    toggleTreeExpansion: c,
    updateTreeExpandKeys: h,
    updateTreeData: p,
    normalize: f,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: o,
      lazy: r,
      lazyTreeNodeMap: l,
      lazyColumnIdentifier: a,
      childrenColumnName: s
    }
  };
}
const aw = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : X1(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Lo = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? t.push.apply(t, Lo(n.children)) : t.push(n);
  }), t;
};
function sw() {
  var e;
  const t = we(), { size: n } = Wn((e = t.proxy) == null ? void 0 : e.$props), o = T(null), r = T([]), l = T([]), a = T(!1), s = T([]), i = T([]), u = T([]), d = T([]), f = T([]), p = T([]), h = T([]), c = T([]), v = T(0), w = T(0), g = T(0), y = T(!1), b = T([]), C = T(!1), E = T(!1), $ = T(null), S = T({}), x = T(null), P = T(null), H = T(null), V = T(null), z = T(null);
  Z(r, () => t.state && W(!1), {
    deep: !0
  });
  const Q = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, D = (K) => {
    var te;
    (te = K.children) == null || te.forEach((ae) => {
      ae.fixed = K.fixed, D(ae);
    });
  }, N = () => {
    s.value.forEach((A) => {
      D(A);
    }), d.value = s.value.filter((A) => A.fixed === !0 || A.fixed === "left"), f.value = s.value.filter((A) => A.fixed === "right"), d.value.length > 0 && s.value[0] && s.value[0].type === "selection" && !s.value[0].fixed && (s.value[0].fixed = !0, d.value.unshift(s.value[0]));
    const K = s.value.filter((A) => !A.fixed);
    i.value = [].concat(d.value).concat(K).concat(f.value);
    const te = Lo(K), ae = Lo(d.value), _ = Lo(f.value);
    v.value = te.length, w.value = ae.length, g.value = _.length, u.value = [].concat(ae).concat(te).concat(_), a.value = d.value.length > 0 || f.value.length > 0;
  }, W = (K, te = !1) => {
    K && N(), te ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, ne = (K) => b.value.includes(K), F = () => {
    y.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, L = () => {
    let K;
    if (o.value) {
      K = [];
      const te = dn(b.value, o.value), ae = dn(r.value, o.value);
      for (const _ in te)
        mn(te, _) && !ae[_] && K.push(te[_].row);
    } else
      K = b.value.filter((te) => !r.value.includes(te));
    if (K.length) {
      const te = b.value.filter((ae) => !K.includes(ae));
      b.value = te, t.emit("selection-change", te.slice());
    }
  }, X = () => (b.value || []).slice(), ce = (K, te = void 0, ae = !0) => {
    if (eo(b.value, K, te)) {
      const A = (b.value || []).slice();
      ae && t.emit("select", A, K), t.emit("selection-change", A);
    }
  }, ve = () => {
    var K, te;
    const ae = E.value ? !y.value : !(y.value || b.value.length);
    y.value = ae;
    let _ = !1, A = 0;
    const U = (te = (K = t == null ? void 0 : t.store) == null ? void 0 : K.states) == null ? void 0 : te.rowKey.value;
    r.value.forEach((ee, Ee) => {
      const Re = Ee + A;
      $.value ? $.value.call(null, ee, Re) && eo(b.value, ee, ae) && (_ = !0) : eo(b.value, ee, ae) && (_ = !0), A += le(Me(ee, U));
    }), _ && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, be = () => {
    const K = dn(b.value, o.value);
    r.value.forEach((te) => {
      const ae = Me(te, o.value), _ = K[ae];
      _ && (b.value[_.index] = te);
    });
  }, me = () => {
    var K, te, ae;
    if (((K = r.value) == null ? void 0 : K.length) === 0) {
      y.value = !1;
      return;
    }
    let _;
    o.value && (_ = dn(b.value, o.value));
    const A = function(Re) {
      return _ ? !!_[Me(Re, o.value)] : b.value.includes(Re);
    };
    let U = !0, ee = 0, Ee = 0;
    for (let Re = 0, xt = (r.value || []).length; Re < xt; Re++) {
      const ht = (ae = (te = t == null ? void 0 : t.store) == null ? void 0 : te.states) == null ? void 0 : ae.rowKey.value, Ue = Re + Ee, qt = r.value[Re], nt = $.value && $.value.call(null, qt, Ue);
      if (A(qt))
        ee++;
      else if (!$.value || nt) {
        U = !1;
        break;
      }
      Ee += le(Me(qt, ht));
    }
    ee === 0 && (U = !1), y.value = U;
  }, le = (K) => {
    var te;
    if (!t || !t.store)
      return 0;
    const { treeData: ae } = t.store.states;
    let _ = 0;
    const A = (te = ae.value[K]) == null ? void 0 : te.children;
    return A && (_ += A.length, A.forEach((U) => {
      _ += le(U);
    })), _;
  }, ye = (K, te) => {
    Array.isArray(K) || (K = [K]);
    const ae = {};
    return K.forEach((_) => {
      S.value[_.id] = te, ae[_.columnKey || _.id] = te;
    }), ae;
  }, Ce = (K, te, ae) => {
    P.value && P.value !== K && (P.value.order = null), P.value = K, H.value = te, V.value = ae;
  }, ie = () => {
    let K = m(l);
    Object.keys(S.value).forEach((te) => {
      const ae = S.value[te];
      if (!ae || ae.length === 0)
        return;
      const _ = Ui({
        columns: u.value
      }, te);
      _ && _.filterMethod && (K = K.filter((A) => ae.some((U) => _.filterMethod.call(null, U, A, _))));
    }), x.value = K;
  }, ke = () => {
    r.value = aw(x.value, {
      sortingColumn: P.value,
      sortProp: H.value,
      sortOrder: V.value
    });
  }, je = (K = void 0) => {
    K && K.filter || ie(), ke();
  }, ct = (K) => {
    const { tableHeaderRef: te } = t.refs;
    if (!te)
      return;
    const ae = Object.assign({}, te.filterPanels), _ = Object.keys(ae);
    if (_.length)
      if (typeof K == "string" && (K = [K]), Array.isArray(K)) {
        const A = K.map((U) => Z1({
          columns: u.value
        }, U));
        _.forEach((U) => {
          const ee = A.find((Ee) => Ee.id === U);
          ee && (ee.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: A,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        _.forEach((A) => {
          const U = u.value.find((ee) => ee.id === A);
          U && (U.filteredValue = []);
        }), S.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, Ke = () => {
    P.value && (Ce(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: Qe,
    toggleRowExpansion: $t,
    updateExpandRows: Ot,
    states: Je,
    isRowExpanded: Tt
  } = ow({
    data: r,
    rowKey: o
  }), {
    updateTreeExpandKeys: Ft,
    toggleTreeExpansion: De,
    updateTreeData: Be,
    loadOrToggle: et,
    states: I
  } = lw({
    data: r,
    rowKey: o
  }), {
    updateCurrentRowData: fe,
    updateCurrentRow: Le,
    setCurrentRowKey: tt,
    states: zt
  } = rw({
    data: r,
    rowKey: o
  });
  return {
    assertRowKey: Q,
    updateColumns: N,
    scheduleLayout: W,
    isSelected: ne,
    clearSelection: F,
    cleanSelection: L,
    getSelectionRows: X,
    toggleRowSelection: ce,
    _toggleAllSelection: ve,
    toggleAllSelection: null,
    updateSelectionByRowKey: be,
    updateAllSelected: me,
    updateFilters: ye,
    updateCurrentRow: Le,
    updateSort: Ce,
    execFilter: ie,
    execSort: ke,
    execQuery: je,
    clearFilter: ct,
    clearSort: Ke,
    toggleRowExpansion: $t,
    setExpandRowKeysAdapter: (K) => {
      Qe(K), Ft(K);
    },
    setCurrentRowKey: tt,
    toggleRowExpansionAdapter: (K, te) => {
      u.value.some(({ type: _ }) => _ === "expand") ? $t(K, te) : De(K, te);
    },
    isRowExpanded: Tt,
    updateExpandRows: Ot,
    updateCurrentRowData: fe,
    loadOrToggle: et,
    updateTreeData: Be,
    states: {
      tableSize: n,
      rowKey: o,
      data: r,
      _data: l,
      isComplex: a,
      _columns: s,
      originColumns: i,
      columns: u,
      fixedColumns: d,
      rightFixedColumns: f,
      leafColumns: p,
      fixedLeafColumns: h,
      rightFixedLeafColumns: c,
      leafColumnsLength: v,
      fixedLeafColumnsLength: w,
      rightFixedLeafColumnsLength: g,
      isAllSelected: y,
      selection: b,
      reserveSelection: C,
      selectOnIndeterminate: E,
      selectable: $,
      filters: S,
      filteredData: x,
      sortingColumn: P,
      sortProp: H,
      sortOrder: V,
      hoverRow: z,
      ...Je,
      ...I,
      ...zt
    }
  };
}
function Dr(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = Dr(n.children, t)), n);
  });
}
function Xi(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && Xi(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function iw() {
  const e = we(), t = sw();
  return {
    ns: oe("table"),
    ...t,
    mutations: {
      setData(a, s) {
        const i = m(a._data) !== s;
        a.data.value = s, a._data.value = s, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), m(a.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(a, s, i) {
        const u = m(a._columns);
        let d = [];
        i ? (i && !i.children && (i.children = []), i.children.push(s), d = Dr(u, i)) : (u.push(s), d = u), Xi(d), a._columns.value = d, s.type === "selection" && (a.selectable.value = s.selectable, a.reserveSelection.value = s.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      removeColumn(a, s, i) {
        const u = m(a._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((d) => d.id === s.id), 1), ue(() => {
            var d;
            ((d = i.children) == null ? void 0 : d.length) === 0 && delete i.children;
          }), a._columns.value = Dr(u, i);
        else {
          const d = u.indexOf(s);
          d > -1 && (u.splice(d, 1), a._columns.value = u);
        }
        e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(a, s) {
        const { prop: i, order: u, init: d } = s;
        if (i) {
          const f = m(a.columns).find((p) => p.property === i);
          f && (f.order = u, e.store.updateSort(f, i, u), e.store.commit("changeSortCondition", { init: d }));
        }
      },
      changeSortCondition(a, s) {
        const { sortingColumn: i, sortProp: u, sortOrder: d } = a, f = m(i), p = m(u), h = m(d);
        h === null && (a.sortingColumn.value = null, a.sortProp.value = null);
        const c = { filter: !0 };
        e.store.execQuery(c), (!s || !(s.silent || s.init)) && e.emit("sort-change", {
          column: f,
          prop: p,
          order: h
        }), e.store.updateTableScrollY();
      },
      filterChange(a, s) {
        const { column: i, values: u, silent: d } = s, f = e.store.updateFilters(i, u);
        e.store.execQuery(), d || e.emit("filter-change", f), e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(a, s) {
        e.store.toggleRowSelection(s), e.store.updateAllSelected();
      },
      setHoverRow(a, s) {
        a.hoverRow.value = s;
      },
      setCurrentRow(a, s) {
        e.store.updateCurrentRow(s);
      }
    },
    commit: function(a, ...s) {
      const i = e.store.mutations;
      if (i[a])
        i[a].apply(e, [e.store.states].concat(s));
      else
        throw new Error(`Action not found: ${a}`);
    },
    updateTableScrollY: function() {
      ue(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const to = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  ["treeProps.hasChildren"]: {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  ["treeProps.children"]: {
    key: "childrenColumnName",
    default: "children"
  }
};
function uw(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = iw();
  return n.toggleAllSelection = gn(n._toggleAllSelection, 10), Object.keys(to).forEach((o) => {
    Zi(Qi(t, o), o, n);
  }), cw(n, t), n;
}
function cw(e, t) {
  Object.keys(to).forEach((n) => {
    Z(() => Qi(t, n), (o) => {
      Zi(o, n, e);
    });
  });
}
function Zi(e, t, n) {
  let o = e, r = to[t];
  typeof to[t] == "object" && (r = r.key, o = o || to[t].default), n.states[r].value = o;
}
function Qi(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((r) => {
      o = o[r];
    }), o;
  } else
    return e[t];
}
class dw {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = T(null), this.scrollX = T(!1), this.scrollY = T(!1), this.bodyWidth = T(null), this.fixedWidth = T(null), this.rightFixedWidth = T(null), this.gutterWidth = 0;
    for (const n in t)
      mn(t, n) && (vn(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
    if (!this.table)
      throw new Error("Table is required for Table Layout");
    if (!this.store)
      throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    if (this.height.value === null)
      return !1;
    const n = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && n) {
      let o = !0;
      const r = this.scrollY.value;
      return o = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = o, r !== o;
    }
    return !1;
  }
  setHeight(t, n = "height") {
    if (!_e)
      return;
    const o = this.table.vnode.el;
    if (t = J1(t), this.height.value = Number(t), !o && (t || t === 0))
      return ue(() => this.setHeight(t, n));
    typeof t == "number" ? (o.style[n] = `${t}px`, this.updateElsHeight()) : typeof t == "string" && (o.style[n] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((o) => {
      o.isColumnGroup ? t.push.apply(t, o.columns) : t.push(o);
    }), t;
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t)
      return !0;
    let n = t;
    for (; n.tagName !== "DIV"; ) {
      if (getComputedStyle(n).display === "none")
        return !0;
      n = n.parentElement;
    }
    return !1;
  }
  updateColumnsWidth() {
    if (!_e)
      return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let o = 0;
    const r = this.getFlattenColumns(), l = r.filter((i) => typeof i.width != "number");
    if (r.forEach((i) => {
      typeof i.width == "number" && i.realWidth && (i.realWidth = null);
    }), l.length > 0 && t) {
      if (r.forEach((i) => {
        o += Number(i.width || i.minWidth || 80);
      }), o <= n) {
        this.scrollX.value = !1;
        const i = n - o;
        if (l.length === 1)
          l[0].realWidth = Number(l[0].minWidth || 80) + i;
        else {
          const u = l.reduce((p, h) => p + Number(h.minWidth || 80), 0), d = i / u;
          let f = 0;
          l.forEach((p, h) => {
            if (h === 0)
              return;
            const c = Math.floor(Number(p.minWidth || 80) * d);
            f += c, p.realWidth = Number(p.minWidth || 80) + c;
          }), l[0].realWidth = Number(l[0].minWidth || 80) + i - f;
        }
      } else
        this.scrollX.value = !0, l.forEach((i) => {
          i.realWidth = Number(i.minWidth);
        });
      this.bodyWidth.value = Math.max(o, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      r.forEach((i) => {
        !i.width && !i.minWidth ? i.realWidth = 80 : i.realWidth = Number(i.width || i.minWidth), o += i.realWidth;
      }), this.scrollX.value = o > n, this.bodyWidth.value = o;
    const a = this.store.states.fixedColumns.value;
    if (a.length > 0) {
      let i = 0;
      a.forEach((u) => {
        i += Number(u.realWidth || u.width);
      }), this.fixedWidth.value = i;
    }
    const s = this.store.states.rightFixedColumns.value;
    if (s.length > 0) {
      let i = 0;
      s.forEach((u) => {
        i += Number(u.realWidth || u.width);
      }), this.rightFixedWidth.value = i;
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t);
    n !== -1 && this.observers.splice(n, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((o) => {
      var r, l;
      switch (t) {
        case "columns":
          (r = o.state) == null || r.onColumnsChange(this);
          break;
        case "scrollable":
          (l = o.state) == null || l.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: fw } = Cn, pw = q({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Cn,
    ElCheckboxGroup: fw,
    ElScrollbar: _l,
    ElTooltip: _i,
    ElIcon: ze,
    ArrowDown: js,
    ArrowUp: nh
  },
  directives: { ClickOutside: Ti },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(e) {
    const t = we(), { t: n } = It(), o = oe("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const l = T(!1), a = T(null), s = k(() => e.column && e.column.filters), i = k({
      get: () => {
        var C;
        return (((C = e.column) == null ? void 0 : C.filteredValue) || [])[0];
      },
      set: (C) => {
        u.value && (typeof C < "u" && C !== null ? u.value.splice(0, 1, C) : u.value.splice(0, 1));
      }
    }), u = k({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(C) {
        e.column && e.upDataColumn("filteredValue", C);
      }
    }), d = k(() => e.column ? e.column.filterMultiple : !0), f = (C) => C.value === i.value, p = () => {
      l.value = !1;
    }, h = (C) => {
      C.stopPropagation(), l.value = !l.value;
    }, c = () => {
      l.value = !1;
    }, v = () => {
      y(u.value), p();
    }, w = () => {
      u.value = [], y(u.value), p();
    }, g = (C) => {
      i.value = C, y(typeof C < "u" && C !== null ? u.value : []), p();
    }, y = (C) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: C
      }), e.store.updateAllSelected();
    };
    Z(l, (C) => {
      e.column && e.upDataColumn("filterOpened", C);
    }, {
      immediate: !0
    });
    const b = k(() => {
      var C, E;
      return (E = (C = a.value) == null ? void 0 : C.popperRef) == null ? void 0 : E.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: d,
      filteredValue: u,
      filterValue: i,
      filters: s,
      handleConfirm: v,
      handleReset: w,
      handleSelect: g,
      isActive: f,
      t: n,
      ns: o,
      showFilterPanel: h,
      hideFilterPanel: c,
      popperPaneRef: b,
      tooltip: a
    };
  }
}), vw = { key: 0 }, hw = ["disabled"], gw = ["label", "onClick"];
function mw(e, t, n, o, r, l) {
  const a = Pe("el-checkbox"), s = Pe("el-checkbox-group"), i = Pe("el-scrollbar"), u = Pe("arrow-up"), d = Pe("arrow-down"), f = Pe("el-icon"), p = Pe("el-tooltip"), h = Kr("click-outside");
  return O(), G(p, {
    ref: "tooltip",
    visible: e.tooltipVisible,
    offset: 0,
    placement: e.placement,
    "show-arrow": !1,
    "stop-popper-mouse-event": !1,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": e.ns.b(),
    persistent: ""
  }, {
    content: Y(() => [
      e.multiple ? (O(), M("div", vw, [
        B("div", {
          class: R(e.ns.e("content"))
        }, [
          se(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: Y(() => [
              se(s, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => e.filteredValue = c),
                class: R(e.ns.e("checkbox-group"))
              }, {
                default: Y(() => [
                  (O(!0), M(Ne, null, tn(e.filters, (c) => (O(), G(a, {
                    key: c.value,
                    label: c.value
                  }, {
                    default: Y(() => [
                      Rn(ge(c.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        B("div", {
          class: R(e.ns.e("bottom"))
        }, [
          B("button", {
            class: R({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...c) => e.handleConfirm && e.handleConfirm(...c))
          }, ge(e.t("el.table.confirmFilter")), 11, hw),
          B("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...c) => e.handleReset && e.handleReset(...c))
          }, ge(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (O(), M("ul", {
        key: 1,
        class: R(e.ns.e("list"))
      }, [
        B("li", {
          class: R([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (c) => e.handleSelect(null))
        }, ge(e.t("el.table.clearFilter")), 3),
        (O(!0), M(Ne, null, tn(e.filters, (c) => (O(), M("li", {
          key: c.value,
          class: R([e.ns.e("list-item"), e.ns.is("active", e.isActive(c))]),
          label: c.value,
          onClick: (v) => e.handleSelect(c.value)
        }, ge(c.text), 11, gw))), 128))
      ], 2))
    ]),
    default: Y(() => [
      Te((O(), M("span", {
        class: R([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...c) => e.showFilterPanel && e.showFilterPanel(...c))
      }, [
        se(f, null, {
          default: Y(() => [
            e.column.filterOpened ? (O(), G(u, { key: 0 })) : (O(), G(d, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [h, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var bw = /* @__PURE__ */ pe(pw, [["render", mw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function Ji(e) {
  const t = we();
  jr(() => {
    n.value.addObserver(t);
  }), xe(() => {
    o(n.value), r(n.value);
  }), ds(() => {
    o(n.value), r(n.value);
  }), Vo(() => {
    n.value.removeObserver(t);
  });
  const n = k(() => {
    const l = e.layout;
    if (!l)
      throw new Error("Can not find table layout.");
    return l;
  }), o = (l) => {
    var a;
    const s = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("colgroup > col")) || [];
    if (!s.length)
      return;
    const i = l.getFlattenColumns(), u = {};
    i.forEach((d) => {
      u[d.id] = d;
    });
    for (let d = 0, f = s.length; d < f; d++) {
      const p = s[d], h = p.getAttribute("name"), c = u[h];
      c && p.setAttribute("width", c.realWidth || c.width);
    }
  }, r = (l) => {
    var a, s;
    const i = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let d = 0, f = i.length; d < f; d++)
      i[d].setAttribute("width", l.scrollY.value ? l.gutterWidth : "0");
    const u = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("th.gutter")) || [];
    for (let d = 0, f = u.length; d < f; d++) {
      const p = u[d];
      p.style.width = l.scrollY.value ? `${l.gutterWidth}px` : "0", p.style.display = l.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: o,
    onScrollableChange: r
  };
}
const Bt = Symbol("ElTable");
function yw(e, t) {
  const n = we(), o = de(Bt), r = (v) => {
    v.stopPropagation();
  }, l = (v, w) => {
    !w.filters && w.sortable ? c(v, w, !1) : w.filterable && !w.sortable && r(v), o == null || o.emit("header-click", w, v);
  }, a = (v, w) => {
    o == null || o.emit("header-contextmenu", w, v);
  }, s = T(null), i = T(!1), u = T({}), d = (v, w) => {
    if (_e && !(w.children && w.children.length > 0) && s.value && e.border) {
      i.value = !0;
      const g = o;
      t("set-drag-visible", !0);
      const b = (g == null ? void 0 : g.vnode.el).getBoundingClientRect().left, C = n.vnode.el.querySelector(`th.${w.id}`), E = C.getBoundingClientRect(), $ = E.left - b + 30;
      Ho(C, "noclick"), u.value = {
        startMouseLeft: v.clientX,
        startLeft: E.right - b,
        startColumnLeft: E.left - b,
        tableLeft: b
      };
      const S = g == null ? void 0 : g.refs.resizeProxy;
      S.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const x = (H) => {
        const V = H.clientX - u.value.startMouseLeft, z = u.value.startLeft + V;
        S.style.left = `${Math.max($, z)}px`;
      }, P = () => {
        if (i.value) {
          const { startColumnLeft: H, startLeft: V } = u.value, Q = Number.parseInt(S.style.left, 10) - H;
          w.width = w.realWidth = Q, g == null || g.emit("header-dragend", w.width, V - H, w, v), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, s.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", P), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          yn(C, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", x), document.addEventListener("mouseup", P);
    }
  }, f = (v, w) => {
    var g;
    if (w.children && w.children.length > 0)
      return;
    const y = (g = v.target) == null ? void 0 : g.closest("th");
    if (!(!w || !w.resizable) && !i.value && e.border) {
      const b = y.getBoundingClientRect(), C = document.body.style;
      b.width > 12 && b.right - v.pageX < 8 ? (C.cursor = "col-resize", To(y, "is-sortable") && (y.style.cursor = "col-resize"), s.value = w) : i.value || (C.cursor = "", To(y, "is-sortable") && (y.style.cursor = "pointer"), s.value = null);
    }
  }, p = () => {
    _e && (document.body.style.cursor = "");
  }, h = ({ order: v, sortOrders: w }) => {
    if (v === "")
      return w[0];
    const g = w.indexOf(v || null);
    return w[g > w.length - 2 ? 0 : g + 1];
  }, c = (v, w, g) => {
    var y;
    v.stopPropagation();
    const b = w.order === g ? null : g || h(w), C = (y = v.target) == null ? void 0 : y.closest("th");
    if (C && To(C, "noclick")) {
      yn(C, "noclick");
      return;
    }
    if (!w.sortable)
      return;
    const E = e.store.states;
    let $ = E.sortProp.value, S;
    const x = E.sortingColumn.value;
    (x !== w || x === w && x.order === null) && (x && (x.order = null), E.sortingColumn.value = w, $ = w.property), b ? S = w.order = b : S = w.order = null, E.sortProp.value = $, E.sortOrder.value = S, o == null || o.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: l,
    handleHeaderContextMenu: a,
    handleMouseDown: d,
    handleMouseMove: f,
    handleMouseOut: p,
    handleSortClick: c,
    handleFilterClick: r
  };
}
function ww(e) {
  const t = de(Bt), n = oe("table");
  return {
    getHeaderRowStyle: (s) => {
      const i = t == null ? void 0 : t.props.headerRowStyle;
      return typeof i == "function" ? i.call(null, { rowIndex: s }) : i;
    },
    getHeaderRowClass: (s) => {
      const i = [], u = t == null ? void 0 : t.props.headerRowClassName;
      return typeof u == "string" ? i.push(u) : typeof u == "function" && i.push(u.call(null, { rowIndex: s })), i.join(" ");
    },
    getHeaderCellStyle: (s, i, u, d) => {
      var f;
      let p = (f = t == null ? void 0 : t.props.headerCellStyle) != null ? f : {};
      typeof p == "function" && (p = p.call(null, {
        rowIndex: s,
        columnIndex: i,
        row: u,
        column: d
      }));
      const h = Ll(i, d.fixed, e.store, u);
      return Dn(h, "left"), Dn(h, "right"), Object.assign({}, p, h);
    },
    getHeaderCellClass: (s, i, u, d) => {
      const f = Al(n.b(), i, d.fixed, e.store, u), p = [
        d.id,
        d.order,
        d.headerAlign,
        d.className,
        d.labelClassName,
        ...f
      ];
      d.children || p.push("is-leaf"), d.sortable && p.push("is-sortable");
      const h = t == null ? void 0 : t.props.headerCellClassName;
      return typeof h == "string" ? p.push(h) : typeof h == "function" && p.push(h.call(null, {
        rowIndex: s,
        columnIndex: i,
        row: u,
        column: d
      })), p.push(n.e("cell")), p.filter((c) => Boolean(c)).join(" ");
    }
  };
}
const eu = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, eu(n.children))) : t.push(n);
  }), t;
}, Cw = (e) => {
  let t = 1;
  const n = (l, a) => {
    if (a && (l.level = a.level + 1, t < l.level && (t = l.level)), l.children) {
      let s = 0;
      l.children.forEach((i) => {
        n(i, l), s += i.colSpan;
      }), l.colSpan = s;
    } else
      l.colSpan = 1;
  };
  e.forEach((l) => {
    l.level = 1, n(l, void 0);
  });
  const o = [];
  for (let l = 0; l < t; l++)
    o.push([]);
  return eu(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((a) => a.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function Sw(e) {
  const t = de(Bt), n = k(() => Cw(e.store.states.originColumns.value));
  return {
    isGroup: k(() => {
      const l = n.value.length > 1;
      return l && t && (t.state.isGroup.value = !0), l;
    }),
    toggleAllSelection: (l) => {
      l.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var Ew = q({
  name: "ElTableHeader",
  components: {
    ElCheckbox: Cn
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e, { emit: t }) {
    const n = we(), o = de(Bt), r = oe("table"), l = T({}), { onColumnsChange: a, onScrollableChange: s } = Ji(o);
    xe(async () => {
      await ue(), await ue();
      const { prop: $, order: S } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: $, order: S, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: d,
      handleMouseMove: f,
      handleMouseOut: p,
      handleSortClick: h,
      handleFilterClick: c
    } = yw(e, t), {
      getHeaderRowStyle: v,
      getHeaderRowClass: w,
      getHeaderCellStyle: g,
      getHeaderCellClass: y
    } = ww(e), { isGroup: b, toggleAllSelection: C, columnRows: E } = Sw(e);
    return n.state = {
      onColumnsChange: a,
      onScrollableChange: s
    }, n.filterPanels = l, {
      ns: r,
      filterPanels: l,
      onColumnsChange: a,
      onScrollableChange: s,
      columnRows: E,
      getHeaderRowClass: w,
      getHeaderRowStyle: v,
      getHeaderCellClass: y,
      getHeaderCellStyle: g,
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: d,
      handleMouseMove: f,
      handleMouseOut: p,
      handleSortClick: h,
      handleFilterClick: c,
      isGroup: b,
      toggleAllSelection: C
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: o,
      getHeaderCellClass: r,
      getHeaderRowClass: l,
      getHeaderRowStyle: a,
      handleHeaderClick: s,
      handleHeaderContextMenu: i,
      handleMouseDown: u,
      handleMouseMove: d,
      handleSortClick: f,
      handleMouseOut: p,
      store: h,
      $parent: c
    } = this;
    let v = 1;
    return J("thead", {
      class: { [e.is("group")]: t }
    }, n.map((w, g) => J("tr", {
      class: l(g),
      key: g,
      style: a(g)
    }, w.map((y, b) => (y.rowSpan > v && (v = y.rowSpan), J("th", {
      class: r(g, b, w, y),
      colspan: y.colSpan,
      key: `${y.id}-thead`,
      rowspan: y.rowSpan,
      style: o(g, b, w, y),
      onClick: (C) => s(C, y),
      onContextmenu: (C) => i(C, y),
      onMousedown: (C) => u(C, y),
      onMousemove: (C) => d(C, y),
      onMouseout: p
    }, [
      J("div", {
        class: [
          "cell",
          y.filteredValue && y.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        y.renderHeader ? y.renderHeader({
          column: y,
          $index: b,
          store: h,
          _self: c
        }) : y.label,
        y.sortable && J("span", {
          onClick: (C) => f(C, y),
          class: "caret-wrapper"
        }, [
          J("i", {
            onClick: (C) => f(C, y, "ascending"),
            class: "sort-caret ascending"
          }),
          J("i", {
            onClick: (C) => f(C, y, "descending"),
            class: "sort-caret descending"
          })
        ]),
        y.filterable && J(bw, {
          store: h,
          placement: y.filterPlacement || "bottom-start",
          column: y,
          upDataColumn: (C, E) => {
            y[C] = E;
          }
        })
      ])
    ]))))));
  }
});
function _w(e) {
  const t = de(Bt), n = T(""), o = T(J("div")), r = (p, h, c) => {
    var v;
    const w = t, g = mr(p);
    let y;
    const b = (v = w == null ? void 0 : w.vnode.el) == null ? void 0 : v.dataset.prefix;
    g && (y = os({
      columns: e.store.states.columns.value
    }, g, b), y && (w == null || w.emit(`cell-${c}`, h, y, g, p))), w == null || w.emit(`row-${c}`, h, y, p);
  }, l = (p, h) => {
    r(p, h, "dblclick");
  }, a = (p, h) => {
    e.store.commit("setCurrentRow", h), r(p, h, "click");
  }, s = (p, h) => {
    r(p, h, "contextmenu");
  }, i = gn((p) => {
    e.store.commit("setHoverRow", p);
  }, 30), u = gn(() => {
    e.store.commit("setHoverRow", null);
  }, 30);
  return {
    handleDoubleClick: l,
    handleClick: a,
    handleContextMenu: s,
    handleMouseEnter: i,
    handleMouseLeave: u,
    handleCellMouseEnter: (p, h, c) => {
      var v;
      const w = t, g = mr(p), y = (v = w == null ? void 0 : w.vnode.el) == null ? void 0 : v.dataset.prefix;
      if (g) {
        const S = os({
          columns: e.store.states.columns.value
        }, g, y), x = w.hoverState = { cell: g, column: S, row: h };
        w == null || w.emit("cell-mouse-enter", x.row, x.column, x.cell, p);
      }
      if (!c)
        return;
      const b = p.target.querySelector(".cell");
      if (!(To(b, `${y}-tooltip`) && b.childNodes.length))
        return;
      const C = document.createRange();
      C.setStart(b, 0), C.setEnd(b, b.childNodes.length);
      const E = Math.round(C.getBoundingClientRect().width), $ = (Number.parseInt(Qt(b, "paddingLeft"), 10) || 0) + (Number.parseInt(Qt(b, "paddingRight"), 10) || 0);
      (E + $ > b.offsetWidth || b.scrollWidth > b.offsetWidth) && nw(t == null ? void 0 : t.refs.tableWrapper, g, g.innerText || g.textContent, c);
    },
    handleCellMouseLeave: (p) => {
      if (!mr(p))
        return;
      const c = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", c == null ? void 0 : c.row, c == null ? void 0 : c.column, c == null ? void 0 : c.cell, p);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function $w(e) {
  const t = de(Bt), n = oe("table");
  return {
    getRowStyle: (u, d) => {
      const f = t == null ? void 0 : t.props.rowStyle;
      return typeof f == "function" ? f.call(null, {
        row: u,
        rowIndex: d
      }) : f || null;
    },
    getRowClass: (u, d) => {
      const f = [n.e("row")];
      t != null && t.props.highlightCurrentRow && u === e.store.states.currentRow.value && f.push("current-row"), e.stripe && d % 2 === 1 && f.push(n.em("row", "striped"));
      const p = t == null ? void 0 : t.props.rowClassName;
      return typeof p == "string" ? f.push(p) : typeof p == "function" && f.push(p.call(null, {
        row: u,
        rowIndex: d
      })), f;
    },
    getCellStyle: (u, d, f, p) => {
      const h = t == null ? void 0 : t.props.cellStyle;
      let c = h ?? {};
      typeof h == "function" && (c = h.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: p
      }));
      const v = Ll(d, e == null ? void 0 : e.fixed, e.store);
      return Dn(v, "left"), Dn(v, "right"), Object.assign({}, c, v);
    },
    getCellClass: (u, d, f, p, h) => {
      const c = Al(n.b(), d, e == null ? void 0 : e.fixed, e.store, void 0, h), v = [p.id, p.align, p.className, ...c], w = t == null ? void 0 : t.props.cellClassName;
      return typeof w == "string" ? v.push(w) : typeof w == "function" && v.push(w.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: p
      })), v.push(n.e("cell")), v.filter((g) => Boolean(g)).join(" ");
    },
    getSpan: (u, d, f, p) => {
      let h = 1, c = 1;
      const v = t == null ? void 0 : t.props.spanMethod;
      if (typeof v == "function") {
        const w = v({
          row: u,
          column: d,
          rowIndex: f,
          columnIndex: p
        });
        Array.isArray(w) ? (h = w[0], c = w[1]) : typeof w == "object" && (h = w.rowspan, c = w.colspan);
      }
      return { rowspan: h, colspan: c };
    },
    getColspanRealWidth: (u, d, f) => {
      if (d < 1)
        return u[f].realWidth;
      const p = u.map(({ realWidth: h, width: c }) => h || c).slice(f, f + d);
      return Number(p.reduce((h, c) => Number(h) + Number(c), -1));
    }
  };
}
function Ow(e) {
  const t = de(Bt), n = oe("table"), {
    handleDoubleClick: o,
    handleClick: r,
    handleContextMenu: l,
    handleMouseEnter: a,
    handleMouseLeave: s,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: d,
    tooltipTrigger: f
  } = _w(e), {
    getRowStyle: p,
    getRowClass: h,
    getCellStyle: c,
    getCellClass: v,
    getSpan: w,
    getColspanRealWidth: g
  } = $w(e), y = k(() => e.store.states.columns.value.findIndex(({ type: S }) => S === "default")), b = (S, x) => {
    const P = t.props.rowKey;
    return P ? Me(S, P) : x;
  }, C = (S, x, P, H = !1) => {
    const { tooltipEffect: V, tooltipOptions: z, store: Q } = e, { indent: D, columns: N } = Q.states, W = h(S, x);
    let ne = !0;
    return P && (W.push(n.em("row", `level-${P.level}`)), ne = P.display), J("tr", {
      style: [ne ? null : {
        display: "none"
      }, p(S, x)],
      class: W,
      key: b(S, x),
      onDblclick: (L) => o(L, S),
      onClick: (L) => r(L, S),
      onContextmenu: (L) => l(L, S),
      onMouseenter: () => a(x),
      onMouseleave: s
    }, N.value.map((L, X) => {
      const { rowspan: ce, colspan: ve } = w(S, L, x, X);
      if (!ce || !ve)
        return null;
      const be = { ...L };
      be.realWidth = g(N.value, ve, X);
      const me = {
        store: e.store,
        _self: e.context || t,
        column: be,
        row: S,
        $index: x,
        cellIndex: X,
        expanded: H
      };
      X === y.value && P && (me.treeNode = {
        indent: P.level * D.value,
        level: P.level
      }, typeof P.expanded == "boolean" && (me.treeNode.expanded = P.expanded, "loading" in P && (me.treeNode.loading = P.loading), "noLazyChildren" in P && (me.treeNode.noLazyChildren = P.noLazyChildren)));
      const le = `${x},${X}`, ye = be.columnKey || be.rawColumnKey || "", Ce = E(X, L, me), ie = L.showOverflowTooltip && zs({
        effect: V
      }, z, L.showOverflowTooltip);
      return J("td", {
        style: c(x, X, S, L),
        class: v(x, X, S, L, ve - 1),
        key: `${ye}${le}`,
        rowspan: ce,
        colspan: ve,
        onMouseenter: (ke) => i(ke, S, ie),
        onMouseleave: u
      }, [Ce]);
    }));
  }, E = (S, x, P) => x.renderCell(P);
  return {
    wrappedRowRender: (S, x) => {
      const P = e.store, { isRowExpanded: H, assertRowKey: V } = P, { treeData: z, lazyTreeNodeMap: Q, childrenColumnName: D, rowKey: N } = P.states, W = P.states.columns.value;
      if (W.some(({ type: F }) => F === "expand")) {
        const F = H(S), L = C(S, x, void 0, F), X = t.renderExpanded;
        return F ? X ? [
          [
            L,
            J("tr", {
              key: `expanded-row__${L.key}`
            }, [
              J("td", {
                colspan: W.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [X({ row: S, $index: x, store: P, expanded: F })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), L) : [[L]];
      } else if (Object.keys(z.value).length) {
        V();
        const F = Me(S, N.value);
        let L = z.value[F], X = null;
        L && (X = {
          expanded: L.expanded,
          level: L.level,
          display: !0
        }, typeof L.lazy == "boolean" && (typeof L.loaded == "boolean" && L.loaded && (X.noLazyChildren = !(L.children && L.children.length)), X.loading = L.loading));
        const ce = [C(S, x, X)];
        if (L) {
          let ve = 0;
          const be = (le, ye) => {
            le && le.length && ye && le.forEach((Ce) => {
              const ie = {
                display: ye.display && ye.expanded,
                level: ye.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, ke = Me(Ce, N.value);
              if (ke == null)
                throw new Error("For nested data item, row-key is required.");
              if (L = { ...z.value[ke] }, L && (ie.expanded = L.expanded, L.level = L.level || ie.level, L.display = !!(L.expanded && ie.display), typeof L.lazy == "boolean" && (typeof L.loaded == "boolean" && L.loaded && (ie.noLazyChildren = !(L.children && L.children.length)), ie.loading = L.loading)), ve++, ce.push(C(Ce, x + ve, ie)), L) {
                const je = Q.value[ke] || Ce[D.value];
                be(je, L);
              }
            });
          };
          L.display = !0;
          const me = Q.value[F] || S[D.value];
          be(me, L);
        }
        return ce;
      } else
        return C(S, x, void 0);
    },
    tooltipContent: d,
    tooltipTrigger: f
  };
}
const Tw = {
  store: {
    required: !0,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var xw = q({
  name: "ElTableBody",
  props: Tw,
  setup(e) {
    const t = we(), n = de(Bt), o = oe("table"), { wrappedRowRender: r, tooltipContent: l, tooltipTrigger: a } = Ow(e), { onColumnsChange: s, onScrollableChange: i } = Ji(n);
    return Z(e.store.states.hoverRow, (u, d) => {
      if (!e.store.states.isComplex.value || !_e)
        return;
      let f = window.requestAnimationFrame;
      f || (f = (p) => window.setTimeout(p, 16)), f(() => {
        const p = t == null ? void 0 : t.vnode.el, h = Array.from((p == null ? void 0 : p.children) || []).filter((w) => w == null ? void 0 : w.classList.contains(`${o.e("row")}`)), c = h[d], v = h[u];
        c && yn(c, "hover-row"), v && Ho(v, "hover-row");
      });
    }), Vo(() => {
      var u;
      (u = Wt) == null || u();
    }), {
      ns: o,
      onColumnsChange: s,
      onScrollableChange: i,
      wrappedRowRender: r,
      tooltipContent: l,
      tooltipTrigger: a
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return J("tbody", {}, [
      n.reduce((o, r) => o.concat(e(r, o.length)), [])
    ]);
  }
});
function Rl(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((r) => r.width === void 0) && (n = []);
  const o = (r) => {
    const l = {
      key: `${e.tableLayout}_${r.id}`,
      style: {},
      name: void 0
    };
    return t ? l.style = {
      width: `${r.width}px`
    } : l.name = r.id, l;
  };
  return J("colgroup", {}, n.map((r) => J("col", o(r))));
}
Rl.props = ["columns", "tableLayout"];
function kw() {
  const e = de(Bt), t = e == null ? void 0 : e.store, n = k(() => t.states.fixedLeafColumnsLength.value), o = k(() => t.states.rightFixedColumns.value.length), r = k(() => t.states.columns.value.length), l = k(() => t.states.fixedColumns.value.length), a = k(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: r,
    leftFixedCount: l,
    rightFixedCount: a,
    columns: t.states.columns
  };
}
function Pw(e) {
  const { columns: t } = kw(), n = oe("table");
  return {
    getCellClasses: (l, a) => {
      const s = l[a], i = [
        n.e("cell"),
        s.id,
        s.align,
        s.labelClassName,
        ...Al(n.b(), a, s.fixed, e.store)
      ];
      return s.className && i.push(s.className), s.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, a) => {
      const s = Ll(a, l.fixed, e.store);
      return Dn(s, "left"), Dn(s, "right"), s;
    },
    columns: t
  };
}
var Aw = q({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: n, columns: o } = Pw(e);
    return {
      ns: oe("table"),
      getCellClasses: t,
      getCellStyles: n,
      columns: o
    };
  },
  render() {
    const {
      columns: e,
      getCellStyles: t,
      getCellClasses: n,
      summaryMethod: o,
      sumText: r,
      ns: l
    } = this, a = this.store.states.data.value;
    let s = [];
    return o ? s = o({
      columns: e,
      data: a
    }) : e.forEach((i, u) => {
      if (u === 0) {
        s[u] = r;
        return;
      }
      const d = a.map((c) => Number(c[i.property])), f = [];
      let p = !0;
      d.forEach((c) => {
        if (!Number.isNaN(+c)) {
          p = !1;
          const v = `${c}`.split(".")[1];
          f.push(v ? v.length : 0);
        }
      });
      const h = Math.max.apply(null, f);
      p ? s[u] = "" : s[u] = d.reduce((c, v) => {
        const w = Number(v);
        return Number.isNaN(+w) ? c : Number.parseFloat((c + v).toFixed(Math.min(h, 20)));
      }, 0);
    }), J("table", {
      class: l.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      Rl({
        columns: e
      }),
      J("tbody", [
        J("tr", {}, [
          ...e.map((i, u) => J("td", {
            key: u,
            colspan: i.colSpan,
            rowspan: i.rowSpan,
            class: n(e, u),
            style: t(i, u)
          }, [
            J("div", {
              class: ["cell", i.labelClassName]
            }, [s[u]])
          ]))
        ])
      ])
    ]);
  }
});
function Lw(e) {
  return {
    setCurrentRow: (d) => {
      e.commit("setCurrentRow", d);
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (d, f) => {
      e.toggleRowSelection(d, f, !1), e.updateAllSelected();
    },
    clearSelection: () => {
      e.clearSelection();
    },
    clearFilter: (d) => {
      e.clearFilter(d);
    },
    toggleAllSelection: () => {
      e.commit("toggleAllSelection");
    },
    toggleRowExpansion: (d, f) => {
      e.toggleRowExpansionAdapter(d, f);
    },
    clearSort: () => {
      e.clearSort();
    },
    sort: (d, f) => {
      e.commit("sort", { prop: d, order: f });
    }
  };
}
function Rw(e, t, n, o) {
  const r = T(!1), l = T(null), a = T(!1), s = (F) => {
    a.value = F;
  }, i = T({
    width: null,
    height: null,
    headerHeight: null
  }), u = T(!1), d = {
    display: "inline-block",
    verticalAlign: "middle"
  }, f = T(), p = T(0), h = T(0), c = T(0), v = T(0);
  An(() => {
    t.setHeight(e.height);
  }), An(() => {
    t.setMaxHeight(e.maxHeight);
  }), Z(() => [e.currentRowKey, n.states.rowKey], ([F, L]) => {
    !m(L) || !m(F) || n.setCurrentRowKey(`${F}`);
  }, {
    immediate: !0
  }), Z(() => e.data, (F) => {
    o.store.commit("setData", F);
  }, {
    immediate: !0,
    deep: !0
  }), An(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const w = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, g = (F, L) => {
    const { pixelX: X, pixelY: ce } = L;
    Math.abs(X) >= Math.abs(ce) && (o.refs.bodyWrapper.scrollLeft += L.pixelX / 5);
  }, y = k(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), b = k(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), C = () => {
    y.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(x);
  };
  xe(async () => {
    await ue(), n.updateColumns(), P(), requestAnimationFrame(C);
    const F = o.vnode.el, L = o.refs.headerWrapper;
    e.flexible && F && F.parentElement && (F.parentElement.style.minWidth = "0"), i.value = {
      width: f.value = F.offsetWidth,
      height: F.offsetHeight,
      headerHeight: e.showHeader && L ? L.offsetHeight : null
    }, n.states.columns.value.forEach((X) => {
      X.filteredValue && X.filteredValue.length && o.store.commit("filterChange", {
        column: X,
        values: X.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const E = (F, L) => {
    if (!F)
      return;
    const X = Array.from(F.classList).filter((ce) => !ce.startsWith("is-scrolling-"));
    X.push(t.scrollX.value ? L : "is-scrolling-none"), F.className = X.join(" ");
  }, $ = (F) => {
    const { tableWrapper: L } = o.refs;
    E(L, F);
  }, S = (F) => {
    const { tableWrapper: L } = o.refs;
    return !!(L && L.classList.contains(F));
  }, x = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const le = "is-scrolling-none";
      S(le) || $(le);
      return;
    }
    const F = o.refs.scrollBarRef.wrapRef;
    if (!F)
      return;
    const { scrollLeft: L, offsetWidth: X, scrollWidth: ce } = F, { headerWrapper: ve, footerWrapper: be } = o.refs;
    ve && (ve.scrollLeft = L), be && (be.scrollLeft = L);
    const me = ce - X - 1;
    L >= me ? $("is-scrolling-right") : $(L === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, P = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && jt(o.refs.scrollBarRef.wrapRef, "scroll", x, {
      passive: !0
    }), e.fit ? Nn(o.vnode.el, H) : jt(window, "resize", H), Nn(o.refs.bodyWrapper, () => {
      var F, L;
      H(), (L = (F = o.refs) == null ? void 0 : F.scrollBarRef) == null || L.update();
    }));
  }, H = () => {
    var F, L, X;
    const ce = o.vnode.el;
    if (!o.$ready || !ce)
      return;
    let ve = !1;
    const {
      width: be,
      height: me,
      headerHeight: le
    } = i.value, ye = f.value = ce.offsetWidth;
    be !== ye && (ve = !0);
    const Ce = ce.offsetHeight;
    (e.height || y.value) && me !== Ce && (ve = !0);
    const ie = e.tableLayout === "fixed" ? o.refs.headerWrapper : (F = o.refs.tableHeaderRef) == null ? void 0 : F.$el;
    e.showHeader && (ie == null ? void 0 : ie.offsetHeight) !== le && (ve = !0), p.value = ((L = o.refs.tableWrapper) == null ? void 0 : L.scrollHeight) || 0, c.value = (ie == null ? void 0 : ie.scrollHeight) || 0, v.value = ((X = o.refs.footerWrapper) == null ? void 0 : X.offsetHeight) || 0, h.value = p.value - c.value - v.value, ve && (i.value = {
      width: ye,
      height: Ce,
      headerHeight: e.showHeader && (ie == null ? void 0 : ie.offsetHeight) || 0
    }, C());
  }, V = wn(), z = k(() => {
    const { bodyWidth: F, scrollY: L, gutterWidth: X } = t;
    return F.value ? `${F.value - (L.value ? X : 0)}px` : "";
  }), Q = k(() => e.maxHeight ? "fixed" : e.tableLayout), D = k(() => {
    if (e.data && e.data.length)
      return null;
    let F = "100%";
    e.height && h.value && (F = `${h.value}px`);
    const L = f.value;
    return {
      width: L ? `${L}px` : "",
      height: F
    };
  }), N = k(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), W = k(() => {
    if (e.height)
      return {
        height: "100%"
      };
    if (e.maxHeight) {
      if (Number.isNaN(Number(e.maxHeight)))
        return {
          maxHeight: `calc(${e.maxHeight} - ${c.value + v.value}px)`
        };
      {
        const F = e.maxHeight;
        if (p.value >= Number(F))
          return {
            maxHeight: `${p.value - c.value - v.value}px`
          };
      }
    }
    return {};
  });
  return {
    isHidden: r,
    renderExpanded: l,
    setDragVisible: s,
    isGroup: u,
    handleMouseLeave: w,
    handleHeaderFooterMousewheel: g,
    tableSize: V,
    emptyBlockStyle: D,
    handleFixedMousewheel: (F, L) => {
      const X = o.refs.bodyWrapper;
      if (Math.abs(L.spinY) > 0) {
        const ce = X.scrollTop;
        L.pixelY < 0 && ce !== 0 && F.preventDefault(), L.pixelY > 0 && X.scrollHeight - X.clientHeight > ce && F.preventDefault(), X.scrollTop += Math.ceil(L.pixelY / 5);
      } else
        X.scrollLeft += Math.ceil(L.pixelX / 5);
    },
    resizeProxyVisible: a,
    bodyWidth: z,
    resizeState: i,
    doLayout: C,
    tableBodyStyles: b,
    tableLayout: Q,
    scrollbarViewStyle: d,
    tableInnerStyle: N,
    scrollbarStyle: W
  };
}
var Mw = {
  data: {
    type: Array,
    default: () => []
  },
  size: String,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: !0
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: !0
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: !0
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children"
    })
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: !1
  },
  flexible: Boolean
};
const Nw = () => {
  const e = T(), t = (l, a) => {
    const s = e.value;
    s && s.scrollTo(l, a);
  }, n = (l, a) => {
    const s = e.value;
    s && Ae(a) && ["Top", "Left"].includes(l) && s[`setScroll${l}`](a);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (l) => n("Top", l),
    setScrollLeft: (l) => n("Left", l)
  };
};
let Iw = 1;
const Bw = q({
  name: "ElTable",
  directives: {
    Mousewheel: Db
  },
  components: {
    TableHeader: Ew,
    TableBody: xw,
    TableFooter: Aw,
    ElScrollbar: _l,
    hColgroup: Rl
  },
  props: Mw,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(e) {
    const { t } = It(), n = oe("table"), o = we();
    st(Bt, o);
    const r = uw(o, e);
    o.store = r;
    const l = new dw({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = l;
    const a = k(() => (r.states.data.value || []).length === 0), {
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: p,
      toggleRowExpansion: h,
      clearSort: c,
      sort: v
    } = Lw(r), {
      isHidden: w,
      renderExpanded: g,
      setDragVisible: y,
      isGroup: b,
      handleMouseLeave: C,
      handleHeaderFooterMousewheel: E,
      tableSize: $,
      emptyBlockStyle: S,
      handleFixedMousewheel: x,
      resizeProxyVisible: P,
      bodyWidth: H,
      resizeState: V,
      doLayout: z,
      tableBodyStyles: Q,
      tableLayout: D,
      scrollbarViewStyle: N,
      tableInnerStyle: W,
      scrollbarStyle: ne
    } = Rw(e, l, r, o), { scrollBarRef: F, scrollTo: L, setScrollLeft: X, setScrollTop: ce } = Nw(), ve = gn(z, 50), be = `${n.namespace.value}-table_${Iw++}`;
    o.tableId = be, o.state = {
      isGroup: b,
      resizeState: V,
      doLayout: z,
      debouncedUpdateLayout: ve
    };
    const me = k(() => e.sumText || t("el.table.sumText")), le = k(() => e.emptyText || t("el.table.emptyText"));
    return {
      ns: n,
      layout: l,
      store: r,
      handleHeaderFooterMousewheel: E,
      handleMouseLeave: C,
      tableId: be,
      tableSize: $,
      isHidden: w,
      isEmpty: a,
      renderExpanded: g,
      resizeProxyVisible: P,
      resizeState: V,
      isGroup: b,
      bodyWidth: H,
      tableBodyStyles: Q,
      emptyBlockStyle: S,
      debouncedUpdateLayout: ve,
      handleFixedMousewheel: x,
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: p,
      toggleRowExpansion: h,
      clearSort: c,
      doLayout: z,
      sort: v,
      t,
      setDragVisible: y,
      context: o,
      computedSumText: me,
      computedEmptyText: le,
      tableLayout: D,
      scrollbarViewStyle: N,
      tableInnerStyle: W,
      scrollbarStyle: ne,
      scrollBarRef: F,
      scrollTo: L,
      setScrollLeft: X,
      setScrollTop: ce
    };
  }
}), Fw = ["data-prefix"], zw = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function Hw(e, t, n, o, r, l) {
  const a = Pe("hColgroup"), s = Pe("table-header"), i = Pe("table-body"), u = Pe("el-scrollbar"), d = Pe("table-footer"), f = Kr("mousewheel");
  return O(), M("div", {
    ref: "tableWrapper",
    class: R([
      {
        [e.ns.m("fit")]: e.fit,
        [e.ns.m("striped")]: e.stripe,
        [e.ns.m("border")]: e.border || e.isGroup,
        [e.ns.m("hidden")]: e.isHidden,
        [e.ns.m("group")]: e.isGroup,
        [e.ns.m("fluid-height")]: e.maxHeight,
        [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
        [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
        [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
        [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100,
        "has-footer": e.showSummary
      },
      e.ns.m(e.tableSize),
      e.className,
      e.ns.b(),
      e.ns.m(`layout-${e.tableLayout}`)
    ]),
    style: Oe(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (p) => e.handleMouseLeave())
  }, [
    B("div", {
      class: R(e.ns.e("inner-wrapper")),
      style: Oe(e.tableInnerStyle)
    }, [
      B("div", zw, [
        re(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? Te((O(), M("div", {
        key: 0,
        ref: "headerWrapper",
        class: R(e.ns.e("header-wrapper"))
      }, [
        B("table", {
          ref: "tableHeader",
          class: R(e.ns.e("header")),
          style: Oe(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          se(a, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          se(s, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [f, e.handleHeaderFooterMousewheel]
      ]) : j("v-if", !0),
      B("div", {
        ref: "bodyWrapper",
        class: R(e.ns.e("body-wrapper"))
      }, [
        se(u, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: Y(() => [
            B("table", {
              ref: "tableBody",
              class: R(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: Oe({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              se(a, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (O(), G(s, {
                key: 0,
                ref: "tableHeaderRef",
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : j("v-if", !0),
              se(i, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"])
            ], 6),
            e.isEmpty ? (O(), M("div", {
              key: 0,
              ref: "emptyBlock",
              style: Oe(e.emptyBlockStyle),
              class: R(e.ns.e("empty-block"))
            }, [
              B("span", {
                class: R(e.ns.e("empty-text"))
              }, [
                re(e.$slots, "empty", {}, () => [
                  Rn(ge(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : j("v-if", !0),
            e.$slots.append ? (O(), M("div", {
              key: 1,
              ref: "appendWrapper",
              class: R(e.ns.e("append-wrapper"))
            }, [
              re(e.$slots, "append")
            ], 2)) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? Te((O(), M("div", {
        key: 1,
        ref: "footerWrapper",
        class: R(e.ns.e("footer-wrapper"))
      }, [
        se(d, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: Oe(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [St, !e.isEmpty],
        [f, e.handleHeaderFooterMousewheel]
      ]) : j("v-if", !0),
      e.border || e.isGroup ? (O(), M("div", {
        key: 2,
        class: R(e.ns.e("border-left-patch"))
      }, null, 2)) : j("v-if", !0)
    ], 6),
    Te(B("div", {
      ref: "resizeProxy",
      class: R(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [St, e.resizeProxyVisible]
    ])
  ], 46, Fw);
}
var Dw = /* @__PURE__ */ pe(Bw, [["render", Hw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const Ww = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, Vw = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
}, jw = (e) => Ww[e] || "", Kw = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return J(Cn, {
        disabled: t(),
        size: e.states.tableSize.value,
        indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
        "onUpdate:modelValue": e.toggleAllSelection,
        modelValue: e.states.isAllSelected.value
      });
    },
    renderCell({
      row: e,
      column: t,
      store: n,
      $index: o
    }) {
      return J(Cn, {
        disabled: t.selectable ? !t.selectable.call(null, e, o) : !1,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (r) => r.stopPropagation(),
        modelValue: n.isSelected(e)
      });
    },
    sortable: !1,
    resizable: !1
  },
  index: {
    renderHeader({ column: e }) {
      return e.label || "#";
    },
    renderCell({
      column: e,
      $index: t
    }) {
      let n = t + 1;
      const o = e.index;
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), J("div", {}, [n]);
    },
    sortable: !1
  },
  expand: {
    renderHeader({ column: e }) {
      return e.label || "";
    },
    renderCell({
      row: e,
      store: t,
      expanded: n
    }) {
      const { ns: o } = t, r = [o.e("expand-icon")];
      return n && r.push(o.em("expand-icon", "expanded")), J("div", {
        class: r,
        onClick: function(a) {
          a.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          J(ze, null, {
            default: () => [J(al)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function Uw({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const r = t.property, l = r && Pv(e, r).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function Gw({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: r } = n;
  if (!t)
    return o ? [
      J("span", {
        class: r.e("placeholder")
      })
    ] : null;
  const l = [], a = function(s) {
    s.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(J("span", {
    class: r.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const s = [
      r.e("expand-icon"),
      t.expanded ? r.em("expand-icon", "expanded") : ""
    ];
    let i = al;
    t.loading && (i = Qo), l.push(J("div", {
      class: s,
      onClick: a
    }, {
      default: () => [
        J(ze, { class: { [r.is("loading")]: t.loading } }, {
          default: () => [J(i)]
        })
      ]
    }));
  } else
    l.push(J("span", {
      class: r.e("placeholder")
    }));
  return l;
}
function as(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function qw(e, t) {
  const n = we();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], a = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, s = as(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        mn(t, u) && Z(() => t[u], (d) => {
          let f = d;
          u === "width" && i === "realWidth" && (f = Pl(d)), u === "minWidth" && i === "realMinWidth" && (f = Gi(d)), n.columnConfig.value[u] = f, n.columnConfig.value[i] = f;
          const p = u === "fixed";
          e.value.store.scheduleLayout(p);
        });
      });
    },
    registerNormalWatchers: () => {
      const l = [
        "label",
        "filters",
        "filterMultiple",
        "sortable",
        "index",
        "formatter",
        "className",
        "labelClassName",
        "showOverflowTooltip"
      ], a = {
        property: "prop",
        align: "realAlign",
        headerAlign: "realHeaderAlign"
      }, s = as(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        mn(t, u) && Z(() => t[u], (d) => {
          n.columnConfig.value[i] = d;
        });
      });
    }
  };
}
function Yw(e, t, n) {
  const o = we(), r = T(""), l = T(!1), a = T(), s = T(), i = oe("table");
  An(() => {
    a.value = e.align ? `is-${e.align}` : null, a.value;
  }), An(() => {
    s.value = e.headerAlign ? `is-${e.headerAlign}` : a.value, s.value;
  });
  const u = k(() => {
    let b = o.vnode.vParent || o.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), d = k(() => {
    const { store: b } = o.parent;
    if (!b)
      return !1;
    const { treeData: C } = b.states, E = C.value;
    return E && Object.keys(E).length > 0;
  }), f = T(Pl(e.width)), p = T(Gi(e.minWidth)), h = (b) => (f.value && (b.width = f.value), p.value && (b.minWidth = p.value), !f.value && p.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), c = (b) => {
    const C = b.type, E = Kw[C] || {};
    Object.keys(E).forEach((S) => {
      const x = E[S];
      S !== "className" && x !== void 0 && (b[S] = x);
    });
    const $ = jw(C);
    if ($) {
      const S = `${m(i.namespace)}-${$}`;
      b.className = b.className ? `${b.className} ${S}` : S;
    }
    return b;
  }, v = (b) => {
    Array.isArray(b) ? b.forEach((E) => C(E)) : C(b);
    function C(E) {
      var $;
      (($ = E == null ? void 0 : E.type) == null ? void 0 : $.name) === "ElTableColumn" && (E.vParent = o);
    }
  };
  return {
    columnId: r,
    realAlign: a,
    isSubColumn: l,
    realHeaderAlign: s,
    columnOrTableParent: u,
    setColumnWidth: h,
    setColumnForcedProps: c,
    setColumnRenders: (b) => {
      e.renderHeader ? He("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = (E) => {
        o.columnConfig.value.label;
        const $ = t.header;
        return $ ? $(E) : b.label;
      });
      let C = b.renderCell;
      return b.type === "expand" ? (b.renderCell = (E) => J("div", {
        class: "cell"
      }, [C(E)]), n.value.renderExpanded = (E) => t.default ? t.default(E) : t.default) : (C = C || Uw, b.renderCell = (E) => {
        let $ = null;
        if (t.default) {
          const H = t.default(E);
          $ = H.some((V) => V.type !== ps) ? H : C(E);
        } else
          $ = C(E);
        const S = d.value && E.cellIndex === 0 && E.column.type !== "selection", x = Gw(E, S), P = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (P.class = `${P.class} ${m(i.namespace)}-tooltip`, P.style = {
          width: `${(E.column.realWidth || Number(E.column.width)) - 1}px`
        }), v($), J("div", P, [x, $]);
      }), b;
    },
    getPropsData: (...b) => b.reduce((C, E) => (Array.isArray(E) && E.forEach(($) => {
      C[$] = e[$];
    }), C), {}),
    getColumnElIndex: (b, C) => Array.prototype.indexOf.call(b, C)
  };
}
var Xw = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: !1
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: !0
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: [Boolean, Object],
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: !0
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ["ascending", "descending", null],
    validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t))
  }
};
let Zw = 1;
var tu = q({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Cn
  },
  props: Xw,
  setup(e, { slots: t }) {
    const n = we(), o = T({}), r = k(() => {
      let y = n.parent;
      for (; y && !y.tableId; )
        y = y.parent;
      return y;
    }), { registerNormalWatchers: l, registerComplexWatchers: a } = qw(r, e), {
      columnId: s,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: d,
      setColumnWidth: f,
      setColumnForcedProps: p,
      setColumnRenders: h,
      getPropsData: c,
      getColumnElIndex: v,
      realAlign: w
    } = Yw(e, t, r), g = d.value;
    s.value = `${g.tableId || g.columnId}_column_${Zw++}`, jr(() => {
      i.value = r.value !== g;
      const y = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, C = {
        ...Vw[y],
        id: s.value,
        type: y,
        property: e.prop || e.property,
        align: w,
        headerAlign: u,
        showOverflowTooltip: e.showOverflowTooltip,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: !1,
        isSubColumn: !1,
        filterOpened: !1,
        sortable: b,
        index: e.index,
        rawColumnKey: n.vnode.key
      };
      let P = c([
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement"
      ]);
      P = Q1(C, P), P = ew(h, f, p)(P), o.value = P, l(), a();
    }), xe(() => {
      var y;
      const b = d.value, C = i.value ? b.vnode.el.children : (y = b.refs.hiddenColumns) == null ? void 0 : y.children, E = () => v(C || [], n.vnode.el);
      o.value.getColumnIndex = E, E() > -1 && r.value.store.commit("insertColumn", o.value, i.value ? b.columnConfig.value : null);
    }), Nt(() => {
      r.value.store.commit("removeColumn", o.value, i.value ? g.columnConfig.value : null);
    }), n.columnId = s.value, n.columnConfig = o;
  },
  render() {
    var e, t, n;
    try {
      const o = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), r = [];
      if (Array.isArray(o))
        for (const a of o)
          ((n = a.type) == null ? void 0 : n.name) === "ElTableColumn" || a.shapeFlag & 2 ? r.push(a) : a.type === Ne && Array.isArray(a.children) && a.children.forEach((s) => {
            (s == null ? void 0 : s.patchFlag) !== 1024 && !at(s == null ? void 0 : s.children) && r.push(s);
          });
      return J("div", r);
    } catch {
      return J("div", []);
    }
  }
});
const Qw = vt(Dw, {
  TableColumn: tu
}), Jw = jn(tu), Ct = "ElInfiniteScroll", e2 = 50, t2 = 200, n2 = 0, o2 = {
  delay: {
    type: Number,
    default: t2
  },
  distance: {
    type: Number,
    default: n2
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  immediate: {
    type: Boolean,
    default: !0
  }
}, Ml = (e, t) => Object.entries(o2).reduce((n, [o, r]) => {
  var l, a;
  const { type: s, default: i } = r, u = e.getAttribute(`infinite-scroll-${o}`);
  let d = (a = (l = t[u]) != null ? l : u) != null ? a : i;
  return d = d === "false" ? !1 : d, d = s(d), n[o] = Number.isNaN(d) ? i : d, n;
}, {}), nu = (e) => {
  const { observer: t } = e[Ct];
  t && (t.disconnect(), delete e[Ct].observer);
}, r2 = (e, t) => {
  const { container: n, containerEl: o, instance: r, observer: l, lastScrollTop: a } = e[Ct], { disabled: s, distance: i } = Ml(e, r), { clientHeight: u, scrollHeight: d, scrollTop: f } = o, p = f - a;
  if (e[Ct].lastScrollTop = f, l || s || p < 0)
    return;
  let h = !1;
  if (n === e)
    h = d - (u + f) <= i;
  else {
    const { clientTop: c, scrollHeight: v } = e, w = wv(e, o);
    h = f + u >= w + c + v - i;
  }
  h && t.call(r);
};
function br(e, t) {
  const { containerEl: n, instance: o } = e[Ct], { disabled: r } = Ml(e, o);
  r || n.clientHeight === 0 || (n.scrollHeight <= n.clientHeight ? t.call(o) : nu(e));
}
const l2 = {
  async mounted(e, t) {
    const { instance: n, value: o } = t;
    wt(o) || ll(Ct, "'v-infinite-scroll' binding value must be a function"), await ue();
    const { delay: r, immediate: l } = Ml(e, n), a = Rv(e, !0), s = a === window ? document.documentElement : a, i = fa(r2.bind(null, e, o), r);
    if (a) {
      if (e[Ct] = {
        instance: n,
        container: a,
        containerEl: s,
        delay: r,
        cb: o,
        onScroll: i,
        lastScrollTop: s.scrollTop
      }, l) {
        const u = new MutationObserver(fa(br.bind(null, e, o), e2));
        e[Ct].observer = u, u.observe(e, { childList: !0, subtree: !0 }), br(e, o);
      }
      a.addEventListener("scroll", i);
    }
  },
  unmounted(e) {
    const { container: t, onScroll: n } = e[Ct];
    t == null || t.removeEventListener("scroll", n), nu(e);
  },
  async updated(e) {
    e[Ct] || await ue();
    const { containerEl: t, cb: n, observer: o } = e[Ct];
    t.clientHeight && o && br(e, n);
  }
}, Wr = l2;
Wr.install = (e) => {
  e.directive("InfiniteScroll", Wr);
};
const a2 = Wr;
function s2(e) {
  let t;
  const n = oe("loading"), o = T(!1), r = Sn({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function l(h) {
    r.text = h;
  }
  function a() {
    const h = r.parent;
    if (!h.vLoadingAddClassList) {
      let c = h.getAttribute("loading-number");
      c = Number.parseInt(c) - 1, c ? h.setAttribute("loading-number", c.toString()) : (yn(h, n.bm("parent", "relative")), h.removeAttribute("loading-number")), yn(h, n.bm("parent", "hidden"));
    }
    s(), f.unmount();
  }
  function s() {
    var h, c;
    (c = (h = p.$el) == null ? void 0 : h.parentNode) == null || c.removeChild(p.$el);
  }
  function i() {
    var h;
    e.beforeClose && !e.beforeClose() || (o.value = !0, clearTimeout(t), t = window.setTimeout(u, 400), r.visible = !1, (h = e.closed) == null || h.call(e));
  }
  function u() {
    if (!o.value)
      return;
    const h = r.parent;
    o.value = !1, h.vLoadingAddClassList = void 0, a();
  }
  const f = mu({
    name: "ElLoading",
    setup() {
      return () => {
        const h = r.spinner || r.svg, c = J("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...h ? { innerHTML: h } : {}
        }, [
          J("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), v = r.text ? J("p", { class: n.b("text") }, [r.text]) : void 0;
        return J(co, {
          name: n.b("fade"),
          onAfterLeave: u
        }, {
          default: Y(() => [
            Te(se("div", {
              style: {
                backgroundColor: r.background || ""
              },
              class: [
                n.b("mask"),
                r.customClass,
                r.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              J("div", {
                class: n.b("spinner")
              }, [c, v])
            ]), [[St, r.visible]])
          ])
        });
      };
    }
  }), p = f.mount(document.createElement("div"));
  return {
    ...Wn(r),
    setText: l,
    removeElLoadingChild: s,
    close: i,
    handleAfterLeave: u,
    vm: p,
    get $el() {
      return p.$el;
    }
  };
}
let $o;
const i2 = function(e = {}) {
  if (!_e)
    return;
  const t = u2(e);
  if (t.fullscreen && $o)
    return $o;
  const n = s2({
    ...t,
    closed: () => {
      var r;
      (r = t.closed) == null || r.call(t), t.fullscreen && ($o = void 0);
    }
  });
  c2(t, t.parent, n), ss(t, t.parent, n), t.parent.vLoadingAddClassList = () => ss(t, t.parent, n);
  let o = t.parent.getAttribute("loading-number");
  return o ? o = `${Number.parseInt(o) + 1}` : o = "1", t.parent.setAttribute("loading-number", o), t.parent.appendChild(n.$el), ue(() => n.visible.value = t.visible), t.fullscreen && ($o = n), n;
}, u2 = (e) => {
  var t, n, o, r;
  let l;
  return at(e.target) ? l = (t = document.querySelector(e.target)) != null ? t : document.body : l = e.target || document.body, {
    parent: l === document.body || e.body ? document.body : l,
    background: e.background || "",
    svg: e.svg || "",
    svgViewBox: e.svgViewBox || "",
    spinner: e.spinner || !1,
    text: e.text || "",
    fullscreen: l === document.body && ((n = e.fullscreen) != null ? n : !0),
    lock: (o = e.lock) != null ? o : !1,
    customClass: e.customClass || "",
    visible: (r = e.visible) != null ? r : !0,
    target: l
  };
}, c2 = async (e, t, n) => {
  const { nextZIndex: o } = Sl(), r = {};
  if (e.fullscreen)
    n.originalPosition.value = Qt(document.body, "position"), n.originalOverflow.value = Qt(document.body, "overflow"), r.zIndex = o();
  else if (e.parent === document.body) {
    n.originalPosition.value = Qt(document.body, "position"), await ue();
    for (const l of ["top", "left"]) {
      const a = l === "top" ? "scrollTop" : "scrollLeft";
      r[l] = `${e.target.getBoundingClientRect()[l] + document.body[a] + document.documentElement[a] - Number.parseInt(Qt(document.body, `margin-${l}`), 10)}px`;
    }
    for (const l of ["height", "width"])
      r[l] = `${e.target.getBoundingClientRect()[l]}px`;
  } else
    n.originalPosition.value = Qt(t, "position");
  for (const [l, a] of Object.entries(r))
    n.$el.style[l] = a;
}, ss = (e, t, n) => {
  const o = oe("loading");
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? yn(t, o.bm("parent", "relative")) : Ho(t, o.bm("parent", "relative")), e.fullscreen && e.lock ? Ho(t, o.bm("parent", "hidden")) : yn(t, o.bm("parent", "hidden"));
}, Vr = Symbol("ElLoading"), is = (e, t) => {
  var n, o, r, l;
  const a = t.instance, s = (p) => ut(t.value) ? t.value[p] : void 0, i = (p) => {
    const h = at(p) && (a == null ? void 0 : a[p]) || p;
    return h && T(h);
  }, u = (p) => i(s(p) || e.getAttribute(`element-loading-${Tv(p)}`)), d = (n = s("fullscreen")) != null ? n : t.modifiers.fullscreen, f = {
    text: u("text"),
    svg: u("svg"),
    svgViewBox: u("svgViewBox"),
    spinner: u("spinner"),
    background: u("background"),
    customClass: u("customClass"),
    fullscreen: d,
    target: (o = s("target")) != null ? o : d ? void 0 : e,
    body: (r = s("body")) != null ? r : t.modifiers.body,
    lock: (l = s("lock")) != null ? l : t.modifiers.lock
  };
  e[Vr] = {
    options: f,
    instance: i2(f)
  };
}, d2 = (e, t) => {
  for (const n of Object.keys(t))
    vn(t[n]) && (t[n].value = e[n]);
}, f2 = {
  mounted(e, t) {
    t.value && is(e, t);
  },
  updated(e, t) {
    const n = e[Vr];
    t.oldValue !== t.value && (t.value && !t.oldValue ? is(e, t) : t.value && t.oldValue ? ut(t.value) && d2(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[Vr]) == null || t.instance.close();
  }
};
const p2 = /* @__PURE__ */ B("i", null, null, -1), v2 = {
  key: 0,
  class: "flex al-center p-y-8 m-b-8"
}, h2 = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28"
}, g2 = /* @__PURE__ */ B("i", null, null, -1), m2 = { class: "flex al-center" }, b2 = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28 m-t-24"
}, y2 = { class: "m-t-24" }, w2 = {
  name: "VbTable"
}, ou = /* @__PURE__ */ Object.assign(w2, {
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
    propFuc: {
      type: Object,
      default: () => {
      }
    },
    height: { type: String || Number, default: "calc(100% - 500px)" },
    showIndex: { type: Boolean, default: !1 },
    // 是否显示序号列
    showSelect: { type: Boolean, default: !1 },
    // 是否显示checkbox
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
  setup(e, { emit: t }) {
    const n = e, o = T();
    Z(
      () => [n.tableQuery],
      () => {
        var f;
        (f = o.value) == null || f.setScrollTop(0);
      }
    );
    const r = T([]);
    function l(f) {
      r.value = f, i.value = f.length > 0 && f.length < n.data.length, u.value = n.data.length > 0 && f.length === n.data.length, t("handleSeleted", r.value);
    }
    function a() {
      t("handleBatchDel", r.value);
    }
    function s(f, p) {
      if (p.rowIndex)
        f = p.rowIndex;
      else if (p.rowIndex === !1)
        return "";
      const { pageIndex: h = 1, pageSize: c = 20 } = n.tableQuery;
      return f + 1 + (h - 1) * c;
    }
    const i = T(!1), u = T(!1);
    function d() {
      o.value.toggleAllSelection();
    }
    return (f, p) => {
      var C, E, $, S;
      const h = Jw, c = Di, v = Cn, w = Mb, g = Qw, y = U1, b = f2;
      return Te((O(), M("div", {
        class: "zn-table-content",
        style: Oe({ height: e.height })
      }, [
        se(g, fn({
          ref_key: "tableRef",
          ref: o,
          class: ["flex-1", { "hide-checkAll": e.hideDftCheckAll }],
          data: e.data,
          onSelectionChange: l
        }, { ...e.prop }, bu({ ...e.propFuc })), vs({
          append: Y(() => {
            var x;
            return [
              re(f.$slots, "append"),
              (x = e.data) != null && x.length && e.showBatchDel ? (O(), M("div", v2, [
                e.showSelect ? (O(), M("div", h2, [
                  se(v, {
                    "model-value": u.value,
                    indeterminate: i.value,
                    class: "table-check-all",
                    onChange: d
                  }, null, 8, ["model-value", "indeterminate"])
                ])) : j("", !0),
                re(f.$slots, "batch-action", { selection: r.value }, () => {
                  var P;
                  return [
                    se(w, {
                      disabled: !((P = r.value) != null && P.length),
                      plain: "",
                      type: "danger",
                      onClick: a
                    }, {
                      default: Y(() => [
                        Rn("批量删除")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                })
              ])) : j("", !0)
            ];
          }),
          default: Y(() => [
            e.showSelect ? (O(), G(h, {
              key: 0,
              type: "selection",
              width: "55",
              align: "center"
            }, {
              header: Y(() => [
                p2
              ]),
              _: 1
            })) : j("", !0),
            e.showIndex ? (O(), G(h, {
              key: 1,
              label: "序号",
              type: "index",
              align: "center",
              width: "70"
            }, {
              default: Y(({ $index: x, row: P }) => [
                Rn(ge(s(x, P)), 1)
              ]),
              _: 1
            })) : j("", !0),
            re(f.$slots, "default")
          ]),
          _: 2
        }, [
          e.customEmpty ? {
            name: "empty",
            fn: Y(() => [
              B("div", null, [
                e.loading ? j("", !0) : (O(), G(c, {
                  key: 0,
                  style: { width: "100%", height: "100%" }
                }))
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["class", "data"]),
        (C = e.summaryData) != null && C.length ? (O(), G(g, {
          key: 0,
          data: e.summaryData,
          "show-header": !1
        }, {
          empty: Y(() => [
            g2
          ]),
          default: Y(() => [
            e.showSelect ? (O(), G(h, {
              key: 0,
              width: "55"
            })) : j("", !0),
            e.showIndex ? (O(), G(h, {
              key: 1,
              width: "60"
            })) : j("", !0),
            re(f.$slots, "summary-columns", {}, () => [
              re(f.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["data"])) : j("", !0),
        Te(B("div", m2, [
          e.showSelect && e.hideDftCheckAll && !e.showBatchDel || e.showSelect && f.$slots.footer ? (O(), M("div", b2, [
            se(v, {
              "model-value": u.value,
              indeterminate: i.value,
              class: "table-check-all",
              onChange: d
            }, null, 8, ["model-value", "indeterminate"])
          ])) : j("", !0),
          B("div", y2, [
            re(f.$slots, "footer", { selection: r.value })
          ]),
          e.showP ? (O(), G(y, {
            key: 1,
            class: "table-pagination m-t-24",
            currentPage: (E = e.tableQuery) == null ? void 0 : E.pageIndex,
            "page-size": ($ = e.tableQuery) == null ? void 0 : $.pageSize,
            "pageNum-sizes": [10, 20, 50],
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total ?? 0,
            onSizeChange: p[0] || (p[0] = (x) => t("handleSizeChange", x)),
            onCurrentChange: p[1] || (p[1] = (x) => t("handleCurrentChange", x))
          }, null, 8, ["currentPage", "page-size", "total"])) : j("", !0)
        ], 512), [
          [St, (S = e.data) == null ? void 0 : S.length]
        ])
      ], 4)), [
        [b, e.loading]
      ]);
    };
  }
}), ru = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, C2 = {
  name: "VbButton"
};
function S2(e, t, n, o, r, l) {
  return O(), M("div", null, "这是按钮啊");
}
const lu = /* @__PURE__ */ ru(C2, [["render", S2]]);
const E2 = { class: "list-scroll-search" }, _2 = {
  key: 0,
  class: "list"
}, $2 = ["onClick"], O2 = {
  name: "VbListScrollSearch"
}, T2 = /* @__PURE__ */ Object.assign(O2, {
  props: {
    api: Object,
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
  setup(e, { emit: t }) {
    const n = e, o = T([]), r = T({ pageIndex: 1, pageSize: 20 }), l = T();
    let a = !1;
    const s = T(!1), i = T(!1);
    xe(() => {
      i.value = !0, c();
    });
    const { option: u, api: d, searchKey: f, formatDataFc: p, defaultParams: h } = n;
    async function c() {
      s.value = !0;
      const y = {
        ...h,
        ...r.value,
        [f]: l.value
      }, { data: b } = await globalRequest(d, y);
      s.value = !1;
      const { ok: C, data: E } = b ?? {};
      if (C && (E != null && E.length)) {
        let $ = E.filter((S) => o.value.every((x) => x[u.key] !== S[u.key]));
        p && ($ = p($)), o.value.push(...$), n.modelValue ? o.value.find((x) => x[n.option.key] === n.modelValue) || v() : !n.modelValue && n.defaultFirst && g(0), (E == null ? void 0 : E.length) < r.value.pageSize && (a = !0);
      } else
        a = !0;
      o.value.length || g(-1);
    }
    function v() {
      !a && !s.value && (r.value.pageIndex++, c());
    }
    function w() {
      r.value.pageIndex = 1, o.value = [], c();
    }
    function g(y) {
      let b, C;
      y !== -1 && (b = o.value[y][u.key], C = o.value[y][u.label]), t("update:modelValue", b), t("update:label", C), t("change", b);
    }
    return (y, b) => {
      const C = ze, E = El, $ = Di, S = a2;
      return O(), M("div", E2, [
        se(E, {
          placeholder: e.placeholder,
          modelValue: l.value,
          "onUpdate:modelValue": b[0] || (b[0] = (x) => l.value = x),
          clearable: "",
          onClear: w,
          onKeyup: rt(w, ["enter"])
        }, {
          suffix: Y(() => [
            se(C, {
              class: "pointer",
              onClick: w
            }, {
              default: Y(() => [
                se(m(tg))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["placeholder", "modelValue", "onKeyup"]),
        i.value ? Te((O(), M("ul", _2, [
          (O(!0), M(Ne, null, tn(o.value, (x, P) => (O(), M("li", {
            key: P,
            class: R({ active: e.modelValue === x[m(u).key] }),
            onClick: (H) => g(P)
          }, ge(x[m(u).label]), 11, $2))), 128))
        ])), [
          [S, v]
        ]) : j("", !0),
        s.value ? (O(), G(C, {
          key: 1,
          class: R({ "is-loading": s.value && !m(a) })
        }, {
          default: Y(() => [
            se(m(Qo))
          ]),
          _: 1
        }, 8, ["class"])) : j("", !0),
        Te(se($, { style: { width: "100%" } }, null, 512), [
          [St, !s.value && !o.value.length]
        ])
      ]);
    };
  }
}), au = /* @__PURE__ */ ru(T2, [["__scopeId", "data-v-86f2833d"]]), x2 = {
  __name: "index",
  props: {
    loading: Boolean,
    value: String || Object,
    diffBottom: {
      type: Number,
      default: 20
    }
  },
  emits: ["loadMore"],
  setup(e, { emit: t }) {
    const n = e, o = `cl-${Date.now()}-${Math.random().toString().replace(".", "")}`;
    let r;
    xe(() => {
      l();
    }), Vo(() => {
      r == null || r.removeEventListener("scroll", a);
    });
    function l() {
      setTimeout(() => {
        r = document.querySelector(`.${o} .el-scrollbar__wrap`), r == null || r.addEventListener("scroll", a);
      }, 0);
    }
    function a({ target: { offsetHeight: s, scrollHeight: i, scrollTop: u } }) {
      s + u > i - n.diffBottom && !n.loading && t("loadMore");
    }
    return (s, i) => {
      const u = ji;
      return O(), G(u, {
        "model-value": e.value,
        "popper-class": o,
        onFocus: l
      }, {
        default: Y(() => [
          re(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["model-value"]);
    };
  }
}, k2 = {
  name: "VbScrollSelect"
}, su = /* @__PURE__ */ Object.assign(k2, {
  props: {
    api: Object,
    searchKey: { type: String, default: "name" },
    // 检索键值
    formatDataFc: Function,
    // 格式化数据的方法
    defaultParams: {
      type: Object,
      default: () => ({})
    },
    // 默认参数
    modelValue: [String, Array],
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
    }
  },
  emits: [
    "update:modelValue",
    // 只给选中项的value值
    "change",
    "update:data"
    // 给选中项的全部json对象
  ],
  setup(e, { emit: t }) {
    const n = e, o = k(() => w(n.modelValue) ? r.value.filter((g) => n.modelValue.includes(g[n.option.key])) : r.value.find((y) => y[n.option.key] === n.modelValue)), r = T([]);
    let l = [];
    const a = T({ pageIndex: 1, pageSize: 20 }), s = T();
    let i = !1;
    const u = T(!1);
    xe(() => {
      n.init && f();
    }), Z(
      () => JSON.stringify(n.defaultParams),
      (g) => {
        d();
      }
    );
    function d() {
      r.value = [], l = [], a.value.pageIndex = 1, f();
    }
    async function f() {
      if (!n.api)
        throw "scroll-select-v2 组件 未定义api";
      u.value = !0;
      const g = {
        ...n.defaultParams,
        ...a.value,
        [n.searchKey]: s.value
      }, { data: y } = await globalRequest(n.api, g);
      u.value = !1;
      const { ok: b, data: C } = y ?? {};
      if (b) {
        let E = (C == null ? void 0 : C.filter(($) => r.value.every((S) => S[n.option.key] !== $[n.option.key]))) || [];
        if (n.formatDataFc && (E = n.formatDataFc(E)), (C == null ? void 0 : C.length) < a.value.pageSize && (i = !0), s.value)
          r.value = E;
        else {
          if (l.push(...E), c(), n.modelValue) {
            const $ = l.find((S) => S[n.option.key] === n.modelValue);
            $ ? v($) : p();
          }
          !n.modelValue && n.defaultFirst && v(r.value[0]);
        }
      } else
        i = !0;
      r.value.length || v(void 0);
    }
    function p() {
      !i && !u.value && (a.value.pageIndex++, f());
    }
    function h(g) {
      s.value = g, g ? (a.value.pageIndex = 1, r.value = [], f()) : c();
    }
    function c() {
      r.value = [...l];
    }
    function v(g = {}) {
      let y = g == null ? void 0 : g[n.option.key];
      w(g) && (y = g.map((b) => b[n.option.key])), t("update:modelValue", y), t("change", y, g), t("update:data", g);
    }
    function w(g) {
      return Object.prototype.toString.call(g) === "[object Array]";
    }
    return (g, y) => {
      const b = Ki;
      return O(), G(x2, {
        loading: u.value,
        "model-value": m(o),
        "loading-text": "加载中...",
        "no-match-text": "未查询到数据",
        "no-data-text": "未查询到数据",
        clearable: "",
        filterable: "",
        "fit-input-width": "",
        remote: "",
        "reserve-keyword": "",
        "remote-show-suffix": "",
        "remote-method": h,
        onLoadMore: p,
        onClear: c,
        onChange: v,
        "value-key": e.option.key
      }, {
        default: Y(() => [
          (O(!0), M(Ne, null, tn(r.value, (C) => (O(), G(b, {
            key: C[e.option.key],
            label: C[e.option.label],
            value: C
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["loading", "model-value", "value-key"]);
    };
  }
});
const P2 = {
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
}, us = {
  十: { value: 10, secUnit: !1 },
  百: { value: 100, secUnit: !1 },
  千: { value: 1e3, secUnit: !1 },
  万: { value: 1e4, secUnit: !0 },
  亿: { value: 1e8, secUnit: !0 }
};
function cs(e) {
  for (var t = 0, n = 0, o = 0, r = !1, l = e.split(""), a = 0; a < l.length; a++) {
    var s = P2[l[a]];
    if (typeof s < "u")
      o = s, a === l.length - 1 && (n += o);
    else {
      var i = us[l[a]].value;
      r = us[l[a]].secUnit, r ? (n = (n + o) * i, t += n, n = 0) : n += o * i, o = 0;
    }
  }
  return t + n;
}
const aC = (e) => new RegExp(`<${e}[^>]*>[\\s\\S]*?</[^>]*${e}>`, "i"), A2 = /^[\u4e00-\u9fa5]+$/, L2 = /^1[3-9]\d{9}$/, R2 = /^[0-9]{4}-\d{7}$/, M2 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, N2 = /^https?:\/\/.{1,}\..{1,}$/i, I2 = /^[0-9]+$/, B2 = /^\d+\.*[\d+]{0,}$/, F2 = /[\u4E00-\u9FFF]+/g, z2 = /^[a-z0-9]+$/i, sC = /^-[0-9]+$/i, H2 = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, D2 = /^[a-zA-Z0-9]{10,20}$/, W2 = /^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{6,20}$/, V2 = /^[0-9a-zA-Z]{4}$/, j2 = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g, K2 = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/, Oo = /[一二三四五六七八九十]{1,}/, iC = /<tr[^>]*>[^\{^\}]*?\[{1}[\s\S^\{^\}]*?\]{1}[^\{^\}]*?<\/[^>]*tr>/gi, uC = /<td[^>]*>[\s\S]*?<\/[^>]*td>/gi, cC = (e) => typeof e == "string", U2 = (e) => L2.test(e), G2 = (e) => R2.test(e), q2 = (e) => M2.test(e), Y2 = (e) => N2.test(e), X2 = (e) => B2.test(e), Z2 = (e) => I2.test(e), Q2 = (e) => z2.test(e), dC = (e) => F2.test(e), J2 = (e) => H2.test(e), fC = (e) => D2.test(e), eC = (e) => W2.test(e), tC = (e) => V2.test(e), nC = (e) => j2.test(e), oC = (e) => K2.test(e), xn = (e) => A2.test(e), pC = (e) => {
  const t = new FormData();
  return Object.keys(e).forEach((n) => {
    e[n] !== null && t.append(n, e[n]);
  }), t;
}, vC = (e, t = !0) => {
  const n = document.createElement("a");
  n.href = e, t && (n.target = "_blank"), n.click();
}, hC = (e) => {
  const [t, ...n] = e.split(".").reverse();
  return [n.reverse().reduce((o, r) => o + r, ""), t];
}, gC = (e) => {
  switch (!0) {
    case e / 1024 < 1024:
      return `${(e / 1024).toFixed(2)}kb`;
    default:
      return `${(e / 1024 / 1024).toFixed(2)}Mb`;
  }
}, Nl = (e) => Object.prototype.toString.call(e), mC = (e, t, n = !1) => {
  if (Object.prototype.toString.call(e) !== "[object Array]")
    return [];
  const o = t == null ? void 0 : t.split(",");
  function r(l, a) {
    var i, u;
    switch (!0) {
      case (!!((i = l == null ? void 0 : l.match(Oo)) != null && i.length) && !!((u = a == null ? void 0 : a.match(Oo)) != null && u.length)):
        return cs(l == null ? void 0 : l.match(Oo)[0]) - cs(a == null ? void 0 : a.match(Oo)[0]);
      case (xn(l) && xn(a)):
        return -1;
      case (xn(l) && !xn(a)):
        return -1;
      case (!xn(l) && xn(a)):
        return 1;
    }
    let s = 0;
    return (l == null ? void 0 : l.length) !== (a == null ? void 0 : a.length) ? s += (l == null ? void 0 : l.length) - (a == null ? void 0 : a.length) || 0 : s += (l == null ? void 0 : l.localeCompare(a)) + ((l - a) * 2 || 0), s;
  }
  return e.sort((l, a) => {
    let s = 0;
    if (o)
      o.forEach((i) => {
        var u, d;
        try {
          const f = (u = l[i]) == null ? void 0 : u.toString().trim(), p = (d = a[i]) == null ? void 0 : d.toString().trim();
          s += r(f, p);
        } catch (f) {
          console.log(f);
        }
      });
    else {
      const i = l == null ? void 0 : l.toString().trim(), u = a == null ? void 0 : a.toString().trim();
      s += r(i, u);
    }
    return s * (n ? -1 : 1);
  });
}, bC = (e) => new Promise((t) => {
  const n = document.createElement("input");
  e && (n.accept = e), n.type = "file", n.onchange = (o) => {
    const r = o.target.files[0];
    o.target.value = null, t(r);
  }, n.click();
}), yC = (e, t, n = "application/vnd.ms-excel;charset=utf-8") => {
  let o;
  e instanceof Blob ? o = e : o = new Blob([e], { type: n });
  const r = window.URL.createObjectURL(o), l = document.createElement("a");
  l.download = t, l.href = r, l.click(), l.remove(), window.URL.revokeObjectURL(r);
}, Il = (e, t = 2) => {
  switch (Nl(e)) {
    case "[object Number]":
      return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
    default:
      return e ?? 0;
  }
}, wC = (e) => {
  const { columns: t, data: n } = e, o = [];
  return t.forEach((r, l) => {
    if (l === 0) {
      o[l] = "合计";
      return;
    }
    const a = n == null ? void 0 : n.map((s) => Number(s[r.property] || s[r] || 0));
    a.every((s) => Number.isNaN(s)) ? o[l] = "" : o[l] = `${a.reduce((s, i) => {
      const u = Number(i);
      return Number.isNaN(u) ? s : Il(s + i);
    }, 0)}`;
  }), o;
}, CC = (e) => {
  const { columns: t, data: n } = e, o = [];
  return t.forEach((r, l) => {
    if (l === 0) {
      o[l] = "";
      return;
    }
    if (l === 1) {
      o[l] = "合计";
      return;
    }
    const a = n.map((s) => Number(s[r.property] || 0));
    a.every((s) => Number.isNaN(s)) ? o[l] = "" : o[l] = `${a.reduce((s, i) => {
      const u = Number(i);
      return Number.isNaN(u) ? s : Il(s + i);
    }, 0)}`;
  }), o;
}, SC = (e, t, n) => {
  const o = {
    [n]: "合计"
  };
  return e.forEach((r) => {
    t.forEach((l) => {
      o[l] = Il((o[l] || 0) + Number(r[l] || 0));
    });
  }), o;
}, mt = (e, t = "请正确填写") => ({
  validator: (n, o, r) => {
    let l = !0;
    switch (Nl(e)) {
      case "[object Function]":
        l = e(o);
        break;
      case "[object Array]":
        l = e.some((s) => s(o));
        break;
      case "[object Object]":
        l = Object.values(e).every((s) => s(o));
        break;
    }
    return !o || o === 0 || l ? r() : r(t);
  },
  trigger: "blur"
}), EC = {
  url: mt(Y2),
  phone: mt([U2, G2]),
  email: mt(q2),
  double: mt(X2),
  int: mt(Z2),
  intAndLetter: mt(Q2),
  idCard: mt(J2),
  psw: mt(eC, "密码必须包含大小写字母、数字和特殊字符，长度为6-20位"),
  captcha: mt(tC),
  socialCreditCode: mt(nC),
  carNumber: mt(oC)
}, _C = {
  required: !0,
  message: "必填项",
  validator: function(e, t, n) {
    const o = Nl(t);
    let r = !0;
    switch (o) {
      case "[object String]":
        t != null && t.trim() || (r = !1);
        break;
      case "[object Number]":
        break;
      case "[object Array]":
        r = !!(t != null && t.length);
        break;
      default:
        r = !!t;
        break;
    }
    return r ? n() : n(this.message);
  },
  trigger: "blur"
}, $C = {
  create: "create",
  update: "update"
}, rC = [ou, lu, au, su], OC = {
  VbTable: ou,
  VbButton: lu,
  VbListScrollSearch: au,
  VbScrollSelect: su,
  install(e) {
    rC.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  D2 as REGBUSINESSLICENSE,
  V2 as REGCAPTCHA,
  K2 as REGCARNUMBER,
  A2 as REGCH,
  Oo as REGCHINESENUM,
  B2 as REGDOUBLE,
  M2 as REGEMAIL,
  H2 as REGIDCARD,
  I2 as REGINT,
  z2 as REGINTANDLETTER,
  R2 as REGLANDLINE,
  L2 as REGMOBILE,
  W2 as REGPSW,
  F2 as REGRECHINESE,
  sC as REGRENEGATIVE,
  iC as REGTABLECYCLETR,
  N2 as REGURL,
  j2 as SOCIALCREDITCODE,
  OC as default,
  $C as dialogTypeOpt,
  yC as downloadFile,
  hC as formatFileNameSuffix,
  gC as formatFileSize,
  Il as formatNumber,
  CC as getMoreSummaries,
  wC as getSummaries,
  SC as getSummaryDatas,
  fC as isBusinessLicense,
  xn as isCH,
  oC as isCarNumber,
  dC as isChinese,
  tC as isCpatcha,
  X2 as isDouble,
  q2 as isEmail,
  J2 as isIdCard,
  Z2 as isInt,
  Q2 as isIntAndLetter,
  G2 as isLandLine,
  U2 as isMobile,
  eC as isPsw,
  nC as isSocialCreditCode,
  cC as isStr,
  Y2 as isUrl,
  vC as jumpExternalChain,
  pC as obj2Formdata,
  aC as regTag,
  uC as regTd,
  _C as required,
  bC as selectLocalFile,
  mC as sortFuc,
  Nl as typeCheck,
  EC as validatorFun
};
