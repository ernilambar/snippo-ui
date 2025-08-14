import hr, { useState as q, useMemo as Zr, useRef as et, useCallback as Ge, useEffect as de } from "react";
import rt from "react-select";
var pe = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function tt() {
  if (Be) return re;
  Be = 1;
  var e = hr, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(o, f, d) {
    var m, u = {}, R = null, S = null;
    d !== void 0 && (R = "" + d), f.key !== void 0 && (R = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (m in f) n.call(f, m) && !s.hasOwnProperty(m) && (u[m] = f[m]);
    if (o && o.defaultProps) for (m in f = o.defaultProps, f) u[m] === void 0 && (u[m] = f[m]);
    return { $$typeof: t, type: o, key: R, ref: S, props: u, _owner: i.current };
  }
  return re.Fragment = a, re.jsx = l, re.jsxs = l, re;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function nt() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = hr, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), o = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), A = Symbol.iterator, v = "@@iterator";
    function H(r) {
      if (r === null || typeof r != "object")
        return null;
      var c = A && r[A] || r[v];
      return typeof c == "function" ? c : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(r) {
      {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
          p[g - 1] = arguments[g];
        V("error", r, p);
      }
    }
    function V(r, c, p) {
      {
        var g = $.ReactDebugCurrentFrame, T = g.getStackAddendum();
        T !== "" && (c += "%s", p = p.concat([T]));
        var O = p.map(function(x) {
          return String(x);
        });
        O.unshift("Warning: " + c), Function.prototype.apply.call(console[r], console, O);
      }
    }
    var h = !1, y = !1, _ = !1, C = !1, P = !1, Y;
    Y = Symbol.for("react.module.reference");
    function ye(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === n || r === s || P || r === i || r === d || r === m || C || r === S || h || y || _ || typeof r == "object" && r !== null && (r.$$typeof === R || r.$$typeof === u || r.$$typeof === l || r.$$typeof === o || r.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === Y || r.getModuleId !== void 0));
    }
    function ae(r, c, p) {
      var g = r.displayName;
      if (g)
        return g;
      var T = c.displayName || c.name || "";
      return T !== "" ? p + "(" + T + ")" : p;
    }
    function ie(r) {
      return r.displayName || "Context";
    }
    function W(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case o:
            var c = r;
            return ie(c) + ".Consumer";
          case l:
            var p = r;
            return ie(p._context) + ".Provider";
          case f:
            return ae(r, r.render, "ForwardRef");
          case u:
            var g = r.displayName || null;
            return g !== null ? g : W(r.type) || "Memo";
          case R: {
            var T = r, O = T._payload, x = T._init;
            try {
              return W(x(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, J = 0, E, D, K, X, se, oe, ke;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function Tr() {
      {
        if (J === 0) {
          E = console.log, D = console.info, K = console.warn, X = console.error, se = console.group, oe = console.groupCollapsed, ke = console.groupEnd;
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
        J++;
      }
    }
    function Or() {
      {
        if (J--, J === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, r, {
              value: E
            }),
            info: z({}, r, {
              value: D
            }),
            warn: z({}, r, {
              value: K
            }),
            error: z({}, r, {
              value: X
            }),
            group: z({}, r, {
              value: se
            }),
            groupCollapsed: z({}, r, {
              value: oe
            }),
            groupEnd: z({}, r, {
              value: ke
            })
          });
        }
        J < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = $.ReactCurrentDispatcher, _e;
    function ce(r, c, p) {
      {
        if (_e === void 0)
          try {
            throw Error();
          } catch (T) {
            var g = T.stack.trim().match(/\n( *(at )?)/);
            _e = g && g[1] || "";
          }
        return `
` + _e + r;
      }
    }
    var we = !1, ue;
    {
      var jr = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new jr();
    }
    function De(r, c) {
      if (!r || we)
        return "";
      {
        var p = ue.get(r);
        if (p !== void 0)
          return p;
      }
      var g;
      we = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = be.current, be.current = null, Tr();
      try {
        if (c) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (M) {
              g = M;
            }
            Reflect.construct(r, [], x);
          } else {
            try {
              x.call();
            } catch (M) {
              g = M;
            }
            r.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            g = M;
          }
          r();
        }
      } catch (M) {
        if (M && g && typeof M.stack == "string") {
          for (var w = M.stack.split(`
`), L = g.stack.split(`
`), F = w.length - 1, k = L.length - 1; F >= 1 && k >= 0 && w[F] !== L[k]; )
            k--;
          for (; F >= 1 && k >= 0; F--, k--)
            if (w[F] !== L[k]) {
              if (F !== 1 || k !== 1)
                do
                  if (F--, k--, k < 0 || w[F] !== L[k]) {
                    var U = `
` + w[F].replace(" at new ", " at ");
                    return r.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", r.displayName)), typeof r == "function" && ue.set(r, U), U;
                  }
                while (F >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        we = !1, be.current = O, Or(), Error.prepareStackTrace = T;
      }
      var Z = r ? r.displayName || r.name : "", G = Z ? ce(Z) : "";
      return typeof r == "function" && ue.set(r, G), G;
    }
    function Cr(r, c, p) {
      return De(r, !1);
    }
    function Ar(r) {
      var c = r.prototype;
      return !!(c && c.isReactComponent);
    }
    function le(r, c, p) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return De(r, Ar(r));
      if (typeof r == "string")
        return ce(r);
      switch (r) {
        case d:
          return ce("Suspense");
        case m:
          return ce("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case f:
            return Cr(r.render);
          case u:
            return le(r.type, c, p);
          case R: {
            var g = r, T = g._payload, O = g._init;
            try {
              return le(O(T), c, p);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, $e = {}, Le = $.ReactDebugCurrentFrame;
    function fe(r) {
      if (r) {
        var c = r._owner, p = le(r.type, r._source, c ? c.type : null);
        Le.setExtraStackFrame(p);
      } else
        Le.setExtraStackFrame(null);
    }
    function Pr(r, c, p, g, T) {
      {
        var O = Function.call.bind(ee);
        for (var x in r)
          if (O(r, x)) {
            var w = void 0;
            try {
              if (typeof r[x] != "function") {
                var L = Error((g || "React class") + ": " + p + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              w = r[x](c, x, g, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              w = F;
            }
            w && !(w instanceof Error) && (fe(T), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", p, x, typeof w), fe(null)), w instanceof Error && !(w.message in $e) && ($e[w.message] = !0, fe(T), j("Failed %s type: %s", p, w.message), fe(null));
          }
      }
    }
    var Fr = Array.isArray;
    function Ee(r) {
      return Fr(r);
    }
    function kr(r) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, p = c && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return p;
      }
    }
    function Ir(r) {
      try {
        return Ne(r), !1;
      } catch {
        return !0;
      }
    }
    function Ne(r) {
      return "" + r;
    }
    function Me(r) {
      if (Ir(r))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kr(r)), Ne(r);
    }
    var Ue = $.ReactCurrentOwner, Dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, He, We;
    function $r(r) {
      if (ee.call(r, "ref")) {
        var c = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Lr(r) {
      if (ee.call(r, "key")) {
        var c = Object.getOwnPropertyDescriptor(r, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Nr(r, c) {
      typeof r.ref == "string" && Ue.current;
    }
    function Mr(r, c) {
      {
        var p = function() {
          He || (He = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function Ur(r, c) {
      {
        var p = function() {
          We || (We = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var Hr = function(r, c, p, g, T, O, x) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: c,
        ref: p,
        props: x,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Wr(r, c, p, g, T) {
      {
        var O, x = {}, w = null, L = null;
        p !== void 0 && (Me(p), w = "" + p), Lr(c) && (Me(c.key), w = "" + c.key), $r(c) && (L = c.ref, Nr(c, T));
        for (O in c)
          ee.call(c, O) && !Dr.hasOwnProperty(O) && (x[O] = c[O]);
        if (r && r.defaultProps) {
          var F = r.defaultProps;
          for (O in F)
            x[O] === void 0 && (x[O] = F[O]);
        }
        if (w || L) {
          var k = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          w && Mr(x, k), L && Ur(x, k);
        }
        return Hr(r, w, L, T, g, Ue.current, x);
      }
    }
    var xe = $.ReactCurrentOwner, Ye = $.ReactDebugCurrentFrame;
    function Q(r) {
      if (r) {
        var c = r._owner, p = le(r.type, r._source, c ? c.type : null);
        Ye.setExtraStackFrame(p);
      } else
        Ye.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Se(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function qe() {
      {
        if (xe.current) {
          var r = W(xe.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Yr(r) {
      return "";
    }
    var Ve = {};
    function qr(r) {
      {
        var c = qe();
        if (!c) {
          var p = typeof r == "string" ? r : r.displayName || r.name;
          p && (c = `

Check the top-level render call using <` + p + ">.");
        }
        return c;
      }
    }
    function ze(r, c) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var p = qr(c);
        if (Ve[p])
          return;
        Ve[p] = !0;
        var g = "";
        r && r._owner && r._owner !== xe.current && (g = " It was passed a child from " + W(r._owner.type) + "."), Q(r), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, g), Q(null);
      }
    }
    function Je(r, c) {
      {
        if (typeof r != "object")
          return;
        if (Ee(r))
          for (var p = 0; p < r.length; p++) {
            var g = r[p];
            Se(g) && ze(g, c);
          }
        else if (Se(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var T = H(r);
          if (typeof T == "function" && T !== r.entries)
            for (var O = T.call(r), x; !(x = O.next()).done; )
              Se(x.value) && ze(x.value, c);
        }
      }
    }
    function Vr(r) {
      {
        var c = r.type;
        if (c == null || typeof c == "string")
          return;
        var p;
        if (typeof c == "function")
          p = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === u))
          p = c.propTypes;
        else
          return;
        if (p) {
          var g = W(c);
          Pr(p, r.props, "prop", g, r);
        } else if (c.PropTypes !== void 0 && !Re) {
          Re = !0;
          var T = W(c);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zr(r) {
      {
        for (var c = Object.keys(r.props), p = 0; p < c.length; p++) {
          var g = c[p];
          if (g !== "children" && g !== "key") {
            Q(r), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Q(null);
            break;
          }
        }
        r.ref !== null && (Q(r), j("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    var Ke = {};
    function Xe(r, c, p, g, T, O) {
      {
        var x = ye(r);
        if (!x) {
          var w = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Yr();
          L ? w += L : w += qe();
          var F;
          r === null ? F = "null" : Ee(r) ? F = "array" : r !== void 0 && r.$$typeof === t ? (F = "<" + (W(r.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : F = typeof r, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, w);
        }
        var k = Wr(r, c, p, T, O);
        if (k == null)
          return k;
        if (x) {
          var U = c.children;
          if (U !== void 0)
            if (g)
              if (Ee(U)) {
                for (var Z = 0; Z < U.length; Z++)
                  Je(U[Z], r);
                Object.freeze && Object.freeze(U);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(U, r);
        }
        if (ee.call(c, "key")) {
          var G = W(r), M = Object.keys(c).filter(function(Qr) {
            return Qr !== "key";
          }), Te = M.length > 0 ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[G + Te]) {
            var Br = M.length > 0 ? "{" + M.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Te, G, Br, G), Ke[G + Te] = !0;
          }
        }
        return r === n ? zr(k) : Vr(k), k;
      }
    }
    function Jr(r, c, p) {
      return Xe(r, c, p, !0);
    }
    function Kr(r, c, p) {
      return Xe(r, c, p, !1);
    }
    var Xr = Kr, Gr = Jr;
    te.Fragment = n, te.jsx = Xr, te.jsxs = Gr;
  }()), te;
}
var Ze;
function at() {
  return Ze || (Ze = 1, process.env.NODE_ENV === "production" ? pe.exports = tt() : pe.exports = nt()), pe.exports;
}
var b = at();
const it = ({ data: e, innerProps: t }) => /* @__PURE__ */ b.jsxs("div", { ...t, className: "snippet-select-option", children: [
  /* @__PURE__ */ b.jsx("div", { className: "snippet-select-option-title", children: e.label }),
  e.categories && e.categories.length > 0 && /* @__PURE__ */ b.jsx("div", { className: "snippet-select-option-categories", children: e.categories.map((a, n) => /* @__PURE__ */ b.jsx(
    "span",
    {
      className: "snippet-select-option-category",
      style: {
        backgroundColor: a.color || void 0
      },
      children: typeof a == "string" ? a : a.title
    },
    n
  )) })
] }), st = ({
  snippetOptions: e,
  selected: t,
  onSelectChange: a
}) => {
  const n = {
    control: (i, s) => ({
      ...i,
      maxWidth: 400,
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxShadow: s.isFocused ? "0 0 0 1px #007cba" : "none",
      "&:hover": {
        borderColor: "#007cba"
      }
    }),
    option: (i, s) => ({
      ...i,
      backgroundColor: s.isSelected ? "#007cba" : s.isFocused ? "#f0f0f0" : "white",
      color: s.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: s.isSelected ? "#007cba" : "#f0f0f0"
      }
    }),
    menu: (i) => ({
      ...i,
      zIndex: 9999
    }),
    placeholder: (i) => ({
      ...i,
      color: "#666"
    })
  };
  return /* @__PURE__ */ b.jsx(
    rt,
    {
      value: e.find((i) => i.value === t) || null,
      onChange: a,
      options: e,
      placeholder: "Select a snippet",
      styles: n,
      className: "snippet-dropdown",
      isClearable: !1,
      isSearchable: !0,
      components: { Option: it }
    }
  );
}, ot = ({
  snippetOptions: e,
  selected: t,
  onSelectChange: a
}) => {
  const [n, i] = q(""), s = (o) => {
    a({ value: o });
  }, l = Zr(() => {
    if (!n.trim())
      return e;
    const o = n.toLowerCase();
    return e.filter((f) => !!(f.label.toLowerCase().includes(o) || f.categories && f.categories.some((d) => (typeof d == "string" ? d : d.title).toLowerCase().includes(o))));
  }, [e, n]);
  return /* @__PURE__ */ b.jsxs("div", { className: "snippet-sidebar", children: [
    /* @__PURE__ */ b.jsx("div", { className: "snippet-sidebar-search", children: /* @__PURE__ */ b.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search snippets...",
        value: n,
        onChange: (o) => i(o.target.value),
        className: "snippet-sidebar-search-input"
      }
    ) }),
    /* @__PURE__ */ b.jsx("div", { className: "snippet-sidebar-list", children: l.length === 0 ? /* @__PURE__ */ b.jsxs("div", { className: "snippet-sidebar-no-results", children: [
      'No snippets found for "',
      n,
      '"'
    ] }) : l.map((o) => /* @__PURE__ */ b.jsx(
      "div",
      {
        className: `snippet-sidebar-item ${t === o.value ? "active" : ""}`,
        onClick: () => s(o.value),
        children: /* @__PURE__ */ b.jsxs("div", { className: "snippet-sidebar-content", children: [
          /* @__PURE__ */ b.jsx("div", { className: "snippet-sidebar-title", children: o.label }),
          o.categories && o.categories.length > 0 && /* @__PURE__ */ b.jsx("div", { className: "snippet-sidebar-categories", children: o.categories.map((f, d) => /* @__PURE__ */ b.jsx(
            "span",
            {
              className: "snippet-sidebar-category",
              style: {
                backgroundColor: f.color || void 0
              },
              children: typeof f == "string" ? f : f.title
            },
            d
          )) })
        ] })
      },
      o.value
    )) })
  ] });
}, ct = ({ fields: e, form: t, onFieldChange: a }) => e.length === 0 ? null : /* @__PURE__ */ b.jsx("div", { className: "snippet-form", children: e.map((n) => /* @__PURE__ */ b.jsxs("div", { className: "snippet-field", children: [
  /* @__PURE__ */ b.jsx(
    "label",
    {
      htmlFor: `snippet-field-${n.name}`,
      className: "snippet-label",
      children: n.label || n.name
    }
  ),
  /* @__PURE__ */ b.jsx(
    "input",
    {
      id: `snippet-field-${n.name}`,
      type: "text",
      value: t[n.name] || "",
      onChange: (i) => a(n.name, i.target.value),
      className: "snippet-input regular-text",
      placeholder: n.placeholder || `Enter ${n.label || n.name}`
    }
  )
] }, n.name)) }), ut = ({
  processedOutput: e,
  isRendering: t,
  onCopy: a,
  copied: n
}) => !e && !t ? null : /* @__PURE__ */ b.jsx("div", { className: "snippet-output-container", children: /* @__PURE__ */ b.jsxs("div", { className: "snippet-output-content", children: [
  t && !e && /* @__PURE__ */ b.jsx("div", { className: "snippet-loading", children: "Generating snippet..." }),
  e && /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      "div",
      {
        className: "snippet-output-text",
        dangerouslySetInnerHTML: { __html: e }
      }
    ),
    /* @__PURE__ */ b.jsx(
      "button",
      {
        type: "button",
        onClick: a,
        className: "snippet-copy-button",
        disabled: t,
        children: n ? "Copied!" : "Copy"
      }
    )
  ] })
] }) }), Jt = ({ api: e, options: t = {} }) => {
  const {
    autoCopy: a = !1,
    autoCopyDebounceDelay: n = 500,
    layout: i = "dropdown"
  } = t, [s, l] = q({}), [o, f] = q(""), [d, m] = q([]), [u, R] = q({}), [S, A] = q(""), [v, H] = q(""), [$, j] = q(""), [V, h] = q(!1), [y, _] = q(!1), C = et(null), P = Ge((E) => {
    C.current && clearTimeout(C.current), C.current = setTimeout(() => {
      E && a && navigator.clipboard.writeText(E).then(() => {
        h(!0), setTimeout(() => h(!1), 1500);
      });
    }, n);
  }, [a, n]);
  de(() => () => {
    C.current && clearTimeout(C.current);
  }, []), de(() => {
    e.getSnippets().then((E) => {
      if (l(E), i === "sidebar" && !o && Object.keys(E).length > 0) {
        const D = Object.keys(E)[0];
        f(D);
      }
    }).catch((E) => j(E.message || "Error fetching snippets"));
  }, [e, i, o]);
  const Y = Ge((E, D) => {
    let K = E;
    return Object.keys(D).forEach((X) => {
      const se = D[X] || "", oe = `{{${X}}}`;
      K = K.replace(new RegExp(oe.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), se);
    }), K;
  }, []);
  de(() => {
    if (S) {
      const E = Y(S, u);
      H(E), a && E && P(E);
    }
  }, [S, u, Y, a, P]), de(() => {
    o && s[o] && (m(s[o].fields || []), R({}), A(""), H(""), j(""), h(!1), _(!1), !s[o].fields || s[o].fields.length === 0 ? (_(!0), e.renderSnippet(o, {}).then((E) => {
      A(E.output), _(!1);
    }).catch((E) => {
      j(E.message || "Error rendering snippet"), _(!1);
    })) : (_(!0), e.renderSnippet(o, {}).then((E) => {
      A(E.output), _(!1);
    }).catch((E) => {
      j(E.message || "Error rendering snippet"), _(!1);
    })));
  }, [o, s, e]);
  const ye = (E, D) => {
    R({ ...u, [E]: D });
  }, ae = (E) => {
    f(E ? E.value : "");
  }, ie = () => {
    v && navigator.clipboard.writeText(v).then(() => {
      h(!0), setTimeout(() => h(!1), 1500);
    });
  }, W = Object.keys(s).map((E) => {
    const D = s[E], K = D.meta && D.meta.title ? D.meta.title : E, X = D.categories && Array.isArray(D.categories) ? D.categories : [];
    return {
      value: E,
      label: K,
      categories: X
    };
  }), z = `snippets-app--${i}`, J = () => /* @__PURE__ */ b.jsxs("div", { className: "snippets-app-content", children: [
    /* @__PURE__ */ b.jsx(
      ct,
      {
        fields: d,
        form: u,
        onFieldChange: ye
      }
    ),
    /* @__PURE__ */ b.jsx(
      ut,
      {
        processedOutput: v,
        isRendering: y,
        onCopy: ie,
        copied: V
      }
    ),
    $ && /* @__PURE__ */ b.jsx("div", { className: "snippet-error-message", children: $ })
  ] });
  return /* @__PURE__ */ b.jsx("div", { className: `snippets-app ${z}`, children: i === "sidebar" ? /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      ot,
      {
        snippetOptions: W,
        selected: o,
        onSelectChange: ae
      }
    ),
    J()
  ] }) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      st,
      {
        snippetOptions: W,
        selected: o,
        onSelectChange: ae
      }
    ),
    J()
  ] }) });
};
var Oe = {}, er;
function lt() {
  return er || (er = 1, function(e) {
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
      function a(o) {
        return i(l(o), arguments);
      }
      function n(o, f) {
        return a.apply(null, [o].concat(f || []));
      }
      function i(o, f) {
        var d = 1, m = o.length, u, R = "", S, A, v, H, $, j, V, h;
        for (S = 0; S < m; S++)
          if (typeof o[S] == "string")
            R += o[S];
          else if (typeof o[S] == "object") {
            if (v = o[S], v.keys)
              for (u = f[d], A = 0; A < v.keys.length; A++) {
                if (u == null)
                  throw new Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', v.keys[A], v.keys[A - 1]));
                u = u[v.keys[A]];
              }
            else v.param_no ? u = f[v.param_no] : u = f[d++];
            if (t.not_type.test(v.type) && t.not_primitive.test(v.type) && u instanceof Function && (u = u()), t.numeric_arg.test(v.type) && typeof u != "number" && isNaN(u))
              throw new TypeError(a("[sprintf] expecting number but found %T", u));
            switch (t.number.test(v.type) && (V = u >= 0), v.type) {
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
                u = JSON.stringify(u, null, v.width ? parseInt(v.width) : 0);
                break;
              case "e":
                u = v.precision ? parseFloat(u).toExponential(v.precision) : parseFloat(u).toExponential();
                break;
              case "f":
                u = v.precision ? parseFloat(u).toFixed(v.precision) : parseFloat(u);
                break;
              case "g":
                u = v.precision ? String(Number(u.toPrecision(v.precision))) : parseFloat(u);
                break;
              case "o":
                u = (parseInt(u, 10) >>> 0).toString(8);
                break;
              case "s":
                u = String(u), u = v.precision ? u.substring(0, v.precision) : u;
                break;
              case "t":
                u = String(!!u), u = v.precision ? u.substring(0, v.precision) : u;
                break;
              case "T":
                u = Object.prototype.toString.call(u).slice(8, -1).toLowerCase(), u = v.precision ? u.substring(0, v.precision) : u;
                break;
              case "u":
                u = parseInt(u, 10) >>> 0;
                break;
              case "v":
                u = u.valueOf(), u = v.precision ? u.substring(0, v.precision) : u;
                break;
              case "x":
                u = (parseInt(u, 10) >>> 0).toString(16);
                break;
              case "X":
                u = (parseInt(u, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            t.json.test(v.type) ? R += u : (t.number.test(v.type) && (!V || v.sign) ? (h = V ? "+" : "-", u = u.toString().replace(t.sign, "")) : h = "", $ = v.pad_char ? v.pad_char === "0" ? "0" : v.pad_char.charAt(1) : " ", j = v.width - (h + u).length, H = v.width && j > 0 ? $.repeat(j) : "", R += v.align ? h + u + H : $ === "0" ? h + H + u : H + h + u);
          }
        return R;
      }
      var s = /* @__PURE__ */ Object.create(null);
      function l(o) {
        if (s[o])
          return s[o];
        for (var f = o, d, m = [], u = 0; f; ) {
          if ((d = t.text.exec(f)) !== null)
            m.push(d[0]);
          else if ((d = t.modulo.exec(f)) !== null)
            m.push("%");
          else if ((d = t.placeholder.exec(f)) !== null) {
            if (d[2]) {
              u |= 1;
              var R = [], S = d[2], A = [];
              if ((A = t.key.exec(S)) !== null)
                for (R.push(A[1]); (S = S.substring(A[0].length)) !== ""; )
                  if ((A = t.key_access.exec(S)) !== null)
                    R.push(A[1]);
                  else if ((A = t.index_access.exec(S)) !== null)
                    R.push(A[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              d[2] = R;
            } else
              u |= 2;
            if (u === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            m.push(
              {
                placeholder: d[0],
                param_no: d[1],
                keys: d[2],
                sign: d[3],
                pad_char: d[4],
                align: d[5],
                width: d[6],
                precision: d[7],
                type: d[8]
              }
            );
          } else
            throw new SyntaxError("[sprintf] unexpected placeholder");
          f = f.substring(d[0].length);
        }
        return s[o] = m;
      }
      e.sprintf = a, e.vsprintf = n, typeof window < "u" && (window.sprintf = a, window.vsprintf = n);
    })();
  }(Oe)), Oe;
}
lt();
var je, vr, ne, gr;
je = {
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
vr = ["(", "?"];
ne = {
  ")": ["("],
  ":": ["?", "?:"]
};
gr = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
function ft(e) {
  for (var t = [], a = [], n, i, s, l; n = e.match(gr); ) {
    for (i = n[0], s = e.substr(0, n.index).trim(), s && t.push(s); l = a.pop(); ) {
      if (ne[i]) {
        if (ne[i][0] === l) {
          i = ne[i][1] || i;
          break;
        }
      } else if (vr.indexOf(l) >= 0 || je[l] < je[i]) {
        a.push(l);
        break;
      }
      t.push(l);
    }
    ne[i] || a.push(i), e = e.substr(n.index + i.length);
  }
  return e = e.trim(), e && t.push(e), t.concat(a.reverse());
}
var dt = {
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
function pt(e, t) {
  var a = [], n, i, s, l, o, f;
  for (n = 0; n < e.length; n++) {
    if (o = e[n], l = dt[o], l) {
      for (i = l.length, s = Array(i); i--; )
        s[i] = a.pop();
      try {
        f = l.apply(null, s);
      } catch (d) {
        return d;
      }
    } else t.hasOwnProperty(o) ? f = t[o] : f = +o;
    a.push(f);
  }
  return a[0];
}
function ht(e) {
  var t = ft(e);
  return function(a) {
    return pt(t, a);
  };
}
function vt(e) {
  var t = ht(e);
  return function(a) {
    return +t({ n: a });
  };
}
var rr = {
  contextDelimiter: "",
  onMissingKey: null
};
function gt(e) {
  var t, a, n;
  for (t = e.split(";"), a = 0; a < t.length; a++)
    if (n = t[a].trim(), n.indexOf("plural=") === 0)
      return n.substr(7);
}
function Ae(e, t) {
  var a;
  this.data = e, this.pluralForms = {}, this.options = {};
  for (a in rr)
    this.options[a] = t !== void 0 && a in t ? t[a] : rr[a];
}
Ae.prototype.getPluralForm = function(e, t) {
  var a = this.pluralForms[e], n, i, s;
  return a || (n = this.data[e][""], s = n["Plural-Forms"] || n["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
  // string property on a key to guarantee this as metadata.
  // @ts-ignore
  n.plural_forms, typeof s != "function" && (i = gt(
    n["Plural-Forms"] || n["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
    // string property on a key to guarantee this as metadata.
    // @ts-ignore
    n.plural_forms
  ), s = vt(i)), a = this.pluralForms[e] = s), a(t);
};
Ae.prototype.dcnpgettext = function(e, t, a, n, i) {
  var s, l, o;
  return i === void 0 ? s = 0 : s = this.getPluralForm(e, i), l = a, t && (l = t + this.options.contextDelimiter + a), o = this.data[e][l], o && o[s] ? o[s] : (this.options.onMissingKey && this.options.onMissingKey(a, e), s === 0 ? a : n);
};
const tr = {
  "": {
    /** @param {number} n */
    plural_forms(e) {
      return e === 1 ? 0 : 1;
    }
  }
}, mt = /^i18n\.(n?gettext|has_translation)(_|$)/, yt = (e, t, a) => {
  const n = new Ae({}), i = /* @__PURE__ */ new Set(), s = () => {
    i.forEach((h) => h());
  }, l = (h) => (i.add(h), () => i.delete(h)), o = (h = "default") => n.data[h], f = (h, y = "default") => {
    n.data[y] = {
      ...n.data[y],
      ...h
    }, n.data[y][""] = {
      ...tr[""],
      ...n.data[y]?.[""]
    }, delete n.pluralForms[y];
  }, d = (h, y) => {
    f(h, y), s();
  }, m = (h, y = "default") => {
    n.data[y] = {
      ...n.data[y],
      ...h,
      // Populate default domain configuration (supported locale date which omits
      // a plural forms expression).
      "": {
        ...tr[""],
        ...n.data[y]?.[""],
        ...h?.[""]
      }
    }, delete n.pluralForms[y], s();
  }, u = (h, y) => {
    n.data = {}, n.pluralForms = {}, d(h, y);
  }, R = (h = "default", y, _, C, P) => (n.data[h] || f(void 0, h), n.dcnpgettext(h, y, _, C, P)), S = (h = "default") => h, A = (h, y) => {
    let _ = R(y, void 0, h);
    return a ? (_ = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext", _, h, y), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext_" + S(y), _, h, y)) : _;
  }, v = (h, y, _) => {
    let C = R(_, y, h);
    return a ? (C = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext_with_context", C, h, y, _), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext_with_context_" + S(_), C, h, y, _)) : C;
  }, H = (h, y, _, C) => {
    let P = R(C, void 0, h, y, _);
    return a ? (P = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext", P, h, y, _, C), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext_" + S(C), P, h, y, _, C)) : P;
  }, $ = (h, y, _, C, P) => {
    let Y = R(P, C, h, y, _);
    return a ? (Y = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext_with_context", Y, h, y, _, C, P), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext_with_context_" + S(P), Y, h, y, _, C, P)) : Y;
  }, j = () => v("ltr", "text direction") === "rtl", V = (h, y, _) => {
    const C = y ? y + "" + h : h;
    let P = !!n.data?.[_ ?? "default"]?.[C];
    return a && (P = /** @type { boolean } */
    /** @type {*} */
    a.applyFilters("i18n.has_translation", P, h, y, _), P = /** @type { boolean } */
    /** @type {*} */
    a.applyFilters("i18n.has_translation_" + S(_), P, h, y, _)), P;
  };
  if (a) {
    const h = (y) => {
      mt.test(y) && s();
    };
    a.addAction("hookAdded", "core/i18n", h), a.addAction("hookRemoved", "core/i18n", h);
  }
  return {
    getLocaleData: o,
    setLocaleData: d,
    addLocaleData: m,
    resetLocaleData: u,
    subscribe: l,
    __: A,
    _x: v,
    _n: H,
    _nx: $,
    isRTL: j,
    hasTranslation: V
  };
};
function mr(e) {
  return typeof e != "string" || e === "" ? (console.error("The namespace must be a non-empty string."), !1) : /^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) ? !0 : (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1);
}
function Pe(e) {
  return typeof e != "string" || e === "" ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."), !1) : /^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) ? !0 : (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1);
}
function nr(e, t) {
  return function(n, i, s, l = 10) {
    const o = e[t];
    if (!Pe(n) || !mr(i))
      return;
    if (typeof s != "function") {
      console.error("The hook callback must be a function.");
      return;
    }
    if (typeof l != "number") {
      console.error("If specified, the hook priority must be a number.");
      return;
    }
    const f = {
      callback: s,
      priority: l,
      namespace: i
    };
    if (o[n]) {
      const d = o[n].handlers;
      let m;
      for (m = d.length; m > 0 && !(l >= d[m - 1].priority); m--)
        ;
      m === d.length ? d[m] = f : d.splice(m, 0, f), o.__current.forEach((u) => {
        u.name === n && u.currentIndex >= m && u.currentIndex++;
      });
    } else
      o[n] = {
        handlers: [f],
        runs: 0
      };
    n !== "hookAdded" && e.doAction("hookAdded", n, i, s, l);
  };
}
function he(e, t, a = !1) {
  return function(i, s) {
    const l = e[t];
    if (!Pe(i) || !a && !mr(s))
      return;
    if (!l[i])
      return 0;
    let o = 0;
    if (a)
      o = l[i].handlers.length, l[i] = {
        runs: l[i].runs,
        handlers: []
      };
    else {
      const f = l[i].handlers;
      for (let d = f.length - 1; d >= 0; d--)
        f[d].namespace === s && (f.splice(d, 1), o++, l.__current.forEach((m) => {
          m.name === i && m.currentIndex >= d && m.currentIndex--;
        }));
    }
    return i !== "hookRemoved" && e.doAction("hookRemoved", i, s), o;
  };
}
function ar(e, t) {
  return function(n, i) {
    const s = e[t];
    return typeof i < "u" ? n in s && s[n].handlers.some((l) => l.namespace === i) : n in s;
  };
}
function ve(e, t, a, n) {
  return function(s, ...l) {
    const o = e[t];
    o[s] || (o[s] = {
      handlers: [],
      runs: 0
    }), o[s].runs++;
    const f = o[s].handlers;
    if (process.env.NODE_ENV !== "production" && s !== "hookAdded" && o.all && f.push(...o.all.handlers), !f || !f.length)
      return a ? l[0] : void 0;
    const d = {
      name: s,
      currentIndex: 0
    };
    async function m() {
      try {
        o.__current.add(d);
        let R = a ? l[0] : void 0;
        for (; d.currentIndex < f.length; )
          R = await f[d.currentIndex].callback.apply(null, l), a && (l[0] = R), d.currentIndex++;
        return a ? R : void 0;
      } finally {
        o.__current.delete(d);
      }
    }
    function u() {
      try {
        o.__current.add(d);
        let R = a ? l[0] : void 0;
        for (; d.currentIndex < f.length; )
          R = f[d.currentIndex].callback.apply(null, l), a && (l[0] = R), d.currentIndex++;
        return a ? R : void 0;
      } finally {
        o.__current.delete(d);
      }
    }
    return (n ? m : u)();
  };
}
function ir(e, t) {
  return function() {
    var n;
    const i = e[t];
    return (n = Array.from(i.__current).at(-1)?.name) !== null && n !== void 0 ? n : null;
  };
}
function sr(e, t) {
  return function(n) {
    const i = e[t];
    return typeof n > "u" ? i.__current.size > 0 : Array.from(i.__current).some((s) => s.name === n);
  };
}
function or(e, t) {
  return function(n) {
    const i = e[t];
    if (Pe(n))
      return i[n] && i[n].runs ? i[n].runs : 0;
  };
}
class bt {
  constructor() {
    this.actions = /* @__PURE__ */ Object.create(null), this.actions.__current = /* @__PURE__ */ new Set(), this.filters = /* @__PURE__ */ Object.create(null), this.filters.__current = /* @__PURE__ */ new Set(), this.addAction = nr(this, "actions"), this.addFilter = nr(this, "filters"), this.removeAction = he(this, "actions"), this.removeFilter = he(this, "filters"), this.hasAction = ar(this, "actions"), this.hasFilter = ar(this, "filters"), this.removeAllActions = he(this, "actions", !0), this.removeAllFilters = he(this, "filters", !0), this.doAction = ve(this, "actions", !1, !1), this.doActionAsync = ve(this, "actions", !1, !0), this.applyFilters = ve(this, "filters", !0, !1), this.applyFiltersAsync = ve(this, "filters", !0, !0), this.currentAction = ir(this, "actions"), this.currentFilter = ir(this, "filters"), this.doingAction = sr(this, "actions"), this.doingFilter = sr(this, "filters"), this.didAction = or(this, "actions"), this.didFilter = or(this, "filters");
  }
}
function _t() {
  return new bt();
}
const yr = _t(), {
  addAction: Kt,
  addFilter: Xt,
  removeAction: Gt,
  removeFilter: Bt,
  hasAction: Qt,
  hasFilter: Zt,
  removeAllActions: en,
  removeAllFilters: rn,
  doAction: tn,
  doActionAsync: nn,
  applyFilters: an,
  applyFiltersAsync: sn,
  currentAction: on,
  currentFilter: cn,
  doingAction: un,
  doingFilter: ln,
  didAction: fn,
  didFilter: dn,
  actions: pn,
  filters: hn
} = yr, I = yt(void 0, void 0, yr);
I.getLocaleData.bind(I);
I.setLocaleData.bind(I);
I.resetLocaleData.bind(I);
I.subscribe.bind(I);
const ge = I.__.bind(I);
I._x.bind(I);
I._n.bind(I);
I._nx.bind(I);
I.isRTL.bind(I);
I.hasTranslation.bind(I);
function wt(e) {
  const t = (a, n) => {
    const {
      headers: i = {}
    } = a;
    for (const s in i)
      if (s.toLowerCase() === "x-wp-nonce" && i[s] === t.nonce)
        return n(a);
    return n({
      ...a,
      headers: {
        ...i,
        "X-WP-Nonce": t.nonce
      }
    });
  };
  return t.nonce = e, t;
}
const br = (e, t) => {
  let a = e.path, n, i;
  return typeof e.namespace == "string" && typeof e.endpoint == "string" && (n = e.namespace.replace(/^\/|\/$/g, ""), i = e.endpoint.replace(/^\//, ""), i ? a = n + "/" + i : a = n), delete e.namespace, delete e.endpoint, t({
    ...e,
    path: a
  });
}, Et = (e) => (t, a) => br(t, (n) => {
  let i = n.url, s = n.path, l;
  return typeof s == "string" && (l = e, e.indexOf("?") !== -1 && (s = s.replace("?", "&")), s = s.replace(/^\//, ""), typeof l == "string" && l.indexOf("?") !== -1 && (s = s.replace("?", "&")), i = l + s), a({
    ...n,
    url: i
  });
});
function xt(e) {
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
    let [i, s] = n;
    if (Array.isArray(s) || s && s.constructor === Object) {
      const o = Object.entries(s).reverse();
      for (const [f, d] of o)
        a.unshift([`${i}[${f}]`, d]);
    } else s !== void 0 && (s === null && (s = ""), t += "&" + [i, s].map(encodeURIComponent).join("="));
  }
  return t.substr(1);
}
function Rt(e) {
  const t = /^\S+?(#[^\s\?]*)/.exec(e);
  if (t)
    return t[1];
}
function St(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Tt(e, t, a) {
  const n = t.length, i = n - 1;
  for (let s = 0; s < n; s++) {
    let l = t[s];
    !l && Array.isArray(e) && (l = e.length.toString()), l = ["__proto__", "constructor", "prototype"].includes(l) ? l.toUpperCase() : l;
    const o = !isNaN(Number(t[s + 1]));
    e[l] = s === i ? (
      // If at end of path, assign the intended value.
      a
    ) : (
      // Otherwise, advance to the next object in the path, creating
      // it if it does not yet exist.
      e[l] || (o ? [] : {})
    ), Array.isArray(e[l]) && !o && (e[l] = {
      ...e[l]
    }), e = e[l];
  }
}
function me(e) {
  return (xt(e) || "").replace(/\+/g, "%20").split("&").reduce((t, a) => {
    const [n, i = ""] = a.split("=").filter(Boolean).map(St);
    if (n) {
      const s = n.replace(/\]/g, "").split("[");
      Tt(t, s, i);
    }
    return t;
  }, /* @__PURE__ */ Object.create(null));
}
function B(e = "", t) {
  if (!t || !Object.keys(t).length)
    return e;
  const a = Rt(e) || "";
  let n = e.replace(a, "");
  const i = e.indexOf("?");
  return i !== -1 && (t = Object.assign(me(e), t), n = n.substr(0, i)), n + "?" + _r(t) + a;
}
function Ce(e, t) {
  return me(e)[t];
}
function cr(e, t) {
  return Ce(e, t) !== void 0;
}
function ur(e, ...t) {
  const a = e.replace(/^[^#]*/, "");
  e = e.replace(/#.*/, "");
  const n = e.indexOf("?");
  if (n === -1)
    return e + a;
  const i = me(e), s = e.substr(0, n);
  t.forEach((f) => delete i[f]);
  const l = _r(i);
  return (l ? s + "?" + l : s) + a;
}
function lr(e) {
  const t = e.split("?"), a = t[1], n = t[0];
  return a ? n + "?" + a.split("&").map((i) => i.split("=")).map((i) => i.map(decodeURIComponent)).sort((i, s) => i[0].localeCompare(s[0])).map((i) => i.map(encodeURIComponent)).map((i) => i.join("=")).join("&") : n;
}
function Ot(e) {
  const t = Object.fromEntries(Object.entries(e).map(([a, n]) => [lr(a), n]));
  return (a, n) => {
    const {
      parse: i = !0
    } = a;
    let s = a.path;
    if (!s && a.url) {
      const {
        rest_route: f,
        ...d
      } = me(a.url);
      typeof f == "string" && (s = B(f, d));
    }
    if (typeof s != "string")
      return n(a);
    const l = a.method || "GET", o = lr(s);
    if (l === "GET" && t[o]) {
      const f = t[o];
      return delete t[o], fr(f, !!i);
    } else if (l === "OPTIONS" && t[l] && t[l][o]) {
      const f = t[l][o];
      return delete t[l][o], fr(f, !!i);
    }
    return n(a);
  };
}
function fr(e, t) {
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
      a.toLowerCase() === "link" && (e.headers[a] = n.replace(/<([^>]+)>/, (i, s) => `<${encodeURI(s)}>`));
    }), Promise.resolve(t ? e.body : new window.Response(JSON.stringify(e.body), {
      status: 200,
      statusText: "OK",
      headers: e.headers
    }));
  }
}
const jt = ({
  path: e,
  url: t,
  ...a
}, n) => ({
  ...a,
  url: t && B(t, n),
  path: e && B(e, n)
}), dr = (e) => e.json ? e.json() : Promise.reject(e), Ct = (e) => {
  if (!e)
    return {};
  const t = e.match(/<([^>]+)>; rel="next"/);
  return t ? {
    next: t[1]
  } : {};
}, pr = (e) => {
  const {
    next: t
  } = Ct(e.headers.get("link"));
  return t;
}, At = (e) => {
  const t = !!e.path && e.path.indexOf("per_page=-1") !== -1, a = !!e.url && e.url.indexOf("per_page=-1") !== -1;
  return t || a;
}, wr = async (e, t) => {
  if (e.parse === !1 || !At(e))
    return t(e);
  const a = await N({
    ...jt(e, {
      per_page: 100
    }),
    // Ensure headers are returned for page 1.
    parse: !1
  }), n = await dr(a);
  if (!Array.isArray(n))
    return n;
  let i = pr(a);
  if (!i)
    return n;
  let s = (
    /** @type {any[]} */
    [].concat(n)
  );
  for (; i; ) {
    const l = await N({
      ...e,
      // Ensure the URL for the next page is used instead of any provided path.
      path: void 0,
      url: i,
      // Ensure we still get headers so we can identify the next page.
      parse: !1
    }), o = await dr(l);
    s = s.concat(o), i = pr(l);
  }
  return s;
}, Pt = /* @__PURE__ */ new Set(["PATCH", "PUT", "DELETE"]), Ft = "GET", kt = (e, t) => {
  const {
    method: a = Ft
  } = e;
  return Pt.has(a.toUpperCase()) && (e = {
    ...e,
    headers: {
      ...e.headers,
      "X-HTTP-Method-Override": a,
      "Content-Type": "application/json"
    },
    method: "POST"
  }), t(e);
}, It = (e, t) => (typeof e.url == "string" && !cr(e.url, "_locale") && (e.url = B(e.url, {
  _locale: "user"
})), typeof e.path == "string" && !cr(e.path, "_locale") && (e.path = B(e.path, {
  _locale: "user"
})), t(e)), Dt = (e, t = !0) => t ? e.status === 204 ? null : e.json ? e.json() : Promise.reject(e) : e, $t = (e) => {
  const t = {
    code: "invalid_json",
    message: ge("The response is not a valid JSON response.")
  };
  if (!e || !e.json)
    throw t;
  return e.json().catch(() => {
    throw t;
  });
}, Er = (e, t = !0) => Promise.resolve(Dt(e, t)).catch((a) => Fe(a, t));
function Fe(e, t = !0) {
  if (!t)
    throw e;
  return $t(e).then((a) => {
    const n = {
      code: "unknown_error",
      message: ge("An unknown error occurred.")
    };
    throw a || n;
  });
}
function Lt(e) {
  const t = !!e.method && e.method === "POST";
  return (!!e.path && e.path.indexOf("/wp/v2/media") !== -1 || !!e.url && e.url.indexOf("/wp/v2/media") !== -1) && t;
}
const Nt = (e, t) => {
  if (!Lt(e))
    return t(e);
  let a = 0;
  const n = 5, i = (s) => (a++, t({
    path: `/wp/v2/media/${s}/post-process`,
    method: "POST",
    data: {
      action: "create-image-subsizes"
    },
    parse: !1
  }).catch(() => a < n ? i(s) : (t({
    path: `/wp/v2/media/${s}?force=true`,
    method: "DELETE"
  }), Promise.reject())));
  return t({
    ...e,
    parse: !1
  }).catch((s) => {
    if (!s.headers)
      return Promise.reject(s);
    const l = s.headers.get("x-wp-upload-attachment-id");
    return s.status >= 500 && s.status < 600 && l ? i(l).catch(() => e.parse !== !1 ? Promise.reject({
      code: "post_process",
      message: ge("Media upload failed. If this is a photo or a large image, please scale it down and try again.")
    }) : Promise.reject(s)) : Fe(s, e.parse);
  }).then((s) => Er(s, e.parse));
}, Mt = (e) => (t, a) => {
  if (typeof t.url == "string") {
    const n = Ce(t.url, "wp_theme_preview");
    n === void 0 ? t.url = B(t.url, {
      wp_theme_preview: e
    }) : n === "" && (t.url = ur(t.url, "wp_theme_preview"));
  }
  if (typeof t.path == "string") {
    const n = Ce(t.path, "wp_theme_preview");
    n === void 0 ? t.path = B(t.path, {
      wp_theme_preview: e
    }) : n === "" && (t.path = ur(t.path, "wp_theme_preview"));
  }
  return a(t);
}, Ut = {
  // The backend uses the Accept header as a condition for considering an
  // incoming request as a REST request.
  //
  // See: https://core.trac.wordpress.org/ticket/44534
  Accept: "application/json, */*;q=0.1"
}, Ht = {
  credentials: "include"
}, xr = [It, br, kt, wr];
function Wt(e) {
  xr.unshift(e);
}
const Rr = (e) => {
  if (e.status >= 200 && e.status < 300)
    return e;
  throw e;
}, Yt = (e) => {
  const {
    url: t,
    path: a,
    data: n,
    parse: i = !0,
    ...s
  } = e;
  let {
    body: l,
    headers: o
  } = e;
  return o = {
    ...Ut,
    ...o
  }, n && (l = JSON.stringify(n), o["Content-Type"] = "application/json"), window.fetch(
    // Fall back to explicitly passing `window.location` which is the behavior if `undefined` is passed.
    t || a || window.location.href,
    {
      ...Ht,
      ...s,
      body: l,
      headers: o
    }
  ).then((d) => Promise.resolve(d).then(Rr).catch((m) => Fe(m, i)).then((m) => Er(m, i)), (d) => {
    throw d && d.name === "AbortError" ? d : {
      code: "fetch_error",
      message: ge("You are probably offline.")
    };
  });
};
let Sr = Yt;
function qt(e) {
  Sr = e;
}
function N(e) {
  return xr.reduceRight((a, n) => (i) => n(i, a), Sr)(e).catch((a) => a.code !== "rest_cookie_invalid_nonce" ? Promise.reject(a) : window.fetch(N.nonceEndpoint).then(Rr).then((n) => n.text()).then((n) => (N.nonceMiddleware.nonce = n, N(e))));
}
N.use = Wt;
N.setFetchHandler = qt;
N.createNonceMiddleware = wt;
N.createPreloadingMiddleware = Ot;
N.createRootURLMiddleware = Et;
N.fetchAllMiddleware = wr;
N.mediaUploadMiddleware = Nt;
N.createThemePreviewMiddleware = Mt;
const vn = (e, t) => {
  const a = e.endsWith("/") ? `${e}render` : `${e}/render`;
  return {
    getSnippets: () => N({
      path: e,
      headers: { "X-WP-Nonce": t }
    }),
    renderSnippet: (n, i) => N({
      path: a,
      method: "POST",
      headers: { "X-WP-Nonce": t },
      data: { key: n, data: i }
    })
  };
}, gn = (e) => ({
  getSnippets: () => fetch(e).then((t) => t.json()),
  renderSnippet: (t, a) => fetch(e.endsWith("/") ? `${e}render` : `${e}/render`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: t, data: a })
  }).then((n) => n.json())
});
export {
  Jt as SnippetsApp,
  gn as createChromeApi,
  vn as createWordpressApi
};
