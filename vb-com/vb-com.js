import { getCurrentScope as oc, onScopeDispose as js, ref as k, unref as m, getCurrentInstance as Se, onMounted as xe, nextTick as ae, watch as X, openBlock as _, createElementBlock as N, createElementVNode as I, warn as rc, computed as O, provide as rt, inject as ve, watchEffect as xn, onBeforeUnmount as wt, toRef as Rt, onUnmounted as cr, isRef as Xt, onBeforeMount as Cl, defineComponent as G, mergeProps as An, renderSlot as ne, useAttrs as lc, useSlots as dr, shallowRef as fo, withDirectives as Ce, createCommentVNode as D, Fragment as Be, normalizeClass as A, createBlock as H, withCtx as j, resolveDynamicComponent as Re, withModifiers as Ke, createVNode as oe, toDisplayString as ue, normalizeStyle as _e, vShow as qe, Transition as mn, reactive as bn, onUpdated as Ks, cloneVNode as ac, Text as Us, Comment as qs, Teleport as sc, readonly as ic, onDeactivated as uc, toRaw as Un, vModelCheckbox as Zo, createTextVNode as Yt, toRefs as Bn, h as J, triggerRef as ao, resolveComponent as ke, resolveDirective as Sl, renderList as cn, withKeys as Fe, vModelText as cc, createSlots as Gs, createApp as dc, shallowReactive as fc, isVNode as fr, render as Jo, toHandlers as pc } from "vue";
var vc = typeof global == "object" && global && global.Object === Object && global;
const Ys = vc;
var hc = typeof self == "object" && self && self.Object === Object && self, gc = Ys || hc || Function("return this")();
const kt = gc;
var mc = kt.Symbol;
const Ft = mc;
var Qs = Object.prototype, bc = Qs.hasOwnProperty, yc = Qs.toString, so = Ft ? Ft.toStringTag : void 0;
function wc(e) {
  var t = bc.call(e, so), n = e[so];
  try {
    e[so] = void 0;
    var o = !0;
  } catch {
  }
  var r = yc.call(e);
  return o && (t ? e[so] = n : delete e[so]), r;
}
var Cc = Object.prototype, Sc = Cc.toString;
function Ec(e) {
  return Sc.call(e);
}
var _c = "[object Null]", Tc = "[object Undefined]", ia = Ft ? Ft.toStringTag : void 0;
function zn(e) {
  return e == null ? e === void 0 ? Tc : _c : ia && ia in Object(e) ? wc(e) : Ec(e);
}
function dn(e) {
  return e != null && typeof e == "object";
}
var $c = "[object Symbol]";
function pr(e) {
  return typeof e == "symbol" || dn(e) && zn(e) == $c;
}
function Xs(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var kc = Array.isArray;
const vt = kc;
var Oc = 1 / 0, ua = Ft ? Ft.prototype : void 0, ca = ua ? ua.toString : void 0;
function Zs(e) {
  if (typeof e == "string")
    return e;
  if (vt(e))
    return Xs(e, Zs) + "";
  if (pr(e))
    return ca ? ca.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Oc ? "-0" : t;
}
var xc = /\s/;
function Ac(e) {
  for (var t = e.length; t-- && xc.test(e.charAt(t)); )
    ;
  return t;
}
var Lc = /^\s+/;
function Mc(e) {
  return e && e.slice(0, Ac(e) + 1).replace(Lc, "");
}
function lt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var da = 0 / 0, Pc = /^[-+]0x[0-9a-f]+$/i, Nc = /^0b[01]+$/i, Ic = /^0o[0-7]+$/i, Rc = parseInt;
function fa(e) {
  if (typeof e == "number")
    return e;
  if (pr(e))
    return da;
  if (lt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = lt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Mc(e);
  var n = Nc.test(e);
  return n || Ic.test(e) ? Rc(e.slice(2), n ? 2 : 8) : Pc.test(e) ? da : +e;
}
function El(e) {
  return e;
}
var Bc = "[object AsyncFunction]", zc = "[object Function]", Fc = "[object GeneratorFunction]", Dc = "[object Proxy]";
function _l(e) {
  if (!lt(e))
    return !1;
  var t = zn(e);
  return t == zc || t == Fc || t == Bc || t == Dc;
}
var Hc = kt["__core-js_shared__"];
const Pr = Hc;
var pa = function() {
  var e = /[^.]+$/.exec(Pr && Pr.keys && Pr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Vc(e) {
  return !!pa && pa in e;
}
var Wc = Function.prototype, jc = Wc.toString;
function Fn(e) {
  if (e != null) {
    try {
      return jc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Kc = /[\\^$.*+?()[\]{}|]/g, Uc = /^\[object .+?Constructor\]$/, qc = Function.prototype, Gc = Object.prototype, Yc = qc.toString, Qc = Gc.hasOwnProperty, Xc = RegExp(
  "^" + Yc.call(Qc).replace(Kc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zc(e) {
  if (!lt(e) || Vc(e))
    return !1;
  var t = _l(e) ? Xc : Uc;
  return t.test(Fn(e));
}
function Jc(e, t) {
  return e == null ? void 0 : e[t];
}
function Dn(e, t) {
  var n = Jc(e, t);
  return Zc(n) ? n : void 0;
}
var ed = Dn(kt, "WeakMap");
const qr = ed;
var va = Object.create, td = function() {
  function e() {
  }
  return function(t) {
    if (!lt(t))
      return {};
    if (va)
      return va(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const nd = td;
function od(e, t, n) {
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
function rd(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var ld = 800, ad = 16, sd = Date.now;
function id(e) {
  var t = 0, n = 0;
  return function() {
    var o = sd(), r = ad - (o - n);
    if (n = o, r > 0) {
      if (++t >= ld)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ud(e) {
  return function() {
    return e;
  };
}
var cd = function() {
  try {
    var e = Dn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const er = cd;
var dd = er ? function(e, t) {
  return er(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ud(t),
    writable: !0
  });
} : El;
const fd = dd;
var pd = id(fd);
const Js = pd;
var vd = 9007199254740991, hd = /^(?:0|[1-9]\d*)$/;
function vr(e, t) {
  var n = typeof e;
  return t = t ?? vd, !!t && (n == "number" || n != "symbol" && hd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Tl(e, t, n) {
  t == "__proto__" && er ? er(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ko(e, t) {
  return e === t || e !== e && t !== t;
}
var gd = Object.prototype, md = gd.hasOwnProperty;
function ei(e, t, n) {
  var o = e[t];
  (!(md.call(e, t) && ko(o, n)) || n === void 0 && !(t in e)) && Tl(e, t, n);
}
function bd(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var l = -1, a = t.length; ++l < a; ) {
    var s = t[l], i = o ? o(n[s], e[s], s, n, e) : void 0;
    i === void 0 && (i = e[s]), r ? Tl(n, s, i) : ei(n, s, i);
  }
  return n;
}
var ha = Math.max;
function ti(e, t, n) {
  return t = ha(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = ha(o.length - t, 0), a = Array(l); ++r < l; )
      a[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(a), od(e, this, s);
  };
}
function yd(e, t) {
  return Js(ti(e, t, El), e + "");
}
var wd = 9007199254740991;
function $l(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wd;
}
function to(e) {
  return e != null && $l(e.length) && !_l(e);
}
function Cd(e, t, n) {
  if (!lt(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? to(n) && vr(t, n.length) : o == "string" && t in n) ? ko(n[t], e) : !1;
}
function Sd(e) {
  return yd(function(t, n) {
    var o = -1, r = n.length, l = r > 1 ? n[r - 1] : void 0, a = r > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (r--, l) : void 0, a && Cd(n[0], n[1], a) && (l = r < 3 ? void 0 : l, r = 1), t = Object(t); ++o < r; ) {
      var s = n[o];
      s && e(t, s, o, l);
    }
    return t;
  });
}
var Ed = Object.prototype;
function kl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Ed;
  return e === n;
}
function _d(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Td = "[object Arguments]";
function ga(e) {
  return dn(e) && zn(e) == Td;
}
var ni = Object.prototype, $d = ni.hasOwnProperty, kd = ni.propertyIsEnumerable, Od = ga(function() {
  return arguments;
}()) ? ga : function(e) {
  return dn(e) && $d.call(e, "callee") && !kd.call(e, "callee");
};
const bo = Od;
function xd() {
  return !1;
}
var oi = typeof exports == "object" && exports && !exports.nodeType && exports, ma = oi && typeof module == "object" && module && !module.nodeType && module, Ad = ma && ma.exports === oi, ba = Ad ? kt.Buffer : void 0, Ld = ba ? ba.isBuffer : void 0, Md = Ld || xd;
const tr = Md;
var Pd = "[object Arguments]", Nd = "[object Array]", Id = "[object Boolean]", Rd = "[object Date]", Bd = "[object Error]", zd = "[object Function]", Fd = "[object Map]", Dd = "[object Number]", Hd = "[object Object]", Vd = "[object RegExp]", Wd = "[object Set]", jd = "[object String]", Kd = "[object WeakMap]", Ud = "[object ArrayBuffer]", qd = "[object DataView]", Gd = "[object Float32Array]", Yd = "[object Float64Array]", Qd = "[object Int8Array]", Xd = "[object Int16Array]", Zd = "[object Int32Array]", Jd = "[object Uint8Array]", ef = "[object Uint8ClampedArray]", tf = "[object Uint16Array]", nf = "[object Uint32Array]", $e = {};
$e[Gd] = $e[Yd] = $e[Qd] = $e[Xd] = $e[Zd] = $e[Jd] = $e[ef] = $e[tf] = $e[nf] = !0;
$e[Pd] = $e[Nd] = $e[Ud] = $e[Id] = $e[qd] = $e[Rd] = $e[Bd] = $e[zd] = $e[Fd] = $e[Dd] = $e[Hd] = $e[Vd] = $e[Wd] = $e[jd] = $e[Kd] = !1;
function of(e) {
  return dn(e) && $l(e.length) && !!$e[zn(e)];
}
function rf(e) {
  return function(t) {
    return e(t);
  };
}
var ri = typeof exports == "object" && exports && !exports.nodeType && exports, po = ri && typeof module == "object" && module && !module.nodeType && module, lf = po && po.exports === ri, Nr = lf && Ys.process, af = function() {
  try {
    var e = po && po.require && po.require("util").types;
    return e || Nr && Nr.binding && Nr.binding("util");
  } catch {
  }
}();
const ya = af;
var wa = ya && ya.isTypedArray, sf = wa ? rf(wa) : of;
const Ol = sf;
var uf = Object.prototype, cf = uf.hasOwnProperty;
function li(e, t) {
  var n = vt(e), o = !n && bo(e), r = !n && !o && tr(e), l = !n && !o && !r && Ol(e), a = n || o || r || l, s = a ? _d(e.length, String) : [], i = s.length;
  for (var u in e)
    (t || cf.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    vr(u, i))) && s.push(u);
  return s;
}
function ai(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var df = ai(Object.keys, Object);
const ff = df;
var pf = Object.prototype, vf = pf.hasOwnProperty;
function hf(e) {
  if (!kl(e))
    return ff(e);
  var t = [];
  for (var n in Object(e))
    vf.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function xl(e) {
  return to(e) ? li(e) : hf(e);
}
function gf(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var mf = Object.prototype, bf = mf.hasOwnProperty;
function yf(e) {
  if (!lt(e))
    return gf(e);
  var t = kl(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !bf.call(e, o)) || n.push(o);
  return n;
}
function si(e) {
  return to(e) ? li(e, !0) : yf(e);
}
var wf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Cf = /^\w*$/;
function Al(e, t) {
  if (vt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || pr(e) ? !0 : Cf.test(e) || !wf.test(e) || t != null && e in Object(t);
}
var Sf = Dn(Object, "create");
const yo = Sf;
function Ef() {
  this.__data__ = yo ? yo(null) : {}, this.size = 0;
}
function _f(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Tf = "__lodash_hash_undefined__", $f = Object.prototype, kf = $f.hasOwnProperty;
function Of(e) {
  var t = this.__data__;
  if (yo) {
    var n = t[e];
    return n === Tf ? void 0 : n;
  }
  return kf.call(t, e) ? t[e] : void 0;
}
var xf = Object.prototype, Af = xf.hasOwnProperty;
function Lf(e) {
  var t = this.__data__;
  return yo ? t[e] !== void 0 : Af.call(t, e);
}
var Mf = "__lodash_hash_undefined__";
function Pf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = yo && t === void 0 ? Mf : t, this;
}
function Mn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Mn.prototype.clear = Ef;
Mn.prototype.delete = _f;
Mn.prototype.get = Of;
Mn.prototype.has = Lf;
Mn.prototype.set = Pf;
function Nf() {
  this.__data__ = [], this.size = 0;
}
function hr(e, t) {
  for (var n = e.length; n--; )
    if (ko(e[n][0], t))
      return n;
  return -1;
}
var If = Array.prototype, Rf = If.splice;
function Bf(e) {
  var t = this.__data__, n = hr(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Rf.call(t, n, 1), --this.size, !0;
}
function zf(e) {
  var t = this.__data__, n = hr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ff(e) {
  return hr(this.__data__, e) > -1;
}
function Df(e, t) {
  var n = this.__data__, o = hr(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function en(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
en.prototype.clear = Nf;
en.prototype.delete = Bf;
en.prototype.get = zf;
en.prototype.has = Ff;
en.prototype.set = Df;
var Hf = Dn(kt, "Map");
const wo = Hf;
function Vf() {
  this.size = 0, this.__data__ = {
    hash: new Mn(),
    map: new (wo || en)(),
    string: new Mn()
  };
}
function Wf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function gr(e, t) {
  var n = e.__data__;
  return Wf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function jf(e) {
  var t = gr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Kf(e) {
  return gr(this, e).get(e);
}
function Uf(e) {
  return gr(this, e).has(e);
}
function qf(e, t) {
  var n = gr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function tn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
tn.prototype.clear = Vf;
tn.prototype.delete = jf;
tn.prototype.get = Kf;
tn.prototype.has = Uf;
tn.prototype.set = qf;
var Gf = "Expected a function";
function Ll(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Gf);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var a = e.apply(this, o);
    return n.cache = l.set(r, a) || l, a;
  };
  return n.cache = new (Ll.Cache || tn)(), n;
}
Ll.Cache = tn;
var Yf = 500;
function Qf(e) {
  var t = Ll(e, function(o) {
    return n.size === Yf && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Xf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zf = /\\(\\)?/g, Jf = Qf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Xf, function(n, o, r, l) {
    t.push(r ? l.replace(Zf, "$1") : o || n);
  }), t;
});
const ep = Jf;
function tp(e) {
  return e == null ? "" : Zs(e);
}
function mr(e, t) {
  return vt(e) ? e : Al(e, t) ? [e] : ep(tp(e));
}
var np = 1 / 0;
function Oo(e) {
  if (typeof e == "string" || pr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -np ? "-0" : t;
}
function Ml(e, t) {
  t = mr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Oo(t[n++])];
  return n && n == o ? e : void 0;
}
function Ue(e, t, n) {
  var o = e == null ? void 0 : Ml(e, t);
  return o === void 0 ? n : o;
}
function ii(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Ca = Ft ? Ft.isConcatSpreadable : void 0;
function op(e) {
  return vt(e) || bo(e) || !!(Ca && e && e[Ca]);
}
function Pl(e, t, n, o, r) {
  var l = -1, a = e.length;
  for (n || (n = op), r || (r = []); ++l < a; ) {
    var s = e[l];
    t > 0 && n(s) ? t > 1 ? Pl(s, t - 1, n, o, r) : ii(r, s) : o || (r[r.length] = s);
  }
  return r;
}
function rp(e) {
  var t = e == null ? 0 : e.length;
  return t ? Pl(e, 1) : [];
}
function lp(e) {
  return Js(ti(e, void 0, rp), e + "");
}
var ap = ai(Object.getPrototypeOf, Object);
const ui = ap;
var sp = "[object Object]", ip = Function.prototype, up = Object.prototype, ci = ip.toString, cp = up.hasOwnProperty, dp = ci.call(Object);
function fp(e) {
  if (!dn(e) || zn(e) != sp)
    return !1;
  var t = ui(e);
  if (t === null)
    return !0;
  var n = cp.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && ci.call(n) == dp;
}
function pp() {
  this.__data__ = new en(), this.size = 0;
}
function vp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function hp(e) {
  return this.__data__.get(e);
}
function gp(e) {
  return this.__data__.has(e);
}
var mp = 200;
function bp(e, t) {
  var n = this.__data__;
  if (n instanceof en) {
    var o = n.__data__;
    if (!wo || o.length < mp - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new tn(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Bt(e) {
  var t = this.__data__ = new en(e);
  this.size = t.size;
}
Bt.prototype.clear = pp;
Bt.prototype.delete = vp;
Bt.prototype.get = hp;
Bt.prototype.has = gp;
Bt.prototype.set = bp;
var di = typeof exports == "object" && exports && !exports.nodeType && exports, Sa = di && typeof module == "object" && module && !module.nodeType && module, yp = Sa && Sa.exports === di, Ea = yp ? kt.Buffer : void 0, _a = Ea ? Ea.allocUnsafe : void 0;
function wp(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = _a ? _a(n) : new e.constructor(n);
  return e.copy(o), o;
}
function Cp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (l[r++] = a);
  }
  return l;
}
function Sp() {
  return [];
}
var Ep = Object.prototype, _p = Ep.propertyIsEnumerable, Ta = Object.getOwnPropertySymbols, Tp = Ta ? function(e) {
  return e == null ? [] : (e = Object(e), Cp(Ta(e), function(t) {
    return _p.call(e, t);
  }));
} : Sp;
const $p = Tp;
function kp(e, t, n) {
  var o = t(e);
  return vt(e) ? o : ii(o, n(e));
}
function $a(e) {
  return kp(e, xl, $p);
}
var Op = Dn(kt, "DataView");
const Gr = Op;
var xp = Dn(kt, "Promise");
const Yr = xp;
var Ap = Dn(kt, "Set");
const Qr = Ap;
var ka = "[object Map]", Lp = "[object Object]", Oa = "[object Promise]", xa = "[object Set]", Aa = "[object WeakMap]", La = "[object DataView]", Mp = Fn(Gr), Pp = Fn(wo), Np = Fn(Yr), Ip = Fn(Qr), Rp = Fn(qr), _n = zn;
(Gr && _n(new Gr(new ArrayBuffer(1))) != La || wo && _n(new wo()) != ka || Yr && _n(Yr.resolve()) != Oa || Qr && _n(new Qr()) != xa || qr && _n(new qr()) != Aa) && (_n = function(e) {
  var t = zn(e), n = t == Lp ? e.constructor : void 0, o = n ? Fn(n) : "";
  if (o)
    switch (o) {
      case Mp:
        return La;
      case Pp:
        return ka;
      case Np:
        return Oa;
      case Ip:
        return xa;
      case Rp:
        return Aa;
    }
  return t;
});
const Ma = _n;
var Bp = kt.Uint8Array;
const nr = Bp;
function zp(e) {
  var t = new e.constructor(e.byteLength);
  return new nr(t).set(new nr(e)), t;
}
function Fp(e, t) {
  var n = t ? zp(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function Dp(e) {
  return typeof e.constructor == "function" && !kl(e) ? nd(ui(e)) : {};
}
var Hp = "__lodash_hash_undefined__";
function Vp(e) {
  return this.__data__.set(e, Hp), this;
}
function Wp(e) {
  return this.__data__.has(e);
}
function or(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new tn(); ++t < n; )
    this.add(e[t]);
}
or.prototype.add = or.prototype.push = Vp;
or.prototype.has = Wp;
function jp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Kp(e, t) {
  return e.has(t);
}
var Up = 1, qp = 2;
function fi(e, t, n, o, r, l) {
  var a = n & Up, s = e.length, i = t.length;
  if (s != i && !(a && i > s))
    return !1;
  var u = l.get(e), d = l.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, p = !0, v = n & qp ? new or() : void 0;
  for (l.set(e, t), l.set(t, e); ++f < s; ) {
    var c = e[f], h = t[f];
    if (o)
      var C = a ? o(h, c, f, t, e, l) : o(c, h, f, e, t, l);
    if (C !== void 0) {
      if (C)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!jp(t, function(g, y) {
        if (!Kp(v, y) && (c === g || r(c, g, n, o, l)))
          return v.push(y);
      })) {
        p = !1;
        break;
      }
    } else if (!(c === h || r(c, h, n, o, l))) {
      p = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), p;
}
function Gp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Yp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Qp = 1, Xp = 2, Zp = "[object Boolean]", Jp = "[object Date]", ev = "[object Error]", tv = "[object Map]", nv = "[object Number]", ov = "[object RegExp]", rv = "[object Set]", lv = "[object String]", av = "[object Symbol]", sv = "[object ArrayBuffer]", iv = "[object DataView]", Pa = Ft ? Ft.prototype : void 0, Ir = Pa ? Pa.valueOf : void 0;
function uv(e, t, n, o, r, l, a) {
  switch (n) {
    case iv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case sv:
      return !(e.byteLength != t.byteLength || !l(new nr(e), new nr(t)));
    case Zp:
    case Jp:
    case nv:
      return ko(+e, +t);
    case ev:
      return e.name == t.name && e.message == t.message;
    case ov:
    case lv:
      return e == t + "";
    case tv:
      var s = Gp;
    case rv:
      var i = o & Qp;
      if (s || (s = Yp), e.size != t.size && !i)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Xp, a.set(e, t);
      var d = fi(s(e), s(t), o, r, l, a);
      return a.delete(e), d;
    case av:
      if (Ir)
        return Ir.call(e) == Ir.call(t);
  }
  return !1;
}
var cv = 1, dv = Object.prototype, fv = dv.hasOwnProperty;
function pv(e, t, n, o, r, l) {
  var a = n & cv, s = $a(e), i = s.length, u = $a(t), d = u.length;
  if (i != d && !a)
    return !1;
  for (var f = i; f--; ) {
    var p = s[f];
    if (!(a ? p in t : fv.call(t, p)))
      return !1;
  }
  var v = l.get(e), c = l.get(t);
  if (v && c)
    return v == t && c == e;
  var h = !0;
  l.set(e, t), l.set(t, e);
  for (var C = a; ++f < i; ) {
    p = s[f];
    var g = e[p], y = t[p];
    if (o)
      var b = a ? o(y, g, p, t, e, l) : o(g, y, p, e, t, l);
    if (!(b === void 0 ? g === y || r(g, y, n, o, l) : b)) {
      h = !1;
      break;
    }
    C || (C = p == "constructor");
  }
  if (h && !C) {
    var w = e.constructor, E = t.constructor;
    w != E && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof E == "function" && E instanceof E) && (h = !1);
  }
  return l.delete(e), l.delete(t), h;
}
var vv = 1, Na = "[object Arguments]", Ia = "[object Array]", No = "[object Object]", hv = Object.prototype, Ra = hv.hasOwnProperty;
function gv(e, t, n, o, r, l) {
  var a = vt(e), s = vt(t), i = a ? Ia : Ma(e), u = s ? Ia : Ma(t);
  i = i == Na ? No : i, u = u == Na ? No : u;
  var d = i == No, f = u == No, p = i == u;
  if (p && tr(e)) {
    if (!tr(t))
      return !1;
    a = !0, d = !1;
  }
  if (p && !d)
    return l || (l = new Bt()), a || Ol(e) ? fi(e, t, n, o, r, l) : uv(e, t, i, n, o, r, l);
  if (!(n & vv)) {
    var v = d && Ra.call(e, "__wrapped__"), c = f && Ra.call(t, "__wrapped__");
    if (v || c) {
      var h = v ? e.value() : e, C = c ? t.value() : t;
      return l || (l = new Bt()), r(h, C, n, o, l);
    }
  }
  return p ? (l || (l = new Bt()), pv(e, t, n, o, r, l)) : !1;
}
function br(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !dn(e) && !dn(t) ? e !== e && t !== t : gv(e, t, n, o, br, r);
}
var mv = 1, bv = 2;
function yv(e, t, n, o) {
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
      var f = new Bt();
      if (o)
        var p = o(u, d, i, e, t, f);
      if (!(p === void 0 ? br(d, u, mv | bv, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function pi(e) {
  return e === e && !lt(e);
}
function wv(e) {
  for (var t = xl(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, pi(r)];
  }
  return t;
}
function vi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Cv(e) {
  var t = wv(e);
  return t.length == 1 && t[0][2] ? vi(t[0][0], t[0][1]) : function(n) {
    return n === e || yv(n, e, t);
  };
}
function Sv(e, t) {
  return e != null && t in Object(e);
}
function Ev(e, t, n) {
  t = mr(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var a = Oo(t[o]);
    if (!(l = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && $l(r) && vr(a, r) && (vt(e) || bo(e)));
}
function hi(e, t) {
  return e != null && Ev(e, t, Sv);
}
var _v = 1, Tv = 2;
function $v(e, t) {
  return Al(e) && pi(t) ? vi(Oo(e), t) : function(n) {
    var o = Ue(n, e);
    return o === void 0 && o === t ? hi(n, e) : br(t, o, _v | Tv);
  };
}
function kv(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Ov(e) {
  return function(t) {
    return Ml(t, e);
  };
}
function xv(e) {
  return Al(e) ? kv(Oo(e)) : Ov(e);
}
function Av(e) {
  return typeof e == "function" ? e : e == null ? El : typeof e == "object" ? vt(e) ? $v(e[0], e[1]) : Cv(e) : xv(e);
}
function Lv(e) {
  return function(t, n, o) {
    for (var r = -1, l = Object(t), a = o(t), s = a.length; s--; ) {
      var i = a[e ? s : ++r];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var Mv = Lv();
const gi = Mv;
function Pv(e, t) {
  return e && gi(e, t, xl);
}
function Nv(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!to(n))
      return e(n, o);
    for (var r = n.length, l = t ? r : -1, a = Object(n); (t ? l-- : ++l < r) && o(a[l], l, a) !== !1; )
      ;
    return n;
  };
}
var Iv = Nv(Pv);
const Rv = Iv;
var Bv = function() {
  return kt.Date.now();
};
const Rr = Bv;
var zv = "Expected a function", Fv = Math.max, Dv = Math.min;
function Pn(e, t, n) {
  var o, r, l, a, s, i, u = 0, d = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(zv);
  t = fa(t) || 0, lt(n) && (d = !!n.leading, f = "maxWait" in n, l = f ? Fv(fa(n.maxWait) || 0, t) : l, p = "trailing" in n ? !!n.trailing : p);
  function v(T) {
    var S = o, x = r;
    return o = r = void 0, u = T, a = e.apply(x, S), a;
  }
  function c(T) {
    return u = T, s = setTimeout(g, t), d ? v(T) : a;
  }
  function h(T) {
    var S = T - i, x = T - u, L = t - S;
    return f ? Dv(L, l - x) : L;
  }
  function C(T) {
    var S = T - i, x = T - u;
    return i === void 0 || S >= t || S < 0 || f && x >= l;
  }
  function g() {
    var T = Rr();
    if (C(T))
      return y(T);
    s = setTimeout(g, h(T));
  }
  function y(T) {
    return s = void 0, p && o ? v(T) : (o = r = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, o = i = r = s = void 0;
  }
  function w() {
    return s === void 0 ? a : y(Rr());
  }
  function E() {
    var T = Rr(), S = C(T);
    if (o = arguments, r = this, i = T, S) {
      if (s === void 0)
        return c(i);
      if (f)
        return clearTimeout(s), s = setTimeout(g, t), v(i);
    }
    return s === void 0 && (s = setTimeout(g, t)), a;
  }
  return E.cancel = b, E.flush = w, E;
}
function Xr(e, t, n) {
  (n !== void 0 && !ko(e[t], n) || n === void 0 && !(t in e)) && Tl(e, t, n);
}
function Hv(e) {
  return dn(e) && to(e);
}
function Zr(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Vv(e) {
  return bd(e, si(e));
}
function Wv(e, t, n, o, r, l, a) {
  var s = Zr(e, n), i = Zr(t, n), u = a.get(i);
  if (u) {
    Xr(e, n, u);
    return;
  }
  var d = l ? l(s, i, n + "", e, t, a) : void 0, f = d === void 0;
  if (f) {
    var p = vt(i), v = !p && tr(i), c = !p && !v && Ol(i);
    d = i, p || v || c ? vt(s) ? d = s : Hv(s) ? d = rd(s) : v ? (f = !1, d = wp(i, !0)) : c ? (f = !1, d = Fp(i, !0)) : d = [] : fp(i) || bo(i) ? (d = s, bo(s) ? d = Vv(s) : (!lt(s) || _l(s)) && (d = Dp(i))) : f = !1;
  }
  f && (a.set(i, d), r(d, i, o, l, a), a.delete(i)), Xr(e, n, d);
}
function mi(e, t, n, o, r) {
  e !== t && gi(t, function(l, a) {
    if (r || (r = new Bt()), lt(l))
      Wv(e, t, a, n, mi, o, r);
    else {
      var s = o ? o(Zr(e, a), l, a + "", e, t, r) : void 0;
      s === void 0 && (s = l), Xr(e, a, s);
    }
  }, si);
}
function jv(e, t) {
  var n = -1, o = to(e) ? Array(e.length) : [];
  return Rv(e, function(r, l, a) {
    o[++n] = t(r, l, a);
  }), o;
}
function Kv(e, t) {
  var n = vt(e) ? Xs : jv;
  return n(e, Av(t));
}
function Uv(e, t) {
  return Pl(Kv(e, t), 1);
}
function bi(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function rr(e, t) {
  return br(e, t);
}
function yr(e) {
  return e == null;
}
var qv = Sd(function(e, t, n) {
  mi(e, t, n);
});
const yi = qv;
function wi(e, t, n, o) {
  if (!lt(e))
    return e;
  t = mr(t, e);
  for (var r = -1, l = t.length, a = l - 1, s = e; s != null && ++r < l; ) {
    var i = Oo(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != a) {
      var d = s[i];
      u = o ? o(d, i, s) : void 0, u === void 0 && (u = lt(d) ? d : vr(t[r + 1]) ? [] : {});
    }
    ei(s, i, u), s = s[i];
  }
  return e;
}
function Gv(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var a = t[o], s = Ml(e, a);
    n(s, a) && wi(l, mr(a, e), s);
  }
  return l;
}
function Yv(e, t) {
  return Gv(e, t, function(n, o) {
    return hi(e, o);
  });
}
var Qv = lp(function(e, t) {
  return e == null ? {} : Yv(e, t);
});
const Xv = Qv;
function Zv(e, t, n) {
  return e == null ? e : wi(e, t, n);
}
var Jv = "Expected a function";
function Ba(e, t, n) {
  var o = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(Jv);
  return lt(n) && (o = "leading" in n ? !!n.leading : o, r = "trailing" in n ? !!n.trailing : r), Pn(e, t, {
    leading: o,
    maxWait: t,
    trailing: r
  });
}
const eh = 'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])', th = (e) => process.env.NODE_ENV === "test" ? !0 : getComputedStyle(e).position === "fixed" ? !1 : e.offsetParent !== null, za = (e) => Array.from(e.querySelectorAll(eh)).filter((t) => nh(t) && th(t)), nh = (e) => {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    return !0;
  if (e.disabled)
    return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return !(e.type === "hidden" || e.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}, qt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const l = e == null ? void 0 : e(r);
  if (n === !1 || !l)
    return t == null ? void 0 : t(r);
};
var Fa;
const me = typeof window < "u", qn = (e) => typeof e == "boolean", Ae = (e) => typeof e == "number", oh = (e) => typeof e == "string", rh = () => {
};
me && ((Fa = window == null ? void 0 : window.navigator) != null && Fa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ci(e) {
  return typeof e == "function" ? e() : m(e);
}
function lh(e) {
  return e;
}
function wr(e) {
  return oc() ? (js(e), !0) : !1;
}
function ah(e, t = !0) {
  Se() ? xe(e) : t ? e() : ae(e);
}
function sh(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = k(!1);
  let l = null;
  function a() {
    l && (clearTimeout(l), l = null);
  }
  function s() {
    r.value = !1, a();
  }
  function i(...u) {
    a(), r.value = !0, l = setTimeout(() => {
      r.value = !1, l = null, e(...u);
    }, Ci(t));
  }
  return o && (r.value = !0, me && i()), wr(s), {
    isPending: r,
    start: i,
    stop: s
  };
}
function sn(e) {
  var t;
  const n = Ci(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Nl = me ? window : void 0;
function Nt(...e) {
  let t, n, o, r;
  if (oh(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Nl) : [t, n, o, r] = e, !t)
    return rh;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], a = () => {
    l.forEach((d) => d()), l.length = 0;
  }, s = (d, f, p) => (d.addEventListener(f, p, r), () => d.removeEventListener(f, p, r)), i = X(() => sn(t), (d) => {
    a(), d && l.push(...n.flatMap((f) => o.map((p) => s(d, f, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), a();
  };
  return wr(u), u;
}
function ih(e, t, n = {}) {
  const { window: o = Nl, ignore: r = [], capture: l = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  let s = !0, i;
  const u = (v) => r.some((c) => {
    if (typeof c == "string")
      return Array.from(o.document.querySelectorAll(c)).some((h) => h === v.target || v.composedPath().includes(h));
    {
      const h = sn(c);
      return h && (v.target === h || v.composedPath().includes(h));
    }
  }), d = (v) => {
    o.clearTimeout(i);
    const c = sn(e);
    if (!(!c || c === v.target || v.composedPath().includes(c))) {
      if (v.detail === 0 && (s = !u(v)), !s) {
        s = !0;
        return;
      }
      t(v);
    }
  }, f = [
    Nt(o, "click", d, { passive: !0, capture: l }),
    Nt(o, "pointerdown", (v) => {
      const c = sn(e);
      c && (s = !v.composedPath().includes(c) && !u(v));
    }, { passive: !0 }),
    Nt(o, "pointerup", (v) => {
      if (v.button === 0) {
        const c = v.composedPath();
        v.composedPath = () => c, i = o.setTimeout(() => d(v), 50);
      }
    }, { passive: !0 }),
    a && Nt(o, "blur", (v) => {
      var c;
      const h = sn(e);
      ((c = o.document.activeElement) == null ? void 0 : c.tagName) === "IFRAME" && !(h != null && h.contains(o.document.activeElement)) && t(v);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
function uh(e, t = !1) {
  const n = k(), o = () => n.value = Boolean(e());
  return o(), ah(o, t), n;
}
const Jr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, el = "__vueuse_ssr_handlers__";
Jr[el] = Jr[el] || {};
Jr[el];
var Da = Object.getOwnPropertySymbols, ch = Object.prototype.hasOwnProperty, dh = Object.prototype.propertyIsEnumerable, fh = (e, t) => {
  var n = {};
  for (var o in e)
    ch.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Da)
    for (var o of Da(e))
      t.indexOf(o) < 0 && dh.call(e, o) && (n[o] = e[o]);
  return n;
};
function Nn(e, t, n = {}) {
  const o = n, { window: r = Nl } = o, l = fh(o, ["window"]);
  let a;
  const s = uh(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = X(() => sn(e), (f) => {
    i(), s.value && r && f && (a = new ResizeObserver(t), a.observe(f, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), u();
  };
  return wr(d), {
    isSupported: s,
    stop: d
  };
}
var Ha;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ha || (Ha = {}));
var ph = Object.defineProperty, Va = Object.getOwnPropertySymbols, vh = Object.prototype.hasOwnProperty, hh = Object.prototype.propertyIsEnumerable, Wa = (e, t, n) => t in e ? ph(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, gh = (e, t) => {
  for (var n in t || (t = {}))
    vh.call(t, n) && Wa(e, n, t[n]);
  if (Va)
    for (var n of Va(t))
      hh.call(t, n) && Wa(e, n, t[n]);
  return e;
};
const mh = {
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
gh({
  linear: lh
}, mh);
const ja = (e) => {
  let t = 0, n = e;
  for (; n; )
    t += n.offsetTop, n = n.offsetParent;
  return t;
}, bh = (e, t) => Math.abs(ja(e) - ja(t));
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Qt = () => {
}, yh = Object.assign, wh = Object.prototype.hasOwnProperty, Zt = (e, t) => wh.call(e, t), fn = Array.isArray, De = (e) => typeof e == "function", Ve = (e) => typeof e == "string", at = (e) => e !== null && typeof e == "object", Ch = Object.prototype.toString, Sh = (e) => Ch.call(e), Br = (e) => Sh(e).slice(8, -1), Si = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Eh = /-(\w)/g, _h = Si((e) => e.replace(Eh, (t, n) => n ? n.toUpperCase() : "")), Th = /\B([A-Z])/g, $h = Si((e) => e.replace(Th, "-$1").toLowerCase()), Co = (e) => e === void 0, pn = (e) => typeof Element > "u" ? !1 : e instanceof Element, kh = (e) => Ve(e) ? !Number.isNaN(Number(e)) : !1, Oh = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ka = (e) => Object.keys(e), xh = (e, t, n) => ({
  get value() {
    return Ue(e, t, n);
  },
  set value(o) {
    Zv(e, t, o);
  }
});
class Ei extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Cr(e, t) {
  throw new Ei(`[${e}] ${t}`);
}
function Pe(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ve(e) ? new Ei(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Ah = "utils/dom/style", _i = (e = "") => e.split(" ").filter((t) => !!t.trim()), Kn = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, So = (e, t) => {
  !e || !t.trim() || e.classList.add(..._i(t));
}, vn = (e, t) => {
  !e || !t.trim() || e.classList.remove(..._i(t));
}, Gt = (e, t) => {
  var n;
  if (!me || !e || !t)
    return "";
  let o = _h(t);
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
function Eo(e, t = "px") {
  if (!e)
    return "";
  if (Ae(e) || kh(e))
    return `${e}${t}`;
  if (Ve(e))
    return e;
  Pe(Ah, "binding value must be a string or number");
}
const Lh = (e, t) => {
  if (!me)
    return !1;
  const n = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(t)], o = Gt(e, n);
  return ["scroll", "auto", "overlay"].some((r) => o.includes(r));
}, Mh = (e, t) => {
  if (!me)
    return;
  let n = e;
  for (; n; ) {
    if ([window, document, document.documentElement].includes(n))
      return window;
    if (Lh(n, t))
      return n;
    n = n.parentNode;
  }
  return n;
};
let Io;
const Ph = (e) => {
  var t;
  if (!me)
    return 0;
  if (Io !== void 0)
    return Io;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const l = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Io = o - l, Io;
};
function Nh(e, t) {
  if (!me)
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
var ze = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, Ih = {
  name: "ArrowDown"
}, Rh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bh = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), zh = [
  Bh
];
function Fh(e, t, n, o, r, l) {
  return _(), N("svg", Rh, zh);
}
var Ti = /* @__PURE__ */ ze(Ih, [["render", Fh], ["__file", "arrow-down.vue"]]), Dh = {
  name: "ArrowLeft"
}, Hh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Vh = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Wh = [
  Vh
];
function jh(e, t, n, o, r, l) {
  return _(), N("svg", Hh, Wh);
}
var Kh = /* @__PURE__ */ ze(Dh, [["render", jh], ["__file", "arrow-left.vue"]]), Uh = {
  name: "ArrowRight"
}, qh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gh = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Yh = [
  Gh
];
function Qh(e, t, n, o, r, l) {
  return _(), N("svg", qh, Yh);
}
var Il = /* @__PURE__ */ ze(Uh, [["render", Qh], ["__file", "arrow-right.vue"]]), Xh = {
  name: "ArrowUp"
}, Zh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jh = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), eg = [
  Jh
];
function tg(e, t, n, o, r, l) {
  return _(), N("svg", Zh, eg);
}
var ng = /* @__PURE__ */ ze(Xh, [["render", tg], ["__file", "arrow-up.vue"]]), og = {
  name: "CircleCheck"
}, rg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lg = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), ag = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), sg = [
  lg,
  ag
];
function ig(e, t, n, o, r, l) {
  return _(), N("svg", rg, sg);
}
var ug = /* @__PURE__ */ ze(og, [["render", ig], ["__file", "circle-check.vue"]]), cg = {
  name: "CircleCloseFilled"
}, dg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fg = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), pg = [
  fg
];
function vg(e, t, n, o, r, l) {
  return _(), N("svg", dg, pg);
}
var $i = /* @__PURE__ */ ze(cg, [["render", vg], ["__file", "circle-close-filled.vue"]]), hg = {
  name: "CircleClose"
}, gg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, mg = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), bg = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), yg = [
  mg,
  bg
];
function wg(e, t, n, o, r, l) {
  return _(), N("svg", gg, yg);
}
var Rl = /* @__PURE__ */ ze(hg, [["render", wg], ["__file", "circle-close.vue"]]), Cg = {
  name: "Close"
}, Sg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Eg = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), _g = [
  Eg
];
function Tg(e, t, n, o, r, l) {
  return _(), N("svg", Sg, _g);
}
var tl = /* @__PURE__ */ ze(Cg, [["render", Tg], ["__file", "close.vue"]]), $g = {
  name: "DArrowLeft"
}, kg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Og = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), xg = [
  Og
];
function Ag(e, t, n, o, r, l) {
  return _(), N("svg", kg, xg);
}
var Lg = /* @__PURE__ */ ze($g, [["render", Ag], ["__file", "d-arrow-left.vue"]]), Mg = {
  name: "DArrowRight"
}, Pg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ng = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), Ig = [
  Ng
];
function Rg(e, t, n, o, r, l) {
  return _(), N("svg", Pg, Ig);
}
var Bg = /* @__PURE__ */ ze(Mg, [["render", Rg], ["__file", "d-arrow-right.vue"]]), zg = {
  name: "Hide"
}, Fg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dg = /* @__PURE__ */ I("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), Hg = /* @__PURE__ */ I("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), Vg = [
  Dg,
  Hg
];
function Wg(e, t, n, o, r, l) {
  return _(), N("svg", Fg, Vg);
}
var jg = /* @__PURE__ */ ze(zg, [["render", Wg], ["__file", "hide.vue"]]), Kg = {
  name: "InfoFilled"
}, Ug = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qg = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), Gg = [
  qg
];
function Yg(e, t, n, o, r, l) {
  return _(), N("svg", Ug, Gg);
}
var ki = /* @__PURE__ */ ze(Kg, [["render", Yg], ["__file", "info-filled.vue"]]), Qg = {
  name: "Loading"
}, Xg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zg = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Jg = [
  Zg
];
function em(e, t, n, o, r, l) {
  return _(), N("svg", Xg, Jg);
}
var Sr = /* @__PURE__ */ ze(Qg, [["render", em], ["__file", "loading.vue"]]), tm = {
  name: "MoreFilled"
}, nm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, om = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), rm = [
  om
];
function lm(e, t, n, o, r, l) {
  return _(), N("svg", nm, rm);
}
var Ua = /* @__PURE__ */ ze(tm, [["render", lm], ["__file", "more-filled.vue"]]), am = {
  name: "Search"
}, sm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, im = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), um = [
  im
];
function cm(e, t, n, o, r, l) {
  return _(), N("svg", sm, um);
}
var dm = /* @__PURE__ */ ze(am, [["render", cm], ["__file", "search.vue"]]), fm = {
  name: "SuccessFilled"
}, pm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vm = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), hm = [
  vm
];
function gm(e, t, n, o, r, l) {
  return _(), N("svg", pm, hm);
}
var Oi = /* @__PURE__ */ ze(fm, [["render", gm], ["__file", "success-filled.vue"]]), mm = {
  name: "View"
}, bm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ym = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), wm = [
  ym
];
function Cm(e, t, n, o, r, l) {
  return _(), N("svg", bm, wm);
}
var Sm = /* @__PURE__ */ ze(mm, [["render", Cm], ["__file", "view.vue"]]), Em = {
  name: "WarningFilled"
}, _m = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Tm = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), $m = [
  Tm
];
function km(e, t, n, o, r, l) {
  return _(), N("svg", _m, $m);
}
var xi = /* @__PURE__ */ ze(Em, [["render", km], ["__file", "warning-filled.vue"]]);
const Ai = "__epPropKey", ie = (e) => e, Om = (e) => at(e) && !!e[Ai], Er = (e, t) => {
  if (!at(e) || Om(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: a } = e, i = {
    type: l,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), Zt(e, "default") && f.push(r), d || (d = f.includes(u))), a && (d || (d = a(u))), !d && f.length > 0) {
        const p = [...new Set(f)].map((v) => JSON.stringify(v)).join(", ");
        rc(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Ai]: !0
  };
  return Zt(e, "default") && (i.default = r), i;
}, we = (e) => bi(Object.entries(e).map(([t, n]) => [
  t,
  Er(n, t)
])), $t = ie([
  String,
  Object,
  Function
]), Li = {
  Close: tl,
  SuccessFilled: Oi,
  InfoFilled: ki,
  WarningFilled: xi,
  CircleCloseFilled: $i
}, lr = {
  success: Oi,
  warning: xi,
  error: $i,
  info: ki
}, xm = {
  validating: Sr,
  success: ug,
  error: Rl
}, ht = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Am = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), no = (e) => (e.install = Qt, e), In = {
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
}, Qe = "update:modelValue", Mi = "change", xo = ["", "default", "small", "large"], Lm = {
  large: 40,
  default: 32,
  small: 24
}, Mm = (e) => Lm[e || "default"], Pi = (e) => ["", ...xo].includes(e);
var Ko = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(Ko || {});
const Ni = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), _r = (e) => e, Pm = ["class", "style"], Nm = /^on[A-Z]/, Im = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = O(() => ((n == null ? void 0 : n.value) || []).concat(Pm)), r = Se();
  return r ? O(() => {
    var l;
    return bi(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([a]) => !o.value.includes(a) && !(t && Nm.test(a))));
  }) : (Pe("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), O(() => ({})));
}, Ii = Symbol("buttonGroupContextKey"), oo = Symbol("checkboxGroupContextKey"), Ri = Symbol(), Bl = Symbol("formContextKey"), ar = Symbol("formItemContextKey"), Bi = Symbol("elPaginationKey"), zi = Symbol("scrollbarContextKey"), zl = Symbol("popper"), Fi = Symbol("popperContent"), Fl = Symbol("elTooltip"), Di = (e) => {
  const t = Se();
  return O(() => {
    var n, o;
    return (o = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? o : void 0;
  });
}, sr = k();
function yn(e, t = void 0) {
  const n = Se() ? ve(Ri, sr) : sr;
  return e ? O(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const Rm = (e, t, n = !1) => {
  var o;
  const r = !!Se(), l = r ? yn() : void 0, a = (o = t == null ? void 0 : t.provide) != null ? o : r ? rt : void 0;
  if (!a) {
    Pe("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const s = O(() => {
    const i = m(e);
    return l != null && l.value ? Bm(l.value, i) : i;
  });
  return a(Ri, s), (n || !sr.value) && (sr.value = s.value), s;
}, Bm = (e, t) => {
  var n;
  const o = [.../* @__PURE__ */ new Set([...Ka(e), ...Ka(t)])], r = {};
  for (const l of o)
    r[l] = (n = t[l]) != null ? n : e[l];
  return r;
}, Ao = Er({
  type: String,
  values: xo,
  required: !1
}), hn = (e, t = {}) => {
  const n = k(void 0), o = t.prop ? n : Di("size"), r = t.global ? n : yn("size"), l = t.form ? { size: void 0 } : ve(Bl, void 0), a = t.formItem ? { size: void 0 } : ve(ar, void 0);
  return O(() => o.value || m(e) || (a == null ? void 0 : a.size) || (l == null ? void 0 : l.size) || r.value || "");
}, Tr = (e) => {
  const t = Di("disabled"), n = ve(Bl, void 0);
  return O(() => t.value || m(e) || (n == null ? void 0 : n.disabled) || !1);
}, Hi = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, a) => {
  X(() => m(a), (s) => {
    s && Pe(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, zm = (e, t, n) => {
  let o = {
    offsetX: 0,
    offsetY: 0
  };
  const r = (s) => {
    const i = s.clientX, u = s.clientY, { offsetX: d, offsetY: f } = o, p = e.value.getBoundingClientRect(), v = p.left, c = p.top, h = p.width, C = p.height, g = document.documentElement.clientWidth, y = document.documentElement.clientHeight, b = -v + d, w = -c + f, E = g - v - h + d, T = y - c - C + f, S = (L) => {
      const V = Math.min(Math.max(d + L.clientX - i, b), E), U = Math.min(Math.max(f + L.clientY - u, w), T);
      o = {
        offsetX: V,
        offsetY: U
      }, e.value.style.transform = `translate(${Eo(V)}, ${Eo(U)})`;
    }, x = () => {
      document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", x);
    };
    document.addEventListener("mousemove", S), document.addEventListener("mouseup", x);
  }, l = () => {
    t.value && e.value && t.value.addEventListener("mousedown", r);
  }, a = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", r);
  };
  xe(() => {
    xn(() => {
      n.value ? l() : a();
    });
  }), wt(() => {
    a();
  });
}, Fm = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), Dl = "el", Dm = "is-", En = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, te = (e) => {
  const t = yn("namespace", Dl);
  return {
    namespace: t,
    b: (c = "") => En(t.value, e, c, "", ""),
    e: (c) => c ? En(t.value, e, "", c, "") : "",
    m: (c) => c ? En(t.value, e, "", "", c) : "",
    be: (c, h) => c && h ? En(t.value, e, c, h, "") : "",
    em: (c, h) => c && h ? En(t.value, e, "", c, h) : "",
    bm: (c, h) => c && h ? En(t.value, e, c, "", h) : "",
    bem: (c, h, C) => c && h && C ? En(t.value, e, c, h, C) : "",
    is: (c, ...h) => {
      const C = h.length >= 1 ? h[0] : !0;
      return c && C ? `${Dm}${c}` : "";
    },
    cssVar: (c) => {
      const h = {};
      for (const C in c)
        c[C] && (h[`--${t.value}-${C}`] = c[C]);
      return h;
    },
    cssVarName: (c) => `--${t.value}-${c}`,
    cssVarBlock: (c) => {
      const h = {};
      for (const C in c)
        c[C] && (h[`--${t.value}-${e}-${C}`] = c[C]);
      return h;
    },
    cssVarBlockName: (c) => `--${t.value}-${e}-${c}`
  };
}, nl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Hm = Symbol("elIdInjection"), Vi = () => Se() ? ve(Hm, nl) : nl, ir = (e) => {
  const t = Vi();
  !me && t === nl && Pe("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = yn("namespace", Dl);
  return O(() => m(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, ro = () => {
  const e = ve(Bl, void 0), t = ve(ar, void 0);
  return {
    form: e,
    formItem: t
  };
}, Hl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = k(!1)), o || (o = k(!1));
  const r = k();
  let l;
  const a = O(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return xe(() => {
    l = X([Rt(e, "id"), n], ([s, i]) => {
      const u = s ?? (i ? void 0 : ir().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), cr(() => {
    l && l(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
};
var Vm = {
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
const Wm = (e) => (t, n) => jm(t, n, m(e)), jm = (e, t, n) => Ue(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t == null ? void 0 : t[r]) != null ? l : `{${r}}`}`;
}), Km = (e) => {
  const t = O(() => m(e).name), n = Xt(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: Wm(e)
  };
}, Ot = () => {
  const e = yn("locale");
  return Km(O(() => e.value || Vm));
};
let Um;
function qm(e, t = Um) {
  t && t.active && t.effects.push(e);
}
const qa = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Wi = (e) => (e.w & gn) > 0, ji = (e) => (e.n & gn) > 0, Gm = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= gn;
}, Ym = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Wi(r) && !ji(r) ? r.delete(e) : t[n++] = r, r.w &= ~gn, r.n &= ~gn;
    }
    t.length = n;
  }
};
let co = 0, gn = 1;
const ol = 30;
let pt;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Qm {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, qm(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = pt, n = Uo;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = pt, pt = this, Uo = !0, gn = 1 << ++co, co <= ol ? Gm(this) : Ga(this), this.fn();
    } finally {
      co <= ol && Ym(this), gn = 1 << --co, pt = this.parent, Uo = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    pt === this ? this.deferStop = !0 : this.active && (Ga(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ga(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Uo = !0;
function Ya(e, t) {
  let n = !1;
  co <= ol ? ji(e) || (e.n |= gn, n = !Wi(e)) : n = !e.has(pt), n && (e.add(pt), pt.deps.push(e), process.env.NODE_ENV !== "production" && pt.onTrack && pt.onTrack(Object.assign({ effect: pt }, t)));
}
function Qa(e, t) {
  const n = fn(e) ? e : [...e];
  for (const o of n)
    o.computed && Xa(o, t);
  for (const o of n)
    o.computed || Xa(o, t);
}
function Xa(e, t) {
  (e !== pt || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(yh({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
function $r(e) {
  const t = e && e.__v_raw;
  return t ? $r(t) : e;
}
function Xm(e) {
  Uo && pt && (e = $r(e), process.env.NODE_ENV !== "production" ? Ya(e.dep || (e.dep = qa()), {
    target: e,
    type: "get",
    key: "value"
  }) : Ya(e.dep || (e.dep = qa())));
}
function Zm(e, t) {
  e = $r(e), e.dep && (process.env.NODE_ENV !== "production" ? Qa(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Qa(e.dep));
}
var Ki;
class Jm {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ki] = !1, this._dirty = !0, this.effect = new Qm(t, () => {
      this._dirty || (this._dirty = !0, Zm(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = $r(this);
    return Xm(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Ki = "__v_isReadonly";
function e0(e, t, n = !1) {
  let o, r;
  const l = De(e);
  l ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Qt) : (o = e.get, r = e.set);
  const a = new Jm(o, r, l || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (a.effect.onTrack = t.onTrack, a.effect.onTrigger = t.onTrigger), a;
}
const t0 = (e) => {
  Xt(e) || Cr("[useLockscreen]", "You need to pass a ref param to this function");
  const t = te("popup"), n = e0(() => t.bm("parent", "hidden"));
  if (!me || Kn(document.body, n.value))
    return;
  let o = 0, r = !1, l = "0";
  const a = () => {
    setTimeout(() => {
      vn(document.body, n.value), r && (document.body.style.width = l);
    }, 200);
  };
  X(e, (s) => {
    if (!s) {
      a();
      return;
    }
    r = !Kn(document.body, n.value), r && (l = document.body.style.width), o = Ph(t.namespace.value);
    const i = document.documentElement.clientHeight < document.body.scrollHeight, u = Gt(document.body, "overflowY");
    o > 0 && (i || u === "scroll") && r && (document.body.style.width = `calc(100% - ${o}px)`), So(document.body, n.value);
  }), js(() => a());
}, n0 = Er({
  type: ie(Boolean),
  default: null
}), o0 = Er({
  type: ie(Function)
}), r0 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: n0,
    [n]: o0
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
      const p = Se(), { emit: v } = p, c = p.props, h = O(() => De(c[n])), C = O(() => c[e] === null), g = (S) => {
        a.value !== !0 && (a.value = !0, s && (s.value = S), De(d) && d(S));
      }, y = (S) => {
        a.value !== !1 && (a.value = !1, s && (s.value = S), De(f) && f(S));
      }, b = (S) => {
        if (c.disabled === !0 || De(u) && !u())
          return;
        const x = h.value && me;
        x && v(t, !0), (C.value || !x) && g(S);
      }, w = (S) => {
        if (c.disabled === !0 || !me)
          return;
        const x = h.value && me;
        x && v(t, !1), (C.value || !x) && y(S);
      }, E = (S) => {
        qn(S) && (c.disabled && S ? h.value && v(t, !1) : a.value !== S && (S ? g() : y()));
      }, T = () => {
        a.value ? w() : b();
      };
      return X(() => c[e], E), i && p.appContext.config.globalProperties.$route !== void 0 && X(() => ({
        ...p.proxy.$route
      }), () => {
        i.value && a.value && w();
      }), xe(() => {
        E(c[e]);
      }), {
        hide: w,
        show: b,
        toggle: T,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
var nt = "top", bt = "bottom", yt = "right", ot = "left", Vl = "auto", Lo = [nt, bt, yt, ot], Gn = "start", _o = "end", l0 = "clippingParents", Ui = "viewport", io = "popper", a0 = "reference", Za = Lo.reduce(function(e, t) {
  return e.concat([t + "-" + Gn, t + "-" + _o]);
}, []), kr = [].concat(Lo, [Vl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Gn, t + "-" + _o]);
}, []), s0 = "beforeRead", i0 = "read", u0 = "afterRead", c0 = "beforeMain", d0 = "main", f0 = "afterMain", p0 = "beforeWrite", v0 = "write", h0 = "afterWrite", g0 = [s0, i0, u0, c0, d0, f0, p0, v0, h0];
function Dt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Yn(e) {
  var t = xt(e).Element;
  return e instanceof t || e instanceof Element;
}
function mt(e) {
  var t = xt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Wl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function m0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !mt(l) || !Dt(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(a) {
      var s = r[a];
      s === !1 ? l.removeAttribute(a) : l.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function b0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], l = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = a.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !mt(r) || !Dt(r) || (Object.assign(r.style, s), Object.keys(l).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var qi = { name: "applyStyles", enabled: !0, phase: "write", fn: m0, effect: b0, requires: ["computeStyles"] };
function zt(e) {
  return e.split("-")[0];
}
var Ln = Math.max, ur = Math.min, Qn = Math.round;
function Xn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (mt(e) && t) {
    var l = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (o = Qn(n.width) / a || 1), l > 0 && (r = Qn(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function jl(e) {
  var t = Xn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Gi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Wl(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Jt(e) {
  return xt(e).getComputedStyle(e);
}
function y0(e) {
  return ["table", "td", "th"].indexOf(Dt(e)) >= 0;
}
function wn(e) {
  return ((Yn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Or(e) {
  return Dt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Wl(e) ? e.host : null) || wn(e);
}
function Ja(e) {
  return !mt(e) || Jt(e).position === "fixed" ? null : e.offsetParent;
}
function w0(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && mt(e)) {
    var o = Jt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Or(e);
  for (Wl(r) && (r = r.host); mt(r) && ["html", "body"].indexOf(Dt(r)) < 0; ) {
    var l = Jt(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Mo(e) {
  for (var t = xt(e), n = Ja(e); n && y0(n) && Jt(n).position === "static"; )
    n = Ja(n);
  return n && (Dt(n) === "html" || Dt(n) === "body" && Jt(n).position === "static") ? t : n || w0(e) || t;
}
function Kl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vo(e, t, n) {
  return Ln(e, ur(t, n));
}
function C0(e, t, n) {
  var o = vo(e, t, n);
  return o > n ? n : o;
}
function Yi() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Qi(e) {
  return Object.assign({}, Yi(), e);
}
function Xi(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var S0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Qi(typeof e != "number" ? e : Xi(e, Lo));
};
function E0(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, a = n.modifiersData.popperOffsets, s = zt(n.placement), i = Kl(s), u = [ot, yt].indexOf(s) >= 0, d = u ? "height" : "width";
  if (!(!l || !a)) {
    var f = S0(r.padding, n), p = jl(l), v = i === "y" ? nt : ot, c = i === "y" ? bt : yt, h = n.rects.reference[d] + n.rects.reference[i] - a[i] - n.rects.popper[d], C = a[i] - n.rects.reference[i], g = Mo(l), y = g ? i === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = h / 2 - C / 2, w = f[v], E = y - p[d] - f[c], T = y / 2 - p[d] / 2 + b, S = vo(w, T, E), x = i;
    n.modifiersData[o] = (t = {}, t[x] = S, t.centerOffset = S - T, t);
  }
}
function _0(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !Gi(t.elements.popper, r) || (t.elements.arrow = r));
}
var T0 = { name: "arrow", enabled: !0, phase: "main", fn: E0, effect: _0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Zn(e) {
  return e.split("-")[1];
}
var $0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function k0(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: Qn(t * r) / r || 0, y: Qn(n * r) / r || 0 };
}
function es(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, a = e.offsets, s = e.position, i = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = a.x, v = p === void 0 ? 0 : p, c = a.y, h = c === void 0 ? 0 : c, C = typeof d == "function" ? d({ x: v, y: h }) : { x: v, y: h };
  v = C.x, h = C.y;
  var g = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), b = ot, w = nt, E = window;
  if (u) {
    var T = Mo(n), S = "clientHeight", x = "clientWidth";
    if (T === xt(n) && (T = wn(n), Jt(T).position !== "static" && s === "absolute" && (S = "scrollHeight", x = "scrollWidth")), T = T, r === nt || (r === ot || r === yt) && l === _o) {
      w = bt;
      var L = f && T === E && E.visualViewport ? E.visualViewport.height : T[S];
      h -= L - o.height, h *= i ? 1 : -1;
    }
    if (r === ot || (r === nt || r === bt) && l === _o) {
      b = yt;
      var V = f && T === E && E.visualViewport ? E.visualViewport.width : T[x];
      v -= V - o.width, v *= i ? 1 : -1;
    }
  }
  var U = Object.assign({ position: s }, u && $0), W = d === !0 ? k0({ x: v, y: h }) : { x: v, y: h };
  if (v = W.x, h = W.y, i) {
    var K;
    return Object.assign({}, U, (K = {}, K[w] = y ? "0" : "", K[b] = g ? "0" : "", K.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", K));
  }
  return Object.assign({}, U, (t = {}, t[w] = y ? h + "px" : "", t[b] = g ? v + "px" : "", t.transform = "", t));
}
function O0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, a = l === void 0 ? !0 : l, s = n.roundOffsets, i = s === void 0 ? !0 : s, u = { placement: zt(t.placement), variation: Zn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, es(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, es(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Zi = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: O0, data: {} }, Ro = { passive: !0 };
function x0(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, a = o.resize, s = a === void 0 ? !0 : a, i = xt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Ro);
  }), s && i.addEventListener("resize", n.update, Ro), function() {
    l && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Ro);
    }), s && i.removeEventListener("resize", n.update, Ro);
  };
}
var Ji = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: x0, data: {} }, A0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function qo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return A0[t];
  });
}
var L0 = { start: "end", end: "start" };
function ts(e) {
  return e.replace(/start|end/g, function(t) {
    return L0[t];
  });
}
function Ul(e) {
  var t = xt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function ql(e) {
  return Xn(wn(e)).left + Ul(e).scrollLeft;
}
function M0(e) {
  var t = xt(e), n = wn(e), o = t.visualViewport, r = n.clientWidth, l = n.clientHeight, a = 0, s = 0;
  return o && (r = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, s = o.offsetTop)), { width: r, height: l, x: a + ql(e), y: s };
}
function P0(e) {
  var t, n = wn(e), o = Ul(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = Ln(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Ln(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + ql(e), i = -o.scrollTop;
  return Jt(r || n).direction === "rtl" && (s += Ln(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: a, x: s, y: i };
}
function Gl(e) {
  var t = Jt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function eu(e) {
  return ["html", "body", "#document"].indexOf(Dt(e)) >= 0 ? e.ownerDocument.body : mt(e) && Gl(e) ? e : eu(Or(e));
}
function ho(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = eu(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = xt(o), a = r ? [l].concat(l.visualViewport || [], Gl(o) ? o : []) : o, s = t.concat(a);
  return r ? s : s.concat(ho(Or(a)));
}
function rl(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function N0(e) {
  var t = Xn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function ns(e, t) {
  return t === Ui ? rl(M0(e)) : Yn(t) ? N0(t) : rl(P0(wn(e)));
}
function I0(e) {
  var t = ho(Or(e)), n = ["absolute", "fixed"].indexOf(Jt(e).position) >= 0, o = n && mt(e) ? Mo(e) : e;
  return Yn(o) ? t.filter(function(r) {
    return Yn(r) && Gi(r, o) && Dt(r) !== "body";
  }) : [];
}
function R0(e, t, n) {
  var o = t === "clippingParents" ? I0(e) : [].concat(t), r = [].concat(o, [n]), l = r[0], a = r.reduce(function(s, i) {
    var u = ns(e, i);
    return s.top = Ln(u.top, s.top), s.right = ur(u.right, s.right), s.bottom = ur(u.bottom, s.bottom), s.left = Ln(u.left, s.left), s;
  }, ns(e, l));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function tu(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? zt(o) : null, l = o ? Zn(o) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case nt:
      i = { x: a, y: t.y - n.height };
      break;
    case bt:
      i = { x: a, y: t.y + t.height };
      break;
    case yt:
      i = { x: t.x + t.width, y: s };
      break;
    case ot:
      i = { x: t.x - n.width, y: s };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? Kl(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (l) {
      case Gn:
        i[u] = i[u] - (t[d] / 2 - n[d] / 2);
        break;
      case _o:
        i[u] = i[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function To(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.boundary, a = l === void 0 ? l0 : l, s = n.rootBoundary, i = s === void 0 ? Ui : s, u = n.elementContext, d = u === void 0 ? io : u, f = n.altBoundary, p = f === void 0 ? !1 : f, v = n.padding, c = v === void 0 ? 0 : v, h = Qi(typeof c != "number" ? c : Xi(c, Lo)), C = d === io ? a0 : io, g = e.rects.popper, y = e.elements[p ? C : d], b = R0(Yn(y) ? y : y.contextElement || wn(e.elements.popper), a, i), w = Xn(e.elements.reference), E = tu({ reference: w, element: g, strategy: "absolute", placement: r }), T = rl(Object.assign({}, g, E)), S = d === io ? T : w, x = { top: b.top - S.top + h.top, bottom: S.bottom - b.bottom + h.bottom, left: b.left - S.left + h.left, right: S.right - b.right + h.right }, L = e.modifiersData.offset;
  if (d === io && L) {
    var V = L[r];
    Object.keys(x).forEach(function(U) {
      var W = [yt, bt].indexOf(U) >= 0 ? 1 : -1, K = [nt, bt].indexOf(U) >= 0 ? "y" : "x";
      x[U] += V[K] * W;
    });
  }
  return x;
}
function B0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, a = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? kr : i, d = Zn(o), f = d ? s ? Za : Za.filter(function(c) {
    return Zn(c) === d;
  }) : Lo, p = f.filter(function(c) {
    return u.indexOf(c) >= 0;
  });
  p.length === 0 && (p = f);
  var v = p.reduce(function(c, h) {
    return c[h] = To(e, { placement: h, boundary: r, rootBoundary: l, padding: a })[zt(h)], c;
  }, {});
  return Object.keys(v).sort(function(c, h) {
    return v[c] - v[h];
  });
}
function z0(e) {
  if (zt(e) === Vl)
    return [];
  var t = qo(e);
  return [ts(e), t, ts(t)];
}
function F0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !0 : a, i = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, c = v === void 0 ? !0 : v, h = n.allowedAutoPlacements, C = t.options.placement, g = zt(C), y = g === C, b = i || (y || !c ? [qo(C)] : z0(C)), w = [C].concat(b).reduce(function(be, se) {
      return be.concat(zt(se) === Vl ? B0(t, { placement: se, boundary: d, rootBoundary: f, padding: u, flipVariations: c, allowedAutoPlacements: h }) : se);
    }, []), E = t.rects.reference, T = t.rects.popper, S = /* @__PURE__ */ new Map(), x = !0, L = w[0], V = 0; V < w.length; V++) {
      var U = w[V], W = zt(U), K = Zn(U) === Gn, z = [nt, bt].indexOf(W) >= 0, R = z ? "width" : "height", q = To(t, { placement: U, boundary: d, rootBoundary: f, altBoundary: p, padding: u }), le = z ? K ? yt : ot : K ? bt : nt;
      E[R] > T[R] && (le = qo(le));
      var F = qo(le), P = [];
      if (l && P.push(q[W] <= 0), s && P.push(q[le] <= 0, q[F] <= 0), P.every(function(be) {
        return be;
      })) {
        L = U, x = !1;
        break;
      }
      S.set(U, P);
    }
    if (x)
      for (var Z = c ? 3 : 1, pe = function(be) {
        var se = w.find(function(Ee) {
          var Te = S.get(Ee);
          if (Te)
            return Te.slice(0, be).every(function(de) {
              return de;
            });
        });
        if (se)
          return L = se, "break";
      }, ge = Z; ge > 0; ge--) {
        var ye = pe(ge);
        if (ye === "break")
          break;
      }
    t.placement !== L && (t.modifiersData[o]._skip = !0, t.placement = L, t.reset = !0);
  }
}
var D0 = { name: "flip", enabled: !0, phase: "main", fn: F0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function os(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function rs(e) {
  return [nt, yt, bt, ot].some(function(t) {
    return e[t] >= 0;
  });
}
function H0(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, a = To(t, { elementContext: "reference" }), s = To(t, { altBoundary: !0 }), i = os(a, o), u = os(s, r, l), d = rs(i), f = rs(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var V0 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: H0 };
function W0(e, t, n) {
  var o = zt(e), r = [ot, nt].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = l[0], s = l[1];
  return a = a || 0, s = (s || 0) * r, [ot, yt].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function j0(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, a = kr.reduce(function(d, f) {
    return d[f] = W0(f, t.rects, l), d;
  }, {}), s = a[t.placement], i = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var K0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: j0 };
function U0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = tu({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var nu = { name: "popperOffsets", enabled: !0, phase: "read", fn: U0, data: {} };
function q0(e) {
  return e === "x" ? "y" : "x";
}
function G0(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !1 : a, i = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, v = p === void 0 ? !0 : p, c = n.tetherOffset, h = c === void 0 ? 0 : c, C = To(t, { boundary: i, rootBoundary: u, padding: f, altBoundary: d }), g = zt(t.placement), y = Zn(t.placement), b = !y, w = Kl(g), E = q0(w), T = t.modifiersData.popperOffsets, S = t.rects.reference, x = t.rects.popper, L = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, V = typeof L == "number" ? { mainAxis: L, altAxis: L } : Object.assign({ mainAxis: 0, altAxis: 0 }, L), U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = { x: 0, y: 0 };
  if (T) {
    if (l) {
      var K, z = w === "y" ? nt : ot, R = w === "y" ? bt : yt, q = w === "y" ? "height" : "width", le = T[w], F = le + C[z], P = le - C[R], Z = v ? -x[q] / 2 : 0, pe = y === Gn ? S[q] : x[q], ge = y === Gn ? -x[q] : -S[q], ye = t.elements.arrow, be = v && ye ? jl(ye) : { width: 0, height: 0 }, se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Yi(), Ee = se[z], Te = se[R], de = vo(0, S[q], be[q]), Le = b ? S[q] / 2 - Z - de - Ee - V.mainAxis : pe - de - Ee - V.mainAxis, Xe = b ? -S[q] / 2 + Z + de + Te + V.mainAxis : ge + de + Te + V.mainAxis, gt = t.elements.arrow && Mo(t.elements.arrow), Ze = gt ? w === "y" ? gt.clientTop || 0 : gt.clientLeft || 0 : 0, st = (K = U == null ? void 0 : U[w]) != null ? K : 0, At = le + Le - st - Ze, Lt = le + Xe - st, it = vo(v ? ur(F, At) : F, le, v ? Ln(P, Lt) : P);
      T[w] = it, W[w] = it - le;
    }
    if (s) {
      var Mt, Vt = w === "x" ? nt : ot, Ge = w === "x" ? bt : yt, je = T[E], ut = E === "y" ? "height" : "width", B = je + C[Vt], he = je - C[Ge], Ne = [nt, ot].indexOf(g) !== -1, ct = (Mt = U == null ? void 0 : U[E]) != null ? Mt : 0, Wt = Ne ? B : je - S[ut] - x[ut] - ct + V.altAxis, jt = Ne ? je + S[ut] + x[ut] - ct - V.altAxis : he, Cn = v && Ne ? C0(Wt, je, jt) : vo(v ? Wt : B, je, v ? jt : he);
      T[E] = Cn, W[E] = Cn - je;
    }
    t.modifiersData[o] = W;
  }
}
var Y0 = { name: "preventOverflow", enabled: !0, phase: "main", fn: G0, requiresIfExists: ["offset"] };
function Q0(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function X0(e) {
  return e === xt(e) || !mt(e) ? Ul(e) : Q0(e);
}
function Z0(e) {
  var t = e.getBoundingClientRect(), n = Qn(t.width) / e.offsetWidth || 1, o = Qn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function J0(e, t, n) {
  n === void 0 && (n = !1);
  var o = mt(t), r = mt(t) && Z0(t), l = wn(t), a = Xn(e, r), s = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((Dt(t) !== "body" || Gl(l)) && (s = X0(t)), mt(t) ? (i = Xn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = ql(l))), { x: a.left + s.scrollLeft - i.x, y: a.top + s.scrollTop - i.y, width: a.width, height: a.height };
}
function eb(e) {
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
function tb(e) {
  var t = eb(e);
  return g0.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function nb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ob(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ls = { placement: "bottom", modifiers: [], strategy: "absolute" };
function as() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Yl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? ls : r;
  return function(a, s, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ls, l), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, d = [], f = !1, p = { state: u, setOptions: function(h) {
      var C = typeof h == "function" ? h(u.options) : h;
      c(), u.options = Object.assign({}, l, u.options, C), u.scrollParents = { reference: Yn(a) ? ho(a) : a.contextElement ? ho(a.contextElement) : [], popper: ho(s) };
      var g = tb(ob([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = g.filter(function(y) {
        return y.enabled;
      }), v(), p.update();
    }, forceUpdate: function() {
      if (!f) {
        var h = u.elements, C = h.reference, g = h.popper;
        if (as(C, g)) {
          u.rects = { reference: J0(C, Mo(g), u.options.strategy === "fixed"), popper: jl(g) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
            return u.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var y = 0; y < u.orderedModifiers.length; y++) {
            if (u.reset === !0) {
              u.reset = !1, y = -1;
              continue;
            }
            var b = u.orderedModifiers[y], w = b.fn, E = b.options, T = E === void 0 ? {} : E, S = b.name;
            typeof w == "function" && (u = w({ state: u, options: T, name: S, instance: p }) || u);
          }
        }
      }
    }, update: nb(function() {
      return new Promise(function(h) {
        p.forceUpdate(), h(u);
      });
    }), destroy: function() {
      c(), f = !0;
    } };
    if (!as(a, s))
      return p;
    p.setOptions(i).then(function(h) {
      !f && i.onFirstUpdate && i.onFirstUpdate(h);
    });
    function v() {
      u.orderedModifiers.forEach(function(h) {
        var C = h.name, g = h.options, y = g === void 0 ? {} : g, b = h.effect;
        if (typeof b == "function") {
          var w = b({ state: u, name: C, instance: p, options: y }), E = function() {
          };
          d.push(w || E);
        }
      });
    }
    function c() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return p;
  };
}
Yl();
var rb = [Ji, nu, Zi, qi];
Yl({ defaultModifiers: rb });
var lb = [Ji, nu, Zi, qi, K0, D0, Y0, T0, V0], ou = Yl({ defaultModifiers: lb });
const ab = (e, t) => {
  let n;
  X(() => e.value, (o) => {
    var r, l;
    o ? (n = document.activeElement, Xt(t) && ((l = (r = t.value).focus) == null || l.call(r))) : process.env.NODE_ENV === "test" ? n.focus.call(n) : n.focus();
  });
}, ru = (e) => {
  if (!e)
    return { onClick: Qt, onMousedown: Qt, onMouseup: Qt };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
};
function sb() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return wr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let Wn = [];
const ss = (e) => {
  const t = e;
  t.key === In.esc && Wn.forEach((n) => n(t));
}, ib = (e) => {
  xe(() => {
    Wn.length === 0 && document.addEventListener("keydown", ss), me && Wn.push(e);
  }), wt(() => {
    Wn = Wn.filter((t) => t !== e), Wn.length === 0 && me && document.removeEventListener("keydown", ss);
  });
};
let is;
const lu = () => {
  const e = yn("namespace", Dl), t = Vi(), n = O(() => `${e.value}-popper-container-${t.prefix}`), o = O(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, ub = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, cb = () => {
  Cl(() => {
    if (!me)
      return;
    const { id: e, selector: t } = lu();
    (process.env.NODE_ENV === "test" || !is && !document.body.querySelector(t.value)) && (is = ub(e.value));
  });
}, db = we({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), au = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = sb();
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
}, su = Symbol("elForwardRef"), fb = (e) => {
  rt(su, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, pb = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), us = k(0), Po = () => {
  const e = yn("zIndex", 2e3), t = O(() => e.value + us.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (us.value++, t.value)
  };
};
function vb(e) {
  const t = k();
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
var fe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const hb = we({
  size: {
    type: ie([Number, String])
  },
  color: {
    type: String
  }
}), gb = G({
  name: "ElIcon",
  inheritAttrs: !1
}), mb = /* @__PURE__ */ G({
  ...gb,
  props: hb,
  setup(e) {
    const t = e, n = te("icon"), o = O(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: Co(r) ? void 0 : Eo(r),
        "--color": l
      };
    });
    return (r, l) => (_(), N("i", An({
      class: m(n).b(),
      style: m(o)
    }, r.$attrs), [
      ne(r.$slots, "default")
    ], 16));
  }
});
var bb = /* @__PURE__ */ fe(mb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Me = ht(bb);
let St;
const yb = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, wb = [
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
function Cb(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: wb.map((a) => `${a}:${t.getPropertyValue(a)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function cs(e, t = 1, n) {
  var o;
  St || (St = document.createElement("textarea"), document.body.appendChild(St));
  const { paddingSize: r, borderSize: l, boxSizing: a, contextStyle: s } = Cb(e);
  St.setAttribute("style", `${s};${yb}`), St.value = e.value || e.placeholder || "";
  let i = St.scrollHeight;
  const u = {};
  a === "border-box" ? i = i + l : a === "content-box" && (i = i - r), St.value = "";
  const d = St.scrollHeight - r;
  if (Ae(t)) {
    let f = d * t;
    a === "border-box" && (f = f + r + l), i = Math.max(f, i), u.minHeight = `${f}px`;
  }
  if (Ae(n)) {
    let f = d * n;
    a === "border-box" && (f = f + r + l), i = Math.min(f, i);
  }
  return u.height = `${i}px`, (o = St.parentNode) == null || o.removeChild(St), St = void 0, u;
}
const Sb = we({
  id: {
    type: String,
    default: void 0
  },
  size: Ao,
  disabled: Boolean,
  modelValue: {
    type: ie([
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
    type: ie([Boolean, Object]),
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
    type: $t
  },
  prefixIcon: {
    type: $t
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
    type: ie([Object, Array, String]),
    default: () => _r({})
  }
}), Eb = {
  [Qe]: (e) => Ve(e),
  input: (e) => Ve(e),
  change: (e) => Ve(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, _b = ["role"], Tb = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], $b = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], kb = G({
  name: "ElInput",
  inheritAttrs: !1
}), Ob = /* @__PURE__ */ G({
  ...kb,
  props: Sb,
  emits: Eb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = lc(), l = dr(), a = O(() => {
      const B = {};
      return o.containerRole === "combobox" && (B["aria-haspopup"] = r["aria-haspopup"], B["aria-owns"] = r["aria-owns"], B["aria-expanded"] = r["aria-expanded"]), B;
    }), s = O(() => [
      o.type === "textarea" ? C.b() : h.b(),
      h.m(v.value),
      h.is("disabled", c.value),
      h.is("exceed", pe.value),
      {
        [h.b("group")]: l.prepend || l.append,
        [h.bm("group", "append")]: l.append,
        [h.bm("group", "prepend")]: l.prepend,
        [h.m("prefix")]: l.prefix || o.prefixIcon,
        [h.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [h.bm("suffix", "password-clear")]: le.value && F.value
      },
      r.class
    ]), i = O(() => [
      h.e("wrapper"),
      h.is("focus", b.value)
    ]), u = Im({
      excludeKeys: O(() => Object.keys(a.value))
    }), { form: d, formItem: f } = ro(), { inputId: p } = Hl(o, {
      formItemContext: f
    }), v = hn(), c = Tr(), h = te("input"), C = te("textarea"), g = fo(), y = fo(), b = k(!1), w = k(!1), E = k(!1), T = k(!1), S = k(), x = fo(o.inputStyle), L = O(() => g.value || y.value), V = O(() => {
      var B;
      return (B = d == null ? void 0 : d.statusIcon) != null ? B : !1;
    }), U = O(() => (f == null ? void 0 : f.validateState) || ""), W = O(() => U.value && xm[U.value]), K = O(() => T.value ? Sm : jg), z = O(() => [
      r.style,
      o.inputStyle
    ]), R = O(() => [
      o.inputStyle,
      x.value,
      { resize: o.resize }
    ]), q = O(() => yr(o.modelValue) ? "" : String(o.modelValue)), le = O(() => o.clearable && !c.value && !o.readonly && !!q.value && (b.value || w.value)), F = O(() => o.showPassword && !c.value && !o.readonly && !!q.value && (!!q.value || b.value)), P = O(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !c.value && !o.readonly && !o.showPassword), Z = O(() => Array.from(q.value).length), pe = O(() => !!P.value && Z.value > Number(u.value.maxlength)), ge = O(() => !!l.suffix || !!o.suffixIcon || le.value || o.showPassword || P.value || !!U.value && V.value), [ye, be] = vb(g);
    Nn(y, (B) => {
      if (!P.value || o.resize !== "both")
        return;
      const he = B[0], { width: Ne } = he.contentRect;
      S.value = {
        right: `calc(100% - ${Ne + 15 + 6}px)`
      };
    });
    const se = () => {
      const { type: B, autosize: he } = o;
      if (!(!me || B !== "textarea"))
        if (he) {
          const Ne = at(he) ? he.minRows : void 0, ct = at(he) ? he.maxRows : void 0;
          x.value = {
            ...cs(y.value, Ne, ct)
          };
        } else
          x.value = {
            minHeight: cs(y.value).minHeight
          };
    }, Ee = () => {
      const B = L.value;
      !B || B.value === q.value || (B.value = q.value);
    }, Te = async (B) => {
      ye();
      let { value: he } = B.target;
      if (o.formatter && (he = o.parser ? o.parser(he) : he, he = o.formatter(he)), !E.value) {
        if (he === q.value) {
          Ee();
          return;
        }
        n(Qe, he), n("input", he), await ae(), Ee(), be();
      }
    }, de = (B) => {
      n("change", B.target.value);
    }, Le = (B) => {
      n("compositionstart", B), E.value = !0;
    }, Xe = (B) => {
      var he;
      n("compositionupdate", B);
      const Ne = (he = B.target) == null ? void 0 : he.value, ct = Ne[Ne.length - 1] || "";
      E.value = !Ni(ct);
    }, gt = (B) => {
      n("compositionend", B), E.value && (E.value = !1, Te(B));
    }, Ze = () => {
      T.value = !T.value, st();
    }, st = async () => {
      var B;
      await ae(), (B = L.value) == null || B.focus();
    }, At = () => {
      var B;
      return (B = L.value) == null ? void 0 : B.blur();
    }, Lt = (B) => {
      b.value = !0, n("focus", B);
    }, it = (B) => {
      var he;
      b.value = !1, n("blur", B), o.validateEvent && ((he = f == null ? void 0 : f.validate) == null || he.call(f, "blur").catch((Ne) => Pe(Ne)));
    }, Mt = (B) => {
      w.value = !1, n("mouseleave", B);
    }, Vt = (B) => {
      w.value = !0, n("mouseenter", B);
    }, Ge = (B) => {
      n("keydown", B);
    }, je = () => {
      var B;
      (B = L.value) == null || B.select();
    }, ut = () => {
      n(Qe, ""), n("change", ""), n("clear"), n("input", "");
    };
    return X(() => o.modelValue, () => {
      var B;
      ae(() => se()), o.validateEvent && ((B = f == null ? void 0 : f.validate) == null || B.call(f, "change").catch((he) => Pe(he)));
    }), X(q, () => Ee()), X(() => o.type, async () => {
      await ae(), Ee(), se();
    }), xe(() => {
      !o.formatter && o.parser && Pe("ElInput", "If you set the parser, you also need to set the formatter."), Ee(), ae(se);
    }), t({
      input: g,
      textarea: y,
      ref: L,
      textareaStyle: R,
      autosize: Rt(o, "autosize"),
      focus: st,
      blur: At,
      select: je,
      clear: ut,
      resizeTextarea: se
    }), (B, he) => Ce((_(), N("div", An(m(a), {
      class: m(s),
      style: m(z),
      role: B.containerRole,
      onMouseenter: Vt,
      onMouseleave: Mt
    }), [
      D(" input "),
      B.type !== "textarea" ? (_(), N(Be, { key: 0 }, [
        D(" prepend slot "),
        B.$slots.prepend ? (_(), N("div", {
          key: 0,
          class: A(m(h).be("group", "prepend"))
        }, [
          ne(B.$slots, "prepend")
        ], 2)) : D("v-if", !0),
        I("div", {
          class: A(m(i))
        }, [
          D(" prefix slot "),
          B.$slots.prefix || B.prefixIcon ? (_(), N("span", {
            key: 0,
            class: A(m(h).e("prefix"))
          }, [
            I("span", {
              class: A(m(h).e("prefix-inner")),
              onClick: st
            }, [
              ne(B.$slots, "prefix"),
              B.prefixIcon ? (_(), H(m(Me), {
                key: 0,
                class: A(m(h).e("icon"))
              }, {
                default: j(() => [
                  (_(), H(Re(B.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : D("v-if", !0)
            ], 2)
          ], 2)) : D("v-if", !0),
          I("input", An({
            id: m(p),
            ref_key: "input",
            ref: g,
            class: m(h).e("inner")
          }, m(u), {
            type: B.showPassword ? T.value ? "text" : "password" : B.type,
            disabled: m(c),
            formatter: B.formatter,
            parser: B.parser,
            readonly: B.readonly,
            autocomplete: B.autocomplete,
            tabindex: B.tabindex,
            "aria-label": B.label,
            placeholder: B.placeholder,
            style: B.inputStyle,
            form: o.form,
            onCompositionstart: Le,
            onCompositionupdate: Xe,
            onCompositionend: gt,
            onInput: Te,
            onFocus: Lt,
            onBlur: it,
            onChange: de,
            onKeydown: Ge
          }), null, 16, Tb),
          D(" suffix slot "),
          m(ge) ? (_(), N("span", {
            key: 1,
            class: A(m(h).e("suffix"))
          }, [
            I("span", {
              class: A(m(h).e("suffix-inner")),
              onClick: st
            }, [
              !m(le) || !m(F) || !m(P) ? (_(), N(Be, { key: 0 }, [
                ne(B.$slots, "suffix"),
                B.suffixIcon ? (_(), H(m(Me), {
                  key: 0,
                  class: A(m(h).e("icon"))
                }, {
                  default: j(() => [
                    (_(), H(Re(B.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : D("v-if", !0)
              ], 64)) : D("v-if", !0),
              m(le) ? (_(), H(m(Me), {
                key: 1,
                class: A([m(h).e("icon"), m(h).e("clear")]),
                onMousedown: Ke(m(Qt), ["prevent"]),
                onClick: ut
              }, {
                default: j(() => [
                  oe(m(Rl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : D("v-if", !0),
              m(F) ? (_(), H(m(Me), {
                key: 2,
                class: A([m(h).e("icon"), m(h).e("password")]),
                onClick: Ze
              }, {
                default: j(() => [
                  (_(), H(Re(m(K))))
                ]),
                _: 1
              }, 8, ["class"])) : D("v-if", !0),
              m(P) ? (_(), N("span", {
                key: 3,
                class: A(m(h).e("count"))
              }, [
                I("span", {
                  class: A(m(h).e("count-inner"))
                }, ue(m(Z)) + " / " + ue(m(u).maxlength), 3)
              ], 2)) : D("v-if", !0),
              m(U) && m(W) && m(V) ? (_(), H(m(Me), {
                key: 4,
                class: A([
                  m(h).e("icon"),
                  m(h).e("validateIcon"),
                  m(h).is("loading", m(U) === "validating")
                ])
              }, {
                default: j(() => [
                  (_(), H(Re(m(W))))
                ]),
                _: 1
              }, 8, ["class"])) : D("v-if", !0)
            ], 2)
          ], 2)) : D("v-if", !0)
        ], 2),
        D(" append slot "),
        B.$slots.append ? (_(), N("div", {
          key: 1,
          class: A(m(h).be("group", "append"))
        }, [
          ne(B.$slots, "append")
        ], 2)) : D("v-if", !0)
      ], 64)) : (_(), N(Be, { key: 1 }, [
        D(" textarea "),
        I("textarea", An({
          id: m(p),
          ref_key: "textarea",
          ref: y,
          class: m(C).e("inner")
        }, m(u), {
          tabindex: B.tabindex,
          disabled: m(c),
          readonly: B.readonly,
          autocomplete: B.autocomplete,
          style: m(R),
          "aria-label": B.label,
          placeholder: B.placeholder,
          form: o.form,
          onCompositionstart: Le,
          onCompositionupdate: Xe,
          onCompositionend: gt,
          onInput: Te,
          onFocus: Lt,
          onBlur: it,
          onChange: de,
          onKeydown: Ge
        }), null, 16, $b),
        m(P) ? (_(), N("span", {
          key: 0,
          style: _e(S.value),
          class: A(m(h).e("count"))
        }, ue(m(Z)) + " / " + ue(m(u).maxlength), 7)) : D("v-if", !0)
      ], 64))
    ], 16, _b)), [
      [qe, B.type !== "hidden"]
    ]);
  }
});
var xb = /* @__PURE__ */ fe(Ob, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const xr = ht(xb), jn = 4, Ab = {
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
}, Lb = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Mb = we({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Pb = "Thumb", Nb = /* @__PURE__ */ G({
  __name: "thumb",
  props: Mb,
  setup(e) {
    const t = e, n = ve(zi), o = te("scrollbar");
    n || Cr(Pb, "can not inject scrollbar context");
    const r = k(), l = k(), a = k({}), s = k(!1);
    let i = !1, u = !1, d = me ? document.onselectstart : null;
    const f = O(() => Ab[t.vertical ? "vertical" : "horizontal"]), p = O(() => Lb({
      size: t.size,
      move: t.move,
      bar: f.value
    })), v = O(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / l.value[f.value.offset]), c = (T) => {
      var S;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (S = window.getSelection()) == null || S.removeAllRanges(), C(T);
      const x = T.currentTarget;
      x && (a.value[f.value.axis] = x[f.value.offset] - (T[f.value.client] - x.getBoundingClientRect()[f.value.direction]));
    }, h = (T) => {
      if (!l.value || !r.value || !n.wrapElement)
        return;
      const S = Math.abs(T.target.getBoundingClientRect()[f.value.direction] - T[f.value.client]), x = l.value[f.value.offset] / 2, L = (S - x) * 100 * v.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = L * n.wrapElement[f.value.scrollSize] / 100;
    }, C = (T) => {
      T.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", y), d = document.onselectstart, document.onselectstart = () => !1;
    }, g = (T) => {
      if (!r.value || !l.value || i === !1)
        return;
      const S = a.value[f.value.axis];
      if (!S)
        return;
      const x = (r.value.getBoundingClientRect()[f.value.direction] - T[f.value.client]) * -1, L = l.value[f.value.offset] - S, V = (x - L) * 100 * v.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = V * n.wrapElement[f.value.scrollSize] / 100;
    }, y = () => {
      i = !1, a.value[f.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", y), E(), u && (s.value = !1);
    }, b = () => {
      u = !1, s.value = !!t.size;
    }, w = () => {
      u = !0, s.value = i;
    };
    wt(() => {
      E(), document.removeEventListener("mouseup", y);
    });
    const E = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Nt(Rt(n, "scrollbarElement"), "mousemove", b), Nt(Rt(n, "scrollbarElement"), "mouseleave", w), (T, S) => (_(), H(mn, {
      name: m(o).b("fade"),
      persisted: ""
    }, {
      default: j(() => [
        Ce(I("div", {
          ref_key: "instance",
          ref: r,
          class: A([m(o).e("bar"), m(o).is(m(f).key)]),
          onMousedown: h
        }, [
          I("div", {
            ref_key: "thumb",
            ref: l,
            class: A(m(o).e("thumb")),
            style: _e(m(p)),
            onMousedown: c
          }, null, 38)
        ], 34), [
          [qe, T.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ds = /* @__PURE__ */ fe(Nb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const Ib = we({
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
}), Rb = /* @__PURE__ */ G({
  __name: "bar",
  props: Ib,
  setup(e, { expose: t }) {
    const n = e, o = k(0), r = k(0);
    return t({
      handleScroll: (a) => {
        if (a) {
          const s = a.offsetHeight - jn, i = a.offsetWidth - jn;
          r.value = a.scrollTop * 100 / s * n.ratioY, o.value = a.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (a, s) => (_(), N(Be, null, [
      oe(ds, {
        move: o.value,
        ratio: a.ratioX,
        size: a.width,
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      oe(ds, {
        move: r.value,
        ratio: a.ratioY,
        size: a.height,
        vertical: "",
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Bb = /* @__PURE__ */ fe(Rb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const zb = we({
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
    type: ie([String, Object, Array]),
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
}), Fb = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ae)
}, ll = "ElScrollbar", Db = G({
  name: ll
}), Hb = /* @__PURE__ */ G({
  ...Db,
  props: zb,
  emits: Fb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = te("scrollbar");
    let l, a;
    const s = k(), i = k(), u = k(), d = k("0"), f = k("0"), p = k(), v = k(1), c = k(1), h = O(() => {
      const S = {};
      return o.height && (S.height = Eo(o.height)), o.maxHeight && (S.maxHeight = Eo(o.maxHeight)), [o.wrapStyle, S];
    }), C = O(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), g = O(() => [r.e("view"), o.viewClass]), y = () => {
      var S;
      i.value && ((S = p.value) == null || S.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function b(S, x) {
      at(S) ? i.value.scrollTo(S) : Ae(S) && Ae(x) && i.value.scrollTo(S, x);
    }
    const w = (S) => {
      if (!Ae(S)) {
        Pe(ll, "value must be a number");
        return;
      }
      i.value.scrollTop = S;
    }, E = (S) => {
      if (!Ae(S)) {
        Pe(ll, "value must be a number");
        return;
      }
      i.value.scrollLeft = S;
    }, T = () => {
      if (!i.value)
        return;
      const S = i.value.offsetHeight - jn, x = i.value.offsetWidth - jn, L = S ** 2 / i.value.scrollHeight, V = x ** 2 / i.value.scrollWidth, U = Math.max(L, o.minSize), W = Math.max(V, o.minSize);
      v.value = L / (S - L) / (U / (S - U)), c.value = V / (x - V) / (W / (x - W)), f.value = U + jn < S ? `${U}px` : "", d.value = W + jn < x ? `${W}px` : "";
    };
    return X(() => o.noresize, (S) => {
      S ? (l == null || l(), a == null || a()) : ({ stop: l } = Nn(u, T), a = Nt("resize", T));
    }, { immediate: !0 }), X(() => [o.maxHeight, o.height], () => {
      o.native || ae(() => {
        var S;
        T(), i.value && ((S = p.value) == null || S.handleScroll(i.value));
      });
    }), rt(zi, bn({
      scrollbarElement: s,
      wrapElement: i
    })), xe(() => {
      o.native || ae(() => {
        T();
      });
    }), Ks(() => T()), t({
      wrapRef: i,
      update: T,
      scrollTo: b,
      setScrollTop: w,
      setScrollLeft: E,
      handleScroll: y
    }), (S, x) => (_(), N("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: A(m(r).b())
    }, [
      I("div", {
        ref_key: "wrapRef",
        ref: i,
        class: A(m(C)),
        style: _e(m(h)),
        onScroll: y
      }, [
        (_(), H(Re(S.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: A(m(g)),
          style: _e(S.viewStyle)
        }, {
          default: j(() => [
            ne(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      S.native ? D("v-if", !0) : (_(), H(Bb, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: f.value,
        width: d.value,
        always: S.always,
        "ratio-x": c.value,
        "ratio-y": v.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Vb = /* @__PURE__ */ fe(Hb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const Ql = ht(Vb), Wb = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], iu = we({
  role: {
    type: String,
    values: Wb,
    default: "tooltip"
  }
}), jb = G({
  name: "ElPopperRoot",
  inheritAttrs: !1
}), Kb = /* @__PURE__ */ G({
  ...jb,
  props: iu,
  setup(e, { expose: t }) {
    const n = e, o = k(), r = k(), l = k(), a = k(), s = O(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: a,
      role: s
    };
    return t(i), rt(zl, i), (u, d) => ne(u.$slots, "default");
  }
});
var Ub = /* @__PURE__ */ fe(Kb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const uu = we({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), qb = G({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Gb = /* @__PURE__ */ G({
  ...qb,
  props: uu,
  setup(e, { expose: t }) {
    const n = e, o = te("popper"), { arrowOffset: r, arrowRef: l } = ve(Fi, void 0);
    return X(() => n.arrowOffset, (a) => {
      r.value = a;
    }), wt(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (a, s) => (_(), N("span", {
      ref_key: "arrowRef",
      ref: l,
      class: A(m(o).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var Yb = /* @__PURE__ */ fe(Gb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const zr = "ElOnlyChild", Qb = G({
  name: zr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ve(su), l = pb((o = r == null ? void 0 : r.setForwardRef) != null ? o : Qt);
    return () => {
      var a;
      const s = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return Pe(zr, "requires exact only one valid child."), null;
      const i = cu(s);
      return i ? Ce(ac(i, n), [[l]]) : (Pe(zr, "no valid child node found"), null);
    };
  }
});
function cu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (at(n))
      switch (n.type) {
        case qs:
          continue;
        case Us:
        case "svg":
          return fs(n);
        case Be:
          return cu(n.children);
        default:
          return n;
      }
    return fs(n);
  }
  return null;
}
function fs(e) {
  const t = te("only-child");
  return oe("span", {
    class: t.e("content")
  }, [e]);
}
const du = we({
  virtualRef: {
    type: ie(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: ie(Function)
  },
  onMouseleave: {
    type: ie(Function)
  },
  onClick: {
    type: ie(Function)
  },
  onKeydown: {
    type: ie(Function)
  },
  onFocus: {
    type: ie(Function)
  },
  onBlur: {
    type: ie(Function)
  },
  onContextmenu: {
    type: ie(Function)
  },
  id: String,
  open: Boolean
}), Xb = G({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Zb = /* @__PURE__ */ G({
  ...Xb,
  props: du,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ve(zl, void 0);
    fb(r);
    const l = O(() => s.value ? n.id : void 0), a = O(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = O(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = O(() => s.value ? `${n.open}` : void 0);
    let u;
    return xe(() => {
      X(() => n.virtualRef, (d) => {
        d && (r.value = sn(d));
      }, {
        immediate: !0
      }), X(r, (d, f) => {
        u == null || u(), u = void 0, pn(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((p) => {
          var v;
          const c = n[p];
          c && (d.addEventListener(p.slice(2).toLowerCase(), c), (v = f == null ? void 0 : f.removeEventListener) == null || v.call(f, p.slice(2).toLowerCase(), c));
        }), u = X([l, a, s, i], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, c) => {
            yr(p[c]) ? d.removeAttribute(v) : d.setAttribute(v, p[c]);
          });
        }, { immediate: !0 })), pn(f) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => f.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), wt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (d, f) => d.virtualTriggering ? D("v-if", !0) : (_(), H(m(Qb), An({ key: 0 }, d.$attrs, {
      "aria-controls": m(l),
      "aria-describedby": m(a),
      "aria-expanded": m(i),
      "aria-haspopup": m(s)
    }), {
      default: j(() => [
        ne(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Jb = /* @__PURE__ */ fe(Zb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Fr = "focus-trap.focus-after-trapped", Dr = "focus-trap.focus-after-released", ey = "focus-trap.focusout-prevented", ps = {
  cancelable: !0,
  bubbles: !1
}, ty = {
  cancelable: !0,
  bubbles: !1
}, vs = "focusAfterTrapped", hs = "focusAfterReleased", ny = Symbol("elFocusTrap"), Xl = k(), Ar = k(0), Zl = k(0);
let Bo = 0;
const fu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, gs = (e, t) => {
  for (const n of e)
    if (!oy(n, t))
      return n;
}, oy = (e, t) => {
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
}, ry = (e) => {
  const t = fu(e), n = gs(t, e), o = gs(t.reverse(), e);
  return [n, o];
}, ly = (e) => e instanceof HTMLInputElement && "select" in e, rn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Zl.value = window.performance.now(), e !== n && ly(e) && t && e.select();
  }
};
function ms(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const ay = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = ms(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = ms(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, sy = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (rn(o, t), document.activeElement !== n)
      return;
}, bs = ay(), iy = () => Ar.value > Zl.value, zo = () => {
  Xl.value = "pointer", Ar.value = window.performance.now();
}, ys = () => {
  Xl.value = "keyboard", Ar.value = window.performance.now();
}, uy = () => (xe(() => {
  Bo === 0 && (document.addEventListener("mousedown", zo), document.addEventListener("touchstart", zo), document.addEventListener("keydown", ys)), Bo++;
}), wt(() => {
  Bo--, Bo <= 0 && (document.removeEventListener("mousedown", zo), document.removeEventListener("touchstart", zo), document.removeEventListener("keydown", ys));
}), {
  focusReason: Xl,
  lastUserFocusTimestamp: Ar,
  lastAutomatedFocusTimestamp: Zl
}), Fo = (e) => new CustomEvent(ey, {
  ...ty,
  detail: e
}), cy = G({
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
    vs,
    hs,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = k();
    let o, r;
    const { focusReason: l } = uy();
    ib((c) => {
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
      const { key: h, altKey: C, ctrlKey: g, metaKey: y, currentTarget: b, shiftKey: w } = c, { loop: E } = e, T = h === In.tab && !C && !g && !y, S = document.activeElement;
      if (T && S) {
        const x = b, [L, V] = ry(x);
        if (L && V) {
          if (!w && S === V) {
            const W = Fo({
              focusReason: l.value
            });
            t("focusout-prevented", W), W.defaultPrevented || (c.preventDefault(), E && rn(L, !0));
          } else if (w && [L, x].includes(S)) {
            const W = Fo({
              focusReason: l.value
            });
            t("focusout-prevented", W), W.defaultPrevented || (c.preventDefault(), E && rn(V, !0));
          }
        } else if (S === x) {
          const W = Fo({
            focusReason: l.value
          });
          t("focusout-prevented", W), W.defaultPrevented || c.preventDefault();
        }
      }
    };
    rt(ny, {
      focusTrapRef: n,
      onKeydown: s
    }), X(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), X([n], ([c], [h]) => {
      c && (c.addEventListener("keydown", s), c.addEventListener("focusin", d), c.addEventListener("focusout", f)), h && (h.removeEventListener("keydown", s), h.removeEventListener("focusin", d), h.removeEventListener("focusout", f));
    });
    const i = (c) => {
      t(vs, c);
    }, u = (c) => t(hs, c), d = (c) => {
      const h = m(n);
      if (!h)
        return;
      const C = c.target, g = c.relatedTarget, y = C && h.contains(C);
      e.trapped || g && h.contains(g) || (o = g), y && t("focusin", c), !a.paused && e.trapped && (y ? r = C : rn(r, !0));
    }, f = (c) => {
      const h = m(n);
      if (!(a.paused || !h))
        if (e.trapped) {
          const C = c.relatedTarget;
          !yr(C) && !h.contains(C) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const g = Fo({
                focusReason: l.value
              });
              t("focusout-prevented", g), g.defaultPrevented || rn(r, !0);
            }
          }, 0);
        } else {
          const C = c.target;
          C && h.contains(C) || t("focusout", c);
        }
    };
    async function p() {
      await ae();
      const c = m(n);
      if (c) {
        bs.push(a);
        const h = c.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !c.contains(h)) {
          const g = new Event(Fr, ps);
          c.addEventListener(Fr, i), c.dispatchEvent(g), g.defaultPrevented || ae(() => {
            let y = e.focusStartEl;
            Ve(y) || (rn(y), document.activeElement !== y && (y = "first")), y === "first" && sy(fu(c), !0), (document.activeElement === h || y === "container") && rn(c);
          });
        }
      }
    }
    function v() {
      const c = m(n);
      if (c) {
        c.removeEventListener(Fr, i);
        const h = new CustomEvent(Dr, {
          ...ps,
          detail: {
            focusReason: l.value
          }
        });
        c.addEventListener(Dr, u), c.dispatchEvent(h), !h.defaultPrevented && (l.value == "keyboard" || !iy()) && rn(o ?? document.body), c.removeEventListener(Dr, i), bs.remove(a);
      }
    }
    return xe(() => {
      e.trapped && p(), X(() => e.trapped, (c) => {
        c ? p() : v();
      });
    }), wt(() => {
      e.trapped && v();
    }), {
      onKeydown: s
    };
  }
});
function dy(e, t, n, o, r, l) {
  return ne(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var pu = /* @__PURE__ */ fe(cy, [["render", dy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const fy = ["fixed", "absolute"], py = we({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: ie(Array),
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
    values: kr,
    default: "bottom"
  },
  popperOptions: {
    type: ie(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: fy,
    default: "absolute"
  }
}), vu = we({
  ...py,
  id: String,
  style: {
    type: ie([String, Array, Object])
  },
  className: {
    type: ie([String, Array, Object])
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
    type: ie([String, Array, Object])
  },
  popperStyle: {
    type: ie([String, Array, Object])
  },
  referenceEl: {
    type: ie(Object)
  },
  triggerTargetEl: {
    type: ie(Object)
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
}), vy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, ws = (e, t) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: gy(e)
  };
  return my(l, t), by(l, r == null ? void 0 : r.modifiers), l;
}, hy = (e) => {
  if (me)
    return sn(e);
};
function gy(e) {
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
function my(e, { arrowEl: t, arrowOffset: n }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: t,
      padding: n ?? 5
    }
  });
}
function by(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const yy = G({
  name: "ElPopperContent"
}), wy = /* @__PURE__ */ G({
  ...yy,
  props: vu,
  emits: vy,
  setup(e, { expose: t, emit: n }) {
    const o = e, { popperInstanceRef: r, contentRef: l, triggerRef: a, role: s } = ve(zl, void 0), i = ve(ar, void 0), { nextZIndex: u } = Po(), d = te("popper"), f = k(), p = k("first"), v = k(), c = k();
    rt(Fi, {
      arrowRef: v,
      arrowOffset: c
    }), i && (i.addInputId || i.removeInputId) && rt(ar, {
      ...i,
      addInputId: Qt,
      removeInputId: Qt
    });
    const h = k(o.zIndex || u()), C = k(!1);
    let g;
    const y = O(() => hy(o.referenceEl) || m(a)), b = O(() => [{ zIndex: m(h) }, o.popperStyle]), w = O(() => [
      d.b(),
      d.is("pure", o.pure),
      d.is(o.effect),
      o.popperClass
    ]), E = O(() => s && s.value === "dialog" ? "false" : void 0), T = ({
      referenceEl: z,
      popperContentEl: R,
      arrowEl: q
    }) => {
      const le = ws(o, {
        arrowEl: q,
        arrowOffset: m(c)
      });
      return ou(z, R, le);
    }, S = (z = !0) => {
      var R;
      (R = m(r)) == null || R.update(), z && (h.value = o.zIndex || u());
    }, x = () => {
      var z, R;
      const q = { name: "eventListeners", enabled: o.visible };
      (R = (z = m(r)) == null ? void 0 : z.setOptions) == null || R.call(z, (le) => ({
        ...le,
        modifiers: [...le.modifiers || [], q]
      })), S(!1), o.visible && o.focusOnShow ? C.value = !0 : o.visible === !1 && (C.value = !1);
    }, L = () => {
      n("focus");
    }, V = (z) => {
      var R;
      ((R = z.detail) == null ? void 0 : R.focusReason) !== "pointer" && (p.value = "first", n("blur"));
    }, U = (z) => {
      o.visible && !C.value && (z.target && (p.value = z.target), C.value = !0);
    }, W = (z) => {
      o.trapping || (z.detail.focusReason === "pointer" && z.preventDefault(), C.value = !1);
    }, K = () => {
      C.value = !1, n("close");
    };
    return xe(() => {
      let z;
      X(y, (R) => {
        var q;
        z == null || z();
        const le = m(r);
        if ((q = le == null ? void 0 : le.destroy) == null || q.call(le), R) {
          const F = m(f);
          l.value = F, r.value = T({
            referenceEl: R,
            popperContentEl: F,
            arrowEl: m(v)
          }), z = X(() => R.getBoundingClientRect(), () => S(), {
            immediate: !0
          });
        } else
          r.value = void 0;
      }, {
        immediate: !0
      }), X(() => o.triggerTargetEl, (R, q) => {
        g == null || g(), g = void 0;
        const le = m(R || f.value), F = m(q || f.value);
        pn(le) && (g = X([s, () => o.ariaLabel, E, () => o.id], (P) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((Z, pe) => {
            yr(P[pe]) ? le.removeAttribute(Z) : le.setAttribute(Z, P[pe]);
          });
        }, { immediate: !0 })), F !== le && pn(F) && ["role", "aria-label", "aria-modal", "id"].forEach((P) => {
          F.removeAttribute(P);
        });
      }, { immediate: !0 }), X(() => o.visible, x, { immediate: !0 }), X(() => ws(o, {
        arrowEl: m(v),
        arrowOffset: m(c)
      }), (R) => {
        var q;
        return (q = r.value) == null ? void 0 : q.setOptions(R);
      });
    }), wt(() => {
      g == null || g(), g = void 0;
    }), t({
      popperContentRef: f,
      popperInstanceRef: r,
      updatePopper: S,
      contentStyle: b
    }), (z, R) => (_(), N("div", {
      ref_key: "popperContentRef",
      ref: f,
      style: _e(m(b)),
      class: A(m(w)),
      tabindex: "-1",
      onMouseenter: R[0] || (R[0] = (q) => z.$emit("mouseenter", q)),
      onMouseleave: R[1] || (R[1] = (q) => z.$emit("mouseleave", q))
    }, [
      oe(m(pu), {
        trapped: C.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": f.value,
        "focus-start-el": p.value,
        onFocusAfterTrapped: L,
        onFocusAfterReleased: V,
        onFocusin: U,
        onFocusoutPrevented: W,
        onReleaseRequested: K
      }, {
        default: j(() => [
          ne(z.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var Cy = /* @__PURE__ */ fe(wy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const Sy = ht(Ub), Ey = te("tooltip"), Jl = we({
  ...db,
  ...vu,
  appendTo: {
    type: ie([String, Object])
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
    type: ie(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${Ey.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), hu = we({
  ...du,
  disabled: Boolean,
  trigger: {
    type: ie([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ie(Array),
    default: () => [In.enter, In.space]
  }
}), {
  useModelToggleProps: _y,
  useModelToggleEmits: Ty,
  useModelToggle: $y
} = r0("visible"), ky = we({
  ...iu,
  ..._y,
  ...Jl,
  ...hu,
  ...uu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Oy = [
  ...Ty,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], xy = (e, t) => fn(e) ? e.includes(t) : e === t, Hn = (e, t, n) => (o) => {
  xy(m(e), t) && n(o);
}, Ay = G({
  name: "ElTooltipTrigger"
}), Ly = /* @__PURE__ */ G({
  ...Ay,
  props: hu,
  setup(e, { expose: t }) {
    const n = e, o = te("tooltip"), { controlled: r, id: l, open: a, onOpen: s, onClose: i, onToggle: u } = ve(Fl, void 0), d = k(null), f = () => {
      if (m(r) || n.disabled)
        return !0;
    }, p = Rt(n, "trigger"), v = qt(f, Hn(p, "hover", s)), c = qt(f, Hn(p, "hover", i)), h = qt(f, Hn(p, "click", (w) => {
      w.button === 0 && u(w);
    })), C = qt(f, Hn(p, "focus", s)), g = qt(f, Hn(p, "focus", i)), y = qt(f, Hn(p, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), b = qt(f, (w) => {
      const { code: E } = w;
      n.triggerKeys.includes(E) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: d
    }), (w, E) => (_(), H(m(Jb), {
      id: m(l),
      "virtual-ref": w.virtualRef,
      open: m(a),
      "virtual-triggering": w.virtualTriggering,
      class: A(m(o).e("trigger")),
      onBlur: m(g),
      onClick: m(h),
      onContextmenu: m(y),
      onFocus: m(C),
      onMouseenter: m(v),
      onMouseleave: m(c),
      onKeydown: m(b)
    }, {
      default: j(() => [
        ne(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var My = /* @__PURE__ */ fe(Ly, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const Py = G({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Ny = /* @__PURE__ */ G({
  ...Py,
  props: Jl,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = lu(), r = k(null), l = k(!1), {
      controlled: a,
      id: s,
      open: i,
      trigger: u,
      onClose: d,
      onOpen: f,
      onShow: p,
      onHide: v,
      onBeforeShow: c,
      onBeforeHide: h
    } = ve(Fl, void 0), C = O(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    wt(() => {
      l.value = !0;
    });
    const g = O(() => m(C) ? !0 : m(i)), y = O(() => n.disabled ? !1 : m(i)), b = O(() => n.appendTo || o.value), w = O(() => {
      var R;
      return (R = n.style) != null ? R : {};
    }), E = O(() => !m(i)), T = () => {
      v();
    }, S = () => {
      if (m(a))
        return !0;
    }, x = qt(S, () => {
      n.enterable && m(u) === "hover" && f();
    }), L = qt(S, () => {
      m(u) === "hover" && d();
    }), V = () => {
      var R, q;
      (q = (R = r.value) == null ? void 0 : R.updatePopper) == null || q.call(R), c == null || c();
    }, U = () => {
      h == null || h();
    }, W = () => {
      p(), z = ih(O(() => {
        var R;
        return (R = r.value) == null ? void 0 : R.popperContentRef;
      }), () => {
        if (m(a))
          return;
        m(u) !== "hover" && d();
      });
    }, K = () => {
      n.virtualTriggering || d();
    };
    let z;
    return X(() => m(i), (R) => {
      R || z == null || z();
    }, {
      flush: "post"
    }), X(() => n.content, () => {
      var R, q;
      (q = (R = r.value) == null ? void 0 : R.updatePopper) == null || q.call(R);
    }), t({
      contentRef: r
    }), (R, q) => (_(), H(sc, {
      disabled: !R.teleported,
      to: m(b)
    }, [
      oe(mn, {
        name: R.transition,
        onAfterLeave: T,
        onBeforeEnter: V,
        onAfterEnter: W,
        onBeforeLeave: U
      }, {
        default: j(() => [
          m(g) ? Ce((_(), H(m(Cy), An({
            key: 0,
            id: m(s),
            ref_key: "contentRef",
            ref: r
          }, R.$attrs, {
            "aria-label": R.ariaLabel,
            "aria-hidden": m(E),
            "boundaries-padding": R.boundariesPadding,
            "fallback-placements": R.fallbackPlacements,
            "gpu-acceleration": R.gpuAcceleration,
            offset: R.offset,
            placement: R.placement,
            "popper-options": R.popperOptions,
            strategy: R.strategy,
            effect: R.effect,
            enterable: R.enterable,
            pure: R.pure,
            "popper-class": R.popperClass,
            "popper-style": [R.popperStyle, m(w)],
            "reference-el": R.referenceEl,
            "trigger-target-el": R.triggerTargetEl,
            visible: m(y),
            "z-index": R.zIndex,
            onMouseenter: m(x),
            onMouseleave: m(L),
            onBlur: K,
            onClose: m(d)
          }), {
            default: j(() => [
              l.value ? D("v-if", !0) : ne(R.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [qe, m(y)]
          ]) : D("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Iy = /* @__PURE__ */ fe(Ny, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const Ry = ["innerHTML"], By = { key: 1 }, zy = G({
  name: "ElTooltip"
}), Fy = /* @__PURE__ */ G({
  ...zy,
  props: ky,
  emits: Oy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    cb();
    const r = ir(), l = k(), a = k(), s = () => {
      var g;
      const y = m(l);
      y && ((g = y.popperInstanceRef) == null || g.update());
    }, i = k(!1), u = k(), { show: d, hide: f, hasUpdateHandler: p } = $y({
      indicator: i,
      toggleReason: u
    }), { onOpen: v, onClose: c } = au({
      showAfter: Rt(o, "showAfter"),
      hideAfter: Rt(o, "hideAfter"),
      open: d,
      close: f
    }), h = O(() => qn(o.visible) && !p.value);
    rt(Fl, {
      controlled: h,
      id: r,
      open: ic(i),
      trigger: Rt(o, "trigger"),
      onOpen: (g) => {
        v(g);
      },
      onClose: (g) => {
        c(g);
      },
      onToggle: (g) => {
        m(i) ? c(g) : v(g);
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
    }), X(() => o.disabled, (g) => {
      g && i.value && (i.value = !1);
    });
    const C = () => {
      var g, y;
      const b = (y = (g = a.value) == null ? void 0 : g.contentRef) == null ? void 0 : y.popperContentRef;
      return b && b.contains(document.activeElement);
    };
    return uc(() => i.value && f()), t({
      popperRef: l,
      contentRef: a,
      isFocusInsideContent: C,
      updatePopper: s,
      onOpen: v,
      onClose: c,
      hide: f
    }), (g, y) => (_(), H(m(Sy), {
      ref_key: "popperRef",
      ref: l,
      role: g.role
    }, {
      default: j(() => [
        oe(My, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: j(() => [
            g.$slots.default ? ne(g.$slots, "default", { key: 0 }) : D("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        oe(Iy, {
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
          default: j(() => [
            ne(g.$slots, "content", {}, () => [
              g.rawContent ? (_(), N("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, Ry)) : (_(), N("span", By, ue(g.content), 1))
            ]),
            g.showArrow ? (_(), H(m(Yb), {
              key: 0,
              "arrow-offset": g.arrowOffset
            }, null, 8, ["arrow-offset"])) : D("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Dy = /* @__PURE__ */ fe(Fy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const gu = ht(Dy), Hy = we({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
}), Vy = ["textContent"], Wy = G({
  name: "ElBadge"
}), jy = /* @__PURE__ */ G({
  ...Wy,
  props: Hy,
  setup(e, { expose: t }) {
    const n = e, o = te("badge"), r = O(() => n.isDot ? "" : Ae(n.value) && Ae(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`);
    return t({
      content: r
    }), (l, a) => (_(), N("div", {
      class: A(m(o).b())
    }, [
      ne(l.$slots, "default"),
      oe(mn, {
        name: `${m(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: j(() => [
          Ce(I("sup", {
            class: A([
              m(o).e("content"),
              m(o).em("content", l.type),
              m(o).is("fixed", !!l.$slots.default),
              m(o).is("dot", l.isDot)
            ]),
            textContent: ue(m(r))
          }, null, 10, Vy), [
            [qe, !l.hidden && (m(r) || l.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var Ky = /* @__PURE__ */ fe(jy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const Uy = ht(Ky), qy = (e, t) => {
  Hi({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, O(() => e.type === "text"));
  const n = ve(Ii, void 0), o = yn("button"), { form: r } = ro(), l = hn(O(() => n == null ? void 0 : n.size)), a = Tr(), s = k(), i = dr(), u = O(() => e.type || (n == null ? void 0 : n.type) || ""), d = O(() => {
    var v, c, h;
    return (h = (c = e.autoInsertSpace) != null ? c : (v = o.value) == null ? void 0 : v.autoInsertSpace) != null ? h : !1;
  }), f = O(() => {
    var v;
    const c = (v = i.default) == null ? void 0 : v.call(i);
    if (d.value && (c == null ? void 0 : c.length) === 1) {
      const h = c[0];
      if ((h == null ? void 0 : h.type) === Us) {
        const C = h.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(C.trim());
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
    handleClick: (v) => {
      e.nativeType === "reset" && (r == null || r.resetFields()), t("click", v);
    }
  };
}, Gy = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Yy = ["button", "submit", "reset"], al = we({
  size: Ao,
  disabled: Boolean,
  type: {
    type: String,
    values: Gy,
    default: ""
  },
  icon: {
    type: $t
  },
  nativeType: {
    type: String,
    values: Yy,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: $t,
    default: () => Sr
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
}), Qy = {
  click: (e) => e instanceof MouseEvent
};
function We(e, t) {
  Xy(e) && (e = "100%");
  var n = Zy(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Do(e) {
  return Math.min(1, Math.max(0, e));
}
function Xy(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Zy(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function mu(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ho(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function $n(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Jy(e, t, n) {
  return {
    r: We(e, 255) * 255,
    g: We(t, 255) * 255,
    b: We(n, 255) * 255
  };
}
function Cs(e, t, n) {
  e = We(e, 255), t = We(t, 255), n = We(n, 255);
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
function Hr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function e1(e, t, n) {
  var o, r, l;
  if (e = We(e, 360), t = We(t, 100), n = We(n, 100), t === 0)
    r = n, l = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    o = Hr(s, a, e + 1 / 3), r = Hr(s, a, e), l = Hr(s, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: l * 255 };
}
function Ss(e, t, n) {
  e = We(e, 255), t = We(t, 255), n = We(n, 255);
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
function t1(e, t, n) {
  e = We(e, 360) * 6, t = We(t, 100), n = We(n, 100);
  var o = Math.floor(e), r = e - o, l = n * (1 - t), a = n * (1 - r * t), s = n * (1 - (1 - r) * t), i = o % 6, u = [n, a, l, l, s, n][i], d = [s, n, n, a, l, l][i], f = [l, l, s, n, n, a][i];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function Es(e, t, n, o) {
  var r = [
    $n(Math.round(e).toString(16)),
    $n(Math.round(t).toString(16)),
    $n(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function n1(e, t, n, o, r) {
  var l = [
    $n(Math.round(e).toString(16)),
    $n(Math.round(t).toString(16)),
    $n(Math.round(n).toString(16)),
    $n(o1(o))
  ];
  return r && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function o1(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function _s(e) {
  return ft(e) / 255;
}
function ft(e) {
  return parseInt(e, 16);
}
function r1(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var sl = {
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
function l1(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, l = null, a = !1, s = !1;
  return typeof e == "string" && (e = i1(e)), typeof e == "object" && (Kt(e.r) && Kt(e.g) && Kt(e.b) ? (t = Jy(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Kt(e.h) && Kt(e.s) && Kt(e.v) ? (o = Ho(e.s), r = Ho(e.v), t = t1(e.h, o, r), a = !0, s = "hsv") : Kt(e.h) && Kt(e.s) && Kt(e.l) && (o = Ho(e.s), l = Ho(e.l), t = e1(e.h, o, l), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = mu(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var a1 = "[-\\+]?\\d+%?", s1 = "[-\\+]?\\d*\\.\\d+%?", un = "(?:".concat(s1, ")|(?:").concat(a1, ")"), Vr = "[\\s|\\(]+(".concat(un, ")[,|\\s]+(").concat(un, ")[,|\\s]+(").concat(un, ")\\s*\\)?"), Wr = "[\\s|\\(]+(".concat(un, ")[,|\\s]+(").concat(un, ")[,|\\s]+(").concat(un, ")[,|\\s]+(").concat(un, ")\\s*\\)?"), _t = {
  CSS_UNIT: new RegExp(un),
  rgb: new RegExp("rgb" + Vr),
  rgba: new RegExp("rgba" + Wr),
  hsl: new RegExp("hsl" + Vr),
  hsla: new RegExp("hsla" + Wr),
  hsv: new RegExp("hsv" + Vr),
  hsva: new RegExp("hsva" + Wr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function i1(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (sl[e])
    e = sl[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = _t.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = _t.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = _t.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = _t.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = _t.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = _t.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = _t.hex8.exec(e), n ? {
    r: ft(n[1]),
    g: ft(n[2]),
    b: ft(n[3]),
    a: _s(n[4]),
    format: t ? "name" : "hex8"
  } : (n = _t.hex6.exec(e), n ? {
    r: ft(n[1]),
    g: ft(n[2]),
    b: ft(n[3]),
    format: t ? "name" : "hex"
  } : (n = _t.hex4.exec(e), n ? {
    r: ft(n[1] + n[1]),
    g: ft(n[2] + n[2]),
    b: ft(n[3] + n[3]),
    a: _s(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = _t.hex3.exec(e), n ? {
    r: ft(n[1] + n[1]),
    g: ft(n[2] + n[2]),
    b: ft(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Kt(e) {
  return Boolean(_t.CSS_UNIT.exec(String(e)));
}
var u1 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = r1(t)), this.originalInput = t;
      var r = l1(t);
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
      return this.a = mu(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Ss(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Ss(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Cs(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Cs(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Es(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), n1(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(We(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(We(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Es(this.r, this.g, this.b, !1), n = 0, o = Object.entries(sl); n < o.length; n++) {
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
      return n.l += t / 100, n.l = Do(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Do(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Do(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Do(n.s), new e(n);
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
function on(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function c1(e) {
  const t = Tr(), n = te("button");
  return O(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const l = new u1(r), a = e.dark ? l.tint(20).toString() : on(l, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? on(l, 90) : l.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? on(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": a,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": a
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? on(l, 90) : l.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? on(l, 50) : l.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? on(l, 80) : l.tint(80).toString());
      else {
        const s = e.dark ? on(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
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
          const u = e.dark ? on(l, 50) : l.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const d1 = ["aria-disabled", "disabled", "autofocus", "type"], f1 = G({
  name: "ElButton"
}), p1 = /* @__PURE__ */ G({
  ...f1,
  props: al,
  emits: Qy,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = c1(o), l = te("button"), { _ref: a, _size: s, _type: i, _disabled: u, shouldAddSpace: d, handleClick: f } = qy(o, n);
    return t({
      ref: a,
      size: s,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (p, v) => (_(), N("button", {
      ref_key: "_ref",
      ref: a,
      class: A([
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
      style: _e(m(r)),
      onClick: v[0] || (v[0] = (...c) => m(f) && m(f)(...c))
    }, [
      p.loading ? (_(), N(Be, { key: 0 }, [
        p.$slots.loading ? ne(p.$slots, "loading", { key: 0 }) : (_(), H(m(Me), {
          key: 1,
          class: A(m(l).is("loading"))
        }, {
          default: j(() => [
            (_(), H(Re(p.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : p.icon || p.$slots.icon ? (_(), H(m(Me), { key: 1 }, {
        default: j(() => [
          p.icon ? (_(), H(Re(p.icon), { key: 0 })) : ne(p.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : D("v-if", !0),
      p.$slots.default ? (_(), N("span", {
        key: 2,
        class: A({ [m(l).em("text", "expand")]: m(d) })
      }, [
        ne(p.$slots, "default")
      ], 2)) : D("v-if", !0)
    ], 14, d1));
  }
});
var v1 = /* @__PURE__ */ fe(p1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const h1 = {
  size: al.size,
  type: al.type
}, g1 = G({
  name: "ElButtonGroup"
}), m1 = /* @__PURE__ */ G({
  ...g1,
  props: h1,
  setup(e) {
    const t = e;
    rt(Ii, bn({
      size: Rt(t, "size"),
      type: Rt(t, "type")
    }));
    const n = te("button");
    return (o, r) => (_(), N("div", {
      class: A(`${m(n).b("group")}`)
    }, [
      ne(o.$slots, "default")
    ], 2));
  }
});
var bu = /* @__PURE__ */ fe(m1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const yu = ht(v1, {
  ButtonGroup: bu
});
no(bu);
const ln = /* @__PURE__ */ new Map();
let Ts;
me && (document.addEventListener("mousedown", (e) => Ts = e), document.addEventListener("mouseup", (e) => {
  for (const t of ln.values())
    for (const { documentHandler: n } of t)
      n(e, Ts);
}));
function $s(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : pn(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, a = o.target, s = r == null ? void 0 : r.target, i = !t || !t.instance, u = !a || !s, d = e.contains(a) || e.contains(s), f = e === a, p = n.length && n.some((c) => c == null ? void 0 : c.contains(a)) || n.length && n.includes(s), v = l && (l.contains(a) || l.contains(s));
    i || u || d || f || p || v || t.value(o, r);
  };
}
const wu = {
  beforeMount(e, t) {
    ln.has(e) || ln.set(e, []), ln.get(e).push({
      documentHandler: $s(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ln.has(e) || ln.set(e, []);
    const n = ln.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: $s(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    ln.delete(e);
  }
}, il = "_trap-focus-children", kn = [], ks = (e) => {
  var t;
  if (kn.length === 0)
    return;
  const n = kn[kn.length - 1][il];
  if (n.length > 0 && e.code === In.tab) {
    if (n.length === 1) {
      e.preventDefault(), document.activeElement !== n[0] && n[0].focus();
      return;
    }
    const o = e.shiftKey, r = e.target === n[0], l = e.target === n[n.length - 1];
    if (r && o && (e.preventDefault(), n[n.length - 1].focus()), l && !o && (e.preventDefault(), n[0].focus()), process.env.NODE_ENV === "test") {
      const a = n.indexOf(e.target);
      a !== -1 && ((t = n[o ? a - 1 : a + 1]) == null || t.focus());
    }
  }
}, b1 = {
  beforeMount(e) {
    e[il] = za(e), kn.push(e), kn.length <= 1 && document.addEventListener("keydown", ks);
  },
  updated(e) {
    ae(() => {
      e[il] = za(e);
    });
  },
  unmounted() {
    kn.shift(), kn.length === 0 && document.removeEventListener("keydown", ks);
  }
};
var Os = !1, Tn, ul, cl, Go, Yo, Cu, Qo, dl, fl, pl, Su, vl, hl, Eu, _u;
function et() {
  if (!Os) {
    Os = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (vl = /\b(iPhone|iP[ao]d)/.exec(e), hl = /\b(iP[ao]d)/.exec(e), pl = /Android/i.exec(e), Eu = /FBAN\/\w+;/i.exec(e), _u = /Mobile/i.exec(e), Su = !!/Win64/.exec(e), t) {
      Tn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, Tn && document && document.documentMode && (Tn = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      Cu = o ? parseFloat(o[1]) + 4 : Tn, ul = t[2] ? parseFloat(t[2]) : NaN, cl = t[3] ? parseFloat(t[3]) : NaN, Go = t[4] ? parseFloat(t[4]) : NaN, Go ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), Yo = t && t[1] ? parseFloat(t[1]) : NaN) : Yo = NaN;
    } else
      Tn = ul = cl = Yo = Go = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Qo = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        Qo = !1;
      dl = !!n[2], fl = !!n[3];
    } else
      Qo = dl = fl = !1;
  }
}
var gl = { ie: function() {
  return et() || Tn;
}, ieCompatibilityMode: function() {
  return et() || Cu > Tn;
}, ie64: function() {
  return gl.ie() && Su;
}, firefox: function() {
  return et() || ul;
}, opera: function() {
  return et() || cl;
}, webkit: function() {
  return et() || Go;
}, safari: function() {
  return gl.webkit();
}, chrome: function() {
  return et() || Yo;
}, windows: function() {
  return et() || dl;
}, osx: function() {
  return et() || Qo;
}, linux: function() {
  return et() || fl;
}, iphone: function() {
  return et() || vl;
}, mobile: function() {
  return et() || vl || hl || pl || _u;
}, nativeApp: function() {
  return et() || Eu;
}, android: function() {
  return et() || pl;
}, ipad: function() {
  return et() || hl;
} }, y1 = gl, Vo = !!(typeof window < "u" && window.document && window.document.createElement), w1 = { canUseDOM: Vo, canUseWorkers: typeof Worker < "u", canUseEventListeners: Vo && !!(window.addEventListener || window.attachEvent), canUseViewport: Vo && !!window.screen, isInWorker: !Vo }, Tu = w1, $u;
Tu.canUseDOM && ($u = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function C1(e, t) {
  if (!Tu.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), o = typeof r[n] == "function";
  }
  return !o && $u && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var S1 = C1, xs = 10, As = 40, Ls = 800;
function ku(e) {
  var t = 0, n = 0, o = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * xs, r = n * xs, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (e.deltaMode == 1 ? (o *= As, r *= As) : (o *= Ls, r *= Ls)), o && !t && (t = o < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: r };
}
ku.getEventType = function() {
  return y1.firefox() ? "DOMMouseScroll" : S1("wheel") ? "wheel" : "mousewheel";
};
var E1 = ku;
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
const _1 = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const r = E1(o);
      t && Reflect.apply(t, this, [o, r]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, T1 = {
  beforeMount(e, t) {
    _1(e, t.value);
  }
}, Ou = {
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
  size: Ao,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, xu = {
  [Qe]: (e) => Ve(e) || Ae(e) || qn(e),
  change: (e) => Ve(e) || Ae(e) || qn(e)
}, $1 = ({
  model: e,
  isChecked: t
}) => {
  const n = ve(oo, void 0), o = O(() => {
    var l, a;
    const s = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (a = n == null ? void 0 : n.min) == null ? void 0 : a.value;
    return !Co(s) && e.value.length >= s && !t.value || !Co(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: Tr(O(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, k1 = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: l
}) => {
  const a = ve(oo, void 0), { formItem: s } = ro(), { emit: i } = Se();
  function u(c) {
    var h, C;
    return c === e.trueLabel || c === !0 ? (h = e.trueLabel) != null ? h : !0 : (C = e.falseLabel) != null ? C : !1;
  }
  function d(c, h) {
    i("change", u(c), h);
  }
  function f(c) {
    if (n.value)
      return;
    const h = c.target;
    i("change", u(h.checked), c);
  }
  async function p(c) {
    n.value || !o.value && !r.value && l.value && (c.composedPath().some((g) => g.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await ae(), d(t.value, c)));
  }
  const v = O(() => (a == null ? void 0 : a.validateEvent) || e.validateEvent);
  return X(() => e.modelValue, () => {
    v.value && (s == null || s.validate("change").catch((c) => Pe(c)));
  }), {
    handleChange: f,
    onClickRoot: p
  };
}, O1 = (e) => {
  const t = k(!1), { emit: n } = Se(), o = ve(oo, void 0), r = O(() => Co(o) === !1), l = k(!1);
  return {
    model: O({
      get() {
        var s, i;
        return r.value ? (s = o == null ? void 0 : o.modelValue) == null ? void 0 : s.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(s) {
        var i, u;
        r.value && fn(s) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && s.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, s))) : (n(Qe, s), t.value = s);
      }
    }),
    isGroup: r,
    isLimitExceeded: l
  };
}, x1 = (e, t, { model: n }) => {
  const o = ve(oo, void 0), r = k(!1), l = O(() => {
    const u = n.value;
    return qn(u) ? u : fn(u) ? at(e.label) ? u.map(Un).some((d) => rr(d, e.label)) : u.map(Un).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), a = hn(O(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), s = hn(O(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  })), i = O(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: a,
    isChecked: l,
    isFocused: r,
    checkboxSize: s,
    hasOwnLabel: i
  };
}, A1 = (e, { model: t }) => {
  function n() {
    fn(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Au = (e, t) => {
  const { formItem: n } = ro(), { model: o, isGroup: r, isLimitExceeded: l } = O1(e), {
    isFocused: a,
    isChecked: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d
  } = x1(e, t, { model: o }), { isDisabled: f } = $1({ model: o, isChecked: s }), { inputId: p, isLabeledByFormItem: v } = Hl(e, {
    formItemContext: n,
    disableIdGeneration: d,
    disableIdManagement: r
  }), { handleChange: c, onClickRoot: h } = k1(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: d,
    isDisabled: f,
    isLabeledByFormItem: v
  });
  return A1(e, { model: o }), {
    inputId: p,
    isLabeledByFormItem: v,
    isChecked: s,
    isDisabled: f,
    isFocused: a,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d,
    model: o,
    handleChange: c,
    onClickRoot: h
  };
}, L1 = ["tabindex", "role", "aria-checked"], M1 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], P1 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], N1 = G({
  name: "ElCheckbox"
}), I1 = /* @__PURE__ */ G({
  ...N1,
  props: Ou,
  emits: xu,
  setup(e) {
    const t = e, n = dr(), {
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
    } = Au(t, n), v = te("checkbox"), c = O(() => [
      v.b(),
      v.m(i.value),
      v.is("disabled", a.value),
      v.is("bordered", t.border),
      v.is("checked", l.value)
    ]), h = O(() => [
      v.e("input"),
      v.is("disabled", a.value),
      v.is("checked", l.value),
      v.is("indeterminate", t.indeterminate),
      v.is("focus", s.value)
    ]);
    return (C, g) => (_(), H(Re(!m(u) && m(r) ? "span" : "label"), {
      class: A(m(c)),
      "aria-controls": C.indeterminate ? C.controls : null,
      onClick: m(p)
    }, {
      default: j(() => [
        I("span", {
          class: A(m(h)),
          tabindex: C.indeterminate ? 0 : void 0,
          role: C.indeterminate ? "checkbox" : void 0,
          "aria-checked": C.indeterminate ? "mixed" : void 0
        }, [
          C.trueLabel || C.falseLabel ? Ce((_(), N("input", {
            key: 0,
            id: m(o),
            "onUpdate:modelValue": g[0] || (g[0] = (y) => Xt(d) ? d.value = y : null),
            class: A(m(v).e("original")),
            type: "checkbox",
            "aria-hidden": C.indeterminate ? "true" : "false",
            name: C.name,
            tabindex: C.tabindex,
            disabled: m(a),
            "true-value": C.trueLabel,
            "false-value": C.falseLabel,
            onChange: g[1] || (g[1] = (...y) => m(f) && m(f)(...y)),
            onFocus: g[2] || (g[2] = (y) => s.value = !0),
            onBlur: g[3] || (g[3] = (y) => s.value = !1)
          }, null, 42, M1)), [
            [Zo, m(d)]
          ]) : Ce((_(), N("input", {
            key: 1,
            id: m(o),
            "onUpdate:modelValue": g[4] || (g[4] = (y) => Xt(d) ? d.value = y : null),
            class: A(m(v).e("original")),
            type: "checkbox",
            "aria-hidden": C.indeterminate ? "true" : "false",
            disabled: m(a),
            value: C.label,
            name: C.name,
            tabindex: C.tabindex,
            onChange: g[5] || (g[5] = (...y) => m(f) && m(f)(...y)),
            onFocus: g[6] || (g[6] = (y) => s.value = !0),
            onBlur: g[7] || (g[7] = (y) => s.value = !1)
          }, null, 42, P1)), [
            [Zo, m(d)]
          ]),
          I("span", {
            class: A(m(v).e("inner"))
          }, null, 2)
        ], 10, L1),
        m(u) ? (_(), N("span", {
          key: 0,
          class: A(m(v).e("label"))
        }, [
          ne(C.$slots, "default"),
          C.$slots.default ? D("v-if", !0) : (_(), N(Be, { key: 0 }, [
            Yt(ue(C.label), 1)
          ], 64))
        ], 2)) : D("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var R1 = /* @__PURE__ */ fe(I1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const B1 = ["name", "tabindex", "disabled", "true-value", "false-value"], z1 = ["name", "tabindex", "disabled", "value"], F1 = G({
  name: "ElCheckboxButton"
}), D1 = /* @__PURE__ */ G({
  ...F1,
  props: Ou,
  emits: xu,
  setup(e) {
    const t = e, n = dr(), {
      isFocused: o,
      isChecked: r,
      isDisabled: l,
      checkboxButtonSize: a,
      model: s,
      handleChange: i
    } = Au(t, n), u = ve(oo, void 0), d = te("checkbox"), f = O(() => {
      var v, c, h, C;
      const g = (c = (v = u == null ? void 0 : u.fill) == null ? void 0 : v.value) != null ? c : "";
      return {
        backgroundColor: g,
        borderColor: g,
        color: (C = (h = u == null ? void 0 : u.textColor) == null ? void 0 : h.value) != null ? C : "",
        boxShadow: g ? `-1px 0 0 0 ${g}` : void 0
      };
    }), p = O(() => [
      d.b("button"),
      d.bm("button", a.value),
      d.is("disabled", l.value),
      d.is("checked", r.value),
      d.is("focus", o.value)
    ]);
    return (v, c) => (_(), N("label", {
      class: A(m(p))
    }, [
      v.trueLabel || v.falseLabel ? Ce((_(), N("input", {
        key: 0,
        "onUpdate:modelValue": c[0] || (c[0] = (h) => Xt(s) ? s.value = h : null),
        class: A(m(d).be("button", "original")),
        type: "checkbox",
        name: v.name,
        tabindex: v.tabindex,
        disabled: m(l),
        "true-value": v.trueLabel,
        "false-value": v.falseLabel,
        onChange: c[1] || (c[1] = (...h) => m(i) && m(i)(...h)),
        onFocus: c[2] || (c[2] = (h) => o.value = !0),
        onBlur: c[3] || (c[3] = (h) => o.value = !1)
      }, null, 42, B1)), [
        [Zo, m(s)]
      ]) : Ce((_(), N("input", {
        key: 1,
        "onUpdate:modelValue": c[4] || (c[4] = (h) => Xt(s) ? s.value = h : null),
        class: A(m(d).be("button", "original")),
        type: "checkbox",
        name: v.name,
        tabindex: v.tabindex,
        disabled: m(l),
        value: v.label,
        onChange: c[5] || (c[5] = (...h) => m(i) && m(i)(...h)),
        onFocus: c[6] || (c[6] = (h) => o.value = !0),
        onBlur: c[7] || (c[7] = (h) => o.value = !1)
      }, null, 42, z1)), [
        [Zo, m(s)]
      ]),
      v.$slots.default || v.label ? (_(), N("span", {
        key: 2,
        class: A(m(d).be("button", "inner")),
        style: _e(m(r) ? m(f) : void 0)
      }, [
        ne(v.$slots, "default", {}, () => [
          Yt(ue(v.label), 1)
        ])
      ], 6)) : D("v-if", !0)
    ], 2));
  }
});
var Lu = /* @__PURE__ */ fe(D1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const H1 = we({
  modelValue: {
    type: ie(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: Ao,
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
}), V1 = {
  [Qe]: (e) => fn(e),
  change: (e) => fn(e)
}, W1 = G({
  name: "ElCheckboxGroup"
}), j1 = /* @__PURE__ */ G({
  ...W1,
  props: H1,
  emits: V1,
  setup(e, { emit: t }) {
    const n = e, o = te("checkbox"), { formItem: r } = ro(), { inputId: l, isLabeledByFormItem: a } = Hl(n, {
      formItemContext: r
    }), s = async (u) => {
      t(Qe, u), await ae(), t("change", u);
    }, i = O({
      get() {
        return n.modelValue;
      },
      set(u) {
        s(u);
      }
    });
    return rt(oo, {
      ...Xv(Bn(n), [
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
    }), X(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((u) => Pe(u)));
    }), (u, d) => {
      var f;
      return _(), H(Re(u.tag), {
        id: m(l),
        class: A(m(o).b("group")),
        role: "group",
        "aria-label": m(a) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": m(a) ? (f = m(r)) == null ? void 0 : f.labelId : void 0
      }, {
        default: j(() => [
          ne(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Mu = /* @__PURE__ */ fe(j1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Rn = ht(R1, {
  CheckboxButton: Lu,
  CheckboxGroup: Mu
});
no(Lu);
no(Mu);
const Pu = we({
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
    values: xo,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), K1 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, U1 = G({
  name: "ElTag"
}), q1 = /* @__PURE__ */ G({
  ...U1,
  props: Pu,
  emits: K1,
  setup(e, { emit: t }) {
    const n = e, o = hn(), r = te("tag"), l = O(() => {
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
    return (i, u) => i.disableTransitions ? (_(), N("span", {
      key: 0,
      class: A(m(l)),
      style: _e({ backgroundColor: i.color }),
      onClick: s
    }, [
      I("span", {
        class: A(m(r).e("content"))
      }, [
        ne(i.$slots, "default")
      ], 2),
      i.closable ? (_(), H(m(Me), {
        key: 0,
        class: A(m(r).e("close")),
        onClick: Ke(a, ["stop"])
      }, {
        default: j(() => [
          oe(m(tl))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : D("v-if", !0)
    ], 6)) : (_(), H(mn, {
      key: 1,
      name: `${m(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: j(() => [
        I("span", {
          class: A(m(l)),
          style: _e({ backgroundColor: i.color }),
          onClick: s
        }, [
          I("span", {
            class: A(m(r).e("content"))
          }, [
            ne(i.$slots, "default")
          ], 2),
          i.closable ? (_(), H(m(Me), {
            key: 0,
            class: A(m(r).e("close")),
            onClick: Ke(a, ["stop"])
          }, {
            default: j(() => [
              oe(m(tl))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : D("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var G1 = /* @__PURE__ */ fe(q1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const Y1 = ht(G1), ml = {}, Q1 = we({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ie(Object)
  },
  size: Ao,
  button: {
    type: ie(Object)
  },
  experimentalFeatures: {
    type: ie(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ie(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
});
G({
  name: "ElConfigProvider",
  props: Q1,
  setup(e, { slots: t }) {
    X(() => e.message, (o) => {
      Object.assign(ml, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Rm(e);
    return () => ne(t, "default", { config: n == null ? void 0 : n.value });
  }
});
const X1 = we({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: ie([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: ie([String, Number])
  }
}), Z1 = {
  click: (e) => e instanceof MouseEvent
};
var J1 = G({
  name: "ElOverlay",
  props: X1,
  emits: Z1,
  setup(e, { slots: t, emit: n }) {
    const o = te("overlay"), r = (i) => {
      n("click", i);
    }, { onClick: l, onMousedown: a, onMouseup: s } = ru(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? oe("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: l,
      onMousedown: a,
      onMouseup: s
    }, [ne(t, "default")], Ko.STYLE | Ko.CLASS | Ko.PROPS, ["onClick", "onMouseup", "onMousedown"]) : J("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [ne(t, "default")]);
  }
});
const ew = J1;
let tw = 0;
const nw = G({
  name: "ImgEmpty",
  setup() {
    return {
      ns: te("empty"),
      id: ++tw
    };
  }
}), ow = {
  viewBox: "0 0 79 86",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, rw = ["id"], lw = ["stop-color"], aw = ["stop-color"], sw = ["id"], iw = ["stop-color"], uw = ["stop-color"], cw = ["id"], dw = {
  id: "Illustrations",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, fw = {
  id: "B-type",
  transform: "translate(-1268.000000, -535.000000)"
}, pw = {
  id: "Group-2",
  transform: "translate(1268.000000, 535.000000)"
}, vw = ["fill"], hw = ["fill"], gw = {
  id: "Group-Copy",
  transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
}, mw = ["fill"], bw = ["fill"], yw = ["fill"], ww = ["fill"], Cw = ["fill"], Sw = {
  id: "Rectangle-Copy-17",
  transform: "translate(53.000000, 45.000000)"
}, Ew = ["fill", "xlink:href"], _w = ["fill", "mask"], Tw = ["fill"];
function $w(e, t, n, o, r, l) {
  return _(), N("svg", ow, [
    I("defs", null, [
      I("linearGradient", {
        id: `linearGradient-1-${e.id}`,
        x1: "38.8503086%",
        y1: "0%",
        x2: "61.1496914%",
        y2: "100%"
      }, [
        I("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-1")})`,
          offset: "0%"
        }, null, 8, lw),
        I("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-4")})`,
          offset: "100%"
        }, null, 8, aw)
      ], 8, rw),
      I("linearGradient", {
        id: `linearGradient-2-${e.id}`,
        x1: "0%",
        y1: "9.5%",
        x2: "100%",
        y2: "90.5%"
      }, [
        I("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-1")})`,
          offset: "0%"
        }, null, 8, iw),
        I("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-6")})`,
          offset: "100%"
        }, null, 8, uw)
      ], 8, sw),
      I("rect", {
        id: `path-3-${e.id}`,
        x: "0",
        y: "0",
        width: "17",
        height: "36"
      }, null, 8, cw)
    ]),
    I("g", dw, [
      I("g", fw, [
        I("g", pw, [
          I("path", {
            id: "Oval-Copy-2",
            d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
            fill: `var(${e.ns.cssVarBlockName("fill-color-3")})`
          }, null, 8, vw),
          I("polygon", {
            id: "Rectangle-Copy-14",
            fill: `var(${e.ns.cssVarBlockName("fill-color-7")})`,
            transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
            points: "13 58 53 58 42 45 2 45"
          }, null, 8, hw),
          I("g", gw, [
            I("polygon", {
              id: "Rectangle-Copy-10",
              fill: `var(${e.ns.cssVarBlockName("fill-color-7")})`,
              transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
              points: "2.84078316e-14 3 18 3 23 7 5 7"
            }, null, 8, mw),
            I("polygon", {
              id: "Rectangle-Copy-11",
              fill: `var(${e.ns.cssVarBlockName("fill-color-5")})`,
              points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
            }, null, 8, bw),
            I("rect", {
              id: "Rectangle-Copy-12",
              fill: `url(#linearGradient-1-${e.id})`,
              transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
              x: "38",
              y: "7",
              width: "17",
              height: "36"
            }, null, 8, yw),
            I("polygon", {
              id: "Rectangle-Copy-13",
              fill: `var(${e.ns.cssVarBlockName("fill-color-2")})`,
              transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
              points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
            }, null, 8, ww)
          ]),
          I("rect", {
            id: "Rectangle-Copy-15",
            fill: `url(#linearGradient-2-${e.id})`,
            x: "13",
            y: "45",
            width: "40",
            height: "36"
          }, null, 8, Cw),
          I("g", Sw, [
            I("use", {
              id: "Mask",
              fill: `var(${e.ns.cssVarBlockName("fill-color-8")})`,
              transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
              "xlink:href": `#path-3-${e.id}`
            }, null, 8, Ew),
            I("polygon", {
              id: "Rectangle-Copy",
              fill: `var(${e.ns.cssVarBlockName("fill-color-9")})`,
              mask: `url(#mask-4-${e.id})`,
              transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
              points: "7 0 24 0 20 18 7 16.5"
            }, null, 8, _w)
          ]),
          I("polygon", {
            id: "Rectangle-Copy-18",
            fill: `var(${e.ns.cssVarBlockName("fill-color-2")})`,
            transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
            points: "62 45 79 45 70 58 53 58"
          }, null, 8, Tw)
        ])
      ])
    ])
  ]);
}
var kw = /* @__PURE__ */ fe(nw, [["render", $w], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue"]]);
const Ow = {
  image: {
    type: String,
    default: ""
  },
  imageSize: Number,
  description: {
    type: String,
    default: ""
  }
}, xw = ["src"], Aw = { key: 1 }, Lw = G({
  name: "ElEmpty"
}), Mw = /* @__PURE__ */ G({
  ...Lw,
  props: Ow,
  setup(e) {
    const t = e, { t: n } = Ot(), o = te("empty"), r = O(() => t.description || n("el.table.emptyText")), l = O(() => ({
      width: t.imageSize ? `${t.imageSize}px` : ""
    }));
    return (a, s) => (_(), N("div", {
      class: A(m(o).b())
    }, [
      I("div", {
        class: A(m(o).e("image")),
        style: _e(m(l))
      }, [
        a.image ? (_(), N("img", {
          key: 0,
          src: a.image,
          ondragstart: "return false"
        }, null, 8, xw)) : ne(a.$slots, "image", { key: 1 }, () => [
          oe(kw)
        ])
      ], 6),
      I("div", {
        class: A(m(o).e("description"))
      }, [
        a.$slots.description ? ne(a.$slots, "description", { key: 0 }) : (_(), N("p", Aw, ue(m(r)), 1))
      ], 2),
      a.$slots.default ? (_(), N("div", {
        key: 0,
        class: A(m(o).e("bottom"))
      }, [
        ne(a.$slots, "default")
      ], 2)) : D("v-if", !0)
    ], 2));
  }
});
var Pw = /* @__PURE__ */ fe(Mw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue"]]);
const Nu = ht(Pw), Nw = we({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: $t
  }
}), Iw = {
  click: (e) => e instanceof MouseEvent
}, Rw = ["disabled", "aria-disabled"], Bw = { key: 0 }, zw = G({
  name: "ElPaginationPrev"
}), Fw = /* @__PURE__ */ G({
  ...zw,
  props: Nw,
  emits: Iw,
  setup(e) {
    const t = e, n = O(() => t.disabled || t.currentPage <= 1);
    return (o, r) => (_(), N("button", {
      type: "button",
      class: "btn-prev",
      disabled: m(n),
      "aria-disabled": m(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.prevText ? (_(), N("span", Bw, ue(o.prevText), 1)) : (_(), H(m(Me), { key: 1 }, {
        default: j(() => [
          (_(), H(Re(o.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, Rw));
  }
});
var Dw = /* @__PURE__ */ fe(Fw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const Hw = we({
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
    type: $t
  }
}), Vw = ["disabled", "aria-disabled"], Ww = { key: 0 }, jw = G({
  name: "ElPaginationNext"
}), Kw = /* @__PURE__ */ G({
  ...jw,
  props: Hw,
  emits: ["click"],
  setup(e) {
    const t = e, n = O(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (o, r) => (_(), N("button", {
      type: "button",
      class: "btn-next",
      disabled: m(n),
      "aria-disabled": m(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.nextText ? (_(), N("span", Ww, ue(o.nextText), 1)) : (_(), H(m(Me), { key: 1 }, {
        default: j(() => [
          (_(), H(Re(o.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, Vw));
  }
});
var Uw = /* @__PURE__ */ fe(Kw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Iu = "ElSelectGroup", Lr = "ElSelect";
function qw(e, t) {
  const n = ve(Lr), o = ve(Iu, { disabled: !1 }), r = O(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), l = O(() => n.props.multiple ? f(n.props.modelValue, e.value) : p(e.value, n.props.modelValue)), a = O(() => {
    if (n.props.multiple) {
      const h = n.props.modelValue || [];
      return !l.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = O(() => e.label || (r.value ? "" : e.value)), i = O(() => e.value || e.label || ""), u = O(() => e.disabled || t.groupDisabled || a.value), d = Se(), f = (h = [], C) => {
    if (r.value) {
      const g = n.props.valueKey;
      return h && h.some((y) => Un(Ue(y, g)) === Ue(C, g));
    } else
      return h && h.includes(C);
  }, p = (h, C) => {
    if (r.value) {
      const { valueKey: g } = n.props;
      return Ue(h, g) === Ue(C, g);
    } else
      return h === C;
  }, v = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  X(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), X(() => e.value, (h, C) => {
    const { remote: g, valueKey: y } = n.props;
    if (Object.is(h, C) || (n.onOptionDestroy(C, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !g) {
      if (y && typeof h == "object" && typeof C == "object" && h[y] === C[y])
        return;
      n.setSelected();
    }
  }), X(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: c } = Un(n);
  return X(c, (h) => {
    const { query: C } = m(h), g = new RegExp(Oh(C), "i");
    t.visible = g.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: l,
    isDisabled: u,
    hoverItem: v
  };
}
const Gw = G({
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
    const t = te("select"), n = bn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: r, isDisabled: l, select: a, hoverItem: s } = qw(e, n), { visible: i, hover: u } = Bn(n), d = Se().proxy;
    a.onOptionCreate(d), wt(() => {
      const p = d.value, { selected: v } = a, h = (a.props.multiple ? v : [v]).some((C) => C.value === d.value);
      ae(() => {
        a.cachedOptions.get(p) === d && !h && a.cachedOptions.delete(p);
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
function Yw(e, t, n, o, r, l) {
  return Ce((_(), N("li", {
    class: A([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...a) => e.hoverItem && e.hoverItem(...a)),
    onClick: t[1] || (t[1] = Ke((...a) => e.selectOptionClick && e.selectOptionClick(...a), ["stop"]))
  }, [
    ne(e.$slots, "default", {}, () => [
      I("span", null, ue(e.currentLabel), 1)
    ])
  ], 34)), [
    [qe, e.visible]
  ]);
}
var ea = /* @__PURE__ */ fe(Gw, [["render", Yw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const Qw = G({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ve(Lr), t = te("select"), n = O(() => e.props.popperClass), o = O(() => e.props.multiple), r = O(() => e.props.fitInputWidth), l = k("");
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
function Xw(e, t, n, o, r, l) {
  return _(), N("div", {
    class: A([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: _e({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    ne(e.$slots, "default")
  ], 6);
}
var Zw = /* @__PURE__ */ fe(Qw, [["render", Xw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function Jw(e) {
  const { t } = Ot();
  return bn({
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
const e2 = (e, t, n) => {
  const { t: o } = Ot(), r = te("select");
  Hi({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, O(() => e.suffixTransition === !1));
  const l = k(null), a = k(null), s = k(null), i = k(null), u = k(null), d = k(null), f = k(-1), p = fo({ query: "" }), v = fo(""), { form: c, formItem: h } = ro(), C = O(() => !e.filterable || e.multiple || !t.visible), g = O(() => e.disabled || (c == null ? void 0 : c.disabled)), y = O(() => {
    const $ = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !g.value && t.inputHovering && $;
  }), b = O(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), w = O(() => r.is("reverse", b.value && t.visible && e.suffixTransition)), E = O(() => e.remote ? 300 : 0), T = O(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), S = O(() => Array.from(t.options.values())), x = O(() => Array.from(t.cachedOptions.values())), L = O(() => {
    const $ = S.value.filter((M) => !M.created).some((M) => M.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !$;
  }), V = hn(), U = O(() => ["small"].includes(V.value) ? "small" : "default"), W = O({
    get() {
      return t.visible && T.value !== !1;
    },
    set($) {
      t.visible = $;
    }
  });
  X([() => g.value, () => V.value, () => c == null ? void 0 : c.size], () => {
    ae(() => {
      K();
    });
  }), X(() => e.placeholder, ($) => {
    t.cachedPlaceHolder = t.currentPlaceholder = $;
  }), X(() => e.modelValue, ($, M) => {
    e.multiple && (K(), $ && $.length > 0 || a.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", z(t.query))), le(), e.filterable && !e.multiple && (t.inputLength = 20), !rr($, M) && e.validateEvent && (h == null || h.validate("change").catch((Q) => Pe(Q)));
  }, {
    flush: "post",
    deep: !0
  }), X(() => t.visible, ($) => {
    var M, Q, ee;
    $ ? ((Q = (M = s.value) == null ? void 0 : M.updatePopper) == null || Q.call(M), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (ee = a.value) == null || ee.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), z(t.query), !e.multiple && !e.remote && (p.value.query = "", ao(p), ao(v)))) : (e.filterable && (De(e.filterMethod) && e.filterMethod(""), De(e.remoteMethod) && e.remoteMethod("")), a.value && a.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, P(), ae(() => {
      a.value && a.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", $);
  }), X(() => t.options.entries(), () => {
    var $, M, Q;
    if (!me)
      return;
    (M = ($ = s.value) == null ? void 0 : $.updatePopper) == null || M.call($), e.multiple && K();
    const ee = ((Q = u.value) == null ? void 0 : Q.querySelectorAll("input")) || [];
    Array.from(ee).includes(document.activeElement) || le(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && q();
  }, {
    flush: "post"
  }), X(() => t.hoverIndex, ($) => {
    Ae($) && $ > -1 ? f.value = S.value[$] || {} : f.value = {}, S.value.forEach((M) => {
      M.hover = f.value === M;
    });
  });
  const K = () => {
    e.collapseTags && !e.filterable || ae(() => {
      var $, M;
      if (!l.value)
        return;
      const Q = l.value.$el.querySelector("input"), ee = i.value, Oe = Mm(V.value || (c == null ? void 0 : c.size));
      Q.style.height = `${(t.selected.length === 0 ? Oe : Math.max(ee ? ee.clientHeight + (ee.clientHeight > Oe ? 6 : 0) : 0, Oe)) - 2}px`, t.tagInMultiLine = Number.parseFloat(Q.style.height) >= Oe, t.visible && T.value !== !1 && ((M = ($ = s.value) == null ? void 0 : $.updatePopper) == null || M.call($));
    });
  }, z = async ($) => {
    if (!(t.previousQuery === $ || t.isOnComposition)) {
      if (t.previousQuery === null && (De(e.filterMethod) || De(e.remoteMethod))) {
        t.previousQuery = $;
        return;
      }
      t.previousQuery = $, ae(() => {
        var M, Q;
        t.visible && ((Q = (M = s.value) == null ? void 0 : M.updatePopper) == null || Q.call(M));
      }), t.hoverIndex = -1, e.multiple && e.filterable && ae(() => {
        const M = a.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, M) : M, R(), K();
      }), e.remote && De(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod($)) : De(e.filterMethod) ? (e.filterMethod($), ao(v)) : (t.filteredOptionsCount = t.optionsCount, p.value.query = $, ao(p), ao(v)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await ae(), q());
    }
  }, R = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = a.value.value ? "" : t.cachedPlaceHolder);
  }, q = () => {
    const $ = S.value.filter((ee) => ee.visible && !ee.disabled && !ee.states.groupDisabled), M = $.find((ee) => ee.created), Q = $[0];
    t.hoverIndex = Xe(S.value, M || Q);
  }, le = () => {
    var $;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const Q = F(e.modelValue);
      ($ = Q.props) != null && $.created ? (t.createdLabel = Q.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = Q.currentLabel, t.selected = Q, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const M = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((Q) => {
      M.push(F(Q));
    }), t.selected = M, ae(() => {
      K();
    });
  }, F = ($) => {
    let M;
    const Q = Br($).toLowerCase() === "object", ee = Br($).toLowerCase() === "null", Oe = Br($).toLowerCase() === "undefined";
    for (let Ct = t.cachedOptions.size - 1; Ct >= 0; Ct--) {
      const Je = x.value[Ct];
      if (Q ? Ue(Je.value, e.valueKey) === Ue($, e.valueKey) : Je.value === $) {
        M = {
          value: $,
          currentLabel: Je.currentLabel,
          isDisabled: Je.isDisabled
        };
        break;
      }
    }
    if (M)
      return M;
    const Ie = Q ? $.label : !ee && !Oe ? $ : "", Pt = {
      value: $,
      currentLabel: Ie
    };
    return e.multiple && (Pt.hitState = !1), Pt;
  }, P = () => {
    setTimeout(() => {
      const $ = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((M) => S.value.findIndex((Q) => Ue(Q, $) === Ue(M, $)))) : t.hoverIndex = -1 : t.hoverIndex = S.value.findIndex((M) => jt(M) === jt(t.selected));
    }, 300);
  }, Z = () => {
    var $, M;
    pe(), (M = ($ = s.value) == null ? void 0 : $.updatePopper) == null || M.call($), e.multiple && !e.filterable && K();
  }, pe = () => {
    var $;
    t.inputWidth = ($ = l.value) == null ? void 0 : $.$el.getBoundingClientRect().width;
  }, ge = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, z(t.query));
  }, ye = Pn(() => {
    ge();
  }, E.value), be = Pn(($) => {
    z($.target.value);
  }, E.value), se = ($) => {
    rr(e.modelValue, $) || n.emit(Mi, $);
  }, Ee = ($) => {
    if ($.target.value.length <= 0 && !it()) {
      const M = e.modelValue.slice();
      M.pop(), n.emit(Qe, M), se(M);
    }
    $.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, Te = ($, M) => {
    const Q = t.selected.indexOf(M);
    if (Q > -1 && !g.value) {
      const ee = e.modelValue.slice();
      ee.splice(Q, 1), n.emit(Qe, ee), se(ee), n.emit("remove-tag", M.value);
    }
    $.stopPropagation();
  }, de = ($) => {
    $.stopPropagation();
    const M = e.multiple ? [] : "";
    if (!Ve(M))
      for (const Q of t.selected)
        Q.isDisabled && M.push(Q.value);
    n.emit(Qe, M), se(M), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, Le = ($, M) => {
    var Q;
    if (e.multiple) {
      const ee = (e.modelValue || []).slice(), Oe = Xe(ee, $.value);
      Oe > -1 ? ee.splice(Oe, 1) : (e.multipleLimit <= 0 || ee.length < e.multipleLimit) && ee.push($.value), n.emit(Qe, ee), se(ee), $.created && (t.query = "", z(""), t.inputLength = 20), e.filterable && ((Q = a.value) == null || Q.focus());
    } else
      n.emit(Qe, $.value), se($.value), t.visible = !1;
    t.isSilentBlur = M, gt(), !t.visible && ae(() => {
      Ze($);
    });
  }, Xe = ($ = [], M) => {
    if (!at(M))
      return $.indexOf(M);
    const Q = e.valueKey;
    let ee = -1;
    return $.some((Oe, Ie) => Un(Ue(Oe, Q)) === Ue(M, Q) ? (ee = Ie, !0) : !1), ee;
  }, gt = () => {
    t.softFocus = !0;
    const $ = a.value || l.value;
    $ && ($ == null || $.focus());
  }, Ze = ($) => {
    var M, Q, ee, Oe, Ie;
    const Pt = Array.isArray($) ? $[0] : $;
    let Ct = null;
    if (Pt != null && Pt.value) {
      const Je = S.value.filter((nn) => nn.value === Pt.value);
      Je.length > 0 && (Ct = Je[0].$el);
    }
    if (s.value && Ct) {
      const Je = (Oe = (ee = (Q = (M = s.value) == null ? void 0 : M.popperRef) == null ? void 0 : Q.contentRef) == null ? void 0 : ee.querySelector) == null ? void 0 : Oe.call(ee, `.${r.be("dropdown", "wrap")}`);
      Je && Nh(Je, Ct);
    }
    (Ie = d.value) == null || Ie.handleScroll();
  }, st = ($) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set($.value, $), t.cachedOptions.set($.value, $);
  }, At = ($, M) => {
    t.options.get($) === M && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete($));
  }, Lt = ($) => {
    $.code !== In.backspace && it(!1), t.inputLength = a.value.value.length * 15 + 20, K();
  }, it = ($) => {
    if (!Array.isArray(t.selected))
      return;
    const M = t.selected[t.selected.length - 1];
    if (M)
      return $ === !0 || $ === !1 ? (M.hitState = $, $) : (M.hitState = !M.hitState, M.hitState);
  }, Mt = ($) => {
    const M = $.target.value;
    if ($.type === "compositionend")
      t.isOnComposition = !1, ae(() => z(M));
    else {
      const Q = M[M.length - 1] || "";
      t.isOnComposition = !Ni(Q);
    }
  }, Vt = () => {
    ae(() => Ze(t.selected));
  }, Ge = ($) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", $));
  }, je = () => {
    var $;
    t.visible = !1, ($ = l.value) == null || $.blur();
  }, ut = ($) => {
    ae(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", $);
    }), t.softFocus = !1;
  }, B = ($) => {
    de($);
  }, he = () => {
    t.visible = !1;
  }, Ne = ($) => {
    t.visible && ($.preventDefault(), $.stopPropagation(), t.visible = !1);
  }, ct = ($) => {
    var M;
    $ && !t.mouseEnter || g.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!s.value || !s.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((M = a.value || l.value) == null || M.focus()));
  }, Wt = () => {
    t.visible ? S.value[t.hoverIndex] && Le(S.value[t.hoverIndex], void 0) : ct();
  }, jt = ($) => at($.value) ? Ue($.value, e.valueKey) : $.value, Cn = O(() => S.value.filter(($) => $.visible).every(($) => $.disabled)), Y = ($) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Cn.value) {
      $ === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : $ === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const M = S.value[t.hoverIndex];
      (M.disabled === !0 || M.states.groupDisabled === !0 || !M.visible) && Y($), ae(() => Ze(f.value));
    }
  };
  return {
    optionsArray: S,
    selectSize: V,
    handleResize: Z,
    debouncedOnInputChange: ye,
    debouncedQueryChange: be,
    deletePrevTag: Ee,
    deleteTag: Te,
    deleteSelected: de,
    handleOptionSelect: Le,
    scrollToOption: Ze,
    readonly: C,
    resetInputHeight: K,
    showClose: y,
    iconComponent: b,
    iconReverse: w,
    showNewOption: L,
    collapseTagSize: U,
    setSelected: le,
    managePlaceholder: R,
    selectDisabled: g,
    emptyText: T,
    toggleLastOptionHitState: it,
    resetInputState: Lt,
    handleComposition: Mt,
    onOptionCreate: st,
    onOptionDestroy: At,
    handleMenuEnter: Vt,
    handleFocus: Ge,
    blur: je,
    handleBlur: ut,
    handleClearClick: B,
    handleClose: he,
    handleKeydownEscape: Ne,
    toggleMenu: ct,
    selectOption: Wt,
    getValueKey: jt,
    navigateOptions: Y,
    dropMenuVisible: W,
    queryChange: p,
    groupQueryChange: v,
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
}, Ms = "ElSelect", t2 = G({
  name: Ms,
  componentName: Ms,
  components: {
    ElInput: xr,
    ElSelectMenu: Zw,
    ElOption: ea,
    ElTag: Y1,
    ElScrollbar: Ql,
    ElTooltip: gu,
    ElIcon: Me
  },
  directives: { ClickOutside: wu },
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
      validator: Pi
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
    teleported: Jl.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: $t,
      default: Rl
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: $t,
      default: Ti
    },
    tagType: { ...Pu.type, default: "info" },
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
      values: kr,
      default: "bottom-start"
    }
  },
  emits: [
    Qe,
    Mi,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = te("select"), o = te("input"), { t: r } = Ot(), l = Jw(e), {
      optionsArray: a,
      selectSize: s,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: p,
      deletePrevTag: v,
      deleteTag: c,
      deleteSelected: h,
      handleOptionSelect: C,
      scrollToOption: g,
      setSelected: y,
      resetInputHeight: b,
      managePlaceholder: w,
      showClose: E,
      selectDisabled: T,
      iconComponent: S,
      iconReverse: x,
      showNewOption: L,
      emptyText: V,
      toggleLastOptionHitState: U,
      resetInputState: W,
      handleComposition: K,
      onOptionCreate: z,
      onOptionDestroy: R,
      handleMenuEnter: q,
      handleFocus: le,
      blur: F,
      handleBlur: P,
      handleClearClick: Z,
      handleClose: pe,
      handleKeydownEscape: ge,
      toggleMenu: ye,
      selectOption: be,
      getValueKey: se,
      navigateOptions: Ee,
      dropMenuVisible: Te,
      reference: de,
      input: Le,
      tooltipRef: Xe,
      tags: gt,
      selectWrapper: Ze,
      scrollbar: st,
      queryChange: At,
      groupQueryChange: Lt,
      handleMouseEnter: it,
      handleMouseLeave: Mt
    } = e2(e, l, t), { focus: Vt } = Fm(de), {
      inputWidth: Ge,
      selected: je,
      inputLength: ut,
      filteredOptionsCount: B,
      visible: he,
      softFocus: Ne,
      selectedLabel: ct,
      hoverIndex: Wt,
      query: jt,
      inputHovering: Cn,
      currentPlaceholder: Y,
      menuVisibleOnFocus: re,
      isOnComposition: ce,
      isSilentBlur: $,
      options: M,
      cachedOptions: Q,
      optionsCount: ee,
      prefixWidth: Oe,
      tagInMultiLine: Ie
    } = Bn(l), Pt = O(() => {
      const dt = [n.b()], Sn = m(s);
      return Sn && dt.push(n.m(Sn)), e.disabled && dt.push(n.m("disabled")), dt;
    }), Ct = O(() => ({
      maxWidth: `${m(Ge) - 32}px`,
      width: "100%"
    })), Je = O(() => ({ maxWidth: `${m(Ge) > 123 ? m(Ge) - 123 : m(Ge) - 75}px` }));
    rt(Lr, bn({
      props: e,
      options: M,
      optionsArray: a,
      cachedOptions: Q,
      optionsCount: ee,
      filteredOptionsCount: B,
      hoverIndex: Wt,
      handleOptionSelect: C,
      onOptionCreate: z,
      onOptionDestroy: R,
      selectWrapper: Ze,
      selected: je,
      setSelected: y,
      queryChange: At,
      groupQueryChange: Lt
    })), xe(() => {
      l.cachedPlaceHolder = Y.value = e.placeholder || r("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Y.value = ""), Nn(Ze, u), e.remote && e.multiple && b(), ae(() => {
        const dt = de.value && de.value.$el;
        if (dt && (Ge.value = dt.getBoundingClientRect().width, t.slots.prefix)) {
          const Sn = dt.querySelector(`.${o.e("prefix")}`);
          Oe.value = Math.max(Sn.getBoundingClientRect().width + 5, 30);
        }
      }), y();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Qe, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Qe, "");
    const nn = O(() => {
      var dt, Sn;
      return (Sn = (dt = Xe.value) == null ? void 0 : dt.popperRef) == null ? void 0 : Sn.contentRef;
    });
    return {
      tagInMultiLine: Ie,
      prefixWidth: Oe,
      selectSize: s,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: p,
      deletePrevTag: v,
      deleteTag: c,
      deleteSelected: h,
      handleOptionSelect: C,
      scrollToOption: g,
      inputWidth: Ge,
      selected: je,
      inputLength: ut,
      filteredOptionsCount: B,
      visible: he,
      softFocus: Ne,
      selectedLabel: ct,
      hoverIndex: Wt,
      query: jt,
      inputHovering: Cn,
      currentPlaceholder: Y,
      menuVisibleOnFocus: re,
      isOnComposition: ce,
      isSilentBlur: $,
      options: M,
      resetInputHeight: b,
      managePlaceholder: w,
      showClose: E,
      selectDisabled: T,
      iconComponent: S,
      iconReverse: x,
      showNewOption: L,
      emptyText: V,
      toggleLastOptionHitState: U,
      resetInputState: W,
      handleComposition: K,
      handleMenuEnter: q,
      handleFocus: le,
      blur: F,
      handleBlur: P,
      handleClearClick: Z,
      handleClose: pe,
      handleKeydownEscape: ge,
      toggleMenu: ye,
      selectOption: be,
      getValueKey: se,
      navigateOptions: Ee,
      dropMenuVisible: Te,
      focus: Vt,
      reference: de,
      input: Le,
      tooltipRef: Xe,
      popperPaneRef: nn,
      tags: gt,
      selectWrapper: Ze,
      scrollbar: st,
      wrapperKls: Pt,
      selectTagsStyle: Ct,
      nsSelect: n,
      tagTextStyle: Je,
      handleMouseEnter: it,
      handleMouseLeave: Mt
    };
  }
}), n2 = ["disabled", "autocomplete"], o2 = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function r2(e, t, n, o, r, l) {
  const a = ke("el-tag"), s = ke("el-tooltip"), i = ke("el-icon"), u = ke("el-input"), d = ke("el-option"), f = ke("el-scrollbar"), p = ke("el-select-menu"), v = Sl("click-outside");
  return Ce((_(), N("div", {
    ref: "selectWrapper",
    class: A(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...c) => e.handleMouseEnter && e.handleMouseEnter(...c)),
    onMouseleave: t[23] || (t[23] = (...c) => e.handleMouseLeave && e.handleMouseLeave(...c)),
    onClick: t[24] || (t[24] = Ke((...c) => e.toggleMenu && e.toggleMenu(...c), ["stop"]))
  }, [
    oe(s, {
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
      default: j(() => [
        I("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (c) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (c) => e.inputHovering = !1)
        }, [
          e.multiple ? (_(), N("div", {
            key: 0,
            ref: "tags",
            class: A(e.nsSelect.e("tags")),
            style: _e(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (_(), N("span", {
              key: 0,
              class: A([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              oe(a, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (c) => e.deleteTag(c, e.selected[0]))
              }, {
                default: j(() => [
                  I("span", {
                    class: A(e.nsSelect.e("tags-text")),
                    style: _e(e.tagTextStyle)
                  }, ue(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (_(), H(a, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: j(() => [
                  e.collapseTagsTooltip ? (_(), H(s, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: j(() => [
                      I("span", {
                        class: A(e.nsSelect.e("tags-text"))
                      }, "+ " + ue(e.selected.length - 1), 3)
                    ]),
                    content: j(() => [
                      I("div", {
                        class: A(e.nsSelect.e("collapse-tags"))
                      }, [
                        (_(!0), N(Be, null, cn(e.selected.slice(1), (c, h) => (_(), N("div", {
                          key: h,
                          class: A(e.nsSelect.e("collapse-tag"))
                        }, [
                          (_(), H(a, {
                            key: e.getValueKey(c),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !c.isDisabled,
                            size: e.collapseTagSize,
                            hit: c.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (C) => e.deleteTag(C, c)
                          }, {
                            default: j(() => [
                              I("span", {
                                class: A(e.nsSelect.e("tags-text")),
                                style: _e({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, ue(c.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (_(), N("span", {
                    key: 1,
                    class: A(e.nsSelect.e("tags-text"))
                  }, "+ " + ue(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : D("v-if", !0)
            ], 2)) : D("v-if", !0),
            D(" <div> "),
            e.collapseTags ? D("v-if", !0) : (_(), H(mn, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: j(() => [
                I("span", {
                  class: A([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (_(!0), N(Be, null, cn(e.selected, (c) => (_(), H(a, {
                    key: e.getValueKey(c),
                    closable: !e.selectDisabled && !c.isDisabled,
                    size: e.collapseTagSize,
                    hit: c.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, c)
                  }, {
                    default: j(() => [
                      I("span", {
                        class: A(e.nsSelect.e("tags-text")),
                        style: _e({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ue(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            D(" </div> "),
            e.filterable ? Ce((_(), N("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (c) => e.query = c),
              type: "text",
              class: A([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: _e({
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
                t[6] || (t[6] = Fe(Ke((c) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = Fe(Ke((c) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = Fe((...c) => e.handleKeydownEscape && e.handleKeydownEscape(...c), ["esc"])),
                t[9] || (t[9] = Fe(Ke((...c) => e.selectOption && e.selectOption(...c), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = Fe((...c) => e.deletePrevTag && e.deletePrevTag(...c), ["delete"])),
                t[11] || (t[11] = Fe((c) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionupdate: t[13] || (t[13] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionend: t[14] || (t[14] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onInput: t[15] || (t[15] = (...c) => e.debouncedQueryChange && e.debouncedQueryChange(...c))
            }, null, 46, n2)), [
              [cc, e.query]
            ]) : D("v-if", !0)
          ], 6)) : D("v-if", !0),
          oe(u, {
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
            class: A([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = Fe(Ke((c) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = Fe(Ke((c) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              Fe(Ke(e.selectOption, ["stop", "prevent"]), ["enter"]),
              Fe(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = Fe((c) => e.visible = !1, ["tab"]))
            ]
          }, Gs({
            suffix: j(() => [
              e.iconComponent && !e.showClose ? (_(), H(i, {
                key: 0,
                class: A([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: j(() => [
                  (_(), H(Re(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : D("v-if", !0),
              e.showClose && e.clearIcon ? (_(), H(i, {
                key: 1,
                class: A([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: j(() => [
                  (_(), H(Re(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : D("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: j(() => [
                I("div", o2, [
                  ne(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: j(() => [
        oe(p, null, {
          default: j(() => [
            Ce(oe(f, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: A([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: j(() => [
                e.showNewOption ? (_(), H(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : D("v-if", !0),
                ne(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [qe, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (_(), N(Be, { key: 0 }, [
              e.$slots.empty ? ne(e.$slots, "empty", { key: 0 }) : (_(), N("p", {
                key: 1,
                class: A(e.nsSelect.be("dropdown", "empty"))
              }, ue(e.emptyText), 3))
            ], 64)) : D("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [v, e.handleClose, e.popperPaneRef]
  ]);
}
var l2 = /* @__PURE__ */ fe(t2, [["render", r2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const a2 = G({
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
    const t = te("select"), n = k(!0), o = Se(), r = k([]);
    rt(Iu, bn({
      ...Bn(e)
    }));
    const l = ve(Lr);
    xe(() => {
      r.value = a(o.subTree);
    });
    const a = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((d) => {
        var f;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (f = d.children) != null && f.length && u.push(...a(d));
      }), u;
    }, { groupQueryChange: s } = Un(l);
    return X(s, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function s2(e, t, n, o, r, l) {
  return Ce((_(), N("ul", {
    class: A(e.ns.be("group", "wrap"))
  }, [
    I("li", {
      class: A(e.ns.be("group", "title"))
    }, ue(e.label), 3),
    I("li", null, [
      I("ul", {
        class: A(e.ns.b("group"))
      }, [
        ne(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [qe, e.visible]
  ]);
}
var Ru = /* @__PURE__ */ fe(a2, [["render", s2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const Bu = ht(l2, {
  Option: ea,
  OptionGroup: Ru
}), zu = no(ea);
no(Ru);
const ta = () => ve(Bi, {}), i2 = we({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: ie(Array),
    default: () => _r([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: xo
  }
}), u2 = G({
  name: "ElPaginationSizes"
}), c2 = /* @__PURE__ */ G({
  ...u2,
  props: i2,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = Ot(), r = te("pagination"), l = ta(), a = k(n.pageSize);
    X(() => n.pageSizes, (u, d) => {
      if (!rr(u, d) && Array.isArray(u)) {
        const f = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", f);
      }
    }), X(() => n.pageSize, (u) => {
      a.value = u;
    });
    const s = O(() => n.pageSizes);
    function i(u) {
      var d;
      u !== a.value && (a.value = u, (d = l.handleSizeChange) == null || d.call(l, Number(u)));
    }
    return (u, d) => (_(), N("span", {
      class: A(m(r).e("sizes"))
    }, [
      oe(m(Bu), {
        "model-value": a.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        "validate-event": !1,
        onChange: i
      }, {
        default: j(() => [
          (_(!0), N(Be, null, cn(m(s), (f) => (_(), H(m(zu), {
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
var d2 = /* @__PURE__ */ fe(c2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const f2 = we({
  size: {
    type: String,
    values: xo
  }
}), p2 = ["disabled"], v2 = G({
  name: "ElPaginationJumper"
}), h2 = /* @__PURE__ */ G({
  ...v2,
  props: f2,
  setup(e) {
    const { t } = Ot(), n = te("pagination"), { pageCount: o, disabled: r, currentPage: l, changeEvent: a } = ta(), s = k(), i = O(() => {
      var f;
      return (f = s.value) != null ? f : l == null ? void 0 : l.value;
    });
    function u(f) {
      s.value = +f;
    }
    function d(f) {
      f = Math.trunc(+f), a == null || a(+f), s.value = void 0;
    }
    return (f, p) => (_(), N("span", {
      class: A(m(n).e("jump")),
      disabled: m(r)
    }, [
      I("span", {
        class: A([m(n).e("goto")])
      }, ue(m(t)("el.pagination.goto")), 3),
      oe(m(xr), {
        size: f.size,
        class: A([m(n).e("editor"), m(n).is("in-pagination")]),
        min: 1,
        max: m(o),
        disabled: m(r),
        "model-value": m(i),
        "validate-event": !1,
        type: "number",
        "onUpdate:modelValue": u,
        onChange: d
      }, null, 8, ["size", "class", "max", "disabled", "model-value"]),
      I("span", {
        class: A([m(n).e("classifier")])
      }, ue(m(t)("el.pagination.pageClassifier")), 3)
    ], 10, p2));
  }
});
var g2 = /* @__PURE__ */ fe(h2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const m2 = we({
  total: {
    type: Number,
    default: 1e3
  }
}), b2 = ["disabled"], y2 = G({
  name: "ElPaginationTotal"
}), w2 = /* @__PURE__ */ G({
  ...y2,
  props: m2,
  setup(e) {
    const { t } = Ot(), n = te("pagination"), { disabled: o } = ta();
    return (r, l) => (_(), N("span", {
      class: A(m(n).e("total")),
      disabled: m(o)
    }, ue(m(t)("el.pagination.total", {
      total: r.total
    })), 11, b2));
  }
});
var C2 = /* @__PURE__ */ fe(w2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const S2 = we({
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
}), E2 = ["onKeyup"], _2 = ["aria-current", "tabindex"], T2 = ["tabindex"], $2 = ["aria-current", "tabindex"], k2 = ["tabindex"], O2 = ["aria-current", "tabindex"], x2 = G({
  name: "ElPaginationPager"
}), A2 = /* @__PURE__ */ G({
  ...x2,
  props: S2,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = te("pager"), r = te("icon"), l = k(!1), a = k(!1), s = k(!1), i = k(!1), u = k(!1), d = k(!1), f = O(() => {
      const g = n.pagerCount, y = (g - 1) / 2, b = Number(n.currentPage), w = Number(n.pageCount);
      let E = !1, T = !1;
      w > g && (b > g - y && (E = !0), b < w - y && (T = !0));
      const S = [];
      if (E && !T) {
        const x = w - (g - 2);
        for (let L = x; L < w; L++)
          S.push(L);
      } else if (!E && T)
        for (let x = 2; x < g; x++)
          S.push(x);
      else if (E && T) {
        const x = Math.floor(g / 2) - 1;
        for (let L = b - x; L <= b + x; L++)
          S.push(L);
      } else
        for (let x = 2; x < w; x++)
          S.push(x);
      return S;
    }), p = O(() => n.disabled ? -1 : 0);
    xn(() => {
      const g = (n.pagerCount - 1) / 2;
      l.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - g && (l.value = !0), n.currentPage < n.pageCount - g && (a.value = !0));
    });
    function v(g = !1) {
      n.disabled || (g ? s.value = !0 : i.value = !0);
    }
    function c(g = !1) {
      g ? u.value = !0 : d.value = !0;
    }
    function h(g) {
      const y = g.target;
      if (y.tagName.toLowerCase() === "li" && Array.from(y.classList).includes("number")) {
        const b = Number(y.textContent);
        b !== n.currentPage && t("change", b);
      } else
        y.tagName.toLowerCase() === "li" && Array.from(y.classList).includes("more") && C(g);
    }
    function C(g) {
      const y = g.target;
      if (y.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let b = Number(y.textContent);
      const w = n.pageCount, E = n.currentPage, T = n.pagerCount - 2;
      y.className.includes("more") && (y.className.includes("quickprev") ? b = E - T : y.className.includes("quicknext") && (b = E + T)), Number.isNaN(+b) || (b < 1 && (b = 1), b > w && (b = w)), b !== E && t("change", b);
    }
    return (g, y) => (_(), N("ul", {
      class: A(m(o).b()),
      onClick: C,
      onKeyup: Fe(h, ["enter"])
    }, [
      g.pageCount > 0 ? (_(), N("li", {
        key: 0,
        class: A([[
          m(o).is("active", g.currentPage === 1),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === 1,
        tabindex: m(p)
      }, " 1 ", 10, _2)) : D("v-if", !0),
      l.value ? (_(), N("li", {
        key: 1,
        class: A([
          "more",
          "btn-quickprev",
          m(r).b(),
          m(o).is("disabled", g.disabled)
        ]),
        tabindex: m(p),
        onMouseenter: y[0] || (y[0] = (b) => v(!0)),
        onMouseleave: y[1] || (y[1] = (b) => s.value = !1),
        onFocus: y[2] || (y[2] = (b) => c(!0)),
        onBlur: y[3] || (y[3] = (b) => u.value = !1)
      }, [
        (s.value || u.value) && !g.disabled ? (_(), H(m(Lg), { key: 0 })) : (_(), H(m(Ua), { key: 1 }))
      ], 42, T2)) : D("v-if", !0),
      (_(!0), N(Be, null, cn(m(f), (b) => (_(), N("li", {
        key: b,
        class: A([[
          m(o).is("active", g.currentPage === b),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === b,
        tabindex: m(p)
      }, ue(b), 11, $2))), 128)),
      a.value ? (_(), N("li", {
        key: 2,
        class: A([
          "more",
          "btn-quicknext",
          m(r).b(),
          m(o).is("disabled", g.disabled)
        ]),
        tabindex: m(p),
        onMouseenter: y[4] || (y[4] = (b) => v()),
        onMouseleave: y[5] || (y[5] = (b) => i.value = !1),
        onFocus: y[6] || (y[6] = (b) => c()),
        onBlur: y[7] || (y[7] = (b) => d.value = !1)
      }, [
        (i.value || d.value) && !g.disabled ? (_(), H(m(Bg), { key: 0 })) : (_(), H(m(Ua), { key: 1 }))
      ], 42, k2)) : D("v-if", !0),
      g.pageCount > 1 ? (_(), N("li", {
        key: 3,
        class: A([[
          m(o).is("active", g.currentPage === g.pageCount),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === g.pageCount,
        tabindex: m(p)
      }, ue(g.pageCount), 11, O2)) : D("v-if", !0)
    ], 42, E2));
  }
});
var L2 = /* @__PURE__ */ fe(A2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const Ye = (e) => typeof e != "number", M2 = we({
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
    type: ie(Array),
    default: () => _r([10, 20, 30, 40, 50, 100])
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
    type: $t,
    default: () => Kh
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: $t,
    default: () => Il
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), P2 = {
  "update:current-page": (e) => Ae(e),
  "update:page-size": (e) => Ae(e),
  "size-change": (e) => Ae(e),
  "current-change": (e) => Ae(e),
  "prev-click": (e) => Ae(e),
  "next-click": (e) => Ae(e)
}, Ps = "ElPagination";
var N2 = G({
  name: Ps,
  props: M2,
  emits: P2,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = Ot(), r = te("pagination"), l = Se().vnode.props || {}, a = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, s = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = O(() => {
      if (Ye(e.total) && Ye(e.pageCount) || !Ye(e.currentPage) && !a)
        return !1;
      if (e.layout.includes("sizes")) {
        if (Ye(e.pageCount)) {
          if (!Ye(e.total) && !Ye(e.pageSize) && !s)
            return !1;
        } else if (!s)
          return !1;
      }
      return !0;
    }), u = k(Ye(e.defaultPageSize) ? 10 : e.defaultPageSize), d = k(Ye(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), f = O({
      get() {
        return Ye(e.pageSize) ? u.value : e.pageSize;
      },
      set(b) {
        Ye(e.pageSize) && (u.value = b), s && (t("update:page-size", b), t("size-change", b));
      }
    }), p = O(() => {
      let b = 0;
      return Ye(e.pageCount) ? Ye(e.total) || (b = Math.max(1, Math.ceil(e.total / f.value))) : b = e.pageCount, b;
    }), v = O({
      get() {
        return Ye(e.currentPage) ? d.value : e.currentPage;
      },
      set(b) {
        let w = b;
        b < 1 ? w = 1 : b > p.value && (w = p.value), Ye(e.currentPage) && (d.value = w), a && (t("update:current-page", w), t("current-change", w));
      }
    });
    X(p, (b) => {
      v.value > b && (v.value = b);
    });
    function c(b) {
      v.value = b;
    }
    function h(b) {
      f.value = b;
      const w = p.value;
      v.value > w && (v.value = w);
    }
    function C() {
      e.disabled || (v.value -= 1, t("prev-click", v.value));
    }
    function g() {
      e.disabled || (v.value += 1, t("next-click", v.value));
    }
    function y(b, w) {
      b && (b.props || (b.props = {}), b.props.class = [b.props.class, w].join(" "));
    }
    return rt(Bi, {
      pageCount: p,
      disabled: O(() => e.disabled),
      currentPage: v,
      changeEvent: c,
      handleSizeChange: h
    }), () => {
      var b, w;
      if (!i.value)
        return Pe(Ps, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && p.value <= 1)
        return null;
      const E = [], T = [], S = J("div", { class: r.e("rightwrapper") }, T), x = {
        prev: J(Dw, {
          disabled: e.disabled,
          currentPage: v.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: C
        }),
        jumper: J(g2, {
          size: e.small ? "small" : "default"
        }),
        pager: J(L2, {
          currentPage: v.value,
          pageCount: p.value,
          pagerCount: e.pagerCount,
          onChange: c,
          disabled: e.disabled
        }),
        next: J(Uw, {
          disabled: e.disabled,
          currentPage: v.value,
          pageCount: p.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: g
        }),
        sizes: J(d2, {
          pageSize: f.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (w = (b = n == null ? void 0 : n.default) == null ? void 0 : b.call(n)) != null ? w : null,
        total: J(C2, { total: Ye(e.total) ? 0 : e.total })
      }, L = e.layout.split(",").map((U) => U.trim());
      let V = !1;
      return L.forEach((U) => {
        if (U === "->") {
          V = !0;
          return;
        }
        V ? T.push(x[U]) : E.push(x[U]);
      }), y(E[0], r.is("first")), y(E[E.length - 1], r.is("last")), V && T.length > 0 && (y(T[0], r.is("first")), y(T[T.length - 1], r.is("last")), E.push(S)), J("div", {
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
const I2 = ht(N2);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var R2 = /["'&<>]/, B2 = z2;
function z2(e) {
  var t = "" + e, n = R2.exec(t);
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
const jr = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, F2 = function(e, t, n, o, r) {
  if (!t && !o && (!r || Array.isArray(r) && !r.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = o ? null : function(s, i) {
    return r ? (Array.isArray(r) || (r = [r]), r.map((u) => typeof u == "string" ? Ue(s, u) : u(s, i, e))) : (t !== "$key" && at(s) && "$value" in s && (s = s.$value), [at(s) ? Ue(s, t) : s]);
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
}, Fu = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, D2 = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const r = e.columns[o];
    if (r.columnKey === t) {
      n = r;
      break;
    }
  }
  return n || Cr("ElTable", `No column matching with column-key: ${t}`), n;
}, Ns = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? Fu(e, o[0]) : null;
}, He = (e, t) => {
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
}, On = function(e, t) {
  const n = {};
  return (e || []).forEach((o, r) => {
    n[He(o, t)] = { row: o, index: r };
  }), n;
};
function H2(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (Zt(t, o)) {
      const r = t[o];
      typeof r < "u" && (n[o] = r);
    }
  return n;
}
function na(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function Du(e) {
  return e === "" || e !== void 0 && (e = na(e), Number.isNaN(e) && (e = 80)), e;
}
function V2(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function W2(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function go(e, t, n) {
  let o = !1;
  const r = e.indexOf(t), l = r !== -1, a = (s) => {
    s === "add" ? e.push(t) : e.splice(r, 1), o = !0, fn(t.children) && t.children.forEach((i) => {
      go(e, i, n ?? !l);
    });
  };
  return qn(n) ? n && !l ? a("add") : !n && l && a("remove") : a(l ? "remove" : "add"), o;
}
function j2(e, t, n = "children", o = "hasChildren") {
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
let Ut;
function K2(e, t, n, o) {
  o = yi({
    enterable: !0,
    showArrow: !0
  }, o);
  const { nextZIndex: r } = Po(), l = e == null ? void 0 : e.dataset.prefix, a = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function s() {
    const C = o.effect === "light", g = document.createElement("div");
    return g.className = [
      `${l}-popper`,
      C ? "is-light" : "is-dark",
      o.popperClass || ""
    ].join(" "), n = B2(n), g.innerHTML = n, g.style.zIndex = String(r()), e == null || e.appendChild(g), g;
  }
  function i() {
    const C = document.createElement("div");
    return C.className = `${l}-popper__arrow`, C;
  }
  function u() {
    d && d.update();
  }
  Ut == null || Ut(), Ut = () => {
    try {
      d && d.destroy(), v && (e == null || e.removeChild(v)), t.removeEventListener("mouseenter", f), t.removeEventListener("mouseleave", p), a == null || a.removeEventListener("scroll", Ut), Ut = void 0;
    } catch {
    }
  };
  let d = null, f = u, p = Ut;
  o.enterable && ({ onOpen: f, onClose: p } = au({
    showAfter: o.showAfter,
    hideAfter: o.hideAfter,
    open: u,
    close: Ut
  }));
  const v = s();
  v.onmouseenter = f, v.onmouseleave = p;
  const c = [];
  if (o.offset && c.push({
    name: "offset",
    options: {
      offset: [0, o.offset]
    }
  }), o.showArrow) {
    const C = v.appendChild(i());
    c.push({
      name: "arrow",
      options: {
        element: C,
        padding: 10
      }
    });
  }
  const h = o.popperOptions || {};
  return d = ou(t, v, {
    placement: o.placement || "top",
    strategy: "fixed",
    ...h,
    modifiers: h.modifiers ? c.concat(h.modifiers) : c
  }), t.addEventListener("mouseenter", f), t.addEventListener("mouseleave", p), a == null || a.addEventListener("scroll", Ut), d;
}
function Hu(e) {
  return e.children ? Uv(e.children, Hu) : [e];
}
function Is(e, t) {
  return e + t.colSpan;
}
const Vu = (e, t, n, o) => {
  let r = 0, l = e;
  const a = n.states.columns.value;
  if (o) {
    const i = Hu(o[e]);
    r = a.slice(0, a.indexOf(i[0])).reduce(Is, 0), l = r + i.reduce(Is, 0) - 1;
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
}, oa = (e, t, n, o, r, l = 0) => {
  const a = [], { direction: s, start: i, after: u } = Vu(t, n, o, r);
  if (s) {
    const d = s === "left";
    a.push(`${e}-fixed-column--${s}`), d && u + l === o.states.fixedLeafColumnsLength.value - 1 ? a.push("is-last-column") : !d && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && a.push("is-first-column");
  }
  return a;
};
function Rs(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const ra = (e, t, n, o) => {
  const {
    direction: r,
    start: l = 0,
    after: a = 0
  } = Vu(e, t, n, o);
  if (!r)
    return;
  const s = {}, i = r === "left", u = n.states.columns.value;
  return i ? s.left = u.slice(0, l).reduce(Rs, 0) : s.right = u.slice(a + 1).reverse().reduce(Rs, 0), s;
}, Jn = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function U2(e) {
  const t = Se(), n = k(!1), o = k([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const d = On(o.value, u);
        o.value = i.reduce((f, p) => {
          const v = He(p, u);
          return d[v] && f.push(p), f;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      go(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], d = e.rowKey.value, f = On(u, d);
      o.value = i.reduce((p, v) => {
        const c = f[v];
        return c && p.push(c.row), p;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!On(o.value, u)[He(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function q2(e) {
  const t = Se(), n = k(null), o = k(null), r = (u) => {
    t.store.assertRowKey(), n.value = u, a(u);
  }, l = () => {
    n.value = null;
  }, a = (u) => {
    const { data: d, rowKey: f } = e;
    let p = null;
    f.value && (p = (m(d) || []).find((v) => He(v, f.value) === u)), o.value = p, t.emit("current-change", o.value, null);
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
          const p = He(f, u);
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
function G2(e) {
  const t = k([]), n = k({}), o = k(16), r = k(!1), l = k({}), a = k("hasChildren"), s = k("children"), i = Se(), u = O(() => {
    if (!e.rowKey.value)
      return {};
    const g = e.data.value || [];
    return f(g);
  }), d = O(() => {
    const g = e.rowKey.value, y = Object.keys(l.value), b = {};
    return y.length && y.forEach((w) => {
      if (l.value[w].length) {
        const E = { children: [] };
        l.value[w].forEach((T) => {
          const S = He(T, g);
          E.children.push(S), T[a.value] && !b[S] && (b[S] = { children: [] });
        }), b[w] = E;
      }
    }), b;
  }), f = (g) => {
    const y = e.rowKey.value, b = {};
    return j2(g, (w, E, T) => {
      const S = He(w, y);
      Array.isArray(E) ? b[S] = {
        children: E.map((x) => He(x, y)),
        level: T
      } : r.value && (b[S] = {
        children: [],
        lazy: !0,
        level: T
      });
    }, s.value, a.value), b;
  }, p = (g = !1, y = ((b) => (b = i.store) == null ? void 0 : b.states.defaultExpandAll.value)()) => {
    var b;
    const w = u.value, E = d.value, T = Object.keys(w), S = {};
    if (T.length) {
      const x = m(n), L = [], V = (W, K) => {
        if (g)
          return t.value ? y || t.value.includes(K) : !!(y || W != null && W.expanded);
        {
          const z = y || t.value && t.value.includes(K);
          return !!(W != null && W.expanded || z);
        }
      };
      T.forEach((W) => {
        const K = x[W], z = { ...w[W] };
        if (z.expanded = V(K, W), z.lazy) {
          const { loaded: R = !1, loading: q = !1 } = K || {};
          z.loaded = !!R, z.loading = !!q, L.push(W);
        }
        S[W] = z;
      });
      const U = Object.keys(E);
      r.value && U.length && L.length && U.forEach((W) => {
        const K = x[W], z = E[W].children;
        if (L.includes(W)) {
          if (S[W].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          S[W].children = z;
        } else {
          const { loaded: R = !1, loading: q = !1 } = K || {};
          S[W] = {
            lazy: !0,
            loaded: !!R,
            loading: !!q,
            expanded: V(K, W),
            children: z,
            level: ""
          };
        }
      });
    }
    n.value = S, (b = i.store) == null || b.updateTableScrollY();
  };
  X(() => t.value, () => {
    p(!0);
  }), X(() => u.value, () => {
    p();
  }), X(() => d.value, () => {
    p();
  });
  const v = (g) => {
    t.value = g, p();
  }, c = (g, y) => {
    i.store.assertRowKey();
    const b = e.rowKey.value, w = He(g, b), E = w && n.value[w];
    if (w && E && "expanded" in E) {
      const T = E.expanded;
      y = typeof y > "u" ? !E.expanded : y, n.value[w].expanded = y, T !== y && i.emit("expand-change", g, y), i.store.updateTableScrollY();
    }
  }, h = (g) => {
    i.store.assertRowKey();
    const y = e.rowKey.value, b = He(g, y), w = n.value[b];
    r.value && w && "loaded" in w && !w.loaded ? C(g, b, w) : c(g, void 0);
  }, C = (g, y, b) => {
    const { load: w } = i.props;
    w && !n.value[y].loaded && (n.value[y].loading = !0, w(g, b, (E) => {
      if (!Array.isArray(E))
        throw new TypeError("[ElTable] data must be an array");
      n.value[y].loading = !1, n.value[y].loaded = !0, n.value[y].expanded = !0, E.length && (l.value[y] = E), i.emit("expand-change", g, !0);
    }));
  };
  return {
    loadData: C,
    loadOrToggle: h,
    toggleTreeExpansion: c,
    updateTreeExpandKeys: v,
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
const Y2 = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : F2(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Xo = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? t.push.apply(t, Xo(n.children)) : t.push(n);
  }), t;
};
function Q2() {
  var e;
  const t = Se(), { size: n } = Bn((e = t.proxy) == null ? void 0 : e.$props), o = k(null), r = k([]), l = k([]), a = k(!1), s = k([]), i = k([]), u = k([]), d = k([]), f = k([]), p = k([]), v = k([]), c = k([]), h = k(0), C = k(0), g = k(0), y = k(!1), b = k([]), w = k(!1), E = k(!1), T = k(null), S = k({}), x = k(null), L = k(null), V = k(null), U = k(null), W = k(null);
  X(r, () => t.state && q(!1), {
    deep: !0
  });
  const K = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, z = (Y) => {
    var re;
    (re = Y.children) == null || re.forEach((ce) => {
      ce.fixed = Y.fixed, z(ce);
    });
  }, R = () => {
    s.value.forEach((M) => {
      z(M);
    }), d.value = s.value.filter((M) => M.fixed === !0 || M.fixed === "left"), f.value = s.value.filter((M) => M.fixed === "right"), d.value.length > 0 && s.value[0] && s.value[0].type === "selection" && !s.value[0].fixed && (s.value[0].fixed = !0, d.value.unshift(s.value[0]));
    const Y = s.value.filter((M) => !M.fixed);
    i.value = [].concat(d.value).concat(Y).concat(f.value);
    const re = Xo(Y), ce = Xo(d.value), $ = Xo(f.value);
    h.value = re.length, C.value = ce.length, g.value = $.length, u.value = [].concat(ce).concat(re).concat($), a.value = d.value.length > 0 || f.value.length > 0;
  }, q = (Y, re = !1) => {
    Y && R(), re ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, le = (Y) => b.value.includes(Y), F = () => {
    y.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, P = () => {
    let Y;
    if (o.value) {
      Y = [];
      const re = On(b.value, o.value), ce = On(r.value, o.value);
      for (const $ in re)
        Zt(re, $) && !ce[$] && Y.push(re[$].row);
    } else
      Y = b.value.filter((re) => !r.value.includes(re));
    if (Y.length) {
      const re = b.value.filter((ce) => !Y.includes(ce));
      b.value = re, t.emit("selection-change", re.slice());
    }
  }, Z = () => (b.value || []).slice(), pe = (Y, re = void 0, ce = !0) => {
    if (go(b.value, Y, re)) {
      const M = (b.value || []).slice();
      ce && t.emit("select", M, Y), t.emit("selection-change", M);
    }
  }, ge = () => {
    var Y, re;
    const ce = E.value ? !y.value : !(y.value || b.value.length);
    y.value = ce;
    let $ = !1, M = 0;
    const Q = (re = (Y = t == null ? void 0 : t.store) == null ? void 0 : Y.states) == null ? void 0 : re.rowKey.value;
    r.value.forEach((ee, Oe) => {
      const Ie = Oe + M;
      T.value ? T.value.call(null, ee, Ie) && go(b.value, ee, ce) && ($ = !0) : go(b.value, ee, ce) && ($ = !0), M += se(He(ee, Q));
    }), $ && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, ye = () => {
    const Y = On(b.value, o.value);
    r.value.forEach((re) => {
      const ce = He(re, o.value), $ = Y[ce];
      $ && (b.value[$.index] = re);
    });
  }, be = () => {
    var Y, re, ce;
    if (((Y = r.value) == null ? void 0 : Y.length) === 0) {
      y.value = !1;
      return;
    }
    let $;
    o.value && ($ = On(b.value, o.value));
    const M = function(Ie) {
      return $ ? !!$[He(Ie, o.value)] : b.value.includes(Ie);
    };
    let Q = !0, ee = 0, Oe = 0;
    for (let Ie = 0, Pt = (r.value || []).length; Ie < Pt; Ie++) {
      const Ct = (ce = (re = t == null ? void 0 : t.store) == null ? void 0 : re.states) == null ? void 0 : ce.rowKey.value, Je = Ie + Oe, nn = r.value[Ie], dt = T.value && T.value.call(null, nn, Je);
      if (M(nn))
        ee++;
      else if (!T.value || dt) {
        Q = !1;
        break;
      }
      Oe += se(He(nn, Ct));
    }
    ee === 0 && (Q = !1), y.value = Q;
  }, se = (Y) => {
    var re;
    if (!t || !t.store)
      return 0;
    const { treeData: ce } = t.store.states;
    let $ = 0;
    const M = (re = ce.value[Y]) == null ? void 0 : re.children;
    return M && ($ += M.length, M.forEach((Q) => {
      $ += se(Q);
    })), $;
  }, Ee = (Y, re) => {
    Array.isArray(Y) || (Y = [Y]);
    const ce = {};
    return Y.forEach(($) => {
      S.value[$.id] = re, ce[$.columnKey || $.id] = re;
    }), ce;
  }, Te = (Y, re, ce) => {
    L.value && L.value !== Y && (L.value.order = null), L.value = Y, V.value = re, U.value = ce;
  }, de = () => {
    let Y = m(l);
    Object.keys(S.value).forEach((re) => {
      const ce = S.value[re];
      if (!ce || ce.length === 0)
        return;
      const $ = Fu({
        columns: u.value
      }, re);
      $ && $.filterMethod && (Y = Y.filter((M) => ce.some((Q) => $.filterMethod.call(null, Q, M, $))));
    }), x.value = Y;
  }, Le = () => {
    r.value = Y2(x.value, {
      sortingColumn: L.value,
      sortProp: V.value,
      sortOrder: U.value
    });
  }, Xe = (Y = void 0) => {
    Y && Y.filter || de(), Le();
  }, gt = (Y) => {
    const { tableHeaderRef: re } = t.refs;
    if (!re)
      return;
    const ce = Object.assign({}, re.filterPanels), $ = Object.keys(ce);
    if ($.length)
      if (typeof Y == "string" && (Y = [Y]), Array.isArray(Y)) {
        const M = Y.map((Q) => D2({
          columns: u.value
        }, Q));
        $.forEach((Q) => {
          const ee = M.find((Oe) => Oe.id === Q);
          ee && (ee.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: M,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        $.forEach((M) => {
          const Q = u.value.find((ee) => ee.id === M);
          Q && (Q.filteredValue = []);
        }), S.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, Ze = () => {
    L.value && (Te(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: st,
    toggleRowExpansion: At,
    updateExpandRows: Lt,
    states: it,
    isRowExpanded: Mt
  } = U2({
    data: r,
    rowKey: o
  }), {
    updateTreeExpandKeys: Vt,
    toggleTreeExpansion: Ge,
    updateTreeData: je,
    loadOrToggle: ut,
    states: B
  } = G2({
    data: r,
    rowKey: o
  }), {
    updateCurrentRowData: he,
    updateCurrentRow: Ne,
    setCurrentRowKey: ct,
    states: Wt
  } = q2({
    data: r,
    rowKey: o
  });
  return {
    assertRowKey: K,
    updateColumns: R,
    scheduleLayout: q,
    isSelected: le,
    clearSelection: F,
    cleanSelection: P,
    getSelectionRows: Z,
    toggleRowSelection: pe,
    _toggleAllSelection: ge,
    toggleAllSelection: null,
    updateSelectionByRowKey: ye,
    updateAllSelected: be,
    updateFilters: Ee,
    updateCurrentRow: Ne,
    updateSort: Te,
    execFilter: de,
    execSort: Le,
    execQuery: Xe,
    clearFilter: gt,
    clearSort: Ze,
    toggleRowExpansion: At,
    setExpandRowKeysAdapter: (Y) => {
      st(Y), Vt(Y);
    },
    setCurrentRowKey: ct,
    toggleRowExpansionAdapter: (Y, re) => {
      u.value.some(({ type: $ }) => $ === "expand") ? At(Y, re) : Ge(Y, re);
    },
    isRowExpanded: Mt,
    updateExpandRows: Lt,
    updateCurrentRowData: he,
    loadOrToggle: ut,
    updateTreeData: je,
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
      fixedLeafColumns: v,
      rightFixedLeafColumns: c,
      leafColumnsLength: h,
      fixedLeafColumnsLength: C,
      rightFixedLeafColumnsLength: g,
      isAllSelected: y,
      selection: b,
      reserveSelection: w,
      selectOnIndeterminate: E,
      selectable: T,
      filters: S,
      filteredData: x,
      sortingColumn: L,
      sortProp: V,
      sortOrder: U,
      hoverRow: W,
      ...it,
      ...B,
      ...Wt
    }
  };
}
function bl(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = bl(n.children, t)), n);
  });
}
function Wu(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && Wu(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function X2() {
  const e = Se(), t = Q2();
  return {
    ns: te("table"),
    ...t,
    mutations: {
      setData(a, s) {
        const i = m(a._data) !== s;
        a.data.value = s, a._data.value = s, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), m(a.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(a, s, i) {
        const u = m(a._columns);
        let d = [];
        i ? (i && !i.children && (i.children = []), i.children.push(s), d = bl(u, i)) : (u.push(s), d = u), Wu(d), a._columns.value = d, s.type === "selection" && (a.selectable.value = s.selectable, a.reserveSelection.value = s.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      removeColumn(a, s, i) {
        const u = m(a._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((d) => d.id === s.id), 1), ae(() => {
            var d;
            ((d = i.children) == null ? void 0 : d.length) === 0 && delete i.children;
          }), a._columns.value = bl(u, i);
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
        const { sortingColumn: i, sortProp: u, sortOrder: d } = a, f = m(i), p = m(u), v = m(d);
        v === null && (a.sortingColumn.value = null, a.sortProp.value = null);
        const c = { filter: !0 };
        e.store.execQuery(c), (!s || !(s.silent || s.init)) && e.emit("sort-change", {
          column: f,
          prop: p,
          order: v
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
      ae(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const mo = {
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
function Z2(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = X2();
  return n.toggleAllSelection = Pn(n._toggleAllSelection, 10), Object.keys(mo).forEach((o) => {
    ju(Ku(t, o), o, n);
  }), J2(n, t), n;
}
function J2(e, t) {
  Object.keys(mo).forEach((n) => {
    X(() => Ku(t, n), (o) => {
      ju(o, n, e);
    });
  });
}
function ju(e, t, n) {
  let o = e, r = mo[t];
  typeof mo[t] == "object" && (r = r.key, o = o || mo[t].default), n.states[r].value = o;
}
function Ku(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((r) => {
      o = o[r];
    }), o;
  } else
    return e[t];
}
class eC {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = k(null), this.scrollX = k(!1), this.scrollY = k(!1), this.bodyWidth = k(null), this.fixedWidth = k(null), this.rightFixedWidth = k(null), this.gutterWidth = 0;
    for (const n in t)
      Zt(t, n) && (Xt(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
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
    if (!me)
      return;
    const o = this.table.vnode.el;
    if (t = V2(t), this.height.value = Number(t), !o && (t || t === 0))
      return ae(() => this.setHeight(t, n));
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
    if (!me)
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
          const u = l.reduce((p, v) => p + Number(v.minWidth || 80), 0), d = i / u;
          let f = 0;
          l.forEach((p, v) => {
            if (v === 0)
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
const { CheckboxGroup: tC } = Rn, nC = G({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Rn,
    ElCheckboxGroup: tC,
    ElScrollbar: Ql,
    ElTooltip: gu,
    ElIcon: Me,
    ArrowDown: Ti,
    ArrowUp: ng
  },
  directives: { ClickOutside: wu },
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
    const t = Se(), { t: n } = Ot(), o = te("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const l = k(!1), a = k(null), s = O(() => e.column && e.column.filters), i = O({
      get: () => {
        var w;
        return (((w = e.column) == null ? void 0 : w.filteredValue) || [])[0];
      },
      set: (w) => {
        u.value && (typeof w < "u" && w !== null ? u.value.splice(0, 1, w) : u.value.splice(0, 1));
      }
    }), u = O({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(w) {
        e.column && e.upDataColumn("filteredValue", w);
      }
    }), d = O(() => e.column ? e.column.filterMultiple : !0), f = (w) => w.value === i.value, p = () => {
      l.value = !1;
    }, v = (w) => {
      w.stopPropagation(), l.value = !l.value;
    }, c = () => {
      l.value = !1;
    }, h = () => {
      y(u.value), p();
    }, C = () => {
      u.value = [], y(u.value), p();
    }, g = (w) => {
      i.value = w, y(typeof w < "u" && w !== null ? u.value : []), p();
    }, y = (w) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: w
      }), e.store.updateAllSelected();
    };
    X(l, (w) => {
      e.column && e.upDataColumn("filterOpened", w);
    }, {
      immediate: !0
    });
    const b = O(() => {
      var w, E;
      return (E = (w = a.value) == null ? void 0 : w.popperRef) == null ? void 0 : E.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: d,
      filteredValue: u,
      filterValue: i,
      filters: s,
      handleConfirm: h,
      handleReset: C,
      handleSelect: g,
      isActive: f,
      t: n,
      ns: o,
      showFilterPanel: v,
      hideFilterPanel: c,
      popperPaneRef: b,
      tooltip: a
    };
  }
}), oC = { key: 0 }, rC = ["disabled"], lC = ["label", "onClick"];
function aC(e, t, n, o, r, l) {
  const a = ke("el-checkbox"), s = ke("el-checkbox-group"), i = ke("el-scrollbar"), u = ke("arrow-up"), d = ke("arrow-down"), f = ke("el-icon"), p = ke("el-tooltip"), v = Sl("click-outside");
  return _(), H(p, {
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
    content: j(() => [
      e.multiple ? (_(), N("div", oC, [
        I("div", {
          class: A(e.ns.e("content"))
        }, [
          oe(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: j(() => [
              oe(s, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => e.filteredValue = c),
                class: A(e.ns.e("checkbox-group"))
              }, {
                default: j(() => [
                  (_(!0), N(Be, null, cn(e.filters, (c) => (_(), H(a, {
                    key: c.value,
                    label: c.value
                  }, {
                    default: j(() => [
                      Yt(ue(c.text), 1)
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
        I("div", {
          class: A(e.ns.e("bottom"))
        }, [
          I("button", {
            class: A({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...c) => e.handleConfirm && e.handleConfirm(...c))
          }, ue(e.t("el.table.confirmFilter")), 11, rC),
          I("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...c) => e.handleReset && e.handleReset(...c))
          }, ue(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (_(), N("ul", {
        key: 1,
        class: A(e.ns.e("list"))
      }, [
        I("li", {
          class: A([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (c) => e.handleSelect(null))
        }, ue(e.t("el.table.clearFilter")), 3),
        (_(!0), N(Be, null, cn(e.filters, (c) => (_(), N("li", {
          key: c.value,
          class: A([e.ns.e("list-item"), e.ns.is("active", e.isActive(c))]),
          label: c.value,
          onClick: (h) => e.handleSelect(c.value)
        }, ue(c.text), 11, lC))), 128))
      ], 2))
    ]),
    default: j(() => [
      Ce((_(), N("span", {
        class: A([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...c) => e.showFilterPanel && e.showFilterPanel(...c))
      }, [
        oe(f, null, {
          default: j(() => [
            e.column.filterOpened ? (_(), H(u, { key: 0 })) : (_(), H(d, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [v, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var sC = /* @__PURE__ */ fe(nC, [["render", aC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function Uu(e) {
  const t = Se();
  Cl(() => {
    n.value.addObserver(t);
  }), xe(() => {
    o(n.value), r(n.value);
  }), Ks(() => {
    o(n.value), r(n.value);
  }), cr(() => {
    n.value.removeObserver(t);
  });
  const n = O(() => {
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
      const p = s[d], v = p.getAttribute("name"), c = u[v];
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
const Ht = Symbol("ElTable");
function iC(e, t) {
  const n = Se(), o = ve(Ht), r = (h) => {
    h.stopPropagation();
  }, l = (h, C) => {
    !C.filters && C.sortable ? c(h, C, !1) : C.filterable && !C.sortable && r(h), o == null || o.emit("header-click", C, h);
  }, a = (h, C) => {
    o == null || o.emit("header-contextmenu", C, h);
  }, s = k(null), i = k(!1), u = k({}), d = (h, C) => {
    if (me && !(C.children && C.children.length > 0) && s.value && e.border) {
      i.value = !0;
      const g = o;
      t("set-drag-visible", !0);
      const b = (g == null ? void 0 : g.vnode.el).getBoundingClientRect().left, w = n.vnode.el.querySelector(`th.${C.id}`), E = w.getBoundingClientRect(), T = E.left - b + 30;
      So(w, "noclick"), u.value = {
        startMouseLeft: h.clientX,
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
      const x = (V) => {
        const U = V.clientX - u.value.startMouseLeft, W = u.value.startLeft + U;
        S.style.left = `${Math.max(T, W)}px`;
      }, L = () => {
        if (i.value) {
          const { startColumnLeft: V, startLeft: U } = u.value, K = Number.parseInt(S.style.left, 10) - V;
          C.width = C.realWidth = K, g == null || g.emit("header-dragend", C.width, U - V, C, h), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, s.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", L), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          vn(w, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", x), document.addEventListener("mouseup", L);
    }
  }, f = (h, C) => {
    var g;
    if (C.children && C.children.length > 0)
      return;
    const y = (g = h.target) == null ? void 0 : g.closest("th");
    if (!(!C || !C.resizable) && !i.value && e.border) {
      const b = y.getBoundingClientRect(), w = document.body.style;
      b.width > 12 && b.right - h.pageX < 8 ? (w.cursor = "col-resize", Kn(y, "is-sortable") && (y.style.cursor = "col-resize"), s.value = C) : i.value || (w.cursor = "", Kn(y, "is-sortable") && (y.style.cursor = "pointer"), s.value = null);
    }
  }, p = () => {
    me && (document.body.style.cursor = "");
  }, v = ({ order: h, sortOrders: C }) => {
    if (h === "")
      return C[0];
    const g = C.indexOf(h || null);
    return C[g > C.length - 2 ? 0 : g + 1];
  }, c = (h, C, g) => {
    var y;
    h.stopPropagation();
    const b = C.order === g ? null : g || v(C), w = (y = h.target) == null ? void 0 : y.closest("th");
    if (w && Kn(w, "noclick")) {
      vn(w, "noclick");
      return;
    }
    if (!C.sortable)
      return;
    const E = e.store.states;
    let T = E.sortProp.value, S;
    const x = E.sortingColumn.value;
    (x !== C || x === C && x.order === null) && (x && (x.order = null), E.sortingColumn.value = C, T = C.property), b ? S = C.order = b : S = C.order = null, E.sortProp.value = T, E.sortOrder.value = S, o == null || o.store.commit("changeSortCondition");
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
function uC(e) {
  const t = ve(Ht), n = te("table");
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
      const v = ra(i, d.fixed, e.store, u);
      return Jn(v, "left"), Jn(v, "right"), Object.assign({}, p, v);
    },
    getHeaderCellClass: (s, i, u, d) => {
      const f = oa(n.b(), i, d.fixed, e.store, u), p = [
        d.id,
        d.order,
        d.headerAlign,
        d.className,
        d.labelClassName,
        ...f
      ];
      d.children || p.push("is-leaf"), d.sortable && p.push("is-sortable");
      const v = t == null ? void 0 : t.props.headerCellClassName;
      return typeof v == "string" ? p.push(v) : typeof v == "function" && p.push(v.call(null, {
        rowIndex: s,
        columnIndex: i,
        row: u,
        column: d
      })), p.push(n.e("cell")), p.filter((c) => Boolean(c)).join(" ");
    }
  };
}
const qu = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, qu(n.children))) : t.push(n);
  }), t;
}, cC = (e) => {
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
  return qu(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((a) => a.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function dC(e) {
  const t = ve(Ht), n = O(() => cC(e.store.states.originColumns.value));
  return {
    isGroup: O(() => {
      const l = n.value.length > 1;
      return l && t && (t.state.isGroup.value = !0), l;
    }),
    toggleAllSelection: (l) => {
      l.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var fC = G({
  name: "ElTableHeader",
  components: {
    ElCheckbox: Rn
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
    const n = Se(), o = ve(Ht), r = te("table"), l = k({}), { onColumnsChange: a, onScrollableChange: s } = Uu(o);
    xe(async () => {
      await ae(), await ae();
      const { prop: T, order: S } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: T, order: S, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: d,
      handleMouseMove: f,
      handleMouseOut: p,
      handleSortClick: v,
      handleFilterClick: c
    } = iC(e, t), {
      getHeaderRowStyle: h,
      getHeaderRowClass: C,
      getHeaderCellStyle: g,
      getHeaderCellClass: y
    } = uC(e), { isGroup: b, toggleAllSelection: w, columnRows: E } = dC(e);
    return n.state = {
      onColumnsChange: a,
      onScrollableChange: s
    }, n.filterPanels = l, {
      ns: r,
      filterPanels: l,
      onColumnsChange: a,
      onScrollableChange: s,
      columnRows: E,
      getHeaderRowClass: C,
      getHeaderRowStyle: h,
      getHeaderCellClass: y,
      getHeaderCellStyle: g,
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: d,
      handleMouseMove: f,
      handleMouseOut: p,
      handleSortClick: v,
      handleFilterClick: c,
      isGroup: b,
      toggleAllSelection: w
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
      store: v,
      $parent: c
    } = this;
    let h = 1;
    return J("thead", {
      class: { [e.is("group")]: t }
    }, n.map((C, g) => J("tr", {
      class: l(g),
      key: g,
      style: a(g)
    }, C.map((y, b) => (y.rowSpan > h && (h = y.rowSpan), J("th", {
      class: r(g, b, C, y),
      colspan: y.colSpan,
      key: `${y.id}-thead`,
      rowspan: y.rowSpan,
      style: o(g, b, C, y),
      onClick: (w) => s(w, y),
      onContextmenu: (w) => i(w, y),
      onMousedown: (w) => u(w, y),
      onMousemove: (w) => d(w, y),
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
          store: v,
          _self: c
        }) : y.label,
        y.sortable && J("span", {
          onClick: (w) => f(w, y),
          class: "caret-wrapper"
        }, [
          J("i", {
            onClick: (w) => f(w, y, "ascending"),
            class: "sort-caret ascending"
          }),
          J("i", {
            onClick: (w) => f(w, y, "descending"),
            class: "sort-caret descending"
          })
        ]),
        y.filterable && J(sC, {
          store: v,
          placement: y.filterPlacement || "bottom-start",
          column: y,
          upDataColumn: (w, E) => {
            y[w] = E;
          }
        })
      ])
    ]))))));
  }
});
function pC(e) {
  const t = ve(Ht), n = k(""), o = k(J("div")), r = (p, v, c) => {
    var h;
    const C = t, g = jr(p);
    let y;
    const b = (h = C == null ? void 0 : C.vnode.el) == null ? void 0 : h.dataset.prefix;
    g && (y = Ns({
      columns: e.store.states.columns.value
    }, g, b), y && (C == null || C.emit(`cell-${c}`, v, y, g, p))), C == null || C.emit(`row-${c}`, v, y, p);
  }, l = (p, v) => {
    r(p, v, "dblclick");
  }, a = (p, v) => {
    e.store.commit("setCurrentRow", v), r(p, v, "click");
  }, s = (p, v) => {
    r(p, v, "contextmenu");
  }, i = Pn((p) => {
    e.store.commit("setHoverRow", p);
  }, 30), u = Pn(() => {
    e.store.commit("setHoverRow", null);
  }, 30);
  return {
    handleDoubleClick: l,
    handleClick: a,
    handleContextMenu: s,
    handleMouseEnter: i,
    handleMouseLeave: u,
    handleCellMouseEnter: (p, v, c) => {
      var h;
      const C = t, g = jr(p), y = (h = C == null ? void 0 : C.vnode.el) == null ? void 0 : h.dataset.prefix;
      if (g) {
        const S = Ns({
          columns: e.store.states.columns.value
        }, g, y), x = C.hoverState = { cell: g, column: S, row: v };
        C == null || C.emit("cell-mouse-enter", x.row, x.column, x.cell, p);
      }
      if (!c)
        return;
      const b = p.target.querySelector(".cell");
      if (!(Kn(b, `${y}-tooltip`) && b.childNodes.length))
        return;
      const w = document.createRange();
      w.setStart(b, 0), w.setEnd(b, b.childNodes.length);
      const E = Math.round(w.getBoundingClientRect().width), T = (Number.parseInt(Gt(b, "paddingLeft"), 10) || 0) + (Number.parseInt(Gt(b, "paddingRight"), 10) || 0);
      (E + T > b.offsetWidth || b.scrollWidth > b.offsetWidth) && K2(t == null ? void 0 : t.refs.tableWrapper, g, g.innerText || g.textContent, c);
    },
    handleCellMouseLeave: (p) => {
      if (!jr(p))
        return;
      const c = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", c == null ? void 0 : c.row, c == null ? void 0 : c.column, c == null ? void 0 : c.cell, p);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function vC(e) {
  const t = ve(Ht), n = te("table");
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
      const v = t == null ? void 0 : t.props.cellStyle;
      let c = v ?? {};
      typeof v == "function" && (c = v.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: p
      }));
      const h = ra(d, e == null ? void 0 : e.fixed, e.store);
      return Jn(h, "left"), Jn(h, "right"), Object.assign({}, c, h);
    },
    getCellClass: (u, d, f, p, v) => {
      const c = oa(n.b(), d, e == null ? void 0 : e.fixed, e.store, void 0, v), h = [p.id, p.align, p.className, ...c], C = t == null ? void 0 : t.props.cellClassName;
      return typeof C == "string" ? h.push(C) : typeof C == "function" && h.push(C.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: p
      })), h.push(n.e("cell")), h.filter((g) => Boolean(g)).join(" ");
    },
    getSpan: (u, d, f, p) => {
      let v = 1, c = 1;
      const h = t == null ? void 0 : t.props.spanMethod;
      if (typeof h == "function") {
        const C = h({
          row: u,
          column: d,
          rowIndex: f,
          columnIndex: p
        });
        Array.isArray(C) ? (v = C[0], c = C[1]) : typeof C == "object" && (v = C.rowspan, c = C.colspan);
      }
      return { rowspan: v, colspan: c };
    },
    getColspanRealWidth: (u, d, f) => {
      if (d < 1)
        return u[f].realWidth;
      const p = u.map(({ realWidth: v, width: c }) => v || c).slice(f, f + d);
      return Number(p.reduce((v, c) => Number(v) + Number(c), -1));
    }
  };
}
function hC(e) {
  const t = ve(Ht), n = te("table"), {
    handleDoubleClick: o,
    handleClick: r,
    handleContextMenu: l,
    handleMouseEnter: a,
    handleMouseLeave: s,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: d,
    tooltipTrigger: f
  } = pC(e), {
    getRowStyle: p,
    getRowClass: v,
    getCellStyle: c,
    getCellClass: h,
    getSpan: C,
    getColspanRealWidth: g
  } = vC(e), y = O(() => e.store.states.columns.value.findIndex(({ type: S }) => S === "default")), b = (S, x) => {
    const L = t.props.rowKey;
    return L ? He(S, L) : x;
  }, w = (S, x, L, V = !1) => {
    const { tooltipEffect: U, tooltipOptions: W, store: K } = e, { indent: z, columns: R } = K.states, q = v(S, x);
    let le = !0;
    return L && (q.push(n.em("row", `level-${L.level}`)), le = L.display), J("tr", {
      style: [le ? null : {
        display: "none"
      }, p(S, x)],
      class: q,
      key: b(S, x),
      onDblclick: (P) => o(P, S),
      onClick: (P) => r(P, S),
      onContextmenu: (P) => l(P, S),
      onMouseenter: () => a(x),
      onMouseleave: s
    }, R.value.map((P, Z) => {
      const { rowspan: pe, colspan: ge } = C(S, P, x, Z);
      if (!pe || !ge)
        return null;
      const ye = { ...P };
      ye.realWidth = g(R.value, ge, Z);
      const be = {
        store: e.store,
        _self: e.context || t,
        column: ye,
        row: S,
        $index: x,
        cellIndex: Z,
        expanded: V
      };
      Z === y.value && L && (be.treeNode = {
        indent: L.level * z.value,
        level: L.level
      }, typeof L.expanded == "boolean" && (be.treeNode.expanded = L.expanded, "loading" in L && (be.treeNode.loading = L.loading), "noLazyChildren" in L && (be.treeNode.noLazyChildren = L.noLazyChildren)));
      const se = `${x},${Z}`, Ee = ye.columnKey || ye.rawColumnKey || "", Te = E(Z, P, be), de = P.showOverflowTooltip && yi({
        effect: U
      }, W, P.showOverflowTooltip);
      return J("td", {
        style: c(x, Z, S, P),
        class: h(x, Z, S, P, ge - 1),
        key: `${Ee}${se}`,
        rowspan: pe,
        colspan: ge,
        onMouseenter: (Le) => i(Le, S, de),
        onMouseleave: u
      }, [Te]);
    }));
  }, E = (S, x, L) => x.renderCell(L);
  return {
    wrappedRowRender: (S, x) => {
      const L = e.store, { isRowExpanded: V, assertRowKey: U } = L, { treeData: W, lazyTreeNodeMap: K, childrenColumnName: z, rowKey: R } = L.states, q = L.states.columns.value;
      if (q.some(({ type: F }) => F === "expand")) {
        const F = V(S), P = w(S, x, void 0, F), Z = t.renderExpanded;
        return F ? Z ? [
          [
            P,
            J("tr", {
              key: `expanded-row__${P.key}`
            }, [
              J("td", {
                colspan: q.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [Z({ row: S, $index: x, store: L, expanded: F })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), P) : [[P]];
      } else if (Object.keys(W.value).length) {
        U();
        const F = He(S, R.value);
        let P = W.value[F], Z = null;
        P && (Z = {
          expanded: P.expanded,
          level: P.level,
          display: !0
        }, typeof P.lazy == "boolean" && (typeof P.loaded == "boolean" && P.loaded && (Z.noLazyChildren = !(P.children && P.children.length)), Z.loading = P.loading));
        const pe = [w(S, x, Z)];
        if (P) {
          let ge = 0;
          const ye = (se, Ee) => {
            se && se.length && Ee && se.forEach((Te) => {
              const de = {
                display: Ee.display && Ee.expanded,
                level: Ee.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, Le = He(Te, R.value);
              if (Le == null)
                throw new Error("For nested data item, row-key is required.");
              if (P = { ...W.value[Le] }, P && (de.expanded = P.expanded, P.level = P.level || de.level, P.display = !!(P.expanded && de.display), typeof P.lazy == "boolean" && (typeof P.loaded == "boolean" && P.loaded && (de.noLazyChildren = !(P.children && P.children.length)), de.loading = P.loading)), ge++, pe.push(w(Te, x + ge, de)), P) {
                const Xe = K.value[Le] || Te[z.value];
                ye(Xe, P);
              }
            });
          };
          P.display = !0;
          const be = K.value[F] || S[z.value];
          ye(be, P);
        }
        return pe;
      } else
        return w(S, x, void 0);
    },
    tooltipContent: d,
    tooltipTrigger: f
  };
}
const gC = {
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
var mC = G({
  name: "ElTableBody",
  props: gC,
  setup(e) {
    const t = Se(), n = ve(Ht), o = te("table"), { wrappedRowRender: r, tooltipContent: l, tooltipTrigger: a } = hC(e), { onColumnsChange: s, onScrollableChange: i } = Uu(n);
    return X(e.store.states.hoverRow, (u, d) => {
      if (!e.store.states.isComplex.value || !me)
        return;
      let f = window.requestAnimationFrame;
      f || (f = (p) => window.setTimeout(p, 16)), f(() => {
        const p = t == null ? void 0 : t.vnode.el, v = Array.from((p == null ? void 0 : p.children) || []).filter((C) => C == null ? void 0 : C.classList.contains(`${o.e("row")}`)), c = v[d], h = v[u];
        c && vn(c, "hover-row"), h && So(h, "hover-row");
      });
    }), cr(() => {
      var u;
      (u = Ut) == null || u();
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
function la(e) {
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
la.props = ["columns", "tableLayout"];
function bC() {
  const e = ve(Ht), t = e == null ? void 0 : e.store, n = O(() => t.states.fixedLeafColumnsLength.value), o = O(() => t.states.rightFixedColumns.value.length), r = O(() => t.states.columns.value.length), l = O(() => t.states.fixedColumns.value.length), a = O(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: r,
    leftFixedCount: l,
    rightFixedCount: a,
    columns: t.states.columns
  };
}
function yC(e) {
  const { columns: t } = bC(), n = te("table");
  return {
    getCellClasses: (l, a) => {
      const s = l[a], i = [
        n.e("cell"),
        s.id,
        s.align,
        s.labelClassName,
        ...oa(n.b(), a, s.fixed, e.store)
      ];
      return s.className && i.push(s.className), s.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, a) => {
      const s = ra(a, l.fixed, e.store);
      return Jn(s, "left"), Jn(s, "right"), s;
    },
    columns: t
  };
}
var wC = G({
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
    const { getCellClasses: t, getCellStyles: n, columns: o } = yC(e);
    return {
      ns: te("table"),
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
          const h = `${c}`.split(".")[1];
          f.push(h ? h.length : 0);
        }
      });
      const v = Math.max.apply(null, f);
      p ? s[u] = "" : s[u] = d.reduce((c, h) => {
        const C = Number(h);
        return Number.isNaN(+C) ? c : Number.parseFloat((c + h).toFixed(Math.min(v, 20)));
      }, 0);
    }), J("table", {
      class: l.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      la({
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
function CC(e) {
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
function SC(e, t, n, o) {
  const r = k(!1), l = k(null), a = k(!1), s = (F) => {
    a.value = F;
  }, i = k({
    width: null,
    height: null,
    headerHeight: null
  }), u = k(!1), d = {
    display: "inline-block",
    verticalAlign: "middle"
  }, f = k(), p = k(0), v = k(0), c = k(0), h = k(0);
  xn(() => {
    t.setHeight(e.height);
  }), xn(() => {
    t.setMaxHeight(e.maxHeight);
  }), X(() => [e.currentRowKey, n.states.rowKey], ([F, P]) => {
    !m(P) || !m(F) || n.setCurrentRowKey(`${F}`);
  }, {
    immediate: !0
  }), X(() => e.data, (F) => {
    o.store.commit("setData", F);
  }, {
    immediate: !0,
    deep: !0
  }), xn(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const C = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, g = (F, P) => {
    const { pixelX: Z, pixelY: pe } = P;
    Math.abs(Z) >= Math.abs(pe) && (o.refs.bodyWrapper.scrollLeft += P.pixelX / 5);
  }, y = O(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), b = O(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), w = () => {
    y.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(x);
  };
  xe(async () => {
    await ae(), n.updateColumns(), L(), requestAnimationFrame(w);
    const F = o.vnode.el, P = o.refs.headerWrapper;
    e.flexible && F && F.parentElement && (F.parentElement.style.minWidth = "0"), i.value = {
      width: f.value = F.offsetWidth,
      height: F.offsetHeight,
      headerHeight: e.showHeader && P ? P.offsetHeight : null
    }, n.states.columns.value.forEach((Z) => {
      Z.filteredValue && Z.filteredValue.length && o.store.commit("filterChange", {
        column: Z,
        values: Z.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const E = (F, P) => {
    if (!F)
      return;
    const Z = Array.from(F.classList).filter((pe) => !pe.startsWith("is-scrolling-"));
    Z.push(t.scrollX.value ? P : "is-scrolling-none"), F.className = Z.join(" ");
  }, T = (F) => {
    const { tableWrapper: P } = o.refs;
    E(P, F);
  }, S = (F) => {
    const { tableWrapper: P } = o.refs;
    return !!(P && P.classList.contains(F));
  }, x = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const se = "is-scrolling-none";
      S(se) || T(se);
      return;
    }
    const F = o.refs.scrollBarRef.wrapRef;
    if (!F)
      return;
    const { scrollLeft: P, offsetWidth: Z, scrollWidth: pe } = F, { headerWrapper: ge, footerWrapper: ye } = o.refs;
    ge && (ge.scrollLeft = P), ye && (ye.scrollLeft = P);
    const be = pe - Z - 1;
    P >= be ? T("is-scrolling-right") : T(P === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, L = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && Nt(o.refs.scrollBarRef.wrapRef, "scroll", x, {
      passive: !0
    }), e.fit ? Nn(o.vnode.el, V) : Nt(window, "resize", V), Nn(o.refs.bodyWrapper, () => {
      var F, P;
      V(), (P = (F = o.refs) == null ? void 0 : F.scrollBarRef) == null || P.update();
    }));
  }, V = () => {
    var F, P, Z;
    const pe = o.vnode.el;
    if (!o.$ready || !pe)
      return;
    let ge = !1;
    const {
      width: ye,
      height: be,
      headerHeight: se
    } = i.value, Ee = f.value = pe.offsetWidth;
    ye !== Ee && (ge = !0);
    const Te = pe.offsetHeight;
    (e.height || y.value) && be !== Te && (ge = !0);
    const de = e.tableLayout === "fixed" ? o.refs.headerWrapper : (F = o.refs.tableHeaderRef) == null ? void 0 : F.$el;
    e.showHeader && (de == null ? void 0 : de.offsetHeight) !== se && (ge = !0), p.value = ((P = o.refs.tableWrapper) == null ? void 0 : P.scrollHeight) || 0, c.value = (de == null ? void 0 : de.scrollHeight) || 0, h.value = ((Z = o.refs.footerWrapper) == null ? void 0 : Z.offsetHeight) || 0, v.value = p.value - c.value - h.value, ge && (i.value = {
      width: Ee,
      height: Te,
      headerHeight: e.showHeader && (de == null ? void 0 : de.offsetHeight) || 0
    }, w());
  }, U = hn(), W = O(() => {
    const { bodyWidth: F, scrollY: P, gutterWidth: Z } = t;
    return F.value ? `${F.value - (P.value ? Z : 0)}px` : "";
  }), K = O(() => e.maxHeight ? "fixed" : e.tableLayout), z = O(() => {
    if (e.data && e.data.length)
      return null;
    let F = "100%";
    e.height && v.value && (F = `${v.value}px`);
    const P = f.value;
    return {
      width: P ? `${P}px` : "",
      height: F
    };
  }), R = O(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), q = O(() => {
    if (e.height)
      return {
        height: "100%"
      };
    if (e.maxHeight) {
      if (Number.isNaN(Number(e.maxHeight)))
        return {
          maxHeight: `calc(${e.maxHeight} - ${c.value + h.value}px)`
        };
      {
        const F = e.maxHeight;
        if (p.value >= Number(F))
          return {
            maxHeight: `${p.value - c.value - h.value}px`
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
    handleMouseLeave: C,
    handleHeaderFooterMousewheel: g,
    tableSize: U,
    emptyBlockStyle: z,
    handleFixedMousewheel: (F, P) => {
      const Z = o.refs.bodyWrapper;
      if (Math.abs(P.spinY) > 0) {
        const pe = Z.scrollTop;
        P.pixelY < 0 && pe !== 0 && F.preventDefault(), P.pixelY > 0 && Z.scrollHeight - Z.clientHeight > pe && F.preventDefault(), Z.scrollTop += Math.ceil(P.pixelY / 5);
      } else
        Z.scrollLeft += Math.ceil(P.pixelX / 5);
    },
    resizeProxyVisible: a,
    bodyWidth: W,
    resizeState: i,
    doLayout: w,
    tableBodyStyles: b,
    tableLayout: K,
    scrollbarViewStyle: d,
    tableInnerStyle: R,
    scrollbarStyle: q
  };
}
var EC = {
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
const _C = () => {
  const e = k(), t = (l, a) => {
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
let TC = 1;
const $C = G({
  name: "ElTable",
  directives: {
    Mousewheel: T1
  },
  components: {
    TableHeader: fC,
    TableBody: mC,
    TableFooter: wC,
    ElScrollbar: Ql,
    hColgroup: la
  },
  props: EC,
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
    const { t } = Ot(), n = te("table"), o = Se();
    rt(Ht, o);
    const r = Z2(o, e);
    o.store = r;
    const l = new eC({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = l;
    const a = O(() => (r.states.data.value || []).length === 0), {
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: p,
      toggleRowExpansion: v,
      clearSort: c,
      sort: h
    } = CC(r), {
      isHidden: C,
      renderExpanded: g,
      setDragVisible: y,
      isGroup: b,
      handleMouseLeave: w,
      handleHeaderFooterMousewheel: E,
      tableSize: T,
      emptyBlockStyle: S,
      handleFixedMousewheel: x,
      resizeProxyVisible: L,
      bodyWidth: V,
      resizeState: U,
      doLayout: W,
      tableBodyStyles: K,
      tableLayout: z,
      scrollbarViewStyle: R,
      tableInnerStyle: q,
      scrollbarStyle: le
    } = SC(e, l, r, o), { scrollBarRef: F, scrollTo: P, setScrollLeft: Z, setScrollTop: pe } = _C(), ge = Pn(W, 50), ye = `${n.namespace.value}-table_${TC++}`;
    o.tableId = ye, o.state = {
      isGroup: b,
      resizeState: U,
      doLayout: W,
      debouncedUpdateLayout: ge
    };
    const be = O(() => e.sumText || t("el.table.sumText")), se = O(() => e.emptyText || t("el.table.emptyText"));
    return {
      ns: n,
      layout: l,
      store: r,
      handleHeaderFooterMousewheel: E,
      handleMouseLeave: w,
      tableId: ye,
      tableSize: T,
      isHidden: C,
      isEmpty: a,
      renderExpanded: g,
      resizeProxyVisible: L,
      resizeState: U,
      isGroup: b,
      bodyWidth: V,
      tableBodyStyles: K,
      emptyBlockStyle: S,
      debouncedUpdateLayout: ge,
      handleFixedMousewheel: x,
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: p,
      toggleRowExpansion: v,
      clearSort: c,
      doLayout: W,
      sort: h,
      t,
      setDragVisible: y,
      context: o,
      computedSumText: be,
      computedEmptyText: se,
      tableLayout: z,
      scrollbarViewStyle: R,
      tableInnerStyle: q,
      scrollbarStyle: le,
      scrollBarRef: F,
      scrollTo: P,
      setScrollLeft: Z,
      setScrollTop: pe
    };
  }
}), kC = ["data-prefix"], OC = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function xC(e, t, n, o, r, l) {
  const a = ke("hColgroup"), s = ke("table-header"), i = ke("table-body"), u = ke("el-scrollbar"), d = ke("table-footer"), f = Sl("mousewheel");
  return _(), N("div", {
    ref: "tableWrapper",
    class: A([
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
    style: _e(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (p) => e.handleMouseLeave())
  }, [
    I("div", {
      class: A(e.ns.e("inner-wrapper")),
      style: _e(e.tableInnerStyle)
    }, [
      I("div", OC, [
        ne(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? Ce((_(), N("div", {
        key: 0,
        ref: "headerWrapper",
        class: A(e.ns.e("header-wrapper"))
      }, [
        I("table", {
          ref: "tableHeader",
          class: A(e.ns.e("header")),
          style: _e(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          oe(a, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          oe(s, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [f, e.handleHeaderFooterMousewheel]
      ]) : D("v-if", !0),
      I("div", {
        ref: "bodyWrapper",
        class: A(e.ns.e("body-wrapper"))
      }, [
        oe(u, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: j(() => [
            I("table", {
              ref: "tableBody",
              class: A(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: _e({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              oe(a, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (_(), H(s, {
                key: 0,
                ref: "tableHeaderRef",
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : D("v-if", !0),
              oe(i, {
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
            e.isEmpty ? (_(), N("div", {
              key: 0,
              ref: "emptyBlock",
              style: _e(e.emptyBlockStyle),
              class: A(e.ns.e("empty-block"))
            }, [
              I("span", {
                class: A(e.ns.e("empty-text"))
              }, [
                ne(e.$slots, "empty", {}, () => [
                  Yt(ue(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : D("v-if", !0),
            e.$slots.append ? (_(), N("div", {
              key: 1,
              ref: "appendWrapper",
              class: A(e.ns.e("append-wrapper"))
            }, [
              ne(e.$slots, "append")
            ], 2)) : D("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? Ce((_(), N("div", {
        key: 1,
        ref: "footerWrapper",
        class: A(e.ns.e("footer-wrapper"))
      }, [
        oe(d, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: _e(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [qe, !e.isEmpty],
        [f, e.handleHeaderFooterMousewheel]
      ]) : D("v-if", !0),
      e.border || e.isGroup ? (_(), N("div", {
        key: 2,
        class: A(e.ns.e("border-left-patch"))
      }, null, 2)) : D("v-if", !0)
    ], 6),
    Ce(I("div", {
      ref: "resizeProxy",
      class: A(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [qe, e.resizeProxyVisible]
    ])
  ], 46, kC);
}
var AC = /* @__PURE__ */ fe($C, [["render", xC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const LC = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, MC = {
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
}, PC = (e) => LC[e] || "", NC = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return J(Rn, {
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
      return J(Rn, {
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
          J(Me, null, {
            default: () => [J(Il)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function IC({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const r = t.property, l = r && xh(e, r).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function RC({
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
    let i = Il;
    t.loading && (i = Sr), l.push(J("div", {
      class: s,
      onClick: a
    }, {
      default: () => [
        J(Me, { class: { [r.is("loading")]: t.loading } }, {
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
function Bs(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function BC(e, t) {
  const n = Se();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], a = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, s = Bs(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        Zt(t, u) && X(() => t[u], (d) => {
          let f = d;
          u === "width" && i === "realWidth" && (f = na(d)), u === "minWidth" && i === "realMinWidth" && (f = Du(d)), n.columnConfig.value[u] = f, n.columnConfig.value[i] = f;
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
      }, s = Bs(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        Zt(t, u) && X(() => t[u], (d) => {
          n.columnConfig.value[i] = d;
        });
      });
    }
  };
}
function zC(e, t, n) {
  const o = Se(), r = k(""), l = k(!1), a = k(), s = k(), i = te("table");
  xn(() => {
    a.value = e.align ? `is-${e.align}` : null, a.value;
  }), xn(() => {
    s.value = e.headerAlign ? `is-${e.headerAlign}` : a.value, s.value;
  });
  const u = O(() => {
    let b = o.vnode.vParent || o.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), d = O(() => {
    const { store: b } = o.parent;
    if (!b)
      return !1;
    const { treeData: w } = b.states, E = w.value;
    return E && Object.keys(E).length > 0;
  }), f = k(na(e.width)), p = k(Du(e.minWidth)), v = (b) => (f.value && (b.width = f.value), p.value && (b.minWidth = p.value), !f.value && p.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), c = (b) => {
    const w = b.type, E = NC[w] || {};
    Object.keys(E).forEach((S) => {
      const x = E[S];
      S !== "className" && x !== void 0 && (b[S] = x);
    });
    const T = PC(w);
    if (T) {
      const S = `${m(i.namespace)}-${T}`;
      b.className = b.className ? `${b.className} ${S}` : S;
    }
    return b;
  }, h = (b) => {
    Array.isArray(b) ? b.forEach((E) => w(E)) : w(b);
    function w(E) {
      var T;
      ((T = E == null ? void 0 : E.type) == null ? void 0 : T.name) === "ElTableColumn" && (E.vParent = o);
    }
  };
  return {
    columnId: r,
    realAlign: a,
    isSubColumn: l,
    realHeaderAlign: s,
    columnOrTableParent: u,
    setColumnWidth: v,
    setColumnForcedProps: c,
    setColumnRenders: (b) => {
      e.renderHeader ? Pe("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = (E) => {
        o.columnConfig.value.label;
        const T = t.header;
        return T ? T(E) : b.label;
      });
      let w = b.renderCell;
      return b.type === "expand" ? (b.renderCell = (E) => J("div", {
        class: "cell"
      }, [w(E)]), n.value.renderExpanded = (E) => t.default ? t.default(E) : t.default) : (w = w || IC, b.renderCell = (E) => {
        let T = null;
        if (t.default) {
          const V = t.default(E);
          T = V.some((U) => U.type !== qs) ? V : w(E);
        } else
          T = w(E);
        const S = d.value && E.cellIndex === 0 && E.column.type !== "selection", x = RC(E, S), L = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (L.class = `${L.class} ${m(i.namespace)}-tooltip`, L.style = {
          width: `${(E.column.realWidth || Number(E.column.width)) - 1}px`
        }), h(T), J("div", L, [x, T]);
      }), b;
    },
    getPropsData: (...b) => b.reduce((w, E) => (Array.isArray(E) && E.forEach((T) => {
      w[T] = e[T];
    }), w), {}),
    getColumnElIndex: (b, w) => Array.prototype.indexOf.call(b, w)
  };
}
var FC = {
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
let DC = 1;
var Gu = G({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Rn
  },
  props: FC,
  setup(e, { slots: t }) {
    const n = Se(), o = k({}), r = O(() => {
      let y = n.parent;
      for (; y && !y.tableId; )
        y = y.parent;
      return y;
    }), { registerNormalWatchers: l, registerComplexWatchers: a } = BC(r, e), {
      columnId: s,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: d,
      setColumnWidth: f,
      setColumnForcedProps: p,
      setColumnRenders: v,
      getPropsData: c,
      getColumnElIndex: h,
      realAlign: C
    } = zC(e, t, r), g = d.value;
    s.value = `${g.tableId || g.columnId}_column_${DC++}`, Cl(() => {
      i.value = r.value !== g;
      const y = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, w = {
        ...MC[y],
        id: s.value,
        type: y,
        property: e.prop || e.property,
        align: C,
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
      let L = c([
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
      L = H2(w, L), L = W2(v, f, p)(L), o.value = L, l(), a();
    }), xe(() => {
      var y;
      const b = d.value, w = i.value ? b.vnode.el.children : (y = b.refs.hiddenColumns) == null ? void 0 : y.children, E = () => h(w || [], n.vnode.el);
      o.value.getColumnIndex = E, E() > -1 && r.value.store.commit("insertColumn", o.value, i.value ? b.columnConfig.value : null);
    }), wt(() => {
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
          ((n = a.type) == null ? void 0 : n.name) === "ElTableColumn" || a.shapeFlag & 2 ? r.push(a) : a.type === Be && Array.isArray(a.children) && a.children.forEach((s) => {
            (s == null ? void 0 : s.patchFlag) !== 1024 && !Ve(s == null ? void 0 : s.children) && r.push(s);
          });
      return J("div", r);
    } catch {
      return J("div", []);
    }
  }
});
const HC = ht(AC, {
  TableColumn: Gu
}), VC = no(Gu), Tt = "ElInfiniteScroll", WC = 50, jC = 200, KC = 0, UC = {
  delay: {
    type: Number,
    default: jC
  },
  distance: {
    type: Number,
    default: KC
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  immediate: {
    type: Boolean,
    default: !0
  }
}, aa = (e, t) => Object.entries(UC).reduce((n, [o, r]) => {
  var l, a;
  const { type: s, default: i } = r, u = e.getAttribute(`infinite-scroll-${o}`);
  let d = (a = (l = t[u]) != null ? l : u) != null ? a : i;
  return d = d === "false" ? !1 : d, d = s(d), n[o] = Number.isNaN(d) ? i : d, n;
}, {}), Yu = (e) => {
  const { observer: t } = e[Tt];
  t && (t.disconnect(), delete e[Tt].observer);
}, qC = (e, t) => {
  const { container: n, containerEl: o, instance: r, observer: l, lastScrollTop: a } = e[Tt], { disabled: s, distance: i } = aa(e, r), { clientHeight: u, scrollHeight: d, scrollTop: f } = o, p = f - a;
  if (e[Tt].lastScrollTop = f, l || s || p < 0)
    return;
  let v = !1;
  if (n === e)
    v = d - (u + f) <= i;
  else {
    const { clientTop: c, scrollHeight: h } = e, C = bh(e, o);
    v = f + u >= C + c + h - i;
  }
  v && t.call(r);
};
function Kr(e, t) {
  const { containerEl: n, instance: o } = e[Tt], { disabled: r } = aa(e, o);
  r || n.clientHeight === 0 || (n.scrollHeight <= n.clientHeight ? t.call(o) : Yu(e));
}
const GC = {
  async mounted(e, t) {
    const { instance: n, value: o } = t;
    De(o) || Cr(Tt, "'v-infinite-scroll' binding value must be a function"), await ae();
    const { delay: r, immediate: l } = aa(e, n), a = Mh(e, !0), s = a === window ? document.documentElement : a, i = Ba(qC.bind(null, e, o), r);
    if (a) {
      if (e[Tt] = {
        instance: n,
        container: a,
        containerEl: s,
        delay: r,
        cb: o,
        onScroll: i,
        lastScrollTop: s.scrollTop
      }, l) {
        const u = new MutationObserver(Ba(Kr.bind(null, e, o), WC));
        e[Tt].observer = u, u.observe(e, { childList: !0, subtree: !0 }), Kr(e, o);
      }
      a.addEventListener("scroll", i);
    }
  },
  unmounted(e) {
    const { container: t, onScroll: n } = e[Tt];
    t == null || t.removeEventListener("scroll", n), Yu(e);
  },
  async updated(e) {
    e[Tt] || await ae();
    const { containerEl: t, cb: n, observer: o } = e[Tt];
    t.clientHeight && o && Kr(e, n);
  }
}, yl = GC;
yl.install = (e) => {
  e.directive("InfiniteScroll", yl);
};
const YC = yl;
function QC(e) {
  let t;
  const n = te("loading"), o = k(!1), r = bn({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function l(v) {
    r.text = v;
  }
  function a() {
    const v = r.parent;
    if (!v.vLoadingAddClassList) {
      let c = v.getAttribute("loading-number");
      c = Number.parseInt(c) - 1, c ? v.setAttribute("loading-number", c.toString()) : (vn(v, n.bm("parent", "relative")), v.removeAttribute("loading-number")), vn(v, n.bm("parent", "hidden"));
    }
    s(), f.unmount();
  }
  function s() {
    var v, c;
    (c = (v = p.$el) == null ? void 0 : v.parentNode) == null || c.removeChild(p.$el);
  }
  function i() {
    var v;
    e.beforeClose && !e.beforeClose() || (o.value = !0, clearTimeout(t), t = window.setTimeout(u, 400), r.visible = !1, (v = e.closed) == null || v.call(e));
  }
  function u() {
    if (!o.value)
      return;
    const v = r.parent;
    o.value = !1, v.vLoadingAddClassList = void 0, a();
  }
  const f = dc({
    name: "ElLoading",
    setup() {
      return () => {
        const v = r.spinner || r.svg, c = J("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...v ? { innerHTML: v } : {}
        }, [
          J("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), h = r.text ? J("p", { class: n.b("text") }, [r.text]) : void 0;
        return J(mn, {
          name: n.b("fade"),
          onAfterLeave: u
        }, {
          default: j(() => [
            Ce(oe("div", {
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
              }, [c, h])
            ]), [[qe, r.visible]])
          ])
        });
      };
    }
  }), p = f.mount(document.createElement("div"));
  return {
    ...Bn(r),
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
let Wo;
const XC = function(e = {}) {
  if (!me)
    return;
  const t = ZC(e);
  if (t.fullscreen && Wo)
    return Wo;
  const n = QC({
    ...t,
    closed: () => {
      var r;
      (r = t.closed) == null || r.call(t), t.fullscreen && (Wo = void 0);
    }
  });
  JC(t, t.parent, n), zs(t, t.parent, n), t.parent.vLoadingAddClassList = () => zs(t, t.parent, n);
  let o = t.parent.getAttribute("loading-number");
  return o ? o = `${Number.parseInt(o) + 1}` : o = "1", t.parent.setAttribute("loading-number", o), t.parent.appendChild(n.$el), ae(() => n.visible.value = t.visible), t.fullscreen && (Wo = n), n;
}, ZC = (e) => {
  var t, n, o, r;
  let l;
  return Ve(e.target) ? l = (t = document.querySelector(e.target)) != null ? t : document.body : l = e.target || document.body, {
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
}, JC = async (e, t, n) => {
  const { nextZIndex: o } = Po(), r = {};
  if (e.fullscreen)
    n.originalPosition.value = Gt(document.body, "position"), n.originalOverflow.value = Gt(document.body, "overflow"), r.zIndex = o();
  else if (e.parent === document.body) {
    n.originalPosition.value = Gt(document.body, "position"), await ae();
    for (const l of ["top", "left"]) {
      const a = l === "top" ? "scrollTop" : "scrollLeft";
      r[l] = `${e.target.getBoundingClientRect()[l] + document.body[a] + document.documentElement[a] - Number.parseInt(Gt(document.body, `margin-${l}`), 10)}px`;
    }
    for (const l of ["height", "width"])
      r[l] = `${e.target.getBoundingClientRect()[l]}px`;
  } else
    n.originalPosition.value = Gt(t, "position");
  for (const [l, a] of Object.entries(r))
    n.$el.style[l] = a;
}, zs = (e, t, n) => {
  const o = te("loading");
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? vn(t, o.bm("parent", "relative")) : So(t, o.bm("parent", "relative")), e.fullscreen && e.lock ? So(t, o.bm("parent", "hidden")) : vn(t, o.bm("parent", "hidden"));
}, wl = Symbol("ElLoading"), Fs = (e, t) => {
  var n, o, r, l;
  const a = t.instance, s = (p) => at(t.value) ? t.value[p] : void 0, i = (p) => {
    const v = Ve(p) && (a == null ? void 0 : a[p]) || p;
    return v && k(v);
  }, u = (p) => i(s(p) || e.getAttribute(`element-loading-${$h(p)}`)), d = (n = s("fullscreen")) != null ? n : t.modifiers.fullscreen, f = {
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
  e[wl] = {
    options: f,
    instance: XC(f)
  };
}, eS = (e, t) => {
  for (const n of Object.keys(t))
    Xt(t[n]) && (t[n].value = e[n]);
}, tS = {
  mounted(e, t) {
    t.value && Fs(e, t);
  },
  updated(e, t) {
    const n = e[wl];
    t.oldValue !== t.value && (t.value && !t.oldValue ? Fs(e, t) : t.value && t.oldValue ? at(t.value) && eS(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[wl]) == null || t.instance.close();
  }
}, Qu = ["success", "info", "warning", "error"], tt = _r({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: me ? document.body : void 0
}), nS = we({
  customClass: {
    type: String,
    default: tt.customClass
  },
  center: {
    type: Boolean,
    default: tt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: tt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: tt.duration
  },
  icon: {
    type: $t,
    default: tt.icon
  },
  id: {
    type: String,
    default: tt.id
  },
  message: {
    type: ie([
      String,
      Object,
      Function
    ]),
    default: tt.message
  },
  onClose: {
    type: ie(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: tt.showClose
  },
  type: {
    type: String,
    values: Qu,
    default: tt.type
  },
  offset: {
    type: Number,
    default: tt.offset
  },
  zIndex: {
    type: Number,
    default: tt.zIndex
  },
  grouping: {
    type: Boolean,
    default: tt.grouping
  },
  repeatNum: {
    type: Number,
    default: tt.repeatNum
  }
}), oS = {
  destroy: () => !0
}, It = fc([]), rS = (e) => {
  const t = It.findIndex((r) => r.id === e), n = It[t];
  let o;
  return t > 0 && (o = It[t - 1]), { current: n, prev: o };
}, lS = (e) => {
  const { prev: t } = rS(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, aS = ["id"], sS = ["innerHTML"], iS = G({
  name: "ElMessage"
}), uS = /* @__PURE__ */ G({
  ...iS,
  props: nS,
  emits: oS,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Li, r = te("message"), l = k(), a = k(!1), s = k(0);
    let i;
    const u = O(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), d = O(() => {
      const w = n.type;
      return { [r.bm("icon", w)]: w && lr[w] };
    }), f = O(() => n.icon || lr[n.type] || ""), p = O(() => lS(n.id)), v = O(() => n.offset + p.value), c = O(() => s.value + v.value), h = O(() => ({
      top: `${v.value}px`,
      zIndex: n.zIndex
    }));
    function C() {
      n.duration !== 0 && ({ stop: i } = sh(() => {
        y();
      }, n.duration));
    }
    function g() {
      i == null || i();
    }
    function y() {
      a.value = !1;
    }
    function b({ code: w }) {
      w === In.esc && y();
    }
    return xe(() => {
      C(), a.value = !0;
    }), X(() => n.repeatNum, () => {
      g(), C();
    }), Nt(document, "keydown", b), Nn(l, () => {
      s.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: a,
      bottom: c,
      close: y
    }), (w, E) => (_(), H(mn, {
      name: m(r).b("fade"),
      onBeforeLeave: w.onClose,
      onAfterLeave: E[0] || (E[0] = (T) => w.$emit("destroy")),
      persisted: ""
    }, {
      default: j(() => [
        Ce(I("div", {
          id: w.id,
          ref_key: "messageRef",
          ref: l,
          class: A([
            m(r).b(),
            { [m(r).m(w.type)]: w.type && !w.icon },
            m(r).is("center", w.center),
            m(r).is("closable", w.showClose),
            w.customClass
          ]),
          style: _e(m(h)),
          role: "alert",
          onMouseenter: g,
          onMouseleave: C
        }, [
          w.repeatNum > 1 ? (_(), H(m(Uy), {
            key: 0,
            value: w.repeatNum,
            type: m(u),
            class: A(m(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : D("v-if", !0),
          m(f) ? (_(), H(m(Me), {
            key: 1,
            class: A([m(r).e("icon"), m(d)])
          }, {
            default: j(() => [
              (_(), H(Re(m(f))))
            ]),
            _: 1
          }, 8, ["class"])) : D("v-if", !0),
          ne(w.$slots, "default", {}, () => [
            w.dangerouslyUseHTMLString ? (_(), N(Be, { key: 1 }, [
              D(" Caution here, message could've been compromised, never use user's input as message "),
              I("p", {
                class: A(m(r).e("content")),
                innerHTML: w.message
              }, null, 10, sS)
            ], 2112)) : (_(), N("p", {
              key: 0,
              class: A(m(r).e("content"))
            }, ue(w.message), 3))
          ]),
          w.showClose ? (_(), H(m(Me), {
            key: 2,
            class: A(m(r).e("closeBtn")),
            onClick: Ke(y, ["stop"])
          }, {
            default: j(() => [
              oe(m(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : D("v-if", !0)
        ], 46, aS), [
          [qe, a.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var cS = /* @__PURE__ */ fe(uS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let dS = 1;
const Xu = (e) => {
  const t = !e || Ve(e) || fr(e) || De(e) ? { message: e } : e, n = {
    ...tt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Ve(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    pn(o) || (Pe("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), o = document.body), n.appendTo = o;
  }
  return n;
}, fS = (e) => {
  const t = It.indexOf(e);
  if (t === -1)
    return;
  It.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, pS = ({ appendTo: e, ...t }, n) => {
  const { nextZIndex: o } = Po(), r = `message_${dS++}`, l = t.onClose, a = document.createElement("div"), s = {
    ...t,
    zIndex: o() + t.zIndex,
    id: r,
    onClose: () => {
      l == null || l(), fS(f);
    },
    onDestroy: () => {
      Jo(null, a);
    }
  }, i = oe(cS, s, De(s.message) || fr(s.message) ? {
    default: De(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || eo._context, Jo(i, a), e.appendChild(a.firstElementChild);
  const u = i.component, f = {
    id: r,
    vnode: i,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return f;
}, eo = (e = {}, t) => {
  if (!me)
    return { close: () => {
    } };
  if (Ae(ml.max) && It.length >= ml.max)
    return { close: () => {
    } };
  const n = Xu(e);
  if (n.grouping && It.length) {
    const r = It.find(({ vnode: l }) => {
      var a;
      return ((a = l.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  const o = pS(n, t);
  return It.push(o), o.handler;
};
Qu.forEach((e) => {
  eo[e] = (t = {}, n) => {
    const o = Xu(t);
    return eo({ ...o, type: e }, n);
  };
});
function vS(e) {
  for (const t of It)
    (!e || e === t.props.type) && t.handler.close();
}
eo.closeAll = vS;
eo._context = null;
const Ds = Am(eo, "$message"), hS = G({
  name: "ElMessageBox",
  directives: {
    TrapFocus: b1
  },
  components: {
    ElButton: yu,
    ElFocusTrap: pu,
    ElInput: xr,
    ElOverlay: ew,
    ElIcon: Me,
    ...Li
  },
  inheritAttrs: !1,
  props: {
    buttonSize: {
      type: String,
      validator: Pi
    },
    modal: {
      type: Boolean,
      default: !0
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    showClose: {
      type: Boolean,
      default: !0
    },
    closeOnClickModal: {
      type: Boolean,
      default: !0
    },
    closeOnPressEscape: {
      type: Boolean,
      default: !0
    },
    closeOnHashChange: {
      type: Boolean,
      default: !0
    },
    center: Boolean,
    draggable: Boolean,
    roundButton: {
      default: !1,
      type: Boolean
    },
    container: {
      type: String,
      default: "body"
    },
    boxType: {
      type: String,
      default: ""
    }
  },
  emits: ["vanish", "action"],
  setup(e, { emit: t }) {
    const { t: n } = Ot(), o = te("message-box"), r = k(!1), { nextZIndex: l } = Po(), a = bn({
      autofocus: !0,
      beforeClose: null,
      callback: null,
      cancelButtonText: "",
      cancelButtonClass: "",
      confirmButtonText: "",
      confirmButtonClass: "",
      customClass: "",
      customStyle: {},
      dangerouslyUseHTMLString: !1,
      distinguishCancelAndClose: !1,
      icon: "",
      inputPattern: null,
      inputPlaceholder: "",
      inputType: "text",
      inputValue: null,
      inputValidator: null,
      inputErrorMessage: "",
      message: null,
      modalFade: !0,
      modalClass: "",
      showCancelButton: !1,
      showConfirmButton: !0,
      type: "",
      title: void 0,
      showInput: !1,
      action: "",
      confirmButtonLoading: !1,
      cancelButtonLoading: !1,
      confirmButtonDisabled: !1,
      editorErrorMessage: "",
      validateError: !1,
      zIndex: l()
    }), s = O(() => {
      const K = a.type;
      return { [o.bm("icon", K)]: K && lr[K] };
    }), i = ir(), u = ir(), d = hn(O(() => e.buttonSize), { prop: !0, form: !0, formItem: !0 }), f = O(() => a.icon || lr[a.type] || ""), p = O(() => !!a.message), v = k(), c = k(), h = k(), C = k(), g = k(), y = O(() => a.confirmButtonClass);
    X(() => a.inputValue, async (K) => {
      await ae(), e.boxType === "prompt" && K !== null && L();
    }, { immediate: !0 }), X(() => r.value, (K) => {
      var z, R;
      K && (e.boxType !== "prompt" && (a.autofocus ? h.value = (R = (z = g.value) == null ? void 0 : z.$el) != null ? R : v.value : h.value = v.value), a.zIndex = l()), e.boxType === "prompt" && (K ? ae().then(() => {
        var q;
        C.value && C.value.$el && (a.autofocus ? h.value = (q = V()) != null ? q : v.value : h.value = v.value);
      }) : (a.editorErrorMessage = "", a.validateError = !1));
    });
    const b = O(() => e.draggable);
    zm(v, c, b), xe(async () => {
      await ae(), e.closeOnHashChange && window.addEventListener("hashchange", w);
    }), wt(() => {
      e.closeOnHashChange && window.removeEventListener("hashchange", w);
    });
    function w() {
      r.value && (r.value = !1, ae(() => {
        a.action && t("action", a.action);
      }));
    }
    const E = () => {
      e.closeOnClickModal && x(a.distinguishCancelAndClose ? "close" : "cancel");
    }, T = ru(E), S = (K) => {
      if (a.inputType !== "textarea")
        return K.preventDefault(), x("confirm");
    }, x = (K) => {
      var z;
      e.boxType === "prompt" && K === "confirm" && !L() || (a.action = K, a.beforeClose ? (z = a.beforeClose) == null || z.call(a, K, a, w) : w());
    }, L = () => {
      if (e.boxType === "prompt") {
        const K = a.inputPattern;
        if (K && !K.test(a.inputValue || ""))
          return a.editorErrorMessage = a.inputErrorMessage || n("el.messagebox.error"), a.validateError = !0, !1;
        const z = a.inputValidator;
        if (typeof z == "function") {
          const R = z(a.inputValue);
          if (R === !1)
            return a.editorErrorMessage = a.inputErrorMessage || n("el.messagebox.error"), a.validateError = !0, !1;
          if (typeof R == "string")
            return a.editorErrorMessage = R, a.validateError = !0, !1;
        }
      }
      return a.editorErrorMessage = "", a.validateError = !1, !0;
    }, V = () => {
      const K = C.value.$refs;
      return K.input || K.textarea;
    }, U = () => {
      x("close");
    }, W = () => {
      e.closeOnPressEscape && U();
    };
    return e.lockScroll && t0(r), ab(r), {
      ...Bn(a),
      ns: o,
      overlayEvent: T,
      visible: r,
      hasMessage: p,
      typeClass: s,
      contentId: i,
      inputId: u,
      btnSize: d,
      iconComponent: f,
      confirmButtonClasses: y,
      rootRef: v,
      focusStartRef: h,
      headerRef: c,
      inputRef: C,
      confirmRef: g,
      doClose: w,
      handleClose: U,
      onCloseRequested: W,
      handleWrapperClick: E,
      handleInputEnter: S,
      handleAction: x,
      t: n
    };
  }
}), gS = ["aria-label", "aria-describedby"], mS = ["aria-label"], bS = ["id"];
function yS(e, t, n, o, r, l) {
  const a = ke("el-icon"), s = ke("close"), i = ke("el-input"), u = ke("el-button"), d = ke("el-focus-trap"), f = ke("el-overlay");
  return _(), H(mn, {
    name: "fade-in-linear",
    onAfterLeave: t[11] || (t[11] = (p) => e.$emit("vanish")),
    persisted: ""
  }, {
    default: j(() => [
      Ce(oe(f, {
        "z-index": e.zIndex,
        "overlay-class": [e.ns.is("message-box"), e.modalClass],
        mask: e.modal
      }, {
        default: j(() => [
          I("div", {
            role: "dialog",
            "aria-label": e.title,
            "aria-modal": "true",
            "aria-describedby": e.showInput ? void 0 : e.contentId,
            class: A(`${e.ns.namespace.value}-overlay-message-box`),
            onClick: t[8] || (t[8] = (...p) => e.overlayEvent.onClick && e.overlayEvent.onClick(...p)),
            onMousedown: t[9] || (t[9] = (...p) => e.overlayEvent.onMousedown && e.overlayEvent.onMousedown(...p)),
            onMouseup: t[10] || (t[10] = (...p) => e.overlayEvent.onMouseup && e.overlayEvent.onMouseup(...p))
          }, [
            oe(d, {
              loop: "",
              trapped: e.visible,
              "focus-trap-el": e.rootRef,
              "focus-start-el": e.focusStartRef,
              onReleaseRequested: e.onCloseRequested
            }, {
              default: j(() => [
                I("div", {
                  ref: "rootRef",
                  class: A([
                    e.ns.b(),
                    e.customClass,
                    e.ns.is("draggable", e.draggable),
                    { [e.ns.m("center")]: e.center }
                  ]),
                  style: _e(e.customStyle),
                  tabindex: "-1",
                  onClick: t[7] || (t[7] = Ke(() => {
                  }, ["stop"]))
                }, [
                  e.title !== null && e.title !== void 0 ? (_(), N("div", {
                    key: 0,
                    ref: "headerRef",
                    class: A(e.ns.e("header"))
                  }, [
                    I("div", {
                      class: A(e.ns.e("title"))
                    }, [
                      e.iconComponent && e.center ? (_(), H(a, {
                        key: 0,
                        class: A([e.ns.e("status"), e.typeClass])
                      }, {
                        default: j(() => [
                          (_(), H(Re(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : D("v-if", !0),
                      I("span", null, ue(e.title), 1)
                    ], 2),
                    e.showClose ? (_(), N("button", {
                      key: 0,
                      type: "button",
                      class: A(e.ns.e("headerbtn")),
                      "aria-label": e.t("el.messagebox.close"),
                      onClick: t[0] || (t[0] = (p) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel")),
                      onKeydown: t[1] || (t[1] = Fe(Ke((p) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"]))
                    }, [
                      oe(a, {
                        class: A(e.ns.e("close"))
                      }, {
                        default: j(() => [
                          oe(s)
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, mS)) : D("v-if", !0)
                  ], 2)) : D("v-if", !0),
                  I("div", {
                    id: e.contentId,
                    class: A(e.ns.e("content"))
                  }, [
                    I("div", {
                      class: A(e.ns.e("container"))
                    }, [
                      e.iconComponent && !e.center && e.hasMessage ? (_(), H(a, {
                        key: 0,
                        class: A([e.ns.e("status"), e.typeClass])
                      }, {
                        default: j(() => [
                          (_(), H(Re(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : D("v-if", !0),
                      e.hasMessage ? (_(), N("div", {
                        key: 1,
                        class: A(e.ns.e("message"))
                      }, [
                        ne(e.$slots, "default", {}, () => [
                          e.dangerouslyUseHTMLString ? (_(), H(Re(e.showInput ? "label" : "p"), {
                            key: 1,
                            for: e.showInput ? e.inputId : void 0,
                            innerHTML: e.message
                          }, null, 8, ["for", "innerHTML"])) : (_(), H(Re(e.showInput ? "label" : "p"), {
                            key: 0,
                            for: e.showInput ? e.inputId : void 0
                          }, {
                            default: j(() => [
                              Yt(ue(e.dangerouslyUseHTMLString ? "" : e.message), 1)
                            ]),
                            _: 1
                          }, 8, ["for"]))
                        ])
                      ], 2)) : D("v-if", !0)
                    ], 2),
                    Ce(I("div", {
                      class: A(e.ns.e("input"))
                    }, [
                      oe(i, {
                        id: e.inputId,
                        ref: "inputRef",
                        modelValue: e.inputValue,
                        "onUpdate:modelValue": t[2] || (t[2] = (p) => e.inputValue = p),
                        type: e.inputType,
                        placeholder: e.inputPlaceholder,
                        "aria-invalid": e.validateError,
                        class: A({ invalid: e.validateError }),
                        onKeydown: Fe(e.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      I("div", {
                        class: A(e.ns.e("errormsg")),
                        style: _e({
                          visibility: e.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, ue(e.editorErrorMessage), 7)
                    ], 2), [
                      [qe, e.showInput]
                    ])
                  ], 10, bS),
                  I("div", {
                    class: A(e.ns.e("btns"))
                  }, [
                    e.showCancelButton ? (_(), H(u, {
                      key: 0,
                      loading: e.cancelButtonLoading,
                      class: A([e.cancelButtonClass]),
                      round: e.roundButton,
                      size: e.btnSize,
                      onClick: t[3] || (t[3] = (p) => e.handleAction("cancel")),
                      onKeydown: t[4] || (t[4] = Fe(Ke((p) => e.handleAction("cancel"), ["prevent"]), ["enter"]))
                    }, {
                      default: j(() => [
                        Yt(ue(e.cancelButtonText || e.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "class", "round", "size"])) : D("v-if", !0),
                    Ce(oe(u, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: e.confirmButtonLoading,
                      class: A([e.confirmButtonClasses]),
                      round: e.roundButton,
                      disabled: e.confirmButtonDisabled,
                      size: e.btnSize,
                      onClick: t[5] || (t[5] = (p) => e.handleAction("confirm")),
                      onKeydown: t[6] || (t[6] = Fe(Ke((p) => e.handleAction("confirm"), ["prevent"]), ["enter"]))
                    }, {
                      default: j(() => [
                        Yt(ue(e.confirmButtonText || e.t("el.messagebox.confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "class", "round", "disabled", "size"]), [
                      [qe, e.showConfirmButton]
                    ])
                  ], 2)
                ], 6)
              ]),
              _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])
          ], 42, gS)
        ]),
        _: 3
      }, 8, ["z-index", "overlay-class", "mask"]), [
        [qe, e.visible]
      ])
    ]),
    _: 3
  });
}
var wS = /* @__PURE__ */ fe(hS, [["render", yS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);
const $o = /* @__PURE__ */ new Map(), CS = (e) => {
  let t = document.body;
  return e.appendTo && (Ve(e.appendTo) && (t = document.querySelector(e.appendTo)), pn(e.appendTo) && (t = e.appendTo), pn(t) || (Pe("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body."), t = document.body)), t;
}, SS = (e, t, n = null) => {
  const o = oe(wS, e, De(e.message) || fr(e.message) ? {
    default: De(e.message) ? e.message : () => e.message
  } : null);
  return o.appContext = n, Jo(o, t), CS(e).appendChild(t.firstElementChild), o.component;
}, ES = () => document.createElement("div"), _S = (e, t) => {
  const n = ES();
  e.onVanish = () => {
    Jo(null, n), $o.delete(r);
  }, e.onAction = (l) => {
    const a = $o.get(r);
    let s;
    e.showInput ? s = { value: r.inputValue, action: l } : s = l, e.callback ? e.callback(s, o.proxy) : l === "cancel" || l === "close" ? e.distinguishCancelAndClose && l !== "cancel" ? a.reject("close") : a.reject("cancel") : a.resolve(s);
  };
  const o = SS(e, n, t), r = o.proxy;
  for (const l in e)
    Zt(e, l) && !Zt(r.$props, l) && (r[l] = e[l]);
  return r.visible = !0, r;
};
function lo(e, t = null) {
  if (!me)
    return Promise.reject();
  let n;
  return Ve(e) || fr(e) ? e = {
    message: e
  } : n = e.callback, new Promise((o, r) => {
    const l = _S(e, t ?? lo._context);
    $o.set(l, {
      options: e,
      callback: n,
      resolve: o,
      reject: r
    });
  });
}
const TS = ["alert", "confirm", "prompt"], $S = {
  alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
  confirm: { showCancelButton: !0 },
  prompt: { showCancelButton: !0, showInput: !0 }
};
TS.forEach((e) => {
  lo[e] = kS(e);
});
function kS(e) {
  return (t, n, o, r) => {
    let l = "";
    return at(n) ? (o = n, l = "") : Co(n) ? l = "" : l = n, lo(Object.assign({
      title: l,
      message: t,
      type: "",
      ...$S[e]
    }, o, {
      boxType: e
    }), r);
  };
}
lo.close = () => {
  $o.forEach((e, t) => {
    t.doClose();
  }), $o.clear();
};
lo._context = null;
const an = lo;
an.install = (e) => {
  an._context = e._context, e.config.globalProperties.$msgbox = an, e.config.globalProperties.$messageBox = an, e.config.globalProperties.$alert = an.alert, e.config.globalProperties.$confirm = an.confirm, e.config.globalProperties.$prompt = an.prompt;
};
const Ur = an;
const OS = /* @__PURE__ */ I("i", null, null, -1), xS = {
  key: 0,
  class: "flex al-center p-y-8 m-b-8"
}, AS = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28"
}, LS = /* @__PURE__ */ I("i", null, null, -1), MS = { class: "flex al-center" }, PS = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28 m-t-24"
}, NS = { class: "m-t-24" }, IS = {
  name: "VbTable"
}, Zu = /* @__PURE__ */ Object.assign(IS, {
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
    const n = e, o = k();
    X(
      () => [n.tableQuery],
      () => {
        var f;
        (f = o.value) == null || f.setScrollTop(0);
      }
    );
    const r = k([]);
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
      const { pageIndex: v = 1, pageSize: c = 20 } = n.tableQuery;
      return f + 1 + (v - 1) * c;
    }
    const i = k(!1), u = k(!1);
    function d() {
      o.value.toggleAllSelection();
    }
    return (f, p) => {
      var w, E, T, S;
      const v = VC, c = Nu, h = Rn, C = yu, g = HC, y = I2, b = tS;
      return Ce((_(), N("div", {
        class: "zn-table-content",
        style: _e({ height: e.height })
      }, [
        oe(g, An({
          ref_key: "tableRef",
          ref: o,
          class: ["flex-1", { "hide-checkAll": e.hideDftCheckAll }],
          data: e.data,
          onSelectionChange: l
        }, { ...e.prop }, pc({ ...e.propFuc })), Gs({
          append: j(() => {
            var x;
            return [
              ne(f.$slots, "append"),
              (x = e.data) != null && x.length && e.showBatchDel ? (_(), N("div", xS, [
                e.showSelect ? (_(), N("div", AS, [
                  oe(h, {
                    "model-value": u.value,
                    indeterminate: i.value,
                    class: "table-check-all",
                    onChange: d
                  }, null, 8, ["model-value", "indeterminate"])
                ])) : D("", !0),
                ne(f.$slots, "batch-action", { selection: r.value }, () => {
                  var L;
                  return [
                    oe(C, {
                      disabled: !((L = r.value) != null && L.length),
                      plain: "",
                      type: "danger",
                      onClick: a
                    }, {
                      default: j(() => [
                        Yt("批量删除")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                })
              ])) : D("", !0)
            ];
          }),
          default: j(() => [
            e.showSelect ? (_(), H(v, {
              key: 0,
              type: "selection",
              width: "55",
              align: "center"
            }, {
              header: j(() => [
                OS
              ]),
              _: 1
            })) : D("", !0),
            e.showIndex ? (_(), H(v, {
              key: 1,
              label: "序号",
              type: "index",
              align: "center",
              width: "70"
            }, {
              default: j(({ $index: x, row: L }) => [
                Yt(ue(s(x, L)), 1)
              ]),
              _: 1
            })) : D("", !0),
            ne(f.$slots, "default")
          ]),
          _: 2
        }, [
          e.customEmpty ? {
            name: "empty",
            fn: j(() => [
              I("div", null, [
                e.loading ? D("", !0) : (_(), H(c, {
                  key: 0,
                  style: { width: "100%", height: "100%" }
                }))
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["class", "data"]),
        (w = e.summaryData) != null && w.length ? (_(), H(g, {
          key: 0,
          data: e.summaryData,
          "show-header": !1
        }, {
          empty: j(() => [
            LS
          ]),
          default: j(() => [
            e.showSelect ? (_(), H(v, {
              key: 0,
              width: "55"
            })) : D("", !0),
            e.showIndex ? (_(), H(v, {
              key: 1,
              width: "60"
            })) : D("", !0),
            ne(f.$slots, "summary-columns", {}, () => [
              ne(f.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["data"])) : D("", !0),
        Ce(I("div", MS, [
          e.showSelect && e.hideDftCheckAll && !e.showBatchDel || e.showSelect && f.$slots.footer ? (_(), N("div", PS, [
            oe(h, {
              "model-value": u.value,
              indeterminate: i.value,
              class: "table-check-all",
              onChange: d
            }, null, 8, ["model-value", "indeterminate"])
          ])) : D("", !0),
          I("div", NS, [
            ne(f.$slots, "footer", { selection: r.value })
          ]),
          e.showP ? (_(), H(y, {
            key: 1,
            class: "table-pagination m-t-24",
            currentPage: (E = e.tableQuery) == null ? void 0 : E.pageIndex,
            "page-size": (T = e.tableQuery) == null ? void 0 : T.pageSize,
            "pageNum-sizes": [10, 20, 50],
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total ?? 0,
            onSizeChange: p[0] || (p[0] = (x) => t("handleSizeChange", x)),
            onCurrentChange: p[1] || (p[1] = (x) => t("handleCurrentChange", x))
          }, null, 8, ["currentPage", "page-size", "total"])) : D("", !0)
        ], 512), [
          [qe, (S = e.data) == null ? void 0 : S.length]
        ])
      ], 4)), [
        [b, e.loading]
      ]);
    };
  }
}), Ju = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, RS = {
  name: "VbButton"
};
function BS(e, t, n, o, r, l) {
  return _(), N("div", null, "这是按钮啊");
}
const ec = /* @__PURE__ */ Ju(RS, [["render", BS]]);
const zS = { class: "list-scroll-search" }, FS = {
  key: 0,
  class: "list"
}, DS = ["onClick"], HS = {
  name: "VbListScrollSearch"
}, VS = /* @__PURE__ */ Object.assign(HS, {
  props: {
    api: () => Promise,
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
    const n = e, o = k([]), r = k({ pageIndex: 1, pageSize: 20 }), l = k();
    let a = !1;
    const s = k(!1), i = k(!1);
    xe(() => {
      i.value = !0, c();
    });
    const { option: u, api: d, searchKey: f, formatDataFc: p, defaultParams: v } = n;
    async function c() {
      s.value = !0;
      const y = {
        ...v,
        ...r.value,
        [f]: l.value
      }, { data: b } = await d(y);
      s.value = !1;
      const { ok: w, data: E } = b ?? {};
      if (w && (E != null && E.length)) {
        let T = E.filter((S) => o.value.every((x) => x[u.key] !== S[u.key]));
        p && (T = p(T)), o.value.push(...T), n.modelValue ? o.value.find((x) => x[n.option.key] === n.modelValue) || h() : !n.modelValue && n.defaultFirst && g(0), (E == null ? void 0 : E.length) < r.value.pageSize && (a = !0);
      } else
        a = !0;
      o.value.length || g(-1);
    }
    function h() {
      !a && !s.value && (r.value.pageIndex++, c());
    }
    function C() {
      r.value.pageIndex = 1, o.value = [], c();
    }
    function g(y) {
      let b, w;
      y !== -1 && (b = o.value[y][u.key], w = o.value[y][u.label]), t("update:modelValue", b), t("update:label", w), t("change", b);
    }
    return (y, b) => {
      const w = Me, E = xr, T = Nu, S = YC;
      return _(), N("div", zS, [
        oe(E, {
          placeholder: e.placeholder,
          modelValue: l.value,
          "onUpdate:modelValue": b[0] || (b[0] = (x) => l.value = x),
          clearable: "",
          onClear: C,
          onKeyup: Fe(C, ["enter"])
        }, {
          suffix: j(() => [
            oe(w, {
              class: "pointer",
              onClick: C
            }, {
              default: j(() => [
                oe(m(dm))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["placeholder", "modelValue", "onKeyup"]),
        i.value ? Ce((_(), N("ul", FS, [
          (_(!0), N(Be, null, cn(o.value, (x, L) => (_(), N("li", {
            key: L,
            class: A({ active: e.modelValue === x[m(u).key] }),
            onClick: (V) => g(L)
          }, ue(x[m(u).label]), 11, DS))), 128))
        ])), [
          [S, h]
        ]) : D("", !0),
        s.value ? (_(), H(w, {
          key: 1,
          class: A({ "is-loading": s.value && !m(a) })
        }, {
          default: j(() => [
            oe(m(Sr))
          ]),
          _: 1
        }, 8, ["class"])) : D("", !0),
        Ce(oe(T, { style: { width: "100%" } }, null, 512), [
          [qe, !s.value && !o.value.length]
        ])
      ]);
    };
  }
}), tc = /* @__PURE__ */ Ju(VS, [["__scopeId", "data-v-b9694823"]]), WS = {
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
    }), cr(() => {
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
      const u = Bu;
      return _(), H(u, {
        "model-value": e.value,
        "popper-class": o,
        onFocus: l
      }, {
        default: j(() => [
          ne(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["model-value"]);
    };
  }
}, jS = {
  name: "VbScrollSelect"
}, nc = /* @__PURE__ */ Object.assign(jS, {
  props: {
    api: () => Promise,
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
    const n = e, o = O(() => C(n.modelValue) ? r.value.filter((g) => n.modelValue.includes(g[n.option.key])) : r.value.find((y) => y[n.option.key] === n.modelValue)), r = k([]);
    let l = [];
    const a = k({ pageIndex: 1, pageSize: 20 }), s = k();
    let i = !1;
    const u = k(!1);
    xe(() => {
      n.init && f();
    }), X(
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
      }, { data: y } = await n.api(g);
      u.value = !1;
      const { ok: b, data: w } = y ?? {};
      if (b) {
        let E = (w == null ? void 0 : w.filter((T) => r.value.every((S) => S[n.option.key] !== T[n.option.key]))) || [];
        if (n.formatDataFc && (E = n.formatDataFc(E)), (w == null ? void 0 : w.length) < a.value.pageSize && (i = !0), s.value)
          r.value = E;
        else {
          if (l.push(...E), c(), n.modelValue) {
            const T = l.find((S) => S[n.option.key] === n.modelValue);
            T ? h(T) : p();
          }
          !n.modelValue && n.defaultFirst && h(r.value[0]);
        }
      } else
        i = !0;
      r.value.length || h(void 0);
    }
    function p() {
      !i && !u.value && (a.value.pageIndex++, f());
    }
    function v(g) {
      s.value = g, g ? (a.value.pageIndex = 1, r.value = [], f()) : c();
    }
    function c() {
      r.value = [...l];
    }
    function h(g = {}) {
      let y = g == null ? void 0 : g[n.option.key];
      C(g) && (y = g.map((b) => b[n.option.key])), t("update:modelValue", y), t("change", y, g), t("update:data", g);
    }
    function C(g) {
      return Object.prototype.toString.call(g) === "[object Array]";
    }
    return (g, y) => {
      const b = zu;
      return _(), H(WS, {
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
        "remote-method": v,
        onLoadMore: p,
        onClear: c,
        onChange: h,
        "value-key": e.option.key
      }, {
        default: j(() => [
          (_(!0), N(Be, null, cn(r.value, (w) => (_(), H(b, {
            key: w[e.option.key],
            label: w[e.option.label],
            value: w
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["loading", "model-value", "value-key"]);
    };
  }
});
const KS = {
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
}, Hs = {
  十: { value: 10, secUnit: !1 },
  百: { value: 100, secUnit: !1 },
  千: { value: 1e3, secUnit: !1 },
  万: { value: 1e4, secUnit: !0 },
  亿: { value: 1e8, secUnit: !0 }
};
function Vs(e) {
  for (var t = 0, n = 0, o = 0, r = !1, l = e.split(""), a = 0; a < l.length; a++) {
    var s = KS[l[a]];
    if (typeof s < "u")
      o = s, a === l.length - 1 && (n += o);
    else {
      var i = Hs[l[a]].value;
      r = Hs[l[a]].secUnit, r ? (n = (n + o) * i, t += n, n = 0) : n += o * i, o = 0;
    }
  }
  return t + n;
}
const _E = (e) => new RegExp(`<${e}[^>]*>[\\s\\S]*?</[^>]*${e}>`, "i"), US = /^[\u4e00-\u9fa5]+$/, qS = /^1[3-9]\d{9}$/, GS = /^[0-9]{4}-\d{7}$/, YS = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, QS = /^https?:\/\/.{1,}\..{1,}$/i, XS = /^[0-9]+$/, ZS = /^\d+\.*[\d+]{0,}$/, JS = /[\u4E00-\u9FFF]+/g, eE = /^[a-z0-9]+$/i, TE = /^-[0-9]+$/i, tE = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, nE = /^[a-zA-Z0-9]{10,20}$/, oE = /^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{6,20}$/, rE = /^[0-9a-zA-Z]{4}$/, lE = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g, aE = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/, jo = /[一二三四五六七八九十]{1,}/, $E = /<tr[^>]*>[^\{^\}]*?\[{1}[\s\S^\{^\}]*?\]{1}[^\{^\}]*?<\/[^>]*tr>/gi, kE = /<td[^>]*>[\s\S]*?<\/[^>]*td>/gi, OE = (e) => typeof e == "string", sE = (e) => qS.test(e), iE = (e) => GS.test(e), uE = (e) => YS.test(e), cE = (e) => QS.test(e), dE = (e) => ZS.test(e), fE = (e) => XS.test(e), pE = (e) => eE.test(e), xE = (e) => JS.test(e), vE = (e) => tE.test(e), AE = (e) => nE.test(e), hE = (e) => oE.test(e), gE = (e) => rE.test(e), mE = (e) => lE.test(e), bE = (e) => aE.test(e), Vn = (e) => US.test(e), yE = (e) => {
  const t = new FormData();
  return Object.keys(e).forEach((n) => {
    e[n] !== null && t.append(n, e[n]);
  }), t;
}, LE = (e, t = !0) => {
  const n = document.createElement("a");
  n.href = e, t && (n.target = "_blank"), n.click();
}, ME = (e) => {
  const [t, ...n] = e.split(".").reverse();
  return [n.reverse().reduce((o, r) => o + r, ""), t];
}, PE = (e) => {
  switch (!0) {
    case e / 1024 < 1024:
      return `${(e / 1024).toFixed(2)}kb`;
    default:
      return `${(e / 1024 / 1024).toFixed(2)}Mb`;
  }
}, Mr = (e) => Object.prototype.toString.call(e), NE = (e, t, n = !1) => {
  if (Object.prototype.toString.call(e) !== "[object Array]")
    return [];
  const o = t == null ? void 0 : t.split(",");
  function r(l, a) {
    var i, u;
    switch (!0) {
      case (!!((i = l == null ? void 0 : l.match(jo)) != null && i.length) && !!((u = a == null ? void 0 : a.match(jo)) != null && u.length)):
        return Vs(l == null ? void 0 : l.match(jo)[0]) - Vs(a == null ? void 0 : a.match(jo)[0]);
      case (Vn(l) && Vn(a)):
        return -1;
      case (Vn(l) && !Vn(a)):
        return -1;
      case (!Vn(l) && Vn(a)):
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
}, wE = (e) => new Promise((t) => {
  const n = document.createElement("input");
  e && (n.accept = e), n.type = "file", n.onchange = (o) => {
    const r = o.target.files[0];
    o.target.value = null, t(r);
  }, n.click();
}), Ws = (e, t, n = "application/vnd.ms-excel;charset=utf-8") => {
  let o;
  e instanceof Blob ? o = e : o = new Blob([e], { type: n });
  const r = window.URL.createObjectURL(o), l = document.createElement("a");
  l.download = t, l.href = r, l.click(), l.remove(), window.URL.revokeObjectURL(r);
}, sa = (e, t = 2) => {
  switch (Mr(e)) {
    case "[object Number]":
      return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
    default:
      return e ?? 0;
  }
}, IE = (e) => {
  const { columns: t, data: n } = e, o = [];
  return t.forEach((r, l) => {
    if (l === 0) {
      o[l] = "合计";
      return;
    }
    const a = n == null ? void 0 : n.map((s) => Number(s[r.property] || s[r] || 0));
    a.every((s) => Number.isNaN(s)) ? o[l] = "" : o[l] = `${a.reduce((s, i) => {
      const u = Number(i);
      return Number.isNaN(u) ? s : sa(s + i);
    }, 0)}`;
  }), o;
}, RE = (e) => {
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
      return Number.isNaN(u) ? s : sa(s + i);
    }, 0)}`;
  }), o;
}, BE = (e, t, n) => {
  const o = {
    [n]: "合计"
  };
  return e.forEach((r) => {
    t.forEach((l) => {
      o[l] = sa((o[l] || 0) + Number(r[l] || 0));
    });
  }), o;
}, Et = (e, t = "请正确填写") => ({
  validator: (n, o, r) => {
    let l = !0;
    switch (Mr(e)) {
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
}), zE = {
  url: Et(cE),
  phone: Et([sE, iE]),
  email: Et(uE),
  double: Et(dE),
  int: Et(fE),
  intAndLetter: Et(pE),
  idCard: Et(vE),
  psw: Et(hE, "密码必须包含大小写字母、数字和特殊字符，长度为6-20位"),
  captcha: Et(gE),
  socialCreditCode: Et(mE),
  carNumber: Et(bE)
}, FE = {
  required: !0,
  message: "必填项",
  validator: function(e, t, n) {
    const o = Mr(t);
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
}, CE = {
  image: "image/*",
  xlsx: ".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  video: "video/*",
  all: "*"
}, uo = {
  create: "create",
  update: "update"
}, DE = {
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
      dialogTypeOpt: uo,
      dialogType: "",
      dialogTitleMap: {
        [uo.create]: "新增",
        [uo.update]: "修改"
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
      this.resetTemp(), this.dialogType = uo.create, this.dialogVisible = !0;
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
      Ur.confirm("是否确定此操作？", "系统提示", {
        type: "warning",
        autofocus: !1
      }).then(e).catch();
    },
    // 改之前摇
    async handleUpdateBefore({ id: e }) {
      var t;
      if ((t = this.apiOpt) != null && t.detail) {
        const n = this.getDetailQuery(e), {
          data: { ok: o, data: r }
        } = await this.apiOpt.detail(n);
        o && this.handleUpdate(r, this.next);
      } else
        console.log("未定义handleUpdateBefore方法");
    },
    getDetailQuery(e) {
      return { id: e };
    },
    // 改
    handleUpdate(e, t) {
      this.resetTemp(), this.temp = { ...e }, t && t(e), this.dialogType = uo.update, this.dialogVisible = !0;
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
      this.handleLoading = !1, e ? (Ds.success("操作成功"), this.dialogVisible = !1, this.getTableData()) : Ds.warning("操作失败");
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
        const t = await wE(CE.xlsx), n = this.getImportQuery(t);
        this.handleLoading = !0;
        const { data: o } = await this.apiOpt.import(yE(n), { responseType: "blob" });
        this.handleImportSuccess(o);
      } else
        console.log("未定义handleImport方法");
    },
    // 上传接口调用成功
    handleImportSuccess(e) {
      this.handleLoading = !1;
      const t = Mr(e);
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
          Ur.alert("部分上传成功，请修改失败的部分重新上传", "系统提示", { autofocus: !1, type: "warning" }), Ws(e, "导入失败部分.xlsx");
          break;
      }
    },
    // 上传内容部分成功
    handleImportSomeSuccess(e) {
      const { ok: t, data: n } = e;
      if (t) {
        const { errorCount: o } = n || {};
        o ? (Ur.alert("部分上传成功，请修改失败的部分重新上传", "系统提示", { autofocus: !1, type: "warning" }), this.handleImportError(e)) : this.handleSuccess(e);
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
        this.handleLoading = !1, Ws(n, `${this.fileName || Date.now()}.xlsx`);
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
}, SE = [Zu, ec, tc, nc], HE = {
  VbTable: Zu,
  VbButton: ec,
  VbListScrollSearch: tc,
  VbScrollSelect: nc,
  install(e) {
    SE.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  nE as REGBUSINESSLICENSE,
  rE as REGCAPTCHA,
  aE as REGCARNUMBER,
  US as REGCH,
  jo as REGCHINESENUM,
  ZS as REGDOUBLE,
  YS as REGEMAIL,
  tE as REGIDCARD,
  XS as REGINT,
  eE as REGINTANDLETTER,
  GS as REGLANDLINE,
  qS as REGMOBILE,
  oE as REGPSW,
  JS as REGRECHINESE,
  TE as REGRENEGATIVE,
  $E as REGTABLECYCLETR,
  QS as REGURL,
  lE as SOCIALCREDITCODE,
  HE as default,
  Ws as downloadFile,
  ME as formatFileNameSuffix,
  PE as formatFileSize,
  sa as formatNumber,
  RE as getMoreSummaries,
  IE as getSummaries,
  BE as getSummaryDatas,
  AE as isBusinessLicense,
  Vn as isCH,
  bE as isCarNumber,
  xE as isChinese,
  gE as isCpatcha,
  dE as isDouble,
  uE as isEmail,
  vE as isIdCard,
  fE as isInt,
  pE as isIntAndLetter,
  iE as isLandLine,
  sE as isMobile,
  hE as isPsw,
  mE as isSocialCreditCode,
  OE as isStr,
  cE as isUrl,
  LE as jumpExternalChain,
  yE as obj2Formdata,
  _E as regTag,
  kE as regTd,
  FE as required,
  wE as selectLocalFile,
  NE as sortFuc,
  DE as tableMixin,
  Mr as typeCheck,
  zE as validatorFun
};
