import ne, { useState as _, useEffect as V } from "react";
var P = { exports: {} }, O = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function ae() {
  if (X) return O;
  X = 1;
  var c = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function v(o, p, i) {
    var R = null;
    if (i !== void 0 && (R = "" + i), p.key !== void 0 && (R = "" + p.key), "key" in p) {
      i = {};
      for (var f in p)
        f !== "key" && (i[f] = p[f]);
    } else i = p;
    return p = i.ref, {
      $$typeof: c,
      type: o,
      key: R,
      ref: p !== void 0 ? p : null,
      props: i
    };
  }
  return O.Fragment = u, O.jsx = v, O.jsxs = v, O;
}
var k = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function se() {
  return H || (H = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case S:
          return "Fragment";
        case y:
          return "Profiler";
        case w:
          return "StrictMode";
        case b:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case x:
            return "Portal";
          case Y:
            return (e.displayName || "Context") + ".Provider";
          case C:
            return (e._context.displayName || "Context") + ".Consumer";
          case t:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case L:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function v(e) {
      try {
        u(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), u(e);
      }
    }
    function o(e) {
      if (e === S) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === L)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function p() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function R(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function n() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function A() {
      var e = c(this.type);
      return U[e] || (U[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, r, n, a, E, d, I, D) {
      return n = d.ref, e = {
        $$typeof: N,
        type: e,
        key: r,
        props: d,
        _owner: E
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: A
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, n, a, E, d, I, D) {
      var s = r.children;
      if (s !== void 0)
        if (a)
          if (re(s)) {
            for (a = 0; a < s.length; a++)
              j(s[a]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(s);
      if (M.call(r, "key")) {
        s = c(e);
        var g = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        a = 0 < g.length ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}", G[s + a] || (g = 0 < g.length ? "{" + g.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          s,
          g,
          s
        ), G[s + a] = !0);
      }
      if (s = null, n !== void 0 && (v(n), s = "" + n), R(r) && (v(r.key), s = "" + r.key), "key" in r) {
        n = {};
        for (var q in r)
          q !== "key" && (n[q] = r[q]);
      } else n = r;
      return s && f(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        s,
        d,
        E,
        p(),
        n,
        I,
        D
      );
    }
    function j(e) {
      typeof e == "object" && e !== null && e.$$typeof === N && e._store && (e._store.validated = 1);
    }
    var m = ne, N = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), t = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), F = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, re = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var W, U = {}, J = m["react-stack-bottom-frame"].bind(
      m,
      i
    )(), z = $(o(i)), G = {};
    k.Fragment = S, k.jsx = function(e, r, n, a, E) {
      var d = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        n,
        !1,
        a,
        E,
        d ? Error("react-stack-top-frame") : J,
        d ? $(o(e)) : z
      );
    }, k.jsxs = function(e, r, n, a, E) {
      var d = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        n,
        !0,
        a,
        E,
        d ? Error("react-stack-top-frame") : J,
        d ? $(o(e)) : z
      );
    };
  }()), k;
}
var B;
function oe() {
  return B || (B = 1, process.env.NODE_ENV === "production" ? P.exports = ae() : P.exports = se()), P.exports;
}
var l = oe();
const ue = ({ api: c }) => {
  const [u, v] = _({}), [o, p] = _(""), [i, R] = _([]), [f, A] = _({}), [T, h] = _(""), [j, m] = _(""), [N, x] = _(!1);
  V(() => {
    c.getSnippets().then(v).catch((t) => m(t.message || "Error fetching snippets"));
  }, [c]), V(() => {
    o && u[o] && (R(u[o].fields || []), A({}), h(""), m(""), x(!1), (!u[o].fields || u[o].fields.length === 0) && c.renderSnippet(o, {}).then((t) => h(t.output)).catch((t) => m(t.message || "Error rendering snippet")));
  }, [o, u, c]);
  const S = (t, b) => {
    A({ ...f, [t]: b });
  }, w = (t) => {
    t.preventDefault(), m(""), h(""), x(!1), c.renderSnippet(o, f).then((b) => h(b.output)).catch((b) => m(b.message || "Error rendering snippet"));
  }, y = () => {
    T && navigator.clipboard.writeText(T).then(() => {
      x(!0), setTimeout(() => x(!1), 1500);
    });
  }, C = i.every(
    (t) => !t.required || f[t.name] && f[t.name].toString().trim() !== ""
  ), Y = Object.keys(u).map((t) => ({
    value: t,
    label: u[t].meta && u[t].meta.title ? u[t].meta.title : t
  }));
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        value: o,
        onChange: (t) => p(t.target.value),
        style: { maxWidth: 400 },
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "", children: "Select a snippet" }),
          Y.map((t) => /* @__PURE__ */ l.jsx("option", { value: t.value, children: t.label }, t.value))
        ]
      }
    ),
    i.length > 0 && /* @__PURE__ */ l.jsxs("form", { onSubmit: w, className: "snippetsapp-form", children: [
      i.map((t) => /* @__PURE__ */ l.jsxs("div", { className: "snippetsapp-field", children: [
        /* @__PURE__ */ l.jsx(
          "label",
          {
            htmlFor: `snippetsapp-field-${t.name}`,
            className: "snippetsapp-label",
            children: t.label || t.name
          }
        ),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            id: `snippetsapp-field-${t.name}`,
            type: "text",
            value: f[t.name] || "",
            onChange: (b) => S(t.name, b.target.value),
            required: t.required,
            className: "snippetsapp-input regular-text"
          }
        )
      ] }, t.name)),
      /* @__PURE__ */ l.jsx("div", { className: "snippetsapp-form-buttons", children: /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "submit",
          className: "button button-primary snippetsapp-submit-button",
          disabled: !C,
          children: "Generate"
        }
      ) })
    ] }),
    T && /* @__PURE__ */ l.jsx("div", { className: "snippetsapp-output-container", children: /* @__PURE__ */ l.jsxs("div", { className: "snippetsapp-output-content", children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "snippetsapp-output-text",
          dangerouslySetInnerHTML: { __html: T }
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          onClick: y,
          className: "snippetsapp-copy-button",
          children: N ? "Copied!" : "Copy"
        }
      )
    ] }) }),
    j && /* @__PURE__ */ l.jsx("div", { className: "snippetsapp-error-message", children: j })
  ] });
};
export {
  ue as default
};
