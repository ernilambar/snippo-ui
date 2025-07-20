import hr, { useState as V, useRef as Zr, useCallback as Ge, useEffect as oe } from "react";
var ue = { exports: {} }, Q = {};
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
function et() {
  if (Be) return Q;
  Be = 1;
  var e = hr, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, d, p) {
    var y, c = {}, w = null, x = null;
    p !== void 0 && (w = "" + p), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (y in d) a.call(d, y) && !s.hasOwnProperty(y) && (c[y] = d[y]);
    if (l && l.defaultProps) for (y in d = l.defaultProps, d) c[y] === void 0 && (c[y] = d[y]);
    return { $$typeof: t, type: l, key: w, ref: x, props: c, _owner: i.current };
  }
  return Q.Fragment = n, Q.jsx = o, Q.jsxs = o, Q;
}
var Z = {};
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
function rt() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = hr, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, g = "@@iterator";
    function W(r) {
      if (r === null || typeof r != "object")
        return null;
      var u = S && r[S] || r[g];
      return typeof u == "function" ? u : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(r) {
      {
        for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), _ = 1; _ < u; _++)
          f[_ - 1] = arguments[_];
        H("error", r, f);
      }
    }
    function H(r, u, f) {
      {
        var _ = D.ReactDebugCurrentFrame, T = _.getStackAddendum();
        T !== "" && (u += "%s", f = f.concat([T]));
        var O = f.map(function(R) {
          return String(R);
        });
        O.unshift("Warning: " + u), Function.prototype.apply.call(console[r], console, O);
      }
    }
    var h = !1, v = !1, E = !1, P = !1, j = !1, q;
    q = Symbol.for("react.module.reference");
    function pe(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === a || r === s || j || r === i || r === p || r === y || P || r === x || h || v || E || typeof r == "object" && r !== null && (r.$$typeof === w || r.$$typeof === c || r.$$typeof === o || r.$$typeof === l || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === q || r.getModuleId !== void 0));
    }
    function he(r, u, f) {
      var _ = r.displayName;
      if (_)
        return _;
      var T = u.displayName || u.name || "";
      return T !== "" ? f + "(" + T + ")" : f;
    }
    function m(r) {
      return r.displayName || "Context";
    }
    function $(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case l:
            var u = r;
            return m(u) + ".Consumer";
          case o:
            var f = r;
            return m(f._context) + ".Provider";
          case d:
            return he(r, r.render, "ForwardRef");
          case c:
            var _ = r.displayName || null;
            return _ !== null ? _ : $(r.type) || "Memo";
          case w: {
            var T = r, O = T._payload, R = T._init;
            try {
              return $(R(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, J = 0, re, te, Pe, je, Ce, Fe, ke;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function Or() {
      {
        if (J === 0) {
          re = console.log, te = console.info, Pe = console.warn, je = console.error, Ce = console.group, Fe = console.groupCollapsed, ke = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: De,
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
    function Sr() {
      {
        if (J--, J === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, r, {
              value: re
            }),
            info: Y({}, r, {
              value: te
            }),
            warn: Y({}, r, {
              value: Pe
            }),
            error: Y({}, r, {
              value: je
            }),
            group: Y({}, r, {
              value: Ce
            }),
            groupCollapsed: Y({}, r, {
              value: Fe
            }),
            groupEnd: Y({}, r, {
              value: ke
            })
          });
        }
        J < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = D.ReactCurrentDispatcher, ye;
    function ne(r, u, f) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (T) {
            var _ = T.stack.trim().match(/\n( *(at )?)/);
            ye = _ && _[1] || "";
          }
        return `
` + ye + r;
      }
    }
    var ge = !1, ae;
    {
      var Ar = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new Ar();
    }
    function Ie(r, u) {
      if (!r || ge)
        return "";
      {
        var f = ae.get(r);
        if (f !== void 0)
          return f;
      }
      var _;
      ge = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = ve.current, ve.current = null, Or();
      try {
        if (u) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (U) {
              _ = U;
            }
            Reflect.construct(r, [], R);
          } else {
            try {
              R.call();
            } catch (U) {
              _ = U;
            }
            r.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            _ = U;
          }
          r();
        }
      } catch (U) {
        if (U && _ && typeof U.stack == "string") {
          for (var b = U.stack.split(`
`), L = _.stack.split(`
`), C = b.length - 1, F = L.length - 1; C >= 1 && F >= 0 && b[C] !== L[F]; )
            F--;
          for (; C >= 1 && F >= 0; C--, F--)
            if (b[C] !== L[F]) {
              if (C !== 1 || F !== 1)
                do
                  if (C--, F--, F < 0 || b[C] !== L[F]) {
                    var N = `
` + b[C].replace(" at new ", " at ");
                    return r.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", r.displayName)), typeof r == "function" && ae.set(r, N), N;
                  }
                while (C >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        ge = !1, ve.current = O, Sr(), Error.prepareStackTrace = T;
      }
      var G = r ? r.displayName || r.name : "", z = G ? ne(G) : "";
      return typeof r == "function" && ae.set(r, z), z;
    }
    function Pr(r, u, f) {
      return Ie(r, !1);
    }
    function jr(r) {
      var u = r.prototype;
      return !!(u && u.isReactComponent);
    }
    function ie(r, u, f) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ie(r, jr(r));
      if (typeof r == "string")
        return ne(r);
      switch (r) {
        case p:
          return ne("Suspense");
        case y:
          return ne("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return Pr(r.render);
          case c:
            return ie(r.type, u, f);
          case w: {
            var _ = r, T = _._payload, O = _._init;
            try {
              return ie(O(T), u, f);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, $e = {}, Le = D.ReactDebugCurrentFrame;
    function se(r) {
      if (r) {
        var u = r._owner, f = ie(r.type, r._source, u ? u.type : null);
        Le.setExtraStackFrame(f);
      } else
        Le.setExtraStackFrame(null);
    }
    function Cr(r, u, f, _, T) {
      {
        var O = Function.call.bind(B);
        for (var R in r)
          if (O(r, R)) {
            var b = void 0;
            try {
              if (typeof r[R] != "function") {
                var L = Error((_ || "React class") + ": " + f + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              b = r[R](u, R, _, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              b = C;
            }
            b && !(b instanceof Error) && (se(T), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", f, R, typeof b), se(null)), b instanceof Error && !(b.message in $e) && ($e[b.message] = !0, se(T), A("Failed %s type: %s", f, b.message), se(null));
          }
      }
    }
    var Fr = Array.isArray;
    function me(r) {
      return Fr(r);
    }
    function kr(r) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, f = u && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return f;
      }
    }
    function Dr(r) {
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
      if (Dr(r))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kr(r)), Me(r);
    }
    var He = D.ReactCurrentOwner, Ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, We;
    function $r(r) {
      if (B.call(r, "ref")) {
        var u = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Lr(r) {
      if (B.call(r, "key")) {
        var u = Object.getOwnPropertyDescriptor(r, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Mr(r, u) {
      typeof r.ref == "string" && He.current;
    }
    function Ur(r, u) {
      {
        var f = function() {
          Ne || (Ne = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function Hr(r, u) {
      {
        var f = function() {
          We || (We = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var Nr = function(r, u, f, _, T, O, R) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: u,
        ref: f,
        props: R,
        // Record the component responsible for creating this element.
        _owner: O
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
        value: _
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Wr(r, u, f, _, T) {
      {
        var O, R = {}, b = null, L = null;
        f !== void 0 && (Ue(f), b = "" + f), Lr(u) && (Ue(u.key), b = "" + u.key), $r(u) && (L = u.ref, Mr(u, T));
        for (O in u)
          B.call(u, O) && !Ir.hasOwnProperty(O) && (R[O] = u[O]);
        if (r && r.defaultProps) {
          var C = r.defaultProps;
          for (O in C)
            R[O] === void 0 && (R[O] = C[O]);
        }
        if (b || L) {
          var F = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          b && Ur(R, F), L && Hr(R, F);
        }
        return Nr(r, b, L, T, _, He.current, R);
      }
    }
    var _e = D.ReactCurrentOwner, Ye = D.ReactDebugCurrentFrame;
    function X(r) {
      if (r) {
        var u = r._owner, f = ie(r.type, r._source, u ? u.type : null);
        Ye.setExtraStackFrame(f);
      } else
        Ye.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function we(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function qe() {
      {
        if (_e.current) {
          var r = $(_e.current.type);
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
        var u = qe();
        if (!u) {
          var f = typeof r == "string" ? r : r.displayName || r.name;
          f && (u = `

Check the top-level render call using <` + f + ">.");
        }
        return u;
      }
    }
    function Je(r, u) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var f = qr(u);
        if (Ve[f])
          return;
        Ve[f] = !0;
        var _ = "";
        r && r._owner && r._owner !== _e.current && (_ = " It was passed a child from " + $(r._owner.type) + "."), X(r), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, _), X(null);
      }
    }
    function ze(r, u) {
      {
        if (typeof r != "object")
          return;
        if (me(r))
          for (var f = 0; f < r.length; f++) {
            var _ = r[f];
            we(_) && Je(_, u);
          }
        else if (we(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var T = W(r);
          if (typeof T == "function" && T !== r.entries)
            for (var O = T.call(r), R; !(R = O.next()).done; )
              we(R.value) && Je(R.value, u);
        }
      }
    }
    function Vr(r) {
      {
        var u = r.type;
        if (u == null || typeof u == "string")
          return;
        var f;
        if (typeof u == "function")
          f = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === c))
          f = u.propTypes;
        else
          return;
        if (f) {
          var _ = $(u);
          Cr(f, r.props, "prop", _, r);
        } else if (u.PropTypes !== void 0 && !be) {
          be = !0;
          var T = $(u);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jr(r) {
      {
        for (var u = Object.keys(r.props), f = 0; f < u.length; f++) {
          var _ = u[f];
          if (_ !== "children" && _ !== "key") {
            X(r), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), X(null);
            break;
          }
        }
        r.ref !== null && (X(r), A("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var Ke = {};
    function Xe(r, u, f, _, T, O) {
      {
        var R = pe(r);
        if (!R) {
          var b = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Yr();
          L ? b += L : b += qe();
          var C;
          r === null ? C = "null" : me(r) ? C = "array" : r !== void 0 && r.$$typeof === t ? (C = "<" + ($(r.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : C = typeof r, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, b);
        }
        var F = Wr(r, u, f, T, O);
        if (F == null)
          return F;
        if (R) {
          var N = u.children;
          if (N !== void 0)
            if (_)
              if (me(N)) {
                for (var G = 0; G < N.length; G++)
                  ze(N[G], r);
                Object.freeze && Object.freeze(N);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(N, r);
        }
        if (B.call(u, "key")) {
          var z = $(r), U = Object.keys(u).filter(function(Qr) {
            return Qr !== "key";
          }), Ee = U.length > 0 ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[z + Ee]) {
            var Br = U.length > 0 ? "{" + U.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, z, Br, z), Ke[z + Ee] = !0;
          }
        }
        return r === a ? Jr(F) : Vr(F), F;
      }
    }
    function zr(r, u, f) {
      return Xe(r, u, f, !0);
    }
    function Kr(r, u, f) {
      return Xe(r, u, f, !1);
    }
    var Xr = Kr, Gr = zr;
    Z.Fragment = a, Z.jsx = Xr, Z.jsxs = Gr;
  }()), Z;
}
var Ze;
function tt() {
  return Ze || (Ze = 1, process.env.NODE_ENV === "production" ? ue.exports = et() : ue.exports = rt()), ue.exports;
}
var I = tt();
const Ut = ({ api: e, options: t = {} }) => {
  const { autoCopy: n = !1, autoCopyDebounceDelay: a = 500 } = t, [i, s] = V({}), [o, l] = V(""), [d, p] = V([]), [y, c] = V({}), [w, x] = V(""), [S, g] = V(""), [W, D] = V(""), [A, H] = V(!1), [h, v] = V(!1), E = Zr(null), P = Ge((m) => {
    E.current && clearTimeout(E.current), E.current = setTimeout(() => {
      m && n && navigator.clipboard.writeText(m).then(() => {
        H(!0), setTimeout(() => H(!1), 1500);
      });
    }, a);
  }, [n, a]);
  oe(() => () => {
    E.current && clearTimeout(E.current);
  }, []), oe(() => {
    e.getSnippets().then(s).catch((m) => D(m.message || "Error fetching snippets"));
  }, [e]);
  const j = Ge((m, $) => {
    let Y = m;
    return Object.keys($).forEach((J) => {
      const re = $[J] || "", te = `{{${J}}}`;
      Y = Y.replace(new RegExp(te.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), re);
    }), Y;
  }, []);
  oe(() => {
    if (w) {
      const m = j(w, y);
      g(m), n && m && P(m);
    }
  }, [w, y, j, n, P]), oe(() => {
    o && i[o] && (p(i[o].fields || []), c({}), x(""), g(""), D(""), H(!1), v(!1), !i[o].fields || i[o].fields.length === 0 ? (v(!0), e.renderSnippet(o, {}).then((m) => {
      x(m.output), v(!1);
    }).catch((m) => {
      D(m.message || "Error rendering snippet"), v(!1);
    })) : (v(!0), e.renderSnippet(o, {}).then((m) => {
      x(m.output), v(!1);
    }).catch((m) => {
      D(m.message || "Error rendering snippet"), v(!1);
    })));
  }, [o, i, e]);
  const q = (m, $) => {
    c({ ...y, [m]: $ });
  }, pe = () => {
    S && navigator.clipboard.writeText(S).then(() => {
      H(!0), setTimeout(() => H(!1), 1500);
    });
  }, he = Object.keys(i).map((m) => ({
    value: m,
    label: i[m].meta && i[m].meta.title ? i[m].meta.title : m
  }));
  return /* @__PURE__ */ I.jsxs("div", { children: [
    /* @__PURE__ */ I.jsxs(
      "select",
      {
        value: o,
        onChange: (m) => l(m.target.value),
        style: { maxWidth: 400 },
        children: [
          /* @__PURE__ */ I.jsx("option", { value: "", children: "Select a snippet" }),
          he.map((m) => /* @__PURE__ */ I.jsx("option", { value: m.value, children: m.label }, m.value))
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ I.jsx("div", { className: "snippetsapp-form", children: d.map((m) => /* @__PURE__ */ I.jsxs("div", { className: "snippetsapp-field", children: [
      /* @__PURE__ */ I.jsx(
        "label",
        {
          htmlFor: `snippetsapp-field-${m.name}`,
          className: "snippetsapp-label",
          children: m.label || m.name
        }
      ),
      /* @__PURE__ */ I.jsx(
        "input",
        {
          id: `snippetsapp-field-${m.name}`,
          type: "text",
          value: y[m.name] || "",
          onChange: ($) => q(m.name, $.target.value),
          className: "snippetsapp-input regular-text",
          placeholder: m.placeholder || `Enter ${m.label || m.name}`
        }
      )
    ] }, m.name)) }),
    (S || h) && /* @__PURE__ */ I.jsx("div", { className: "snippetsapp-output-container", children: /* @__PURE__ */ I.jsxs("div", { className: "snippetsapp-output-content", children: [
      h && !S && /* @__PURE__ */ I.jsx("div", { className: "snippetsapp-loading", children: "Generating snippet..." }),
      S && /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
        /* @__PURE__ */ I.jsx(
          "div",
          {
            className: "snippetsapp-output-text",
            dangerouslySetInnerHTML: { __html: S }
          }
        ),
        /* @__PURE__ */ I.jsx(
          "button",
          {
            type: "button",
            onClick: pe,
            className: "snippetsapp-copy-button",
            disabled: h,
            children: A ? "Copied!" : "Copy"
          }
        )
      ] })
    ] }) }),
    W && /* @__PURE__ */ I.jsx("div", { className: "snippetsapp-error-message", children: W })
  ] });
};
var Re = {}, er;
function nt() {
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
      function n(l) {
        return i(o(l), arguments);
      }
      function a(l, d) {
        return n.apply(null, [l].concat(d || []));
      }
      function i(l, d) {
        var p = 1, y = l.length, c, w = "", x, S, g, W, D, A, H, h;
        for (x = 0; x < y; x++)
          if (typeof l[x] == "string")
            w += l[x];
          else if (typeof l[x] == "object") {
            if (g = l[x], g.keys)
              for (c = d[p], S = 0; S < g.keys.length; S++) {
                if (c == null)
                  throw new Error(n('[sprintf] Cannot access property "%s" of undefined value "%s"', g.keys[S], g.keys[S - 1]));
                c = c[g.keys[S]];
              }
            else g.param_no ? c = d[g.param_no] : c = d[p++];
            if (t.not_type.test(g.type) && t.not_primitive.test(g.type) && c instanceof Function && (c = c()), t.numeric_arg.test(g.type) && typeof c != "number" && isNaN(c))
              throw new TypeError(n("[sprintf] expecting number but found %T", c));
            switch (t.number.test(g.type) && (H = c >= 0), g.type) {
              case "b":
                c = parseInt(c, 10).toString(2);
                break;
              case "c":
                c = String.fromCharCode(parseInt(c, 10));
                break;
              case "d":
              case "i":
                c = parseInt(c, 10);
                break;
              case "j":
                c = JSON.stringify(c, null, g.width ? parseInt(g.width) : 0);
                break;
              case "e":
                c = g.precision ? parseFloat(c).toExponential(g.precision) : parseFloat(c).toExponential();
                break;
              case "f":
                c = g.precision ? parseFloat(c).toFixed(g.precision) : parseFloat(c);
                break;
              case "g":
                c = g.precision ? String(Number(c.toPrecision(g.precision))) : parseFloat(c);
                break;
              case "o":
                c = (parseInt(c, 10) >>> 0).toString(8);
                break;
              case "s":
                c = String(c), c = g.precision ? c.substring(0, g.precision) : c;
                break;
              case "t":
                c = String(!!c), c = g.precision ? c.substring(0, g.precision) : c;
                break;
              case "T":
                c = Object.prototype.toString.call(c).slice(8, -1).toLowerCase(), c = g.precision ? c.substring(0, g.precision) : c;
                break;
              case "u":
                c = parseInt(c, 10) >>> 0;
                break;
              case "v":
                c = c.valueOf(), c = g.precision ? c.substring(0, g.precision) : c;
                break;
              case "x":
                c = (parseInt(c, 10) >>> 0).toString(16);
                break;
              case "X":
                c = (parseInt(c, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            t.json.test(g.type) ? w += c : (t.number.test(g.type) && (!H || g.sign) ? (h = H ? "+" : "-", c = c.toString().replace(t.sign, "")) : h = "", D = g.pad_char ? g.pad_char === "0" ? "0" : g.pad_char.charAt(1) : " ", A = g.width - (h + c).length, W = g.width && A > 0 ? D.repeat(A) : "", w += g.align ? h + c + W : D === "0" ? h + W + c : W + h + c);
          }
        return w;
      }
      var s = /* @__PURE__ */ Object.create(null);
      function o(l) {
        if (s[l])
          return s[l];
        for (var d = l, p, y = [], c = 0; d; ) {
          if ((p = t.text.exec(d)) !== null)
            y.push(p[0]);
          else if ((p = t.modulo.exec(d)) !== null)
            y.push("%");
          else if ((p = t.placeholder.exec(d)) !== null) {
            if (p[2]) {
              c |= 1;
              var w = [], x = p[2], S = [];
              if ((S = t.key.exec(x)) !== null)
                for (w.push(S[1]); (x = x.substring(S[0].length)) !== ""; )
                  if ((S = t.key_access.exec(x)) !== null)
                    w.push(S[1]);
                  else if ((S = t.index_access.exec(x)) !== null)
                    w.push(S[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              p[2] = w;
            } else
              c |= 2;
            if (c === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            y.push(
              {
                placeholder: p[0],
                param_no: p[1],
                keys: p[2],
                sign: p[3],
                pad_char: p[4],
                align: p[5],
                width: p[6],
                precision: p[7],
                type: p[8]
              }
            );
          } else
            throw new SyntaxError("[sprintf] unexpected placeholder");
          d = d.substring(p[0].length);
        }
        return s[l] = y;
      }
      e.sprintf = n, e.vsprintf = a, typeof window < "u" && (window.sprintf = n, window.vsprintf = a);
    })();
  }(Re)), Re;
}
nt();
var xe, vr, ee, yr;
xe = {
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
ee = {
  ")": ["("],
  ":": ["?", "?:"]
};
yr = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
function at(e) {
  for (var t = [], n = [], a, i, s, o; a = e.match(yr); ) {
    for (i = a[0], s = e.substr(0, a.index).trim(), s && t.push(s); o = n.pop(); ) {
      if (ee[i]) {
        if (ee[i][0] === o) {
          i = ee[i][1] || i;
          break;
        }
      } else if (vr.indexOf(o) >= 0 || xe[o] < xe[i]) {
        n.push(o);
        break;
      }
      t.push(o);
    }
    ee[i] || n.push(i), e = e.substr(a.index + i.length);
  }
  return e = e.trim(), e && t.push(e), t.concat(n.reverse());
}
var it = {
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
  "?:": function(e, t, n) {
    if (e)
      throw t;
    return n;
  }
};
function st(e, t) {
  var n = [], a, i, s, o, l, d;
  for (a = 0; a < e.length; a++) {
    if (l = e[a], o = it[l], o) {
      for (i = o.length, s = Array(i); i--; )
        s[i] = n.pop();
      try {
        d = o.apply(null, s);
      } catch (p) {
        return p;
      }
    } else t.hasOwnProperty(l) ? d = t[l] : d = +l;
    n.push(d);
  }
  return n[0];
}
function ot(e) {
  var t = at(e);
  return function(n) {
    return st(t, n);
  };
}
function ut(e) {
  var t = ot(e);
  return function(n) {
    return +t({ n });
  };
}
var rr = {
  contextDelimiter: "",
  onMissingKey: null
};
function ct(e) {
  var t, n, a;
  for (t = e.split(";"), n = 0; n < t.length; n++)
    if (a = t[n].trim(), a.indexOf("plural=") === 0)
      return a.substr(7);
}
function Oe(e, t) {
  var n;
  this.data = e, this.pluralForms = {}, this.options = {};
  for (n in rr)
    this.options[n] = t !== void 0 && n in t ? t[n] : rr[n];
}
Oe.prototype.getPluralForm = function(e, t) {
  var n = this.pluralForms[e], a, i, s;
  return n || (a = this.data[e][""], s = a["Plural-Forms"] || a["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
  // string property on a key to guarantee this as metadata.
  // @ts-ignore
  a.plural_forms, typeof s != "function" && (i = ct(
    a["Plural-Forms"] || a["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
    // string property on a key to guarantee this as metadata.
    // @ts-ignore
    a.plural_forms
  ), s = ut(i)), n = this.pluralForms[e] = s), n(t);
};
Oe.prototype.dcnpgettext = function(e, t, n, a, i) {
  var s, o, l;
  return i === void 0 ? s = 0 : s = this.getPluralForm(e, i), o = n, t && (o = t + this.options.contextDelimiter + n), l = this.data[e][o], l && l[s] ? l[s] : (this.options.onMissingKey && this.options.onMissingKey(n, e), s === 0 ? n : a);
};
const tr = {
  "": {
    /** @param {number} n */
    plural_forms(e) {
      return e === 1 ? 0 : 1;
    }
  }
}, lt = /^i18n\.(n?gettext|has_translation)(_|$)/, ft = (e, t, n) => {
  const a = new Oe({}), i = /* @__PURE__ */ new Set(), s = () => {
    i.forEach((h) => h());
  }, o = (h) => (i.add(h), () => i.delete(h)), l = (h = "default") => a.data[h], d = (h, v = "default") => {
    a.data[v] = {
      ...a.data[v],
      ...h
    }, a.data[v][""] = {
      ...tr[""],
      ...a.data[v]?.[""]
    }, delete a.pluralForms[v];
  }, p = (h, v) => {
    d(h, v), s();
  }, y = (h, v = "default") => {
    a.data[v] = {
      ...a.data[v],
      ...h,
      // Populate default domain configuration (supported locale date which omits
      // a plural forms expression).
      "": {
        ...tr[""],
        ...a.data[v]?.[""],
        ...h?.[""]
      }
    }, delete a.pluralForms[v], s();
  }, c = (h, v) => {
    a.data = {}, a.pluralForms = {}, p(h, v);
  }, w = (h = "default", v, E, P, j) => (a.data[h] || d(void 0, h), a.dcnpgettext(h, v, E, P, j)), x = (h = "default") => h, S = (h, v) => {
    let E = w(v, void 0, h);
    return n ? (E = /** @type {string} */
    /** @type {*} */
    n.applyFilters("i18n.gettext", E, h, v), /** @type {string} */
    /** @type {*} */
    n.applyFilters("i18n.gettext_" + x(v), E, h, v)) : E;
  }, g = (h, v, E) => {
    let P = w(E, v, h);
    return n ? (P = /** @type {string} */
    /** @type {*} */
    n.applyFilters("i18n.gettext_with_context", P, h, v, E), /** @type {string} */
    /** @type {*} */
    n.applyFilters("i18n.gettext_with_context_" + x(E), P, h, v, E)) : P;
  }, W = (h, v, E, P) => {
    let j = w(P, void 0, h, v, E);
    return n ? (j = /** @type {string} */
    /** @type {*} */
    n.applyFilters("i18n.ngettext", j, h, v, E, P), /** @type {string} */
    /** @type {*} */
    n.applyFilters("i18n.ngettext_" + x(P), j, h, v, E, P)) : j;
  }, D = (h, v, E, P, j) => {
    let q = w(j, P, h, v, E);
    return n ? (q = /** @type {string} */
    /** @type {*} */
    n.applyFilters("i18n.ngettext_with_context", q, h, v, E, P, j), /** @type {string} */
    /** @type {*} */
    n.applyFilters("i18n.ngettext_with_context_" + x(j), q, h, v, E, P, j)) : q;
  }, A = () => g("ltr", "text direction") === "rtl", H = (h, v, E) => {
    const P = v ? v + "" + h : h;
    let j = !!a.data?.[E ?? "default"]?.[P];
    return n && (j = /** @type { boolean } */
    /** @type {*} */
    n.applyFilters("i18n.has_translation", j, h, v, E), j = /** @type { boolean } */
    /** @type {*} */
    n.applyFilters("i18n.has_translation_" + x(E), j, h, v, E)), j;
  };
  if (n) {
    const h = (v) => {
      lt.test(v) && s();
    };
    n.addAction("hookAdded", "core/i18n", h), n.addAction("hookRemoved", "core/i18n", h);
  }
  return {
    getLocaleData: l,
    setLocaleData: p,
    addLocaleData: y,
    resetLocaleData: c,
    subscribe: o,
    __: S,
    _x: g,
    _n: W,
    _nx: D,
    isRTL: A,
    hasTranslation: H
  };
};
function gr(e) {
  return typeof e != "string" || e === "" ? (console.error("The namespace must be a non-empty string."), !1) : /^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) ? !0 : (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1);
}
function Se(e) {
  return typeof e != "string" || e === "" ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."), !1) : /^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) ? !0 : (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1);
}
function nr(e, t) {
  return function(a, i, s, o = 10) {
    const l = e[t];
    if (!Se(a) || !gr(i))
      return;
    if (typeof s != "function") {
      console.error("The hook callback must be a function.");
      return;
    }
    if (typeof o != "number") {
      console.error("If specified, the hook priority must be a number.");
      return;
    }
    const d = {
      callback: s,
      priority: o,
      namespace: i
    };
    if (l[a]) {
      const p = l[a].handlers;
      let y;
      for (y = p.length; y > 0 && !(o >= p[y - 1].priority); y--)
        ;
      y === p.length ? p[y] = d : p.splice(y, 0, d), l.__current.forEach((c) => {
        c.name === a && c.currentIndex >= y && c.currentIndex++;
      });
    } else
      l[a] = {
        handlers: [d],
        runs: 0
      };
    a !== "hookAdded" && e.doAction("hookAdded", a, i, s, o);
  };
}
function ce(e, t, n = !1) {
  return function(i, s) {
    const o = e[t];
    if (!Se(i) || !n && !gr(s))
      return;
    if (!o[i])
      return 0;
    let l = 0;
    if (n)
      l = o[i].handlers.length, o[i] = {
        runs: o[i].runs,
        handlers: []
      };
    else {
      const d = o[i].handlers;
      for (let p = d.length - 1; p >= 0; p--)
        d[p].namespace === s && (d.splice(p, 1), l++, o.__current.forEach((y) => {
          y.name === i && y.currentIndex >= p && y.currentIndex--;
        }));
    }
    return i !== "hookRemoved" && e.doAction("hookRemoved", i, s), l;
  };
}
function ar(e, t) {
  return function(a, i) {
    const s = e[t];
    return typeof i < "u" ? a in s && s[a].handlers.some((o) => o.namespace === i) : a in s;
  };
}
function le(e, t, n, a) {
  return function(s, ...o) {
    const l = e[t];
    l[s] || (l[s] = {
      handlers: [],
      runs: 0
    }), l[s].runs++;
    const d = l[s].handlers;
    if (process.env.NODE_ENV !== "production" && s !== "hookAdded" && l.all && d.push(...l.all.handlers), !d || !d.length)
      return n ? o[0] : void 0;
    const p = {
      name: s,
      currentIndex: 0
    };
    async function y() {
      try {
        l.__current.add(p);
        let w = n ? o[0] : void 0;
        for (; p.currentIndex < d.length; )
          w = await d[p.currentIndex].callback.apply(null, o), n && (o[0] = w), p.currentIndex++;
        return n ? w : void 0;
      } finally {
        l.__current.delete(p);
      }
    }
    function c() {
      try {
        l.__current.add(p);
        let w = n ? o[0] : void 0;
        for (; p.currentIndex < d.length; )
          w = d[p.currentIndex].callback.apply(null, o), n && (o[0] = w), p.currentIndex++;
        return n ? w : void 0;
      } finally {
        l.__current.delete(p);
      }
    }
    return (a ? y : c)();
  };
}
function ir(e, t) {
  return function() {
    var a;
    const i = e[t];
    return (a = Array.from(i.__current).at(-1)?.name) !== null && a !== void 0 ? a : null;
  };
}
function sr(e, t) {
  return function(a) {
    const i = e[t];
    return typeof a > "u" ? i.__current.size > 0 : Array.from(i.__current).some((s) => s.name === a);
  };
}
function or(e, t) {
  return function(a) {
    const i = e[t];
    if (Se(a))
      return i[a] && i[a].runs ? i[a].runs : 0;
  };
}
class dt {
  constructor() {
    this.actions = /* @__PURE__ */ Object.create(null), this.actions.__current = /* @__PURE__ */ new Set(), this.filters = /* @__PURE__ */ Object.create(null), this.filters.__current = /* @__PURE__ */ new Set(), this.addAction = nr(this, "actions"), this.addFilter = nr(this, "filters"), this.removeAction = ce(this, "actions"), this.removeFilter = ce(this, "filters"), this.hasAction = ar(this, "actions"), this.hasFilter = ar(this, "filters"), this.removeAllActions = ce(this, "actions", !0), this.removeAllFilters = ce(this, "filters", !0), this.doAction = le(this, "actions", !1, !1), this.doActionAsync = le(this, "actions", !1, !0), this.applyFilters = le(this, "filters", !0, !1), this.applyFiltersAsync = le(this, "filters", !0, !0), this.currentAction = ir(this, "actions"), this.currentFilter = ir(this, "filters"), this.doingAction = sr(this, "actions"), this.doingFilter = sr(this, "filters"), this.didAction = or(this, "actions"), this.didFilter = or(this, "filters");
  }
}
function pt() {
  return new dt();
}
const mr = pt(), {
  addAction: Ht,
  addFilter: Nt,
  removeAction: Wt,
  removeFilter: Yt,
  hasAction: qt,
  hasFilter: Vt,
  removeAllActions: Jt,
  removeAllFilters: zt,
  doAction: Kt,
  doActionAsync: Xt,
  applyFilters: Gt,
  applyFiltersAsync: Bt,
  currentAction: Qt,
  currentFilter: Zt,
  doingAction: en,
  doingFilter: rn,
  didAction: tn,
  didFilter: nn,
  actions: an,
  filters: sn
} = mr, k = ft(void 0, void 0, mr);
k.getLocaleData.bind(k);
k.setLocaleData.bind(k);
k.resetLocaleData.bind(k);
k.subscribe.bind(k);
const fe = k.__.bind(k);
k._x.bind(k);
k._n.bind(k);
k._nx.bind(k);
k.isRTL.bind(k);
k.hasTranslation.bind(k);
function ht(e) {
  const t = (n, a) => {
    const {
      headers: i = {}
    } = n;
    for (const s in i)
      if (s.toLowerCase() === "x-wp-nonce" && i[s] === t.nonce)
        return a(n);
    return a({
      ...n,
      headers: {
        ...i,
        "X-WP-Nonce": t.nonce
      }
    });
  };
  return t.nonce = e, t;
}
const _r = (e, t) => {
  let n = e.path, a, i;
  return typeof e.namespace == "string" && typeof e.endpoint == "string" && (a = e.namespace.replace(/^\/|\/$/g, ""), i = e.endpoint.replace(/^\//, ""), i ? n = a + "/" + i : n = a), delete e.namespace, delete e.endpoint, t({
    ...e,
    path: n
  });
}, vt = (e) => (t, n) => _r(t, (a) => {
  let i = a.url, s = a.path, o;
  return typeof s == "string" && (o = e, e.indexOf("?") !== -1 && (s = s.replace("?", "&")), s = s.replace(/^\//, ""), typeof o == "string" && o.indexOf("?") !== -1 && (s = s.replace("?", "&")), i = o + s), n({
    ...a,
    url: i
  });
});
function yt(e) {
  let t;
  try {
    t = new URL(e, "http://example.com").search.substring(1);
  } catch {
  }
  if (t)
    return t;
}
function br(e) {
  let t = "";
  const n = Object.entries(e);
  let a;
  for (; a = n.shift(); ) {
    let [i, s] = a;
    if (Array.isArray(s) || s && s.constructor === Object) {
      const l = Object.entries(s).reverse();
      for (const [d, p] of l)
        n.unshift([`${i}[${d}]`, p]);
    } else s !== void 0 && (s === null && (s = ""), t += "&" + [i, s].map(encodeURIComponent).join("="));
  }
  return t.substr(1);
}
function gt(e) {
  const t = /^\S+?(#[^\s\?]*)/.exec(e);
  if (t)
    return t[1];
}
function mt(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function _t(e, t, n) {
  const a = t.length, i = a - 1;
  for (let s = 0; s < a; s++) {
    let o = t[s];
    !o && Array.isArray(e) && (o = e.length.toString()), o = ["__proto__", "constructor", "prototype"].includes(o) ? o.toUpperCase() : o;
    const l = !isNaN(Number(t[s + 1]));
    e[o] = s === i ? (
      // If at end of path, assign the intended value.
      n
    ) : (
      // Otherwise, advance to the next object in the path, creating
      // it if it does not yet exist.
      e[o] || (l ? [] : {})
    ), Array.isArray(e[o]) && !l && (e[o] = {
      ...e[o]
    }), e = e[o];
  }
}
function de(e) {
  return (yt(e) || "").replace(/\+/g, "%20").split("&").reduce((t, n) => {
    const [a, i = ""] = n.split("=").filter(Boolean).map(mt);
    if (a) {
      const s = a.replace(/\]/g, "").split("[");
      _t(t, s, i);
    }
    return t;
  }, /* @__PURE__ */ Object.create(null));
}
function K(e = "", t) {
  if (!t || !Object.keys(t).length)
    return e;
  const n = gt(e) || "";
  let a = e.replace(n, "");
  const i = e.indexOf("?");
  return i !== -1 && (t = Object.assign(de(e), t), a = a.substr(0, i)), a + "?" + br(t) + n;
}
function Te(e, t) {
  return de(e)[t];
}
function ur(e, t) {
  return Te(e, t) !== void 0;
}
function cr(e, ...t) {
  const n = e.replace(/^[^#]*/, "");
  e = e.replace(/#.*/, "");
  const a = e.indexOf("?");
  if (a === -1)
    return e + n;
  const i = de(e), s = e.substr(0, a);
  t.forEach((d) => delete i[d]);
  const o = br(i);
  return (o ? s + "?" + o : s) + n;
}
function lr(e) {
  const t = e.split("?"), n = t[1], a = t[0];
  return n ? a + "?" + n.split("&").map((i) => i.split("=")).map((i) => i.map(decodeURIComponent)).sort((i, s) => i[0].localeCompare(s[0])).map((i) => i.map(encodeURIComponent)).map((i) => i.join("=")).join("&") : a;
}
function bt(e) {
  const t = Object.fromEntries(Object.entries(e).map(([n, a]) => [lr(n), a]));
  return (n, a) => {
    const {
      parse: i = !0
    } = n;
    let s = n.path;
    if (!s && n.url) {
      const {
        rest_route: d,
        ...p
      } = de(n.url);
      typeof d == "string" && (s = K(d, p));
    }
    if (typeof s != "string")
      return a(n);
    const o = n.method || "GET", l = lr(s);
    if (o === "GET" && t[l]) {
      const d = t[l];
      return delete t[l], fr(d, !!i);
    } else if (o === "OPTIONS" && t[o] && t[o][l]) {
      const d = t[o][l];
      return delete t[o][l], fr(d, !!i);
    }
    return a(n);
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
    return Object.entries(e.headers).forEach(([n, a]) => {
      n.toLowerCase() === "link" && (e.headers[n] = a.replace(/<([^>]+)>/, (i, s) => `<${encodeURI(s)}>`));
    }), Promise.resolve(t ? e.body : new window.Response(JSON.stringify(e.body), {
      status: 200,
      statusText: "OK",
      headers: e.headers
    }));
  }
}
const wt = ({
  path: e,
  url: t,
  ...n
}, a) => ({
  ...n,
  url: t && K(t, a),
  path: e && K(e, a)
}), dr = (e) => e.json ? e.json() : Promise.reject(e), Et = (e) => {
  if (!e)
    return {};
  const t = e.match(/<([^>]+)>; rel="next"/);
  return t ? {
    next: t[1]
  } : {};
}, pr = (e) => {
  const {
    next: t
  } = Et(e.headers.get("link"));
  return t;
}, Rt = (e) => {
  const t = !!e.path && e.path.indexOf("per_page=-1") !== -1, n = !!e.url && e.url.indexOf("per_page=-1") !== -1;
  return t || n;
}, wr = async (e, t) => {
  if (e.parse === !1 || !Rt(e))
    return t(e);
  const n = await M({
    ...wt(e, {
      per_page: 100
    }),
    // Ensure headers are returned for page 1.
    parse: !1
  }), a = await dr(n);
  if (!Array.isArray(a))
    return a;
  let i = pr(n);
  if (!i)
    return a;
  let s = (
    /** @type {any[]} */
    [].concat(a)
  );
  for (; i; ) {
    const o = await M({
      ...e,
      // Ensure the URL for the next page is used instead of any provided path.
      path: void 0,
      url: i,
      // Ensure we still get headers so we can identify the next page.
      parse: !1
    }), l = await dr(o);
    s = s.concat(l), i = pr(o);
  }
  return s;
}, xt = /* @__PURE__ */ new Set(["PATCH", "PUT", "DELETE"]), Tt = "GET", Ot = (e, t) => {
  const {
    method: n = Tt
  } = e;
  return xt.has(n.toUpperCase()) && (e = {
    ...e,
    headers: {
      ...e.headers,
      "X-HTTP-Method-Override": n,
      "Content-Type": "application/json"
    },
    method: "POST"
  }), t(e);
}, St = (e, t) => (typeof e.url == "string" && !ur(e.url, "_locale") && (e.url = K(e.url, {
  _locale: "user"
})), typeof e.path == "string" && !ur(e.path, "_locale") && (e.path = K(e.path, {
  _locale: "user"
})), t(e)), At = (e, t = !0) => t ? e.status === 204 ? null : e.json ? e.json() : Promise.reject(e) : e, Pt = (e) => {
  const t = {
    code: "invalid_json",
    message: fe("The response is not a valid JSON response.")
  };
  if (!e || !e.json)
    throw t;
  return e.json().catch(() => {
    throw t;
  });
}, Er = (e, t = !0) => Promise.resolve(At(e, t)).catch((n) => Ae(n, t));
function Ae(e, t = !0) {
  if (!t)
    throw e;
  return Pt(e).then((n) => {
    const a = {
      code: "unknown_error",
      message: fe("An unknown error occurred.")
    };
    throw n || a;
  });
}
function jt(e) {
  const t = !!e.method && e.method === "POST";
  return (!!e.path && e.path.indexOf("/wp/v2/media") !== -1 || !!e.url && e.url.indexOf("/wp/v2/media") !== -1) && t;
}
const Ct = (e, t) => {
  if (!jt(e))
    return t(e);
  let n = 0;
  const a = 5, i = (s) => (n++, t({
    path: `/wp/v2/media/${s}/post-process`,
    method: "POST",
    data: {
      action: "create-image-subsizes"
    },
    parse: !1
  }).catch(() => n < a ? i(s) : (t({
    path: `/wp/v2/media/${s}?force=true`,
    method: "DELETE"
  }), Promise.reject())));
  return t({
    ...e,
    parse: !1
  }).catch((s) => {
    if (!s.headers)
      return Promise.reject(s);
    const o = s.headers.get("x-wp-upload-attachment-id");
    return s.status >= 500 && s.status < 600 && o ? i(o).catch(() => e.parse !== !1 ? Promise.reject({
      code: "post_process",
      message: fe("Media upload failed. If this is a photo or a large image, please scale it down and try again.")
    }) : Promise.reject(s)) : Ae(s, e.parse);
  }).then((s) => Er(s, e.parse));
}, Ft = (e) => (t, n) => {
  if (typeof t.url == "string") {
    const a = Te(t.url, "wp_theme_preview");
    a === void 0 ? t.url = K(t.url, {
      wp_theme_preview: e
    }) : a === "" && (t.url = cr(t.url, "wp_theme_preview"));
  }
  if (typeof t.path == "string") {
    const a = Te(t.path, "wp_theme_preview");
    a === void 0 ? t.path = K(t.path, {
      wp_theme_preview: e
    }) : a === "" && (t.path = cr(t.path, "wp_theme_preview"));
  }
  return n(t);
}, kt = {
  // The backend uses the Accept header as a condition for considering an
  // incoming request as a REST request.
  //
  // See: https://core.trac.wordpress.org/ticket/44534
  Accept: "application/json, */*;q=0.1"
}, Dt = {
  credentials: "include"
}, Rr = [St, _r, Ot, wr];
function It(e) {
  Rr.unshift(e);
}
const xr = (e) => {
  if (e.status >= 200 && e.status < 300)
    return e;
  throw e;
}, $t = (e) => {
  const {
    url: t,
    path: n,
    data: a,
    parse: i = !0,
    ...s
  } = e;
  let {
    body: o,
    headers: l
  } = e;
  return l = {
    ...kt,
    ...l
  }, a && (o = JSON.stringify(a), l["Content-Type"] = "application/json"), window.fetch(
    // Fall back to explicitly passing `window.location` which is the behavior if `undefined` is passed.
    t || n || window.location.href,
    {
      ...Dt,
      ...s,
      body: o,
      headers: l
    }
  ).then((p) => Promise.resolve(p).then(xr).catch((y) => Ae(y, i)).then((y) => Er(y, i)), (p) => {
    throw p && p.name === "AbortError" ? p : {
      code: "fetch_error",
      message: fe("You are probably offline.")
    };
  });
};
let Tr = $t;
function Lt(e) {
  Tr = e;
}
function M(e) {
  return Rr.reduceRight((n, a) => (i) => a(i, n), Tr)(e).catch((n) => n.code !== "rest_cookie_invalid_nonce" ? Promise.reject(n) : window.fetch(M.nonceEndpoint).then(xr).then((a) => a.text()).then((a) => (M.nonceMiddleware.nonce = a, M(e))));
}
M.use = It;
M.setFetchHandler = Lt;
M.createNonceMiddleware = ht;
M.createPreloadingMiddleware = bt;
M.createRootURLMiddleware = vt;
M.fetchAllMiddleware = wr;
M.mediaUploadMiddleware = Ct;
M.createThemePreviewMiddleware = Ft;
const on = (e, t) => {
  const n = e.endsWith("/") ? `${e}render` : `${e}/render`;
  return {
    getSnippets: () => M({
      path: e,
      headers: { "X-WP-Nonce": t }
    }),
    renderSnippet: (a, i) => M({
      path: n,
      method: "POST",
      headers: { "X-WP-Nonce": t },
      data: { key: a, data: i }
    })
  };
}, un = (e) => ({
  getSnippets: () => fetch(e).then((t) => t.json()),
  renderSnippet: (t, n) => fetch(e.endsWith("/") ? `${e}render` : `${e}/render`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: t, data: n })
  }).then((a) => a.json())
});
export {
  Ut as SnippetsApp,
  un as createChromeApi,
  on as createWordpressApi
};
//# sourceMappingURL=snippo-ui.es.js.map
