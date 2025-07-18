import fr, { useState as V, useEffect as ze } from "react";
var ae = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Qr() {
  if (Ke) return B;
  Ke = 1;
  var e = fr, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, h, d) {
    var y, u = {}, _ = null, R = null;
    d !== void 0 && (_ = "" + d), h.key !== void 0 && (_ = "" + h.key), h.ref !== void 0 && (R = h.ref);
    for (y in h) n.call(h, y) && !i.hasOwnProperty(y) && (u[y] = h[y]);
    if (f && f.defaultProps) for (y in h = f.defaultProps, h) u[y] === void 0 && (u[y] = h[y]);
    return { $$typeof: t, type: f, key: _, ref: R, props: u, _owner: s.current };
  }
  return B.Fragment = a, B.jsx = l, B.jsxs = l, B;
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
var Xe;
function Zr() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = fr, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), S = Symbol.iterator, m = "@@iterator";
    function U(r) {
      if (r === null || typeof r != "object")
        return null;
      var o = S && r[S] || r[m];
      return typeof o == "function" ? o : null;
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(r) {
      {
        for (var o = arguments.length, p = new Array(o > 1 ? o - 1 : 0), g = 1; g < o; g++)
          p[g - 1] = arguments[g];
        H("error", r, p);
      }
    }
    function H(r, o, p) {
      {
        var g = L.ReactDebugCurrentFrame, E = g.getStackAddendum();
        E !== "" && (o += "%s", p = p.concat([E]));
        var T = p.map(function(w) {
          return String(w);
        });
        T.unshift("Warning: " + o), Function.prototype.apply.call(console[r], console, T);
      }
    }
    var c = !1, v = !1, x = !1, C = !1, F = !1, W;
    W = Symbol.for("react.module.reference");
    function Rr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === n || r === i || F || r === s || r === d || r === y || C || r === R || c || v || x || typeof r == "object" && r !== null && (r.$$typeof === _ || r.$$typeof === u || r.$$typeof === l || r.$$typeof === f || r.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === W || r.getModuleId !== void 0));
    }
    function xr(r, o, p) {
      var g = r.displayName;
      if (g)
        return g;
      var E = o.displayName || o.name || "";
      return E !== "" ? p + "(" + E + ")" : p;
    }
    function Re(r) {
      return r.displayName || "Context";
    }
    function N(r) {
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
        case d:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case f:
            var o = r;
            return Re(o) + ".Consumer";
          case l:
            var p = r;
            return Re(p._context) + ".Provider";
          case h:
            return xr(r, r.render, "ForwardRef");
          case u:
            var g = r.displayName || null;
            return g !== null ? g : N(r.type) || "Memo";
          case _: {
            var E = r, T = E._payload, w = E._init;
            try {
              return N(w(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, X = 0, xe, Te, Se, Oe, Ae, Pe, je;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Tr() {
      {
        if (X === 0) {
          xe = console.log, Te = console.info, Se = console.warn, Oe = console.error, Ae = console.group, Pe = console.groupCollapsed, je = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
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
    function Sr() {
      {
        if (X--, X === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, r, {
              value: xe
            }),
            info: q({}, r, {
              value: Te
            }),
            warn: q({}, r, {
              value: Se
            }),
            error: q({}, r, {
              value: Oe
            }),
            group: q({}, r, {
              value: Ae
            }),
            groupCollapsed: q({}, r, {
              value: Pe
            }),
            groupEnd: q({}, r, {
              value: je
            })
          });
        }
        X < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = L.ReactCurrentDispatcher, le;
    function ee(r, o, p) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (E) {
            var g = E.stack.trim().match(/\n( *(at )?)/);
            le = g && g[1] || "";
          }
        return `
` + le + r;
      }
    }
    var fe = !1, re;
    {
      var Or = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Or();
    }
    function Fe(r, o) {
      if (!r || fe)
        return "";
      {
        var p = re.get(r);
        if (p !== void 0)
          return p;
      }
      var g;
      fe = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = ce.current, ce.current = null, Tr();
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
            } catch (M) {
              g = M;
            }
            Reflect.construct(r, [], w);
          } else {
            try {
              w.call();
            } catch (M) {
              g = M;
            }
            r.call(w.prototype);
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
          for (var b = M.stack.split(`
`), k = g.stack.split(`
`), A = b.length - 1, P = k.length - 1; A >= 1 && P >= 0 && b[A] !== k[P]; )
            P--;
          for (; A >= 1 && P >= 0; A--, P--)
            if (b[A] !== k[P]) {
              if (A !== 1 || P !== 1)
                do
                  if (A--, P--, P < 0 || b[A] !== k[P]) {
                    var $ = `
` + b[A].replace(" at new ", " at ");
                    return r.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", r.displayName)), typeof r == "function" && re.set(r, $), $;
                  }
                while (A >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        fe = !1, ce.current = T, Sr(), Error.prepareStackTrace = E;
      }
      var K = r ? r.displayName || r.name : "", Y = K ? ee(K) : "";
      return typeof r == "function" && re.set(r, Y), Y;
    }
    function Ar(r, o, p) {
      return Fe(r, !1);
    }
    function Pr(r) {
      var o = r.prototype;
      return !!(o && o.isReactComponent);
    }
    function te(r, o, p) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Fe(r, Pr(r));
      if (typeof r == "string")
        return ee(r);
      switch (r) {
        case d:
          return ee("Suspense");
        case y:
          return ee("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case h:
            return Ar(r.render);
          case u:
            return te(r.type, o, p);
          case _: {
            var g = r, E = g._payload, T = g._init;
            try {
              return te(T(E), o, p);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, ke = {}, De = L.ReactDebugCurrentFrame;
    function ne(r) {
      if (r) {
        var o = r._owner, p = te(r.type, r._source, o ? o.type : null);
        De.setExtraStackFrame(p);
      } else
        De.setExtraStackFrame(null);
    }
    function jr(r, o, p, g, E) {
      {
        var T = Function.call.bind(G);
        for (var w in r)
          if (T(r, w)) {
            var b = void 0;
            try {
              if (typeof r[w] != "function") {
                var k = Error((g || "React class") + ": " + p + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              b = r[w](o, w, g, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              b = A;
            }
            b && !(b instanceof Error) && (ne(E), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", p, w, typeof b), ne(null)), b instanceof Error && !(b.message in ke) && (ke[b.message] = !0, ne(E), O("Failed %s type: %s", p, b.message), ne(null));
          }
      }
    }
    var Cr = Array.isArray;
    function de(r) {
      return Cr(r);
    }
    function Fr(r) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, p = o && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return p;
      }
    }
    function kr(r) {
      try {
        return Ie(r), !1;
      } catch {
        return !0;
      }
    }
    function Ie(r) {
      return "" + r;
    }
    function Le(r) {
      if (kr(r))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fr(r)), Ie(r);
    }
    var Me = L.ReactCurrentOwner, Dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, Ue;
    function Ir(r) {
      if (G.call(r, "ref")) {
        var o = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Lr(r) {
      if (G.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Mr(r, o) {
      typeof r.ref == "string" && Me.current;
    }
    function $r(r, o) {
      {
        var p = function() {
          $e || ($e = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        p.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function Ur(r, o) {
      {
        var p = function() {
          Ue || (Ue = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        p.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var Hr = function(r, o, p, g, E, T, w) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: o,
        ref: p,
        props: w,
        // Record the component responsible for creating this element.
        _owner: T
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
        value: E
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Nr(r, o, p, g, E) {
      {
        var T, w = {}, b = null, k = null;
        p !== void 0 && (Le(p), b = "" + p), Lr(o) && (Le(o.key), b = "" + o.key), Ir(o) && (k = o.ref, Mr(o, E));
        for (T in o)
          G.call(o, T) && !Dr.hasOwnProperty(T) && (w[T] = o[T]);
        if (r && r.defaultProps) {
          var A = r.defaultProps;
          for (T in A)
            w[T] === void 0 && (w[T] = A[T]);
        }
        if (b || k) {
          var P = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          b && $r(w, P), k && Ur(w, P);
        }
        return Hr(r, b, k, E, g, Me.current, w);
      }
    }
    var pe = L.ReactCurrentOwner, He = L.ReactDebugCurrentFrame;
    function z(r) {
      if (r) {
        var o = r._owner, p = te(r.type, r._source, o ? o.type : null);
        He.setExtraStackFrame(p);
      } else
        He.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function ve(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Ne() {
      {
        if (pe.current) {
          var r = N(pe.current.type);
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
    var We = {};
    function qr(r) {
      {
        var o = Ne();
        if (!o) {
          var p = typeof r == "string" ? r : r.displayName || r.name;
          p && (o = `

Check the top-level render call using <` + p + ">.");
        }
        return o;
      }
    }
    function qe(r, o) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var p = qr(o);
        if (We[p])
          return;
        We[p] = !0;
        var g = "";
        r && r._owner && r._owner !== pe.current && (g = " It was passed a child from " + N(r._owner.type) + "."), z(r), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, g), z(null);
      }
    }
    function Ye(r, o) {
      {
        if (typeof r != "object")
          return;
        if (de(r))
          for (var p = 0; p < r.length; p++) {
            var g = r[p];
            ve(g) && qe(g, o);
          }
        else if (ve(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var E = U(r);
          if (typeof E == "function" && E !== r.entries)
            for (var T = E.call(r), w; !(w = T.next()).done; )
              ve(w.value) && qe(w.value, o);
        }
      }
    }
    function Yr(r) {
      {
        var o = r.type;
        if (o == null || typeof o == "string")
          return;
        var p;
        if (typeof o == "function")
          p = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === u))
          p = o.propTypes;
        else
          return;
        if (p) {
          var g = N(o);
          jr(p, r.props, "prop", g, r);
        } else if (o.PropTypes !== void 0 && !he) {
          he = !0;
          var E = N(o);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vr(r) {
      {
        for (var o = Object.keys(r.props), p = 0; p < o.length; p++) {
          var g = o[p];
          if (g !== "children" && g !== "key") {
            z(r), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), z(null);
            break;
          }
        }
        r.ref !== null && (z(r), O("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    var Ve = {};
    function Je(r, o, p, g, E, T) {
      {
        var w = Rr(r);
        if (!w) {
          var b = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = Wr();
          k ? b += k : b += Ne();
          var A;
          r === null ? A = "null" : de(r) ? A = "array" : r !== void 0 && r.$$typeof === t ? (A = "<" + (N(r.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : A = typeof r, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, b);
        }
        var P = Nr(r, o, p, E, T);
        if (P == null)
          return P;
        if (w) {
          var $ = o.children;
          if ($ !== void 0)
            if (g)
              if (de($)) {
                for (var K = 0; K < $.length; K++)
                  Ye($[K], r);
                Object.freeze && Object.freeze($);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye($, r);
        }
        if (G.call(o, "key")) {
          var Y = N(r), M = Object.keys(o).filter(function(Br) {
            return Br !== "key";
          }), ye = M.length > 0 ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[Y + ye]) {
            var Gr = M.length > 0 ? "{" + M.join(": ..., ") + ": ...}" : "{}";
            O(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ye, Y, Gr, Y), Ve[Y + ye] = !0;
          }
        }
        return r === n ? Vr(P) : Yr(P), P;
      }
    }
    function Jr(r, o, p) {
      return Je(r, o, p, !0);
    }
    function zr(r, o, p) {
      return Je(r, o, p, !1);
    }
    var Kr = zr, Xr = Jr;
    Q.Fragment = n, Q.jsx = Kr, Q.jsxs = Xr;
  }()), Q;
}
var Ge;
function et() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? ae.exports = Qr() : ae.exports = Zr()), ae.exports;
}
var D = et();
const Mt = ({ api: e }) => {
  const [t, a] = V({}), [n, s] = V(""), [i, l] = V([]), [f, h] = V({}), [d, y] = V(""), [u, _] = V(""), [R, S] = V(!1);
  ze(() => {
    e.getSnippets().then(a).catch((c) => _(c.message || "Error fetching snippets"));
  }, [e]), ze(() => {
    n && t[n] && (l(t[n].fields || []), h({}), y(""), _(""), S(!1), (!t[n].fields || t[n].fields.length === 0) && e.renderSnippet(n, {}).then((c) => y(c.output)).catch((c) => _(c.message || "Error rendering snippet")));
  }, [n, t, e]);
  const m = (c, v) => {
    h({ ...f, [c]: v });
  }, U = (c) => {
    c.preventDefault(), _(""), y(""), S(!1), e.renderSnippet(n, f).then((v) => y(v.output)).catch((v) => _(v.message || "Error rendering snippet"));
  }, L = () => {
    d && navigator.clipboard.writeText(d).then(() => {
      S(!0), setTimeout(() => S(!1), 1500);
    });
  }, O = i.every(
    (c) => !c.required || f[c.name] && f[c.name].toString().trim() !== ""
  ), H = Object.keys(t).map((c) => ({
    value: c,
    label: t[c].meta && t[c].meta.title ? t[c].meta.title : c
  }));
  return /* @__PURE__ */ D.jsxs("div", { children: [
    /* @__PURE__ */ D.jsxs(
      "select",
      {
        value: n,
        onChange: (c) => s(c.target.value),
        style: { maxWidth: 400 },
        children: [
          /* @__PURE__ */ D.jsx("option", { value: "", children: "Select a snippet" }),
          H.map((c) => /* @__PURE__ */ D.jsx("option", { value: c.value, children: c.label }, c.value))
        ]
      }
    ),
    i.length > 0 && /* @__PURE__ */ D.jsxs("form", { onSubmit: U, className: "snippetsapp-form", children: [
      i.map((c) => /* @__PURE__ */ D.jsxs("div", { className: "snippetsapp-field", children: [
        /* @__PURE__ */ D.jsx(
          "label",
          {
            htmlFor: `snippetsapp-field-${c.name}`,
            className: "snippetsapp-label",
            children: c.label || c.name
          }
        ),
        /* @__PURE__ */ D.jsx(
          "input",
          {
            id: `snippetsapp-field-${c.name}`,
            type: "text",
            value: f[c.name] || "",
            onChange: (v) => m(c.name, v.target.value),
            required: c.required,
            className: "snippetsapp-input regular-text"
          }
        )
      ] }, c.name)),
      /* @__PURE__ */ D.jsx("div", { className: "snippetsapp-form-buttons", children: /* @__PURE__ */ D.jsx(
        "button",
        {
          type: "submit",
          className: "button button-primary snippetsapp-submit-button",
          disabled: !O,
          children: "Generate"
        }
      ) })
    ] }),
    d && /* @__PURE__ */ D.jsx("div", { className: "snippetsapp-output-container", children: /* @__PURE__ */ D.jsxs("div", { className: "snippetsapp-output-content", children: [
      /* @__PURE__ */ D.jsx(
        "div",
        {
          className: "snippetsapp-output-text",
          dangerouslySetInnerHTML: { __html: d }
        }
      ),
      /* @__PURE__ */ D.jsx(
        "button",
        {
          type: "button",
          onClick: L,
          className: "snippetsapp-copy-button",
          children: R ? "Copied!" : "Copy"
        }
      )
    ] }) }),
    u && /* @__PURE__ */ D.jsx("div", { className: "snippetsapp-error-message", children: u })
  ] });
};
var ge = {}, Be;
function rt() {
  return Be || (Be = 1, function(e) {
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
      function a(f) {
        return s(l(f), arguments);
      }
      function n(f, h) {
        return a.apply(null, [f].concat(h || []));
      }
      function s(f, h) {
        var d = 1, y = f.length, u, _ = "", R, S, m, U, L, O, H, c;
        for (R = 0; R < y; R++)
          if (typeof f[R] == "string")
            _ += f[R];
          else if (typeof f[R] == "object") {
            if (m = f[R], m.keys)
              for (u = h[d], S = 0; S < m.keys.length; S++) {
                if (u == null)
                  throw new Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', m.keys[S], m.keys[S - 1]));
                u = u[m.keys[S]];
              }
            else m.param_no ? u = h[m.param_no] : u = h[d++];
            if (t.not_type.test(m.type) && t.not_primitive.test(m.type) && u instanceof Function && (u = u()), t.numeric_arg.test(m.type) && typeof u != "number" && isNaN(u))
              throw new TypeError(a("[sprintf] expecting number but found %T", u));
            switch (t.number.test(m.type) && (H = u >= 0), m.type) {
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
            t.json.test(m.type) ? _ += u : (t.number.test(m.type) && (!H || m.sign) ? (c = H ? "+" : "-", u = u.toString().replace(t.sign, "")) : c = "", L = m.pad_char ? m.pad_char === "0" ? "0" : m.pad_char.charAt(1) : " ", O = m.width - (c + u).length, U = m.width && O > 0 ? L.repeat(O) : "", _ += m.align ? c + u + U : L === "0" ? c + U + u : U + c + u);
          }
        return _;
      }
      var i = /* @__PURE__ */ Object.create(null);
      function l(f) {
        if (i[f])
          return i[f];
        for (var h = f, d, y = [], u = 0; h; ) {
          if ((d = t.text.exec(h)) !== null)
            y.push(d[0]);
          else if ((d = t.modulo.exec(h)) !== null)
            y.push("%");
          else if ((d = t.placeholder.exec(h)) !== null) {
            if (d[2]) {
              u |= 1;
              var _ = [], R = d[2], S = [];
              if ((S = t.key.exec(R)) !== null)
                for (_.push(S[1]); (R = R.substring(S[0].length)) !== ""; )
                  if ((S = t.key_access.exec(R)) !== null)
                    _.push(S[1]);
                  else if ((S = t.index_access.exec(R)) !== null)
                    _.push(S[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              d[2] = _;
            } else
              u |= 2;
            if (u === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            y.push(
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
          h = h.substring(d[0].length);
        }
        return i[f] = y;
      }
      e.sprintf = a, e.vsprintf = n, typeof window < "u" && (window.sprintf = a, window.vsprintf = n);
    })();
  }(ge)), ge;
}
rt();
var me, dr, Z, pr;
me = {
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
dr = ["(", "?"];
Z = {
  ")": ["("],
  ":": ["?", "?:"]
};
pr = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
function tt(e) {
  for (var t = [], a = [], n, s, i, l; n = e.match(pr); ) {
    for (s = n[0], i = e.substr(0, n.index).trim(), i && t.push(i); l = a.pop(); ) {
      if (Z[s]) {
        if (Z[s][0] === l) {
          s = Z[s][1] || s;
          break;
        }
      } else if (dr.indexOf(l) >= 0 || me[l] < me[s]) {
        a.push(l);
        break;
      }
      t.push(l);
    }
    Z[s] || a.push(s), e = e.substr(n.index + s.length);
  }
  return e = e.trim(), e && t.push(e), t.concat(a.reverse());
}
var nt = {
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
function at(e, t) {
  var a = [], n, s, i, l, f, h;
  for (n = 0; n < e.length; n++) {
    if (f = e[n], l = nt[f], l) {
      for (s = l.length, i = Array(s); s--; )
        i[s] = a.pop();
      try {
        h = l.apply(null, i);
      } catch (d) {
        return d;
      }
    } else t.hasOwnProperty(f) ? h = t[f] : h = +f;
    a.push(h);
  }
  return a[0];
}
function it(e) {
  var t = tt(e);
  return function(a) {
    return at(t, a);
  };
}
function st(e) {
  var t = it(e);
  return function(a) {
    return +t({ n: a });
  };
}
var Qe = {
  contextDelimiter: "",
  onMissingKey: null
};
function ot(e) {
  var t, a, n;
  for (t = e.split(";"), a = 0; a < t.length; a++)
    if (n = t[a].trim(), n.indexOf("plural=") === 0)
      return n.substr(7);
}
function be(e, t) {
  var a;
  this.data = e, this.pluralForms = {}, this.options = {};
  for (a in Qe)
    this.options[a] = t !== void 0 && a in t ? t[a] : Qe[a];
}
be.prototype.getPluralForm = function(e, t) {
  var a = this.pluralForms[e], n, s, i;
  return a || (n = this.data[e][""], i = n["Plural-Forms"] || n["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
  // string property on a key to guarantee this as metadata.
  // @ts-ignore
  n.plural_forms, typeof i != "function" && (s = ot(
    n["Plural-Forms"] || n["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
    // string property on a key to guarantee this as metadata.
    // @ts-ignore
    n.plural_forms
  ), i = st(s)), a = this.pluralForms[e] = i), a(t);
};
be.prototype.dcnpgettext = function(e, t, a, n, s) {
  var i, l, f;
  return s === void 0 ? i = 0 : i = this.getPluralForm(e, s), l = a, t && (l = t + this.options.contextDelimiter + a), f = this.data[e][l], f && f[i] ? f[i] : (this.options.onMissingKey && this.options.onMissingKey(a, e), i === 0 ? a : n);
};
const Ze = {
  "": {
    /** @param {number} n */
    plural_forms(e) {
      return e === 1 ? 0 : 1;
    }
  }
}, ut = /^i18n\.(n?gettext|has_translation)(_|$)/, ct = (e, t, a) => {
  const n = new be({}), s = /* @__PURE__ */ new Set(), i = () => {
    s.forEach((c) => c());
  }, l = (c) => (s.add(c), () => s.delete(c)), f = (c = "default") => n.data[c], h = (c, v = "default") => {
    n.data[v] = {
      ...n.data[v],
      ...c
    }, n.data[v][""] = {
      ...Ze[""],
      ...n.data[v]?.[""]
    }, delete n.pluralForms[v];
  }, d = (c, v) => {
    h(c, v), i();
  }, y = (c, v = "default") => {
    n.data[v] = {
      ...n.data[v],
      ...c,
      // Populate default domain configuration (supported locale date which omits
      // a plural forms expression).
      "": {
        ...Ze[""],
        ...n.data[v]?.[""],
        ...c?.[""]
      }
    }, delete n.pluralForms[v], i();
  }, u = (c, v) => {
    n.data = {}, n.pluralForms = {}, d(c, v);
  }, _ = (c = "default", v, x, C, F) => (n.data[c] || h(void 0, c), n.dcnpgettext(c, v, x, C, F)), R = (c = "default") => c, S = (c, v) => {
    let x = _(v, void 0, c);
    return a ? (x = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext", x, c, v), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext_" + R(v), x, c, v)) : x;
  }, m = (c, v, x) => {
    let C = _(x, v, c);
    return a ? (C = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext_with_context", C, c, v, x), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.gettext_with_context_" + R(x), C, c, v, x)) : C;
  }, U = (c, v, x, C) => {
    let F = _(C, void 0, c, v, x);
    return a ? (F = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext", F, c, v, x, C), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext_" + R(C), F, c, v, x, C)) : F;
  }, L = (c, v, x, C, F) => {
    let W = _(F, C, c, v, x);
    return a ? (W = /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext_with_context", W, c, v, x, C, F), /** @type {string} */
    /** @type {*} */
    a.applyFilters("i18n.ngettext_with_context_" + R(F), W, c, v, x, C, F)) : W;
  }, O = () => m("ltr", "text direction") === "rtl", H = (c, v, x) => {
    const C = v ? v + "" + c : c;
    let F = !!n.data?.[x ?? "default"]?.[C];
    return a && (F = /** @type { boolean } */
    /** @type {*} */
    a.applyFilters("i18n.has_translation", F, c, v, x), F = /** @type { boolean } */
    /** @type {*} */
    a.applyFilters("i18n.has_translation_" + R(x), F, c, v, x)), F;
  };
  if (a) {
    const c = (v) => {
      ut.test(v) && i();
    };
    a.addAction("hookAdded", "core/i18n", c), a.addAction("hookRemoved", "core/i18n", c);
  }
  return {
    getLocaleData: f,
    setLocaleData: d,
    addLocaleData: y,
    resetLocaleData: u,
    subscribe: l,
    __: S,
    _x: m,
    _n: U,
    _nx: L,
    isRTL: O,
    hasTranslation: H
  };
};
function hr(e) {
  return typeof e != "string" || e === "" ? (console.error("The namespace must be a non-empty string."), !1) : /^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) ? !0 : (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1);
}
function we(e) {
  return typeof e != "string" || e === "" ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."), !1) : /^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) ? !0 : (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1);
}
function er(e, t) {
  return function(n, s, i, l = 10) {
    const f = e[t];
    if (!we(n) || !hr(s))
      return;
    if (typeof i != "function") {
      console.error("The hook callback must be a function.");
      return;
    }
    if (typeof l != "number") {
      console.error("If specified, the hook priority must be a number.");
      return;
    }
    const h = {
      callback: i,
      priority: l,
      namespace: s
    };
    if (f[n]) {
      const d = f[n].handlers;
      let y;
      for (y = d.length; y > 0 && !(l >= d[y - 1].priority); y--)
        ;
      y === d.length ? d[y] = h : d.splice(y, 0, h), f.__current.forEach((u) => {
        u.name === n && u.currentIndex >= y && u.currentIndex++;
      });
    } else
      f[n] = {
        handlers: [h],
        runs: 0
      };
    n !== "hookAdded" && e.doAction("hookAdded", n, s, i, l);
  };
}
function ie(e, t, a = !1) {
  return function(s, i) {
    const l = e[t];
    if (!we(s) || !a && !hr(i))
      return;
    if (!l[s])
      return 0;
    let f = 0;
    if (a)
      f = l[s].handlers.length, l[s] = {
        runs: l[s].runs,
        handlers: []
      };
    else {
      const h = l[s].handlers;
      for (let d = h.length - 1; d >= 0; d--)
        h[d].namespace === i && (h.splice(d, 1), f++, l.__current.forEach((y) => {
          y.name === s && y.currentIndex >= d && y.currentIndex--;
        }));
    }
    return s !== "hookRemoved" && e.doAction("hookRemoved", s, i), f;
  };
}
function rr(e, t) {
  return function(n, s) {
    const i = e[t];
    return typeof s < "u" ? n in i && i[n].handlers.some((l) => l.namespace === s) : n in i;
  };
}
function se(e, t, a, n) {
  return function(i, ...l) {
    const f = e[t];
    f[i] || (f[i] = {
      handlers: [],
      runs: 0
    }), f[i].runs++;
    const h = f[i].handlers;
    if (process.env.NODE_ENV !== "production" && i !== "hookAdded" && f.all && h.push(...f.all.handlers), !h || !h.length)
      return a ? l[0] : void 0;
    const d = {
      name: i,
      currentIndex: 0
    };
    async function y() {
      try {
        f.__current.add(d);
        let _ = a ? l[0] : void 0;
        for (; d.currentIndex < h.length; )
          _ = await h[d.currentIndex].callback.apply(null, l), a && (l[0] = _), d.currentIndex++;
        return a ? _ : void 0;
      } finally {
        f.__current.delete(d);
      }
    }
    function u() {
      try {
        f.__current.add(d);
        let _ = a ? l[0] : void 0;
        for (; d.currentIndex < h.length; )
          _ = h[d.currentIndex].callback.apply(null, l), a && (l[0] = _), d.currentIndex++;
        return a ? _ : void 0;
      } finally {
        f.__current.delete(d);
      }
    }
    return (n ? y : u)();
  };
}
function tr(e, t) {
  return function() {
    var n;
    const s = e[t];
    return (n = Array.from(s.__current).at(-1)?.name) !== null && n !== void 0 ? n : null;
  };
}
function nr(e, t) {
  return function(n) {
    const s = e[t];
    return typeof n > "u" ? s.__current.size > 0 : Array.from(s.__current).some((i) => i.name === n);
  };
}
function ar(e, t) {
  return function(n) {
    const s = e[t];
    if (we(n))
      return s[n] && s[n].runs ? s[n].runs : 0;
  };
}
class lt {
  constructor() {
    this.actions = /* @__PURE__ */ Object.create(null), this.actions.__current = /* @__PURE__ */ new Set(), this.filters = /* @__PURE__ */ Object.create(null), this.filters.__current = /* @__PURE__ */ new Set(), this.addAction = er(this, "actions"), this.addFilter = er(this, "filters"), this.removeAction = ie(this, "actions"), this.removeFilter = ie(this, "filters"), this.hasAction = rr(this, "actions"), this.hasFilter = rr(this, "filters"), this.removeAllActions = ie(this, "actions", !0), this.removeAllFilters = ie(this, "filters", !0), this.doAction = se(this, "actions", !1, !1), this.doActionAsync = se(this, "actions", !1, !0), this.applyFilters = se(this, "filters", !0, !1), this.applyFiltersAsync = se(this, "filters", !0, !0), this.currentAction = tr(this, "actions"), this.currentFilter = tr(this, "filters"), this.doingAction = nr(this, "actions"), this.doingFilter = nr(this, "filters"), this.didAction = ar(this, "actions"), this.didFilter = ar(this, "filters");
  }
}
function ft() {
  return new lt();
}
const vr = ft(), {
  addAction: $t,
  addFilter: Ut,
  removeAction: Ht,
  removeFilter: Nt,
  hasAction: Wt,
  hasFilter: qt,
  removeAllActions: Yt,
  removeAllFilters: Vt,
  doAction: Jt,
  doActionAsync: zt,
  applyFilters: Kt,
  applyFiltersAsync: Xt,
  currentAction: Gt,
  currentFilter: Bt,
  doingAction: Qt,
  doingFilter: Zt,
  didAction: en,
  didFilter: rn,
  actions: tn,
  filters: nn
} = vr, j = ct(void 0, void 0, vr);
j.getLocaleData.bind(j);
j.setLocaleData.bind(j);
j.resetLocaleData.bind(j);
j.subscribe.bind(j);
const oe = j.__.bind(j);
j._x.bind(j);
j._n.bind(j);
j._nx.bind(j);
j.isRTL.bind(j);
j.hasTranslation.bind(j);
function dt(e) {
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
const yr = (e, t) => {
  let a = e.path, n, s;
  return typeof e.namespace == "string" && typeof e.endpoint == "string" && (n = e.namespace.replace(/^\/|\/$/g, ""), s = e.endpoint.replace(/^\//, ""), s ? a = n + "/" + s : a = n), delete e.namespace, delete e.endpoint, t({
    ...e,
    path: a
  });
}, pt = (e) => (t, a) => yr(t, (n) => {
  let s = n.url, i = n.path, l;
  return typeof i == "string" && (l = e, e.indexOf("?") !== -1 && (i = i.replace("?", "&")), i = i.replace(/^\//, ""), typeof l == "string" && l.indexOf("?") !== -1 && (i = i.replace("?", "&")), s = l + i), a({
    ...n,
    url: s
  });
});
function ht(e) {
  let t;
  try {
    t = new URL(e, "http://example.com").search.substring(1);
  } catch {
  }
  if (t)
    return t;
}
function gr(e) {
  let t = "";
  const a = Object.entries(e);
  let n;
  for (; n = a.shift(); ) {
    let [s, i] = n;
    if (Array.isArray(i) || i && i.constructor === Object) {
      const f = Object.entries(i).reverse();
      for (const [h, d] of f)
        a.unshift([`${s}[${h}]`, d]);
    } else i !== void 0 && (i === null && (i = ""), t += "&" + [s, i].map(encodeURIComponent).join("="));
  }
  return t.substr(1);
}
function vt(e) {
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
function gt(e, t, a) {
  const n = t.length, s = n - 1;
  for (let i = 0; i < n; i++) {
    let l = t[i];
    !l && Array.isArray(e) && (l = e.length.toString()), l = ["__proto__", "constructor", "prototype"].includes(l) ? l.toUpperCase() : l;
    const f = !isNaN(Number(t[i + 1]));
    e[l] = i === s ? (
      // If at end of path, assign the intended value.
      a
    ) : (
      // Otherwise, advance to the next object in the path, creating
      // it if it does not yet exist.
      e[l] || (f ? [] : {})
    ), Array.isArray(e[l]) && !f && (e[l] = {
      ...e[l]
    }), e = e[l];
  }
}
function ue(e) {
  return (ht(e) || "").replace(/\+/g, "%20").split("&").reduce((t, a) => {
    const [n, s = ""] = a.split("=").filter(Boolean).map(yt);
    if (n) {
      const i = n.replace(/\]/g, "").split("[");
      gt(t, i, s);
    }
    return t;
  }, /* @__PURE__ */ Object.create(null));
}
function J(e = "", t) {
  if (!t || !Object.keys(t).length)
    return e;
  const a = vt(e) || "";
  let n = e.replace(a, "");
  const s = e.indexOf("?");
  return s !== -1 && (t = Object.assign(ue(e), t), n = n.substr(0, s)), n + "?" + gr(t) + a;
}
function _e(e, t) {
  return ue(e)[t];
}
function ir(e, t) {
  return _e(e, t) !== void 0;
}
function sr(e, ...t) {
  const a = e.replace(/^[^#]*/, "");
  e = e.replace(/#.*/, "");
  const n = e.indexOf("?");
  if (n === -1)
    return e + a;
  const s = ue(e), i = e.substr(0, n);
  t.forEach((h) => delete s[h]);
  const l = gr(s);
  return (l ? i + "?" + l : i) + a;
}
function or(e) {
  const t = e.split("?"), a = t[1], n = t[0];
  return a ? n + "?" + a.split("&").map((s) => s.split("=")).map((s) => s.map(decodeURIComponent)).sort((s, i) => s[0].localeCompare(i[0])).map((s) => s.map(encodeURIComponent)).map((s) => s.join("=")).join("&") : n;
}
function mt(e) {
  const t = Object.fromEntries(Object.entries(e).map(([a, n]) => [or(a), n]));
  return (a, n) => {
    const {
      parse: s = !0
    } = a;
    let i = a.path;
    if (!i && a.url) {
      const {
        rest_route: h,
        ...d
      } = ue(a.url);
      typeof h == "string" && (i = J(h, d));
    }
    if (typeof i != "string")
      return n(a);
    const l = a.method || "GET", f = or(i);
    if (l === "GET" && t[f]) {
      const h = t[f];
      return delete t[f], ur(h, !!s);
    } else if (l === "OPTIONS" && t[l] && t[l][f]) {
      const h = t[l][f];
      return delete t[l][f], ur(h, !!s);
    }
    return n(a);
  };
}
function ur(e, t) {
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
const _t = ({
  path: e,
  url: t,
  ...a
}, n) => ({
  ...a,
  url: t && J(t, n),
  path: e && J(e, n)
}), cr = (e) => e.json ? e.json() : Promise.reject(e), bt = (e) => {
  if (!e)
    return {};
  const t = e.match(/<([^>]+)>; rel="next"/);
  return t ? {
    next: t[1]
  } : {};
}, lr = (e) => {
  const {
    next: t
  } = bt(e.headers.get("link"));
  return t;
}, wt = (e) => {
  const t = !!e.path && e.path.indexOf("per_page=-1") !== -1, a = !!e.url && e.url.indexOf("per_page=-1") !== -1;
  return t || a;
}, mr = async (e, t) => {
  if (e.parse === !1 || !wt(e))
    return t(e);
  const a = await I({
    ..._t(e, {
      per_page: 100
    }),
    // Ensure headers are returned for page 1.
    parse: !1
  }), n = await cr(a);
  if (!Array.isArray(n))
    return n;
  let s = lr(a);
  if (!s)
    return n;
  let i = (
    /** @type {any[]} */
    [].concat(n)
  );
  for (; s; ) {
    const l = await I({
      ...e,
      // Ensure the URL for the next page is used instead of any provided path.
      path: void 0,
      url: s,
      // Ensure we still get headers so we can identify the next page.
      parse: !1
    }), f = await cr(l);
    i = i.concat(f), s = lr(l);
  }
  return i;
}, Et = /* @__PURE__ */ new Set(["PATCH", "PUT", "DELETE"]), Rt = "GET", xt = (e, t) => {
  const {
    method: a = Rt
  } = e;
  return Et.has(a.toUpperCase()) && (e = {
    ...e,
    headers: {
      ...e.headers,
      "X-HTTP-Method-Override": a,
      "Content-Type": "application/json"
    },
    method: "POST"
  }), t(e);
}, Tt = (e, t) => (typeof e.url == "string" && !ir(e.url, "_locale") && (e.url = J(e.url, {
  _locale: "user"
})), typeof e.path == "string" && !ir(e.path, "_locale") && (e.path = J(e.path, {
  _locale: "user"
})), t(e)), St = (e, t = !0) => t ? e.status === 204 ? null : e.json ? e.json() : Promise.reject(e) : e, Ot = (e) => {
  const t = {
    code: "invalid_json",
    message: oe("The response is not a valid JSON response.")
  };
  if (!e || !e.json)
    throw t;
  return e.json().catch(() => {
    throw t;
  });
}, _r = (e, t = !0) => Promise.resolve(St(e, t)).catch((a) => Ee(a, t));
function Ee(e, t = !0) {
  if (!t)
    throw e;
  return Ot(e).then((a) => {
    const n = {
      code: "unknown_error",
      message: oe("An unknown error occurred.")
    };
    throw a || n;
  });
}
function At(e) {
  const t = !!e.method && e.method === "POST";
  return (!!e.path && e.path.indexOf("/wp/v2/media") !== -1 || !!e.url && e.url.indexOf("/wp/v2/media") !== -1) && t;
}
const Pt = (e, t) => {
  if (!At(e))
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
    const l = i.headers.get("x-wp-upload-attachment-id");
    return i.status >= 500 && i.status < 600 && l ? s(l).catch(() => e.parse !== !1 ? Promise.reject({
      code: "post_process",
      message: oe("Media upload failed. If this is a photo or a large image, please scale it down and try again.")
    }) : Promise.reject(i)) : Ee(i, e.parse);
  }).then((i) => _r(i, e.parse));
}, jt = (e) => (t, a) => {
  if (typeof t.url == "string") {
    const n = _e(t.url, "wp_theme_preview");
    n === void 0 ? t.url = J(t.url, {
      wp_theme_preview: e
    }) : n === "" && (t.url = sr(t.url, "wp_theme_preview"));
  }
  if (typeof t.path == "string") {
    const n = _e(t.path, "wp_theme_preview");
    n === void 0 ? t.path = J(t.path, {
      wp_theme_preview: e
    }) : n === "" && (t.path = sr(t.path, "wp_theme_preview"));
  }
  return a(t);
}, Ct = {
  // The backend uses the Accept header as a condition for considering an
  // incoming request as a REST request.
  //
  // See: https://core.trac.wordpress.org/ticket/44534
  Accept: "application/json, */*;q=0.1"
}, Ft = {
  credentials: "include"
}, br = [Tt, yr, xt, mr];
function kt(e) {
  br.unshift(e);
}
const wr = (e) => {
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
    body: l,
    headers: f
  } = e;
  return f = {
    ...Ct,
    ...f
  }, n && (l = JSON.stringify(n), f["Content-Type"] = "application/json"), window.fetch(
    // Fall back to explicitly passing `window.location` which is the behavior if `undefined` is passed.
    t || a || window.location.href,
    {
      ...Ft,
      ...i,
      body: l,
      headers: f
    }
  ).then((d) => Promise.resolve(d).then(wr).catch((y) => Ee(y, s)).then((y) => _r(y, s)), (d) => {
    throw d && d.name === "AbortError" ? d : {
      code: "fetch_error",
      message: oe("You are probably offline.")
    };
  });
};
let Er = Dt;
function It(e) {
  Er = e;
}
function I(e) {
  return br.reduceRight((a, n) => (s) => n(s, a), Er)(e).catch((a) => a.code !== "rest_cookie_invalid_nonce" ? Promise.reject(a) : window.fetch(I.nonceEndpoint).then(wr).then((n) => n.text()).then((n) => (I.nonceMiddleware.nonce = n, I(e))));
}
I.use = kt;
I.setFetchHandler = It;
I.createNonceMiddleware = dt;
I.createPreloadingMiddleware = mt;
I.createRootURLMiddleware = pt;
I.fetchAllMiddleware = mr;
I.mediaUploadMiddleware = Pt;
I.createThemePreviewMiddleware = jt;
const an = (e, t) => {
  const a = e.endsWith("/") ? `${e}render` : `${e}/render`;
  return {
    getSnippets: () => I({
      path: e,
      headers: { "X-WP-Nonce": t }
    }),
    renderSnippet: (n, s) => I({
      path: a,
      method: "POST",
      headers: { "X-WP-Nonce": t },
      data: { key: n, data: s }
    })
  };
}, sn = (e) => ({
  getSnippets: () => fetch(e).then((t) => t.json()),
  renderSnippet: (t, a) => fetch(e.endsWith("/") ? `${e}render` : `${e}/render`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: t, data: a })
  }).then((n) => n.json())
});
export {
  Mt as SnippetsApp,
  sn as createChromeApi,
  an as createWordpressApi
};
//# sourceMappingURL=snippo-ui.es.js.map
