import { getCurrentScope as cu, onScopeDispose as du, unref as m, getCurrentInstance as we, onMounted as xe, nextTick as ue, watch as Q, ref as O, openBlock as T, createElementBlock as R, createElementVNode as B, warn as fu, computed as k, inject as de, toRef as xt, onUnmounted as Wo, isRef as pn, onBeforeUnmount as Rt, onBeforeMount as jr, provide as st, defineComponent as G, mergeProps as dn, renderSlot as re, useAttrs as pu, useSlots as Vo, shallowRef as Yn, withDirectives as Oe, createCommentVNode as j, Fragment as Ne, normalizeClass as M, createBlock as q, withCtx as Y, resolveDynamicComponent as lt, withModifiers as bt, createVNode as se, toDisplayString as ge, normalizeStyle as Te, vShow as Ct, Transition as uo, reactive as Cn, onUpdated as us, cloneVNode as vu, Text as cs, Comment as ds, Teleport as hu, readonly as gu, onDeactivated as mu, toRaw as An, vModelCheckbox as Lo, createTextVNode as Ln, toRefs as Dn, triggerRef as Un, resolveComponent as Pe, resolveDirective as Kr, renderList as en, withKeys as rt, vModelText as bu, createSlots as fs, watchEffect as Pn, h as Z, createApp as yu, toHandlers as wu } from "vue";
var Cu = typeof global == "object" && global && global.Object === Object && global;
const ps = Cu;
var Su = typeof self == "object" && self && self.Object === Object && self, Eu = ps || Su || Function("return this")();
const St = Eu;
var _u = St.Symbol;
const At = _u;
var vs = Object.prototype, $u = vs.hasOwnProperty, Tu = vs.toString, qn = At ? At.toStringTag : void 0;
function Ou(e) {
  var t = $u.call(e, qn), n = e[qn];
  try {
    e[qn] = void 0;
    var o = !0;
  } catch {
  }
  var r = Tu.call(e);
  return o && (t ? e[qn] = n : delete e[qn]), r;
}
var xu = Object.prototype, ku = xu.toString;
function Pu(e) {
  return ku.call(e);
}
var Au = "[object Null]", Lu = "[object Undefined]", Nl = At ? At.toStringTag : void 0;
function Sn(e) {
  return e == null ? e === void 0 ? Lu : Au : Nl && Nl in Object(e) ? Ou(e) : Pu(e);
}
function tn(e) {
  return e != null && typeof e == "object";
}
var Mu = "[object Symbol]";
function jo(e) {
  return typeof e == "symbol" || tn(e) && Sn(e) == Mu;
}
function hs(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Ru = Array.isArray;
const it = Ru;
var Nu = 1 / 0, Il = At ? At.prototype : void 0, Bl = Il ? Il.toString : void 0;
function gs(e) {
  if (typeof e == "string")
    return e;
  if (it(e))
    return hs(e, gs) + "";
  if (jo(e))
    return Bl ? Bl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Nu ? "-0" : t;
}
var Iu = /\s/;
function Bu(e) {
  for (var t = e.length; t-- && Iu.test(e.charAt(t)); )
    ;
  return t;
}
var Fu = /^\s+/;
function zu(e) {
  return e && e.slice(0, Bu(e) + 1).replace(Fu, "");
}
function Xe(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Fl = 0 / 0, Hu = /^[-+]0x[0-9a-f]+$/i, Du = /^0b[01]+$/i, Wu = /^0o[0-7]+$/i, Vu = parseInt;
function zl(e) {
  if (typeof e == "number")
    return e;
  if (jo(e))
    return Fl;
  if (Xe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Xe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = zu(e);
  var n = Du.test(e);
  return n || Wu.test(e) ? Vu(e.slice(2), n ? 2 : 8) : Hu.test(e) ? Fl : +e;
}
function Ur(e) {
  return e;
}
var ju = "[object AsyncFunction]", Ku = "[object Function]", Uu = "[object GeneratorFunction]", qu = "[object Proxy]";
function qr(e) {
  if (!Xe(e))
    return !1;
  var t = Sn(e);
  return t == Ku || t == Uu || t == ju || t == qu;
}
var Gu = St["__core-js_shared__"];
const ar = Gu;
var Hl = function() {
  var e = /[^.]+$/.exec(ar && ar.keys && ar.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Yu(e) {
  return !!Hl && Hl in e;
}
var Xu = Function.prototype, Qu = Xu.toString;
function En(e) {
  if (e != null) {
    try {
      return Qu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ju = /[\\^$.*+?()[\]{}|]/g, Zu = /^\[object .+?Constructor\]$/, ec = Function.prototype, tc = Object.prototype, nc = ec.toString, oc = tc.hasOwnProperty, rc = RegExp(
  "^" + nc.call(oc).replace(Ju, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function lc(e) {
  if (!Xe(e) || Yu(e))
    return !1;
  var t = qr(e) ? rc : Zu;
  return t.test(En(e));
}
function ac(e, t) {
  return e == null ? void 0 : e[t];
}
function _n(e, t) {
  var n = ac(e, t);
  return lc(n) ? n : void 0;
}
var sc = _n(St, "WeakMap");
const yr = sc;
var Dl = Object.create, ic = function() {
  function e() {
  }
  return function(t) {
    if (!Xe(t))
      return {};
    if (Dl)
      return Dl(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const uc = ic;
function cc(e, t, n) {
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
function dc(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var fc = 800, pc = 16, vc = Date.now;
function hc(e) {
  var t = 0, n = 0;
  return function() {
    var o = vc(), r = pc - (o - n);
    if (n = o, r > 0) {
      if (++t >= fc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function gc(e) {
  return function() {
    return e;
  };
}
var mc = function() {
  try {
    var e = _n(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Mo = mc;
var bc = Mo ? function(e, t) {
  return Mo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: gc(t),
    writable: !0
  });
} : Ur;
const yc = bc;
var wc = hc(yc);
const ms = wc;
var Cc = 9007199254740991, Sc = /^(?:0|[1-9]\d*)$/;
function Ko(e, t) {
  var n = typeof e;
  return t = t ?? Cc, !!t && (n == "number" || n != "symbol" && Sc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Gr(e, t, n) {
  t == "__proto__" && Mo ? Mo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function co(e, t) {
  return e === t || e !== e && t !== t;
}
var Ec = Object.prototype, _c = Ec.hasOwnProperty;
function bs(e, t, n) {
  var o = e[t];
  (!(_c.call(e, t) && co(o, n)) || n === void 0 && !(t in e)) && Gr(e, t, n);
}
function $c(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var l = -1, a = t.length; ++l < a; ) {
    var s = t[l], i = o ? o(n[s], e[s], s, n, e) : void 0;
    i === void 0 && (i = e[s]), r ? Gr(n, s, i) : bs(n, s, i);
  }
  return n;
}
var Wl = Math.max;
function ys(e, t, n) {
  return t = Wl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = Wl(o.length - t, 0), a = Array(l); ++r < l; )
      a[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(a), cc(e, this, s);
  };
}
function Tc(e, t) {
  return ms(ys(e, t, Ur), e + "");
}
var Oc = 9007199254740991;
function Yr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Oc;
}
function Wn(e) {
  return e != null && Yr(e.length) && !qr(e);
}
function xc(e, t, n) {
  if (!Xe(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? Wn(n) && Ko(t, n.length) : o == "string" && t in n) ? co(n[t], e) : !1;
}
function kc(e) {
  return Tc(function(t, n) {
    var o = -1, r = n.length, l = r > 1 ? n[r - 1] : void 0, a = r > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (r--, l) : void 0, a && xc(n[0], n[1], a) && (l = r < 3 ? void 0 : l, r = 1), t = Object(t); ++o < r; ) {
      var s = n[o];
      s && e(t, s, o, l);
    }
    return t;
  });
}
var Pc = Object.prototype;
function Xr(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Pc;
  return e === n;
}
function Ac(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Lc = "[object Arguments]";
function Vl(e) {
  return tn(e) && Sn(e) == Lc;
}
var ws = Object.prototype, Mc = ws.hasOwnProperty, Rc = ws.propertyIsEnumerable, Nc = Vl(function() {
  return arguments;
}()) ? Vl : function(e) {
  return tn(e) && Mc.call(e, "callee") && !Rc.call(e, "callee");
};
const to = Nc;
function Ic() {
  return !1;
}
var Cs = typeof exports == "object" && exports && !exports.nodeType && exports, jl = Cs && typeof module == "object" && module && !module.nodeType && module, Bc = jl && jl.exports === Cs, Kl = Bc ? St.Buffer : void 0, Fc = Kl ? Kl.isBuffer : void 0, zc = Fc || Ic;
const Ro = zc;
var Hc = "[object Arguments]", Dc = "[object Array]", Wc = "[object Boolean]", Vc = "[object Date]", jc = "[object Error]", Kc = "[object Function]", Uc = "[object Map]", qc = "[object Number]", Gc = "[object Object]", Yc = "[object RegExp]", Xc = "[object Set]", Qc = "[object String]", Jc = "[object WeakMap]", Zc = "[object ArrayBuffer]", ed = "[object DataView]", td = "[object Float32Array]", nd = "[object Float64Array]", od = "[object Int8Array]", rd = "[object Int16Array]", ld = "[object Int32Array]", ad = "[object Uint8Array]", sd = "[object Uint8ClampedArray]", id = "[object Uint16Array]", ud = "[object Uint32Array]", Se = {};
Se[td] = Se[nd] = Se[od] = Se[rd] = Se[ld] = Se[ad] = Se[sd] = Se[id] = Se[ud] = !0;
Se[Hc] = Se[Dc] = Se[Zc] = Se[Wc] = Se[ed] = Se[Vc] = Se[jc] = Se[Kc] = Se[Uc] = Se[qc] = Se[Gc] = Se[Yc] = Se[Xc] = Se[Qc] = Se[Jc] = !1;
function cd(e) {
  return tn(e) && Yr(e.length) && !!Se[Sn(e)];
}
function dd(e) {
  return function(t) {
    return e(t);
  };
}
var Ss = typeof exports == "object" && exports && !exports.nodeType && exports, Xn = Ss && typeof module == "object" && module && !module.nodeType && module, fd = Xn && Xn.exports === Ss, sr = fd && ps.process, pd = function() {
  try {
    var e = Xn && Xn.require && Xn.require("util").types;
    return e || sr && sr.binding && sr.binding("util");
  } catch {
  }
}();
const Ul = pd;
var ql = Ul && Ul.isTypedArray, vd = ql ? dd(ql) : cd;
const Qr = vd;
var hd = Object.prototype, gd = hd.hasOwnProperty;
function Es(e, t) {
  var n = it(e), o = !n && to(e), r = !n && !o && Ro(e), l = !n && !o && !r && Qr(e), a = n || o || r || l, s = a ? Ac(e.length, String) : [], i = s.length;
  for (var u in e)
    (t || gd.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ko(u, i))) && s.push(u);
  return s;
}
function _s(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var md = _s(Object.keys, Object);
const bd = md;
var yd = Object.prototype, wd = yd.hasOwnProperty;
function Cd(e) {
  if (!Xr(e))
    return bd(e);
  var t = [];
  for (var n in Object(e))
    wd.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Jr(e) {
  return Wn(e) ? Es(e) : Cd(e);
}
function Sd(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Ed = Object.prototype, _d = Ed.hasOwnProperty;
function $d(e) {
  if (!Xe(e))
    return Sd(e);
  var t = Xr(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !_d.call(e, o)) || n.push(o);
  return n;
}
function $s(e) {
  return Wn(e) ? Es(e, !0) : $d(e);
}
var Td = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Od = /^\w*$/;
function Zr(e, t) {
  if (it(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || jo(e) ? !0 : Od.test(e) || !Td.test(e) || t != null && e in Object(t);
}
var xd = _n(Object, "create");
const no = xd;
function kd() {
  this.__data__ = no ? no(null) : {}, this.size = 0;
}
function Pd(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ad = "__lodash_hash_undefined__", Ld = Object.prototype, Md = Ld.hasOwnProperty;
function Rd(e) {
  var t = this.__data__;
  if (no) {
    var n = t[e];
    return n === Ad ? void 0 : n;
  }
  return Md.call(t, e) ? t[e] : void 0;
}
var Nd = Object.prototype, Id = Nd.hasOwnProperty;
function Bd(e) {
  var t = this.__data__;
  return no ? t[e] !== void 0 : Id.call(t, e);
}
var Fd = "__lodash_hash_undefined__";
function zd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = no && t === void 0 ? Fd : t, this;
}
function vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
vn.prototype.clear = kd;
vn.prototype.delete = Pd;
vn.prototype.get = Rd;
vn.prototype.has = Bd;
vn.prototype.set = zd;
function Hd() {
  this.__data__ = [], this.size = 0;
}
function Uo(e, t) {
  for (var n = e.length; n--; )
    if (co(e[n][0], t))
      return n;
  return -1;
}
var Dd = Array.prototype, Wd = Dd.splice;
function Vd(e) {
  var t = this.__data__, n = Uo(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Wd.call(t, n, 1), --this.size, !0;
}
function jd(e) {
  var t = this.__data__, n = Uo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Kd(e) {
  return Uo(this.__data__, e) > -1;
}
function Ud(e, t) {
  var n = this.__data__, o = Uo(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Kt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Kt.prototype.clear = Hd;
Kt.prototype.delete = Vd;
Kt.prototype.get = jd;
Kt.prototype.has = Kd;
Kt.prototype.set = Ud;
var qd = _n(St, "Map");
const oo = qd;
function Gd() {
  this.size = 0, this.__data__ = {
    hash: new vn(),
    map: new (oo || Kt)(),
    string: new vn()
  };
}
function Yd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qo(e, t) {
  var n = e.__data__;
  return Yd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Xd(e) {
  var t = qo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Qd(e) {
  return qo(this, e).get(e);
}
function Jd(e) {
  return qo(this, e).has(e);
}
function Zd(e, t) {
  var n = qo(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Ut(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ut.prototype.clear = Gd;
Ut.prototype.delete = Xd;
Ut.prototype.get = Qd;
Ut.prototype.has = Jd;
Ut.prototype.set = Zd;
var ef = "Expected a function";
function el(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ef);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var a = e.apply(this, o);
    return n.cache = l.set(r, a) || l, a;
  };
  return n.cache = new (el.Cache || Ut)(), n;
}
el.Cache = Ut;
var tf = 500;
function nf(e) {
  var t = el(e, function(o) {
    return n.size === tf && n.clear(), o;
  }), n = t.cache;
  return t;
}
var of = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rf = /\\(\\)?/g, lf = nf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(of, function(n, o, r, l) {
    t.push(r ? l.replace(rf, "$1") : o || n);
  }), t;
});
const af = lf;
function sf(e) {
  return e == null ? "" : gs(e);
}
function Go(e, t) {
  return it(e) ? e : Zr(e, t) ? [e] : af(sf(e));
}
var uf = 1 / 0;
function fo(e) {
  if (typeof e == "string" || jo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -uf ? "-0" : t;
}
function tl(e, t) {
  t = Go(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[fo(t[n++])];
  return n && n == o ? e : void 0;
}
function Fe(e, t, n) {
  var o = e == null ? void 0 : tl(e, t);
  return o === void 0 ? n : o;
}
function Ts(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Gl = At ? At.isConcatSpreadable : void 0;
function cf(e) {
  return it(e) || to(e) || !!(Gl && e && e[Gl]);
}
function nl(e, t, n, o, r) {
  var l = -1, a = e.length;
  for (n || (n = cf), r || (r = []); ++l < a; ) {
    var s = e[l];
    t > 0 && n(s) ? t > 1 ? nl(s, t - 1, n, o, r) : Ts(r, s) : o || (r[r.length] = s);
  }
  return r;
}
function df(e) {
  var t = e == null ? 0 : e.length;
  return t ? nl(e, 1) : [];
}
function ff(e) {
  return ms(ys(e, void 0, df), e + "");
}
var pf = _s(Object.getPrototypeOf, Object);
const Os = pf;
var vf = "[object Object]", hf = Function.prototype, gf = Object.prototype, xs = hf.toString, mf = gf.hasOwnProperty, bf = xs.call(Object);
function yf(e) {
  if (!tn(e) || Sn(e) != vf)
    return !1;
  var t = Os(e);
  if (t === null)
    return !0;
  var n = mf.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && xs.call(n) == bf;
}
function wf() {
  this.__data__ = new Kt(), this.size = 0;
}
function Cf(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Sf(e) {
  return this.__data__.get(e);
}
function Ef(e) {
  return this.__data__.has(e);
}
var _f = 200;
function $f(e, t) {
  var n = this.__data__;
  if (n instanceof Kt) {
    var o = n.__data__;
    if (!oo || o.length < _f - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ut(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function kt(e) {
  var t = this.__data__ = new Kt(e);
  this.size = t.size;
}
kt.prototype.clear = wf;
kt.prototype.delete = Cf;
kt.prototype.get = Sf;
kt.prototype.has = Ef;
kt.prototype.set = $f;
var ks = typeof exports == "object" && exports && !exports.nodeType && exports, Yl = ks && typeof module == "object" && module && !module.nodeType && module, Tf = Yl && Yl.exports === ks, Xl = Tf ? St.Buffer : void 0, Ql = Xl ? Xl.allocUnsafe : void 0;
function Of(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = Ql ? Ql(n) : new e.constructor(n);
  return e.copy(o), o;
}
function xf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (l[r++] = a);
  }
  return l;
}
function kf() {
  return [];
}
var Pf = Object.prototype, Af = Pf.propertyIsEnumerable, Jl = Object.getOwnPropertySymbols, Lf = Jl ? function(e) {
  return e == null ? [] : (e = Object(e), xf(Jl(e), function(t) {
    return Af.call(e, t);
  }));
} : kf;
const Mf = Lf;
function Rf(e, t, n) {
  var o = t(e);
  return it(e) ? o : Ts(o, n(e));
}
function Zl(e) {
  return Rf(e, Jr, Mf);
}
var Nf = _n(St, "DataView");
const wr = Nf;
var If = _n(St, "Promise");
const Cr = If;
var Bf = _n(St, "Set");
const Sr = Bf;
var ea = "[object Map]", Ff = "[object Object]", ta = "[object Promise]", na = "[object Set]", oa = "[object WeakMap]", ra = "[object DataView]", zf = En(wr), Hf = En(oo), Df = En(Cr), Wf = En(Sr), Vf = En(yr), an = Sn;
(wr && an(new wr(new ArrayBuffer(1))) != ra || oo && an(new oo()) != ea || Cr && an(Cr.resolve()) != ta || Sr && an(new Sr()) != na || yr && an(new yr()) != oa) && (an = function(e) {
  var t = Sn(e), n = t == Ff ? e.constructor : void 0, o = n ? En(n) : "";
  if (o)
    switch (o) {
      case zf:
        return ra;
      case Hf:
        return ea;
      case Df:
        return ta;
      case Wf:
        return na;
      case Vf:
        return oa;
    }
  return t;
});
const la = an;
var jf = St.Uint8Array;
const No = jf;
function Kf(e) {
  var t = new e.constructor(e.byteLength);
  return new No(t).set(new No(e)), t;
}
function Uf(e, t) {
  var n = t ? Kf(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function qf(e) {
  return typeof e.constructor == "function" && !Xr(e) ? uc(Os(e)) : {};
}
var Gf = "__lodash_hash_undefined__";
function Yf(e) {
  return this.__data__.set(e, Gf), this;
}
function Xf(e) {
  return this.__data__.has(e);
}
function Io(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Ut(); ++t < n; )
    this.add(e[t]);
}
Io.prototype.add = Io.prototype.push = Yf;
Io.prototype.has = Xf;
function Qf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Jf(e, t) {
  return e.has(t);
}
var Zf = 1, ep = 2;
function Ps(e, t, n, o, r, l) {
  var a = n & Zf, s = e.length, i = t.length;
  if (s != i && !(a && i > s))
    return !1;
  var u = l.get(e), d = l.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, p = !0, h = n & ep ? new Io() : void 0;
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
      if (!Qf(t, function(g, y) {
        if (!Jf(h, y) && (c === g || r(c, g, n, o, l)))
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
function tp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function np(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var op = 1, rp = 2, lp = "[object Boolean]", ap = "[object Date]", sp = "[object Error]", ip = "[object Map]", up = "[object Number]", cp = "[object RegExp]", dp = "[object Set]", fp = "[object String]", pp = "[object Symbol]", vp = "[object ArrayBuffer]", hp = "[object DataView]", aa = At ? At.prototype : void 0, ir = aa ? aa.valueOf : void 0;
function gp(e, t, n, o, r, l, a) {
  switch (n) {
    case hp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case vp:
      return !(e.byteLength != t.byteLength || !l(new No(e), new No(t)));
    case lp:
    case ap:
    case up:
      return co(+e, +t);
    case sp:
      return e.name == t.name && e.message == t.message;
    case cp:
    case fp:
      return e == t + "";
    case ip:
      var s = tp;
    case dp:
      var i = o & op;
      if (s || (s = np), e.size != t.size && !i)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= rp, a.set(e, t);
      var d = Ps(s(e), s(t), o, r, l, a);
      return a.delete(e), d;
    case pp:
      if (ir)
        return ir.call(e) == ir.call(t);
  }
  return !1;
}
var mp = 1, bp = Object.prototype, yp = bp.hasOwnProperty;
function wp(e, t, n, o, r, l) {
  var a = n & mp, s = Zl(e), i = s.length, u = Zl(t), d = u.length;
  if (i != d && !a)
    return !1;
  for (var f = i; f--; ) {
    var p = s[f];
    if (!(a ? p in t : yp.call(t, p)))
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
var Cp = 1, sa = "[object Arguments]", ia = "[object Array]", go = "[object Object]", Sp = Object.prototype, ua = Sp.hasOwnProperty;
function Ep(e, t, n, o, r, l) {
  var a = it(e), s = it(t), i = a ? ia : la(e), u = s ? ia : la(t);
  i = i == sa ? go : i, u = u == sa ? go : u;
  var d = i == go, f = u == go, p = i == u;
  if (p && Ro(e)) {
    if (!Ro(t))
      return !1;
    a = !0, d = !1;
  }
  if (p && !d)
    return l || (l = new kt()), a || Qr(e) ? Ps(e, t, n, o, r, l) : gp(e, t, i, n, o, r, l);
  if (!(n & Cp)) {
    var h = d && ua.call(e, "__wrapped__"), c = f && ua.call(t, "__wrapped__");
    if (h || c) {
      var v = h ? e.value() : e, w = c ? t.value() : t;
      return l || (l = new kt()), r(v, w, n, o, l);
    }
  }
  return p ? (l || (l = new kt()), wp(e, t, n, o, r, l)) : !1;
}
function Yo(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !tn(e) && !tn(t) ? e !== e && t !== t : Ep(e, t, n, o, Yo, r);
}
var _p = 1, $p = 2;
function Tp(e, t, n, o) {
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
      var f = new kt();
      if (o)
        var p = o(u, d, i, e, t, f);
      if (!(p === void 0 ? Yo(d, u, _p | $p, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function As(e) {
  return e === e && !Xe(e);
}
function Op(e) {
  for (var t = Jr(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, As(r)];
  }
  return t;
}
function Ls(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function xp(e) {
  var t = Op(e);
  return t.length == 1 && t[0][2] ? Ls(t[0][0], t[0][1]) : function(n) {
    return n === e || Tp(n, e, t);
  };
}
function kp(e, t) {
  return e != null && t in Object(e);
}
function Pp(e, t, n) {
  t = Go(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var a = fo(t[o]);
    if (!(l = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && Yr(r) && Ko(a, r) && (it(e) || to(e)));
}
function Ms(e, t) {
  return e != null && Pp(e, t, kp);
}
var Ap = 1, Lp = 2;
function Mp(e, t) {
  return Zr(e) && As(t) ? Ls(fo(e), t) : function(n) {
    var o = Fe(n, e);
    return o === void 0 && o === t ? Ms(n, e) : Yo(t, o, Ap | Lp);
  };
}
function Rp(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Np(e) {
  return function(t) {
    return tl(t, e);
  };
}
function Ip(e) {
  return Zr(e) ? Rp(fo(e)) : Np(e);
}
function Bp(e) {
  return typeof e == "function" ? e : e == null ? Ur : typeof e == "object" ? it(e) ? Mp(e[0], e[1]) : xp(e) : Ip(e);
}
function Fp(e) {
  return function(t, n, o) {
    for (var r = -1, l = Object(t), a = o(t), s = a.length; s--; ) {
      var i = a[e ? s : ++r];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var zp = Fp();
const Rs = zp;
function Hp(e, t) {
  return e && Rs(e, t, Jr);
}
function Dp(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!Wn(n))
      return e(n, o);
    for (var r = n.length, l = t ? r : -1, a = Object(n); (t ? l-- : ++l < r) && o(a[l], l, a) !== !1; )
      ;
    return n;
  };
}
var Wp = Dp(Hp);
const Vp = Wp;
var jp = function() {
  return St.Date.now();
};
const ur = jp;
var Kp = "Expected a function", Up = Math.max, qp = Math.min;
function hn(e, t, n) {
  var o, r, l, a, s, i, u = 0, d = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Kp);
  t = zl(t) || 0, Xe(n) && (d = !!n.leading, f = "maxWait" in n, l = f ? Up(zl(n.maxWait) || 0, t) : l, p = "trailing" in n ? !!n.trailing : p);
  function h($) {
    var S = o, x = r;
    return o = r = void 0, u = $, a = e.apply(x, S), a;
  }
  function c($) {
    return u = $, s = setTimeout(g, t), d ? h($) : a;
  }
  function v($) {
    var S = $ - i, x = $ - u, P = t - S;
    return f ? qp(P, l - x) : P;
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
  (n !== void 0 && !co(e[t], n) || n === void 0 && !(t in e)) && Gr(e, t, n);
}
function Gp(e) {
  return tn(e) && Wn(e);
}
function _r(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Yp(e) {
  return $c(e, $s(e));
}
function Xp(e, t, n, o, r, l, a) {
  var s = _r(e, n), i = _r(t, n), u = a.get(i);
  if (u) {
    Er(e, n, u);
    return;
  }
  var d = l ? l(s, i, n + "", e, t, a) : void 0, f = d === void 0;
  if (f) {
    var p = it(i), h = !p && Ro(i), c = !p && !h && Qr(i);
    d = i, p || h || c ? it(s) ? d = s : Gp(s) ? d = dc(s) : h ? (f = !1, d = Of(i, !0)) : c ? (f = !1, d = Uf(i, !0)) : d = [] : yf(i) || to(i) ? (d = s, to(s) ? d = Yp(s) : (!Xe(s) || qr(s)) && (d = qf(i))) : f = !1;
  }
  f && (a.set(i, d), r(d, i, o, l, a), a.delete(i)), Er(e, n, d);
}
function Ns(e, t, n, o, r) {
  e !== t && Rs(t, function(l, a) {
    if (r || (r = new kt()), Xe(l))
      Xp(e, t, a, n, Ns, o, r);
    else {
      var s = o ? o(_r(e, a), l, a + "", e, t, r) : void 0;
      s === void 0 && (s = l), Er(e, a, s);
    }
  }, $s);
}
function Qp(e, t) {
  var n = -1, o = Wn(e) ? Array(e.length) : [];
  return Vp(e, function(r, l, a) {
    o[++n] = t(r, l, a);
  }), o;
}
function Jp(e, t) {
  var n = it(e) ? hs : Qp;
  return n(e, Bp(t));
}
function Zp(e, t) {
  return nl(Jp(e, t), 1);
}
function Is(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Bo(e, t) {
  return Yo(e, t);
}
function Xo(e) {
  return e == null;
}
var ev = kc(function(e, t, n) {
  Ns(e, t, n);
});
const Bs = ev;
function Fs(e, t, n, o) {
  if (!Xe(e))
    return e;
  t = Go(t, e);
  for (var r = -1, l = t.length, a = l - 1, s = e; s != null && ++r < l; ) {
    var i = fo(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != a) {
      var d = s[i];
      u = o ? o(d, i, s) : void 0, u === void 0 && (u = Xe(d) ? d : Ko(t[r + 1]) ? [] : {});
    }
    bs(s, i, u), s = s[i];
  }
  return e;
}
function tv(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var a = t[o], s = tl(e, a);
    n(s, a) && Fs(l, Go(a, e), s);
  }
  return l;
}
function nv(e, t) {
  return tv(e, t, function(n, o) {
    return Ms(e, o);
  });
}
var ov = ff(function(e, t) {
  return e == null ? {} : nv(e, t);
});
const rv = ov;
function lv(e, t, n) {
  return e == null ? e : Fs(e, t, n);
}
var av = "Expected a function";
function ca(e, t, n) {
  var o = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(av);
  return Xe(n) && (o = "leading" in n ? !!n.leading : o, r = "trailing" in n ? !!n.trailing : r), hn(e, t, {
    leading: o,
    maxWait: t,
    trailing: r
  });
}
const Wt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const l = e == null ? void 0 : e(r);
  if (n === !1 || !l)
    return t == null ? void 0 : t(r);
};
var da;
const _e = typeof window < "u", Mn = (e) => typeof e == "boolean", Ae = (e) => typeof e == "number", sv = (e) => typeof e == "string", iv = () => {
};
_e && ((da = window == null ? void 0 : window.navigator) != null && da.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function uv(e) {
  return typeof e == "function" ? e() : m(e);
}
function cv(e) {
  return e;
}
function ol(e) {
  return cu() ? (du(e), !0) : !1;
}
function dv(e, t = !0) {
  we() ? xe(e) : t ? e() : ue(e);
}
function Jt(e) {
  var t;
  const n = uv(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const rl = _e ? window : void 0;
function Vt(...e) {
  let t, n, o, r;
  if (sv(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = rl) : [t, n, o, r] = e, !t)
    return iv;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], a = () => {
    l.forEach((d) => d()), l.length = 0;
  }, s = (d, f, p) => (d.addEventListener(f, p, r), () => d.removeEventListener(f, p, r)), i = Q(() => Jt(t), (d) => {
    a(), d && l.push(...n.flatMap((f) => o.map((p) => s(d, f, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), a();
  };
  return ol(u), u;
}
function fv(e, t, n = {}) {
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
    Vt(o, "click", d, { passive: !0, capture: l }),
    Vt(o, "pointerdown", (h) => {
      const c = Jt(e);
      c && (s = !h.composedPath().includes(c) && !u(h));
    }, { passive: !0 }),
    Vt(o, "pointerup", (h) => {
      if (h.button === 0) {
        const c = h.composedPath();
        h.composedPath = () => c, i = o.setTimeout(() => d(h), 50);
      }
    }, { passive: !0 }),
    a && Vt(o, "blur", (h) => {
      var c;
      const v = Jt(e);
      ((c = o.document.activeElement) == null ? void 0 : c.tagName) === "IFRAME" && !(v != null && v.contains(o.document.activeElement)) && t(h);
    })
  ].filter(Boolean);
  return () => f.forEach((h) => h());
}
function pv(e, t = !1) {
  const n = O(), o = () => n.value = Boolean(e());
  return o(), dv(o, t), n;
}
const $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Tr = "__vueuse_ssr_handlers__";
$r[Tr] = $r[Tr] || {};
$r[Tr];
var fa = Object.getOwnPropertySymbols, vv = Object.prototype.hasOwnProperty, hv = Object.prototype.propertyIsEnumerable, gv = (e, t) => {
  var n = {};
  for (var o in e)
    vv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && fa)
    for (var o of fa(e))
      t.indexOf(o) < 0 && hv.call(e, o) && (n[o] = e[o]);
  return n;
};
function Rn(e, t, n = {}) {
  const o = n, { window: r = rl } = o, l = gv(o, ["window"]);
  let a;
  const s = pv(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Q(() => Jt(e), (f) => {
    i(), s.value && r && f && (a = new ResizeObserver(t), a.observe(f, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), u();
  };
  return ol(d), {
    isSupported: s,
    stop: d
  };
}
var pa;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(pa || (pa = {}));
var mv = Object.defineProperty, va = Object.getOwnPropertySymbols, bv = Object.prototype.hasOwnProperty, yv = Object.prototype.propertyIsEnumerable, ha = (e, t, n) => t in e ? mv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wv = (e, t) => {
  for (var n in t || (t = {}))
    bv.call(t, n) && ha(e, n, t[n]);
  if (va)
    for (var n of va(t))
      yv.call(t, n) && ha(e, n, t[n]);
  return e;
};
const Cv = {
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
wv({
  linear: cv
}, Cv);
const ga = (e) => {
  let t = 0, n = e;
  for (; n; )
    t += n.offsetTop, n = n.offsetParent;
  return t;
}, Sv = (e, t) => Math.abs(ga(e) - ga(t));
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ro = () => {
}, Ev = Object.prototype.hasOwnProperty, gn = (e, t) => Ev.call(e, t), mn = Array.isArray, yt = (e) => typeof e == "function", at = (e) => typeof e == "string", ut = (e) => e !== null && typeof e == "object", _v = Object.prototype.toString, $v = (e) => _v.call(e), cr = (e) => $v(e).slice(8, -1), zs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Tv = /-(\w)/g, Ov = zs((e) => e.replace(Tv, (t, n) => n ? n.toUpperCase() : "")), xv = /\B([A-Z])/g, kv = zs((e) => e.replace(xv, "-$1").toLowerCase()), Fo = (e) => e === void 0, lo = (e) => typeof Element > "u" ? !1 : e instanceof Element, Pv = (e) => at(e) ? !Number.isNaN(Number(e)) : !1, Av = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Lv = (e, t, n) => ({
  get value() {
    return Fe(e, t, n);
  },
  set value(o) {
    lv(e, t, o);
  }
});
class Hs extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ll(e, t) {
  throw new Hs(`[${e}] ${t}`);
}
function He(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = at(e) ? new Hs(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Mv = "utils/dom/style", Ds = (e = "") => e.split(" ").filter((t) => !!t.trim()), To = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, zo = (e, t) => {
  !e || !t.trim() || e.classList.add(...Ds(t));
}, bn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Ds(t));
}, Qt = (e, t) => {
  var n;
  if (!_e || !e || !t)
    return "";
  let o = Ov(t);
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
function Or(e, t = "px") {
  if (!e)
    return "";
  if (Ae(e) || Pv(e))
    return `${e}${t}`;
  if (at(e))
    return e;
  He(Mv, "binding value must be a string or number");
}
const Rv = (e, t) => {
  if (!_e)
    return !1;
  const n = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(t)], o = Qt(e, n);
  return ["scroll", "auto", "overlay"].some((r) => o.includes(r));
}, Nv = (e, t) => {
  if (!_e)
    return;
  let n = e;
  for (; n; ) {
    if ([window, document, document.documentElement].includes(n))
      return window;
    if (Rv(n, t))
      return n;
    n = n.parentNode;
  }
  return n;
};
function Iv(e, t) {
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
var Qe = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, Bv = {
  name: "ArrowDown"
}, Fv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zv = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), Hv = [
  zv
];
function Dv(e, t, n, o, r, l) {
  return T(), R("svg", Fv, Hv);
}
var Ws = /* @__PURE__ */ Qe(Bv, [["render", Dv], ["__file", "arrow-down.vue"]]), Wv = {
  name: "ArrowLeft"
}, Vv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jv = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Kv = [
  jv
];
function Uv(e, t, n, o, r, l) {
  return T(), R("svg", Vv, Kv);
}
var qv = /* @__PURE__ */ Qe(Wv, [["render", Uv], ["__file", "arrow-left.vue"]]), Gv = {
  name: "ArrowRight"
}, Yv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xv = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Qv = [
  Xv
];
function Jv(e, t, n, o, r, l) {
  return T(), R("svg", Yv, Qv);
}
var al = /* @__PURE__ */ Qe(Gv, [["render", Jv], ["__file", "arrow-right.vue"]]), Zv = {
  name: "ArrowUp"
}, eh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, th = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), nh = [
  th
];
function oh(e, t, n, o, r, l) {
  return T(), R("svg", eh, nh);
}
var rh = /* @__PURE__ */ Qe(Zv, [["render", oh], ["__file", "arrow-up.vue"]]), lh = {
  name: "CircleCheck"
}, ah = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), ih = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), uh = [
  sh,
  ih
];
function ch(e, t, n, o, r, l) {
  return T(), R("svg", ah, uh);
}
var dh = /* @__PURE__ */ Qe(lh, [["render", ch], ["__file", "circle-check.vue"]]), fh = {
  name: "CircleClose"
}, ph = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), hh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), gh = [
  vh,
  hh
];
function mh(e, t, n, o, r, l) {
  return T(), R("svg", ph, gh);
}
var sl = /* @__PURE__ */ Qe(fh, [["render", mh], ["__file", "circle-close.vue"]]), bh = {
  name: "Close"
}, yh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), Ch = [
  wh
];
function Sh(e, t, n, o, r, l) {
  return T(), R("svg", yh, Ch);
}
var ma = /* @__PURE__ */ Qe(bh, [["render", Sh], ["__file", "close.vue"]]), Eh = {
  name: "DArrowLeft"
}, _h = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $h = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), Th = [
  $h
];
function Oh(e, t, n, o, r, l) {
  return T(), R("svg", _h, Th);
}
var xh = /* @__PURE__ */ Qe(Eh, [["render", Oh], ["__file", "d-arrow-left.vue"]]), kh = {
  name: "DArrowRight"
}, Ph = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ah = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), Lh = [
  Ah
];
function Mh(e, t, n, o, r, l) {
  return T(), R("svg", Ph, Lh);
}
var Rh = /* @__PURE__ */ Qe(kh, [["render", Mh], ["__file", "d-arrow-right.vue"]]), Nh = {
  name: "Hide"
}, Ih = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bh = /* @__PURE__ */ B("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), Fh = /* @__PURE__ */ B("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), zh = [
  Bh,
  Fh
];
function Hh(e, t, n, o, r, l) {
  return T(), R("svg", Ih, zh);
}
var Dh = /* @__PURE__ */ Qe(Nh, [["render", Hh], ["__file", "hide.vue"]]), Wh = {
  name: "Loading"
}, Vh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Kh = [
  jh
];
function Uh(e, t, n, o, r, l) {
  return T(), R("svg", Vh, Kh);
}
var Qo = /* @__PURE__ */ Qe(Wh, [["render", Uh], ["__file", "loading.vue"]]), qh = {
  name: "MoreFilled"
}, Gh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yh = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), Xh = [
  Yh
];
function Qh(e, t, n, o, r, l) {
  return T(), R("svg", Gh, Xh);
}
var ba = /* @__PURE__ */ Qe(qh, [["render", Qh], ["__file", "more-filled.vue"]]), Jh = {
  name: "Search"
}, Zh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, eg = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), tg = [
  eg
];
function ng(e, t, n, o, r, l) {
  return T(), R("svg", Zh, tg);
}
var og = /* @__PURE__ */ Qe(Jh, [["render", ng], ["__file", "search.vue"]]), rg = {
  name: "View"
}, lg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ag = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), sg = [
  ag
];
function ig(e, t, n, o, r, l) {
  return T(), R("svg", lg, sg);
}
var ug = /* @__PURE__ */ Qe(rg, [["render", ig], ["__file", "view.vue"]]);
const Vs = "__epPropKey", he = (e) => e, cg = (e) => ut(e) && !!e[Vs], Jo = (e, t) => {
  if (!ut(e) || cg(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: a } = e, i = {
    type: l,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), gn(e, "default") && f.push(r), d || (d = f.includes(u))), a && (d || (d = a(u))), !d && f.length > 0) {
        const p = [...new Set(f)].map((h) => JSON.stringify(h)).join(", ");
        fu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Vs]: !0
  };
  return gn(e, "default") && (i.default = r), i;
}, $e = (e) => Is(Object.entries(e).map(([t, n]) => [
  t,
  Jo(n, t)
])), Lt = he([
  String,
  Object,
  Function
]), dg = {
  validating: Qo,
  success: dh,
  error: sl
}, vt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Vn = (e) => (e.install = ro, e), ao = {
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
}, Ve = "update:modelValue", js = "change", po = ["", "default", "small", "large"], fg = {
  large: 40,
  default: 32,
  small: 24
}, pg = (e) => fg[e || "default"], vg = (e) => ["", ...po].includes(e), Ks = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), il = (e) => e, hg = ["class", "style"], gg = /^on[A-Z]/, mg = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = k(() => ((n == null ? void 0 : n.value) || []).concat(hg)), r = we();
  return r ? k(() => {
    var l;
    return Is(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([a]) => !o.value.includes(a) && !(t && gg.test(a))));
  }) : (He("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), k(() => ({})));
}, Us = Symbol("buttonGroupContextKey"), jn = Symbol("checkboxGroupContextKey"), bg = Symbol(), ul = Symbol("formContextKey"), Ho = Symbol("formItemContextKey"), qs = Symbol("elPaginationKey"), Gs = Symbol("scrollbarContextKey"), cl = Symbol("popper"), Ys = Symbol("popperContent"), dl = Symbol("elTooltip"), Xs = (e) => {
  const t = we();
  return k(() => {
    var n, o;
    return (o = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? o : void 0;
  });
}, ya = O();
function $n(e, t = void 0) {
  const n = we() ? de(bg, ya) : ya;
  return e ? k(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const Zo = Jo({
  type: String,
  values: po,
  required: !1
}), yn = (e, t = {}) => {
  const n = O(void 0), o = t.prop ? n : Xs("size"), r = t.global ? n : $n("size"), l = t.form ? { size: void 0 } : de(ul, void 0), a = t.formItem ? { size: void 0 } : de(Ho, void 0);
  return k(() => o.value || m(e) || (a == null ? void 0 : a.size) || (l == null ? void 0 : l.size) || r.value || "");
}, er = (e) => {
  const t = Xs("disabled"), n = de(ul, void 0);
  return k(() => t.value || m(e) || (n == null ? void 0 : n.disabled) || !1);
}, Qs = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, a) => {
  Q(() => m(a), (s) => {
    s && He(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, yg = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), fl = "el", wg = "is-", ln = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, oe = (e) => {
  const t = $n("namespace", fl);
  return {
    namespace: t,
    b: (c = "") => ln(t.value, e, c, "", ""),
    e: (c) => c ? ln(t.value, e, "", c, "") : "",
    m: (c) => c ? ln(t.value, e, "", "", c) : "",
    be: (c, v) => c && v ? ln(t.value, e, c, v, "") : "",
    em: (c, v) => c && v ? ln(t.value, e, "", c, v) : "",
    bm: (c, v) => c && v ? ln(t.value, e, c, "", v) : "",
    bem: (c, v, w) => c && v && w ? ln(t.value, e, c, v, w) : "",
    is: (c, ...v) => {
      const w = v.length >= 1 ? v[0] : !0;
      return c && w ? `${wg}${c}` : "";
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
}, Cg = Symbol("elIdInjection"), Js = () => we() ? de(Cg, xr) : xr, Zs = (e) => {
  const t = Js();
  !_e && t === xr && He("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = $n("namespace", fl);
  return k(() => m(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Kn = () => {
  const e = de(ul, void 0), t = de(Ho, void 0);
  return {
    form: e,
    formItem: t
  };
}, pl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = O(!1)), o || (o = O(!1));
  const r = O();
  let l;
  const a = k(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return xe(() => {
    l = Q([xt(e, "id"), n], ([s, i]) => {
      const u = s ?? (i ? void 0 : Zs().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Wo(() => {
    l && l(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
};
var Sg = {
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
const Eg = (e) => (t, n) => _g(t, n, m(e)), _g = (e, t, n) => Fe(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t == null ? void 0 : t[r]) != null ? l : `{${r}}`}`;
}), $g = (e) => {
  const t = k(() => m(e).name), n = pn(e) ? e : O(e);
  return {
    lang: t,
    locale: n,
    t: Eg(e)
  };
}, Nt = () => {
  const e = $n("locale");
  return $g(k(() => e.value || Sg));
}, Tg = Jo({
  type: he(Boolean),
  default: null
}), Og = Jo({
  type: he(Function)
}), xg = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Tg,
    [n]: Og
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
      const p = we(), { emit: h } = p, c = p.props, v = k(() => yt(c[n])), w = k(() => c[e] === null), g = (S) => {
        a.value !== !0 && (a.value = !0, s && (s.value = S), yt(d) && d(S));
      }, y = (S) => {
        a.value !== !1 && (a.value = !1, s && (s.value = S), yt(f) && f(S));
      }, b = (S) => {
        if (c.disabled === !0 || yt(u) && !u())
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
      return Q(() => c[e], E), i && p.appContext.config.globalProperties.$route !== void 0 && Q(() => ({
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
var Ge = "top", ft = "bottom", pt = "right", Ye = "left", vl = "auto", vo = [Ge, ft, pt, Ye], Nn = "start", so = "end", kg = "clippingParents", ei = "viewport", Gn = "popper", Pg = "reference", wa = vo.reduce(function(e, t) {
  return e.concat([t + "-" + Nn, t + "-" + so]);
}, []), tr = [].concat(vo, [vl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Nn, t + "-" + so]);
}, []), Ag = "beforeRead", Lg = "read", Mg = "afterRead", Rg = "beforeMain", Ng = "main", Ig = "afterMain", Bg = "beforeWrite", Fg = "write", zg = "afterWrite", Hg = [Ag, Lg, Mg, Rg, Ng, Ig, Bg, Fg, zg];
function Mt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function In(e) {
  var t = Et(e).Element;
  return e instanceof t || e instanceof Element;
}
function dt(e) {
  var t = Et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Dg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !dt(l) || !Mt(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(a) {
      var s = r[a];
      s === !1 ? l.removeAttribute(a) : l.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Wg(e) {
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
var ti = { name: "applyStyles", enabled: !0, phase: "write", fn: Dg, effect: Wg, requires: ["computeStyles"] };
function Pt(e) {
  return e.split("-")[0];
}
var fn = Math.max, Do = Math.min, Bn = Math.round;
function Fn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (dt(e) && t) {
    var l = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (o = Bn(n.width) / a || 1), l > 0 && (r = Bn(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function gl(e) {
  var t = Fn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function ni(e, t) {
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
function jt(e) {
  return Et(e).getComputedStyle(e);
}
function Vg(e) {
  return ["table", "td", "th"].indexOf(Mt(e)) >= 0;
}
function nn(e) {
  return ((In(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function nr(e) {
  return Mt(e) === "html" ? e : e.assignedSlot || e.parentNode || (hl(e) ? e.host : null) || nn(e);
}
function Ca(e) {
  return !dt(e) || jt(e).position === "fixed" ? null : e.offsetParent;
}
function jg(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && dt(e)) {
    var o = jt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = nr(e);
  for (hl(r) && (r = r.host); dt(r) && ["html", "body"].indexOf(Mt(r)) < 0; ) {
    var l = jt(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function ho(e) {
  for (var t = Et(e), n = Ca(e); n && Vg(n) && jt(n).position === "static"; )
    n = Ca(n);
  return n && (Mt(n) === "html" || Mt(n) === "body" && jt(n).position === "static") ? t : n || jg(e) || t;
}
function ml(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qn(e, t, n) {
  return fn(e, Do(t, n));
}
function Kg(e, t, n) {
  var o = Qn(e, t, n);
  return o > n ? n : o;
}
function oi() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ri(e) {
  return Object.assign({}, oi(), e);
}
function li(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Ug = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ri(typeof e != "number" ? e : li(e, vo));
};
function qg(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, a = n.modifiersData.popperOffsets, s = Pt(n.placement), i = ml(s), u = [Ye, pt].indexOf(s) >= 0, d = u ? "height" : "width";
  if (!(!l || !a)) {
    var f = Ug(r.padding, n), p = gl(l), h = i === "y" ? Ge : Ye, c = i === "y" ? ft : pt, v = n.rects.reference[d] + n.rects.reference[i] - a[i] - n.rects.popper[d], w = a[i] - n.rects.reference[i], g = ho(l), y = g ? i === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = v / 2 - w / 2, C = f[h], E = y - p[d] - f[c], $ = y / 2 - p[d] / 2 + b, S = Qn(C, $, E), x = i;
    n.modifiersData[o] = (t = {}, t[x] = S, t.centerOffset = S - $, t);
  }
}
function Gg(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !ni(t.elements.popper, r) || (t.elements.arrow = r));
}
var Yg = { name: "arrow", enabled: !0, phase: "main", fn: qg, effect: Gg, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function zn(e) {
  return e.split("-")[1];
}
var Xg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Qg(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: Bn(t * r) / r || 0, y: Bn(n * r) / r || 0 };
}
function Sa(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, a = e.offsets, s = e.position, i = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = a.x, h = p === void 0 ? 0 : p, c = a.y, v = c === void 0 ? 0 : c, w = typeof d == "function" ? d({ x: h, y: v }) : { x: h, y: v };
  h = w.x, v = w.y;
  var g = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), b = Ye, C = Ge, E = window;
  if (u) {
    var $ = ho(n), S = "clientHeight", x = "clientWidth";
    if ($ === Et(n) && ($ = nn(n), jt($).position !== "static" && s === "absolute" && (S = "scrollHeight", x = "scrollWidth")), $ = $, r === Ge || (r === Ye || r === pt) && l === so) {
      C = ft;
      var P = f && $ === E && E.visualViewport ? E.visualViewport.height : $[S];
      v -= P - o.height, v *= i ? 1 : -1;
    }
    if (r === Ye || (r === Ge || r === ft) && l === so) {
      b = pt;
      var H = f && $ === E && E.visualViewport ? E.visualViewport.width : $[x];
      h -= H - o.width, h *= i ? 1 : -1;
    }
  }
  var V = Object.assign({ position: s }, u && Xg), z = d === !0 ? Qg({ x: h, y: v }) : { x: h, y: v };
  if (h = z.x, v = z.y, i) {
    var J;
    return Object.assign({}, V, (J = {}, J[C] = y ? "0" : "", J[b] = g ? "0" : "", J.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", J));
  }
  return Object.assign({}, V, (t = {}, t[C] = y ? v + "px" : "", t[b] = g ? h + "px" : "", t.transform = "", t));
}
function Jg(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, a = l === void 0 ? !0 : l, s = n.roundOffsets, i = s === void 0 ? !0 : s, u = { placement: Pt(t.placement), variation: zn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Sa(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Sa(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ai = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Jg, data: {} }, mo = { passive: !0 };
function Zg(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, a = o.resize, s = a === void 0 ? !0 : a, i = Et(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, mo);
  }), s && i.addEventListener("resize", n.update, mo), function() {
    l && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, mo);
    }), s && i.removeEventListener("resize", n.update, mo);
  };
}
var si = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Zg, data: {} }, em = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Oo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return em[t];
  });
}
var tm = { start: "end", end: "start" };
function Ea(e) {
  return e.replace(/start|end/g, function(t) {
    return tm[t];
  });
}
function bl(e) {
  var t = Et(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function yl(e) {
  return Fn(nn(e)).left + bl(e).scrollLeft;
}
function nm(e) {
  var t = Et(e), n = nn(e), o = t.visualViewport, r = n.clientWidth, l = n.clientHeight, a = 0, s = 0;
  return o && (r = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, s = o.offsetTop)), { width: r, height: l, x: a + yl(e), y: s };
}
function om(e) {
  var t, n = nn(e), o = bl(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = fn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = fn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + yl(e), i = -o.scrollTop;
  return jt(r || n).direction === "rtl" && (s += fn(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: a, x: s, y: i };
}
function wl(e) {
  var t = jt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function ii(e) {
  return ["html", "body", "#document"].indexOf(Mt(e)) >= 0 ? e.ownerDocument.body : dt(e) && wl(e) ? e : ii(nr(e));
}
function Jn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = ii(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Et(o), a = r ? [l].concat(l.visualViewport || [], wl(o) ? o : []) : o, s = t.concat(a);
  return r ? s : s.concat(Jn(nr(a)));
}
function kr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function rm(e) {
  var t = Fn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function _a(e, t) {
  return t === ei ? kr(nm(e)) : In(t) ? rm(t) : kr(om(nn(e)));
}
function lm(e) {
  var t = Jn(nr(e)), n = ["absolute", "fixed"].indexOf(jt(e).position) >= 0, o = n && dt(e) ? ho(e) : e;
  return In(o) ? t.filter(function(r) {
    return In(r) && ni(r, o) && Mt(r) !== "body";
  }) : [];
}
function am(e, t, n) {
  var o = t === "clippingParents" ? lm(e) : [].concat(t), r = [].concat(o, [n]), l = r[0], a = r.reduce(function(s, i) {
    var u = _a(e, i);
    return s.top = fn(u.top, s.top), s.right = Do(u.right, s.right), s.bottom = Do(u.bottom, s.bottom), s.left = fn(u.left, s.left), s;
  }, _a(e, l));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function ui(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Pt(o) : null, l = o ? zn(o) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case Ge:
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
      case Nn:
        i[u] = i[u] - (t[d] / 2 - n[d] / 2);
        break;
      case so:
        i[u] = i[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function io(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.boundary, a = l === void 0 ? kg : l, s = n.rootBoundary, i = s === void 0 ? ei : s, u = n.elementContext, d = u === void 0 ? Gn : u, f = n.altBoundary, p = f === void 0 ? !1 : f, h = n.padding, c = h === void 0 ? 0 : h, v = ri(typeof c != "number" ? c : li(c, vo)), w = d === Gn ? Pg : Gn, g = e.rects.popper, y = e.elements[p ? w : d], b = am(In(y) ? y : y.contextElement || nn(e.elements.popper), a, i), C = Fn(e.elements.reference), E = ui({ reference: C, element: g, strategy: "absolute", placement: r }), $ = kr(Object.assign({}, g, E)), S = d === Gn ? $ : C, x = { top: b.top - S.top + v.top, bottom: S.bottom - b.bottom + v.bottom, left: b.left - S.left + v.left, right: S.right - b.right + v.right }, P = e.modifiersData.offset;
  if (d === Gn && P) {
    var H = P[r];
    Object.keys(x).forEach(function(V) {
      var z = [pt, ft].indexOf(V) >= 0 ? 1 : -1, J = [Ge, ft].indexOf(V) >= 0 ? "y" : "x";
      x[V] += H[J] * z;
    });
  }
  return x;
}
function sm(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, a = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? tr : i, d = zn(o), f = d ? s ? wa : wa.filter(function(c) {
    return zn(c) === d;
  }) : vo, p = f.filter(function(c) {
    return u.indexOf(c) >= 0;
  });
  p.length === 0 && (p = f);
  var h = p.reduce(function(c, v) {
    return c[v] = io(e, { placement: v, boundary: r, rootBoundary: l, padding: a })[Pt(v)], c;
  }, {});
  return Object.keys(h).sort(function(c, v) {
    return h[c] - h[v];
  });
}
function im(e) {
  if (Pt(e) === vl)
    return [];
  var t = Oo(e);
  return [Ea(e), t, Ea(t)];
}
function um(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !0 : a, i = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, c = h === void 0 ? !0 : h, v = n.allowedAutoPlacements, w = t.options.placement, g = Pt(w), y = g === w, b = i || (y || !c ? [Oo(w)] : im(w)), C = [w].concat(b).reduce(function(me, le) {
      return me.concat(Pt(le) === vl ? sm(t, { placement: le, boundary: d, rootBoundary: f, padding: u, flipVariations: c, allowedAutoPlacements: v }) : le);
    }, []), E = t.rects.reference, $ = t.rects.popper, S = /* @__PURE__ */ new Map(), x = !0, P = C[0], H = 0; H < C.length; H++) {
      var V = C[H], z = Pt(V), J = zn(V) === Nn, D = [Ge, ft].indexOf(z) >= 0, N = D ? "width" : "height", W = io(t, { placement: V, boundary: d, rootBoundary: f, altBoundary: p, padding: u }), ne = D ? J ? pt : Ye : J ? ft : Ge;
      E[N] > $[N] && (ne = Oo(ne));
      var F = Oo(ne), L = [];
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
var cm = { name: "flip", enabled: !0, phase: "main", fn: um, requiresIfExists: ["offset"], data: { _skip: !1 } };
function $a(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ta(e) {
  return [Ge, pt, ft, Ye].some(function(t) {
    return e[t] >= 0;
  });
}
function dm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, a = io(t, { elementContext: "reference" }), s = io(t, { altBoundary: !0 }), i = $a(a, o), u = $a(s, r, l), d = Ta(i), f = Ta(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var fm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: dm };
function pm(e, t, n) {
  var o = Pt(e), r = [Ye, Ge].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = l[0], s = l[1];
  return a = a || 0, s = (s || 0) * r, [Ye, pt].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function vm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, a = tr.reduce(function(d, f) {
    return d[f] = pm(f, t.rects, l), d;
  }, {}), s = a[t.placement], i = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var hm = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: vm };
function gm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ui({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var ci = { name: "popperOffsets", enabled: !0, phase: "read", fn: gm, data: {} };
function mm(e) {
  return e === "x" ? "y" : "x";
}
function bm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !1 : a, i = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, h = p === void 0 ? !0 : p, c = n.tetherOffset, v = c === void 0 ? 0 : c, w = io(t, { boundary: i, rootBoundary: u, padding: f, altBoundary: d }), g = Pt(t.placement), y = zn(t.placement), b = !y, C = ml(g), E = mm(C), $ = t.modifiersData.popperOffsets, S = t.rects.reference, x = t.rects.popper, P = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, H = typeof P == "number" ? { mainAxis: P, altAxis: P } : Object.assign({ mainAxis: 0, altAxis: 0 }, P), V = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = { x: 0, y: 0 };
  if ($) {
    if (l) {
      var J, D = C === "y" ? Ge : Ye, N = C === "y" ? ft : pt, W = C === "y" ? "height" : "width", ne = $[C], F = ne + w[D], L = ne - w[N], X = h ? -x[W] / 2 : 0, ce = y === Nn ? S[W] : x[W], ve = y === Nn ? -x[W] : -S[W], be = t.elements.arrow, me = h && be ? gl(be) : { width: 0, height: 0 }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : oi(), ye = le[D], Ce = le[N], ie = Qn(0, S[W], me[W]), ke = b ? S[W] / 2 - X - ie - ye - H.mainAxis : ce - ie - ye - H.mainAxis, je = b ? -S[W] / 2 + X + ie + Ce + H.mainAxis : ve + ie + Ce + H.mainAxis, ct = t.elements.arrow && ho(t.elements.arrow), Ke = ct ? C === "y" ? ct.clientTop || 0 : ct.clientLeft || 0 : 0, Je = (J = V == null ? void 0 : V[C]) != null ? J : 0, _t = ne + ke - Je - Ke, $t = ne + je - Je, Ze = Qn(h ? Do(F, _t) : F, ne, h ? fn(L, $t) : L);
      $[C] = Ze, z[C] = Ze - ne;
    }
    if (s) {
      var Tt, Bt = C === "x" ? Ge : Ye, De = C === "x" ? ft : pt, Be = $[E], et = E === "y" ? "height" : "width", I = Be + w[Bt], fe = Be - w[De], Le = [Ge, Ye].indexOf(g) !== -1, tt = (Tt = V == null ? void 0 : V[E]) != null ? Tt : 0, Ft = Le ? I : Be - S[et] - x[et] - tt + H.altAxis, zt = Le ? Be + S[et] + x[et] - tt - H.altAxis : fe, on = h && Le ? Kg(Ft, Be, zt) : Qn(h ? Ft : I, Be, h ? zt : fe);
      $[E] = on, z[E] = on - Be;
    }
    t.modifiersData[o] = z;
  }
}
var ym = { name: "preventOverflow", enabled: !0, phase: "main", fn: bm, requiresIfExists: ["offset"] };
function wm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Cm(e) {
  return e === Et(e) || !dt(e) ? bl(e) : wm(e);
}
function Sm(e) {
  var t = e.getBoundingClientRect(), n = Bn(t.width) / e.offsetWidth || 1, o = Bn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Em(e, t, n) {
  n === void 0 && (n = !1);
  var o = dt(t), r = dt(t) && Sm(t), l = nn(t), a = Fn(e, r), s = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((Mt(t) !== "body" || wl(l)) && (s = Cm(t)), dt(t) ? (i = Fn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = yl(l))), { x: a.left + s.scrollLeft - i.x, y: a.top + s.scrollTop - i.y, width: a.width, height: a.height };
}
function _m(e) {
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
function $m(e) {
  var t = _m(e);
  return Hg.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Tm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Om(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Oa = { placement: "bottom", modifiers: [], strategy: "absolute" };
function xa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Cl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? Oa : r;
  return function(a, s, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Oa, l), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, d = [], f = !1, p = { state: u, setOptions: function(v) {
      var w = typeof v == "function" ? v(u.options) : v;
      c(), u.options = Object.assign({}, l, u.options, w), u.scrollParents = { reference: In(a) ? Jn(a) : a.contextElement ? Jn(a.contextElement) : [], popper: Jn(s) };
      var g = $m(Om([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = g.filter(function(y) {
        return y.enabled;
      }), h(), p.update();
    }, forceUpdate: function() {
      if (!f) {
        var v = u.elements, w = v.reference, g = v.popper;
        if (xa(w, g)) {
          u.rects = { reference: Em(w, ho(g), u.options.strategy === "fixed"), popper: gl(g) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
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
    }, update: Tm(function() {
      return new Promise(function(v) {
        p.forceUpdate(), v(u);
      });
    }), destroy: function() {
      c(), f = !0;
    } };
    if (!xa(a, s))
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
var xm = [si, ci, ai, ti];
Cl({ defaultModifiers: xm });
var km = [si, ci, ai, ti, hm, cm, ym, Yg, fm], di = Cl({ defaultModifiers: km });
function Pm() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return ol(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let xn = [];
const ka = (e) => {
  const t = e;
  t.key === ao.esc && xn.forEach((n) => n(t));
}, Am = (e) => {
  xe(() => {
    xn.length === 0 && document.addEventListener("keydown", ka), _e && xn.push(e);
  }), Rt(() => {
    xn = xn.filter((t) => t !== e), xn.length === 0 && _e && document.removeEventListener("keydown", ka);
  });
};
let Pa;
const fi = () => {
  const e = $n("namespace", fl), t = Js(), n = k(() => `${e.value}-popper-container-${t.prefix}`), o = k(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Lm = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Mm = () => {
  jr(() => {
    if (!_e)
      return;
    const { id: e, selector: t } = fi();
    (process.env.NODE_ENV === "test" || !Pa && !document.body.querySelector(t.value)) && (Pa = Lm(e.value));
  });
}, Rm = $e({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), pi = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = Pm();
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
}, vi = Symbol("elForwardRef"), Nm = (e) => {
  st(vi, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Im = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Aa = O(0), Sl = () => {
  const e = $n("zIndex", 2e3), t = k(() => e.value + Aa.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (Aa.value++, t.value)
  };
};
function Bm(e) {
  const t = O();
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
const Fm = $e({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), zm = G({
  name: "ElIcon",
  inheritAttrs: !1
}), Hm = /* @__PURE__ */ G({
  ...zm,
  props: Fm,
  setup(e) {
    const t = e, n = oe("icon"), o = k(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: Fo(r) ? void 0 : Or(r),
        "--color": l
      };
    });
    return (r, l) => (T(), R("i", dn({
      class: m(n).b(),
      style: m(o)
    }, r.$attrs), [
      re(r.$slots, "default")
    ], 16));
  }
});
var Dm = /* @__PURE__ */ pe(Hm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const ze = vt(Dm);
let gt;
const Wm = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Vm = [
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
function jm(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Vm.map((a) => `${a}:${t.getPropertyValue(a)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function La(e, t = 1, n) {
  var o;
  gt || (gt = document.createElement("textarea"), document.body.appendChild(gt));
  const { paddingSize: r, borderSize: l, boxSizing: a, contextStyle: s } = jm(e);
  gt.setAttribute("style", `${s};${Wm}`), gt.value = e.value || e.placeholder || "";
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
const Km = $e({
  id: {
    type: String,
    default: void 0
  },
  size: Zo,
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
    type: Lt
  },
  prefixIcon: {
    type: Lt
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
}), Um = {
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
}, qm = ["role"], Gm = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Ym = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], Xm = G({
  name: "ElInput",
  inheritAttrs: !1
}), Qm = /* @__PURE__ */ G({
  ...Xm,
  props: Km,
  emits: Um,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = pu(), l = Vo(), a = k(() => {
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
    ]), u = mg({
      excludeKeys: k(() => Object.keys(a.value))
    }), { form: d, formItem: f } = Kn(), { inputId: p } = pl(o, {
      formItemContext: f
    }), h = yn(), c = er(), v = oe("input"), w = oe("textarea"), g = Yn(), y = Yn(), b = O(!1), C = O(!1), E = O(!1), $ = O(!1), S = O(), x = Yn(o.inputStyle), P = k(() => g.value || y.value), H = k(() => {
      var I;
      return (I = d == null ? void 0 : d.statusIcon) != null ? I : !1;
    }), V = k(() => (f == null ? void 0 : f.validateState) || ""), z = k(() => V.value && dg[V.value]), J = k(() => $.value ? ug : Dh), D = k(() => [
      r.style,
      o.inputStyle
    ]), N = k(() => [
      o.inputStyle,
      x.value,
      { resize: o.resize }
    ]), W = k(() => Xo(o.modelValue) ? "" : String(o.modelValue)), ne = k(() => o.clearable && !c.value && !o.readonly && !!W.value && (b.value || C.value)), F = k(() => o.showPassword && !c.value && !o.readonly && !!W.value && (!!W.value || b.value)), L = k(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !c.value && !o.readonly && !o.showPassword), X = k(() => Array.from(W.value).length), ce = k(() => !!L.value && X.value > Number(u.value.maxlength)), ve = k(() => !!l.suffix || !!o.suffixIcon || ne.value || o.showPassword || L.value || !!V.value && H.value), [be, me] = Bm(g);
    Rn(y, (I) => {
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
            ...La(y.value, Le, tt)
          };
        } else
          x.value = {
            minHeight: La(y.value).minHeight
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
      E.value = !Ks(tt);
    }, ct = (I) => {
      n("compositionend", I), E.value && (E.value = !1, Ce(I));
    }, Ke = () => {
      $.value = !$.value, Je();
    }, Je = async () => {
      var I;
      await ue(), (I = P.value) == null || I.focus();
    }, _t = () => {
      var I;
      return (I = P.value) == null ? void 0 : I.blur();
    }, $t = (I) => {
      b.value = !0, n("focus", I);
    }, Ze = (I) => {
      var fe;
      b.value = !1, n("blur", I), o.validateEvent && ((fe = f == null ? void 0 : f.validate) == null || fe.call(f, "blur").catch((Le) => He(Le)));
    }, Tt = (I) => {
      C.value = !1, n("mouseleave", I);
    }, Bt = (I) => {
      C.value = !0, n("mouseenter", I);
    }, De = (I) => {
      n("keydown", I);
    }, Be = () => {
      var I;
      (I = P.value) == null || I.select();
    }, et = () => {
      n(Ve, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Q(() => o.modelValue, () => {
      var I;
      ue(() => le()), o.validateEvent && ((I = f == null ? void 0 : f.validate) == null || I.call(f, "change").catch((fe) => He(fe)));
    }), Q(W, () => ye()), Q(() => o.type, async () => {
      await ue(), ye(), le();
    }), xe(() => {
      !o.formatter && o.parser && He("ElInput", "If you set the parser, you also need to set the formatter."), ye(), ue(le);
    }), t({
      input: g,
      textarea: y,
      ref: P,
      textareaStyle: N,
      autosize: xt(o, "autosize"),
      focus: Je,
      blur: _t,
      select: Be,
      clear: et,
      resizeTextarea: le
    }), (I, fe) => Oe((T(), R("div", dn(m(a), {
      class: m(s),
      style: m(D),
      role: I.containerRole,
      onMouseenter: Bt,
      onMouseleave: Tt
    }), [
      j(" input "),
      I.type !== "textarea" ? (T(), R(Ne, { key: 0 }, [
        j(" prepend slot "),
        I.$slots.prepend ? (T(), R("div", {
          key: 0,
          class: M(m(v).be("group", "prepend"))
        }, [
          re(I.$slots, "prepend")
        ], 2)) : j("v-if", !0),
        B("div", {
          class: M(m(i))
        }, [
          j(" prefix slot "),
          I.$slots.prefix || I.prefixIcon ? (T(), R("span", {
            key: 0,
            class: M(m(v).e("prefix"))
          }, [
            B("span", {
              class: M(m(v).e("prefix-inner")),
              onClick: Je
            }, [
              re(I.$slots, "prefix"),
              I.prefixIcon ? (T(), q(m(ze), {
                key: 0,
                class: M(m(v).e("icon"))
              }, {
                default: Y(() => [
                  (T(), q(lt(I.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0),
          B("input", dn({
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
            onFocus: $t,
            onBlur: Ze,
            onChange: ie,
            onKeydown: De
          }), null, 16, Gm),
          j(" suffix slot "),
          m(ve) ? (T(), R("span", {
            key: 1,
            class: M(m(v).e("suffix"))
          }, [
            B("span", {
              class: M(m(v).e("suffix-inner")),
              onClick: Je
            }, [
              !m(ne) || !m(F) || !m(L) ? (T(), R(Ne, { key: 0 }, [
                re(I.$slots, "suffix"),
                I.suffixIcon ? (T(), q(m(ze), {
                  key: 0,
                  class: M(m(v).e("icon"))
                }, {
                  default: Y(() => [
                    (T(), q(lt(I.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : j("v-if", !0)
              ], 64)) : j("v-if", !0),
              m(ne) ? (T(), q(m(ze), {
                key: 1,
                class: M([m(v).e("icon"), m(v).e("clear")]),
                onMousedown: bt(m(ro), ["prevent"]),
                onClick: et
              }, {
                default: Y(() => [
                  se(m(sl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : j("v-if", !0),
              m(F) ? (T(), q(m(ze), {
                key: 2,
                class: M([m(v).e("icon"), m(v).e("password")]),
                onClick: Ke
              }, {
                default: Y(() => [
                  (T(), q(lt(m(J))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              m(L) ? (T(), R("span", {
                key: 3,
                class: M(m(v).e("count"))
              }, [
                B("span", {
                  class: M(m(v).e("count-inner"))
                }, ge(m(X)) + " / " + ge(m(u).maxlength), 3)
              ], 2)) : j("v-if", !0),
              m(V) && m(z) && m(H) ? (T(), q(m(ze), {
                key: 4,
                class: M([
                  m(v).e("icon"),
                  m(v).e("validateIcon"),
                  m(v).is("loading", m(V) === "validating")
                ])
              }, {
                default: Y(() => [
                  (T(), q(lt(m(z))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0)
        ], 2),
        j(" append slot "),
        I.$slots.append ? (T(), R("div", {
          key: 1,
          class: M(m(v).be("group", "append"))
        }, [
          re(I.$slots, "append")
        ], 2)) : j("v-if", !0)
      ], 64)) : (T(), R(Ne, { key: 1 }, [
        j(" textarea "),
        B("textarea", dn({
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
          onFocus: $t,
          onBlur: Ze,
          onChange: ie,
          onKeydown: De
        }), null, 16, Ym),
        m(L) ? (T(), R("span", {
          key: 0,
          style: Te(S.value),
          class: M(m(v).e("count"))
        }, ge(m(X)) + " / " + ge(m(u).maxlength), 7)) : j("v-if", !0)
      ], 64))
    ], 16, qm)), [
      [Ct, I.type !== "hidden"]
    ]);
  }
});
var Jm = /* @__PURE__ */ pe(Qm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const El = vt(Jm), kn = 4, Zm = {
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
}, e0 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), t0 = $e({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), n0 = "Thumb", o0 = /* @__PURE__ */ G({
  __name: "thumb",
  props: t0,
  setup(e) {
    const t = e, n = de(Gs), o = oe("scrollbar");
    n || ll(n0, "can not inject scrollbar context");
    const r = O(), l = O(), a = O({}), s = O(!1);
    let i = !1, u = !1, d = _e ? document.onselectstart : null;
    const f = k(() => Zm[t.vertical ? "vertical" : "horizontal"]), p = k(() => e0({
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
    Rt(() => {
      E(), document.removeEventListener("mouseup", y);
    });
    const E = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Vt(xt(n, "scrollbarElement"), "mousemove", b), Vt(xt(n, "scrollbarElement"), "mouseleave", C), ($, S) => (T(), q(uo, {
      name: m(o).b("fade"),
      persisted: ""
    }, {
      default: Y(() => [
        Oe(B("div", {
          ref_key: "instance",
          ref: r,
          class: M([m(o).e("bar"), m(o).is(m(f).key)]),
          onMousedown: v
        }, [
          B("div", {
            ref_key: "thumb",
            ref: l,
            class: M(m(o).e("thumb")),
            style: Te(m(p)),
            onMousedown: c
          }, null, 38)
        ], 34), [
          [Ct, $.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Ma = /* @__PURE__ */ pe(o0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const r0 = $e({
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
}), l0 = /* @__PURE__ */ G({
  __name: "bar",
  props: r0,
  setup(e, { expose: t }) {
    const n = e, o = O(0), r = O(0);
    return t({
      handleScroll: (a) => {
        if (a) {
          const s = a.offsetHeight - kn, i = a.offsetWidth - kn;
          r.value = a.scrollTop * 100 / s * n.ratioY, o.value = a.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (a, s) => (T(), R(Ne, null, [
      se(Ma, {
        move: o.value,
        ratio: a.ratioX,
        size: a.width,
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      se(Ma, {
        move: r.value,
        ratio: a.ratioY,
        size: a.height,
        vertical: "",
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var a0 = /* @__PURE__ */ pe(l0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const s0 = $e({
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
}), i0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ae)
}, Pr = "ElScrollbar", u0 = G({
  name: Pr
}), c0 = /* @__PURE__ */ G({
  ...u0,
  props: s0,
  emits: i0,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = oe("scrollbar");
    let l, a;
    const s = O(), i = O(), u = O(), d = O("0"), f = O("0"), p = O(), h = O(1), c = O(1), v = k(() => {
      const S = {};
      return o.height && (S.height = Or(o.height)), o.maxHeight && (S.maxHeight = Or(o.maxHeight)), [o.wrapStyle, S];
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
      const S = i.value.offsetHeight - kn, x = i.value.offsetWidth - kn, P = S ** 2 / i.value.scrollHeight, H = x ** 2 / i.value.scrollWidth, V = Math.max(P, o.minSize), z = Math.max(H, o.minSize);
      h.value = P / (S - P) / (V / (S - V)), c.value = H / (x - H) / (z / (x - z)), f.value = V + kn < S ? `${V}px` : "", d.value = z + kn < x ? `${z}px` : "";
    };
    return Q(() => o.noresize, (S) => {
      S ? (l == null || l(), a == null || a()) : ({ stop: l } = Rn(u, $), a = Vt("resize", $));
    }, { immediate: !0 }), Q(() => [o.maxHeight, o.height], () => {
      o.native || ue(() => {
        var S;
        $(), i.value && ((S = p.value) == null || S.handleScroll(i.value));
      });
    }), st(Gs, Cn({
      scrollbarElement: s,
      wrapElement: i
    })), xe(() => {
      o.native || ue(() => {
        $();
      });
    }), us(() => $()), t({
      wrapRef: i,
      update: $,
      scrollTo: b,
      setScrollTop: C,
      setScrollLeft: E,
      handleScroll: y
    }), (S, x) => (T(), R("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: M(m(r).b())
    }, [
      B("div", {
        ref_key: "wrapRef",
        ref: i,
        class: M(m(w)),
        style: Te(m(v)),
        onScroll: y
      }, [
        (T(), q(lt(S.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: M(m(g)),
          style: Te(S.viewStyle)
        }, {
          default: Y(() => [
            re(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      S.native ? j("v-if", !0) : (T(), q(a0, {
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
var d0 = /* @__PURE__ */ pe(c0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const _l = vt(d0), f0 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], hi = $e({
  role: {
    type: String,
    values: f0,
    default: "tooltip"
  }
}), p0 = G({
  name: "ElPopperRoot",
  inheritAttrs: !1
}), v0 = /* @__PURE__ */ G({
  ...p0,
  props: hi,
  setup(e, { expose: t }) {
    const n = e, o = O(), r = O(), l = O(), a = O(), s = k(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: a,
      role: s
    };
    return t(i), st(cl, i), (u, d) => re(u.$slots, "default");
  }
});
var h0 = /* @__PURE__ */ pe(v0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const gi = $e({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), g0 = G({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), m0 = /* @__PURE__ */ G({
  ...g0,
  props: gi,
  setup(e, { expose: t }) {
    const n = e, o = oe("popper"), { arrowOffset: r, arrowRef: l } = de(Ys, void 0);
    return Q(() => n.arrowOffset, (a) => {
      r.value = a;
    }), Rt(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (a, s) => (T(), R("span", {
      ref_key: "arrowRef",
      ref: l,
      class: M(m(o).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var b0 = /* @__PURE__ */ pe(m0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const dr = "ElOnlyChild", y0 = G({
  name: dr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = de(vi), l = Im((o = r == null ? void 0 : r.setForwardRef) != null ? o : ro);
    return () => {
      var a;
      const s = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return He(dr, "requires exact only one valid child."), null;
      const i = mi(s);
      return i ? Oe(vu(i, n), [[l]]) : (He(dr, "no valid child node found"), null);
    };
  }
});
function mi(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (ut(n))
      switch (n.type) {
        case ds:
          continue;
        case cs:
        case "svg":
          return Ra(n);
        case Ne:
          return mi(n.children);
        default:
          return n;
      }
    return Ra(n);
  }
  return null;
}
function Ra(e) {
  const t = oe("only-child");
  return se("span", {
    class: t.e("content")
  }, [e]);
}
const bi = $e({
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
}), w0 = G({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), C0 = /* @__PURE__ */ G({
  ...w0,
  props: bi,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = de(cl, void 0);
    Nm(r);
    const l = k(() => s.value ? n.id : void 0), a = k(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = k(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = k(() => s.value ? `${n.open}` : void 0);
    let u;
    return xe(() => {
      Q(() => n.virtualRef, (d) => {
        d && (r.value = Jt(d));
      }, {
        immediate: !0
      }), Q(r, (d, f) => {
        u == null || u(), u = void 0, lo(d) && ([
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
        }), u = Q([l, a, s, i], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, c) => {
            Xo(p[c]) ? d.removeAttribute(h) : d.setAttribute(h, p[c]);
          });
        }, { immediate: !0 })), lo(f) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => f.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), Rt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (d, f) => d.virtualTriggering ? j("v-if", !0) : (T(), q(m(y0), dn({ key: 0 }, d.$attrs, {
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
var S0 = /* @__PURE__ */ pe(C0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const fr = "focus-trap.focus-after-trapped", pr = "focus-trap.focus-after-released", E0 = "focus-trap.focusout-prevented", Na = {
  cancelable: !0,
  bubbles: !1
}, _0 = {
  cancelable: !0,
  bubbles: !1
}, Ia = "focusAfterTrapped", Ba = "focusAfterReleased", $0 = Symbol("elFocusTrap"), $l = O(), or = O(0), Tl = O(0);
let bo = 0;
const yi = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Fa = (e, t) => {
  for (const n of e)
    if (!T0(n, t))
      return n;
}, T0 = (e, t) => {
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
}, O0 = (e) => {
  const t = yi(e), n = Fa(t, e), o = Fa(t.reverse(), e);
  return [n, o];
}, x0 = (e) => e instanceof HTMLInputElement && "select" in e, Yt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Tl.value = window.performance.now(), e !== n && x0(e) && t && e.select();
  }
};
function za(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const k0 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = za(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = za(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, P0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Yt(o, t), document.activeElement !== n)
      return;
}, Ha = k0(), A0 = () => or.value > Tl.value, yo = () => {
  $l.value = "pointer", or.value = window.performance.now();
}, Da = () => {
  $l.value = "keyboard", or.value = window.performance.now();
}, L0 = () => (xe(() => {
  bo === 0 && (document.addEventListener("mousedown", yo), document.addEventListener("touchstart", yo), document.addEventListener("keydown", Da)), bo++;
}), Rt(() => {
  bo--, bo <= 0 && (document.removeEventListener("mousedown", yo), document.removeEventListener("touchstart", yo), document.removeEventListener("keydown", Da));
}), {
  focusReason: $l,
  lastUserFocusTimestamp: or,
  lastAutomatedFocusTimestamp: Tl
}), wo = (e) => new CustomEvent(E0, {
  ..._0,
  detail: e
}), M0 = G({
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
    Ia,
    Ba,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = O();
    let o, r;
    const { focusReason: l } = L0();
    Am((c) => {
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
      const { key: v, altKey: w, ctrlKey: g, metaKey: y, currentTarget: b, shiftKey: C } = c, { loop: E } = e, $ = v === ao.tab && !w && !g && !y, S = document.activeElement;
      if ($ && S) {
        const x = b, [P, H] = O0(x);
        if (P && H) {
          if (!C && S === H) {
            const z = wo({
              focusReason: l.value
            });
            t("focusout-prevented", z), z.defaultPrevented || (c.preventDefault(), E && Yt(P, !0));
          } else if (C && [P, x].includes(S)) {
            const z = wo({
              focusReason: l.value
            });
            t("focusout-prevented", z), z.defaultPrevented || (c.preventDefault(), E && Yt(H, !0));
          }
        } else if (S === x) {
          const z = wo({
            focusReason: l.value
          });
          t("focusout-prevented", z), z.defaultPrevented || c.preventDefault();
        }
      }
    };
    st($0, {
      focusTrapRef: n,
      onKeydown: s
    }), Q(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), Q([n], ([c], [v]) => {
      c && (c.addEventListener("keydown", s), c.addEventListener("focusin", d), c.addEventListener("focusout", f)), v && (v.removeEventListener("keydown", s), v.removeEventListener("focusin", d), v.removeEventListener("focusout", f));
    });
    const i = (c) => {
      t(Ia, c);
    }, u = (c) => t(Ba, c), d = (c) => {
      const v = m(n);
      if (!v)
        return;
      const w = c.target, g = c.relatedTarget, y = w && v.contains(w);
      e.trapped || g && v.contains(g) || (o = g), y && t("focusin", c), !a.paused && e.trapped && (y ? r = w : Yt(r, !0));
    }, f = (c) => {
      const v = m(n);
      if (!(a.paused || !v))
        if (e.trapped) {
          const w = c.relatedTarget;
          !Xo(w) && !v.contains(w) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const g = wo({
                focusReason: l.value
              });
              t("focusout-prevented", g), g.defaultPrevented || Yt(r, !0);
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
        Ha.push(a);
        const v = c.contains(document.activeElement) ? o : document.activeElement;
        if (o = v, !c.contains(v)) {
          const g = new Event(fr, Na);
          c.addEventListener(fr, i), c.dispatchEvent(g), g.defaultPrevented || ue(() => {
            let y = e.focusStartEl;
            at(y) || (Yt(y), document.activeElement !== y && (y = "first")), y === "first" && P0(yi(c), !0), (document.activeElement === v || y === "container") && Yt(c);
          });
        }
      }
    }
    function h() {
      const c = m(n);
      if (c) {
        c.removeEventListener(fr, i);
        const v = new CustomEvent(pr, {
          ...Na,
          detail: {
            focusReason: l.value
          }
        });
        c.addEventListener(pr, u), c.dispatchEvent(v), !v.defaultPrevented && (l.value == "keyboard" || !A0()) && Yt(o ?? document.body), c.removeEventListener(pr, i), Ha.remove(a);
      }
    }
    return xe(() => {
      e.trapped && p(), Q(() => e.trapped, (c) => {
        c ? p() : h();
      });
    }), Rt(() => {
      e.trapped && h();
    }), {
      onKeydown: s
    };
  }
});
function R0(e, t, n, o, r, l) {
  return re(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var N0 = /* @__PURE__ */ pe(M0, [["render", R0], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const I0 = ["fixed", "absolute"], B0 = $e({
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
    values: tr,
    default: "bottom"
  },
  popperOptions: {
    type: he(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: I0,
    default: "absolute"
  }
}), wi = $e({
  ...B0,
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
}), F0 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Wa = (e, t) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: H0(e)
  };
  return D0(l, t), W0(l, r == null ? void 0 : r.modifiers), l;
}, z0 = (e) => {
  if (_e)
    return Jt(e);
};
function H0(e) {
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
function D0(e, { arrowEl: t, arrowOffset: n }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: t,
      padding: n ?? 5
    }
  });
}
function W0(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const V0 = G({
  name: "ElPopperContent"
}), j0 = /* @__PURE__ */ G({
  ...V0,
  props: wi,
  emits: F0,
  setup(e, { expose: t, emit: n }) {
    const o = e, { popperInstanceRef: r, contentRef: l, triggerRef: a, role: s } = de(cl, void 0), i = de(Ho, void 0), { nextZIndex: u } = Sl(), d = oe("popper"), f = O(), p = O("first"), h = O(), c = O();
    st(Ys, {
      arrowRef: h,
      arrowOffset: c
    }), i && (i.addInputId || i.removeInputId) && st(Ho, {
      ...i,
      addInputId: ro,
      removeInputId: ro
    });
    const v = O(o.zIndex || u()), w = O(!1);
    let g;
    const y = k(() => z0(o.referenceEl) || m(a)), b = k(() => [{ zIndex: m(v) }, o.popperStyle]), C = k(() => [
      d.b(),
      d.is("pure", o.pure),
      d.is(o.effect),
      o.popperClass
    ]), E = k(() => s && s.value === "dialog" ? "false" : void 0), $ = ({
      referenceEl: D,
      popperContentEl: N,
      arrowEl: W
    }) => {
      const ne = Wa(o, {
        arrowEl: W,
        arrowOffset: m(c)
      });
      return di(D, N, ne);
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
    }, J = () => {
      w.value = !1, n("close");
    };
    return xe(() => {
      let D;
      Q(y, (N) => {
        var W;
        D == null || D();
        const ne = m(r);
        if ((W = ne == null ? void 0 : ne.destroy) == null || W.call(ne), N) {
          const F = m(f);
          l.value = F, r.value = $({
            referenceEl: N,
            popperContentEl: F,
            arrowEl: m(h)
          }), D = Q(() => N.getBoundingClientRect(), () => S(), {
            immediate: !0
          });
        } else
          r.value = void 0;
      }, {
        immediate: !0
      }), Q(() => o.triggerTargetEl, (N, W) => {
        g == null || g(), g = void 0;
        const ne = m(N || f.value), F = m(W || f.value);
        lo(ne) && (g = Q([s, () => o.ariaLabel, E, () => o.id], (L) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((X, ce) => {
            Xo(L[ce]) ? ne.removeAttribute(X) : ne.setAttribute(X, L[ce]);
          });
        }, { immediate: !0 })), F !== ne && lo(F) && ["role", "aria-label", "aria-modal", "id"].forEach((L) => {
          F.removeAttribute(L);
        });
      }, { immediate: !0 }), Q(() => o.visible, x, { immediate: !0 }), Q(() => Wa(o, {
        arrowEl: m(h),
        arrowOffset: m(c)
      }), (N) => {
        var W;
        return (W = r.value) == null ? void 0 : W.setOptions(N);
      });
    }), Rt(() => {
      g == null || g(), g = void 0;
    }), t({
      popperContentRef: f,
      popperInstanceRef: r,
      updatePopper: S,
      contentStyle: b
    }), (D, N) => (T(), R("div", {
      ref_key: "popperContentRef",
      ref: f,
      style: Te(m(b)),
      class: M(m(C)),
      tabindex: "-1",
      onMouseenter: N[0] || (N[0] = (W) => D.$emit("mouseenter", W)),
      onMouseleave: N[1] || (N[1] = (W) => D.$emit("mouseleave", W))
    }, [
      se(m(N0), {
        trapped: w.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": f.value,
        "focus-start-el": p.value,
        onFocusAfterTrapped: P,
        onFocusAfterReleased: H,
        onFocusin: V,
        onFocusoutPrevented: z,
        onReleaseRequested: J
      }, {
        default: Y(() => [
          re(D.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var K0 = /* @__PURE__ */ pe(j0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const U0 = vt(h0), q0 = oe("tooltip"), Ol = $e({
  ...Rm,
  ...wi,
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
    default: `${q0.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), Ci = $e({
  ...bi,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [ao.enter, ao.space]
  }
}), {
  useModelToggleProps: G0,
  useModelToggleEmits: Y0,
  useModelToggle: X0
} = xg("visible"), Q0 = $e({
  ...hi,
  ...G0,
  ...Ol,
  ...Ci,
  ...gi,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), J0 = [
  ...Y0,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Z0 = (e, t) => mn(e) ? e.includes(t) : e === t, Tn = (e, t, n) => (o) => {
  Z0(m(e), t) && n(o);
}, eb = G({
  name: "ElTooltipTrigger"
}), tb = /* @__PURE__ */ G({
  ...eb,
  props: Ci,
  setup(e, { expose: t }) {
    const n = e, o = oe("tooltip"), { controlled: r, id: l, open: a, onOpen: s, onClose: i, onToggle: u } = de(dl, void 0), d = O(null), f = () => {
      if (m(r) || n.disabled)
        return !0;
    }, p = xt(n, "trigger"), h = Wt(f, Tn(p, "hover", s)), c = Wt(f, Tn(p, "hover", i)), v = Wt(f, Tn(p, "click", (C) => {
      C.button === 0 && u(C);
    })), w = Wt(f, Tn(p, "focus", s)), g = Wt(f, Tn(p, "focus", i)), y = Wt(f, Tn(p, "contextmenu", (C) => {
      C.preventDefault(), u(C);
    })), b = Wt(f, (C) => {
      const { code: E } = C;
      n.triggerKeys.includes(E) && (C.preventDefault(), u(C));
    });
    return t({
      triggerRef: d
    }), (C, E) => (T(), q(m(S0), {
      id: m(l),
      "virtual-ref": C.virtualRef,
      open: m(a),
      "virtual-triggering": C.virtualTriggering,
      class: M(m(o).e("trigger")),
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
var nb = /* @__PURE__ */ pe(tb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const ob = G({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), rb = /* @__PURE__ */ G({
  ...ob,
  props: Ol,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = fi(), r = O(null), l = O(!1), {
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
    Rt(() => {
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
    }, x = Wt(S, () => {
      n.enterable && m(u) === "hover" && f();
    }), P = Wt(S, () => {
      m(u) === "hover" && d();
    }), H = () => {
      var N, W;
      (W = (N = r.value) == null ? void 0 : N.updatePopper) == null || W.call(N), c == null || c();
    }, V = () => {
      v == null || v();
    }, z = () => {
      p(), D = fv(k(() => {
        var N;
        return (N = r.value) == null ? void 0 : N.popperContentRef;
      }), () => {
        if (m(a))
          return;
        m(u) !== "hover" && d();
      });
    }, J = () => {
      n.virtualTriggering || d();
    };
    let D;
    return Q(() => m(i), (N) => {
      N || D == null || D();
    }, {
      flush: "post"
    }), Q(() => n.content, () => {
      var N, W;
      (W = (N = r.value) == null ? void 0 : N.updatePopper) == null || W.call(N);
    }), t({
      contentRef: r
    }), (N, W) => (T(), q(hu, {
      disabled: !N.teleported,
      to: m(b)
    }, [
      se(uo, {
        name: N.transition,
        onAfterLeave: $,
        onBeforeEnter: H,
        onAfterEnter: z,
        onBeforeLeave: V
      }, {
        default: Y(() => [
          m(g) ? Oe((T(), q(m(K0), dn({
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
            onBlur: J,
            onClose: m(d)
          }), {
            default: Y(() => [
              l.value ? j("v-if", !0) : re(N.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Ct, m(y)]
          ]) : j("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var lb = /* @__PURE__ */ pe(rb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const ab = ["innerHTML"], sb = { key: 1 }, ib = G({
  name: "ElTooltip"
}), ub = /* @__PURE__ */ G({
  ...ib,
  props: Q0,
  emits: J0,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Mm();
    const r = Zs(), l = O(), a = O(), s = () => {
      var g;
      const y = m(l);
      y && ((g = y.popperInstanceRef) == null || g.update());
    }, i = O(!1), u = O(), { show: d, hide: f, hasUpdateHandler: p } = X0({
      indicator: i,
      toggleReason: u
    }), { onOpen: h, onClose: c } = pi({
      showAfter: xt(o, "showAfter"),
      hideAfter: xt(o, "hideAfter"),
      open: d,
      close: f
    }), v = k(() => Mn(o.visible) && !p.value);
    st(dl, {
      controlled: v,
      id: r,
      open: gu(i),
      trigger: xt(o, "trigger"),
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
    }), Q(() => o.disabled, (g) => {
      g && i.value && (i.value = !1);
    });
    const w = () => {
      var g, y;
      const b = (y = (g = a.value) == null ? void 0 : g.contentRef) == null ? void 0 : y.popperContentRef;
      return b && b.contains(document.activeElement);
    };
    return mu(() => i.value && f()), t({
      popperRef: l,
      contentRef: a,
      isFocusInsideContent: w,
      updatePopper: s,
      onOpen: h,
      onClose: c,
      hide: f
    }), (g, y) => (T(), q(m(U0), {
      ref_key: "popperRef",
      ref: l,
      role: g.role
    }, {
      default: Y(() => [
        se(nb, {
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
        se(lb, {
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
              g.rawContent ? (T(), R("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, ab)) : (T(), R("span", sb, ge(g.content), 1))
            ]),
            g.showArrow ? (T(), q(m(b0), {
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
var cb = /* @__PURE__ */ pe(ub, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Si = vt(cb), db = (e, t) => {
  Qs({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, k(() => e.type === "text"));
  const n = de(Us, void 0), o = $n("button"), { form: r } = Kn(), l = yn(k(() => n == null ? void 0 : n.size)), a = er(), s = O(), i = Vo(), u = k(() => e.type || (n == null ? void 0 : n.type) || ""), d = k(() => {
    var h, c, v;
    return (v = (c = e.autoInsertSpace) != null ? c : (h = o.value) == null ? void 0 : h.autoInsertSpace) != null ? v : !1;
  }), f = k(() => {
    var h;
    const c = (h = i.default) == null ? void 0 : h.call(i);
    if (d.value && (c == null ? void 0 : c.length) === 1) {
      const v = c[0];
      if ((v == null ? void 0 : v.type) === cs) {
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
}, fb = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], pb = ["button", "submit", "reset"], Ar = $e({
  size: Zo,
  disabled: Boolean,
  type: {
    type: String,
    values: fb,
    default: ""
  },
  icon: {
    type: Lt
  },
  nativeType: {
    type: String,
    values: pb,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Lt,
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
}), vb = {
  click: (e) => e instanceof MouseEvent
};
function Ie(e, t) {
  hb(e) && (e = "100%");
  var n = gb(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Co(e) {
  return Math.min(1, Math.max(0, e));
}
function hb(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function gb(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ei(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function So(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function un(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function mb(e, t, n) {
  return {
    r: Ie(e, 255) * 255,
    g: Ie(t, 255) * 255,
    b: Ie(n, 255) * 255
  };
}
function Va(e, t, n) {
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
function bb(e, t, n) {
  var o, r, l;
  if (e = Ie(e, 360), t = Ie(t, 100), n = Ie(n, 100), t === 0)
    r = n, l = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    o = vr(s, a, e + 1 / 3), r = vr(s, a, e), l = vr(s, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: l * 255 };
}
function ja(e, t, n) {
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
function yb(e, t, n) {
  e = Ie(e, 360) * 6, t = Ie(t, 100), n = Ie(n, 100);
  var o = Math.floor(e), r = e - o, l = n * (1 - t), a = n * (1 - r * t), s = n * (1 - (1 - r) * t), i = o % 6, u = [n, a, l, l, s, n][i], d = [s, n, n, a, l, l][i], f = [l, l, s, n, n, a][i];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function Ka(e, t, n, o) {
  var r = [
    un(Math.round(e).toString(16)),
    un(Math.round(t).toString(16)),
    un(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function wb(e, t, n, o, r) {
  var l = [
    un(Math.round(e).toString(16)),
    un(Math.round(t).toString(16)),
    un(Math.round(n).toString(16)),
    un(Cb(o))
  ];
  return r && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function Cb(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ua(e) {
  return ot(e) / 255;
}
function ot(e) {
  return parseInt(e, 16);
}
function Sb(e) {
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
function Eb(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, l = null, a = !1, s = !1;
  return typeof e == "string" && (e = Tb(e)), typeof e == "object" && (Ht(e.r) && Ht(e.g) && Ht(e.b) ? (t = mb(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ht(e.h) && Ht(e.s) && Ht(e.v) ? (o = So(e.s), r = So(e.v), t = yb(e.h, o, r), a = !0, s = "hsv") : Ht(e.h) && Ht(e.s) && Ht(e.l) && (o = So(e.s), l = So(e.l), t = bb(e.h, o, l), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ei(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var _b = "[-\\+]?\\d+%?", $b = "[-\\+]?\\d*\\.\\d+%?", Zt = "(?:".concat($b, ")|(?:").concat(_b, ")"), hr = "[\\s|\\(]+(".concat(Zt, ")[,|\\s]+(").concat(Zt, ")[,|\\s]+(").concat(Zt, ")\\s*\\)?"), gr = "[\\s|\\(]+(".concat(Zt, ")[,|\\s]+(").concat(Zt, ")[,|\\s]+(").concat(Zt, ")[,|\\s]+(").concat(Zt, ")\\s*\\)?"), mt = {
  CSS_UNIT: new RegExp(Zt),
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
function Tb(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Lr[e])
    e = Lr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = mt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = mt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = mt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = mt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = mt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = mt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = mt.hex8.exec(e), n ? {
    r: ot(n[1]),
    g: ot(n[2]),
    b: ot(n[3]),
    a: Ua(n[4]),
    format: t ? "name" : "hex8"
  } : (n = mt.hex6.exec(e), n ? {
    r: ot(n[1]),
    g: ot(n[2]),
    b: ot(n[3]),
    format: t ? "name" : "hex"
  } : (n = mt.hex4.exec(e), n ? {
    r: ot(n[1] + n[1]),
    g: ot(n[2] + n[2]),
    b: ot(n[3] + n[3]),
    a: Ua(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = mt.hex3.exec(e), n ? {
    r: ot(n[1] + n[1]),
    g: ot(n[2] + n[2]),
    b: ot(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Ht(e) {
  return Boolean(mt.CSS_UNIT.exec(String(e)));
}
var Ob = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Sb(t)), this.originalInput = t;
      var r = Eb(t);
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
      return this.a = Ei(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ja(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ja(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Va(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Va(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Ka(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), wb(this.r, this.g, this.b, this.a, t);
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
      for (var t = "#" + Ka(this.r, this.g, this.b, !1), n = 0, o = Object.entries(Lr); n < o.length; n++) {
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
      return n.l += t / 100, n.l = Co(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Co(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Co(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Co(n.s), new e(n);
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
function Gt(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function xb(e) {
  const t = er(), n = oe("button");
  return k(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const l = new Ob(r), a = e.dark ? l.tint(20).toString() : Gt(l, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? Gt(l, 90) : l.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? Gt(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": a,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": a
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Gt(l, 90) : l.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? Gt(l, 50) : l.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? Gt(l, 80) : l.tint(80).toString());
      else {
        const s = e.dark ? Gt(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
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
          const u = e.dark ? Gt(l, 50) : l.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const kb = ["aria-disabled", "disabled", "autofocus", "type"], Pb = G({
  name: "ElButton"
}), Ab = /* @__PURE__ */ G({
  ...Pb,
  props: Ar,
  emits: vb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = xb(o), l = oe("button"), { _ref: a, _size: s, _type: i, _disabled: u, shouldAddSpace: d, handleClick: f } = db(o, n);
    return t({
      ref: a,
      size: s,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (p, h) => (T(), R("button", {
      ref_key: "_ref",
      ref: a,
      class: M([
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
      style: Te(m(r)),
      onClick: h[0] || (h[0] = (...c) => m(f) && m(f)(...c))
    }, [
      p.loading ? (T(), R(Ne, { key: 0 }, [
        p.$slots.loading ? re(p.$slots, "loading", { key: 0 }) : (T(), q(m(ze), {
          key: 1,
          class: M(m(l).is("loading"))
        }, {
          default: Y(() => [
            (T(), q(lt(p.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : p.icon || p.$slots.icon ? (T(), q(m(ze), { key: 1 }, {
        default: Y(() => [
          p.icon ? (T(), q(lt(p.icon), { key: 0 })) : re(p.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : j("v-if", !0),
      p.$slots.default ? (T(), R("span", {
        key: 2,
        class: M({ [m(l).em("text", "expand")]: m(d) })
      }, [
        re(p.$slots, "default")
      ], 2)) : j("v-if", !0)
    ], 14, kb));
  }
});
var Lb = /* @__PURE__ */ pe(Ab, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const Mb = {
  size: Ar.size,
  type: Ar.type
}, Rb = G({
  name: "ElButtonGroup"
}), Nb = /* @__PURE__ */ G({
  ...Rb,
  props: Mb,
  setup(e) {
    const t = e;
    st(Us, Cn({
      size: xt(t, "size"),
      type: xt(t, "type")
    }));
    const n = oe("button");
    return (o, r) => (T(), R("div", {
      class: M(`${m(n).b("group")}`)
    }, [
      re(o.$slots, "default")
    ], 2));
  }
});
var _i = /* @__PURE__ */ pe(Nb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Ib = vt(Lb, {
  ButtonGroup: _i
});
Vn(_i);
const Xt = /* @__PURE__ */ new Map();
let qa;
_e && (document.addEventListener("mousedown", (e) => qa = e), document.addEventListener("mouseup", (e) => {
  for (const t of Xt.values())
    for (const { documentHandler: n } of t)
      n(e, qa);
}));
function Ga(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : lo(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, a = o.target, s = r == null ? void 0 : r.target, i = !t || !t.instance, u = !a || !s, d = e.contains(a) || e.contains(s), f = e === a, p = n.length && n.some((c) => c == null ? void 0 : c.contains(a)) || n.length && n.includes(s), h = l && (l.contains(a) || l.contains(s));
    i || u || d || f || p || h || t.value(o, r);
  };
}
const $i = {
  beforeMount(e, t) {
    Xt.has(e) || Xt.set(e, []), Xt.get(e).push({
      documentHandler: Ga(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Xt.has(e) || Xt.set(e, []);
    const n = Xt.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: Ga(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    Xt.delete(e);
  }
};
var Ya = !1, sn, Mr, Rr, xo, ko, Ti, Po, Nr, Ir, Br, Oi, Fr, zr, xi, ki;
function qe() {
  if (!Ya) {
    Ya = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Fr = /\b(iPhone|iP[ao]d)/.exec(e), zr = /\b(iP[ao]d)/.exec(e), Br = /Android/i.exec(e), xi = /FBAN\/\w+;/i.exec(e), ki = /Mobile/i.exec(e), Oi = !!/Win64/.exec(e), t) {
      sn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, sn && document && document.documentMode && (sn = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      Ti = o ? parseFloat(o[1]) + 4 : sn, Mr = t[2] ? parseFloat(t[2]) : NaN, Rr = t[3] ? parseFloat(t[3]) : NaN, xo = t[4] ? parseFloat(t[4]) : NaN, xo ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), ko = t && t[1] ? parseFloat(t[1]) : NaN) : ko = NaN;
    } else
      sn = Mr = Rr = ko = xo = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Po = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        Po = !1;
      Nr = !!n[2], Ir = !!n[3];
    } else
      Po = Nr = Ir = !1;
  }
}
var Hr = { ie: function() {
  return qe() || sn;
}, ieCompatibilityMode: function() {
  return qe() || Ti > sn;
}, ie64: function() {
  return Hr.ie() && Oi;
}, firefox: function() {
  return qe() || Mr;
}, opera: function() {
  return qe() || Rr;
}, webkit: function() {
  return qe() || xo;
}, safari: function() {
  return Hr.webkit();
}, chrome: function() {
  return qe() || ko;
}, windows: function() {
  return qe() || Nr;
}, osx: function() {
  return qe() || Po;
}, linux: function() {
  return qe() || Ir;
}, iphone: function() {
  return qe() || Fr;
}, mobile: function() {
  return qe() || Fr || zr || Br || ki;
}, nativeApp: function() {
  return qe() || xi;
}, android: function() {
  return qe() || Br;
}, ipad: function() {
  return qe() || zr;
} }, Bb = Hr, Eo = !!(typeof window < "u" && window.document && window.document.createElement), Fb = { canUseDOM: Eo, canUseWorkers: typeof Worker < "u", canUseEventListeners: Eo && !!(window.addEventListener || window.attachEvent), canUseViewport: Eo && !!window.screen, isInWorker: !Eo }, Pi = Fb, Ai;
Pi.canUseDOM && (Ai = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function zb(e, t) {
  if (!Pi.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), o = typeof r[n] == "function";
  }
  return !o && Ai && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var Hb = zb, Xa = 10, Qa = 40, Ja = 800;
function Li(e) {
  var t = 0, n = 0, o = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * Xa, r = n * Xa, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (e.deltaMode == 1 ? (o *= Qa, r *= Qa) : (o *= Ja, r *= Ja)), o && !t && (t = o < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: r };
}
Li.getEventType = function() {
  return Bb.firefox() ? "DOMMouseScroll" : Hb("wheel") ? "wheel" : "mousewheel";
};
var Db = Li;
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
const Wb = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const r = Db(o);
      t && Reflect.apply(t, this, [o, r]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, Vb = {
  beforeMount(e, t) {
    Wb(e, t.value);
  }
}, Mi = {
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
  size: Zo,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Ri = {
  [Ve]: (e) => at(e) || Ae(e) || Mn(e),
  change: (e) => at(e) || Ae(e) || Mn(e)
}, jb = ({
  model: e,
  isChecked: t
}) => {
  const n = de(jn, void 0), o = k(() => {
    var l, a;
    const s = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (a = n == null ? void 0 : n.min) == null ? void 0 : a.value;
    return !Fo(s) && e.value.length >= s && !t.value || !Fo(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: er(k(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, Kb = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: l
}) => {
  const a = de(jn, void 0), { formItem: s } = Kn(), { emit: i } = we();
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
  return Q(() => e.modelValue, () => {
    h.value && (s == null || s.validate("change").catch((c) => He(c)));
  }), {
    handleChange: f,
    onClickRoot: p
  };
}, Ub = (e) => {
  const t = O(!1), { emit: n } = we(), o = de(jn, void 0), r = k(() => Fo(o) === !1), l = O(!1);
  return {
    model: k({
      get() {
        var s, i;
        return r.value ? (s = o == null ? void 0 : o.modelValue) == null ? void 0 : s.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(s) {
        var i, u;
        r.value && mn(s) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && s.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, s))) : (n(Ve, s), t.value = s);
      }
    }),
    isGroup: r,
    isLimitExceeded: l
  };
}, qb = (e, t, { model: n }) => {
  const o = de(jn, void 0), r = O(!1), l = k(() => {
    const u = n.value;
    return Mn(u) ? u : mn(u) ? ut(e.label) ? u.map(An).some((d) => Bo(d, e.label)) : u.map(An).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), a = yn(k(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), s = yn(k(() => {
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
}, Gb = (e, { model: t }) => {
  function n() {
    mn(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Ni = (e, t) => {
  const { formItem: n } = Kn(), { model: o, isGroup: r, isLimitExceeded: l } = Ub(e), {
    isFocused: a,
    isChecked: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d
  } = qb(e, t, { model: o }), { isDisabled: f } = jb({ model: o, isChecked: s }), { inputId: p, isLabeledByFormItem: h } = pl(e, {
    formItemContext: n,
    disableIdGeneration: d,
    disableIdManagement: r
  }), { handleChange: c, onClickRoot: v } = Kb(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: d,
    isDisabled: f,
    isLabeledByFormItem: h
  });
  return Gb(e, { model: o }), {
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
}, Yb = ["tabindex", "role", "aria-checked"], Xb = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], Qb = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], Jb = G({
  name: "ElCheckbox"
}), Zb = /* @__PURE__ */ G({
  ...Jb,
  props: Mi,
  emits: Ri,
  setup(e) {
    const t = e, n = Vo(), {
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
    } = Ni(t, n), h = oe("checkbox"), c = k(() => [
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
    return (w, g) => (T(), q(lt(!m(u) && m(r) ? "span" : "label"), {
      class: M(m(c)),
      "aria-controls": w.indeterminate ? w.controls : null,
      onClick: m(p)
    }, {
      default: Y(() => [
        B("span", {
          class: M(m(v)),
          tabindex: w.indeterminate ? 0 : void 0,
          role: w.indeterminate ? "checkbox" : void 0,
          "aria-checked": w.indeterminate ? "mixed" : void 0
        }, [
          w.trueLabel || w.falseLabel ? Oe((T(), R("input", {
            key: 0,
            id: m(o),
            "onUpdate:modelValue": g[0] || (g[0] = (y) => pn(d) ? d.value = y : null),
            class: M(m(h).e("original")),
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
          }, null, 42, Xb)), [
            [Lo, m(d)]
          ]) : Oe((T(), R("input", {
            key: 1,
            id: m(o),
            "onUpdate:modelValue": g[4] || (g[4] = (y) => pn(d) ? d.value = y : null),
            class: M(m(h).e("original")),
            type: "checkbox",
            "aria-hidden": w.indeterminate ? "true" : "false",
            disabled: m(a),
            value: w.label,
            name: w.name,
            tabindex: w.tabindex,
            onChange: g[5] || (g[5] = (...y) => m(f) && m(f)(...y)),
            onFocus: g[6] || (g[6] = (y) => s.value = !0),
            onBlur: g[7] || (g[7] = (y) => s.value = !1)
          }, null, 42, Qb)), [
            [Lo, m(d)]
          ]),
          B("span", {
            class: M(m(h).e("inner"))
          }, null, 2)
        ], 10, Yb),
        m(u) ? (T(), R("span", {
          key: 0,
          class: M(m(h).e("label"))
        }, [
          re(w.$slots, "default"),
          w.$slots.default ? j("v-if", !0) : (T(), R(Ne, { key: 0 }, [
            Ln(ge(w.label), 1)
          ], 64))
        ], 2)) : j("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var ey = /* @__PURE__ */ pe(Zb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const ty = ["name", "tabindex", "disabled", "true-value", "false-value"], ny = ["name", "tabindex", "disabled", "value"], oy = G({
  name: "ElCheckboxButton"
}), ry = /* @__PURE__ */ G({
  ...oy,
  props: Mi,
  emits: Ri,
  setup(e) {
    const t = e, n = Vo(), {
      isFocused: o,
      isChecked: r,
      isDisabled: l,
      checkboxButtonSize: a,
      model: s,
      handleChange: i
    } = Ni(t, n), u = de(jn, void 0), d = oe("checkbox"), f = k(() => {
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
    return (h, c) => (T(), R("label", {
      class: M(m(p))
    }, [
      h.trueLabel || h.falseLabel ? Oe((T(), R("input", {
        key: 0,
        "onUpdate:modelValue": c[0] || (c[0] = (v) => pn(s) ? s.value = v : null),
        class: M(m(d).be("button", "original")),
        type: "checkbox",
        name: h.name,
        tabindex: h.tabindex,
        disabled: m(l),
        "true-value": h.trueLabel,
        "false-value": h.falseLabel,
        onChange: c[1] || (c[1] = (...v) => m(i) && m(i)(...v)),
        onFocus: c[2] || (c[2] = (v) => o.value = !0),
        onBlur: c[3] || (c[3] = (v) => o.value = !1)
      }, null, 42, ty)), [
        [Lo, m(s)]
      ]) : Oe((T(), R("input", {
        key: 1,
        "onUpdate:modelValue": c[4] || (c[4] = (v) => pn(s) ? s.value = v : null),
        class: M(m(d).be("button", "original")),
        type: "checkbox",
        name: h.name,
        tabindex: h.tabindex,
        disabled: m(l),
        value: h.label,
        onChange: c[5] || (c[5] = (...v) => m(i) && m(i)(...v)),
        onFocus: c[6] || (c[6] = (v) => o.value = !0),
        onBlur: c[7] || (c[7] = (v) => o.value = !1)
      }, null, 42, ny)), [
        [Lo, m(s)]
      ]),
      h.$slots.default || h.label ? (T(), R("span", {
        key: 2,
        class: M(m(d).be("button", "inner")),
        style: Te(m(r) ? m(f) : void 0)
      }, [
        re(h.$slots, "default", {}, () => [
          Ln(ge(h.label), 1)
        ])
      ], 6)) : j("v-if", !0)
    ], 2));
  }
});
var Ii = /* @__PURE__ */ pe(ry, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const ly = $e({
  modelValue: {
    type: he(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: Zo,
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
}), ay = {
  [Ve]: (e) => mn(e),
  change: (e) => mn(e)
}, sy = G({
  name: "ElCheckboxGroup"
}), iy = /* @__PURE__ */ G({
  ...sy,
  props: ly,
  emits: ay,
  setup(e, { emit: t }) {
    const n = e, o = oe("checkbox"), { formItem: r } = Kn(), { inputId: l, isLabeledByFormItem: a } = pl(n, {
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
    return st(jn, {
      ...rv(Dn(n), [
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
    }), Q(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((u) => He(u)));
    }), (u, d) => {
      var f;
      return T(), q(lt(u.tag), {
        id: m(l),
        class: M(m(o).b("group")),
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
var Bi = /* @__PURE__ */ pe(iy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const wn = vt(ey, {
  CheckboxButton: Ii,
  CheckboxGroup: Bi
});
Vn(Ii);
Vn(Bi);
const Fi = $e({
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
    values: po,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), uy = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, cy = G({
  name: "ElTag"
}), dy = /* @__PURE__ */ G({
  ...cy,
  props: Fi,
  emits: uy,
  setup(e, { emit: t }) {
    const n = e, o = yn(), r = oe("tag"), l = k(() => {
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
    return (i, u) => i.disableTransitions ? (T(), R("span", {
      key: 0,
      class: M(m(l)),
      style: Te({ backgroundColor: i.color }),
      onClick: s
    }, [
      B("span", {
        class: M(m(r).e("content"))
      }, [
        re(i.$slots, "default")
      ], 2),
      i.closable ? (T(), q(m(ze), {
        key: 0,
        class: M(m(r).e("close")),
        onClick: bt(a, ["stop"])
      }, {
        default: Y(() => [
          se(m(ma))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : j("v-if", !0)
    ], 6)) : (T(), q(uo, {
      key: 1,
      name: `${m(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: Y(() => [
        B("span", {
          class: M(m(l)),
          style: Te({ backgroundColor: i.color }),
          onClick: s
        }, [
          B("span", {
            class: M(m(r).e("content"))
          }, [
            re(i.$slots, "default")
          ], 2),
          i.closable ? (T(), q(m(ze), {
            key: 0,
            class: M(m(r).e("close")),
            onClick: bt(a, ["stop"])
          }, {
            default: Y(() => [
              se(m(ma))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var fy = /* @__PURE__ */ pe(dy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const py = vt(fy);
let vy = 0;
const hy = G({
  name: "ImgEmpty",
  setup() {
    return {
      ns: oe("empty"),
      id: ++vy
    };
  }
}), gy = {
  viewBox: "0 0 79 86",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, my = ["id"], by = ["stop-color"], yy = ["stop-color"], wy = ["id"], Cy = ["stop-color"], Sy = ["stop-color"], Ey = ["id"], _y = {
  id: "Illustrations",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, $y = {
  id: "B-type",
  transform: "translate(-1268.000000, -535.000000)"
}, Ty = {
  id: "Group-2",
  transform: "translate(1268.000000, 535.000000)"
}, Oy = ["fill"], xy = ["fill"], ky = {
  id: "Group-Copy",
  transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
}, Py = ["fill"], Ay = ["fill"], Ly = ["fill"], My = ["fill"], Ry = ["fill"], Ny = {
  id: "Rectangle-Copy-17",
  transform: "translate(53.000000, 45.000000)"
}, Iy = ["fill", "xlink:href"], By = ["fill", "mask"], Fy = ["fill"];
function zy(e, t, n, o, r, l) {
  return T(), R("svg", gy, [
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
        }, null, 8, by),
        B("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-4")})`,
          offset: "100%"
        }, null, 8, yy)
      ], 8, my),
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
        }, null, 8, Cy),
        B("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-6")})`,
          offset: "100%"
        }, null, 8, Sy)
      ], 8, wy),
      B("rect", {
        id: `path-3-${e.id}`,
        x: "0",
        y: "0",
        width: "17",
        height: "36"
      }, null, 8, Ey)
    ]),
    B("g", _y, [
      B("g", $y, [
        B("g", Ty, [
          B("path", {
            id: "Oval-Copy-2",
            d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
            fill: `var(${e.ns.cssVarBlockName("fill-color-3")})`
          }, null, 8, Oy),
          B("polygon", {
            id: "Rectangle-Copy-14",
            fill: `var(${e.ns.cssVarBlockName("fill-color-7")})`,
            transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
            points: "13 58 53 58 42 45 2 45"
          }, null, 8, xy),
          B("g", ky, [
            B("polygon", {
              id: "Rectangle-Copy-10",
              fill: `var(${e.ns.cssVarBlockName("fill-color-7")})`,
              transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
              points: "2.84078316e-14 3 18 3 23 7 5 7"
            }, null, 8, Py),
            B("polygon", {
              id: "Rectangle-Copy-11",
              fill: `var(${e.ns.cssVarBlockName("fill-color-5")})`,
              points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
            }, null, 8, Ay),
            B("rect", {
              id: "Rectangle-Copy-12",
              fill: `url(#linearGradient-1-${e.id})`,
              transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
              x: "38",
              y: "7",
              width: "17",
              height: "36"
            }, null, 8, Ly),
            B("polygon", {
              id: "Rectangle-Copy-13",
              fill: `var(${e.ns.cssVarBlockName("fill-color-2")})`,
              transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
              points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
            }, null, 8, My)
          ]),
          B("rect", {
            id: "Rectangle-Copy-15",
            fill: `url(#linearGradient-2-${e.id})`,
            x: "13",
            y: "45",
            width: "40",
            height: "36"
          }, null, 8, Ry),
          B("g", Ny, [
            B("use", {
              id: "Mask",
              fill: `var(${e.ns.cssVarBlockName("fill-color-8")})`,
              transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
              "xlink:href": `#path-3-${e.id}`
            }, null, 8, Iy),
            B("polygon", {
              id: "Rectangle-Copy",
              fill: `var(${e.ns.cssVarBlockName("fill-color-9")})`,
              mask: `url(#mask-4-${e.id})`,
              transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
              points: "7 0 24 0 20 18 7 16.5"
            }, null, 8, By)
          ]),
          B("polygon", {
            id: "Rectangle-Copy-18",
            fill: `var(${e.ns.cssVarBlockName("fill-color-2")})`,
            transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
            points: "62 45 79 45 70 58 53 58"
          }, null, 8, Fy)
        ])
      ])
    ])
  ]);
}
var Hy = /* @__PURE__ */ pe(hy, [["render", zy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue"]]);
const Dy = {
  image: {
    type: String,
    default: ""
  },
  imageSize: Number,
  description: {
    type: String,
    default: ""
  }
}, Wy = ["src"], Vy = { key: 1 }, jy = G({
  name: "ElEmpty"
}), Ky = /* @__PURE__ */ G({
  ...jy,
  props: Dy,
  setup(e) {
    const t = e, { t: n } = Nt(), o = oe("empty"), r = k(() => t.description || n("el.table.emptyText")), l = k(() => ({
      width: t.imageSize ? `${t.imageSize}px` : ""
    }));
    return (a, s) => (T(), R("div", {
      class: M(m(o).b())
    }, [
      B("div", {
        class: M(m(o).e("image")),
        style: Te(m(l))
      }, [
        a.image ? (T(), R("img", {
          key: 0,
          src: a.image,
          ondragstart: "return false"
        }, null, 8, Wy)) : re(a.$slots, "image", { key: 1 }, () => [
          se(Hy)
        ])
      ], 6),
      B("div", {
        class: M(m(o).e("description"))
      }, [
        a.$slots.description ? re(a.$slots, "description", { key: 0 }) : (T(), R("p", Vy, ge(m(r)), 1))
      ], 2),
      a.$slots.default ? (T(), R("div", {
        key: 0,
        class: M(m(o).e("bottom"))
      }, [
        re(a.$slots, "default")
      ], 2)) : j("v-if", !0)
    ], 2));
  }
});
var Uy = /* @__PURE__ */ pe(Ky, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue"]]);
const zi = vt(Uy), qy = $e({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: Lt
  }
}), Gy = {
  click: (e) => e instanceof MouseEvent
}, Yy = ["disabled", "aria-disabled"], Xy = { key: 0 }, Qy = G({
  name: "ElPaginationPrev"
}), Jy = /* @__PURE__ */ G({
  ...Qy,
  props: qy,
  emits: Gy,
  setup(e) {
    const t = e, n = k(() => t.disabled || t.currentPage <= 1);
    return (o, r) => (T(), R("button", {
      type: "button",
      class: "btn-prev",
      disabled: m(n),
      "aria-disabled": m(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.prevText ? (T(), R("span", Xy, ge(o.prevText), 1)) : (T(), q(m(ze), { key: 1 }, {
        default: Y(() => [
          (T(), q(lt(o.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, Yy));
  }
});
var Zy = /* @__PURE__ */ pe(Jy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const e1 = $e({
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
    type: Lt
  }
}), t1 = ["disabled", "aria-disabled"], n1 = { key: 0 }, o1 = G({
  name: "ElPaginationNext"
}), r1 = /* @__PURE__ */ G({
  ...o1,
  props: e1,
  emits: ["click"],
  setup(e) {
    const t = e, n = k(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (o, r) => (T(), R("button", {
      type: "button",
      class: "btn-next",
      disabled: m(n),
      "aria-disabled": m(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.nextText ? (T(), R("span", n1, ge(o.nextText), 1)) : (T(), q(m(ze), { key: 1 }, {
        default: Y(() => [
          (T(), q(lt(o.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, t1));
  }
});
var l1 = /* @__PURE__ */ pe(r1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Hi = "ElSelectGroup", rr = "ElSelect";
function a1(e, t) {
  const n = de(rr), o = de(Hi, { disabled: !1 }), r = k(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), l = k(() => n.props.multiple ? f(n.props.modelValue, e.value) : p(e.value, n.props.modelValue)), a = k(() => {
    if (n.props.multiple) {
      const v = n.props.modelValue || [];
      return !l.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = k(() => e.label || (r.value ? "" : e.value)), i = k(() => e.value || e.label || ""), u = k(() => e.disabled || t.groupDisabled || a.value), d = we(), f = (v = [], w) => {
    if (r.value) {
      const g = n.props.valueKey;
      return v && v.some((y) => An(Fe(y, g)) === Fe(w, g));
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
  Q(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Q(() => e.value, (v, w) => {
    const { remote: g, valueKey: y } = n.props;
    if (Object.is(v, w) || (n.onOptionDestroy(w, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !g) {
      if (y && typeof v == "object" && typeof w == "object" && v[y] === w[y])
        return;
      n.setSelected();
    }
  }), Q(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: c } = An(n);
  return Q(c, (v) => {
    const { query: w } = m(v), g = new RegExp(Av(w), "i");
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
const s1 = G({
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
    const t = oe("select"), n = Cn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: r, isDisabled: l, select: a, hoverItem: s } = a1(e, n), { visible: i, hover: u } = Dn(n), d = we().proxy;
    a.onOptionCreate(d), Rt(() => {
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
function i1(e, t, n, o, r, l) {
  return Oe((T(), R("li", {
    class: M([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...a) => e.hoverItem && e.hoverItem(...a)),
    onClick: t[1] || (t[1] = bt((...a) => e.selectOptionClick && e.selectOptionClick(...a), ["stop"]))
  }, [
    re(e.$slots, "default", {}, () => [
      B("span", null, ge(e.currentLabel), 1)
    ])
  ], 34)), [
    [Ct, e.visible]
  ]);
}
var xl = /* @__PURE__ */ pe(s1, [["render", i1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const u1 = G({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = de(rr), t = oe("select"), n = k(() => e.props.popperClass), o = k(() => e.props.multiple), r = k(() => e.props.fitInputWidth), l = O("");
    function a() {
      var s;
      l.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return xe(() => {
      a(), Rn(e.selectWrapper, a);
    }), {
      ns: t,
      minWidth: l,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function c1(e, t, n, o, r, l) {
  return T(), R("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Te({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    re(e.$slots, "default")
  ], 6);
}
var d1 = /* @__PURE__ */ pe(u1, [["render", c1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function f1(e) {
  const { t } = Nt();
  return Cn({
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
const p1 = (e, t, n) => {
  const { t: o } = Nt(), r = oe("select");
  Qs({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, k(() => e.suffixTransition === !1));
  const l = O(null), a = O(null), s = O(null), i = O(null), u = O(null), d = O(null), f = O(-1), p = Yn({ query: "" }), h = Yn(""), { form: c, formItem: v } = Kn(), w = k(() => !e.filterable || e.multiple || !t.visible), g = k(() => e.disabled || (c == null ? void 0 : c.disabled)), y = k(() => {
    const _ = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !g.value && t.inputHovering && _;
  }), b = k(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), C = k(() => r.is("reverse", b.value && t.visible && e.suffixTransition)), E = k(() => e.remote ? 300 : 0), $ = k(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), S = k(() => Array.from(t.options.values())), x = k(() => Array.from(t.cachedOptions.values())), P = k(() => {
    const _ = S.value.filter((A) => !A.created).some((A) => A.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !_;
  }), H = yn(), V = k(() => ["small"].includes(H.value) ? "small" : "default"), z = k({
    get() {
      return t.visible && $.value !== !1;
    },
    set(_) {
      t.visible = _;
    }
  });
  Q([() => g.value, () => H.value, () => c == null ? void 0 : c.size], () => {
    ue(() => {
      J();
    });
  }), Q(() => e.placeholder, (_) => {
    t.cachedPlaceHolder = t.currentPlaceholder = _;
  }), Q(() => e.modelValue, (_, A) => {
    e.multiple && (J(), _ && _.length > 0 || a.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", D(t.query))), ne(), e.filterable && !e.multiple && (t.inputLength = 20), !Bo(_, A) && e.validateEvent && (v == null || v.validate("change").catch((U) => He(U)));
  }, {
    flush: "post",
    deep: !0
  }), Q(() => t.visible, (_) => {
    var A, U, ee;
    _ ? ((U = (A = s.value) == null ? void 0 : A.updatePopper) == null || U.call(A), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (ee = a.value) == null || ee.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), D(t.query), !e.multiple && !e.remote && (p.value.query = "", Un(p), Un(h)))) : (e.filterable && (yt(e.filterMethod) && e.filterMethod(""), yt(e.remoteMethod) && e.remoteMethod("")), a.value && a.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, L(), ue(() => {
      a.value && a.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", _);
  }), Q(() => t.options.entries(), () => {
    var _, A, U;
    if (!_e)
      return;
    (A = (_ = s.value) == null ? void 0 : _.updatePopper) == null || A.call(_), e.multiple && J();
    const ee = ((U = u.value) == null ? void 0 : U.querySelectorAll("input")) || [];
    Array.from(ee).includes(document.activeElement) || ne(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && W();
  }, {
    flush: "post"
  }), Q(() => t.hoverIndex, (_) => {
    Ae(_) && _ > -1 ? f.value = S.value[_] || {} : f.value = {}, S.value.forEach((A) => {
      A.hover = f.value === A;
    });
  });
  const J = () => {
    e.collapseTags && !e.filterable || ue(() => {
      var _, A;
      if (!l.value)
        return;
      const U = l.value.$el.querySelector("input"), ee = i.value, Ee = pg(H.value || (c == null ? void 0 : c.size));
      U.style.height = `${(t.selected.length === 0 ? Ee : Math.max(ee ? ee.clientHeight + (ee.clientHeight > Ee ? 6 : 0) : 0, Ee)) - 2}px`, t.tagInMultiLine = Number.parseFloat(U.style.height) >= Ee, t.visible && $.value !== !1 && ((A = (_ = s.value) == null ? void 0 : _.updatePopper) == null || A.call(_));
    });
  }, D = async (_) => {
    if (!(t.previousQuery === _ || t.isOnComposition)) {
      if (t.previousQuery === null && (yt(e.filterMethod) || yt(e.remoteMethod))) {
        t.previousQuery = _;
        return;
      }
      t.previousQuery = _, ue(() => {
        var A, U;
        t.visible && ((U = (A = s.value) == null ? void 0 : A.updatePopper) == null || U.call(A));
      }), t.hoverIndex = -1, e.multiple && e.filterable && ue(() => {
        const A = a.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, A) : A, N(), J();
      }), e.remote && yt(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(_)) : yt(e.filterMethod) ? (e.filterMethod(_), Un(h)) : (t.filteredOptionsCount = t.optionsCount, p.value.query = _, Un(p), Un(h)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await ue(), W());
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
      J();
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
    const Me = U ? _.label : !ee && !Ee ? _ : "", Ot = {
      value: _,
      currentLabel: Me
    };
    return e.multiple && (Ot.hitState = !1), Ot;
  }, L = () => {
    setTimeout(() => {
      const _ = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((A) => S.value.findIndex((U) => Fe(U, _) === Fe(A, _)))) : t.hoverIndex = -1 : t.hoverIndex = S.value.findIndex((A) => zt(A) === zt(t.selected));
    }, 300);
  }, X = () => {
    var _, A;
    ce(), (A = (_ = s.value) == null ? void 0 : _.updatePopper) == null || A.call(_), e.multiple && !e.filterable && J();
  }, ce = () => {
    var _;
    t.inputWidth = (_ = l.value) == null ? void 0 : _.$el.getBoundingClientRect().width;
  }, ve = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, D(t.query));
  }, be = hn(() => {
    ve();
  }, E.value), me = hn((_) => {
    D(_.target.value);
  }, E.value), le = (_) => {
    Bo(e.modelValue, _) || n.emit(js, _);
  }, ye = (_) => {
    if (_.target.value.length <= 0 && !Ze()) {
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
    return _.some((Ee, Me) => An(Fe(Ee, U)) === Fe(A, U) ? (ee = Me, !0) : !1), ee;
  }, ct = () => {
    t.softFocus = !0;
    const _ = a.value || l.value;
    _ && (_ == null || _.focus());
  }, Ke = (_) => {
    var A, U, ee, Ee, Me;
    const Ot = Array.isArray(_) ? _[0] : _;
    let ht = null;
    if (Ot != null && Ot.value) {
      const Ue = S.value.filter((qt) => qt.value === Ot.value);
      Ue.length > 0 && (ht = Ue[0].$el);
    }
    if (s.value && ht) {
      const Ue = (Ee = (ee = (U = (A = s.value) == null ? void 0 : A.popperRef) == null ? void 0 : U.contentRef) == null ? void 0 : ee.querySelector) == null ? void 0 : Ee.call(ee, `.${r.be("dropdown", "wrap")}`);
      Ue && Iv(Ue, ht);
    }
    (Me = d.value) == null || Me.handleScroll();
  }, Je = (_) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(_.value, _), t.cachedOptions.set(_.value, _);
  }, _t = (_, A) => {
    t.options.get(_) === A && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(_));
  }, $t = (_) => {
    _.code !== ao.backspace && Ze(!1), t.inputLength = a.value.value.length * 15 + 20, J();
  }, Ze = (_) => {
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
      t.isOnComposition = !Ks(U);
    }
  }, Bt = () => {
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
  }, Ft = () => {
    t.visible ? S.value[t.hoverIndex] && ke(S.value[t.hoverIndex], void 0) : tt();
  }, zt = (_) => ut(_.value) ? Fe(_.value, e.valueKey) : _.value, on = k(() => S.value.filter((_) => _.visible).every((_) => _.disabled)), K = (_) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !on.value) {
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
    resetInputHeight: J,
    showClose: y,
    iconComponent: b,
    iconReverse: C,
    showNewOption: P,
    collapseTagSize: V,
    setSelected: ne,
    managePlaceholder: N,
    selectDisabled: g,
    emptyText: $,
    toggleLastOptionHitState: Ze,
    resetInputState: $t,
    handleComposition: Tt,
    onOptionCreate: Je,
    onOptionDestroy: _t,
    handleMenuEnter: Bt,
    handleFocus: De,
    blur: Be,
    handleBlur: et,
    handleClearClick: I,
    handleClose: fe,
    handleKeydownEscape: Le,
    toggleMenu: tt,
    selectOption: Ft,
    getValueKey: zt,
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
}, Za = "ElSelect", v1 = G({
  name: Za,
  componentName: Za,
  components: {
    ElInput: El,
    ElSelectMenu: d1,
    ElOption: xl,
    ElTag: py,
    ElScrollbar: _l,
    ElTooltip: Si,
    ElIcon: ze
  },
  directives: { ClickOutside: $i },
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
      validator: vg
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
    teleported: Ol.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Lt,
      default: sl
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: Lt,
      default: Ws
    },
    tagType: { ...Fi.type, default: "info" },
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
      values: tr,
      default: "bottom-start"
    }
  },
  emits: [
    Ve,
    js,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = oe("select"), o = oe("input"), { t: r } = Nt(), l = f1(e), {
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
      handleComposition: J,
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
      scrollbar: Je,
      queryChange: _t,
      groupQueryChange: $t,
      handleMouseEnter: Ze,
      handleMouseLeave: Tt
    } = p1(e, l, t), { focus: Bt } = yg(ie), {
      inputWidth: De,
      selected: Be,
      inputLength: et,
      filteredOptionsCount: I,
      visible: fe,
      softFocus: Le,
      selectedLabel: tt,
      hoverIndex: Ft,
      query: zt,
      inputHovering: on,
      currentPlaceholder: K,
      menuVisibleOnFocus: te,
      isOnComposition: ae,
      isSilentBlur: _,
      options: A,
      cachedOptions: U,
      optionsCount: ee,
      prefixWidth: Ee,
      tagInMultiLine: Me
    } = Dn(l), Ot = k(() => {
      const nt = [n.b()], rn = m(s);
      return rn && nt.push(n.m(rn)), e.disabled && nt.push(n.m("disabled")), nt;
    }), ht = k(() => ({
      maxWidth: `${m(De) - 32}px`,
      width: "100%"
    })), Ue = k(() => ({ maxWidth: `${m(De) > 123 ? m(De) - 123 : m(De) - 75}px` }));
    st(rr, Cn({
      props: e,
      options: A,
      optionsArray: a,
      cachedOptions: U,
      optionsCount: ee,
      filteredOptionsCount: I,
      hoverIndex: Ft,
      handleOptionSelect: w,
      onOptionCreate: D,
      onOptionDestroy: N,
      selectWrapper: Ke,
      selected: Be,
      setSelected: y,
      queryChange: _t,
      groupQueryChange: $t
    })), xe(() => {
      l.cachedPlaceHolder = K.value = e.placeholder || r("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (K.value = ""), Rn(Ke, u), e.remote && e.multiple && b(), ue(() => {
        const nt = ie.value && ie.value.$el;
        if (nt && (De.value = nt.getBoundingClientRect().width, t.slots.prefix)) {
          const rn = nt.querySelector(`.${o.e("prefix")}`);
          Ee.value = Math.max(rn.getBoundingClientRect().width + 5, 30);
        }
      }), y();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Ve, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Ve, "");
    const qt = k(() => {
      var nt, rn;
      return (rn = (nt = je.value) == null ? void 0 : nt.popperRef) == null ? void 0 : rn.contentRef;
    });
    return {
      tagInMultiLine: Me,
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
      hoverIndex: Ft,
      query: zt,
      inputHovering: on,
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
      handleComposition: J,
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
      focus: Bt,
      reference: ie,
      input: ke,
      tooltipRef: je,
      popperPaneRef: qt,
      tags: ct,
      selectWrapper: Ke,
      scrollbar: Je,
      wrapperKls: Ot,
      selectTagsStyle: ht,
      nsSelect: n,
      tagTextStyle: Ue,
      handleMouseEnter: Ze,
      handleMouseLeave: Tt
    };
  }
}), h1 = ["disabled", "autocomplete"], g1 = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function m1(e, t, n, o, r, l) {
  const a = Pe("el-tag"), s = Pe("el-tooltip"), i = Pe("el-icon"), u = Pe("el-input"), d = Pe("el-option"), f = Pe("el-scrollbar"), p = Pe("el-select-menu"), h = Kr("click-outside");
  return Oe((T(), R("div", {
    ref: "selectWrapper",
    class: M(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...c) => e.handleMouseEnter && e.handleMouseEnter(...c)),
    onMouseleave: t[23] || (t[23] = (...c) => e.handleMouseLeave && e.handleMouseLeave(...c)),
    onClick: t[24] || (t[24] = bt((...c) => e.toggleMenu && e.toggleMenu(...c), ["stop"]))
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
          e.multiple ? (T(), R("div", {
            key: 0,
            ref: "tags",
            class: M(e.nsSelect.e("tags")),
            style: Te(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (T(), R("span", {
              key: 0,
              class: M([
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
                    class: M(e.nsSelect.e("tags-text")),
                    style: Te(e.tagTextStyle)
                  }, ge(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (T(), q(a, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: Y(() => [
                  e.collapseTagsTooltip ? (T(), q(s, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: Y(() => [
                      B("span", {
                        class: M(e.nsSelect.e("tags-text"))
                      }, "+ " + ge(e.selected.length - 1), 3)
                    ]),
                    content: Y(() => [
                      B("div", {
                        class: M(e.nsSelect.e("collapse-tags"))
                      }, [
                        (T(!0), R(Ne, null, en(e.selected.slice(1), (c, v) => (T(), R("div", {
                          key: v,
                          class: M(e.nsSelect.e("collapse-tag"))
                        }, [
                          (T(), q(a, {
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
                                class: M(e.nsSelect.e("tags-text")),
                                style: Te({
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
                  }, 8, ["disabled", "effect", "teleported"])) : (T(), R("span", {
                    key: 1,
                    class: M(e.nsSelect.e("tags-text"))
                  }, "+ " + ge(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : j("v-if", !0)
            ], 2)) : j("v-if", !0),
            j(" <div> "),
            e.collapseTags ? j("v-if", !0) : (T(), q(uo, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: Y(() => [
                B("span", {
                  class: M([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (T(!0), R(Ne, null, en(e.selected, (c) => (T(), q(a, {
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
                        class: M(e.nsSelect.e("tags-text")),
                        style: Te({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ge(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            j(" </div> "),
            e.filterable ? Oe((T(), R("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (c) => e.query = c),
              type: "text",
              class: M([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Te({
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
                t[6] || (t[6] = rt(bt((c) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = rt(bt((c) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = rt((...c) => e.handleKeydownEscape && e.handleKeydownEscape(...c), ["esc"])),
                t[9] || (t[9] = rt(bt((...c) => e.selectOption && e.selectOption(...c), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = rt((...c) => e.deletePrevTag && e.deletePrevTag(...c), ["delete"])),
                t[11] || (t[11] = rt((c) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionupdate: t[13] || (t[13] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionend: t[14] || (t[14] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onInput: t[15] || (t[15] = (...c) => e.debouncedQueryChange && e.debouncedQueryChange(...c))
            }, null, 46, h1)), [
              [bu, e.query]
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
            class: M([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = rt(bt((c) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = rt(bt((c) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              rt(bt(e.selectOption, ["stop", "prevent"]), ["enter"]),
              rt(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = rt((c) => e.visible = !1, ["tab"]))
            ]
          }, fs({
            suffix: Y(() => [
              e.iconComponent && !e.showClose ? (T(), q(i, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: Y(() => [
                  (T(), q(lt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              e.showClose && e.clearIcon ? (T(), q(i, {
                key: 1,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: Y(() => [
                  (T(), q(lt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : j("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: Y(() => [
                B("div", g1, [
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
            Oe(se(f, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: Y(() => [
                e.showNewOption ? (T(), q(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : j("v-if", !0),
                re(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [Ct, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (T(), R(Ne, { key: 0 }, [
              e.$slots.empty ? re(e.$slots, "empty", { key: 0 }) : (T(), R("p", {
                key: 1,
                class: M(e.nsSelect.be("dropdown", "empty"))
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
var b1 = /* @__PURE__ */ pe(v1, [["render", m1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const y1 = G({
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
    const t = oe("select"), n = O(!0), o = we(), r = O([]);
    st(Hi, Cn({
      ...Dn(e)
    }));
    const l = de(rr);
    xe(() => {
      r.value = a(o.subTree);
    });
    const a = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((d) => {
        var f;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (f = d.children) != null && f.length && u.push(...a(d));
      }), u;
    }, { groupQueryChange: s } = An(l);
    return Q(s, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function w1(e, t, n, o, r, l) {
  return Oe((T(), R("ul", {
    class: M(e.ns.be("group", "wrap"))
  }, [
    B("li", {
      class: M(e.ns.be("group", "title"))
    }, ge(e.label), 3),
    B("li", null, [
      B("ul", {
        class: M(e.ns.b("group"))
      }, [
        re(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Ct, e.visible]
  ]);
}
var Di = /* @__PURE__ */ pe(y1, [["render", w1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const Wi = vt(b1, {
  Option: xl,
  OptionGroup: Di
}), Vi = Vn(xl);
Vn(Di);
const kl = () => de(qs, {}), C1 = $e({
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
    values: po
  }
}), S1 = G({
  name: "ElPaginationSizes"
}), E1 = /* @__PURE__ */ G({
  ...S1,
  props: C1,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = Nt(), r = oe("pagination"), l = kl(), a = O(n.pageSize);
    Q(() => n.pageSizes, (u, d) => {
      if (!Bo(u, d) && Array.isArray(u)) {
        const f = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", f);
      }
    }), Q(() => n.pageSize, (u) => {
      a.value = u;
    });
    const s = k(() => n.pageSizes);
    function i(u) {
      var d;
      u !== a.value && (a.value = u, (d = l.handleSizeChange) == null || d.call(l, Number(u)));
    }
    return (u, d) => (T(), R("span", {
      class: M(m(r).e("sizes"))
    }, [
      se(m(Wi), {
        "model-value": a.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        "validate-event": !1,
        onChange: i
      }, {
        default: Y(() => [
          (T(!0), R(Ne, null, en(m(s), (f) => (T(), q(m(Vi), {
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
var _1 = /* @__PURE__ */ pe(E1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const $1 = $e({
  size: {
    type: String,
    values: po
  }
}), T1 = ["disabled"], O1 = G({
  name: "ElPaginationJumper"
}), x1 = /* @__PURE__ */ G({
  ...O1,
  props: $1,
  setup(e) {
    const { t } = Nt(), n = oe("pagination"), { pageCount: o, disabled: r, currentPage: l, changeEvent: a } = kl(), s = O(), i = k(() => {
      var f;
      return (f = s.value) != null ? f : l == null ? void 0 : l.value;
    });
    function u(f) {
      s.value = +f;
    }
    function d(f) {
      f = Math.trunc(+f), a == null || a(+f), s.value = void 0;
    }
    return (f, p) => (T(), R("span", {
      class: M(m(n).e("jump")),
      disabled: m(r)
    }, [
      B("span", {
        class: M([m(n).e("goto")])
      }, ge(m(t)("el.pagination.goto")), 3),
      se(m(El), {
        size: f.size,
        class: M([m(n).e("editor"), m(n).is("in-pagination")]),
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
        class: M([m(n).e("classifier")])
      }, ge(m(t)("el.pagination.pageClassifier")), 3)
    ], 10, T1));
  }
});
var k1 = /* @__PURE__ */ pe(x1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const P1 = $e({
  total: {
    type: Number,
    default: 1e3
  }
}), A1 = ["disabled"], L1 = G({
  name: "ElPaginationTotal"
}), M1 = /* @__PURE__ */ G({
  ...L1,
  props: P1,
  setup(e) {
    const { t } = Nt(), n = oe("pagination"), { disabled: o } = kl();
    return (r, l) => (T(), R("span", {
      class: M(m(n).e("total")),
      disabled: m(o)
    }, ge(m(t)("el.pagination.total", {
      total: r.total
    })), 11, A1));
  }
});
var R1 = /* @__PURE__ */ pe(M1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const N1 = $e({
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
}), I1 = ["onKeyup"], B1 = ["aria-current", "tabindex"], F1 = ["tabindex"], z1 = ["aria-current", "tabindex"], H1 = ["tabindex"], D1 = ["aria-current", "tabindex"], W1 = G({
  name: "ElPaginationPager"
}), V1 = /* @__PURE__ */ G({
  ...W1,
  props: N1,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = oe("pager"), r = oe("icon"), l = O(!1), a = O(!1), s = O(!1), i = O(!1), u = O(!1), d = O(!1), f = k(() => {
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
    Pn(() => {
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
    return (g, y) => (T(), R("ul", {
      class: M(m(o).b()),
      onClick: w,
      onKeyup: rt(v, ["enter"])
    }, [
      g.pageCount > 0 ? (T(), R("li", {
        key: 0,
        class: M([[
          m(o).is("active", g.currentPage === 1),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === 1,
        tabindex: m(p)
      }, " 1 ", 10, B1)) : j("v-if", !0),
      l.value ? (T(), R("li", {
        key: 1,
        class: M([
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
        (s.value || u.value) && !g.disabled ? (T(), q(m(xh), { key: 0 })) : (T(), q(m(ba), { key: 1 }))
      ], 42, F1)) : j("v-if", !0),
      (T(!0), R(Ne, null, en(m(f), (b) => (T(), R("li", {
        key: b,
        class: M([[
          m(o).is("active", g.currentPage === b),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === b,
        tabindex: m(p)
      }, ge(b), 11, z1))), 128)),
      a.value ? (T(), R("li", {
        key: 2,
        class: M([
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
        (i.value || d.value) && !g.disabled ? (T(), q(m(Rh), { key: 0 })) : (T(), q(m(ba), { key: 1 }))
      ], 42, H1)) : j("v-if", !0),
      g.pageCount > 1 ? (T(), R("li", {
        key: 3,
        class: M([[
          m(o).is("active", g.currentPage === g.pageCount),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === g.pageCount,
        tabindex: m(p)
      }, ge(g.pageCount), 11, D1)) : j("v-if", !0)
    ], 42, I1));
  }
});
var j1 = /* @__PURE__ */ pe(V1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const We = (e) => typeof e != "number", K1 = $e({
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
    type: Lt,
    default: () => qv
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: Lt,
    default: () => al
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), U1 = {
  "update:current-page": (e) => Ae(e),
  "update:page-size": (e) => Ae(e),
  "size-change": (e) => Ae(e),
  "current-change": (e) => Ae(e),
  "prev-click": (e) => Ae(e),
  "next-click": (e) => Ae(e)
}, es = "ElPagination";
var q1 = G({
  name: es,
  props: K1,
  emits: U1,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = Nt(), r = oe("pagination"), l = we().vnode.props || {}, a = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, s = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = k(() => {
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
    }), u = O(We(e.defaultPageSize) ? 10 : e.defaultPageSize), d = O(We(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), f = k({
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
    Q(p, (b) => {
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
    return st(qs, {
      pageCount: p,
      disabled: k(() => e.disabled),
      currentPage: h,
      changeEvent: c,
      handleSizeChange: v
    }), () => {
      var b, C;
      if (!i.value)
        return He(es, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && p.value <= 1)
        return null;
      const E = [], $ = [], S = Z("div", { class: r.e("rightwrapper") }, $), x = {
        prev: Z(Zy, {
          disabled: e.disabled,
          currentPage: h.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: w
        }),
        jumper: Z(k1, {
          size: e.small ? "small" : "default"
        }),
        pager: Z(j1, {
          currentPage: h.value,
          pageCount: p.value,
          pagerCount: e.pagerCount,
          onChange: c,
          disabled: e.disabled
        }),
        next: Z(l1, {
          disabled: e.disabled,
          currentPage: h.value,
          pageCount: p.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: g
        }),
        sizes: Z(_1, {
          pageSize: f.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (C = (b = n == null ? void 0 : n.default) == null ? void 0 : b.call(n)) != null ? C : null,
        total: Z(R1, { total: We(e.total) ? 0 : e.total })
      }, P = e.layout.split(",").map((V) => V.trim());
      let H = !1;
      return P.forEach((V) => {
        if (V === "->") {
          H = !0;
          return;
        }
        H ? $.push(x[V]) : E.push(x[V]);
      }), y(E[0], r.is("first")), y(E[E.length - 1], r.is("last")), H && $.length > 0 && (y($[0], r.is("first")), y($[$.length - 1], r.is("last")), E.push(S)), Z("div", {
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
const G1 = vt(q1);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var Y1 = /["'&<>]/, X1 = Q1;
function Q1(e) {
  var t = "" + e, n = Y1.exec(t);
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
}, J1 = function(e, t, n, o, r) {
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
}, ji = function(e, t) {
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
}, ts = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? ji(e, o[0]) : null;
}, Re = (e, t) => {
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
}, cn = function(e, t) {
  const n = {};
  return (e || []).forEach((o, r) => {
    n[Re(o, t)] = { row: o, index: r };
  }), n;
};
function ew(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (gn(t, o)) {
      const r = t[o];
      typeof r < "u" && (n[o] = r);
    }
  return n;
}
function Pl(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function Ki(e) {
  return e === "" || e !== void 0 && (e = Pl(e), Number.isNaN(e) && (e = 80)), e;
}
function tw(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function nw(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function Zn(e, t, n) {
  let o = !1;
  const r = e.indexOf(t), l = r !== -1, a = (s) => {
    s === "add" ? e.push(t) : e.splice(r, 1), o = !0, mn(t.children) && t.children.forEach((i) => {
      Zn(e, i, n ?? !l);
    });
  };
  return Mn(n) ? n && !l ? a("add") : !n && l && a("remove") : a(l ? "remove" : "add"), o;
}
function ow(e, t, n = "children", o = "hasChildren") {
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
let Dt;
function rw(e, t, n, o) {
  o = Bs({
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
    ].join(" "), n = X1(n), g.innerHTML = n, g.style.zIndex = String(r()), e == null || e.appendChild(g), g;
  }
  function i() {
    const w = document.createElement("div");
    return w.className = `${l}-popper__arrow`, w;
  }
  function u() {
    d && d.update();
  }
  Dt == null || Dt(), Dt = () => {
    try {
      d && d.destroy(), h && (e == null || e.removeChild(h)), t.removeEventListener("mouseenter", f), t.removeEventListener("mouseleave", p), a == null || a.removeEventListener("scroll", Dt), Dt = void 0;
    } catch {
    }
  };
  let d = null, f = u, p = Dt;
  o.enterable && ({ onOpen: f, onClose: p } = pi({
    showAfter: o.showAfter,
    hideAfter: o.hideAfter,
    open: u,
    close: Dt
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
  return d = di(t, h, {
    placement: o.placement || "top",
    strategy: "fixed",
    ...v,
    modifiers: v.modifiers ? c.concat(v.modifiers) : c
  }), t.addEventListener("mouseenter", f), t.addEventListener("mouseleave", p), a == null || a.addEventListener("scroll", Dt), d;
}
function Ui(e) {
  return e.children ? Zp(e.children, Ui) : [e];
}
function ns(e, t) {
  return e + t.colSpan;
}
const qi = (e, t, n, o) => {
  let r = 0, l = e;
  const a = n.states.columns.value;
  if (o) {
    const i = Ui(o[e]);
    r = a.slice(0, a.indexOf(i[0])).reduce(ns, 0), l = r + i.reduce(ns, 0) - 1;
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
  const a = [], { direction: s, start: i, after: u } = qi(t, n, o, r);
  if (s) {
    const d = s === "left";
    a.push(`${e}-fixed-column--${s}`), d && u + l === o.states.fixedLeafColumnsLength.value - 1 ? a.push("is-last-column") : !d && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && a.push("is-first-column");
  }
  return a;
};
function os(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const Ll = (e, t, n, o) => {
  const {
    direction: r,
    start: l = 0,
    after: a = 0
  } = qi(e, t, n, o);
  if (!r)
    return;
  const s = {}, i = r === "left", u = n.states.columns.value;
  return i ? s.left = u.slice(0, l).reduce(os, 0) : s.right = u.slice(a + 1).reverse().reduce(os, 0), s;
}, Hn = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function lw(e) {
  const t = we(), n = O(!1), o = O([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const d = cn(o.value, u);
        o.value = i.reduce((f, p) => {
          const h = Re(p, u);
          return d[h] && f.push(p), f;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      Zn(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], d = e.rowKey.value, f = cn(u, d);
      o.value = i.reduce((p, h) => {
        const c = f[h];
        return c && p.push(c.row), p;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!cn(o.value, u)[Re(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function aw(e) {
  const t = we(), n = O(null), o = O(null), r = (u) => {
    t.store.assertRowKey(), n.value = u, a(u);
  }, l = () => {
    n.value = null;
  }, a = (u) => {
    const { data: d, rowKey: f } = e;
    let p = null;
    f.value && (p = (m(d) || []).find((h) => Re(h, f.value) === u)), o.value = p, t.emit("current-change", o.value, null);
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
          const p = Re(f, u);
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
function sw(e) {
  const t = O([]), n = O({}), o = O(16), r = O(!1), l = O({}), a = O("hasChildren"), s = O("children"), i = we(), u = k(() => {
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
          const S = Re($, g);
          E.children.push(S), $[a.value] && !b[S] && (b[S] = { children: [] });
        }), b[C] = E;
      }
    }), b;
  }), f = (g) => {
    const y = e.rowKey.value, b = {};
    return ow(g, (C, E, $) => {
      const S = Re(C, y);
      Array.isArray(E) ? b[S] = {
        children: E.map((x) => Re(x, y)),
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
      const x = m(n), P = [], H = (z, J) => {
        if (g)
          return t.value ? y || t.value.includes(J) : !!(y || z != null && z.expanded);
        {
          const D = y || t.value && t.value.includes(J);
          return !!(z != null && z.expanded || D);
        }
      };
      $.forEach((z) => {
        const J = x[z], D = { ...C[z] };
        if (D.expanded = H(J, z), D.lazy) {
          const { loaded: N = !1, loading: W = !1 } = J || {};
          D.loaded = !!N, D.loading = !!W, P.push(z);
        }
        S[z] = D;
      });
      const V = Object.keys(E);
      r.value && V.length && P.length && V.forEach((z) => {
        const J = x[z], D = E[z].children;
        if (P.includes(z)) {
          if (S[z].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          S[z].children = D;
        } else {
          const { loaded: N = !1, loading: W = !1 } = J || {};
          S[z] = {
            lazy: !0,
            loaded: !!N,
            loading: !!W,
            expanded: H(J, z),
            children: D,
            level: ""
          };
        }
      });
    }
    n.value = S, (b = i.store) == null || b.updateTableScrollY();
  };
  Q(() => t.value, () => {
    p(!0);
  }), Q(() => u.value, () => {
    p();
  }), Q(() => d.value, () => {
    p();
  });
  const h = (g) => {
    t.value = g, p();
  }, c = (g, y) => {
    i.store.assertRowKey();
    const b = e.rowKey.value, C = Re(g, b), E = C && n.value[C];
    if (C && E && "expanded" in E) {
      const $ = E.expanded;
      y = typeof y > "u" ? !E.expanded : y, n.value[C].expanded = y, $ !== y && i.emit("expand-change", g, y), i.store.updateTableScrollY();
    }
  }, v = (g) => {
    i.store.assertRowKey();
    const y = e.rowKey.value, b = Re(g, y), C = n.value[b];
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
const iw = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : J1(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Ao = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? t.push.apply(t, Ao(n.children)) : t.push(n);
  }), t;
};
function uw() {
  var e;
  const t = we(), { size: n } = Dn((e = t.proxy) == null ? void 0 : e.$props), o = O(null), r = O([]), l = O([]), a = O(!1), s = O([]), i = O([]), u = O([]), d = O([]), f = O([]), p = O([]), h = O([]), c = O([]), v = O(0), w = O(0), g = O(0), y = O(!1), b = O([]), C = O(!1), E = O(!1), $ = O(null), S = O({}), x = O(null), P = O(null), H = O(null), V = O(null), z = O(null);
  Q(r, () => t.state && W(!1), {
    deep: !0
  });
  const J = () => {
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
    const te = Ao(K), ae = Ao(d.value), _ = Ao(f.value);
    v.value = te.length, w.value = ae.length, g.value = _.length, u.value = [].concat(ae).concat(te).concat(_), a.value = d.value.length > 0 || f.value.length > 0;
  }, W = (K, te = !1) => {
    K && N(), te ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, ne = (K) => b.value.includes(K), F = () => {
    y.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, L = () => {
    let K;
    if (o.value) {
      K = [];
      const te = cn(b.value, o.value), ae = cn(r.value, o.value);
      for (const _ in te)
        gn(te, _) && !ae[_] && K.push(te[_].row);
    } else
      K = b.value.filter((te) => !r.value.includes(te));
    if (K.length) {
      const te = b.value.filter((ae) => !K.includes(ae));
      b.value = te, t.emit("selection-change", te.slice());
    }
  }, X = () => (b.value || []).slice(), ce = (K, te = void 0, ae = !0) => {
    if (Zn(b.value, K, te)) {
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
      const Me = Ee + A;
      $.value ? $.value.call(null, ee, Me) && Zn(b.value, ee, ae) && (_ = !0) : Zn(b.value, ee, ae) && (_ = !0), A += le(Re(ee, U));
    }), _ && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, be = () => {
    const K = cn(b.value, o.value);
    r.value.forEach((te) => {
      const ae = Re(te, o.value), _ = K[ae];
      _ && (b.value[_.index] = te);
    });
  }, me = () => {
    var K, te, ae;
    if (((K = r.value) == null ? void 0 : K.length) === 0) {
      y.value = !1;
      return;
    }
    let _;
    o.value && (_ = cn(b.value, o.value));
    const A = function(Me) {
      return _ ? !!_[Re(Me, o.value)] : b.value.includes(Me);
    };
    let U = !0, ee = 0, Ee = 0;
    for (let Me = 0, Ot = (r.value || []).length; Me < Ot; Me++) {
      const ht = (ae = (te = t == null ? void 0 : t.store) == null ? void 0 : te.states) == null ? void 0 : ae.rowKey.value, Ue = Me + Ee, qt = r.value[Me], nt = $.value && $.value.call(null, qt, Ue);
      if (A(qt))
        ee++;
      else if (!$.value || nt) {
        U = !1;
        break;
      }
      Ee += le(Re(qt, ht));
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
      const _ = ji({
        columns: u.value
      }, te);
      _ && _.filterMethod && (K = K.filter((A) => ae.some((U) => _.filterMethod.call(null, U, A, _))));
    }), x.value = K;
  }, ke = () => {
    r.value = iw(x.value, {
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
    setExpandRowKeys: Je,
    toggleRowExpansion: _t,
    updateExpandRows: $t,
    states: Ze,
    isRowExpanded: Tt
  } = lw({
    data: r,
    rowKey: o
  }), {
    updateTreeExpandKeys: Bt,
    toggleTreeExpansion: De,
    updateTreeData: Be,
    loadOrToggle: et,
    states: I
  } = sw({
    data: r,
    rowKey: o
  }), {
    updateCurrentRowData: fe,
    updateCurrentRow: Le,
    setCurrentRowKey: tt,
    states: Ft
  } = aw({
    data: r,
    rowKey: o
  });
  return {
    assertRowKey: J,
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
    toggleRowExpansion: _t,
    setExpandRowKeysAdapter: (K) => {
      Je(K), Bt(K);
    },
    setCurrentRowKey: tt,
    toggleRowExpansionAdapter: (K, te) => {
      u.value.some(({ type: _ }) => _ === "expand") ? _t(K, te) : De(K, te);
    },
    isRowExpanded: Tt,
    updateExpandRows: $t,
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
      ...Ze,
      ...I,
      ...Ft
    }
  };
}
function Dr(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = Dr(n.children, t)), n);
  });
}
function Gi(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && Gi(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function cw() {
  const e = we(), t = uw();
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
        i ? (i && !i.children && (i.children = []), i.children.push(s), d = Dr(u, i)) : (u.push(s), d = u), Gi(d), a._columns.value = d, s.type === "selection" && (a.selectable.value = s.selectable, a.reserveSelection.value = s.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
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
const eo = {
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
function dw(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = cw();
  return n.toggleAllSelection = hn(n._toggleAllSelection, 10), Object.keys(eo).forEach((o) => {
    Yi(Xi(t, o), o, n);
  }), fw(n, t), n;
}
function fw(e, t) {
  Object.keys(eo).forEach((n) => {
    Q(() => Xi(t, n), (o) => {
      Yi(o, n, e);
    });
  });
}
function Yi(e, t, n) {
  let o = e, r = eo[t];
  typeof eo[t] == "object" && (r = r.key, o = o || eo[t].default), n.states[r].value = o;
}
function Xi(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((r) => {
      o = o[r];
    }), o;
  } else
    return e[t];
}
class pw {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = O(null), this.scrollX = O(!1), this.scrollY = O(!1), this.bodyWidth = O(null), this.fixedWidth = O(null), this.rightFixedWidth = O(null), this.gutterWidth = 0;
    for (const n in t)
      gn(t, n) && (pn(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
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
    if (t = tw(t), this.height.value = Number(t), !o && (t || t === 0))
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
const { CheckboxGroup: vw } = wn, hw = G({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: wn,
    ElCheckboxGroup: vw,
    ElScrollbar: _l,
    ElTooltip: Si,
    ElIcon: ze,
    ArrowDown: Ws,
    ArrowUp: rh
  },
  directives: { ClickOutside: $i },
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
    const t = we(), { t: n } = Nt(), o = oe("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const l = O(!1), a = O(null), s = k(() => e.column && e.column.filters), i = k({
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
    Q(l, (C) => {
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
}), gw = { key: 0 }, mw = ["disabled"], bw = ["label", "onClick"];
function yw(e, t, n, o, r, l) {
  const a = Pe("el-checkbox"), s = Pe("el-checkbox-group"), i = Pe("el-scrollbar"), u = Pe("arrow-up"), d = Pe("arrow-down"), f = Pe("el-icon"), p = Pe("el-tooltip"), h = Kr("click-outside");
  return T(), q(p, {
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
      e.multiple ? (T(), R("div", gw, [
        B("div", {
          class: M(e.ns.e("content"))
        }, [
          se(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: Y(() => [
              se(s, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => e.filteredValue = c),
                class: M(e.ns.e("checkbox-group"))
              }, {
                default: Y(() => [
                  (T(!0), R(Ne, null, en(e.filters, (c) => (T(), q(a, {
                    key: c.value,
                    label: c.value
                  }, {
                    default: Y(() => [
                      Ln(ge(c.text), 1)
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
          class: M(e.ns.e("bottom"))
        }, [
          B("button", {
            class: M({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...c) => e.handleConfirm && e.handleConfirm(...c))
          }, ge(e.t("el.table.confirmFilter")), 11, mw),
          B("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...c) => e.handleReset && e.handleReset(...c))
          }, ge(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (T(), R("ul", {
        key: 1,
        class: M(e.ns.e("list"))
      }, [
        B("li", {
          class: M([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (c) => e.handleSelect(null))
        }, ge(e.t("el.table.clearFilter")), 3),
        (T(!0), R(Ne, null, en(e.filters, (c) => (T(), R("li", {
          key: c.value,
          class: M([e.ns.e("list-item"), e.ns.is("active", e.isActive(c))]),
          label: c.value,
          onClick: (v) => e.handleSelect(c.value)
        }, ge(c.text), 11, bw))), 128))
      ], 2))
    ]),
    default: Y(() => [
      Oe((T(), R("span", {
        class: M([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...c) => e.showFilterPanel && e.showFilterPanel(...c))
      }, [
        se(f, null, {
          default: Y(() => [
            e.column.filterOpened ? (T(), q(u, { key: 0 })) : (T(), q(d, { key: 1 }))
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
var ww = /* @__PURE__ */ pe(hw, [["render", yw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function Qi(e) {
  const t = we();
  jr(() => {
    n.value.addObserver(t);
  }), xe(() => {
    o(n.value), r(n.value);
  }), us(() => {
    o(n.value), r(n.value);
  }), Wo(() => {
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
const It = Symbol("ElTable");
function Cw(e, t) {
  const n = we(), o = de(It), r = (v) => {
    v.stopPropagation();
  }, l = (v, w) => {
    !w.filters && w.sortable ? c(v, w, !1) : w.filterable && !w.sortable && r(v), o == null || o.emit("header-click", w, v);
  }, a = (v, w) => {
    o == null || o.emit("header-contextmenu", w, v);
  }, s = O(null), i = O(!1), u = O({}), d = (v, w) => {
    if (_e && !(w.children && w.children.length > 0) && s.value && e.border) {
      i.value = !0;
      const g = o;
      t("set-drag-visible", !0);
      const b = (g == null ? void 0 : g.vnode.el).getBoundingClientRect().left, C = n.vnode.el.querySelector(`th.${w.id}`), E = C.getBoundingClientRect(), $ = E.left - b + 30;
      zo(C, "noclick"), u.value = {
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
          const { startColumnLeft: H, startLeft: V } = u.value, J = Number.parseInt(S.style.left, 10) - H;
          w.width = w.realWidth = J, g == null || g.emit("header-dragend", w.width, V - H, w, v), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, s.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", P), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          bn(C, "noclick");
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
      bn(C, "noclick");
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
function Sw(e) {
  const t = de(It), n = oe("table");
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
      return Hn(h, "left"), Hn(h, "right"), Object.assign({}, p, h);
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
const Ji = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Ji(n.children))) : t.push(n);
  }), t;
}, Ew = (e) => {
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
  return Ji(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((a) => a.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function _w(e) {
  const t = de(It), n = k(() => Ew(e.store.states.originColumns.value));
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
var $w = G({
  name: "ElTableHeader",
  components: {
    ElCheckbox: wn
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
    const n = we(), o = de(It), r = oe("table"), l = O({}), { onColumnsChange: a, onScrollableChange: s } = Qi(o);
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
    } = Cw(e, t), {
      getHeaderRowStyle: v,
      getHeaderRowClass: w,
      getHeaderCellStyle: g,
      getHeaderCellClass: y
    } = Sw(e), { isGroup: b, toggleAllSelection: C, columnRows: E } = _w(e);
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
    return Z("thead", {
      class: { [e.is("group")]: t }
    }, n.map((w, g) => Z("tr", {
      class: l(g),
      key: g,
      style: a(g)
    }, w.map((y, b) => (y.rowSpan > v && (v = y.rowSpan), Z("th", {
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
      Z("div", {
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
        y.sortable && Z("span", {
          onClick: (C) => f(C, y),
          class: "caret-wrapper"
        }, [
          Z("i", {
            onClick: (C) => f(C, y, "ascending"),
            class: "sort-caret ascending"
          }),
          Z("i", {
            onClick: (C) => f(C, y, "descending"),
            class: "sort-caret descending"
          })
        ]),
        y.filterable && Z(ww, {
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
function Tw(e) {
  const t = de(It), n = O(""), o = O(Z("div")), r = (p, h, c) => {
    var v;
    const w = t, g = mr(p);
    let y;
    const b = (v = w == null ? void 0 : w.vnode.el) == null ? void 0 : v.dataset.prefix;
    g && (y = ts({
      columns: e.store.states.columns.value
    }, g, b), y && (w == null || w.emit(`cell-${c}`, h, y, g, p))), w == null || w.emit(`row-${c}`, h, y, p);
  }, l = (p, h) => {
    r(p, h, "dblclick");
  }, a = (p, h) => {
    e.store.commit("setCurrentRow", h), r(p, h, "click");
  }, s = (p, h) => {
    r(p, h, "contextmenu");
  }, i = hn((p) => {
    e.store.commit("setHoverRow", p);
  }, 30), u = hn(() => {
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
        const S = ts({
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
      (E + $ > b.offsetWidth || b.scrollWidth > b.offsetWidth) && rw(t == null ? void 0 : t.refs.tableWrapper, g, g.innerText || g.textContent, c);
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
function Ow(e) {
  const t = de(It), n = oe("table");
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
      return Hn(v, "left"), Hn(v, "right"), Object.assign({}, c, v);
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
function xw(e) {
  const t = de(It), n = oe("table"), {
    handleDoubleClick: o,
    handleClick: r,
    handleContextMenu: l,
    handleMouseEnter: a,
    handleMouseLeave: s,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: d,
    tooltipTrigger: f
  } = Tw(e), {
    getRowStyle: p,
    getRowClass: h,
    getCellStyle: c,
    getCellClass: v,
    getSpan: w,
    getColspanRealWidth: g
  } = Ow(e), y = k(() => e.store.states.columns.value.findIndex(({ type: S }) => S === "default")), b = (S, x) => {
    const P = t.props.rowKey;
    return P ? Re(S, P) : x;
  }, C = (S, x, P, H = !1) => {
    const { tooltipEffect: V, tooltipOptions: z, store: J } = e, { indent: D, columns: N } = J.states, W = h(S, x);
    let ne = !0;
    return P && (W.push(n.em("row", `level-${P.level}`)), ne = P.display), Z("tr", {
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
      const le = `${x},${X}`, ye = be.columnKey || be.rawColumnKey || "", Ce = E(X, L, me), ie = L.showOverflowTooltip && Bs({
        effect: V
      }, z, L.showOverflowTooltip);
      return Z("td", {
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
      const P = e.store, { isRowExpanded: H, assertRowKey: V } = P, { treeData: z, lazyTreeNodeMap: J, childrenColumnName: D, rowKey: N } = P.states, W = P.states.columns.value;
      if (W.some(({ type: F }) => F === "expand")) {
        const F = H(S), L = C(S, x, void 0, F), X = t.renderExpanded;
        return F ? X ? [
          [
            L,
            Z("tr", {
              key: `expanded-row__${L.key}`
            }, [
              Z("td", {
                colspan: W.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [X({ row: S, $index: x, store: P, expanded: F })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), L) : [[L]];
      } else if (Object.keys(z.value).length) {
        V();
        const F = Re(S, N.value);
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
              }, ke = Re(Ce, N.value);
              if (ke == null)
                throw new Error("For nested data item, row-key is required.");
              if (L = { ...z.value[ke] }, L && (ie.expanded = L.expanded, L.level = L.level || ie.level, L.display = !!(L.expanded && ie.display), typeof L.lazy == "boolean" && (typeof L.loaded == "boolean" && L.loaded && (ie.noLazyChildren = !(L.children && L.children.length)), ie.loading = L.loading)), ve++, ce.push(C(Ce, x + ve, ie)), L) {
                const je = J.value[ke] || Ce[D.value];
                be(je, L);
              }
            });
          };
          L.display = !0;
          const me = J.value[F] || S[D.value];
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
const kw = {
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
var Pw = G({
  name: "ElTableBody",
  props: kw,
  setup(e) {
    const t = we(), n = de(It), o = oe("table"), { wrappedRowRender: r, tooltipContent: l, tooltipTrigger: a } = xw(e), { onColumnsChange: s, onScrollableChange: i } = Qi(n);
    return Q(e.store.states.hoverRow, (u, d) => {
      if (!e.store.states.isComplex.value || !_e)
        return;
      let f = window.requestAnimationFrame;
      f || (f = (p) => window.setTimeout(p, 16)), f(() => {
        const p = t == null ? void 0 : t.vnode.el, h = Array.from((p == null ? void 0 : p.children) || []).filter((w) => w == null ? void 0 : w.classList.contains(`${o.e("row")}`)), c = h[d], v = h[u];
        c && bn(c, "hover-row"), v && zo(v, "hover-row");
      });
    }), Wo(() => {
      var u;
      (u = Dt) == null || u();
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
    return Z("tbody", {}, [
      n.reduce((o, r) => o.concat(e(r, o.length)), [])
    ]);
  }
});
function Ml(e) {
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
  return Z("colgroup", {}, n.map((r) => Z("col", o(r))));
}
Ml.props = ["columns", "tableLayout"];
function Aw() {
  const e = de(It), t = e == null ? void 0 : e.store, n = k(() => t.states.fixedLeafColumnsLength.value), o = k(() => t.states.rightFixedColumns.value.length), r = k(() => t.states.columns.value.length), l = k(() => t.states.fixedColumns.value.length), a = k(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: r,
    leftFixedCount: l,
    rightFixedCount: a,
    columns: t.states.columns
  };
}
function Lw(e) {
  const { columns: t } = Aw(), n = oe("table");
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
      return Hn(s, "left"), Hn(s, "right"), s;
    },
    columns: t
  };
}
var Mw = G({
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
    const { getCellClasses: t, getCellStyles: n, columns: o } = Lw(e);
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
    }), Z("table", {
      class: l.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      Ml({
        columns: e
      }),
      Z("tbody", [
        Z("tr", {}, [
          ...e.map((i, u) => Z("td", {
            key: u,
            colspan: i.colSpan,
            rowspan: i.rowSpan,
            class: n(e, u),
            style: t(i, u)
          }, [
            Z("div", {
              class: ["cell", i.labelClassName]
            }, [s[u]])
          ]))
        ])
      ])
    ]);
  }
});
function Rw(e) {
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
function Nw(e, t, n, o) {
  const r = O(!1), l = O(null), a = O(!1), s = (F) => {
    a.value = F;
  }, i = O({
    width: null,
    height: null,
    headerHeight: null
  }), u = O(!1), d = {
    display: "inline-block",
    verticalAlign: "middle"
  }, f = O(), p = O(0), h = O(0), c = O(0), v = O(0);
  Pn(() => {
    t.setHeight(e.height);
  }), Pn(() => {
    t.setMaxHeight(e.maxHeight);
  }), Q(() => [e.currentRowKey, n.states.rowKey], ([F, L]) => {
    !m(L) || !m(F) || n.setCurrentRowKey(`${F}`);
  }, {
    immediate: !0
  }), Q(() => e.data, (F) => {
    o.store.commit("setData", F);
  }, {
    immediate: !0,
    deep: !0
  }), Pn(() => {
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
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && Vt(o.refs.scrollBarRef.wrapRef, "scroll", x, {
      passive: !0
    }), e.fit ? Rn(o.vnode.el, H) : Vt(window, "resize", H), Rn(o.refs.bodyWrapper, () => {
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
  }, V = yn(), z = k(() => {
    const { bodyWidth: F, scrollY: L, gutterWidth: X } = t;
    return F.value ? `${F.value - (L.value ? X : 0)}px` : "";
  }), J = k(() => e.maxHeight ? "fixed" : e.tableLayout), D = k(() => {
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
    tableLayout: J,
    scrollbarViewStyle: d,
    tableInnerStyle: N,
    scrollbarStyle: W
  };
}
var Iw = {
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
const Bw = () => {
  const e = O(), t = (l, a) => {
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
let Fw = 1;
const zw = G({
  name: "ElTable",
  directives: {
    Mousewheel: Vb
  },
  components: {
    TableHeader: $w,
    TableBody: Pw,
    TableFooter: Mw,
    ElScrollbar: _l,
    hColgroup: Ml
  },
  props: Iw,
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
    const { t } = Nt(), n = oe("table"), o = we();
    st(It, o);
    const r = dw(o, e);
    o.store = r;
    const l = new pw({
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
    } = Rw(r), {
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
      tableBodyStyles: J,
      tableLayout: D,
      scrollbarViewStyle: N,
      tableInnerStyle: W,
      scrollbarStyle: ne
    } = Nw(e, l, r, o), { scrollBarRef: F, scrollTo: L, setScrollLeft: X, setScrollTop: ce } = Bw(), ve = hn(z, 50), be = `${n.namespace.value}-table_${Fw++}`;
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
      tableBodyStyles: J,
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
}), Hw = ["data-prefix"], Dw = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function Ww(e, t, n, o, r, l) {
  const a = Pe("hColgroup"), s = Pe("table-header"), i = Pe("table-body"), u = Pe("el-scrollbar"), d = Pe("table-footer"), f = Kr("mousewheel");
  return T(), R("div", {
    ref: "tableWrapper",
    class: M([
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
    style: Te(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (p) => e.handleMouseLeave())
  }, [
    B("div", {
      class: M(e.ns.e("inner-wrapper")),
      style: Te(e.tableInnerStyle)
    }, [
      B("div", Dw, [
        re(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? Oe((T(), R("div", {
        key: 0,
        ref: "headerWrapper",
        class: M(e.ns.e("header-wrapper"))
      }, [
        B("table", {
          ref: "tableHeader",
          class: M(e.ns.e("header")),
          style: Te(e.tableBodyStyles),
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
        class: M(e.ns.e("body-wrapper"))
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
              class: M(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: Te({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              se(a, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (T(), q(s, {
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
            e.isEmpty ? (T(), R("div", {
              key: 0,
              ref: "emptyBlock",
              style: Te(e.emptyBlockStyle),
              class: M(e.ns.e("empty-block"))
            }, [
              B("span", {
                class: M(e.ns.e("empty-text"))
              }, [
                re(e.$slots, "empty", {}, () => [
                  Ln(ge(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : j("v-if", !0),
            e.$slots.append ? (T(), R("div", {
              key: 1,
              ref: "appendWrapper",
              class: M(e.ns.e("append-wrapper"))
            }, [
              re(e.$slots, "append")
            ], 2)) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? Oe((T(), R("div", {
        key: 1,
        ref: "footerWrapper",
        class: M(e.ns.e("footer-wrapper"))
      }, [
        se(d, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: Te(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [Ct, !e.isEmpty],
        [f, e.handleHeaderFooterMousewheel]
      ]) : j("v-if", !0),
      e.border || e.isGroup ? (T(), R("div", {
        key: 2,
        class: M(e.ns.e("border-left-patch"))
      }, null, 2)) : j("v-if", !0)
    ], 6),
    Oe(B("div", {
      ref: "resizeProxy",
      class: M(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [Ct, e.resizeProxyVisible]
    ])
  ], 46, Hw);
}
var Vw = /* @__PURE__ */ pe(zw, [["render", Ww], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const jw = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, Kw = {
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
}, Uw = (e) => jw[e] || "", qw = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return Z(wn, {
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
      return Z(wn, {
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
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), Z("div", {}, [n]);
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
      return n && r.push(o.em("expand-icon", "expanded")), Z("div", {
        class: r,
        onClick: function(a) {
          a.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          Z(ze, null, {
            default: () => [Z(al)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function Gw({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const r = t.property, l = r && Lv(e, r).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function Yw({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: r } = n;
  if (!t)
    return o ? [
      Z("span", {
        class: r.e("placeholder")
      })
    ] : null;
  const l = [], a = function(s) {
    s.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(Z("span", {
    class: r.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const s = [
      r.e("expand-icon"),
      t.expanded ? r.em("expand-icon", "expanded") : ""
    ];
    let i = al;
    t.loading && (i = Qo), l.push(Z("div", {
      class: s,
      onClick: a
    }, {
      default: () => [
        Z(ze, { class: { [r.is("loading")]: t.loading } }, {
          default: () => [Z(i)]
        })
      ]
    }));
  } else
    l.push(Z("span", {
      class: r.e("placeholder")
    }));
  return l;
}
function rs(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function Xw(e, t) {
  const n = we();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], a = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, s = rs(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        gn(t, u) && Q(() => t[u], (d) => {
          let f = d;
          u === "width" && i === "realWidth" && (f = Pl(d)), u === "minWidth" && i === "realMinWidth" && (f = Ki(d)), n.columnConfig.value[u] = f, n.columnConfig.value[i] = f;
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
      }, s = rs(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        gn(t, u) && Q(() => t[u], (d) => {
          n.columnConfig.value[i] = d;
        });
      });
    }
  };
}
function Qw(e, t, n) {
  const o = we(), r = O(""), l = O(!1), a = O(), s = O(), i = oe("table");
  Pn(() => {
    a.value = e.align ? `is-${e.align}` : null, a.value;
  }), Pn(() => {
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
  }), f = O(Pl(e.width)), p = O(Ki(e.minWidth)), h = (b) => (f.value && (b.width = f.value), p.value && (b.minWidth = p.value), !f.value && p.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), c = (b) => {
    const C = b.type, E = qw[C] || {};
    Object.keys(E).forEach((S) => {
      const x = E[S];
      S !== "className" && x !== void 0 && (b[S] = x);
    });
    const $ = Uw(C);
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
      return b.type === "expand" ? (b.renderCell = (E) => Z("div", {
        class: "cell"
      }, [C(E)]), n.value.renderExpanded = (E) => t.default ? t.default(E) : t.default) : (C = C || Gw, b.renderCell = (E) => {
        let $ = null;
        if (t.default) {
          const H = t.default(E);
          $ = H.some((V) => V.type !== ds) ? H : C(E);
        } else
          $ = C(E);
        const S = d.value && E.cellIndex === 0 && E.column.type !== "selection", x = Yw(E, S), P = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (P.class = `${P.class} ${m(i.namespace)}-tooltip`, P.style = {
          width: `${(E.column.realWidth || Number(E.column.width)) - 1}px`
        }), v($), Z("div", P, [x, $]);
      }), b;
    },
    getPropsData: (...b) => b.reduce((C, E) => (Array.isArray(E) && E.forEach(($) => {
      C[$] = e[$];
    }), C), {}),
    getColumnElIndex: (b, C) => Array.prototype.indexOf.call(b, C)
  };
}
var Jw = {
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
var Zi = G({
  name: "ElTableColumn",
  components: {
    ElCheckbox: wn
  },
  props: Jw,
  setup(e, { slots: t }) {
    const n = we(), o = O({}), r = k(() => {
      let y = n.parent;
      for (; y && !y.tableId; )
        y = y.parent;
      return y;
    }), { registerNormalWatchers: l, registerComplexWatchers: a } = Xw(r, e), {
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
    } = Qw(e, t, r), g = d.value;
    s.value = `${g.tableId || g.columnId}_column_${Zw++}`, jr(() => {
      i.value = r.value !== g;
      const y = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, C = {
        ...Kw[y],
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
      P = ew(C, P), P = nw(h, f, p)(P), o.value = P, l(), a();
    }), xe(() => {
      var y;
      const b = d.value, C = i.value ? b.vnode.el.children : (y = b.refs.hiddenColumns) == null ? void 0 : y.children, E = () => v(C || [], n.vnode.el);
      o.value.getColumnIndex = E, E() > -1 && r.value.store.commit("insertColumn", o.value, i.value ? b.columnConfig.value : null);
    }), Rt(() => {
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
      return Z("div", r);
    } catch {
      return Z("div", []);
    }
  }
});
const e2 = vt(Vw, {
  TableColumn: Zi
}), t2 = Vn(Zi), wt = "ElInfiniteScroll", n2 = 50, o2 = 200, r2 = 0, l2 = {
  delay: {
    type: Number,
    default: o2
  },
  distance: {
    type: Number,
    default: r2
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  immediate: {
    type: Boolean,
    default: !0
  }
}, Rl = (e, t) => Object.entries(l2).reduce((n, [o, r]) => {
  var l, a;
  const { type: s, default: i } = r, u = e.getAttribute(`infinite-scroll-${o}`);
  let d = (a = (l = t[u]) != null ? l : u) != null ? a : i;
  return d = d === "false" ? !1 : d, d = s(d), n[o] = Number.isNaN(d) ? i : d, n;
}, {}), eu = (e) => {
  const { observer: t } = e[wt];
  t && (t.disconnect(), delete e[wt].observer);
}, a2 = (e, t) => {
  const { container: n, containerEl: o, instance: r, observer: l, lastScrollTop: a } = e[wt], { disabled: s, distance: i } = Rl(e, r), { clientHeight: u, scrollHeight: d, scrollTop: f } = o, p = f - a;
  if (e[wt].lastScrollTop = f, l || s || p < 0)
    return;
  let h = !1;
  if (n === e)
    h = d - (u + f) <= i;
  else {
    const { clientTop: c, scrollHeight: v } = e, w = Sv(e, o);
    h = f + u >= w + c + v - i;
  }
  h && t.call(r);
};
function br(e, t) {
  const { containerEl: n, instance: o } = e[wt], { disabled: r } = Rl(e, o);
  r || n.clientHeight === 0 || (n.scrollHeight <= n.clientHeight ? t.call(o) : eu(e));
}
const s2 = {
  async mounted(e, t) {
    const { instance: n, value: o } = t;
    yt(o) || ll(wt, "'v-infinite-scroll' binding value must be a function"), await ue();
    const { delay: r, immediate: l } = Rl(e, n), a = Nv(e, !0), s = a === window ? document.documentElement : a, i = ca(a2.bind(null, e, o), r);
    if (a) {
      if (e[wt] = {
        instance: n,
        container: a,
        containerEl: s,
        delay: r,
        cb: o,
        onScroll: i,
        lastScrollTop: s.scrollTop
      }, l) {
        const u = new MutationObserver(ca(br.bind(null, e, o), n2));
        e[wt].observer = u, u.observe(e, { childList: !0, subtree: !0 }), br(e, o);
      }
      a.addEventListener("scroll", i);
    }
  },
  unmounted(e) {
    const { container: t, onScroll: n } = e[wt];
    t == null || t.removeEventListener("scroll", n), eu(e);
  },
  async updated(e) {
    e[wt] || await ue();
    const { containerEl: t, cb: n, observer: o } = e[wt];
    t.clientHeight && o && br(e, n);
  }
}, Wr = s2;
Wr.install = (e) => {
  e.directive("InfiniteScroll", Wr);
};
const i2 = Wr;
function u2(e) {
  let t;
  const n = oe("loading"), o = O(!1), r = Cn({
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
      c = Number.parseInt(c) - 1, c ? h.setAttribute("loading-number", c.toString()) : (bn(h, n.bm("parent", "relative")), h.removeAttribute("loading-number")), bn(h, n.bm("parent", "hidden"));
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
  const f = yu({
    name: "ElLoading",
    setup() {
      return () => {
        const h = r.spinner || r.svg, c = Z("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...h ? { innerHTML: h } : {}
        }, [
          Z("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), v = r.text ? Z("p", { class: n.b("text") }, [r.text]) : void 0;
        return Z(uo, {
          name: n.b("fade"),
          onAfterLeave: u
        }, {
          default: Y(() => [
            Oe(se("div", {
              style: {
                backgroundColor: r.background || ""
              },
              class: [
                n.b("mask"),
                r.customClass,
                r.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              Z("div", {
                class: n.b("spinner")
              }, [c, v])
            ]), [[Ct, r.visible]])
          ])
        });
      };
    }
  }), p = f.mount(document.createElement("div"));
  return {
    ...Dn(r),
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
let _o;
const c2 = function(e = {}) {
  if (!_e)
    return;
  const t = d2(e);
  if (t.fullscreen && _o)
    return _o;
  const n = u2({
    ...t,
    closed: () => {
      var r;
      (r = t.closed) == null || r.call(t), t.fullscreen && (_o = void 0);
    }
  });
  f2(t, t.parent, n), ls(t, t.parent, n), t.parent.vLoadingAddClassList = () => ls(t, t.parent, n);
  let o = t.parent.getAttribute("loading-number");
  return o ? o = `${Number.parseInt(o) + 1}` : o = "1", t.parent.setAttribute("loading-number", o), t.parent.appendChild(n.$el), ue(() => n.visible.value = t.visible), t.fullscreen && (_o = n), n;
}, d2 = (e) => {
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
}, f2 = async (e, t, n) => {
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
}, ls = (e, t, n) => {
  const o = oe("loading");
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? bn(t, o.bm("parent", "relative")) : zo(t, o.bm("parent", "relative")), e.fullscreen && e.lock ? zo(t, o.bm("parent", "hidden")) : bn(t, o.bm("parent", "hidden"));
}, Vr = Symbol("ElLoading"), as = (e, t) => {
  var n, o, r, l;
  const a = t.instance, s = (p) => ut(t.value) ? t.value[p] : void 0, i = (p) => {
    const h = at(p) && (a == null ? void 0 : a[p]) || p;
    return h && O(h);
  }, u = (p) => i(s(p) || e.getAttribute(`element-loading-${kv(p)}`)), d = (n = s("fullscreen")) != null ? n : t.modifiers.fullscreen, f = {
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
    instance: c2(f)
  };
}, p2 = (e, t) => {
  for (const n of Object.keys(t))
    pn(t[n]) && (t[n].value = e[n]);
}, v2 = {
  mounted(e, t) {
    t.value && as(e, t);
  },
  updated(e, t) {
    const n = e[Vr];
    t.oldValue !== t.value && (t.value && !t.oldValue ? as(e, t) : t.value && t.oldValue ? ut(t.value) && p2(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[Vr]) == null || t.instance.close();
  }
};
const h2 = /* @__PURE__ */ B("i", null, null, -1), g2 = {
  key: 0,
  class: "flex al-center p-y-8 m-b-8"
}, m2 = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28"
}, b2 = /* @__PURE__ */ B("i", null, null, -1), y2 = { class: "flex al-center" }, w2 = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28 m-t-24"
}, C2 = { class: "m-t-24" }, S2 = {
  name: "VbTable"
}, tu = /* @__PURE__ */ Object.assign(S2, {
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
    const n = e, o = O();
    Q(
      () => [n.tableQuery],
      () => {
        var f;
        (f = o.value) == null || f.setScrollTop(0);
      }
    );
    const r = O([]);
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
    const i = O(!1), u = O(!1);
    function d() {
      o.value.toggleAllSelection();
    }
    return (f, p) => {
      var C, E, $, S;
      const h = t2, c = zi, v = wn, w = Ib, g = e2, y = G1, b = v2;
      return Oe((T(), R("div", {
        class: "zn-table-content",
        style: Te({ height: e.height })
      }, [
        se(g, dn({
          ref_key: "tableRef",
          ref: o,
          class: ["flex-1", { "hide-checkAll": e.hideDftCheckAll }],
          data: e.data,
          onSelectionChange: l
        }, { ...e.prop }, wu({ ...e.propFuc })), fs({
          append: Y(() => {
            var x;
            return [
              re(f.$slots, "append"),
              (x = e.data) != null && x.length && e.showBatchDel ? (T(), R("div", g2, [
                e.showSelect ? (T(), R("div", m2, [
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
                        Ln("批量删除")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                })
              ])) : j("", !0)
            ];
          }),
          default: Y(() => [
            e.showSelect ? (T(), q(h, {
              key: 0,
              type: "selection",
              width: "55",
              align: "center"
            }, {
              header: Y(() => [
                h2
              ]),
              _: 1
            })) : j("", !0),
            e.showIndex ? (T(), q(h, {
              key: 1,
              label: "序号",
              type: "index",
              align: "center",
              width: "70"
            }, {
              default: Y(({ $index: x, row: P }) => [
                Ln(ge(s(x, P)), 1)
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
                e.loading ? j("", !0) : (T(), q(c, {
                  key: 0,
                  style: { width: "100%", height: "100%" }
                }))
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["class", "data"]),
        (C = e.summaryData) != null && C.length ? (T(), q(g, {
          key: 0,
          data: e.summaryData,
          "show-header": !1
        }, {
          empty: Y(() => [
            b2
          ]),
          default: Y(() => [
            e.showSelect ? (T(), q(h, {
              key: 0,
              width: "55"
            })) : j("", !0),
            e.showIndex ? (T(), q(h, {
              key: 1,
              width: "60"
            })) : j("", !0),
            re(f.$slots, "summary-columns", {}, () => [
              re(f.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["data"])) : j("", !0),
        Oe(B("div", y2, [
          e.showSelect && e.hideDftCheckAll && !e.showBatchDel || e.showSelect && f.$slots.footer ? (T(), R("div", w2, [
            se(v, {
              "model-value": u.value,
              indeterminate: i.value,
              class: "table-check-all",
              onChange: d
            }, null, 8, ["model-value", "indeterminate"])
          ])) : j("", !0),
          B("div", C2, [
            re(f.$slots, "footer", { selection: r.value })
          ]),
          e.showP ? (T(), q(y, {
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
          [Ct, (S = e.data) == null ? void 0 : S.length]
        ])
      ], 4)), [
        [b, e.loading]
      ]);
    };
  }
}), nu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, E2 = {
  name: "VbButton"
};
function _2(e, t, n, o, r, l) {
  return T(), R("div", null, "这是按钮啊");
}
const ou = /* @__PURE__ */ nu(E2, [["render", _2]]);
const $2 = { class: "list-scroll-search" }, T2 = {
  key: 0,
  class: "list"
}, O2 = ["onClick"], x2 = {
  name: "VbListScrollSearch"
}, k2 = /* @__PURE__ */ Object.assign(x2, {
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
    const n = e, o = O([]), r = O({ pageIndex: 1, pageSize: 20 }), l = O();
    let a = !1;
    const s = O(!1), i = O(!1);
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
      const C = ze, E = El, $ = zi, S = i2;
      return T(), R("div", $2, [
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
                se(m(og))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["placeholder", "modelValue", "onKeyup"]),
        i.value ? Oe((T(), R("ul", T2, [
          (T(!0), R(Ne, null, en(o.value, (x, P) => (T(), R("li", {
            key: P,
            class: M({ active: e.modelValue === x[m(u).key] }),
            onClick: (H) => g(P)
          }, ge(x[m(u).label]), 11, O2))), 128))
        ])), [
          [S, v]
        ]) : j("", !0),
        s.value ? (T(), q(C, {
          key: 1,
          class: M({ "is-loading": s.value && !m(a) })
        }, {
          default: Y(() => [
            se(m(Qo))
          ]),
          _: 1
        }, 8, ["class"])) : j("", !0),
        Oe(se($, { style: { width: "100%" } }, null, 512), [
          [Ct, !s.value && !o.value.length]
        ])
      ]);
    };
  }
}), ru = /* @__PURE__ */ nu(k2, [["__scopeId", "data-v-89077152"]]), P2 = {
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
    const n = e;
    let o;
    xe(() => {
      r();
    }), Wo(() => {
      o.removeEventListener("scroll", l);
    });
    function r() {
      o = document.querySelector(".scroll-select .el-scrollbar__wrap"), o.addEventListener("scroll", l);
    }
    function l({ target: { offsetHeight: a, scrollHeight: s, scrollTop: i } }) {
      a + i > s - n.diffBottom && !n.loading && t("loadMore");
    }
    return (a, s) => {
      const i = Wi;
      return T(), q(i, {
        "model-value": e.value,
        "popper-class": "scroll-select"
      }, {
        default: Y(() => [
          re(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["model-value"]);
    };
  }
}, A2 = {
  name: "VbScrollSelect"
}, lu = /* @__PURE__ */ Object.assign(A2, {
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
    const n = e, o = k(() => w(n.modelValue) ? r.value.filter((g) => n.modelValue.includes(g[n.option.key])) : r.value.find((y) => y[n.option.key] === n.modelValue)), r = O([]);
    let l = [];
    const a = O({ pageIndex: 1, pageSize: 20 }), s = O();
    let i = !1;
    const u = O(!1);
    xe(() => {
      n.init && f();
    }), Q(
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
      const b = Vi;
      return T(), q(P2, {
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
          (T(!0), R(Ne, null, en(r.value, (C) => (T(), q(b, {
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
const L2 = {
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
}, ss = {
  十: { value: 10, secUnit: !1 },
  百: { value: 100, secUnit: !1 },
  千: { value: 1e3, secUnit: !1 },
  万: { value: 1e4, secUnit: !0 },
  亿: { value: 1e8, secUnit: !0 }
};
function is(e) {
  for (var t = 0, n = 0, o = 0, r = !1, l = e.split(""), a = 0; a < l.length; a++) {
    var s = L2[l[a]];
    if (typeof s < "u")
      o = s, a === l.length - 1 && (n += o);
    else {
      var i = ss[l[a]].value;
      r = ss[l[a]].secUnit, r ? (n = (n + o) * i, t += n, n = 0) : n += o * i, o = 0;
    }
  }
  return t + n;
}
const M2 = /^[\u4e00-\u9fa5]+$/, $o = /[一二三四五六七八九十]{1,}/, On = (e) => M2.test(e), R2 = (e = "") => {
  let t = "";
  return e !== "" && (t = new Date(e).getTime()), t;
}, N2 = (e = "Y-m-d H:i:s") => {
  let t = "";
  const n = new Date(), o = n.getFullYear().toString();
  let r = (n.getMonth() + 1).toString(), l = n.getDate().toString();
  r = r < 10 ? `0${r}` : r, l = l < 10 ? `0${l}` : l;
  let a = n.getHours(), s = n.getMinutes(), i = n.getSeconds();
  switch (a = a < 10 ? `0${a}` : a, s = s < 10 ? `0${s}` : s, i = i < 10 ? `0${i}` : i, e) {
    case "Y-M-d":
      t = `${o}-${r}-${l}`;
      break;
    case "Y-M-d H:i:s":
      t = `${o}-${r}-${l} ${a}:${s}:${i}`;
      break;
    default:
      t = `${o}-${r}-${l} ${a}:${s}:${i}`;
      break;
  }
  return t;
};
function I2(e, t) {
  if (arguments.length === 0 || !e)
    return null;
  const n = t || "{y}-{m}-{d} {h}:{i}:{s}";
  let o;
  typeof e == "object" ? o = e : (typeof e == "string" && (/^[0-9]+$/.test(e) ? e = parseInt(e) : e = e.replace(new RegExp(/-/gm), "/")), typeof e == "number" && e.toString().length === 10 && (e = e * 1e3), o = new Date(e));
  const r = {
    y: o.getFullYear(),
    m: o.getMonth() + 1,
    d: o.getDate(),
    h: o.getHours(),
    i: o.getMinutes(),
    s: o.getSeconds(),
    a: o.getDay()
  };
  return n.replace(/{([ymdhisa])+}/g, (a, s) => {
    const i = r[s];
    return s === "a" ? ["日", "一", "二", "三", "四", "五", "六"][i] : i.toString().padStart(2, "0");
  });
}
const B2 = (e, t = "Y-m-d") => {
  const n = new Date(e), o = `${n.getFullYear()}-`, r = `${n.getMonth() + 1 < 10 ? `0${n.getMonth() + 1}` : n.getMonth() + 1}-`, l = `${n.getDate() < 10 ? `0${n.getDate()}` : n.getDate()}`;
  let a = n.getHours(), s = n.getMinutes(), i = n.getSeconds();
  a = a < 10 ? `0${a}` : a, s = s < 10 ? `0${s}` : s, i = i < 10 ? `0${i}` : i;
  let u = "";
  return t === "Y-m-d" ? u = o + r + l : u = `${o + r + l} ${a}:${s}:${i}`, u;
}, F2 = (e) => {
  let t, n;
  if (!e)
    return [];
  if (Object.prototype.toString.call(e) === "[object Array]") {
    const o = [], r = {};
    for (t = 0, n = e.length; t < n; t++)
      r[e[t].id] = e[t];
    for (t = 0, n = e.length; t < n; t++) {
      const l = r[e[t].parentId];
      l && e[t].id !== e[t].parentId ? (l.children || (l.children = []), l.children.push(e[t])) : o.push(e[t]);
    }
    return o;
  } else
    return [e];
}, z2 = (e = "") => e !== "" ? e.toLowerCase().replace(/( |^)[a-z]/g, (t) => t.toUpperCase()) : "", H2 = (e) => new Promise((t, n) => {
  globalRequest(api.commons.dictItemByCode, { dictCode: e }).then((o) => {
    let r = [];
    o.data.code === 1 && o.data.data.forEach((l) => {
      let a = { name: l.name, code: l.code };
      r.push(a);
    }), t(r);
  }).catch((o) => {
    n(o);
  });
}), D2 = (e = "") => {
  var t = document.createElement("iframe");
  t.src = e, t.style.display = "none", document.body.appendChild(t);
}, W2 = (e = "", t = "") => {
  var n = document.createElement("a");
  n.style.display = "none", n.href = e, n.target = "_blank", n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n);
}, V2 = (e = null, t = "下载文件") => {
  console.log("🚀 ~ file: utils.js ~ line 240 ~ fileDownBlod ~ data", e);
  let n = window.URL.createObjectURL(e), o = document.createElement("a");
  o.style.display = "none", o.href = n, o.target = "_blank", o.setAttribute("download", t), document.body.appendChild(o), o.click(), window.URL.revokeObjectURL(o.href), document.body.removeChild(o);
}, au = (e) => {
  const t = new FormData();
  return Object.keys(e).forEach((n) => {
    e[n] !== null && t.append(n, e[n]);
  }), t;
}, su = async (e) => {
  const {
    data: { data: t }
  } = await globalRequest(api.commons.apiUpload, au({ file: e }));
  return t ? Promise.resolve(t) : Promise.reject();
}, j2 = (e, t = !0) => {
  const n = document.createElement("a");
  n.href = e, t && (n.target = "_blank"), n.click();
}, K2 = (e) => {
  const [t, ...n] = e.split(".").reverse();
  return [n.reverse().reduce((o, r) => o + r, ""), t];
}, U2 = (e) => {
  switch (!0) {
    case e / 1024 < 1024:
      return `${(e / 1024).toFixed(2)}kb`;
    default:
      return `${(e / 1024 / 1024).toFixed(2)}Mb`;
  }
}, iu = (e) => Object.prototype.toString.call(e), q2 = (e, t, n = !1) => {
  if (Object.prototype.toString.call(e) !== "[object Array]")
    return [];
  const o = t == null ? void 0 : t.split(",");
  function r(l, a) {
    var i, u;
    switch (!0) {
      case (!!((i = l == null ? void 0 : l.match($o)) != null && i.length) && !!((u = a == null ? void 0 : a.match($o)) != null && u.length)):
        return is(l == null ? void 0 : l.match($o)[0]) - is(a == null ? void 0 : a.match($o)[0]);
      case (On(l) && On(a)):
        return -1;
      case (On(l) && !On(a)):
        return -1;
      case (!On(l) && On(a)):
        return 1;
    }
    let s = 0;
    return (l == null ? void 0 : l.length) !== (a == null ? void 0 : a.length) ? s += l.length - a.length : s += (l == null ? void 0 : l.localeCompare(a)) + ((l - a) * 2 || 0), s;
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
}, uu = (e) => new Promise((t) => {
  const n = document.createElement("input");
  e && (n.accept = e), n.type = "file", n.onchange = (o) => {
    const r = o.target.files[0];
    o.target.value = null, t(r);
  }, n.click();
}), G2 = async (e) => {
  const t = await uu(e);
  return su(t);
}, Y2 = (e, t, n = "application/vnd.ms-excel;charset=utf-8") => {
  let o;
  e instanceof Blob ? o = e : o = new Blob([e], { type: n });
  const r = window.URL.createObjectURL(o), l = document.createElement("a");
  l.download = t, l.href = r, l.click(), l.remove(), window.URL.revokeObjectURL(r);
}, X2 = (e) => `/${e}`, lr = (e, t = 2) => {
  switch (iu(e)) {
    case "[object Number]":
      return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
    default:
      return e ?? 0;
  }
}, Q2 = (e) => {
  const { columns: t, data: n } = e, o = [];
  return t.forEach((r, l) => {
    if (l === 0) {
      o[l] = "合计";
      return;
    }
    const a = n == null ? void 0 : n.map((s) => Number(s[r.property] || s[r] || 0));
    a.every((s) => Number.isNaN(s)) ? o[l] = "" : o[l] = `${a.reduce((s, i) => {
      const u = Number(i);
      return Number.isNaN(u) ? s : lr(s + i);
    }, 0)}`;
  }), o;
}, J2 = (e) => {
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
      return Number.isNaN(u) ? s : lr(s + i);
    }, 0)}`;
  }), o;
}, Z2 = (e, t, n) => {
  const o = {
    [n]: "合计"
  };
  return e.forEach((r) => {
    t.forEach((l) => {
      o[l] = lr((o[l] || 0) + Number(r[l] || 0));
    });
  }), o;
}, eC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateTime2stamp: R2,
  downloadFile: Y2,
  fileDown: D2,
  fileDownBlod: V2,
  fileDownPdf: W2,
  first2Upper: z2,
  formatFileNameSuffix: K2,
  formatFileSize: U2,
  formatNumber: lr,
  frontDocPath: X2,
  getDatetime: N2,
  getDictList: H2,
  getMoreSummaries: J2,
  getSummaries: Q2,
  getSummaryDatas: Z2,
  jumpExternalChain: j2,
  obj2Formdata: au,
  parseTime: I2,
  selectAndUploadFile: G2,
  selectLocalFile: uu,
  sortFuc: q2,
  timestampToTime: B2,
  transformTozTreeFormat: F2,
  typeCheck: iu,
  uploadFile: su
}, Symbol.toStringTag, { value: "Module" })), tC = [tu, ou, ru, lu], oC = {
  utils: eC,
  VbTable: tu,
  VbButton: ou,
  VbListScrollSearch: ru,
  VbScrollSelect: lu,
  install(e) {
    tC.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  oC as default
};
