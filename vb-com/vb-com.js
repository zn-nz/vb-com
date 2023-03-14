import { getCurrentScope as ac, onScopeDispose as Xs, ref as k, unref as h, getCurrentInstance as Ee, onMounted as Ae, nextTick as se, watch as Q, openBlock as E, createElementBlock as B, createElementVNode as z, warn as sc, computed as O, provide as rt, inject as ve, watchEffect as Nn, onBeforeUnmount as wt, toRef as Rt, onUnmounted as Sl, isRef as Ft, onBeforeMount as El, defineComponent as Y, mergeProps as Ln, renderSlot as re, useAttrs as ic, useSlots as vr, shallowRef as ho, withDirectives as we, createCommentVNode as U, Fragment as Ve, normalizeClass as L, createBlock as j, withCtx as G, resolveDynamicComponent as He, withModifiers as Be, createVNode as ee, toDisplayString as ce, normalizeStyle as Te, vShow as qe, Transition as wn, reactive as on, onUpdated as _l, cloneVNode as uc, Text as Zs, Comment as Js, Teleport as cc, readonly as dc, onDeactivated as fc, toRaw as Yn, vModelCheckbox as nr, createTextVNode as Xt, toRefs as Fn, h as te, withKeys as Le, triggerRef as uo, resolveComponent as Oe, resolveDirective as Tl, renderList as vn, vModelText as pc, createSlots as ei, createApp as vc, shallowReactive as hc, isVNode as hr, render as or, normalizeProps as gc, guardReactiveProps as mc } from "vue";
var bc = typeof global == "object" && global && global.Object === Object && global;
const ti = bc;
var yc = typeof self == "object" && self && self.Object === Object && self, wc = ti || yc || Function("return this")();
const Ot = wc;
var Cc = Ot.Symbol;
const Dt = Cc;
var ni = Object.prototype, Sc = ni.hasOwnProperty, Ec = ni.toString, co = Dt ? Dt.toStringTag : void 0;
function _c(e) {
  var t = Sc.call(e, co), n = e[co];
  try {
    e[co] = void 0;
    var o = !0;
  } catch {
  }
  var r = Ec.call(e);
  return o && (t ? e[co] = n : delete e[co]), r;
}
var Tc = Object.prototype, $c = Tc.toString;
function kc(e) {
  return $c.call(e);
}
var Oc = "[object Null]", xc = "[object Undefined]", fa = Dt ? Dt.toStringTag : void 0;
function Dn(e) {
  return e == null ? e === void 0 ? xc : Oc : fa && fa in Object(e) ? _c(e) : kc(e);
}
function hn(e) {
  return e != null && typeof e == "object";
}
var Ac = "[object Symbol]";
function gr(e) {
  return typeof e == "symbol" || hn(e) && Dn(e) == Ac;
}
function oi(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Nc = Array.isArray;
const ht = Nc;
var Lc = 1 / 0, pa = Dt ? Dt.prototype : void 0, va = pa ? pa.toString : void 0;
function ri(e) {
  if (typeof e == "string")
    return e;
  if (ht(e))
    return oi(e, ri) + "";
  if (gr(e))
    return va ? va.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Lc ? "-0" : t;
}
var Pc = /\s/;
function Mc(e) {
  for (var t = e.length; t-- && Pc.test(e.charAt(t)); )
    ;
  return t;
}
var Ic = /^\s+/;
function Rc(e) {
  return e && e.slice(0, Mc(e) + 1).replace(Ic, "");
}
function lt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ha = 0 / 0, Bc = /^[-+]0x[0-9a-f]+$/i, zc = /^0b[01]+$/i, Fc = /^0o[0-7]+$/i, Dc = parseInt;
function ga(e) {
  if (typeof e == "number")
    return e;
  if (gr(e))
    return ha;
  if (lt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = lt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Rc(e);
  var n = zc.test(e);
  return n || Fc.test(e) ? Dc(e.slice(2), n ? 2 : 8) : Bc.test(e) ? ha : +e;
}
function $l(e) {
  return e;
}
var Hc = "[object AsyncFunction]", Vc = "[object Function]", Wc = "[object GeneratorFunction]", jc = "[object Proxy]";
function kl(e) {
  if (!lt(e))
    return !1;
  var t = Dn(e);
  return t == Vc || t == Wc || t == Hc || t == jc;
}
var Kc = Ot["__core-js_shared__"];
const Mr = Kc;
var ma = function() {
  var e = /[^.]+$/.exec(Mr && Mr.keys && Mr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Uc(e) {
  return !!ma && ma in e;
}
var Gc = Function.prototype, qc = Gc.toString;
function Hn(e) {
  if (e != null) {
    try {
      return qc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Yc = /[\\^$.*+?()[\]{}|]/g, Qc = /^\[object .+?Constructor\]$/, Xc = Function.prototype, Zc = Object.prototype, Jc = Xc.toString, ed = Zc.hasOwnProperty, td = RegExp(
  "^" + Jc.call(ed).replace(Yc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function nd(e) {
  if (!lt(e) || Uc(e))
    return !1;
  var t = kl(e) ? td : Qc;
  return t.test(Hn(e));
}
function od(e, t) {
  return e == null ? void 0 : e[t];
}
function Vn(e, t) {
  var n = od(e, t);
  return nd(n) ? n : void 0;
}
var rd = Vn(Ot, "WeakMap");
const qr = rd;
var ba = Object.create, ld = function() {
  function e() {
  }
  return function(t) {
    if (!lt(t))
      return {};
    if (ba)
      return ba(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const ad = ld;
function sd(e, t, n) {
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
function id(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var ud = 800, cd = 16, dd = Date.now;
function fd(e) {
  var t = 0, n = 0;
  return function() {
    var o = dd(), r = cd - (o - n);
    if (n = o, r > 0) {
      if (++t >= ud)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function pd(e) {
  return function() {
    return e;
  };
}
var vd = function() {
  try {
    var e = Vn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const rr = vd;
var hd = rr ? function(e, t) {
  return rr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: pd(t),
    writable: !0
  });
} : $l;
const gd = hd;
var md = fd(gd);
const li = md;
var bd = 9007199254740991, yd = /^(?:0|[1-9]\d*)$/;
function mr(e, t) {
  var n = typeof e;
  return t = t ?? bd, !!t && (n == "number" || n != "symbol" && yd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ol(e, t, n) {
  t == "__proto__" && rr ? rr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function xo(e, t) {
  return e === t || e !== e && t !== t;
}
var wd = Object.prototype, Cd = wd.hasOwnProperty;
function ai(e, t, n) {
  var o = e[t];
  (!(Cd.call(e, t) && xo(o, n)) || n === void 0 && !(t in e)) && Ol(e, t, n);
}
function Sd(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var l = -1, a = t.length; ++l < a; ) {
    var s = t[l], i = o ? o(n[s], e[s], s, n, e) : void 0;
    i === void 0 && (i = e[s]), r ? Ol(n, s, i) : ai(n, s, i);
  }
  return n;
}
var ya = Math.max;
function si(e, t, n) {
  return t = ya(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = ya(o.length - t, 0), a = Array(l); ++r < l; )
      a[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(a), sd(e, this, s);
  };
}
function Ed(e, t) {
  return li(si(e, t, $l), e + "");
}
var _d = 9007199254740991;
function xl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _d;
}
function ro(e) {
  return e != null && xl(e.length) && !kl(e);
}
function Td(e, t, n) {
  if (!lt(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? ro(n) && mr(t, n.length) : o == "string" && t in n) ? xo(n[t], e) : !1;
}
function $d(e) {
  return Ed(function(t, n) {
    var o = -1, r = n.length, l = r > 1 ? n[r - 1] : void 0, a = r > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (r--, l) : void 0, a && Td(n[0], n[1], a) && (l = r < 3 ? void 0 : l, r = 1), t = Object(t); ++o < r; ) {
      var s = n[o];
      s && e(t, s, o, l);
    }
    return t;
  });
}
var kd = Object.prototype;
function Al(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || kd;
  return e === n;
}
function Od(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var xd = "[object Arguments]";
function wa(e) {
  return hn(e) && Dn(e) == xd;
}
var ii = Object.prototype, Ad = ii.hasOwnProperty, Nd = ii.propertyIsEnumerable, Ld = wa(function() {
  return arguments;
}()) ? wa : function(e) {
  return hn(e) && Ad.call(e, "callee") && !Nd.call(e, "callee");
};
const Co = Ld;
function Pd() {
  return !1;
}
var ui = typeof exports == "object" && exports && !exports.nodeType && exports, Ca = ui && typeof module == "object" && module && !module.nodeType && module, Md = Ca && Ca.exports === ui, Sa = Md ? Ot.Buffer : void 0, Id = Sa ? Sa.isBuffer : void 0, Rd = Id || Pd;
const lr = Rd;
var Bd = "[object Arguments]", zd = "[object Array]", Fd = "[object Boolean]", Dd = "[object Date]", Hd = "[object Error]", Vd = "[object Function]", Wd = "[object Map]", jd = "[object Number]", Kd = "[object Object]", Ud = "[object RegExp]", Gd = "[object Set]", qd = "[object String]", Yd = "[object WeakMap]", Qd = "[object ArrayBuffer]", Xd = "[object DataView]", Zd = "[object Float32Array]", Jd = "[object Float64Array]", ef = "[object Int8Array]", tf = "[object Int16Array]", nf = "[object Int32Array]", of = "[object Uint8Array]", rf = "[object Uint8ClampedArray]", lf = "[object Uint16Array]", af = "[object Uint32Array]", ke = {};
ke[Zd] = ke[Jd] = ke[ef] = ke[tf] = ke[nf] = ke[of] = ke[rf] = ke[lf] = ke[af] = !0;
ke[Bd] = ke[zd] = ke[Qd] = ke[Fd] = ke[Xd] = ke[Dd] = ke[Hd] = ke[Vd] = ke[Wd] = ke[jd] = ke[Kd] = ke[Ud] = ke[Gd] = ke[qd] = ke[Yd] = !1;
function sf(e) {
  return hn(e) && xl(e.length) && !!ke[Dn(e)];
}
function uf(e) {
  return function(t) {
    return e(t);
  };
}
var ci = typeof exports == "object" && exports && !exports.nodeType && exports, go = ci && typeof module == "object" && module && !module.nodeType && module, cf = go && go.exports === ci, Ir = cf && ti.process, df = function() {
  try {
    var e = go && go.require && go.require("util").types;
    return e || Ir && Ir.binding && Ir.binding("util");
  } catch {
  }
}();
const Ea = df;
var _a = Ea && Ea.isTypedArray, ff = _a ? uf(_a) : sf;
const Nl = ff;
var pf = Object.prototype, vf = pf.hasOwnProperty;
function di(e, t) {
  var n = ht(e), o = !n && Co(e), r = !n && !o && lr(e), l = !n && !o && !r && Nl(e), a = n || o || r || l, s = a ? Od(e.length, String) : [], i = s.length;
  for (var u in e)
    (t || vf.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    mr(u, i))) && s.push(u);
  return s;
}
function fi(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var hf = fi(Object.keys, Object);
const gf = hf;
var mf = Object.prototype, bf = mf.hasOwnProperty;
function yf(e) {
  if (!Al(e))
    return gf(e);
  var t = [];
  for (var n in Object(e))
    bf.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ll(e) {
  return ro(e) ? di(e) : yf(e);
}
function wf(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Cf = Object.prototype, Sf = Cf.hasOwnProperty;
function Ef(e) {
  if (!lt(e))
    return wf(e);
  var t = Al(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !Sf.call(e, o)) || n.push(o);
  return n;
}
function pi(e) {
  return ro(e) ? di(e, !0) : Ef(e);
}
var _f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Tf = /^\w*$/;
function Pl(e, t) {
  if (ht(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || gr(e) ? !0 : Tf.test(e) || !_f.test(e) || t != null && e in Object(t);
}
var $f = Vn(Object, "create");
const So = $f;
function kf() {
  this.__data__ = So ? So(null) : {}, this.size = 0;
}
function Of(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var xf = "__lodash_hash_undefined__", Af = Object.prototype, Nf = Af.hasOwnProperty;
function Lf(e) {
  var t = this.__data__;
  if (So) {
    var n = t[e];
    return n === xf ? void 0 : n;
  }
  return Nf.call(t, e) ? t[e] : void 0;
}
var Pf = Object.prototype, Mf = Pf.hasOwnProperty;
function If(e) {
  var t = this.__data__;
  return So ? t[e] !== void 0 : Mf.call(t, e);
}
var Rf = "__lodash_hash_undefined__";
function Bf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = So && t === void 0 ? Rf : t, this;
}
function Mn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Mn.prototype.clear = kf;
Mn.prototype.delete = Of;
Mn.prototype.get = Lf;
Mn.prototype.has = If;
Mn.prototype.set = Bf;
function zf() {
  this.__data__ = [], this.size = 0;
}
function br(e, t) {
  for (var n = e.length; n--; )
    if (xo(e[n][0], t))
      return n;
  return -1;
}
var Ff = Array.prototype, Df = Ff.splice;
function Hf(e) {
  var t = this.__data__, n = br(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Df.call(t, n, 1), --this.size, !0;
}
function Vf(e) {
  var t = this.__data__, n = br(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Wf(e) {
  return br(this.__data__, e) > -1;
}
function jf(e, t) {
  var n = this.__data__, o = br(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
rn.prototype.clear = zf;
rn.prototype.delete = Hf;
rn.prototype.get = Vf;
rn.prototype.has = Wf;
rn.prototype.set = jf;
var Kf = Vn(Ot, "Map");
const Eo = Kf;
function Uf() {
  this.size = 0, this.__data__ = {
    hash: new Mn(),
    map: new (Eo || rn)(),
    string: new Mn()
  };
}
function Gf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function yr(e, t) {
  var n = e.__data__;
  return Gf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function qf(e) {
  var t = yr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Yf(e) {
  return yr(this, e).get(e);
}
function Qf(e) {
  return yr(this, e).has(e);
}
function Xf(e, t) {
  var n = yr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ln(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ln.prototype.clear = Uf;
ln.prototype.delete = qf;
ln.prototype.get = Yf;
ln.prototype.has = Qf;
ln.prototype.set = Xf;
var Zf = "Expected a function";
function Ml(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Zf);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var a = e.apply(this, o);
    return n.cache = l.set(r, a) || l, a;
  };
  return n.cache = new (Ml.Cache || ln)(), n;
}
Ml.Cache = ln;
var Jf = 500;
function ep(e) {
  var t = Ml(e, function(o) {
    return n.size === Jf && n.clear(), o;
  }), n = t.cache;
  return t;
}
var tp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, np = /\\(\\)?/g, op = ep(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(tp, function(n, o, r, l) {
    t.push(r ? l.replace(np, "$1") : o || n);
  }), t;
});
const rp = op;
function lp(e) {
  return e == null ? "" : ri(e);
}
function wr(e, t) {
  return ht(e) ? e : Pl(e, t) ? [e] : rp(lp(e));
}
var ap = 1 / 0;
function Ao(e) {
  if (typeof e == "string" || gr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -ap ? "-0" : t;
}
function Il(e, t) {
  t = wr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Ao(t[n++])];
  return n && n == o ? e : void 0;
}
function Ge(e, t, n) {
  var o = e == null ? void 0 : Il(e, t);
  return o === void 0 ? n : o;
}
function vi(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Ta = Dt ? Dt.isConcatSpreadable : void 0;
function sp(e) {
  return ht(e) || Co(e) || !!(Ta && e && e[Ta]);
}
function Rl(e, t, n, o, r) {
  var l = -1, a = e.length;
  for (n || (n = sp), r || (r = []); ++l < a; ) {
    var s = e[l];
    t > 0 && n(s) ? t > 1 ? Rl(s, t - 1, n, o, r) : vi(r, s) : o || (r[r.length] = s);
  }
  return r;
}
function ip(e) {
  var t = e == null ? 0 : e.length;
  return t ? Rl(e, 1) : [];
}
function up(e) {
  return li(si(e, void 0, ip), e + "");
}
var cp = fi(Object.getPrototypeOf, Object);
const hi = cp;
var dp = "[object Object]", fp = Function.prototype, pp = Object.prototype, gi = fp.toString, vp = pp.hasOwnProperty, hp = gi.call(Object);
function gp(e) {
  if (!hn(e) || Dn(e) != dp)
    return !1;
  var t = hi(e);
  if (t === null)
    return !0;
  var n = vp.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && gi.call(n) == hp;
}
function mp() {
  this.__data__ = new rn(), this.size = 0;
}
function bp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function yp(e) {
  return this.__data__.get(e);
}
function wp(e) {
  return this.__data__.has(e);
}
var Cp = 200;
function Sp(e, t) {
  var n = this.__data__;
  if (n instanceof rn) {
    var o = n.__data__;
    if (!Eo || o.length < Cp - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ln(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Bt(e) {
  var t = this.__data__ = new rn(e);
  this.size = t.size;
}
Bt.prototype.clear = mp;
Bt.prototype.delete = bp;
Bt.prototype.get = yp;
Bt.prototype.has = wp;
Bt.prototype.set = Sp;
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, $a = mi && typeof module == "object" && module && !module.nodeType && module, Ep = $a && $a.exports === mi, ka = Ep ? Ot.Buffer : void 0, Oa = ka ? ka.allocUnsafe : void 0;
function _p(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = Oa ? Oa(n) : new e.constructor(n);
  return e.copy(o), o;
}
function Tp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (l[r++] = a);
  }
  return l;
}
function $p() {
  return [];
}
var kp = Object.prototype, Op = kp.propertyIsEnumerable, xa = Object.getOwnPropertySymbols, xp = xa ? function(e) {
  return e == null ? [] : (e = Object(e), Tp(xa(e), function(t) {
    return Op.call(e, t);
  }));
} : $p;
const Ap = xp;
function Np(e, t, n) {
  var o = t(e);
  return ht(e) ? o : vi(o, n(e));
}
function Aa(e) {
  return Np(e, Ll, Ap);
}
var Lp = Vn(Ot, "DataView");
const Yr = Lp;
var Pp = Vn(Ot, "Promise");
const Qr = Pp;
var Mp = Vn(Ot, "Set");
const Xr = Mp;
var Na = "[object Map]", Ip = "[object Object]", La = "[object Promise]", Pa = "[object Set]", Ma = "[object WeakMap]", Ia = "[object DataView]", Rp = Hn(Yr), Bp = Hn(Eo), zp = Hn(Qr), Fp = Hn(Xr), Dp = Hn(qr), $n = Dn;
(Yr && $n(new Yr(new ArrayBuffer(1))) != Ia || Eo && $n(new Eo()) != Na || Qr && $n(Qr.resolve()) != La || Xr && $n(new Xr()) != Pa || qr && $n(new qr()) != Ma) && ($n = function(e) {
  var t = Dn(e), n = t == Ip ? e.constructor : void 0, o = n ? Hn(n) : "";
  if (o)
    switch (o) {
      case Rp:
        return Ia;
      case Bp:
        return Na;
      case zp:
        return La;
      case Fp:
        return Pa;
      case Dp:
        return Ma;
    }
  return t;
});
const Ra = $n;
var Hp = Ot.Uint8Array;
const ar = Hp;
function Vp(e) {
  var t = new e.constructor(e.byteLength);
  return new ar(t).set(new ar(e)), t;
}
function Wp(e, t) {
  var n = t ? Vp(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function jp(e) {
  return typeof e.constructor == "function" && !Al(e) ? ad(hi(e)) : {};
}
var Kp = "__lodash_hash_undefined__";
function Up(e) {
  return this.__data__.set(e, Kp), this;
}
function Gp(e) {
  return this.__data__.has(e);
}
function sr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ln(); ++t < n; )
    this.add(e[t]);
}
sr.prototype.add = sr.prototype.push = Up;
sr.prototype.has = Gp;
function qp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Yp(e, t) {
  return e.has(t);
}
var Qp = 1, Xp = 2;
function bi(e, t, n, o, r, l) {
  var a = n & Qp, s = e.length, i = t.length;
  if (s != i && !(a && i > s))
    return !1;
  var u = l.get(e), d = l.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, v = !0, p = n & Xp ? new sr() : void 0;
  for (l.set(e, t), l.set(t, e); ++f < s; ) {
    var c = e[f], g = t[f];
    if (o)
      var b = a ? o(g, c, f, t, e, l) : o(c, g, f, e, t, l);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (p) {
      if (!qp(t, function(m, w) {
        if (!Yp(p, w) && (c === m || r(c, m, n, o, l)))
          return p.push(w);
      })) {
        v = !1;
        break;
      }
    } else if (!(c === g || r(c, g, n, o, l))) {
      v = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), v;
}
function Zp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Jp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var ev = 1, tv = 2, nv = "[object Boolean]", ov = "[object Date]", rv = "[object Error]", lv = "[object Map]", av = "[object Number]", sv = "[object RegExp]", iv = "[object Set]", uv = "[object String]", cv = "[object Symbol]", dv = "[object ArrayBuffer]", fv = "[object DataView]", Ba = Dt ? Dt.prototype : void 0, Rr = Ba ? Ba.valueOf : void 0;
function pv(e, t, n, o, r, l, a) {
  switch (n) {
    case fv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case dv:
      return !(e.byteLength != t.byteLength || !l(new ar(e), new ar(t)));
    case nv:
    case ov:
    case av:
      return xo(+e, +t);
    case rv:
      return e.name == t.name && e.message == t.message;
    case sv:
    case uv:
      return e == t + "";
    case lv:
      var s = Zp;
    case iv:
      var i = o & ev;
      if (s || (s = Jp), e.size != t.size && !i)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= tv, a.set(e, t);
      var d = bi(s(e), s(t), o, r, l, a);
      return a.delete(e), d;
    case cv:
      if (Rr)
        return Rr.call(e) == Rr.call(t);
  }
  return !1;
}
var vv = 1, hv = Object.prototype, gv = hv.hasOwnProperty;
function mv(e, t, n, o, r, l) {
  var a = n & vv, s = Aa(e), i = s.length, u = Aa(t), d = u.length;
  if (i != d && !a)
    return !1;
  for (var f = i; f--; ) {
    var v = s[f];
    if (!(a ? v in t : gv.call(t, v)))
      return !1;
  }
  var p = l.get(e), c = l.get(t);
  if (p && c)
    return p == t && c == e;
  var g = !0;
  l.set(e, t), l.set(t, e);
  for (var b = a; ++f < i; ) {
    v = s[f];
    var m = e[v], w = t[v];
    if (o)
      var y = a ? o(w, m, v, t, e, l) : o(m, w, v, e, t, l);
    if (!(y === void 0 ? m === w || r(m, w, n, o, l) : y)) {
      g = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (g && !b) {
    var C = e.constructor, _ = t.constructor;
    C != _ && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof _ == "function" && _ instanceof _) && (g = !1);
  }
  return l.delete(e), l.delete(t), g;
}
var bv = 1, za = "[object Arguments]", Fa = "[object Array]", Bo = "[object Object]", yv = Object.prototype, Da = yv.hasOwnProperty;
function wv(e, t, n, o, r, l) {
  var a = ht(e), s = ht(t), i = a ? Fa : Ra(e), u = s ? Fa : Ra(t);
  i = i == za ? Bo : i, u = u == za ? Bo : u;
  var d = i == Bo, f = u == Bo, v = i == u;
  if (v && lr(e)) {
    if (!lr(t))
      return !1;
    a = !0, d = !1;
  }
  if (v && !d)
    return l || (l = new Bt()), a || Nl(e) ? bi(e, t, n, o, r, l) : pv(e, t, i, n, o, r, l);
  if (!(n & bv)) {
    var p = d && Da.call(e, "__wrapped__"), c = f && Da.call(t, "__wrapped__");
    if (p || c) {
      var g = p ? e.value() : e, b = c ? t.value() : t;
      return l || (l = new Bt()), r(g, b, n, o, l);
    }
  }
  return v ? (l || (l = new Bt()), mv(e, t, n, o, r, l)) : !1;
}
function Cr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !hn(e) && !hn(t) ? e !== e && t !== t : wv(e, t, n, o, Cr, r);
}
var Cv = 1, Sv = 2;
function Ev(e, t, n, o) {
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
        var v = o(u, d, i, e, t, f);
      if (!(v === void 0 ? Cr(d, u, Cv | Sv, o, f) : v))
        return !1;
    }
  }
  return !0;
}
function yi(e) {
  return e === e && !lt(e);
}
function _v(e) {
  for (var t = Ll(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, yi(r)];
  }
  return t;
}
function wi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Tv(e) {
  var t = _v(e);
  return t.length == 1 && t[0][2] ? wi(t[0][0], t[0][1]) : function(n) {
    return n === e || Ev(n, e, t);
  };
}
function $v(e, t) {
  return e != null && t in Object(e);
}
function kv(e, t, n) {
  t = wr(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var a = Ao(t[o]);
    if (!(l = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && xl(r) && mr(a, r) && (ht(e) || Co(e)));
}
function Ci(e, t) {
  return e != null && kv(e, t, $v);
}
var Ov = 1, xv = 2;
function Av(e, t) {
  return Pl(e) && yi(t) ? wi(Ao(e), t) : function(n) {
    var o = Ge(n, e);
    return o === void 0 && o === t ? Ci(n, e) : Cr(t, o, Ov | xv);
  };
}
function Nv(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Lv(e) {
  return function(t) {
    return Il(t, e);
  };
}
function Pv(e) {
  return Pl(e) ? Nv(Ao(e)) : Lv(e);
}
function Mv(e) {
  return typeof e == "function" ? e : e == null ? $l : typeof e == "object" ? ht(e) ? Av(e[0], e[1]) : Tv(e) : Pv(e);
}
function Iv(e) {
  return function(t, n, o) {
    for (var r = -1, l = Object(t), a = o(t), s = a.length; s--; ) {
      var i = a[e ? s : ++r];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var Rv = Iv();
const Si = Rv;
function Bv(e, t) {
  return e && Si(e, t, Ll);
}
function zv(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!ro(n))
      return e(n, o);
    for (var r = n.length, l = t ? r : -1, a = Object(n); (t ? l-- : ++l < r) && o(a[l], l, a) !== !1; )
      ;
    return n;
  };
}
var Fv = zv(Bv);
const Dv = Fv;
var Hv = function() {
  return Ot.Date.now();
};
const Br = Hv;
var Vv = "Expected a function", Wv = Math.max, jv = Math.min;
function In(e, t, n) {
  var o, r, l, a, s, i, u = 0, d = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Vv);
  t = ga(t) || 0, lt(n) && (d = !!n.leading, f = "maxWait" in n, l = f ? Wv(ga(n.maxWait) || 0, t) : l, v = "trailing" in n ? !!n.trailing : v);
  function p(T) {
    var S = o, x = r;
    return o = r = void 0, u = T, a = e.apply(x, S), a;
  }
  function c(T) {
    return u = T, s = setTimeout(m, t), d ? p(T) : a;
  }
  function g(T) {
    var S = T - i, x = T - u, N = t - S;
    return f ? jv(N, l - x) : N;
  }
  function b(T) {
    var S = T - i, x = T - u;
    return i === void 0 || S >= t || S < 0 || f && x >= l;
  }
  function m() {
    var T = Br();
    if (b(T))
      return w(T);
    s = setTimeout(m, g(T));
  }
  function w(T) {
    return s = void 0, v && o ? p(T) : (o = r = void 0, a);
  }
  function y() {
    s !== void 0 && clearTimeout(s), u = 0, o = i = r = s = void 0;
  }
  function C() {
    return s === void 0 ? a : w(Br());
  }
  function _() {
    var T = Br(), S = b(T);
    if (o = arguments, r = this, i = T, S) {
      if (s === void 0)
        return c(i);
      if (f)
        return clearTimeout(s), s = setTimeout(m, t), p(i);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return _.cancel = y, _.flush = C, _;
}
function Zr(e, t, n) {
  (n !== void 0 && !xo(e[t], n) || n === void 0 && !(t in e)) && Ol(e, t, n);
}
function Kv(e) {
  return hn(e) && ro(e);
}
function Jr(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Uv(e) {
  return Sd(e, pi(e));
}
function Gv(e, t, n, o, r, l, a) {
  var s = Jr(e, n), i = Jr(t, n), u = a.get(i);
  if (u) {
    Zr(e, n, u);
    return;
  }
  var d = l ? l(s, i, n + "", e, t, a) : void 0, f = d === void 0;
  if (f) {
    var v = ht(i), p = !v && lr(i), c = !v && !p && Nl(i);
    d = i, v || p || c ? ht(s) ? d = s : Kv(s) ? d = id(s) : p ? (f = !1, d = _p(i, !0)) : c ? (f = !1, d = Wp(i, !0)) : d = [] : gp(i) || Co(i) ? (d = s, Co(s) ? d = Uv(s) : (!lt(s) || kl(s)) && (d = jp(i))) : f = !1;
  }
  f && (a.set(i, d), r(d, i, o, l, a), a.delete(i)), Zr(e, n, d);
}
function Ei(e, t, n, o, r) {
  e !== t && Si(t, function(l, a) {
    if (r || (r = new Bt()), lt(l))
      Gv(e, t, a, n, Ei, o, r);
    else {
      var s = o ? o(Jr(e, a), l, a + "", e, t, r) : void 0;
      s === void 0 && (s = l), Zr(e, a, s);
    }
  }, pi);
}
function qv(e, t) {
  var n = -1, o = ro(e) ? Array(e.length) : [];
  return Dv(e, function(r, l, a) {
    o[++n] = t(r, l, a);
  }), o;
}
function Yv(e, t) {
  var n = ht(e) ? oi : qv;
  return n(e, Mv(t));
}
function Qv(e, t) {
  return Rl(Yv(e, t), 1);
}
function _i(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function ir(e, t) {
  return Cr(e, t);
}
function Zt(e) {
  return e == null;
}
var Xv = $d(function(e, t, n) {
  Ei(e, t, n);
});
const Ti = Xv;
function $i(e, t, n, o) {
  if (!lt(e))
    return e;
  t = wr(t, e);
  for (var r = -1, l = t.length, a = l - 1, s = e; s != null && ++r < l; ) {
    var i = Ao(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != a) {
      var d = s[i];
      u = o ? o(d, i, s) : void 0, u === void 0 && (u = lt(d) ? d : mr(t[r + 1]) ? [] : {});
    }
    ai(s, i, u), s = s[i];
  }
  return e;
}
function Zv(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var a = t[o], s = Il(e, a);
    n(s, a) && $i(l, wr(a, e), s);
  }
  return l;
}
function Jv(e, t) {
  return Zv(e, t, function(n, o) {
    return Ci(e, o);
  });
}
var eh = up(function(e, t) {
  return e == null ? {} : Jv(e, t);
});
const th = eh;
function nh(e, t, n) {
  return e == null ? e : $i(e, t, n);
}
var oh = "Expected a function";
function Ha(e, t, n) {
  var o = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(oh);
  return lt(n) && (o = "leading" in n ? !!n.leading : o, r = "trailing" in n ? !!n.trailing : r), In(e, t, {
    leading: o,
    maxWait: t,
    trailing: r
  });
}
const rh = 'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])', lh = (e) => process.env.NODE_ENV === "test" ? !0 : getComputedStyle(e).position === "fixed" ? !1 : e.offsetParent !== null, Va = (e) => Array.from(e.querySelectorAll(rh)).filter((t) => ah(t) && lh(t)), ah = (e) => {
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
var Wa;
const be = typeof window < "u", Qn = (e) => typeof e == "boolean", me = (e) => typeof e == "number", sh = (e) => typeof e == "string", ih = () => {
};
be && ((Wa = window == null ? void 0 : window.navigator) != null && Wa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ki(e) {
  return typeof e == "function" ? e() : h(e);
}
function uh(e) {
  return e;
}
function Sr(e) {
  return ac() ? (Xs(e), !0) : !1;
}
function ch(e, t = !0) {
  Ee() ? Ae(e) : t ? e() : se(e);
}
function dh(e, t, n = {}) {
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
    }, ki(t));
  }
  return o && (r.value = !0, be && i()), Sr(s), {
    isPending: r,
    start: i,
    stop: s
  };
}
function fn(e) {
  var t;
  const n = ki(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Bl = be ? window : void 0;
function Mt(...e) {
  let t, n, o, r;
  if (sh(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Bl) : [t, n, o, r] = e, !t)
    return ih;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], a = () => {
    l.forEach((d) => d()), l.length = 0;
  }, s = (d, f, v) => (d.addEventListener(f, v, r), () => d.removeEventListener(f, v, r)), i = Q(() => fn(t), (d) => {
    a(), d && l.push(...n.flatMap((f) => o.map((v) => s(d, f, v))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), a();
  };
  return Sr(u), u;
}
function fh(e, t, n = {}) {
  const { window: o = Bl, ignore: r = [], capture: l = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  let s = !0, i;
  const u = (p) => r.some((c) => {
    if (typeof c == "string")
      return Array.from(o.document.querySelectorAll(c)).some((g) => g === p.target || p.composedPath().includes(g));
    {
      const g = fn(c);
      return g && (p.target === g || p.composedPath().includes(g));
    }
  }), d = (p) => {
    o.clearTimeout(i);
    const c = fn(e);
    if (!(!c || c === p.target || p.composedPath().includes(c))) {
      if (p.detail === 0 && (s = !u(p)), !s) {
        s = !0;
        return;
      }
      t(p);
    }
  }, f = [
    Mt(o, "click", d, { passive: !0, capture: l }),
    Mt(o, "pointerdown", (p) => {
      const c = fn(e);
      c && (s = !p.composedPath().includes(c) && !u(p));
    }, { passive: !0 }),
    Mt(o, "pointerup", (p) => {
      if (p.button === 0) {
        const c = p.composedPath();
        p.composedPath = () => c, i = o.setTimeout(() => d(p), 50);
      }
    }, { passive: !0 }),
    a && Mt(o, "blur", (p) => {
      var c;
      const g = fn(e);
      ((c = o.document.activeElement) == null ? void 0 : c.tagName) === "IFRAME" && !(g != null && g.contains(o.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => f.forEach((p) => p());
}
function ph(e, t = !1) {
  const n = k(), o = () => n.value = Boolean(e());
  return o(), ch(o, t), n;
}
const el = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tl = "__vueuse_ssr_handlers__";
el[tl] = el[tl] || {};
el[tl];
var ja = Object.getOwnPropertySymbols, vh = Object.prototype.hasOwnProperty, hh = Object.prototype.propertyIsEnumerable, gh = (e, t) => {
  var n = {};
  for (var o in e)
    vh.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ja)
    for (var o of ja(e))
      t.indexOf(o) < 0 && hh.call(e, o) && (n[o] = e[o]);
  return n;
};
function Rn(e, t, n = {}) {
  const o = n, { window: r = Bl } = o, l = gh(o, ["window"]);
  let a;
  const s = ph(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Q(() => fn(e), (f) => {
    i(), s.value && r && f && (a = new ResizeObserver(t), a.observe(f, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), u();
  };
  return Sr(d), {
    isSupported: s,
    stop: d
  };
}
var Ka;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ka || (Ka = {}));
var mh = Object.defineProperty, Ua = Object.getOwnPropertySymbols, bh = Object.prototype.hasOwnProperty, yh = Object.prototype.propertyIsEnumerable, Ga = (e, t, n) => t in e ? mh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wh = (e, t) => {
  for (var n in t || (t = {}))
    bh.call(t, n) && Ga(e, n, t[n]);
  if (Ua)
    for (var n of Ua(t))
      yh.call(t, n) && Ga(e, n, t[n]);
  return e;
};
const Ch = {
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
wh({
  linear: uh
}, Ch);
const qa = (e) => {
  let t = 0, n = e;
  for (; n; )
    t += n.offsetTop, n = n.offsetParent;
  return t;
}, Sh = (e, t) => Math.abs(qa(e) - qa(t));
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Jt = () => {
}, Eh = Object.assign, _h = Object.prototype.hasOwnProperty, en = (e, t) => _h.call(e, t), gn = Array.isArray, ze = (e) => typeof e == "function", We = (e) => typeof e == "string", at = (e) => e !== null && typeof e == "object", Th = Object.prototype.toString, $h = (e) => Th.call(e), zr = (e) => $h(e).slice(8, -1), Oi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, kh = /-(\w)/g, Oh = Oi((e) => e.replace(kh, (t, n) => n ? n.toUpperCase() : "")), xh = /\B([A-Z])/g, Ah = Oi((e) => e.replace(xh, "-$1").toLowerCase()), Qt = (e) => e === void 0, mn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Nh = (e) => We(e) ? !Number.isNaN(Number(e)) : !1, Lh = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ya = (e) => Object.keys(e), Ph = (e, t, n) => ({
  get value() {
    return Ge(e, t, n);
  },
  set value(o) {
    nh(e, t, o);
  }
});
class xi extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Er(e, t) {
  throw new xi(`[${e}] ${t}`);
}
function Ne(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = We(e) ? new xi(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Mh = "utils/dom/style", Ai = (e = "") => e.split(" ").filter((t) => !!t.trim()), qn = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, _o = (e, t) => {
  !e || !t.trim() || e.classList.add(...Ai(t));
}, bn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Ai(t));
}, Yt = (e, t) => {
  var n;
  if (!be || !e || !t)
    return "";
  let o = Oh(t);
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
function To(e, t = "px") {
  if (!e)
    return "";
  if (me(e) || Nh(e))
    return `${e}${t}`;
  if (We(e))
    return e;
  Ne(Mh, "binding value must be a string or number");
}
const Ih = (e, t) => {
  if (!be)
    return !1;
  const n = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(t)], o = Yt(e, n);
  return ["scroll", "auto", "overlay"].some((r) => o.includes(r));
}, Rh = (e, t) => {
  if (!be)
    return;
  let n = e;
  for (; n; ) {
    if ([window, document, document.documentElement].includes(n))
      return window;
    if (Ih(n, t))
      return n;
    n = n.parentNode;
  }
  return n;
};
let zo;
const Bh = (e) => {
  var t;
  if (!be)
    return 0;
  if (zo !== void 0)
    return zo;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const l = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), zo = o - l, zo;
};
function zh(e, t) {
  if (!be)
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
var Ie = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, Fh = {
  name: "ArrowDown"
}, Dh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hh = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), Vh = [
  Hh
];
function Wh(e, t, n, o, r, l) {
  return E(), B("svg", Dh, Vh);
}
var zl = /* @__PURE__ */ Ie(Fh, [["render", Wh], ["__file", "arrow-down.vue"]]), jh = {
  name: "ArrowLeft"
}, Kh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Uh = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Gh = [
  Uh
];
function qh(e, t, n, o, r, l) {
  return E(), B("svg", Kh, Gh);
}
var Yh = /* @__PURE__ */ Ie(jh, [["render", qh], ["__file", "arrow-left.vue"]]), Qh = {
  name: "ArrowRight"
}, Xh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zh = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Jh = [
  Zh
];
function eg(e, t, n, o, r, l) {
  return E(), B("svg", Xh, Jh);
}
var Fl = /* @__PURE__ */ Ie(Qh, [["render", eg], ["__file", "arrow-right.vue"]]), tg = {
  name: "ArrowUp"
}, ng = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, og = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), rg = [
  og
];
function lg(e, t, n, o, r, l) {
  return E(), B("svg", ng, rg);
}
var Ni = /* @__PURE__ */ Ie(tg, [["render", lg], ["__file", "arrow-up.vue"]]), ag = {
  name: "CircleCheck"
}, sg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ig = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), ug = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), cg = [
  ig,
  ug
];
function dg(e, t, n, o, r, l) {
  return E(), B("svg", sg, cg);
}
var fg = /* @__PURE__ */ Ie(ag, [["render", dg], ["__file", "circle-check.vue"]]), pg = {
  name: "CircleCloseFilled"
}, vg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hg = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), gg = [
  hg
];
function mg(e, t, n, o, r, l) {
  return E(), B("svg", vg, gg);
}
var Li = /* @__PURE__ */ Ie(pg, [["render", mg], ["__file", "circle-close-filled.vue"]]), bg = {
  name: "CircleClose"
}, yg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wg = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Cg = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Sg = [
  wg,
  Cg
];
function Eg(e, t, n, o, r, l) {
  return E(), B("svg", yg, Sg);
}
var Dl = /* @__PURE__ */ Ie(bg, [["render", Eg], ["__file", "circle-close.vue"]]), _g = {
  name: "Close"
}, Tg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $g = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), kg = [
  $g
];
function Og(e, t, n, o, r, l) {
  return E(), B("svg", Tg, kg);
}
var nl = /* @__PURE__ */ Ie(_g, [["render", Og], ["__file", "close.vue"]]), xg = {
  name: "DArrowLeft"
}, Ag = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ng = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), Lg = [
  Ng
];
function Pg(e, t, n, o, r, l) {
  return E(), B("svg", Ag, Lg);
}
var Mg = /* @__PURE__ */ Ie(xg, [["render", Pg], ["__file", "d-arrow-left.vue"]]), Ig = {
  name: "DArrowRight"
}, Rg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bg = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), zg = [
  Bg
];
function Fg(e, t, n, o, r, l) {
  return E(), B("svg", Rg, zg);
}
var Dg = /* @__PURE__ */ Ie(Ig, [["render", Fg], ["__file", "d-arrow-right.vue"]]), Hg = {
  name: "Hide"
}, Vg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wg = /* @__PURE__ */ z("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), jg = /* @__PURE__ */ z("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), Kg = [
  Wg,
  jg
];
function Ug(e, t, n, o, r, l) {
  return E(), B("svg", Vg, Kg);
}
var Gg = /* @__PURE__ */ Ie(Hg, [["render", Ug], ["__file", "hide.vue"]]), qg = {
  name: "InfoFilled"
}, Yg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qg = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), Xg = [
  Qg
];
function Zg(e, t, n, o, r, l) {
  return E(), B("svg", Yg, Xg);
}
var Pi = /* @__PURE__ */ Ie(qg, [["render", Zg], ["__file", "info-filled.vue"]]), Jg = {
  name: "Loading"
}, em = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tm = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), nm = [
  tm
];
function om(e, t, n, o, r, l) {
  return E(), B("svg", em, nm);
}
var _r = /* @__PURE__ */ Ie(Jg, [["render", om], ["__file", "loading.vue"]]), rm = {
  name: "Minus"
}, lm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, am = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), sm = [
  am
];
function im(e, t, n, o, r, l) {
  return E(), B("svg", lm, sm);
}
var um = /* @__PURE__ */ Ie(rm, [["render", im], ["__file", "minus.vue"]]), cm = {
  name: "MoreFilled"
}, dm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fm = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), pm = [
  fm
];
function vm(e, t, n, o, r, l) {
  return E(), B("svg", dm, pm);
}
var Qa = /* @__PURE__ */ Ie(cm, [["render", vm], ["__file", "more-filled.vue"]]), hm = {
  name: "Plus"
}, gm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, mm = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), bm = [
  mm
];
function ym(e, t, n, o, r, l) {
  return E(), B("svg", gm, bm);
}
var wm = /* @__PURE__ */ Ie(hm, [["render", ym], ["__file", "plus.vue"]]), Cm = {
  name: "Search"
}, Sm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Em = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), _m = [
  Em
];
function Tm(e, t, n, o, r, l) {
  return E(), B("svg", Sm, _m);
}
var $m = /* @__PURE__ */ Ie(Cm, [["render", Tm], ["__file", "search.vue"]]), km = {
  name: "SuccessFilled"
}, Om = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xm = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), Am = [
  xm
];
function Nm(e, t, n, o, r, l) {
  return E(), B("svg", Om, Am);
}
var Mi = /* @__PURE__ */ Ie(km, [["render", Nm], ["__file", "success-filled.vue"]]), Lm = {
  name: "View"
}, Pm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mm = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), Im = [
  Mm
];
function Rm(e, t, n, o, r, l) {
  return E(), B("svg", Pm, Im);
}
var Bm = /* @__PURE__ */ Ie(Lm, [["render", Rm], ["__file", "view.vue"]]), zm = {
  name: "WarningFilled"
}, Fm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dm = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), Hm = [
  Dm
];
function Vm(e, t, n, o, r, l) {
  return E(), B("svg", Fm, Hm);
}
var Ii = /* @__PURE__ */ Ie(zm, [["render", Vm], ["__file", "warning-filled.vue"]]);
const Ri = "__epPropKey", ue = (e) => e, Wm = (e) => at(e) && !!e[Ri], Tr = (e, t) => {
  if (!at(e) || Wm(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: a } = e, i = {
    type: l,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), en(e, "default") && f.push(r), d || (d = f.includes(u))), a && (d || (d = a(u))), !d && f.length > 0) {
        const v = [...new Set(f)].map((p) => JSON.stringify(p)).join(", ");
        sc(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Ri]: !0
  };
  return en(e, "default") && (i.default = r), i;
}, Ce = (e) => _i(Object.entries(e).map(([t, n]) => [
  t,
  Tr(n, t)
])), kt = ue([
  String,
  Object,
  Function
]), Bi = {
  Close: nl,
  SuccessFilled: Mi,
  InfoFilled: Pi,
  WarningFilled: Ii,
  CircleCloseFilled: Li
}, ur = {
  success: Mi,
  warning: Ii,
  error: Li,
  info: Pi
}, jm = {
  validating: _r,
  success: fg,
  error: Dl
}, st = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Km = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), lo = (e) => (e.install = Jt, e), Bn = {
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
}, Me = "update:modelValue", $r = "change", qo = "input", No = ["", "default", "small", "large"], Um = {
  large: 40,
  default: 32,
  small: 24
}, Gm = (e) => Um[e || "default"], zi = (e) => ["", ...No].includes(e);
var Yo = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(Yo || {});
const Fi = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), kr = (e) => e, qm = ["class", "style"], Ym = /^on[A-Z]/, Qm = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = O(() => ((n == null ? void 0 : n.value) || []).concat(qm)), r = Ee();
  return r ? O(() => {
    var l;
    return _i(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([a]) => !o.value.includes(a) && !(t && Ym.test(a))));
  }) : (Ne("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), O(() => ({})));
}, Di = Symbol("buttonGroupContextKey"), ao = Symbol("checkboxGroupContextKey"), Hi = Symbol(), Hl = Symbol("formContextKey"), cr = Symbol("formItemContextKey"), Vi = Symbol("elPaginationKey"), Wi = Symbol("scrollbarContextKey"), Vl = Symbol("popper"), ji = Symbol("popperContent"), Wl = Symbol("elTooltip"), Ki = (e) => {
  const t = Ee();
  return O(() => {
    var n, o;
    return (o = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? o : void 0;
  });
}, dr = k();
function Cn(e, t = void 0) {
  const n = Ee() ? ve(Hi, dr) : dr;
  return e ? O(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const Xm = (e, t, n = !1) => {
  var o;
  const r = !!Ee(), l = r ? Cn() : void 0, a = (o = t == null ? void 0 : t.provide) != null ? o : r ? rt : void 0;
  if (!a) {
    Ne("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const s = O(() => {
    const i = h(e);
    return l != null && l.value ? Zm(l.value, i) : i;
  });
  return a(Hi, s), (n || !dr.value) && (dr.value = s.value), s;
}, Zm = (e, t) => {
  var n;
  const o = [.../* @__PURE__ */ new Set([...Ya(e), ...Ya(t)])], r = {};
  for (const l of o)
    r[l] = (n = t[l]) != null ? n : e[l];
  return r;
}, so = Tr({
  type: String,
  values: No,
  required: !1
}), tn = (e, t = {}) => {
  const n = k(void 0), o = t.prop ? n : Ki("size"), r = t.global ? n : Cn("size"), l = t.form ? { size: void 0 } : ve(Hl, void 0), a = t.formItem ? { size: void 0 } : ve(cr, void 0);
  return O(() => o.value || h(e) || (a == null ? void 0 : a.size) || (l == null ? void 0 : l.size) || r.value || "");
}, Lo = (e) => {
  const t = Ki("disabled"), n = ve(Hl, void 0);
  return O(() => t.value || h(e) || (n == null ? void 0 : n.disabled) || !1);
}, Ui = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, a) => {
  Q(() => h(a), (s) => {
    s && Ne(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, Jm = (e, t, n) => {
  let o = {
    offsetX: 0,
    offsetY: 0
  };
  const r = (s) => {
    const i = s.clientX, u = s.clientY, { offsetX: d, offsetY: f } = o, v = e.value.getBoundingClientRect(), p = v.left, c = v.top, g = v.width, b = v.height, m = document.documentElement.clientWidth, w = document.documentElement.clientHeight, y = -p + d, C = -c + f, _ = m - p - g + d, T = w - c - b + f, S = (N) => {
      const F = Math.min(Math.max(d + N.clientX - i, y), _), W = Math.min(Math.max(f + N.clientY - u, C), T);
      o = {
        offsetX: F,
        offsetY: W
      }, e.value.style.transform = `translate(${To(F)}, ${To(W)})`;
    }, x = () => {
      document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", x);
    };
    document.addEventListener("mousemove", S), document.addEventListener("mouseup", x);
  }, l = () => {
    t.value && e.value && t.value.addEventListener("mousedown", r);
  }, a = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", r);
  };
  Ae(() => {
    Nn(() => {
      n.value ? l() : a();
    });
  }), wt(() => {
    a();
  });
}, e0 = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), jl = "el", t0 = "is-", Tn = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, ne = (e) => {
  const t = Cn("namespace", jl);
  return {
    namespace: t,
    b: (c = "") => Tn(t.value, e, c, "", ""),
    e: (c) => c ? Tn(t.value, e, "", c, "") : "",
    m: (c) => c ? Tn(t.value, e, "", "", c) : "",
    be: (c, g) => c && g ? Tn(t.value, e, c, g, "") : "",
    em: (c, g) => c && g ? Tn(t.value, e, "", c, g) : "",
    bm: (c, g) => c && g ? Tn(t.value, e, c, "", g) : "",
    bem: (c, g, b) => c && g && b ? Tn(t.value, e, c, g, b) : "",
    is: (c, ...g) => {
      const b = g.length >= 1 ? g[0] : !0;
      return c && b ? `${t0}${c}` : "";
    },
    cssVar: (c) => {
      const g = {};
      for (const b in c)
        c[b] && (g[`--${t.value}-${b}`] = c[b]);
      return g;
    },
    cssVarName: (c) => `--${t.value}-${c}`,
    cssVarBlock: (c) => {
      const g = {};
      for (const b in c)
        c[b] && (g[`--${t.value}-${e}-${b}`] = c[b]);
      return g;
    },
    cssVarBlockName: (c) => `--${t.value}-${e}-${c}`
  };
}, ol = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, n0 = Symbol("elIdInjection"), Gi = () => Ee() ? ve(n0, ol) : ol, fr = (e) => {
  const t = Gi();
  !be && t === ol && Ne("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Cn("namespace", jl);
  return O(() => h(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Wn = () => {
  const e = ve(Hl, void 0), t = ve(cr, void 0);
  return {
    form: e,
    formItem: t
  };
}, Kl = (e, {
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
  return Ae(() => {
    l = Q([Rt(e, "id"), n], ([s, i]) => {
      const u = s ?? (i ? void 0 : fr().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Sl(() => {
    l && l(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
};
var o0 = {
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
const r0 = (e) => (t, n) => l0(t, n, h(e)), l0 = (e, t, n) => Ge(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t == null ? void 0 : t[r]) != null ? l : `{${r}}`}`;
}), a0 = (e) => {
  const t = O(() => h(e).name), n = Ft(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: r0(e)
  };
}, Ct = () => {
  const e = Cn("locale");
  return a0(O(() => e.value || o0));
};
let s0;
function i0(e, t = s0) {
  t && t.active && t.effects.push(e);
}
const Xa = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, qi = (e) => (e.w & yn) > 0, Yi = (e) => (e.n & yn) > 0, u0 = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= yn;
}, c0 = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      qi(r) && !Yi(r) ? r.delete(e) : t[n++] = r, r.w &= ~yn, r.n &= ~yn;
    }
    t.length = n;
  }
};
let vo = 0, yn = 1;
const rl = 30;
let vt;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class d0 {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, i0(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = vt, n = Qo;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = vt, vt = this, Qo = !0, yn = 1 << ++vo, vo <= rl ? u0(this) : Za(this), this.fn();
    } finally {
      vo <= rl && c0(this), yn = 1 << --vo, vt = this.parent, Qo = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    vt === this ? this.deferStop = !0 : this.active && (Za(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Za(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Qo = !0;
function Ja(e, t) {
  let n = !1;
  vo <= rl ? Yi(e) || (e.n |= yn, n = !qi(e)) : n = !e.has(vt), n && (e.add(vt), vt.deps.push(e), process.env.NODE_ENV !== "production" && vt.onTrack && vt.onTrack(Object.assign({ effect: vt }, t)));
}
function es(e, t) {
  const n = gn(e) ? e : [...e];
  for (const o of n)
    o.computed && ts(o, t);
  for (const o of n)
    o.computed || ts(o, t);
}
function ts(e, t) {
  (e !== vt || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Eh({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
function Or(e) {
  const t = e && e.__v_raw;
  return t ? Or(t) : e;
}
function f0(e) {
  Qo && vt && (e = Or(e), process.env.NODE_ENV !== "production" ? Ja(e.dep || (e.dep = Xa()), {
    target: e,
    type: "get",
    key: "value"
  }) : Ja(e.dep || (e.dep = Xa())));
}
function p0(e, t) {
  e = Or(e), e.dep && (process.env.NODE_ENV !== "production" ? es(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : es(e.dep));
}
var Qi;
class v0 {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Qi] = !1, this._dirty = !0, this.effect = new d0(t, () => {
      this._dirty || (this._dirty = !0, p0(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = Or(this);
    return f0(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Qi = "__v_isReadonly";
function h0(e, t, n = !1) {
  let o, r;
  const l = ze(e);
  l ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Jt) : (o = e.get, r = e.set);
  const a = new v0(o, r, l || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (a.effect.onTrack = t.onTrack, a.effect.onTrigger = t.onTrigger), a;
}
const g0 = (e) => {
  Ft(e) || Er("[useLockscreen]", "You need to pass a ref param to this function");
  const t = ne("popup"), n = h0(() => t.bm("parent", "hidden"));
  if (!be || qn(document.body, n.value))
    return;
  let o = 0, r = !1, l = "0";
  const a = () => {
    setTimeout(() => {
      bn(document.body, n.value), r && (document.body.style.width = l);
    }, 200);
  };
  Q(e, (s) => {
    if (!s) {
      a();
      return;
    }
    r = !qn(document.body, n.value), r && (l = document.body.style.width), o = Bh(t.namespace.value);
    const i = document.documentElement.clientHeight < document.body.scrollHeight, u = Yt(document.body, "overflowY");
    o > 0 && (i || u === "scroll") && r && (document.body.style.width = `calc(100% - ${o}px)`), _o(document.body, n.value);
  }), Xs(() => a());
}, m0 = Tr({
  type: ue(Boolean),
  default: null
}), b0 = Tr({
  type: ue(Function)
}), y0 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: m0,
    [n]: b0
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
      const v = Ee(), { emit: p } = v, c = v.props, g = O(() => ze(c[n])), b = O(() => c[e] === null), m = (S) => {
        a.value !== !0 && (a.value = !0, s && (s.value = S), ze(d) && d(S));
      }, w = (S) => {
        a.value !== !1 && (a.value = !1, s && (s.value = S), ze(f) && f(S));
      }, y = (S) => {
        if (c.disabled === !0 || ze(u) && !u())
          return;
        const x = g.value && be;
        x && p(t, !0), (b.value || !x) && m(S);
      }, C = (S) => {
        if (c.disabled === !0 || !be)
          return;
        const x = g.value && be;
        x && p(t, !1), (b.value || !x) && w(S);
      }, _ = (S) => {
        Qn(S) && (c.disabled && S ? g.value && p(t, !1) : a.value !== S && (S ? m() : w()));
      }, T = () => {
        a.value ? C() : y();
      };
      return Q(() => c[e], _), i && v.appContext.config.globalProperties.$route !== void 0 && Q(() => ({
        ...v.proxy.$route
      }), () => {
        i.value && a.value && C();
      }), Ae(() => {
        _(c[e]);
      }), {
        hide: C,
        show: y,
        toggle: T,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
var nt = "top", bt = "bottom", yt = "right", ot = "left", Ul = "auto", Po = [nt, bt, yt, ot], Xn = "start", $o = "end", w0 = "clippingParents", Xi = "viewport", fo = "popper", C0 = "reference", ns = Po.reduce(function(e, t) {
  return e.concat([t + "-" + Xn, t + "-" + $o]);
}, []), xr = [].concat(Po, [Ul]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xn, t + "-" + $o]);
}, []), S0 = "beforeRead", E0 = "read", _0 = "afterRead", T0 = "beforeMain", $0 = "main", k0 = "afterMain", O0 = "beforeWrite", x0 = "write", A0 = "afterWrite", N0 = [S0, E0, _0, T0, $0, k0, O0, x0, A0];
function Ht(e) {
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
function Zn(e) {
  var t = xt(e).Element;
  return e instanceof t || e instanceof Element;
}
function mt(e) {
  var t = xt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Gl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function L0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !mt(l) || !Ht(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(a) {
      var s = r[a];
      s === !1 ? l.removeAttribute(a) : l.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function P0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], l = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = a.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !mt(r) || !Ht(r) || (Object.assign(r.style, s), Object.keys(l).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var Zi = { name: "applyStyles", enabled: !0, phase: "write", fn: L0, effect: P0, requires: ["computeStyles"] };
function zt(e) {
  return e.split("-")[0];
}
var Pn = Math.max, pr = Math.min, Jn = Math.round;
function eo(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (mt(e) && t) {
    var l = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (o = Jn(n.width) / a || 1), l > 0 && (r = Jn(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function ql(e) {
  var t = eo(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Ji(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Gl(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function nn(e) {
  return xt(e).getComputedStyle(e);
}
function M0(e) {
  return ["table", "td", "th"].indexOf(Ht(e)) >= 0;
}
function Sn(e) {
  return ((Zn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ar(e) {
  return Ht(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gl(e) ? e.host : null) || Sn(e);
}
function os(e) {
  return !mt(e) || nn(e).position === "fixed" ? null : e.offsetParent;
}
function I0(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && mt(e)) {
    var o = nn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Ar(e);
  for (Gl(r) && (r = r.host); mt(r) && ["html", "body"].indexOf(Ht(r)) < 0; ) {
    var l = nn(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Mo(e) {
  for (var t = xt(e), n = os(e); n && M0(n) && nn(n).position === "static"; )
    n = os(n);
  return n && (Ht(n) === "html" || Ht(n) === "body" && nn(n).position === "static") ? t : n || I0(e) || t;
}
function Yl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mo(e, t, n) {
  return Pn(e, pr(t, n));
}
function R0(e, t, n) {
  var o = mo(e, t, n);
  return o > n ? n : o;
}
function eu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function tu(e) {
  return Object.assign({}, eu(), e);
}
function nu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var B0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, tu(typeof e != "number" ? e : nu(e, Po));
};
function z0(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, a = n.modifiersData.popperOffsets, s = zt(n.placement), i = Yl(s), u = [ot, yt].indexOf(s) >= 0, d = u ? "height" : "width";
  if (!(!l || !a)) {
    var f = B0(r.padding, n), v = ql(l), p = i === "y" ? nt : ot, c = i === "y" ? bt : yt, g = n.rects.reference[d] + n.rects.reference[i] - a[i] - n.rects.popper[d], b = a[i] - n.rects.reference[i], m = Mo(l), w = m ? i === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, y = g / 2 - b / 2, C = f[p], _ = w - v[d] - f[c], T = w / 2 - v[d] / 2 + y, S = mo(C, T, _), x = i;
    n.modifiersData[o] = (t = {}, t[x] = S, t.centerOffset = S - T, t);
  }
}
function F0(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !Ji(t.elements.popper, r) || (t.elements.arrow = r));
}
var D0 = { name: "arrow", enabled: !0, phase: "main", fn: z0, effect: F0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function to(e) {
  return e.split("-")[1];
}
var H0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function V0(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: Jn(t * r) / r || 0, y: Jn(n * r) / r || 0 };
}
function rs(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, a = e.offsets, s = e.position, i = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, v = a.x, p = v === void 0 ? 0 : v, c = a.y, g = c === void 0 ? 0 : c, b = typeof d == "function" ? d({ x: p, y: g }) : { x: p, y: g };
  p = b.x, g = b.y;
  var m = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), y = ot, C = nt, _ = window;
  if (u) {
    var T = Mo(n), S = "clientHeight", x = "clientWidth";
    if (T === xt(n) && (T = Sn(n), nn(T).position !== "static" && s === "absolute" && (S = "scrollHeight", x = "scrollWidth")), T = T, r === nt || (r === ot || r === yt) && l === $o) {
      C = bt;
      var N = f && T === _ && _.visualViewport ? _.visualViewport.height : T[S];
      g -= N - o.height, g *= i ? 1 : -1;
    }
    if (r === ot || (r === nt || r === bt) && l === $o) {
      y = yt;
      var F = f && T === _ && _.visualViewport ? _.visualViewport.width : T[x];
      p -= F - o.width, p *= i ? 1 : -1;
    }
  }
  var W = Object.assign({ position: s }, u && H0), K = d === !0 ? V0({ x: p, y: g }) : { x: p, y: g };
  if (p = K.x, g = K.y, i) {
    var A;
    return Object.assign({}, W, (A = {}, A[C] = w ? "0" : "", A[y] = m ? "0" : "", A.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", A));
  }
  return Object.assign({}, W, (t = {}, t[C] = w ? g + "px" : "", t[y] = m ? p + "px" : "", t.transform = "", t));
}
function W0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, a = l === void 0 ? !0 : l, s = n.roundOffsets, i = s === void 0 ? !0 : s, u = { placement: zt(t.placement), variation: to(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, rs(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, rs(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ou = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: W0, data: {} }, Fo = { passive: !0 };
function j0(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, a = o.resize, s = a === void 0 ? !0 : a, i = xt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Fo);
  }), s && i.addEventListener("resize", n.update, Fo), function() {
    l && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Fo);
    }), s && i.removeEventListener("resize", n.update, Fo);
  };
}
var ru = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: j0, data: {} }, K0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Xo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return K0[t];
  });
}
var U0 = { start: "end", end: "start" };
function ls(e) {
  return e.replace(/start|end/g, function(t) {
    return U0[t];
  });
}
function Ql(e) {
  var t = xt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Xl(e) {
  return eo(Sn(e)).left + Ql(e).scrollLeft;
}
function G0(e) {
  var t = xt(e), n = Sn(e), o = t.visualViewport, r = n.clientWidth, l = n.clientHeight, a = 0, s = 0;
  return o && (r = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, s = o.offsetTop)), { width: r, height: l, x: a + Xl(e), y: s };
}
function q0(e) {
  var t, n = Sn(e), o = Ql(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = Pn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Pn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + Xl(e), i = -o.scrollTop;
  return nn(r || n).direction === "rtl" && (s += Pn(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: a, x: s, y: i };
}
function Zl(e) {
  var t = nn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function lu(e) {
  return ["html", "body", "#document"].indexOf(Ht(e)) >= 0 ? e.ownerDocument.body : mt(e) && Zl(e) ? e : lu(Ar(e));
}
function bo(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = lu(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = xt(o), a = r ? [l].concat(l.visualViewport || [], Zl(o) ? o : []) : o, s = t.concat(a);
  return r ? s : s.concat(bo(Ar(a)));
}
function ll(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Y0(e) {
  var t = eo(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function as(e, t) {
  return t === Xi ? ll(G0(e)) : Zn(t) ? Y0(t) : ll(q0(Sn(e)));
}
function Q0(e) {
  var t = bo(Ar(e)), n = ["absolute", "fixed"].indexOf(nn(e).position) >= 0, o = n && mt(e) ? Mo(e) : e;
  return Zn(o) ? t.filter(function(r) {
    return Zn(r) && Ji(r, o) && Ht(r) !== "body";
  }) : [];
}
function X0(e, t, n) {
  var o = t === "clippingParents" ? Q0(e) : [].concat(t), r = [].concat(o, [n]), l = r[0], a = r.reduce(function(s, i) {
    var u = as(e, i);
    return s.top = Pn(u.top, s.top), s.right = pr(u.right, s.right), s.bottom = pr(u.bottom, s.bottom), s.left = Pn(u.left, s.left), s;
  }, as(e, l));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function au(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? zt(o) : null, l = o ? to(o) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
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
  var u = r ? Yl(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (l) {
      case Xn:
        i[u] = i[u] - (t[d] / 2 - n[d] / 2);
        break;
      case $o:
        i[u] = i[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function ko(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.boundary, a = l === void 0 ? w0 : l, s = n.rootBoundary, i = s === void 0 ? Xi : s, u = n.elementContext, d = u === void 0 ? fo : u, f = n.altBoundary, v = f === void 0 ? !1 : f, p = n.padding, c = p === void 0 ? 0 : p, g = tu(typeof c != "number" ? c : nu(c, Po)), b = d === fo ? C0 : fo, m = e.rects.popper, w = e.elements[v ? b : d], y = X0(Zn(w) ? w : w.contextElement || Sn(e.elements.popper), a, i), C = eo(e.elements.reference), _ = au({ reference: C, element: m, strategy: "absolute", placement: r }), T = ll(Object.assign({}, m, _)), S = d === fo ? T : C, x = { top: y.top - S.top + g.top, bottom: S.bottom - y.bottom + g.bottom, left: y.left - S.left + g.left, right: S.right - y.right + g.right }, N = e.modifiersData.offset;
  if (d === fo && N) {
    var F = N[r];
    Object.keys(x).forEach(function(W) {
      var K = [yt, bt].indexOf(W) >= 0 ? 1 : -1, A = [nt, bt].indexOf(W) >= 0 ? "y" : "x";
      x[W] += F[A] * K;
    });
  }
  return x;
}
function Z0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, a = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? xr : i, d = to(o), f = d ? s ? ns : ns.filter(function(c) {
    return to(c) === d;
  }) : Po, v = f.filter(function(c) {
    return u.indexOf(c) >= 0;
  });
  v.length === 0 && (v = f);
  var p = v.reduce(function(c, g) {
    return c[g] = ko(e, { placement: g, boundary: r, rootBoundary: l, padding: a })[zt(g)], c;
  }, {});
  return Object.keys(p).sort(function(c, g) {
    return p[c] - p[g];
  });
}
function J0(e) {
  if (zt(e) === Ul)
    return [];
  var t = Xo(e);
  return [ls(e), t, ls(t)];
}
function eb(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !0 : a, i = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, v = n.altBoundary, p = n.flipVariations, c = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, b = t.options.placement, m = zt(b), w = m === b, y = i || (w || !c ? [Xo(b)] : J0(b)), C = [b].concat(y).reduce(function(ye, ie) {
      return ye.concat(zt(ie) === Ul ? Z0(t, { placement: ie, boundary: d, rootBoundary: f, padding: u, flipVariations: c, allowedAutoPlacements: g }) : ie);
    }, []), _ = t.rects.reference, T = t.rects.popper, S = /* @__PURE__ */ new Map(), x = !0, N = C[0], F = 0; F < C.length; F++) {
      var W = C[F], K = zt(W), A = to(W) === Xn, M = [nt, bt].indexOf(K) >= 0, P = M ? "width" : "height", D = ko(t, { placement: W, boundary: d, rootBoundary: f, altBoundary: v, padding: u }), q = M ? A ? yt : ot : A ? bt : nt;
      _[P] > T[P] && (q = Xo(q));
      var H = Xo(q), I = [];
      if (l && I.push(D[K] <= 0), s && I.push(D[q] <= 0, D[H] <= 0), I.every(function(ye) {
        return ye;
      })) {
        N = W, x = !1;
        break;
      }
      S.set(W, I);
    }
    if (x)
      for (var X = c ? 3 : 1, le = function(ye) {
        var ie = C.find(function(_e) {
          var $e = S.get(_e);
          if ($e)
            return $e.slice(0, ye).every(function(pe) {
              return pe;
            });
        });
        if (ie)
          return N = ie, "break";
      }, ge = X; ge > 0; ge--) {
        var Se = le(ge);
        if (Se === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[o]._skip = !0, t.placement = N, t.reset = !0);
  }
}
var tb = { name: "flip", enabled: !0, phase: "main", fn: eb, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ss(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function is(e) {
  return [nt, yt, bt, ot].some(function(t) {
    return e[t] >= 0;
  });
}
function nb(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, a = ko(t, { elementContext: "reference" }), s = ko(t, { altBoundary: !0 }), i = ss(a, o), u = ss(s, r, l), d = is(i), f = is(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var ob = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: nb };
function rb(e, t, n) {
  var o = zt(e), r = [ot, nt].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = l[0], s = l[1];
  return a = a || 0, s = (s || 0) * r, [ot, yt].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function lb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, a = xr.reduce(function(d, f) {
    return d[f] = rb(f, t.rects, l), d;
  }, {}), s = a[t.placement], i = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var ab = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: lb };
function sb(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = au({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var su = { name: "popperOffsets", enabled: !0, phase: "read", fn: sb, data: {} };
function ib(e) {
  return e === "x" ? "y" : "x";
}
function ub(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !1 : a, i = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, v = n.tether, p = v === void 0 ? !0 : v, c = n.tetherOffset, g = c === void 0 ? 0 : c, b = ko(t, { boundary: i, rootBoundary: u, padding: f, altBoundary: d }), m = zt(t.placement), w = to(t.placement), y = !w, C = Yl(m), _ = ib(C), T = t.modifiersData.popperOffsets, S = t.rects.reference, x = t.rects.popper, N = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, F = typeof N == "number" ? { mainAxis: N, altAxis: N } : Object.assign({ mainAxis: 0, altAxis: 0 }, N), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = { x: 0, y: 0 };
  if (T) {
    if (l) {
      var A, M = C === "y" ? nt : ot, P = C === "y" ? bt : yt, D = C === "y" ? "height" : "width", q = T[C], H = q + b[M], I = q - b[P], X = p ? -x[D] / 2 : 0, le = w === Xn ? S[D] : x[D], ge = w === Xn ? -x[D] : -S[D], Se = t.elements.arrow, ye = p && Se ? ql(Se) : { width: 0, height: 0 }, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : eu(), _e = ie[M], $e = ie[P], pe = mo(0, S[D], ye[D]), Re = y ? S[D] / 2 - X - pe - _e - F.mainAxis : le - pe - _e - F.mainAxis, Xe = y ? -S[D] / 2 + X + pe + $e + F.mainAxis : ge + pe + $e + F.mainAxis, gt = t.elements.arrow && Mo(t.elements.arrow), Ze = gt ? C === "y" ? gt.clientTop || 0 : gt.clientLeft || 0 : 0, it = (A = W == null ? void 0 : W[C]) != null ? A : 0, At = q + Re - it - Ze, Nt = q + Xe - it, ut = mo(p ? pr(H, At) : H, q, p ? Pn(I, Nt) : I);
      T[C] = ut, K[C] = ut - q;
    }
    if (s) {
      var Lt, Wt = C === "x" ? nt : ot, Ye = C === "x" ? bt : yt, Ue = T[_], ct = _ === "y" ? "height" : "width", V = Ue + b[Wt], he = Ue - b[Ye], Fe = [nt, ot].indexOf(m) !== -1, dt = (Lt = W == null ? void 0 : W[_]) != null ? Lt : 0, jt = Fe ? V : Ue - S[ct] - x[ct] - dt + F.altAxis, Kt = Fe ? Ue + S[ct] + x[ct] - dt - F.altAxis : he, En = p && Fe ? R0(jt, Ue, Kt) : mo(p ? jt : V, Ue, p ? Kt : he);
      T[_] = En, K[_] = En - Ue;
    }
    t.modifiersData[o] = K;
  }
}
var cb = { name: "preventOverflow", enabled: !0, phase: "main", fn: ub, requiresIfExists: ["offset"] };
function db(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function fb(e) {
  return e === xt(e) || !mt(e) ? Ql(e) : db(e);
}
function pb(e) {
  var t = e.getBoundingClientRect(), n = Jn(t.width) / e.offsetWidth || 1, o = Jn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function vb(e, t, n) {
  n === void 0 && (n = !1);
  var o = mt(t), r = mt(t) && pb(t), l = Sn(t), a = eo(e, r), s = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((Ht(t) !== "body" || Zl(l)) && (s = fb(t)), mt(t) ? (i = eo(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = Xl(l))), { x: a.left + s.scrollLeft - i.x, y: a.top + s.scrollTop - i.y, width: a.width, height: a.height };
}
function hb(e) {
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
function gb(e) {
  var t = hb(e);
  return N0.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function mb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function bb(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var us = { placement: "bottom", modifiers: [], strategy: "absolute" };
function cs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Jl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? us : r;
  return function(a, s, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, us, l), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, d = [], f = !1, v = { state: u, setOptions: function(g) {
      var b = typeof g == "function" ? g(u.options) : g;
      c(), u.options = Object.assign({}, l, u.options, b), u.scrollParents = { reference: Zn(a) ? bo(a) : a.contextElement ? bo(a.contextElement) : [], popper: bo(s) };
      var m = gb(bb([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(w) {
        return w.enabled;
      }), p(), v.update();
    }, forceUpdate: function() {
      if (!f) {
        var g = u.elements, b = g.reference, m = g.popper;
        if (cs(b, m)) {
          u.rects = { reference: vb(b, Mo(m), u.options.strategy === "fixed"), popper: ql(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
            return u.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var y = u.orderedModifiers[w], C = y.fn, _ = y.options, T = _ === void 0 ? {} : _, S = y.name;
            typeof C == "function" && (u = C({ state: u, options: T, name: S, instance: v }) || u);
          }
        }
      }
    }, update: mb(function() {
      return new Promise(function(g) {
        v.forceUpdate(), g(u);
      });
    }), destroy: function() {
      c(), f = !0;
    } };
    if (!cs(a, s))
      return v;
    v.setOptions(i).then(function(g) {
      !f && i.onFirstUpdate && i.onFirstUpdate(g);
    });
    function p() {
      u.orderedModifiers.forEach(function(g) {
        var b = g.name, m = g.options, w = m === void 0 ? {} : m, y = g.effect;
        if (typeof y == "function") {
          var C = y({ state: u, name: b, instance: v, options: w }), _ = function() {
          };
          d.push(C || _);
        }
      });
    }
    function c() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return v;
  };
}
Jl();
var yb = [ru, su, ou, Zi];
Jl({ defaultModifiers: yb });
var wb = [ru, su, ou, Zi, ab, tb, cb, D0, ob], iu = Jl({ defaultModifiers: wb });
const Cb = (e, t) => {
  let n;
  Q(() => e.value, (o) => {
    var r, l;
    o ? (n = document.activeElement, Ft(t) && ((l = (r = t.value).focus) == null || l.call(r))) : process.env.NODE_ENV === "test" ? n.focus.call(n) : n.focus();
  });
}, uu = (e) => {
  if (!e)
    return { onClick: Jt, onMousedown: Jt, onMouseup: Jt };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
};
function Sb() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Sr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let Un = [];
const ds = (e) => {
  const t = e;
  t.key === Bn.esc && Un.forEach((n) => n(t));
}, Eb = (e) => {
  Ae(() => {
    Un.length === 0 && document.addEventListener("keydown", ds), be && Un.push(e);
  }), wt(() => {
    Un = Un.filter((t) => t !== e), Un.length === 0 && be && document.removeEventListener("keydown", ds);
  });
};
let fs;
const cu = () => {
  const e = Cn("namespace", jl), t = Gi(), n = O(() => `${e.value}-popper-container-${t.prefix}`), o = O(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, _b = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Tb = () => {
  El(() => {
    if (!be)
      return;
    const { id: e, selector: t } = cu();
    (process.env.NODE_ENV === "test" || !fs && !document.body.querySelector(t.value)) && (fs = _b(e.value));
  });
}, $b = Ce({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), du = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = Sb();
  return {
    onOpen: (s) => {
      r(() => {
        n(s);
      }, h(e));
    },
    onClose: (s) => {
      r(() => {
        o(s);
      }, h(t));
    }
  };
}, fu = Symbol("elForwardRef"), kb = (e) => {
  rt(fu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Ob = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ps = k(0), Io = () => {
  const e = Cn("zIndex", 2e3), t = O(() => e.value + ps.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (ps.value++, t.value)
  };
};
function xb(e) {
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
const Ab = Ce({
  size: {
    type: ue([Number, String])
  },
  color: {
    type: String
  }
}), Nb = Y({
  name: "ElIcon",
  inheritAttrs: !1
}), Lb = /* @__PURE__ */ Y({
  ...Nb,
  props: Ab,
  setup(e) {
    const t = e, n = ne("icon"), o = O(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: Qt(r) ? void 0 : To(r),
        "--color": l
      };
    });
    return (r, l) => (E(), B("i", Ln({
      class: h(n).b(),
      style: h(o)
    }, r.$attrs), [
      re(r.$slots, "default")
    ], 16));
  }
});
var Pb = /* @__PURE__ */ fe(Lb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Pe = st(Pb);
let Et;
const Mb = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Ib = [
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
function Rb(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Ib.map((a) => `${a}:${t.getPropertyValue(a)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function vs(e, t = 1, n) {
  var o;
  Et || (Et = document.createElement("textarea"), document.body.appendChild(Et));
  const { paddingSize: r, borderSize: l, boxSizing: a, contextStyle: s } = Rb(e);
  Et.setAttribute("style", `${s};${Mb}`), Et.value = e.value || e.placeholder || "";
  let i = Et.scrollHeight;
  const u = {};
  a === "border-box" ? i = i + l : a === "content-box" && (i = i - r), Et.value = "";
  const d = Et.scrollHeight - r;
  if (me(t)) {
    let f = d * t;
    a === "border-box" && (f = f + r + l), i = Math.max(f, i), u.minHeight = `${f}px`;
  }
  if (me(n)) {
    let f = d * n;
    a === "border-box" && (f = f + r + l), i = Math.min(f, i);
  }
  return u.height = `${i}px`, (o = Et.parentNode) == null || o.removeChild(Et), Et = void 0, u;
}
const Bb = Ce({
  id: {
    type: String,
    default: void 0
  },
  size: so,
  disabled: Boolean,
  modelValue: {
    type: ue([
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
    type: ue([Boolean, Object]),
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
    type: kt
  },
  prefixIcon: {
    type: kt
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
    type: ue([Object, Array, String]),
    default: () => kr({})
  }
}), zb = {
  [Me]: (e) => We(e),
  input: (e) => We(e),
  change: (e) => We(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Fb = ["role"], Db = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Hb = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], Vb = Y({
  name: "ElInput",
  inheritAttrs: !1
}), Wb = /* @__PURE__ */ Y({
  ...Vb,
  props: Bb,
  emits: zb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ic(), l = vr(), a = O(() => {
      const V = {};
      return o.containerRole === "combobox" && (V["aria-haspopup"] = r["aria-haspopup"], V["aria-owns"] = r["aria-owns"], V["aria-expanded"] = r["aria-expanded"]), V;
    }), s = O(() => [
      o.type === "textarea" ? b.b() : g.b(),
      g.m(p.value),
      g.is("disabled", c.value),
      g.is("exceed", le.value),
      {
        [g.b("group")]: l.prepend || l.append,
        [g.bm("group", "append")]: l.append,
        [g.bm("group", "prepend")]: l.prepend,
        [g.m("prefix")]: l.prefix || o.prefixIcon,
        [g.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [g.bm("suffix", "password-clear")]: q.value && H.value
      },
      r.class
    ]), i = O(() => [
      g.e("wrapper"),
      g.is("focus", y.value)
    ]), u = Qm({
      excludeKeys: O(() => Object.keys(a.value))
    }), { form: d, formItem: f } = Wn(), { inputId: v } = Kl(o, {
      formItemContext: f
    }), p = tn(), c = Lo(), g = ne("input"), b = ne("textarea"), m = ho(), w = ho(), y = k(!1), C = k(!1), _ = k(!1), T = k(!1), S = k(), x = ho(o.inputStyle), N = O(() => m.value || w.value), F = O(() => {
      var V;
      return (V = d == null ? void 0 : d.statusIcon) != null ? V : !1;
    }), W = O(() => (f == null ? void 0 : f.validateState) || ""), K = O(() => W.value && jm[W.value]), A = O(() => T.value ? Bm : Gg), M = O(() => [
      r.style,
      o.inputStyle
    ]), P = O(() => [
      o.inputStyle,
      x.value,
      { resize: o.resize }
    ]), D = O(() => Zt(o.modelValue) ? "" : String(o.modelValue)), q = O(() => o.clearable && !c.value && !o.readonly && !!D.value && (y.value || C.value)), H = O(() => o.showPassword && !c.value && !o.readonly && !!D.value && (!!D.value || y.value)), I = O(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !c.value && !o.readonly && !o.showPassword), X = O(() => Array.from(D.value).length), le = O(() => !!I.value && X.value > Number(u.value.maxlength)), ge = O(() => !!l.suffix || !!o.suffixIcon || q.value || o.showPassword || I.value || !!W.value && F.value), [Se, ye] = xb(m);
    Rn(w, (V) => {
      if (!I.value || o.resize !== "both")
        return;
      const he = V[0], { width: Fe } = he.contentRect;
      S.value = {
        right: `calc(100% - ${Fe + 15 + 6}px)`
      };
    });
    const ie = () => {
      const { type: V, autosize: he } = o;
      if (!(!be || V !== "textarea"))
        if (he) {
          const Fe = at(he) ? he.minRows : void 0, dt = at(he) ? he.maxRows : void 0;
          x.value = {
            ...vs(w.value, Fe, dt)
          };
        } else
          x.value = {
            minHeight: vs(w.value).minHeight
          };
    }, _e = () => {
      const V = N.value;
      !V || V.value === D.value || (V.value = D.value);
    }, $e = async (V) => {
      Se();
      let { value: he } = V.target;
      if (o.formatter && (he = o.parser ? o.parser(he) : he, he = o.formatter(he)), !_.value) {
        if (he === D.value) {
          _e();
          return;
        }
        n(Me, he), n("input", he), await se(), _e(), ye();
      }
    }, pe = (V) => {
      n("change", V.target.value);
    }, Re = (V) => {
      n("compositionstart", V), _.value = !0;
    }, Xe = (V) => {
      var he;
      n("compositionupdate", V);
      const Fe = (he = V.target) == null ? void 0 : he.value, dt = Fe[Fe.length - 1] || "";
      _.value = !Fi(dt);
    }, gt = (V) => {
      n("compositionend", V), _.value && (_.value = !1, $e(V));
    }, Ze = () => {
      T.value = !T.value, it();
    }, it = async () => {
      var V;
      await se(), (V = N.value) == null || V.focus();
    }, At = () => {
      var V;
      return (V = N.value) == null ? void 0 : V.blur();
    }, Nt = (V) => {
      y.value = !0, n("focus", V);
    }, ut = (V) => {
      var he;
      y.value = !1, n("blur", V), o.validateEvent && ((he = f == null ? void 0 : f.validate) == null || he.call(f, "blur").catch((Fe) => Ne(Fe)));
    }, Lt = (V) => {
      C.value = !1, n("mouseleave", V);
    }, Wt = (V) => {
      C.value = !0, n("mouseenter", V);
    }, Ye = (V) => {
      n("keydown", V);
    }, Ue = () => {
      var V;
      (V = N.value) == null || V.select();
    }, ct = () => {
      n(Me, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Q(() => o.modelValue, () => {
      var V;
      se(() => ie()), o.validateEvent && ((V = f == null ? void 0 : f.validate) == null || V.call(f, "change").catch((he) => Ne(he)));
    }), Q(D, () => _e()), Q(() => o.type, async () => {
      await se(), _e(), ie();
    }), Ae(() => {
      !o.formatter && o.parser && Ne("ElInput", "If you set the parser, you also need to set the formatter."), _e(), se(ie);
    }), t({
      input: m,
      textarea: w,
      ref: N,
      textareaStyle: P,
      autosize: Rt(o, "autosize"),
      focus: it,
      blur: At,
      select: Ue,
      clear: ct,
      resizeTextarea: ie
    }), (V, he) => we((E(), B("div", Ln(h(a), {
      class: h(s),
      style: h(M),
      role: V.containerRole,
      onMouseenter: Wt,
      onMouseleave: Lt
    }), [
      U(" input "),
      V.type !== "textarea" ? (E(), B(Ve, { key: 0 }, [
        U(" prepend slot "),
        V.$slots.prepend ? (E(), B("div", {
          key: 0,
          class: L(h(g).be("group", "prepend"))
        }, [
          re(V.$slots, "prepend")
        ], 2)) : U("v-if", !0),
        z("div", {
          class: L(h(i))
        }, [
          U(" prefix slot "),
          V.$slots.prefix || V.prefixIcon ? (E(), B("span", {
            key: 0,
            class: L(h(g).e("prefix"))
          }, [
            z("span", {
              class: L(h(g).e("prefix-inner")),
              onClick: it
            }, [
              re(V.$slots, "prefix"),
              V.prefixIcon ? (E(), j(h(Pe), {
                key: 0,
                class: L(h(g).e("icon"))
              }, {
                default: G(() => [
                  (E(), j(He(V.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0)
            ], 2)
          ], 2)) : U("v-if", !0),
          z("input", Ln({
            id: h(v),
            ref_key: "input",
            ref: m,
            class: h(g).e("inner")
          }, h(u), {
            type: V.showPassword ? T.value ? "text" : "password" : V.type,
            disabled: h(c),
            formatter: V.formatter,
            parser: V.parser,
            readonly: V.readonly,
            autocomplete: V.autocomplete,
            tabindex: V.tabindex,
            "aria-label": V.label,
            placeholder: V.placeholder,
            style: V.inputStyle,
            form: o.form,
            onCompositionstart: Re,
            onCompositionupdate: Xe,
            onCompositionend: gt,
            onInput: $e,
            onFocus: Nt,
            onBlur: ut,
            onChange: pe,
            onKeydown: Ye
          }), null, 16, Db),
          U(" suffix slot "),
          h(ge) ? (E(), B("span", {
            key: 1,
            class: L(h(g).e("suffix"))
          }, [
            z("span", {
              class: L(h(g).e("suffix-inner")),
              onClick: it
            }, [
              !h(q) || !h(H) || !h(I) ? (E(), B(Ve, { key: 0 }, [
                re(V.$slots, "suffix"),
                V.suffixIcon ? (E(), j(h(Pe), {
                  key: 0,
                  class: L(h(g).e("icon"))
                }, {
                  default: G(() => [
                    (E(), j(He(V.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : U("v-if", !0)
              ], 64)) : U("v-if", !0),
              h(q) ? (E(), j(h(Pe), {
                key: 1,
                class: L([h(g).e("icon"), h(g).e("clear")]),
                onMousedown: Be(h(Jt), ["prevent"]),
                onClick: ct
              }, {
                default: G(() => [
                  ee(h(Dl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : U("v-if", !0),
              h(H) ? (E(), j(h(Pe), {
                key: 2,
                class: L([h(g).e("icon"), h(g).e("password")]),
                onClick: Ze
              }, {
                default: G(() => [
                  (E(), j(He(h(A))))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0),
              h(I) ? (E(), B("span", {
                key: 3,
                class: L(h(g).e("count"))
              }, [
                z("span", {
                  class: L(h(g).e("count-inner"))
                }, ce(h(X)) + " / " + ce(h(u).maxlength), 3)
              ], 2)) : U("v-if", !0),
              h(W) && h(K) && h(F) ? (E(), j(h(Pe), {
                key: 4,
                class: L([
                  h(g).e("icon"),
                  h(g).e("validateIcon"),
                  h(g).is("loading", h(W) === "validating")
                ])
              }, {
                default: G(() => [
                  (E(), j(He(h(K))))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0)
            ], 2)
          ], 2)) : U("v-if", !0)
        ], 2),
        U(" append slot "),
        V.$slots.append ? (E(), B("div", {
          key: 1,
          class: L(h(g).be("group", "append"))
        }, [
          re(V.$slots, "append")
        ], 2)) : U("v-if", !0)
      ], 64)) : (E(), B(Ve, { key: 1 }, [
        U(" textarea "),
        z("textarea", Ln({
          id: h(v),
          ref_key: "textarea",
          ref: w,
          class: h(b).e("inner")
        }, h(u), {
          tabindex: V.tabindex,
          disabled: h(c),
          readonly: V.readonly,
          autocomplete: V.autocomplete,
          style: h(P),
          "aria-label": V.label,
          placeholder: V.placeholder,
          form: o.form,
          onCompositionstart: Re,
          onCompositionupdate: Xe,
          onCompositionend: gt,
          onInput: $e,
          onFocus: Nt,
          onBlur: ut,
          onChange: pe,
          onKeydown: Ye
        }), null, 16, Hb),
        h(I) ? (E(), B("span", {
          key: 0,
          style: Te(S.value),
          class: L(h(g).e("count"))
        }, ce(h(X)) + " / " + ce(h(u).maxlength), 7)) : U("v-if", !0)
      ], 64))
    ], 16, Fb)), [
      [qe, V.type !== "hidden"]
    ]);
  }
});
var jb = /* @__PURE__ */ fe(Wb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Ro = st(jb), Gn = 4, Kb = {
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
}, Ub = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Gb = Ce({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), qb = "Thumb", Yb = /* @__PURE__ */ Y({
  __name: "thumb",
  props: Gb,
  setup(e) {
    const t = e, n = ve(Wi), o = ne("scrollbar");
    n || Er(qb, "can not inject scrollbar context");
    const r = k(), l = k(), a = k({}), s = k(!1);
    let i = !1, u = !1, d = be ? document.onselectstart : null;
    const f = O(() => Kb[t.vertical ? "vertical" : "horizontal"]), v = O(() => Ub({
      size: t.size,
      move: t.move,
      bar: f.value
    })), p = O(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / l.value[f.value.offset]), c = (T) => {
      var S;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (S = window.getSelection()) == null || S.removeAllRanges(), b(T);
      const x = T.currentTarget;
      x && (a.value[f.value.axis] = x[f.value.offset] - (T[f.value.client] - x.getBoundingClientRect()[f.value.direction]));
    }, g = (T) => {
      if (!l.value || !r.value || !n.wrapElement)
        return;
      const S = Math.abs(T.target.getBoundingClientRect()[f.value.direction] - T[f.value.client]), x = l.value[f.value.offset] / 2, N = (S - x) * 100 * p.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = N * n.wrapElement[f.value.scrollSize] / 100;
    }, b = (T) => {
      T.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", w), d = document.onselectstart, document.onselectstart = () => !1;
    }, m = (T) => {
      if (!r.value || !l.value || i === !1)
        return;
      const S = a.value[f.value.axis];
      if (!S)
        return;
      const x = (r.value.getBoundingClientRect()[f.value.direction] - T[f.value.client]) * -1, N = l.value[f.value.offset] - S, F = (x - N) * 100 * p.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = F * n.wrapElement[f.value.scrollSize] / 100;
    }, w = () => {
      i = !1, a.value[f.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", w), _(), u && (s.value = !1);
    }, y = () => {
      u = !1, s.value = !!t.size;
    }, C = () => {
      u = !0, s.value = i;
    };
    wt(() => {
      _(), document.removeEventListener("mouseup", w);
    });
    const _ = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Mt(Rt(n, "scrollbarElement"), "mousemove", y), Mt(Rt(n, "scrollbarElement"), "mouseleave", C), (T, S) => (E(), j(wn, {
      name: h(o).b("fade"),
      persisted: ""
    }, {
      default: G(() => [
        we(z("div", {
          ref_key: "instance",
          ref: r,
          class: L([h(o).e("bar"), h(o).is(h(f).key)]),
          onMousedown: g
        }, [
          z("div", {
            ref_key: "thumb",
            ref: l,
            class: L(h(o).e("thumb")),
            style: Te(h(v)),
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
var hs = /* @__PURE__ */ fe(Yb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const Qb = Ce({
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
}), Xb = /* @__PURE__ */ Y({
  __name: "bar",
  props: Qb,
  setup(e, { expose: t }) {
    const n = e, o = k(0), r = k(0);
    return t({
      handleScroll: (a) => {
        if (a) {
          const s = a.offsetHeight - Gn, i = a.offsetWidth - Gn;
          r.value = a.scrollTop * 100 / s * n.ratioY, o.value = a.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (a, s) => (E(), B(Ve, null, [
      ee(hs, {
        move: o.value,
        ratio: a.ratioX,
        size: a.width,
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      ee(hs, {
        move: r.value,
        ratio: a.ratioY,
        size: a.height,
        vertical: "",
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Zb = /* @__PURE__ */ fe(Xb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Jb = Ce({
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
    type: ue([String, Object, Array]),
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
}), ey = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(me)
}, al = "ElScrollbar", ty = Y({
  name: al
}), ny = /* @__PURE__ */ Y({
  ...ty,
  props: Jb,
  emits: ey,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ne("scrollbar");
    let l, a;
    const s = k(), i = k(), u = k(), d = k("0"), f = k("0"), v = k(), p = k(1), c = k(1), g = O(() => {
      const S = {};
      return o.height && (S.height = To(o.height)), o.maxHeight && (S.maxHeight = To(o.maxHeight)), [o.wrapStyle, S];
    }), b = O(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), m = O(() => [r.e("view"), o.viewClass]), w = () => {
      var S;
      i.value && ((S = v.value) == null || S.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function y(S, x) {
      at(S) ? i.value.scrollTo(S) : me(S) && me(x) && i.value.scrollTo(S, x);
    }
    const C = (S) => {
      if (!me(S)) {
        Ne(al, "value must be a number");
        return;
      }
      i.value.scrollTop = S;
    }, _ = (S) => {
      if (!me(S)) {
        Ne(al, "value must be a number");
        return;
      }
      i.value.scrollLeft = S;
    }, T = () => {
      if (!i.value)
        return;
      const S = i.value.offsetHeight - Gn, x = i.value.offsetWidth - Gn, N = S ** 2 / i.value.scrollHeight, F = x ** 2 / i.value.scrollWidth, W = Math.max(N, o.minSize), K = Math.max(F, o.minSize);
      p.value = N / (S - N) / (W / (S - W)), c.value = F / (x - F) / (K / (x - K)), f.value = W + Gn < S ? `${W}px` : "", d.value = K + Gn < x ? `${K}px` : "";
    };
    return Q(() => o.noresize, (S) => {
      S ? (l == null || l(), a == null || a()) : ({ stop: l } = Rn(u, T), a = Mt("resize", T));
    }, { immediate: !0 }), Q(() => [o.maxHeight, o.height], () => {
      o.native || se(() => {
        var S;
        T(), i.value && ((S = v.value) == null || S.handleScroll(i.value));
      });
    }), rt(Wi, on({
      scrollbarElement: s,
      wrapElement: i
    })), Ae(() => {
      o.native || se(() => {
        T();
      });
    }), _l(() => T()), t({
      wrapRef: i,
      update: T,
      scrollTo: y,
      setScrollTop: C,
      setScrollLeft: _,
      handleScroll: w
    }), (S, x) => (E(), B("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: L(h(r).b())
    }, [
      z("div", {
        ref_key: "wrapRef",
        ref: i,
        class: L(h(b)),
        style: Te(h(g)),
        onScroll: w
      }, [
        (E(), j(He(S.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: L(h(m)),
          style: Te(S.viewStyle)
        }, {
          default: G(() => [
            re(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      S.native ? U("v-if", !0) : (E(), j(Zb, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        height: f.value,
        width: d.value,
        always: S.always,
        "ratio-x": c.value,
        "ratio-y": p.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var oy = /* @__PURE__ */ fe(ny, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const ea = st(oy), ry = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], pu = Ce({
  role: {
    type: String,
    values: ry,
    default: "tooltip"
  }
}), ly = Y({
  name: "ElPopperRoot",
  inheritAttrs: !1
}), ay = /* @__PURE__ */ Y({
  ...ly,
  props: pu,
  setup(e, { expose: t }) {
    const n = e, o = k(), r = k(), l = k(), a = k(), s = O(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: a,
      role: s
    };
    return t(i), rt(Vl, i), (u, d) => re(u.$slots, "default");
  }
});
var sy = /* @__PURE__ */ fe(ay, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const vu = Ce({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), iy = Y({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), uy = /* @__PURE__ */ Y({
  ...iy,
  props: vu,
  setup(e, { expose: t }) {
    const n = e, o = ne("popper"), { arrowOffset: r, arrowRef: l } = ve(ji, void 0);
    return Q(() => n.arrowOffset, (a) => {
      r.value = a;
    }), wt(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (a, s) => (E(), B("span", {
      ref_key: "arrowRef",
      ref: l,
      class: L(h(o).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var cy = /* @__PURE__ */ fe(uy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Fr = "ElOnlyChild", dy = Y({
  name: Fr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ve(fu), l = Ob((o = r == null ? void 0 : r.setForwardRef) != null ? o : Jt);
    return () => {
      var a;
      const s = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return Ne(Fr, "requires exact only one valid child."), null;
      const i = hu(s);
      return i ? we(uc(i, n), [[l]]) : (Ne(Fr, "no valid child node found"), null);
    };
  }
});
function hu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (at(n))
      switch (n.type) {
        case Js:
          continue;
        case Zs:
        case "svg":
          return gs(n);
        case Ve:
          return hu(n.children);
        default:
          return n;
      }
    return gs(n);
  }
  return null;
}
function gs(e) {
  const t = ne("only-child");
  return ee("span", {
    class: t.e("content")
  }, [e]);
}
const gu = Ce({
  virtualRef: {
    type: ue(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: ue(Function)
  },
  onMouseleave: {
    type: ue(Function)
  },
  onClick: {
    type: ue(Function)
  },
  onKeydown: {
    type: ue(Function)
  },
  onFocus: {
    type: ue(Function)
  },
  onBlur: {
    type: ue(Function)
  },
  onContextmenu: {
    type: ue(Function)
  },
  id: String,
  open: Boolean
}), fy = Y({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), py = /* @__PURE__ */ Y({
  ...fy,
  props: gu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ve(Vl, void 0);
    kb(r);
    const l = O(() => s.value ? n.id : void 0), a = O(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = O(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = O(() => s.value ? `${n.open}` : void 0);
    let u;
    return Ae(() => {
      Q(() => n.virtualRef, (d) => {
        d && (r.value = fn(d));
      }, {
        immediate: !0
      }), Q(r, (d, f) => {
        u == null || u(), u = void 0, mn(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((v) => {
          var p;
          const c = n[v];
          c && (d.addEventListener(v.slice(2).toLowerCase(), c), (p = f == null ? void 0 : f.removeEventListener) == null || p.call(f, v.slice(2).toLowerCase(), c));
        }), u = Q([l, a, s, i], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((p, c) => {
            Zt(v[c]) ? d.removeAttribute(p) : d.setAttribute(p, v[c]);
          });
        }, { immediate: !0 })), mn(f) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => f.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), wt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (d, f) => d.virtualTriggering ? U("v-if", !0) : (E(), j(h(dy), Ln({ key: 0 }, d.$attrs, {
      "aria-controls": h(l),
      "aria-describedby": h(a),
      "aria-expanded": h(i),
      "aria-haspopup": h(s)
    }), {
      default: G(() => [
        re(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var vy = /* @__PURE__ */ fe(py, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Dr = "focus-trap.focus-after-trapped", Hr = "focus-trap.focus-after-released", hy = "focus-trap.focusout-prevented", ms = {
  cancelable: !0,
  bubbles: !1
}, gy = {
  cancelable: !0,
  bubbles: !1
}, bs = "focusAfterTrapped", ys = "focusAfterReleased", my = Symbol("elFocusTrap"), ta = k(), Nr = k(0), na = k(0);
let Do = 0;
const mu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, ws = (e, t) => {
  for (const n of e)
    if (!by(n, t))
      return n;
}, by = (e, t) => {
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
}, yy = (e) => {
  const t = mu(e), n = ws(t, e), o = ws(t.reverse(), e);
  return [n, o];
}, wy = (e) => e instanceof HTMLInputElement && "select" in e, un = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), na.value = window.performance.now(), e !== n && wy(e) && t && e.select();
  }
};
function Cs(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Cy = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Cs(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = Cs(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, Sy = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (un(o, t), document.activeElement !== n)
      return;
}, Ss = Cy(), Ey = () => Nr.value > na.value, Ho = () => {
  ta.value = "pointer", Nr.value = window.performance.now();
}, Es = () => {
  ta.value = "keyboard", Nr.value = window.performance.now();
}, _y = () => (Ae(() => {
  Do === 0 && (document.addEventListener("mousedown", Ho), document.addEventListener("touchstart", Ho), document.addEventListener("keydown", Es)), Do++;
}), wt(() => {
  Do--, Do <= 0 && (document.removeEventListener("mousedown", Ho), document.removeEventListener("touchstart", Ho), document.removeEventListener("keydown", Es));
}), {
  focusReason: ta,
  lastUserFocusTimestamp: Nr,
  lastAutomatedFocusTimestamp: na
}), Vo = (e) => new CustomEvent(hy, {
  ...gy,
  detail: e
}), Ty = Y({
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
    bs,
    ys,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = k();
    let o, r;
    const { focusReason: l } = _y();
    Eb((c) => {
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
      const { key: g, altKey: b, ctrlKey: m, metaKey: w, currentTarget: y, shiftKey: C } = c, { loop: _ } = e, T = g === Bn.tab && !b && !m && !w, S = document.activeElement;
      if (T && S) {
        const x = y, [N, F] = yy(x);
        if (N && F) {
          if (!C && S === F) {
            const K = Vo({
              focusReason: l.value
            });
            t("focusout-prevented", K), K.defaultPrevented || (c.preventDefault(), _ && un(N, !0));
          } else if (C && [N, x].includes(S)) {
            const K = Vo({
              focusReason: l.value
            });
            t("focusout-prevented", K), K.defaultPrevented || (c.preventDefault(), _ && un(F, !0));
          }
        } else if (S === x) {
          const K = Vo({
            focusReason: l.value
          });
          t("focusout-prevented", K), K.defaultPrevented || c.preventDefault();
        }
      }
    };
    rt(my, {
      focusTrapRef: n,
      onKeydown: s
    }), Q(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), Q([n], ([c], [g]) => {
      c && (c.addEventListener("keydown", s), c.addEventListener("focusin", d), c.addEventListener("focusout", f)), g && (g.removeEventListener("keydown", s), g.removeEventListener("focusin", d), g.removeEventListener("focusout", f));
    });
    const i = (c) => {
      t(bs, c);
    }, u = (c) => t(ys, c), d = (c) => {
      const g = h(n);
      if (!g)
        return;
      const b = c.target, m = c.relatedTarget, w = b && g.contains(b);
      e.trapped || m && g.contains(m) || (o = m), w && t("focusin", c), !a.paused && e.trapped && (w ? r = b : un(r, !0));
    }, f = (c) => {
      const g = h(n);
      if (!(a.paused || !g))
        if (e.trapped) {
          const b = c.relatedTarget;
          !Zt(b) && !g.contains(b) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const m = Vo({
                focusReason: l.value
              });
              t("focusout-prevented", m), m.defaultPrevented || un(r, !0);
            }
          }, 0);
        } else {
          const b = c.target;
          b && g.contains(b) || t("focusout", c);
        }
    };
    async function v() {
      await se();
      const c = h(n);
      if (c) {
        Ss.push(a);
        const g = c.contains(document.activeElement) ? o : document.activeElement;
        if (o = g, !c.contains(g)) {
          const m = new Event(Dr, ms);
          c.addEventListener(Dr, i), c.dispatchEvent(m), m.defaultPrevented || se(() => {
            let w = e.focusStartEl;
            We(w) || (un(w), document.activeElement !== w && (w = "first")), w === "first" && Sy(mu(c), !0), (document.activeElement === g || w === "container") && un(c);
          });
        }
      }
    }
    function p() {
      const c = h(n);
      if (c) {
        c.removeEventListener(Dr, i);
        const g = new CustomEvent(Hr, {
          ...ms,
          detail: {
            focusReason: l.value
          }
        });
        c.addEventListener(Hr, u), c.dispatchEvent(g), !g.defaultPrevented && (l.value == "keyboard" || !Ey()) && un(o ?? document.body), c.removeEventListener(Hr, i), Ss.remove(a);
      }
    }
    return Ae(() => {
      e.trapped && v(), Q(() => e.trapped, (c) => {
        c ? v() : p();
      });
    }), wt(() => {
      e.trapped && p();
    }), {
      onKeydown: s
    };
  }
});
function $y(e, t, n, o, r, l) {
  return re(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var bu = /* @__PURE__ */ fe(Ty, [["render", $y], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const ky = ["fixed", "absolute"], Oy = Ce({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: ue(Array),
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
    values: xr,
    default: "bottom"
  },
  popperOptions: {
    type: ue(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: ky,
    default: "absolute"
  }
}), yu = Ce({
  ...Oy,
  id: String,
  style: {
    type: ue([String, Array, Object])
  },
  className: {
    type: ue([String, Array, Object])
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
    type: ue([String, Array, Object])
  },
  popperStyle: {
    type: ue([String, Array, Object])
  },
  referenceEl: {
    type: ue(Object)
  },
  triggerTargetEl: {
    type: ue(Object)
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
}), xy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, _s = (e, t) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: Ny(e)
  };
  return Ly(l, t), Py(l, r == null ? void 0 : r.modifiers), l;
}, Ay = (e) => {
  if (be)
    return fn(e);
};
function Ny(e) {
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
function Ly(e, { arrowEl: t, arrowOffset: n }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: t,
      padding: n ?? 5
    }
  });
}
function Py(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const My = Y({
  name: "ElPopperContent"
}), Iy = /* @__PURE__ */ Y({
  ...My,
  props: yu,
  emits: xy,
  setup(e, { expose: t, emit: n }) {
    const o = e, { popperInstanceRef: r, contentRef: l, triggerRef: a, role: s } = ve(Vl, void 0), i = ve(cr, void 0), { nextZIndex: u } = Io(), d = ne("popper"), f = k(), v = k("first"), p = k(), c = k();
    rt(ji, {
      arrowRef: p,
      arrowOffset: c
    }), i && (i.addInputId || i.removeInputId) && rt(cr, {
      ...i,
      addInputId: Jt,
      removeInputId: Jt
    });
    const g = k(o.zIndex || u()), b = k(!1);
    let m;
    const w = O(() => Ay(o.referenceEl) || h(a)), y = O(() => [{ zIndex: h(g) }, o.popperStyle]), C = O(() => [
      d.b(),
      d.is("pure", o.pure),
      d.is(o.effect),
      o.popperClass
    ]), _ = O(() => s && s.value === "dialog" ? "false" : void 0), T = ({
      referenceEl: M,
      popperContentEl: P,
      arrowEl: D
    }) => {
      const q = _s(o, {
        arrowEl: D,
        arrowOffset: h(c)
      });
      return iu(M, P, q);
    }, S = (M = !0) => {
      var P;
      (P = h(r)) == null || P.update(), M && (g.value = o.zIndex || u());
    }, x = () => {
      var M, P;
      const D = { name: "eventListeners", enabled: o.visible };
      (P = (M = h(r)) == null ? void 0 : M.setOptions) == null || P.call(M, (q) => ({
        ...q,
        modifiers: [...q.modifiers || [], D]
      })), S(!1), o.visible && o.focusOnShow ? b.value = !0 : o.visible === !1 && (b.value = !1);
    }, N = () => {
      n("focus");
    }, F = (M) => {
      var P;
      ((P = M.detail) == null ? void 0 : P.focusReason) !== "pointer" && (v.value = "first", n("blur"));
    }, W = (M) => {
      o.visible && !b.value && (M.target && (v.value = M.target), b.value = !0);
    }, K = (M) => {
      o.trapping || (M.detail.focusReason === "pointer" && M.preventDefault(), b.value = !1);
    }, A = () => {
      b.value = !1, n("close");
    };
    return Ae(() => {
      let M;
      Q(w, (P) => {
        var D;
        M == null || M();
        const q = h(r);
        if ((D = q == null ? void 0 : q.destroy) == null || D.call(q), P) {
          const H = h(f);
          l.value = H, r.value = T({
            referenceEl: P,
            popperContentEl: H,
            arrowEl: h(p)
          }), M = Q(() => P.getBoundingClientRect(), () => S(), {
            immediate: !0
          });
        } else
          r.value = void 0;
      }, {
        immediate: !0
      }), Q(() => o.triggerTargetEl, (P, D) => {
        m == null || m(), m = void 0;
        const q = h(P || f.value), H = h(D || f.value);
        mn(q) && (m = Q([s, () => o.ariaLabel, _, () => o.id], (I) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((X, le) => {
            Zt(I[le]) ? q.removeAttribute(X) : q.setAttribute(X, I[le]);
          });
        }, { immediate: !0 })), H !== q && mn(H) && ["role", "aria-label", "aria-modal", "id"].forEach((I) => {
          H.removeAttribute(I);
        });
      }, { immediate: !0 }), Q(() => o.visible, x, { immediate: !0 }), Q(() => _s(o, {
        arrowEl: h(p),
        arrowOffset: h(c)
      }), (P) => {
        var D;
        return (D = r.value) == null ? void 0 : D.setOptions(P);
      });
    }), wt(() => {
      m == null || m(), m = void 0;
    }), t({
      popperContentRef: f,
      popperInstanceRef: r,
      updatePopper: S,
      contentStyle: y
    }), (M, P) => (E(), B("div", {
      ref_key: "popperContentRef",
      ref: f,
      style: Te(h(y)),
      class: L(h(C)),
      tabindex: "-1",
      onMouseenter: P[0] || (P[0] = (D) => M.$emit("mouseenter", D)),
      onMouseleave: P[1] || (P[1] = (D) => M.$emit("mouseleave", D))
    }, [
      ee(h(bu), {
        trapped: b.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": f.value,
        "focus-start-el": v.value,
        onFocusAfterTrapped: N,
        onFocusAfterReleased: F,
        onFocusin: W,
        onFocusoutPrevented: K,
        onReleaseRequested: A
      }, {
        default: G(() => [
          re(M.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var Ry = /* @__PURE__ */ fe(Iy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const By = st(sy), zy = ne("tooltip"), oa = Ce({
  ...$b,
  ...yu,
  appendTo: {
    type: ue([String, Object])
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
    type: ue(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${zy.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), wu = Ce({
  ...gu,
  disabled: Boolean,
  trigger: {
    type: ue([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ue(Array),
    default: () => [Bn.enter, Bn.space]
  }
}), {
  useModelToggleProps: Fy,
  useModelToggleEmits: Dy,
  useModelToggle: Hy
} = y0("visible"), Vy = Ce({
  ...pu,
  ...Fy,
  ...oa,
  ...wu,
  ...vu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Wy = [
  ...Dy,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], jy = (e, t) => gn(e) ? e.includes(t) : e === t, jn = (e, t, n) => (o) => {
  jy(h(e), t) && n(o);
}, Ky = Y({
  name: "ElTooltipTrigger"
}), Uy = /* @__PURE__ */ Y({
  ...Ky,
  props: wu,
  setup(e, { expose: t }) {
    const n = e, o = ne("tooltip"), { controlled: r, id: l, open: a, onOpen: s, onClose: i, onToggle: u } = ve(Wl, void 0), d = k(null), f = () => {
      if (h(r) || n.disabled)
        return !0;
    }, v = Rt(n, "trigger"), p = qt(f, jn(v, "hover", s)), c = qt(f, jn(v, "hover", i)), g = qt(f, jn(v, "click", (C) => {
      C.button === 0 && u(C);
    })), b = qt(f, jn(v, "focus", s)), m = qt(f, jn(v, "focus", i)), w = qt(f, jn(v, "contextmenu", (C) => {
      C.preventDefault(), u(C);
    })), y = qt(f, (C) => {
      const { code: _ } = C;
      n.triggerKeys.includes(_) && (C.preventDefault(), u(C));
    });
    return t({
      triggerRef: d
    }), (C, _) => (E(), j(h(vy), {
      id: h(l),
      "virtual-ref": C.virtualRef,
      open: h(a),
      "virtual-triggering": C.virtualTriggering,
      class: L(h(o).e("trigger")),
      onBlur: h(m),
      onClick: h(g),
      onContextmenu: h(w),
      onFocus: h(b),
      onMouseenter: h(p),
      onMouseleave: h(c),
      onKeydown: h(y)
    }, {
      default: G(() => [
        re(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Gy = /* @__PURE__ */ fe(Uy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const qy = Y({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Yy = /* @__PURE__ */ Y({
  ...qy,
  props: oa,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = cu(), r = k(null), l = k(!1), {
      controlled: a,
      id: s,
      open: i,
      trigger: u,
      onClose: d,
      onOpen: f,
      onShow: v,
      onHide: p,
      onBeforeShow: c,
      onBeforeHide: g
    } = ve(Wl, void 0), b = O(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    wt(() => {
      l.value = !0;
    });
    const m = O(() => h(b) ? !0 : h(i)), w = O(() => n.disabled ? !1 : h(i)), y = O(() => n.appendTo || o.value), C = O(() => {
      var P;
      return (P = n.style) != null ? P : {};
    }), _ = O(() => !h(i)), T = () => {
      p();
    }, S = () => {
      if (h(a))
        return !0;
    }, x = qt(S, () => {
      n.enterable && h(u) === "hover" && f();
    }), N = qt(S, () => {
      h(u) === "hover" && d();
    }), F = () => {
      var P, D;
      (D = (P = r.value) == null ? void 0 : P.updatePopper) == null || D.call(P), c == null || c();
    }, W = () => {
      g == null || g();
    }, K = () => {
      v(), M = fh(O(() => {
        var P;
        return (P = r.value) == null ? void 0 : P.popperContentRef;
      }), () => {
        if (h(a))
          return;
        h(u) !== "hover" && d();
      });
    }, A = () => {
      n.virtualTriggering || d();
    };
    let M;
    return Q(() => h(i), (P) => {
      P || M == null || M();
    }, {
      flush: "post"
    }), Q(() => n.content, () => {
      var P, D;
      (D = (P = r.value) == null ? void 0 : P.updatePopper) == null || D.call(P);
    }), t({
      contentRef: r
    }), (P, D) => (E(), j(cc, {
      disabled: !P.teleported,
      to: h(y)
    }, [
      ee(wn, {
        name: P.transition,
        onAfterLeave: T,
        onBeforeEnter: F,
        onAfterEnter: K,
        onBeforeLeave: W
      }, {
        default: G(() => [
          h(m) ? we((E(), j(h(Ry), Ln({
            key: 0,
            id: h(s),
            ref_key: "contentRef",
            ref: r
          }, P.$attrs, {
            "aria-label": P.ariaLabel,
            "aria-hidden": h(_),
            "boundaries-padding": P.boundariesPadding,
            "fallback-placements": P.fallbackPlacements,
            "gpu-acceleration": P.gpuAcceleration,
            offset: P.offset,
            placement: P.placement,
            "popper-options": P.popperOptions,
            strategy: P.strategy,
            effect: P.effect,
            enterable: P.enterable,
            pure: P.pure,
            "popper-class": P.popperClass,
            "popper-style": [P.popperStyle, h(C)],
            "reference-el": P.referenceEl,
            "trigger-target-el": P.triggerTargetEl,
            visible: h(w),
            "z-index": P.zIndex,
            onMouseenter: h(x),
            onMouseleave: h(N),
            onBlur: A,
            onClose: h(d)
          }), {
            default: G(() => [
              l.value ? U("v-if", !0) : re(P.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [qe, h(w)]
          ]) : U("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Qy = /* @__PURE__ */ fe(Yy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const Xy = ["innerHTML"], Zy = { key: 1 }, Jy = Y({
  name: "ElTooltip"
}), e1 = /* @__PURE__ */ Y({
  ...Jy,
  props: Vy,
  emits: Wy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Tb();
    const r = fr(), l = k(), a = k(), s = () => {
      var m;
      const w = h(l);
      w && ((m = w.popperInstanceRef) == null || m.update());
    }, i = k(!1), u = k(), { show: d, hide: f, hasUpdateHandler: v } = Hy({
      indicator: i,
      toggleReason: u
    }), { onOpen: p, onClose: c } = du({
      showAfter: Rt(o, "showAfter"),
      hideAfter: Rt(o, "hideAfter"),
      open: d,
      close: f
    }), g = O(() => Qn(o.visible) && !v.value);
    rt(Wl, {
      controlled: g,
      id: r,
      open: dc(i),
      trigger: Rt(o, "trigger"),
      onOpen: (m) => {
        p(m);
      },
      onClose: (m) => {
        c(m);
      },
      onToggle: (m) => {
        h(i) ? c(m) : p(m);
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
    }), Q(() => o.disabled, (m) => {
      m && i.value && (i.value = !1);
    });
    const b = () => {
      var m, w;
      const y = (w = (m = a.value) == null ? void 0 : m.contentRef) == null ? void 0 : w.popperContentRef;
      return y && y.contains(document.activeElement);
    };
    return fc(() => i.value && f()), t({
      popperRef: l,
      contentRef: a,
      isFocusInsideContent: b,
      updatePopper: s,
      onOpen: p,
      onClose: c,
      hide: f
    }), (m, w) => (E(), j(h(By), {
      ref_key: "popperRef",
      ref: l,
      role: m.role
    }, {
      default: G(() => [
        ee(Gy, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: G(() => [
            m.$slots.default ? re(m.$slots, "default", { key: 0 }) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ee(Qy, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": m.ariaLabel,
          "boundaries-padding": m.boundariesPadding,
          content: m.content,
          disabled: m.disabled,
          effect: m.effect,
          enterable: m.enterable,
          "fallback-placements": m.fallbackPlacements,
          "hide-after": m.hideAfter,
          "gpu-acceleration": m.gpuAcceleration,
          offset: m.offset,
          persistent: m.persistent,
          "popper-class": m.popperClass,
          "popper-style": m.popperStyle,
          placement: m.placement,
          "popper-options": m.popperOptions,
          pure: m.pure,
          "raw-content": m.rawContent,
          "reference-el": m.referenceEl,
          "trigger-target-el": m.triggerTargetEl,
          "show-after": m.showAfter,
          strategy: m.strategy,
          teleported: m.teleported,
          transition: m.transition,
          "virtual-triggering": m.virtualTriggering,
          "z-index": m.zIndex,
          "append-to": m.appendTo
        }, {
          default: G(() => [
            re(m.$slots, "content", {}, () => [
              m.rawContent ? (E(), B("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, Xy)) : (E(), B("span", Zy, ce(m.content), 1))
            ]),
            m.showArrow ? (E(), j(h(cy), {
              key: 0,
              "arrow-offset": m.arrowOffset
            }, null, 8, ["arrow-offset"])) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var t1 = /* @__PURE__ */ fe(e1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Cu = st(t1), n1 = Ce({
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
}), o1 = ["textContent"], r1 = Y({
  name: "ElBadge"
}), l1 = /* @__PURE__ */ Y({
  ...r1,
  props: n1,
  setup(e, { expose: t }) {
    const n = e, o = ne("badge"), r = O(() => n.isDot ? "" : me(n.value) && me(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`);
    return t({
      content: r
    }), (l, a) => (E(), B("div", {
      class: L(h(o).b())
    }, [
      re(l.$slots, "default"),
      ee(wn, {
        name: `${h(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: G(() => [
          we(z("sup", {
            class: L([
              h(o).e("content"),
              h(o).em("content", l.type),
              h(o).is("fixed", !!l.$slots.default),
              h(o).is("dot", l.isDot)
            ]),
            textContent: ce(h(r))
          }, null, 10, o1), [
            [qe, !l.hidden && (h(r) || l.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var a1 = /* @__PURE__ */ fe(l1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const s1 = st(a1), i1 = (e, t) => {
  Ui({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, O(() => e.type === "text"));
  const n = ve(Di, void 0), o = Cn("button"), { form: r } = Wn(), l = tn(O(() => n == null ? void 0 : n.size)), a = Lo(), s = k(), i = vr(), u = O(() => e.type || (n == null ? void 0 : n.type) || ""), d = O(() => {
    var p, c, g;
    return (g = (c = e.autoInsertSpace) != null ? c : (p = o.value) == null ? void 0 : p.autoInsertSpace) != null ? g : !1;
  }), f = O(() => {
    var p;
    const c = (p = i.default) == null ? void 0 : p.call(i);
    if (d.value && (c == null ? void 0 : c.length) === 1) {
      const g = c[0];
      if ((g == null ? void 0 : g.type) === Zs) {
        const b = g.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(b.trim());
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
    handleClick: (p) => {
      e.nativeType === "reset" && (r == null || r.resetFields()), t("click", p);
    }
  };
}, u1 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], c1 = ["button", "submit", "reset"], sl = Ce({
  size: so,
  disabled: Boolean,
  type: {
    type: String,
    values: u1,
    default: ""
  },
  icon: {
    type: kt
  },
  nativeType: {
    type: String,
    values: c1,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: kt,
    default: () => _r
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
}), d1 = {
  click: (e) => e instanceof MouseEvent
};
function Ke(e, t) {
  f1(e) && (e = "100%");
  var n = p1(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Wo(e) {
  return Math.min(1, Math.max(0, e));
}
function f1(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function p1(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Su(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function jo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function On(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function v1(e, t, n) {
  return {
    r: Ke(e, 255) * 255,
    g: Ke(t, 255) * 255,
    b: Ke(n, 255) * 255
  };
}
function Ts(e, t, n) {
  e = Ke(e, 255), t = Ke(t, 255), n = Ke(n, 255);
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
function Vr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function h1(e, t, n) {
  var o, r, l;
  if (e = Ke(e, 360), t = Ke(t, 100), n = Ke(n, 100), t === 0)
    r = n, l = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    o = Vr(s, a, e + 1 / 3), r = Vr(s, a, e), l = Vr(s, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: l * 255 };
}
function $s(e, t, n) {
  e = Ke(e, 255), t = Ke(t, 255), n = Ke(n, 255);
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
function g1(e, t, n) {
  e = Ke(e, 360) * 6, t = Ke(t, 100), n = Ke(n, 100);
  var o = Math.floor(e), r = e - o, l = n * (1 - t), a = n * (1 - r * t), s = n * (1 - (1 - r) * t), i = o % 6, u = [n, a, l, l, s, n][i], d = [s, n, n, a, l, l][i], f = [l, l, s, n, n, a][i];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function ks(e, t, n, o) {
  var r = [
    On(Math.round(e).toString(16)),
    On(Math.round(t).toString(16)),
    On(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function m1(e, t, n, o, r) {
  var l = [
    On(Math.round(e).toString(16)),
    On(Math.round(t).toString(16)),
    On(Math.round(n).toString(16)),
    On(b1(o))
  ];
  return r && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function b1(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Os(e) {
  return pt(e) / 255;
}
function pt(e) {
  return parseInt(e, 16);
}
function y1(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var il = {
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
function w1(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, l = null, a = !1, s = !1;
  return typeof e == "string" && (e = E1(e)), typeof e == "object" && (Ut(e.r) && Ut(e.g) && Ut(e.b) ? (t = v1(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ut(e.h) && Ut(e.s) && Ut(e.v) ? (o = jo(e.s), r = jo(e.v), t = g1(e.h, o, r), a = !0, s = "hsv") : Ut(e.h) && Ut(e.s) && Ut(e.l) && (o = jo(e.s), l = jo(e.l), t = h1(e.h, o, l), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Su(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var C1 = "[-\\+]?\\d+%?", S1 = "[-\\+]?\\d*\\.\\d+%?", pn = "(?:".concat(S1, ")|(?:").concat(C1, ")"), Wr = "[\\s|\\(]+(".concat(pn, ")[,|\\s]+(").concat(pn, ")[,|\\s]+(").concat(pn, ")\\s*\\)?"), jr = "[\\s|\\(]+(".concat(pn, ")[,|\\s]+(").concat(pn, ")[,|\\s]+(").concat(pn, ")[,|\\s]+(").concat(pn, ")\\s*\\)?"), Tt = {
  CSS_UNIT: new RegExp(pn),
  rgb: new RegExp("rgb" + Wr),
  rgba: new RegExp("rgba" + jr),
  hsl: new RegExp("hsl" + Wr),
  hsla: new RegExp("hsla" + jr),
  hsv: new RegExp("hsv" + Wr),
  hsva: new RegExp("hsva" + jr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function E1(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (il[e])
    e = il[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Tt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Tt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Tt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Tt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Tt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Tt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Tt.hex8.exec(e), n ? {
    r: pt(n[1]),
    g: pt(n[2]),
    b: pt(n[3]),
    a: Os(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Tt.hex6.exec(e), n ? {
    r: pt(n[1]),
    g: pt(n[2]),
    b: pt(n[3]),
    format: t ? "name" : "hex"
  } : (n = Tt.hex4.exec(e), n ? {
    r: pt(n[1] + n[1]),
    g: pt(n[2] + n[2]),
    b: pt(n[3] + n[3]),
    a: Os(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Tt.hex3.exec(e), n ? {
    r: pt(n[1] + n[1]),
    g: pt(n[2] + n[2]),
    b: pt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Ut(e) {
  return Boolean(Tt.CSS_UNIT.exec(String(e)));
}
var _1 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = y1(t)), this.originalInput = t;
      var r = w1(t);
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
      return this.a = Su(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = $s(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = $s(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Ts(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Ts(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), ks(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), m1(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Ke(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Ke(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + ks(this.r, this.g, this.b, !1), n = 0, o = Object.entries(il); n < o.length; n++) {
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
      return n.l += t / 100, n.l = Wo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Wo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Wo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Wo(n.s), new e(n);
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
function sn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function T1(e) {
  const t = Lo(), n = ne("button");
  return O(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const l = new _1(r), a = e.dark ? l.tint(20).toString() : sn(l, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? sn(l, 90) : l.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? sn(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": a,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": a
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? sn(l, 90) : l.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? sn(l, 50) : l.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? sn(l, 80) : l.tint(80).toString());
      else {
        const s = e.dark ? sn(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
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
          const u = e.dark ? sn(l, 50) : l.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const $1 = ["aria-disabled", "disabled", "autofocus", "type"], k1 = Y({
  name: "ElButton"
}), O1 = /* @__PURE__ */ Y({
  ...k1,
  props: sl,
  emits: d1,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = T1(o), l = ne("button"), { _ref: a, _size: s, _type: i, _disabled: u, shouldAddSpace: d, handleClick: f } = i1(o, n);
    return t({
      ref: a,
      size: s,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (v, p) => (E(), B("button", {
      ref_key: "_ref",
      ref: a,
      class: L([
        h(l).b(),
        h(l).m(h(i)),
        h(l).m(h(s)),
        h(l).is("disabled", h(u)),
        h(l).is("loading", v.loading),
        h(l).is("plain", v.plain),
        h(l).is("round", v.round),
        h(l).is("circle", v.circle),
        h(l).is("text", v.text),
        h(l).is("link", v.link),
        h(l).is("has-bg", v.bg)
      ]),
      "aria-disabled": h(u) || v.loading,
      disabled: h(u) || v.loading,
      autofocus: v.autofocus,
      type: v.nativeType,
      style: Te(h(r)),
      onClick: p[0] || (p[0] = (...c) => h(f) && h(f)(...c))
    }, [
      v.loading ? (E(), B(Ve, { key: 0 }, [
        v.$slots.loading ? re(v.$slots, "loading", { key: 0 }) : (E(), j(h(Pe), {
          key: 1,
          class: L(h(l).is("loading"))
        }, {
          default: G(() => [
            (E(), j(He(v.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : v.icon || v.$slots.icon ? (E(), j(h(Pe), { key: 1 }, {
        default: G(() => [
          v.icon ? (E(), j(He(v.icon), { key: 0 })) : re(v.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : U("v-if", !0),
      v.$slots.default ? (E(), B("span", {
        key: 2,
        class: L({ [h(l).em("text", "expand")]: h(d) })
      }, [
        re(v.$slots, "default")
      ], 2)) : U("v-if", !0)
    ], 14, $1));
  }
});
var x1 = /* @__PURE__ */ fe(O1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const A1 = {
  size: sl.size,
  type: sl.type
}, N1 = Y({
  name: "ElButtonGroup"
}), L1 = /* @__PURE__ */ Y({
  ...N1,
  props: A1,
  setup(e) {
    const t = e;
    rt(Di, on({
      size: Rt(t, "size"),
      type: Rt(t, "type")
    }));
    const n = ne("button");
    return (o, r) => (E(), B("div", {
      class: L(`${h(n).b("group")}`)
    }, [
      re(o.$slots, "default")
    ], 2));
  }
});
var Eu = /* @__PURE__ */ fe(L1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const _u = st(x1, {
  ButtonGroup: Eu
});
lo(Eu);
const cn = /* @__PURE__ */ new Map();
let xs;
be && (document.addEventListener("mousedown", (e) => xs = e), document.addEventListener("mouseup", (e) => {
  for (const t of cn.values())
    for (const { documentHandler: n } of t)
      n(e, xs);
}));
function As(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : mn(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, a = o.target, s = r == null ? void 0 : r.target, i = !t || !t.instance, u = !a || !s, d = e.contains(a) || e.contains(s), f = e === a, v = n.length && n.some((c) => c == null ? void 0 : c.contains(a)) || n.length && n.includes(s), p = l && (l.contains(a) || l.contains(s));
    i || u || d || f || v || p || t.value(o, r);
  };
}
const Tu = {
  beforeMount(e, t) {
    cn.has(e) || cn.set(e, []), cn.get(e).push({
      documentHandler: As(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    cn.has(e) || cn.set(e, []);
    const n = cn.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: As(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    cn.delete(e);
  }
}, P1 = 100, M1 = 600, Ns = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = P1, delay: r = M1 } = ze(n) ? {} : n;
    let l, a;
    const s = () => ze(n) ? n() : n.handler(), i = () => {
      a && (clearTimeout(a), a = void 0), l && (clearInterval(l), l = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (i(), s(), document.addEventListener("mouseup", () => i(), {
        once: !0
      }), a = setTimeout(() => {
        l = setInterval(() => {
          s();
        }, o);
      }, r));
    });
  }
}, ul = "_trap-focus-children", xn = [], Ls = (e) => {
  var t;
  if (xn.length === 0)
    return;
  const n = xn[xn.length - 1][ul];
  if (n.length > 0 && e.code === Bn.tab) {
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
}, I1 = {
  beforeMount(e) {
    e[ul] = Va(e), xn.push(e), xn.length <= 1 && document.addEventListener("keydown", Ls);
  },
  updated(e) {
    se(() => {
      e[ul] = Va(e);
    });
  },
  unmounted() {
    xn.shift(), xn.length === 0 && document.removeEventListener("keydown", Ls);
  }
};
var Ps = !1, kn, cl, dl, Zo, Jo, $u, er, fl, pl, vl, ku, hl, gl, Ou, xu;
function et() {
  if (!Ps) {
    Ps = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (hl = /\b(iPhone|iP[ao]d)/.exec(e), gl = /\b(iP[ao]d)/.exec(e), vl = /Android/i.exec(e), Ou = /FBAN\/\w+;/i.exec(e), xu = /Mobile/i.exec(e), ku = !!/Win64/.exec(e), t) {
      kn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, kn && document && document.documentMode && (kn = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      $u = o ? parseFloat(o[1]) + 4 : kn, cl = t[2] ? parseFloat(t[2]) : NaN, dl = t[3] ? parseFloat(t[3]) : NaN, Zo = t[4] ? parseFloat(t[4]) : NaN, Zo ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), Jo = t && t[1] ? parseFloat(t[1]) : NaN) : Jo = NaN;
    } else
      kn = cl = dl = Jo = Zo = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        er = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        er = !1;
      fl = !!n[2], pl = !!n[3];
    } else
      er = fl = pl = !1;
  }
}
var ml = { ie: function() {
  return et() || kn;
}, ieCompatibilityMode: function() {
  return et() || $u > kn;
}, ie64: function() {
  return ml.ie() && ku;
}, firefox: function() {
  return et() || cl;
}, opera: function() {
  return et() || dl;
}, webkit: function() {
  return et() || Zo;
}, safari: function() {
  return ml.webkit();
}, chrome: function() {
  return et() || Jo;
}, windows: function() {
  return et() || fl;
}, osx: function() {
  return et() || er;
}, linux: function() {
  return et() || pl;
}, iphone: function() {
  return et() || hl;
}, mobile: function() {
  return et() || hl || gl || vl || xu;
}, nativeApp: function() {
  return et() || Ou;
}, android: function() {
  return et() || vl;
}, ipad: function() {
  return et() || gl;
} }, R1 = ml, Ko = !!(typeof window < "u" && window.document && window.document.createElement), B1 = { canUseDOM: Ko, canUseWorkers: typeof Worker < "u", canUseEventListeners: Ko && !!(window.addEventListener || window.attachEvent), canUseViewport: Ko && !!window.screen, isInWorker: !Ko }, Au = B1, Nu;
Au.canUseDOM && (Nu = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function z1(e, t) {
  if (!Au.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), o = typeof r[n] == "function";
  }
  return !o && Nu && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var F1 = z1, Ms = 10, Is = 40, Rs = 800;
function Lu(e) {
  var t = 0, n = 0, o = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * Ms, r = n * Ms, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (e.deltaMode == 1 ? (o *= Is, r *= Is) : (o *= Rs, r *= Rs)), o && !t && (t = o < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: r };
}
Lu.getEventType = function() {
  return R1.firefox() ? "DOMMouseScroll" : F1("wheel") ? "wheel" : "mousewheel";
};
var D1 = Lu;
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
const H1 = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const r = D1(o);
      t && Reflect.apply(t, this, [o, r]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, V1 = {
  beforeMount(e, t) {
    H1(e, t.value);
  }
}, Pu = {
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
  size: so,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Mu = {
  [Me]: (e) => We(e) || me(e) || Qn(e),
  change: (e) => We(e) || me(e) || Qn(e)
}, W1 = ({
  model: e,
  isChecked: t
}) => {
  const n = ve(ao, void 0), o = O(() => {
    var l, a;
    const s = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (a = n == null ? void 0 : n.min) == null ? void 0 : a.value;
    return !Qt(s) && e.value.length >= s && !t.value || !Qt(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: Lo(O(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, j1 = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: l
}) => {
  const a = ve(ao, void 0), { formItem: s } = Wn(), { emit: i } = Ee();
  function u(c) {
    var g, b;
    return c === e.trueLabel || c === !0 ? (g = e.trueLabel) != null ? g : !0 : (b = e.falseLabel) != null ? b : !1;
  }
  function d(c, g) {
    i("change", u(c), g);
  }
  function f(c) {
    if (n.value)
      return;
    const g = c.target;
    i("change", u(g.checked), c);
  }
  async function v(c) {
    n.value || !o.value && !r.value && l.value && (c.composedPath().some((m) => m.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await se(), d(t.value, c)));
  }
  const p = O(() => (a == null ? void 0 : a.validateEvent) || e.validateEvent);
  return Q(() => e.modelValue, () => {
    p.value && (s == null || s.validate("change").catch((c) => Ne(c)));
  }), {
    handleChange: f,
    onClickRoot: v
  };
}, K1 = (e) => {
  const t = k(!1), { emit: n } = Ee(), o = ve(ao, void 0), r = O(() => Qt(o) === !1), l = k(!1);
  return {
    model: O({
      get() {
        var s, i;
        return r.value ? (s = o == null ? void 0 : o.modelValue) == null ? void 0 : s.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(s) {
        var i, u;
        r.value && gn(s) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && s.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, s))) : (n(Me, s), t.value = s);
      }
    }),
    isGroup: r,
    isLimitExceeded: l
  };
}, U1 = (e, t, { model: n }) => {
  const o = ve(ao, void 0), r = k(!1), l = O(() => {
    const u = n.value;
    return Qn(u) ? u : gn(u) ? at(e.label) ? u.map(Yn).some((d) => ir(d, e.label)) : u.map(Yn).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), a = tn(O(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), s = tn(O(() => {
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
}, G1 = (e, { model: t }) => {
  function n() {
    gn(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Iu = (e, t) => {
  const { formItem: n } = Wn(), { model: o, isGroup: r, isLimitExceeded: l } = K1(e), {
    isFocused: a,
    isChecked: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d
  } = U1(e, t, { model: o }), { isDisabled: f } = W1({ model: o, isChecked: s }), { inputId: v, isLabeledByFormItem: p } = Kl(e, {
    formItemContext: n,
    disableIdGeneration: d,
    disableIdManagement: r
  }), { handleChange: c, onClickRoot: g } = j1(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: d,
    isDisabled: f,
    isLabeledByFormItem: p
  });
  return G1(e, { model: o }), {
    inputId: v,
    isLabeledByFormItem: p,
    isChecked: s,
    isDisabled: f,
    isFocused: a,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d,
    model: o,
    handleChange: c,
    onClickRoot: g
  };
}, q1 = ["tabindex", "role", "aria-checked"], Y1 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], Q1 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], X1 = Y({
  name: "ElCheckbox"
}), Z1 = /* @__PURE__ */ Y({
  ...X1,
  props: Pu,
  emits: Mu,
  setup(e) {
    const t = e, n = vr(), {
      inputId: o,
      isLabeledByFormItem: r,
      isChecked: l,
      isDisabled: a,
      isFocused: s,
      checkboxSize: i,
      hasOwnLabel: u,
      model: d,
      handleChange: f,
      onClickRoot: v
    } = Iu(t, n), p = ne("checkbox"), c = O(() => [
      p.b(),
      p.m(i.value),
      p.is("disabled", a.value),
      p.is("bordered", t.border),
      p.is("checked", l.value)
    ]), g = O(() => [
      p.e("input"),
      p.is("disabled", a.value),
      p.is("checked", l.value),
      p.is("indeterminate", t.indeterminate),
      p.is("focus", s.value)
    ]);
    return (b, m) => (E(), j(He(!h(u) && h(r) ? "span" : "label"), {
      class: L(h(c)),
      "aria-controls": b.indeterminate ? b.controls : null,
      onClick: h(v)
    }, {
      default: G(() => [
        z("span", {
          class: L(h(g)),
          tabindex: b.indeterminate ? 0 : void 0,
          role: b.indeterminate ? "checkbox" : void 0,
          "aria-checked": b.indeterminate ? "mixed" : void 0
        }, [
          b.trueLabel || b.falseLabel ? we((E(), B("input", {
            key: 0,
            id: h(o),
            "onUpdate:modelValue": m[0] || (m[0] = (w) => Ft(d) ? d.value = w : null),
            class: L(h(p).e("original")),
            type: "checkbox",
            "aria-hidden": b.indeterminate ? "true" : "false",
            name: b.name,
            tabindex: b.tabindex,
            disabled: h(a),
            "true-value": b.trueLabel,
            "false-value": b.falseLabel,
            onChange: m[1] || (m[1] = (...w) => h(f) && h(f)(...w)),
            onFocus: m[2] || (m[2] = (w) => s.value = !0),
            onBlur: m[3] || (m[3] = (w) => s.value = !1)
          }, null, 42, Y1)), [
            [nr, h(d)]
          ]) : we((E(), B("input", {
            key: 1,
            id: h(o),
            "onUpdate:modelValue": m[4] || (m[4] = (w) => Ft(d) ? d.value = w : null),
            class: L(h(p).e("original")),
            type: "checkbox",
            "aria-hidden": b.indeterminate ? "true" : "false",
            disabled: h(a),
            value: b.label,
            name: b.name,
            tabindex: b.tabindex,
            onChange: m[5] || (m[5] = (...w) => h(f) && h(f)(...w)),
            onFocus: m[6] || (m[6] = (w) => s.value = !0),
            onBlur: m[7] || (m[7] = (w) => s.value = !1)
          }, null, 42, Q1)), [
            [nr, h(d)]
          ]),
          z("span", {
            class: L(h(p).e("inner"))
          }, null, 2)
        ], 10, q1),
        h(u) ? (E(), B("span", {
          key: 0,
          class: L(h(p).e("label"))
        }, [
          re(b.$slots, "default"),
          b.$slots.default ? U("v-if", !0) : (E(), B(Ve, { key: 0 }, [
            Xt(ce(b.label), 1)
          ], 64))
        ], 2)) : U("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var J1 = /* @__PURE__ */ fe(Z1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const ew = ["name", "tabindex", "disabled", "true-value", "false-value"], tw = ["name", "tabindex", "disabled", "value"], nw = Y({
  name: "ElCheckboxButton"
}), ow = /* @__PURE__ */ Y({
  ...nw,
  props: Pu,
  emits: Mu,
  setup(e) {
    const t = e, n = vr(), {
      isFocused: o,
      isChecked: r,
      isDisabled: l,
      checkboxButtonSize: a,
      model: s,
      handleChange: i
    } = Iu(t, n), u = ve(ao, void 0), d = ne("checkbox"), f = O(() => {
      var p, c, g, b;
      const m = (c = (p = u == null ? void 0 : u.fill) == null ? void 0 : p.value) != null ? c : "";
      return {
        backgroundColor: m,
        borderColor: m,
        color: (b = (g = u == null ? void 0 : u.textColor) == null ? void 0 : g.value) != null ? b : "",
        boxShadow: m ? `-1px 0 0 0 ${m}` : void 0
      };
    }), v = O(() => [
      d.b("button"),
      d.bm("button", a.value),
      d.is("disabled", l.value),
      d.is("checked", r.value),
      d.is("focus", o.value)
    ]);
    return (p, c) => (E(), B("label", {
      class: L(h(v))
    }, [
      p.trueLabel || p.falseLabel ? we((E(), B("input", {
        key: 0,
        "onUpdate:modelValue": c[0] || (c[0] = (g) => Ft(s) ? s.value = g : null),
        class: L(h(d).be("button", "original")),
        type: "checkbox",
        name: p.name,
        tabindex: p.tabindex,
        disabled: h(l),
        "true-value": p.trueLabel,
        "false-value": p.falseLabel,
        onChange: c[1] || (c[1] = (...g) => h(i) && h(i)(...g)),
        onFocus: c[2] || (c[2] = (g) => o.value = !0),
        onBlur: c[3] || (c[3] = (g) => o.value = !1)
      }, null, 42, ew)), [
        [nr, h(s)]
      ]) : we((E(), B("input", {
        key: 1,
        "onUpdate:modelValue": c[4] || (c[4] = (g) => Ft(s) ? s.value = g : null),
        class: L(h(d).be("button", "original")),
        type: "checkbox",
        name: p.name,
        tabindex: p.tabindex,
        disabled: h(l),
        value: p.label,
        onChange: c[5] || (c[5] = (...g) => h(i) && h(i)(...g)),
        onFocus: c[6] || (c[6] = (g) => o.value = !0),
        onBlur: c[7] || (c[7] = (g) => o.value = !1)
      }, null, 42, tw)), [
        [nr, h(s)]
      ]),
      p.$slots.default || p.label ? (E(), B("span", {
        key: 2,
        class: L(h(d).be("button", "inner")),
        style: Te(h(r) ? h(f) : void 0)
      }, [
        re(p.$slots, "default", {}, () => [
          Xt(ce(p.label), 1)
        ])
      ], 6)) : U("v-if", !0)
    ], 2));
  }
});
var Ru = /* @__PURE__ */ fe(ow, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const rw = Ce({
  modelValue: {
    type: ue(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: so,
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
}), lw = {
  [Me]: (e) => gn(e),
  change: (e) => gn(e)
}, aw = Y({
  name: "ElCheckboxGroup"
}), sw = /* @__PURE__ */ Y({
  ...aw,
  props: rw,
  emits: lw,
  setup(e, { emit: t }) {
    const n = e, o = ne("checkbox"), { formItem: r } = Wn(), { inputId: l, isLabeledByFormItem: a } = Kl(n, {
      formItemContext: r
    }), s = async (u) => {
      t(Me, u), await se(), t("change", u);
    }, i = O({
      get() {
        return n.modelValue;
      },
      set(u) {
        s(u);
      }
    });
    return rt(ao, {
      ...th(Fn(n), [
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
      n.validateEvent && (r == null || r.validate("change").catch((u) => Ne(u)));
    }), (u, d) => {
      var f;
      return E(), j(He(u.tag), {
        id: h(l),
        class: L(h(o).b("group")),
        role: "group",
        "aria-label": h(a) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": h(a) ? (f = h(r)) == null ? void 0 : f.labelId : void 0
      }, {
        default: G(() => [
          re(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Bu = /* @__PURE__ */ fe(sw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const zn = st(J1, {
  CheckboxButton: Ru,
  CheckboxGroup: Bu
});
lo(Ru);
lo(Bu);
const zu = Ce({
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
    values: No,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), iw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, uw = Y({
  name: "ElTag"
}), cw = /* @__PURE__ */ Y({
  ...uw,
  props: zu,
  emits: iw,
  setup(e, { emit: t }) {
    const n = e, o = tn(), r = ne("tag"), l = O(() => {
      const { type: i, hit: u, effect: d, closable: f, round: v } = n;
      return [
        r.b(),
        r.is("closable", f),
        r.m(i),
        r.m(o.value),
        r.m(d),
        r.is("hit", u),
        r.is("round", v)
      ];
    }), a = (i) => {
      t("close", i);
    }, s = (i) => {
      t("click", i);
    };
    return (i, u) => i.disableTransitions ? (E(), B("span", {
      key: 0,
      class: L(h(l)),
      style: Te({ backgroundColor: i.color }),
      onClick: s
    }, [
      z("span", {
        class: L(h(r).e("content"))
      }, [
        re(i.$slots, "default")
      ], 2),
      i.closable ? (E(), j(h(Pe), {
        key: 0,
        class: L(h(r).e("close")),
        onClick: Be(a, ["stop"])
      }, {
        default: G(() => [
          ee(h(nl))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : U("v-if", !0)
    ], 6)) : (E(), j(wn, {
      key: 1,
      name: `${h(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: G(() => [
        z("span", {
          class: L(h(l)),
          style: Te({ backgroundColor: i.color }),
          onClick: s
        }, [
          z("span", {
            class: L(h(r).e("content"))
          }, [
            re(i.$slots, "default")
          ], 2),
          i.closable ? (E(), j(h(Pe), {
            key: 0,
            class: L(h(r).e("close")),
            onClick: Be(a, ["stop"])
          }, {
            default: G(() => [
              ee(h(nl))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : U("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var dw = /* @__PURE__ */ fe(cw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const fw = st(dw), bl = {}, pw = Ce({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ue(Object)
  },
  size: so,
  button: {
    type: ue(Object)
  },
  experimentalFeatures: {
    type: ue(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ue(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
});
Y({
  name: "ElConfigProvider",
  props: pw,
  setup(e, { slots: t }) {
    Q(() => e.message, (o) => {
      Object.assign(bl, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Xm(e);
    return () => re(t, "default", { config: n == null ? void 0 : n.value });
  }
});
const vw = Ce({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: ue([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: ue([String, Number])
  }
}), hw = {
  click: (e) => e instanceof MouseEvent
};
var gw = Y({
  name: "ElOverlay",
  props: vw,
  emits: hw,
  setup(e, { slots: t, emit: n }) {
    const o = ne("overlay"), r = (i) => {
      n("click", i);
    }, { onClick: l, onMousedown: a, onMouseup: s } = uu(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? ee("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: l,
      onMousedown: a,
      onMouseup: s
    }, [re(t, "default")], Yo.STYLE | Yo.CLASS | Yo.PROPS, ["onClick", "onMouseup", "onMousedown"]) : te("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [re(t, "default")]);
  }
});
const mw = gw;
let bw = 0;
const yw = Y({
  name: "ImgEmpty",
  setup() {
    return {
      ns: ne("empty"),
      id: ++bw
    };
  }
}), ww = {
  viewBox: "0 0 79 86",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, Cw = ["id"], Sw = ["stop-color"], Ew = ["stop-color"], _w = ["id"], Tw = ["stop-color"], $w = ["stop-color"], kw = ["id"], Ow = {
  id: "Illustrations",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, xw = {
  id: "B-type",
  transform: "translate(-1268.000000, -535.000000)"
}, Aw = {
  id: "Group-2",
  transform: "translate(1268.000000, 535.000000)"
}, Nw = ["fill"], Lw = ["fill"], Pw = {
  id: "Group-Copy",
  transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
}, Mw = ["fill"], Iw = ["fill"], Rw = ["fill"], Bw = ["fill"], zw = ["fill"], Fw = {
  id: "Rectangle-Copy-17",
  transform: "translate(53.000000, 45.000000)"
}, Dw = ["fill", "xlink:href"], Hw = ["fill", "mask"], Vw = ["fill"];
function Ww(e, t, n, o, r, l) {
  return E(), B("svg", ww, [
    z("defs", null, [
      z("linearGradient", {
        id: `linearGradient-1-${e.id}`,
        x1: "38.8503086%",
        y1: "0%",
        x2: "61.1496914%",
        y2: "100%"
      }, [
        z("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-1")})`,
          offset: "0%"
        }, null, 8, Sw),
        z("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-4")})`,
          offset: "100%"
        }, null, 8, Ew)
      ], 8, Cw),
      z("linearGradient", {
        id: `linearGradient-2-${e.id}`,
        x1: "0%",
        y1: "9.5%",
        x2: "100%",
        y2: "90.5%"
      }, [
        z("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-1")})`,
          offset: "0%"
        }, null, 8, Tw),
        z("stop", {
          "stop-color": `var(${e.ns.cssVarBlockName("fill-color-6")})`,
          offset: "100%"
        }, null, 8, $w)
      ], 8, _w),
      z("rect", {
        id: `path-3-${e.id}`,
        x: "0",
        y: "0",
        width: "17",
        height: "36"
      }, null, 8, kw)
    ]),
    z("g", Ow, [
      z("g", xw, [
        z("g", Aw, [
          z("path", {
            id: "Oval-Copy-2",
            d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
            fill: `var(${e.ns.cssVarBlockName("fill-color-3")})`
          }, null, 8, Nw),
          z("polygon", {
            id: "Rectangle-Copy-14",
            fill: `var(${e.ns.cssVarBlockName("fill-color-7")})`,
            transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
            points: "13 58 53 58 42 45 2 45"
          }, null, 8, Lw),
          z("g", Pw, [
            z("polygon", {
              id: "Rectangle-Copy-10",
              fill: `var(${e.ns.cssVarBlockName("fill-color-7")})`,
              transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
              points: "2.84078316e-14 3 18 3 23 7 5 7"
            }, null, 8, Mw),
            z("polygon", {
              id: "Rectangle-Copy-11",
              fill: `var(${e.ns.cssVarBlockName("fill-color-5")})`,
              points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
            }, null, 8, Iw),
            z("rect", {
              id: "Rectangle-Copy-12",
              fill: `url(#linearGradient-1-${e.id})`,
              transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
              x: "38",
              y: "7",
              width: "17",
              height: "36"
            }, null, 8, Rw),
            z("polygon", {
              id: "Rectangle-Copy-13",
              fill: `var(${e.ns.cssVarBlockName("fill-color-2")})`,
              transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
              points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
            }, null, 8, Bw)
          ]),
          z("rect", {
            id: "Rectangle-Copy-15",
            fill: `url(#linearGradient-2-${e.id})`,
            x: "13",
            y: "45",
            width: "40",
            height: "36"
          }, null, 8, zw),
          z("g", Fw, [
            z("use", {
              id: "Mask",
              fill: `var(${e.ns.cssVarBlockName("fill-color-8")})`,
              transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
              "xlink:href": `#path-3-${e.id}`
            }, null, 8, Dw),
            z("polygon", {
              id: "Rectangle-Copy",
              fill: `var(${e.ns.cssVarBlockName("fill-color-9")})`,
              mask: `url(#mask-4-${e.id})`,
              transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
              points: "7 0 24 0 20 18 7 16.5"
            }, null, 8, Hw)
          ]),
          z("polygon", {
            id: "Rectangle-Copy-18",
            fill: `var(${e.ns.cssVarBlockName("fill-color-2")})`,
            transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
            points: "62 45 79 45 70 58 53 58"
          }, null, 8, Vw)
        ])
      ])
    ])
  ]);
}
var jw = /* @__PURE__ */ fe(yw, [["render", Ww], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue"]]);
const Kw = {
  image: {
    type: String,
    default: ""
  },
  imageSize: Number,
  description: {
    type: String,
    default: ""
  }
}, Uw = ["src"], Gw = { key: 1 }, qw = Y({
  name: "ElEmpty"
}), Yw = /* @__PURE__ */ Y({
  ...qw,
  props: Kw,
  setup(e) {
    const t = e, { t: n } = Ct(), o = ne("empty"), r = O(() => t.description || n("el.table.emptyText")), l = O(() => ({
      width: t.imageSize ? `${t.imageSize}px` : ""
    }));
    return (a, s) => (E(), B("div", {
      class: L(h(o).b())
    }, [
      z("div", {
        class: L(h(o).e("image")),
        style: Te(h(l))
      }, [
        a.image ? (E(), B("img", {
          key: 0,
          src: a.image,
          ondragstart: "return false"
        }, null, 8, Uw)) : re(a.$slots, "image", { key: 1 }, () => [
          ee(jw)
        ])
      ], 6),
      z("div", {
        class: L(h(o).e("description"))
      }, [
        a.$slots.description ? re(a.$slots, "description", { key: 0 }) : (E(), B("p", Gw, ce(h(r)), 1))
      ], 2),
      a.$slots.default ? (E(), B("div", {
        key: 0,
        class: L(h(o).e("bottom"))
      }, [
        re(a.$slots, "default")
      ], 2)) : U("v-if", !0)
    ], 2));
  }
});
var Qw = /* @__PURE__ */ fe(Yw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue"]]);
const Fu = st(Qw), Xw = Ce({
  id: {
    type: String,
    default: void 0
  },
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: Boolean,
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY
  },
  modelValue: Number,
  readonly: Boolean,
  disabled: Boolean,
  size: so,
  controls: {
    type: Boolean,
    default: !0
  },
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  valueOnClear: {
    type: [String, Number, null],
    validator: (e) => e === null || me(e) || ["min", "max"].includes(e),
    default: null
  },
  name: String,
  label: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (e) => e >= 0 && e === Number.parseInt(`${e}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), Zw = {
  [$r]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [qo]: (e) => me(e) || Zt(e),
  [Me]: (e) => me(e) || Zt(e)
}, Jw = ["aria-label", "onKeydown"], e2 = ["aria-label", "onKeydown"], t2 = Y({
  name: "ElInputNumber"
}), n2 = /* @__PURE__ */ Y({
  ...t2,
  props: Xw,
  emits: Zw,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = Ct(), l = ne("input-number"), a = k(), s = on({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: i } = Wn(), u = O(() => me(o.modelValue) && o.modelValue <= o.min), d = O(() => me(o.modelValue) && o.modelValue >= o.max), f = O(() => {
      const A = m(o.step);
      return Qt(o.precision) ? Math.max(m(o.modelValue), A) : (A > o.precision && Ne("InputNumber", "precision should not be less than the decimal places of step"), o.precision);
    }), v = O(() => o.controls && o.controlsPosition === "right"), p = tn(), c = Lo(), g = O(() => {
      if (s.userInput !== null)
        return s.userInput;
      let A = s.currentValue;
      if (Zt(A))
        return "";
      if (me(A)) {
        if (Number.isNaN(A))
          return "";
        Qt(o.precision) || (A = A.toFixed(o.precision));
      }
      return A;
    }), b = (A, M) => {
      if (Qt(M) && (M = f.value), M === 0)
        return Math.round(A);
      let P = String(A);
      const D = P.indexOf(".");
      if (D === -1 || !P.replace(".", "").split("")[D + M])
        return A;
      const I = P.length;
      return P.charAt(I - 1) === "5" && (P = `${P.slice(0, Math.max(0, I - 1))}6`), Number.parseFloat(Number(P).toFixed(M));
    }, m = (A) => {
      if (Zt(A))
        return 0;
      const M = A.toString(), P = M.indexOf(".");
      let D = 0;
      return P !== -1 && (D = M.length - P - 1), D;
    }, w = (A, M = 1) => me(A) ? b(A + o.step * M) : s.currentValue, y = () => {
      if (o.readonly || c.value || d.value)
        return;
      const A = Number(g.value) || 0, M = w(A);
      T(M), n(qo, s.currentValue);
    }, C = () => {
      if (o.readonly || c.value || u.value)
        return;
      const A = Number(g.value) || 0, M = w(A, -1);
      T(M), n(qo, s.currentValue);
    }, _ = (A, M) => {
      const { max: P, min: D, step: q, precision: H, stepStrictly: I, valueOnClear: X } = o;
      let le = Number(A);
      if (Zt(A) || Number.isNaN(le))
        return null;
      if (A === "") {
        if (X === null)
          return null;
        le = We(X) ? { min: D, max: P }[X] : X;
      }
      return I && (le = b(Math.round(le / q) * q, H)), Qt(H) || (le = b(le, H)), (le > P || le < D) && (le = le > P ? P : D, M && n(Me, le)), le;
    }, T = (A, M = !0) => {
      var P;
      const D = s.currentValue, q = _(A);
      if (D !== q) {
        if (!M) {
          n(Me, q);
          return;
        }
        s.userInput = null, n(Me, q), n($r, q, D), o.validateEvent && ((P = i == null ? void 0 : i.validate) == null || P.call(i, "change").catch((H) => Ne(H))), s.currentValue = q;
      }
    }, S = (A) => {
      s.userInput = A;
      const M = A === "" ? null : Number(A);
      n(qo, M), T(M, !1);
    }, x = (A) => {
      const M = A !== "" ? Number(A) : "";
      (me(M) && !Number.isNaN(M) || A === "") && T(M), s.userInput = null;
    }, N = () => {
      var A, M;
      (M = (A = a.value) == null ? void 0 : A.focus) == null || M.call(A);
    }, F = () => {
      var A, M;
      (M = (A = a.value) == null ? void 0 : A.blur) == null || M.call(A);
    }, W = (A) => {
      n("focus", A);
    }, K = (A) => {
      var M;
      n("blur", A), o.validateEvent && ((M = i == null ? void 0 : i.validate) == null || M.call(i, "blur").catch((P) => Ne(P)));
    };
    return Q(() => o.modelValue, (A) => {
      const M = _(s.userInput), P = _(A, !0);
      !me(M) && (!M || M !== P) && (s.currentValue = P, s.userInput = null);
    }, { immediate: !0 }), Ae(() => {
      var A;
      const { min: M, max: P, modelValue: D } = o, q = (A = a.value) == null ? void 0 : A.input;
      if (q.setAttribute("role", "spinbutton"), Number.isFinite(P) ? q.setAttribute("aria-valuemax", String(P)) : q.removeAttribute("aria-valuemax"), Number.isFinite(M) ? q.setAttribute("aria-valuemin", String(M)) : q.removeAttribute("aria-valuemin"), q.setAttribute("aria-valuenow", String(s.currentValue)), q.setAttribute("aria-disabled", String(c.value)), !me(D) && D != null) {
        let H = Number(D);
        Number.isNaN(H) && (H = null), n(Me, H);
      }
    }), _l(() => {
      var A;
      const M = (A = a.value) == null ? void 0 : A.input;
      M == null || M.setAttribute("aria-valuenow", `${s.currentValue}`);
    }), t({
      focus: N,
      blur: F
    }), (A, M) => (E(), B("div", {
      class: L([
        h(l).b(),
        h(l).m(h(p)),
        h(l).is("disabled", h(c)),
        h(l).is("without-controls", !A.controls),
        h(l).is("controls-right", h(v))
      ]),
      onDragstart: M[0] || (M[0] = Be(() => {
      }, ["prevent"]))
    }, [
      A.controls ? we((E(), B("span", {
        key: 0,
        role: "button",
        "aria-label": h(r)("el.inputNumber.decrease"),
        class: L([h(l).e("decrease"), h(l).is("disabled", h(u))]),
        onKeydown: Le(C, ["enter"])
      }, [
        ee(h(Pe), null, {
          default: G(() => [
            h(v) ? (E(), j(h(zl), { key: 0 })) : (E(), j(h(um), { key: 1 }))
          ]),
          _: 1
        })
      ], 42, Jw)), [
        [h(Ns), C]
      ]) : U("v-if", !0),
      A.controls ? we((E(), B("span", {
        key: 1,
        role: "button",
        "aria-label": h(r)("el.inputNumber.increase"),
        class: L([h(l).e("increase"), h(l).is("disabled", h(d))]),
        onKeydown: Le(y, ["enter"])
      }, [
        ee(h(Pe), null, {
          default: G(() => [
            h(v) ? (E(), j(h(Ni), { key: 0 })) : (E(), j(h(wm), { key: 1 }))
          ]),
          _: 1
        })
      ], 42, e2)), [
        [h(Ns), y]
      ]) : U("v-if", !0),
      ee(h(Ro), {
        id: A.id,
        ref_key: "input",
        ref: a,
        type: "number",
        step: A.step,
        "model-value": h(g),
        placeholder: A.placeholder,
        readonly: A.readonly,
        disabled: h(c),
        size: h(p),
        max: A.max,
        min: A.min,
        name: A.name,
        label: A.label,
        "validate-event": !1,
        onKeydown: [
          Le(Be(y, ["prevent"]), ["up"]),
          Le(Be(C, ["prevent"]), ["down"])
        ],
        onBlur: K,
        onFocus: W,
        onInput: S,
        onChange: x
      }, null, 8, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "label", "onKeydown"])
    ], 34));
  }
});
var o2 = /* @__PURE__ */ fe(n2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);
const r2 = st(o2), l2 = Ce({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: kt
  }
}), a2 = {
  click: (e) => e instanceof MouseEvent
}, s2 = ["disabled", "aria-disabled"], i2 = { key: 0 }, u2 = Y({
  name: "ElPaginationPrev"
}), c2 = /* @__PURE__ */ Y({
  ...u2,
  props: l2,
  emits: a2,
  setup(e) {
    const t = e, n = O(() => t.disabled || t.currentPage <= 1);
    return (o, r) => (E(), B("button", {
      type: "button",
      class: "btn-prev",
      disabled: h(n),
      "aria-disabled": h(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.prevText ? (E(), B("span", i2, ce(o.prevText), 1)) : (E(), j(h(Pe), { key: 1 }, {
        default: G(() => [
          (E(), j(He(o.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, s2));
  }
});
var d2 = /* @__PURE__ */ fe(c2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const f2 = Ce({
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
    type: kt
  }
}), p2 = ["disabled", "aria-disabled"], v2 = { key: 0 }, h2 = Y({
  name: "ElPaginationNext"
}), g2 = /* @__PURE__ */ Y({
  ...h2,
  props: f2,
  emits: ["click"],
  setup(e) {
    const t = e, n = O(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (o, r) => (E(), B("button", {
      type: "button",
      class: "btn-next",
      disabled: h(n),
      "aria-disabled": h(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.nextText ? (E(), B("span", v2, ce(o.nextText), 1)) : (E(), j(h(Pe), { key: 1 }, {
        default: G(() => [
          (E(), j(He(o.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, p2));
  }
});
var m2 = /* @__PURE__ */ fe(g2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Du = "ElSelectGroup", Lr = "ElSelect";
function b2(e, t) {
  const n = ve(Lr), o = ve(Du, { disabled: !1 }), r = O(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), l = O(() => n.props.multiple ? f(n.props.modelValue, e.value) : v(e.value, n.props.modelValue)), a = O(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !l.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = O(() => e.label || (r.value ? "" : e.value)), i = O(() => e.value || e.label || ""), u = O(() => e.disabled || t.groupDisabled || a.value), d = Ee(), f = (g = [], b) => {
    if (r.value) {
      const m = n.props.valueKey;
      return g && g.some((w) => Yn(Ge(w, m)) === Ge(b, m));
    } else
      return g && g.includes(b);
  }, v = (g, b) => {
    if (r.value) {
      const { valueKey: m } = n.props;
      return Ge(g, m) === Ge(b, m);
    } else
      return g === b;
  }, p = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  Q(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Q(() => e.value, (g, b) => {
    const { remote: m, valueKey: w } = n.props;
    if (Object.is(g, b) || (n.onOptionDestroy(b, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !m) {
      if (w && typeof g == "object" && typeof b == "object" && g[w] === b[w])
        return;
      n.setSelected();
    }
  }), Q(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: c } = Yn(n);
  return Q(c, (g) => {
    const { query: b } = h(g), m = new RegExp(Lh(b), "i");
    t.visible = m.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: l,
    isDisabled: u,
    hoverItem: p
  };
}
const y2 = Y({
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
    const t = ne("select"), n = on({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: r, isDisabled: l, select: a, hoverItem: s } = b2(e, n), { visible: i, hover: u } = Fn(n), d = Ee().proxy;
    a.onOptionCreate(d), wt(() => {
      const v = d.value, { selected: p } = a, g = (a.props.multiple ? p : [p]).some((b) => b.value === d.value);
      se(() => {
        a.cachedOptions.get(v) === d && !g && a.cachedOptions.delete(v);
      }), a.onOptionDestroy(v, d);
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
function w2(e, t, n, o, r, l) {
  return we((E(), B("li", {
    class: L([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...a) => e.hoverItem && e.hoverItem(...a)),
    onClick: t[1] || (t[1] = Be((...a) => e.selectOptionClick && e.selectOptionClick(...a), ["stop"]))
  }, [
    re(e.$slots, "default", {}, () => [
      z("span", null, ce(e.currentLabel), 1)
    ])
  ], 34)), [
    [qe, e.visible]
  ]);
}
var ra = /* @__PURE__ */ fe(y2, [["render", w2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const C2 = Y({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ve(Lr), t = ne("select"), n = O(() => e.props.popperClass), o = O(() => e.props.multiple), r = O(() => e.props.fitInputWidth), l = k("");
    function a() {
      var s;
      l.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return Ae(() => {
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
function S2(e, t, n, o, r, l) {
  return E(), B("div", {
    class: L([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Te({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    re(e.$slots, "default")
  ], 6);
}
var E2 = /* @__PURE__ */ fe(C2, [["render", S2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function _2(e) {
  const { t } = Ct();
  return on({
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
const T2 = (e, t, n) => {
  const { t: o } = Ct(), r = ne("select");
  Ui({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, O(() => e.suffixTransition === !1));
  const l = k(null), a = k(null), s = k(null), i = k(null), u = k(null), d = k(null), f = k(-1), v = ho({ query: "" }), p = ho(""), { form: c, formItem: g } = Wn(), b = O(() => !e.filterable || e.multiple || !t.visible), m = O(() => e.disabled || (c == null ? void 0 : c.disabled)), w = O(() => {
    const $ = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !m.value && t.inputHovering && $;
  }), y = O(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), C = O(() => r.is("reverse", y.value && t.visible && e.suffixTransition)), _ = O(() => e.remote ? 300 : 0), T = O(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), S = O(() => Array.from(t.options.values())), x = O(() => Array.from(t.cachedOptions.values())), N = O(() => {
    const $ = S.value.filter((R) => !R.created).some((R) => R.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !$;
  }), F = tn(), W = O(() => ["small"].includes(F.value) ? "small" : "default"), K = O({
    get() {
      return t.visible && T.value !== !1;
    },
    set($) {
      t.visible = $;
    }
  });
  Q([() => m.value, () => F.value, () => c == null ? void 0 : c.size], () => {
    se(() => {
      A();
    });
  }), Q(() => e.placeholder, ($) => {
    t.cachedPlaceHolder = t.currentPlaceholder = $;
  }), Q(() => e.modelValue, ($, R) => {
    e.multiple && (A(), $ && $.length > 0 || a.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", M(t.query))), q(), e.filterable && !e.multiple && (t.inputLength = 20), !ir($, R) && e.validateEvent && (g == null || g.validate("change").catch((J) => Ne(J)));
  }, {
    flush: "post",
    deep: !0
  }), Q(() => t.visible, ($) => {
    var R, J, oe;
    $ ? ((J = (R = s.value) == null ? void 0 : R.updatePopper) == null || J.call(R), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (oe = a.value) == null || oe.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), M(t.query), !e.multiple && !e.remote && (v.value.query = "", uo(v), uo(p)))) : (e.filterable && (ze(e.filterMethod) && e.filterMethod(""), ze(e.remoteMethod) && e.remoteMethod("")), a.value && a.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, I(), se(() => {
      a.value && a.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", $);
  }), Q(() => t.options.entries(), () => {
    var $, R, J;
    if (!be)
      return;
    (R = ($ = s.value) == null ? void 0 : $.updatePopper) == null || R.call($), e.multiple && A();
    const oe = ((J = u.value) == null ? void 0 : J.querySelectorAll("input")) || [];
    Array.from(oe).includes(document.activeElement) || q(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && D();
  }, {
    flush: "post"
  }), Q(() => t.hoverIndex, ($) => {
    me($) && $ > -1 ? f.value = S.value[$] || {} : f.value = {}, S.value.forEach((R) => {
      R.hover = f.value === R;
    });
  });
  const A = () => {
    e.collapseTags && !e.filterable || se(() => {
      var $, R;
      if (!l.value)
        return;
      const J = l.value.$el.querySelector("input"), oe = i.value, xe = Gm(F.value || (c == null ? void 0 : c.size));
      J.style.height = `${(t.selected.length === 0 ? xe : Math.max(oe ? oe.clientHeight + (oe.clientHeight > xe ? 6 : 0) : 0, xe)) - 2}px`, t.tagInMultiLine = Number.parseFloat(J.style.height) >= xe, t.visible && T.value !== !1 && ((R = ($ = s.value) == null ? void 0 : $.updatePopper) == null || R.call($));
    });
  }, M = async ($) => {
    if (!(t.previousQuery === $ || t.isOnComposition)) {
      if (t.previousQuery === null && (ze(e.filterMethod) || ze(e.remoteMethod))) {
        t.previousQuery = $;
        return;
      }
      t.previousQuery = $, se(() => {
        var R, J;
        t.visible && ((J = (R = s.value) == null ? void 0 : R.updatePopper) == null || J.call(R));
      }), t.hoverIndex = -1, e.multiple && e.filterable && se(() => {
        const R = a.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, R) : R, P(), A();
      }), e.remote && ze(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod($)) : ze(e.filterMethod) ? (e.filterMethod($), uo(p)) : (t.filteredOptionsCount = t.optionsCount, v.value.query = $, uo(v), uo(p)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await se(), D());
    }
  }, P = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = a.value.value ? "" : t.cachedPlaceHolder);
  }, D = () => {
    const $ = S.value.filter((oe) => oe.visible && !oe.disabled && !oe.states.groupDisabled), R = $.find((oe) => oe.created), J = $[0];
    t.hoverIndex = Xe(S.value, R || J);
  }, q = () => {
    var $;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const J = H(e.modelValue);
      ($ = J.props) != null && $.created ? (t.createdLabel = J.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = J.currentLabel, t.selected = J, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const R = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((J) => {
      R.push(H(J));
    }), t.selected = R, se(() => {
      A();
    });
  }, H = ($) => {
    let R;
    const J = zr($).toLowerCase() === "object", oe = zr($).toLowerCase() === "null", xe = zr($).toLowerCase() === "undefined";
    for (let St = t.cachedOptions.size - 1; St >= 0; St--) {
      const Je = x.value[St];
      if (J ? Ge(Je.value, e.valueKey) === Ge($, e.valueKey) : Je.value === $) {
        R = {
          value: $,
          currentLabel: Je.currentLabel,
          isDisabled: Je.isDisabled
        };
        break;
      }
    }
    if (R)
      return R;
    const De = J ? $.label : !oe && !xe ? $ : "", Pt = {
      value: $,
      currentLabel: De
    };
    return e.multiple && (Pt.hitState = !1), Pt;
  }, I = () => {
    setTimeout(() => {
      const $ = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((R) => S.value.findIndex((J) => Ge(J, $) === Ge(R, $)))) : t.hoverIndex = -1 : t.hoverIndex = S.value.findIndex((R) => Kt(R) === Kt(t.selected));
    }, 300);
  }, X = () => {
    var $, R;
    le(), (R = ($ = s.value) == null ? void 0 : $.updatePopper) == null || R.call($), e.multiple && !e.filterable && A();
  }, le = () => {
    var $;
    t.inputWidth = ($ = l.value) == null ? void 0 : $.$el.getBoundingClientRect().width;
  }, ge = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, M(t.query));
  }, Se = In(() => {
    ge();
  }, _.value), ye = In(($) => {
    M($.target.value);
  }, _.value), ie = ($) => {
    ir(e.modelValue, $) || n.emit($r, $);
  }, _e = ($) => {
    if ($.target.value.length <= 0 && !ut()) {
      const R = e.modelValue.slice();
      R.pop(), n.emit(Me, R), ie(R);
    }
    $.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, $e = ($, R) => {
    const J = t.selected.indexOf(R);
    if (J > -1 && !m.value) {
      const oe = e.modelValue.slice();
      oe.splice(J, 1), n.emit(Me, oe), ie(oe), n.emit("remove-tag", R.value);
    }
    $.stopPropagation();
  }, pe = ($) => {
    $.stopPropagation();
    const R = e.multiple ? [] : "";
    if (!We(R))
      for (const J of t.selected)
        J.isDisabled && R.push(J.value);
    n.emit(Me, R), ie(R), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, Re = ($, R) => {
    var J;
    if (e.multiple) {
      const oe = (e.modelValue || []).slice(), xe = Xe(oe, $.value);
      xe > -1 ? oe.splice(xe, 1) : (e.multipleLimit <= 0 || oe.length < e.multipleLimit) && oe.push($.value), n.emit(Me, oe), ie(oe), $.created && (t.query = "", M(""), t.inputLength = 20), e.filterable && ((J = a.value) == null || J.focus());
    } else
      n.emit(Me, $.value), ie($.value), t.visible = !1;
    t.isSilentBlur = R, gt(), !t.visible && se(() => {
      Ze($);
    });
  }, Xe = ($ = [], R) => {
    if (!at(R))
      return $.indexOf(R);
    const J = e.valueKey;
    let oe = -1;
    return $.some((xe, De) => Yn(Ge(xe, J)) === Ge(R, J) ? (oe = De, !0) : !1), oe;
  }, gt = () => {
    t.softFocus = !0;
    const $ = a.value || l.value;
    $ && ($ == null || $.focus());
  }, Ze = ($) => {
    var R, J, oe, xe, De;
    const Pt = Array.isArray($) ? $[0] : $;
    let St = null;
    if (Pt != null && Pt.value) {
      const Je = S.value.filter((an) => an.value === Pt.value);
      Je.length > 0 && (St = Je[0].$el);
    }
    if (s.value && St) {
      const Je = (xe = (oe = (J = (R = s.value) == null ? void 0 : R.popperRef) == null ? void 0 : J.contentRef) == null ? void 0 : oe.querySelector) == null ? void 0 : xe.call(oe, `.${r.be("dropdown", "wrap")}`);
      Je && zh(Je, St);
    }
    (De = d.value) == null || De.handleScroll();
  }, it = ($) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set($.value, $), t.cachedOptions.set($.value, $);
  }, At = ($, R) => {
    t.options.get($) === R && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete($));
  }, Nt = ($) => {
    $.code !== Bn.backspace && ut(!1), t.inputLength = a.value.value.length * 15 + 20, A();
  }, ut = ($) => {
    if (!Array.isArray(t.selected))
      return;
    const R = t.selected[t.selected.length - 1];
    if (R)
      return $ === !0 || $ === !1 ? (R.hitState = $, $) : (R.hitState = !R.hitState, R.hitState);
  }, Lt = ($) => {
    const R = $.target.value;
    if ($.type === "compositionend")
      t.isOnComposition = !1, se(() => M(R));
    else {
      const J = R[R.length - 1] || "";
      t.isOnComposition = !Fi(J);
    }
  }, Wt = () => {
    se(() => Ze(t.selected));
  }, Ye = ($) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", $));
  }, Ue = () => {
    var $;
    t.visible = !1, ($ = l.value) == null || $.blur();
  }, ct = ($) => {
    se(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", $);
    }), t.softFocus = !1;
  }, V = ($) => {
    pe($);
  }, he = () => {
    t.visible = !1;
  }, Fe = ($) => {
    t.visible && ($.preventDefault(), $.stopPropagation(), t.visible = !1);
  }, dt = ($) => {
    var R;
    $ && !t.mouseEnter || m.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!s.value || !s.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((R = a.value || l.value) == null || R.focus()));
  }, jt = () => {
    t.visible ? S.value[t.hoverIndex] && Re(S.value[t.hoverIndex], void 0) : dt();
  }, Kt = ($) => at($.value) ? Ge($.value, e.valueKey) : $.value, En = O(() => S.value.filter(($) => $.visible).every(($) => $.disabled)), Z = ($) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !En.value) {
      $ === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : $ === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const R = S.value[t.hoverIndex];
      (R.disabled === !0 || R.states.groupDisabled === !0 || !R.visible) && Z($), se(() => Ze(f.value));
    }
  };
  return {
    optionsArray: S,
    selectSize: F,
    handleResize: X,
    debouncedOnInputChange: Se,
    debouncedQueryChange: ye,
    deletePrevTag: _e,
    deleteTag: $e,
    deleteSelected: pe,
    handleOptionSelect: Re,
    scrollToOption: Ze,
    readonly: b,
    resetInputHeight: A,
    showClose: w,
    iconComponent: y,
    iconReverse: C,
    showNewOption: N,
    collapseTagSize: W,
    setSelected: q,
    managePlaceholder: P,
    selectDisabled: m,
    emptyText: T,
    toggleLastOptionHitState: ut,
    resetInputState: Nt,
    handleComposition: Lt,
    onOptionCreate: it,
    onOptionDestroy: At,
    handleMenuEnter: Wt,
    handleFocus: Ye,
    blur: Ue,
    handleBlur: ct,
    handleClearClick: V,
    handleClose: he,
    handleKeydownEscape: Fe,
    toggleMenu: dt,
    selectOption: jt,
    getValueKey: Kt,
    navigateOptions: Z,
    dropMenuVisible: K,
    queryChange: v,
    groupQueryChange: p,
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
}, Bs = "ElSelect", $2 = Y({
  name: Bs,
  componentName: Bs,
  components: {
    ElInput: Ro,
    ElSelectMenu: E2,
    ElOption: ra,
    ElTag: fw,
    ElScrollbar: ea,
    ElTooltip: Cu,
    ElIcon: Pe
  },
  directives: { ClickOutside: Tu },
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
      validator: zi
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
    teleported: oa.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: kt,
      default: Dl
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: kt,
      default: zl
    },
    tagType: { ...zu.type, default: "info" },
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
      values: xr,
      default: "bottom-start"
    }
  },
  emits: [
    Me,
    $r,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = ne("select"), o = ne("input"), { t: r } = Ct(), l = _2(e), {
      optionsArray: a,
      selectSize: s,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: v,
      deletePrevTag: p,
      deleteTag: c,
      deleteSelected: g,
      handleOptionSelect: b,
      scrollToOption: m,
      setSelected: w,
      resetInputHeight: y,
      managePlaceholder: C,
      showClose: _,
      selectDisabled: T,
      iconComponent: S,
      iconReverse: x,
      showNewOption: N,
      emptyText: F,
      toggleLastOptionHitState: W,
      resetInputState: K,
      handleComposition: A,
      onOptionCreate: M,
      onOptionDestroy: P,
      handleMenuEnter: D,
      handleFocus: q,
      blur: H,
      handleBlur: I,
      handleClearClick: X,
      handleClose: le,
      handleKeydownEscape: ge,
      toggleMenu: Se,
      selectOption: ye,
      getValueKey: ie,
      navigateOptions: _e,
      dropMenuVisible: $e,
      reference: pe,
      input: Re,
      tooltipRef: Xe,
      tags: gt,
      selectWrapper: Ze,
      scrollbar: it,
      queryChange: At,
      groupQueryChange: Nt,
      handleMouseEnter: ut,
      handleMouseLeave: Lt
    } = T2(e, l, t), { focus: Wt } = e0(pe), {
      inputWidth: Ye,
      selected: Ue,
      inputLength: ct,
      filteredOptionsCount: V,
      visible: he,
      softFocus: Fe,
      selectedLabel: dt,
      hoverIndex: jt,
      query: Kt,
      inputHovering: En,
      currentPlaceholder: Z,
      menuVisibleOnFocus: ae,
      isOnComposition: de,
      isSilentBlur: $,
      options: R,
      cachedOptions: J,
      optionsCount: oe,
      prefixWidth: xe,
      tagInMultiLine: De
    } = Fn(l), Pt = O(() => {
      const ft = [n.b()], _n = h(s);
      return _n && ft.push(n.m(_n)), e.disabled && ft.push(n.m("disabled")), ft;
    }), St = O(() => ({
      maxWidth: `${h(Ye) - 32}px`,
      width: "100%"
    })), Je = O(() => ({ maxWidth: `${h(Ye) > 123 ? h(Ye) - 123 : h(Ye) - 75}px` }));
    rt(Lr, on({
      props: e,
      options: R,
      optionsArray: a,
      cachedOptions: J,
      optionsCount: oe,
      filteredOptionsCount: V,
      hoverIndex: jt,
      handleOptionSelect: b,
      onOptionCreate: M,
      onOptionDestroy: P,
      selectWrapper: Ze,
      selected: Ue,
      setSelected: w,
      queryChange: At,
      groupQueryChange: Nt
    })), Ae(() => {
      l.cachedPlaceHolder = Z.value = e.placeholder || r("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Z.value = ""), Rn(Ze, u), e.remote && e.multiple && y(), se(() => {
        const ft = pe.value && pe.value.$el;
        if (ft && (Ye.value = ft.getBoundingClientRect().width, t.slots.prefix)) {
          const _n = ft.querySelector(`.${o.e("prefix")}`);
          xe.value = Math.max(_n.getBoundingClientRect().width + 5, 30);
        }
      }), w();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Me, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Me, "");
    const an = O(() => {
      var ft, _n;
      return (_n = (ft = Xe.value) == null ? void 0 : ft.popperRef) == null ? void 0 : _n.contentRef;
    });
    return {
      tagInMultiLine: De,
      prefixWidth: xe,
      selectSize: s,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: v,
      deletePrevTag: p,
      deleteTag: c,
      deleteSelected: g,
      handleOptionSelect: b,
      scrollToOption: m,
      inputWidth: Ye,
      selected: Ue,
      inputLength: ct,
      filteredOptionsCount: V,
      visible: he,
      softFocus: Fe,
      selectedLabel: dt,
      hoverIndex: jt,
      query: Kt,
      inputHovering: En,
      currentPlaceholder: Z,
      menuVisibleOnFocus: ae,
      isOnComposition: de,
      isSilentBlur: $,
      options: R,
      resetInputHeight: y,
      managePlaceholder: C,
      showClose: _,
      selectDisabled: T,
      iconComponent: S,
      iconReverse: x,
      showNewOption: N,
      emptyText: F,
      toggleLastOptionHitState: W,
      resetInputState: K,
      handleComposition: A,
      handleMenuEnter: D,
      handleFocus: q,
      blur: H,
      handleBlur: I,
      handleClearClick: X,
      handleClose: le,
      handleKeydownEscape: ge,
      toggleMenu: Se,
      selectOption: ye,
      getValueKey: ie,
      navigateOptions: _e,
      dropMenuVisible: $e,
      focus: Wt,
      reference: pe,
      input: Re,
      tooltipRef: Xe,
      popperPaneRef: an,
      tags: gt,
      selectWrapper: Ze,
      scrollbar: it,
      wrapperKls: Pt,
      selectTagsStyle: St,
      nsSelect: n,
      tagTextStyle: Je,
      handleMouseEnter: ut,
      handleMouseLeave: Lt
    };
  }
}), k2 = ["disabled", "autocomplete"], O2 = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function x2(e, t, n, o, r, l) {
  const a = Oe("el-tag"), s = Oe("el-tooltip"), i = Oe("el-icon"), u = Oe("el-input"), d = Oe("el-option"), f = Oe("el-scrollbar"), v = Oe("el-select-menu"), p = Tl("click-outside");
  return we((E(), B("div", {
    ref: "selectWrapper",
    class: L(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...c) => e.handleMouseEnter && e.handleMouseEnter(...c)),
    onMouseleave: t[23] || (t[23] = (...c) => e.handleMouseLeave && e.handleMouseLeave(...c)),
    onClick: t[24] || (t[24] = Be((...c) => e.toggleMenu && e.toggleMenu(...c), ["stop"]))
  }, [
    ee(s, {
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
      default: G(() => [
        z("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (c) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (c) => e.inputHovering = !1)
        }, [
          e.multiple ? (E(), B("div", {
            key: 0,
            ref: "tags",
            class: L(e.nsSelect.e("tags")),
            style: Te(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (E(), B("span", {
              key: 0,
              class: L([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              ee(a, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (c) => e.deleteTag(c, e.selected[0]))
              }, {
                default: G(() => [
                  z("span", {
                    class: L(e.nsSelect.e("tags-text")),
                    style: Te(e.tagTextStyle)
                  }, ce(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (E(), j(a, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: G(() => [
                  e.collapseTagsTooltip ? (E(), j(s, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: G(() => [
                      z("span", {
                        class: L(e.nsSelect.e("tags-text"))
                      }, "+ " + ce(e.selected.length - 1), 3)
                    ]),
                    content: G(() => [
                      z("div", {
                        class: L(e.nsSelect.e("collapse-tags"))
                      }, [
                        (E(!0), B(Ve, null, vn(e.selected.slice(1), (c, g) => (E(), B("div", {
                          key: g,
                          class: L(e.nsSelect.e("collapse-tag"))
                        }, [
                          (E(), j(a, {
                            key: e.getValueKey(c),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !c.isDisabled,
                            size: e.collapseTagSize,
                            hit: c.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (b) => e.deleteTag(b, c)
                          }, {
                            default: G(() => [
                              z("span", {
                                class: L(e.nsSelect.e("tags-text")),
                                style: Te({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, ce(c.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (E(), B("span", {
                    key: 1,
                    class: L(e.nsSelect.e("tags-text"))
                  }, "+ " + ce(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : U("v-if", !0)
            ], 2)) : U("v-if", !0),
            U(" <div> "),
            e.collapseTags ? U("v-if", !0) : (E(), j(wn, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: G(() => [
                z("span", {
                  class: L([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (E(!0), B(Ve, null, vn(e.selected, (c) => (E(), j(a, {
                    key: e.getValueKey(c),
                    closable: !e.selectDisabled && !c.isDisabled,
                    size: e.collapseTagSize,
                    hit: c.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (g) => e.deleteTag(g, c)
                  }, {
                    default: G(() => [
                      z("span", {
                        class: L(e.nsSelect.e("tags-text")),
                        style: Te({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ce(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            U(" </div> "),
            e.filterable ? we((E(), B("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (c) => e.query = c),
              type: "text",
              class: L([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
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
                t[6] || (t[6] = Le(Be((c) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = Le(Be((c) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = Le((...c) => e.handleKeydownEscape && e.handleKeydownEscape(...c), ["esc"])),
                t[9] || (t[9] = Le(Be((...c) => e.selectOption && e.selectOption(...c), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = Le((...c) => e.deletePrevTag && e.deletePrevTag(...c), ["delete"])),
                t[11] || (t[11] = Le((c) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionupdate: t[13] || (t[13] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionend: t[14] || (t[14] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onInput: t[15] || (t[15] = (...c) => e.debouncedQueryChange && e.debouncedQueryChange(...c))
            }, null, 46, k2)), [
              [pc, e.query]
            ]) : U("v-if", !0)
          ], 6)) : U("v-if", !0),
          ee(u, {
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
            class: L([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = Le(Be((c) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = Le(Be((c) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              Le(Be(e.selectOption, ["stop", "prevent"]), ["enter"]),
              Le(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = Le((c) => e.visible = !1, ["tab"]))
            ]
          }, ei({
            suffix: G(() => [
              e.iconComponent && !e.showClose ? (E(), j(i, {
                key: 0,
                class: L([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: G(() => [
                  (E(), j(He(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0),
              e.showClose && e.clearIcon ? (E(), j(i, {
                key: 1,
                class: L([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: G(() => [
                  (E(), j(He(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : U("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: G(() => [
                z("div", O2, [
                  re(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: G(() => [
        ee(v, null, {
          default: G(() => [
            we(ee(f, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: L([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: G(() => [
                e.showNewOption ? (E(), j(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : U("v-if", !0),
                re(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [qe, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (E(), B(Ve, { key: 0 }, [
              e.$slots.empty ? re(e.$slots, "empty", { key: 0 }) : (E(), B("p", {
                key: 1,
                class: L(e.nsSelect.be("dropdown", "empty"))
              }, ce(e.emptyText), 3))
            ], 64)) : U("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [p, e.handleClose, e.popperPaneRef]
  ]);
}
var A2 = /* @__PURE__ */ fe($2, [["render", x2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const N2 = Y({
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
    const t = ne("select"), n = k(!0), o = Ee(), r = k([]);
    rt(Du, on({
      ...Fn(e)
    }));
    const l = ve(Lr);
    Ae(() => {
      r.value = a(o.subTree);
    });
    const a = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((d) => {
        var f;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (f = d.children) != null && f.length && u.push(...a(d));
      }), u;
    }, { groupQueryChange: s } = Yn(l);
    return Q(s, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function L2(e, t, n, o, r, l) {
  return we((E(), B("ul", {
    class: L(e.ns.be("group", "wrap"))
  }, [
    z("li", {
      class: L(e.ns.be("group", "title"))
    }, ce(e.label), 3),
    z("li", null, [
      z("ul", {
        class: L(e.ns.b("group"))
      }, [
        re(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [qe, e.visible]
  ]);
}
var Hu = /* @__PURE__ */ fe(N2, [["render", L2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const Vu = st(A2, {
  Option: ra,
  OptionGroup: Hu
}), Wu = lo(ra);
lo(Hu);
const la = () => ve(Vi, {}), P2 = Ce({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: ue(Array),
    default: () => kr([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: No
  }
}), M2 = Y({
  name: "ElPaginationSizes"
}), I2 = /* @__PURE__ */ Y({
  ...M2,
  props: P2,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = Ct(), r = ne("pagination"), l = la(), a = k(n.pageSize);
    Q(() => n.pageSizes, (u, d) => {
      if (!ir(u, d) && Array.isArray(u)) {
        const f = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", f);
      }
    }), Q(() => n.pageSize, (u) => {
      a.value = u;
    });
    const s = O(() => n.pageSizes);
    function i(u) {
      var d;
      u !== a.value && (a.value = u, (d = l.handleSizeChange) == null || d.call(l, Number(u)));
    }
    return (u, d) => (E(), B("span", {
      class: L(h(r).e("sizes"))
    }, [
      ee(h(Vu), {
        "model-value": a.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        "validate-event": !1,
        onChange: i
      }, {
        default: G(() => [
          (E(!0), B(Ve, null, vn(h(s), (f) => (E(), j(h(Wu), {
            key: f,
            value: f,
            label: f + h(o)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size"])
    ], 2));
  }
});
var R2 = /* @__PURE__ */ fe(I2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const B2 = Ce({
  size: {
    type: String,
    values: No
  }
}), z2 = ["disabled"], F2 = Y({
  name: "ElPaginationJumper"
}), D2 = /* @__PURE__ */ Y({
  ...F2,
  props: B2,
  setup(e) {
    const { t } = Ct(), n = ne("pagination"), { pageCount: o, disabled: r, currentPage: l, changeEvent: a } = la(), s = k(), i = O(() => {
      var f;
      return (f = s.value) != null ? f : l == null ? void 0 : l.value;
    });
    function u(f) {
      s.value = +f;
    }
    function d(f) {
      f = Math.trunc(+f), a == null || a(+f), s.value = void 0;
    }
    return (f, v) => (E(), B("span", {
      class: L(h(n).e("jump")),
      disabled: h(r)
    }, [
      z("span", {
        class: L([h(n).e("goto")])
      }, ce(h(t)("el.pagination.goto")), 3),
      ee(h(Ro), {
        size: f.size,
        class: L([h(n).e("editor"), h(n).is("in-pagination")]),
        min: 1,
        max: h(o),
        disabled: h(r),
        "model-value": h(i),
        "validate-event": !1,
        type: "number",
        "onUpdate:modelValue": u,
        onChange: d
      }, null, 8, ["size", "class", "max", "disabled", "model-value"]),
      z("span", {
        class: L([h(n).e("classifier")])
      }, ce(h(t)("el.pagination.pageClassifier")), 3)
    ], 10, z2));
  }
});
var H2 = /* @__PURE__ */ fe(D2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const V2 = Ce({
  total: {
    type: Number,
    default: 1e3
  }
}), W2 = ["disabled"], j2 = Y({
  name: "ElPaginationTotal"
}), K2 = /* @__PURE__ */ Y({
  ...j2,
  props: V2,
  setup(e) {
    const { t } = Ct(), n = ne("pagination"), { disabled: o } = la();
    return (r, l) => (E(), B("span", {
      class: L(h(n).e("total")),
      disabled: h(o)
    }, ce(h(t)("el.pagination.total", {
      total: r.total
    })), 11, W2));
  }
});
var U2 = /* @__PURE__ */ fe(K2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const G2 = Ce({
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
}), q2 = ["onKeyup"], Y2 = ["aria-current", "tabindex"], Q2 = ["tabindex"], X2 = ["aria-current", "tabindex"], Z2 = ["tabindex"], J2 = ["aria-current", "tabindex"], eC = Y({
  name: "ElPaginationPager"
}), tC = /* @__PURE__ */ Y({
  ...eC,
  props: G2,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = ne("pager"), r = ne("icon"), l = k(!1), a = k(!1), s = k(!1), i = k(!1), u = k(!1), d = k(!1), f = O(() => {
      const m = n.pagerCount, w = (m - 1) / 2, y = Number(n.currentPage), C = Number(n.pageCount);
      let _ = !1, T = !1;
      C > m && (y > m - w && (_ = !0), y < C - w && (T = !0));
      const S = [];
      if (_ && !T) {
        const x = C - (m - 2);
        for (let N = x; N < C; N++)
          S.push(N);
      } else if (!_ && T)
        for (let x = 2; x < m; x++)
          S.push(x);
      else if (_ && T) {
        const x = Math.floor(m / 2) - 1;
        for (let N = y - x; N <= y + x; N++)
          S.push(N);
      } else
        for (let x = 2; x < C; x++)
          S.push(x);
      return S;
    }), v = O(() => n.disabled ? -1 : 0);
    Nn(() => {
      const m = (n.pagerCount - 1) / 2;
      l.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - m && (l.value = !0), n.currentPage < n.pageCount - m && (a.value = !0));
    });
    function p(m = !1) {
      n.disabled || (m ? s.value = !0 : i.value = !0);
    }
    function c(m = !1) {
      m ? u.value = !0 : d.value = !0;
    }
    function g(m) {
      const w = m.target;
      if (w.tagName.toLowerCase() === "li" && Array.from(w.classList).includes("number")) {
        const y = Number(w.textContent);
        y !== n.currentPage && t("change", y);
      } else
        w.tagName.toLowerCase() === "li" && Array.from(w.classList).includes("more") && b(m);
    }
    function b(m) {
      const w = m.target;
      if (w.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let y = Number(w.textContent);
      const C = n.pageCount, _ = n.currentPage, T = n.pagerCount - 2;
      w.className.includes("more") && (w.className.includes("quickprev") ? y = _ - T : w.className.includes("quicknext") && (y = _ + T)), Number.isNaN(+y) || (y < 1 && (y = 1), y > C && (y = C)), y !== _ && t("change", y);
    }
    return (m, w) => (E(), B("ul", {
      class: L(h(o).b()),
      onClick: b,
      onKeyup: Le(g, ["enter"])
    }, [
      m.pageCount > 0 ? (E(), B("li", {
        key: 0,
        class: L([[
          h(o).is("active", m.currentPage === 1),
          h(o).is("disabled", m.disabled)
        ], "number"]),
        "aria-current": m.currentPage === 1,
        tabindex: h(v)
      }, " 1 ", 10, Y2)) : U("v-if", !0),
      l.value ? (E(), B("li", {
        key: 1,
        class: L([
          "more",
          "btn-quickprev",
          h(r).b(),
          h(o).is("disabled", m.disabled)
        ]),
        tabindex: h(v),
        onMouseenter: w[0] || (w[0] = (y) => p(!0)),
        onMouseleave: w[1] || (w[1] = (y) => s.value = !1),
        onFocus: w[2] || (w[2] = (y) => c(!0)),
        onBlur: w[3] || (w[3] = (y) => u.value = !1)
      }, [
        (s.value || u.value) && !m.disabled ? (E(), j(h(Mg), { key: 0 })) : (E(), j(h(Qa), { key: 1 }))
      ], 42, Q2)) : U("v-if", !0),
      (E(!0), B(Ve, null, vn(h(f), (y) => (E(), B("li", {
        key: y,
        class: L([[
          h(o).is("active", m.currentPage === y),
          h(o).is("disabled", m.disabled)
        ], "number"]),
        "aria-current": m.currentPage === y,
        tabindex: h(v)
      }, ce(y), 11, X2))), 128)),
      a.value ? (E(), B("li", {
        key: 2,
        class: L([
          "more",
          "btn-quicknext",
          h(r).b(),
          h(o).is("disabled", m.disabled)
        ]),
        tabindex: h(v),
        onMouseenter: w[4] || (w[4] = (y) => p()),
        onMouseleave: w[5] || (w[5] = (y) => i.value = !1),
        onFocus: w[6] || (w[6] = (y) => c()),
        onBlur: w[7] || (w[7] = (y) => d.value = !1)
      }, [
        (i.value || d.value) && !m.disabled ? (E(), j(h(Dg), { key: 0 })) : (E(), j(h(Qa), { key: 1 }))
      ], 42, Z2)) : U("v-if", !0),
      m.pageCount > 1 ? (E(), B("li", {
        key: 3,
        class: L([[
          h(o).is("active", m.currentPage === m.pageCount),
          h(o).is("disabled", m.disabled)
        ], "number"]),
        "aria-current": m.currentPage === m.pageCount,
        tabindex: h(v)
      }, ce(m.pageCount), 11, J2)) : U("v-if", !0)
    ], 42, q2));
  }
});
var nC = /* @__PURE__ */ fe(tC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const Qe = (e) => typeof e != "number", oC = Ce({
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => me(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: ue(Array),
    default: () => kr([10, 20, 30, 40, 50, 100])
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
    type: kt,
    default: () => Yh
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: kt,
    default: () => Fl
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), rC = {
  "update:current-page": (e) => me(e),
  "update:page-size": (e) => me(e),
  "size-change": (e) => me(e),
  "current-change": (e) => me(e),
  "prev-click": (e) => me(e),
  "next-click": (e) => me(e)
}, zs = "ElPagination";
var lC = Y({
  name: zs,
  props: oC,
  emits: rC,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = Ct(), r = ne("pagination"), l = Ee().vnode.props || {}, a = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, s = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = O(() => {
      if (Qe(e.total) && Qe(e.pageCount) || !Qe(e.currentPage) && !a)
        return !1;
      if (e.layout.includes("sizes")) {
        if (Qe(e.pageCount)) {
          if (!Qe(e.total) && !Qe(e.pageSize) && !s)
            return !1;
        } else if (!s)
          return !1;
      }
      return !0;
    }), u = k(Qe(e.defaultPageSize) ? 10 : e.defaultPageSize), d = k(Qe(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), f = O({
      get() {
        return Qe(e.pageSize) ? u.value : e.pageSize;
      },
      set(y) {
        Qe(e.pageSize) && (u.value = y), s && (t("update:page-size", y), t("size-change", y));
      }
    }), v = O(() => {
      let y = 0;
      return Qe(e.pageCount) ? Qe(e.total) || (y = Math.max(1, Math.ceil(e.total / f.value))) : y = e.pageCount, y;
    }), p = O({
      get() {
        return Qe(e.currentPage) ? d.value : e.currentPage;
      },
      set(y) {
        let C = y;
        y < 1 ? C = 1 : y > v.value && (C = v.value), Qe(e.currentPage) && (d.value = C), a && (t("update:current-page", C), t("current-change", C));
      }
    });
    Q(v, (y) => {
      p.value > y && (p.value = y);
    });
    function c(y) {
      p.value = y;
    }
    function g(y) {
      f.value = y;
      const C = v.value;
      p.value > C && (p.value = C);
    }
    function b() {
      e.disabled || (p.value -= 1, t("prev-click", p.value));
    }
    function m() {
      e.disabled || (p.value += 1, t("next-click", p.value));
    }
    function w(y, C) {
      y && (y.props || (y.props = {}), y.props.class = [y.props.class, C].join(" "));
    }
    return rt(Vi, {
      pageCount: v,
      disabled: O(() => e.disabled),
      currentPage: p,
      changeEvent: c,
      handleSizeChange: g
    }), () => {
      var y, C;
      if (!i.value)
        return Ne(zs, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && v.value <= 1)
        return null;
      const _ = [], T = [], S = te("div", { class: r.e("rightwrapper") }, T), x = {
        prev: te(d2, {
          disabled: e.disabled,
          currentPage: p.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: b
        }),
        jumper: te(H2, {
          size: e.small ? "small" : "default"
        }),
        pager: te(nC, {
          currentPage: p.value,
          pageCount: v.value,
          pagerCount: e.pagerCount,
          onChange: c,
          disabled: e.disabled
        }),
        next: te(m2, {
          disabled: e.disabled,
          currentPage: p.value,
          pageCount: v.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: m
        }),
        sizes: te(R2, {
          pageSize: f.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (C = (y = n == null ? void 0 : n.default) == null ? void 0 : y.call(n)) != null ? C : null,
        total: te(U2, { total: Qe(e.total) ? 0 : e.total })
      }, N = e.layout.split(",").map((W) => W.trim());
      let F = !1;
      return N.forEach((W) => {
        if (W === "->") {
          F = !0;
          return;
        }
        F ? T.push(x[W]) : _.push(x[W]);
      }), w(_[0], r.is("first")), w(_[_.length - 1], r.is("last")), F && T.length > 0 && (w(T[0], r.is("first")), w(T[T.length - 1], r.is("last")), _.push(S)), te("div", {
        role: "pagination",
        "aria-label": "pagination",
        class: [
          r.b(),
          r.is("background", e.background),
          {
            [r.m("small")]: e.small
          }
        ]
      }, _);
    };
  }
});
const aC = st(lC);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var sC = /["'&<>]/, iC = uC;
function uC(e) {
  var t = "" + e, n = sC.exec(t);
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
const Kr = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, cC = function(e, t, n, o, r) {
  if (!t && !o && (!r || Array.isArray(r) && !r.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = o ? null : function(s, i) {
    return r ? (Array.isArray(r) || (r = [r]), r.map((u) => typeof u == "string" ? Ge(s, u) : u(s, i, e))) : (t !== "$key" && at(s) && "$value" in s && (s = s.$value), [at(s) ? Ge(s, t) : s]);
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
}, ju = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, dC = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const r = e.columns[o];
    if (r.columnKey === t) {
      n = r;
      break;
    }
  }
  return n || Er("ElTable", `No column matching with column-key: ${t}`), n;
}, Fs = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? ju(e, o[0]) : null;
}, je = (e, t) => {
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
}, An = function(e, t) {
  const n = {};
  return (e || []).forEach((o, r) => {
    n[je(o, t)] = { row: o, index: r };
  }), n;
};
function fC(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (en(t, o)) {
      const r = t[o];
      typeof r < "u" && (n[o] = r);
    }
  return n;
}
function aa(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function Ku(e) {
  return e === "" || e !== void 0 && (e = aa(e), Number.isNaN(e) && (e = 80)), e;
}
function pC(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function vC(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function yo(e, t, n) {
  let o = !1;
  const r = e.indexOf(t), l = r !== -1, a = (s) => {
    s === "add" ? e.push(t) : e.splice(r, 1), o = !0, gn(t.children) && t.children.forEach((i) => {
      yo(e, i, n ?? !l);
    });
  };
  return Qn(n) ? n && !l ? a("add") : !n && l && a("remove") : a(l ? "remove" : "add"), o;
}
function hC(e, t, n = "children", o = "hasChildren") {
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
let Gt;
function gC(e, t, n, o) {
  o = Ti({
    enterable: !0,
    showArrow: !0
  }, o);
  const { nextZIndex: r } = Io(), l = e == null ? void 0 : e.dataset.prefix, a = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function s() {
    const b = o.effect === "light", m = document.createElement("div");
    return m.className = [
      `${l}-popper`,
      b ? "is-light" : "is-dark",
      o.popperClass || ""
    ].join(" "), n = iC(n), m.innerHTML = n, m.style.zIndex = String(r()), e == null || e.appendChild(m), m;
  }
  function i() {
    const b = document.createElement("div");
    return b.className = `${l}-popper__arrow`, b;
  }
  function u() {
    d && d.update();
  }
  Gt == null || Gt(), Gt = () => {
    try {
      d && d.destroy(), p && (e == null || e.removeChild(p)), t.removeEventListener("mouseenter", f), t.removeEventListener("mouseleave", v), a == null || a.removeEventListener("scroll", Gt), Gt = void 0;
    } catch {
    }
  };
  let d = null, f = u, v = Gt;
  o.enterable && ({ onOpen: f, onClose: v } = du({
    showAfter: o.showAfter,
    hideAfter: o.hideAfter,
    open: u,
    close: Gt
  }));
  const p = s();
  p.onmouseenter = f, p.onmouseleave = v;
  const c = [];
  if (o.offset && c.push({
    name: "offset",
    options: {
      offset: [0, o.offset]
    }
  }), o.showArrow) {
    const b = p.appendChild(i());
    c.push({
      name: "arrow",
      options: {
        element: b,
        padding: 10
      }
    });
  }
  const g = o.popperOptions || {};
  return d = iu(t, p, {
    placement: o.placement || "top",
    strategy: "fixed",
    ...g,
    modifiers: g.modifiers ? c.concat(g.modifiers) : c
  }), t.addEventListener("mouseenter", f), t.addEventListener("mouseleave", v), a == null || a.addEventListener("scroll", Gt), d;
}
function Uu(e) {
  return e.children ? Qv(e.children, Uu) : [e];
}
function Ds(e, t) {
  return e + t.colSpan;
}
const Gu = (e, t, n, o) => {
  let r = 0, l = e;
  const a = n.states.columns.value;
  if (o) {
    const i = Uu(o[e]);
    r = a.slice(0, a.indexOf(i[0])).reduce(Ds, 0), l = r + i.reduce(Ds, 0) - 1;
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
}, sa = (e, t, n, o, r, l = 0) => {
  const a = [], { direction: s, start: i, after: u } = Gu(t, n, o, r);
  if (s) {
    const d = s === "left";
    a.push(`${e}-fixed-column--${s}`), d && u + l === o.states.fixedLeafColumnsLength.value - 1 ? a.push("is-last-column") : !d && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && a.push("is-first-column");
  }
  return a;
};
function Hs(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const ia = (e, t, n, o) => {
  const {
    direction: r,
    start: l = 0,
    after: a = 0
  } = Gu(e, t, n, o);
  if (!r)
    return;
  const s = {}, i = r === "left", u = n.states.columns.value;
  return i ? s.left = u.slice(0, l).reduce(Hs, 0) : s.right = u.slice(a + 1).reverse().reduce(Hs, 0), s;
}, no = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function mC(e) {
  const t = Ee(), n = k(!1), o = k([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const d = An(o.value, u);
        o.value = i.reduce((f, v) => {
          const p = je(v, u);
          return d[p] && f.push(v), f;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      yo(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], d = e.rowKey.value, f = An(u, d);
      o.value = i.reduce((v, p) => {
        const c = f[p];
        return c && v.push(c.row), v;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!An(o.value, u)[je(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function bC(e) {
  const t = Ee(), n = k(null), o = k(null), r = (u) => {
    t.store.assertRowKey(), n.value = u, a(u);
  }, l = () => {
    n.value = null;
  }, a = (u) => {
    const { data: d, rowKey: f } = e;
    let v = null;
    f.value && (v = (h(d) || []).find((p) => je(p, f.value) === u)), o.value = v, t.emit("current-change", o.value, null);
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
          const v = je(f, u);
          a(v);
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
function yC(e) {
  const t = k([]), n = k({}), o = k(16), r = k(!1), l = k({}), a = k("hasChildren"), s = k("children"), i = Ee(), u = O(() => {
    if (!e.rowKey.value)
      return {};
    const m = e.data.value || [];
    return f(m);
  }), d = O(() => {
    const m = e.rowKey.value, w = Object.keys(l.value), y = {};
    return w.length && w.forEach((C) => {
      if (l.value[C].length) {
        const _ = { children: [] };
        l.value[C].forEach((T) => {
          const S = je(T, m);
          _.children.push(S), T[a.value] && !y[S] && (y[S] = { children: [] });
        }), y[C] = _;
      }
    }), y;
  }), f = (m) => {
    const w = e.rowKey.value, y = {};
    return hC(m, (C, _, T) => {
      const S = je(C, w);
      Array.isArray(_) ? y[S] = {
        children: _.map((x) => je(x, w)),
        level: T
      } : r.value && (y[S] = {
        children: [],
        lazy: !0,
        level: T
      });
    }, s.value, a.value), y;
  }, v = (m = !1, w = ((y) => (y = i.store) == null ? void 0 : y.states.defaultExpandAll.value)()) => {
    var y;
    const C = u.value, _ = d.value, T = Object.keys(C), S = {};
    if (T.length) {
      const x = h(n), N = [], F = (K, A) => {
        if (m)
          return t.value ? w || t.value.includes(A) : !!(w || K != null && K.expanded);
        {
          const M = w || t.value && t.value.includes(A);
          return !!(K != null && K.expanded || M);
        }
      };
      T.forEach((K) => {
        const A = x[K], M = { ...C[K] };
        if (M.expanded = F(A, K), M.lazy) {
          const { loaded: P = !1, loading: D = !1 } = A || {};
          M.loaded = !!P, M.loading = !!D, N.push(K);
        }
        S[K] = M;
      });
      const W = Object.keys(_);
      r.value && W.length && N.length && W.forEach((K) => {
        const A = x[K], M = _[K].children;
        if (N.includes(K)) {
          if (S[K].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          S[K].children = M;
        } else {
          const { loaded: P = !1, loading: D = !1 } = A || {};
          S[K] = {
            lazy: !0,
            loaded: !!P,
            loading: !!D,
            expanded: F(A, K),
            children: M,
            level: ""
          };
        }
      });
    }
    n.value = S, (y = i.store) == null || y.updateTableScrollY();
  };
  Q(() => t.value, () => {
    v(!0);
  }), Q(() => u.value, () => {
    v();
  }), Q(() => d.value, () => {
    v();
  });
  const p = (m) => {
    t.value = m, v();
  }, c = (m, w) => {
    i.store.assertRowKey();
    const y = e.rowKey.value, C = je(m, y), _ = C && n.value[C];
    if (C && _ && "expanded" in _) {
      const T = _.expanded;
      w = typeof w > "u" ? !_.expanded : w, n.value[C].expanded = w, T !== w && i.emit("expand-change", m, w), i.store.updateTableScrollY();
    }
  }, g = (m) => {
    i.store.assertRowKey();
    const w = e.rowKey.value, y = je(m, w), C = n.value[y];
    r.value && C && "loaded" in C && !C.loaded ? b(m, y, C) : c(m, void 0);
  }, b = (m, w, y) => {
    const { load: C } = i.props;
    C && !n.value[w].loaded && (n.value[w].loading = !0, C(m, y, (_) => {
      if (!Array.isArray(_))
        throw new TypeError("[ElTable] data must be an array");
      n.value[w].loading = !1, n.value[w].loaded = !0, n.value[w].expanded = !0, _.length && (l.value[w] = _), i.emit("expand-change", m, !0);
    }));
  };
  return {
    loadData: b,
    loadOrToggle: g,
    toggleTreeExpansion: c,
    updateTreeExpandKeys: p,
    updateTreeData: v,
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
const wC = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : cC(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, tr = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? t.push.apply(t, tr(n.children)) : t.push(n);
  }), t;
};
function CC() {
  var e;
  const t = Ee(), { size: n } = Fn((e = t.proxy) == null ? void 0 : e.$props), o = k(null), r = k([]), l = k([]), a = k(!1), s = k([]), i = k([]), u = k([]), d = k([]), f = k([]), v = k([]), p = k([]), c = k([]), g = k(0), b = k(0), m = k(0), w = k(!1), y = k([]), C = k(!1), _ = k(!1), T = k(null), S = k({}), x = k(null), N = k(null), F = k(null), W = k(null), K = k(null);
  Q(r, () => t.state && D(!1), {
    deep: !0
  });
  const A = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, M = (Z) => {
    var ae;
    (ae = Z.children) == null || ae.forEach((de) => {
      de.fixed = Z.fixed, M(de);
    });
  }, P = () => {
    s.value.forEach((R) => {
      M(R);
    }), d.value = s.value.filter((R) => R.fixed === !0 || R.fixed === "left"), f.value = s.value.filter((R) => R.fixed === "right"), d.value.length > 0 && s.value[0] && s.value[0].type === "selection" && !s.value[0].fixed && (s.value[0].fixed = !0, d.value.unshift(s.value[0]));
    const Z = s.value.filter((R) => !R.fixed);
    i.value = [].concat(d.value).concat(Z).concat(f.value);
    const ae = tr(Z), de = tr(d.value), $ = tr(f.value);
    g.value = ae.length, b.value = de.length, m.value = $.length, u.value = [].concat(de).concat(ae).concat($), a.value = d.value.length > 0 || f.value.length > 0;
  }, D = (Z, ae = !1) => {
    Z && P(), ae ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, q = (Z) => y.value.includes(Z), H = () => {
    w.value = !1, y.value.length && (y.value = [], t.emit("selection-change", []));
  }, I = () => {
    let Z;
    if (o.value) {
      Z = [];
      const ae = An(y.value, o.value), de = An(r.value, o.value);
      for (const $ in ae)
        en(ae, $) && !de[$] && Z.push(ae[$].row);
    } else
      Z = y.value.filter((ae) => !r.value.includes(ae));
    if (Z.length) {
      const ae = y.value.filter((de) => !Z.includes(de));
      y.value = ae, t.emit("selection-change", ae.slice());
    }
  }, X = () => (y.value || []).slice(), le = (Z, ae = void 0, de = !0) => {
    if (yo(y.value, Z, ae)) {
      const R = (y.value || []).slice();
      de && t.emit("select", R, Z), t.emit("selection-change", R);
    }
  }, ge = () => {
    var Z, ae;
    const de = _.value ? !w.value : !(w.value || y.value.length);
    w.value = de;
    let $ = !1, R = 0;
    const J = (ae = (Z = t == null ? void 0 : t.store) == null ? void 0 : Z.states) == null ? void 0 : ae.rowKey.value;
    r.value.forEach((oe, xe) => {
      const De = xe + R;
      T.value ? T.value.call(null, oe, De) && yo(y.value, oe, de) && ($ = !0) : yo(y.value, oe, de) && ($ = !0), R += ie(je(oe, J));
    }), $ && t.emit("selection-change", y.value ? y.value.slice() : []), t.emit("select-all", y.value);
  }, Se = () => {
    const Z = An(y.value, o.value);
    r.value.forEach((ae) => {
      const de = je(ae, o.value), $ = Z[de];
      $ && (y.value[$.index] = ae);
    });
  }, ye = () => {
    var Z, ae, de;
    if (((Z = r.value) == null ? void 0 : Z.length) === 0) {
      w.value = !1;
      return;
    }
    let $;
    o.value && ($ = An(y.value, o.value));
    const R = function(De) {
      return $ ? !!$[je(De, o.value)] : y.value.includes(De);
    };
    let J = !0, oe = 0, xe = 0;
    for (let De = 0, Pt = (r.value || []).length; De < Pt; De++) {
      const St = (de = (ae = t == null ? void 0 : t.store) == null ? void 0 : ae.states) == null ? void 0 : de.rowKey.value, Je = De + xe, an = r.value[De], ft = T.value && T.value.call(null, an, Je);
      if (R(an))
        oe++;
      else if (!T.value || ft) {
        J = !1;
        break;
      }
      xe += ie(je(an, St));
    }
    oe === 0 && (J = !1), w.value = J;
  }, ie = (Z) => {
    var ae;
    if (!t || !t.store)
      return 0;
    const { treeData: de } = t.store.states;
    let $ = 0;
    const R = (ae = de.value[Z]) == null ? void 0 : ae.children;
    return R && ($ += R.length, R.forEach((J) => {
      $ += ie(J);
    })), $;
  }, _e = (Z, ae) => {
    Array.isArray(Z) || (Z = [Z]);
    const de = {};
    return Z.forEach(($) => {
      S.value[$.id] = ae, de[$.columnKey || $.id] = ae;
    }), de;
  }, $e = (Z, ae, de) => {
    N.value && N.value !== Z && (N.value.order = null), N.value = Z, F.value = ae, W.value = de;
  }, pe = () => {
    let Z = h(l);
    Object.keys(S.value).forEach((ae) => {
      const de = S.value[ae];
      if (!de || de.length === 0)
        return;
      const $ = ju({
        columns: u.value
      }, ae);
      $ && $.filterMethod && (Z = Z.filter((R) => de.some((J) => $.filterMethod.call(null, J, R, $))));
    }), x.value = Z;
  }, Re = () => {
    r.value = wC(x.value, {
      sortingColumn: N.value,
      sortProp: F.value,
      sortOrder: W.value
    });
  }, Xe = (Z = void 0) => {
    Z && Z.filter || pe(), Re();
  }, gt = (Z) => {
    const { tableHeaderRef: ae } = t.refs;
    if (!ae)
      return;
    const de = Object.assign({}, ae.filterPanels), $ = Object.keys(de);
    if ($.length)
      if (typeof Z == "string" && (Z = [Z]), Array.isArray(Z)) {
        const R = Z.map((J) => dC({
          columns: u.value
        }, J));
        $.forEach((J) => {
          const oe = R.find((xe) => xe.id === J);
          oe && (oe.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: R,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        $.forEach((R) => {
          const J = u.value.find((oe) => oe.id === R);
          J && (J.filteredValue = []);
        }), S.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, Ze = () => {
    N.value && ($e(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: it,
    toggleRowExpansion: At,
    updateExpandRows: Nt,
    states: ut,
    isRowExpanded: Lt
  } = mC({
    data: r,
    rowKey: o
  }), {
    updateTreeExpandKeys: Wt,
    toggleTreeExpansion: Ye,
    updateTreeData: Ue,
    loadOrToggle: ct,
    states: V
  } = yC({
    data: r,
    rowKey: o
  }), {
    updateCurrentRowData: he,
    updateCurrentRow: Fe,
    setCurrentRowKey: dt,
    states: jt
  } = bC({
    data: r,
    rowKey: o
  });
  return {
    assertRowKey: A,
    updateColumns: P,
    scheduleLayout: D,
    isSelected: q,
    clearSelection: H,
    cleanSelection: I,
    getSelectionRows: X,
    toggleRowSelection: le,
    _toggleAllSelection: ge,
    toggleAllSelection: null,
    updateSelectionByRowKey: Se,
    updateAllSelected: ye,
    updateFilters: _e,
    updateCurrentRow: Fe,
    updateSort: $e,
    execFilter: pe,
    execSort: Re,
    execQuery: Xe,
    clearFilter: gt,
    clearSort: Ze,
    toggleRowExpansion: At,
    setExpandRowKeysAdapter: (Z) => {
      it(Z), Wt(Z);
    },
    setCurrentRowKey: dt,
    toggleRowExpansionAdapter: (Z, ae) => {
      u.value.some(({ type: $ }) => $ === "expand") ? At(Z, ae) : Ye(Z, ae);
    },
    isRowExpanded: Lt,
    updateExpandRows: Nt,
    updateCurrentRowData: he,
    loadOrToggle: ct,
    updateTreeData: Ue,
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
      leafColumns: v,
      fixedLeafColumns: p,
      rightFixedLeafColumns: c,
      leafColumnsLength: g,
      fixedLeafColumnsLength: b,
      rightFixedLeafColumnsLength: m,
      isAllSelected: w,
      selection: y,
      reserveSelection: C,
      selectOnIndeterminate: _,
      selectable: T,
      filters: S,
      filteredData: x,
      sortingColumn: N,
      sortProp: F,
      sortOrder: W,
      hoverRow: K,
      ...ut,
      ...V,
      ...jt
    }
  };
}
function yl(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = yl(n.children, t)), n);
  });
}
function qu(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && qu(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function SC() {
  const e = Ee(), t = CC();
  return {
    ns: ne("table"),
    ...t,
    mutations: {
      setData(a, s) {
        const i = h(a._data) !== s;
        a.data.value = s, a._data.value = s, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), h(a.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(a, s, i) {
        const u = h(a._columns);
        let d = [];
        i ? (i && !i.children && (i.children = []), i.children.push(s), d = yl(u, i)) : (u.push(s), d = u), qu(d), a._columns.value = d, s.type === "selection" && (a.selectable.value = s.selectable, a.reserveSelection.value = s.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      removeColumn(a, s, i) {
        const u = h(a._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((d) => d.id === s.id), 1), se(() => {
            var d;
            ((d = i.children) == null ? void 0 : d.length) === 0 && delete i.children;
          }), a._columns.value = yl(u, i);
        else {
          const d = u.indexOf(s);
          d > -1 && (u.splice(d, 1), a._columns.value = u);
        }
        e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(a, s) {
        const { prop: i, order: u, init: d } = s;
        if (i) {
          const f = h(a.columns).find((v) => v.property === i);
          f && (f.order = u, e.store.updateSort(f, i, u), e.store.commit("changeSortCondition", { init: d }));
        }
      },
      changeSortCondition(a, s) {
        const { sortingColumn: i, sortProp: u, sortOrder: d } = a, f = h(i), v = h(u), p = h(d);
        p === null && (a.sortingColumn.value = null, a.sortProp.value = null);
        const c = { filter: !0 };
        e.store.execQuery(c), (!s || !(s.silent || s.init)) && e.emit("sort-change", {
          column: f,
          prop: v,
          order: p
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
      se(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const wo = {
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
function EC(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = SC();
  return n.toggleAllSelection = In(n._toggleAllSelection, 10), Object.keys(wo).forEach((o) => {
    Yu(Qu(t, o), o, n);
  }), _C(n, t), n;
}
function _C(e, t) {
  Object.keys(wo).forEach((n) => {
    Q(() => Qu(t, n), (o) => {
      Yu(o, n, e);
    });
  });
}
function Yu(e, t, n) {
  let o = e, r = wo[t];
  typeof wo[t] == "object" && (r = r.key, o = o || wo[t].default), n.states[r].value = o;
}
function Qu(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((r) => {
      o = o[r];
    }), o;
  } else
    return e[t];
}
class TC {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = k(null), this.scrollX = k(!1), this.scrollY = k(!1), this.bodyWidth = k(null), this.fixedWidth = k(null), this.rightFixedWidth = k(null), this.gutterWidth = 0;
    for (const n in t)
      en(t, n) && (Ft(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
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
    if (!be)
      return;
    const o = this.table.vnode.el;
    if (t = pC(t), this.height.value = Number(t), !o && (t || t === 0))
      return se(() => this.setHeight(t, n));
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
    if (!be)
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
          const u = l.reduce((v, p) => v + Number(p.minWidth || 80), 0), d = i / u;
          let f = 0;
          l.forEach((v, p) => {
            if (p === 0)
              return;
            const c = Math.floor(Number(v.minWidth || 80) * d);
            f += c, v.realWidth = Number(v.minWidth || 80) + c;
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
const { CheckboxGroup: $C } = zn, kC = Y({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: zn,
    ElCheckboxGroup: $C,
    ElScrollbar: ea,
    ElTooltip: Cu,
    ElIcon: Pe,
    ArrowDown: zl,
    ArrowUp: Ni
  },
  directives: { ClickOutside: Tu },
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
    const t = Ee(), { t: n } = Ct(), o = ne("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const l = k(!1), a = k(null), s = O(() => e.column && e.column.filters), i = O({
      get: () => {
        var C;
        return (((C = e.column) == null ? void 0 : C.filteredValue) || [])[0];
      },
      set: (C) => {
        u.value && (typeof C < "u" && C !== null ? u.value.splice(0, 1, C) : u.value.splice(0, 1));
      }
    }), u = O({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(C) {
        e.column && e.upDataColumn("filteredValue", C);
      }
    }), d = O(() => e.column ? e.column.filterMultiple : !0), f = (C) => C.value === i.value, v = () => {
      l.value = !1;
    }, p = (C) => {
      C.stopPropagation(), l.value = !l.value;
    }, c = () => {
      l.value = !1;
    }, g = () => {
      w(u.value), v();
    }, b = () => {
      u.value = [], w(u.value), v();
    }, m = (C) => {
      i.value = C, w(typeof C < "u" && C !== null ? u.value : []), v();
    }, w = (C) => {
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
    const y = O(() => {
      var C, _;
      return (_ = (C = a.value) == null ? void 0 : C.popperRef) == null ? void 0 : _.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: d,
      filteredValue: u,
      filterValue: i,
      filters: s,
      handleConfirm: g,
      handleReset: b,
      handleSelect: m,
      isActive: f,
      t: n,
      ns: o,
      showFilterPanel: p,
      hideFilterPanel: c,
      popperPaneRef: y,
      tooltip: a
    };
  }
}), OC = { key: 0 }, xC = ["disabled"], AC = ["label", "onClick"];
function NC(e, t, n, o, r, l) {
  const a = Oe("el-checkbox"), s = Oe("el-checkbox-group"), i = Oe("el-scrollbar"), u = Oe("arrow-up"), d = Oe("arrow-down"), f = Oe("el-icon"), v = Oe("el-tooltip"), p = Tl("click-outside");
  return E(), j(v, {
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
    content: G(() => [
      e.multiple ? (E(), B("div", OC, [
        z("div", {
          class: L(e.ns.e("content"))
        }, [
          ee(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: G(() => [
              ee(s, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => e.filteredValue = c),
                class: L(e.ns.e("checkbox-group"))
              }, {
                default: G(() => [
                  (E(!0), B(Ve, null, vn(e.filters, (c) => (E(), j(a, {
                    key: c.value,
                    label: c.value
                  }, {
                    default: G(() => [
                      Xt(ce(c.text), 1)
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
        z("div", {
          class: L(e.ns.e("bottom"))
        }, [
          z("button", {
            class: L({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...c) => e.handleConfirm && e.handleConfirm(...c))
          }, ce(e.t("el.table.confirmFilter")), 11, xC),
          z("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...c) => e.handleReset && e.handleReset(...c))
          }, ce(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (E(), B("ul", {
        key: 1,
        class: L(e.ns.e("list"))
      }, [
        z("li", {
          class: L([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (c) => e.handleSelect(null))
        }, ce(e.t("el.table.clearFilter")), 3),
        (E(!0), B(Ve, null, vn(e.filters, (c) => (E(), B("li", {
          key: c.value,
          class: L([e.ns.e("list-item"), e.ns.is("active", e.isActive(c))]),
          label: c.value,
          onClick: (g) => e.handleSelect(c.value)
        }, ce(c.text), 11, AC))), 128))
      ], 2))
    ]),
    default: G(() => [
      we((E(), B("span", {
        class: L([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...c) => e.showFilterPanel && e.showFilterPanel(...c))
      }, [
        ee(f, null, {
          default: G(() => [
            e.column.filterOpened ? (E(), j(u, { key: 0 })) : (E(), j(d, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [p, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var LC = /* @__PURE__ */ fe(kC, [["render", NC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function Xu(e) {
  const t = Ee();
  El(() => {
    n.value.addObserver(t);
  }), Ae(() => {
    o(n.value), r(n.value);
  }), _l(() => {
    o(n.value), r(n.value);
  }), Sl(() => {
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
      const v = s[d], p = v.getAttribute("name"), c = u[p];
      c && v.setAttribute("width", c.realWidth || c.width);
    }
  }, r = (l) => {
    var a, s;
    const i = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let d = 0, f = i.length; d < f; d++)
      i[d].setAttribute("width", l.scrollY.value ? l.gutterWidth : "0");
    const u = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("th.gutter")) || [];
    for (let d = 0, f = u.length; d < f; d++) {
      const v = u[d];
      v.style.width = l.scrollY.value ? `${l.gutterWidth}px` : "0", v.style.display = l.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: o,
    onScrollableChange: r
  };
}
const Vt = Symbol("ElTable");
function PC(e, t) {
  const n = Ee(), o = ve(Vt), r = (g) => {
    g.stopPropagation();
  }, l = (g, b) => {
    !b.filters && b.sortable ? c(g, b, !1) : b.filterable && !b.sortable && r(g), o == null || o.emit("header-click", b, g);
  }, a = (g, b) => {
    o == null || o.emit("header-contextmenu", b, g);
  }, s = k(null), i = k(!1), u = k({}), d = (g, b) => {
    if (be && !(b.children && b.children.length > 0) && s.value && e.border) {
      i.value = !0;
      const m = o;
      t("set-drag-visible", !0);
      const y = (m == null ? void 0 : m.vnode.el).getBoundingClientRect().left, C = n.vnode.el.querySelector(`th.${b.id}`), _ = C.getBoundingClientRect(), T = _.left - y + 30;
      _o(C, "noclick"), u.value = {
        startMouseLeft: g.clientX,
        startLeft: _.right - y,
        startColumnLeft: _.left - y,
        tableLeft: y
      };
      const S = m == null ? void 0 : m.refs.resizeProxy;
      S.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const x = (F) => {
        const W = F.clientX - u.value.startMouseLeft, K = u.value.startLeft + W;
        S.style.left = `${Math.max(T, K)}px`;
      }, N = () => {
        if (i.value) {
          const { startColumnLeft: F, startLeft: W } = u.value, A = Number.parseInt(S.style.left, 10) - F;
          b.width = b.realWidth = A, m == null || m.emit("header-dragend", b.width, W - F, b, g), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, s.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", N), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          bn(C, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", x), document.addEventListener("mouseup", N);
    }
  }, f = (g, b) => {
    var m;
    if (b.children && b.children.length > 0)
      return;
    const w = (m = g.target) == null ? void 0 : m.closest("th");
    if (!(!b || !b.resizable) && !i.value && e.border) {
      const y = w.getBoundingClientRect(), C = document.body.style;
      y.width > 12 && y.right - g.pageX < 8 ? (C.cursor = "col-resize", qn(w, "is-sortable") && (w.style.cursor = "col-resize"), s.value = b) : i.value || (C.cursor = "", qn(w, "is-sortable") && (w.style.cursor = "pointer"), s.value = null);
    }
  }, v = () => {
    be && (document.body.style.cursor = "");
  }, p = ({ order: g, sortOrders: b }) => {
    if (g === "")
      return b[0];
    const m = b.indexOf(g || null);
    return b[m > b.length - 2 ? 0 : m + 1];
  }, c = (g, b, m) => {
    var w;
    g.stopPropagation();
    const y = b.order === m ? null : m || p(b), C = (w = g.target) == null ? void 0 : w.closest("th");
    if (C && qn(C, "noclick")) {
      bn(C, "noclick");
      return;
    }
    if (!b.sortable)
      return;
    const _ = e.store.states;
    let T = _.sortProp.value, S;
    const x = _.sortingColumn.value;
    (x !== b || x === b && x.order === null) && (x && (x.order = null), _.sortingColumn.value = b, T = b.property), y ? S = b.order = y : S = b.order = null, _.sortProp.value = T, _.sortOrder.value = S, o == null || o.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: l,
    handleHeaderContextMenu: a,
    handleMouseDown: d,
    handleMouseMove: f,
    handleMouseOut: v,
    handleSortClick: c,
    handleFilterClick: r
  };
}
function MC(e) {
  const t = ve(Vt), n = ne("table");
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
      let v = (f = t == null ? void 0 : t.props.headerCellStyle) != null ? f : {};
      typeof v == "function" && (v = v.call(null, {
        rowIndex: s,
        columnIndex: i,
        row: u,
        column: d
      }));
      const p = ia(i, d.fixed, e.store, u);
      return no(p, "left"), no(p, "right"), Object.assign({}, v, p);
    },
    getHeaderCellClass: (s, i, u, d) => {
      const f = sa(n.b(), i, d.fixed, e.store, u), v = [
        d.id,
        d.order,
        d.headerAlign,
        d.className,
        d.labelClassName,
        ...f
      ];
      d.children || v.push("is-leaf"), d.sortable && v.push("is-sortable");
      const p = t == null ? void 0 : t.props.headerCellClassName;
      return typeof p == "string" ? v.push(p) : typeof p == "function" && v.push(p.call(null, {
        rowIndex: s,
        columnIndex: i,
        row: u,
        column: d
      })), v.push(n.e("cell")), v.filter((c) => Boolean(c)).join(" ");
    }
  };
}
const Zu = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Zu(n.children))) : t.push(n);
  }), t;
}, IC = (e) => {
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
  return Zu(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((a) => a.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function RC(e) {
  const t = ve(Vt), n = O(() => IC(e.store.states.originColumns.value));
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
var BC = Y({
  name: "ElTableHeader",
  components: {
    ElCheckbox: zn
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
    const n = Ee(), o = ve(Vt), r = ne("table"), l = k({}), { onColumnsChange: a, onScrollableChange: s } = Xu(o);
    Ae(async () => {
      await se(), await se();
      const { prop: T, order: S } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: T, order: S, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: d,
      handleMouseMove: f,
      handleMouseOut: v,
      handleSortClick: p,
      handleFilterClick: c
    } = PC(e, t), {
      getHeaderRowStyle: g,
      getHeaderRowClass: b,
      getHeaderCellStyle: m,
      getHeaderCellClass: w
    } = MC(e), { isGroup: y, toggleAllSelection: C, columnRows: _ } = RC(e);
    return n.state = {
      onColumnsChange: a,
      onScrollableChange: s
    }, n.filterPanels = l, {
      ns: r,
      filterPanels: l,
      onColumnsChange: a,
      onScrollableChange: s,
      columnRows: _,
      getHeaderRowClass: b,
      getHeaderRowStyle: g,
      getHeaderCellClass: w,
      getHeaderCellStyle: m,
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: d,
      handleMouseMove: f,
      handleMouseOut: v,
      handleSortClick: p,
      handleFilterClick: c,
      isGroup: y,
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
      handleMouseOut: v,
      store: p,
      $parent: c
    } = this;
    let g = 1;
    return te("thead", {
      class: { [e.is("group")]: t }
    }, n.map((b, m) => te("tr", {
      class: l(m),
      key: m,
      style: a(m)
    }, b.map((w, y) => (w.rowSpan > g && (g = w.rowSpan), te("th", {
      class: r(m, y, b, w),
      colspan: w.colSpan,
      key: `${w.id}-thead`,
      rowspan: w.rowSpan,
      style: o(m, y, b, w),
      onClick: (C) => s(C, w),
      onContextmenu: (C) => i(C, w),
      onMousedown: (C) => u(C, w),
      onMousemove: (C) => d(C, w),
      onMouseout: v
    }, [
      te("div", {
        class: [
          "cell",
          w.filteredValue && w.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        w.renderHeader ? w.renderHeader({
          column: w,
          $index: y,
          store: p,
          _self: c
        }) : w.label,
        w.sortable && te("span", {
          onClick: (C) => f(C, w),
          class: "caret-wrapper"
        }, [
          te("i", {
            onClick: (C) => f(C, w, "ascending"),
            class: "sort-caret ascending"
          }),
          te("i", {
            onClick: (C) => f(C, w, "descending"),
            class: "sort-caret descending"
          })
        ]),
        w.filterable && te(LC, {
          store: p,
          placement: w.filterPlacement || "bottom-start",
          column: w,
          upDataColumn: (C, _) => {
            w[C] = _;
          }
        })
      ])
    ]))))));
  }
});
function zC(e) {
  const t = ve(Vt), n = k(""), o = k(te("div")), r = (v, p, c) => {
    var g;
    const b = t, m = Kr(v);
    let w;
    const y = (g = b == null ? void 0 : b.vnode.el) == null ? void 0 : g.dataset.prefix;
    m && (w = Fs({
      columns: e.store.states.columns.value
    }, m, y), w && (b == null || b.emit(`cell-${c}`, p, w, m, v))), b == null || b.emit(`row-${c}`, p, w, v);
  }, l = (v, p) => {
    r(v, p, "dblclick");
  }, a = (v, p) => {
    e.store.commit("setCurrentRow", p), r(v, p, "click");
  }, s = (v, p) => {
    r(v, p, "contextmenu");
  }, i = In((v) => {
    e.store.commit("setHoverRow", v);
  }, 30), u = In(() => {
    e.store.commit("setHoverRow", null);
  }, 30);
  return {
    handleDoubleClick: l,
    handleClick: a,
    handleContextMenu: s,
    handleMouseEnter: i,
    handleMouseLeave: u,
    handleCellMouseEnter: (v, p, c) => {
      var g;
      const b = t, m = Kr(v), w = (g = b == null ? void 0 : b.vnode.el) == null ? void 0 : g.dataset.prefix;
      if (m) {
        const S = Fs({
          columns: e.store.states.columns.value
        }, m, w), x = b.hoverState = { cell: m, column: S, row: p };
        b == null || b.emit("cell-mouse-enter", x.row, x.column, x.cell, v);
      }
      if (!c)
        return;
      const y = v.target.querySelector(".cell");
      if (!(qn(y, `${w}-tooltip`) && y.childNodes.length))
        return;
      const C = document.createRange();
      C.setStart(y, 0), C.setEnd(y, y.childNodes.length);
      const _ = Math.round(C.getBoundingClientRect().width), T = (Number.parseInt(Yt(y, "paddingLeft"), 10) || 0) + (Number.parseInt(Yt(y, "paddingRight"), 10) || 0);
      (_ + T > y.offsetWidth || y.scrollWidth > y.offsetWidth) && gC(t == null ? void 0 : t.refs.tableWrapper, m, m.innerText || m.textContent, c);
    },
    handleCellMouseLeave: (v) => {
      if (!Kr(v))
        return;
      const c = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", c == null ? void 0 : c.row, c == null ? void 0 : c.column, c == null ? void 0 : c.cell, v);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function FC(e) {
  const t = ve(Vt), n = ne("table");
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
      const v = t == null ? void 0 : t.props.rowClassName;
      return typeof v == "string" ? f.push(v) : typeof v == "function" && f.push(v.call(null, {
        row: u,
        rowIndex: d
      })), f;
    },
    getCellStyle: (u, d, f, v) => {
      const p = t == null ? void 0 : t.props.cellStyle;
      let c = p ?? {};
      typeof p == "function" && (c = p.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: v
      }));
      const g = ia(d, e == null ? void 0 : e.fixed, e.store);
      return no(g, "left"), no(g, "right"), Object.assign({}, c, g);
    },
    getCellClass: (u, d, f, v, p) => {
      const c = sa(n.b(), d, e == null ? void 0 : e.fixed, e.store, void 0, p), g = [v.id, v.align, v.className, ...c], b = t == null ? void 0 : t.props.cellClassName;
      return typeof b == "string" ? g.push(b) : typeof b == "function" && g.push(b.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: v
      })), g.push(n.e("cell")), g.filter((m) => Boolean(m)).join(" ");
    },
    getSpan: (u, d, f, v) => {
      let p = 1, c = 1;
      const g = t == null ? void 0 : t.props.spanMethod;
      if (typeof g == "function") {
        const b = g({
          row: u,
          column: d,
          rowIndex: f,
          columnIndex: v
        });
        Array.isArray(b) ? (p = b[0], c = b[1]) : typeof b == "object" && (p = b.rowspan, c = b.colspan);
      }
      return { rowspan: p, colspan: c };
    },
    getColspanRealWidth: (u, d, f) => {
      if (d < 1)
        return u[f].realWidth;
      const v = u.map(({ realWidth: p, width: c }) => p || c).slice(f, f + d);
      return Number(v.reduce((p, c) => Number(p) + Number(c), -1));
    }
  };
}
function DC(e) {
  const t = ve(Vt), n = ne("table"), {
    handleDoubleClick: o,
    handleClick: r,
    handleContextMenu: l,
    handleMouseEnter: a,
    handleMouseLeave: s,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: d,
    tooltipTrigger: f
  } = zC(e), {
    getRowStyle: v,
    getRowClass: p,
    getCellStyle: c,
    getCellClass: g,
    getSpan: b,
    getColspanRealWidth: m
  } = FC(e), w = O(() => e.store.states.columns.value.findIndex(({ type: S }) => S === "default")), y = (S, x) => {
    const N = t.props.rowKey;
    return N ? je(S, N) : x;
  }, C = (S, x, N, F = !1) => {
    const { tooltipEffect: W, tooltipOptions: K, store: A } = e, { indent: M, columns: P } = A.states, D = p(S, x);
    let q = !0;
    return N && (D.push(n.em("row", `level-${N.level}`)), q = N.display), te("tr", {
      style: [q ? null : {
        display: "none"
      }, v(S, x)],
      class: D,
      key: y(S, x),
      onDblclick: (I) => o(I, S),
      onClick: (I) => r(I, S),
      onContextmenu: (I) => l(I, S),
      onMouseenter: () => a(x),
      onMouseleave: s
    }, P.value.map((I, X) => {
      const { rowspan: le, colspan: ge } = b(S, I, x, X);
      if (!le || !ge)
        return null;
      const Se = { ...I };
      Se.realWidth = m(P.value, ge, X);
      const ye = {
        store: e.store,
        _self: e.context || t,
        column: Se,
        row: S,
        $index: x,
        cellIndex: X,
        expanded: F
      };
      X === w.value && N && (ye.treeNode = {
        indent: N.level * M.value,
        level: N.level
      }, typeof N.expanded == "boolean" && (ye.treeNode.expanded = N.expanded, "loading" in N && (ye.treeNode.loading = N.loading), "noLazyChildren" in N && (ye.treeNode.noLazyChildren = N.noLazyChildren)));
      const ie = `${x},${X}`, _e = Se.columnKey || Se.rawColumnKey || "", $e = _(X, I, ye), pe = I.showOverflowTooltip && Ti({
        effect: W
      }, K, I.showOverflowTooltip);
      return te("td", {
        style: c(x, X, S, I),
        class: g(x, X, S, I, ge - 1),
        key: `${_e}${ie}`,
        rowspan: le,
        colspan: ge,
        onMouseenter: (Re) => i(Re, S, pe),
        onMouseleave: u
      }, [$e]);
    }));
  }, _ = (S, x, N) => x.renderCell(N);
  return {
    wrappedRowRender: (S, x) => {
      const N = e.store, { isRowExpanded: F, assertRowKey: W } = N, { treeData: K, lazyTreeNodeMap: A, childrenColumnName: M, rowKey: P } = N.states, D = N.states.columns.value;
      if (D.some(({ type: H }) => H === "expand")) {
        const H = F(S), I = C(S, x, void 0, H), X = t.renderExpanded;
        return H ? X ? [
          [
            I,
            te("tr", {
              key: `expanded-row__${I.key}`
            }, [
              te("td", {
                colspan: D.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [X({ row: S, $index: x, store: N, expanded: H })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), I) : [[I]];
      } else if (Object.keys(K.value).length) {
        W();
        const H = je(S, P.value);
        let I = K.value[H], X = null;
        I && (X = {
          expanded: I.expanded,
          level: I.level,
          display: !0
        }, typeof I.lazy == "boolean" && (typeof I.loaded == "boolean" && I.loaded && (X.noLazyChildren = !(I.children && I.children.length)), X.loading = I.loading));
        const le = [C(S, x, X)];
        if (I) {
          let ge = 0;
          const Se = (ie, _e) => {
            ie && ie.length && _e && ie.forEach(($e) => {
              const pe = {
                display: _e.display && _e.expanded,
                level: _e.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, Re = je($e, P.value);
              if (Re == null)
                throw new Error("For nested data item, row-key is required.");
              if (I = { ...K.value[Re] }, I && (pe.expanded = I.expanded, I.level = I.level || pe.level, I.display = !!(I.expanded && pe.display), typeof I.lazy == "boolean" && (typeof I.loaded == "boolean" && I.loaded && (pe.noLazyChildren = !(I.children && I.children.length)), pe.loading = I.loading)), ge++, le.push(C($e, x + ge, pe)), I) {
                const Xe = A.value[Re] || $e[M.value];
                Se(Xe, I);
              }
            });
          };
          I.display = !0;
          const ye = A.value[H] || S[M.value];
          Se(ye, I);
        }
        return le;
      } else
        return C(S, x, void 0);
    },
    tooltipContent: d,
    tooltipTrigger: f
  };
}
const HC = {
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
var VC = Y({
  name: "ElTableBody",
  props: HC,
  setup(e) {
    const t = Ee(), n = ve(Vt), o = ne("table"), { wrappedRowRender: r, tooltipContent: l, tooltipTrigger: a } = DC(e), { onColumnsChange: s, onScrollableChange: i } = Xu(n);
    return Q(e.store.states.hoverRow, (u, d) => {
      if (!e.store.states.isComplex.value || !be)
        return;
      let f = window.requestAnimationFrame;
      f || (f = (v) => window.setTimeout(v, 16)), f(() => {
        const v = t == null ? void 0 : t.vnode.el, p = Array.from((v == null ? void 0 : v.children) || []).filter((b) => b == null ? void 0 : b.classList.contains(`${o.e("row")}`)), c = p[d], g = p[u];
        c && bn(c, "hover-row"), g && _o(g, "hover-row");
      });
    }), Sl(() => {
      var u;
      (u = Gt) == null || u();
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
    return te("tbody", {}, [
      n.reduce((o, r) => o.concat(e(r, o.length)), [])
    ]);
  }
});
function ua(e) {
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
  return te("colgroup", {}, n.map((r) => te("col", o(r))));
}
ua.props = ["columns", "tableLayout"];
function WC() {
  const e = ve(Vt), t = e == null ? void 0 : e.store, n = O(() => t.states.fixedLeafColumnsLength.value), o = O(() => t.states.rightFixedColumns.value.length), r = O(() => t.states.columns.value.length), l = O(() => t.states.fixedColumns.value.length), a = O(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: r,
    leftFixedCount: l,
    rightFixedCount: a,
    columns: t.states.columns
  };
}
function jC(e) {
  const { columns: t } = WC(), n = ne("table");
  return {
    getCellClasses: (l, a) => {
      const s = l[a], i = [
        n.e("cell"),
        s.id,
        s.align,
        s.labelClassName,
        ...sa(n.b(), a, s.fixed, e.store)
      ];
      return s.className && i.push(s.className), s.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, a) => {
      const s = ia(a, l.fixed, e.store);
      return no(s, "left"), no(s, "right"), s;
    },
    columns: t
  };
}
var KC = Y({
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
    const { getCellClasses: t, getCellStyles: n, columns: o } = jC(e);
    return {
      ns: ne("table"),
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
      let v = !0;
      d.forEach((c) => {
        if (!Number.isNaN(+c)) {
          v = !1;
          const g = `${c}`.split(".")[1];
          f.push(g ? g.length : 0);
        }
      });
      const p = Math.max.apply(null, f);
      v ? s[u] = "" : s[u] = d.reduce((c, g) => {
        const b = Number(g);
        return Number.isNaN(+b) ? c : Number.parseFloat((c + g).toFixed(Math.min(p, 20)));
      }, 0);
    }), te("table", {
      class: l.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      ua({
        columns: e
      }),
      te("tbody", [
        te("tr", {}, [
          ...e.map((i, u) => te("td", {
            key: u,
            colspan: i.colSpan,
            rowspan: i.rowSpan,
            class: n(e, u),
            style: t(i, u)
          }, [
            te("div", {
              class: ["cell", i.labelClassName]
            }, [s[u]])
          ]))
        ])
      ])
    ]);
  }
});
function UC(e) {
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
function GC(e, t, n, o) {
  const r = k(!1), l = k(null), a = k(!1), s = (H) => {
    a.value = H;
  }, i = k({
    width: null,
    height: null,
    headerHeight: null
  }), u = k(!1), d = {
    display: "inline-block",
    verticalAlign: "middle"
  }, f = k(), v = k(0), p = k(0), c = k(0), g = k(0);
  Nn(() => {
    t.setHeight(e.height);
  }), Nn(() => {
    t.setMaxHeight(e.maxHeight);
  }), Q(() => [e.currentRowKey, n.states.rowKey], ([H, I]) => {
    !h(I) || !h(H) || n.setCurrentRowKey(`${H}`);
  }, {
    immediate: !0
  }), Q(() => e.data, (H) => {
    o.store.commit("setData", H);
  }, {
    immediate: !0,
    deep: !0
  }), Nn(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const b = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, m = (H, I) => {
    const { pixelX: X, pixelY: le } = I;
    Math.abs(X) >= Math.abs(le) && (o.refs.bodyWrapper.scrollLeft += I.pixelX / 5);
  }, w = O(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), y = O(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), C = () => {
    w.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(x);
  };
  Ae(async () => {
    await se(), n.updateColumns(), N(), requestAnimationFrame(C);
    const H = o.vnode.el, I = o.refs.headerWrapper;
    e.flexible && H && H.parentElement && (H.parentElement.style.minWidth = "0"), i.value = {
      width: f.value = H.offsetWidth,
      height: H.offsetHeight,
      headerHeight: e.showHeader && I ? I.offsetHeight : null
    }, n.states.columns.value.forEach((X) => {
      X.filteredValue && X.filteredValue.length && o.store.commit("filterChange", {
        column: X,
        values: X.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const _ = (H, I) => {
    if (!H)
      return;
    const X = Array.from(H.classList).filter((le) => !le.startsWith("is-scrolling-"));
    X.push(t.scrollX.value ? I : "is-scrolling-none"), H.className = X.join(" ");
  }, T = (H) => {
    const { tableWrapper: I } = o.refs;
    _(I, H);
  }, S = (H) => {
    const { tableWrapper: I } = o.refs;
    return !!(I && I.classList.contains(H));
  }, x = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const ie = "is-scrolling-none";
      S(ie) || T(ie);
      return;
    }
    const H = o.refs.scrollBarRef.wrapRef;
    if (!H)
      return;
    const { scrollLeft: I, offsetWidth: X, scrollWidth: le } = H, { headerWrapper: ge, footerWrapper: Se } = o.refs;
    ge && (ge.scrollLeft = I), Se && (Se.scrollLeft = I);
    const ye = le - X - 1;
    I >= ye ? T("is-scrolling-right") : T(I === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, N = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && Mt(o.refs.scrollBarRef.wrapRef, "scroll", x, {
      passive: !0
    }), e.fit ? Rn(o.vnode.el, F) : Mt(window, "resize", F), Rn(o.refs.bodyWrapper, () => {
      var H, I;
      F(), (I = (H = o.refs) == null ? void 0 : H.scrollBarRef) == null || I.update();
    }));
  }, F = () => {
    var H, I, X;
    const le = o.vnode.el;
    if (!o.$ready || !le)
      return;
    let ge = !1;
    const {
      width: Se,
      height: ye,
      headerHeight: ie
    } = i.value, _e = f.value = le.offsetWidth;
    Se !== _e && (ge = !0);
    const $e = le.offsetHeight;
    (e.height || w.value) && ye !== $e && (ge = !0);
    const pe = e.tableLayout === "fixed" ? o.refs.headerWrapper : (H = o.refs.tableHeaderRef) == null ? void 0 : H.$el;
    e.showHeader && (pe == null ? void 0 : pe.offsetHeight) !== ie && (ge = !0), v.value = ((I = o.refs.tableWrapper) == null ? void 0 : I.scrollHeight) || 0, c.value = (pe == null ? void 0 : pe.scrollHeight) || 0, g.value = ((X = o.refs.footerWrapper) == null ? void 0 : X.offsetHeight) || 0, p.value = v.value - c.value - g.value, ge && (i.value = {
      width: _e,
      height: $e,
      headerHeight: e.showHeader && (pe == null ? void 0 : pe.offsetHeight) || 0
    }, C());
  }, W = tn(), K = O(() => {
    const { bodyWidth: H, scrollY: I, gutterWidth: X } = t;
    return H.value ? `${H.value - (I.value ? X : 0)}px` : "";
  }), A = O(() => e.maxHeight ? "fixed" : e.tableLayout), M = O(() => {
    if (e.data && e.data.length)
      return null;
    let H = "100%";
    e.height && p.value && (H = `${p.value}px`);
    const I = f.value;
    return {
      width: I ? `${I}px` : "",
      height: H
    };
  }), P = O(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), D = O(() => {
    if (e.height)
      return {
        height: "100%"
      };
    if (e.maxHeight) {
      if (Number.isNaN(Number(e.maxHeight)))
        return {
          maxHeight: `calc(${e.maxHeight} - ${c.value + g.value}px)`
        };
      {
        const H = e.maxHeight;
        if (v.value >= Number(H))
          return {
            maxHeight: `${v.value - c.value - g.value}px`
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
    handleMouseLeave: b,
    handleHeaderFooterMousewheel: m,
    tableSize: W,
    emptyBlockStyle: M,
    handleFixedMousewheel: (H, I) => {
      const X = o.refs.bodyWrapper;
      if (Math.abs(I.spinY) > 0) {
        const le = X.scrollTop;
        I.pixelY < 0 && le !== 0 && H.preventDefault(), I.pixelY > 0 && X.scrollHeight - X.clientHeight > le && H.preventDefault(), X.scrollTop += Math.ceil(I.pixelY / 5);
      } else
        X.scrollLeft += Math.ceil(I.pixelX / 5);
    },
    resizeProxyVisible: a,
    bodyWidth: K,
    resizeState: i,
    doLayout: C,
    tableBodyStyles: y,
    tableLayout: A,
    scrollbarViewStyle: d,
    tableInnerStyle: P,
    scrollbarStyle: D
  };
}
var qC = {
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
const YC = () => {
  const e = k(), t = (l, a) => {
    const s = e.value;
    s && s.scrollTo(l, a);
  }, n = (l, a) => {
    const s = e.value;
    s && me(a) && ["Top", "Left"].includes(l) && s[`setScroll${l}`](a);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (l) => n("Top", l),
    setScrollLeft: (l) => n("Left", l)
  };
};
let QC = 1;
const XC = Y({
  name: "ElTable",
  directives: {
    Mousewheel: V1
  },
  components: {
    TableHeader: BC,
    TableBody: VC,
    TableFooter: KC,
    ElScrollbar: ea,
    hColgroup: ua
  },
  props: qC,
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
    const { t } = Ct(), n = ne("table"), o = Ee();
    rt(Vt, o);
    const r = EC(o, e);
    o.store = r;
    const l = new TC({
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
      toggleAllSelection: v,
      toggleRowExpansion: p,
      clearSort: c,
      sort: g
    } = UC(r), {
      isHidden: b,
      renderExpanded: m,
      setDragVisible: w,
      isGroup: y,
      handleMouseLeave: C,
      handleHeaderFooterMousewheel: _,
      tableSize: T,
      emptyBlockStyle: S,
      handleFixedMousewheel: x,
      resizeProxyVisible: N,
      bodyWidth: F,
      resizeState: W,
      doLayout: K,
      tableBodyStyles: A,
      tableLayout: M,
      scrollbarViewStyle: P,
      tableInnerStyle: D,
      scrollbarStyle: q
    } = GC(e, l, r, o), { scrollBarRef: H, scrollTo: I, setScrollLeft: X, setScrollTop: le } = YC(), ge = In(K, 50), Se = `${n.namespace.value}-table_${QC++}`;
    o.tableId = Se, o.state = {
      isGroup: y,
      resizeState: W,
      doLayout: K,
      debouncedUpdateLayout: ge
    };
    const ye = O(() => e.sumText || t("el.table.sumText")), ie = O(() => e.emptyText || t("el.table.emptyText"));
    return {
      ns: n,
      layout: l,
      store: r,
      handleHeaderFooterMousewheel: _,
      handleMouseLeave: C,
      tableId: Se,
      tableSize: T,
      isHidden: b,
      isEmpty: a,
      renderExpanded: m,
      resizeProxyVisible: N,
      resizeState: W,
      isGroup: y,
      bodyWidth: F,
      tableBodyStyles: A,
      emptyBlockStyle: S,
      debouncedUpdateLayout: ge,
      handleFixedMousewheel: x,
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: v,
      toggleRowExpansion: p,
      clearSort: c,
      doLayout: K,
      sort: g,
      t,
      setDragVisible: w,
      context: o,
      computedSumText: ye,
      computedEmptyText: ie,
      tableLayout: M,
      scrollbarViewStyle: P,
      tableInnerStyle: D,
      scrollbarStyle: q,
      scrollBarRef: H,
      scrollTo: I,
      setScrollLeft: X,
      setScrollTop: le
    };
  }
}), ZC = ["data-prefix"], JC = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function eS(e, t, n, o, r, l) {
  const a = Oe("hColgroup"), s = Oe("table-header"), i = Oe("table-body"), u = Oe("el-scrollbar"), d = Oe("table-footer"), f = Tl("mousewheel");
  return E(), B("div", {
    ref: "tableWrapper",
    class: L([
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
    onMouseleave: t[0] || (t[0] = (v) => e.handleMouseLeave())
  }, [
    z("div", {
      class: L(e.ns.e("inner-wrapper")),
      style: Te(e.tableInnerStyle)
    }, [
      z("div", JC, [
        re(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? we((E(), B("div", {
        key: 0,
        ref: "headerWrapper",
        class: L(e.ns.e("header-wrapper"))
      }, [
        z("table", {
          ref: "tableHeader",
          class: L(e.ns.e("header")),
          style: Te(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          ee(a, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          ee(s, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [f, e.handleHeaderFooterMousewheel]
      ]) : U("v-if", !0),
      z("div", {
        ref: "bodyWrapper",
        class: L(e.ns.e("body-wrapper"))
      }, [
        ee(u, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: G(() => [
            z("table", {
              ref: "tableBody",
              class: L(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: Te({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              ee(a, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (E(), j(s, {
                key: 0,
                ref: "tableHeaderRef",
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : U("v-if", !0),
              ee(i, {
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
            e.isEmpty ? (E(), B("div", {
              key: 0,
              ref: "emptyBlock",
              style: Te(e.emptyBlockStyle),
              class: L(e.ns.e("empty-block"))
            }, [
              z("span", {
                class: L(e.ns.e("empty-text"))
              }, [
                re(e.$slots, "empty", {}, () => [
                  Xt(ce(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : U("v-if", !0),
            e.$slots.append ? (E(), B("div", {
              key: 1,
              ref: "appendWrapper",
              class: L(e.ns.e("append-wrapper"))
            }, [
              re(e.$slots, "append")
            ], 2)) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? we((E(), B("div", {
        key: 1,
        ref: "footerWrapper",
        class: L(e.ns.e("footer-wrapper"))
      }, [
        ee(d, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: Te(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [qe, !e.isEmpty],
        [f, e.handleHeaderFooterMousewheel]
      ]) : U("v-if", !0),
      e.border || e.isGroup ? (E(), B("div", {
        key: 2,
        class: L(e.ns.e("border-left-patch"))
      }, null, 2)) : U("v-if", !0)
    ], 6),
    we(z("div", {
      ref: "resizeProxy",
      class: L(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [qe, e.resizeProxyVisible]
    ])
  ], 46, ZC);
}
var tS = /* @__PURE__ */ fe(XC, [["render", eS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const nS = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, oS = {
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
}, rS = (e) => nS[e] || "", lS = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return te(zn, {
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
      return te(zn, {
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
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), te("div", {}, [n]);
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
      return n && r.push(o.em("expand-icon", "expanded")), te("div", {
        class: r,
        onClick: function(a) {
          a.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          te(Pe, null, {
            default: () => [te(Fl)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function aS({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const r = t.property, l = r && Ph(e, r).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function sS({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: r } = n;
  if (!t)
    return o ? [
      te("span", {
        class: r.e("placeholder")
      })
    ] : null;
  const l = [], a = function(s) {
    s.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(te("span", {
    class: r.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const s = [
      r.e("expand-icon"),
      t.expanded ? r.em("expand-icon", "expanded") : ""
    ];
    let i = Fl;
    t.loading && (i = _r), l.push(te("div", {
      class: s,
      onClick: a
    }, {
      default: () => [
        te(Pe, { class: { [r.is("loading")]: t.loading } }, {
          default: () => [te(i)]
        })
      ]
    }));
  } else
    l.push(te("span", {
      class: r.e("placeholder")
    }));
  return l;
}
function Vs(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function iS(e, t) {
  const n = Ee();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], a = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, s = Vs(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        en(t, u) && Q(() => t[u], (d) => {
          let f = d;
          u === "width" && i === "realWidth" && (f = aa(d)), u === "minWidth" && i === "realMinWidth" && (f = Ku(d)), n.columnConfig.value[u] = f, n.columnConfig.value[i] = f;
          const v = u === "fixed";
          e.value.store.scheduleLayout(v);
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
      }, s = Vs(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        en(t, u) && Q(() => t[u], (d) => {
          n.columnConfig.value[i] = d;
        });
      });
    }
  };
}
function uS(e, t, n) {
  const o = Ee(), r = k(""), l = k(!1), a = k(), s = k(), i = ne("table");
  Nn(() => {
    a.value = e.align ? `is-${e.align}` : null, a.value;
  }), Nn(() => {
    s.value = e.headerAlign ? `is-${e.headerAlign}` : a.value, s.value;
  });
  const u = O(() => {
    let y = o.vnode.vParent || o.parent;
    for (; y && !y.tableId && !y.columnId; )
      y = y.vnode.vParent || y.parent;
    return y;
  }), d = O(() => {
    const { store: y } = o.parent;
    if (!y)
      return !1;
    const { treeData: C } = y.states, _ = C.value;
    return _ && Object.keys(_).length > 0;
  }), f = k(aa(e.width)), v = k(Ku(e.minWidth)), p = (y) => (f.value && (y.width = f.value), v.value && (y.minWidth = v.value), !f.value && v.value && (y.width = void 0), y.minWidth || (y.minWidth = 80), y.realWidth = Number(y.width === void 0 ? y.minWidth : y.width), y), c = (y) => {
    const C = y.type, _ = lS[C] || {};
    Object.keys(_).forEach((S) => {
      const x = _[S];
      S !== "className" && x !== void 0 && (y[S] = x);
    });
    const T = rS(C);
    if (T) {
      const S = `${h(i.namespace)}-${T}`;
      y.className = y.className ? `${y.className} ${S}` : S;
    }
    return y;
  }, g = (y) => {
    Array.isArray(y) ? y.forEach((_) => C(_)) : C(y);
    function C(_) {
      var T;
      ((T = _ == null ? void 0 : _.type) == null ? void 0 : T.name) === "ElTableColumn" && (_.vParent = o);
    }
  };
  return {
    columnId: r,
    realAlign: a,
    isSubColumn: l,
    realHeaderAlign: s,
    columnOrTableParent: u,
    setColumnWidth: p,
    setColumnForcedProps: c,
    setColumnRenders: (y) => {
      e.renderHeader ? Ne("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : y.type !== "selection" && (y.renderHeader = (_) => {
        o.columnConfig.value.label;
        const T = t.header;
        return T ? T(_) : y.label;
      });
      let C = y.renderCell;
      return y.type === "expand" ? (y.renderCell = (_) => te("div", {
        class: "cell"
      }, [C(_)]), n.value.renderExpanded = (_) => t.default ? t.default(_) : t.default) : (C = C || aS, y.renderCell = (_) => {
        let T = null;
        if (t.default) {
          const F = t.default(_);
          T = F.some((W) => W.type !== Js) ? F : C(_);
        } else
          T = C(_);
        const S = d.value && _.cellIndex === 0 && _.column.type !== "selection", x = sS(_, S), N = {
          class: "cell",
          style: {}
        };
        return y.showOverflowTooltip && (N.class = `${N.class} ${h(i.namespace)}-tooltip`, N.style = {
          width: `${(_.column.realWidth || Number(_.column.width)) - 1}px`
        }), g(T), te("div", N, [x, T]);
      }), y;
    },
    getPropsData: (...y) => y.reduce((C, _) => (Array.isArray(_) && _.forEach((T) => {
      C[T] = e[T];
    }), C), {}),
    getColumnElIndex: (y, C) => Array.prototype.indexOf.call(y, C)
  };
}
var cS = {
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
let dS = 1;
var Ju = Y({
  name: "ElTableColumn",
  components: {
    ElCheckbox: zn
  },
  props: cS,
  setup(e, { slots: t }) {
    const n = Ee(), o = k({}), r = O(() => {
      let w = n.parent;
      for (; w && !w.tableId; )
        w = w.parent;
      return w;
    }), { registerNormalWatchers: l, registerComplexWatchers: a } = iS(r, e), {
      columnId: s,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: d,
      setColumnWidth: f,
      setColumnForcedProps: v,
      setColumnRenders: p,
      getPropsData: c,
      getColumnElIndex: g,
      realAlign: b
    } = uS(e, t, r), m = d.value;
    s.value = `${m.tableId || m.columnId}_column_${dS++}`, El(() => {
      i.value = r.value !== m;
      const w = e.type || "default", y = e.sortable === "" ? !0 : e.sortable, C = {
        ...oS[w],
        id: s.value,
        type: w,
        property: e.prop || e.property,
        align: b,
        headerAlign: u,
        showOverflowTooltip: e.showOverflowTooltip,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: !1,
        isSubColumn: !1,
        filterOpened: !1,
        sortable: y,
        index: e.index,
        rawColumnKey: n.vnode.key
      };
      let N = c([
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
      N = fC(C, N), N = vC(p, f, v)(N), o.value = N, l(), a();
    }), Ae(() => {
      var w;
      const y = d.value, C = i.value ? y.vnode.el.children : (w = y.refs.hiddenColumns) == null ? void 0 : w.children, _ = () => g(C || [], n.vnode.el);
      o.value.getColumnIndex = _, _() > -1 && r.value.store.commit("insertColumn", o.value, i.value ? y.columnConfig.value : null);
    }), wt(() => {
      r.value.store.commit("removeColumn", o.value, i.value ? m.columnConfig.value : null);
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
          ((n = a.type) == null ? void 0 : n.name) === "ElTableColumn" || a.shapeFlag & 2 ? r.push(a) : a.type === Ve && Array.isArray(a.children) && a.children.forEach((s) => {
            (s == null ? void 0 : s.patchFlag) !== 1024 && !We(s == null ? void 0 : s.children) && r.push(s);
          });
      return te("div", r);
    } catch {
      return te("div", []);
    }
  }
});
const fS = st(tS, {
  TableColumn: Ju
}), pS = lo(Ju), $t = "ElInfiniteScroll", vS = 50, hS = 200, gS = 0, mS = {
  delay: {
    type: Number,
    default: hS
  },
  distance: {
    type: Number,
    default: gS
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  immediate: {
    type: Boolean,
    default: !0
  }
}, ca = (e, t) => Object.entries(mS).reduce((n, [o, r]) => {
  var l, a;
  const { type: s, default: i } = r, u = e.getAttribute(`infinite-scroll-${o}`);
  let d = (a = (l = t[u]) != null ? l : u) != null ? a : i;
  return d = d === "false" ? !1 : d, d = s(d), n[o] = Number.isNaN(d) ? i : d, n;
}, {}), ec = (e) => {
  const { observer: t } = e[$t];
  t && (t.disconnect(), delete e[$t].observer);
}, bS = (e, t) => {
  const { container: n, containerEl: o, instance: r, observer: l, lastScrollTop: a } = e[$t], { disabled: s, distance: i } = ca(e, r), { clientHeight: u, scrollHeight: d, scrollTop: f } = o, v = f - a;
  if (e[$t].lastScrollTop = f, l || s || v < 0)
    return;
  let p = !1;
  if (n === e)
    p = d - (u + f) <= i;
  else {
    const { clientTop: c, scrollHeight: g } = e, b = Sh(e, o);
    p = f + u >= b + c + g - i;
  }
  p && t.call(r);
};
function Ur(e, t) {
  const { containerEl: n, instance: o } = e[$t], { disabled: r } = ca(e, o);
  r || n.clientHeight === 0 || (n.scrollHeight <= n.clientHeight ? t.call(o) : ec(e));
}
const yS = {
  async mounted(e, t) {
    const { instance: n, value: o } = t;
    ze(o) || Er($t, "'v-infinite-scroll' binding value must be a function"), await se();
    const { delay: r, immediate: l } = ca(e, n), a = Rh(e, !0), s = a === window ? document.documentElement : a, i = Ha(bS.bind(null, e, o), r);
    if (a) {
      if (e[$t] = {
        instance: n,
        container: a,
        containerEl: s,
        delay: r,
        cb: o,
        onScroll: i,
        lastScrollTop: s.scrollTop
      }, l) {
        const u = new MutationObserver(Ha(Ur.bind(null, e, o), vS));
        e[$t].observer = u, u.observe(e, { childList: !0, subtree: !0 }), Ur(e, o);
      }
      a.addEventListener("scroll", i);
    }
  },
  unmounted(e) {
    const { container: t, onScroll: n } = e[$t];
    t == null || t.removeEventListener("scroll", n), ec(e);
  },
  async updated(e) {
    e[$t] || await se();
    const { containerEl: t, cb: n, observer: o } = e[$t];
    t.clientHeight && o && Ur(e, n);
  }
}, wl = yS;
wl.install = (e) => {
  e.directive("InfiniteScroll", wl);
};
const wS = wl;
function CS(e) {
  let t;
  const n = ne("loading"), o = k(!1), r = on({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function l(p) {
    r.text = p;
  }
  function a() {
    const p = r.parent;
    if (!p.vLoadingAddClassList) {
      let c = p.getAttribute("loading-number");
      c = Number.parseInt(c) - 1, c ? p.setAttribute("loading-number", c.toString()) : (bn(p, n.bm("parent", "relative")), p.removeAttribute("loading-number")), bn(p, n.bm("parent", "hidden"));
    }
    s(), f.unmount();
  }
  function s() {
    var p, c;
    (c = (p = v.$el) == null ? void 0 : p.parentNode) == null || c.removeChild(v.$el);
  }
  function i() {
    var p;
    e.beforeClose && !e.beforeClose() || (o.value = !0, clearTimeout(t), t = window.setTimeout(u, 400), r.visible = !1, (p = e.closed) == null || p.call(e));
  }
  function u() {
    if (!o.value)
      return;
    const p = r.parent;
    o.value = !1, p.vLoadingAddClassList = void 0, a();
  }
  const f = vc({
    name: "ElLoading",
    setup() {
      return () => {
        const p = r.spinner || r.svg, c = te("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...p ? { innerHTML: p } : {}
        }, [
          te("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), g = r.text ? te("p", { class: n.b("text") }, [r.text]) : void 0;
        return te(wn, {
          name: n.b("fade"),
          onAfterLeave: u
        }, {
          default: G(() => [
            we(ee("div", {
              style: {
                backgroundColor: r.background || ""
              },
              class: [
                n.b("mask"),
                r.customClass,
                r.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              te("div", {
                class: n.b("spinner")
              }, [c, g])
            ]), [[qe, r.visible]])
          ])
        });
      };
    }
  }), v = f.mount(document.createElement("div"));
  return {
    ...Fn(r),
    setText: l,
    removeElLoadingChild: s,
    close: i,
    handleAfterLeave: u,
    vm: v,
    get $el() {
      return v.$el;
    }
  };
}
let Uo;
const SS = function(e = {}) {
  if (!be)
    return;
  const t = ES(e);
  if (t.fullscreen && Uo)
    return Uo;
  const n = CS({
    ...t,
    closed: () => {
      var r;
      (r = t.closed) == null || r.call(t), t.fullscreen && (Uo = void 0);
    }
  });
  _S(t, t.parent, n), Ws(t, t.parent, n), t.parent.vLoadingAddClassList = () => Ws(t, t.parent, n);
  let o = t.parent.getAttribute("loading-number");
  return o ? o = `${Number.parseInt(o) + 1}` : o = "1", t.parent.setAttribute("loading-number", o), t.parent.appendChild(n.$el), se(() => n.visible.value = t.visible), t.fullscreen && (Uo = n), n;
}, ES = (e) => {
  var t, n, o, r;
  let l;
  return We(e.target) ? l = (t = document.querySelector(e.target)) != null ? t : document.body : l = e.target || document.body, {
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
}, _S = async (e, t, n) => {
  const { nextZIndex: o } = Io(), r = {};
  if (e.fullscreen)
    n.originalPosition.value = Yt(document.body, "position"), n.originalOverflow.value = Yt(document.body, "overflow"), r.zIndex = o();
  else if (e.parent === document.body) {
    n.originalPosition.value = Yt(document.body, "position"), await se();
    for (const l of ["top", "left"]) {
      const a = l === "top" ? "scrollTop" : "scrollLeft";
      r[l] = `${e.target.getBoundingClientRect()[l] + document.body[a] + document.documentElement[a] - Number.parseInt(Yt(document.body, `margin-${l}`), 10)}px`;
    }
    for (const l of ["height", "width"])
      r[l] = `${e.target.getBoundingClientRect()[l]}px`;
  } else
    n.originalPosition.value = Yt(t, "position");
  for (const [l, a] of Object.entries(r))
    n.$el.style[l] = a;
}, Ws = (e, t, n) => {
  const o = ne("loading");
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? bn(t, o.bm("parent", "relative")) : _o(t, o.bm("parent", "relative")), e.fullscreen && e.lock ? _o(t, o.bm("parent", "hidden")) : bn(t, o.bm("parent", "hidden"));
}, Cl = Symbol("ElLoading"), js = (e, t) => {
  var n, o, r, l;
  const a = t.instance, s = (v) => at(t.value) ? t.value[v] : void 0, i = (v) => {
    const p = We(v) && (a == null ? void 0 : a[v]) || v;
    return p && k(p);
  }, u = (v) => i(s(v) || e.getAttribute(`element-loading-${Ah(v)}`)), d = (n = s("fullscreen")) != null ? n : t.modifiers.fullscreen, f = {
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
  e[Cl] = {
    options: f,
    instance: SS(f)
  };
}, TS = (e, t) => {
  for (const n of Object.keys(t))
    Ft(t[n]) && (t[n].value = e[n]);
}, $S = {
  mounted(e, t) {
    t.value && js(e, t);
  },
  updated(e, t) {
    const n = e[Cl];
    t.oldValue !== t.value && (t.value && !t.oldValue ? js(e, t) : t.value && t.oldValue ? at(t.value) && TS(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[Cl]) == null || t.instance.close();
  }
}, tc = ["success", "info", "warning", "error"], tt = kr({
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
  appendTo: be ? document.body : void 0
}), kS = Ce({
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
    type: kt,
    default: tt.icon
  },
  id: {
    type: String,
    default: tt.id
  },
  message: {
    type: ue([
      String,
      Object,
      Function
    ]),
    default: tt.message
  },
  onClose: {
    type: ue(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: tt.showClose
  },
  type: {
    type: String,
    values: tc,
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
}), OS = {
  destroy: () => !0
}, It = hc([]), xS = (e) => {
  const t = It.findIndex((r) => r.id === e), n = It[t];
  let o;
  return t > 0 && (o = It[t - 1]), { current: n, prev: o };
}, AS = (e) => {
  const { prev: t } = xS(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, NS = ["id"], LS = ["innerHTML"], PS = Y({
  name: "ElMessage"
}), MS = /* @__PURE__ */ Y({
  ...PS,
  props: kS,
  emits: OS,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Bi, r = ne("message"), l = k(), a = k(!1), s = k(0);
    let i;
    const u = O(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), d = O(() => {
      const C = n.type;
      return { [r.bm("icon", C)]: C && ur[C] };
    }), f = O(() => n.icon || ur[n.type] || ""), v = O(() => AS(n.id)), p = O(() => n.offset + v.value), c = O(() => s.value + p.value), g = O(() => ({
      top: `${p.value}px`,
      zIndex: n.zIndex
    }));
    function b() {
      n.duration !== 0 && ({ stop: i } = dh(() => {
        w();
      }, n.duration));
    }
    function m() {
      i == null || i();
    }
    function w() {
      a.value = !1;
    }
    function y({ code: C }) {
      C === Bn.esc && w();
    }
    return Ae(() => {
      b(), a.value = !0;
    }), Q(() => n.repeatNum, () => {
      m(), b();
    }), Mt(document, "keydown", y), Rn(l, () => {
      s.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: a,
      bottom: c,
      close: w
    }), (C, _) => (E(), j(wn, {
      name: h(r).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: _[0] || (_[0] = (T) => C.$emit("destroy")),
      persisted: ""
    }, {
      default: G(() => [
        we(z("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: l,
          class: L([
            h(r).b(),
            { [h(r).m(C.type)]: C.type && !C.icon },
            h(r).is("center", C.center),
            h(r).is("closable", C.showClose),
            C.customClass
          ]),
          style: Te(h(g)),
          role: "alert",
          onMouseenter: m,
          onMouseleave: b
        }, [
          C.repeatNum > 1 ? (E(), j(h(s1), {
            key: 0,
            value: C.repeatNum,
            type: h(u),
            class: L(h(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : U("v-if", !0),
          h(f) ? (E(), j(h(Pe), {
            key: 1,
            class: L([h(r).e("icon"), h(d)])
          }, {
            default: G(() => [
              (E(), j(He(h(f))))
            ]),
            _: 1
          }, 8, ["class"])) : U("v-if", !0),
          re(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (E(), B(Ve, { key: 1 }, [
              U(" Caution here, message could've been compromised, never use user's input as message "),
              z("p", {
                class: L(h(r).e("content")),
                innerHTML: C.message
              }, null, 10, LS)
            ], 2112)) : (E(), B("p", {
              key: 0,
              class: L(h(r).e("content"))
            }, ce(C.message), 3))
          ]),
          C.showClose ? (E(), j(h(Pe), {
            key: 2,
            class: L(h(r).e("closeBtn")),
            onClick: Be(w, ["stop"])
          }, {
            default: G(() => [
              ee(h(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : U("v-if", !0)
        ], 46, NS), [
          [qe, a.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var IS = /* @__PURE__ */ fe(MS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let RS = 1;
const nc = (e) => {
  const t = !e || We(e) || hr(e) || ze(e) ? { message: e } : e, n = {
    ...tt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (We(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    mn(o) || (Ne("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), o = document.body), n.appendTo = o;
  }
  return n;
}, BS = (e) => {
  const t = It.indexOf(e);
  if (t === -1)
    return;
  It.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, zS = ({ appendTo: e, ...t }, n) => {
  const { nextZIndex: o } = Io(), r = `message_${RS++}`, l = t.onClose, a = document.createElement("div"), s = {
    ...t,
    zIndex: o() + t.zIndex,
    id: r,
    onClose: () => {
      l == null || l(), BS(f);
    },
    onDestroy: () => {
      or(null, a);
    }
  }, i = ee(IS, s, ze(s.message) || hr(s.message) ? {
    default: ze(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || oo._context, or(i, a), e.appendChild(a.firstElementChild);
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
}, oo = (e = {}, t) => {
  if (!be)
    return { close: () => {
    } };
  if (me(bl.max) && It.length >= bl.max)
    return { close: () => {
    } };
  const n = nc(e);
  if (n.grouping && It.length) {
    const r = It.find(({ vnode: l }) => {
      var a;
      return ((a = l.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  const o = zS(n, t);
  return It.push(o), o.handler;
};
tc.forEach((e) => {
  oo[e] = (t = {}, n) => {
    const o = nc(t);
    return oo({ ...o, type: e }, n);
  };
});
function FS(e) {
  for (const t of It)
    (!e || e === t.props.type) && t.handler.close();
}
oo.closeAll = FS;
oo._context = null;
const Ks = Km(oo, "$message"), DS = Y({
  name: "ElMessageBox",
  directives: {
    TrapFocus: I1
  },
  components: {
    ElButton: _u,
    ElFocusTrap: bu,
    ElInput: Ro,
    ElOverlay: mw,
    ElIcon: Pe,
    ...Bi
  },
  inheritAttrs: !1,
  props: {
    buttonSize: {
      type: String,
      validator: zi
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
    const { t: n } = Ct(), o = ne("message-box"), r = k(!1), { nextZIndex: l } = Io(), a = on({
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
      const A = a.type;
      return { [o.bm("icon", A)]: A && ur[A] };
    }), i = fr(), u = fr(), d = tn(O(() => e.buttonSize), { prop: !0, form: !0, formItem: !0 }), f = O(() => a.icon || ur[a.type] || ""), v = O(() => !!a.message), p = k(), c = k(), g = k(), b = k(), m = k(), w = O(() => a.confirmButtonClass);
    Q(() => a.inputValue, async (A) => {
      await se(), e.boxType === "prompt" && A !== null && N();
    }, { immediate: !0 }), Q(() => r.value, (A) => {
      var M, P;
      A && (e.boxType !== "prompt" && (a.autofocus ? g.value = (P = (M = m.value) == null ? void 0 : M.$el) != null ? P : p.value : g.value = p.value), a.zIndex = l()), e.boxType === "prompt" && (A ? se().then(() => {
        var D;
        b.value && b.value.$el && (a.autofocus ? g.value = (D = F()) != null ? D : p.value : g.value = p.value);
      }) : (a.editorErrorMessage = "", a.validateError = !1));
    });
    const y = O(() => e.draggable);
    Jm(p, c, y), Ae(async () => {
      await se(), e.closeOnHashChange && window.addEventListener("hashchange", C);
    }), wt(() => {
      e.closeOnHashChange && window.removeEventListener("hashchange", C);
    });
    function C() {
      r.value && (r.value = !1, se(() => {
        a.action && t("action", a.action);
      }));
    }
    const _ = () => {
      e.closeOnClickModal && x(a.distinguishCancelAndClose ? "close" : "cancel");
    }, T = uu(_), S = (A) => {
      if (a.inputType !== "textarea")
        return A.preventDefault(), x("confirm");
    }, x = (A) => {
      var M;
      e.boxType === "prompt" && A === "confirm" && !N() || (a.action = A, a.beforeClose ? (M = a.beforeClose) == null || M.call(a, A, a, C) : C());
    }, N = () => {
      if (e.boxType === "prompt") {
        const A = a.inputPattern;
        if (A && !A.test(a.inputValue || ""))
          return a.editorErrorMessage = a.inputErrorMessage || n("el.messagebox.error"), a.validateError = !0, !1;
        const M = a.inputValidator;
        if (typeof M == "function") {
          const P = M(a.inputValue);
          if (P === !1)
            return a.editorErrorMessage = a.inputErrorMessage || n("el.messagebox.error"), a.validateError = !0, !1;
          if (typeof P == "string")
            return a.editorErrorMessage = P, a.validateError = !0, !1;
        }
      }
      return a.editorErrorMessage = "", a.validateError = !1, !0;
    }, F = () => {
      const A = b.value.$refs;
      return A.input || A.textarea;
    }, W = () => {
      x("close");
    }, K = () => {
      e.closeOnPressEscape && W();
    };
    return e.lockScroll && g0(r), Cb(r), {
      ...Fn(a),
      ns: o,
      overlayEvent: T,
      visible: r,
      hasMessage: v,
      typeClass: s,
      contentId: i,
      inputId: u,
      btnSize: d,
      iconComponent: f,
      confirmButtonClasses: w,
      rootRef: p,
      focusStartRef: g,
      headerRef: c,
      inputRef: b,
      confirmRef: m,
      doClose: C,
      handleClose: W,
      onCloseRequested: K,
      handleWrapperClick: _,
      handleInputEnter: S,
      handleAction: x,
      t: n
    };
  }
}), HS = ["aria-label", "aria-describedby"], VS = ["aria-label"], WS = ["id"];
function jS(e, t, n, o, r, l) {
  const a = Oe("el-icon"), s = Oe("close"), i = Oe("el-input"), u = Oe("el-button"), d = Oe("el-focus-trap"), f = Oe("el-overlay");
  return E(), j(wn, {
    name: "fade-in-linear",
    onAfterLeave: t[11] || (t[11] = (v) => e.$emit("vanish")),
    persisted: ""
  }, {
    default: G(() => [
      we(ee(f, {
        "z-index": e.zIndex,
        "overlay-class": [e.ns.is("message-box"), e.modalClass],
        mask: e.modal
      }, {
        default: G(() => [
          z("div", {
            role: "dialog",
            "aria-label": e.title,
            "aria-modal": "true",
            "aria-describedby": e.showInput ? void 0 : e.contentId,
            class: L(`${e.ns.namespace.value}-overlay-message-box`),
            onClick: t[8] || (t[8] = (...v) => e.overlayEvent.onClick && e.overlayEvent.onClick(...v)),
            onMousedown: t[9] || (t[9] = (...v) => e.overlayEvent.onMousedown && e.overlayEvent.onMousedown(...v)),
            onMouseup: t[10] || (t[10] = (...v) => e.overlayEvent.onMouseup && e.overlayEvent.onMouseup(...v))
          }, [
            ee(d, {
              loop: "",
              trapped: e.visible,
              "focus-trap-el": e.rootRef,
              "focus-start-el": e.focusStartRef,
              onReleaseRequested: e.onCloseRequested
            }, {
              default: G(() => [
                z("div", {
                  ref: "rootRef",
                  class: L([
                    e.ns.b(),
                    e.customClass,
                    e.ns.is("draggable", e.draggable),
                    { [e.ns.m("center")]: e.center }
                  ]),
                  style: Te(e.customStyle),
                  tabindex: "-1",
                  onClick: t[7] || (t[7] = Be(() => {
                  }, ["stop"]))
                }, [
                  e.title !== null && e.title !== void 0 ? (E(), B("div", {
                    key: 0,
                    ref: "headerRef",
                    class: L(e.ns.e("header"))
                  }, [
                    z("div", {
                      class: L(e.ns.e("title"))
                    }, [
                      e.iconComponent && e.center ? (E(), j(a, {
                        key: 0,
                        class: L([e.ns.e("status"), e.typeClass])
                      }, {
                        default: G(() => [
                          (E(), j(He(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : U("v-if", !0),
                      z("span", null, ce(e.title), 1)
                    ], 2),
                    e.showClose ? (E(), B("button", {
                      key: 0,
                      type: "button",
                      class: L(e.ns.e("headerbtn")),
                      "aria-label": e.t("el.messagebox.close"),
                      onClick: t[0] || (t[0] = (v) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel")),
                      onKeydown: t[1] || (t[1] = Le(Be((v) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"]))
                    }, [
                      ee(a, {
                        class: L(e.ns.e("close"))
                      }, {
                        default: G(() => [
                          ee(s)
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, VS)) : U("v-if", !0)
                  ], 2)) : U("v-if", !0),
                  z("div", {
                    id: e.contentId,
                    class: L(e.ns.e("content"))
                  }, [
                    z("div", {
                      class: L(e.ns.e("container"))
                    }, [
                      e.iconComponent && !e.center && e.hasMessage ? (E(), j(a, {
                        key: 0,
                        class: L([e.ns.e("status"), e.typeClass])
                      }, {
                        default: G(() => [
                          (E(), j(He(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : U("v-if", !0),
                      e.hasMessage ? (E(), B("div", {
                        key: 1,
                        class: L(e.ns.e("message"))
                      }, [
                        re(e.$slots, "default", {}, () => [
                          e.dangerouslyUseHTMLString ? (E(), j(He(e.showInput ? "label" : "p"), {
                            key: 1,
                            for: e.showInput ? e.inputId : void 0,
                            innerHTML: e.message
                          }, null, 8, ["for", "innerHTML"])) : (E(), j(He(e.showInput ? "label" : "p"), {
                            key: 0,
                            for: e.showInput ? e.inputId : void 0
                          }, {
                            default: G(() => [
                              Xt(ce(e.dangerouslyUseHTMLString ? "" : e.message), 1)
                            ]),
                            _: 1
                          }, 8, ["for"]))
                        ])
                      ], 2)) : U("v-if", !0)
                    ], 2),
                    we(z("div", {
                      class: L(e.ns.e("input"))
                    }, [
                      ee(i, {
                        id: e.inputId,
                        ref: "inputRef",
                        modelValue: e.inputValue,
                        "onUpdate:modelValue": t[2] || (t[2] = (v) => e.inputValue = v),
                        type: e.inputType,
                        placeholder: e.inputPlaceholder,
                        "aria-invalid": e.validateError,
                        class: L({ invalid: e.validateError }),
                        onKeydown: Le(e.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      z("div", {
                        class: L(e.ns.e("errormsg")),
                        style: Te({
                          visibility: e.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, ce(e.editorErrorMessage), 7)
                    ], 2), [
                      [qe, e.showInput]
                    ])
                  ], 10, WS),
                  z("div", {
                    class: L(e.ns.e("btns"))
                  }, [
                    e.showCancelButton ? (E(), j(u, {
                      key: 0,
                      loading: e.cancelButtonLoading,
                      class: L([e.cancelButtonClass]),
                      round: e.roundButton,
                      size: e.btnSize,
                      onClick: t[3] || (t[3] = (v) => e.handleAction("cancel")),
                      onKeydown: t[4] || (t[4] = Le(Be((v) => e.handleAction("cancel"), ["prevent"]), ["enter"]))
                    }, {
                      default: G(() => [
                        Xt(ce(e.cancelButtonText || e.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "class", "round", "size"])) : U("v-if", !0),
                    we(ee(u, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: e.confirmButtonLoading,
                      class: L([e.confirmButtonClasses]),
                      round: e.roundButton,
                      disabled: e.confirmButtonDisabled,
                      size: e.btnSize,
                      onClick: t[5] || (t[5] = (v) => e.handleAction("confirm")),
                      onKeydown: t[6] || (t[6] = Le(Be((v) => e.handleAction("confirm"), ["prevent"]), ["enter"]))
                    }, {
                      default: G(() => [
                        Xt(ce(e.confirmButtonText || e.t("el.messagebox.confirm")), 1)
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
          ], 42, HS)
        ]),
        _: 3
      }, 8, ["z-index", "overlay-class", "mask"]), [
        [qe, e.visible]
      ])
    ]),
    _: 3
  });
}
var KS = /* @__PURE__ */ fe(DS, [["render", jS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);
const Oo = /* @__PURE__ */ new Map(), US = (e) => {
  let t = document.body;
  return e.appendTo && (We(e.appendTo) && (t = document.querySelector(e.appendTo)), mn(e.appendTo) && (t = e.appendTo), mn(t) || (Ne("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body."), t = document.body)), t;
}, GS = (e, t, n = null) => {
  const o = ee(KS, e, ze(e.message) || hr(e.message) ? {
    default: ze(e.message) ? e.message : () => e.message
  } : null);
  return o.appContext = n, or(o, t), US(e).appendChild(t.firstElementChild), o.component;
}, qS = () => document.createElement("div"), YS = (e, t) => {
  const n = qS();
  e.onVanish = () => {
    or(null, n), Oo.delete(r);
  }, e.onAction = (l) => {
    const a = Oo.get(r);
    let s;
    e.showInput ? s = { value: r.inputValue, action: l } : s = l, e.callback ? e.callback(s, o.proxy) : l === "cancel" || l === "close" ? e.distinguishCancelAndClose && l !== "cancel" ? a.reject("close") : a.reject("cancel") : a.resolve(s);
  };
  const o = GS(e, n, t), r = o.proxy;
  for (const l in e)
    en(e, l) && !en(r.$props, l) && (r[l] = e[l]);
  return r.visible = !0, r;
};
function io(e, t = null) {
  if (!be)
    return Promise.reject();
  let n;
  return We(e) || hr(e) ? e = {
    message: e
  } : n = e.callback, new Promise((o, r) => {
    const l = YS(e, t ?? io._context);
    Oo.set(l, {
      options: e,
      callback: n,
      resolve: o,
      reject: r
    });
  });
}
const QS = ["alert", "confirm", "prompt"], XS = {
  alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
  confirm: { showCancelButton: !0 },
  prompt: { showCancelButton: !0, showInput: !0 }
};
QS.forEach((e) => {
  io[e] = ZS(e);
});
function ZS(e) {
  return (t, n, o, r) => {
    let l = "";
    return at(n) ? (o = n, l = "") : Qt(n) ? l = "" : l = n, io(Object.assign({
      title: l,
      message: t,
      type: "",
      ...XS[e]
    }, o, {
      boxType: e
    }), r);
  };
}
io.close = () => {
  Oo.forEach((e, t) => {
    t.doClose();
  }), Oo.clear();
};
io._context = null;
const dn = io;
dn.install = (e) => {
  dn._context = e._context, e.config.globalProperties.$msgbox = dn, e.config.globalProperties.$messageBox = dn, e.config.globalProperties.$alert = dn.alert, e.config.globalProperties.$confirm = dn.confirm, e.config.globalProperties.$prompt = dn.prompt;
};
const Gr = dn;
const JS = /* @__PURE__ */ z("i", null, null, -1), eE = {
  key: 0,
  class: "flex al-center p-y-8 m-b-8"
}, tE = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28"
}, nE = /* @__PURE__ */ z("i", null, null, -1), oE = { class: "flex al-center" }, rE = {
  key: 0,
  style: { width: "55px" },
  class: "flex ju-center m-r-28 m-t-24"
}, lE = { class: "m-t-24" }, oc = {
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
    const o = e, r = k();
    Q(
      () => [o.tableQuery],
      () => {
        var p;
        (p = r.value) == null || p.setScrollTop(0);
      }
    );
    const l = k([]);
    function a(p) {
      var c, g, b;
      l.value = p, u.value = p.length > 0 && p.length < ((c = o.data) == null ? void 0 : c.length), d.value = ((g = o.data) == null ? void 0 : g.length) > 0 && p.length === ((b = o.data) == null ? void 0 : b.length), n("handleSeleted", l.value);
    }
    function s() {
      n("handleBatchDel", l.value);
    }
    function i(p, c) {
      if (c.rowIndex)
        p = c.rowIndex;
      else if (c.rowIndex === !1)
        return "";
      const { pageIndex: g = 1, pageSize: b = 20 } = o.tableQuery;
      return p + 1 + (g - 1) * b;
    }
    const u = k(!1), d = k(!1);
    function f() {
      r.value.toggleAllSelection();
    }
    function v(p, c) {
      return o.selectDisabled && o.selectDisabled(c) && (p != null && p.isSelected(c)) && p.toggleRowSelection(c), p == null ? void 0 : p.isSelected(c);
    }
    return t({ handleCheckAll: f }), (p, c) => {
      var T, S, x, N;
      const g = zn, b = pS, m = Fu, w = _u, y = fS, C = aC, _ = $S;
      return we((E(), B("div", {
        class: "zn-table-content",
        style: Te({ height: e.height })
      }, [
        ee(y, Ln({
          ref_key: "tableRef",
          ref: r,
          class: ["flex-1", { "hide-checkAll": e.hideDftCheckAll && !e.headSelect }],
          data: e.data,
          onSelectionChange: a
        }, { ...p.$attrs, ...e.prop }), ei({
          append: G(() => {
            var F;
            return [
              re(p.$slots, "append"),
              (F = e.data) != null && F.length && e.showBatchDel ? (E(), B("div", eE, [
                e.showSelect ? (E(), B("div", tE, [
                  ee(g, {
                    "model-value": d.value,
                    indeterminate: u.value,
                    class: "table-check-all",
                    onChange: f
                  }, null, 8, ["model-value", "indeterminate"])
                ])) : U("", !0),
                re(p.$slots, "batch-action", { selection: l.value }, () => {
                  var W;
                  return [
                    ee(w, {
                      disabled: !((W = l.value) != null && W.length),
                      plain: "",
                      type: "danger",
                      onClick: s
                    }, {
                      default: G(() => [
                        Xt("批量删除")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                })
              ])) : U("", !0)
            ];
          }),
          default: G(() => [
            e.showSelect ? (E(), j(b, {
              key: 0,
              type: "selection",
              width: "55",
              align: "center"
            }, {
              header: G(() => [
                JS
              ]),
              default: G((F) => [
                re(p.$slots, "select", gc(mc(F)), () => [
                  ee(g, {
                    disabled: e.selectDisabled && e.selectDisabled(F.row),
                    "model-value": v(F.store, F.row),
                    onChange: (W) => F.store.toggleRowSelection(F.row)
                  }, null, 8, ["disabled", "model-value", "onChange"])
                ])
              ]),
              _: 3
            })) : U("", !0),
            e.showIndex ? (E(), j(b, {
              key: 1,
              label: "序号",
              type: "index",
              align: "center",
              width: "70"
            }, {
              default: G(({ $index: F, row: W }) => [
                Xt(ce(i(F, W)), 1)
              ]),
              _: 1
            })) : U("", !0),
            re(p.$slots, "default")
          ]),
          _: 2
        }, [
          e.customEmpty ? {
            name: "empty",
            fn: G(() => [
              z("div", null, [
                e.loading ? U("", !0) : (E(), j(m, {
                  key: 0,
                  style: { width: "100%", height: "100%" }
                }))
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["class", "data"]),
        (T = e.summaryData) != null && T.length ? (E(), j(y, {
          key: 0,
          data: e.summaryData,
          "show-header": !1
        }, {
          empty: G(() => [
            nE
          ]),
          default: G(() => [
            e.showSelect ? (E(), j(b, {
              key: 0,
              width: "55"
            })) : U("", !0),
            e.showIndex ? (E(), j(b, {
              key: 1,
              width: "60"
            })) : U("", !0),
            re(p.$slots, "summary-columns", {}, () => [
              re(p.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["data"])) : U("", !0),
        we(z("div", oE, [
          e.showSelect && !e.headSelect && (e.hideDftCheckAll && !e.showBatchDel || p.$slots.footer) ? (E(), B("div", rE, [
            ee(g, {
              "model-value": d.value,
              indeterminate: u.value,
              class: "table-check-all",
              onChange: f
            }, null, 8, ["model-value", "indeterminate"])
          ])) : U("", !0),
          z("div", lE, [
            re(p.$slots, "footer", { selection: l.value })
          ]),
          e.showP ? (E(), j(C, {
            key: 1,
            class: "table-pagination m-t-24",
            currentPage: (S = e.tableQuery) == null ? void 0 : S.pageIndex,
            "page-size": (x = e.tableQuery) == null ? void 0 : x.pageSize,
            "page-sizes": [20, 30, 50, 100, 200],
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total ?? 0,
            onSizeChange: c[0] || (c[0] = (F) => n("handleSizeChange", F)),
            onCurrentChange: c[1] || (c[1] = (F) => n("handleCurrentChange", F))
          }, null, 8, ["currentPage", "page-size", "total"])) : U("", !0)
        ], 512), [
          [qe, (N = e.data) == null ? void 0 : N.length]
        ])
      ], 4)), [
        [_, e.loading]
      ]);
    };
  }
};
const aE = {
  __name: "index",
  props: ["modelValue"],
  emits: ["update:modelValue", "change", "blur"],
  setup(e, { emit: t }) {
    const n = e, o = O({
      get() {
        return n.modelValue;
      },
      set(l) {
        n.modelValue !== l && (t("update:modelValue", l), t("change", l));
      }
    });
    function r({ target: { value: l } }) {
      const a = Number(l);
      o.value = a, t("blur", a);
    }
    return (l, a) => {
      const s = r2;
      return E(), j(s, {
        modelValue: h(o),
        "onUpdate:modelValue": a[0] || (a[0] = (i) => Ft(o) ? o.value = i : null),
        class: "el-input-number",
        controls: !1,
        onBlur: r
      }, null, 8, ["modelValue"]);
    };
  }
};
const sE = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, iE = { class: "list-scroll-search" }, uE = {
  key: 0,
  class: "list"
}, cE = ["onClick"], dE = {
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
    const o = e, r = k([]), l = k({ pageIndex: 1, pageSize: 20 }), a = k();
    let s = !1;
    const i = k(!1), u = k(!1);
    Ae(() => {
      u.value = !0, f();
    }), Q(
      () => JSON.stringify(o.defaultParams),
      () => {
        d();
      }
    );
    function d() {
      r.value = [], a.value = void 0, l.value.pageIndex = 1, f();
    }
    async function f() {
      const { option: g, api: b, searchKey: m, formatDataFc: w } = o;
      i.value = !0;
      const y = {
        ...o.defaultParams,
        ...l.value,
        [m]: a.value
      }, { data: C } = await b(y);
      i.value = !1;
      const { ok: _, data: T } = C ?? {};
      if (_ && (T != null && T.length)) {
        let S = T.filter((x) => r.value.every((N) => N[g.key] !== x[g.key]));
        w && (S = w(S)), r.value.push(...S), o.modelValue ? r.value.find((N) => N[o.option.key] === o.modelValue) || v() : !o.modelValue && o.defaultFirst && c(0), (T == null ? void 0 : T.length) < l.value.pageSize && (s = !0);
      } else
        s = !0;
      r.value.length || c(-1);
    }
    function v() {
      !s && !i.value && (l.value.pageIndex++, f());
    }
    function p() {
      l.value.pageIndex = 1, r.value = [], f();
    }
    function c(g) {
      let b, m;
      g !== -1 && (b = r.value[g][option.key], m = r.value[g][option.label]), n("update:modelValue", b), n("update:label", m), n("change", b);
    }
    return t({
      handleSearch: p
    }), (g, b) => {
      const m = Pe, w = Ro, y = Fu, C = wS;
      return E(), B("div", iE, [
        ee(w, {
          placeholder: e.placeholder,
          modelValue: a.value,
          "onUpdate:modelValue": b[0] || (b[0] = (_) => a.value = _),
          clearable: "",
          onClear: p,
          onKeyup: Le(p, ["enter"])
        }, {
          suffix: G(() => [
            ee(m, {
              class: "pointer",
              onClick: p
            }, {
              default: G(() => [
                ee(h($m))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["placeholder", "modelValue", "onKeyup"]),
        u.value ? we((E(), B("ul", uE, [
          (E(!0), B(Ve, null, vn(r.value, (_, T) => (E(), B("li", {
            key: T,
            class: L({ active: e.modelValue === _[e.option.key] }),
            onClick: (S) => c(T)
          }, ce(_[e.option.label]), 11, cE))), 128))
        ])), [
          [C, v]
        ]) : U("", !0),
        i.value ? (E(), j(m, {
          key: 1,
          class: L({ "is-loading": i.value && !h(s) })
        }, {
          default: G(() => [
            ee(h(_r))
          ]),
          _: 1
        }, 8, ["class"])) : U("", !0),
        we(ee(y, { style: { width: "100%" } }, null, 512), [
          [qe, !i.value && !r.value.length]
        ])
      ]);
    };
  }
}, rc = /* @__PURE__ */ sE(dE, [["__scopeId", "data-v-86cb7180"]]), fE = {
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
    const n = e, o = k();
    let r, l, a;
    function s(f) {
      (!f || a !== f) && (l = void 0, r == null || r.scrollTo({ top: 0 })), a = f, t("remote-method", f);
    }
    function i(f) {
      t("visible-change", f), f ? u() : r == null || r.removeEventListener("scroll", d);
    }
    function u() {
      setTimeout(() => {
        r = o.value.scrollbar.wrapRef;
        const f = r.querySelector(".selected");
        let v = 0;
        f && (v = f.offsetTop - (r.offsetHeight - 34)), r == null || r.scrollTo({ top: v }), l = void 0, r == null || r.addEventListener("scroll", d);
      }, 0);
    }
    function d({ target: { offsetHeight: f, scrollHeight: v, scrollTop: p } }) {
      f + p > v - n.diffBottom && !n.loading && (l === void 0 || l && l < p) && (l = p, t("loadMore"));
    }
    return (f, v) => {
      const p = Vu;
      return E(), j(p, {
        ref_key: "selectRef",
        ref: o,
        "remote-method": s,
        onVisibleChange: i
      }, {
        default: G(() => [
          re(f.$slots, "default")
        ]),
        _: 3
      }, 512);
    };
  }
}, lc = {
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
    const o = e, r = k(null);
    function l(S) {
      if (T(o.modelValue))
        r.value = a.value.filter((x) => o.modelValue.includes(x[o.option.key]));
      else if (o.modelValue) {
        const x = a.value.find((N) => N[o.option.key] === S);
        !x && o.allowCreate ? r.value = o.modelValue : r.value = x;
      } else
        r.value = null;
      S !== o.modelValue && n("change", r.value);
    }
    const a = k([]);
    let s = [], i = [], u = !1;
    const d = k({ pageIndex: 1, pageSize: 20 }), f = k();
    let v = !1;
    const p = k(!1);
    Ae(() => {
      o.init && g();
    }), Q(
      () => JSON.stringify(o.defaultParams),
      () => {
        c();
      }
    ), Q(
      () => o.insertList,
      () => {
        C();
      }
    ), Q(() => o.modelValue, l);
    function c() {
      a.value = [], s = [], f.value = void 0, d.value.pageIndex = 1, g();
    }
    async function g() {
      const { option: S, api: x, searchKey: N, formatSearchKey: F, formatDataFc: W, allowCreate: K } = o;
      if (!o.api)
        throw "scroll-select-v2 组件 未定义api";
      p.value = !0;
      let A = {
        ...o.defaultParams,
        ...d.value,
        [N]: f.value
      };
      F && (A = { ...A, ...F(f.value) });
      const { data: M } = await x(A);
      p.value = !1;
      const { ok: P, data: D } = M ?? {};
      if (P) {
        let q = (D == null ? void 0 : D.filter((H) => !a.value.find((I) => I[S.key] === H[S.key]))) || [];
        if (W && (q = W(q)), f.value)
          v = ~~(D == null ? void 0 : D.length) < d.value.pageSize, i.push(...q), a.value = [...i];
        else {
          if (q != null && q.length && s.push(...q), C(), u = v = ~~(D == null ? void 0 : D.length) < d.value.pageSize, o.modelValue)
            if (T(o.modelValue)) {
              const H = a.value.filter((I) => o.modelValue.includes(I[o.option.key]));
              H.length < o.modelValue.length && b(), _(H);
            } else {
              const H = a.value.find((I) => I[S.key] === o.modelValue);
              H ? _(H) : b();
            }
          !o.modelValue && o.defaultFirst && _(a.value[0]);
        }
      } else
        v = !0;
    }
    function b() {
      !v && !p.value && (d.value.pageIndex++, g());
    }
    function m(S) {
      S ? (i = [], f.value = S, d.value.pageIndex = 1, a.value = [], g()) : w(!1);
    }
    function w(S) {
      o.modelValue || (S ? (C(), v = u) : f.value = void 0), S || (f.value = void 0, s.push(...(i == null ? void 0 : i.filter((x) => !s.find((N) => N[option.key] === x[option.key]))) || []), C(), v = u), n("visibleChange", S);
    }
    function y() {
      n("clear"), f.value = void 0, d.value.pageIndex = 1, C(), v = u;
    }
    function C() {
      const S = (s == null ? void 0 : s.filter((x) => !o.insertList.find((N) => N[option.key] === x[option.key]))) || [];
      a.value = [...o.insertList, ...S];
    }
    function _(S) {
      let x = S == null ? void 0 : S[o.option.key];
      T(S) && (x = S.map((N) => N[o.option.key])), r.value = S, n("update:modelValue", x), n("update:data", S), x !== o.modelValue && n("change", S);
    }
    function T(S) {
      return Object.prototype.toString.call(S) === "[object Array]";
    }
    return t({ reset: c, initData: C }), (S, x) => {
      const N = Wu;
      return E(), j(fE, {
        loading: p.value,
        "model-value": r.value,
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
        onRemoteMethod: m,
        onLoadMore: b,
        onClear: y,
        onVisibleChange: w,
        onChange: _,
        "value-key": e.option.key
      }, {
        default: G(() => [
          (E(!0), B(Ve, null, vn(a.value, (F) => (E(), j(N, {
            key: F[e.option.key],
            label: e.option.label.split(",").map((W) => F[W]).join("-"),
            value: F
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["loading", "model-value", "allowCreate", "value-key"]);
    };
  }
};
const pE = {
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
}, Us = {
  十: { value: 10, secUnit: !1 },
  百: { value: 100, secUnit: !1 },
  千: { value: 1e3, secUnit: !1 },
  万: { value: 1e4, secUnit: !0 },
  亿: { value: 1e8, secUnit: !0 }
};
function Gs(e) {
  for (var t = 0, n = 0, o = 0, r = !1, l = e.split(""), a = 0; a < l.length; a++) {
    var s = pE[l[a]];
    if (typeof s < "u")
      o = s, a === l.length - 1 && (n += o);
    else {
      var i = Us[l[a]].value;
      r = Us[l[a]].secUnit, r ? (n = (n + o) * i, t += n, n = 0) : n += o * i, o = 0;
    }
  }
  return t + n;
}
const KE = (e) => new RegExp(`<${e}[^>]*>[\\s\\S]*?</[^>]*${e}>`, "i"), vE = /^[\u4e00-\u9fa5]+$/, hE = /^1[3-9]\d{9}$/, gE = /^[0-9]{4}-\d{7}$/, mE = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, bE = /^https?:\/\/.{1,}\..{1,}$/i, yE = /^[0-9]+$/, wE = /^\d+\.*[\d+]{0,}$/, CE = /[\u4E00-\u9FFF]+/g, SE = /^[a-z0-9]+$/i, UE = /^-[0-9]+$/i, EE = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, _E = /^[a-zA-Z0-9]{10,20}$/, TE = /^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{6,20}$/, $E = /^[0-9a-zA-Z]{4}$/, kE = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g, OE = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/, Go = /[一二三四五六七八九十]{1,}/, GE = /<tr[^>]*>[^\{^\}]*?\[{1}[\s\S^\{^\}]*?\]{1}[^\{^\}]*?<\/[^>]*tr>/gi, qE = /<td[^>]*>[\s\S]*?<\/[^>]*td>/gi, YE = (e) => typeof e == "string", xE = (e) => hE.test(e), AE = (e) => gE.test(e), NE = (e) => mE.test(e), LE = (e) => bE.test(e), PE = (e) => wE.test(e), ME = (e) => yE.test(e), IE = (e) => SE.test(e), QE = (e) => CE.test(e), RE = (e) => EE.test(e), XE = (e) => _E.test(e), BE = (e) => TE.test(e), zE = (e) => $E.test(e), FE = (e) => kE.test(e), DE = (e) => OE.test(e), Kn = (e) => vE.test(e), HE = (e) => {
  const t = new FormData();
  return Object.keys(e).forEach((n) => {
    e[n] !== null && t.append(n, e[n]);
  }), t;
}, ZE = (e, t = !0) => {
  const n = document.createElement("a");
  n.href = e, t && (n.target = "_blank"), n.click();
}, JE = (e) => {
  const [t, ...n] = e.split(".").reverse();
  return [n.reverse().reduce((o, r) => o + r, ""), t];
}, e4 = (e) => {
  switch (!0) {
    case e / 1024 < 1024:
      return `${(e / 1024).toFixed(2)}kb`;
    default:
      return `${(e / 1024 / 1024).toFixed(2)}Mb`;
  }
}, Pr = (e) => Object.prototype.toString.call(e), qs = (e, t, n = !1) => {
  if (Object.prototype.toString.call(e) !== "[object Array]")
    return [];
  const o = t == null ? void 0 : t.split(",");
  function r(l, a) {
    var i, u;
    switch (!0) {
      case (!!((i = l == null ? void 0 : l.match(Go)) != null && i.length) && !!((u = a == null ? void 0 : a.match(Go)) != null && u.length)):
        return Gs(l.match(Go)[0]) - Gs(a == null ? void 0 : a.match(Go)[0]);
      case (Kn(l) && Kn(a)):
      case (Kn(l) && !Kn(a)):
        return -1;
      case (!Kn(l) && Kn(a)):
        return 1;
    }
    let s = 0;
    return (l == null ? void 0 : l.length) !== (a == null ? void 0 : a.length) ? s += (l == null ? void 0 : l.length) - (a == null ? void 0 : a.length) : s += (l == null ? void 0 : l.localeCompare(a)) + ((l - a) * 2 || 0), s;
  }
  return e.sort((l, a) => {
    let s = 0;
    if (o)
      o == null || o.forEach((i) => {
        var u, d;
        try {
          const f = (u = l == null ? void 0 : l[i]) == null ? void 0 : u.toString().trim(), v = (d = a == null ? void 0 : a[i]) == null ? void 0 : d.toString().trim();
          s += r(f, v);
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
}, t4 = (e, t, n = "children") => qs(e, t).map(({ [n]: o, ...r }) => ({ ...r, children: qs(o, t) })), VE = (e) => new Promise((t) => {
  const n = document.createElement("input");
  e && (n.accept = e), n.type = "file", n.onchange = (o) => {
    const r = o.target.files[0];
    o.target.value = null, t(r);
  }, n.click();
}), Ys = (e, t, n = "application/vnd.ms-excel;charset=utf-8") => {
  let o;
  e instanceof Blob ? o = e : o = new Blob([e], { type: n });
  const r = window.URL.createObjectURL(o), l = document.createElement("a");
  l.download = t, l.href = r, l.click(), l.remove(), window.URL.revokeObjectURL(r);
}, da = (e, t = 2) => {
  switch (Pr(e)) {
    case "[object Number]":
      return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
    default:
      return e ?? 0;
  }
}, n4 = (e) => {
  const { columns: t, data: n } = e, o = [];
  return t.forEach((r, l) => {
    if (l === 0) {
      o[l] = "合计";
      return;
    }
    const a = n == null ? void 0 : n.map((s) => Number(s[r.property] || s[r] || 0));
    a.every((s) => Number.isNaN(s)) ? o[l] = "" : o[l] = `${a.reduce((s, i) => {
      const u = Number(i);
      return Number.isNaN(u) ? s : da(s + i);
    }, 0)}`;
  }), o;
}, o4 = (e) => {
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
      return Number.isNaN(u) ? s : da(s + i);
    }, 0)}`;
  }), o;
}, r4 = (e, t, n) => {
  const o = {
    [n]: "合计"
  };
  return e.forEach((r) => {
    t.forEach((l) => {
      o[l] = da((o[l] || 0) + Number(r[l] || 0));
    });
  }), o;
}, _t = (e, t = "请正确填写") => ({
  validator: (n, o, r) => {
    let l = !0;
    switch (Pr(e)) {
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
}), l4 = {
  url: _t(LE),
  phone: _t([xE, AE]),
  email: _t(NE),
  double: _t(PE),
  int: _t(ME),
  intAndLetter: _t(IE),
  idCard: _t(RE),
  psw: _t(BE, "密码必须包含大小写字母、数字和特殊字符，长度为6-20位"),
  captcha: _t(zE),
  socialCreditCode: _t(FE),
  carNumber: _t(DE)
}, a4 = {
  required: !0,
  message: "必填项",
  validator: function(e, t, n) {
    const o = Pr(t);
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
}, WE = {
  image: "image/*",
  xlsx: ".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  video: "video/*",
  all: "*"
}, po = {
  create: "create",
  update: "update"
}, s4 = {
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
      dialogTypeOpt: po,
      dialogType: "",
      dialogTitleMap: {
        [po.create]: "新增",
        [po.update]: "修改"
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
      this.resetTemp(), this.dialogType = po.create, this.dialogVisible = !0;
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
      Gr.confirm("是否确定此操作？", "系统提示", {
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
      this.resetTemp(), this.temp = { ...e }, t && t(e), this.dialogType = po.update, this.dialogVisible = !0;
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
      this.handleLoading = !1, e ? (Ks.success("操作成功"), this.dialogVisible = !1, this.getTableData()) : Ks.warning("操作失败");
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
        const t = await VE(WE.xlsx), n = this.getImportQuery(t);
        this.handleLoading = !0;
        const { data: o } = await this.apiOpt.import(HE(n), { responseType: "blob" });
        this.handleImportSuccess(o);
      } else
        console.log("未定义handleImport方法");
    },
    // 上传接口调用成功
    handleImportSuccess(e) {
      this.handleLoading = !1;
      const t = Pr(e);
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
          Gr.alert("部分上传成功，请修改失败的部分重新上传", "系统提示", { autofocus: !1, type: "warning" }), Ys(e, "导入失败部分.xlsx");
          break;
      }
    },
    // 上传内容部分成功
    handleImportSomeSuccess(e) {
      const { ok: t, data: n } = e;
      if (t) {
        const { errorCount: o } = n || {};
        o ? (Gr.alert("部分上传成功，请修改失败的部分重新上传", "系统提示", { autofocus: !1, type: "warning" }), this.handleImportError(e)) : this.handleSuccess(e);
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
        this.handleLoading = !1, Ys(n, `${this.fileName || Date.now()}.xlsx`);
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
}, Qs = { VbTable: oc, VbInputNumber: aE, VbListScrollSearch: rc, VbScrollSelect: lc }, i4 = {
  VbTable: oc,
  VbListScrollSearch: rc,
  VbScrollSelect: lc,
  install(e) {
    for (const t in Qs)
      e.component(
        t,
        Qs[t]
        // defineComponent({
        // 	inject: ["locale"],
        // 	inheritAttrs: false,
        // 	render() {
        // 		const { locale, $attrs } = this;
        // 		return h("el-config-provider", { locale }, [h(coms[name], $attrs)]);
        // 	}
        // })
      );
  }
};
export {
  _E as REGBUSINESSLICENSE,
  $E as REGCAPTCHA,
  OE as REGCARNUMBER,
  vE as REGCH,
  Go as REGCHINESENUM,
  wE as REGDOUBLE,
  mE as REGEMAIL,
  EE as REGIDCARD,
  yE as REGINT,
  SE as REGINTANDLETTER,
  gE as REGLANDLINE,
  hE as REGMOBILE,
  TE as REGPSW,
  CE as REGRECHINESE,
  UE as REGRENEGATIVE,
  GE as REGTABLECYCLETR,
  bE as REGURL,
  kE as SOCIALCREDITCODE,
  i4 as default,
  Ys as downloadFile,
  JE as formatFileNameSuffix,
  e4 as formatFileSize,
  da as formatNumber,
  o4 as getMoreSummaries,
  n4 as getSummaries,
  r4 as getSummaryDatas,
  XE as isBusinessLicense,
  Kn as isCH,
  DE as isCarNumber,
  QE as isChinese,
  zE as isCpatcha,
  PE as isDouble,
  NE as isEmail,
  RE as isIdCard,
  ME as isInt,
  IE as isIntAndLetter,
  AE as isLandLine,
  xE as isMobile,
  BE as isPsw,
  FE as isSocialCreditCode,
  YE as isStr,
  LE as isUrl,
  ZE as jumpExternalChain,
  HE as obj2Formdata,
  t4 as recursionSort,
  KE as regTag,
  qE as regTd,
  a4 as required,
  VE as selectLocalFile,
  qs as sortFuc,
  s4 as tableMixin,
  Pr as typeCheck,
  l4 as validatorFun
};
