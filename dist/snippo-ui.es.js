import qe, { useState as N, useEffect as le } from "react";
var q = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function Ye() {
  if (de) return $;
  de = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), a.key !== void 0 && (c = "" + a.key), "key" in a) {
      s = {};
      for (var l in a)
        l !== "key" && (s[l] = a[l]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: n,
      key: c,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return $.Fragment = t, $.jsx = r, $.jsxs = r, $;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function ze() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === $e ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case h:
          return "Fragment";
        case k:
          return "Profiler";
        case P:
          return "StrictMode";
        case p:
          return "Suspense";
        case _:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case w:
            return "Portal";
          case C:
            return (i.displayName || "Context") + ".Provider";
          case F:
            return (i._context.displayName || "Context") + ".Consumer";
          case o:
            var m = i.render;
            return i = i.displayName, i || (i = m.displayName || m.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case T:
            return m = i.displayName || null, m !== null ? m : e(i.type) || "Memo";
          case E:
            m = i._payload, i = i._init;
            try {
              return e(i(m));
            } catch {
            }
        }
      return null;
    }
    function t(i) {
      return "" + i;
    }
    function r(i) {
      try {
        t(i);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var v = m.error, A = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return v.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(i);
      }
    }
    function n(i) {
      if (i === h) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === E)
        return "<...>";
      try {
        var m = e(i);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var i = X.A;
      return i === null ? null : i.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(i) {
      if (se.call(i, "key")) {
        var m = Object.getOwnPropertyDescriptor(i, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function l(i, m) {
      function v() {
        ae || (ae = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: v,
        configurable: !0
      });
    }
    function f() {
      var i = e(this.type);
      return ie[i] || (ie[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function d(i, m, v, A, I, j, Q, V) {
      return v = j.ref, i = {
        $$typeof: b,
        type: i,
        key: m,
        props: j,
        _owner: I
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(i, "ref", { enumerable: !1, value: null }), i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(i, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(i, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function y(i, m, v, A, I, j, Q, V) {
      var R = m.children;
      if (R !== void 0)
        if (A)
          if (He(R)) {
            for (A = 0; A < R.length; A++)
              u(R[A]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(R);
      if (se.call(m, "key")) {
        R = e(i);
        var L = Object.keys(m).filter(function(Ue) {
          return Ue !== "key";
        });
        A = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", ue[R + A] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          R,
          L,
          R
        ), ue[R + A] = !0);
      }
      if (R = null, v !== void 0 && (r(v), R = "" + v), c(m) && (r(m.key), R = "" + m.key), "key" in m) {
        v = {};
        for (var Z in m)
          Z !== "key" && (v[Z] = m[Z]);
      } else v = m;
      return R && l(
        v,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), d(
        i,
        R,
        j,
        I,
        a(),
        v,
        Q,
        V
      );
    }
    function u(i) {
      typeof i == "object" && i !== null && i.$$typeof === b && i._store && (i._store.validated = 1);
    }
    var g = qe, b = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), C = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), $e = Symbol.for("react.client.reference"), X = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = Object.prototype.hasOwnProperty, He = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var ae, ie = {}, oe = g["react-stack-bottom-frame"].bind(
      g,
      s
    )(), ce = G(n(s)), ue = {};
    H.Fragment = h, H.jsx = function(i, m, v, A, I) {
      var j = 1e4 > X.recentlyCreatedOwnerStacks++;
      return y(
        i,
        m,
        v,
        !1,
        A,
        I,
        j ? Error("react-stack-top-frame") : oe,
        j ? G(n(i)) : ce
      );
    }, H.jsxs = function(i, m, v, A, I) {
      var j = 1e4 > X.recentlyCreatedOwnerStacks++;
      return y(
        i,
        m,
        v,
        !0,
        A,
        I,
        j ? Error("react-stack-top-frame") : oe,
        j ? G(n(i)) : ce
      );
    };
  }()), H;
}
var pe;
function Je() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? q.exports = Ye() : q.exports = ze()), q.exports;
}
var S = Je();
const Ot = ({ api: e }) => {
  const [t, r] = N({}), [n, a] = N(""), [s, c] = N([]), [l, f] = N({}), [d, y] = N(""), [u, g] = N(""), [b, w] = N(!1);
  le(() => {
    e.getSnippets().then(r).catch((o) => g(o.message || "Error fetching snippets"));
  }, [e]), le(() => {
    n && t[n] && (c(t[n].fields || []), f({}), y(""), g(""), w(!1), (!t[n].fields || t[n].fields.length === 0) && e.renderSnippet(n, {}).then((o) => y(o.output)).catch((o) => g(o.message || "Error rendering snippet")));
  }, [n, t, e]);
  const h = (o, p) => {
    f({ ...l, [o]: p });
  }, P = (o) => {
    o.preventDefault(), g(""), y(""), w(!1), e.renderSnippet(n, l).then((p) => y(p.output)).catch((p) => g(p.message || "Error rendering snippet"));
  }, k = () => {
    d && navigator.clipboard.writeText(d).then(() => {
      w(!0), setTimeout(() => w(!1), 1500);
    });
  }, F = s.every(
    (o) => !o.required || l[o.name] && l[o.name].toString().trim() !== ""
  ), C = Object.keys(t).map((o) => ({
    value: o,
    label: t[o].meta && t[o].meta.title ? t[o].meta.title : o
  }));
  return /* @__PURE__ */ S.jsxs("div", { children: [
    /* @__PURE__ */ S.jsxs(
      "select",
      {
        value: n,
        onChange: (o) => a(o.target.value),
        style: { maxWidth: 400 },
        children: [
          /* @__PURE__ */ S.jsx("option", { value: "", children: "Select a snippet" }),
          C.map((o) => /* @__PURE__ */ S.jsx("option", { value: o.value, children: o.label }, o.value))
        ]
      }
    ),
    s.length > 0 && /* @__PURE__ */ S.jsxs("form", { onSubmit: P, className: "snippetsapp-form", children: [
      s.map((o) => /* @__PURE__ */ S.jsxs("div", { className: "snippetsapp-field", children: [
        /* @__PURE__ */ S.jsx(
          "label",
          {
            htmlFor: `snippetsapp-field-${o.name}`,
            className: "snippetsapp-label",
            children: o.label || o.name
          }
        ),
        /* @__PURE__ */ S.jsx(
          "input",
          {
            id: `snippetsapp-field-${o.name}`,
            type: "text",
            value: l[o.name] || "",
            onChange: (p) => h(o.name, p.target.value),
            required: o.required,
            className: "snippetsapp-input regular-text"
          }
        )
      ] }, o.name)),
      /* @__PURE__ */ S.jsx("div", { className: "snippetsapp-form-buttons", children: /* @__PURE__ */ S.jsx(
        "button",
        {
          type: "submit",
          className: "button button-primary snippetsapp-submit-button",
          disabled: !F,
          children: "Generate"
        }
      ) })
    ] }),
    d && /* @__PURE__ */ S.jsx("div", { className: "snippetsapp-output-container", children: /* @__PURE__ */ S.jsxs("div", { className: "snippetsapp-output-content", children: [
      /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "snippetsapp-output-text",
          dangerouslySetInnerHTML: { __html: d }
        }
      ),
      /* @__PURE__ */ S.jsx(
        "button",
        {
          type: "button",
          onClick: k,
          className: "snippetsapp-copy-button",
          children: b ? "Copied!" : "Copy"
        }
      )
    ] }) }),
    u && /* @__PURE__ */ S.jsx("div", { className: "snippetsapp-error-message", children: u })
  ] });
};
var K = {}, he;
function We() {
  return he || (he = 1, function(e) {
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
      function r(l) {
        return a(c(l), arguments);
      }
      function n(l, f) {
        return r.apply(null, [l].concat(f || []));
      }
      function a(l, f) {
        var d = 1, y = l.length, u, g = "", b, w, h, P, k, F, C, o;
        for (b = 0; b < y; b++)
          if (typeof l[b] == "string")
            g += l[b];
          else if (typeof l[b] == "object") {
            if (h = l[b], h.keys)
              for (u = f[d], w = 0; w < h.keys.length; w++) {
                if (u == null)
                  throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', h.keys[w], h.keys[w - 1]));
                u = u[h.keys[w]];
              }
            else h.param_no ? u = f[h.param_no] : u = f[d++];
            if (t.not_type.test(h.type) && t.not_primitive.test(h.type) && u instanceof Function && (u = u()), t.numeric_arg.test(h.type) && typeof u != "number" && isNaN(u))
              throw new TypeError(r("[sprintf] expecting number but found %T", u));
            switch (t.number.test(h.type) && (C = u >= 0), h.type) {
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
                u = JSON.stringify(u, null, h.width ? parseInt(h.width) : 0);
                break;
              case "e":
                u = h.precision ? parseFloat(u).toExponential(h.precision) : parseFloat(u).toExponential();
                break;
              case "f":
                u = h.precision ? parseFloat(u).toFixed(h.precision) : parseFloat(u);
                break;
              case "g":
                u = h.precision ? String(Number(u.toPrecision(h.precision))) : parseFloat(u);
                break;
              case "o":
                u = (parseInt(u, 10) >>> 0).toString(8);
                break;
              case "s":
                u = String(u), u = h.precision ? u.substring(0, h.precision) : u;
                break;
              case "t":
                u = String(!!u), u = h.precision ? u.substring(0, h.precision) : u;
                break;
              case "T":
                u = Object.prototype.toString.call(u).slice(8, -1).toLowerCase(), u = h.precision ? u.substring(0, h.precision) : u;
                break;
              case "u":
                u = parseInt(u, 10) >>> 0;
                break;
              case "v":
                u = u.valueOf(), u = h.precision ? u.substring(0, h.precision) : u;
                break;
              case "x":
                u = (parseInt(u, 10) >>> 0).toString(16);
                break;
              case "X":
                u = (parseInt(u, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            t.json.test(h.type) ? g += u : (t.number.test(h.type) && (!C || h.sign) ? (o = C ? "+" : "-", u = u.toString().replace(t.sign, "")) : o = "", k = h.pad_char ? h.pad_char === "0" ? "0" : h.pad_char.charAt(1) : " ", F = h.width - (o + u).length, P = h.width && F > 0 ? k.repeat(F) : "", g += h.align ? o + u + P : k === "0" ? o + P + u : P + o + u);
          }
        return g;
      }
      var s = /* @__PURE__ */ Object.create(null);
      function c(l) {
        if (s[l])
          return s[l];
        for (var f = l, d, y = [], u = 0; f; ) {
          if ((d = t.text.exec(f)) !== null)
            y.push(d[0]);
          else if ((d = t.modulo.exec(f)) !== null)
            y.push("%");
          else if ((d = t.placeholder.exec(f)) !== null) {
            if (d[2]) {
              u |= 1;
              var g = [], b = d[2], w = [];
              if ((w = t.key.exec(b)) !== null)
                for (g.push(w[1]); (b = b.substring(w[0].length)) !== ""; )
                  if ((w = t.key_access.exec(b)) !== null)
                    g.push(w[1]);
                  else if ((w = t.index_access.exec(b)) !== null)
                    g.push(w[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              d[2] = g;
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
          f = f.substring(d[0].length);
        }
        return s[l] = y;
      }
      e.sprintf = r, e.vsprintf = n, typeof window < "u" && (window.sprintf = r, window.vsprintf = n);
    })();
  }(K)), K;
}
We();
var B, Oe, U, Pe;
B = {
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
Oe = ["(", "?"];
U = {
  ")": ["("],
  ":": ["?", "?:"]
};
Pe = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
function Xe(e) {
  for (var t = [], r = [], n, a, s, c; n = e.match(Pe); ) {
    for (a = n[0], s = e.substr(0, n.index).trim(), s && t.push(s); c = r.pop(); ) {
      if (U[a]) {
        if (U[a][0] === c) {
          a = U[a][1] || a;
          break;
        }
      } else if (Oe.indexOf(c) >= 0 || B[c] < B[a]) {
        r.push(c);
        break;
      }
      t.push(c);
    }
    U[a] || r.push(a), e = e.substr(n.index + a.length);
  }
  return e = e.trim(), e && t.push(e), t.concat(r.reverse());
}
var Ge = {
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
function Qe(e, t) {
  var r = [], n, a, s, c, l, f;
  for (n = 0; n < e.length; n++) {
    if (l = e[n], c = Ge[l], c) {
      for (a = c.length, s = Array(a); a--; )
        s[a] = r.pop();
      try {
        f = c.apply(null, s);
      } catch (d) {
        return d;
      }
    } else t.hasOwnProperty(l) ? f = t[l] : f = +l;
    r.push(f);
  }
  return r[0];
}
function Ve(e) {
  var t = Xe(e);
  return function(r) {
    return Qe(t, r);
  };
}
function Ze(e) {
  var t = Ve(e);
  return function(r) {
    return +t({ n: r });
  };
}
var me = {
  contextDelimiter: "",
  onMissingKey: null
};
function Ke(e) {
  var t, r, n;
  for (t = e.split(";"), r = 0; r < t.length; r++)
    if (n = t[r].trim(), n.indexOf("plural=") === 0)
      return n.substr(7);
}
function te(e, t) {
  var r;
  this.data = e, this.pluralForms = {}, this.options = {};
  for (r in me)
    this.options[r] = t !== void 0 && r in t ? t[r] : me[r];
}
te.prototype.getPluralForm = function(e, t) {
  var r = this.pluralForms[e], n, a, s;
  return r || (n = this.data[e][""], s = n["Plural-Forms"] || n["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
  // string property on a key to guarantee this as metadata.
  // @ts-ignore
  n.plural_forms, typeof s != "function" && (a = Ke(
    n["Plural-Forms"] || n["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
    // string property on a key to guarantee this as metadata.
    // @ts-ignore
    n.plural_forms
  ), s = Ze(a)), r = this.pluralForms[e] = s), r(t);
};
te.prototype.dcnpgettext = function(e, t, r, n, a) {
  var s, c, l;
  return a === void 0 ? s = 0 : s = this.getPluralForm(e, a), c = r, t && (c = t + this.options.contextDelimiter + r), l = this.data[e][c], l && l[s] ? l[s] : (this.options.onMissingKey && this.options.onMissingKey(r, e), s === 0 ? r : n);
};
const ye = {
  "": {
    /** @param {number} n */
    plural_forms(e) {
      return e === 1 ? 0 : 1;
    }
  }
}, Be = /^i18n\.(n?gettext|has_translation)(_|$)/, et = (e, t, r) => {
  const n = new te({}), a = /* @__PURE__ */ new Set(), s = () => {
    a.forEach((o) => o());
  }, c = (o) => (a.add(o), () => a.delete(o)), l = (o = "default") => n.data[o], f = (o, p = "default") => {
    n.data[p] = {
      ...n.data[p],
      ...o
    }, n.data[p][""] = {
      ...ye[""],
      ...n.data[p]?.[""]
    }, delete n.pluralForms[p];
  }, d = (o, p) => {
    f(o, p), s();
  }, y = (o, p = "default") => {
    n.data[p] = {
      ...n.data[p],
      ...o,
      // Populate default domain configuration (supported locale date which omits
      // a plural forms expression).
      "": {
        ...ye[""],
        ...n.data[p]?.[""],
        ...o?.[""]
      }
    }, delete n.pluralForms[p], s();
  }, u = (o, p) => {
    n.data = {}, n.pluralForms = {}, d(o, p);
  }, g = (o = "default", p, _, T, E) => (n.data[o] || f(void 0, o), n.dcnpgettext(o, p, _, T, E)), b = (o = "default") => o, w = (o, p) => {
    let _ = g(p, void 0, o);
    return r ? (_ = /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.gettext", _, o, p), /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.gettext_" + b(p), _, o, p)) : _;
  }, h = (o, p, _) => {
    let T = g(_, p, o);
    return r ? (T = /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.gettext_with_context", T, o, p, _), /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.gettext_with_context_" + b(_), T, o, p, _)) : T;
  }, P = (o, p, _, T) => {
    let E = g(T, void 0, o, p, _);
    return r ? (E = /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.ngettext", E, o, p, _, T), /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.ngettext_" + b(T), E, o, p, _, T)) : E;
  }, k = (o, p, _, T, E) => {
    let M = g(E, T, o, p, _);
    return r ? (M = /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.ngettext_with_context", M, o, p, _, T, E), /** @type {string} */
    /** @type {*} */
    r.applyFilters("i18n.ngettext_with_context_" + b(E), M, o, p, _, T, E)) : M;
  }, F = () => h("ltr", "text direction") === "rtl", C = (o, p, _) => {
    const T = p ? p + "" + o : o;
    let E = !!n.data?.[_ ?? "default"]?.[T];
    return r && (E = /** @type { boolean } */
    /** @type {*} */
    r.applyFilters("i18n.has_translation", E, o, p, _), E = /** @type { boolean } */
    /** @type {*} */
    r.applyFilters("i18n.has_translation_" + b(_), E, o, p, _)), E;
  };
  if (r) {
    const o = (p) => {
      Be.test(p) && s();
    };
    r.addAction("hookAdded", "core/i18n", o), r.addAction("hookRemoved", "core/i18n", o);
  }
  return {
    getLocaleData: l,
    setLocaleData: d,
    addLocaleData: y,
    resetLocaleData: u,
    subscribe: c,
    __: w,
    _x: h,
    _n: P,
    _nx: k,
    isRTL: F,
    hasTranslation: C
  };
};
function je(e) {
  return typeof e != "string" || e === "" ? (console.error("The namespace must be a non-empty string."), !1) : /^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) ? !0 : (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1);
}
function re(e) {
  return typeof e != "string" || e === "" ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."), !1) : /^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) ? !0 : (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1);
}
function ge(e, t) {
  return function(n, a, s, c = 10) {
    const l = e[t];
    if (!re(n) || !je(a))
      return;
    if (typeof s != "function") {
      console.error("The hook callback must be a function.");
      return;
    }
    if (typeof c != "number") {
      console.error("If specified, the hook priority must be a number.");
      return;
    }
    const f = {
      callback: s,
      priority: c,
      namespace: a
    };
    if (l[n]) {
      const d = l[n].handlers;
      let y;
      for (y = d.length; y > 0 && !(c >= d[y - 1].priority); y--)
        ;
      y === d.length ? d[y] = f : d.splice(y, 0, f), l.__current.forEach((u) => {
        u.name === n && u.currentIndex >= y && u.currentIndex++;
      });
    } else
      l[n] = {
        handlers: [f],
        runs: 0
      };
    n !== "hookAdded" && e.doAction("hookAdded", n, a, s, c);
  };
}
function Y(e, t, r = !1) {
  return function(a, s) {
    const c = e[t];
    if (!re(a) || !r && !je(s))
      return;
    if (!c[a])
      return 0;
    let l = 0;
    if (r)
      l = c[a].handlers.length, c[a] = {
        runs: c[a].runs,
        handlers: []
      };
    else {
      const f = c[a].handlers;
      for (let d = f.length - 1; d >= 0; d--)
        f[d].namespace === s && (f.splice(d, 1), l++, c.__current.forEach((y) => {
          y.name === a && y.currentIndex >= d && y.currentIndex--;
        }));
    }
    return a !== "hookRemoved" && e.doAction("hookRemoved", a, s), l;
  };
}
function _e(e, t) {
  return function(n, a) {
    const s = e[t];
    return typeof a < "u" ? n in s && s[n].handlers.some((c) => c.namespace === a) : n in s;
  };
}
function z(e, t, r, n) {
  return function(s, ...c) {
    const l = e[t];
    l[s] || (l[s] = {
      handlers: [],
      runs: 0
    }), l[s].runs++;
    const f = l[s].handlers;
    if (process.env.NODE_ENV !== "production" && s !== "hookAdded" && l.all && f.push(...l.all.handlers), !f || !f.length)
      return r ? c[0] : void 0;
    const d = {
      name: s,
      currentIndex: 0
    };
    async function y() {
      try {
        l.__current.add(d);
        let g = r ? c[0] : void 0;
        for (; d.currentIndex < f.length; )
          g = await f[d.currentIndex].callback.apply(null, c), r && (c[0] = g), d.currentIndex++;
        return r ? g : void 0;
      } finally {
        l.__current.delete(d);
      }
    }
    function u() {
      try {
        l.__current.add(d);
        let g = r ? c[0] : void 0;
        for (; d.currentIndex < f.length; )
          g = f[d.currentIndex].callback.apply(null, c), r && (c[0] = g), d.currentIndex++;
        return r ? g : void 0;
      } finally {
        l.__current.delete(d);
      }
    }
    return (n ? y : u)();
  };
}
function be(e, t) {
  return function() {
    var n;
    const a = e[t];
    return (n = Array.from(a.__current).at(-1)?.name) !== null && n !== void 0 ? n : null;
  };
}
function we(e, t) {
  return function(n) {
    const a = e[t];
    return typeof n > "u" ? a.__current.size > 0 : Array.from(a.__current).some((s) => s.name === n);
  };
}
function ve(e, t) {
  return function(n) {
    const a = e[t];
    if (re(n))
      return a[n] && a[n].runs ? a[n].runs : 0;
  };
}
class tt {
  constructor() {
    this.actions = /* @__PURE__ */ Object.create(null), this.actions.__current = /* @__PURE__ */ new Set(), this.filters = /* @__PURE__ */ Object.create(null), this.filters.__current = /* @__PURE__ */ new Set(), this.addAction = ge(this, "actions"), this.addFilter = ge(this, "filters"), this.removeAction = Y(this, "actions"), this.removeFilter = Y(this, "filters"), this.hasAction = _e(this, "actions"), this.hasFilter = _e(this, "filters"), this.removeAllActions = Y(this, "actions", !0), this.removeAllFilters = Y(this, "filters", !0), this.doAction = z(this, "actions", !1, !1), this.doActionAsync = z(this, "actions", !1, !0), this.applyFilters = z(this, "filters", !0, !1), this.applyFiltersAsync = z(this, "filters", !0, !0), this.currentAction = be(this, "actions"), this.currentFilter = be(this, "filters"), this.doingAction = we(this, "actions"), this.doingFilter = we(this, "filters"), this.didAction = ve(this, "actions"), this.didFilter = ve(this, "filters");
  }
}
function rt() {
  return new tt();
}
const ke = rt(), {
  addAction: Pt,
  addFilter: jt,
  removeAction: kt,
  removeFilter: Ft,
  hasAction: Ct,
  hasFilter: It,
  removeAllActions: Nt,
  removeAllFilters: Dt,
  doAction: Mt,
  doActionAsync: Lt,
  applyFilters: $t,
  applyFiltersAsync: Ht,
  currentAction: Ut,
  currentFilter: qt,
  doingAction: Yt,
  doingFilter: zt,
  didAction: Jt,
  didFilter: Wt,
  actions: Xt,
  filters: Gt
} = ke, x = et(void 0, void 0, ke);
x.getLocaleData.bind(x);
x.setLocaleData.bind(x);
x.resetLocaleData.bind(x);
x.subscribe.bind(x);
const J = x.__.bind(x);
x._x.bind(x);
x._n.bind(x);
x._nx.bind(x);
x.isRTL.bind(x);
x.hasTranslation.bind(x);
function nt(e) {
  const t = (r, n) => {
    const {
      headers: a = {}
    } = r;
    for (const s in a)
      if (s.toLowerCase() === "x-wp-nonce" && a[s] === t.nonce)
        return n(r);
    return n({
      ...r,
      headers: {
        ...a,
        "X-WP-Nonce": t.nonce
      }
    });
  };
  return t.nonce = e, t;
}
const Fe = (e, t) => {
  let r = e.path, n, a;
  return typeof e.namespace == "string" && typeof e.endpoint == "string" && (n = e.namespace.replace(/^\/|\/$/g, ""), a = e.endpoint.replace(/^\//, ""), a ? r = n + "/" + a : r = n), delete e.namespace, delete e.endpoint, t({
    ...e,
    path: r
  });
}, st = (e) => (t, r) => Fe(t, (n) => {
  let a = n.url, s = n.path, c;
  return typeof s == "string" && (c = e, e.indexOf("?") !== -1 && (s = s.replace("?", "&")), s = s.replace(/^\//, ""), typeof c == "string" && c.indexOf("?") !== -1 && (s = s.replace("?", "&")), a = c + s), r({
    ...n,
    url: a
  });
});
function at(e) {
  let t;
  try {
    t = new URL(e, "http://example.com").search.substring(1);
  } catch {
  }
  if (t)
    return t;
}
function Ce(e) {
  let t = "";
  const r = Object.entries(e);
  let n;
  for (; n = r.shift(); ) {
    let [a, s] = n;
    if (Array.isArray(s) || s && s.constructor === Object) {
      const l = Object.entries(s).reverse();
      for (const [f, d] of l)
        r.unshift([`${a}[${f}]`, d]);
    } else s !== void 0 && (s === null && (s = ""), t += "&" + [a, s].map(encodeURIComponent).join("="));
  }
  return t.substr(1);
}
function it(e) {
  const t = /^\S+?(#[^\s\?]*)/.exec(e);
  if (t)
    return t[1];
}
function ot(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function ct(e, t, r) {
  const n = t.length, a = n - 1;
  for (let s = 0; s < n; s++) {
    let c = t[s];
    !c && Array.isArray(e) && (c = e.length.toString()), c = ["__proto__", "constructor", "prototype"].includes(c) ? c.toUpperCase() : c;
    const l = !isNaN(Number(t[s + 1]));
    e[c] = s === a ? (
      // If at end of path, assign the intended value.
      r
    ) : (
      // Otherwise, advance to the next object in the path, creating
      // it if it does not yet exist.
      e[c] || (l ? [] : {})
    ), Array.isArray(e[c]) && !l && (e[c] = {
      ...e[c]
    }), e = e[c];
  }
}
function W(e) {
  return (at(e) || "").replace(/\+/g, "%20").split("&").reduce((t, r) => {
    const [n, a = ""] = r.split("=").filter(Boolean).map(ot);
    if (n) {
      const s = n.replace(/\]/g, "").split("[");
      ct(t, s, a);
    }
    return t;
  }, /* @__PURE__ */ Object.create(null));
}
function D(e = "", t) {
  if (!t || !Object.keys(t).length)
    return e;
  const r = it(e) || "";
  let n = e.replace(r, "");
  const a = e.indexOf("?");
  return a !== -1 && (t = Object.assign(W(e), t), n = n.substr(0, a)), n + "?" + Ce(t) + r;
}
function ee(e, t) {
  return W(e)[t];
}
function Ee(e, t) {
  return ee(e, t) !== void 0;
}
function xe(e, ...t) {
  const r = e.replace(/^[^#]*/, "");
  e = e.replace(/#.*/, "");
  const n = e.indexOf("?");
  if (n === -1)
    return e + r;
  const a = W(e), s = e.substr(0, n);
  t.forEach((f) => delete a[f]);
  const c = Ce(a);
  return (c ? s + "?" + c : s) + r;
}
function Te(e) {
  const t = e.split("?"), r = t[1], n = t[0];
  return r ? n + "?" + r.split("&").map((a) => a.split("=")).map((a) => a.map(decodeURIComponent)).sort((a, s) => a[0].localeCompare(s[0])).map((a) => a.map(encodeURIComponent)).map((a) => a.join("=")).join("&") : n;
}
function ut(e) {
  const t = Object.fromEntries(Object.entries(e).map(([r, n]) => [Te(r), n]));
  return (r, n) => {
    const {
      parse: a = !0
    } = r;
    let s = r.path;
    if (!s && r.url) {
      const {
        rest_route: f,
        ...d
      } = W(r.url);
      typeof f == "string" && (s = D(f, d));
    }
    if (typeof s != "string")
      return n(r);
    const c = r.method || "GET", l = Te(s);
    if (c === "GET" && t[l]) {
      const f = t[l];
      return delete t[l], Ae(f, !!a);
    } else if (c === "OPTIONS" && t[c] && t[c][l]) {
      const f = t[c][l];
      return delete t[c][l], Ae(f, !!a);
    }
    return n(r);
  };
}
function Ae(e, t) {
  if (t)
    return Promise.resolve(e.body);
  try {
    return Promise.resolve(new window.Response(JSON.stringify(e.body), {
      status: 200,
      statusText: "OK",
      headers: e.headers
    }));
  } catch {
    return Object.entries(e.headers).forEach(([r, n]) => {
      r.toLowerCase() === "link" && (e.headers[r] = n.replace(/<([^>]+)>/, (a, s) => `<${encodeURI(s)}>`));
    }), Promise.resolve(t ? e.body : new window.Response(JSON.stringify(e.body), {
      status: 200,
      statusText: "OK",
      headers: e.headers
    }));
  }
}
const lt = ({
  path: e,
  url: t,
  ...r
}, n) => ({
  ...r,
  url: t && D(t, n),
  path: e && D(e, n)
}), Re = (e) => e.json ? e.json() : Promise.reject(e), dt = (e) => {
  if (!e)
    return {};
  const t = e.match(/<([^>]+)>; rel="next"/);
  return t ? {
    next: t[1]
  } : {};
}, Se = (e) => {
  const {
    next: t
  } = dt(e.headers.get("link"));
  return t;
}, ft = (e) => {
  const t = !!e.path && e.path.indexOf("per_page=-1") !== -1, r = !!e.url && e.url.indexOf("per_page=-1") !== -1;
  return t || r;
}, Ie = async (e, t) => {
  if (e.parse === !1 || !ft(e))
    return t(e);
  const r = await O({
    ...lt(e, {
      per_page: 100
    }),
    // Ensure headers are returned for page 1.
    parse: !1
  }), n = await Re(r);
  if (!Array.isArray(n))
    return n;
  let a = Se(r);
  if (!a)
    return n;
  let s = (
    /** @type {any[]} */
    [].concat(n)
  );
  for (; a; ) {
    const c = await O({
      ...e,
      // Ensure the URL for the next page is used instead of any provided path.
      path: void 0,
      url: a,
      // Ensure we still get headers so we can identify the next page.
      parse: !1
    }), l = await Re(c);
    s = s.concat(l), a = Se(c);
  }
  return s;
}, pt = /* @__PURE__ */ new Set(["PATCH", "PUT", "DELETE"]), ht = "GET", mt = (e, t) => {
  const {
    method: r = ht
  } = e;
  return pt.has(r.toUpperCase()) && (e = {
    ...e,
    headers: {
      ...e.headers,
      "X-HTTP-Method-Override": r,
      "Content-Type": "application/json"
    },
    method: "POST"
  }), t(e);
}, yt = (e, t) => (typeof e.url == "string" && !Ee(e.url, "_locale") && (e.url = D(e.url, {
  _locale: "user"
})), typeof e.path == "string" && !Ee(e.path, "_locale") && (e.path = D(e.path, {
  _locale: "user"
})), t(e)), gt = (e, t = !0) => t ? e.status === 204 ? null : e.json ? e.json() : Promise.reject(e) : e, _t = (e) => {
  const t = {
    code: "invalid_json",
    message: J("The response is not a valid JSON response.")
  };
  if (!e || !e.json)
    throw t;
  return e.json().catch(() => {
    throw t;
  });
}, Ne = (e, t = !0) => Promise.resolve(gt(e, t)).catch((r) => ne(r, t));
function ne(e, t = !0) {
  if (!t)
    throw e;
  return _t(e).then((r) => {
    const n = {
      code: "unknown_error",
      message: J("An unknown error occurred.")
    };
    throw r || n;
  });
}
function bt(e) {
  const t = !!e.method && e.method === "POST";
  return (!!e.path && e.path.indexOf("/wp/v2/media") !== -1 || !!e.url && e.url.indexOf("/wp/v2/media") !== -1) && t;
}
const wt = (e, t) => {
  if (!bt(e))
    return t(e);
  let r = 0;
  const n = 5, a = (s) => (r++, t({
    path: `/wp/v2/media/${s}/post-process`,
    method: "POST",
    data: {
      action: "create-image-subsizes"
    },
    parse: !1
  }).catch(() => r < n ? a(s) : (t({
    path: `/wp/v2/media/${s}?force=true`,
    method: "DELETE"
  }), Promise.reject())));
  return t({
    ...e,
    parse: !1
  }).catch((s) => {
    if (!s.headers)
      return Promise.reject(s);
    const c = s.headers.get("x-wp-upload-attachment-id");
    return s.status >= 500 && s.status < 600 && c ? a(c).catch(() => e.parse !== !1 ? Promise.reject({
      code: "post_process",
      message: J("Media upload failed. If this is a photo or a large image, please scale it down and try again.")
    }) : Promise.reject(s)) : ne(s, e.parse);
  }).then((s) => Ne(s, e.parse));
}, vt = (e) => (t, r) => {
  if (typeof t.url == "string") {
    const n = ee(t.url, "wp_theme_preview");
    n === void 0 ? t.url = D(t.url, {
      wp_theme_preview: e
    }) : n === "" && (t.url = xe(t.url, "wp_theme_preview"));
  }
  if (typeof t.path == "string") {
    const n = ee(t.path, "wp_theme_preview");
    n === void 0 ? t.path = D(t.path, {
      wp_theme_preview: e
    }) : n === "" && (t.path = xe(t.path, "wp_theme_preview"));
  }
  return r(t);
}, Et = {
  // The backend uses the Accept header as a condition for considering an
  // incoming request as a REST request.
  //
  // See: https://core.trac.wordpress.org/ticket/44534
  Accept: "application/json, */*;q=0.1"
}, xt = {
  credentials: "include"
}, De = [yt, Fe, mt, Ie];
function Tt(e) {
  De.unshift(e);
}
const Me = (e) => {
  if (e.status >= 200 && e.status < 300)
    return e;
  throw e;
}, At = (e) => {
  const {
    url: t,
    path: r,
    data: n,
    parse: a = !0,
    ...s
  } = e;
  let {
    body: c,
    headers: l
  } = e;
  return l = {
    ...Et,
    ...l
  }, n && (c = JSON.stringify(n), l["Content-Type"] = "application/json"), window.fetch(
    // Fall back to explicitly passing `window.location` which is the behavior if `undefined` is passed.
    t || r || window.location.href,
    {
      ...xt,
      ...s,
      body: c,
      headers: l
    }
  ).then((d) => Promise.resolve(d).then(Me).catch((y) => ne(y, a)).then((y) => Ne(y, a)), (d) => {
    throw d && d.name === "AbortError" ? d : {
      code: "fetch_error",
      message: J("You are probably offline.")
    };
  });
};
let Le = At;
function Rt(e) {
  Le = e;
}
function O(e) {
  return De.reduceRight((r, n) => (a) => n(a, r), Le)(e).catch((r) => r.code !== "rest_cookie_invalid_nonce" ? Promise.reject(r) : window.fetch(O.nonceEndpoint).then(Me).then((n) => n.text()).then((n) => (O.nonceMiddleware.nonce = n, O(e))));
}
O.use = Tt;
O.setFetchHandler = Rt;
O.createNonceMiddleware = nt;
O.createPreloadingMiddleware = ut;
O.createRootURLMiddleware = st;
O.fetchAllMiddleware = Ie;
O.mediaUploadMiddleware = wt;
O.createThemePreviewMiddleware = vt;
const Qt = (e, t) => {
  const r = e.endsWith("/") ? `${e}render` : `${e}/render`;
  return {
    getSnippets: () => O({
      path: e,
      headers: { "X-WP-Nonce": t }
    }),
    renderSnippet: (n, a) => O({
      path: r,
      method: "POST",
      headers: { "X-WP-Nonce": t },
      data: { key: n, data: a }
    })
  };
}, Vt = (e) => ({
  getSnippets: () => fetch(e).then((t) => t.json()),
  renderSnippet: (t, r) => fetch(e.endsWith("/") ? `${e}render` : `${e}/render`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: t, data: r })
  }).then((n) => n.json())
});
export {
  Ot as SnippetsApp,
  Vt as createChromeApi,
  Qt as createWordpressApi
};
