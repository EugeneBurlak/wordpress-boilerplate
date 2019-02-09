/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]);t.head.appendChild(o).parentNode.removeChild(o);
  }function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
  }var b = "3.3.1",
      w = function (e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function () {
      return o.call(this);
    }, get: function (e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function (e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function (e) {
      return w.each(this, e);
    }, map: function (e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function () {
      return this.pushStack(o.apply(this, arguments));
    }, first: function () {
      return this.eq(0);
    }, last: function () {
      return this.eq(-1);
    }, eq: function (e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function () {
      return this.prevObject || this.constructor();
    }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));return a;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e);
    }, noop: function () {}, isPlainObject: function (e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    }, isEmptyObject: function (e) {
      var t;for (t in e) return !1;return !0;
    }, globalEval: function (e) {
      m(e);
    }, each: function (e, t) {
      var n,
          r = 0;if (C(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;return e;
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, makeArray: function (e, t) {
      var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    }, inArray: function (e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    }, merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];return e.length = i, e;
    }, grep: function (e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);return i;
    }, map: function (e, t, n) {
      var r,
          i,
          o = 0,
          s = [];if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);return a.apply([], s);
    }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function (e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function (e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function (e, t) {
      return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function () {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = { apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]);e.length = n - 1;
        } };
    }function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) h[s] = "#" + c + " " + ve(h[s]);v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }return u(e.replace(B, "$1"), t, r, i);
    }function ae() {
      var e = [];function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }return t;
    }function se(e) {
      return e[b] = !0, e;
    }function ue(e) {
      var t = d.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function le(e, t) {
      var n = e.split("|"),
          i = n.length;while (i--) r.attrHandle[n[i]] = t;
    }function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) if (n === t) return -1;return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);return r;
        }return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) a.unshift(n);n = t;while (n = n.parentNode) s.unshift(n);while (a[r] === s[r]) r++;return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) t === e[o] && (i = r.push(o));while (i--) e.splice(r[i], 1);
      }return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) n += i(t);return n;
    }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function (e) {
          var t,
              n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function (e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function (e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function (e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function (e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;if (y) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
                  c[e] = [T, d, x];break;
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        }, PSEUDO: function (e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;while (a--) e[r = O(e, o[a])] = !(n[r] = o[a]);
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        } }, pseudos: { not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }), lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function (t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function (e) {
          return e === h;
        }, focus: function (e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: de(!1), disabled: de(!0), checked: function (e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;return !0;
        }, parent: function (e) {
          return !r.pseudos.empty(e);
        }, header: function (e) {
          return Y.test(e.nodeName);
        }, input: function (e) {
          return G.test(e.nodeName);
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function (e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);return e;
        }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));if (!n) break;
      }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;return r;
    }function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];if (u) {
          while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
        } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
          if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
        }return !1;
      };
    }function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) if (!e[i](t, n, r)) return !1;return !0;
      } : e[0];
    }function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);return n;
    }function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));return a;
    }function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
        }if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;while (c--) (f = v[c]) && l.push(y[c] = f);i(null, v = [], l, u);
            }c = v.length;while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
      }]; u < o; u++) if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
          for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
        }p.push(n);
      }return xe(p);
    }function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function (o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = o && [],
            b = [],
            w = l,
            C = o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) if (y(f, a || d, s)) {
              u.push(f);break;
            }c && (T = E);
          }n && ((f = !y && f) && v--, o && x.push(f));
        }if (v += m, n && m !== v) {
          h = 0;while (y = t[h++]) y(x, b, a, s);if (o) {
            if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));b = we(b);
          }L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }return c && (T = E, l = w), x;
      };return n ? se(o) : o;
    }return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];if (!o) {
        t || (t = a(e)), n = t.length;while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);(o = S(e, Ee(i, r))).selector = e;
      }return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
          }
        }
      }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function (e, t, n) {
    var r = [],
        i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
      if (i && w(e).is(n)) break;r.push(e);
    }return r;
  },
      S = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);return n;
  },
      D = w.expr.match.needsContext;function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function (e) {
      var t,
          n,
          r = this.length,
          i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
      }));for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);return r > 1 ? w.uniqueSort(n) : n;
    }, filter: function (e) {
      return this.pushStack(j(this, e || [], !1));
    }, not: function (e) {
      return this.pushStack(j(this, e || [], !0));
    }, is: function (e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    } });var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);return this;
      }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function (e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    }, closest: function (e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
        o.push(n);break;
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function (e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);return e;
  }w.each({ parent: function (e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function (e) {
      return k(e, "parentNode");
    }, parentsUntil: function (e, t, n) {
      return k(e, "parentNode", n);
    }, next: function (e) {
      return P(e, "nextSibling");
    }, prev: function (e) {
      return P(e, "previousSibling");
    }, nextAll: function (e) {
      return k(e, "nextSibling");
    }, prevAll: function (e) {
      return k(e, "previousSibling");
    }, nextUntil: function (e, t, n) {
      return k(e, "nextSibling", n);
    }, prevUntil: function (e, t, n) {
      return k(e, "previousSibling", n);
    }, siblings: function (e) {
      return S((e.parentNode || {}).firstChild, e);
    }, children: function (e) {
      return S(e.firstChild);
    }, contents: function (e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
    var t = {};return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function () {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
      }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = { add: function () {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      }, remove: function () {
        return w.each(arguments, function (e, t) {
          var n;while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
        }), this;
      }, has: function (e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function () {
        return o && (o = []), this;
      }, disable: function () {
        return i = a = [], o = n = "", this;
      }, disabled: function () {
        return !o;
      }, lock: function () {
        return i = a = [], n || t || (o = n = ""), this;
      }, locked: function () {
        return !!i;
      }, fireWith: function (e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      }, fire: function () {
        return l.fireWith(this, arguments), this;
      }, fired: function () {
        return !!r;
      } };return l;
  };function I(e) {
    return e;
  }function W(e) {
    throw e;
  }function $(e, t, n, r) {
    var i;try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.extend({ Deferred: function (t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = { state: function () {
          return r;
        }, always: function () {
          return o.done(arguments).fail(arguments), this;
        }, "catch": function (e) {
          return i.then(null, e);
        }, pipe: function () {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function (t, r, i) {
          var o = 0;function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function () {
                var e, l;if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        }, promise: function (e) {
          return null != e ? w.extend(e, i) : i;
        } },
          o = {};return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    }, when: function (e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function (e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) $(i[n], s(n), a.reject);return a.promise();
    } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = w.Deferred();w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function (e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    } }), w.ready.then = F.then;function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function (e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;if ("object" === x(n)) {
      i = !0;for (s in n) z(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Q() {
    this.expando = w.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function (e) {
      var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function (e, t, n) {
      var r,
          i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) i[G(r)] = t[r];return i;
    }, get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    }, access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function (e, t) {
      var n,
          r = e[this.expando];if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) delete r[t[n]];
        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function (e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }function ne(e, t, n) {
    var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}K.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function (e) {
      return K.hasData(e) || J.hasData(e);
    }, data: function (e, t, n) {
      return K.access(e, t, n);
    }, removeData: function (e, t) {
      K.remove(e, t);
    }, _data: function (e, t, n) {
      return J.access(e, t, n);
    }, _removeData: function (e, t) {
      J.remove(e, t);
    } }), w.fn.extend({ data: function (e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));J.set(o, "hasDataAttrs", !0);
        }return i;
      }return "object" == typeof e ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function (e) {
      return this.each(function () {
        K.remove(this, e);
      });
    } }), w.extend({ queue: function (e, t, n) {
      var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    }, dequeue: function (e, t) {
      t = t || "fx";var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function () {
        w.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function (e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function (e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function (e) {
      return this.queue(e || "fx", []);
    }, promise: function (e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
        --r || i.resolveWith(o, [o]);
      };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));return s(), i.promise(t);
    } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function (e, t, n, r) {
    var i,
        o,
        a = {};for (o in t) a[o] = e.style[o], e.style[o] = t[o];i = n.apply(e, r || []);for (o in t) e.style[o] = a[o];return i;
  };function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;c *= 2, w.style(e, t, c + l), n = n || [];
    }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }var le = {};function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);return e;
  }w.fn.extend({ show: function () {
      return fe(this, !0);
    }, hide: function () {
      return fe(this);
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    } });var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
    var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) a = a.lastChild;w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));f.textContent = "", d = 0;while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
      c = 0;while (o = a[c++]) he.test(o.type || "") && n.push(o);
    }return f;
  }!function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function ke() {
    return !1;
  }function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }function De(e, t, n, r, i, o) {
    var a, s;if ("object" == typeof t) {
      "string" != typeof n && (r = r || n, n = void 0);for (s in t) De(e, s, n, r, t[s], o);return e;
    }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function (e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }w.event = { global: {}, add: function (e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
      }
    }, remove: function (e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
          f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
        } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    }, dispatch: function (e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
        }return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    }, handlers: function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);o.length && s.push({ elem: l, handlers: o });
      }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    }, addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function (t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
          if (this !== Se() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function () {
          if (this === Se() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function () {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        }, _default: function (e) {
          return N(e.target, "a");
        } }, beforeunload: { postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function () {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function () {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function () {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function (e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function (e, t, n, r) {
      return De(this, e, t, n, r);
    }, one: function (e, t, n, r) {
      return De(this, e, t, n, r, 1);
    }, off: function (e, t, n) {
      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Pe(e, t) {
    var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }function Me(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function Re(e, t, n, r) {
    t = a.apply([], t);var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
    }return e;
  }function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));return e;
  }w.extend({ htmlPrefilter: function (e) {
      return e.replace(Ne, "<$1></$2>");
    }, clone: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    }, cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
        if (t = n[J.expando]) {
          if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);n[J.expando] = void 0;
        }n[K.expando] && (n[K.expando] = void 0);
      }
    } }), w.fn.extend({ detach: function (e) {
      return Ie(this, e, !0);
    }, remove: function (e) {
      return Ie(this, e);
    }, text: function (e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function () {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    }, prepend: function () {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function () {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function () {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");return this;
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function (e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function () {
      var e = [];return Re(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());return this.pushStack(r);
    };
  });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function (t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");!function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function () {
        return t(), o;
      }, pixelBoxStyles: function () {
        return t(), s;
      }, pixelPosition: function () {
        return t(), i;
      }, reliableMarginLeft: function () {
        return t(), u;
      }, scrollboxSize: function () {
        return t(), a;
      } }));
  }();function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }function _e(e, t) {
    return { get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;function Qe(e) {
    if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;while (n--) if ((e = Ge[n] + t) in Ye) return e;
  }function Je(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }function Ke(e, t, n) {
    var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;if (We.test(i)) {
      if (!n) return i;i = "auto";
    }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }w.extend({ cssHooks: { opacity: { get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    }, css: function (e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function (e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      }, set: function (e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      } };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function (n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];return i;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({ css: function (e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } });function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }w.Tween = tt, tt.prototype = { constructor: tt, init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    }, cur: function () {
      var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    }, run: function (e) {
      var t,
          n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function (e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function (e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function (e) {
      return e;
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }function ut(e, t) {
    var n,
        r = 0,
        i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;return t && (i.opacity = i.width = e), i;
  }function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));for (r in t) if (i = t[r], it.test(i)) {
      if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
        if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
      }d[r] = y && y[r] || w.style(e, r);
    }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
        g || fe([e]), J.remove(e, "fxshow");for (r in d) w.style(e, r, d[r]);
      })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
    }
  }function ft(e, t) {
    var n, r, i, o, a;for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
      o = a.expand(o), delete e[r];for (n in o) n in e || (e[n] = o[n], t[n] = i);
    } else t[r] = i;
  }function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function () {
      if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function (t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
      }, stop: function (t) {
        var n = 0,
            r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) l.tweens[n].run(1);return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
      }] }, tweener: function (e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
    }, prefilters: [ct], prefilter: function (e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({ fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function (e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function () {
        var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    }, stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));!t && n || w.dequeue(this, e);
      });
    }, finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();var dt,
      ht = w.expr.attrHandle;w.fn.extend({ attr: function (e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    }, attrHooks: { type: { set: function (e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function (e, t) {
      var n,
          r = 0,
          i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    } }), dt = { set: function (e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;w.fn.extend({ prop: function (e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function (e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function (e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function (e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });function vt(e) {
    return (e.match(M) || []).join(" ");
  }function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }w.fn.extend({ addClass: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        a = 0;while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");i !== (s = vt(r)) && n.setAttribute("class", s);
      }return this;
    }, removeClass: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        a = 0;while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");i !== (s = vt(r)) && n.setAttribute("class", s);
      }return this;
    }, toggleClass: function (e, t) {
      var n = typeof e,
          r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;if (r) {
          i = 0, o = w(this), a = xt(e);while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    }, hasClass: function (e) {
      var t,
          n,
          r = 0;t = " " + e + " ";while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;return !1;
    } });var bt = /\r/g;w.fn.extend({ val: function (e) {
      var t,
          n,
          r,
          i = this[0];{
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    } }), w.extend({ valHooks: { option: { get: function (e) {
          var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
        } }, select: { get: function (e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
            if (t = w(n).val(), a) return t;s.push(t);
          }return s;
        }, set: function (e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function (e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function (e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function (t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    }, simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
    } }), w.fn.extend({ trigger: function (e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function (e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function (e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function () {
        var r = this.ownerDocument || this,
            i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      }, teardown: function () {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      } };
  });var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
    var i;if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }w.param = function (e, t) {
    var n,
        r = [],
        i = function (e, t) {
      var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) jt(n, e[n], t, i);return r.join("&");
  }, w.fn.extend({ serialize: function () {
      return w.param(this.serializeArray());
    }, serializeArray: function () {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Dt, "\r\n") };
        }) : { name: t.name, value: n.replace(Dt, "\r\n") };
      }).get();
    } });var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;function a(s) {
      var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }return a(t.dataTypes[0]) || !i["*"] && a("*");
  }function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);return r && w.extend(!0, e, r), e;
  }function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));if (r) for (i in s) if (s[i] && s[i].test(r)) {
      u.unshift(i);break;
    }if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;break;
        }a || (a = i);
      }o = o || a;
    }if (o) return o !== u[0] && u.unshift(o), n[o];
  }function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];o = c.shift();while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
      if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
      }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
        t = a(t);
      } catch (e) {
        return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
      }
    }return { state: "success", data: t };
  }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function (t, n) {
      "object" == typeof t && (n = t, t = void 0), n = n || {};var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = { readyState: 0, getResponseHeader: function (e) {
          var t;if (c) {
            if (!s) {
              s = {};while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2];
            }t = s[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function () {
          return c ? a : null;
        }, setRequestHeader: function (e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        }, overrideMimeType: function (e) {
          return null == c && (h.mimeType = e), this;
        }, statusCode: function (e) {
          var t;if (e) if (c) E.always(e[E.status]);else for (t in e) x[t] = [x[t], e[t]];return this;
        }, abort: function (e) {
          var t = e || C;return i && i.abort(t), k(0, t), this;
        } };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) E.setRequestHeader(p, h.headers[p]);if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;k(-1, e);
        }
      } else k(-1, "No Transport");function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }return E;
    }, getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, w.fn.extend({ wrapAll: function (e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;while (e.firstElementChild) e = e.firstElementChild;return e;
      }).append(this)), this;
    }, wrapInner: function (e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function (e) {
      var t = g(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Vt = { 0: 200, 1223: 204 },
      Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var n, r;if (h.cors || Gt && !t.crossDomain) return { send: function (i, o) {
        var a,
            s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) s.setRequestHeader(a, i[a]);n = function (e) {
          return function () {
            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
          };
        }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            n && r();
          });
        }, n = n("abort");try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (n) throw e;
        }
      }, abort: function () {
        n && n();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, n;return { send: function (i, o) {
          t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) {
            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        }, abort: function () {
          n && n();
        } };
    }
  });var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
      var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    } }, w.fn.extend({ offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
    }, position: function () {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;while (e && "static" === w.css(e, "position")) e = e.offsetParent;return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
          var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function (e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function (e, t) {
      return this.off(e, null, t);
    }, delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == "function" && __webpack_require__(3) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return w;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Jt = e.jQuery,
      Kt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(23);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_jquery_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_jquery_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_jquery_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_fancybox_jquery_fancybox_min_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_swiper_swiper_min_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_swiper_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_swiper_swiper_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_imask__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_imask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_imask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_burlak_navigation_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_burlak__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_burlak___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_burlak__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_map_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_departments_js__ = __webpack_require__(22);









(function ($) {
	$.fancybox.defaults.hash = false;
	function runCount(item) {
		var bool = item.getAttribute('bool'),
		    from = item.getAttribute('data-from'),
		    to = item.getAttribute('data-to'),
		    seconds = item.getAttribute('data-seconds'),
		    milliseconds = parseInt(seconds) ? parseInt(seconds) * 1000 : 500;
		from = parseInt(from);
		to = parseInt(to);
		if (!bool) {
			item.setAttribute('bool', 1);
			$(item).prop('Counter', from).animate({
				Counter: to
			}, {
				duration: milliseconds,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		}
	}

	function clearCount(item) {
		var from = item.getAttribute('data-from');
		item.removeAttribute('bool');
		from = parseInt(from);
		$(item).text(from);
	}

	var view = __WEBPACK_IMPORTED_MODULE_5_burlak__["InView"];
	var request = new __WEBPACK_IMPORTED_MODULE_5_burlak__["Request"]();
	$(document).ready(function () {
		document.addEventListener('wpcf7mailsent', function (event) {
			setTimeout(function () {
				$.fancybox.close();
			}, 3000);
		});

		function commonFunc() {

			let files = document.querySelectorAll('.form-file');
			files.length && files.forEach((item, index) => {
				item.querySelector('input').addEventListener('change', e => {
					if (e.target.files[0]) {
						let name = e.target.files[0].name;
						item.querySelector('.form-file-fake').innerHTML = name ? name : 'Прикрепить файл';
					} else {
						item.querySelector('.form-file-fake').innerHTML = 'Прикрепить файл';
					}
				});
			});

			document.body.addEventListener('click', () => {
				document.querySelector('.header').classList.remove('search-visible');
				document.querySelector('.header').classList.remove('navigation-visible');
			});
			document.querySelector('.header-search-panel').addEventListener('click', e => {
				e.stopPropagation();
			});
			let searchIcon = document.querySelector('.header-search-toggle');
			searchIcon && searchIcon.addEventListener('click', e => {
				e.preventDefault();
				e.stopPropagation();
				let header = document.querySelector('.header');
				header && header.classList.toggle('search-visible');
				header && header.classList.remove('navigation-visible');
				document.querySelector('.header-search-panel input').focus();
			});

			var toggleButton = document.querySelector('.nav-toggle');
			if (toggleButton) {
				toggleButton.addEventListener('click', function (e) {
					e.preventDefault();
					e.stopPropagation();
					let header = document.querySelector('.header');
					header && header.classList.remove('search-visible');
					header && header.classList.toggle('navigation-visible');
				});
			}

			new view('.countdown', {
				in: item => {
					runCount(item);
				},
				out: item => {
					clearCount(item);
				}
			});
			new view('.scroll-animated', {
				in: item => {
					setTimeout(() => {
						item.classList.add('visible');
					}, 300);
				},
				out: item => {
					item.classList.remove('visible');
				}
			});

			var slider = document.querySelector('.slider'),
			    delay = slider ? slider.getAttribute('data-delay') : false,
			    speed = slider ? slider.getAttribute('data-speed') : false;
			if (slider) {
				new __WEBPACK_IMPORTED_MODULE_2__js_swiper_swiper_min_js___default.a('.slider', {
					slidesPerView: 1,
					speed: speed ? speed * 1000 : 0,
					autoplay: delay ? {
						delay: delay * 1000
					} : false,
					loop: true,
					pagination: {
						el: '.slider-pagination',
						type: 'progressbar'
					},
					navigation: {
						nextEl: '.slider-arrow__right',
						prevEl: '.slider-arrow__left'
					}
				});
			}

			var slider = document.querySelector('.slider-article');
			if (slider) {
				new __WEBPACK_IMPORTED_MODULE_2__js_swiper_swiper_min_js___default.a('.slider-article', {
					slidesPerView: 1,
					loop: true,
					navigation: {
						nextEl: '.slider-arrow__right',
						prevEl: '.slider-arrow__left'
					},
					autoHeight: true
				});
			}

			var newsSlider = document.querySelector('.slider-horizontal'),
			    newsSlides = newsSlider ? newsSlider.querySelectorAll('.swiper-slide') : false;
			if (newsSlider) {
				new __WEBPACK_IMPORTED_MODULE_2__js_swiper_swiper_min_js___default.a('.slider-horizontal', {
					slidesPerView: 3,
					mousewheel: newsSlides.length > 3,
					loop: newsSlides.length > 3,
					navigation: {
						nextEl: '.news-arrow__right',
						prevEl: '.news-arrow__left'
					},
					autoHeight: true,
					breakpoints: {
						800: {
							slidesPerView: 2,
							mousewheel: newsSlides.length > 2,
							loop: newsSlides.length > 2
						},
						520: {
							slidesPerView: 1,
							mousewheel: newsSlides.length > 1,
							loop: newsSlides.length > 1
						}
					}
				});
			}

			var newsSlider = document.querySelector('.slider-vertical'),
			    newsSlides = newsSlider ? newsSlider.querySelectorAll('.swiper-slide') : false;
			if (newsSlider) {
				new __WEBPACK_IMPORTED_MODULE_2__js_swiper_swiper_min_js___default.a('.slider-vertical', {
					slidesPerView: 3,
					mousewheel: newsSlides.length > 3,
					loop: newsSlides.length > 3,
					direction: 'vertical',
					navigation: {
						nextEl: '.news-arrow__right',
						prevEl: '.news-arrow__left'
					},
					breakpoints: {
						700: {}
					}
				});
			}

			//project slider
			if ($('.projects-slider-view').length && $('.projects-slider-thumbs').length) {
				var projectsSlider = new __WEBPACK_IMPORTED_MODULE_2__js_swiper_swiper_min_js___default.a('.projects-slider-view', {
					on: {
						slideChange: function () {
							$('.projects-slider-thumbs .swiper-slide').removeClass('active');
							$('.projects-slider-thumbs .swiper-slide').eq(this.activeIndex).addClass('active');
							projectsThumbs.slideTo(this.activeIndex);
							var count = $('.projects-slider-thumbs .swiper-slide').length - 1;
							if (this.activeIndex <= 0) {
								$('.projects-slider-thumbs-prev').addClass('unvisible');
								$('.projects-slider-view-prev').addClass('unvisible');
							}
							if (this.activeIndex >= count) {
								$('.projects-slider-thumbs-next').addClass('unvisible');
								$('.projects-slider-view-next').addClass('unvisible');
							}
						}
					}
				});
				var projectsThumbs = new __WEBPACK_IMPORTED_MODULE_2__js_swiper_swiper_min_js___default.a('.projects-slider-thumbs', {
					slidesPerView: 7,
					slidesPerGroup: 1,
					loopedSlides: $('.projects-slider-thumbs .swiper-slide').length,
					touchRatio: 0.2,
					spaceBetween: 5,
					breakpoints: {
						700: {
							slidesPerView: 5
						},
						560: {
							slidesPerView: 3
						},
						400: {
							slidesPerView: 2
						}
					},
					on: {
						init: function () {
							$('.projects-slider-thumbs .swiper-slide').eq(this.activeIndex).addClass('active');
							var count = $('.projects-slider-thumbs .swiper-slide').length - 1;
							if (this.activeIndex <= 0) {
								$('.projects-slider-thumbs-prev').addClass('unvisible');
								$('.projects-slider-view-prev').addClass('unvisible');
							}
							if (this.activeIndex >= count) {
								$('.projects-slider-thumbs-next').addClass('unvisible');
								$('.projects-slider-view-next').addClass('unvisible');
							}
						},
						slideChange: function () {
							$('.projects-slider-thumbs .swiper-slide').removeClass('active');
							$('.projects-slider-thumbs .swiper-slide').eq(this.activeIndex).addClass('active');
							projectsSlider.slideTo(this.activeIndex);
							var id = this.activeIndex,
							    count = $('.projects-slider-thumbs .swiper-slide').length - 1;
							if (id >= count) {
								$('.projects-slider-thumbs-next').addClass('unvisible');
								$('.projects-slider-view-next').addClass('unvisible');
							} else {
								$('.projects-slider-thumbs-next').removeClass('unvisible');
								$('.projects-slider-view-next').removeClass('unvisible');
							}
							if (id <= 0) {
								$('.projects-slider-thumbs-prev').addClass('unvisible');
								$('.projects-slider-view-prev').addClass('unvisible');
							} else {
								$('.projects-slider-thumbs-prev').removeClass('unvisible');
								$('.projects-slider-view-prev').removeClass('unvisible');
							}
						}
					}
				});

				$('.projects-slider-thumbs .swiper-slide').on('click', function () {
					var id = $(this).data('id'),
					    count = $('.projects-slider-thumbs .swiper-slide').length - 1;
					$('.projects-slider-thumbs .swiper-slide').removeClass('active');
					$(this).addClass('active');
					projectsSlider.slideTo(id);
					projectsThumbs.slideTo(id);
					if (id >= count) {
						$('.projects-slider-thumbs-next').addClass('unvisible');
						$('.projects-slider-view-next').addClass('unvisible');
					} else {
						$('.projects-slider-thumbs-next').removeClass('unvisible');
						$('.projects-slider-view-next').removeClass('unvisible');
					}
					if (id <= 0) {
						$('.projects-slider-thumbs-prev').addClass('unvisible');
						$('.projects-slider-view-prev').addClass('unvisible');
					} else {
						$('.projects-slider-thumbs-prev').removeClass('unvisible');
						$('.projects-slider-view-prev').removeClass('unvisible');
					}
				});

				$('.projects-slider-thumbs-next, .projects-slider-view-next').on('click', function () {
					var activeId = $('.projects-slider-thumbs .swiper-slide.active').data('id'),
					    count = $('.projects-slider-thumbs .swiper-slide').length - 1;
					if (activeId + 1 <= count) {
						$('.projects-slider-thumbs .swiper-slide').removeClass('active');
						$('.projects-slider-thumbs .swiper-slide').eq(activeId + 1).addClass('active');
						projectsSlider.slideTo(activeId + 1);
						projectsThumbs.slideTo(activeId + 1);
						$('.projects-slider-thumbs-prev').removeClass('unvisible');
						$('.projects-slider-view-prev').removeClass('unvisible');
					}
					if (activeId + 1 == count || activeId > count) {
						$('.projects-slider-thumbs-next').addClass('unvisible');
						$('.projects-slider-view-next').addClass('unvisible');
					} else {
						$('.projects-slider-thumbs-next').removeClass('unvisible');
						$('.projects-slider-view-next').removeClass('unvisible');
					}
				});

				$('.projects-slider-thumbs-prev, .projects-slider-view-prev').on('click', function () {
					var activeId = $('.projects-slider-thumbs .swiper-slide.active').data('id'),
					    count = $('.projects-slider-thumbs .swiper-slide').length - 1;
					if (activeId - 1 >= 0) {
						$('.projects-slider-thumbs .swiper-slide').removeClass('active');
						$('.projects-slider-thumbs .swiper-slide').eq(activeId - 1).addClass('active');
						projectsSlider.slideTo(activeId - 1);
						projectsThumbs.slideTo(activeId - 1);
						$('.projects-slider-thumbs-next').removeClass('unvisible');
						$('.projects-slider-view-next').removeClass('unvisible');
					}
					if (activeId - 1 == 0 || activeId < 0) {
						$('.projects-slider-thumbs-prev').addClass('unvisible');
						$('.projects-slider-view-prev').addClass('unvisible');
					} else {
						$('.projects-slider-thumbs-prev').removeClass('unvisible');
						$('.projects-slider-view-prev').removeClass('unvisible');
					}
				});
			}

			Object(__WEBPACK_IMPORTED_MODULE_6__js_map_js__["a" /* default */])();
			Object(__WEBPACK_IMPORTED_MODULE_7__js_departments_js__["a" /* default */])();

			var overlaysControls = document.querySelectorAll('.overlay-control');
			for (var i = 0; i <= overlaysControls.length - 1; i++) {
				overlaysControls[i].addEventListener('click', function (e) {
					var overlays = document.querySelectorAll('[data-overlay="' + this.dataset.overlayClose + '"],[data-overlay="' + this.dataset.overlayOpen + '"]');
					for (var j = 0; j <= overlays.length - 1; j++) {
						if (this.dataset.overlayClose) overlays[j].classList.add('closed');
						if (this.dataset.overlayOpen) overlays[j].classList.remove('closed');
					}
				});
			}

			__WEBPACK_IMPORTED_MODULE_0__js_jquery_jquery___default()('.gallery').each(function () {
				__WEBPACK_IMPORTED_MODULE_0__js_jquery_jquery___default()(this).find(".gallery-icon a").attr('data-fancybox', 'group-' + __WEBPACK_IMPORTED_MODULE_0__js_jquery_jquery___default()(this).attr('id'));
			});
			let initCalendar = function (dates) {
				return new Promise((resolve, reject) => {
					var calendar = $('#calendar').datetimepicker({
						inline: true,
						sideBySide: true,
						locale: 'ru',
						dayViewHeaderFormat: 'MMMM YYYY',
						format: 'MM/dd',
						tooltips: {
							today: '',
							clear: '',
							close: '',
							selectMonth: '',
							prevMonth: '',
							nextMonth: '',
							selectYear: '',
							prevYear: '',
							nextYear: '',
							selectDecade: '',
							prevDecade: '',
							nextDecade: '',
							prevCentury: '',
							nextCentury: ''
						},
						enabledDates: dates
					});
					resolve(calendar);
				});
			};
			var eventToDates = function (enabledDates) {
				document.querySelectorAll('#calendar .day').forEach((date, i) => {
					if (enabledDates.includes(date.getAttribute('data-day'))) {
						date.classList.add('enable');
						date.setAttribute('data-state', 'init');
						var popup = document.createElement('div'),
						    popupInner = document.createElement('div'),
						    popupLoader = document.createElement('div');
						popup.classList.add('datepicker-popup');
						popupInner.classList.add('datepicker-popup-inner');
						popupLoader.classList.add('datepicker-popup-loader');
						popupInner.appendChild(popupLoader);
						popup.appendChild(popupInner);
						date.appendChild(popup);
						date.addEventListener('mouseenter', e => {
							let target = e.currentTarget,
							    popup = target.querySelector('.datepicker-popup'),
							    currentDate = target.getAttribute('data-day');
							currentDate = currentDate.split('.');
							if (target.getAttribute('data-state') === 'load' || target.getAttribute('data-state') === 'done') return;
							request.get({
								url: '/wp-admin/admin-ajax.php',
								data: {
									action: 'get_events',
									date: +new Date(currentDate[2] + '-' + currentDate[1] + '-' + currentDate[0]) / 1000
								},
								start: () => {
									date.setAttribute('data-state', 'load');
								},
								end: () => {
									date.setAttribute('data-state', 'done');
								}
							}).then(DOMString => {
								var parser = new DOMParser(),
								    dom = parser.parseFromString(DOMString.responseText, 'text/html');
								dom = dom.querySelector('body > div');
								popupInner.appendChild(dom);
								router.addLinksEvent();
							}).catch(e => {});
						});
						date.addEventListener('mouseleave', e => {});
						date.querySelector('span').addEventListener('click', e => {
							e.preventDefault();
							let currentDate = e.currentTarget.closest('.day').getAttribute('data-day');
							currentDate = currentDate.split('.');
							window.location = '/events?date=' + +new Date(currentDate[2] + '-' + currentDate[1] + '-' + currentDate[0]) / 1000;
						});
					}
				});
			};
			if ($('#calendar').length) {
				let data = $('#calendar').data('dates');
				data = data.split(',');
				initCalendar(data).then(calendar => {
					eventToDates(data);
					calendar.on("dp.update", () => {
						eventToDates(data);
					});
				});
			}

			var phones = document.querySelectorAll('input[type="tel"]');
			if (phones.length && window.IMask) {
				for (var i = 0; i < phones.length; i++) {
					var item = phones[i],
					    mask = '+7(000) 000-00-00',
					    maskedField = new IMask(item, {
						mask: mask
					}),
					    masked = maskedField.masked;
					item.addEventListener('blur', function () {
						if (this.value.length != mask.length) {
							this.value = '';
							masked.reset();
						}
					});
				}
			}
		};

		var router = new __WEBPACK_IMPORTED_MODULE_4__js_burlak_navigation_js__["a" /* default */]({
			container: '#app',
			navItems: '.ajax, .ajax a',
			preloader: true,
			beforeInit: function () {},
			beforeRendered: function () {
				$.fancybox.close();
			},
			afterRendered: function (appContainer) {
				window.scrollTo(0, 0);
				commonFunc();
				var hash = window.location.hash,
				    item = null;
				if (hash) item = appContainer.querySelector(hash);
				if (item) {
					window.scroll({
						top: item.offsetTop - document.querySelector('.header').clientHeight,
						behavior: 'smooth'
					});
				};
				let forms = document.querySelectorAll('.wpcf7-form');
				window.wpcf7 && forms.length && forms.forEach((form, index) => {
					window.wpcf7.initForm(form);
				});
			},
			afterInit: function () {}
		});
		router.init();

		$('body').on('click', '.ajax-pagination-more', function (e) {
			e.preventDefault();
			var nextLink = document.querySelector('.pagination-links a.next'),
			    nextLinkHref = nextLink.href,
			    button = e.target;
			if (!nextLinkHref || button.getAttribute('data-enable') === 'false' || button.style.display == 'none') return;
			button.setAttribute('data-scroll-enable', 'true');
			button.setAttribute('data-enable', 'false');
			button.setAttribute('data-load', 'true');
			request.get({
				url: nextLinkHref
			}).then(DOMString => {
				var parser = new DOMParser(),
				    ajaxListClass = '.ajax-list',
				    ajaxItemClass = '.ajax-item',
				    dom = parser.parseFromString(DOMString.responseText, 'text/html'),
				    appendTo = document.querySelector(ajaxListClass),
				    appendFrom = dom.querySelector(ajaxListClass),
				    appendFromItems = appendFrom.querySelectorAll(ajaxItemClass),
				    issetNextPage = dom.querySelector('.pagination-links a.next');
				if (!issetNextPage) {
					button.style.display = 'none';
				} else {
					nextLink.href = issetNextPage.href;
				}
				if (!appendFromItems.length) {
					return;
				}
				for (var i = 0; i < appendFromItems.length; i++) {
					appendTo.appendChild(appendFromItems[i]);
				}
				router.addLinksEvent();
				button.setAttribute('data-load', 'false');
				button.setAttribute('data-enable', 'true');
			}).catch(e => {
				window.location = nextLink;
				button.setAttribute('data-load', 'false');
				button.setAttribute('data-enable', 'true');
			});
		});

		function ajaxClickOnScroll() {
			var buttons = document.querySelectorAll('.ajax-pagination-more[data-scroll-enable="true"]'),
			    scrollTop,
			    windowHeight;
			if (!buttons) return;

			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			windowHeight = window.innerHeight;
			for (var i = 0; i < buttons.length; i++) {
				if (buttons[i].getBoundingClientRect().top <= windowHeight && buttons[i].getAttribute('data-load') !== 'true') {
					buttons[i].click();
				}
			}
		};
		window.addEventListener('scroll', function () {
			//ajaxClickOnScroll();
		});

		window.eventRegistration = function (name) {
			$.fancybox.open({
				src: '#modal-registration',
				type: 'inline',
				opts: {
					afterShow: function () {
						$('input.registration-place').val(name ? name : '');
					},
					afterClose: function () {
						$('input.registration-place').val('');
					}
				}
			});
		};
	});

	window.addEventListener('load', function () {
		var preloader = document.querySelector('.preloader');
		if (preloader) {
			preloader.classList.remove('preloader__visible');
			setTimeout(function () {
				preloader.parentNode.removeChild(preloader);
			}, 400);
		}
	});
})(__WEBPACK_IMPORTED_MODULE_0__js_jquery_jquery___default.a);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js__);

window.jQuery = __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a;
window.$ = __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a;
// ==================================================
// fancyBox v3.3.4
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function (t, e, n, o) {
  "use strict";
  function i(t, e) {
    var o,
        i,
        a = [],
        s = 0;t && t.isDefaultPrevented() || (t.preventDefault(), e = t && t.data ? t.data.options : e || {}, o = e.$target || n(t.currentTarget), i = o.attr("data-fancybox") || "", i ? (a = e.selector ? n(e.selector) : t.data ? t.data.items : [], a = a.length ? a.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]'), s = a.index(o), s < 0 && (s = 0)) : a = [o], n.fancybox.open(a, e, s));
  }if (t.console = t.console || { info: function (t) {} }, n) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");var a = { loop: !1, gutter: 50, keyboard: !0, arrows: !0, infobar: !0, smallBtn: "auto", toolbar: "auto", buttons: ["zoom", "thumbs", "close"], idleTime: 3, protect: !1, modal: !1, image: { preload: !1 }, ajax: { settings: { data: { fancybox: !0 } } }, iframe: { tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>', preload: !0, css: {}, attr: { scrolling: "auto" } }, defaultType: "image", animationEffect: "zoom", animationDuration: 366, zoomOpacity: "auto", transitionEffect: "fade", transitionDuration: 366, slideClass: "", baseClass: "", baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>', spinnerTpl: '<div class="fancybox-loading"></div>', errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>', btnTpl: { download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>', zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>', close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>', smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>', arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>', arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>' }, parentEl: "body", autoFocus: !1, backFocus: !0, trapFocus: !0, fullScreen: { autoStart: !1 }, touch: { vertical: !0, momentum: !0 }, hash: null, media: {}, slideShow: { autoStart: !1, speed: 4e3 }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" }, wheel: "auto", onInit: n.noop, beforeLoad: n.noop, afterLoad: n.noop, beforeShow: n.noop, afterShow: n.noop, beforeClose: n.noop, afterClose: n.noop, onActivate: n.noop, onDeactivate: n.noop, clickContent: function (t, e) {
        return "image" === t.type && "zoom";
      }, clickSlide: "close", clickOutside: "close", dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1, mobile: { idleTime: !1, clickContent: function (t, e) {
          return "image" === t.type && "toggleControls";
        }, clickSlide: function (t, e) {
          return "image" === t.type ? "toggleControls" : "close";
        }, dblclickContent: function (t, e) {
          return "image" === t.type && "zoom";
        }, dblclickSlide: function (t, e) {
          return "image" === t.type && "zoom";
        } }, lang: "en", i18n: { en: { CLOSE: "Close", NEXT: "Next", PREV: "Previous", ERROR: "The requested content cannot be loaded. <br/> Please try again later.", PLAY_START: "Start slideshow", PLAY_STOP: "Pause slideshow", FULL_SCREEN: "Full screen", THUMBS: "Thumbnails", DOWNLOAD: "Download", SHARE: "Share", ZOOM: "Zoom" }, de: { CLOSE: "Schliessen", NEXT: "Weiter", PREV: "Zurück", ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.", PLAY_START: "Diaschau starten", PLAY_STOP: "Diaschau beenden", FULL_SCREEN: "Vollbild", THUMBS: "Vorschaubilder", DOWNLOAD: "Herunterladen", SHARE: "Teilen", ZOOM: "Maßstab" } } },
        s = n(t),
        r = n(e),
        c = 0,
        l = function (t) {
      return t && t.hasOwnProperty && t instanceof n;
    },
        d = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60);
      };
    }(),
        u = function () {
      var t,
          n = e.createElement("fakeelement"),
          i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (t in i) if (n.style[t] !== o) return i[t];return "transitionend";
    }(),
        f = function (t) {
      return t && t.length && t[0].offsetHeight;
    },
        p = function (t, e) {
      var o = n.extend(!0, {}, t, e);return n.each(e, function (t, e) {
        n.isArray(e) && (o[t] = e);
      }), o;
    },
        h = function (t, o, i) {
      var a = this;a.opts = p({ index: i }, n.fancybox.defaults), n.isPlainObject(o) && (a.opts = p(a.opts, o)), n.fancybox.isMobile && (a.opts = p(a.opts, a.opts.mobile)), a.id = a.opts.id || ++c, a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = !0, a.group = [], a.slides = {}, a.addContent(t), a.group.length && (a.$lastFocus = n(e.activeElement).trigger("blur"), a.init());
    };n.extend(h.prototype, { init: function () {
        var i,
            a,
            s,
            r = this,
            c = r.group[r.currIndex],
            l = c.opts,
            d = n.fancybox.scrollbarWidth;n.fancybox.getInstance() || (n("body").addClass("fancybox-active"), !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (d === o && (i = n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), d = n.fancybox.scrollbarWidth = i[0].offsetWidth - i[0].clientWidth, i.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + d + "px; }</style>"), n("body").addClass("compensate-for-scrollbar"))), s = "", n.each(l.buttons, function (t, e) {
          s += l.btnTpl[e] || "";
        }), a = n(r.translate(r, l.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", l.btnTpl.arrowLeft + l.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass("fancybox-is-hidden").addClass(l.baseClass).data("FancyBox", r).appendTo(l.parentEl), r.$refs = { container: a }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
          r.$refs[t] = a.find(".fancybox-" + t);
        }), r.trigger("onInit"), r.activate(), r.jumpTo(r.currIndex);
      }, translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          var i = n[e];return i === o ? t : i;
        });
      }, addContent: function (t) {
        var e,
            i = this,
            a = n.makeArray(t);n.each(a, function (t, e) {
          var a,
              s,
              r,
              c,
              l,
              d = {},
              u = {};n.isPlainObject(e) ? (d = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (a = n(e), u = a.data() || {}, u = n.extend(!0, {}, u, u.options), u.$orig = a, d.src = i.opts.src || u.src || a.attr("href"), d.type || d.src || (d.type = "inline", d.src = e)) : d = { type: "html", src: e + "" }, d.opts = n.extend(!0, {}, i.opts, u), n.isArray(u.buttons) && (d.opts.buttons = u.buttons), s = d.type || d.opts.type, c = d.src || "", !s && c && ((r = c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (s = "video", d.opts.videoFormat || (d.opts.videoFormat = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? s = "iframe" : "#" === c.charAt(0) && (s = "inline")), s ? d.type = s : i.trigger("objectNeedsType", d), d.contentType || (d.contentType = n.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type), d.index = i.group.length, "auto" == d.opts.smallBtn && (d.opts.smallBtn = n.inArray(d.type, ["html", "inline", "ajax"]) > -1), "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn), d.opts.$trigger && d.index === i.opts.index && (d.opts.$thumb = d.opts.$trigger.find("img:first")), d.opts.$thumb && d.opts.$thumb.length || !d.opts.$orig || (d.opts.$thumb = d.opts.$orig.find("img:first")), "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [i, d])), "function" === n.type(i.opts.caption) && (d.opts.caption = i.opts.caption.apply(e, [i, d])), d.opts.caption instanceof n || (d.opts.caption = d.opts.caption === o ? "" : d.opts.caption + ""), "ajax" === d.type && (l = c.split(/\s+/, 2), l.length > 1 && (d.src = l.shift(), d.opts.filter = l.shift())), d.opts.modal && (d.opts = n.extend(!0, d.opts, { infobar: 0, toolbar: 0, smallBtn: 0, keyboard: 0, slideShow: 0, fullScreen: 0, thumbs: 0, touch: 0, clickContent: !1, clickSlide: !1, clickOutside: !1, dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1 })), i.group.push(d);
        }), Object.keys(i.slides).length && (i.updateControls(), e = i.Thumbs, e && e.isActive && (e.create(), e.focus()));
      }, addEvents: function () {
        var o = this;o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
          t.stopPropagation(), t.preventDefault(), o.close(t);
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
          t.stopPropagation(), t.preventDefault(), o.previous();
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
          t.stopPropagation(), t.preventDefault(), o.next();
        }).on("click.fb", "[data-fancybox-zoom]", function (t) {
          o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        }), s.on("orientationchange.fb resize.fb", function (t) {
          t && t.originalEvent && "resize" === t.originalEvent.type ? d(function () {
            o.update();
          }) : (o.$refs.stage.hide(), setTimeout(function () {
            o.$refs.stage.show(), o.update();
          }, n.fancybox.isMobile ? 600 : 250));
        }), r.on("focusin.fb", function (t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null;o.isClosing || !o.current || !o.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || o && "fixed" !== n(t.target).css("position") && !o.$refs.container.has(t.target).length && (t.stopPropagation(), o.focus());
        }), r.on("keydown.fb", function (t) {
          var e = o.current,
              i = t.keyCode || t.which;if (e && e.opts.keyboard && !(t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input") || n(t.target).is("textarea"))) return 8 === i || 27 === i ? (t.preventDefault(), void o.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void o.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void o.next()) : void o.trigger("afterKeydown", t, i);
        }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
          o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1;
        }), o.idleInterval = t.setInterval(function () {
          o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls());
        }, 1e3));
      }, removeEvents: function () {
        var e = this;s.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null);
      }, previous: function (t) {
        return this.jumpTo(this.currPos - 1, t);
      }, next: function (t) {
        return this.jumpTo(this.currPos + 1, t);
      }, jumpTo: function (t, e) {
        var i,
            a,
            s,
            r,
            c,
            l,
            d,
            u = this,
            p = u.group.length;if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
          if (t = parseInt(t, 10), a = u.current ? u.current.opts.loop : u.opts.loop, !a && (t < 0 || t >= p)) return !1;if (i = u.firstRun = !Object.keys(u.slides).length, !(p < 2 && !i && u.isDragging)) {
            if (r = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, s = u.createSlide(t), p > 1 && ((a || s.index > 0) && u.createSlide(t - 1), (a || s.index < p - 1) && u.createSlide(t + 1)), u.current = s, u.currIndex = s.index, u.currPos = s.pos, u.trigger("beforeShow", i), u.updateControls(), l = n.fancybox.getTranslate(s.$slide), s.isMoved = (0 !== l.left || 0 !== l.top) && !s.$slide.hasClass("fancybox-animated"), s.forcedDuration = o, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[i ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i) return s.opts.animationEffect && e && u.$refs.container.css("transition-duration", e + "ms"), u.$refs.container.removeClass("fancybox-is-hidden"), f(u.$refs.container), u.$refs.container.addClass("fancybox-is-open"), f(u.$refs.container), s.$slide.addClass("fancybox-slide--previous"), u.loadSlide(s), s.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"), void u.preload("image");n.each(u.slides, function (t, e) {
              n.fancybox.stop(e.$slide);
            }), s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), s.isMoved ? (c = Math.round(s.$slide.width()), n.each(u.slides, function (t, o) {
              var i = o.pos - s.pos;n.fancybox.animate(o.$slide, { top: 0, left: i * c + i * o.opts.gutter }, e, function () {
                o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === u.currPos && (s.isMoved = !1, u.complete());
              });
            })) : u.$refs.stage.children().removeAttr("style"), s.isLoaded ? u.revealContent(s) : u.loadSlide(s), u.preload("image"), r.pos !== s.pos && (d = "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous"), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), r.isComplete = !1, e && (s.isMoved || s.opts.transitionEffect) && (s.isMoved ? r.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + s.opts.transitionEffect, n.fancybox.animate(r.$slide, d, e, function () {
              r.$slide.removeClass(d).removeAttr("style");
            }))));
          }
        }
      }, createSlide: function (t) {
        var e,
            o,
            i = this;return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], { pos: t, $slide: e, isLoaded: !1 }), i.updateSlide(i.slides[t])), i.slides[t];
      }, scaleToActual: function (t, e, i) {
        var a,
            s,
            r,
            c,
            l,
            d = this,
            u = d.current,
            f = u.$content,
            p = n.fancybox.getTranslate(u.$slide).width,
            h = n.fancybox.getTranslate(u.$slide).height,
            g = u.width,
            b = u.height;!d.isAnimating && f && "image" == u.type && u.isLoaded && !u.hasError && (n.fancybox.stop(f), d.isAnimating = !0, t = t === o ? .5 * p : t, e = e === o ? .5 * h : e, a = n.fancybox.getTranslate(f), a.top -= n.fancybox.getTranslate(u.$slide).top, a.left -= n.fancybox.getTranslate(u.$slide).left, c = g / a.width, l = b / a.height, s = .5 * p - .5 * g, r = .5 * h - .5 * b, g > p && (s = a.left * c - (t * c - t), s > 0 && (s = 0), s < p - g && (s = p - g)), b > h && (r = a.top * l - (e * l - e), r > 0 && (r = 0), r < h - b && (r = h - b)), d.updateCursor(g, b), n.fancybox.animate(f, { top: r, left: s, scaleX: c, scaleY: l }, i || 330, function () {
          d.isAnimating = !1;
        }), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop());
      }, scaleToFit: function (t) {
        var e,
            o = this,
            i = o.current,
            a = i.$content;!o.isAnimating && a && "image" == i.type && i.isLoaded && !i.hasError && (n.fancybox.stop(a), o.isAnimating = !0, e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, { top: e.top, left: e.left, scaleX: e.width / a.width(), scaleY: e.height / a.height() }, t || 330, function () {
          o.isAnimating = !1;
        }));
      }, getFitPos: function (t) {
        var e,
            n,
            o,
            i,
            a,
            s = this,
            r = t.$content,
            c = t.width || t.opts.width,
            l = t.height || t.opts.height,
            d = {};return !!(t.isLoaded && r && r.length) && (i = { top: parseInt(t.$slide.css("paddingTop"), 10), right: parseInt(t.$slide.css("paddingRight"), 10), bottom: parseInt(t.$slide.css("paddingBottom"), 10), left: parseInt(t.$slide.css("paddingLeft"), 10) }, e = parseInt(s.$refs.stage.width(), 10) - (i.left + i.right), n = parseInt(s.$refs.stage.height(), 10) - (i.top + i.bottom), c && l || (c = e, l = n), o = Math.min(1, e / c, n / l), c = Math.floor(o * c), l = Math.floor(o * l), "image" === t.type ? (d.top = Math.floor(.5 * (n - l)) + i.top, d.left = Math.floor(.5 * (e - c)) + i.left) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? c / l : t.opts.ratio || 16 / 9, l > c / a ? l = c / a : c > l * a && (c = l * a)), d.width = c, d.height = l, d);
      }, update: function () {
        var t = this;n.each(t.slides, function (e, n) {
          t.updateSlide(n);
        });
      }, updateSlide: function (t, e) {
        var o = this,
            i = t && t.$content,
            a = t.width || t.opts.width,
            s = t.height || t.opts.height;i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), t.$slide.trigger("refresh"), o.$refs.toolbar.toggleClass("compensate-for-scrollbar", t.$slide.get(0).scrollHeight > t.$slide.get(0).clientHeight), o.trigger("onUpdate", t);
      }, centerSlide: function (t, e) {
        var i,
            a,
            s = this;s.current && (i = Math.round(t.$slide.width()), a = t.pos - s.current.pos, n.fancybox.animate(t.$slide, { top: 0, left: a * i + a * t.opts.gutter, opacity: 1 }, e === o ? 0 : e, null, !1));
      }, updateCursor: function (t, e) {
        var o,
            i = this,
            a = i.current,
            s = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");a && !i.isClosing && (o = i.isZoomable(), s.toggleClass("fancybox-is-zoomable", o), n("[data-fancybox-zoom]").prop("disabled", !o), o && ("zoom" === a.opts.clickContent || n.isFunction(a.opts.clickContent) && "zoom" === a.opts.clickContent(a)) ? i.isScaledDown(t, e) ? s.addClass("fancybox-can-zoomIn") : a.opts.touch ? s.addClass("fancybox-can-drag") : s.addClass("fancybox-can-zoomOut") : a.opts.touch && "video" !== a.contentType && s.addClass("fancybox-can-drag"));
      }, isZoomable: function () {
        var t,
            e = this,
            n = e.current;if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;if (t = e.getFitPos(n), n.width > t.width || n.height > t.height) return !0;
        }return !1;
      }, isScaledDown: function (t, e) {
        var i = this,
            a = !1,
            s = i.current,
            r = s.$content;return t !== o && e !== o ? a = t < s.width && e < s.height : r && (a = n.fancybox.getTranslate(r), a = a.width < s.width && a.height < s.height), a;
      }, canPan: function () {
        var t,
            e = this,
            n = !1,
            o = e.current;return "image" === o.type && (t = o.$content) && !o.hasError && (n = e.getFitPos(o), n = Math.abs(t.width() - n.width) > 1 || Math.abs(t.height() - n.height) > 1), n;
      }, loadSlide: function (t) {
        var e,
            o,
            i,
            a = this;if (!t.isLoading && !t.isLoaded) {
          switch (t.isLoading = !0, a.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {case "image":
              a.setImage(t);break;case "iframe":
              a.setIframe(t);break;case "html":
              a.setContent(t, t.src || t.content);break;case "video":
              a.setContent(t, '<video class="fancybox-video" controls controlsList="nodownload"><source src="' + t.src + '" type="' + t.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video");break;case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);break;case "ajax":
              a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, { url: t.src, success: function (e, n) {
                  "success" === n && a.setContent(t, e);
                }, error: function (e, n) {
                  e && "abort" !== n && a.setError(t);
                } })), o.one("onReset", function () {
                i.abort();
              });break;default:
              a.setError(t);}return !0;
        }
      }, setImage: function (e) {
        var o,
            i,
            a,
            s,
            r,
            c = this,
            l = e.opts.srcset || e.opts.image.srcset;if (e.timouts = setTimeout(function () {
          var t = e.$image;!e.isLoading || t && t[0].complete || e.hasError || c.showLoading(e);
        }, 350), l) {
          s = t.devicePixelRatio || 1, r = t.innerWidth * s, a = l.split(",").map(function (t) {
            var e = {};return t.trim().split(/\s+/).forEach(function (t, n) {
              var o = parseInt(t.substring(0, t.length - 1), 10);return 0 === n ? e.url = t : void (o && (e.value = o, e.postfix = t[t.length - 1]));
            }), e;
          }), a.sort(function (t, e) {
            return t.value - e.value;
          });for (var d = 0; d < a.length; d++) {
            var u = a[d];if ("w" === u.postfix && u.value >= r || "x" === u.postfix && u.value >= s) {
              i = u;break;
            }
          }!i && a.length && (i = a[a.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = l);
        }e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), o = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), e.opts.preload !== !1 && e.opts.width && e.opts.height && o && (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function () {
          n(this).remove(), e.$ghost = null;
        }).one("load", function () {
          c.afterLoad(e);
        }).addClass("fancybox-image").appendTo(e.$content).attr("src", o)), c.setBigImage(e);
      }, setBigImage: function (t) {
        var e = this,
            o = n("<img />");t.$image = o.one("error", function () {
          e.setError(t);
        }).one("load", function () {
          var n;t.$ghost || (e.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), e.afterLoad(t)), t.timouts && (clearTimeout(t.timouts), t.timouts = null), e.isClosing || (t.opts.srcset && (n = t.opts.sizes, n && "auto" !== n || (n = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", n).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !e.isClosing && t.$ghost.hide();
          }, Math.min(300, Math.max(1e3, t.height / 1600))), e.hideLoading(t));
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error && o.trigger("error");
      }, resolveImageSlideSize: function (t, e, n) {
        var o = parseInt(t.opts.width, 10),
            i = parseInt(t.opts.height, 10);t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i);
      }, setIframe: function (t) {
        var e,
            i = this,
            a = t.opts.iframe,
            s = t.$slide;t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s), s.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(a.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(a.attr).appendTo(t.$content), a.preload ? (i.showLoading(t), e.on("load.fb error.fb", function (e) {
          this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t);
        }), s.on("refresh.fb", function () {
          var n,
              i,
              s = t.$content,
              r = a.css.width,
              c = a.css.height;if (1 === e[0].isReady) {
            try {
              n = e.contents(), i = n.find("body");
            } catch (t) {}i && i.length && i.children().length && (s.css({ width: "", height: "" }), r === o && (r = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), r && s.width(r), c === o && (c = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), c && s.height(c)), s.removeClass("fancybox-is-hidden");
          }
        })) : this.afterLoad(t), e.attr("src", t.src), s.one("onReset", function () {
          try {
            n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
          } catch (t) {}n(this).off("refresh.fb").empty(), t.isLoaded = !1;
        });
      }, setContent: function (t, e) {
        var o = this;o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? (e.parent().parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents(), 3 === e[0].nodeType && (e = n("<div>").html(e))), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
          n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1);
        }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t));
      }, setError: function (t) {
        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1);
      }, showLoading: function (t) {
        var e = this;t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide));
      }, hideLoading: function (t) {
        var e = this;t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
      }, afterLoad: function (t) {
        var e = this;e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.pos === e.currPos && e.updateCursor(), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).prependTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
          return 2 == t.button && t.preventDefault(), !0;
        }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t));
      }, revealContent: function (t) {
        var e,
            i,
            a,
            s,
            r = this,
            c = t.$slide,
            l = !1,
            d = !1;return e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], a = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10), t.pos === r.currPos && (t.isComplete ? e = !1 : r.isAnimating = !0), !t.isMoved && t.pos === r.currPos && a || (e = !1), "zoom" === e && (t.pos === r.currPos && a && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"), "zoom" === e ? (l.scaleX = l.width / d.width, l.scaleY = l.height / d.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - d.width / d.height) > .1), s && (d.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d), f(t.$content), void n.fancybox.animate(t.$content, l, a, function () {
          r.isAnimating = !1, r.complete();
        })) : (r.updateSlide(t), e ? (n.fancybox.stop(c), i = "fancybox-animated fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-fx-" + e, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i), t.$content.removeClass("fancybox-is-hidden"), f(c), void n.fancybox.animate(c, "fancybox-slide--current", a, function (e) {
          c.removeClass(i).removeAttr("style"), t.pos === r.currPos && r.complete();
        }, !0)) : (f(c), t.$content.removeClass("fancybox-is-hidden"), void (t.pos === r.currPos && r.complete())));
      }, getThumbPos: function (o) {
        var i,
            a = this,
            s = !1,
            r = o.opts.$thumb,
            c = r && r.length && r[0].ownerDocument === e ? r.offset() : 0,
            l = function (e) {
          for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;return o = s.every(function (t) {
            var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
                n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);return e > 0 && n > 0;
          }), o && a.bottom > 0 && a.right > 0 && a.left < n(t).width() && a.top < n(t).height();
        };return c && l(r) && (i = a.$refs.stage.offset(), s = { top: c.top - i.top + parseFloat(r.css("border-top-width") || 0), left: c.left - i.left + parseFloat(r.css("border-left-width") || 0), width: r.width(), height: r.height(), scaleX: 1, scaleY: 1 }), s;
      }, complete: function () {
        var t = this,
            o = t.current,
            i = {};!o.isMoved && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), t.preload("inline"), f(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function (e, o) {
          o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
        }), t.slides = i), t.isAnimating = !1, t.updateCursor(), t.trigger("afterShow"), o.$slide.find("video,audio").filter(":visible:first").trigger("play"), (n(e.activeElement).is("[disabled]") || o.opts.autoFocus && "image" != o.type && "iframe" !== o.type) && t.focus());
      }, preload: function (t) {
        var e = this,
            n = e.slides[e.currPos + 1],
            o = e.slides[e.currPos - 1];n && n.type === t && e.loadSlide(n), o && o.type === t && e.loadSlide(o);
      }, focus: function () {
        var t,
            e = this.current;this.isClosing || e && e.isComplete && e.$content && (t = e.$content.find("input[autofocus]:enabled:visible:first"), t.length || (t = e.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")), t = t && t.length ? t : e.$content, t.trigger("focus"));
      }, activate: function () {
        var t = this;n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
      }, close: function (t, e) {
        var o,
            i,
            a,
            s,
            r,
            c,
            l,
            p = this,
            h = p.current,
            g = function () {
          p.cleanUp(t);
        };return !p.isClosing && (p.isClosing = !0, p.trigger("beforeClose", t) === !1 ? (p.isClosing = !1, d(function () {
          p.update();
        }), !1) : (p.removeEvents(), h.timouts && clearTimeout(h.timouts), a = h.$content, o = h.opts.animationEffect, i = n.isNumeric(e) ? e : o ? h.opts.animationDuration : 0, h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), h.$slide.siblings().trigger("onReset").remove(), i && p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), p.hideLoading(h), p.hideControls(), p.updateCursor(), "zoom" !== o || t !== !0 && a && i && "image" === h.type && !h.hasError && (l = p.getThumbPos(h)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = { top: s.top, left: s.left, scaleX: s.width / l.width, scaleY: s.height / l.height, width: l.width, height: l.height }, r = h.opts.zoomOpacity, "auto" == r && (r = Math.abs(h.width / h.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), f(a), n.fancybox.animate(a, l, i, g), !0) : (o && i ? t === !0 ? setTimeout(g, i) : n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, g) : g(), !0)));
      }, cleanUp: function (t) {
        var e,
            o = this,
            i = n("body");o.current.$slide.trigger("onReset"), o.$refs.container.empty().remove(), o.trigger("afterClose", t), o.$lastFocus && o.current.opts.backFocus && o.$lastFocus.trigger("focus"), o.current = null, e = n.fancybox.getInstance(), e ? e.activate() : (i.removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
      }, trigger: function (t, e) {
        var o,
            i = Array.prototype.slice.call(arguments, 1),
            a = this,
            s = e && e.opts ? e : a.current;return s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), o === !1 ? o : void ("afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i));
      }, updateControls: function (t) {
        var e = this,
            n = e.current,
            o = n.index,
            i = n.opts.caption,
            a = e.$refs.container,
            s = e.$refs.caption;n.$slide.trigger("refresh"), e.$caption = i && i.length ? s.html(i) : null, e.isHiddenControls || e.isIdle || e.showControls(), a.find("[data-fancybox-count]").html(e.group.length), a.find("[data-fancybox-index]").html(o + 1), a.find("[data-fancybox-prev]").toggleClass("disabled", !n.opts.loop && o <= 0), a.find("[data-fancybox-next]").toggleClass("disabled", !n.opts.loop && o >= e.group.length - 1), "image" === n.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      }, hideControls: function () {
        this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav");
      }, showControls: function () {
        var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption");
      }, toggleControls: function () {
        this.isHiddenControls ? this.showControls() : this.hideControls();
      } }), n.fancybox = { version: "3.3.4", defaults: a, getInstance: function (t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
      }, open: function (t, e, n) {
        return new h(t, e, n);
      }, close: function (t) {
        var e = this.getInstance();e && (e.close(), t === !0 && this.close());
      }, destroy: function () {
        this.close(!0), r.add("body").off("click.fb-start", "**");
      }, isMobile: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), use3d: function () {
        var n = e.createElement("div");return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
      }(), getTranslate: function (t) {
        var e;return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), { top: e.top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity")) });
      }, setTranslate: function (t, e) {
        var n = "",
            i = {};if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== o && (i.opacity = e.opacity), e.width !== o && (i.width = e.width), e.height !== o && (i.height = e.height), t.css(i);
      }, animate: function (t, e, i, a, s) {
        var r = !1;n.isFunction(i) && (a = i, i = null), n.isPlainObject(e) || t.removeAttr("style"), n.fancybox.stop(t), t.on(u, function (o) {
          (!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(t), r && n.fancybox.setTranslate(t, r), n.isPlainObject(e) ? s === !1 && t.removeAttr("style") : s !== !0 && t.removeClass(e), n.isFunction(a) && a(o));
        }), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (r = n.extend({}, e, { width: t.width() * e.scaleX, height: t.height() * e.scaleY, scaleX: 1, scaleY: 1 }), delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
          t.trigger("transitionend");
        }, i + 16));
      }, stop: function (t) {
        t && t.length && (clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
      } }, n.fn.fancybox = function (t) {
      var e;return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, i) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, i), this;
    }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-trigger]", function (t) {
      i(t, { $target: n('[data-fancybox="' + n(t.currentTarget).attr("data-trigger") + '"]').eq(n(t.currentTarget).attr("data-index") || 0), $trigger: n(this) });
    });
  }
}(window, document, window.jQuery || __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a), function (t) {
  "use strict";
  var e = function (e, n, o) {
    if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {
      e = e.replace("$" + t, n || "");
    }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e;
  },
      n = { youtube: { matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, paramPlace: 8, type: "iframe", url: "//www.youtube.com/embed/$4", thumb: "//img.youtube.com/vi/$4/hqdefault.jpg" }, vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1, api: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" }, gmap_place: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i, type: "iframe", url: function (t) {
        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
      } }, gmap_search: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i, type: "iframe", url: function (t) {
        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      } } };t(document).on("objectNeedsType.fb", function (o, i, a) {
    var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || "",
        h = !1;s = t.extend(!0, {}, n, a.opts.media), t.each(s, function (n, o) {
      if (c = p.match(o.matcher)) {
        if (h = o.type, f = n, u = {}, o.paramPlace && c[o.paramPlace]) {
          d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");for (var i = 0; i < d.length; ++i) {
            var s = d[i].split("=", 2);2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
          }
        }return l = t.extend(!0, {}, o.params, a.opts[n], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : e(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : e(o.thumb, c), "youtube" === n ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
        }) : "vimeo" === n && (p = p.replace("&%23", "#")), !1;
      }
    }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })), t.extend(a, { type: h, src: p, origSrc: a.src, contentSource: f, contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video" })) : p && (a.type = a.opts.defaultType);
  });
}(window.jQuery || __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a), function (t, e, n) {
  "use strict";
  var o = function () {
    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
      return t.setTimeout(e, 1e3 / 60);
    };
  }(),
      i = function () {
    return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
      t.clearTimeout(e);
    };
  }(),
      a = function (e) {
    var n = [];e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];for (var o in e) e[o].pageX ? n.push({ x: e[o].pageX, y: e[o].pageY }) : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });return n;
  },
      s = function (t, e, n) {
    return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
  },
      r = function (t) {
    if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++) if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;return !1;
  },
      c = function (e) {
    var n = t.getComputedStyle(e)["overflow-y"],
        o = t.getComputedStyle(e)["overflow-x"],
        i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
        a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;return i || a;
  },
      l = function (t) {
    for (var e = !1;;) {
      if (e = c(t.get(0))) break;if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break;
    }return e;
  },
      d = function (t) {
    var e = this;e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
  };d.prototype.destroy = function () {
    this.$container.off(".fb.touch");
  }, d.prototype.ontouchstart = function (o) {
    var i = this,
        c = n(o.target),
        d = i.instance,
        u = d.current,
        f = u.$content,
        p = "touchstart" == o.type;if (p && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
      if (!u || d.isAnimating || d.isClosing) return o.stopPropagation(), void o.preventDefault();if (i.realPoints = i.startPoints = a(o), i.startPoints.length) {
        if (o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = f, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.startTime = new Date().getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(u.$slide[0].clientWidth), i.canvasHeight = Math.round(u.$slide[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || { top: 0, left: 0 }, i.sliderStartPos = i.sliderLastPos || n.fancybox.getTranslate(u.$slide), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), !i.opts && !d.canPan() || !c.is(i.$stage) && !i.$stage.find(c).length) return void (c.is(".fancybox-image") && o.preventDefault());n.fancybox.isMobile && (l(c) || l(c.parent())) || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.instance.canPan() ? (n.fancybox.stop(i.$content), i.$content.css("transition-duration", ""), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-controls--isGrabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.$content.css("transition-duration", ""), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]));
      }
    }
  }, d.prototype.onscroll = function (t) {
    var n = this;n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0);
  }, d.prototype.ontouchmove = function (t) {
    var e = this,
        o = n(t.target);return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling || !o.is(e.$stage) && !e.$stage.find(o).length ? void (e.canTap = !1) : (e.newPoints = a(t), void ((e.opts || e.instance.canPan()) && e.newPoints.length && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))));
  }, d.prototype.onSwipe = function (e) {
    var a,
        s = this,
        r = s.isSwiping,
        c = s.sliderStartPos.left || 0;if (r !== !0) "x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX), s.sliderLastPos = { top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY, left: c }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
      s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
        var o = e.pos - s.instance.currPos;n.fancybox.setTranslate(e.$slide, { top: s.sliderLastPos.top, left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter });
      }), s.$container.addClass("fancybox-is-sliding"));
    });else if (Math.abs(s.distance) > 10) {
      if (s.canTap = !1, s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), s.canTap = !1, "y" === s.isSwiping && n.fancybox.isMobile && (l(s.$target) || l(s.$target.parent()))) return void (s.isScrolling = !0);s.instance.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(s.instance.slides, function (t, e) {
        n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left - n.fancybox.getTranslate(s.instance.$refs.stage).left);
      }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop();
    }
  }, d.prototype.onPan = function () {
    var t = this;return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void (t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (i(t.requestId), t.requestId = null), void (t.requestId = o(function () {
      n.fancybox.setTranslate(t.$content, t.contentLastPos);
    })));
  }, d.prototype.limitMovement = function () {
    var t,
        e,
        n,
        o,
        i,
        a,
        s = this,
        r = s.canvasWidth,
        c = s.canvasHeight,
        l = s.distanceX,
        d = s.distanceY,
        u = s.contentStartPos,
        f = u.left,
        p = u.top,
        h = u.width,
        g = u.height;return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), { top: a, left: i };
  }, d.prototype.limitPosition = function (t, e, n, o) {
    var i = this,
        a = i.canvasWidth,
        s = i.canvasHeight;return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), { top: e, left: t };
  }, d.prototype.onZoom = function () {
    var e = this,
        a = e.contentStartPos,
        r = a.width,
        c = a.height,
        l = a.left,
        d = a.top,
        u = s(e.newPoints[0], e.newPoints[1]),
        f = u / e.startDistanceBetweenFingers,
        p = Math.floor(r * f),
        h = Math.floor(c * f),
        g = (r - p) * e.percentageOfImageAtPinchPointX,
        b = (c - h) * e.percentageOfImageAtPinchPointY,
        m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
        y = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
        v = m - e.centerPointStartX,
        x = y - e.centerPointStartY,
        w = l + (g + v),
        $ = d + (b + x),
        S = { top: $, left: w, scaleX: f, scaleY: f };e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && (i(e.requestId), e.requestId = null), e.requestId = o(function () {
      n.fancybox.setTranslate(e.$content, e.contentLastPos);
    });
  }, d.prototype.ontouchend = function (t) {
    var o = this,
        s = Math.max(new Date().getTime() - o.startTime, 1),
        r = o.isSwiping,
        c = o.isPanning,
        l = o.isZooming,
        d = o.isScrolling;return o.endPoints = a(t), o.$container.removeClass("fancybox-controls--isGrabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap ? o.onTap(t) : (o.speed = 366, o.velocityX = o.distanceX / s * .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)), void (c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, d)));
  }, d.prototype.endSwiping = function (t, e) {
    var o = this,
        i = !1,
        a = o.instance.group.length;o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, { top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY, opacity: 0 }, 200), i = o.instance.close(!0, 200)) : "x" == t && o.distanceX > 50 && a > 1 ? i = o.instance.previous(o.speedX) : "x" == t && o.distanceX < -50 && a > 1 && (i = o.instance.next(o.speedX)), i !== !1 || "x" != t && "y" != t || (e || a < 2 ? o.instance.centerSlide(o.instance.current, 150) : o.instance.jumpTo(o.instance.current.index)), o.$container.removeClass("fancybox-is-sliding");
  }, d.prototype.endPanning = function () {
    var t,
        e,
        o,
        i = this;i.contentLastPos && (i.opts.momentum === !1 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, e = i.contentLastPos.top + i.velocityY * i.speed), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 330));
  }, d.prototype.endZooming = function () {
    var t,
        e,
        o,
        i,
        a = this,
        s = a.instance.current,
        r = a.newWidth,
        c = a.newHeight;a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.setTranslate(a.$content, n.fancybox.getTranslate(a.$content)), n.fancybox.animate(a.$content, o, 150)));
  }, d.prototype.onTap = function (e) {
    var o,
        i = this,
        s = n(e.target),
        r = i.instance,
        c = r.current,
        l = e && a(e) || i.startPoints,
        d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
        u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
        f = function (t) {
      var o = c.opts[t];if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {case "close":
          r.close(i.startEvent);break;case "toggleControls":
          r.toggleControls(!0);break;case "next":
          r.next();break;case "nextOrClose":
          r.group.length > 1 ? r.next() : r.close(i.startEvent);break;case "zoom":
          "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent));}
    };if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";else if (s.is(".fancybox-slide")) o = "Slide";else {
        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;o = "Content";
      }if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;f("dblclick" + o);
      } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function () {
        i.tapped = null, f("click" + o);
      }, 500) : f("click" + o);return this;
    }
  }, n(e).on("onActivate.fb", function (t, e) {
    e && !e.Guestures && (e.Guestures = new d(e));
  });
}(window, document, window.jQuery || __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a), function (t, e) {
  "use strict";
  e.extend(!0, e.fancybox.defaults, { btnTpl: { slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>' }, slideShow: { autoStart: !1, speed: 3e3 } });var n = function (t) {
    this.instance = t, this.init();
  };e.extend(n.prototype, { timer: null, isActive: !1, $button: null, init: function () {
      var t = this;t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        t.toggle();
      }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide();
    }, set: function (t) {
      var e = this;e.instance && e.instance.current && (t === !0 || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function () {
        e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length);
      }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls());
    }, clear: function () {
      var t = this;clearTimeout(t.timer), t.timer = null;
    }, start: function () {
      var t = this,
          e = t.instance.current;e && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.set(!0));
    }, stop: function () {
      var t = this,
          e = t.instance.current;t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1;
    }, toggle: function () {
      var t = this;t.isActive ? t.stop() : t.start();
    } }), e(t).on({ "onInit.fb": function (t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e));
    }, "beforeShow.fb": function (t, e, n, o) {
      var i = e && e.SlideShow;o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear();
    }, "afterShow.fb": function (t, e, n) {
      var o = e && e.SlideShow;o && o.isActive && o.set();
    }, "afterKeydown.fb": function (n, o, i, a, s) {
      var r = o && o.SlideShow;!r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle());
    }, "beforeClose.fb onDeactivate.fb": function (t, e) {
      var n = e && e.SlideShow;n && n.stop();
    } }), e(t).on("visibilitychange", function () {
    var n = e.fancybox.getInstance(),
        o = n && n.SlideShow;o && o.isActive && (t.hidden ? o.clear() : o.set());
  });
}(document, window.jQuery || __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a), function (t, e) {
  "use strict";
  var n = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
      var i = e[o];if (i && i[1] in t) {
        for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];return n;
      }
    }return !1;
  }();if (!n) return void (e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));var o = { request: function (e) {
      e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
    }, exit: function () {
      t[n.exitFullscreen]();
    }, toggle: function (e) {
      e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
    }, isFullscreen: function () {
      return Boolean(t[n.fullscreenElement]);
    }, enabled: function () {
      return Boolean(t[n.fullscreenEnabled]);
    } };e.extend(!0, e.fancybox.defaults, { btnTpl: { fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>' }, fullScreen: { autoStart: !1 } }), e(t).on({ "onInit.fb": function (t, e) {
      var n;e && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
        t.stopPropagation(), t.preventDefault(), o.toggle();
      }), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
    }, "afterKeydown.fb": function (t, e, n, o, i) {
      e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle());
    }, "beforeClose.fb": function (t, e) {
      e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
    } }), e(t).on(n.fullscreenchange, function () {
    var t = o.isFullscreen(),
        n = e.fancybox.getInstance();n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t));
  });
}(document, window.jQuery || __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a), function (t, e) {
  "use strict";
  var n = "fancybox-thumbs",
      o = n + "-active",
      i = n + "-loading";e.fancybox.defaults = e.extend(!0, { btnTpl: { thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>' }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" } }, e.fancybox.defaults);var a = function (t) {
    this.init(t);
  };e.extend(a.prototype, { $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function (t) {
      var e,
          n,
          o = this;o.instance = t, t.Thumbs = o, o.opts = t.group[t.currIndex].opts.thumbs, e = t.group[0], e = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), t.group.length > 1 && (n = t.group[1], n = n.opts.thumb || !(!n.opts.$thumb || !n.opts.$thumb.length) && n.opts.$thumb.attr("src")), o.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), o.opts && e && n && e && n ? (o.$button.show().on("click", function () {
        o.toggle();
      }), o.isActive = !0) : o.$button.hide();
    }, create: function () {
      var t,
          o = this,
          a = o.instance,
          s = o.opts.parentEl,
          r = [];o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(a.$refs.container.find(s).addBack().filter(s)), o.$grid.on("click", "li", function () {
        a.jumpTo(e(this).attr("data-index"));
      })), o.$list || (o.$list = e("<ul>").appendTo(o.$grid)), e.each(a.group, function (e, n) {
        t = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null), t || "image" !== n.type || (t = n.src), r.push('<li data-index="' + e + '" tabindex="0" class="' + i + '"' + (t && t.length ? ' style="background-image:url(' + t + ')" />' : "") + "></li>");
      }), o.$list[0].innerHTML = r.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + a.group.length * o.$list.children().eq(0).outerWidth(!0));
    }, focus: function (t) {
      var e,
          n,
          i = this,
          a = i.$list,
          s = i.$grid;i.instance.current && (e = a.children().removeClass(o).filter('[data-index="' + i.instance.current.index + '"]').addClass(o), n = e.position(), "y" === i.opts.axis && (n.top < 0 || n.top > a.height() - e.outerHeight()) ? a.stop().animate({ scrollTop: a.scrollTop() + n.top }, t) : "x" === i.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && a.parent().stop().animate({ scrollLeft: n.left }, t));
    }, update: function () {
      var t = this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update();
    }, hide: function () {
      this.isVisible = !1, this.update();
    }, show: function () {
      this.isVisible = !0, this.update();
    }, toggle: function () {
      this.isVisible = !this.isVisible, this.update();
    } }), e(t).on({ "onInit.fb": function (t, e) {
      var n;e && !e.Thumbs && (n = new a(e), n.isActive && n.opts.autoStart === !0 && n.show());
    }, "beforeShow.fb": function (t, e, n, o) {
      var i = e && e.Thumbs;i && i.isVisible && i.focus(o ? 0 : 250);
    }, "afterKeydown.fb": function (t, e, n, o, i) {
      var a = e && e.Thumbs;a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
    }, "beforeClose.fb": function (t, e) {
      var n = e && e.Thumbs;n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide();
    } });
}(document, window.jQuery || __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a), function (t, e) {
  "use strict";
  function n(t) {
    var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };return String(t).replace(/[&<>"'`=\/]/g, function (t) {
      return e[t];
    });
  }e.extend(!0, e.fancybox.defaults, { btnTpl: { share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>' }, share: { url: function (t, e) {
        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
      }, tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>' } }), e(t).on("click", "[data-fancybox-share]", function () {
    var t,
        o,
        i = e.fancybox.getInstance(),
        a = i.current || null;a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({ src: i.translate(i, o), type: "html", opts: { animationEffect: !1, afterLoad: function (t, e) {
          i.$refs.container.one("beforeClose.fb", function () {
            t.close(null, 0);
          }), e.$content.find(".fancybox-share__links a").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1;
          });
        } } }));
  });
}(document, window.jQuery || __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a), function (t, e, n) {
  "use strict";
  function o() {
    var t = e.location.hash.substr(1),
        n = t.split("-"),
        o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
        i = n.join("-");return { hash: t, index: o < 1 ? 1 : o, gallery: i };
  }function i(t) {
    var e;"" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).trigger("click.fb-start"));
  }function a(t) {
    var e, n;return !!t && (e = t.current ? t.current.opts : t.opts, n = e.hash || (e.$orig ? e.$orig.data("fancybox") : ""), "" !== n && n);
  }n.escapeSelector || (n.escapeSelector = function (t) {
    var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
        n = function (t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    };return (t + "").replace(e, n);
  }), n(function () {
    n.fancybox.defaults.hash !== !1 && (n(t).on({ "onInit.fb": function (t, e) {
        var n, i;e.group[e.currIndex].opts.hash !== !1 && (n = o(), i = a(e), i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1));
      }, "beforeShow.fb": function (n, o, i, s) {
        var r;i && i.opts.hash !== !1 && (r = a(o), r && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), e.location.hash !== "#" + o.currentHash && (o.origHash || (o.origHash = e.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
          "replaceState" in e.history ? (e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : e.location.hash = o.currentHash, o.hashTimer = null;
        }, 300))));
      }, "beforeClose.fb": function (n, o, i) {
        var s;i.opts.hash !== !1 && (s = a(o), o.currentHash && o.hasCreatedHistory ? e.history.back() : o.currentHash && ("replaceState" in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (o.origHash || "")) : e.location.hash = o.origHash), o.currentHash = null, clearTimeout(o.hashTimer));
      } }), n(e).on("hashchange.fb", function () {
      var t,
          e = o();n.each(n(".fancybox-container").get().reverse(), function (e, o) {
        var i = n(o).data("FancyBox");if (i.currentHash) return t = i, !1;
      }), t ? !t.currentHash || t.currentHash === e.gallery + "-" + e.index || 1 === e.index && t.currentHash == e.gallery || (t.currentHash = null, t.close()) : "" !== e.gallery && i(e);
    }), setTimeout(function () {
      n.fancybox.getInstance() || i(o());
    }, 50));
  });
}(document, window, window.jQuery || __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a), function (t, e) {
  "use strict";
  var n = new Date().getTime();e(t).on({ "onInit.fb": function (t, e, o) {
      e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
        var o = e.current,
            i = new Date().getTime();e.group.length < 2 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
      });
    } });
}(document, window.jQuery || __WEBPACK_IMPORTED_MODULE_0__jquery_jquery_js___default.a);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 4.2.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 1, 2018
 */
!function (e, t) {
   true ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t();
}(this, function () {
  "use strict";
  var e = "undefined" == typeof document ? { body: {}, addEventListener: function () {}, removeEventListener: function () {}, activeElement: { blur: function () {}, nodeName: "" }, querySelector: function () {
      return null;
    }, querySelectorAll: function () {
      return [];
    }, getElementById: function () {
      return null;
    }, createEvent: function () {
      return { initEvent: function () {} };
    }, createElement: function () {
      return { children: [], childNodes: [], style: {}, setAttribute: function () {}, getElementsByTagName: function () {
          return [];
        } };
    }, location: { hash: "" } } : document,
      t = "undefined" == typeof window ? { document: e, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function () {
      return this;
    }, addEventListener: function () {}, removeEventListener: function () {}, getComputedStyle: function () {
      return { getPropertyValue: function () {
          return "";
        } };
    }, Image: function () {}, Date: function () {}, screen: {}, setTimeout: function () {}, clearTimeout: function () {} } : window,
      i = function (e) {
    for (var t = 0; t < e.length; t += 1) this[t] = e[t];return this.length = e.length, this;
  };function s(s, a) {
    var r = [],
        n = 0;if (s && !a && s instanceof i) return s;if (s) if ("string" == typeof s) {
      var o,
          l,
          d = s.trim();if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
        var h = "div";for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n]);
      } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n]);
    } else if (s.nodeType || s === t || s === e) r.push(s);else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) r.push(s[n]);return new i(r);
  }function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);return t;
  }s.fn = i.prototype, s.Class = i, s.Dom7 = i;var r = { addClass: function (e) {
      if (void 0 === e) return this;for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);return this;
    }, removeClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);return this;
    }, hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    }, toggleClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);return this;
    }, attr: function (e, t) {
      var i = arguments;if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var s = 0; s < this.length; s += 1) if (2 === i.length) this[s].setAttribute(e, t);else for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);return this;
    }, removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);return this;
    }, data: function (e, t) {
      var i;if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;return this;
      }if (i = this[0]) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];var a = i.getAttribute("data-" + e);return a || void 0;
      }
    }, transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;i.webkitTransform = e, i.transform = e;
      }return this;
    }, transition: function (e) {
      "string" != typeof e && (e += "ms");for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;i.webkitTransitionDuration = e, i.transitionDuration = e;
      }return this;
    }, on: function () {
      for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];var a = t[0],
          r = t[1],
          n = t[2],
          o = t[3];function l(e) {
        var t = e.target;if (t) {
          var i = e.target.dom7EventData || [];if (i.unshift(e), s(t).is(r)) n.apply(t, i);else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i);
        }
      }function d(e) {
        var t = e && e.target ? e.target.dom7EventData || [] : [];t.unshift(e), n.apply(this, t);
      }"function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];if (r) for (h = 0; h < p.length; h += 1) u.dom7LiveListeners || (u.dom7LiveListeners = []), u.dom7LiveListeners.push({ type: a, listener: n, proxyListener: l }), u.addEventListener(p[h], l, o);else for (h = 0; h < p.length; h += 1) u.dom7Listeners || (u.dom7Listeners = []), u.dom7Listeners.push({ type: a, listener: n, proxyListener: d }), u.addEventListener(p[h], d, o);
      }return this;
    }, off: function () {
      for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];"function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = 0; d < this.length; d += 1) {
        var h = this[d];if (a) {
          if (h.dom7LiveListeners) for (var p = 0; p < h.dom7LiveListeners.length; p += 1) r ? h.dom7LiveListeners[p].listener === r && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n) : h.dom7LiveListeners[p].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n);
        } else if (h.dom7Listeners) for (var c = 0; c < h.dom7Listeners.length; c += 1) r ? h.dom7Listeners[c].listener === r && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n) : h.dom7Listeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n);
      }return this;
    }, trigger: function () {
      for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) for (var o = 0; o < this.length; o += 1) {
        var l = void 0;try {
          l = new t.CustomEvent(a[n], { detail: r, bubbles: !0, cancelable: !0 });
        } catch (t) {
          (l = e.createEvent("Event")).initEvent(a[n], !0, !0), l.detail = r;
        }this[o].dom7EventData = i.filter(function (e, t) {
          return t > 0;
        }), this[o].dispatchEvent(l), this[o].dom7EventData = [], delete this[o].dom7EventData;
      }return this;
    }, transitionEnd: function (e) {
      var t,
          i = ["webkitTransitionEnd", "transitionend"],
          s = this;function a(r) {
        if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
      }if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);return this;
    }, outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }return this[0].offsetWidth;
      }return null;
    }, outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }return this[0].offsetHeight;
      }return null;
    }, offset: function () {
      if (this.length > 0) {
        var i = this[0],
            s = i.getBoundingClientRect(),
            a = e.body,
            r = i.clientTop || a.clientTop || 0,
            n = i.clientLeft || a.clientLeft || 0,
            o = i === t ? t.scrollY : i.scrollTop,
            l = i === t ? t.scrollX : i.scrollLeft;return { top: s.top + o - r, left: s.left + l - n };
      }return null;
    }, css: function (e, i) {
      var s;if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1) for (var a in e) this[s].style[a] = e[a];return this;
        }if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
      }if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = i;return this;
      }return this;
    }, each: function (e) {
      if (!e) return this;for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;return this;
    }, html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;return this;
    }, text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;for (var t = 0; t < this.length; t += 1) this[t].textContent = e;return this;
    }, is: function (a) {
      var r,
          n,
          o = this[0];if (!o || void 0 === a) return !1;if ("string" == typeof a) {
        if (o.matches) return o.matches(a);if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);if (o.msMatchesSelector) return o.msMatchesSelector(a);for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;return !1;
      }if (a === e) return o === e;if (a === t) return o === t;if (a.nodeType || a instanceof i) {
        for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) if (r[n] === o) return !0;return !1;
      }return !1;
    }, index: function () {
      var e,
          t = this[0];if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);return e;
      }
    }, eq: function (e) {
      if (void 0 === e) return this;var t,
          s = this.length;return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]]);
    }, append: function () {
      for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];for (var r = 0; r < s.length; r += 1) {
        t = s[r];for (var n = 0; n < this.length; n += 1) if ("string" == typeof t) {
          var o = e.createElement("div");for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild);
        } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);else this[n].appendChild(t);
      }return this;
    }, prepend: function (t) {
      var s, a;for (s = 0; s < this.length; s += 1) if ("string" == typeof t) {
        var r = e.createElement("div");for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
      } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);else this[s].insertBefore(t, this[s].childNodes[0]);return this;
    }, next: function (e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]);
    }, nextAll: function (e) {
      var t = [],
          a = this[0];if (!a) return new i([]);for (; a.nextElementSibling;) {
        var r = a.nextElementSibling;e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }return new i(t);
    }, prev: function (e) {
      if (this.length > 0) {
        var t = this[0];return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]);
      }return new i([]);
    }, prevAll: function (e) {
      var t = [],
          a = this[0];if (!a) return new i([]);for (; a.previousElementSibling;) {
        var r = a.previousElementSibling;e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }return new i(t);
    }, parent: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));return s(a(t));
    }, parents: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;return s(a(t));
    }, closest: function (e) {
      var t = this;return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    }, find: function (e) {
      for (var t = [], s = 0; s < this.length; s += 1) for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);return new i(t);
    }, children: function (e) {
      for (var t = [], r = 0; r < this.length; r += 1) for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);return new i(a(t));
    }, remove: function () {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);return this;
    }, add: function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];var i, a;for (i = 0; i < e.length; i += 1) {
        var r = s(e[i]);for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1;
      }return this;
    }, styles: function () {
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    } };Object.keys(r).forEach(function (e) {
    s.fn[e] = r[e];
  });var n,
      o,
      l,
      d = { deleteProps: function (e) {
      var t = e;Object.keys(t).forEach(function (e) {
        try {
          t[e] = null;
        } catch (e) {}try {
          delete t[e];
        } catch (e) {}
      });
    }, nextTick: function (e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }, now: function () {
      return Date.now();
    }, getTranslate: function (e, i) {
      var s, a, r;void 0 === i && (i = "x");var n = t.getComputedStyle(e, null);return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0;
    }, parseUrlQuery: function (e) {
      var i,
          s,
          a,
          r,
          n = {},
          o = e || t.location.href;if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";return n;
    }, isObject: function (e) {
      return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
    }, extend: function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
        var a = e[s];if (void 0 !== a && null !== a) for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
          var l = r[n],
              h = Object.getOwnPropertyDescriptor(a, l);void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l]);
        }
      }return i;
    } },
      h = (l = e.createElement("div"), { touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch), pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent), prefixedPointerEvents: !!t.navigator.msPointerEnabled, transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o), transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n), flexbox: function () {
      for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1) if (t[i] in e) return !0;return !1;
    }(), observer: "MutationObserver" in t || "WebkitMutationObserver" in t, passiveListener: function () {
      var e = !1;try {
        var i = Object.defineProperty({}, "passive", { get: function () {
            e = !0;
          } });t.addEventListener("testPassiveListener", null, i);
      } catch (e) {}return e;
    }(), gestures: "ongesturestart" in t }),
      p = function (e) {
    void 0 === e && (e = {});var t = this;t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
      t.on(e, t.params.on[e]);
    });
  },
      c = { components: { configurable: !0 } };p.prototype.on = function (e, t, i) {
    var s = this;if ("function" != typeof t) return s;var a = i ? "unshift" : "push";return e.split(" ").forEach(function (e) {
      s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
    }), s;
  }, p.prototype.once = function (e, t, i) {
    var s = this;if ("function" != typeof t) return s;return s.on(e, function i() {
      for (var a = [], r = arguments.length; r--;) a[r] = arguments[r];t.apply(s, a), s.off(e, i);
    }, i);
  }, p.prototype.off = function (e, t) {
    var i = this;return i.eventsListeners ? (e.split(" ").forEach(function (e) {
      void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function (s, a) {
        s === t && i.eventsListeners[e].splice(a, 1);
      });
    }), i) : i;
  }, p.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];var i,
        s,
        a,
        r = this;return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(a, s);
        });
      }
    }), r) : r;
  }, p.prototype.useModulesParams = function (e) {
    var t = this;t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i];s.params && d.extend(e, s.params);
    });
  }, p.prototype.useModules = function (e) {
    void 0 === e && (e = {});var t = this;t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i],
          a = e[i] || {};s.instance && Object.keys(s.instance).forEach(function (e) {
        var i = s.instance[e];t[e] = "function" == typeof i ? i.bind(t) : i;
      }), s.on && t.on && Object.keys(s.on).forEach(function (e) {
        t.on(e, s.on[e]);
      }), s.create && s.create.bind(t)(a);
    });
  }, c.components.set = function (e) {
    this.use && this.use(e);
  }, p.installModule = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];var s = this;s.prototype.modules || (s.prototype.modules = {});var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
      s.prototype[t] = e.proto[t];
    }), e.static && Object.keys(e.static).forEach(function (t) {
      s[t] = e.static[t];
    }), e.install && e.install.apply(s, t), s;
  }, p.use = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];var s = this;return Array.isArray(e) ? (e.forEach(function (e) {
      return s.installModule(e);
    }), s) : s.installModule.apply(s, [e].concat(t));
  }, Object.defineProperties(p, c);var u = { updateSize: function () {
      var e,
          t,
          i = this.$el;e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
    }, updateSlides: function () {
      var e = this.params,
          i = this.$wrapperEl,
          s = this.size,
          a = this.rtlTranslate,
          r = this.wrongRTL,
          n = i.children("." + this.params.slideClass),
          o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : n.length,
          l = [],
          p = [],
          c = [],
          u = e.slidesOffsetBefore;"function" == typeof u && (u = e.slidesOffsetBefore.call(this));var v = e.slidesOffsetAfter;"function" == typeof v && (v = e.slidesOffsetAfter.call(this));var f = o,
          m = this.snapGrid.length,
          g = this.snapGrid.length,
          b = e.spaceBetween,
          w = -u,
          y = 0,
          x = 0;if (void 0 !== s) {
        var E, T;"string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, a ? n.css({ marginLeft: "", marginTop: "" }) : n.css({ marginRight: "", marginBottom: "" }), e.slidesPerColumn > 1 && (E = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));for (var S, C = e.slidesPerColumn, M = E / C, z = M - (e.slidesPerColumn * M - o), k = 0; k < o; k += 1) {
          T = 0;var P = n.eq(k);if (e.slidesPerColumn > 1) {
            var $ = void 0,
                L = void 0,
                I = void 0;"column" === e.slidesPerColumnFill ? (I = k - (L = Math.floor(k / C)) * C, (L > z || L === z && I === C - 1) && (I += 1) >= C && (I = 0, L += 1), $ = L + I * E / C, P.css({ "-webkit-box-ordinal-group": $, "-moz-box-ordinal-group": $, "-ms-flex-order": $, "-webkit-order": $, order: $ })) : L = k - (I = Math.floor(k / M)) * M, P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", I);
          }if ("none" !== P.css("display")) {
            if ("auto" === e.slidesPerView) {
              var D = t.getComputedStyle(P[0], null);T = this.isHorizontal() ? P[0].getBoundingClientRect().width + parseFloat(D.getPropertyValue("margin-left")) + parseFloat(D.getPropertyValue("margin-right")) : P[0].getBoundingClientRect().height + parseFloat(D.getPropertyValue("margin-top")) + parseFloat(D.getPropertyValue("margin-bottom")), e.roundLengths && (T = Math.floor(T));
            } else T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), n[k] && (this.isHorizontal() ? n[k].style.width = T + "px" : n[k].style.height = T + "px");n[k] && (n[k].swiperSlideSize = T), c.push(T), e.centeredSlides ? (w = w + T / 2 + y / 2 + b, 0 === y && 0 !== k && (w = w - s / 2 - b), 0 === k && (w = w - s / 2 - b), Math.abs(w) < .001 && (w = 0), x % e.slidesPerGroup == 0 && l.push(w), p.push(w)) : (x % e.slidesPerGroup == 0 && l.push(w), p.push(w), w = w + T + b), this.virtualSize += T + b, y = T, x += 1;
          }
        }if (this.virtualSize = Math.max(this.virtualSize, s) + v, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({ width: this.virtualSize + e.spaceBetween + "px" }), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" })), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" }), e.centeredSlides)) {
          S = [];for (var O = 0; O < l.length; O += 1) l[O] < this.virtualSize + l[0] && S.push(l[O]);l = S;
        }if (!e.centeredSlides) {
          S = [];for (var A = 0; A < l.length; A += 1) l[A] <= this.virtualSize - s && S.push(l[A]);l = S, Math.floor(this.virtualSize - s) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - s);
        }0 === l.length && (l = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? n.css({ marginLeft: b + "px" }) : n.css({ marginRight: b + "px" }) : n.css({ marginBottom: b + "px" })), d.extend(this, { slides: n, snapGrid: l, slidesGrid: p, slidesSizesGrid: c }), o !== f && this.emit("slidesLengthChange"), l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
      }
    }, updateAutoHeight: function (e) {
      var t,
          i = [],
          s = 0;if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
        var a = this.activeIndex + t;if (a > this.slides.length) break;i.push(this.slides.eq(a)[0]);
      } else i.push(this.slides.eq(this.activeIndex)[0]);for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
        var r = i[t].offsetHeight;s = r > s ? r : s;
      }s && this.$wrapperEl.css("height", s + "px");
    }, updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
    }, updateSlidesProgress: function (e) {
      void 0 === e && (e = this.translate || 0);var t = this.params,
          i = this.slides,
          s = this.rtlTranslate;if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();var a = -e;s && (a = e), i.removeClass(t.slideVisibleClass);for (var r = 0; r < i.length; r += 1) {
          var n = i[r],
              o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);if (t.watchSlidesVisibility) {
            var l = -(a - n.swiperSlideOffset),
                d = l + this.slidesSizesGrid[r];(l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass);
          }n.progress = s ? -o : o;
        }
      }
    }, updateProgress: function (e) {
      void 0 === e && (e = this.translate || 0);var t = this.params,
          i = this.maxTranslate() - this.minTranslate(),
          s = this.progress,
          a = this.isBeginning,
          r = this.isEnd,
          n = a,
          o = r;0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, { progress: s, isBeginning: a, isEnd: r }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s);
    }, updateSlidesClasses: function () {
      var e,
          t = this.slides,
          i = this.params,
          s = this.$wrapperEl,
          a = this.activeIndex,
          r = this.realIndex,
          n = this.virtual && i.virtual.enabled;t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
    }, updateActiveIndex: function (e) {
      var t,
          i = this.rtlTranslate ? this.translate : -this.translate,
          s = this.slidesGrid,
          a = this.snapGrid,
          r = this.params,
          n = this.activeIndex,
          o = this.realIndex,
          l = this.snapIndex,
          h = e;if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
      }if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
        var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);d.extend(this, { snapIndex: t, realIndex: c, previousIndex: n, activeIndex: h }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange");
      } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"));
    }, updateClickedSlide: function (e) {
      var t = this.params,
          i = s(e.target).closest("." + t.slideClass)[0],
          a = !1;if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
    } };var v = { getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");var t = this.params,
          i = this.rtlTranslate,
          s = this.translate,
          a = this.$wrapperEl;if (t.virtualTranslate) return i ? -s : s;var r = d.getTranslate(a[0], e);return i && (r = -r), r || 0;
    }, setTranslate: function (e, t) {
      var i = this.rtlTranslate,
          s = this.params,
          a = this.$wrapperEl,
          r = this.progress,
          n = 0,
          o = 0;this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.translate = this.isHorizontal() ? n : o;var l = this.maxTranslate() - this.minTranslate();(0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
    }, minTranslate: function () {
      return -this.snapGrid[0];
    }, maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    } };var f = { setTransition: function (e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    }, transitionStart: function (e, t) {
      void 0 === e && (e = !0);var i = this.activeIndex,
          s = this.params,
          a = this.previousIndex;s.autoHeight && this.updateAutoHeight();var r = t;if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
        if ("reset" === r) return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
      }
    }, transitionEnd: function (e, t) {
      void 0 === e && (e = !0);var i = this.activeIndex,
          s = this.previousIndex;this.animating = !1, this.setTransition(0);var a = t;if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
        if ("reset" === a) return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
      }
    } };var m = { slideTo: function (e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);var a = this,
          r = e;r < 0 && (r = 0);var n = a.params,
          o = a.snapGrid,
          l = a.slidesGrid,
          d = a.previousIndex,
          p = a.activeIndex,
          c = a.rtlTranslate,
          u = a.$wrapperEl;if (a.animating && n.preventIntercationOnTransition) return !1;var v = Math.floor(r / n.slidesPerGroup);v >= o.length && (v = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");var f,
          m = -o[v];if (a.updateProgress(m), n.normalizeSlideIndex) for (var g = 0; g < l.length; g += 1) -Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);if (a.initialized && r !== p) {
        if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (p || 0) !== r) return !1;
      }return f = r > p ? "next" : r < p ? "prev" : "reset", c && -m === a.translate || !c && m === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, u.transitionEnd(function () {
        a && !a.destroyed && a.transitionEnd(i, f);
      }))) : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)), !0);
    }, slideToLoop: function (e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);var a = e;return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
    }, slideNext: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var s = this.params,
          a = this.animating;return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i);
    }, slidePrev: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var s = this.params,
          a = this.animating,
          r = this.snapGrid,
          n = this.slidesGrid,
          o = this.rtlTranslate;if (s.loop) {
        if (a) return !1;this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
      }var l,
          d = o ? this.translate : -this.translate,
          h = (r[r.indexOf(d)], r[r.indexOf(d) - 1]);return h && (l = n.indexOf(h)) < 0 && (l = this.activeIndex - 1), this.slideTo(l, e, t, i);
    }, slideReset: function (e, t, i) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
    }, slideToClosest: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var s = this.activeIndex,
          a = Math.floor(s / this.params.slidesPerGroup);if (a < this.snapGrid.length - 1) {
        var r = this.rtlTranslate ? this.translate : -this.translate,
            n = this.snapGrid[a];r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup);
      }return this.slideTo(s, e, t, i);
    }, slideToClickedSlide: function () {
      var e,
          t = this,
          i = t.params,
          a = t.$wrapperEl,
          r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
          n = t.clickedIndex;if (i.loop) {
        if (t.animating) return;e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
          t.slideTo(n);
        })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
          t.slideTo(n);
        })) : t.slideTo(n);
      } else t.slideTo(n);
    } };var g = { loopCreate: function () {
      var t = this,
          i = t.params,
          a = t.$wrapperEl;a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();var r = a.children("." + i.slideClass);if (i.loopFillGroupWithBlank) {
        var n = i.slidesPerGroup - r.length % i.slidesPerGroup;if (n !== i.slidesPerGroup) {
          for (var o = 0; o < n; o += 1) {
            var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);a.append(l);
          }r = a.children("." + i.slideClass);
        }
      }"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);var d = [],
          h = [];r.each(function (e, i) {
        var a = s(i);e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e);
      });for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
    }, loopFix: function () {
      var e,
          t = this.params,
          i = this.activeIndex,
          s = this.slides,
          a = this.loopedSlides,
          r = this.allowSlidePrev,
          n = this.allowSlideNext,
          o = this.snapGrid,
          l = this.rtlTranslate;this.allowSlidePrev = !0, this.allowSlideNext = !0;var d = -o[i] - this.getTranslate();i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));this.allowSlidePrev = r, this.allowSlideNext = n;
    }, loopDestroy: function () {
      var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
    } };var b = { setGrabCursor: function (e) {
      if (!h.touch && this.params.simulateTouch) {
        var t = this.el;t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    }, unsetGrabCursor: function () {
      h.touch || (this.el.style.cursor = "");
    } };var w = { appendSlide: function (e) {
      var t = this.$wrapperEl,
          i = this.params;if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);else t.append(e);i.loop && this.loopCreate(), i.observer && h.observer || this.update();
    }, prependSlide: function (e) {
      var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;t.loop && this.loopDestroy();var a = s + 1;if ("object" == typeof e && "length" in e) {
        for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);a = s + e.length;
      } else i.prepend(e);t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1);
    }, removeSlide: function (e) {
      var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));var a,
          r = s;if ("object" == typeof e && "length" in e) {
        for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);r = Math.max(r, 0);
      } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
    }, removeAllSlides: function () {
      for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);this.removeSlide(e);
    } },
      y = function () {
    var i = t.navigator.userAgent,
        s = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: t.cordova || t.phonegap, phonegap: t.cordova || t.phonegap },
        a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
        n = i.match(/(iPad).*OS\s([\d_]+)/),
        o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) {
      var d = s.osVersion.split("."),
          h = e.querySelector('meta[name="viewport"]');s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0;
    }return s.pixelRatio = t.devicePixelRatio || 1, s;
  }();function x() {
    var e = this.params,
        t = this.el;if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          a = this.snapGrid;if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
        var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight();
      } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }var E = { attachEvents: function () {
      var i = this.params,
          a = this.touchEvents,
          r = this.el,
          n = this.wrapperEl;this.onTouchStart = function (i) {
        var a = this.touchEventsData,
            r = this.params,
            n = this.touches;if (!this.animating || !r.preventIntercationOnTransition) {
          var o = i;if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved)) if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
            n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;var l = n.currentX,
                h = n.currentY;if (!(y.ios && !y.cordova && r.iOSEdgeSwipeDetection && l <= r.iOSEdgeSwipeThreshold && l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
              if (d.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                var p = !0;s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault();
              }this.emit("touchStart", o);
            }
          }
        }
      }.bind(this), this.onTouchMove = function (t) {
        var i = this.touchEventsData,
            a = this.params,
            r = this.touches,
            n = this.rtlTranslate,
            o = t;if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
          if (!i.isTouchEvent || "mousemove" !== o.type) {
            var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;if (o.preventedByNestedSwiper) return r.startX = l, void (r.startY = h);if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (d.extend(r, { startX: l, startY: h, currentX: l, currentY: h }), i.touchStartTime = d.now()));if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
              if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
            } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
              r.currentX = l, r.currentY = h;var p,
                  c = r.currentX - r.startX,
                  u = r.currentY - r.startY;if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;var v = this.isHorizontal() ? c : u;r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;var f = !0,
                    m = a.resistanceRatio;if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                  if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                }a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({ position: r[this.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }), i.velocities.push({ position: r[this.isHorizontal() ? "currentX" : "currentY"], time: d.now() })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
              }
            }
          }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
      }.bind(this), this.onTouchEnd = function (e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            n = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            h = e;if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);var p,
            c = d.now(),
            u = c - i.touchStartTime;if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function () {
          t && !t.destroyed && t.emit("click", h);
        }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function () {
          t.destroyed || (t.allowClick = !0);
        }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));if (s.freeModeMomentum) {
            if (i.velocities.length > 1) {
              var v = i.velocities.pop(),
                  f = i.velocities.pop(),
                  m = v.position - f.position,
                  g = v.time - f.time;t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;var b = 1e3 * s.freeModeMomentumRatio,
                w = t.velocity * b,
                y = t.translate + w;r && (y = -y);var x,
                E,
                T = !1,
                S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);else if (s.freeModeSticky) {
              for (var C, M = 0; M < l.length; M += 1) if (l[M] > -y) {
                C = M;break;
              }y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1]);
            }if (E && t.once("transitionEnd", function () {
              t.loopFix();
            }), 0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);else if (s.freeModeSticky) return void t.slideToClosest();s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }));
            })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
          } else if (s.freeModeSticky) return void t.slideToClosest();(!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        } else {
          for (var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (z = P, k = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (z = P, k = o[o.length - 1] - o[o.length - 2]);var $ = (p - o[z]) / k;if (u > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)), "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z));
          } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z);
          }
        }
      }.bind(this), this.onClick = function (e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }.bind(this);var o = "container" === i.touchEventsTarget ? r : n,
          l = !!i.nested;if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
        if (h.touch) {
          var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? { passive: !1, capture: l } : l), o.addEventListener(a.end, this.onTouchEnd, p);
        }(i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1));
      } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1);(i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", x, !0);
    }, detachEvents: function () {
      var t = this.params,
          i = this.touchEvents,
          s = this.el,
          a = this.wrapperEl,
          r = "container" === t.touchEventsTarget ? s : a,
          n = !!t.nested;if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
        if (h.touch) {
          var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o);
        }(t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1));
      } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", x);
    } };var T = { setBreakpoint: function () {
      var e = this.activeIndex,
          t = this.loopedSlides;void 0 === t && (t = 0);var i = this.params,
          s = i.breakpoints;if (s && (!s || 0 !== Object.keys(s).length)) {
        var a = this.getBreakpoint(s);if (a && this.currentBreakpoint !== a) {
          var r = a in s ? s[a] : this.originalParams,
              n = i.loop && r.slidesPerView !== i.slidesPerView;d.extend(this.params, r), d.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }), this.currentBreakpoint = a, n && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", r);
        }
      }
    }, getBreakpoint: function (e) {
      if (e) {
        var i = !1,
            s = [];Object.keys(e).forEach(function (e) {
          s.push(e);
        }), s.sort(function (e, t) {
          return parseInt(e, 10) - parseInt(t, 10);
        });for (var a = 0; a < s.length; a += 1) {
          var r = s[a];r >= t.innerWidth && !i && (i = r);
        }return i || "max";
      }
    } },
      S = function () {
    return { isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g), isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent) };var e;
  }();var C = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventIntercationOnTransition: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
      M = { update: u, translate: v, transition: f, slide: m, loop: g, grabCursor: b, manipulation: w, events: E, breakpoints: T, checkOverflow: { checkOverflow: function () {
        var e = this.isLocked;this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update());
      } }, classes: { addClasses: function () {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), s.addClass(e.join(" "));
      }, removeClasses: function () {
        var e = this.$el,
            t = this.classNames;e.removeClass(t.join(" "));
      } }, images: { loadImage: function (e, i, s, a, r, n) {
        var o;function l() {
          n && n();
        }e.complete && r ? l() : i ? ((o = new t.Image()).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l();
      }, preloadImages: function () {
        var e = this;function t() {
          void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }e.imagesToLoad = e.$el.find("img");for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      } } },
      z = {},
      k = function (e) {
    function t() {
      for (var i, a, r, n = [], o = arguments.length; o--;) n[o] = arguments[o];1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(M).forEach(function (e) {
        Object.keys(M[e]).forEach(function (i) {
          t.prototype[i] || (t.prototype[i] = M[e][i]);
        });
      });var l = this;void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
        var t = l.modules[e];if (t.params) {
          var i = Object.keys(t.params)[0],
              s = t.params[i];if ("object" != typeof s) return;if (!(i in r && "enabled" in s)) return;!0 === r[i] && (r[i] = { enabled: !0 }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = { enabled: !1 });
        }
      });var p = d.extend({}, C);l.useModulesParams(p), l.params = d.extend({}, p, z, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r), l.$ = s;var c = s(l.params.el);if (a = c[0]) {
        if (c.length > 1) {
          var u = [];return c.each(function (e, i) {
            var s = d.extend({}, r, { el: i });u.push(new t(s));
          }), u;
        }a.swiper = l, c.data("swiper", l);var v,
            f,
            m = c.children("." + l.params.wrapperClass);return d.extend(l, { $el: c, el: a, $wrapperEl: m, wrapperEl: m[0], classNames: [], slides: s(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function () {
            return "horizontal" === l.params.direction;
          }, isVertical: function () {
            return "vertical" === l.params.direction;
          }, rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"), rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")), wrongRTL: "-webkit-box" === m.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: l.params.allowSlideNext, allowSlidePrev: l.params.allowSlidePrev, touchEvents: (v = ["touchstart", "touchmove", "touchend"], f = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = { start: v[0], move: v[1], end: v[2] }, l.touchEventsDesktop = { start: f[0], move: f[1], end: f[2] }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: d.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: l.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), l.useModules(), l.params.init && l.init(), l;
      }
    }e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;var i = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };return t.prototype.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;if (e.centeredSlides) {
        for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
      } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);return r;
    }, t.prototype.update = function () {
      var e = this;if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }function s() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, t.prototype.init = function () {
      this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
    }, t.prototype.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);var i = this,
          s = i.params,
          a = i.$el,
          r = i.$wrapperEl,
          n = i.slides;i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
        i.off(e);
      }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0;
    }, t.extendDefaults = function (e) {
      d.extend(z, e);
    }, i.extendedDefaults.get = function () {
      return z;
    }, i.defaults.get = function () {
      return C;
    }, i.Class.get = function () {
      return e;
    }, i.$.get = function () {
      return s;
    }, Object.defineProperties(t, i), t;
  }(p),
      P = { name: "device", proto: { device: y }, static: { device: y } },
      $ = { name: "support", proto: { support: h }, static: { support: h } },
      L = { name: "browser", proto: { browser: S }, static: { browser: S } },
      I = { name: "resize", create: function () {
      var e = this;d.extend(e, { resize: { resizeHandler: function () {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          }, orientationChangeHandler: function () {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          } } });
    }, on: { init: function () {
        t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      }, destroy: function () {
        t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      } } },
      D = { func: t.MutationObserver || t.WebkitMutationObserver, attach: function (e, t) {
      void 0 === t && (t = {});var i = this,
          s = new (0, D.func)(function (e) {
        e.forEach(function (e) {
          i.emit("observerUpdate", e);
        });
      });s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(s);
    }, init: function () {
      if (h.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);this.observer.attach(this.$el[0], { childList: !1 }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
      }
    }, destroy: function () {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    } },
      O = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function () {
      d.extend(this, { observer: { init: D.init.bind(this), attach: D.attach.bind(this), destroy: D.destroy.bind(this), observers: [] } });
    }, on: { init: function () {
        this.observer.init();
      }, destroy: function () {
        this.observer.destroy();
      } } },
      A = { update: function (e) {
      var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.virtual,
          o = n.from,
          l = n.to,
          h = n.slides,
          p = n.slidesGrid,
          c = n.renderSlide,
          u = n.offset;t.updateActiveIndex();var v,
          f,
          m,
          g = t.activeIndex || 0;v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a);var b = Math.max((g || 0) - m, 0),
          w = Math.min((g || 0) + f, h.length - 1),
          y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);function x() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }if (d.extend(t.virtual, { from: b, to: w, offset: y, slidesGrid: t.slidesGrid }), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: y, from: b, to: w, slides: function () {
          for (var e = [], t = b; t <= w; t += 1) e.push(h[t]);return e;
        }() }), void x();var E = [],
          T = [];if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var S = o; S <= l; S += 1) (S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();for (var C = 0; C < h.length; C += 1) C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));T.forEach(function (e) {
        t.$wrapperEl.append(c(h[e], e));
      }), E.sort(function (e, t) {
        return e < t;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(c(h[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x();
    }, renderSlide: function (e, t) {
      var i = this.params.virtual;if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a;
    }, appendSlide: function (e) {
      this.virtual.slides.push(e), this.virtual.update(!0);
    }, prependSlide: function (e) {
      if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
        var t = this.virtual.cache,
            i = {};Object.keys(t).forEach(function (e) {
          i[e + 1] = t[e];
        }), this.virtual.cache = i;
      }this.virtual.update(!0), this.slideNext(0);
    } },
      G = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } }, create: function () {
      d.extend(this, { virtual: { update: A.update.bind(this), appendSlide: A.appendSlide.bind(this), prependSlide: A.prependSlide.bind(this), renderSlide: A.renderSlide.bind(this), slides: this.params.virtual.slides, cache: {} } });
    }, on: { beforeInit: function () {
        if (this.params.virtual.enabled) {
          this.classNames.push(this.params.containerModifierClass + "virtual");var e = { watchSlidesProgress: !0 };d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update();
        }
      }, setTranslate: function () {
        this.params.virtual.enabled && this.virtual.update();
      } } },
      H = { handle: function (i) {
      var s = this.rtlTranslate,
          a = i;a.originalEvent && (a = a.originalEvent);var r = a.keyCode || a.charCode;if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r)) return !1;if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1;if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
        if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
          var n = !1;if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;var o = t.innerWidth,
              l = t.innerHeight,
              d = this.$el.offset();s && (d.left -= this.$el[0].scrollLeft);for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
            var c = h[p];c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
          }if (!n) return;
        }this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !s || 37 === r && s) && this.slideNext(), (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r);
      }
    }, enable: function () {
      this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    }, disable: function () {
      this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    } },
      N = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function () {
      d.extend(this, { keyboard: { enabled: !1, enable: H.enable.bind(this), disable: H.disable.bind(this), handle: H.handle.bind(this) } });
    }, on: { init: function () {
        this.params.keyboard.enabled && this.keyboard.enable();
      }, destroy: function () {
        this.keyboard.enabled && this.keyboard.disable();
      } } };var B = { lastScrollTime: d.now(), event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
      var t = "onwheel" in e;if (!t) {
        var i = e.createElement("div");i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
      }return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
    }() ? "wheel" : "mousewheel", normalize: function (e) {
      var t = 0,
          i = 0,
          s = 0,
          a = 0;return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), { spinX: t, spinY: i, pixelX: s, pixelY: a };
    }, handleMouseEnter: function () {
      this.mouseEntered = !0;
    }, handleMouseLeave: function () {
      this.mouseEntered = !1;
    }, handle: function (e) {
      var i = e,
          s = this,
          a = s.params.mousewheel;if (!s.mouseEntered && !a.releaseOnEdges) return !0;i.originalEvent && (i = i.originalEvent);var r = 0,
          n = s.rtlTranslate ? -1 : 1,
          o = B.normalize(i);if (a.forceToAxis) {
        if (s.isHorizontal()) {
          if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;r = o.pixelX * n;
        } else {
          if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;r = o.pixelY;
        }
      } else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;if (0 === r) return !0;if (a.invert && (r = -r), s.params.freeMode) {
        s.params.loop && s.loopFix();var l = s.getTranslate() + r * a.sensitivity,
            h = s.isBeginning,
            p = s.isEnd;if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function () {
          s.slideToClosest();
        }, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(), l === s.minTranslate() || l === s.maxTranslate()) return !0;
      } else {
        if (d.now() - s.mousewheel.lastScrollTime > 60) if (r < 0) {
          if (s.isEnd && !s.params.loop || s.animating) {
            if (a.releaseOnEdges) return !0;
          } else s.slideNext(), s.emit("scroll", i);
        } else if (s.isBeginning && !s.params.loop || s.animating) {
          if (a.releaseOnEdges) return !0;
        } else s.slidePrev(), s.emit("scroll", i);s.mousewheel.lastScrollTime = new t.Date().getTime();
      }return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1;
    }, enable: function () {
      if (!B.event) return !1;if (this.mousewheel.enabled) return !1;var e = this.$el;return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
    }, disable: function () {
      if (!B.event) return !1;if (!this.mousewheel.enabled) return !1;var e = this.$el;return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
    } },
      X = { update: function () {
      var e = this.params.navigation;if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    }, init: function () {
      var e,
          t,
          i = this,
          a = i.params.navigation;(a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function (e) {
        e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext();
      }), t && t.length > 0 && t.on("click", function (e) {
        e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev();
      }), d.extend(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
    }, destroy: function () {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass));
    } },
      Y = { update: function () {
      var e = this.rtl,
          t = this.params.pagination;if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var o,
              l,
              d,
              h = this.pagination.bullets;if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function (e, a) {
            var r = s(a),
                n = r.index();n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
            for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1) h.eq(u).addClass(t.bulletActiveClass + "-main");p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
          }if (t.dynamicBullets) {
            var v = Math.min(h.length, t.dynamicMainBullets + 4),
                f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                m = e ? "right" : "left";h.css(this.isHorizontal() ? m : "top", f + "px");
          }
        }if ("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1), r.find("." + t.totalClass).text(n)), "progressbar" === t.type) {
          var g;g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";var b = (i + 1) / n,
              w = 1,
              y = 1;"horizontal" === g ? w = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed);
        }"custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    }, render: function () {
      var e = this.params.pagination;if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";if ("bullets" === e.type) {
          for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
        }"fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    }, init: function () {
      var e = this,
          t = e.params.pagination;if (t.el) {
        var i = s(t.el);0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
          t.preventDefault();var i = s(this).index() * e.params.slidesPerGroup;e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), d.extend(e.pagination, { $el: i, el: i[0] }));
      }
    }, destroy: function () {
      var e = this.params.pagination;if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
      }
    } },
      V = { setTranslate: function () {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
          n[0].style.opacity = 0, n.transition(400);
        }, 1e3));
      }
    }, setTransition: function (e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    }, updateSize: function () {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;t[0].style.width = "", t[0].style.height = "";var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, { trackSize: a, divider: r, moveDivider: n, dragSize: s }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
      }
    }, setDragPosition: function (e) {
      var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize;t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
    }, onDragStart: function (e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e);
    }, onDragMove: function (e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    }, onDragEnd: function (e) {
      var t = this.params.scrollbar,
          i = this.scrollbar.$el;this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function () {
        i.css("opacity", 0), i.transition(400);
      }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
    }, enableDraggable: function () {
      if (this.params.scrollbar.el) {
        var t = this.scrollbar,
            i = this.touchEvents,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!h.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 },
            o = !(!h.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 };h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o));
      }
    }, disableDraggable: function () {
      if (this.params.scrollbar.el) {
        var t = this.scrollbar,
            i = this.touchEvents,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!h.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 },
            o = !(!h.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 };h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o));
      }
    }, init: function () {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            a = s(i.el);this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));var r = a.find("." + this.params.scrollbar.dragClass);0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, { $el: a, el: a[0], $dragEl: r, dragEl: r[0] }), i.draggable && e.enableDraggable();
      }
    }, destroy: function () {
      this.scrollbar.disableDraggable();
    } },
      R = { setTransform: function (e, t) {
      var i = this.rtl,
          a = s(e),
          r = i ? -1 : 1,
          n = a.attr("data-swiper-parallax") || "0",
          o = a.attr("data-swiper-parallax-x"),
          l = a.attr("data-swiper-parallax-y"),
          d = a.attr("data-swiper-parallax-scale"),
          h = a.attr("data-swiper-parallax-opacity");if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) {
        var p = h - (h - 1) * (1 - Math.abs(t));a[0].style.opacity = p;
      }if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");else {
        var c = d - (d - 1) * (1 - Math.abs(t));a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
      }
    }, setTranslate: function () {
      var e = this,
          t = e.$el,
          i = e.slides,
          a = e.progress,
          r = e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
        e.parallax.setTransform(i, a);
      }), i.each(function (t, i) {
        var n = i.progress;e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
          e.parallax.setTransform(i, n);
        });
      });
    }, setTransition: function (e) {
      void 0 === e && (e = this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
        var a = s(i),
            r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;0 === e && (r = 0), a.transition(r);
      });
    } },
      F = { getDistanceBetweenTouches: function (e) {
      if (e.targetTouches.length < 2) return 1;var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
    }, onGestureStart: function (e) {
      var t = this.params.zoom,
          i = this.zoom,
          a = i.gesture;if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;i.fakeGestureTouched = !0, a.scaleStart = F.getDistanceBetweenTouches(e);
      }a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
    }, onGestureChange: function (e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;if (!h.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e);
      }s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
    }, onGestureEnd: function (e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;if (!h.gestures) {
        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
      }s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
    }, onTouchStart: function (e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image;i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    }, onTouchMove: function (e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));var r = s.width * t.scale,
            n = s.height * t.scale;if (!(r < i.slideWidth && n < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    }, onTouchEnd: function () {
      var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);i.isTouched = !1, i.isMoved = !1;var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));var h = Math.max(a, r);i.currentX = o, i.currentY = d;var p = i.width * e.scale,
            c = i.height * e.scale;i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
      }
    }, onTransitionEnd: function () {
      var e = this.zoom,
          t = e.gesture;t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1);
    }, toggle: function (e) {
      var t = this.zoom;t.scale && 1 !== t.scale ? t.out() : t.in(e);
    }, in: function (e) {
      var t,
          i,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g,
          b = this.zoom,
          w = this.params.zoom,
          y = b.gesture,
          x = b.image;(y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
    }, out: function () {
      var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
    }, enable: function () {
      var e = this.zoom;if (!e.enabled) {
        e.enabled = !0;var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
      }
    }, disable: function () {
      var e = this.zoom;if (e.enabled) {
        this.zoom.enabled = !1;var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
      }
    } },
      W = { loadInSlide: function (e, t) {
      void 0 === t && (t = !0);var i = this,
          a = i.params.lazy;if (void 0 !== e && 0 !== i.slides.length) {
        var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");!r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (e, n) {
          var o = s(n);o.addClass(a.loadingClass);var l = o.attr("data-background"),
              d = o.attr("data-src"),
              h = o.attr("data-srcset"),
              p = o.attr("data-sizes");i.loadImage(o[0], d || l, h, p, !1, function () {
            if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
              if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                var e = r.attr("data-swiper-slide-index");if (r.hasClass(i.params.slideDuplicateClass)) {
                  var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");i.lazy.loadInSlide(s.index(), !1);
                } else {
                  var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');i.lazy.loadInSlide(n.index(), !1);
                }
              }i.emit("lazyImageReady", r[0], o[0]);
            }
          }), i.emit("lazyImageLoad", r[0], o[0]);
        });
      }
    }, load: function () {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          a = e.slides,
          r = e.activeIndex,
          n = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;function d(e) {
        if (n) {
          if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (a[e]) return !0;return !1;
      }function h(e) {
        return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
      }if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
        var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();e.lazy.loadInSlide(a);
      });else if (l > 1) for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
        for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g);
      } else {
        var b = t.children("." + i.slideNextClass);b.length > 0 && e.lazy.loadInSlide(h(b));var w = t.children("." + i.slidePrevClass);w.length > 0 && e.lazy.loadInSlide(h(w));
      }
    } },
      q = { LinearSpline: function (e, t) {
      var i,
          s,
          a,
          r,
          n,
          o = function (e, t) {
        for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;return i;
      };return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    }, getInterpolateFunction: function (e) {
      this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid));
    }, setTranslate: function (e, t) {
      var i,
          s,
          a = this,
          r = a.controller.control;function n(e) {
        var t = a.rtlTranslate ? -a.translate : a.translate;"slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
      }if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof k && n(r[o]);else r instanceof k && t !== r && n(r);
    }, setTransition: function (e, t) {
      var i,
          s = this,
          a = s.controller.control;function r(t) {
        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
          a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof k && r(a[i]);else a instanceof k && t !== a && r(a);
    } },
      j = { makeElFocusable: function (e) {
      return e.attr("tabIndex", "0"), e;
    }, addElRole: function (e, t) {
      return e.attr("role", t), e;
    }, addElLabel: function (e, t) {
      return e.attr("aria-label", t), e;
    }, disableEl: function (e) {
      return e.attr("aria-disabled", !0), e;
    }, enableEl: function (e) {
      return e.attr("aria-disabled", !1), e;
    }, onEnterKey: function (e) {
      var t = this.params.a11y;if (13 === e.keyCode) {
        var i = s(e.target);this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
      }
    }, notify: function (e) {
      var t = this.a11y.liveRegion;0 !== t.length && (t.html(""), t.html(e));
    }, updateNavigation: function () {
      if (!this.params.loop) {
        var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
      }
    }, updatePagination: function () {
      var e = this,
          t = e.params.a11y;e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, a) {
        var r = s(a);e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
      });
    }, init: function () {
      this.$el.append(this.a11y.liveRegion);var e,
          t,
          i = this.params.a11y;this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    }, destroy: function () {
      var e, t;this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    } },
      K = { init: function () {
      if (this.params.history) {
        if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);var e = this.history;e.initialized = !0, e.paths = K.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
      }
    }, destroy: function () {
      this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
    }, setHistoryPopState: function () {
      this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    }, getPathValues: function () {
      var e = t.location.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = e.length;return { key: e[i - 2], value: e[i - 1] };
    }, setHistory: function (e, i) {
      if (this.history.initialized && this.params.history.enabled) {
        var s = this.slides.eq(i),
            a = K.slugify(s.attr("data-history"));t.location.pathname.includes(e) || (a = e + "/" + a);var r = t.history.state;r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({ value: a }, null, a) : t.history.pushState({ value: a }, null, a));
      }
    }, slugify: function (e) {
      return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    }, scrollToSlide: function (e, t, i) {
      if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
        var r = this.slides.eq(s);if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
          var n = r.index();this.slideTo(n, e, i);
        }
      } else this.slideTo(0, e, i);
    } },
      U = { onHashCange: function () {
      var t = e.location.hash.replace("#", "");t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index());
    }, setHash: function () {
      if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");else {
        var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");e.location.hash = s || "";
      }
    }, init: function () {
      if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
        this.hashNavigation.initialized = !0;var i = e.location.hash.replace("#", "");if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
          var n = this.slides.eq(a);if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
            var o = n.index();this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
          }
        }this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
      }
    }, destroy: function () {
      this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
    } },
      _ = { run: function () {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
      }, i);
    }, start: function () {
      return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
    }, stop: function () {
      return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
    }, pause: function (e) {
      var t = this;t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function () {
        t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
      }) : (t.autoplay.paused = !1, t.autoplay.run())));
    } },
      Z = { setTranslate: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;this.params.virtualTranslate || (s -= this.translate);var a = 0;this.isHorizontal() || (a = s, s = 0);var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);i.css({ opacity: r }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
      }
    }, setTransition: function (e) {
      var t = this,
          i = t.slides,
          s = t.$wrapperEl;if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
        var a = !1;i.transitionEnd(function () {
          if (!a && t && !t.destroyed) {
            a = !0, t.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]);
          }
        });
      }
    } },
      Q = { setTranslate: function () {
      var e,
          t = this.$el,
          i = this.$wrapperEl,
          a = this.slides,
          r = this.width,
          n = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: r + "px" })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));for (var u = 0; u < a.length; u += 1) {
        var v = a.eq(u),
            f = u;p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));var m = 90 * f,
            g = Math.floor(m / 360);o && (m = -m, g = Math.floor(-m / 360));var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
          var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0));
        }
      }if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
            k = d.shadowScale,
            P = d.shadowScale / z,
            $ = d.shadowOffset;e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
      }var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
    }, setTransition: function (e) {
      var t = this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    } },
      J = { setTranslate: function () {
      for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
        var a = e.eq(i),
            r = a[0].progress;this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));var n = -180 * r,
            o = 0,
            l = -a[0].swiperSlideOffset,
            d = 0;if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
          var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0));
        }a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
      }
    }, setTransition: function (e) {
      var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;i.eq(s).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i]);
          }
        });
      }
    } },
      ee = { setTranslate: function () {
      for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
        var f = i.eq(u),
            m = r[u],
            g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
            b = o ? p * g : 0,
            w = o ? 0 : p * g,
            y = -c * Math.abs(g),
            x = o ? 0 : n.stretch * g,
            E = o ? n.stretch * g : 0;Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
          var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
        }
      }(h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%");
    }, setTransition: function (e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    } },
      te = [P, $, L, I, O, G, N, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function () {
      d.extend(this, { mousewheel: { enabled: !1, enable: B.enable.bind(this), disable: B.disable.bind(this), handle: B.handle.bind(this), handleMouseEnter: B.handleMouseEnter.bind(this), handleMouseLeave: B.handleMouseLeave.bind(this), lastScrollTime: d.now() } });
    }, on: { init: function () {
        this.params.mousewheel.enabled && this.mousewheel.enable();
      }, destroy: function () {
        this.mousewheel.enabled && this.mousewheel.disable();
      } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function () {
      d.extend(this, { navigation: { init: X.init.bind(this), update: X.update.bind(this), destroy: X.destroy.bind(this) } });
    }, on: { init: function () {
        this.navigation.init(), this.navigation.update();
      }, toEdge: function () {
        this.navigation.update();
      }, fromEdge: function () {
        this.navigation.update();
      }, destroy: function () {
        this.navigation.destroy();
      }, click: function (e) {
        var t = this.navigation,
            i = t.$nextEl,
            a = t.$prevEl;!this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass));
      } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function () {
      d.extend(this, { pagination: { init: Y.init.bind(this), render: Y.render.bind(this), update: Y.update.bind(this), destroy: Y.destroy.bind(this), dynamicBulletIndex: 0 } });
    }, on: { init: function () {
        this.pagination.init(), this.pagination.render(), this.pagination.update();
      }, activeIndexChange: function () {
        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
      }, snapIndexChange: function () {
        this.params.loop || this.pagination.update();
      }, slidesLengthChange: function () {
        this.params.loop && (this.pagination.render(), this.pagination.update());
      }, snapGridLengthChange: function () {
        this.params.loop || (this.pagination.render(), this.pagination.update());
      }, destroy: function () {
        this.pagination.destroy();
      }, click: function (e) {
        this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass);
      } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function () {
      d.extend(this, { scrollbar: { init: V.init.bind(this), destroy: V.destroy.bind(this), updateSize: V.updateSize.bind(this), setTranslate: V.setTranslate.bind(this), setTransition: V.setTransition.bind(this), enableDraggable: V.enableDraggable.bind(this), disableDraggable: V.disableDraggable.bind(this), setDragPosition: V.setDragPosition.bind(this), onDragStart: V.onDragStart.bind(this), onDragMove: V.onDragMove.bind(this), onDragEnd: V.onDragEnd.bind(this), isTouched: !1, timeout: null, dragTimeout: null } });
    }, on: { init: function () {
        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
      }, update: function () {
        this.scrollbar.updateSize();
      }, resize: function () {
        this.scrollbar.updateSize();
      }, observerUpdate: function () {
        this.scrollbar.updateSize();
      }, setTranslate: function () {
        this.scrollbar.setTranslate();
      }, setTransition: function (e) {
        this.scrollbar.setTransition(e);
      }, destroy: function () {
        this.scrollbar.destroy();
      } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function () {
      d.extend(this, { parallax: { setTransform: R.setTransform.bind(this), setTranslate: R.setTranslate.bind(this), setTransition: R.setTransition.bind(this) } });
    }, on: { beforeInit: function () {
        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0);
      }, init: function () {
        this.params.parallax && this.parallax.setTranslate();
      }, setTranslate: function () {
        this.params.parallax && this.parallax.setTranslate();
      }, setTransition: function (e) {
        this.params.parallax && this.parallax.setTransition(e);
      } } }, { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function () {
      var e = this,
          t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
        t[i] = F[i].bind(e);
      }), d.extend(e, { zoom: t });
    }, on: { init: function () {
        this.params.zoom.enabled && this.zoom.enable();
      }, destroy: function () {
        this.zoom.disable();
      }, touchStart: function (e) {
        this.zoom.enabled && this.zoom.onTouchStart(e);
      }, touchEnd: function (e) {
        this.zoom.enabled && this.zoom.onTouchEnd(e);
      }, doubleTap: function (e) {
        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
      }, transitionEnd: function () {
        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
      } } }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function () {
      d.extend(this, { lazy: { initialImageLoaded: !1, load: W.load.bind(this), loadInSlide: W.loadInSlide.bind(this) } });
    }, on: { beforeInit: function () {
        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
      }, init: function () {
        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
      }, scroll: function () {
        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
      }, resize: function () {
        this.params.lazy.enabled && this.lazy.load();
      }, scrollbarDragMove: function () {
        this.params.lazy.enabled && this.lazy.load();
      }, transitionStart: function () {
        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
      }, transitionEnd: function () {
        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
      } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function () {
      d.extend(this, { controller: { control: this.params.controller.control, getInterpolateFunction: q.getInterpolateFunction.bind(this), setTranslate: q.setTranslate.bind(this), setTransition: q.setTransition.bind(this) } });
    }, on: { update: function () {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, resize: function () {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, observerUpdate: function () {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, setTranslate: function (e, t) {
        this.controller.control && this.controller.setTranslate(e, t);
      }, setTransition: function (e, t) {
        this.controller.control && this.controller.setTransition(e, t);
      } } }, { name: "a11y", params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function () {
      var e = this;d.extend(e, { a11y: { liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(j).forEach(function (t) {
        e.a11y[t] = j[t].bind(e);
      });
    }, on: { init: function () {
        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
      }, toEdge: function () {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      }, fromEdge: function () {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      }, paginationUpdate: function () {
        this.params.a11y.enabled && this.a11y.updatePagination();
      }, destroy: function () {
        this.params.a11y.enabled && this.a11y.destroy();
      } } }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function () {
      d.extend(this, { history: { init: K.init.bind(this), setHistory: K.setHistory.bind(this), setHistoryPopState: K.setHistoryPopState.bind(this), scrollToSlide: K.scrollToSlide.bind(this), destroy: K.destroy.bind(this) } });
    }, on: { init: function () {
        this.params.history.enabled && this.history.init();
      }, destroy: function () {
        this.params.history.enabled && this.history.destroy();
      }, transitionEnd: function () {
        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
      } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function () {
      d.extend(this, { hashNavigation: { initialized: !1, init: U.init.bind(this), destroy: U.destroy.bind(this), setHash: U.setHash.bind(this), onHashCange: U.onHashCange.bind(this) } });
    }, on: { init: function () {
        this.params.hashNavigation.enabled && this.hashNavigation.init();
      }, destroy: function () {
        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
      }, transitionEnd: function () {
        this.hashNavigation.initialized && this.hashNavigation.setHash();
      } } }, { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function () {
      d.extend(this, { autoplay: { running: !1, paused: !1, run: _.run.bind(this), start: _.start.bind(this), stop: _.stop.bind(this), pause: _.pause.bind(this) } });
    }, on: { init: function () {
        this.params.autoplay.enabled && this.autoplay.start();
      }, beforeTransitionStart: function (e, t) {
        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
      }, sliderFirstMove: function () {
        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
      }, destroy: function () {
        this.autoplay.running && this.autoplay.stop();
      } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function () {
      d.extend(this, { fadeEffect: { setTranslate: Z.setTranslate.bind(this), setTransition: Z.setTransition.bind(this) } });
    }, on: { beforeInit: function () {
        if ("fade" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "fade");var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      }, setTranslate: function () {
        "fade" === this.params.effect && this.fadeEffect.setTranslate();
      }, setTransition: function (e) {
        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
      } } }, { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function () {
      d.extend(this, { cubeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } });
    }, on: { beforeInit: function () {
        if ("cube" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      }, setTranslate: function () {
        "cube" === this.params.effect && this.cubeEffect.setTranslate();
      }, setTransition: function (e) {
        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
      } } }, { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function () {
      d.extend(this, { flipEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } });
    }, on: { beforeInit: function () {
        if ("flip" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      }, setTranslate: function () {
        "flip" === this.params.effect && this.flipEffect.setTranslate();
      }, setTransition: function (e) {
        "flip" === this.params.effect && this.flipEffect.setTransition(e);
      } } }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function () {
      d.extend(this, { coverflowEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } });
    }, on: { beforeInit: function () {
        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      }, setTranslate: function () {
        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
      }, setTransition: function (e) {
        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
      } } }];return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(te), k;
});
//# sourceMappingURL=swiper.min.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
   true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.IMask = factory();
})(this, function () {
  'use strict';

  // 7.2.1 RequireObjectCoercible(argument)

  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes


  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }return !IS_INCLUDES && -1;
    };
  };

  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});
  var _shared = function (key) {
    return store[key] || (store[key] = {});
  };

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)


  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = { version: '2.5.5' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () {
        return 7;
      } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
    f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var _redefine = createCommonjsModule(function (module) {
    var SRC = _uid('src');
    var TO_STRING = 'toString';
    var $toString = Function[TO_STRING];
    var TPL = ('' + $toString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      }
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () /* ...args */{
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) _redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1; // forced
  $export.G = 2; // global
  $export.S = 4; // static
  $export.P = 8; // proto
  $export.B = 16; // bind
  $export.W = 32; // wrap
  $export.U = 64; // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  // most Object methods by ES6 should accept primitives


  var _objectSap = function (KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function () {
      fn(1);
    }), 'Object', exp);
  };

  // 19.1.2.14 Object.keys(O)


  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  var keys = _core.Object.keys;

  var _stringRepeat = function repeat(count) {
    var str = String(_defined(this));
    var res = '';
    var n = _toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
    return res;
  };

  _export(_export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: _stringRepeat
  });

  var repeat = _core.String.repeat;

  // https://github.com/tc39/proposal-string-pad-start-end


  var _stringPad = function (that, maxLength, fillString, left) {
    var S = String(_defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = _toLength(maxLength);
    if (intMaxLength <= stringLength || fillStr == '') return S;
    var fillLen = intMaxLength - stringLength;
    var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };

  var navigator = _global.navigator;

  var _userAgent = navigator && navigator.userAgent || '';

  // https://github.com/tc39/proposal-string-pad-start-end


  // https://github.com/zloirock/core-js/issues/280
  _export(_export.P + _export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(_userAgent), 'String', {
    padStart: function padStart(maxLength /* , fillString = ' ' */) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });

  var padStart = _core.String.padStart;

  // https://github.com/tc39/proposal-string-pad-start-end


  // https://github.com/zloirock/core-js/issues/280
  _export(_export.P + _export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(_userAgent), 'String', {
    padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });

  var padEnd = _core.String.padEnd;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent !== null) {
        set(parent, property, value, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      desc.value = value;
    } else {
      var setter = desc.set;

      if (setter !== undefined) {
        setter.call(receiver, value);
      }
    }

    return value;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /** Checks if value is string */
  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }

  /** Conforms string with fallback */
  function conform(res, str) {
    var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return isString(res) ? res : res ? str : fallback;
  }

  /**
    Direction
    @prop {number} NONE
    @prop {number} LEFT
    @prop {number} RIGHT
  */
  var DIRECTION = {
    NONE: 0,
    LEFT: -1,
    RIGHT: 1
    /**
      Direction
      @enum {number}
    */
  };

  /** Returns next char position in direction */
  function indexInDirection(pos, direction) {
    if (direction === DIRECTION.LEFT) --pos;
    return pos;
  }

  /** Escapes regular expression control chars */
  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
  }

  // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
  function objectIncludes(b, a) {
    if (a === b) return true;

    var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i;

    if (arrA && arrB) {
      if (a.length != b.length) return false;
      for (i = 0; i < a.length; i++) {
        if (!objectIncludes(a[i], b[i])) return false;
      }return true;
    }

    if (arrA != arrB) return false;

    if (a && b && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
      var keys = Object.keys(a);
      // if (keys.length !== Object.keys(b).length) return false;

      var dateA = a instanceof Date,
          dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;

      var regexpA = a instanceof RegExp,
          regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;

      for (i = 0; i < keys.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      }for (i = 0; i < keys.length; i++) {
        if (!objectIncludes(a[keys[i]], b[keys[i]])) return false;
      }return true;
    }

    return false;
  }

  /* eslint-disable no-undef */
  var g = typeof window !== 'undefined' && window || typeof global !== 'undefined' && global.global === global && global || typeof self !== 'undefined' && self.self === self && self || {};

  /** Provides details of changing input */

  var ActionDetails = function () {
    /** Old input value */

    /** Current input value */
    function ActionDetails(value, cursorPos, oldValue, oldSelection) {
      classCallCheck(this, ActionDetails);

      this.value = value;
      this.cursorPos = cursorPos;
      this.oldValue = oldValue;
      this.oldSelection = oldSelection;

      // double check if left part was changed (autofilling, other non-standard input triggers)
      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
    }

    /**
      Start changing position
      @readonly
    */

    /** Old selection */

    /** Current cursor position */

    createClass(ActionDetails, [{
      key: 'startChangePos',
      get: function get$$1() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }

      /**
        Inserted symbols count
        @readonly
      */

    }, {
      key: 'insertedCount',
      get: function get$$1() {
        return this.cursorPos - this.startChangePos;
      }

      /**
        Inserted symbols
        @readonly
      */

    }, {
      key: 'inserted',
      get: function get$$1() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }

      /**
        Removed symbols count
        @readonly
      */

    }, {
      key: 'removedCount',
      get: function get$$1() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos ||
        // for Delete
        this.oldValue.length - this.value.length, 0);
      }

      /**
        Removed symbols
        @readonly
      */

    }, {
      key: 'removed',
      get: function get$$1() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }

      /**
        Unchanged head symbols
        @readonly
      */

    }, {
      key: 'head',
      get: function get$$1() {
        return this.value.substring(0, this.startChangePos);
      }

      /**
        Unchanged tail symbols
        @readonly
      */

    }, {
      key: 'tail',
      get: function get$$1() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }

      /**
        Remove direction
        @readonly
      */

    }, {
      key: 'removeDirection',
      get: function get$$1() {
        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;

        // align right if delete at right or if range removed (event with backspace)
        return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }]);
    return ActionDetails;
  }();

  /**
    Provides details of changing model value
    @param {Object} [details]
    @param {string} [details.inserted] - Inserted symbols
    @param {boolean} [details.overflow] - Is overflowed
    @param {number} [details.removeCount] - Removed symbols count
    @param {number} [details.shift] - Additional offset if any changes occurred before current position
  */
  var ChangeDetails = function () {
    /** Additional offset if any changes occurred before current position */

    /** Inserted symbols */
    function ChangeDetails(details) {
      classCallCheck(this, ChangeDetails);

      _extends(this, {
        inserted: '',
        overflow: false,
        shift: 0
      }, details);
    }

    /**
      Aggregate changes
      @returns {ChangeDetails} `this`
    */

    /** Is overflowed */

    createClass(ChangeDetails, [{
      key: 'aggregate',
      value: function aggregate(details) {
        if (details.rawInserted) this.rawInserted += details.rawInserted;
        this.inserted += details.inserted;
        this.shift += details.shift;
        this.overflow = this.overflow || details.overflow;
        return this;
      }

      /** Total offset considering all changes */

    }, {
      key: 'offset',
      get: function get$$1() {
        return this.shift + this.inserted.length;
      }

      /** Raw inserted is used by dynamic mask */

    }, {
      key: 'rawInserted',
      get: function get$$1() {
        return this._rawInserted != null ? this._rawInserted : this.inserted;
      },
      set: function set$$1(rawInserted) {
        this._rawInserted = rawInserted;
      }
    }]);
    return ChangeDetails;
  }();

  /** Supported mask type */

  /** Append flags */

  /** Extract flags */

  /** Provides common masking stuff */
  var Masked = function () {
    /** Does additional processing in the end of editing */

    /** Transforms value before mask processing */
    function Masked(opts) {
      classCallCheck(this, Masked);

      this._value = '';
      this._update(opts);
      this.isInitialized = true;
    }

    /** Sets and applies new options */

    /** */

    /** Validates if value is acceptable */
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

    /** @type {Mask} */

    createClass(Masked, [{
      key: 'updateOptions',
      value: function updateOptions(opts) {
        this.withValueRefresh(this._update.bind(this, opts));
      }

      /**
        Sets new options
        @protected
      */

    }, {
      key: '_update',
      value: function _update(opts) {
        _extends(this, opts);
      }

      /** Clones masked with options and value */

    }, {
      key: 'clone',
      value: function clone() {
        var m = new Masked(this);
        m._value = this.value.slice();
        return m;
      }

      /** */

    }, {
      key: 'assign',
      value: function assign(source) {
        // $FlowFixMe
        return _extends(this, source);
      }

      /** Resets value */

    }, {
      key: 'reset',
      value: function reset() {
        this._value = '';
      }

      /** */

    }, {
      key: 'resolve',

      /** Resolve new value */
      value: function resolve(value) {
        this.reset();
        this._append(value, { input: true });
        this._appendTail();
        this.doCommit();
        return this.value;
      }

      /** */

    }, {
      key: 'nearestInputPos',

      /** Finds nearest input position in direction */
      value: function nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }

      /** Extracts value in range considering flags */

    }, {
      key: 'extractInput',
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        return this.value.slice(fromPos, toPos);
      }

      /** Extracts tail in range */

    }, {
      key: '_extractTail',
      value: function _extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        return {
          value: this.extractInput(fromPos, toPos),
          fromPos: fromPos,
          toPos: toPos
        };
      }

      /** Appends tail */

    }, {
      key: '_appendTail',
      value: function _appendTail(tail) {
        return this._append(tail ? tail.value : '', { tail: true });
      }

      /** Appends symbols considering flags */

    }, {
      key: '_append',
      value: function _append(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var oldValueLength = this.value.length;
        var consistentValue = this.clone();
        var overflow = false;

        str = this.doPrepare(str, flags);

        for (var ci = 0; ci < str.length; ++ci) {
          this._value += str[ci];
          if (this.doValidate(flags) === false) {
            this.assign(consistentValue);
            if (!flags.input) {
              // in `input` mode dont skip invalid chars
              overflow = true;
              break;
            }
          }

          consistentValue = this.clone();
        }

        return new ChangeDetails({
          inserted: this.value.slice(oldValueLength),
          overflow: overflow
        });
      }

      /** Appends symbols considering tail */

    }, {
      key: 'appendWithTail',
      value: function appendWithTail(str, tail) {
        // TODO refactor
        var aggregateDetails = new ChangeDetails();
        var consistentValue = this.clone();
        var consistentAppended = void 0;

        for (var ci = 0; ci < str.length; ++ci) {
          var ch = str[ci];

          var appendDetails = this._append(ch, { input: true });
          consistentAppended = this.clone();
          var tailAppended = !appendDetails.overflow && !this._appendTail(tail).overflow;
          if (!tailAppended || this.doValidate({ tail: true }) === false) {
            this.assign(consistentValue);
            break;
          }

          this.assign(consistentAppended);
          consistentValue = this.clone();
          aggregateDetails.aggregate(appendDetails);
        }

        // TODO needed for cases when
        // 1) REMOVE ONLY AND NO LOOP AT ALL
        // 2) last loop iteration removes tail
        // 3) when breaks on tail insert

        // aggregate only shift from tail
        aggregateDetails.shift += this._appendTail(tail).shift;

        return aggregateDetails;
      }

      /** */

    }, {
      key: 'remove',
      value: function remove() {
        var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length - from;

        this._value = this.value.slice(0, from) + this.value.slice(from + count);
        return new ChangeDetails();
      }

      /** Calls function and reapplies current value */

    }, {
      key: 'withValueRefresh',
      value: function withValueRefresh(fn) {
        if (this._refreshing || !this.isInitialized) return fn();
        this._refreshing = true;

        var unmasked = this.unmaskedValue;
        var value = this.value;

        var ret = fn();

        // try to update with raw value first to keep fixed chars
        if (this.resolve(value) !== value) {
          // or fallback to unmasked
          this.unmaskedValue = unmasked;
        }

        delete this._refreshing;
        return ret;
      }

      /**
        Prepares string before mask processing
        @protected
      */

    }, {
      key: 'doPrepare',
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.prepare ? this.prepare(str, this, flags) : str;
      }

      /**
        Validates if value is acceptable
        @protected
      */

    }, {
      key: 'doValidate',
      value: function doValidate(flags) {
        return !this.validate || this.validate(this.value, this, flags);
      }

      /**
        Does additional processing in the end of editing
        @protected
      */

    }, {
      key: 'doCommit',
      value: function doCommit() {
        if (this.commit) this.commit(this.value, this);
      }

      // TODO
      // insert (str, fromPos, flags)

      /** */

    }, {
      key: 'splice',
      value: function splice(start, deleteCount, inserted, removeDirection) {
        var tailPos = start + deleteCount;
        var tail = this._extractTail(tailPos);

        var startChangePos = this.nearestInputPos(start, removeDirection);
        var changeDetails = new ChangeDetails({
          shift: startChangePos - start // adjust shift if start was aligned
        }).aggregate(this.remove(startChangePos)).aggregate(this.appendWithTail(inserted, tail));

        return changeDetails;
      }
    }, {
      key: 'value',
      get: function get$$1() {
        return this._value;
      },
      set: function set$$1(value) {
        this.resolve(value);
      }
    }, {
      key: 'unmaskedValue',
      get: function get$$1() {
        return this.value;
      },
      set: function set$$1(value) {
        this.reset();
        this._append(value);
        this._appendTail();
        this.doCommit();
      }

      /** */

    }, {
      key: 'typedValue',
      get: function get$$1() {
        return this.unmaskedValue;
      },
      set: function set$$1(value) {
        this.unmaskedValue = value;
      }

      /** Value that includes raw user input */

    }, {
      key: 'rawInputValue',
      get: function get$$1() {
        return this.extractInput(0, this.value.length, { raw: true });
      },
      set: function set$$1(value) {
        this.reset();
        this._append(value, { raw: true });
        this._appendTail();
        this.doCommit();
      }

      /** */

    }, {
      key: 'isComplete',
      get: function get$$1() {
        return true;
      }
    }]);
    return Masked;
  }();

  /** Get Masked class by mask type */
  function maskedClass(mask) {
    if (mask == null) {
      throw new Error('mask property should be defined');
    }

    if (mask instanceof RegExp) return g.IMask.MaskedRegExp;
    if (isString(mask)) return g.IMask.MaskedPattern;
    if (mask instanceof Date || mask === Date) return g.IMask.MaskedDate;
    if (mask instanceof Number || typeof mask === 'number' || mask === Number) return g.IMask.MaskedNumber;
    if (Array.isArray(mask) || mask === Array) return g.IMask.MaskedDynamic;
    // $FlowFixMe
    if (mask.prototype instanceof g.IMask.Masked) return mask;
    // $FlowFixMe
    if (mask instanceof Function) return g.IMask.MaskedFunction;

    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
    return g.IMask.Masked;
  }

  /** Creates new {@link Masked} depending on mask type */
  function createMask(opts) {
    opts = _extends({}, opts); // clone
    var mask = opts.mask;

    if (mask instanceof g.IMask.Masked) return mask;

    var MaskedClass = maskedClass(mask);
    return new MaskedClass(opts);
  }

  /** */

  /** */
  var PatternDefinition = function () {
    /** */

    /** */

    /** */

    /** */
    function PatternDefinition(opts) {
      classCallCheck(this, PatternDefinition);
      // TODO flow
      _extends(this, opts);

      if (this.mask) {
        this._masked = createMask(opts);
      }
    }

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    createClass(PatternDefinition, [{
      key: 'reset',
      value: function reset() {
        this.isHollow = false;
        this.isRawInput = false;
        if (this._masked) this._masked.reset();
      }

      /** */

    }, {
      key: 'resolve',

      /** */
      value: function resolve(ch) {
        if (!this._masked) return false;
        return this._masked.resolve(ch);
      }
    }, {
      key: 'isInput',
      get: function get$$1() {
        return this.type === PatternDefinition.TYPES.INPUT;
      }

      /** */

    }, {
      key: 'isHiddenHollow',
      get: function get$$1() {
        return this.isHollow && this.optional;
      }
    }]);
    return PatternDefinition;
  }();

  PatternDefinition.DEFAULTS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, // http://stackoverflow.com/a/22075070
    '*': /./
  };
  /**
    @prop {string} INPUT
    @prop {string} FIXED
  */
  PatternDefinition.TYPES = {
    INPUT: 'input',
    FIXED: 'fixed'
  };

  /** */

  /** */

  /**
    Pattern group symbols from parent
    @param {MaskedPattern} masked - Internal {@link masked} model
    @param {Object} opts
    @param {string} opts.name - Group name
    @param {number} opts.offset - Group offset in masked definitions array
    @param {string} opts.mask - Group mask
    @param {Function} [opts.validate] - Custom group validator
  */
  var PatternGroup = function () {
    /** Group mask */

    /** Group name */

    /** */
    function PatternGroup(masked, _ref) {
      var name = _ref.name,
          offset = _ref.offset,
          mask = _ref.mask,
          validate = _ref.validate;
      classCallCheck(this, PatternGroup);

      this.masked = masked;
      this.name = name;
      this.offset = offset;
      this.mask = mask;
      this.validate = validate || function () {
        return true;
      };
    }

    /** Slice of internal {@link masked} value */

    /** Custom group validator */

    /** Group offset in masked definitions array */

    /** Internal {@link masked} model */

    /** */

    createClass(PatternGroup, [{
      key: 'doValidate',

      /** Validates if current value is acceptable */
      value: function doValidate(flags) {
        return this.validate(this.value, this, flags);
      }
    }, {
      key: 'value',
      get: function get$$1() {
        return this.masked.value.slice(this.masked.mapDefIndexToPos(this.offset), this.masked.mapDefIndexToPos(this.offset + this.mask.length));
      }

      /** Unmasked slice of internal {@link masked} value */

    }, {
      key: 'unmaskedValue',
      get: function get$$1() {
        return this.masked.extractInput(this.masked.mapDefIndexToPos(this.offset), this.masked.mapDefIndexToPos(this.offset + this.mask.length));
      }
    }]);
    return PatternGroup;
  }();
  var RangeGroup = function () {
    /** @type {Function} */
    function RangeGroup(_ref2) {
      var _ref3 = slicedToArray(_ref2, 2),
          from = _ref3[0],
          to = _ref3[1];

      var maxlen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(to).length;
      classCallCheck(this, RangeGroup);

      this._from = from;
      this._to = to;
      this._maxLength = maxlen;
      this.validate = this.validate.bind(this);

      this._update();
    }
    /** @type {string} */

    createClass(RangeGroup, [{
      key: '_update',
      value: function _update() {
        this._maxLength = Math.max(this._maxLength, String(this.to).length);
        this.mask = '0'.repeat(this._maxLength);
      }
    }, {
      key: 'validate',
      value: function validate(str) {
        var minstr = '';
        var maxstr = '';

        var _ref4 = str.match(/^(\D*)(\d*)(\D*)/) || [],
            _ref5 = slicedToArray(_ref4, 3),
            placeholder = _ref5[1],
            num = _ref5[2];

        if (num) {
          minstr = '0'.repeat(placeholder.length) + num;
          maxstr = '9'.repeat(placeholder.length) + num;
        }

        var firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

        minstr = minstr.padEnd(this._maxLength, '0');
        maxstr = maxstr.padEnd(this._maxLength, '9');

        return this.from <= Number(maxstr) && Number(minstr) <= this.to;
      }
    }, {
      key: 'to',
      get: function get$$1() {
        return this._to;
      },
      set: function set$$1(to) {
        this._to = to;
        this._update();
      }
    }, {
      key: 'from',
      get: function get$$1() {
        return this._from;
      },
      set: function set$$1(from) {
        this._from = from;
        this._update();
      }
    }, {
      key: 'maxLength',
      get: function get$$1() {
        return this._maxLength;
      },
      set: function set$$1(maxLength) {
        this._maxLength = maxLength;
        this._update();
      }
    }, {
      key: '_matchFrom',
      get: function get$$1() {
        return this.maxLength - String(this.from).length;
      }
    }]);
    return RangeGroup;
  }();

  /** Pattern group that validates enum values */
  function EnumGroup(enums) {
    return {
      mask: '*'.repeat(enums[0].length),
      validate: function validate(value, group, flags) {
        return enums.some(function (e) {
          return e.indexOf(group.unmaskedValue) >= 0;
        });
      }
    };
  }

  PatternGroup.Range = RangeGroup;
  PatternGroup.Enum = EnumGroup;

  var ChunksTailDetails = function () {
    function ChunksTailDetails(chunks) {
      classCallCheck(this, ChunksTailDetails);

      this.chunks = chunks;
    }

    createClass(ChunksTailDetails, [{
      key: 'value',
      get: function get$$1() {
        return this.chunks.map(function (c) {
          return c.value;
        }).join('');
      }
    }, {
      key: 'fromPos',
      get: function get$$1() {
        var firstChunk = this.chunks[0];
        return firstChunk && firstChunk.stop;
      }
    }, {
      key: 'toPos',
      get: function get$$1() {
        var lastChunk = this.chunks[this.chunks.length - 1];
        return lastChunk && lastChunk.stop;
      }
    }]);
    return ChunksTailDetails;
  }();

  /**
    Pattern mask
    @param {Object} opts
    @param {Object} opts.groups
    @param {Object} opts.definitions
    @param {string} opts.placeholderChar
    @param {boolean} opts.lazy
  */
  var MaskedPattern = function (_Masked) {
    inherits(MaskedPattern, _Masked);

    // TODO mask type
    /** Single char for empty input */

    /** */
    function MaskedPattern() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, MaskedPattern);
      // TODO type $Shape<MaskedPatternOptions>={} does not work
      opts.definitions = _extends({}, PatternDefinition.DEFAULTS, opts.definitions);
      return possibleConstructorReturn(this, (MaskedPattern.__proto__ || Object.getPrototypeOf(MaskedPattern)).call(this, _extends({}, MaskedPattern.DEFAULTS, opts)));
    }

    /**
      @override
      @param {Object} opts
    */

    /** Show placeholder only when needed */

    /** */

    createClass(MaskedPattern, [{
      key: '_update',
      value: function _update() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        opts.definitions = _extends({}, this.definitions, opts.definitions);
        get(MaskedPattern.prototype.__proto__ || Object.getPrototypeOf(MaskedPattern.prototype), '_update', this).call(this, opts);
        this._rebuildMask();
      }

      /** */

    }, {
      key: '_rebuildMask',
      value: function _rebuildMask() {
        var _this2 = this;

        var defs = this.definitions;
        this._charDefs = [];
        this._groupDefs = [];

        var pattern = this.mask;
        if (!pattern || !defs) return;

        var unmaskingBlock = false;
        var optionalBlock = false;
        var stopAlign = false;

        var _loop = function _loop(_i) {
          if (_this2.groups) {
            var p = pattern.slice(_i);
            var gNames = Object.keys(_this2.groups).filter(function (gName) {
              return p.indexOf(gName) === 0;
            });
            // order by key length
            gNames.sort(function (a, b) {
              return b.length - a.length;
            });
            // use group name with max length
            var gName = gNames[0];
            if (gName) {
              var group = _this2.groups[gName];
              _this2._groupDefs.push(new PatternGroup(_this2, {
                name: gName,
                offset: _this2._charDefs.length,
                mask: group.mask,
                validate: group.validate
              }));
              pattern = pattern.replace(gName, group.mask);
            }
          }

          var char = pattern[_i];
          var type = char in defs ? PatternDefinition.TYPES.INPUT : PatternDefinition.TYPES.FIXED;
          var unmasking = type === PatternDefinition.TYPES.INPUT || unmaskingBlock;
          var optional = type === PatternDefinition.TYPES.INPUT && optionalBlock;

          if (char === MaskedPattern.STOP_CHAR) {
            stopAlign = true;
            return 'continue';
          }

          if (char === '{' || char === '}') {
            unmaskingBlock = !unmaskingBlock;
            return 'continue';
          }

          if (char === '[' || char === ']') {
            optionalBlock = !optionalBlock;
            return 'continue';
          }

          if (char === MaskedPattern.ESCAPE_CHAR) {
            ++_i;
            char = pattern[_i];
            if (!char) return 'break';
            type = PatternDefinition.TYPES.FIXED;
          }

          _this2._charDefs.push(new PatternDefinition({
            char: char,
            type: type,
            optional: optional,
            stopAlign: stopAlign,
            unmasking: unmasking,
            mask: type === PatternDefinition.TYPES.INPUT ? defs[char] : function (value) {
              return value === char;
            }
          }));

          stopAlign = false;
          i = _i;
        };

        _loop2: for (var i = 0; i < pattern.length; ++i) {
          var _ret = _loop(i);

          switch (_ret) {
            case 'continue':
              continue;

            case 'break':
              break _loop2;}
        }
      }

      /**
        @override
      */

    }, {
      key: 'doValidate',
      value: function doValidate() {
        var _babelHelpers$get;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this._groupDefs.every(function (g$$1) {
          return g$$1.doValidate.apply(g$$1, toConsumableArray(args));
        }) && (_babelHelpers$get = get(MaskedPattern.prototype.__proto__ || Object.getPrototypeOf(MaskedPattern.prototype), 'doValidate', this)).call.apply(_babelHelpers$get, [this].concat(toConsumableArray(args)));
      }

      /**
        @override
      */

    }, {
      key: 'clone',
      value: function clone() {
        var _this3 = this;

        var m = new MaskedPattern(this);
        m._value = this.value;
        // $FlowFixMe
        m._charDefs.forEach(function (d, i) {
          return _extends(d, _this3._charDefs[i]);
        });
        // $FlowFixMe
        m._groupDefs.forEach(function (d, i) {
          return _extends(d, _this3._groupDefs[i]);
        });
        return m;
      }

      /**
        @override
      */

    }, {
      key: 'reset',
      value: function reset() {
        get(MaskedPattern.prototype.__proto__ || Object.getPrototypeOf(MaskedPattern.prototype), 'reset', this).call(this);
        this._charDefs.forEach(function (d) {
          delete d.isHollow;
        });
      }

      /**
        @override
      */

    }, {
      key: 'hiddenHollowsBefore',

      /** */
      value: function hiddenHollowsBefore(defIndex) {
        return this._charDefs.slice(0, defIndex).filter(function (d) {
          return d.isHiddenHollow;
        }).length;
      }

      /** Map definition index to position on view */

    }, {
      key: 'mapDefIndexToPos',
      value: function mapDefIndexToPos(defIndex) {
        return defIndex - this.hiddenHollowsBefore(defIndex);
      }

      /** Map position on view to definition index */

    }, {
      key: 'mapPosToDefIndex',
      value: function mapPosToDefIndex(pos) {
        var defIndex = pos;
        for (var di = 0; di < this._charDefs.length; ++di) {
          var def = this._charDefs[di];
          if (di >= defIndex) break;
          if (def.isHiddenHollow) ++defIndex;
        }
        return defIndex;
      }

      /**
        @override
      */

    }, {
      key: '_appendTail',

      /**
        @override
      */
      value: function _appendTail(tail) {
        var details = new ChangeDetails();
        if (tail) {
          details.aggregate(tail instanceof ChunksTailDetails ? this._appendChunks(tail.chunks, { tail: true }) : get(MaskedPattern.prototype.__proto__ || Object.getPrototypeOf(MaskedPattern.prototype), '_appendTail', this).call(this, tail));
        }
        return details.aggregate(this._appendPlaceholder());
      }

      /**
        @override
      */

    }, {
      key: '_append',
      value: function _append(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var oldValueLength = this.value.length;
        var rawInserted = '';
        var overflow = false;

        str = this.doPrepare(str, flags);

        for (var ci = 0, di = this.mapPosToDefIndex(this.value.length); ci < str.length;) {
          var ch = str[ci];
          var def = this._charDefs[di];

          // check overflow
          if (def == null) {
            overflow = true;
            break;
          }

          // reset
          def.isHollow = false;

          var resolved = void 0,
              skipped = void 0;
          var chres = conform(def.resolve(ch), ch);

          if (def.type === PatternDefinition.TYPES.INPUT) {
            if (chres) {
              this._value += chres;
              if (!this.doValidate()) {
                chres = '';
                this._value = this.value.slice(0, -1);
              }
            }

            resolved = !!chres;
            skipped = !chres && !def.optional;

            if (!chres) {
              if (!def.optional && !flags.input && !this.lazy) {
                this._value += this.placeholderChar;
                skipped = false;
              }
              if (!skipped) def.isHollow = true;
            } else {
              rawInserted += chres;
            }
          } else {
            this._value += def.char;
            resolved = chres && (def.unmasking || flags.input || flags.raw) && !flags.tail;
            def.isRawInput = resolved && (flags.raw || flags.input);
            if (def.isRawInput) rawInserted += def.char;
          }

          if (!skipped) ++di;
          if (resolved || skipped) ++ci;
        }

        return new ChangeDetails({
          inserted: this.value.slice(oldValueLength),
          rawInserted: rawInserted,
          overflow: overflow
        });
      }

      /** Appends chunks splitted by stop chars */

    }, {
      key: '_appendChunks',
      value: function _appendChunks(chunks) {
        var details = new ChangeDetails();

        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        for (var ci = 0; ci < chunks.length; ++ci) {
          var _chunks$ci = chunks[ci],
              stop = _chunks$ci.stop,
              value = _chunks$ci.value;

          var fromDef = stop != null && this._charDefs[stop];
          // lets double check if stopAlign is here
          if (fromDef && fromDef.stopAlign) details.aggregate(this._appendPlaceholder(stop));
          if (details.aggregate(this._append.apply(this, [value].concat(toConsumableArray(args)))).overflow) break;
        }
        return details;
      }

      /**
        @override
      */

    }, {
      key: '_extractTail',
      value: function _extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        return new ChunksTailDetails(this._extractInputChunks(fromPos, toPos));
      }

      /**
        @override
      */

    }, {
      key: 'extractInput',
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (fromPos === toPos) return '';

        var str = this.value;
        var input = '';

        var toDefIndex = this.mapPosToDefIndex(toPos);
        for (var ci = fromPos, di = this.mapPosToDefIndex(fromPos); ci < toPos && ci < str.length && di < toDefIndex; ++di) {
          var ch = str[ci];
          var def = this._charDefs[di];

          if (!def) break;
          if (def.isHiddenHollow) continue;

          if (def.isInput && !def.isHollow || flags.raw && !def.isInput && def.isRawInput) input += ch;
          ++ci;
        }
        return input;
      }

      /** Extracts chunks from input splitted by stop chars */

    }, {
      key: '_extractInputChunks',
      value: function _extractInputChunks() {
        var _this4 = this;

        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        if (fromPos === toPos) return [];

        var fromDefIndex = this.mapPosToDefIndex(fromPos);
        var toDefIndex = this.mapPosToDefIndex(toPos);
        var stopDefIndices = this._charDefs.map(function (d, i) {
          return [d, i];
        }).slice(fromDefIndex, toDefIndex).filter(function (_ref) {
          var _ref2 = slicedToArray(_ref, 1),
              d = _ref2[0];

          return d.stopAlign;
        }).map(function (_ref3) {
          var _ref4 = slicedToArray(_ref3, 2),
              i = _ref4[1];

          return i;
        });

        var stops = [fromDefIndex].concat(toConsumableArray(stopDefIndices), [toDefIndex]);

        return stops.map(function (s, i) {
          return {
            stop: stopDefIndices.indexOf(s) >= 0 ? s : null,

            value: _this4.extractInput(_this4.mapDefIndexToPos(s), _this4.mapDefIndexToPos(stops[++i]))
          };
        }).filter(function (_ref5) {
          var stop = _ref5.stop,
              value = _ref5.value;
          return stop != null || value;
        });
      }

      /** Appends placeholder depending on laziness */

    }, {
      key: '_appendPlaceholder',
      value: function _appendPlaceholder(toDefIndex) {
        var oldValueLength = this.value.length;
        var maxDefIndex = toDefIndex || this._charDefs.length;
        for (var di = this.mapPosToDefIndex(this.value.length); di < maxDefIndex; ++di) {
          var def = this._charDefs[di];
          if (def.isInput) def.isHollow = true;

          if (!this.lazy || toDefIndex) {
            this._value += !def.isInput && def.char != null ? def.char : !def.optional ? this.placeholderChar : '';
          }
        }
        return new ChangeDetails({
          inserted: this.value.slice(oldValueLength)
        });
      }

      /**
        @override
      */

    }, {
      key: 'remove',
      value: function remove() {
        var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length - from;

        var fromDefIndex = this.mapPosToDefIndex(from);
        var toDefIndex = this.mapPosToDefIndex(from + count);
        this._charDefs.slice(fromDefIndex, toDefIndex).forEach(function (d) {
          return d.reset();
        });

        return get(MaskedPattern.prototype.__proto__ || Object.getPrototypeOf(MaskedPattern.prototype), 'remove', this).call(this, from, count);
      }

      /**
        @override
      */

    }, {
      key: 'nearestInputPos',
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;

        var step = direction || DIRECTION.RIGHT;

        var initialDefIndex = this.mapPosToDefIndex(cursorPos);
        var initialDef = this._charDefs[initialDefIndex];
        var di = initialDefIndex;

        var firstInputIndex = void 0,
            firstFilledInputIndex = void 0,
            firstVisibleHollowIndex = void 0,
            nextdi = void 0;

        // check if chars at right is acceptable for LEFT and NONE directions
        if (direction !== DIRECTION.RIGHT && (initialDef && initialDef.isInput ||
        // in none direction latest position is acceptable also
        direction === DIRECTION.NONE && cursorPos === this.value.length)) {
          firstInputIndex = initialDefIndex;
          if (initialDef && !initialDef.isHollow) firstFilledInputIndex = initialDefIndex;
        }

        if (firstFilledInputIndex == null && direction == DIRECTION.LEFT || firstInputIndex == null) {
          // search forward
          for (nextdi = indexInDirection(di, step); 0 <= nextdi && nextdi < this._charDefs.length; di += step, nextdi += step) {
            var nextDef = this._charDefs[nextdi];
            if (firstInputIndex == null && nextDef.isInput) {
              firstInputIndex = di;
              if (direction === DIRECTION.NONE) break;
            }
            if (firstVisibleHollowIndex == null && nextDef.isHollow && !nextDef.isHiddenHollow) firstVisibleHollowIndex = di;
            if (nextDef.isInput && !nextDef.isHollow) {
              firstFilledInputIndex = di;
              break;
            }
          }
        }

        // for lazy if has aligned left inside fixed and has came to the start - use start position
        if (direction === DIRECTION.LEFT && di === 0 && this.lazy && !this.extractInput() && (!initialDef || !initialDef.isInput)) firstInputIndex = 0;

        if (direction === DIRECTION.LEFT || firstInputIndex == null) {
          // search backward
          step = -step;
          var overflow = false;

          // find hollows only before initial pos
          for (nextdi = indexInDirection(di, step); 0 <= nextdi && nextdi < this._charDefs.length; di += step, nextdi += step) {
            var _nextDef = this._charDefs[nextdi];
            if (_nextDef.isInput) {
              firstInputIndex = di;
              if (_nextDef.isHollow && !_nextDef.isHiddenHollow) break;
            }

            // if hollow not found before start position - set `overflow`
            // and try to find just any input
            if (di === initialDefIndex) overflow = true;

            // first input found
            if (overflow && firstInputIndex != null) break;
          }

          // process overflow
          overflow = overflow || nextdi >= this._charDefs.length;
          if (overflow && firstInputIndex != null) di = firstInputIndex;
        } else if (firstFilledInputIndex == null) {
          // adjust index if delete at right and filled input not found at right
          di = firstVisibleHollowIndex != null ? firstVisibleHollowIndex : firstInputIndex;
        }

        return this.mapDefIndexToPos(di);
      }

      /** Get group by name */

    }, {
      key: 'group',
      value: function group(name) {
        return this.groupsByName(name)[0];
      }

      /** Get all groups by name */

    }, {
      key: 'groupsByName',
      value: function groupsByName(name) {
        return this._groupDefs.filter(function (g$$1) {
          return g$$1.name === name;
        });
      }
    }, {
      key: 'isComplete',
      get: function get$$1() {
        var _this5 = this;

        return !this._charDefs.some(function (d, i) {
          return d.isInput && !d.optional && (d.isHollow || !_this5.extractInput(i, i + 1));
        });
      }
    }, {
      key: 'unmaskedValue',
      get: function get$$1() {
        var str = this.value;
        var unmasked = '';

        for (var ci = 0, di = 0; ci < str.length && di < this._charDefs.length; ++di) {
          var ch = str[ci];
          var def = this._charDefs[di];

          if (def.isHiddenHollow) continue;
          if (def.unmasking && !def.isHollow) unmasked += ch;
          ++ci;
        }

        return unmasked;
      },
      set: function set$$1(unmaskedValue) {
        set(MaskedPattern.prototype.__proto__ || Object.getPrototypeOf(MaskedPattern.prototype), 'unmaskedValue', unmaskedValue, this);
      }
    }]);
    return MaskedPattern;
  }(Masked);

  MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.Definition = PatternDefinition;
  MaskedPattern.Group = PatternGroup;

  /** Date mask */

  var MaskedDate = function (_MaskedPattern) {
    inherits(MaskedDate, _MaskedPattern);

    /**
      @param {Object} opts
    */

    /** Start date */

    /** Format Date to string */
    function MaskedDate(opts) {
      classCallCheck(this, MaskedDate);
      return possibleConstructorReturn(this, (MaskedDate.__proto__ || Object.getPrototypeOf(MaskedDate)).call(this, _extends({}, MaskedDate.DEFAULTS, opts)));
    }

    /**
      @override
    */

    /** End date */

    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Parse string to Date */

    createClass(MaskedDate, [{
      key: '_update',
      value: function _update(opts) {
        if (opts.mask === Date) delete opts.mask;
        if (opts.pattern) {
          opts.mask = opts.pattern;
          delete opts.pattern;
        }

        var groups = opts.groups;
        opts.groups = _extends({}, MaskedDate.GET_DEFAULT_GROUPS());
        // adjust year group
        if (opts.min) opts.groups.Y.from = opts.min.getFullYear();
        if (opts.max) opts.groups.Y.to = opts.max.getFullYear();
        _extends(opts.groups, groups);

        get(MaskedDate.prototype.__proto__ || Object.getPrototypeOf(MaskedDate.prototype), '_update', this).call(this, opts);
      }

      /**
        @override
      */

    }, {
      key: 'doValidate',
      value: function doValidate() {
        var _babelHelpers$get;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var valid = (_babelHelpers$get = get(MaskedDate.prototype.__proto__ || Object.getPrototypeOf(MaskedDate.prototype), 'doValidate', this)).call.apply(_babelHelpers$get, [this].concat(toConsumableArray(args)));
        var date = this.date;

        return valid && (!this.isComplete || this.isDateExist(this.value) && date && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }

      /** Checks if date is exists */

    }, {
      key: 'isDateExist',
      value: function isDateExist(str) {
        return this.format(this.parse(str)) === str;
      }

      /** Parsed Date */

    }, {
      key: 'date',
      get: function get$$1() {
        return this.isComplete ? this.parse(this.value) : null;
      },
      set: function set$$1(date) {
        this.value = this.format(date);
      }

      /**
        @override
      */

    }, {
      key: 'typedValue',
      get: function get$$1() {
        return this.date;
      },
      set: function set$$1(value) {
        this.date = value;
      }
    }]);
    return MaskedDate;
  }(MaskedPattern);

  MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function format(date) {
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();

      return [day, month, year].join('.');
    },
    parse: function parse(str) {
      var _str$split = str.split('.'),
          _str$split2 = slicedToArray(_str$split, 3),
          day = _str$split2[0],
          month = _str$split2[1],
          year = _str$split2[2];

      return new Date(year, month - 1, day);
    }
  };
  MaskedDate.GET_DEFAULT_GROUPS = function () {
    return {
      d: new PatternGroup.Range([1, 31]),
      m: new PatternGroup.Range([1, 12]),
      Y: new PatternGroup.Range([1900, 9999])
    };
  };

  /**
    Generic element API to use with mask
    @interface
  */
  var MaskElement = function () {
    function MaskElement() {
      classCallCheck(this, MaskElement);
    }

    createClass(MaskElement, [{
      key: 'select',
      value: function select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

        try {
          this._unsafeSelect(start, end);
        } catch (e) {}
      }
    }, {
      key: '_unsafeSelect',
      value: function _unsafeSelect(start, end) {}
    }, {
      key: 'isActive',
      value: function isActive() {
        return false;
      }
    }, {
      key: 'bindEvents',
      value: function bindEvents(handlers) {}
    }, {
      key: 'unbindEvents',
      value: function unbindEvents() {}
    }, {
      key: 'selectionStart',
      get: function get$$1() {
        var start = void 0;
        try {
          start = this._unsafeSelectionStart;
        } catch (e) {}

        return start != null ? start : this.value.length;
      }
    }, {
      key: 'selectionEnd',
      get: function get$$1() {
        var end = void 0;
        try {
          end = this._unsafeSelectionEnd;
        } catch (e) {}

        return end != null ? end : this.value.length;
      }
    }]);
    return MaskElement;
  }();

  var HTMLMaskElement = function (_MaskElement) {
    inherits(HTMLMaskElement, _MaskElement);

    function HTMLMaskElement(input) {
      classCallCheck(this, HTMLMaskElement);

      var _this = possibleConstructorReturn(this, (HTMLMaskElement.__proto__ || Object.getPrototypeOf(HTMLMaskElement)).call(this));

      _this.input = input;
      _this._handlers = {};
      return _this;
    }

    createClass(HTMLMaskElement, [{
      key: 'isActive',
      value: function isActive() {
        return this.input === document.activeElement;
      }
    }, {
      key: '_unsafeSelect',
      value: function _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }
    }, {
      key: 'bindEvents',
      value: function bindEvents(handlers) {
        var _this2 = this;

        Object.keys(handlers).forEach(function (event) {
          return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
        });
      }
    }, {
      key: 'unbindEvents',
      value: function unbindEvents() {
        var _this3 = this;

        Object.keys(this._handlers).forEach(function (event) {
          return _this3._toggleEventHandler(event);
        });
      }
    }, {
      key: '_toggleEventHandler',
      value: function _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
          this.input.removeEventListener(event, this._handlers[event]);
          delete this._handlers[event];
        }

        if (handler) {
          this.input.addEventListener(event, handler);
          this._handlers[event] = handler;
        }
      }
    }, {
      key: '_unsafeSelectionStart',
      get: function get$$1() {
        return this.input.selectionStart;
      }
    }, {
      key: '_unsafeSelectionEnd',
      get: function get$$1() {
        return this.input.selectionEnd;
      }
    }, {
      key: 'value',
      get: function get$$1() {
        return this.input.value;
      },
      set: function set$$1(value) {
        this.input.value = value;
      }
    }]);
    return HTMLMaskElement;
  }(MaskElement);

  HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'change'
  };

  /** Listens to element events and controls changes between element and {@link Masked} */

  var InputMask = function () {

    /**
      @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
      @param {Object} opts
    */

    /**
      View element
      @readonly
    */
    function InputMask(el, opts) {
      classCallCheck(this, InputMask);

      this.el = el instanceof MaskElement ? el : new HTMLMaskElement(el);
      this.masked = createMask(opts);

      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';

      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

      this._bindEvents();

      // refresh
      this.updateValue();
      this._onChange();
    }

    /** Read or update mask */

    /**
      Internal {@link Masked} model
      @readonly
    */

    createClass(InputMask, [{
      key: '_bindEvents',

      /**
        Starts listening to element events
        @protected
      */
      value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this.alignCursorFriendly,
          focus: this.alignCursorFriendly,
          commit: this._onChange
        });
      }

      /**
        Stops listening to element events
        @protected
       */

    }, {
      key: '_unbindEvents',
      value: function _unbindEvents() {
        this.el.unbindEvents();
      }

      /**
        Fires custom event
        @protected
       */

    }, {
      key: '_fireEvent',
      value: function _fireEvent(ev) {
        var listeners = this._listeners[ev];
        if (!listeners) return;

        listeners.forEach(function (l) {
          return l();
        });
      }

      /**
        Current selection start
        @readonly
      */

    }, {
      key: '_saveSelection',

      /**
        Stores current selection
        @protected
      */
      value: function _saveSelection() /* ev */{
        if (this.value !== this.el.value) {
          console.warn('Uncontrolled input change, refresh mask manually!'); // eslint-disable-line no-console
        }
        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }

      /** Syncronizes model value from view */

    }, {
      key: 'updateValue',
      value: function updateValue() {
        this.masked.value = this.el.value;
      }

      /** Syncronizes view from model value, fires change events */

    }, {
      key: 'updateControl',
      value: function updateControl() {
        var newUnmaskedValue = this.masked.unmaskedValue;
        var newValue = this.masked.value;
        var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;

        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;

        if (this.el.value !== newValue) this.el.value = newValue;
        if (isChanged) this._fireChangeEvents();
      }

      /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

    }, {
      key: 'updateOptions',
      value: function updateOptions(opts) {
        opts = _extends({}, opts);

        this.mask = opts.mask;
        delete opts.mask;

        // check if changed
        if (objectIncludes(this.masked, opts)) return;

        this.masked.updateOptions(opts);
        this.updateControl();
      }

      /** Updates cursor */

    }, {
      key: 'updateCursor',
      value: function updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos;

        // also queue change cursor for mobile browsers
        this._delayUpdateCursor(cursorPos);
      }

      /**
        Delays cursor update to support mobile browsers
        @private
      */

    }, {
      key: '_delayUpdateCursor',
      value: function _delayUpdateCursor(cursorPos) {
        var _this = this;

        this._abortUpdateCursor();
        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(function () {
          if (!_this.el) return; // if was destroyed
          _this.cursorPos = _this._changingCursorPos;
          _this._abortUpdateCursor();
        }, 10);
      }

      /**
        Fires custom events
        @protected
      */

    }, {
      key: '_fireChangeEvents',
      value: function _fireChangeEvents() {
        this._fireEvent('accept');
        if (this.masked.isComplete) this._fireEvent('complete');
      }

      /**
        Aborts delayed cursor update
        @private
      */

    }, {
      key: '_abortUpdateCursor',
      value: function _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }

      /** Aligns cursor to nearest available position */

    }, {
      key: 'alignCursor',
      value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
      }

      /** Aligns cursor only if selection is empty */

    }, {
      key: 'alignCursorFriendly',
      value: function alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return;
        this.alignCursor();
      }

      /** Adds listener on custom event */

    }, {
      key: 'on',
      value: function on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];
        this._listeners[ev].push(handler);
        return this;
      }

      /** Removes custom event listener */

    }, {
      key: 'off',
      value: function off(ev, handler) {
        if (!this._listeners[ev]) return;
        if (!handler) {
          delete this._listeners[ev];
          return;
        }
        var hIndex = this._listeners[ev].indexOf(handler);
        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
      }

      /** Handles view input event */

    }, {
      key: '_onInput',
      value: function _onInput() {
        this._abortUpdateCursor();

        // fix strange IE behavior
        if (!this._selection) return this.updateValue();

        var details = new ActionDetails(
        // new state
        this.el.value, this.cursorPos,
        // old state
        this.value, this._selection);

        var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset;

        var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, details.removeDirection);

        this.updateControl();
        this.updateCursor(cursorPos);
      }

      /** Handles view change event and commits model value */

    }, {
      key: '_onChange',
      value: function _onChange() {
        if (this.value !== this.el.value) {
          this.updateValue();
        }
        this.masked.doCommit();
        this.updateControl();
      }

      /** Handles view drop event, prevents by default */

    }, {
      key: '_onDrop',
      value: function _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }

      /** Unbind view events and removes element reference */

    }, {
      key: 'destroy',
      value: function destroy() {
        this._unbindEvents();
        // $FlowFixMe why not do so?
        this._listeners.length = 0;
        delete this.el;
      }
    }, {
      key: 'mask',
      get: function get$$1() {
        return this.masked.mask;
      },
      set: function set$$1(mask) {
        if (mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate) return;

        if (this.masked.constructor === maskedClass(mask)) {
          this.masked.mask = mask;
          return;
        }

        var masked = createMask({ mask: mask });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }

      /** Raw value */

    }, {
      key: 'value',
      get: function get$$1() {
        return this._value;
      },
      set: function set$$1(str) {
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
      }

      /** Unmasked value */

    }, {
      key: 'unmaskedValue',
      get: function get$$1() {
        return this._unmaskedValue;
      },
      set: function set$$1(str) {
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
      }

      /** Typed unmasked value */

    }, {
      key: 'typedValue',
      get: function get$$1() {
        return this.masked.typedValue;
      },
      set: function set$$1(val) {
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
      }
    }, {
      key: 'selectionStart',
      get: function get$$1() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }

      /** Current cursor position */

    }, {
      key: 'cursorPos',
      get: function get$$1() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      },
      set: function set$$1(pos) {
        if (!this.el.isActive) return;

        this.el.select(pos, pos);
        this._saveSelection();
      }
    }]);
    return InputMask;
  }();

  /**
    Number mask
    @param {Object} opts
    @param {string} opts.radix - Single char
    @param {string} opts.thousandsSeparator - Single char
    @param {Array<string>} opts.mapToRadix - Array of single chars
    @param {number} opts.min
    @param {number} opts.max
    @param {number} opts.scale - Digits after point
    @param {boolean} opts.signed - Allow negative
    @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
    @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
  */
  var MaskedNumber = function (_Masked) {
    inherits(MaskedNumber, _Masked);

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Digits after point */

    /** */

    /** Single char */
    function MaskedNumber(opts) {
      classCallCheck(this, MaskedNumber);
      return possibleConstructorReturn(this, (MaskedNumber.__proto__ || Object.getPrototypeOf(MaskedNumber)).call(this, _extends({}, MaskedNumber.DEFAULTS, opts)));
    }

    /**
      @override
    */

    /** Flag to pad trailing zeros after point in the end of editing */

    /** */

    /** */

    /** Array of single chars */

    /** Single char */

    createClass(MaskedNumber, [{
      key: '_update',
      value: function _update(opts) {
        get(MaskedNumber.prototype.__proto__ || Object.getPrototypeOf(MaskedNumber.prototype), '_update', this).call(this, opts);
        this._updateRegExps();
      }

      /** */

    }, {
      key: '_updateRegExps',
      value: function _updateRegExps() {
        // use different regexp to process user input (more strict, input suffix) and tail shifting
        var start = '^';

        var midInput = '';
        var mid = '';
        if (this.allowNegative) {
          midInput += '([+|\\-]?|([+|\\-]?(0|([1-9]+\\d*))))';
          mid += '[+|\\-]?';
        } else {
          midInput += '(0|([1-9]+\\d*))';
        }
        mid += '\\d*';

        var end = (this.scale ? '(' + this.radix + '\\d{0,' + this.scale + '})?' : '') + '$';

        this._numberRegExpInput = new RegExp(start + midInput + end);
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
      }

      /**
        @override
      */

    }, {
      key: '_extractTail',
      value: function _extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var tail = get(MaskedNumber.prototype.__proto__ || Object.getPrototypeOf(MaskedNumber.prototype), '_extractTail', this).call(this, fromPos, toPos);

        return _extends({}, tail, {
          value: this._removeThousandsSeparators(tail.value)
        });
      }

      /** */

    }, {
      key: '_removeThousandsSeparators',
      value: function _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, '');
      }

      /** */

    }, {
      key: '_insertThousandsSeparators',
      value: function _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        var parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }

      /**
        @override
      */

    }, {
      key: 'doPrepare',
      value: function doPrepare(str) {
        var _babelHelpers$get;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_babelHelpers$get = get(MaskedNumber.prototype.__proto__ || Object.getPrototypeOf(MaskedNumber.prototype), 'doPrepare', this)).call.apply(_babelHelpers$get, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(toConsumableArray(args)));
      }

      /**
        @override
      */

    }, {
      key: 'appendWithTail',
      value: function appendWithTail() {
        var _babelHelpers$get2;

        var previousValue = this.value;
        this._value = this._removeThousandsSeparators(this.value);
        var startChangePos = this.value.length;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var appendDetails = (_babelHelpers$get2 = get(MaskedNumber.prototype.__proto__ || Object.getPrototypeOf(MaskedNumber.prototype), 'appendWithTail', this)).call.apply(_babelHelpers$get2, [this].concat(toConsumableArray(args)));
        this._value = this._insertThousandsSeparators(this.value);

        // calculate offsets after insert separators
        var beforeTailPos = startChangePos + appendDetails.inserted.length;
        for (var pos = 0; pos <= beforeTailPos; ++pos) {
          if (this.value[pos] === this.thousandsSeparator) {
            if (pos < startChangePos ||
            // check high bound
            // if separator is still there - consider it also
            pos === startChangePos && previousValue[pos] === this.thousandsSeparator) {
              ++startChangePos;
            }
            if (pos < beforeTailPos) ++beforeTailPos;
          }
        }

        // adjust details with separators
        appendDetails.rawInserted = appendDetails.inserted;
        appendDetails.inserted = this.value.slice(startChangePos, beforeTailPos);
        appendDetails.shift += startChangePos - previousValue.length;

        return appendDetails;
      }

      /**
        @override
      */

    }, {
      key: 'nearestInputPos',
      value: function nearestInputPos(cursorPos, direction) {
        if (!direction) return cursorPos;

        var nextPos = indexInDirection(cursorPos, direction);
        if (this.value[nextPos] === this.thousandsSeparator) cursorPos += direction;
        return cursorPos;
      }

      /**
        @override
      */

    }, {
      key: 'doValidate',
      value: function doValidate(flags) {
        var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp;

        // validate as string
        var valid = regexp.test(this._removeThousandsSeparators(this.value));

        if (valid) {
          // validate as number
          var number = this.number;
          valid = valid && !isNaN(number) && (
          // check min bound for negative values
          this.min == null || this.min >= 0 || this.min <= this.number) && (
          // check max bound for positive values
          this.max == null || this.max <= 0 || this.number <= this.max);
        }

        return valid && get(MaskedNumber.prototype.__proto__ || Object.getPrototypeOf(MaskedNumber.prototype), 'doValidate', this).call(this, flags);
      }

      /**
        @override
      */

    }, {
      key: 'doCommit',
      value: function doCommit() {
        var number = this.number;
        var validnum = number;

        // check bounds
        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);

        if (validnum !== number) this.unmaskedValue = String(validnum);

        var formatted = this.value;

        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);

        this._value = this._insertThousandsSeparators(formatted);
        get(MaskedNumber.prototype.__proto__ || Object.getPrototypeOf(MaskedNumber.prototype), 'doCommit', this).call(this);
      }

      /** */

    }, {
      key: '_normalizeZeros',
      value: function _normalizeZeros(value) {
        var parts = this._removeThousandsSeparators(value).split(this.radix);

        // remove leading zeros
        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
          return sign + num;
        });
        // add leading zero
        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
          if (!parts[1].length) parts.length = 1; // remove fractional
        }

        return this._insertThousandsSeparators(parts.join(this.radix));
      }

      /** */

    }, {
      key: '_padFractionalZeros',
      value: function _padFractionalZeros(value) {
        if (!value) return value;

        var parts = value.split(this.radix);
        if (parts.length < 2) parts.push('');
        parts[1] = parts[1].padEnd(this.scale, '0');
        return parts.join(this.radix);
      }

      /**
        @override
      */

    }, {
      key: 'unmaskedValue',
      get: function get$$1() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
      },
      set: function set$$1(unmaskedValue) {
        set(MaskedNumber.prototype.__proto__ || Object.getPrototypeOf(MaskedNumber.prototype), 'unmaskedValue', unmaskedValue.replace('.', this.radix), this);
      }

      /** Parsed Number */

    }, {
      key: 'number',
      get: function get$$1() {
        return Number(this.unmaskedValue);
      },
      set: function set$$1(number) {
        this.unmaskedValue = String(number);
      }

      /**
        @override
      */

    }, {
      key: 'typedValue',
      get: function get$$1() {
        return this.number;
      },
      set: function set$$1(value) {
        this.number = value;
      }

      /**
        Is negative allowed
        @readonly
      */

    }, {
      key: 'allowNegative',
      get: function get$$1() {
        return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }
    }]);
    return MaskedNumber;
  }(Masked);

  MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: ['.'],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false
  };

  /** Masking by RegExp */

  var MaskedRegExp = function (_Masked) {
    inherits(MaskedRegExp, _Masked);

    function MaskedRegExp() {
      classCallCheck(this, MaskedRegExp);
      return possibleConstructorReturn(this, (MaskedRegExp.__proto__ || Object.getPrototypeOf(MaskedRegExp)).apply(this, arguments));
    }

    createClass(MaskedRegExp, [{
      key: '_update',

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        opts.validate = function (value) {
          return value.search(opts.mask) >= 0;
        };
        get(MaskedRegExp.prototype.__proto__ || Object.getPrototypeOf(MaskedRegExp.prototype), '_update', this).call(this, opts);
      }
    }]);
    return MaskedRegExp;
  }(Masked);

  /** Masking by custom Function */

  var MaskedFunction = function (_Masked) {
    inherits(MaskedFunction, _Masked);

    function MaskedFunction() {
      classCallCheck(this, MaskedFunction);
      return possibleConstructorReturn(this, (MaskedFunction.__proto__ || Object.getPrototypeOf(MaskedFunction)).apply(this, arguments));
    }

    createClass(MaskedFunction, [{
      key: '_update',

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        opts.validate = opts.mask;
        get(MaskedFunction.prototype.__proto__ || Object.getPrototypeOf(MaskedFunction.prototype), '_update', this).call(this, opts);
      }
    }]);
    return MaskedFunction;
  }(Masked);

  /** Dynamic mask for choosing apropriate mask in run-time */
  var MaskedDynamic = function (_Masked) {
    inherits(MaskedDynamic, _Masked);

    /**
      @param {Object} opts
    */

    /** Compliled {@link Masked} options */
    function MaskedDynamic(opts) {
      classCallCheck(this, MaskedDynamic);

      var _this = possibleConstructorReturn(this, (MaskedDynamic.__proto__ || Object.getPrototypeOf(MaskedDynamic)).call(this, _extends({}, MaskedDynamic.DEFAULTS, opts)));

      _this.currentMask = null;
      return _this;
    }

    /**
      @override
    */

    /** Chooses {@link Masked} depending on input value */

    /** Currently chosen mask */

    createClass(MaskedDynamic, [{
      key: '_update',
      value: function _update(opts) {
        get(MaskedDynamic.prototype.__proto__ || Object.getPrototypeOf(MaskedDynamic.prototype), '_update', this).call(this, opts);
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return createMask(m);
        }) : [];
      }

      /**
        @override
      */

    }, {
      key: '_append',
      value: function _append(str) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        str = this.doPrepare.apply(this, [str].concat(toConsumableArray(args)));

        var details = this._applyDispatch.apply(this, [str].concat(toConsumableArray(args)));

        if (this.currentMask) {
          var _currentMask;

          details.aggregate((_currentMask = this.currentMask)._append.apply(_currentMask, [str].concat(toConsumableArray(args))));
        }

        return details;
      }
    }, {
      key: '_applyDispatch',
      value: function _applyDispatch() {
        var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var oldValueLength = this.value.length;
        var inputValue = this.rawInputValue;
        var oldMask = this.currentMask;
        var details = new ChangeDetails();

        // dispatch SHOULD NOT modify mask

        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        this.currentMask = this.doDispatch.apply(this, [appended].concat(toConsumableArray(args)));

        // restore state after dispatch
        if (this.currentMask && this.currentMask !== oldMask) {
          // if mask changed reapply input
          this.currentMask.reset();
          // $FlowFixMe - it's ok, we don't change current mask
          this.currentMask._append(inputValue, { raw: true });
          details.shift = this.value.length - oldValueLength;
        }

        return details;
      }

      /**
        @override
      */

    }, {
      key: 'doDispatch',
      value: function doDispatch(appended) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.dispatch(appended, this, flags);
      }

      /**
        @override
      */

    }, {
      key: 'clone',
      value: function clone() {
        var m = new MaskedDynamic(this);
        m._value = this.value;

        // try to keep reference to compiled masks
        var currentMaskIndex = this.compiledMasks.indexOf(this.currentMask);
        if (this.currentMask) {
          m.currentMask = currentMaskIndex >= 0 ? m.compiledMasks[currentMaskIndex].assign(this.currentMask) : this.currentMask.clone();
        }

        return m;
      }

      /**
        @override
      */

    }, {
      key: 'reset',
      value: function reset() {
        if (this.currentMask) this.currentMask.reset();
        this.compiledMasks.forEach(function (cm) {
          return cm.reset();
        });
      }

      /**
        @override
      */

    }, {
      key: 'remove',

      /**
        @override
      */
      value: function remove() {
        var details = new ChangeDetails();
        if (this.currentMask) {
          var _currentMask2;

          details.aggregate((_currentMask2 = this.currentMask).remove.apply(_currentMask2, arguments))
          // update with dispatch
          .aggregate(this._applyDispatch());
        }

        return details;
      }

      /**
        @override
      */

    }, {
      key: 'extractInput',
      value: function extractInput() {
        var _currentMask3;

        return this.currentMask ? (_currentMask3 = this.currentMask).extractInput.apply(_currentMask3, arguments) : '';
      }

      /**
        @override
      */

    }, {
      key: '_extractTail',
      value: function _extractTail() {
        var _currentMask4, _babelHelpers$get;

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return this.currentMask ? (_currentMask4 = this.currentMask)._extractTail.apply(_currentMask4, toConsumableArray(args)) : (_babelHelpers$get = get(MaskedDynamic.prototype.__proto__ || Object.getPrototypeOf(MaskedDynamic.prototype), '_extractTail', this)).call.apply(_babelHelpers$get, [this].concat(toConsumableArray(args)));
      }

      /**
        @override
      */

    }, {
      key: '_appendTail',
      value: function _appendTail(tail) {
        var details = new ChangeDetails();
        if (tail) details.aggregate(this._applyDispatch(tail.value));

        return details.aggregate(this.currentMask ? this.currentMask._appendTail(tail) : get(MaskedDynamic.prototype.__proto__ || Object.getPrototypeOf(MaskedDynamic.prototype), '_appendTail', this).call(this, tail));
      }

      /**
        @override
      */

    }, {
      key: 'doCommit',
      value: function doCommit() {
        if (this.currentMask) this.currentMask.doCommit();
        get(MaskedDynamic.prototype.__proto__ || Object.getPrototypeOf(MaskedDynamic.prototype), 'doCommit', this).call(this);
      }

      /**
        @override
      */

    }, {
      key: 'nearestInputPos',
      value: function nearestInputPos() {
        var _currentMask5, _babelHelpers$get2;

        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return this.currentMask ? (_currentMask5 = this.currentMask).nearestInputPos.apply(_currentMask5, toConsumableArray(args)) : (_babelHelpers$get2 = get(MaskedDynamic.prototype.__proto__ || Object.getPrototypeOf(MaskedDynamic.prototype), 'nearestInputPos', this)).call.apply(_babelHelpers$get2, [this].concat(toConsumableArray(args)));
      }
    }, {
      key: 'value',
      get: function get$$1() {
        return this.currentMask ? this.currentMask.value : '';
      },
      set: function set$$1(value) {
        set(MaskedDynamic.prototype.__proto__ || Object.getPrototypeOf(MaskedDynamic.prototype), 'value', value, this);
      }

      /**
        @override
      */

    }, {
      key: 'unmaskedValue',
      get: function get$$1() {
        return this.currentMask ? this.currentMask.unmaskedValue : '';
      },
      set: function set$$1(unmaskedValue) {
        set(MaskedDynamic.prototype.__proto__ || Object.getPrototypeOf(MaskedDynamic.prototype), 'unmaskedValue', unmaskedValue, this);
      }

      /**
        @override
      */

    }, {
      key: 'typedValue',
      get: function get$$1() {
        return this.currentMask ? this.currentMask.typedValue : '';
      },
      set: function set$$1(value) {
        var unmaskedValue = String(value);
        if (this.currentMask) {
          this.currentMask.typedValue = value;
          unmaskedValue = this.currentMask.unmaskedValue;
        }
        this.unmaskedValue = unmaskedValue;
      }

      /**
        @override
      */

    }, {
      key: 'isComplete',
      get: function get$$1() {
        return !!this.currentMask && this.currentMask.isComplete;
      }
    }]);
    return MaskedDynamic;
  }(Masked);

  MaskedDynamic.DEFAULTS = {
    dispatch: function dispatch(appended, masked, flags) {
      if (!masked.compiledMasks.length) return;

      var inputValue = masked.rawInputValue;

      // simulate input
      var inputs = masked.compiledMasks.map(function (cm, index) {
        var m = cm.clone();
        m.rawInputValue = inputValue;
        m._append(appended, flags);

        return { value: m.rawInputValue.length, index: index };
      });

      // pop masks with longer values first
      inputs.sort(function (i1, i2) {
        return i2.value - i1.value;
      });

      return masked.compiledMasks[inputs[0].index];
    }
  };

  /**
   * Applies mask on element.
   * @constructor
   * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
   * @param {Object} opts - Custom mask options
   * @return {InputMask}
   */
  function IMask(el) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // currently available only for input-like elements
    return new InputMask(el, opts);
  }

  /** {@link InputMask} */
  IMask.InputMask = InputMask;

  /** {@link Masked} */
  IMask.Masked = Masked;
  /** {@link MaskedPattern} */
  IMask.MaskedPattern = MaskedPattern;
  /** {@link MaskedNumber} */
  IMask.MaskedNumber = MaskedNumber;
  /** {@link MaskedDate} */
  IMask.MaskedDate = MaskedDate;
  /** {@link MaskedRegExp} */
  IMask.MaskedRegExp = MaskedRegExp;
  /** {@link MaskedFunction} */
  IMask.MaskedFunction = MaskedFunction;
  /** {@link MaskedDynamic} */
  IMask.MaskedDynamic = MaskedDynamic;
  /** {@link createMask} */
  IMask.createMask = createMask;
  /** {@link MaskElement} */
  IMask.MaskElement = MaskElement;
  /** {@link HTMLMaskElement} */
  IMask.HTMLMaskElement = HTMLMaskElement;

  g.IMask = IMask;

  return IMask;
});
//# sourceMappingURL=imask.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Burlak Navigation 1.0
 * Ajax navigation, without dependencies
 * http://burlak.me
 * eugeneburlak@yandex.ru
 *
 * Copyright 2018 Eugene Burlak
 *
 * Released under the MIT License
 *
 * Released on: January 23, 2018
 */

// 	options = {
// 	container: string, selector of rendering wrapper,
// 	navItems: string, selectors of links,
// 	preloader: boolean, it render preloader,
//  exact: boolean, return false if link equal current link
//	beforeInit: function, run before init
// 	beforeRendered: function, run before ajax request send,
// 	afterRendered: function, run after render,
//	afterInit: function, run after init
// }

;(function (w) {
	w.BurlakNavigation = function (options) {
		this.options = options;
		this.options.container = this.options.container ? this.options.container : '#app';
		this.options.navItems = this.options.navItems ? this.options.navItems : '.ajax';
		this.options.preloader = this.options.preloader ? true : false;
		this.beforeInit = this.options.beforeInit ? this.options.beforeInit : false;
		this.afterInit = this.options.afterInit ? this.options.afterInit : false;
		this.beforeRendered = this.options.beforeRendered ? this.options.beforeRendered : false;
		this.afterRendered = this.options.afterRendered ? this.options.afterRendered : false;
		this.app = document.querySelector(this.options.container);
		this.isLoadProcess = false;
		this.exact = this.options.exact ? true : false;

		this.get = function (url, method, data, callbackSuccess, callbackError) {
			var res,
			    xhr = new XMLHttpRequest(),
			    param,
			    body = '',
			    self = this;
			for (param in data) {
				body += encodeURIComponent(param) + '=' + encodeURIComponent(data[param]) + '&';
			}
			if (method === 'GET' && body) {
				url = url + '?' + body;
			}
			xhr.open(method, url, true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			method === 'GET' ? xhr.setRequestHeader('X-REQUESTED-WITH', 'XMLHttpRequest') : '';
			xhr.send(body);
			xhr.onreadystatechange = function () {
				if (xhr.readyState != 4) return;
				if (xhr.status != 200) {
					callbackError(xhr);
				} else {
					res = xhr.responseText;
					callbackSuccess(res);
				}
			};
		};

		this.createPreloader = function () {
			var preloader = document.createElement('div'),
			    preloaderSpinner = document.createElement('div');
			preloader.classList.add('preloader');
			preloaderSpinner.classList.add('preloader-spinner');
			preloaderSpinner.innerHTML = '<svg class="preloader-spinner-inner" viewBox="25 25 50 50"><circle class="preloader-spinner-inner-path" cx="50" cy="50" r="20" fill="none" stroke-width="2"/></svg>';
			preloader.appendChild(preloaderSpinner);
			return preloader;
		};

		this.appendPreloader = function () {
			var self = this;
			this.preloader = this.createPreloader();
			document.body.appendChild(this.preloader);
			setTimeout(function () {
				self.preloader.classList.add('preloader__visible');
			}, 0);
		};

		this.removePreloader = function () {
			var self = this;
			self.preloader.classList.remove('preloader__visible');
			setTimeout(function () {
				self.preloader.parentNode.removeChild(self.preloader);
			}, 400);
		};

		this.loadStart = function () {
			this.isLoadProcess = true;
			this.options.preloader ? this.appendPreloader() : '';
		};

		this.loadEnd = function () {
			this.isLoadProcess = false;
			this.options.preloader ? this.removePreloader() : '';
		};

		this.parseAndReplace = function (DOMString, href, addToHistory) {
			var self = this,
			    parser = new DOMParser(),
			    dom = parser.parseFromString(DOMString, 'text/html'),
			    replaced = document.querySelector(self.options.container),
			    replacement = dom.querySelector(self.options.container),
			    newTitle = dom.head.querySelector('title').innerHTML,
			    newBodyClass = dom.body.className;
			document.body.className = newBodyClass;
			document.querySelector('head title').innerHTML = newTitle;
			if (!replacement || !replaced) {
				window.location = href;
				return;
			}
			replaced.parentNode.replaceChild(replacement, replaced);
			if (addToHistory) history.pushState(null, null, href);
			self.addLinksEvent(self.options.navItems);
			if (self.afterRendered) self.afterRendered(replacement);
			self.loadEnd();
		};

		this.getContent = function (href, addToHistory) {
			var self = this;
			if (self.beforeRendered) self.beforeRendered();
			if (self.exact && this.href === location.href || self.isLoadProcess) return;

			self.loadStart();
			self.get(href, 'POST', {}, function (DOMString) {
				self.parseAndReplace(DOMString, href, addToHistory);
			}, function (error) {
				if (error.status === 404) {
					self.parseAndReplace(error.responseText, href, addToHistory);
				} else {
					self.loadEnd();
				}
				if (error.status === 0) {
					window.open(href);
				}
			});
		};

		this.addLinksEvent = function (selector) {
			var self = this,
			    selector = selector ? selector : this.options.navItems,
			    links = document.querySelectorAll(selector);
			for (var i = 0; i < links.length; i++) {
				if (links[i] instanceof Element && links[i].tagName.toLowerCase() === 'a') {
					links[i].addEventListener('click', function (e) {
						e.preventDefault();
						var href = this.href;
						self.getContent(href, true);
					});
				}
			}
		};

		this.popStateListener = function () {
			var self = this;
			window.addEventListener("popstate", function (e) {
				self.getContent(location.pathname + location.search, false);
			});
		};

		this.goTo = function (url) {
			this.getContent(url, true);
		};

		this.init = function () {
			if (this.beforeInit) this.beforeInit();
			this.addLinksEvent(this.options.navItems);
			this.popStateListener();
			if (this.afterRendered) this.afterRendered(document.querySelector(this.options.container));
			if (this.afterInit) this.afterInit();
			return this;
		};
	};
})(window);

/* harmony default export */ __webpack_exports__["a"] = (BurlakNavigation);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Money = exports.Map = exports.InView = exports.Hash = exports.DateTime = exports.Random = exports.Url = exports.Storage = exports.Cookie = exports.Dom = exports.Request = undefined;

var _Request = __webpack_require__(10);

var _Dom = __webpack_require__(11);

var _Cookie = __webpack_require__(12);

var _Storage = __webpack_require__(13);

var _Url = __webpack_require__(14);

var _Random = __webpack_require__(15);

var _DateTime = __webpack_require__(16);

var _Hash = __webpack_require__(17);

var _InView = __webpack_require__(18);

var _Map = __webpack_require__(19);

var _Money = __webpack_require__(20);

var Request = exports.Request = _Request.Request;
var Dom = exports.Dom = _Dom.Dom;
var Cookie = exports.Cookie = _Cookie.Cookie;
var Storage = exports.Storage = _Storage.Storage;
var Url = exports.Url = _Url.Url;
var Random = exports.Random = _Random.Random;
var DateTime = exports.DateTime = _DateTime.DateTime;
var Hash = exports.Hash = _Hash.Hash;
var InView = exports.InView = _InView.InView;
var Map = exports.Map = _Map.Map;
var Money = exports.Money = _Money.Money;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var makeRequest = function makeRequest(method, request) {
	// start: function
	// end: function
	// clearData: boolean
	// url: string
	// data: object
	// headers: object

	return new Promise(function (resolve, reject) {
		if (!request) reject('Empty request');
		request.start && request.start();
		var xhr = new XMLHttpRequest(),
		    url = request.url ? request.url : '',
		    async = request.async ? request.async : true,
		    requestData = request.data,
		    clearData = request.clearData ? true : false,
		    getCount = 0;

		if (method === 'GET') {
			for (var data in requestData) {
				if (!getCount) {
					url += '?' + data + '=' + requestData[data];
				} else {
					url += '&' + data + '=' + requestData[data];
				}
				getCount++;
			}
		}

		xhr.open(method, url, async);
		if (request.headers) {
			for (var header in request.headers) {
				xhr.setRequestHeader(header, request.headers[header]);
			}
		}
		xhr.send(JSON.stringify(requestData));
		xhr.onreadystatechange = function () {
			if (xhr.readyState != 4) return;
			if (xhr.status < 200 || xhr.status > 300) {
				request.end && request.end();
				reject(xhr);
			} else {
				request.end && request.end();
				var response = clearData ? JSON.parse(xhr.response) : xhr;
				resolve(response);
			}
		};
	});
};

var Request = exports.Request = function Request() {
	this.post = function (request) {
		return makeRequest('POST', request);
	};
	this.get = function (request) {
		return makeRequest('GET', request);
	};
	this.put = function (request) {
		return makeRequest('PUT', request);
	};
	this.delete = function (request) {
		return makeRequest('DELETE', request);
	};
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Dom = exports.Dom = function Dom() {
	this.createElem = function (tag, props, html, children) {
		var element = document.createElement(tag);
		for (var prop in props) {
			element.setAttribute(prop, props[prop]);
		}
		if (html) element.innerHTML = html;
		if (children) {
			if (children instanceof Element) {
				element.appendChild(children);
			}
			if (children instanceof Array) {
				children.forEach(function (elem, index) {
					elem instanceof Element && element.appendChild(elem);
				});
			}
		}
		return element;
	};

	this.removeElem = function (elem) {
		if (Element.prototype.remove) {
			elem.remove();
		} else {
			var parent = elem.parentNode;
			parent.removeChild(elem);
		}
	};

	this.getStyle = function (elem, rule) {
		var result = '';
		if (document.defaultView && document.defaultView.getComputedStyle) {
			result = document.defaultView.getComputedStyle(elem, '').getPropertyValue(rule);
		} else if (elem.currentStyle) {
			rule = rule.replace(/\-(\w)/g, function (strMatch, p1) {
				return p1.toUpperCase();
			});
			result = elem.currentStyle[rule];
		}
		return result;
	};
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Cookie = exports.Cookie = function Cookie() {
	this.set = function (name, value, days) {
		var expires = '';
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + '=' + (value || '') + expires + '; path=/';
	};

	this.get = function (name) {
		var stateReq = name + '=',
		    cookieArr = document.cookie.split(';');
		for (var i = 0; i < cookieArr.length; i++) {
			var cookie = cookieArr[i];
			while (cookie.charAt(0) == ' ') {
				cookie = cookie.substring(1, cookie.length);
			}if (cookie.indexOf(stateReq) == 0) return cookie.substring(stateReq.length, cookie.length);
		}
		return null;
	};

	this.remove = function (name) {
		document.cookie = name + '=; Max-Age=-1; path=/';
	};

	this.clear = function () {
		document.cookie.split(';').forEach(function (c) {
			document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
		});
	};
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Storage = exports.Storage = function Storage() {
	var localStorage = window.localStorage;
	this.set = function (name, value) {
		localStorage.setItem(name, value);
		return this.get(name);
	};
	this.get = function (name) {
		return localStorage.getItem(name) || null;
	};
	this.remove = function (name) {
		localStorage.removeItem(name);
		return true;
	};
	this.clear = function () {
		localStorage.clear();
		return true;
	};
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Url = exports.Url = function Url() {
	this.getParametr = function (name) {
		if (name = new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)').exec(location.search)) {
			return decodeURIComponent(name[1]);
		}
		return null;
	};
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Random = exports.Random = function Random() {
	this.defaultSystem = 10;
	this.defaultLength = 13;
	this.defaultUIdCount = 4;
	this.maxLength = this.defaultLength;

	this.single = function () {
		var system = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultSystem;
		var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultLength;

		if (length > this.maxLength) {
			length = this.maxLength;
			console.warn('Max length of random number is ' + this.maxLength);
		}
		var rand = window.Math.floor(window.Math.random() * 0x10000000000000),
		    result = void 0;
		rand = rand.toString(system).substring(1), result = rand.split('').splice(0, length).join('');
		return result;
	};

	this.multy = function () {
		var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultUIdCount;
		var system = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultSystem;
		var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.defaultLength;

		var result = '';
		for (var i = 0; i < count; i++) {
			result += this.single(system, length) + '-';
			if (i == count - 1) result = result.substring(0, result.length - 1);
		}
		return result;
	};
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var DateTime = exports.DateTime = function DateTime() {

	this.timeAgo = function (previous) {
		var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var postfix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

		labels['sec'] = labels && labels['sec'] ? labels['sec'] : 'sec.';
		labels['min'] = labels && labels['min'] ? labels['min'] : 'min.';
		labels['h'] = labels && labels['h'] ? labels['h'] : 'h.';
		labels['d'] = labels && labels['d'] ? labels['d'] : 'd.';
		labels['m'] = labels && labels['m'] ? labels['m'] : 'm.';
		labels['y'] = labels && labels['y'] ? labels['y'] : 'y.';
		if (!previous) return null;
		var current = +new Date(),
		    msPerMinute = 60 * 1000,
		    msPerHour = msPerMinute * 60,
		    msPerDay = msPerHour * 24,
		    msPerMonth = msPerDay * 30,
		    msPerYear = msPerDay * 365,
		    elapsed = current - previous,
		    result = '';
		console.log(new Date());
		if (elapsed < msPerMinute) {
			result = Math.round(elapsed / 1000) + ' ' + labels['sec'] + ' ' + postfix;
		} else if (elapsed < msPerHour) {
			result = Math.round(elapsed / msPerMinute) + ' ' + labels['min'] + ' ' + Math.round(elapsed % msPerMinute / 1000) + ' ' + labels['sec'] + ' ' + postfix;
		} else if (elapsed < msPerDay) {
			result = Math.round(elapsed / msPerHour) + ' ' + labels['h'] + ' ' + Math.round(elapsed % msPerHour / msPerMinute) + ' ' + labels['min'] + ' ' + postfix;
		} else if (elapsed < msPerMonth) {
			result = Math.round(elapsed / msPerDay) + ' ' + labels['d'] + ' ' + Math.round(elapsed % msPerDay / msPerHour) + ' ' + labels['h'] + ' ' + postfix;
		} else if (elapsed < msPerYear) {
			result = Math.round(elapsed / msPerMonth) + ' ' + labels['m'] + ' ' + Math.round(elapsed % msPerMonth / msPerDay) + ' ' + labels['d'] + ' ' + postfix;
		} else {
			result = Math.round(elapsed / msPerYear) + ' ' + labels['y'] + ' ' + Math.round(elapsed % msPerYear / msPerMonth) + ' ' + labels['m'] + ' ' + postfix;
		}
		return result;
	};
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Hash = exports.Hash = function Hash() {
	this.sha256 = function (s) {
		var chrsz = 8;
		var hexcase = 0;
		function safe_add(x, y) {
			var lsw = (x & 0xFFFF) + (y & 0xFFFF);
			var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
			return msw << 16 | lsw & 0xFFFF;
		}

		function S(X, n) {
			return X >>> n | X << 32 - n;
		}
		function R(X, n) {
			return X >>> n;
		}
		function Ch(x, y, z) {
			return x & y ^ ~x & z;
		}
		function Maj(x, y, z) {
			return x & y ^ x & z ^ y & z;
		}
		function Sigma0256(x) {
			return S(x, 2) ^ S(x, 13) ^ S(x, 22);
		}
		function Sigma1256(x) {
			return S(x, 6) ^ S(x, 11) ^ S(x, 25);
		}
		function Gamma0256(x) {
			return S(x, 7) ^ S(x, 18) ^ R(x, 3);
		}
		function Gamma1256(x) {
			return S(x, 17) ^ S(x, 19) ^ R(x, 10);
		}

		function core_sha256(m, l) {
			var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
			var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
			var W = new Array(64);
			var a, b, c, d, e, f, g, h, i, j;
			var T1, T2;

			m[l >> 5] |= 0x80 << 24 - l % 32;
			m[(l + 64 >> 9 << 4) + 15] = l;

			for (var i = 0; i < m.length; i += 16) {
				a = HASH[0];
				b = HASH[1];
				c = HASH[2];
				d = HASH[3];
				e = HASH[4];
				f = HASH[5];
				g = HASH[6];
				h = HASH[7];

				for (var j = 0; j < 64; j++) {
					if (j < 16) W[j] = m[j + i];else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);

					T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
					T2 = safe_add(Sigma0256(a), Maj(a, b, c));

					h = g;
					g = f;
					f = e;
					e = safe_add(d, T1);
					d = c;
					c = b;
					b = a;
					a = safe_add(T1, T2);
				}

				HASH[0] = safe_add(a, HASH[0]);
				HASH[1] = safe_add(b, HASH[1]);
				HASH[2] = safe_add(c, HASH[2]);
				HASH[3] = safe_add(d, HASH[3]);
				HASH[4] = safe_add(e, HASH[4]);
				HASH[5] = safe_add(f, HASH[5]);
				HASH[6] = safe_add(g, HASH[6]);
				HASH[7] = safe_add(h, HASH[7]);
			}
			return HASH;
		}

		function str2binb(str) {
			var bin = Array();
			var mask = (1 << chrsz) - 1;
			for (var i = 0; i < str.length * chrsz; i += chrsz) {
				bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << 24 - i % 32;
			}
			return bin;
		}

		function Utf8Encode(string) {
			string = string.replace(/\r\n/g, "\n");
			var utftext = "";

			for (var n = 0; n < string.length; n++) {

				var c = string.charCodeAt(n);

				if (c < 128) {
					utftext += String.fromCharCode(c);
				} else if (c > 127 && c < 2048) {
					utftext += String.fromCharCode(c >> 6 | 192);
					utftext += String.fromCharCode(c & 63 | 128);
				} else {
					utftext += String.fromCharCode(c >> 12 | 224);
					utftext += String.fromCharCode(c >> 6 & 63 | 128);
					utftext += String.fromCharCode(c & 63 | 128);
				}
			}

			return utftext;
		}

		function binb2hex(binarray) {
			var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
			var str = "";
			for (var i = 0; i < binarray.length * 4; i++) {
				str += hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 & 0xF);
			}
			return str;
		}

		s = Utf8Encode(s);
		return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
	};
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var InView = exports.InView = function InView(selector, options) {
    this.items = document.querySelectorAll(selector);
    this.in = options.in ? options.in : false;
    this.out = options.out ? options.out : false;
    this.scrollTop = 0;
    this.offset = options.offset ? options.offset : 0;

    this.setScrollTop = function (top) {
        this.scrollTop = top;
    };

    this.checkItem = function (e) {
        var elem = e.getBoundingClientRect(),
            offset = this.offset,
            windowHeight = window.innerHeight;
        if (elem.top + offset + windowHeight <= windowHeight * 2 && elem.top - offset + elem.height >= 0) {
            return true;
        }
        return false;
    };

    this.checkItems = function () {
        var _this = this;

        if (!this.items) return false;
        this.items.forEach(function (e, i) {
            var boolCheck = _this.checkItem(e);
            if (boolCheck && _this.in) _this.in(e);
            if (!boolCheck && _this.out) _this.out(e);
        });
    };

    this.watch = function () {
        var _this2 = this;

        this.setScrollTop(window.pageYOffset);
        this.checkItems();
        window.addEventListener('scroll', function () {
            _this2.setScrollTop(window.pageYOffset);
            _this2.checkItems();
        });
        window.addEventListener('resize', function () {
            _this2.setScrollTop(window.pageYOffset);
            _this2.checkItems();
        });
    };

    this.watch();
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Map = exports.Map = function Map() {

    this.getDistance = function (coordOne, coordTwo) {
        if (!coordOne || !coordTwo) return 0;
        var EarthRadius = 6371,
            dLat = (coordTwo[0] - coordOne[0]) * Math.PI / 180,
            dLon = (coordTwo[1] - coordOne[1]) * Math.PI / 180,
            a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(coordOne[0] * Math.PI / 180) * Math.cos(coordTwo[0] * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2),
            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return Math.round(EarthRadius * c * 1000);
    };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Money = exports.Money = function Money() {

    this.format = function (string) {
        var deliver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

        if (!string) return 0;
        string = parseFloat(string);
        string = string.toString().replace(/\./.test(string) ? /(\d)(?=(?:\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g, '$1' + deliver);
        return string;
    };
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function mapInit() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
        map = document.getElementById('map');
    if (map) {
        var mapData = {};
        mapData.x = map.getAttribute('data-x');
        mapData.y = map.getAttribute('data-y');
        mapData.title = map.getAttribute('data-title');
        mapData.content = map.getAttribute('data-content');
        mapData.pinUrl = map.getAttribute('data-pin');
        mapData.pinWidth = parseInt(map.getAttribute('data-pin-width'));
        mapData.pinHeight = parseInt(map.getAttribute('data-pin-height'));
        mapData.zoom = parseInt(map.getAttribute('data-zoom'));
        mapData.balloonState = parseInt(map.getAttribute('data-balloon-state'));
        mapData.ballonImage = map.getAttribute('data-image');
        ymaps.ready(init);
        var myMap, myPlacemark;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [mapData.x, mapData.y],
                zoom: mapData.zoom,
                controls: ['zoomControl'],
                behaviors: ['Drag']
            });

            if (mapData.ballonImage) {
                mapData.content = '<img src="' + mapData.ballonImage + '" /><br />' + mapData.content;
            }

            myPlacemark = new ymaps.Placemark([mapData.x, mapData.y], {
                balloonContentHeader: mapData.title,
                balloonContent: mapData.content
            }, {
                iconLayout: 'default#image',
                iconImageHref: mapData.pinUrl,
                iconImageSize: [mapData.pinWidth, mapData.pinHeight],
                iconImageOffset: [-(mapData.pinWidth / 2), -mapData.pinHeight],
                hideIconOnBalloonOpen: false,
                balloonOffset: [90, 10]
            });
            if (isMobile) {
                myMap.behaviors.enable('multiTouch');
            } else {
                myMap.behaviors.enable('drag');
            }
            myMap.geoObjects.add(myPlacemark);
            if (mapData.balloonState) myPlacemark.balloon.open();
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (mapInit);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = departmentMap;
function departmentMap() {

    var map = document.querySelector('.map');
    if (map) {
        var svg = map.querySelector('svg'),
            regions = svg.querySelectorAll('.region'),
            tooltip = map.querySelector('.map-tooltip');

        function generateTemplate(data) {
            let result = '';
            if (data.title || data.phone || data.city || data.address || data.mail) {
                result += '<div class="map-tooltip-inner">';
                result += '<div class="map-tooltip-info">';
                if (data.title) {
                    var className = 'map-tooltip-title';
                    if (!data.active) className += ' map-tooltip-title__unactive';
                    result += '<div class="' + className + '">' + data.title + '</div>';
                }
                if (data.phone) result += '<div>' + data.phone + '</div>';
                if (data.city) result += '<div>' + data.city + '</div>';
                if (data.address) result += '<div>' + data.address + '</div>';
                if (data.mail) result += '<div>' + data.mail + '</div>';
                result += '</div>';
                result += '</div>';
            }
            return result;
        }

        function calculateX(value) {
            var tooltipInfo = tooltip.getBoundingClientRect(),
                mapInfo = map.getBoundingClientRect();
            if (value - mapInfo.left + tooltipInfo.width > mapInfo.width - 25) {
                tooltip.classList.add('map-tooltip-left');
                return value - mapInfo.left - tooltipInfo.width - 20;
            } else {
                tooltip.classList.remove('map-tooltip-left');
                return value - mapInfo.left + 20;
            }
        }

        function calculateY(value) {
            var tooltipInfo = tooltip.getBoundingClientRect(),
                mapInfo = map.getBoundingClientRect(),
                originalValue = value;
            value = value - tooltipInfo.height / 2;
            if (value - mapInfo.top < 5) {
                return 5;
            }
            if (value + tooltipInfo.height > mapInfo.top + mapInfo.height - 5) {
                return mapInfo.height - tooltipInfo.height - 5;
            }
            return value - mapInfo.top;
        }

        function tooltipShow(data) {
            let content = generateTemplate(data);
            if (content.length) {
                tooltip.innerHTML = generateTemplate(data);
                tooltip.style.left = calculateX(data.x) + 'px';
                tooltip.style.top = calculateY(data.y) + 'px';
                tooltip.style.opacity = 1;
                tooltip.style.visibility = 'visible';
            }
        }

        function tooltipHide(data) {
            tooltip.innerHTML = '';
            tooltip.style.left = 0;
            tooltip.style.top = 0;
            tooltip.style.opacity = 0;
            tooltip.style.visibility = 'hidden';
        }

        function mouseMove(item) {
            item.addEventListener('mousemove', function (e) {
                var data = {
                    x: e.clientX,
                    y: e.clientY,
                    title: this.getAttribute('data-title'),
                    phone: this.getAttribute('data-phone'),
                    city: this.getAttribute('data-city'),
                    address: this.getAttribute('data-address'),
                    mail: this.getAttribute('data-mail'),
                    active: +this.getAttribute('data-active')
                };
                tooltipShow(data);
            });
        }

        function mouseLeave(item) {
            item.addEventListener('mouseleave', function (e) {
                tooltipHide();
            });
        }

        function onClick(item) {
            item.addEventListener('click', function (e) {
                var data = {
                    code: this.getAttribute('data-code'),
                    active: +this.getAttribute('data-active')
                };
                if (data.code && data.active) {
                    window.location.href = '/departments?region=' + data.code;
                }
            });
        }

        for (var i = 0; i < regions.length; i++) {
            (function (i) {
                var region = regions[i];
                mouseMove(region);
                mouseLeave(region);
                onClick(region);
            })(i);
        }
    }
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map