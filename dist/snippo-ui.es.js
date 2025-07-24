import * as X from "react";
import wr, { useState as de, useCallback as se, forwardRef as Vr, useContext as Br, useLayoutEffect as qi, useRef as Re, useMemo as Ye, createContext as ea, Component as ta, Fragment as _t, useEffect as Je } from "react";
import { createPortal as na } from "react-dom";
var ut = { exports: {} }, Ue = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function ra() {
  if (On) return Ue;
  On = 1;
  var e = wr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, c) {
    var f, l = {}, v = null, b = null;
    c !== void 0 && (v = "" + c), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (b = u.ref);
    for (f in u) i.call(u, f) && !a.hasOwnProperty(f) && (l[f] = u[f]);
    if (s && s.defaultProps) for (f in u = s.defaultProps, u) l[f] === void 0 && (l[f] = u[f]);
    return { $$typeof: t, type: s, key: v, ref: b, props: l, _owner: n.current };
  }
  return Ue.Fragment = r, Ue.jsx = o, Ue.jsxs = o, Ue;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function ia() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = wr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), I = Symbol.iterator, p = "@@iterator";
    function m(d) {
      if (d === null || typeof d != "object")
        return null;
      var A = I && d[I] || d[p];
      return typeof A == "function" ? A : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(d) {
      {
        for (var A = arguments.length, F = new Array(A > 1 ? A - 1 : 0), O = 1; O < A; O++)
          F[O - 1] = arguments[O];
        G("error", d, F);
      }
    }
    function G(d, A, F) {
      {
        var O = C.ReactDebugCurrentFrame, L = O.getStackAddendum();
        L !== "" && (A += "%s", F = F.concat([L]));
        var z = F.map(function(N) {
          return String(N);
        });
        z.unshift("Warning: " + A), Function.prototype.apply.call(console[d], console, z);
      }
    }
    var h = !1, g = !1, x = !1, E = !1, R = !1, M;
    M = Symbol.for("react.module.reference");
    function _(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === i || d === a || R || d === n || d === c || d === f || E || d === b || h || g || x || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === l || d.$$typeof === o || d.$$typeof === s || d.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === M || d.getModuleId !== void 0));
    }
    function K(d, A, F) {
      var O = d.displayName;
      if (O)
        return O;
      var L = A.displayName || A.name || "";
      return L !== "" ? F + "(" + L + ")" : F;
    }
    function j(d) {
      return d.displayName || "Context";
    }
    function U(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case n:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case s:
            var A = d;
            return j(A) + ".Consumer";
          case o:
            var F = d;
            return j(F._context) + ".Provider";
          case u:
            return K(d, d.render, "ForwardRef");
          case l:
            var O = d.displayName || null;
            return O !== null ? O : U(d.type) || "Memo";
          case v: {
            var L = d, z = L._payload, N = L._init;
            try {
              return U(N(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, T = 0, H, q, ee, fe, be, Fe, k;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function he() {
      {
        if (T === 0) {
          H = console.log, q = console.info, ee = console.warn, fe = console.error, be = console.group, Fe = console.groupCollapsed, k = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        T++;
      }
    }
    function Ae() {
      {
        if (T--, T === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, d, {
              value: H
            }),
            info: S({}, d, {
              value: q
            }),
            warn: S({}, d, {
              value: ee
            }),
            error: S({}, d, {
              value: fe
            }),
            group: S({}, d, {
              value: be
            }),
            groupCollapsed: S({}, d, {
              value: Fe
            }),
            groupEnd: S({}, d, {
              value: k
            })
          });
        }
        T < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = C.ReactCurrentDispatcher, ve;
    function ce(d, A, F) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (L) {
            var O = L.stack.trim().match(/\n( *(at )?)/);
            ve = O && O[1] || "";
          }
        return `
` + ve + d;
      }
    }
    var xe = !1, Oe;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      Oe = new De();
    }
    function w(d, A) {
      if (!d || xe)
        return "";
      {
        var F = Oe.get(d);
        if (F !== void 0)
          return F;
      }
      var O;
      xe = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = ue.current, ue.current = null, he();
      try {
        if (A) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (me) {
              O = me;
            }
            Reflect.construct(d, [], N);
          } else {
            try {
              N.call();
            } catch (me) {
              O = me;
            }
            d.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (me) {
            O = me;
          }
          d();
        }
      } catch (me) {
        if (me && O && typeof me.stack == "string") {
          for (var W = me.stack.split(`
`), ge = O.stack.split(`
`), $ = W.length - 1, te = ge.length - 1; $ >= 1 && te >= 0 && W[$] !== ge[te]; )
            te--;
          for (; $ >= 1 && te >= 0; $--, te--)
            if (W[$] !== ge[te]) {
              if ($ !== 1 || te !== 1)
                do
                  if ($--, te--, te < 0 || W[$] !== ge[te]) {
                    var ye = `
` + W[$].replace(" at new ", " at ");
                    return d.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", d.displayName)), typeof d == "function" && Oe.set(d, ye), ye;
                  }
                while ($ >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        xe = !1, ue.current = z, Ae(), Error.prepareStackTrace = L;
      }
      var He = d ? d.displayName || d.name : "", We = He ? ce(He) : "";
      return typeof d == "function" && Oe.set(d, We), We;
    }
    function Xe(d, A, F) {
      return w(d, !1);
    }
    function we(d) {
      var A = d.prototype;
      return !!(A && A.isReactComponent);
    }
    function Ve(d, A, F) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return w(d, we(d));
      if (typeof d == "string")
        return ce(d);
      switch (d) {
        case c:
          return ce("Suspense");
        case f:
          return ce("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case u:
            return Xe(d.render);
          case l:
            return Ve(d.type, A, F);
          case v: {
            var O = d, L = O._payload, z = O._init;
            try {
              return Ve(z(L), A, F);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, Cn = {}, An = C.ReactDebugCurrentFrame;
    function at(d) {
      if (d) {
        var A = d._owner, F = Ve(d.type, d._source, A ? A.type : null);
        An.setExtraStackFrame(F);
      } else
        An.setExtraStackFrame(null);
    }
    function Bi(d, A, F, O, L) {
      {
        var z = Function.call.bind(_e);
        for (var N in d)
          if (z(d, N)) {
            var W = void 0;
            try {
              if (typeof d[N] != "function") {
                var ge = Error((O || "React class") + ": " + F + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              W = d[N](A, N, O, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              W = $;
            }
            W && !(W instanceof Error) && (at(L), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", F, N, typeof W), at(null)), W instanceof Error && !(W.message in Cn) && (Cn[W.message] = !0, at(L), y("Failed %s type: %s", F, W.message), at(null));
          }
      }
    }
    var Pi = Array.isArray;
    function Ot(d) {
      return Pi(d);
    }
    function Ti(d) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, F = A && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return F;
      }
    }
    function Oi(d) {
      try {
        return yn(d), !1;
      } catch {
        return !0;
      }
    }
    function yn(d) {
      return "" + d;
    }
    function xn(d) {
      if (Oi(d))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ti(d)), yn(d);
    }
    var En = C.ReactCurrentOwner, Xi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Gn, Rn;
    function Wi(d) {
      if (_e.call(d, "ref")) {
        var A = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Mi(d) {
      if (_e.call(d, "key")) {
        var A = Object.getOwnPropertyDescriptor(d, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Ni(d, A) {
      typeof d.ref == "string" && En.current;
    }
    function Di(d, A) {
      {
        var F = function() {
          Gn || (Gn = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        F.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: F,
          configurable: !0
        });
      }
    }
    function Zi(d, A) {
      {
        var F = function() {
          Rn || (Rn = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        F.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: F,
          configurable: !0
        });
      }
    }
    var Hi = function(d, A, F, O, L, z, N) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: A,
        ref: F,
        props: N,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function Li(d, A, F, O, L) {
      {
        var z, N = {}, W = null, ge = null;
        F !== void 0 && (xn(F), W = "" + F), Mi(A) && (xn(A.key), W = "" + A.key), Wi(A) && (ge = A.ref, Ni(A, L));
        for (z in A)
          _e.call(A, z) && !Xi.hasOwnProperty(z) && (N[z] = A[z]);
        if (d && d.defaultProps) {
          var $ = d.defaultProps;
          for (z in $)
            N[z] === void 0 && (N[z] = $[z]);
        }
        if (W || ge) {
          var te = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          W && Di(N, te), ge && Zi(N, te);
        }
        return Hi(d, W, ge, L, O, En.current, N);
      }
    }
    var Xt = C.ReactCurrentOwner, Sn = C.ReactDebugCurrentFrame;
    function Ze(d) {
      if (d) {
        var A = d._owner, F = Ve(d.type, d._source, A ? A.type : null);
        Sn.setExtraStackFrame(F);
      } else
        Sn.setExtraStackFrame(null);
    }
    var Wt;
    Wt = !1;
    function Mt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function Fn() {
      {
        if (Xt.current) {
          var d = U(Xt.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Yi(d) {
      return "";
    }
    var wn = {};
    function Ji(d) {
      {
        var A = Fn();
        if (!A) {
          var F = typeof d == "string" ? d : d.displayName || d.name;
          F && (A = `

Check the top-level render call using <` + F + ">.");
        }
        return A;
      }
    }
    function Vn(d, A) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var F = Ji(A);
        if (wn[F])
          return;
        wn[F] = !0;
        var O = "";
        d && d._owner && d._owner !== Xt.current && (O = " It was passed a child from " + U(d._owner.type) + "."), Ze(d), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, O), Ze(null);
      }
    }
    function Bn(d, A) {
      {
        if (typeof d != "object")
          return;
        if (Ot(d))
          for (var F = 0; F < d.length; F++) {
            var O = d[F];
            Mt(O) && Vn(O, A);
          }
        else if (Mt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var L = m(d);
          if (typeof L == "function" && L !== d.entries)
            for (var z = L.call(d), N; !(N = z.next()).done; )
              Mt(N.value) && Vn(N.value, A);
        }
      }
    }
    function zi(d) {
      {
        var A = d.type;
        if (A == null || typeof A == "string")
          return;
        var F;
        if (typeof A == "function")
          F = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === l))
          F = A.propTypes;
        else
          return;
        if (F) {
          var O = U(A);
          Bi(F, d.props, "prop", O, d);
        } else if (A.PropTypes !== void 0 && !Wt) {
          Wt = !0;
          var L = U(A);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ji(d) {
      {
        for (var A = Object.keys(d.props), F = 0; F < A.length; F++) {
          var O = A[F];
          if (O !== "children" && O !== "key") {
            Ze(d), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), Ze(null);
            break;
          }
        }
        d.ref !== null && (Ze(d), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ze(null));
      }
    }
    var Pn = {};
    function Tn(d, A, F, O, L, z) {
      {
        var N = _(d);
        if (!N) {
          var W = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Yi();
          ge ? W += ge : W += Fn();
          var $;
          d === null ? $ = "null" : Ot(d) ? $ = "array" : d !== void 0 && d.$$typeof === t ? ($ = "<" + (U(d.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof d, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, W);
        }
        var te = Li(d, A, F, L, z);
        if (te == null)
          return te;
        if (N) {
          var ye = A.children;
          if (ye !== void 0)
            if (O)
              if (Ot(ye)) {
                for (var He = 0; He < ye.length; He++)
                  Bn(ye[He], d);
                Object.freeze && Object.freeze(ye);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Bn(ye, d);
        }
        if (_e.call(A, "key")) {
          var We = U(d), me = Object.keys(A).filter(function(Ki) {
            return Ki !== "key";
          }), Nt = me.length > 0 ? "{key: someKey, " + me.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pn[We + Nt]) {
            var $i = me.length > 0 ? "{" + me.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Nt, We, $i, We), Pn[We + Nt] = !0;
          }
        }
        return d === i ? ji(te) : zi(te), te;
      }
    }
    function ki(d, A, F) {
      return Tn(d, A, F, !0);
    }
    function _i(d, A, F) {
      return Tn(d, A, F, !1);
    }
    var Ui = _i, Qi = ki;
    Qe.Fragment = i, Qe.jsx = Ui, Qe.jsxs = Qi;
  }()), Qe;
}
var Wn;
function aa() {
  return Wn || (Wn = 1, process.env.NODE_ENV === "production" ? ut.exports = ra() : ut.exports = ia()), ut.exports;
}
var ae = aa();
function Me(e) {
  "@babel/helpers - typeof";
  return Me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Me(e);
}
function ua(e, t) {
  if (Me(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(e, t);
    if (Me(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pr(e) {
  var t = ua(e, "string");
  return Me(t) == "symbol" ? t : t + "";
}
function qe(e, t, r) {
  return (t = Pr(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Mn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mn(Object(r), !0).forEach(function(i) {
      qe(e, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mn(Object(r)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return e;
}
function oa(e) {
  if (Array.isArray(e)) return e;
}
function sa(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var i, n, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (i = a.call(r)).done) && (s.push(i.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, n = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw n;
      }
    }
    return s;
  }
}
function Ut(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function Tr(e, t) {
  if (e) {
    if (typeof e == "string") return Ut(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ut(e, t) : void 0;
  }
}
function ca() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Be(e, t) {
  return oa(e) || sa(e, t) || Tr(e, t) || ca();
}
function la(e, t) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (t.indexOf(i) !== -1) continue;
    r[i] = e[i];
  }
  return r;
}
function Te(e, t) {
  if (e == null) return {};
  var r, i, n = la(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++) r = a[i], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var da = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function fa(e) {
  var t = e.defaultInputValue, r = t === void 0 ? "" : t, i = e.defaultMenuIsOpen, n = i === void 0 ? !1 : i, a = e.defaultValue, o = a === void 0 ? null : a, s = e.inputValue, u = e.menuIsOpen, c = e.onChange, f = e.onInputChange, l = e.onMenuClose, v = e.onMenuOpen, b = e.value, I = Te(e, da), p = de(s !== void 0 ? s : r), m = Be(p, 2), C = m[0], y = m[1], G = de(u !== void 0 ? u : n), h = Be(G, 2), g = h[0], x = h[1], E = de(b !== void 0 ? b : o), R = Be(E, 2), M = R[0], _ = R[1], K = se(function(ee, fe) {
    typeof c == "function" && c(ee, fe), _(ee);
  }, [c]), j = se(function(ee, fe) {
    var be;
    typeof f == "function" && (be = f(ee, fe)), y(be !== void 0 ? be : ee);
  }, [f]), U = se(function() {
    typeof v == "function" && v(), x(!0);
  }, [v]), S = se(function() {
    typeof l == "function" && l(), x(!1);
  }, [l]), T = s !== void 0 ? s : C, H = u !== void 0 ? u : g, q = b !== void 0 ? b : M;
  return B(B({}, I), {}, {
    inputValue: T,
    menuIsOpen: H,
    onChange: K,
    onInputChange: j,
    onMenuClose: S,
    onMenuOpen: U,
    value: q
  });
}
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r) ({}).hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, P.apply(null, arguments);
}
function ga(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Nn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, Pr(i.key), i);
  }
}
function pa(e, t, r) {
  return t && Nn(e.prototype, t), r && Nn(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Qt(e, t) {
  return Qt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Qt(e, t);
}
function ba(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Qt(e, t);
}
function ht(e) {
  return ht = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ht(e);
}
function Or() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Or = function() {
    return !!e;
  })();
}
function va(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ma(e, t) {
  if (t && (Me(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return va(e);
}
function Ia(e) {
  var t = Or();
  return function() {
    var r, i = ht(e);
    if (t) {
      var n = ht(this).constructor;
      r = Reflect.construct(i, arguments, n);
    } else r = i.apply(this, arguments);
    return ma(this, r);
  };
}
function ha(e) {
  if (Array.isArray(e)) return Ut(e);
}
function Ca(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Aa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function un(e) {
  return ha(e) || Ca(e) || Tr(e) || Aa();
}
function ya(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function xa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ea = /* @__PURE__ */ function() {
  function e(r) {
    var i = this;
    this._insertTag = function(n) {
      var a;
      i.tags.length === 0 ? i.insertionPoint ? a = i.insertionPoint.nextSibling : i.prepend ? a = i.container.firstChild : a = i.before : a = i.tags[i.tags.length - 1].nextSibling, i.container.insertBefore(n, a), i.tags.push(n);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(i) {
    i.forEach(this._insertTag);
  }, t.insert = function(i) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xa(this));
    var n = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = ya(n);
      try {
        a.insertRule(i, a.cssRules.length);
      } catch {
      }
    } else
      n.appendChild(document.createTextNode(i));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(i) {
      var n;
      return (n = i.parentNode) == null ? void 0 : n.removeChild(i);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), le = "-ms-", Ct = "-moz-", D = "-webkit-", Xr = "comm", on = "rule", sn = "decl", Ga = "@import", Wr = "@keyframes", Ra = "@layer", Sa = Math.abs, St = String.fromCharCode, Fa = Object.assign;
function wa(e, t) {
  return oe(e, 0) ^ 45 ? (((t << 2 ^ oe(e, 0)) << 2 ^ oe(e, 1)) << 2 ^ oe(e, 2)) << 2 ^ oe(e, 3) : 0;
}
function Mr(e) {
  return e.trim();
}
function Va(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Z(e, t, r) {
  return e.replace(t, r);
}
function $t(e, t) {
  return e.indexOf(t);
}
function oe(e, t) {
  return e.charCodeAt(t) | 0;
}
function tt(e, t, r) {
  return e.slice(t, r);
}
function Ee(e) {
  return e.length;
}
function cn(e) {
  return e.length;
}
function ot(e, t) {
  return t.push(e), e;
}
function Ba(e, t) {
  return e.map(t).join("");
}
var Ft = 1, je = 1, Nr = 0, Ie = 0, ne = 0, ke = "";
function wt(e, t, r, i, n, a, o) {
  return { value: e, root: t, parent: r, type: i, props: n, children: a, line: Ft, column: je, length: o, return: "" };
}
function $e(e, t) {
  return Fa(wt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Pa() {
  return ne;
}
function Ta() {
  return ne = Ie > 0 ? oe(ke, --Ie) : 0, je--, ne === 10 && (je = 1, Ft--), ne;
}
function Ce() {
  return ne = Ie < Nr ? oe(ke, Ie++) : 0, je++, ne === 10 && (je = 1, Ft++), ne;
}
function Se() {
  return oe(ke, Ie);
}
function bt() {
  return Ie;
}
function it(e, t) {
  return tt(ke, e, t);
}
function nt(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Dr(e) {
  return Ft = je = 1, Nr = Ee(ke = e), Ie = 0, [];
}
function Zr(e) {
  return ke = "", e;
}
function vt(e) {
  return Mr(it(Ie - 1, Kt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Oa(e) {
  for (; (ne = Se()) && ne < 33; )
    Ce();
  return nt(e) > 2 || nt(ne) > 3 ? "" : " ";
}
function Xa(e, t) {
  for (; --t && Ce() && !(ne < 48 || ne > 102 || ne > 57 && ne < 65 || ne > 70 && ne < 97); )
    ;
  return it(e, bt() + (t < 6 && Se() == 32 && Ce() == 32));
}
function Kt(e) {
  for (; Ce(); )
    switch (ne) {
      // ] ) " '
      case e:
        return Ie;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Kt(ne);
        break;
      // (
      case 40:
        e === 41 && Kt(e);
        break;
      // \
      case 92:
        Ce();
        break;
    }
  return Ie;
}
function Wa(e, t) {
  for (; Ce() && e + ne !== 57; )
    if (e + ne === 84 && Se() === 47)
      break;
  return "/*" + it(t, Ie - 1) + "*" + St(e === 47 ? e : Ce());
}
function Ma(e) {
  for (; !nt(Se()); )
    Ce();
  return it(e, Ie);
}
function Na(e) {
  return Zr(mt("", null, null, null, [""], e = Dr(e), 0, [0], e));
}
function mt(e, t, r, i, n, a, o, s, u) {
  for (var c = 0, f = 0, l = o, v = 0, b = 0, I = 0, p = 1, m = 1, C = 1, y = 0, G = "", h = n, g = a, x = i, E = G; m; )
    switch (I = y, y = Ce()) {
      // (
      case 40:
        if (I != 108 && oe(E, l - 1) == 58) {
          $t(E += Z(vt(y), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += vt(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += Oa(I);
        break;
      // \
      case 92:
        E += Xa(bt() - 1, 7);
        continue;
      // /
      case 47:
        switch (Se()) {
          case 42:
          case 47:
            ot(Da(Wa(Ce(), bt()), t, r), u);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * p:
        s[c++] = Ee(E) * C;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            m = 0;
          // ;
          case 59 + f:
            C == -1 && (E = Z(E, /\f/g, "")), b > 0 && Ee(E) - l && ot(b > 32 ? Zn(E + ";", i, r, l - 1) : Zn(Z(E, " ", "") + ";", i, r, l - 2), u);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (ot(x = Dn(E, t, r, c, f, n, s, G, h = [], g = [], l), a), y === 123)
              if (f === 0)
                mt(E, t, x, x, h, a, l, s, g);
              else
                switch (v === 99 && oe(E, 3) === 110 ? 100 : v) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mt(e, x, x, i && ot(Dn(e, x, x, 0, 0, n, s, G, n, h = [], l), g), n, g, l, s, i ? h : g);
                    break;
                  default:
                    mt(E, x, x, x, [""], g, 0, s, g);
                }
        }
        c = f = b = 0, p = C = 1, G = E = "", l = o;
        break;
      // :
      case 58:
        l = 1 + Ee(E), b = I;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && Ta() == 125)
            continue;
        }
        switch (E += St(y), y * p) {
          // &
          case 38:
            C = f > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            s[c++] = (Ee(E) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Se() === 45 && (E += vt(Ce())), v = Se(), f = l = Ee(G = E += Ma(bt())), y++;
            break;
          // -
          case 45:
            I === 45 && Ee(E) == 2 && (p = 0);
        }
    }
  return a;
}
function Dn(e, t, r, i, n, a, o, s, u, c, f) {
  for (var l = n - 1, v = n === 0 ? a : [""], b = cn(v), I = 0, p = 0, m = 0; I < i; ++I)
    for (var C = 0, y = tt(e, l + 1, l = Sa(p = o[I])), G = e; C < b; ++C)
      (G = Mr(p > 0 ? v[C] + " " + y : Z(y, /&\f/g, v[C]))) && (u[m++] = G);
  return wt(e, t, r, n === 0 ? on : s, u, c, f);
}
function Da(e, t, r) {
  return wt(e, t, r, Xr, St(Pa()), tt(e, 2, -2), 0);
}
function Zn(e, t, r, i) {
  return wt(e, t, r, sn, tt(e, 0, i), tt(e, i + 1, -1), i);
}
function ze(e, t) {
  for (var r = "", i = cn(e), n = 0; n < i; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Za(e, t, r, i) {
  switch (e.type) {
    case Ra:
      if (e.children.length) break;
    case Ga:
    case sn:
      return e.return = e.return || e.value;
    case Xr:
      return "";
    case Wr:
      return e.return = e.value + "{" + ze(e.children, i) + "}";
    case on:
      e.value = e.props.join(",");
  }
  return Ee(r = ze(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ha(e) {
  var t = cn(e);
  return function(r, i, n, a) {
    for (var o = "", s = 0; s < t; s++)
      o += e[s](r, i, n, a) || "";
    return o;
  };
}
function La(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ya(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ja = function(t, r, i) {
  for (var n = 0, a = 0; n = a, a = Se(), n === 38 && a === 12 && (r[i] = 1), !nt(a); )
    Ce();
  return it(t, Ie);
}, za = function(t, r) {
  var i = -1, n = 44;
  do
    switch (nt(n)) {
      case 0:
        n === 38 && Se() === 12 && (r[i] = 1), t[i] += Ja(Ie - 1, r, i);
        break;
      case 2:
        t[i] += vt(n);
        break;
      case 4:
        if (n === 44) {
          t[++i] = Se() === 58 ? "&\f" : "", r[i] = t[i].length;
          break;
        }
      // fallthrough
      default:
        t[i] += St(n);
    }
  while (n = Ce());
  return t;
}, ja = function(t, r) {
  return Zr(za(Dr(t), r));
}, Hn = /* @__PURE__ */ new WeakMap(), ka = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, i = t.parent, n = t.column === i.column && t.line === i.line; i.type !== "rule"; )
      if (i = i.parent, !i) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Hn.get(i)) && !n) {
      Hn.set(t, !0);
      for (var a = [], o = ja(r, a), s = i.props, u = 0, c = 0; u < o.length; u++)
        for (var f = 0; f < s.length; f++, c++)
          t.props[c] = a[u] ? o[u].replace(/&\f/g, s[f]) : s[f] + " " + o[u];
    }
  }
}, _a = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Hr(e, t) {
  switch (wa(e, t)) {
    // color-adjust
    case 5103:
      return D + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return D + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return D + e + Ct + e + le + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return D + e + le + e + e;
    // order
    case 6165:
      return D + e + le + "flex-" + e + e;
    // align-items
    case 5187:
      return D + e + Z(e, /(\w+).+(:[^]+)/, D + "box-$1$2" + le + "flex-$1$2") + e;
    // align-self
    case 5443:
      return D + e + le + "flex-item-" + Z(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return D + e + le + "flex-line-pack" + Z(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return D + e + le + Z(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return D + e + le + Z(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return D + "box-" + Z(e, "-grow", "") + D + e + le + Z(e, "grow", "positive") + e;
    // transition
    case 4554:
      return D + Z(e, /([^-])(transform)/g, "$1" + D + "$2") + e;
    // cursor
    case 6187:
      return Z(Z(Z(e, /(zoom-|grab)/, D + "$1"), /(image-set)/, D + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Z(e, /(image-set\([^]*)/, D + "$1$`$1");
    // justify-content
    case 4968:
      return Z(Z(e, /(.+:)(flex-)?(.*)/, D + "box-pack:$3" + le + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + D + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Z(e, /(.+)-inline(.+)/, D + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ee(e) - 1 - t > 6) switch (oe(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (oe(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Z(e, /(.+:)(.+)-([^]+)/, "$1" + D + "$2-$3$1" + Ct + (oe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~$t(e, "stretch") ? Hr(Z(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (oe(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (oe(e, Ee(e) - 3 - (~$t(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Z(e, ":", ":" + D) + e;
        // (inline-)?fl(e)x
        case 101:
          return Z(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + D + (oe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + D + "$2$3$1" + le + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (oe(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return D + e + le + Z(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return D + e + le + Z(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return D + e + le + Z(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return D + e + le + e + e;
  }
  return e;
}
var Ua = function(t, r, i, n) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case sn:
      t.return = Hr(t.value, t.length);
      break;
    case Wr:
      return ze([$e(t, {
        value: Z(t.value, "@", "@" + D)
      })], n);
    case on:
      if (t.length) return Ba(t.props, function(a) {
        switch (Va(a, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ze([$e(t, {
              props: [Z(a, /:(read-\w+)/, ":" + Ct + "$1")]
            })], n);
          // :placeholder
          case "::placeholder":
            return ze([$e(t, {
              props: [Z(a, /:(plac\w+)/, ":" + D + "input-$1")]
            }), $e(t, {
              props: [Z(a, /:(plac\w+)/, ":" + Ct + "$1")]
            }), $e(t, {
              props: [Z(a, /:(plac\w+)/, le + "input-$1")]
            })], n);
        }
        return "";
      });
  }
}, Qa = [Ua], $a = function(t) {
  var r = t.key;
  if (r === "css") {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function(p) {
      var m = p.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var n = t.stylisPlugins || Qa, a = {}, o, s = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(p) {
      for (var m = p.getAttribute("data-emotion").split(" "), C = 1; C < m.length; C++)
        a[m[C]] = !0;
      s.push(p);
    }
  );
  var u, c = [ka, _a];
  {
    var f, l = [Za, La(function(p) {
      f.insert(p);
    })], v = Ha(c.concat(n, l)), b = function(m) {
      return ze(Na(m), v);
    };
    u = function(m, C, y, G) {
      f = y, b(m ? m + "{" + C.styles + "}" : C.styles), G && (I.inserted[C.name] = !0);
    };
  }
  var I = {
    key: r,
    sheet: new Ea({
      key: r,
      container: o,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: u
  };
  return I.sheet.hydrate(s), I;
}, st = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function Ka() {
  if (Ln) return Y;
  Ln = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function G(g) {
    if (typeof g == "object" && g !== null) {
      var x = g.$$typeof;
      switch (x) {
        case t:
          switch (g = g.type, g) {
            case u:
            case c:
            case i:
            case a:
            case n:
            case l:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case f:
                case I:
                case b:
                case o:
                  return g;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function h(g) {
    return G(g) === c;
  }
  return Y.AsyncMode = u, Y.ConcurrentMode = c, Y.ContextConsumer = s, Y.ContextProvider = o, Y.Element = t, Y.ForwardRef = f, Y.Fragment = i, Y.Lazy = I, Y.Memo = b, Y.Portal = r, Y.Profiler = a, Y.StrictMode = n, Y.Suspense = l, Y.isAsyncMode = function(g) {
    return h(g) || G(g) === u;
  }, Y.isConcurrentMode = h, Y.isContextConsumer = function(g) {
    return G(g) === s;
  }, Y.isContextProvider = function(g) {
    return G(g) === o;
  }, Y.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Y.isForwardRef = function(g) {
    return G(g) === f;
  }, Y.isFragment = function(g) {
    return G(g) === i;
  }, Y.isLazy = function(g) {
    return G(g) === I;
  }, Y.isMemo = function(g) {
    return G(g) === b;
  }, Y.isPortal = function(g) {
    return G(g) === r;
  }, Y.isProfiler = function(g) {
    return G(g) === a;
  }, Y.isStrictMode = function(g) {
    return G(g) === n;
  }, Y.isSuspense = function(g) {
    return G(g) === l;
  }, Y.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === i || g === c || g === a || g === n || g === l || g === v || typeof g == "object" && g !== null && (g.$$typeof === I || g.$$typeof === b || g.$$typeof === o || g.$$typeof === s || g.$$typeof === f || g.$$typeof === m || g.$$typeof === C || g.$$typeof === y || g.$$typeof === p);
  }, Y.typeOf = G, Y;
}
var J = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function qa() {
  return Yn || (Yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function G(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === i || w === c || w === a || w === n || w === l || w === v || typeof w == "object" && w !== null && (w.$$typeof === I || w.$$typeof === b || w.$$typeof === o || w.$$typeof === s || w.$$typeof === f || w.$$typeof === m || w.$$typeof === C || w.$$typeof === y || w.$$typeof === p);
    }
    function h(w) {
      if (typeof w == "object" && w !== null) {
        var Xe = w.$$typeof;
        switch (Xe) {
          case t:
            var we = w.type;
            switch (we) {
              case u:
              case c:
              case i:
              case a:
              case n:
              case l:
                return we;
              default:
                var Ve = we && we.$$typeof;
                switch (Ve) {
                  case s:
                  case f:
                  case I:
                  case b:
                  case o:
                    return Ve;
                  default:
                    return Xe;
                }
            }
          case r:
            return Xe;
        }
      }
    }
    var g = u, x = c, E = s, R = o, M = t, _ = f, K = i, j = I, U = b, S = r, T = a, H = n, q = l, ee = !1;
    function fe(w) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), be(w) || h(w) === u;
    }
    function be(w) {
      return h(w) === c;
    }
    function Fe(w) {
      return h(w) === s;
    }
    function k(w) {
      return h(w) === o;
    }
    function ie(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function he(w) {
      return h(w) === f;
    }
    function Ae(w) {
      return h(w) === i;
    }
    function ue(w) {
      return h(w) === I;
    }
    function ve(w) {
      return h(w) === b;
    }
    function ce(w) {
      return h(w) === r;
    }
    function xe(w) {
      return h(w) === a;
    }
    function Oe(w) {
      return h(w) === n;
    }
    function De(w) {
      return h(w) === l;
    }
    J.AsyncMode = g, J.ConcurrentMode = x, J.ContextConsumer = E, J.ContextProvider = R, J.Element = M, J.ForwardRef = _, J.Fragment = K, J.Lazy = j, J.Memo = U, J.Portal = S, J.Profiler = T, J.StrictMode = H, J.Suspense = q, J.isAsyncMode = fe, J.isConcurrentMode = be, J.isContextConsumer = Fe, J.isContextProvider = k, J.isElement = ie, J.isForwardRef = he, J.isFragment = Ae, J.isLazy = ue, J.isMemo = ve, J.isPortal = ce, J.isProfiler = xe, J.isStrictMode = Oe, J.isSuspense = De, J.isValidElementType = G, J.typeOf = h;
  }()), J;
}
var Jn;
function eu() {
  return Jn || (Jn = 1, process.env.NODE_ENV === "production" ? st.exports = Ka() : st.exports = qa()), st.exports;
}
var Dt, zn;
function tu() {
  if (zn) return Dt;
  zn = 1;
  var e = eu(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, i = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, n = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, a = {};
  a[e.ForwardRef] = i, a[e.Memo] = n;
  function o(I) {
    return e.isMemo(I) ? n : a[I.$$typeof] || t;
  }
  var s = Object.defineProperty, u = Object.getOwnPropertyNames, c = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, l = Object.getPrototypeOf, v = Object.prototype;
  function b(I, p, m) {
    if (typeof p != "string") {
      if (v) {
        var C = l(p);
        C && C !== v && b(I, C, m);
      }
      var y = u(p);
      c && (y = y.concat(c(p)));
      for (var G = o(I), h = o(p), g = 0; g < y.length; ++g) {
        var x = y[g];
        if (!r[x] && !(m && m[x]) && !(h && h[x]) && !(G && G[x])) {
          var E = f(p, x);
          try {
            s(I, x, E);
          } catch {
          }
        }
      }
    }
    return I;
  }
  return Dt = b, Dt;
}
tu();
var nu = !0;
function ru(e, t, r) {
  var i = "";
  return r.split(" ").forEach(function(n) {
    e[n] !== void 0 ? t.push(e[n] + ";") : n && (i += n + " ");
  }), i;
}
var Lr = function(t, r, i) {
  var n = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (i === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  nu === !1) && t.registered[n] === void 0 && (t.registered[n] = r.styles);
}, iu = function(t, r, i) {
  Lr(t, r, i);
  var n = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + n : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function au(e) {
  for (var t = 0, r, i = 0, n = e.length; n >= 4; ++i, n -= 4)
    r = e.charCodeAt(i) & 255 | (e.charCodeAt(++i) & 255) << 8 | (e.charCodeAt(++i) & 255) << 16 | (e.charCodeAt(++i) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      t ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(i) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var uu = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ou = /[A-Z]|^ms/g, su = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Yr = function(t) {
  return t.charCodeAt(1) === 45;
}, jn = function(t) {
  return t != null && typeof t != "boolean";
}, Zt = /* @__PURE__ */ Ya(function(e) {
  return Yr(e) ? e : e.replace(ou, "-$&").toLowerCase();
}), kn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(su, function(i, n, a) {
          return Ge = {
            name: n,
            styles: a,
            next: Ge
          }, n;
        });
  }
  return uu[t] !== 1 && !Yr(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function rt(e, t, r) {
  if (r == null)
    return "";
  var i = r;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var n = r;
      if (n.anim === 1)
        return Ge = {
          name: n.name,
          styles: n.styles,
          next: Ge
        }, n.name;
      var a = r;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            Ge = {
              name: o.name,
              styles: o.styles,
              next: Ge
            }, o = o.next;
        var s = a.styles + ";";
        return s;
      }
      return cu(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = Ge, c = r(e);
        return Ge = u, rt(e, t, c);
      }
      break;
    }
  }
  var f = r;
  return f;
}
function cu(e, t, r) {
  var i = "";
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++)
      i += rt(e, t, r[n]) + ";";
  else
    for (var a in r) {
      var o = r[a];
      if (typeof o != "object") {
        var s = o;
        jn(s) && (i += Zt(a) + ":" + kn(a, s) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && t == null)
        for (var u = 0; u < o.length; u++)
          jn(o[u]) && (i += Zt(a) + ":" + kn(a, o[u]) + ";");
      else {
        var c = rt(e, t, o);
        switch (a) {
          case "animation":
          case "animationName": {
            i += Zt(a) + ":" + c + ";";
            break;
          }
          default:
            i += a + "{" + c + "}";
        }
      }
    }
  return i;
}
var _n = /label:\s*([^\s;{]+)\s*(;|$)/g, Ge;
function Jr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var i = !0, n = "";
  Ge = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    i = !1, n += rt(r, t, a);
  else {
    var o = a;
    n += o[0];
  }
  for (var s = 1; s < e.length; s++)
    if (n += rt(r, t, e[s]), i) {
      var u = a;
      n += u[s];
    }
  _n.lastIndex = 0;
  for (var c = "", f; (f = _n.exec(n)) !== null; )
    c += "-" + f[1];
  var l = au(n) + c;
  return {
    name: l,
    styles: n,
    next: Ge
  };
}
var lu = function(t) {
  return t();
}, du = X.useInsertionEffect ? X.useInsertionEffect : !1, fu = du || lu, zr = /* @__PURE__ */ X.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ $a({
    key: "css"
  }) : null
);
zr.Provider;
var gu = function(t) {
  return /* @__PURE__ */ Vr(function(r, i) {
    var n = Br(zr);
    return t(r, n, i);
  });
}, pu = /* @__PURE__ */ X.createContext({}), ln = {}.hasOwnProperty, qt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", bu = function(t, r) {
  var i = {};
  for (var n in r)
    ln.call(r, n) && (i[n] = r[n]);
  return i[qt] = t, i;
}, vu = function(t) {
  var r = t.cache, i = t.serialized, n = t.isStringTag;
  return Lr(r, i, n), fu(function() {
    return iu(r, i, n);
  }), null;
}, mu = /* @__PURE__ */ gu(function(e, t, r) {
  var i = e.css;
  typeof i == "string" && t.registered[i] !== void 0 && (i = t.registered[i]);
  var n = e[qt], a = [i], o = "";
  typeof e.className == "string" ? o = ru(t.registered, a, e.className) : e.className != null && (o = e.className + " ");
  var s = Jr(a, void 0, X.useContext(pu));
  o += t.key + "-" + s.name;
  var u = {};
  for (var c in e)
    ln.call(e, c) && c !== "css" && c !== qt && (u[c] = e[c]);
  return u.className = o, r && (u.ref = r), /* @__PURE__ */ X.createElement(X.Fragment, null, /* @__PURE__ */ X.createElement(vu, {
    cache: t,
    serialized: s,
    isStringTag: typeof n == "string"
  }), /* @__PURE__ */ X.createElement(n, u));
}), Iu = mu, V = function(t, r) {
  var i = arguments;
  if (r == null || !ln.call(r, "css"))
    return X.createElement.apply(void 0, i);
  var n = i.length, a = new Array(n);
  a[0] = Iu, a[1] = bu(t, r);
  for (var o = 2; o < n; o++)
    a[o] = i[o];
  return X.createElement.apply(null, a);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(V || (V = {}));
function dn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Jr(t);
}
function hu() {
  var e = dn.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
function Cu(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const Au = Math.min, yu = Math.max, At = Math.round, ct = Math.floor, yt = (e) => ({
  x: e,
  y: e
});
function xu(e) {
  const {
    x: t,
    y: r,
    width: i,
    height: n
  } = e;
  return {
    width: i,
    height: n,
    top: r,
    left: t,
    right: t + i,
    bottom: r + n,
    x: t,
    y: r
  };
}
function Vt() {
  return typeof window < "u";
}
function jr(e) {
  return _r(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function kr(e) {
  var t;
  return (t = (_r(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _r(e) {
  return Vt() ? e instanceof Node || e instanceof Pe(e).Node : !1;
}
function Eu(e) {
  return Vt() ? e instanceof Element || e instanceof Pe(e).Element : !1;
}
function fn(e) {
  return Vt() ? e instanceof HTMLElement || e instanceof Pe(e).HTMLElement : !1;
}
function Un(e) {
  return !Vt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pe(e).ShadowRoot;
}
const Gu = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ur(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: i,
    display: n
  } = gn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + r) && !Gu.has(n);
}
function Ru() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Su = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Fu(e) {
  return Su.has(jr(e));
}
function gn(e) {
  return Pe(e).getComputedStyle(e);
}
function wu(e) {
  if (jr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Un(e) && e.host || // Fallback.
    kr(e)
  );
  return Un(t) ? t.host : t;
}
function Qr(e) {
  const t = wu(e);
  return Fu(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fn(t) && Ur(t) ? t : Qr(t);
}
function xt(e, t, r) {
  var i;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const n = Qr(e), a = n === ((i = e.ownerDocument) == null ? void 0 : i.body), o = Pe(n);
  if (a) {
    const s = en(o);
    return t.concat(o, o.visualViewport || [], Ur(n) ? n : [], s && r ? xt(s) : []);
  }
  return t.concat(n, xt(n, [], r));
}
function en(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vu(e) {
  const t = gn(e);
  let r = parseFloat(t.width) || 0, i = parseFloat(t.height) || 0;
  const n = fn(e), a = n ? e.offsetWidth : r, o = n ? e.offsetHeight : i, s = At(r) !== a || At(i) !== o;
  return s && (r = a, i = o), {
    width: r,
    height: i,
    $: s
  };
}
function pn(e) {
  return Eu(e) ? e : e.contextElement;
}
function Qn(e) {
  const t = pn(e);
  if (!fn(t))
    return yt(1);
  const r = t.getBoundingClientRect(), {
    width: i,
    height: n,
    $: a
  } = Vu(t);
  let o = (a ? At(r.width) : r.width) / i, s = (a ? At(r.height) : r.height) / n;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
const Bu = /* @__PURE__ */ yt(0);
function Pu(e) {
  const t = Pe(e);
  return !Ru() || !t.visualViewport ? Bu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Tu(e, t, r) {
  return !1;
}
function $n(e, t, r, i) {
  t === void 0 && (t = !1);
  const n = e.getBoundingClientRect(), a = pn(e);
  let o = yt(1);
  t && (o = Qn(e));
  const s = Tu() ? Pu(a) : yt(0);
  let u = (n.left + s.x) / o.x, c = (n.top + s.y) / o.y, f = n.width / o.x, l = n.height / o.y;
  if (a) {
    const v = Pe(a), b = i;
    let I = v, p = en(I);
    for (; p && i && b !== I; ) {
      const m = Qn(p), C = p.getBoundingClientRect(), y = gn(p), G = C.left + (p.clientLeft + parseFloat(y.paddingLeft)) * m.x, h = C.top + (p.clientTop + parseFloat(y.paddingTop)) * m.y;
      u *= m.x, c *= m.y, f *= m.x, l *= m.y, u += G, c += h, I = Pe(p), p = en(I);
    }
  }
  return xu({
    width: f,
    height: l,
    x: u,
    y: c
  });
}
function $r(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ou(e, t) {
  let r = null, i;
  const n = kr(e);
  function a() {
    var s;
    clearTimeout(i), (s = r) == null || s.disconnect(), r = null;
  }
  function o(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), a();
    const c = e.getBoundingClientRect(), {
      left: f,
      top: l,
      width: v,
      height: b
    } = c;
    if (s || t(), !v || !b)
      return;
    const I = ct(l), p = ct(n.clientWidth - (f + v)), m = ct(n.clientHeight - (l + b)), C = ct(f), G = {
      rootMargin: -I + "px " + -p + "px " + -m + "px " + -C + "px",
      threshold: yu(0, Au(1, u)) || 1
    };
    let h = !0;
    function g(x) {
      const E = x[0].intersectionRatio;
      if (E !== u) {
        if (!h)
          return o();
        E ? o(!1, E) : i = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !$r(c, e.getBoundingClientRect()) && o(), h = !1;
    }
    try {
      r = new IntersectionObserver(g, {
        ...G,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(g, G);
    }
    r.observe(e);
  }
  return o(!0), a;
}
function Xu(e, t, r, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: a = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = i, c = pn(e), f = n || a ? [...c ? xt(c) : [], ...xt(t)] : [];
  f.forEach((C) => {
    n && C.addEventListener("scroll", r, {
      passive: !0
    }), a && C.addEventListener("resize", r);
  });
  const l = c && s ? Ou(c, r) : null;
  let v = -1, b = null;
  o && (b = new ResizeObserver((C) => {
    let [y] = C;
    y && y.target === c && b && (b.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var G;
      (G = b) == null || G.observe(t);
    })), r();
  }), c && !u && b.observe(c), b.observe(t));
  let I, p = u ? $n(e) : null;
  u && m();
  function m() {
    const C = $n(e);
    p && !$r(p, C) && r(), p = C, I = requestAnimationFrame(m);
  }
  return r(), () => {
    var C;
    f.forEach((y) => {
      n && y.removeEventListener("scroll", r), a && y.removeEventListener("resize", r);
    }), l?.(), (C = b) == null || C.disconnect(), b = null, u && cancelAnimationFrame(I);
  };
}
var tn = qi, Wu = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Et = function() {
};
function Mu(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function Nu(e, t) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
    i[n - 2] = arguments[n];
  var a = [].concat(i);
  if (t && e)
    for (var o in t)
      t.hasOwnProperty(o) && t[o] && a.push("".concat(Mu(e, o)));
  return a.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var Kn = function(t) {
  return ku(t) ? t.filter(Boolean) : Me(t) === "object" && t !== null ? [t] : [];
}, Kr = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var r = Te(t, Wu);
  return B({}, r);
}, Q = function(t, r, i) {
  var n = t.cx, a = t.getStyles, o = t.getClassNames, s = t.className;
  return {
    css: a(r, t),
    className: n(i ?? {}, o(r, t), s)
  };
};
function Bt(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function Du(e) {
  return Bt(e) ? window.innerHeight : e.clientHeight;
}
function qr(e) {
  return Bt(e) ? window.pageYOffset : e.scrollTop;
}
function Gt(e, t) {
  if (Bt(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function Zu(e) {
  var t = getComputedStyle(e), r = t.position === "absolute", i = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var n = e; n = n.parentElement; )
    if (t = getComputedStyle(n), !(r && t.position === "static") && i.test(t.overflow + t.overflowY + t.overflowX))
      return n;
  return document.documentElement;
}
function Hu(e, t, r, i) {
  return r * ((e = e / i - 1) * e * e + 1) + t;
}
function lt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Et, n = qr(e), a = t - n, o = 10, s = 0;
  function u() {
    s += o;
    var c = Hu(s, n, a, r);
    Gt(e, c), s < r ? window.requestAnimationFrame(u) : i(e);
  }
  u();
}
function qn(e, t) {
  var r = e.getBoundingClientRect(), i = t.getBoundingClientRect(), n = t.offsetHeight / 3;
  i.bottom + n > r.bottom ? Gt(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + n, e.scrollHeight)) : i.top - n < r.top && Gt(e, Math.max(t.offsetTop - n, 0));
}
function Lu(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function er() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function Yu() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var ei = !1, Ju = {
  get passive() {
    return ei = !0;
  }
}, dt = typeof window < "u" ? window : {};
dt.addEventListener && dt.removeEventListener && (dt.addEventListener("p", Et, Ju), dt.removeEventListener("p", Et, !1));
var zu = ei;
function ju(e) {
  return e != null;
}
function ku(e) {
  return Array.isArray(e);
}
function ft(e, t, r) {
  return e ? t : r;
}
var _u = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    i[n - 1] = arguments[n];
  var a = Object.entries(t).filter(function(o) {
    var s = Be(o, 1), u = s[0];
    return !i.includes(u);
  });
  return a.reduce(function(o, s) {
    var u = Be(s, 2), c = u[0], f = u[1];
    return o[c] = f, o;
  }, {});
}, Uu = ["children", "innerProps"], Qu = ["children", "innerProps"];
function $u(e) {
  var t = e.maxHeight, r = e.menuEl, i = e.minHeight, n = e.placement, a = e.shouldScroll, o = e.isFixedPosition, s = e.controlHeight, u = Zu(r), c = {
    placement: "bottom",
    maxHeight: t
  };
  if (!r || !r.offsetParent) return c;
  var f = u.getBoundingClientRect(), l = f.height, v = r.getBoundingClientRect(), b = v.bottom, I = v.height, p = v.top, m = r.offsetParent.getBoundingClientRect(), C = m.top, y = o ? window.innerHeight : Du(u), G = qr(u), h = parseInt(getComputedStyle(r).marginBottom, 10), g = parseInt(getComputedStyle(r).marginTop, 10), x = C - g, E = y - p, R = x + G, M = l - G - p, _ = b - y + G + h, K = G + p - g, j = 160;
  switch (n) {
    case "auto":
    case "bottom":
      if (E >= I)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= I && !o)
        return a && lt(u, _, j), {
          placement: "bottom",
          maxHeight: t
        };
      if (!o && M >= i || o && E >= i) {
        a && lt(u, _, j);
        var U = o ? E - h : M - h;
        return {
          placement: "bottom",
          maxHeight: U
        };
      }
      if (n === "auto" || o) {
        var S = t, T = o ? x : R;
        return T >= i && (S = Math.min(T - h - s, t)), {
          placement: "top",
          maxHeight: S
        };
      }
      if (n === "bottom")
        return a && Gt(u, _), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (x >= I)
        return {
          placement: "top",
          maxHeight: t
        };
      if (R >= I && !o)
        return a && lt(u, K, j), {
          placement: "top",
          maxHeight: t
        };
      if (!o && R >= i || o && x >= i) {
        var H = t;
        return (!o && R >= i || o && x >= i) && (H = o ? x - g : R - g), a && lt(u, K, j), {
          placement: "top",
          maxHeight: H
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(n, '".'));
  }
  return c;
}
function Ku(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var ti = function(t) {
  return t === "auto" ? "bottom" : t;
}, qu = function(t, r) {
  var i, n = t.placement, a = t.theme, o = a.borderRadius, s = a.spacing, u = a.colors;
  return B((i = {
    label: "menu"
  }, qe(i, Ku(n), "100%"), qe(i, "position", "absolute"), qe(i, "width", "100%"), qe(i, "zIndex", 1), i), r ? {} : {
    backgroundColor: u.neutral0,
    borderRadius: o,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, ni = /* @__PURE__ */ ea(null), eo = function(t) {
  var r = t.children, i = t.minMenuHeight, n = t.maxMenuHeight, a = t.menuPlacement, o = t.menuPosition, s = t.menuShouldScrollIntoView, u = t.theme, c = Br(ni) || {}, f = c.setPortalPlacement, l = Re(null), v = de(n), b = Be(v, 2), I = b[0], p = b[1], m = de(null), C = Be(m, 2), y = C[0], G = C[1], h = u.spacing.controlHeight;
  return tn(function() {
    var g = l.current;
    if (g) {
      var x = o === "fixed", E = s && !x, R = $u({
        maxHeight: n,
        menuEl: g,
        minHeight: i,
        placement: a,
        shouldScroll: E,
        isFixedPosition: x,
        controlHeight: h
      });
      p(R.maxHeight), G(R.placement), f?.(R.placement);
    }
  }, [n, a, o, s, i, f, h]), r({
    ref: l,
    placerProps: B(B({}, t), {}, {
      placement: y || ti(a),
      maxHeight: I
    })
  });
}, to = function(t) {
  var r = t.children, i = t.innerRef, n = t.innerProps;
  return V("div", P({}, Q(t, "menu", {
    menu: !0
  }), {
    ref: i
  }, n), r);
}, no = to, ro = function(t, r) {
  var i = t.maxHeight, n = t.theme.spacing.baseUnit;
  return B({
    maxHeight: i,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, r ? {} : {
    paddingBottom: n,
    paddingTop: n
  });
}, io = function(t) {
  var r = t.children, i = t.innerProps, n = t.innerRef, a = t.isMulti;
  return V("div", P({}, Q(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": a
  }), {
    ref: n
  }, i), r);
}, ri = function(t, r) {
  var i = t.theme, n = i.spacing.baseUnit, a = i.colors;
  return B({
    textAlign: "center"
  }, r ? {} : {
    color: a.neutral40,
    padding: "".concat(n * 2, "px ").concat(n * 3, "px")
  });
}, ao = ri, uo = ri, oo = function(t) {
  var r = t.children, i = r === void 0 ? "No options" : r, n = t.innerProps, a = Te(t, Uu);
  return V("div", P({}, Q(B(B({}, a), {}, {
    children: i,
    innerProps: n
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), n), i);
}, so = function(t) {
  var r = t.children, i = r === void 0 ? "Loading..." : r, n = t.innerProps, a = Te(t, Qu);
  return V("div", P({}, Q(B(B({}, a), {}, {
    children: i,
    innerProps: n
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), n), i);
}, co = function(t) {
  var r = t.rect, i = t.offset, n = t.position;
  return {
    left: r.left,
    position: n,
    top: i,
    width: r.width,
    zIndex: 1
  };
}, lo = function(t) {
  var r = t.appendTo, i = t.children, n = t.controlElement, a = t.innerProps, o = t.menuPlacement, s = t.menuPosition, u = Re(null), c = Re(null), f = de(ti(o)), l = Be(f, 2), v = l[0], b = l[1], I = Ye(function() {
    return {
      setPortalPlacement: b
    };
  }, []), p = de(null), m = Be(p, 2), C = m[0], y = m[1], G = se(function() {
    if (n) {
      var E = Lu(n), R = s === "fixed" ? 0 : window.pageYOffset, M = E[v] + R;
      (M !== C?.offset || E.left !== C?.rect.left || E.width !== C?.rect.width) && y({
        offset: M,
        rect: E
      });
    }
  }, [n, s, v, C?.offset, C?.rect.left, C?.rect.width]);
  tn(function() {
    G();
  }, [G]);
  var h = se(function() {
    typeof c.current == "function" && (c.current(), c.current = null), n && u.current && (c.current = Xu(n, u.current, G, {
      elementResize: "ResizeObserver" in window
    }));
  }, [n, G]);
  tn(function() {
    h();
  }, [h]);
  var g = se(function(E) {
    u.current = E, h();
  }, [h]);
  if (!r && s !== "fixed" || !C) return null;
  var x = V("div", P({
    ref: g
  }, Q(B(B({}, t), {}, {
    offset: C.offset,
    position: s,
    rect: C.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), a), i);
  return V(ni.Provider, {
    value: I
  }, r ? /* @__PURE__ */ na(x, r) : x);
}, fo = function(t) {
  var r = t.isDisabled, i = t.isRtl;
  return {
    label: "container",
    direction: i ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, go = function(t) {
  var r = t.children, i = t.innerProps, n = t.isDisabled, a = t.isRtl;
  return V("div", P({}, Q(t, "container", {
    "--is-disabled": n,
    "--is-rtl": a
  }), i), r);
}, po = function(t, r) {
  var i = t.theme.spacing, n = t.isMulti, a = t.hasValue, o = t.selectProps.controlShouldRenderValue;
  return B({
    alignItems: "center",
    display: n && a && o ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, r ? {} : {
    padding: "".concat(i.baseUnit / 2, "px ").concat(i.baseUnit * 2, "px")
  });
}, bo = function(t) {
  var r = t.children, i = t.innerProps, n = t.isMulti, a = t.hasValue;
  return V("div", P({}, Q(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": n,
    "value-container--has-value": a
  }), i), r);
}, vo = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, mo = function(t) {
  var r = t.children, i = t.innerProps;
  return V("div", P({}, Q(t, "indicatorsContainer", {
    indicators: !0
  }), i), r);
}, tr, Io = ["size"], ho = ["innerProps", "isRtl", "size"];
function Co() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Ao = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: Co
}, ii = function(t) {
  var r = t.size, i = Te(t, Io);
  return V("svg", P({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: Ao
  }, i));
}, bn = function(t) {
  return V(ii, P({
    size: 20
  }, t), V("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, ai = function(t) {
  return V(ii, P({
    size: 20
  }, t), V("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, ui = function(t, r) {
  var i = t.isFocused, n = t.theme, a = n.spacing.baseUnit, o = n.colors;
  return B({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, r ? {} : {
    color: i ? o.neutral60 : o.neutral20,
    padding: a * 2,
    ":hover": {
      color: i ? o.neutral80 : o.neutral40
    }
  });
}, yo = ui, xo = function(t) {
  var r = t.children, i = t.innerProps;
  return V("div", P({}, Q(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), i), r || V(ai, null));
}, Eo = ui, Go = function(t) {
  var r = t.children, i = t.innerProps;
  return V("div", P({}, Q(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), i), r || V(bn, null));
}, Ro = function(t, r) {
  var i = t.isDisabled, n = t.theme, a = n.spacing.baseUnit, o = n.colors;
  return B({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: i ? o.neutral10 : o.neutral20,
    marginBottom: a * 2,
    marginTop: a * 2
  });
}, So = function(t) {
  var r = t.innerProps;
  return V("span", P({}, r, Q(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, Fo = hu(tr || (tr = Cu([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), wo = function(t, r) {
  var i = t.isFocused, n = t.size, a = t.theme, o = a.colors, s = a.spacing.baseUnit;
  return B({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: n,
    lineHeight: 1,
    marginRight: n,
    textAlign: "center",
    verticalAlign: "middle"
  }, r ? {} : {
    color: i ? o.neutral60 : o.neutral20,
    padding: s * 2
  });
}, Ht = function(t) {
  var r = t.delay, i = t.offset;
  return V("span", {
    css: /* @__PURE__ */ dn({
      animation: "".concat(Fo, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: i ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, Vo = function(t) {
  var r = t.innerProps, i = t.isRtl, n = t.size, a = n === void 0 ? 4 : n, o = Te(t, ho);
  return V("div", P({}, Q(B(B({}, o), {}, {
    innerProps: r,
    isRtl: i,
    size: a
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), V(Ht, {
    delay: 0,
    offset: i
  }), V(Ht, {
    delay: 160,
    offset: !0
  }), V(Ht, {
    delay: 320,
    offset: !i
  }));
}, Bo = function(t, r) {
  var i = t.isDisabled, n = t.isFocused, a = t.theme, o = a.colors, s = a.borderRadius, u = a.spacing;
  return B({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: u.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, r ? {} : {
    backgroundColor: i ? o.neutral5 : o.neutral0,
    borderColor: i ? o.neutral10 : n ? o.primary : o.neutral20,
    borderRadius: s,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: n ? "0 0 0 1px ".concat(o.primary) : void 0,
    "&:hover": {
      borderColor: n ? o.primary : o.neutral30
    }
  });
}, Po = function(t) {
  var r = t.children, i = t.isDisabled, n = t.isFocused, a = t.innerRef, o = t.innerProps, s = t.menuIsOpen;
  return V("div", P({
    ref: a
  }, Q(t, "control", {
    control: !0,
    "control--is-disabled": i,
    "control--is-focused": n,
    "control--menu-is-open": s
  }), o, {
    "aria-disabled": i || void 0
  }), r);
}, To = Po, Oo = ["data"], Xo = function(t, r) {
  var i = t.theme.spacing;
  return r ? {} : {
    paddingBottom: i.baseUnit * 2,
    paddingTop: i.baseUnit * 2
  };
}, Wo = function(t) {
  var r = t.children, i = t.cx, n = t.getStyles, a = t.getClassNames, o = t.Heading, s = t.headingProps, u = t.innerProps, c = t.label, f = t.theme, l = t.selectProps;
  return V("div", P({}, Q(t, "group", {
    group: !0
  }), u), V(o, P({}, s, {
    selectProps: l,
    theme: f,
    getStyles: n,
    getClassNames: a,
    cx: i
  }), c), V("div", null, r));
}, Mo = function(t, r) {
  var i = t.theme, n = i.colors, a = i.spacing;
  return B({
    label: "group",
    cursor: "default",
    display: "block"
  }, r ? {} : {
    color: n.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: a.baseUnit * 3,
    paddingRight: a.baseUnit * 3,
    textTransform: "uppercase"
  });
}, No = function(t) {
  var r = Kr(t);
  r.data;
  var i = Te(r, Oo);
  return V("div", P({}, Q(t, "groupHeading", {
    "group-heading": !0
  }), i));
}, Do = Wo, Zo = ["innerRef", "isDisabled", "isHidden", "inputClassName"], Ho = function(t, r) {
  var i = t.isDisabled, n = t.value, a = t.theme, o = a.spacing, s = a.colors;
  return B(B({
    visibility: i ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: n ? "translateZ(0)" : ""
  }, Lo), r ? {} : {
    margin: o.baseUnit / 2,
    paddingBottom: o.baseUnit / 2,
    paddingTop: o.baseUnit / 2,
    color: s.neutral80
  });
}, oi = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, Lo = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": B({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, oi)
}, Yo = function(t) {
  return B({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, oi);
}, Jo = function(t) {
  var r = t.cx, i = t.value, n = Kr(t), a = n.innerRef, o = n.isDisabled, s = n.isHidden, u = n.inputClassName, c = Te(n, Zo);
  return V("div", P({}, Q(t, "input", {
    "input-container": !0
  }), {
    "data-value": i || ""
  }), V("input", P({
    className: r({
      input: !0
    }, u),
    ref: a,
    style: Yo(s),
    disabled: o
  }, c)));
}, zo = Jo, jo = function(t, r) {
  var i = t.theme, n = i.spacing, a = i.borderRadius, o = i.colors;
  return B({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: o.neutral10,
    borderRadius: a / 2,
    margin: n.baseUnit / 2
  });
}, ko = function(t, r) {
  var i = t.theme, n = i.borderRadius, a = i.colors, o = t.cropWithEllipsis;
  return B({
    overflow: "hidden",
    textOverflow: o || o === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, r ? {} : {
    borderRadius: n / 2,
    color: a.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, _o = function(t, r) {
  var i = t.theme, n = i.spacing, a = i.borderRadius, o = i.colors, s = t.isFocused;
  return B({
    alignItems: "center",
    display: "flex"
  }, r ? {} : {
    borderRadius: a / 2,
    backgroundColor: s ? o.dangerLight : void 0,
    paddingLeft: n.baseUnit,
    paddingRight: n.baseUnit,
    ":hover": {
      backgroundColor: o.dangerLight,
      color: o.danger
    }
  });
}, si = function(t) {
  var r = t.children, i = t.innerProps;
  return V("div", i, r);
}, Uo = si, Qo = si;
function $o(e) {
  var t = e.children, r = e.innerProps;
  return V("div", P({
    role: "button"
  }, r), t || V(bn, {
    size: 14
  }));
}
var Ko = function(t) {
  var r = t.children, i = t.components, n = t.data, a = t.innerProps, o = t.isDisabled, s = t.removeProps, u = t.selectProps, c = i.Container, f = i.Label, l = i.Remove;
  return V(c, {
    data: n,
    innerProps: B(B({}, Q(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": o
    })), a),
    selectProps: u
  }, V(f, {
    data: n,
    innerProps: B({}, Q(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: u
  }, r), V(l, {
    data: n,
    innerProps: B(B({}, Q(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, s),
    selectProps: u
  }));
}, qo = Ko, es = function(t, r) {
  var i = t.isDisabled, n = t.isFocused, a = t.isSelected, o = t.theme, s = o.spacing, u = o.colors;
  return B({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, r ? {} : {
    backgroundColor: a ? u.primary : n ? u.primary25 : "transparent",
    color: i ? u.neutral20 : a ? u.neutral0 : "inherit",
    padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: i ? void 0 : a ? u.primary : u.primary50
    }
  });
}, ts = function(t) {
  var r = t.children, i = t.isDisabled, n = t.isFocused, a = t.isSelected, o = t.innerRef, s = t.innerProps;
  return V("div", P({}, Q(t, "option", {
    option: !0,
    "option--is-disabled": i,
    "option--is-focused": n,
    "option--is-selected": a
  }), {
    ref: o,
    "aria-disabled": i
  }, s), r);
}, ns = ts, rs = function(t, r) {
  var i = t.theme, n = i.spacing, a = i.colors;
  return B({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: a.neutral50,
    marginLeft: n.baseUnit / 2,
    marginRight: n.baseUnit / 2
  });
}, is = function(t) {
  var r = t.children, i = t.innerProps;
  return V("div", P({}, Q(t, "placeholder", {
    placeholder: !0
  }), i), r);
}, as = is, us = function(t, r) {
  var i = t.isDisabled, n = t.theme, a = n.spacing, o = n.colors;
  return B({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, r ? {} : {
    color: i ? o.neutral40 : o.neutral80,
    marginLeft: a.baseUnit / 2,
    marginRight: a.baseUnit / 2
  });
}, os = function(t) {
  var r = t.children, i = t.isDisabled, n = t.innerProps;
  return V("div", P({}, Q(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": i
  }), n), r);
}, ss = os, cs = {
  ClearIndicator: Go,
  Control: To,
  DropdownIndicator: xo,
  DownChevron: ai,
  CrossIcon: bn,
  Group: Do,
  GroupHeading: No,
  IndicatorsContainer: mo,
  IndicatorSeparator: So,
  Input: zo,
  LoadingIndicator: Vo,
  Menu: no,
  MenuList: io,
  MenuPortal: lo,
  LoadingMessage: so,
  NoOptionsMessage: oo,
  MultiValue: qo,
  MultiValueContainer: Uo,
  MultiValueLabel: Qo,
  MultiValueRemove: $o,
  Option: ns,
  Placeholder: as,
  SelectContainer: go,
  SingleValue: ss,
  ValueContainer: bo
}, ls = function(t) {
  return B(B({}, cs), t.components);
}, nr = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function ds(e, t) {
  return !!(e === t || nr(e) && nr(t));
}
function fs(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!ds(e[r], t[r]))
      return !1;
  return !0;
}
function gs(e, t) {
  t === void 0 && (t = fs);
  var r = null;
  function i() {
    for (var n = [], a = 0; a < arguments.length; a++)
      n[a] = arguments[a];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var o = e.apply(this, n);
    return r = {
      lastResult: o,
      lastArgs: n,
      lastThis: this
    }, o;
  }
  return i.clear = function() {
    r = null;
  }, i;
}
function ps() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var bs = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: ps
}, vs = function(t) {
  return V("span", P({
    css: bs
  }, t));
}, rr = vs, ms = {
  guidance: function(t) {
    var r = t.isSearchable, i = t.isMulti, n = t.tabSelectsValue, a = t.context, o = t.isInitialFocus;
    switch (a) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return o ? "".concat(t["aria-label"] || "Select", " is focused ").concat(r ? ",type to refine list" : "", ", press Down to open the menu, ").concat(i ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var r = t.action, i = t.label, n = i === void 0 ? "" : i, a = t.labels, o = t.isDisabled;
    switch (r) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(n, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(a.length > 1 ? "s" : "", " ").concat(a.join(","), ", selected.");
      case "select-option":
        return o ? "option ".concat(n, " is disabled. Select another option.") : "option ".concat(n, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var r = t.context, i = t.focused, n = t.options, a = t.label, o = a === void 0 ? "" : a, s = t.selectValue, u = t.isDisabled, c = t.isSelected, f = t.isAppleDevice, l = function(p, m) {
      return p && p.length ? "".concat(p.indexOf(m) + 1, " of ").concat(p.length) : "";
    };
    if (r === "value" && s)
      return "value ".concat(o, " focused, ").concat(l(s, i), ".");
    if (r === "menu" && f) {
      var v = u ? " disabled" : "", b = "".concat(c ? " selected" : "").concat(v);
      return "".concat(o).concat(b, ", ").concat(l(n, i), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var r = t.inputValue, i = t.resultsMessage;
    return "".concat(i).concat(r ? " for search term " + r : "", ".");
  }
}, Is = function(t) {
  var r = t.ariaSelection, i = t.focusedOption, n = t.focusedValue, a = t.focusableOptions, o = t.isFocused, s = t.selectValue, u = t.selectProps, c = t.id, f = t.isAppleDevice, l = u.ariaLiveMessages, v = u.getOptionLabel, b = u.inputValue, I = u.isMulti, p = u.isOptionDisabled, m = u.isSearchable, C = u.menuIsOpen, y = u.options, G = u.screenReaderStatus, h = u.tabSelectsValue, g = u.isLoading, x = u["aria-label"], E = u["aria-live"], R = Ye(function() {
    return B(B({}, ms), l || {});
  }, [l]), M = Ye(function() {
    var T = "";
    if (r && R.onChange) {
      var H = r.option, q = r.options, ee = r.removedValue, fe = r.removedValues, be = r.value, Fe = function(ce) {
        return Array.isArray(ce) ? null : ce;
      }, k = ee || H || Fe(be), ie = k ? v(k) : "", he = q || fe || void 0, Ae = he ? he.map(v) : [], ue = B({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: k && p(k, s),
        label: ie,
        labels: Ae
      }, r);
      T = R.onChange(ue);
    }
    return T;
  }, [r, R, p, s, v]), _ = Ye(function() {
    var T = "", H = i || n, q = !!(i && s && s.includes(i));
    if (H && R.onFocus) {
      var ee = {
        focused: H,
        label: v(H),
        isDisabled: p(H, s),
        isSelected: q,
        options: a,
        context: H === i ? "menu" : "value",
        selectValue: s,
        isAppleDevice: f
      };
      T = R.onFocus(ee);
    }
    return T;
  }, [i, n, v, p, R, a, s, f]), K = Ye(function() {
    var T = "";
    if (C && y.length && !g && R.onFilter) {
      var H = G({
        count: a.length
      });
      T = R.onFilter({
        inputValue: b,
        resultsMessage: H
      });
    }
    return T;
  }, [a, b, C, R, y, G, g]), j = r?.action === "initial-input-focus", U = Ye(function() {
    var T = "";
    if (R.guidance) {
      var H = n ? "value" : C ? "menu" : "input";
      T = R.guidance({
        "aria-label": x,
        context: H,
        isDisabled: i && p(i, s),
        isMulti: I,
        isSearchable: m,
        tabSelectsValue: h,
        isInitialFocus: j
      });
    }
    return T;
  }, [x, i, n, I, p, m, C, R, s, h, j]), S = V(_t, null, V("span", {
    id: "aria-selection"
  }, M), V("span", {
    id: "aria-focused"
  }, _), V("span", {
    id: "aria-results"
  }, K), V("span", {
    id: "aria-guidance"
  }, U));
  return V(_t, null, V(rr, {
    id: c
  }, j && S), V(rr, {
    "aria-live": E,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, o && !j && S));
}, hs = Is, nn = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], Cs = new RegExp("[" + nn.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), ci = {};
for (var Lt = 0; Lt < nn.length; Lt++)
  for (var Yt = nn[Lt], Jt = 0; Jt < Yt.letters.length; Jt++)
    ci[Yt.letters[Jt]] = Yt.base;
var li = function(t) {
  return t.replace(Cs, function(r) {
    return ci[r];
  });
}, As = gs(li), ir = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, ys = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, xs = function(t) {
  return function(r, i) {
    if (r.data.__isNew__) return !0;
    var n = B({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: ys,
      trim: !0,
      matchFrom: "any"
    }, t), a = n.ignoreCase, o = n.ignoreAccents, s = n.stringify, u = n.trim, c = n.matchFrom, f = u ? ir(i) : i, l = u ? ir(s(r)) : s(r);
    return a && (f = f.toLowerCase(), l = l.toLowerCase()), o && (f = As(f), l = li(l)), c === "start" ? l.substr(0, f.length) === f : l.indexOf(f) > -1;
  };
}, Es = ["innerRef"];
function Gs(e) {
  var t = e.innerRef, r = Te(e, Es), i = _u(r, "onExited", "in", "enter", "exit", "appear");
  return V("input", P({
    ref: t
  }, i, {
    css: /* @__PURE__ */ dn({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}
var Rs = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function Ss(e) {
  var t = e.isEnabled, r = e.onBottomArrive, i = e.onBottomLeave, n = e.onTopArrive, a = e.onTopLeave, o = Re(!1), s = Re(!1), u = Re(0), c = Re(null), f = se(function(m, C) {
    if (c.current !== null) {
      var y = c.current, G = y.scrollTop, h = y.scrollHeight, g = y.clientHeight, x = c.current, E = C > 0, R = h - g - G, M = !1;
      R > C && o.current && (i && i(m), o.current = !1), E && s.current && (a && a(m), s.current = !1), E && C > R ? (r && !o.current && r(m), x.scrollTop = h, M = !0, o.current = !0) : !E && -C > G && (n && !s.current && n(m), x.scrollTop = 0, M = !0, s.current = !0), M && Rs(m);
    }
  }, [r, i, n, a]), l = se(function(m) {
    f(m, m.deltaY);
  }, [f]), v = se(function(m) {
    u.current = m.changedTouches[0].clientY;
  }, []), b = se(function(m) {
    var C = u.current - m.changedTouches[0].clientY;
    f(m, C);
  }, [f]), I = se(function(m) {
    if (m) {
      var C = zu ? {
        passive: !1
      } : !1;
      m.addEventListener("wheel", l, C), m.addEventListener("touchstart", v, C), m.addEventListener("touchmove", b, C);
    }
  }, [b, v, l]), p = se(function(m) {
    m && (m.removeEventListener("wheel", l, !1), m.removeEventListener("touchstart", v, !1), m.removeEventListener("touchmove", b, !1));
  }, [b, v, l]);
  return Je(function() {
    if (t) {
      var m = c.current;
      return I(m), function() {
        p(m);
      };
    }
  }, [t, I, p]), function(m) {
    c.current = m;
  };
}
var ar = ["boxSizing", "height", "overflow", "paddingRight", "position"], ur = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function or(e) {
  e.cancelable && e.preventDefault();
}
function sr(e) {
  e.stopPropagation();
}
function cr() {
  var e = this.scrollTop, t = this.scrollHeight, r = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1);
}
function lr() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var dr = !!(typeof window < "u" && window.document && window.document.createElement), Ke = 0, Le = {
  capture: !1,
  passive: !1
};
function Fs(e) {
  var t = e.isEnabled, r = e.accountForScrollbars, i = r === void 0 ? !0 : r, n = Re({}), a = Re(null), o = se(function(u) {
    if (dr) {
      var c = document.body, f = c && c.style;
      if (i && ar.forEach(function(I) {
        var p = f && f[I];
        n.current[I] = p;
      }), i && Ke < 1) {
        var l = parseInt(n.current.paddingRight, 10) || 0, v = document.body ? document.body.clientWidth : 0, b = window.innerWidth - v + l || 0;
        Object.keys(ur).forEach(function(I) {
          var p = ur[I];
          f && (f[I] = p);
        }), f && (f.paddingRight = "".concat(b, "px"));
      }
      c && lr() && (c.addEventListener("touchmove", or, Le), u && (u.addEventListener("touchstart", cr, Le), u.addEventListener("touchmove", sr, Le))), Ke += 1;
    }
  }, [i]), s = se(function(u) {
    if (dr) {
      var c = document.body, f = c && c.style;
      Ke = Math.max(Ke - 1, 0), i && Ke < 1 && ar.forEach(function(l) {
        var v = n.current[l];
        f && (f[l] = v);
      }), c && lr() && (c.removeEventListener("touchmove", or, Le), u && (u.removeEventListener("touchstart", cr, Le), u.removeEventListener("touchmove", sr, Le)));
    }
  }, [i]);
  return Je(function() {
    if (t) {
      var u = a.current;
      return o(u), function() {
        s(u);
      };
    }
  }, [t, o, s]), function(u) {
    a.current = u;
  };
}
function ws() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Vs = function(t) {
  var r = t.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, Bs = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: ws
};
function Ps(e) {
  var t = e.children, r = e.lockEnabled, i = e.captureEnabled, n = i === void 0 ? !0 : i, a = e.onBottomArrive, o = e.onBottomLeave, s = e.onTopArrive, u = e.onTopLeave, c = Ss({
    isEnabled: n,
    onBottomArrive: a,
    onBottomLeave: o,
    onTopArrive: s,
    onTopLeave: u
  }), f = Fs({
    isEnabled: r
  }), l = function(b) {
    c(b), f(b);
  };
  return V(_t, null, r && V("div", {
    onClick: Vs,
    css: Bs
  }), t(l));
}
function Ts() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Os = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: Ts
}, Xs = function(t) {
  var r = t.name, i = t.onFocus;
  return V("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: i,
    css: Os,
    value: "",
    onChange: function() {
    }
  });
}, Ws = Xs;
function vn(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Ms() {
  return vn(/^iPhone/i);
}
function di() {
  return vn(/^Mac/i);
}
function Ns() {
  return vn(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  di() && navigator.maxTouchPoints > 1;
}
function Ds() {
  return Ms() || Ns();
}
function Zs() {
  return di() || Ds();
}
var Hs = function(t) {
  return t.label;
}, Ls = function(t) {
  return t.label;
}, Ys = function(t) {
  return t.value;
}, Js = function(t) {
  return !!t.isDisabled;
}, zs = {
  clearIndicator: Eo,
  container: fo,
  control: Bo,
  dropdownIndicator: yo,
  group: Xo,
  groupHeading: Mo,
  indicatorsContainer: vo,
  indicatorSeparator: Ro,
  input: Ho,
  loadingIndicator: wo,
  loadingMessage: uo,
  menu: qu,
  menuList: ro,
  menuPortal: co,
  multiValue: jo,
  multiValueLabel: ko,
  multiValueRemove: _o,
  noOptionsMessage: ao,
  option: es,
  placeholder: rs,
  singleValue: us,
  valueContainer: po
}, js = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, ks = 4, fi = 4, _s = 38, Us = fi * 2, Qs = {
  baseUnit: fi,
  controlHeight: _s,
  menuGutter: Us
}, zt = {
  borderRadius: ks,
  colors: js,
  spacing: Qs
}, $s = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: er(),
  captureMenuScroll: !er(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: xs(),
  formatGroupLabel: Hs,
  getOptionLabel: Ls,
  getOptionValue: Ys,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: Js,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !Yu(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var r = t.count;
    return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function fr(e, t, r, i) {
  var n = bi(e, t, r), a = vi(e, t, r), o = pi(e, t), s = Rt(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: n,
    isSelected: a,
    label: o,
    value: s,
    index: i
  };
}
function It(e, t) {
  return e.options.map(function(r, i) {
    if ("options" in r) {
      var n = r.options.map(function(o, s) {
        return fr(e, o, t, s);
      }).filter(function(o) {
        return pr(e, o);
      });
      return n.length > 0 ? {
        type: "group",
        data: r,
        options: n,
        index: i
      } : void 0;
    }
    var a = fr(e, r, t, i);
    return pr(e, a) ? a : void 0;
  }).filter(ju);
}
function gi(e) {
  return e.reduce(function(t, r) {
    return r.type === "group" ? t.push.apply(t, un(r.options.map(function(i) {
      return i.data;
    }))) : t.push(r.data), t;
  }, []);
}
function gr(e, t) {
  return e.reduce(function(r, i) {
    return i.type === "group" ? r.push.apply(r, un(i.options.map(function(n) {
      return {
        data: n.data,
        id: "".concat(t, "-").concat(i.index, "-").concat(n.index)
      };
    }))) : r.push({
      data: i.data,
      id: "".concat(t, "-").concat(i.index)
    }), r;
  }, []);
}
function Ks(e, t) {
  return gi(It(e, t));
}
function pr(e, t) {
  var r = e.inputValue, i = r === void 0 ? "" : r, n = t.data, a = t.isSelected, o = t.label, s = t.value;
  return (!Ii(e) || !a) && mi(e, {
    label: o,
    value: s,
    data: n
  }, i);
}
function qs(e, t) {
  var r = e.focusedValue, i = e.selectValue, n = i.indexOf(r);
  if (n > -1) {
    var a = t.indexOf(r);
    if (a > -1)
      return r;
    if (n < t.length)
      return t[n];
  }
  return null;
}
function ec(e, t) {
  var r = e.focusedOption;
  return r && t.indexOf(r) > -1 ? r : t[0];
}
var jt = function(t, r) {
  var i, n = (i = t.find(function(a) {
    return a.data === r;
  })) === null || i === void 0 ? void 0 : i.id;
  return n || null;
}, pi = function(t, r) {
  return t.getOptionLabel(r);
}, Rt = function(t, r) {
  return t.getOptionValue(r);
};
function bi(e, t, r) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, r) : !1;
}
function vi(e, t, r) {
  if (r.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, r);
  var i = Rt(e, t);
  return r.some(function(n) {
    return Rt(e, n) === i;
  });
}
function mi(e, t, r) {
  return e.filterOption ? e.filterOption(t, r) : !0;
}
var Ii = function(t) {
  var r = t.hideSelectedOptions, i = t.isMulti;
  return r === void 0 ? i : r;
}, tc = 1, hi = /* @__PURE__ */ function(e) {
  ba(r, e);
  var t = Ia(r);
  function r(i) {
    var n;
    if (ga(this, r), n = t.call(this, i), n.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: "",
      isAppleDevice: !1
    }, n.blockOptionHover = !1, n.isComposing = !1, n.commonProps = void 0, n.initialTouchX = 0, n.initialTouchY = 0, n.openAfterFocus = !1, n.scrollToFocusedOptionOnUpdate = !1, n.userIsDragging = void 0, n.controlRef = null, n.getControlRef = function(u) {
      n.controlRef = u;
    }, n.focusedOptionRef = null, n.getFocusedOptionRef = function(u) {
      n.focusedOptionRef = u;
    }, n.menuListRef = null, n.getMenuListRef = function(u) {
      n.menuListRef = u;
    }, n.inputRef = null, n.getInputRef = function(u) {
      n.inputRef = u;
    }, n.focus = n.focusInput, n.blur = n.blurInput, n.onChange = function(u, c) {
      var f = n.props, l = f.onChange, v = f.name;
      c.name = v, n.ariaOnChange(u, c), l(u, c);
    }, n.setValue = function(u, c, f) {
      var l = n.props, v = l.closeMenuOnSelect, b = l.isMulti, I = l.inputValue;
      n.onInputChange("", {
        action: "set-value",
        prevInputValue: I
      }), v && (n.setState({
        inputIsHiddenAfterUpdate: !b
      }), n.onMenuClose()), n.setState({
        clearFocusValueOnUpdate: !0
      }), n.onChange(u, {
        action: c,
        option: f
      });
    }, n.selectOption = function(u) {
      var c = n.props, f = c.blurInputOnSelect, l = c.isMulti, v = c.name, b = n.state.selectValue, I = l && n.isOptionSelected(u, b), p = n.isOptionDisabled(u, b);
      if (I) {
        var m = n.getOptionValue(u);
        n.setValue(b.filter(function(C) {
          return n.getOptionValue(C) !== m;
        }), "deselect-option", u);
      } else if (!p)
        l ? n.setValue([].concat(un(b), [u]), "select-option", u) : n.setValue(u, "select-option");
      else {
        n.ariaOnChange(u, {
          action: "select-option",
          option: u,
          name: v
        });
        return;
      }
      f && n.blurInput();
    }, n.removeValue = function(u) {
      var c = n.props.isMulti, f = n.state.selectValue, l = n.getOptionValue(u), v = f.filter(function(I) {
        return n.getOptionValue(I) !== l;
      }), b = ft(c, v, v[0] || null);
      n.onChange(b, {
        action: "remove-value",
        removedValue: u
      }), n.focusInput();
    }, n.clearValue = function() {
      var u = n.state.selectValue;
      n.onChange(ft(n.props.isMulti, [], null), {
        action: "clear",
        removedValues: u
      });
    }, n.popValue = function() {
      var u = n.props.isMulti, c = n.state.selectValue, f = c[c.length - 1], l = c.slice(0, c.length - 1), v = ft(u, l, l[0] || null);
      f && n.onChange(v, {
        action: "pop-value",
        removedValue: f
      });
    }, n.getFocusedOptionId = function(u) {
      return jt(n.state.focusableOptionsWithIds, u);
    }, n.getFocusableOptionsWithIds = function() {
      return gr(It(n.props, n.state.selectValue), n.getElementId("option"));
    }, n.getValue = function() {
      return n.state.selectValue;
    }, n.cx = function() {
      for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++)
        c[f] = arguments[f];
      return Nu.apply(void 0, [n.props.classNamePrefix].concat(c));
    }, n.getOptionLabel = function(u) {
      return pi(n.props, u);
    }, n.getOptionValue = function(u) {
      return Rt(n.props, u);
    }, n.getStyles = function(u, c) {
      var f = n.props.unstyled, l = zs[u](c, f);
      l.boxSizing = "border-box";
      var v = n.props.styles[u];
      return v ? v(l, c) : l;
    }, n.getClassNames = function(u, c) {
      var f, l;
      return (f = (l = n.props.classNames)[u]) === null || f === void 0 ? void 0 : f.call(l, c);
    }, n.getElementId = function(u) {
      return "".concat(n.state.instancePrefix, "-").concat(u);
    }, n.getComponents = function() {
      return ls(n.props);
    }, n.buildCategorizedOptions = function() {
      return It(n.props, n.state.selectValue);
    }, n.getCategorizedOptions = function() {
      return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
    }, n.buildFocusableOptions = function() {
      return gi(n.buildCategorizedOptions());
    }, n.getFocusableOptions = function() {
      return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
    }, n.ariaOnChange = function(u, c) {
      n.setState({
        ariaSelection: B({
          value: u
        }, c)
      });
    }, n.onMenuMouseDown = function(u) {
      u.button === 0 && (u.stopPropagation(), u.preventDefault(), n.focusInput());
    }, n.onMenuMouseMove = function(u) {
      n.blockOptionHover = !1;
    }, n.onControlMouseDown = function(u) {
      if (!u.defaultPrevented) {
        var c = n.props.openMenuOnClick;
        n.state.isFocused ? n.props.menuIsOpen ? u.target.tagName !== "INPUT" && u.target.tagName !== "TEXTAREA" && n.onMenuClose() : c && n.openMenu("first") : (c && (n.openAfterFocus = !0), n.focusInput()), u.target.tagName !== "INPUT" && u.target.tagName !== "TEXTAREA" && u.preventDefault();
      }
    }, n.onDropdownIndicatorMouseDown = function(u) {
      if (!(u && u.type === "mousedown" && u.button !== 0) && !n.props.isDisabled) {
        var c = n.props, f = c.isMulti, l = c.menuIsOpen;
        n.focusInput(), l ? (n.setState({
          inputIsHiddenAfterUpdate: !f
        }), n.onMenuClose()) : n.openMenu("first"), u.preventDefault();
      }
    }, n.onClearIndicatorMouseDown = function(u) {
      u && u.type === "mousedown" && u.button !== 0 || (n.clearValue(), u.preventDefault(), n.openAfterFocus = !1, u.type === "touchend" ? n.focusInput() : setTimeout(function() {
        return n.focusInput();
      }));
    }, n.onScroll = function(u) {
      typeof n.props.closeMenuOnScroll == "boolean" ? u.target instanceof HTMLElement && Bt(u.target) && n.props.onMenuClose() : typeof n.props.closeMenuOnScroll == "function" && n.props.closeMenuOnScroll(u) && n.props.onMenuClose();
    }, n.onCompositionStart = function() {
      n.isComposing = !0;
    }, n.onCompositionEnd = function() {
      n.isComposing = !1;
    }, n.onTouchStart = function(u) {
      var c = u.touches, f = c && c.item(0);
      f && (n.initialTouchX = f.clientX, n.initialTouchY = f.clientY, n.userIsDragging = !1);
    }, n.onTouchMove = function(u) {
      var c = u.touches, f = c && c.item(0);
      if (f) {
        var l = Math.abs(f.clientX - n.initialTouchX), v = Math.abs(f.clientY - n.initialTouchY), b = 5;
        n.userIsDragging = l > b || v > b;
      }
    }, n.onTouchEnd = function(u) {
      n.userIsDragging || (n.controlRef && !n.controlRef.contains(u.target) && n.menuListRef && !n.menuListRef.contains(u.target) && n.blurInput(), n.initialTouchX = 0, n.initialTouchY = 0);
    }, n.onControlTouchEnd = function(u) {
      n.userIsDragging || n.onControlMouseDown(u);
    }, n.onClearIndicatorTouchEnd = function(u) {
      n.userIsDragging || n.onClearIndicatorMouseDown(u);
    }, n.onDropdownIndicatorTouchEnd = function(u) {
      n.userIsDragging || n.onDropdownIndicatorMouseDown(u);
    }, n.handleInputChange = function(u) {
      var c = n.props.inputValue, f = u.currentTarget.value;
      n.setState({
        inputIsHiddenAfterUpdate: !1
      }), n.onInputChange(f, {
        action: "input-change",
        prevInputValue: c
      }), n.props.menuIsOpen || n.onMenuOpen();
    }, n.onInputFocus = function(u) {
      n.props.onFocus && n.props.onFocus(u), n.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (n.openAfterFocus || n.props.openMenuOnFocus) && n.openMenu("first"), n.openAfterFocus = !1;
    }, n.onInputBlur = function(u) {
      var c = n.props.inputValue;
      if (n.menuListRef && n.menuListRef.contains(document.activeElement)) {
        n.inputRef.focus();
        return;
      }
      n.props.onBlur && n.props.onBlur(u), n.onInputChange("", {
        action: "input-blur",
        prevInputValue: c
      }), n.onMenuClose(), n.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, n.onOptionHover = function(u) {
      if (!(n.blockOptionHover || n.state.focusedOption === u)) {
        var c = n.getFocusableOptions(), f = c.indexOf(u);
        n.setState({
          focusedOption: u,
          focusedOptionId: f > -1 ? n.getFocusedOptionId(u) : null
        });
      }
    }, n.shouldHideSelectedOptions = function() {
      return Ii(n.props);
    }, n.onValueInputFocus = function(u) {
      u.preventDefault(), u.stopPropagation(), n.focus();
    }, n.onKeyDown = function(u) {
      var c = n.props, f = c.isMulti, l = c.backspaceRemovesValue, v = c.escapeClearsValue, b = c.inputValue, I = c.isClearable, p = c.isDisabled, m = c.menuIsOpen, C = c.onKeyDown, y = c.tabSelectsValue, G = c.openMenuOnFocus, h = n.state, g = h.focusedOption, x = h.focusedValue, E = h.selectValue;
      if (!p && !(typeof C == "function" && (C(u), u.defaultPrevented))) {
        switch (n.blockOptionHover = !0, u.key) {
          case "ArrowLeft":
            if (!f || b) return;
            n.focusValue("previous");
            break;
          case "ArrowRight":
            if (!f || b) return;
            n.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (b) return;
            if (x)
              n.removeValue(x);
            else {
              if (!l) return;
              f ? n.popValue() : I && n.clearValue();
            }
            break;
          case "Tab":
            if (n.isComposing || u.shiftKey || !m || !y || !g || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            G && n.isOptionSelected(g, E))
              return;
            n.selectOption(g);
            break;
          case "Enter":
            if (u.keyCode === 229)
              break;
            if (m) {
              if (!g || n.isComposing) return;
              n.selectOption(g);
              break;
            }
            return;
          case "Escape":
            m ? (n.setState({
              inputIsHiddenAfterUpdate: !1
            }), n.onInputChange("", {
              action: "menu-close",
              prevInputValue: b
            }), n.onMenuClose()) : I && v && n.clearValue();
            break;
          case " ":
            if (b)
              return;
            if (!m) {
              n.openMenu("first");
              break;
            }
            if (!g) return;
            n.selectOption(g);
            break;
          case "ArrowUp":
            m ? n.focusOption("up") : n.openMenu("last");
            break;
          case "ArrowDown":
            m ? n.focusOption("down") : n.openMenu("first");
            break;
          case "PageUp":
            if (!m) return;
            n.focusOption("pageup");
            break;
          case "PageDown":
            if (!m) return;
            n.focusOption("pagedown");
            break;
          case "Home":
            if (!m) return;
            n.focusOption("first");
            break;
          case "End":
            if (!m) return;
            n.focusOption("last");
            break;
          default:
            return;
        }
        u.preventDefault();
      }
    }, n.state.instancePrefix = "react-select-" + (n.props.instanceId || ++tc), n.state.selectValue = Kn(i.value), i.menuIsOpen && n.state.selectValue.length) {
      var a = n.getFocusableOptionsWithIds(), o = n.buildFocusableOptions(), s = o.indexOf(n.state.selectValue[0]);
      n.state.focusableOptionsWithIds = a, n.state.focusedOption = o[s], n.state.focusedOptionId = jt(a, o[s]);
    }
    return n;
  }
  return pa(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && qn(this.menuListRef, this.focusedOptionRef), Zs() && this.setState({
        isAppleDevice: !0
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var a = this.props, o = a.isDisabled, s = a.menuIsOpen, u = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (u && !o && n.isDisabled || // ensure focus is on the Input when the menu opens
      u && s && !n.menuIsOpen) && this.focusInput(), u && o && !n.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !u && !o && n.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (qn(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(n, a) {
      this.props.onInputChange(n, a);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(n) {
      var a = this, o = this.state, s = o.selectValue, u = o.isFocused, c = this.buildFocusableOptions(), f = n === "first" ? 0 : c.length - 1;
      if (!this.props.isMulti) {
        var l = c.indexOf(s[0]);
        l > -1 && (f = l);
      }
      this.scrollToFocusedOptionOnUpdate = !(u && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: c[f],
        focusedOptionId: this.getFocusedOptionId(c[f])
      }, function() {
        return a.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(n) {
      var a = this.state, o = a.selectValue, s = a.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var u = o.indexOf(s);
        s || (u = -1);
        var c = o.length - 1, f = -1;
        if (o.length) {
          switch (n) {
            case "previous":
              u === 0 ? f = 0 : u === -1 ? f = c : f = u - 1;
              break;
            case "next":
              u > -1 && u < c && (f = u + 1);
              break;
          }
          this.setState({
            inputIsHidden: f !== -1,
            focusedValue: o[f]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", a = this.props.pageSize, o = this.state.focusedOption, s = this.getFocusableOptions();
      if (s.length) {
        var u = 0, c = s.indexOf(o);
        o || (c = -1), n === "up" ? u = c > 0 ? c - 1 : s.length - 1 : n === "down" ? u = (c + 1) % s.length : n === "pageup" ? (u = c - a, u < 0 && (u = 0)) : n === "pagedown" ? (u = c + a, u > s.length - 1 && (u = s.length - 1)) : n === "last" && (u = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: s[u],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(s[u])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(zt) : B(B({}, zt), this.props.theme) : zt;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var n = this.clearValue, a = this.cx, o = this.getStyles, s = this.getClassNames, u = this.getValue, c = this.selectOption, f = this.setValue, l = this.props, v = l.isMulti, b = l.isRtl, I = l.options, p = this.hasValue();
      return {
        clearValue: n,
        cx: a,
        getStyles: o,
        getClassNames: s,
        getValue: u,
        hasValue: p,
        isMulti: v,
        isRtl: b,
        options: I,
        selectOption: c,
        selectProps: l,
        setValue: f,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var n = this.state.selectValue;
      return n.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var n = this.props, a = n.isClearable, o = n.isMulti;
      return a === void 0 ? o : a;
    }
  }, {
    key: "isOptionDisabled",
    value: function(n, a) {
      return bi(this.props, n, a);
    }
  }, {
    key: "isOptionSelected",
    value: function(n, a) {
      return vi(this.props, n, a);
    }
  }, {
    key: "filterOption",
    value: function(n, a) {
      return mi(this.props, n, a);
    }
  }, {
    key: "formatOptionLabel",
    value: function(n, a) {
      if (typeof this.props.formatOptionLabel == "function") {
        var o = this.props.inputValue, s = this.state.selectValue;
        return this.props.formatOptionLabel(n, {
          context: a,
          inputValue: o,
          selectValue: s
        });
      } else
        return this.getOptionLabel(n);
    }
  }, {
    key: "formatGroupLabel",
    value: function(n) {
      return this.props.formatGroupLabel(n);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var n = this.props, a = n.isDisabled, o = n.isSearchable, s = n.inputId, u = n.inputValue, c = n.tabIndex, f = n.form, l = n.menuIsOpen, v = n.required, b = this.getComponents(), I = b.Input, p = this.state, m = p.inputIsHidden, C = p.ariaSelection, y = this.commonProps, G = s || this.getElementId("input"), h = B(B(B({
          "aria-autocomplete": "list",
          "aria-expanded": l,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": v,
          role: "combobox",
          "aria-activedescendant": this.state.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, l && {
          "aria-controls": this.getElementId("listbox")
        }), !o && {
          "aria-readonly": !0
        }), this.hasValue() ? C?.action === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return o ? /* @__PURE__ */ X.createElement(I, P({}, y, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: G,
          innerRef: this.getInputRef,
          isDisabled: a,
          isHidden: m,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: c,
          form: f,
          type: "text",
          value: u
        }, h)) : /* @__PURE__ */ X.createElement(Gs, P({
          id: G,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Et,
          onFocus: this.onInputFocus,
          disabled: a,
          tabIndex: c,
          inputMode: "none",
          form: f,
          value: ""
        }, h));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var n = this, a = this.getComponents(), o = a.MultiValue, s = a.MultiValueContainer, u = a.MultiValueLabel, c = a.MultiValueRemove, f = a.SingleValue, l = a.Placeholder, v = this.commonProps, b = this.props, I = b.controlShouldRenderValue, p = b.isDisabled, m = b.isMulti, C = b.inputValue, y = b.placeholder, G = this.state, h = G.selectValue, g = G.focusedValue, x = G.isFocused;
      if (!this.hasValue() || !I)
        return C ? null : /* @__PURE__ */ X.createElement(l, P({}, v, {
          key: "placeholder",
          isDisabled: p,
          isFocused: x,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), y);
      if (m)
        return h.map(function(R, M) {
          var _ = R === g, K = "".concat(n.getOptionLabel(R), "-").concat(n.getOptionValue(R));
          return /* @__PURE__ */ X.createElement(o, P({}, v, {
            components: {
              Container: s,
              Label: u,
              Remove: c
            },
            isFocused: _,
            isDisabled: p,
            key: K,
            index: M,
            removeProps: {
              onClick: function() {
                return n.removeValue(R);
              },
              onTouchEnd: function() {
                return n.removeValue(R);
              },
              onMouseDown: function(U) {
                U.preventDefault();
              }
            },
            data: R
          }), n.formatOptionLabel(R, "value"));
        });
      if (C)
        return null;
      var E = h[0];
      return /* @__PURE__ */ X.createElement(f, P({}, v, {
        data: E,
        isDisabled: p
      }), this.formatOptionLabel(E, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var n = this.getComponents(), a = n.ClearIndicator, o = this.commonProps, s = this.props, u = s.isDisabled, c = s.isLoading, f = this.state.isFocused;
      if (!this.isClearable() || !a || u || !this.hasValue() || c)
        return null;
      var l = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ X.createElement(a, P({}, o, {
        innerProps: l,
        isFocused: f
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var n = this.getComponents(), a = n.LoadingIndicator, o = this.commonProps, s = this.props, u = s.isDisabled, c = s.isLoading, f = this.state.isFocused;
      if (!a || !c) return null;
      var l = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ X.createElement(a, P({}, o, {
        innerProps: l,
        isDisabled: u,
        isFocused: f
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var n = this.getComponents(), a = n.DropdownIndicator, o = n.IndicatorSeparator;
      if (!a || !o) return null;
      var s = this.commonProps, u = this.props.isDisabled, c = this.state.isFocused;
      return /* @__PURE__ */ X.createElement(o, P({}, s, {
        isDisabled: u,
        isFocused: c
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var n = this.getComponents(), a = n.DropdownIndicator;
      if (!a) return null;
      var o = this.commonProps, s = this.props.isDisabled, u = this.state.isFocused, c = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ X.createElement(a, P({}, o, {
        innerProps: c,
        isDisabled: s,
        isFocused: u
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var n = this, a = this.getComponents(), o = a.Group, s = a.GroupHeading, u = a.Menu, c = a.MenuList, f = a.MenuPortal, l = a.LoadingMessage, v = a.NoOptionsMessage, b = a.Option, I = this.commonProps, p = this.state.focusedOption, m = this.props, C = m.captureMenuScroll, y = m.inputValue, G = m.isLoading, h = m.loadingMessage, g = m.minMenuHeight, x = m.maxMenuHeight, E = m.menuIsOpen, R = m.menuPlacement, M = m.menuPosition, _ = m.menuPortalTarget, K = m.menuShouldBlockScroll, j = m.menuShouldScrollIntoView, U = m.noOptionsMessage, S = m.onMenuScrollToTop, T = m.onMenuScrollToBottom;
      if (!E) return null;
      var H = function(ie, he) {
        var Ae = ie.type, ue = ie.data, ve = ie.isDisabled, ce = ie.isSelected, xe = ie.label, Oe = ie.value, De = p === ue, w = ve ? void 0 : function() {
          return n.onOptionHover(ue);
        }, Xe = ve ? void 0 : function() {
          return n.selectOption(ue);
        }, we = "".concat(n.getElementId("option"), "-").concat(he), Ve = {
          id: we,
          onClick: Xe,
          onMouseMove: w,
          onMouseOver: w,
          tabIndex: -1,
          role: "option",
          "aria-selected": n.state.isAppleDevice ? void 0 : ce
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ X.createElement(b, P({}, I, {
          innerProps: Ve,
          data: ue,
          isDisabled: ve,
          isSelected: ce,
          key: we,
          label: xe,
          type: Ae,
          value: Oe,
          isFocused: De,
          innerRef: De ? n.getFocusedOptionRef : void 0
        }), n.formatOptionLabel(ie.data, "menu"));
      }, q;
      if (this.hasOptions())
        q = this.getCategorizedOptions().map(function(k) {
          if (k.type === "group") {
            var ie = k.data, he = k.options, Ae = k.index, ue = "".concat(n.getElementId("group"), "-").concat(Ae), ve = "".concat(ue, "-heading");
            return /* @__PURE__ */ X.createElement(o, P({}, I, {
              key: ue,
              data: ie,
              options: he,
              Heading: s,
              headingProps: {
                id: ve,
                data: k.data
              },
              label: n.formatGroupLabel(k.data)
            }), k.options.map(function(ce) {
              return H(ce, "".concat(Ae, "-").concat(ce.index));
            }));
          } else if (k.type === "option")
            return H(k, "".concat(k.index));
        });
      else if (G) {
        var ee = h({
          inputValue: y
        });
        if (ee === null) return null;
        q = /* @__PURE__ */ X.createElement(l, I, ee);
      } else {
        var fe = U({
          inputValue: y
        });
        if (fe === null) return null;
        q = /* @__PURE__ */ X.createElement(v, I, fe);
      }
      var be = {
        minMenuHeight: g,
        maxMenuHeight: x,
        menuPlacement: R,
        menuPosition: M,
        menuShouldScrollIntoView: j
      }, Fe = /* @__PURE__ */ X.createElement(eo, P({}, I, be), function(k) {
        var ie = k.ref, he = k.placerProps, Ae = he.placement, ue = he.maxHeight;
        return /* @__PURE__ */ X.createElement(u, P({}, I, be, {
          innerRef: ie,
          innerProps: {
            onMouseDown: n.onMenuMouseDown,
            onMouseMove: n.onMenuMouseMove
          },
          isLoading: G,
          placement: Ae
        }), /* @__PURE__ */ X.createElement(Ps, {
          captureEnabled: C,
          onTopArrive: S,
          onBottomArrive: T,
          lockEnabled: K
        }, function(ve) {
          return /* @__PURE__ */ X.createElement(c, P({}, I, {
            innerRef: function(xe) {
              n.getMenuListRef(xe), ve(xe);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": I.isMulti,
              id: n.getElementId("listbox")
            },
            isLoading: G,
            maxHeight: ue,
            focusedOption: p
          }), q);
        }));
      });
      return _ || M === "fixed" ? /* @__PURE__ */ X.createElement(f, P({}, I, {
        appendTo: _,
        controlElement: this.controlRef,
        menuPlacement: R,
        menuPosition: M
      }), Fe) : Fe;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var n = this, a = this.props, o = a.delimiter, s = a.isDisabled, u = a.isMulti, c = a.name, f = a.required, l = this.state.selectValue;
      if (f && !this.hasValue() && !s)
        return /* @__PURE__ */ X.createElement(Ws, {
          name: c,
          onFocus: this.onValueInputFocus
        });
      if (!(!c || s))
        if (u)
          if (o) {
            var v = l.map(function(p) {
              return n.getOptionValue(p);
            }).join(o);
            return /* @__PURE__ */ X.createElement("input", {
              name: c,
              type: "hidden",
              value: v
            });
          } else {
            var b = l.length > 0 ? l.map(function(p, m) {
              return /* @__PURE__ */ X.createElement("input", {
                key: "i-".concat(m),
                name: c,
                type: "hidden",
                value: n.getOptionValue(p)
              });
            }) : /* @__PURE__ */ X.createElement("input", {
              name: c,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ X.createElement("div", null, b);
          }
        else {
          var I = l[0] ? this.getOptionValue(l[0]) : "";
          return /* @__PURE__ */ X.createElement("input", {
            name: c,
            type: "hidden",
            value: I
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var n = this.commonProps, a = this.state, o = a.ariaSelection, s = a.focusedOption, u = a.focusedValue, c = a.isFocused, f = a.selectValue, l = this.getFocusableOptions();
      return /* @__PURE__ */ X.createElement(hs, P({}, n, {
        id: this.getElementId("live-region"),
        ariaSelection: o,
        focusedOption: s,
        focusedValue: u,
        isFocused: c,
        selectValue: f,
        focusableOptions: l,
        isAppleDevice: this.state.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.getComponents(), a = n.Control, o = n.IndicatorsContainer, s = n.SelectContainer, u = n.ValueContainer, c = this.props, f = c.className, l = c.id, v = c.isDisabled, b = c.menuIsOpen, I = this.state.isFocused, p = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ X.createElement(s, P({}, p, {
        className: f,
        innerProps: {
          id: l,
          onKeyDown: this.onKeyDown
        },
        isDisabled: v,
        isFocused: I
      }), this.renderLiveRegion(), /* @__PURE__ */ X.createElement(a, P({}, p, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: v,
        isFocused: I,
        menuIsOpen: b
      }), /* @__PURE__ */ X.createElement(u, P({}, p, {
        isDisabled: v
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ X.createElement(o, P({}, p, {
        isDisabled: v
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var o = a.prevProps, s = a.clearFocusValueOnUpdate, u = a.inputIsHiddenAfterUpdate, c = a.ariaSelection, f = a.isFocused, l = a.prevWasFocused, v = a.instancePrefix, b = n.options, I = n.value, p = n.menuIsOpen, m = n.inputValue, C = n.isMulti, y = Kn(I), G = {};
      if (o && (I !== o.value || b !== o.options || p !== o.menuIsOpen || m !== o.inputValue)) {
        var h = p ? Ks(n, y) : [], g = p ? gr(It(n, y), "".concat(v, "-option")) : [], x = s ? qs(a, y) : null, E = ec(a, h), R = jt(g, E);
        G = {
          selectValue: y,
          focusedOption: E,
          focusedOptionId: R,
          focusableOptionsWithIds: g,
          focusedValue: x,
          clearFocusValueOnUpdate: !1
        };
      }
      var M = u != null && n !== o ? {
        inputIsHidden: u,
        inputIsHiddenAfterUpdate: void 0
      } : {}, _ = c, K = f && l;
      return f && !K && (_ = {
        value: ft(C, y, y[0] || null),
        options: y,
        action: "initial-input-focus"
      }, K = !l), c?.action === "initial-input-focus" && (_ = null), B(B(B({}, G), M), {}, {
        prevProps: n,
        ariaSelection: _,
        prevWasFocused: K
      });
    }
  }]), r;
}(ta);
hi.defaultProps = $s;
var nc = /* @__PURE__ */ Vr(function(e, t) {
  var r = fa(e);
  return /* @__PURE__ */ X.createElement(hi, P({
    ref: t
  }, r));
}), rc = nc;
const ic = ({ data: e, isSelected: t, isFocused: r, innerProps: i }) => /* @__PURE__ */ ae.jsxs(
  "div",
  {
    ...i,
    style: {
      padding: "8px 12px",
      backgroundColor: t ? "#007cba" : r ? "#f0f0f0" : "white",
      color: t ? "white" : "black",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    },
    children: [
      /* @__PURE__ */ ae.jsx("div", { style: { fontWeight: "500" }, children: e.label }),
      e.categories && e.categories.length > 0 && /* @__PURE__ */ ae.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px" }, children: e.categories.map((n, a) => /* @__PURE__ */ ae.jsx(
        "span",
        {
          style: {
            backgroundColor: t ? "rgba(255, 255, 255, 0.2)" : n.color || "#dfe6ebff",
            color: t ? "white" : "#666",
            padding: "2px 6px",
            borderRadius: "12px",
            fontSize: "11px",
            fontWeight: "400"
          },
          children: n.title
        },
        a
      )) })
    ]
  }
), Lc = ({ api: e, options: t = {} }) => {
  const { autoCopy: r = !1, autoCopyDebounceDelay: i = 500 } = t, [n, a] = de({}), [o, s] = de(""), [u, c] = de([]), [f, l] = de({}), [v, b] = de(""), [I, p] = de(""), [m, C] = de(""), [y, G] = de(!1), [h, g] = de(!1), x = Re(null), E = se((S) => {
    x.current && clearTimeout(x.current), x.current = setTimeout(() => {
      S && r && navigator.clipboard.writeText(S).then(() => {
        G(!0), setTimeout(() => G(!1), 1500);
      });
    }, i);
  }, [r, i]);
  Je(() => () => {
    x.current && clearTimeout(x.current);
  }, []), Je(() => {
    e.getSnippets().then(a).catch((S) => C(S.message || "Error fetching snippets"));
  }, [e]);
  const R = se((S, T) => {
    let H = S;
    return Object.keys(T).forEach((q) => {
      const ee = T[q] || "", fe = `{{${q}}}`;
      H = H.replace(new RegExp(fe.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), ee);
    }), H;
  }, []);
  Je(() => {
    if (v) {
      const S = R(v, f);
      p(S), r && S && E(S);
    }
  }, [v, f, R, r, E]), Je(() => {
    o && n[o] && (c(n[o].fields || []), l({}), b(""), p(""), C(""), G(!1), g(!1), !n[o].fields || n[o].fields.length === 0 ? (g(!0), e.renderSnippet(o, {}).then((S) => {
      b(S.output), g(!1);
    }).catch((S) => {
      C(S.message || "Error rendering snippet"), g(!1);
    })) : (g(!0), e.renderSnippet(o, {}).then((S) => {
      b(S.output), g(!1);
    }).catch((S) => {
      C(S.message || "Error rendering snippet"), g(!1);
    })));
  }, [o, n, e]);
  const M = (S, T) => {
    l({ ...f, [S]: T });
  }, _ = (S) => {
    s(S ? S.value : "");
  }, K = () => {
    I && navigator.clipboard.writeText(I).then(() => {
      G(!0), setTimeout(() => G(!1), 1500);
    });
  }, j = Object.keys(n).map((S) => {
    const T = n[S], H = T.meta && T.meta.title ? T.meta.title : S, q = T.categories && Array.isArray(T.categories) ? T.categories : [];
    return {
      value: S,
      label: H,
      categories: q
    };
  }), U = {
    control: (S, T) => ({
      ...S,
      maxWidth: 400,
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxShadow: T.isFocused ? "0 0 0 1px #007cba" : "none",
      "&:hover": {
        borderColor: "#007cba"
      }
    }),
    option: (S, T) => ({
      ...S,
      backgroundColor: T.isSelected ? "#007cba" : T.isFocused ? "#f0f0f0" : "white",
      color: T.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: T.isSelected ? "#007cba" : "#f0f0f0"
      }
    }),
    menu: (S) => ({
      ...S,
      zIndex: 9999
    }),
    placeholder: (S) => ({
      ...S,
      color: "#666"
    })
  };
  return /* @__PURE__ */ ae.jsxs("div", { children: [
    /* @__PURE__ */ ae.jsx(
      rc,
      {
        value: j.find((S) => S.value === o) || null,
        onChange: _,
        options: j,
        placeholder: "Select a snippet",
        styles: U,
        className: "snippo-select",
        isClearable: !1,
        isSearchable: !0,
        components: { Option: ic }
      }
    ),
    u.length > 0 && /* @__PURE__ */ ae.jsx("div", { className: "snippetsapp-form", children: u.map((S) => /* @__PURE__ */ ae.jsxs("div", { className: "snippetsapp-field", children: [
      /* @__PURE__ */ ae.jsx(
        "label",
        {
          htmlFor: `snippetsapp-field-${S.name}`,
          className: "snippetsapp-label",
          children: S.label || S.name
        }
      ),
      /* @__PURE__ */ ae.jsx(
        "input",
        {
          id: `snippetsapp-field-${S.name}`,
          type: "text",
          value: f[S.name] || "",
          onChange: (T) => M(S.name, T.target.value),
          className: "snippetsapp-input regular-text",
          placeholder: S.placeholder || `Enter ${S.label || S.name}`
        }
      )
    ] }, S.name)) }),
    (I || h) && /* @__PURE__ */ ae.jsx("div", { className: "snippetsapp-output-container", children: /* @__PURE__ */ ae.jsxs("div", { className: "snippetsapp-output-content", children: [
      h && !I && /* @__PURE__ */ ae.jsx("div", { className: "snippetsapp-loading", children: "Generating snippet..." }),
      I && /* @__PURE__ */ ae.jsxs(ae.Fragment, { children: [
        /* @__PURE__ */ ae.jsx(
          "div",
          {
            className: "snippetsapp-output-text",
            dangerouslySetInnerHTML: { __html: I }
          }
        ),
        /* @__PURE__ */ ae.jsx(
          "button",
          {
            type: "button",
            onClick: K,
            className: "snippetsapp-copy-button",
            disabled: h,
            children: y ? "Copied!" : "Copy"
          }
        )
      ] })
    ] }) }),
    m && /* @__PURE__ */ ae.jsx("div", { className: "snippetsapp-error-message", children: m })
  ] });
};
var kt = {}, br;
function ac() {
  return br || (br = 1, function(e) {
    (function() {
      var t = {
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
      };
      function r(s) {
        return n(o(s), arguments);
      }
      function i(s, u) {
        return r.apply(null, [s].concat(u || []));
      }
      function n(s, u) {
        var c = 1, f = s.length, l, v = "", b, I, p, m, C, y, G, h;
        for (b = 0; b < f; b++)
          if (typeof s[b] == "string")
            v += s[b];
          else if (typeof s[b] == "object") {
            if (p = s[b], p.keys)
              for (l = u[c], I = 0; I < p.keys.length; I++) {
                if (l == null)
                  throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', p.keys[I], p.keys[I - 1]));
                l = l[p.keys[I]];
              }
            else p.param_no ? l = u[p.param_no] : l = u[c++];
            if (t.not_type.test(p.type) && t.not_primitive.test(p.type) && l instanceof Function && (l = l()), t.numeric_arg.test(p.type) && typeof l != "number" && isNaN(l))
              throw new TypeError(r("[sprintf] expecting number but found %T", l));
            switch (t.number.test(p.type) && (G = l >= 0), p.type) {
              case "b":
                l = parseInt(l, 10).toString(2);
                break;
              case "c":
                l = String.fromCharCode(parseInt(l, 10));
                break;
              case "d":
              case "i":
                l = parseInt(l, 10);
                break;
              case "j":
                l = JSON.stringify(l, null, p.width ? parseInt(p.width) : 0);
                break;
              case "e":
                l = p.precision ? parseFloat(l).toExponential(p.precision) : parseFloat(l).toExponential();
                break;
              case "f":
                l = p.precision ? parseFloat(l).toFixed(p.precision) : parseFloat(l);
                break;
              case "g":
                l = p.precision ? String(Number(l.toPrecision(p.precision))) : parseFloat(l);
                break;
              case "o":
                l = (parseInt(l, 10) >>> 0).toString(8);
                break;
              case "s":
                l = String(l), l = p.precision ? l.substring(0, p.precision) : l;
                break;
              case "t":
                l = String(!!l), l = p.precision ? l.substring(0, p.precision) : l;
                break;
              case "T":
                l = Object.prototype.toString.call(l).slice(8, -1).toLowerCase(), l = p.precision ? l.substring(0, p.precision) : l;
                break;
              case "u":
                l = parseInt(l, 10) >>> 0;
                break;
              case "v":
                l = l.valueOf(), l = p.precision ? l.substring(0, p.precision) : l;
                break;
              case "x":
                l = (parseInt(l, 10) >>> 0).toString(16);
                break;
              case "X":
                l = (parseInt(l, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            t.json.test(p.type) ? v += l : (t.number.test(p.type) && (!G || p.sign) ? (h = G ? "+" : "-", l = l.toString().replace(t.sign, "")) : h = "", C = p.pad_char ? p.pad_char === "0" ? "0" : p.pad_char.charAt(1) : " ", y = p.width - (h + l).length, m = p.width && y > 0 ? C.repeat(y) : "", v += p.align ? h + l + m : C === "0" ? h + m + l : m + h + l);
          }
        return v;
      }
      var a = /* @__PURE__ */ Object.create(null);
      function o(s) {
        if (a[s])
          return a[s];
        for (var u = s, c, f = [], l = 0; u; ) {
          if ((c = t.text.exec(u)) !== null)
            f.push(c[0]);
          else if ((c = t.modulo.exec(u)) !== null)
            f.push("%");
          else if ((c = t.placeholder.exec(u)) !== null) {
            if (c[2]) {
              l |= 1;
              var v = [], b = c[2], I = [];
              if ((I = t.key.exec(b)) !== null)
                for (v.push(I[1]); (b = b.substring(I[0].length)) !== ""; )
                  if ((I = t.key_access.exec(b)) !== null)
                    v.push(I[1]);
                  else if ((I = t.index_access.exec(b)) !== null)
                    v.push(I[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              c[2] = v;
            } else
              l |= 2;
            if (l === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            f.push(
              {
                placeholder: c[0],
                param_no: c[1],
                keys: c[2],
                sign: c[3],
                pad_char: c[4],
                align: c[5],
                width: c[6],
                precision: c[7],
                type: c[8]
              }
            );
          } else
            throw new SyntaxError("[sprintf] unexpected placeholder");
          u = u.substring(c[0].length);
        }
        return a[s] = f;
      }
      e.sprintf = r, e.vsprintf = i, typeof window < "u" && (window.sprintf = r, window.vsprintf = i);
    })();
  }(kt)), kt;
}
ac();
var rn, Ci, et, Ai;
rn = {
  "(": 9,
  "!": 8,
  "*": 7,
  "/": 7,
  "%": 7,
  "+": 6,
  "-": 6,
  "<": 5,
  "<=": 5,
  ">": 5,
  ">=": 5,
  "==": 4,
  "!=": 4,
  "&&": 3,
  "||": 2,
  "?": 1,
  "?:": 1
};
Ci = ["(", "?"];
et = {
  ")": ["("],
  ":": ["?", "?:"]
};
Ai = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
function uc(e) {
  for (var t = [], r = [], i, n, a, o; i = e.match(Ai); ) {
    for (n = i[0], a = e.substr(0, i.index).trim(), a && t.push(a); o = r.pop(); ) {
      if (et[n]) {
        if (et[n][0] === o) {
          n = et[n][1] || n;
          break;
        }
      } else if (Ci.indexOf(o) >= 0 || rn[o] < rn[n]) {
        r.push(o);
        break;
      }
      t.push(o);
    }
    et[n] || r.push(n), e = e.substr(i.index + n.length);
  }
  return e = e.trim(), e && t.push(e), t.concat(r.reverse());
}
var oc = {
  "!": function(e) {
    return !e;
  },
  "*": function(e, t) {
    return e * t;
  },
  "/": function(e, t) {
    return e / t;
  },
  "%": function(e, t) {
    return e % t;
  },
  "+": function(e, t) {
    return e + t;
  },
  "-": function(e, t) {
    return e - t;
  },
  "<": function(e, t) {
    return e < t;
  },
  "<=": function(e, t) {
    return e <= t;
  },
  ">": function(e, t) {
    return e > t;
  },
  ">=": function(e, t) {
    return e >= t;
  },
  "==": function(e, t) {
    return e === t;
  },
  "!=": function(e, t) {
    return e !== t;
  },
  "&&": function(e, t) {
    return e && t;
  },
  "||": function(e, t) {
    return e || t;
  },
  "?:": function(e, t, r) {
    if (e)
      throw t;
    return r;
  }
};
function sc(e, t) {
  var r = [], i, n, a, o, s, u;
  for (i = 0; i < e.length; i++) {
    if (s = e[i], o = oc[s], o) {
      for (n = o.length, a = Array(n); n--; )
        a[n] = r.pop();
      try {
        u = o.apply(null, a);
      } catch (c) {
        return c;
      }
    } else t.hasOwnProperty(s) ? u = t[s] : u = +s;
    r.push(u);
  }
  return r[0];
}
function cc(e) {
  var t = uc(e);
  return function(r) {
    return sc(t, r);
  };
}
function lc(e) {
  var t = cc(e);
  return function(r) {
    return +t({ n: r });
  };
}
var vr = {
  contextDelimiter: "",
  onMissingKey: null
};
function dc(e) {
  var t, r, i;
  for (t = e.split(";"), r = 0; r < t.length; r++)
    if (i = t[r].trim(), i.indexOf("plural=") === 0)
      return i.substr(7);
}
function mn(e, t) {
  var r;
  this.data = e, this.pluralForms = {}, this.options = {};
  for (r in vr)
    this.options[r] = t !== void 0 && r in t ? t[r] : vr[r];
}
mn.prototype.getPluralForm = function(e, t) {
  var r = this.pluralForms[e], i, n, a;
  return r || (i = this.data[e][""], a = i["Plural-Forms"] || i["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
  // string property on a key to guarantee this as metadata.
  // @ts-ignore
  i.plural_forms, typeof a != "function" && (n = dc(
    i["Plural-Forms"] || i["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
    // string property on a key to guarantee this as metadata.
    // @ts-ignore
    i.plural_forms
  ), a = lc(n)), r = this.pluralForms[e] = a), r(t);
};
mn.prototype.dcnpgettext = function(e, t, r, i, n) {
  var a, o, s;
  return n === void 0 ? a = 0 : a = this.getPluralForm(e, n), o = r, t && (o = t + this.options.contextDelimiter + r), s = this.data[e][o], s && s[a] ? s[a] : (this.options.onMissingKey && this.options.onMissingKey(r, e), a === 0 ? r : i);
};
const mr = {
  "": {
    /** @param {number} n */
    plural_forms(e) {
      return e === 1 ? 0 : 1;
    }
  }
}, fc = /^i18n\.(n?gettext|has_translation)(_|$)/, gc = (e, t, r) => {
  const i = new mn({}), n = /* @__PURE__ */ new Set(), a = () => {
    n.forEach((h) => h());
  }, o = (h) => (n.add(h), () => n.delete(h)), s = (h = "default") => i.data[h], u = (h, g = "default") => {
    i.data[g] = {
      ...i.data[g],
      ...h
    }, i.data[g][""] = {
      ...mr[""],
      ...i.data[g]?.[""]
    }, delete i.pluralForms[g];
  }, c = (h, g) => {
    u(h, g), a();
  }, f = (h, g = "default") => {
    i.data[g] = {
      ...i.data[g],
      ...h,
      // Populate default domain configuration (supported locale date which omits
      // a plural forms expression).
      "": {
        ...mr[""],
        ...i.data[g]?.[""],
        ...h?.[""]
      }
    }, delete i.pluralForms[g], a();
  }, l = (h, g) => {
    i.data = {}, i.pluralForms = {}, c(h, g);
  }, v = (h = "default", g, x, E, R) => (i.data[h] || u(void 0, h), i.dcnpgettext(h, g, x, E, R)), b = (h = "default") => h, I = (h, g) => {
    let x = v(g, void 0, h);
    return r ? (x = /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.gettext", x, h, g), /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.gettext_" + b(g), x, h, g)) : x;
  }, p = (h, g, x) => {
    let E = v(x, g, h);
    return r ? (E = /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.gettext_with_context", E, h, g, x), /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.gettext_with_context_" + b(x), E, h, g, x)) : E;
  }, m = (h, g, x, E) => {
    let R = v(E, void 0, h, g, x);
    return r ? (R = /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.ngettext", R, h, g, x, E), /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.ngettext_" + b(E), R, h, g, x, E)) : R;
  }, C = (h, g, x, E, R) => {
    let M = v(R, E, h, g, x);
    return r ? (M = /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.ngettext_with_context", M, h, g, x, E, R), /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.ngettext_with_context_" + b(R), M, h, g, x, E, R)) : M;
  }, y = () => p("ltr", "text direction") === "rtl", G = (h, g, x) => {
    const E = g ? g + "" + h : h;
    let R = !!i.data?.[x ?? "default"]?.[E];
    return r && (R = /** @type { boolean } */
    /** @type {*} */
    r.applyFilters("i18n.has_translation", R, h, g, x), R = /** @type { boolean } */
    /** @type {*} */
    r.applyFilters("i18n.has_translation_" + b(x), R, h, g, x)), R;
  };
  if (r) {
    const h = (g) => {
      fc.test(g) && a();
    };
    r.addAction("hookAdded", "core/i18n", h), r.addAction("hookRemoved", "core/i18n", h);
  }
  return {
    getLocaleData: s,
    setLocaleData: c,
    addLocaleData: f,
    resetLocaleData: l,
    subscribe: o,
    __: I,
    _x: p,
    _n: m,
    _nx: C,
    isRTL: y,
    hasTranslation: G
  };
};
function yi(e) {
  return typeof e != "string" || e === "" ? (console.error("The namespace must be a non-empty string."), !1) : /^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) ? !0 : (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1);
}
function In(e) {
  return typeof e != "string" || e === "" ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."), !1) : /^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) ? !0 : (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1);
}
function Ir(e, t) {
  return function(i, n, a, o = 10) {
    const s = e[t];
    if (!In(i) || !yi(n))
      return;
    if (typeof a != "function") {
      console.error("The hook callback must be a function.");
      return;
    }
    if (typeof o != "number") {
      console.error("If specified, the hook priority must be a number.");
      return;
    }
    const u = {
      callback: a,
      priority: o,
      namespace: n
    };
    if (s[i]) {
      const c = s[i].handlers;
      let f;
      for (f = c.length; f > 0 && !(o >= c[f - 1].priority); f--)
        ;
      f === c.length ? c[f] = u : c.splice(f, 0, u), s.__current.forEach((l) => {
        l.name === i && l.currentIndex >= f && l.currentIndex++;
      });
    } else
      s[i] = {
        handlers: [u],
        runs: 0
      };
    i !== "hookAdded" && e.doAction("hookAdded", i, n, a, o);
  };
}
function gt(e, t, r = !1) {
  return function(n, a) {
    const o = e[t];
    if (!In(n) || !r && !yi(a))
      return;
    if (!o[n])
      return 0;
    let s = 0;
    if (r)
      s = o[n].handlers.length, o[n] = {
        runs: o[n].runs,
        handlers: []
      };
    else {
      const u = o[n].handlers;
      for (let c = u.length - 1; c >= 0; c--)
        u[c].namespace === a && (u.splice(c, 1), s++, o.__current.forEach((f) => {
          f.name === n && f.currentIndex >= c && f.currentIndex--;
        }));
    }
    return n !== "hookRemoved" && e.doAction("hookRemoved", n, a), s;
  };
}
function hr(e, t) {
  return function(i, n) {
    const a = e[t];
    return typeof n < "u" ? i in a && a[i].handlers.some((o) => o.namespace === n) : i in a;
  };
}
function pt(e, t, r, i) {
  return function(a, ...o) {
    const s = e[t];
    s[a] || (s[a] = {
      handlers: [],
      runs: 0
    }), s[a].runs++;
    const u = s[a].handlers;
    if (process.env.NODE_ENV !== "production" && a !== "hookAdded" && s.all && u.push(...s.all.handlers), !u || !u.length)
      return r ? o[0] : void 0;
    const c = {
      name: a,
      currentIndex: 0
    };
    async function f() {
      try {
        s.__current.add(c);
        let v = r ? o[0] : void 0;
        for (; c.currentIndex < u.length; )
          v = await u[c.currentIndex].callback.apply(null, o), r && (o[0] = v), c.currentIndex++;
        return r ? v : void 0;
      } finally {
        s.__current.delete(c);
      }
    }
    function l() {
      try {
        s.__current.add(c);
        let v = r ? o[0] : void 0;
        for (; c.currentIndex < u.length; )
          v = u[c.currentIndex].callback.apply(null, o), r && (o[0] = v), c.currentIndex++;
        return r ? v : void 0;
      } finally {
        s.__current.delete(c);
      }
    }
    return (i ? f : l)();
  };
}
function Cr(e, t) {
  return function() {
    var i;
    const n = e[t];
    return (i = Array.from(n.__current).at(-1)?.name) !== null && i !== void 0 ? i : null;
  };
}
function Ar(e, t) {
  return function(i) {
    const n = e[t];
    return typeof i > "u" ? n.__current.size > 0 : Array.from(n.__current).some((a) => a.name === i);
  };
}
function yr(e, t) {
  return function(i) {
    const n = e[t];
    if (In(i))
      return n[i] && n[i].runs ? n[i].runs : 0;
  };
}
class pc {
  constructor() {
    this.actions = /* @__PURE__ */ Object.create(null), this.actions.__current = /* @__PURE__ */ new Set(), this.filters = /* @__PURE__ */ Object.create(null), this.filters.__current = /* @__PURE__ */ new Set(), this.addAction = Ir(this, "actions"), this.addFilter = Ir(this, "filters"), this.removeAction = gt(this, "actions"), this.removeFilter = gt(this, "filters"), this.hasAction = hr(this, "actions"), this.hasFilter = hr(this, "filters"), this.removeAllActions = gt(this, "actions", !0), this.removeAllFilters = gt(this, "filters", !0), this.doAction = pt(this, "actions", !1, !1), this.doActionAsync = pt(this, "actions", !1, !0), this.applyFilters = pt(this, "filters", !0, !1), this.applyFiltersAsync = pt(this, "filters", !0, !0), this.currentAction = Cr(this, "actions"), this.currentFilter = Cr(this, "filters"), this.doingAction = Ar(this, "actions"), this.doingFilter = Ar(this, "filters"), this.didAction = yr(this, "actions"), this.didFilter = yr(this, "filters");
  }
}
function bc() {
  return new pc();
}
const xi = bc(), {
  addAction: Yc,
  addFilter: Jc,
  removeAction: zc,
  removeFilter: jc,
  hasAction: kc,
  hasFilter: _c,
  removeAllActions: Uc,
  removeAllFilters: Qc,
  doAction: $c,
  doActionAsync: Kc,
  applyFilters: qc,
  applyFiltersAsync: el,
  currentAction: tl,
  currentFilter: nl,
  doingAction: rl,
  doingFilter: il,
  didAction: al,
  didFilter: ul,
  actions: ol,
  filters: sl
} = xi, re = gc(void 0, void 0, xi);
re.getLocaleData.bind(re);
re.setLocaleData.bind(re);
re.resetLocaleData.bind(re);
re.subscribe.bind(re);
const Pt = re.__.bind(re);
re._x.bind(re);
re._n.bind(re);
re._nx.bind(re);
re.isRTL.bind(re);
re.hasTranslation.bind(re);
function vc(e) {
  const t = (r, i) => {
    const {
      headers: n = {}
    } = r;
    for (const a in n)
      if (a.toLowerCase() === "x-wp-nonce" && n[a] === t.nonce)
        return i(r);
    return i({
      ...r,
      headers: {
        ...n,
        "X-WP-Nonce": t.nonce
      }
    });
  };
  return t.nonce = e, t;
}
const Ei = (e, t) => {
  let r = e.path, i, n;
  return typeof e.namespace == "string" && typeof e.endpoint == "string" && (i = e.namespace.replace(/^\/|\/$/g, ""), n = e.endpoint.replace(/^\//, ""), n ? r = i + "/" + n : r = i), delete e.namespace, delete e.endpoint, t({
    ...e,
    path: r
  });
}, mc = (e) => (t, r) => Ei(t, (i) => {
  let n = i.url, a = i.path, o;
  return typeof a == "string" && (o = e, e.indexOf("?") !== -1 && (a = a.replace("?", "&")), a = a.replace(/^\//, ""), typeof o == "string" && o.indexOf("?") !== -1 && (a = a.replace("?", "&")), n = o + a), r({
    ...i,
    url: n
  });
});
function Ic(e) {
  let t;
  try {
    t = new URL(e, "http://example.com").search.substring(1);
  } catch {
  }
  if (t)
    return t;
}
function Gi(e) {
  let t = "";
  const r = Object.entries(e);
  let i;
  for (; i = r.shift(); ) {
    let [n, a] = i;
    if (Array.isArray(a) || a && a.constructor === Object) {
      const s = Object.entries(a).reverse();
      for (const [u, c] of s)
        r.unshift([`${n}[${u}]`, c]);
    } else a !== void 0 && (a === null && (a = ""), t += "&" + [n, a].map(encodeURIComponent).join("="));
  }
  return t.substr(1);
}
function hc(e) {
  const t = /^\S+?(#[^\s\?]*)/.exec(e);
  if (t)
    return t[1];
}
function Cc(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Ac(e, t, r) {
  const i = t.length, n = i - 1;
  for (let a = 0; a < i; a++) {
    let o = t[a];
    !o && Array.isArray(e) && (o = e.length.toString()), o = ["__proto__", "constructor", "prototype"].includes(o) ? o.toUpperCase() : o;
    const s = !isNaN(Number(t[a + 1]));
    e[o] = a === n ? (
      // If at end of path, assign the intended value.
      r
    ) : (
      // Otherwise, advance to the next object in the path, creating
      // it if it does not yet exist.
      e[o] || (s ? [] : {})
    ), Array.isArray(e[o]) && !s && (e[o] = {
      ...e[o]
    }), e = e[o];
  }
}
function Tt(e) {
  return (Ic(e) || "").replace(/\+/g, "%20").split("&").reduce((t, r) => {
    const [i, n = ""] = r.split("=").filter(Boolean).map(Cc);
    if (i) {
      const a = i.replace(/\]/g, "").split("[");
      Ac(t, a, n);
    }
    return t;
  }, /* @__PURE__ */ Object.create(null));
}
function Ne(e = "", t) {
  if (!t || !Object.keys(t).length)
    return e;
  const r = hc(e) || "";
  let i = e.replace(r, "");
  const n = e.indexOf("?");
  return n !== -1 && (t = Object.assign(Tt(e), t), i = i.substr(0, n)), i + "?" + Gi(t) + r;
}
function an(e, t) {
  return Tt(e)[t];
}
function xr(e, t) {
  return an(e, t) !== void 0;
}
function Er(e, ...t) {
  const r = e.replace(/^[^#]*/, "");
  e = e.replace(/#.*/, "");
  const i = e.indexOf("?");
  if (i === -1)
    return e + r;
  const n = Tt(e), a = e.substr(0, i);
  t.forEach((u) => delete n[u]);
  const o = Gi(n);
  return (o ? a + "?" + o : a) + r;
}
function Gr(e) {
  const t = e.split("?"), r = t[1], i = t[0];
  return r ? i + "?" + r.split("&").map((n) => n.split("=")).map((n) => n.map(decodeURIComponent)).sort((n, a) => n[0].localeCompare(a[0])).map((n) => n.map(encodeURIComponent)).map((n) => n.join("=")).join("&") : i;
}
function yc(e) {
  const t = Object.fromEntries(Object.entries(e).map(([r, i]) => [Gr(r), i]));
  return (r, i) => {
    const {
      parse: n = !0
    } = r;
    let a = r.path;
    if (!a && r.url) {
      const {
        rest_route: u,
        ...c
      } = Tt(r.url);
      typeof u == "string" && (a = Ne(u, c));
    }
    if (typeof a != "string")
      return i(r);
    const o = r.method || "GET", s = Gr(a);
    if (o === "GET" && t[s]) {
      const u = t[s];
      return delete t[s], Rr(u, !!n);
    } else if (o === "OPTIONS" && t[o] && t[o][s]) {
      const u = t[o][s];
      return delete t[o][s], Rr(u, !!n);
    }
    return i(r);
  };
}
function Rr(e, t) {
  if (t)
    return Promise.resolve(e.body);
  try {
    return Promise.resolve(new window.Response(JSON.stringify(e.body), {
      status: 200,
      statusText: "OK",
      headers: e.headers
    }));
  } catch {
    return Object.entries(e.headers).forEach(([r, i]) => {
      r.toLowerCase() === "link" && (e.headers[r] = i.replace(/<([^>]+)>/, (n, a) => `<${encodeURI(a)}>`));
    }), Promise.resolve(t ? e.body : new window.Response(JSON.stringify(e.body), {
      status: 200,
      statusText: "OK",
      headers: e.headers
    }));
  }
}
const xc = ({
  path: e,
  url: t,
  ...r
}, i) => ({
  ...r,
  url: t && Ne(t, i),
  path: e && Ne(e, i)
}), Sr = (e) => e.json ? e.json() : Promise.reject(e), Ec = (e) => {
  if (!e)
    return {};
  const t = e.match(/<([^>]+)>; rel="next"/);
  return t ? {
    next: t[1]
  } : {};
}, Fr = (e) => {
  const {
    next: t
  } = Ec(e.headers.get("link"));
  return t;
}, Gc = (e) => {
  const t = !!e.path && e.path.indexOf("per_page=-1") !== -1, r = !!e.url && e.url.indexOf("per_page=-1") !== -1;
  return t || r;
}, Ri = async (e, t) => {
  if (e.parse === !1 || !Gc(e))
    return t(e);
  const r = await pe({
    ...xc(e, {
      per_page: 100
    }),
    // Ensure headers are returned for page 1.
    parse: !1
  }), i = await Sr(r);
  if (!Array.isArray(i))
    return i;
  let n = Fr(r);
  if (!n)
    return i;
  let a = (
    /** @type {any[]} */
    [].concat(i)
  );
  for (; n; ) {
    const o = await pe({
      ...e,
      // Ensure the URL for the next page is used instead of any provided path.
      path: void 0,
      url: n,
      // Ensure we still get headers so we can identify the next page.
      parse: !1
    }), s = await Sr(o);
    a = a.concat(s), n = Fr(o);
  }
  return a;
}, Rc = /* @__PURE__ */ new Set(["PATCH", "PUT", "DELETE"]), Sc = "GET", Fc = (e, t) => {
  const {
    method: r = Sc
  } = e;
  return Rc.has(r.toUpperCase()) && (e = {
    ...e,
    headers: {
      ...e.headers,
      "X-HTTP-Method-Override": r,
      "Content-Type": "application/json"
    },
    method: "POST"
  }), t(e);
}, wc = (e, t) => (typeof e.url == "string" && !xr(e.url, "_locale") && (e.url = Ne(e.url, {
  _locale: "user"
})), typeof e.path == "string" && !xr(e.path, "_locale") && (e.path = Ne(e.path, {
  _locale: "user"
})), t(e)), Vc = (e, t = !0) => t ? e.status === 204 ? null : e.json ? e.json() : Promise.reject(e) : e, Bc = (e) => {
  const t = {
    code: "invalid_json",
    message: Pt("The response is not a valid JSON response.")
  };
  if (!e || !e.json)
    throw t;
  return e.json().catch(() => {
    throw t;
  });
}, Si = (e, t = !0) => Promise.resolve(Vc(e, t)).catch((r) => hn(r, t));
function hn(e, t = !0) {
  if (!t)
    throw e;
  return Bc(e).then((r) => {
    const i = {
      code: "unknown_error",
      message: Pt("An unknown error occurred.")
    };
    throw r || i;
  });
}
function Pc(e) {
  const t = !!e.method && e.method === "POST";
  return (!!e.path && e.path.indexOf("/wp/v2/media") !== -1 || !!e.url && e.url.indexOf("/wp/v2/media") !== -1) && t;
}
const Tc = (e, t) => {
  if (!Pc(e))
    return t(e);
  let r = 0;
  const i = 5, n = (a) => (r++, t({
    path: `/wp/v2/media/${a}/post-process`,
    method: "POST",
    data: {
      action: "create-image-subsizes"
    },
    parse: !1
  }).catch(() => r < i ? n(a) : (t({
    path: `/wp/v2/media/${a}?force=true`,
    method: "DELETE"
  }), Promise.reject())));
  return t({
    ...e,
    parse: !1
  }).catch((a) => {
    if (!a.headers)
      return Promise.reject(a);
    const o = a.headers.get("x-wp-upload-attachment-id");
    return a.status >= 500 && a.status < 600 && o ? n(o).catch(() => e.parse !== !1 ? Promise.reject({
      code: "post_process",
      message: Pt("Media upload failed. If this is a photo or a large image, please scale it down and try again.")
    }) : Promise.reject(a)) : hn(a, e.parse);
  }).then((a) => Si(a, e.parse));
}, Oc = (e) => (t, r) => {
  if (typeof t.url == "string") {
    const i = an(t.url, "wp_theme_preview");
    i === void 0 ? t.url = Ne(t.url, {
      wp_theme_preview: e
    }) : i === "" && (t.url = Er(t.url, "wp_theme_preview"));
  }
  if (typeof t.path == "string") {
    const i = an(t.path, "wp_theme_preview");
    i === void 0 ? t.path = Ne(t.path, {
      wp_theme_preview: e
    }) : i === "" && (t.path = Er(t.path, "wp_theme_preview"));
  }
  return r(t);
}, Xc = {
  // The backend uses the Accept header as a condition for considering an
  // incoming request as a REST request.
  //
  // See: https://core.trac.wordpress.org/ticket/44534
  Accept: "application/json, */*;q=0.1"
}, Wc = {
  credentials: "include"
}, Fi = [wc, Ei, Fc, Ri];
function Mc(e) {
  Fi.unshift(e);
}
const wi = (e) => {
  if (e.status >= 200 && e.status < 300)
    return e;
  throw e;
}, Nc = (e) => {
  const {
    url: t,
    path: r,
    data: i,
    parse: n = !0,
    ...a
  } = e;
  let {
    body: o,
    headers: s
  } = e;
  return s = {
    ...Xc,
    ...s
  }, i && (o = JSON.stringify(i), s["Content-Type"] = "application/json"), window.fetch(
    // Fall back to explicitly passing `window.location` which is the behavior if `undefined` is passed.
    t || r || window.location.href,
    {
      ...Wc,
      ...a,
      body: o,
      headers: s
    }
  ).then((c) => Promise.resolve(c).then(wi).catch((f) => hn(f, n)).then((f) => Si(f, n)), (c) => {
    throw c && c.name === "AbortError" ? c : {
      code: "fetch_error",
      message: Pt("You are probably offline.")
    };
  });
};
let Vi = Nc;
function Dc(e) {
  Vi = e;
}
function pe(e) {
  return Fi.reduceRight((r, i) => (n) => i(n, r), Vi)(e).catch((r) => r.code !== "rest_cookie_invalid_nonce" ? Promise.reject(r) : window.fetch(pe.nonceEndpoint).then(wi).then((i) => i.text()).then((i) => (pe.nonceMiddleware.nonce = i, pe(e))));
}
pe.use = Mc;
pe.setFetchHandler = Dc;
pe.createNonceMiddleware = vc;
pe.createPreloadingMiddleware = yc;
pe.createRootURLMiddleware = mc;
pe.fetchAllMiddleware = Ri;
pe.mediaUploadMiddleware = Tc;
pe.createThemePreviewMiddleware = Oc;
const cl = (e, t) => {
  const r = e.endsWith("/") ? `${e}render` : `${e}/render`;
  return {
    getSnippets: () => pe({
      path: e,
      headers: { "X-WP-Nonce": t }
    }),
    renderSnippet: (i, n) => pe({
      path: r,
      method: "POST",
      headers: { "X-WP-Nonce": t },
      data: { key: i, data: n }
    })
  };
}, ll = (e) => ({
  getSnippets: () => fetch(e).then((t) => t.json()),
  renderSnippet: (t, r) => fetch(e.endsWith("/") ? `${e}render` : `${e}/render`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: t, data: r })
  }).then((i) => i.json())
});
export {
  Lc as SnippetsApp,
  ll as createChromeApi,
  cl as createWordpressApi
};
