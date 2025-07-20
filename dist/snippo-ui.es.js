import pr, { useState as W, useEffect as be, useCallback as Qr } from "react";
var se = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Zr() {
  if (Ge) return B;
  Ge = 1;
  var e = pr, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, p, f) {
    var y, u = {}, E = null, T = null;
    f !== void 0 && (E = "" + f), p.key !== void 0 && (E = "" + p.key), p.ref !== void 0 && (T = p.ref);
    for (y in p) n.call(p, y) && !i.hasOwnProperty(y) && (u[y] = p[y]);
    if (l && l.defaultProps) for (y in p = l.defaultProps, p) u[y] === void 0 && (u[y] = p[y]);
    return { $$typeof: t, type: l, key: E, ref: T, props: u, _owner: s.current };
  }
  return B.Fragment = a, B.jsx = c, B.jsxs = c, B;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function et() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pr, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), P = Symbol.iterator, m = "@@iterator";
    function M(r) {
      if (r === null || typeof r != "object")
        return null;
      var o = P && r[P] || r[m];
      return typeof o == "function" ? o : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(r) {
      {
        for (var o = arguments.length, d = new Array(o > 1 ? o - 1 : 0), g = 1; g < o; g++)
          d[g - 1] = arguments[g];
        N("error", r, d);
      }
    }
    function N(r, o, d) {
      {
        var g = k.ReactDebugCurrentFrame, x = g.getStackAddendum();
        x !== "" && (o += "%s", d = d.concat([x]));
        var S = d.map(function(w) {
          return String(w);
        });
        S.unshift("Warning: " + o), Function.prototype.apply.call(console[r], console, S);
      }
    }
    var v = !1, _ = !1, R = !1, h = !1, A = !1, H;
    H = Symbol.for("react.module.reference");
    function ee(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === n || r === i || A || r === s || r === f || r === y || h || r === T || v || _ || R || typeof r == "object" && r !== null && (r.$$typeof === E || r.$$typeof === u || r.$$typeof === c || r.$$typeof === l || r.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === H || r.getModuleId !== void 0));
    }
    function fe(r, o, d) {
      var g = r.displayName;
      if (g)
        return g;
      var x = o.displayName || o.name || "";
      return x !== "" ? d + "(" + x + ")" : d;
    }
    function re(r) {
      return r.displayName || "Context";
    }
    function Y(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case f:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case l:
            var o = r;
            return re(o) + ".Consumer";
          case c:
            var d = r;
            return re(d._context) + ".Provider";
          case p:
            return fe(r, r.render, "ForwardRef");
          case u:
            var g = r.displayName || null;
            return g !== null ? g : Y(r.type) || "Memo";
          case E: {
            var x = r, S = x._payload, w = x._init;
            try {
              return Y(w(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, X = 0, Se, Ae, Pe, je, Ce, Fe, ke;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function Tr() {
      {
        if (X === 0) {
          Se = console.log, Ae = console.info, Pe = console.warn, je = console.error, Ce = console.group, Fe = console.groupCollapsed, ke = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        X++;
      }
    }
    function Or() {
      {
        if (X--, X === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, r, {
              value: Se
            }),
            info: q({}, r, {
              value: Ae
            }),
            warn: q({}, r, {
              value: Pe
            }),
            error: q({}, r, {
              value: je
            }),
            group: q({}, r, {
              value: Ce
            }),
            groupCollapsed: q({}, r, {
              value: Fe
            }),
            groupEnd: q({}, r, {
              value: ke
            })
          });
        }
        X < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = k.ReactCurrentDispatcher, pe;
    function te(r, o, d) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (x) {
            var g = x.stack.trim().match(/\n( *(at )?)/);
            pe = g && g[1] || "";
          }
        return `
` + pe + r;
      }
    }
    var he = !1, ne;
    {
      var Sr = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Sr();
    }
    function De(r, o) {
      if (!r || he)
        return "";
      {
        var d = ne.get(r);
        if (d !== void 0)
          return d;
      }
      var g;
      he = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = de.current, de.current = null, Tr();
      try {
        if (o) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (L) {
              g = L;
            }
            Reflect.construct(r, [], w);
          } else {
            try {
              w.call();
            } catch (L) {
              g = L;
            }
            r.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            g = L;
          }
          r();
        }
      } catch (L) {
        if (L && g && typeof L.stack == "string") {
          for (var b = L.stack.split(`
`), D = g.stack.split(`
`), j = b.length - 1, C = D.length - 1; j >= 1 && C >= 0 && b[j] !== D[C]; )
            C--;
          for (; j >= 1 && C >= 0; j--, C--)
            if (b[j] !== D[C]) {
              if (j !== 1 || C !== 1)
                do
                  if (j--, C--, C < 0 || b[j] !== D[C]) {
                    var U = `
` + b[j].replace(" at new ", " at ");
                    return r.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", r.displayName)), typeof r == "function" && ne.set(r, U), U;
                  }
                while (j >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        he = !1, de.current = S, Or(), Error.prepareStackTrace = x;
      }
      var K = r ? r.displayName || r.name : "", V = K ? te(K) : "";
      return typeof r == "function" && ne.set(r, V), V;
    }
    function Ar(r, o, d) {
      return De(r, !1);
    }
    function Pr(r) {
      var o = r.prototype;
      return !!(o && o.isReactComponent);
    }
    function ae(r, o, d) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return De(r, Pr(r));
      if (typeof r == "string")
        return te(r);
      switch (r) {
        case f:
          return te("Suspense");
        case y:
          return te("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case p:
            return Ar(r.render);
          case u:
            return ae(r.type, o, d);
          case E: {
            var g = r, x = g._payload, S = g._init;
            try {
              return ae(S(x), o, d);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, $e = {}, Le = k.ReactDebugCurrentFrame;
    function ie(r) {
      if (r) {
        var o = r._owner, d = ae(r.type, r._source, o ? o.type : null);
        Le.setExtraStackFrame(d);
      } else
        Le.setExtraStackFrame(null);
    }
    function jr(r, o, d, g, x) {
      {
        var S = Function.call.bind(G);
        for (var w in r)
          if (S(r, w)) {
            var b = void 0;
            try {
              if (typeof r[w] != "function") {
                var D = Error((g || "React class") + ": " + d + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              b = r[w](o, w, g, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              b = j;
            }
            b && !(b instanceof Error) && (ie(x), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", d, w, typeof b), ie(null)), b instanceof Error && !(b.message in $e) && ($e[b.message] = !0, ie(x), O("Failed %s type: %s", d, b.message), ie(null));
          }
      }
    }
    var Cr = Array.isArray;
    function ve(r) {
      return Cr(r);
    }
    function Fr(r) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, d = o && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return d;
      }
    }
    function kr(r) {
      try {
        return Me(r), !1;
      } catch {
        return !0;
      }
    }
    function Me(r) {
      return "" + r;
    }
    function Ue(r) {
      if (kr(r))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fr(r)), Me(r);
    }
    var He = k.ReactCurrentOwner, Ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, We;
    function Dr(r) {
      if (G.call(r, "ref")) {
        var o = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function $r(r) {
      if (G.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Lr(r, o) {
      typeof r.ref == "string" && He.current;
    }
    function Mr(r, o) {
      {
        var d = function() {
          Ne || (Ne = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function Ur(r, o) {
      {
        var d = function() {
          We || (We = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Hr = function(r, o, d, g, x, S, w) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: o,
        ref: d,
        props: w,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Nr(r, o, d, g, x) {
      {
        var S, w = {}, b = null, D = null;
        d !== void 0 && (Ue(d), b = "" + d), $r(o) && (Ue(o.key), b = "" + o.key), Dr(o) && (D = o.ref, Lr(o, x));
        for (S in o)
          G.call(o, S) && !Ir.hasOwnProperty(S) && (w[S] = o[S]);
        if (r && r.defaultProps) {
          var j = r.defaultProps;
          for (S in j)
            w[S] === void 0 && (w[S] = j[S]);
        }
        if (b || D) {
          var C = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          b && Mr(w, C), D && Ur(w, C);
        }
        return Hr(r, b, D, x, g, He.current, w);
      }
    }
    var ge = k.ReactCurrentOwner, Ye = k.ReactDebugCurrentFrame;
    function z(r) {
      if (r) {
        var o = r._owner, d = ae(r.type, r._source, o ? o.type : null);
        Ye.setExtraStackFrame(d);
      } else
        Ye.setExtraStackFrame(null);
    }
    var ye;
    ye = !1;
    function me(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function qe() {
      {
        if (ge.current) {
          var r = Y(ge.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Wr(r) {
      return "";
    }
    var Ve = {};
    function Yr(r) {
      {
        var o = qe();
        if (!o) {
          var d = typeof r == "string" ? r : r.displayName || r.name;
          d && (o = `

Check the top-level render call using <` + d + ">.");
        }
        return o;
      }
    }
    function Je(r, o) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var d = Yr(o);
        if (Ve[d])
          return;
        Ve[d] = !0;
        var g = "";
        r && r._owner && r._owner !== ge.current && (g = " It was passed a child from " + Y(r._owner.type) + "."), z(r), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, g), z(null);
      }
    }
    function ze(r, o) {
      {
        if (typeof r != "object")
          return;
        if (ve(r))
          for (var d = 0; d < r.length; d++) {
            var g = r[d];
            me(g) && Je(g, o);
          }
        else if (me(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var x = M(r);
          if (typeof x == "function" && x !== r.entries)
            for (var S = x.call(r), w; !(w = S.next()).done; )
              me(w.value) && Je(w.value, o);
        }
      }
    }
    function qr(r) {
      {
        var o = r.type;
        if (o == null || typeof o == "string")
          return;
        var d;
        if (typeof o == "function")
          d = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === u))
          d = o.propTypes;
        else
          return;
        if (d) {
          var g = Y(o);
          jr(d, r.props, "prop", g, r);
        } else if (o.PropTypes !== void 0 && !ye) {
          ye = !0;
          var x = Y(o);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vr(r) {
      {
        for (var o = Object.keys(r.props), d = 0; d < o.length; d++) {
          var g = o[d];
          if (g !== "children" && g !== "key") {
            z(r), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), z(null);
            break;
          }
        }
        r.ref !== null && (z(r), O("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    var Ke = {};
    function Xe(r, o, d, g, x, S) {
      {
        var w = ee(r);
        if (!w) {
          var b = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = Wr();
          D ? b += D : b += qe();
          var j;
          r === null ? j = "null" : ve(r) ? j = "array" : r !== void 0 && r.$$typeof === t ? (j = "<" + (Y(r.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : j = typeof r, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, b);
        }
        var C = Nr(r, o, d, x, S);
        if (C == null)
          return C;
        if (w) {
          var U = o.children;
          if (U !== void 0)
            if (g)
              if (ve(U)) {
                for (var K = 0; K < U.length; K++)
                  ze(U[K], r);
                Object.freeze && Object.freeze(U);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(U, r);
        }
        if (G.call(o, "key")) {
          var V = Y(r), L = Object.keys(o).filter(function(Br) {
            return Br !== "key";
          }), _e = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[V + _e]) {
            var Gr = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            O(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _e, V, Gr, V), Ke[V + _e] = !0;
          }
        }
        return r === n ? Vr(C) : qr(C), C;
      }
    }
    function Jr(r, o, d) {
      return Xe(r, o, d, !0);
    }
    function zr(r, o, d) {
      return Xe(r, o, d, !1);
    }
    var Kr = zr, Xr = Jr;
    Q.Fragment = n, Q.jsx = Kr, Q.jsxs = Xr;
  }()), Q;
}
var Qe;
function rt() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? se.exports = Zr() : se.exports = et()), se.exports;
}
var I = rt();
const Mt = ({ api: e }) => {
  const [t, a] = W({}), [n, s] = W(""), [i, c] = W([]), [l, p] = W({}), [f, y] = W(""), [u, E] = W(""), [T, P] = W(""), [m, M] = W(!1), [k, O] = W(!1);
  be(() => {
    e.getSnippets().then(a).catch((h) => P(h.message || "Error fetching snippets"));
  }, [e]);
  const N = Qr((h, A) => {
    let H = h;
    return Object.keys(A).forEach((ee) => {
      const fe = A[ee] || "", re = `{{${ee}}}`;
      H = H.replace(new RegExp(re.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), fe);
    }), H;
  }, []);
  be(() => {
    if (f) {
      const h = N(f, l);
      E(h);
    }
  }, [f, l, N]), be(() => {
    n && t[n] && (c(t[n].fields || []), p({}), y(""), E(""), P(""), M(!1), O(!1), !t[n].fields || t[n].fields.length === 0 ? (O(!0), e.renderSnippet(n, {}).then((h) => {
      y(h.output), O(!1);
    }).catch((h) => {
      P(h.message || "Error rendering snippet"), O(!1);
    })) : (O(!0), e.renderSnippet(n, {}).then((h) => {
      y(h.output), O(!1);
    }).catch((h) => {
      P(h.message || "Error rendering snippet"), O(!1);
    })));
  }, [n, t, e]);
  const v = (h, A) => {
    p({ ...l, [h]: A });
  }, _ = () => {
    u && navigator.clipboard.writeText(u).then(() => {
      M(!0), setTimeout(() => M(!1), 1500);
    });
  }, R = Object.keys(t).map((h) => ({
    value: h,
    label: t[h].meta && t[h].meta.title ? t[h].meta.title : h
  }));
  return /* @__PURE__ */ I.jsxs("div", { children: [
    /* @__PURE__ */ I.jsxs(
      "select",
      {
        value: n,
        onChange: (h) => s(h.target.value),
        style: { maxWidth: 400 },
        children: [
          /* @__PURE__ */ I.jsx("option", { value: "", children: "Select a snippet" }),
          R.map((h) => /* @__PURE__ */ I.jsx("option", { value: h.value, children: h.label }, h.value))
        ]
      }
    ),
    i.length > 0 && /* @__PURE__ */ I.jsx("div", { className: "snippetsapp-form", children: i.map((h) => /* @__PURE__ */ I.jsxs("div", { className: "snippetsapp-field", children: [
      /* @__PURE__ */ I.jsx(
        "label",
        {
          htmlFor: `snippetsapp-field-${h.name}`,
          className: "snippetsapp-label",
          children: h.label || h.name
        }
      ),
      /* @__PURE__ */ I.jsx(
        "input",
        {
          id: `snippetsapp-field-${h.name}`,
          type: "text",
          value: l[h.name] || "",
          onChange: (A) => v(h.name, A.target.value),
          className: "snippetsapp-input regular-text",
          placeholder: h.placeholder || `Enter ${h.label || h.name}`
        }
      )
    ] }, h.name)) }),
    (u || k) && /* @__PURE__ */ I.jsx("div", { className: "snippetsapp-output-container", children: /* @__PURE__ */ I.jsxs("div", { className: "snippetsapp-output-content", children: [
      k && !u && /* @__PURE__ */ I.jsx("div", { className: "snippetsapp-loading", children: "Generating snippet..." }),
      u && /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
        /* @__PURE__ */ I.jsx(
          "div",
          {
            className: "snippetsapp-output-text",
            dangerouslySetInnerHTML: { __html: u }
          }
        ),
        /* @__PURE__ */ I.jsx(
          "button",
          {
            type: "button",
            onClick: _,
            className: "snippetsapp-copy-button",
            disabled: k,
            children: m ? "Copied!" : "Copy"
          }
        )
      ] })
    ] }) }),
    T && /* @__PURE__ */ I.jsx("div", { className: "snippetsapp-error-message", children: T })
  ] });
};
var we = {}, Ze;
function tt() {
  return Ze || (Ze = 1, function(e) {
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
      function a(l) {
        return s(c(l), arguments);
      }
      function n(l, p) {
        return a.apply(null, [l].concat(p || []));
      }
      function s(l, p) {
        var f = 1, y = l.length, u, E = "", T, P, m, M, k, O, N, v;
        for (T = 0; T < y; T++)
          if (typeof l[T] == "string")
            E += l[T];
          else if (typeof l[T] == "object") {
            if (m = l[T], m.keys)
              for (u = p[f], P = 0; P < m.keys.length; P++) {
                if (u == null)
                  throw new Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', m.keys[P], m.keys[P - 1]));
                u = u[m.keys[P]];
              }
            else m.param_no ? u = p[m.param_no] : u = p[f++];
            if (t.not_type.test(m.type) && t.not_primitive.test(m.type) && u instanceof Function && (u = u()), t.numeric_arg.test(m.type) && typeof u != "number" && isNaN(u))
              throw new TypeError(a("[sprintf] expecting number but found %T", u));
            switch (t.number.test(m.type) && (N = u >= 0), m.type) {
              case "b":
                u = parseInt(u, 10).toString(2);
                break;
              case "c":
                u = String.fromCharCode(parseInt(u, 10));
                break;
              case "d":
              case "i":
                u = parseInt(u, 10);
                break;
              case "j":
                u = JSON.stringify(u, null, m.width ? parseInt(m.width) : 0);
                break;
              case "e":
                u = m.precision ? parseFloat(u).toExponential(m.precision) : parseFloat(u).toExponential();
                break;
              case "f":
                u = m.precision ? parseFloat(u).toFixed(m.precision) : parseFloat(u);
                break;
              case "g":
                u = m.precision ? String(Number(u.toPrecision(m.precision))) : parseFloat(u);
                break;
              case "o":
                u = (parseInt(u, 10) >>> 0).toString(8);
                break;
              case "s":
                u = String(u), u = m.precision ? u.substring(0, m.precision) : u;
                break;
              case "t":
                u = String(!!u), u = m.precision ? u.substring(0, m.precision) : u;
                break;
              case "T":
                u = Object.prototype.toString.call(u).slice(8, -1).toLowerCase(), u = m.precision ? u.substring(0, m.precision) : u;
                break;
              case "u":
                u = parseInt(u, 10) >>> 0;
                break;
              case "v":
                u = u.valueOf(), u = m.precision ? u.substring(0, m.precision) : u;
                break;
              case "x":
                u = (parseInt(u, 10) >>> 0).toString(16);
                break;
              case "X":
                u = (parseInt(u, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            t.json.test(m.type) ? E += u : (t.number.test(m.type) && (!N || m.sign) ? (v = N ? "+" : "-", u = u.toString().replace(t.sign, "")) : v = "", k = m.pad_char ? m.pad_char === "0" ? "0" : m.pad_char.charAt(1) : " ", O = m.width - (v + u).length, M = m.width && O > 0 ? k.repeat(O) : "", E += m.align ? v + u + M : k === "0" ? v + M + u : M + v + u);
          }
        return E;
      }
      var i = /* @__PURE__ */ Object.create(null);
      function c(l) {
        if (i[l])
          return i[l];
        for (var p = l, f, y = [], u = 0; p; ) {
          if ((f = t.text.exec(p)) !== null)
            y.push(f[0]);
          else if ((f = t.modulo.exec(p)) !== null)
            y.push("%");
          else if ((f = t.placeholder.exec(p)) !== null) {
            if (f[2]) {
              u |= 1;
              var E = [], T = f[2], P = [];
              if ((P = t.key.exec(T)) !== null)
                for (E.push(P[1]); (T = T.substring(P[0].length)) !== ""; )
                  if ((P = t.key_access.exec(T)) !== null)
                    E.push(P[1]);
                  else if ((P = t.index_access.exec(T)) !== null)
                    E.push(P[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              f[2] = E;
            } else
              u |= 2;
            if (u === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            y.push(
              {
                placeholder: f[0],
                param_no: f[1],
                keys: f[2],
                sign: f[3],
                pad_char: f[4],
                align: f[5],
                width: f[6],
                precision: f[7],
                type: f[8]
              }
            );
          } else
            throw new SyntaxError("[sprintf] unexpected placeholder");
          p = p.substring(f[0].length);
        }
        return i[l] = y;
      }
      e.sprintf = a, e.vsprintf = n, typeof window < "u" && (window.sprintf = a, window.vsprintf = n);
    })();
  }(we)), we;
}
tt();
var Ee, hr, Z, vr;
Ee = {
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
hr = ["(", "?"];
Z = {
  ")": ["("],
  ":": ["?", "?:"]
};
vr = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
function nt(e) {
  for (var t = [], a = [], n, s, i, c; n = e.match(vr); ) {
    for (s = n[0], i = e.substr(0, n.index).trim(), i && t.push(i); c = a.pop(); ) {
      if (Z[s]) {
        if (Z[s][0] === c) {
          s = Z[s][1] || s;
          break;
        }
      } else if (hr.indexOf(c) >= 0 || Ee[c] < Ee[s]) {
        a.push(c);
        break;
      }
      t.push(c);
    }
    Z[s] || a.push(s), e = e.substr(n.index + s.length);
  }
  return e = e.trim(), e && t.push(e), t.concat(a.reverse());
}
var at = {
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
  "?:": function(e, t, a) {
    if (e)
      throw t;
    return a;
  }
};
function it(e, t) {
  var a = [], n, s, i, c, l, p;
  for (n = 0; n < e.length; n++) {
    if (l = e[n], c = at[l], c) {
      for (s = c.length, i = Array(s); s--; )
        i[s] = a.pop();
      try {
        p = c.apply(null, i);
      } catch (f) {
        return f;
      }
    } else t.hasOwnProperty(l) ? p = t[l] : p = +l;
    a.push(p);
  }
  return a[0];
}
function st(e) {
  var t = nt(e);
  return function(a) {
    return it(t, a);
  };
}
function ot(e) {
  var t = st(e);
  return function(a) {
    return +t({ n: a });
  };
}
var er = {
  contextDelimiter: "",
  onMissingKey: null
};
function ut(e) {
  var t, a, n;
  for (t = e.split(";"), a = 0; a < t.length; a++)
    if (n = t[a].trim(), n.indexOf("plural=") === 0)
      return n.substr(7);
}
function xe(e, t) {
  var a;
  this.data = e, this.pluralForms = {}, this.options = {};
  for (a in er)
    this.options[a] = t !== void 0 && a in t ? t[a] : er[a];
}
xe.prototype.getPluralForm = function(e, t) {
  var a = this.pluralForms[e], n, s, i;
  return a || (n = this.data[e][""], i = n["Plural-Forms"] || n["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
  // string property on a key to guarantee this as metadata.
  // @ts-ignore
  n.plural_forms, typeof i != "function" && (s = ut(
    n["Plural-Forms"] || n["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
    // string property on a key to guarantee this as metadata.
    // @ts-ignore
    n.plural_forms
  ), i = ot(s)), a = this.pluralForms[e] = i), a(t);
};
xe.prototype.dcnpgettext = function(e, t, a, n, s) {
  var i, c, l;
  return s === void 0 ? i = 0 : i = this.getPluralForm(e, s), c = a, t && (c = t + this.options.contextDelimiter + a), l = this.data[e][c], l && l[i] ? l[i] : (this.options.onMissingKey && this.options.onMissingKey(a, e), i === 0 ? a : n);
};
const rr = {
  "": {
    /** @param {number} n */
    plural_forms(e) {
      return e === 1 ? 0 : 1;
    }
  }
}, ct = /^i18n\.(n?gettext|has_translation)(_|$)/, lt = (e, t, a) => {
  const n = new xe({}), s = /* @__PURE__ */ new Set(), i = () => {
    s.forEach((v) => v());
  }, c = (v) => (s.add(v), () => s.delete(v)), l = (v = "default") => n.data[v], p = (v, _ = "default") => {
    n.data[_] = {
      ...n.data[_],
      ...v
    }, n.data[_][""] = {
      ...rr[""],
      ...n.data[_]?.[""]
    }, delete n.pluralForms[_];
  }, f = (v, _) => {
    p(v, _), i();
  }, y = (v, _ = "default") => {
    n.data[_] = {
      ...n.data[_],
      ...v,
      // Populate default domain configuration (supported locale date which omits
      // a plural forms expression).
      "": {
        ...rr[""],
        ...n.data[_]?.[""],
        ...v?.[""]
      }
    }, delete n.pluralForms[_], i();
  }, u = (v, _) => {
    n.data = {}, n.pluralForms = {}, f(v, _);
  }, E = (v = "default", _, R, h, A) => (n.data[v] || p(void 0, v), n.dcnpgettext(v, _, R, h, A)), T = (v = "default") => v, P = (v, _) => {
    let R = E(_, void 0, v);
    return a ? (R = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext", R, v, _), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext_" + T(_), R, v, _)) : R;
  }, m = (v, _, R) => {
    let h = E(R, _, v);
    return a ? (h = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext_with_context", h, v, _, R), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext_with_context_" + T(R), h, v, _, R)) : h;
  }, M = (v, _, R, h) => {
    let A = E(h, void 0, v, _, R);
    return a ? (A = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext", A, v, _, R, h), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext_" + T(h), A, v, _, R, h)) : A;
  }, k = (v, _, R, h, A) => {
    let H = E(A, h, v, _, R);
    return a ? (H = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext_with_context", H, v, _, R, h, A), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext_with_context_" + T(A), H, v, _, R, h, A)) : H;
  }, O = () => m("ltr", "text direction") === "rtl", N = (v, _, R) => {
    const h = _ ? _ + "" + v : v;
    let A = !!n.data?.[R ?? "default"]?.[h];
    return a && (A = /** @type { boolean } */
    /** @type {*} */
    a.applyFilters("i18n.has_translation", A, v, _, R), A = /** @type { boolean } */
    /** @type {*} */
    a.applyFilters("i18n.has_translation_" + T(R), A, v, _, R)), A;
  };
  if (a) {
    const v = (_) => {
      ct.test(_) && i();
    };
    a.addAction("hookAdded", "core/i18n", v), a.addAction("hookRemoved", "core/i18n", v);
  }
  return {
    getLocaleData: l,
    setLocaleData: f,
    addLocaleData: y,
    resetLocaleData: u,
    subscribe: c,
    __: P,
    _x: m,
    _n: M,
    _nx: k,
    isRTL: O,
    hasTranslation: N
  };
};
function gr(e) {
  return typeof e != "string" || e === "" ? (console.error("The namespace must be a non-empty string."), !1) : /^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) ? !0 : (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1);
}
function Te(e) {
  return typeof e != "string" || e === "" ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."), !1) : /^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) ? !0 : (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1);
}
function tr(e, t) {
  return function(n, s, i, c = 10) {
    const l = e[t];
    if (!Te(n) || !gr(s))
      return;
    if (typeof i != "function") {
      console.error("The hook callback must be a function.");
      return;
    }
    if (typeof c != "number") {
      console.error("If specified, the hook priority must be a number.");
      return;
    }
    const p = {
      callback: i,
      priority: c,
      namespace: s
    };
    if (l[n]) {
      const f = l[n].handlers;
      let y;
      for (y = f.length; y > 0 && !(c >= f[y - 1].priority); y--)
        ;
      y === f.length ? f[y] = p : f.splice(y, 0, p), l.__current.forEach((u) => {
        u.name === n && u.currentIndex >= y && u.currentIndex++;
      });
    } else
      l[n] = {
        handlers: [p],
        runs: 0
      };
    n !== "hookAdded" && e.doAction("hookAdded", n, s, i, c);
  };
}
function oe(e, t, a = !1) {
  return function(s, i) {
    const c = e[t];
    if (!Te(s) || !a && !gr(i))
      return;
    if (!c[s])
      return 0;
    let l = 0;
    if (a)
      l = c[s].handlers.length, c[s] = {
        runs: c[s].runs,
        handlers: []
      };
    else {
      const p = c[s].handlers;
      for (let f = p.length - 1; f >= 0; f--)
        p[f].namespace === i && (p.splice(f, 1), l++, c.__current.forEach((y) => {
          y.name === s && y.currentIndex >= f && y.currentIndex--;
        }));
    }
    return s !== "hookRemoved" && e.doAction("hookRemoved", s, i), l;
  };
}
function nr(e, t) {
  return function(n, s) {
    const i = e[t];
    return typeof s < "u" ? n in i && i[n].handlers.some((c) => c.namespace === s) : n in i;
  };
}
function ue(e, t, a, n) {
  return function(i, ...c) {
    const l = e[t];
    l[i] || (l[i] = {
      handlers: [],
      runs: 0
    }), l[i].runs++;
    const p = l[i].handlers;
    if (process.env.NODE_ENV !== "production" && i !== "hookAdded" && l.all && p.push(...l.all.handlers), !p || !p.length)
      return a ? c[0] : void 0;
    const f = {
      name: i,
      currentIndex: 0
    };
    async function y() {
      try {
        l.__current.add(f);
        let E = a ? c[0] : void 0;
        for (; f.currentIndex < p.length; )
          E = await p[f.currentIndex].callback.apply(null, c), a && (c[0] = E), f.currentIndex++;
        return a ? E : void 0;
      } finally {
        l.__current.delete(f);
      }
    }
    function u() {
      try {
        l.__current.add(f);
        let E = a ? c[0] : void 0;
        for (; f.currentIndex < p.length; )
          E = p[f.currentIndex].callback.apply(null, c), a && (c[0] = E), f.currentIndex++;
        return a ? E : void 0;
      } finally {
        l.__current.delete(f);
      }
    }
    return (n ? y : u)();
  };
}
function ar(e, t) {
  return function() {
    var n;
    const s = e[t];
    return (n = Array.from(s.__current).at(-1)?.name) !== null && n !== void 0 ? n : null;
  };
}
function ir(e, t) {
  return function(n) {
    const s = e[t];
    return typeof n > "u" ? s.__current.size > 0 : Array.from(s.__current).some((i) => i.name === n);
  };
}
function sr(e, t) {
  return function(n) {
    const s = e[t];
    if (Te(n))
      return s[n] && s[n].runs ? s[n].runs : 0;
  };
}
class ft {
  constructor() {
    this.actions = /* @__PURE__ */ Object.create(null), this.actions.__current = /* @__PURE__ */ new Set(), this.filters = /* @__PURE__ */ Object.create(null), this.filters.__current = /* @__PURE__ */ new Set(), this.addAction = tr(this, "actions"), this.addFilter = tr(this, "filters"), this.removeAction = oe(this, "actions"), this.removeFilter = oe(this, "filters"), this.hasAction = nr(this, "actions"), this.hasFilter = nr(this, "filters"), this.removeAllActions = oe(this, "actions", !0), this.removeAllFilters = oe(this, "filters", !0), this.doAction = ue(this, "actions", !1, !1), this.doActionAsync = ue(this, "actions", !1, !0), this.applyFilters = ue(this, "filters", !0, !1), this.applyFiltersAsync = ue(this, "filters", !0, !0), this.currentAction = ar(this, "actions"), this.currentFilter = ar(this, "filters"), this.doingAction = ir(this, "actions"), this.doingFilter = ir(this, "filters"), this.didAction = sr(this, "actions"), this.didFilter = sr(this, "filters");
  }
}
function dt() {
  return new ft();
}
const yr = dt(), {
  addAction: Ut,
  addFilter: Ht,
  removeAction: Nt,
  removeFilter: Wt,
  hasAction: Yt,
  hasFilter: qt,
  removeAllActions: Vt,
  removeAllFilters: Jt,
  doAction: zt,
  doActionAsync: Kt,
  applyFilters: Xt,
  applyFiltersAsync: Gt,
  currentAction: Bt,
  currentFilter: Qt,
  doingAction: Zt,
  doingFilter: en,
  didAction: rn,
  didFilter: tn,
  actions: nn,
  filters: an
} = yr, F = lt(void 0, void 0, yr);
F.getLocaleData.bind(F);
F.setLocaleData.bind(F);
F.resetLocaleData.bind(F);
F.subscribe.bind(F);
const ce = F.__.bind(F);
F._x.bind(F);
F._n.bind(F);
F._nx.bind(F);
F.isRTL.bind(F);
F.hasTranslation.bind(F);
function pt(e) {
  const t = (a, n) => {
    const {
      headers: s = {}
    } = a;
    for (const i in s)
      if (i.toLowerCase() === "x-wp-nonce" && s[i] === t.nonce)
        return n(a);
    return n({
      ...a,
      headers: {
        ...s,
        "X-WP-Nonce": t.nonce
      }
    });
  };
  return t.nonce = e, t;
}
const mr = (e, t) => {
  let a = e.path, n, s;
  return typeof e.namespace == "string" && typeof e.endpoint == "string" && (n = e.namespace.replace(/^\/|\/$/g, ""), s = e.endpoint.replace(/^\//, ""), s ? a = n + "/" + s : a = n), delete e.namespace, delete e.endpoint, t({
    ...e,
    path: a
  });
}, ht = (e) => (t, a) => mr(t, (n) => {
  let s = n.url, i = n.path, c;
  return typeof i == "string" && (c = e, e.indexOf("?") !== -1 && (i = i.replace("?", "&")), i = i.replace(/^\//, ""), typeof c == "string" && c.indexOf("?") !== -1 && (i = i.replace("?", "&")), s = c + i), a({
    ...n,
    url: s
  });
});
function vt(e) {
  let t;
  try {
    t = new URL(e, "http://example.com").search.substring(1);
  } catch {
  }
  if (t)
    return t;
}
function _r(e) {
  let t = "";
  const a = Object.entries(e);
  let n;
  for (; n = a.shift(); ) {
    let [s, i] = n;
    if (Array.isArray(i) || i && i.constructor === Object) {
      const l = Object.entries(i).reverse();
      for (const [p, f] of l)
        a.unshift([`${s}[${p}]`, f]);
    } else i !== void 0 && (i === null && (i = ""), t += "&" + [s, i].map(encodeURIComponent).join("="));
  }
  return t.substr(1);
}
function gt(e) {
  const t = /^\S+?(#[^\s\?]*)/.exec(e);
  if (t)
    return t[1];
}
function yt(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function mt(e, t, a) {
  const n = t.length, s = n - 1;
  for (let i = 0; i < n; i++) {
    let c = t[i];
    !c && Array.isArray(e) && (c = e.length.toString()), c = ["__proto__", "constructor", "prototype"].includes(c) ? c.toUpperCase() : c;
    const l = !isNaN(Number(t[i + 1]));
    e[c] = i === s ? (
      // If at end of path, assign the intended value.
      a
    ) : (
      // Otherwise, advance to the next object in the path, creating
      // it if it does not yet exist.
      e[c] || (l ? [] : {})
    ), Array.isArray(e[c]) && !l && (e[c] = {
      ...e[c]
    }), e = e[c];
  }
}
function le(e) {
  return (vt(e) || "").replace(/\+/g, "%20").split("&").reduce((t, a) => {
    const [n, s = ""] = a.split("=").filter(Boolean).map(yt);
    if (n) {
      const i = n.replace(/\]/g, "").split("[");
      mt(t, i, s);
    }
    return t;
  }, /* @__PURE__ */ Object.create(null));
}
function J(e = "", t) {
  if (!t || !Object.keys(t).length)
    return e;
  const a = gt(e) || "";
  let n = e.replace(a, "");
  const s = e.indexOf("?");
  return s !== -1 && (t = Object.assign(le(e), t), n = n.substr(0, s)), n + "?" + _r(t) + a;
}
function Re(e, t) {
  return le(e)[t];
}
function or(e, t) {
  return Re(e, t) !== void 0;
}
function ur(e, ...t) {
  const a = e.replace(/^[^#]*/, "");
  e = e.replace(/#.*/, "");
  const n = e.indexOf("?");
  if (n === -1)
    return e + a;
  const s = le(e), i = e.substr(0, n);
  t.forEach((p) => delete s[p]);
  const c = _r(s);
  return (c ? i + "?" + c : i) + a;
}
function cr(e) {
  const t = e.split("?"), a = t[1], n = t[0];
  return a ? n + "?" + a.split("&").map((s) => s.split("=")).map((s) => s.map(decodeURIComponent)).sort((s, i) => s[0].localeCompare(i[0])).map((s) => s.map(encodeURIComponent)).map((s) => s.join("=")).join("&") : n;
}
function _t(e) {
  const t = Object.fromEntries(Object.entries(e).map(([a, n]) => [cr(a), n]));
  return (a, n) => {
    const {
      parse: s = !0
    } = a;
    let i = a.path;
    if (!i && a.url) {
      const {
        rest_route: p,
        ...f
      } = le(a.url);
      typeof p == "string" && (i = J(p, f));
    }
    if (typeof i != "string")
      return n(a);
    const c = a.method || "GET", l = cr(i);
    if (c === "GET" && t[l]) {
      const p = t[l];
      return delete t[l], lr(p, !!s);
    } else if (c === "OPTIONS" && t[c] && t[c][l]) {
      const p = t[c][l];
      return delete t[c][l], lr(p, !!s);
    }
    return n(a);
  };
}
function lr(e, t) {
  if (t)
    return Promise.resolve(e.body);
  try {
    return Promise.resolve(new window.Response(JSON.stringify(e.body), {
      status: 200,
      statusText: "OK",
      headers: e.headers
    }));
  } catch {
    return Object.entries(e.headers).forEach(([a, n]) => {
      a.toLowerCase() === "link" && (e.headers[a] = n.replace(/<([^>]+)>/, (s, i) => `<${encodeURI(i)}>`));
    }), Promise.resolve(t ? e.body : new window.Response(JSON.stringify(e.body), {
      status: 200,
      statusText: "OK",
      headers: e.headers
    }));
  }
}
const bt = ({
  path: e,
  url: t,
  ...a
}, n) => ({
  ...a,
  url: t && J(t, n),
  path: e && J(e, n)
}), fr = (e) => e.json ? e.json() : Promise.reject(e), wt = (e) => {
  if (!e)
    return {};
  const t = e.match(/<([^>]+)>; rel="next"/);
  return t ? {
    next: t[1]
  } : {};
}, dr = (e) => {
  const {
    next: t
  } = wt(e.headers.get("link"));
  return t;
}, Et = (e) => {
  const t = !!e.path && e.path.indexOf("per_page=-1") !== -1, a = !!e.url && e.url.indexOf("per_page=-1") !== -1;
  return t || a;
}, br = async (e, t) => {
  if (e.parse === !1 || !Et(e))
    return t(e);
  const a = await $({
    ...bt(e, {
      per_page: 100
    }),
    // Ensure headers are returned for page 1.
    parse: !1
  }), n = await fr(a);
  if (!Array.isArray(n))
    return n;
  let s = dr(a);
  if (!s)
    return n;
  let i = (
    /** @type {any[]} */
    [].concat(n)
  );
  for (; s; ) {
    const c = await $({
      ...e,
      // Ensure the URL for the next page is used instead of any provided path.
      path: void 0,
      url: s,
      // Ensure we still get headers so we can identify the next page.
      parse: !1
    }), l = await fr(c);
    i = i.concat(l), s = dr(c);
  }
  return i;
}, Rt = /* @__PURE__ */ new Set(["PATCH", "PUT", "DELETE"]), xt = "GET", Tt = (e, t) => {
  const {
    method: a = xt
  } = e;
  return Rt.has(a.toUpperCase()) && (e = {
    ...e,
    headers: {
      ...e.headers,
      "X-HTTP-Method-Override": a,
      "Content-Type": "application/json"
    },
    method: "POST"
  }), t(e);
}, Ot = (e, t) => (typeof e.url == "string" && !or(e.url, "_locale") && (e.url = J(e.url, {
  _locale: "user"
})), typeof e.path == "string" && !or(e.path, "_locale") && (e.path = J(e.path, {
  _locale: "user"
})), t(e)), St = (e, t = !0) => t ? e.status === 204 ? null : e.json ? e.json() : Promise.reject(e) : e, At = (e) => {
  const t = {
    code: "invalid_json",
    message: ce("The response is not a valid JSON response.")
  };
  if (!e || !e.json)
    throw t;
  return e.json().catch(() => {
    throw t;
  });
}, wr = (e, t = !0) => Promise.resolve(St(e, t)).catch((a) => Oe(a, t));
function Oe(e, t = !0) {
  if (!t)
    throw e;
  return At(e).then((a) => {
    const n = {
      code: "unknown_error",
      message: ce("An unknown error occurred.")
    };
    throw a || n;
  });
}
function Pt(e) {
  const t = !!e.method && e.method === "POST";
  return (!!e.path && e.path.indexOf("/wp/v2/media") !== -1 || !!e.url && e.url.indexOf("/wp/v2/media") !== -1) && t;
}
const jt = (e, t) => {
  if (!Pt(e))
    return t(e);
  let a = 0;
  const n = 5, s = (i) => (a++, t({
    path: `/wp/v2/media/${i}/post-process`,
    method: "POST",
    data: {
      action: "create-image-subsizes"
    },
    parse: !1
  }).catch(() => a < n ? s(i) : (t({
    path: `/wp/v2/media/${i}?force=true`,
    method: "DELETE"
  }), Promise.reject())));
  return t({
    ...e,
    parse: !1
  }).catch((i) => {
    if (!i.headers)
      return Promise.reject(i);
    const c = i.headers.get("x-wp-upload-attachment-id");
    return i.status >= 500 && i.status < 600 && c ? s(c).catch(() => e.parse !== !1 ? Promise.reject({
      code: "post_process",
      message: ce("Media upload failed. If this is a photo or a large image, please scale it down and try again.")
    }) : Promise.reject(i)) : Oe(i, e.parse);
  }).then((i) => wr(i, e.parse));
}, Ct = (e) => (t, a) => {
  if (typeof t.url == "string") {
    const n = Re(t.url, "wp_theme_preview");
    n === void 0 ? t.url = J(t.url, {
      wp_theme_preview: e
    }) : n === "" && (t.url = ur(t.url, "wp_theme_preview"));
  }
  if (typeof t.path == "string") {
    const n = Re(t.path, "wp_theme_preview");
    n === void 0 ? t.path = J(t.path, {
      wp_theme_preview: e
    }) : n === "" && (t.path = ur(t.path, "wp_theme_preview"));
  }
  return a(t);
}, Ft = {
  // The backend uses the Accept header as a condition for considering an
  // incoming request as a REST request.
  //
  // See: https://core.trac.wordpress.org/ticket/44534
  Accept: "application/json, */*;q=0.1"
}, kt = {
  credentials: "include"
}, Er = [Ot, mr, Tt, br];
function It(e) {
  Er.unshift(e);
}
const Rr = (e) => {
  if (e.status >= 200 && e.status < 300)
    return e;
  throw e;
}, Dt = (e) => {
  const {
    url: t,
    path: a,
    data: n,
    parse: s = !0,
    ...i
  } = e;
  let {
    body: c,
    headers: l
  } = e;
  return l = {
    ...Ft,
    ...l
  }, n && (c = JSON.stringify(n), l["Content-Type"] = "application/json"), window.fetch(
    // Fall back to explicitly passing `window.location` which is the behavior if `undefined` is passed.
    t || a || window.location.href,
    {
      ...kt,
      ...i,
      body: c,
      headers: l
    }
  ).then((f) => Promise.resolve(f).then(Rr).catch((y) => Oe(y, s)).then((y) => wr(y, s)), (f) => {
    throw f && f.name === "AbortError" ? f : {
      code: "fetch_error",
      message: ce("You are probably offline.")
    };
  });
};
let xr = Dt;
function $t(e) {
  xr = e;
}
function $(e) {
  return Er.reduceRight((a, n) => (s) => n(s, a), xr)(e).catch((a) => a.code !== "rest_cookie_invalid_nonce" ? Promise.reject(a) : window.fetch($.nonceEndpoint).then(Rr).then((n) => n.text()).then((n) => ($.nonceMiddleware.nonce = n, $(e))));
}
$.use = It;
$.setFetchHandler = $t;
$.createNonceMiddleware = pt;
$.createPreloadingMiddleware = _t;
$.createRootURLMiddleware = ht;
$.fetchAllMiddleware = br;
$.mediaUploadMiddleware = jt;
$.createThemePreviewMiddleware = Ct;
const sn = (e, t) => {
  const a = e.endsWith("/") ? `${e}render` : `${e}/render`;
  return {
    getSnippets: () => $({
      path: e,
      headers: { "X-WP-Nonce": t }
    }),
    renderSnippet: (n, s) => $({
      path: a,
      method: "POST",
      headers: { "X-WP-Nonce": t },
      data: { key: n, data: s }
    })
  };
}, on = (e) => ({
  getSnippets: () => fetch(e).then((t) => t.json()),
  renderSnippet: (t, a) => fetch(e.endsWith("/") ? `${e}render` : `${e}/render`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: t, data: a })
  }).then((n) => n.json())
});
export {
  Mt as SnippetsApp,
  on as createChromeApi,
  sn as createWordpressApi
};
//# sourceMappingURL=snippo-ui.es.js.map
