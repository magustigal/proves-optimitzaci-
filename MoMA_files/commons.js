!(function (e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var i = (r[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function (r, o, a) {
        for (var s, u, c, l = 0, f = []; l < r.length; l++) (u = r[l]), i[u] && f.push(i[u][0]), (i[u] = 0);
        for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
        for (n && n(r, o, a); f.length; ) f.shift()();
        if (a) for (l = 0; l < a.length; l++) c = t((t.s = a[l]));
        return c;
    };
    var r = {},
        i = { 6: 0 };
    (t.e = function (e) {
        function n() {
            (s.onerror = s.onload = null), clearTimeout(u);
            var t = i[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), (i[e] = void 0));
        }
        var r = i[e];
        if (0 === r)
            return new Promise(function (e) {
                e();
            });
        if (r) return r[2];
        var o = new Promise(function (t, n) {
            r = i[e] = [t, n];
        });
        r[2] = o;
        var a = document.getElementsByTagName("head")[0],
            s = document.createElement("script");
        (s.type = "text/javascript"),
            (s.charset = "utf-8"),
            (s.async = !0),
            (s.timeout = 12e4),
            t.nc && s.setAttribute("nonce", t.nc),
            (s.src = t.p + "" + e + "." + { 0: "f5a3de9a381c9a5366c5", 1: "aff61b6e604c3f427a9e", 2: "1f281500c9ea042050ac", 3: "e38d68a4f1c77ff89364", 4: "4b655e0783cd5e695743", 5: "12462e3dcf78f63f2e35" }[e] + ".js");
        var u = setTimeout(n, 12e4);
        return (s.onerror = s.onload = n), a.appendChild(s), o;
    }),
        (t.m = e),
        (t.c = r),
        (t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
        }),
        (t.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(n, "a", n), n;
        }),
        (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        (t.oe = function (e) {
            throw (console.error(e), e);
        });
})([
    function (e, t, n) {
        var r, i;
        /*!
         * jQuery JavaScript Library v3.2.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2017-03-20T18:59Z
         */
        !(function (t, n) {
            "use strict";
            "object" == typeof e && "object" == typeof e.exports
                ? (e.exports = t.document
                      ? n(t, !0)
                      : function (e) {
                            if (!e.document) throw new Error("jQuery requires a window with a document");
                            return n(e);
                        })
                : n(t);
        })("undefined" != typeof window ? window : this, function (n, o) {
            "use strict";
            function a(e, t) {
                t = t || ae;
                var n = t.createElement("script");
                (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
            }
            function s(e) {
                var t = !!e && "length" in e && e.length,
                    n = ye.type(e);
                return "function" !== n && !ye.isWindow(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
            }
            function u(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            function c(e, t, n) {
                return ye.isFunction(t)
                    ? ye.grep(e, function (e, r) {
                          return !!t.call(e, r, e) !== n;
                      })
                    : t.nodeType
                    ? ye.grep(e, function (e) {
                          return (e === t) !== n;
                      })
                    : "string" != typeof t
                    ? ye.grep(e, function (e) {
                          return fe.call(t, e) > -1 !== n;
                      })
                    : Ae.test(t)
                    ? ye.filter(t, e, n)
                    : ((t = ye.filter(t, e)),
                      ye.grep(e, function (e) {
                          return fe.call(t, e) > -1 !== n && 1 === e.nodeType;
                      }));
            }
            function l(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
            }
            function f(e) {
                var t = {};
                return (
                    ye.each(e.match(Oe) || [], function (e, n) {
                        t[n] = !0;
                    }),
                    t
                );
            }
            function d(e) {
                return e;
            }
            function h(e) {
                throw e;
            }
            function p(e, t, n, r) {
                var i;
                try {
                    e && ye.isFunction((i = e.promise)) ? i.call(e).done(t).fail(n) : e && ye.isFunction((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
                } catch (e) {
                    n.apply(void 0, [e]);
                }
            }
            function g() {
                ae.removeEventListener("DOMContentLoaded", g), n.removeEventListener("load", g), ye.ready();
            }
            function v() {
                this.expando = ye.expando + v.uid++;
            }
            function m(e) {
                return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Re.test(e) ? JSON.parse(e) : e));
            }
            function y(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (((r = "data-" + t.replace(Be, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                        try {
                            n = m(n);
                        } catch (e) {}
                        Fe.set(e, t, n);
                    } else n = void 0;
                return n;
            }
            function b(e, t, n, r) {
                var i,
                    o = 1,
                    a = 20,
                    s = r
                        ? function () {
                              return r.cur();
                          }
                        : function () {
                              return ye.css(e, t, "");
                          },
                    u = s(),
                    c = (n && n[3]) || (ye.cssNumber[t] ? "" : "px"),
                    l = (ye.cssNumber[t] || ("px" !== c && +u)) && We.exec(ye.css(e, t));
                if (l && l[3] !== c) {
                    (c = c || l[3]), (n = n || []), (l = +u || 1);
                    do {
                        (o = o || ".5"), (l /= o), ye.style(e, t, l + c);
                    } while (o !== (o = s() / u) && 1 !== o && --a);
                }
                return n && ((l = +l || +u || 0), (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = c), (r.start = l), (r.end = i))), i;
            }
            function x(e) {
                var t,
                    n = e.ownerDocument,
                    r = e.nodeName,
                    i = Ye[r];
                return i || ((t = n.body.appendChild(n.createElement(r))), (i = ye.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (Ye[r] = i), i);
            }
            function w(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
                    (r = e[o]),
                        r.style &&
                            ((n = r.style.display),
                            t ? ("none" === n && ((i[o] = Ie.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && Ue(r) && (i[o] = x(r))) : "none" !== n && ((i[o] = "none"), Ie.set(r, "display", n)));
                for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                return e;
            }
            function T(e, t) {
                var n;
                return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && u(e, t)) ? ye.merge([e], n) : n;
            }
            function C(e, t) {
                for (var n = 0, r = e.length; n < r; n++) Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"));
            }
            function S(e, t, n, r, i) {
                for (var o, a, s, u, c, l, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
                    if ((o = e[h]) || 0 === o)
                        if ("object" === ye.type(o)) ye.merge(d, o.nodeType ? [o] : o);
                        else if (Qe.test(o)) {
                            for (a = a || f.appendChild(t.createElement("div")), s = (Je.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[s] || Ge._default, a.innerHTML = u[1] + ye.htmlPrefilter(o) + u[2], l = u[0]; l--; ) a = a.lastChild;
                            ye.merge(d, a.childNodes), (a = f.firstChild), (a.textContent = "");
                        } else d.push(t.createTextNode(o));
                for (f.textContent = "", h = 0; (o = d[h++]); )
                    if (r && ye.inArray(o, r) > -1) i && i.push(o);
                    else if (((c = ye.contains(o.ownerDocument, o)), (a = T(f.appendChild(o), "script")), c && C(a), n)) for (l = 0; (o = a[l++]); ) Ke.test(o.type || "") && n.push(o);
                return f;
            }
            function k() {
                return !0;
            }
            function _() {
                return !1;
            }
            function E() {
                try {
                    return ae.activeElement;
                } catch (e) {}
            }
            function A(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && ((r = r || n), (n = void 0));
                    for (s in t) A(e, s, n, r, t[s], o);
                    return e;
                }
                if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = _;
                else if (!i) return e;
                return (
                    1 === o &&
                        ((a = i),
                        (i = function (e) {
                            return ye().off(e), a.apply(this, arguments);
                        }),
                        (i.guid = a.guid || (a.guid = ye.guid++))),
                    e.each(function () {
                        ye.event.add(this, t, i, r, n);
                    })
                );
            }
            function j(e, t) {
                return u(e, "table") && u(11 !== t.nodeType ? t : t.firstChild, "tr") ? ye(">tbody", e)[0] || e : e;
            }
            function N(e) {
                return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function M(e) {
                var t = at.exec(e.type);
                return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
            }
            function H(e, t) {
                var n, r, i, o, a, s, u, c;
                if (1 === t.nodeType) {
                    if (Ie.hasData(e) && ((o = Ie.access(e)), (a = Ie.set(t, o)), (c = o.events))) {
                        delete a.handle, (a.events = {});
                        for (i in c) for (n = 0, r = c[i].length; n < r; n++) ye.event.add(t, i, c[i][n]);
                    }
                    Fe.hasData(e) && ((s = Fe.access(e)), (u = ye.extend({}, s)), Fe.set(t, u));
                }
            }
            function O(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Xe.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
            }
            function L(e, t, n, r) {
                t = ce.apply([], t);
                var i,
                    o,
                    s,
                    u,
                    c,
                    l,
                    f = 0,
                    d = e.length,
                    h = d - 1,
                    p = t[0],
                    g = ye.isFunction(p);
                if (g || (d > 1 && "string" == typeof p && !me.checkClone && ot.test(p)))
                    return e.each(function (i) {
                        var o = e.eq(i);
                        g && (t[0] = p.call(this, i, o.html())), L(o, t, n, r);
                    });
                if (d && ((i = S(t, e[0].ownerDocument, !1, e, r)), (o = i.firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
                    for (s = ye.map(T(i, "script"), N), u = s.length; f < d; f++) (c = i), f !== h && ((c = ye.clone(c, !0, !0)), u && ye.merge(s, T(c, "script"))), n.call(e[f], c, f);
                    if (u)
                        for (l = s[s.length - 1].ownerDocument, ye.map(s, M), f = 0; f < u; f++)
                            (c = s[f]), Ke.test(c.type || "") && !Ie.access(c, "globalEval") && ye.contains(l, c) && (c.src ? ye._evalUrl && ye._evalUrl(c.src) : a(c.textContent.replace(st, ""), l));
                }
                return e;
            }
            function D(e, t, n) {
                for (var r, i = t ? ye.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ye.cleanData(T(r)), r.parentNode && (n && ye.contains(r.ownerDocument, r) && C(T(r, "script")), r.parentNode.removeChild(r));
                return e;
            }
            function P(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s = e.style;
                return (
                    (n = n || lt(e)),
                    n &&
                        ((a = n.getPropertyValue(t) || n[t]),
                        "" !== a || ye.contains(e.ownerDocument, e) || (a = ye.style(e, t)),
                        !me.pixelMarginRight() && ct.test(a) && ut.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
                    void 0 !== a ? a + "" : a
                );
            }
            function q(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
                    },
                };
            }
            function I(e) {
                if (e in vt) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--; ) if ((e = gt[n] + t) in vt) return e;
            }
            function F(e) {
                var t = ye.cssProps[e];
                return t || (t = ye.cssProps[e] = I(e) || e), t;
            }
            function R(e, t, n) {
                var r = We.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
            }
            function B(e, t, n, r, i) {
                var o,
                    a = 0;
                for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
                    "margin" === n && (a += ye.css(e, n + ze[o], !0, i)),
                        r
                            ? ("content" === n && (a -= ye.css(e, "padding" + ze[o], !0, i)), "margin" !== n && (a -= ye.css(e, "border" + ze[o] + "Width", !0, i)))
                            : ((a += ye.css(e, "padding" + ze[o], !0, i)), "padding" !== n && (a += ye.css(e, "border" + ze[o] + "Width", !0, i)));
                return a;
            }
            function $(e, t, n) {
                var r,
                    i = lt(e),
                    o = P(e, t, i),
                    a = "border-box" === ye.css(e, "boxSizing", !1, i);
                return ct.test(o)
                    ? o
                    : ((r = a && (me.boxSizingReliable() || o === e.style[t])), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + B(e, t, n || (a ? "border" : "content"), r, i) + "px");
            }
            function W(e, t, n, r, i) {
                return new W.prototype.init(e, t, n, r, i);
            }
            function z() {
                yt && (!1 === ae.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(z) : n.setTimeout(z, ye.fx.interval), ye.fx.tick());
            }
            function U() {
                return (
                    n.setTimeout(function () {
                        mt = void 0;
                    }),
                    (mt = ye.now())
                );
            }
            function V(e, t) {
                var n,
                    r = 0,
                    i = { height: e };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) (n = ze[r]), (i["margin" + n] = i["padding" + n] = e);
                return t && (i.opacity = i.width = e), i;
            }
            function Y(e, t, n) {
                for (var r, i = (K.tweeners[t] || []).concat(K.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
            }
            function X(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    c,
                    l,
                    f = "width" in t || "height" in t,
                    d = this,
                    h = {},
                    p = e.style,
                    g = e.nodeType && Ue(e),
                    v = Ie.get(e, "fxshow");
                n.queue ||
                    ((a = ye._queueHooks(e, "fx")),
                    null == a.unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            a.unqueued--, ye.queue(e, "fx").length || a.empty.fire();
                        });
                    }));
                for (r in t)
                    if (((i = t[r]), bt.test(i))) {
                        if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        h[r] = (v && v[r]) || ye.style(e, r);
                    }
                if ((u = !ye.isEmptyObject(t)) || !ye.isEmptyObject(h)) {
                    f &&
                        1 === e.nodeType &&
                        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                        (c = v && v.display),
                        null == c && (c = Ie.get(e, "display")),
                        (l = ye.css(e, "display")),
                        "none" === l && (c ? (l = c) : (w([e], !0), (c = e.style.display || c), (l = ye.css(e, "display")), w([e]))),
                        ("inline" === l || ("inline-block" === l && null != c)) &&
                            "none" === ye.css(e, "float") &&
                            (u ||
                                (d.done(function () {
                                    p.display = c;
                                }),
                                null == c && ((l = p.display), (c = "none" === l ? "" : l))),
                            (p.display = "inline-block"))),
                        n.overflow &&
                            ((p.overflow = "hidden"),
                            d.always(function () {
                                (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                            })),
                        (u = !1);
                    for (r in h)
                        u ||
                            (v ? "hidden" in v && (g = v.hidden) : (v = Ie.access(e, "fxshow", { display: c })),
                            o && (v.hidden = !g),
                            g && w([e], !0),
                            d.done(function () {
                                g || w([e]), Ie.remove(e, "fxshow");
                                for (r in h) ye.style(e, r, h[r]);
                            })),
                            (u = Y(g ? v[r] : 0, r, d)),
                            r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
                }
            }
            function J(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (((r = ye.camelCase(n)), (i = t[r]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = ye.cssHooks[r]) && "expand" in a)) {
                        (o = a.expand(o)), delete e[r];
                        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
                    } else t[r] = i;
            }
            function K(e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = K.prefilters.length,
                    s = ye.Deferred().always(function () {
                        delete u.elem;
                    }),
                    u = function () {
                        if (i) return !1;
                        for (var t = mt || U(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; a < u; a++) c.tweens[a].run(o);
                        return s.notifyWith(e, [c, o, n]), o < 1 && u ? n : (u || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1);
                    },
                    c = s.promise({
                        elem: e,
                        props: ye.extend({}, t),
                        opts: ye.extend(!0, { specialEasing: {}, easing: ye.easing._default }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: mt || U(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var r = ye.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r), r;
                        },
                        stop: function (t) {
                            var n = 0,
                                r = t ? c.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this;
                        },
                    }),
                    l = c.props;
                for (J(l, c.opts.specialEasing); o < a; o++) if ((r = K.prefilters[o].call(c, e, l, c.opts))) return ye.isFunction(r.stop) && (ye._queueHooks(c.elem, c.opts.queue).stop = ye.proxy(r.stop, r)), r;
                return (
                    ye.map(l, Y, c),
                    ye.isFunction(c.opts.start) && c.opts.start.call(e, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    ye.fx.timer(ye.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
                    c
                );
            }
            function G(e) {
                return (e.match(Oe) || []).join(" ");
            }
            function Q(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function Z(e, t, n, r) {
                var i;
                if (Array.isArray(t))
                    ye.each(t, function (t, i) {
                        n || Nt.test(e) ? r(e, i) : Z(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
                    });
                else if (n || "object" !== ye.type(t)) r(e, t);
                else for (i in t) Z(e + "[" + i + "]", t[i], n, r);
            }
            function ee(e) {
                return function (t, n) {
                    "string" != typeof t && ((n = t), (t = "*"));
                    var r,
                        i = 0,
                        o = t.toLowerCase().match(Oe) || [];
                    if (ye.isFunction(n)) for (; (r = o[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                };
            }
            function te(e, t, n, r) {
                function i(s) {
                    var u;
                    return (
                        (o[s] = !0),
                        ye.each(e[s] || [], function (e, s) {
                            var c = s(t, n, r);
                            return "string" != typeof c || a || o[c] ? (a ? !(u = c) : void 0) : (t.dataTypes.unshift(c), i(c), !1);
                        }),
                        u
                    );
                }
                var o = {},
                    a = e === $t;
                return i(t.dataTypes[0]) || (!o["*"] && i("*"));
            }
            function ne(e, t) {
                var n,
                    r,
                    i = ye.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && ye.extend(!0, e, r), e;
            }
            function re(e, t, n) {
                for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (i in s)
                        if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break;
                        }
                if (u[0] in n) o = u[0];
                else {
                    for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break;
                        }
                        a || (a = i);
                    }
                    o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
            }
            function ie(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    c = {},
                    l = e.dataTypes.slice();
                if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                for (o = l.shift(); o; )
                    if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = l.shift())))
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                            if (!(a = c[u + " " + o] || c["* " + o]))
                                for (i in c)
                                    if (((s = i.split(" ")), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]]))) {
                                        !0 === a ? (a = c[i]) : !0 !== c[i] && ((o = s[0]), l.unshift(s[1]));
                                        break;
                                    }
                            if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else
                                    try {
                                        t = a(t);
                                    } catch (e) {
                                        return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                                    }
                        }
                return { state: "success", data: t };
            }
            var oe = [],
                ae = n.document,
                se = Object.getPrototypeOf,
                ue = oe.slice,
                ce = oe.concat,
                le = oe.push,
                fe = oe.indexOf,
                de = {},
                he = de.toString,
                pe = de.hasOwnProperty,
                ge = pe.toString,
                ve = ge.call(Object),
                me = {},
                ye = function (e, t) {
                    return new ye.fn.init(e, t);
                },
                be = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                xe = /^-ms-/,
                we = /-([a-z])/g,
                Te = function (e, t) {
                    return t.toUpperCase();
                };
            (ye.fn = ye.prototype = {
                jquery: "3.2.1",
                constructor: ye,
                length: 0,
                toArray: function () {
                    return ue.call(this);
                },
                get: function (e) {
                    return null == e ? ue.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function (e) {
                    var t = ye.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                },
                each: function (e) {
                    return ye.each(this, e);
                },
                map: function (e) {
                    return this.pushStack(
                        ye.map(this, function (t, n) {
                            return e.call(t, n, t);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(ue.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: le,
                sort: oe.sort,
                splice: oe.splice,
            }),
                (ye.extend = ye.fn.extend = function () {
                    var e,
                        t,
                        n,
                        r,
                        i,
                        o,
                        a = arguments[0] || {},
                        s = 1,
                        u = arguments.length,
                        c = !1;
                    for ("boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++), "object" == typeof a || ye.isFunction(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                        if (null != (e = arguments[s]))
                            for (t in e)
                                (n = a[t]),
                                    (r = e[t]),
                                    a !== r &&
                                        (c && r && (ye.isPlainObject(r) || (i = Array.isArray(r)))
                                            ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && ye.isPlainObject(n) ? n : {}), (a[t] = ye.extend(c, o, r)))
                                            : void 0 !== r && (a[t] = r));
                    return a;
                }),
                ye.extend({
                    expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e);
                    },
                    noop: function () {},
                    isFunction: function (e) {
                        return "function" === ye.type(e);
                    },
                    isWindow: function (e) {
                        return null != e && e === e.window;
                    },
                    isNumeric: function (e) {
                        var t = ye.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                    },
                    isPlainObject: function (e) {
                        var t, n;
                        return !(!e || "[object Object]" !== he.call(e) || ((t = se(e)) && ("function" != typeof (n = pe.call(t, "constructor") && t.constructor) || ge.call(n) !== ve)));
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    type: function (e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[he.call(e)] || "object" : typeof e;
                    },
                    globalEval: function (e) {
                        a(e);
                    },
                    camelCase: function (e) {
                        return e.replace(xe, "ms-").replace(we, Te);
                    },
                    each: function (e, t) {
                        var n,
                            r = 0;
                        if (s(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                        return e;
                    },
                    trim: function (e) {
                        return null == e ? "" : (e + "").replace(be, "");
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (s(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)), n;
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : fe.call(t, e, n);
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                        return (e.length = i), e;
                    },
                    grep: function (e, t, n) {
                        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                        return r;
                    },
                    map: function (e, t, n) {
                        var r,
                            i,
                            o = 0,
                            a = [];
                        if (s(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                        return ce.apply([], a);
                    },
                    guid: 1,
                    proxy: function (e, t) {
                        var n, r, i;
                        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ye.isFunction(e)))
                            return (
                                (r = ue.call(arguments, 2)),
                                (i = function () {
                                    return e.apply(t || this, r.concat(ue.call(arguments)));
                                }),
                                (i.guid = e.guid = e.guid || ye.guid++),
                                i
                            );
                    },
                    now: Date.now,
                    support: me,
                }),
                "function" == typeof Symbol && (ye.fn[Symbol.iterator] = oe[Symbol.iterator]),
                ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    de["[object " + t + "]"] = t.toLowerCase();
                });
            var Ce =
                /*!
                 * Sizzle CSS Selector Engine v2.3.3
                 * https://sizzlejs.com/
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 *
                 * Date: 2016-08-08
                 */
                (function (e) {
                    function t(e, t, n, r) {
                        var i,
                            o,
                            a,
                            s,
                            u,
                            l,
                            d,
                            h = t && t.ownerDocument,
                            p = t ? t.nodeType : 9;
                        if (((n = n || []), "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))) return n;
                        if (!r && ((t ? t.ownerDocument || t : F) !== M && N(t), (t = t || M), O)) {
                            if (11 !== p && (u = ge.exec(e)))
                                if ((i = u[1])) {
                                    if (9 === p) {
                                        if (!(a = t.getElementById(i))) return n;
                                        if (a.id === i) return n.push(a), n;
                                    } else if (h && (a = h.getElementById(i)) && q(t, a) && a.id === i) return n.push(a), n;
                                } else {
                                    if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                                    if ((i = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n;
                                }
                            if (x.qsa && !z[e + " "] && (!L || !L.test(e))) {
                                if (1 !== p) (h = t), (d = e);
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((s = t.getAttribute("id")) ? (s = s.replace(be, xe)) : t.setAttribute("id", (s = I)), l = S(e), o = l.length; o--; ) l[o] = "#" + s + " " + f(l[o]);
                                    (d = l.join(",")), (h = (ve.test(e) && c(t.parentNode)) || t);
                                }
                                if (d)
                                    try {
                                        return K.apply(n, h.querySelectorAll(d)), n;
                                    } catch (e) {
                                    } finally {
                                        s === I && t.removeAttribute("id");
                                    }
                            }
                        }
                        return _(e.replace(oe, "$1"), t, n, r);
                    }
                    function n() {
                        function e(n, r) {
                            return t.push(n + " ") > w.cacheLength && delete e[t.shift()], (e[n + " "] = r);
                        }
                        var t = [];
                        return e;
                    }
                    function r(e) {
                        return (e[I] = !0), e;
                    }
                    function i(e) {
                        var t = M.createElement("fieldset");
                        try {
                            return !!e(t);
                        } catch (e) {
                            return !1;
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), (t = null);
                        }
                    }
                    function o(e, t) {
                        for (var n = e.split("|"), r = n.length; r--; ) w.attrHandle[n[r]] = t;
                    }
                    function a(e, t) {
                        var n = t && e,
                            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (r) return r;
                        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                        return e ? 1 : -1;
                    }
                    function s(e) {
                        return function (t) {
                            return "form" in t
                                ? t.parentNode && !1 === t.disabled
                                    ? "label" in t
                                        ? "label" in t.parentNode
                                            ? t.parentNode.disabled === e
                                            : t.disabled === e
                                        : t.isDisabled === e || (t.isDisabled !== !e && Te(t) === e)
                                    : t.disabled === e
                                : "label" in t && t.disabled === e;
                        };
                    }
                    function u(e) {
                        return r(function (t) {
                            return (
                                (t = +t),
                                r(function (n, r) {
                                    for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                                })
                            );
                        });
                    }
                    function c(e) {
                        return e && void 0 !== e.getElementsByTagName && e;
                    }
                    function l() {}
                    function f(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r;
                    }
                    function d(e, t, n) {
                        var r = t.dir,
                            i = t.next,
                            o = i || r,
                            a = n && "parentNode" === o,
                            s = B++;
                        return t.first
                            ? function (t, n, i) {
                                  for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
                                  return !1;
                              }
                            : function (t, n, u) {
                                  var c,
                                      l,
                                      f,
                                      d = [R, s];
                                  if (u) {
                                      for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                                  } else
                                      for (; (t = t[r]); )
                                          if (1 === t.nodeType || a)
                                              if (((f = t[I] || (t[I] = {})), (l = f[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                              else {
                                                  if ((c = l[o]) && c[0] === R && c[1] === s) return (d[2] = c[2]);
                                                  if (((l[o] = d), (d[2] = e(t, n, u)))) return !0;
                                              }
                                  return !1;
                              };
                    }
                    function h(e) {
                        return e.length > 1
                            ? function (t, n, r) {
                                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                                  return !0;
                              }
                            : e[0];
                    }
                    function p(e, n, r) {
                        for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                        return r;
                    }
                    function g(e, t, n, r, i) {
                        for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
                        return a;
                    }
                    function v(e, t, n, i, o, a) {
                        return (
                            i && !i[I] && (i = v(i)),
                            o && !o[I] && (o = v(o, a)),
                            r(function (r, a, s, u) {
                                var c,
                                    l,
                                    f,
                                    d = [],
                                    h = [],
                                    v = a.length,
                                    m = r || p(t || "*", s.nodeType ? [s] : s, []),
                                    y = !e || (!r && t) ? m : g(m, d, e, s, u),
                                    b = n ? (o || (r ? e : v || i) ? [] : a) : y;
                                if ((n && n(y, b, s, u), i)) for (c = g(b, h), i(c, [], s, u), l = c.length; l--; ) (f = c[l]) && (b[h[l]] = !(y[h[l]] = f));
                                if (r) {
                                    if (o || e) {
                                        if (o) {
                                            for (c = [], l = b.length; l--; ) (f = b[l]) && c.push((y[l] = f));
                                            o(null, (b = []), c, u);
                                        }
                                        for (l = b.length; l--; ) (f = b[l]) && (c = o ? Q(r, f) : d[l]) > -1 && (r[c] = !(a[c] = f));
                                    }
                                } else (b = g(b === a ? b.splice(v, b.length) : b)), o ? o(null, a, b, u) : K.apply(a, b);
                            })
                        );
                    }
                    function m(e) {
                        for (
                            var t,
                                n,
                                r,
                                i = e.length,
                                o = w.relative[e[0].type],
                                a = o || w.relative[" "],
                                s = o ? 1 : 0,
                                u = d(
                                    function (e) {
                                        return e === t;
                                    },
                                    a,
                                    !0
                                ),
                                c = d(
                                    function (e) {
                                        return Q(t, e) > -1;
                                    },
                                    a,
                                    !0
                                ),
                                l = [
                                    function (e, n, r) {
                                        var i = (!o && (r || n !== E)) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                                        return (t = null), i;
                                    },
                                ];
                            s < i;
                            s++
                        )
                            if ((n = w.relative[e[s].type])) l = [d(h(l), n)];
                            else {
                                if (((n = w.filter[e[s].type].apply(null, e[s].matches)), n[I])) {
                                    for (r = ++s; r < i && !w.relative[e[r].type]; r++);
                                    return v(s > 1 && h(l), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(oe, "$1"), n, s < r && m(e.slice(s, r)), r < i && m((e = e.slice(r))), r < i && f(e));
                                }
                                l.push(n);
                            }
                        return h(l);
                    }
                    function y(e, n) {
                        var i = n.length > 0,
                            o = e.length > 0,
                            a = function (r, a, s, u, c) {
                                var l,
                                    f,
                                    d,
                                    h = 0,
                                    p = "0",
                                    v = r && [],
                                    m = [],
                                    y = E,
                                    b = r || (o && w.find.TAG("*", c)),
                                    x = (R += null == y ? 1 : Math.random() || 0.1),
                                    T = b.length;
                                for (c && (E = a === M || a || c); p !== T && null != (l = b[p]); p++) {
                                    if (o && l) {
                                        for (f = 0, a || l.ownerDocument === M || (N(l), (s = !O)); (d = e[f++]); )
                                            if (d(l, a || M, s)) {
                                                u.push(l);
                                                break;
                                            }
                                        c && (R = x);
                                    }
                                    i && ((l = !d && l) && h--, r && v.push(l));
                                }
                                if (((h += p), i && p !== h)) {
                                    for (f = 0; (d = n[f++]); ) d(v, m, a, s);
                                    if (r) {
                                        if (h > 0) for (; p--; ) v[p] || m[p] || (m[p] = X.call(u));
                                        m = g(m);
                                    }
                                    K.apply(u, m), c && !r && m.length > 0 && h + n.length > 1 && t.uniqueSort(u);
                                }
                                return c && ((R = x), (E = y)), v;
                            };
                        return i ? r(a) : a;
                    }
                    var b,
                        x,
                        w,
                        T,
                        C,
                        S,
                        k,
                        _,
                        E,
                        A,
                        j,
                        N,
                        M,
                        H,
                        O,
                        L,
                        D,
                        P,
                        q,
                        I = "sizzle" + 1 * new Date(),
                        F = e.document,
                        R = 0,
                        B = 0,
                        $ = n(),
                        W = n(),
                        z = n(),
                        U = function (e, t) {
                            return e === t && (j = !0), 0;
                        },
                        V = {}.hasOwnProperty,
                        Y = [],
                        X = Y.pop,
                        J = Y.push,
                        K = Y.push,
                        G = Y.slice,
                        Q = function (e, t) {
                            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                            return -1;
                        },
                        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        ee = "[\\x20\\t\\r\\n\\f]",
                        te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                        re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                        ie = new RegExp(ee + "+", "g"),
                        oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                        ae = new RegExp("^" + ee + "*," + ee + "*"),
                        se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                        ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                        ce = new RegExp(re),
                        le = new RegExp("^" + te + "$"),
                        fe = {
                            ID: new RegExp("^#(" + te + ")"),
                            CLASS: new RegExp("^\\.(" + te + ")"),
                            TAG: new RegExp("^(" + te + "|[*])"),
                            ATTR: new RegExp("^" + ne),
                            PSEUDO: new RegExp("^" + re),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + Z + ")$", "i"),
                            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i"),
                        },
                        de = /^(?:input|select|textarea|button)$/i,
                        he = /^h\d$/i,
                        pe = /^[^{]+\{\s*\[native \w/,
                        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ve = /[+~]/,
                        me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                        ye = function (e, t, n) {
                            var r = "0x" + t - 65536;
                            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
                        },
                        be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        xe = function (e, t) {
                            return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                        },
                        we = function () {
                            N();
                        },
                        Te = d(
                            function (e) {
                                return !0 === e.disabled && ("form" in e || "label" in e);
                            },
                            { dir: "parentNode", next: "legend" }
                        );
                    try {
                        K.apply((Y = G.call(F.childNodes)), F.childNodes), Y[F.childNodes.length].nodeType;
                    } catch (e) {
                        K = {
                            apply: Y.length
                                ? function (e, t) {
                                      J.apply(e, G.call(t));
                                  }
                                : function (e, t) {
                                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                                      e.length = n - 1;
                                  },
                        };
                    }
                    (x = t.support = {}),
                        (C = t.isXML = function (e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return !!t && "HTML" !== t.nodeName;
                        }),
                        (N = t.setDocument = function (e) {
                            var t,
                                n,
                                r = e ? e.ownerDocument || e : F;
                            return r !== M && 9 === r.nodeType && r.documentElement
                                ? ((M = r),
                                  (H = M.documentElement),
                                  (O = !C(M)),
                                  F !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)),
                                  (x.attributes = i(function (e) {
                                      return (e.className = "i"), !e.getAttribute("className");
                                  })),
                                  (x.getElementsByTagName = i(function (e) {
                                      return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length;
                                  })),
                                  (x.getElementsByClassName = pe.test(M.getElementsByClassName)),
                                  (x.getById = i(function (e) {
                                      return (H.appendChild(e).id = I), !M.getElementsByName || !M.getElementsByName(I).length;
                                  })),
                                  x.getById
                                      ? ((w.filter.ID = function (e) {
                                            var t = e.replace(me, ye);
                                            return function (e) {
                                                return e.getAttribute("id") === t;
                                            };
                                        }),
                                        (w.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && O) {
                                                var n = t.getElementById(e);
                                                return n ? [n] : [];
                                            }
                                        }))
                                      : ((w.filter.ID = function (e) {
                                            var t = e.replace(me, ye);
                                            return function (e) {
                                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                return n && n.value === t;
                                            };
                                        }),
                                        (w.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && O) {
                                                var n,
                                                    r,
                                                    i,
                                                    o = t.getElementById(e);
                                                if (o) {
                                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                    for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                }
                                                return [];
                                            }
                                        })),
                                  (w.find.TAG = x.getElementsByTagName
                                      ? function (e, t) {
                                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
                                        }
                                      : function (e, t) {
                                            var n,
                                                r = [],
                                                i = 0,
                                                o = t.getElementsByTagName(e);
                                            if ("*" === e) {
                                                for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                                                return r;
                                            }
                                            return o;
                                        }),
                                  (w.find.CLASS =
                                      x.getElementsByClassName &&
                                      function (e, t) {
                                          if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e);
                                      }),
                                  (D = []),
                                  (L = []),
                                  (x.qsa = pe.test(M.querySelectorAll)) &&
                                      (i(function (e) {
                                          (H.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                              e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"),
                                              e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + Z + ")"),
                                              e.querySelectorAll("[id~=" + I + "-]").length || L.push("~="),
                                              e.querySelectorAll(":checked").length || L.push(":checked"),
                                              e.querySelectorAll("a#" + I + "+*").length || L.push(".#.+[+~]");
                                      }),
                                      i(function (e) {
                                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                          var t = M.createElement("input");
                                          t.setAttribute("type", "hidden"),
                                              e.appendChild(t).setAttribute("name", "D"),
                                              e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="),
                                              2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"),
                                              (H.appendChild(e).disabled = !0),
                                              2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"),
                                              e.querySelectorAll("*,:x"),
                                              L.push(",.*:");
                                      })),
                                  (x.matchesSelector = pe.test((P = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector))) &&
                                      i(function (e) {
                                          (x.disconnectedMatch = P.call(e, "*")), P.call(e, "[s!='']:x"), D.push("!=", re);
                                      }),
                                  (L = L.length && new RegExp(L.join("|"))),
                                  (D = D.length && new RegExp(D.join("|"))),
                                  (t = pe.test(H.compareDocumentPosition)),
                                  (q =
                                      t || pe.test(H.contains)
                                          ? function (e, t) {
                                                var n = 9 === e.nodeType ? e.documentElement : e,
                                                    r = t && t.parentNode;
                                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                            }
                                          : function (e, t) {
                                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                                return !1;
                                            }),
                                  (U = t
                                      ? function (e, t) {
                                            if (e === t) return (j = !0), 0;
                                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                            return (
                                                n ||
                                                ((n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1),
                                                1 & n || (!x.sortDetached && t.compareDocumentPosition(e) === n)
                                                    ? e === M || (e.ownerDocument === F && q(F, e))
                                                        ? -1
                                                        : t === M || (t.ownerDocument === F && q(F, t))
                                                        ? 1
                                                        : A
                                                        ? Q(A, e) - Q(A, t)
                                                        : 0
                                                    : 4 & n
                                                    ? -1
                                                    : 1)
                                            );
                                        }
                                      : function (e, t) {
                                            if (e === t) return (j = !0), 0;
                                            var n,
                                                r = 0,
                                                i = e.parentNode,
                                                o = t.parentNode,
                                                s = [e],
                                                u = [t];
                                            if (!i || !o) return e === M ? -1 : t === M ? 1 : i ? -1 : o ? 1 : A ? Q(A, e) - Q(A, t) : 0;
                                            if (i === o) return a(e, t);
                                            for (n = e; (n = n.parentNode); ) s.unshift(n);
                                            for (n = t; (n = n.parentNode); ) u.unshift(n);
                                            for (; s[r] === u[r]; ) r++;
                                            return r ? a(s[r], u[r]) : s[r] === F ? -1 : u[r] === F ? 1 : 0;
                                        }),
                                  M)
                                : M;
                        }),
                        (t.matches = function (e, n) {
                            return t(e, null, null, n);
                        }),
                        (t.matchesSelector = function (e, n) {
                            if (((e.ownerDocument || e) !== M && N(e), (n = n.replace(ue, "='$1']")), x.matchesSelector && O && !z[n + " "] && (!D || !D.test(n)) && (!L || !L.test(n))))
                                try {
                                    var r = P.call(e, n);
                                    if (r || x.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                                } catch (e) {}
                            return t(n, M, null, [e]).length > 0;
                        }),
                        (t.contains = function (e, t) {
                            return (e.ownerDocument || e) !== M && N(e), q(e, t);
                        }),
                        (t.attr = function (e, t) {
                            (e.ownerDocument || e) !== M && N(e);
                            var n = w.attrHandle[t.toLowerCase()],
                                r = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                            return void 0 !== r ? r : x.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                        }),
                        (t.escape = function (e) {
                            return (e + "").replace(be, xe);
                        }),
                        (t.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e);
                        }),
                        (t.uniqueSort = function (e) {
                            var t,
                                n = [],
                                r = 0,
                                i = 0;
                            if (((j = !x.detectDuplicates), (A = !x.sortStable && e.slice(0)), e.sort(U), j)) {
                                for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                                for (; r--; ) e.splice(n[r], 1);
                            }
                            return (A = null), e;
                        }),
                        (T = t.getText = function (e) {
                            var t,
                                n = "",
                                r = 0,
                                i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
                                } else if (3 === i || 4 === i) return e.nodeValue;
                            } else for (; (t = e[r++]); ) n += T(t);
                            return n;
                        }),
                        (w = t.selectors = {
                            cacheLength: 50,
                            createPseudo: r,
                            match: fe,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: {
                                ATTR: function (e) {
                                    return (e[1] = e[1].replace(me, ye)), (e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                },
                                CHILD: function (e) {
                                    return (
                                        (e[1] = e[1].toLowerCase()),
                                        "nth" === e[1].slice(0, 3)
                                            ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                            : e[3] && t.error(e[0]),
                                        e
                                    );
                                },
                                PSEUDO: function (e) {
                                    var t,
                                        n = !e[6] && e[2];
                                    return fe.CHILD.test(e[0])
                                        ? null
                                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ce.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                                },
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(me, ye).toLowerCase();
                                    return "*" === e
                                        ? function () {
                                              return !0;
                                          }
                                        : function (e) {
                                              return e.nodeName && e.nodeName.toLowerCase() === t;
                                          };
                                },
                                CLASS: function (e) {
                                    var t = $[e + " "];
                                    return (
                                        t ||
                                        ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                                            $(e, function (e) {
                                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                            }))
                                    );
                                },
                                ATTR: function (e, n, r) {
                                    return function (i) {
                                        var o = t.attr(i, e);
                                        return null == o
                                            ? "!=" === n
                                            : !n ||
                                                  ((o += ""),
                                                  "=" === n
                                                      ? o === r
                                                      : "!=" === n
                                                      ? o !== r
                                                      : "^=" === n
                                                      ? r && 0 === o.indexOf(r)
                                                      : "*=" === n
                                                      ? r && o.indexOf(r) > -1
                                                      : "$=" === n
                                                      ? r && o.slice(-r.length) === r
                                                      : "~=" === n
                                                      ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1
                                                      : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
                                    };
                                },
                                CHILD: function (e, t, n, r, i) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === r && 0 === i
                                        ? function (e) {
                                              return !!e.parentNode;
                                          }
                                        : function (t, n, u) {
                                              var c,
                                                  l,
                                                  f,
                                                  d,
                                                  h,
                                                  p,
                                                  g = o !== a ? "nextSibling" : "previousSibling",
                                                  v = t.parentNode,
                                                  m = s && t.nodeName.toLowerCase(),
                                                  y = !u && !s,
                                                  b = !1;
                                              if (v) {
                                                  if (o) {
                                                      for (; g; ) {
                                                          for (d = t; (d = d[g]); ) if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                                          p = g = "only" === e && !p && "nextSibling";
                                                      }
                                                      return !0;
                                                  }
                                                  if (((p = [a ? v.firstChild : v.lastChild]), a && y)) {
                                                      for (
                                                          d = v, f = d[I] || (d[I] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), c = l[e] || [], h = c[0] === R && c[1], b = h && c[2], d = h && v.childNodes[h];
                                                          (d = (++h && d && d[g]) || (b = h = 0) || p.pop());

                                                      )
                                                          if (1 === d.nodeType && ++b && d === t) {
                                                              l[e] = [R, h, b];
                                                              break;
                                                          }
                                                  } else if ((y && ((d = t), (f = d[I] || (d[I] = {})), (l = f[d.uniqueID] || (f[d.uniqueID] = {})), (c = l[e] || []), (h = c[0] === R && c[1]), (b = h)), !1 === b))
                                                      for (
                                                          ;
                                                          (d = (++h && d && d[g]) || (b = h = 0) || p.pop()) &&
                                                          ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && ((f = d[I] || (d[I] = {})), (l = f[d.uniqueID] || (f[d.uniqueID] = {})), (l[e] = [R, b])), d !== t));

                                                      );
                                                  return (b -= i) === r || (b % r == 0 && b / r >= 0);
                                              }
                                          };
                                },
                                PSEUDO: function (e, n) {
                                    var i,
                                        o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return o[I]
                                        ? o(n)
                                        : o.length > 1
                                        ? ((i = [e, e, "", n]),
                                          w.setFilters.hasOwnProperty(e.toLowerCase())
                                              ? r(function (e, t) {
                                                    for (var r, i = o(e, n), a = i.length; a--; ) (r = Q(e, i[a])), (e[r] = !(t[r] = i[a]));
                                                })
                                              : function (e) {
                                                    return o(e, 0, i);
                                                })
                                        : o;
                                },
                            },
                            pseudos: {
                                not: r(function (e) {
                                    var t = [],
                                        n = [],
                                        i = k(e.replace(oe, "$1"));
                                    return i[I]
                                        ? r(function (e, t, n, r) {
                                              for (var o, a = i(e, null, r, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                                          })
                                        : function (e, r, o) {
                                              return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                                          };
                                }),
                                has: r(function (e) {
                                    return function (n) {
                                        return t(e, n).length > 0;
                                    };
                                }),
                                contains: r(function (e) {
                                    return (
                                        (e = e.replace(me, ye)),
                                        function (t) {
                                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                                        }
                                    );
                                }),
                                lang: r(function (e) {
                                    return (
                                        le.test(e || "") || t.error("unsupported lang: " + e),
                                        (e = e.replace(me, ye).toLowerCase()),
                                        function (t) {
                                            var n;
                                            do {
                                                if ((n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1;
                                        }
                                    );
                                }),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id;
                                },
                                root: function (e) {
                                    return e === H;
                                },
                                focus: function (e) {
                                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                },
                                enabled: s(!1),
                                disabled: s(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function (e) {
                                    return !w.pseudos.empty(e);
                                },
                                header: function (e) {
                                    return he.test(e.nodeName);
                                },
                                input: function (e) {
                                    return de.test(e.nodeName);
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && "button" === e.type) || "button" === t;
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                                },
                                first: u(function () {
                                    return [0];
                                }),
                                last: u(function (e, t) {
                                    return [t - 1];
                                }),
                                eq: u(function (e, t, n) {
                                    return [n < 0 ? n + t : n];
                                }),
                                even: u(function (e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                odd: u(function (e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                lt: u(function (e, t, n) {
                                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                                    return e;
                                }),
                                gt: u(function (e, t, n) {
                                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                    return e;
                                }),
                            },
                        }),
                        (w.pseudos.nth = w.pseudos.eq);
                    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                        w.pseudos[b] = (function (e) {
                            return function (t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e;
                            };
                        })(b);
                    for (b in { submit: !0, reset: !0 })
                        w.pseudos[b] = (function (e) {
                            return function (t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e;
                            };
                        })(b);
                    return (
                        (l.prototype = w.filters = w.pseudos),
                        (w.setFilters = new l()),
                        (S = t.tokenize = function (e, n) {
                            var r,
                                i,
                                o,
                                a,
                                s,
                                u,
                                c,
                                l = W[e + " "];
                            if (l) return n ? 0 : l.slice(0);
                            for (s = e, u = [], c = w.preFilter; s; ) {
                                (r && !(i = ae.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                                    (r = !1),
                                    (i = se.exec(s)) && ((r = i.shift()), o.push({ value: r, type: i[0].replace(oe, " ") }), (s = s.slice(r.length)));
                                for (a in w.filter) !(i = fe[a].exec(s)) || (c[a] && !(i = c[a](i))) || ((r = i.shift()), o.push({ value: r, type: a, matches: i }), (s = s.slice(r.length)));
                                if (!r) break;
                            }
                            return n ? s.length : s ? t.error(e) : W(e, u).slice(0);
                        }),
                        (k = t.compile = function (e, t) {
                            var n,
                                r = [],
                                i = [],
                                o = z[e + " "];
                            if (!o) {
                                for (t || (t = S(e)), n = t.length; n--; ) (o = m(t[n])), o[I] ? r.push(o) : i.push(o);
                                (o = z(e, y(i, r))), (o.selector = e);
                            }
                            return o;
                        }),
                        (_ = t.select = function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = "function" == typeof e && e,
                                d = !r && S((e = l.selector || e));
                            if (((n = n || []), 1 === d.length)) {
                                if (((o = d[0] = d[0].slice(0)), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && O && w.relative[o[1].type])) {
                                    if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0])) return n;
                                    l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                                }
                                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && ((a = o[i]), !w.relative[(s = a.type)]); )
                                    if ((u = w.find[s]) && (r = u(a.matches[0].replace(me, ye), (ve.test(o[0].type) && c(t.parentNode)) || t))) {
                                        if ((o.splice(i, 1), !(e = r.length && f(o)))) return K.apply(n, r), n;
                                        break;
                                    }
                            }
                            return (l || k(e, d))(r, t, !O, n, !t || (ve.test(e) && c(t.parentNode)) || t), n;
                        }),
                        (x.sortStable = I.split("").sort(U).join("") === I),
                        (x.detectDuplicates = !!j),
                        N(),
                        (x.sortDetached = i(function (e) {
                            return 1 & e.compareDocumentPosition(M.createElement("fieldset"));
                        })),
                        i(function (e) {
                            return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                        }) ||
                            o("type|href|height|width", function (e, t, n) {
                                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                            }),
                        (x.attributes &&
                            i(function (e) {
                                return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                            })) ||
                            o("value", function (e, t, n) {
                                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                            }),
                        i(function (e) {
                            return null == e.getAttribute("disabled");
                        }) ||
                            o(Z, function (e, t, n) {
                                var r;
                                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                            }),
                        t
                    );
                })(n);
            (ye.find = Ce),
                (ye.expr = Ce.selectors),
                (ye.expr[":"] = ye.expr.pseudos),
                (ye.uniqueSort = ye.unique = Ce.uniqueSort),
                (ye.text = Ce.getText),
                (ye.isXMLDoc = Ce.isXML),
                (ye.contains = Ce.contains),
                (ye.escapeSelector = Ce.escape);
            var Se = function (e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (i && ye(e).is(n)) break;
                            r.push(e);
                        }
                    return r;
                },
                ke = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                },
                _e = ye.expr.match.needsContext,
                Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                Ae = /^.[^:#\[\.,]*$/;
            (ye.filter = function (e, t, n) {
                var r = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType
                        ? ye.find.matchesSelector(r, e)
                            ? [r]
                            : []
                        : ye.find.matches(
                              e,
                              ye.grep(t, function (e) {
                                  return 1 === e.nodeType;
                              })
                          )
                );
            }),
                ye.fn.extend({
                    find: function (e) {
                        var t,
                            n,
                            r = this.length,
                            i = this;
                        if ("string" != typeof e)
                            return this.pushStack(
                                ye(e).filter(function () {
                                    for (t = 0; t < r; t++) if (ye.contains(i[t], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), t = 0; t < r; t++) ye.find(e, i[t], n);
                        return r > 1 ? ye.uniqueSort(n) : n;
                    },
                    filter: function (e) {
                        return this.pushStack(c(this, e || [], !1));
                    },
                    not: function (e) {
                        return this.pushStack(c(this, e || [], !0));
                    },
                    is: function (e) {
                        return !!c(this, "string" == typeof e && _e.test(e) ? ye(e) : e || [], !1).length;
                    },
                });
            var je,
                Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((ye.fn.init = function (e, t, n) {
                var r, i;
                if (!e) return this;
                if (((n = n || je), "string" == typeof e)) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ne.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (((t = t instanceof ye ? t[0] : t), ye.merge(this, ye.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)), Ee.test(r[1]) && ye.isPlainObject(t)))
                            for (r in t) ye.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this;
                    }
                    return (i = ae.getElementById(r[2])), i && ((this[0] = i), (this.length = 1)), this;
                }
                return e.nodeType ? ((this[0] = e), (this.length = 1), this) : ye.isFunction(e) ? (void 0 !== n.ready ? n.ready(e) : e(ye)) : ye.makeArray(e, this);
            }).prototype = ye.fn),
                (je = ye(ae));
            var Me = /^(?:parents|prev(?:Until|All))/,
                He = { children: !0, contents: !0, next: !0, prev: !0 };
            ye.fn.extend({
                has: function (e) {
                    var t = ye(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++) if (ye.contains(this, t[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && ye(e);
                    if (!_e.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break;
                                }
                    return this.pushStack(o.length > 1 ? ye.uniqueSort(o) : o);
                },
                index: function (e) {
                    return e ? ("string" == typeof e ? fe.call(ye(e), this[0]) : fe.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (e, t) {
                    return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t))));
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                },
            }),
                ye.each(
                    {
                        parent: function (e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null;
                        },
                        parents: function (e) {
                            return Se(e, "parentNode");
                        },
                        parentsUntil: function (e, t, n) {
                            return Se(e, "parentNode", n);
                        },
                        next: function (e) {
                            return l(e, "nextSibling");
                        },
                        prev: function (e) {
                            return l(e, "previousSibling");
                        },
                        nextAll: function (e) {
                            return Se(e, "nextSibling");
                        },
                        prevAll: function (e) {
                            return Se(e, "previousSibling");
                        },
                        nextUntil: function (e, t, n) {
                            return Se(e, "nextSibling", n);
                        },
                        prevUntil: function (e, t, n) {
                            return Se(e, "previousSibling", n);
                        },
                        siblings: function (e) {
                            return ke((e.parentNode || {}).firstChild, e);
                        },
                        children: function (e) {
                            return ke(e.firstChild);
                        },
                        contents: function (e) {
                            return u(e, "iframe") ? e.contentDocument : (u(e, "template") && (e = e.content || e), ye.merge([], e.childNodes));
                        },
                    },
                    function (e, t) {
                        ye.fn[e] = function (n, r) {
                            var i = ye.map(this, t, n);
                            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ye.filter(r, i)), this.length > 1 && (He[e] || ye.uniqueSort(i), Me.test(e) && i.reverse()), this.pushStack(i);
                        };
                    }
                );
            var Oe = /[^\x20\t\r\n\f]+/g;
            (ye.Callbacks = function (e) {
                e = "string" == typeof e ? f(e) : ye.extend({}, e);
                var t,
                    n,
                    r,
                    i,
                    o = [],
                    a = [],
                    s = -1,
                    u = function () {
                        for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length; ) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
                        e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
                    },
                    c = {
                        add: function () {
                            return (
                                o &&
                                    (n && !t && ((s = o.length - 1), a.push(n)),
                                    (function t(n) {
                                        ye.each(n, function (n, r) {
                                            ye.isFunction(r) ? (e.unique && c.has(r)) || o.push(r) : r && r.length && "string" !== ye.type(r) && t(r);
                                        });
                                    })(arguments),
                                    n && !t && u()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                ye.each(arguments, function (e, t) {
                                    for (var n; (n = ye.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
                                }),
                                this
                            );
                        },
                        has: function (e) {
                            return e ? ye.inArray(e, o) > -1 : o.length > 0;
                        },
                        empty: function () {
                            return o && (o = []), this;
                        },
                        disable: function () {
                            return (i = a = []), (o = n = ""), this;
                        },
                        disabled: function () {
                            return !o;
                        },
                        lock: function () {
                            return (i = a = []), n || t || (o = n = ""), this;
                        },
                        locked: function () {
                            return !!i;
                        },
                        fireWith: function (e, n) {
                            return i || ((n = n || []), (n = [e, n.slice ? n.slice() : n]), a.push(n), t || u()), this;
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!r;
                        },
                    };
                return c;
            }),
                ye.extend({
                    Deferred: function (e) {
                        var t = [
                                ["notify", "progress", ye.Callbacks("memory"), ye.Callbacks("memory"), 2],
                                ["resolve", "done", ye.Callbacks("once memory"), ye.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", ye.Callbacks("once memory"), ye.Callbacks("once memory"), 1, "rejected"],
                            ],
                            r = "pending",
                            i = {
                                state: function () {
                                    return r;
                                },
                                always: function () {
                                    return o.done(arguments).fail(arguments), this;
                                },
                                catch: function (e) {
                                    return i.then(null, e);
                                },
                                pipe: function () {
                                    var e = arguments;
                                    return ye
                                        .Deferred(function (n) {
                                            ye.each(t, function (t, r) {
                                                var i = ye.isFunction(e[r[4]]) && e[r[4]];
                                                o[r[1]](function () {
                                                    var e = i && i.apply(this, arguments);
                                                    e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                                                });
                                            }),
                                                (e = null);
                                        })
                                        .promise();
                                },
                                then: function (e, r, i) {
                                    function o(e, t, r, i) {
                                        return function () {
                                            var s = this,
                                                u = arguments,
                                                c = function () {
                                                    var n, c;
                                                    if (!(e < a)) {
                                                        if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        (c = n && ("object" == typeof n || "function" == typeof n) && n.then),
                                                            ye.isFunction(c)
                                                                ? i
                                                                    ? c.call(n, o(a, t, d, i), o(a, t, h, i))
                                                                    : (a++, c.call(n, o(a, t, d, i), o(a, t, h, i), o(a, t, d, t.notifyWith)))
                                                                : (r !== d && ((s = void 0), (u = [n])), (i || t.resolveWith)(s, u));
                                                    }
                                                },
                                                l = i
                                                    ? c
                                                    : function () {
                                                          try {
                                                              c();
                                                          } catch (n) {
                                                              ye.Deferred.exceptionHook && ye.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= a && (r !== h && ((s = void 0), (u = [n])), t.rejectWith(s, u));
                                                          }
                                                      };
                                            e ? l() : (ye.Deferred.getStackHook && (l.stackTrace = ye.Deferred.getStackHook()), n.setTimeout(l));
                                        };
                                    }
                                    var a = 0;
                                    return ye
                                        .Deferred(function (n) {
                                            t[0][3].add(o(0, n, ye.isFunction(i) ? i : d, n.notifyWith)), t[1][3].add(o(0, n, ye.isFunction(e) ? e : d)), t[2][3].add(o(0, n, ye.isFunction(r) ? r : h));
                                        })
                                        .promise();
                                },
                                promise: function (e) {
                                    return null != e ? ye.extend(e, i) : i;
                                },
                            },
                            o = {};
                        return (
                            ye.each(t, function (e, n) {
                                var a = n[2],
                                    s = n[5];
                                (i[n[1]] = a.add),
                                    s &&
                                        a.add(
                                            function () {
                                                r = s;
                                            },
                                            t[3 - e][2].disable,
                                            t[0][2].lock
                                        ),
                                    a.add(n[3].fire),
                                    (o[n[0]] = function () {
                                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
                                    }),
                                    (o[n[0] + "With"] = a.fireWith);
                            }),
                            i.promise(o),
                            e && e.call(o, o),
                            o
                        );
                    },
                    when: function (e) {
                        var t = arguments.length,
                            n = t,
                            r = Array(n),
                            i = ue.call(arguments),
                            o = ye.Deferred(),
                            a = function (e) {
                                return function (n) {
                                    (r[e] = this), (i[e] = arguments.length > 1 ? ue.call(arguments) : n), --t || o.resolveWith(r, i);
                                };
                            };
                        if (t <= 1 && (p(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || ye.isFunction(i[n] && i[n].then))) return o.then();
                        for (; n--; ) p(i[n], a(n), o.reject);
                        return o.promise();
                    },
                });
            var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (ye.Deferred.exceptionHook = function (e, t) {
                n.console && n.console.warn && e && Le.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
                (ye.readyException = function (e) {
                    n.setTimeout(function () {
                        throw e;
                    });
                });
            var De = ye.Deferred();
            (ye.fn.ready = function (e) {
                return (
                    De.then(e).catch(function (e) {
                        ye.readyException(e);
                    }),
                    this
                );
            }),
                ye.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (e) {
                        (!0 === e ? --ye.readyWait : ye.isReady) || ((ye.isReady = !0), (!0 !== e && --ye.readyWait > 0) || De.resolveWith(ae, [ye]));
                    },
                }),
                (ye.ready.then = De.then),
                "complete" === ae.readyState || ("loading" !== ae.readyState && !ae.documentElement.doScroll) ? n.setTimeout(ye.ready) : (ae.addEventListener("DOMContentLoaded", g), n.addEventListener("load", g));
            var Pe = function (e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        c = null == n;
                    if ("object" === ye.type(n)) {
                        i = !0;
                        for (s in n) Pe(e, t, s, n[s], !0, o, a);
                    } else if (
                        void 0 !== r &&
                        ((i = !0),
                        ye.isFunction(r) || (a = !0),
                        c &&
                            (a
                                ? (t.call(e, r), (t = null))
                                : ((c = t),
                                  (t = function (e, t, n) {
                                      return c.call(ye(e), n);
                                  }))),
                        t)
                    )
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
                },
                qe = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
            (v.uid = 1),
                (v.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return t || ((t = {}), qe(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                    },
                    set: function (e, t, n) {
                        var r,
                            i = this.cache(e);
                        if ("string" == typeof t) i[ye.camelCase(t)] = n;
                        else for (r in t) i[ye.camelCase(r)] = t[r];
                        return i;
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ye.camelCase(t)];
                    },
                    access: function (e, t, n) {
                        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                    },
                    remove: function (e, t) {
                        var n,
                            r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                Array.isArray(t) ? (t = t.map(ye.camelCase)) : ((t = ye.camelCase(t)), (t = t in r ? [t] : t.match(Oe) || [])), (n = t.length);
                                for (; n--; ) delete r[t[n]];
                            }
                            (void 0 === t || ye.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !ye.isEmptyObject(t);
                    },
                });
            var Ie = new v(),
                Fe = new v(),
                Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Be = /[A-Z]/g;
            ye.extend({
                hasData: function (e) {
                    return Fe.hasData(e) || Ie.hasData(e);
                },
                data: function (e, t, n) {
                    return Fe.access(e, t, n);
                },
                removeData: function (e, t) {
                    Fe.remove(e, t);
                },
                _data: function (e, t, n) {
                    return Ie.access(e, t, n);
                },
                _removeData: function (e, t) {
                    Ie.remove(e, t);
                },
            }),
                ye.fn.extend({
                    data: function (e, t) {
                        var n,
                            r,
                            i,
                            o = this[0],
                            a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && ((i = Fe.get(o)), 1 === o.nodeType && !Ie.get(o, "hasDataAttrs"))) {
                                for (n = a.length; n--; ) a[n] && ((r = a[n].name), 0 === r.indexOf("data-") && ((r = ye.camelCase(r.slice(5))), y(o, r, i[r])));
                                Ie.set(o, "hasDataAttrs", !0);
                            }
                            return i;
                        }
                        return "object" == typeof e
                            ? this.each(function () {
                                  Fe.set(this, e);
                              })
                            : Pe(
                                  this,
                                  function (t) {
                                      var n;
                                      if (o && void 0 === t) {
                                          if (void 0 !== (n = Fe.get(o, e))) return n;
                                          if (void 0 !== (n = y(o, e))) return n;
                                      } else
                                          this.each(function () {
                                              Fe.set(this, e, t);
                                          });
                                  },
                                  null,
                                  t,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            Fe.remove(this, e);
                        });
                    },
                }),
                ye.extend({
                    queue: function (e, t, n) {
                        var r;
                        if (e) return (t = (t || "fx") + "queue"), (r = Ie.get(e, t)), n && (!r || Array.isArray(n) ? (r = Ie.access(e, t, ye.makeArray(n))) : r.push(n)), r || [];
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = ye.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            o = ye._queueHooks(e, t),
                            a = function () {
                                ye.dequeue(e, t);
                            };
                        "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return (
                            Ie.get(e, n) ||
                            Ie.access(e, n, {
                                empty: ye.Callbacks("once memory").add(function () {
                                    Ie.remove(e, [t + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                ye.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return (
                            "string" != typeof e && ((t = e), (e = "fx"), n--),
                            arguments.length < n
                                ? ye.queue(this[0], e)
                                : void 0 === t
                                ? this
                                : this.each(function () {
                                      var n = ye.queue(this, e, t);
                                      ye._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ye.dequeue(this, e);
                                  })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            ye.dequeue(this, e);
                        });
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function (e, t) {
                        var n,
                            r = 1,
                            i = ye.Deferred(),
                            o = this,
                            a = this.length,
                            s = function () {
                                --r || i.resolveWith(o, [o]);
                            };
                        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = Ie.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                        return s(), i.promise(t);
                    },
                });
            var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                We = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
                ze = ["Top", "Right", "Bottom", "Left"],
                Ue = function (e, t) {
                    return (e = t || e), "none" === e.style.display || ("" === e.style.display && ye.contains(e.ownerDocument, e) && "none" === ye.css(e, "display"));
                },
                Ve = function (e, t, n, r) {
                    var i,
                        o,
                        a = {};
                    for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
                    i = n.apply(e, r || []);
                    for (o in t) e.style[o] = a[o];
                    return i;
                },
                Ye = {};
            ye.fn.extend({
                show: function () {
                    return w(this, !0);
                },
                hide: function () {
                    return w(this);
                },
                toggle: function (e) {
                    return "boolean" == typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              Ue(this) ? ye(this).show() : ye(this).hide();
                          });
                },
            });
            var Xe = /^(?:checkbox|radio)$/i,
                Je = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                Ke = /^$|\/(?:java|ecma)script/i,
                Ge = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
            (Ge.optgroup = Ge.option), (Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead), (Ge.th = Ge.td);
            var Qe = /<|&#?\w+;/;
            !(function () {
                var e = ae.createDocumentFragment(),
                    t = e.appendChild(ae.createElement("div")),
                    n = ae.createElement("input");
                n.setAttribute("type", "radio"),
                    n.setAttribute("checked", "checked"),
                    n.setAttribute("name", "t"),
                    t.appendChild(n),
                    (me.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
                    (t.innerHTML = "<textarea>x</textarea>"),
                    (me.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
            })();
            var Ze = ae.documentElement,
                et = /^key/,
                tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                nt = /^([^.]*)(?:\.(.+)|)/;
            (ye.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var o,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f,
                        d,
                        h,
                        p,
                        g,
                        v = Ie.get(e);
                    if (v)
                        for (
                            n.handler && ((o = n), (n = o.handler), (i = o.selector)),
                                i && ye.find.matchesSelector(Ze, i),
                                n.guid || (n.guid = ye.guid++),
                                (u = v.events) || (u = v.events = {}),
                                (a = v.handle) ||
                                    (a = v.handle = function (t) {
                                        return void 0 !== ye && ye.event.triggered !== t.type ? ye.event.dispatch.apply(e, arguments) : void 0;
                                    }),
                                t = (t || "").match(Oe) || [""],
                                c = t.length;
                            c--;

                        )
                            (s = nt.exec(t[c]) || []),
                                (h = g = s[1]),
                                (p = (s[2] || "").split(".").sort()),
                                h &&
                                    ((f = ye.event.special[h] || {}),
                                    (h = (i ? f.delegateType : f.bindType) || h),
                                    (f = ye.event.special[h] || {}),
                                    (l = ye.extend({ type: h, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ye.expr.match.needsContext.test(i), namespace: p.join(".") }, o)),
                                    (d = u[h]) || ((d = u[h] = []), (d.delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, p, a)) || (e.addEventListener && e.addEventListener(h, a))),
                                    f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
                                    i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                                    (ye.event.global[h] = !0));
                },
                remove: function (e, t, n, r, i) {
                    var o,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f,
                        d,
                        h,
                        p,
                        g,
                        v = Ie.hasData(e) && Ie.get(e);
                    if (v && (u = v.events)) {
                        for (t = (t || "").match(Oe) || [""], c = t.length; c--; )
                            if (((s = nt.exec(t[c]) || []), (h = g = s[1]), (p = (s[2] || "").split(".").sort()), h)) {
                                for (f = ye.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; )
                                    (l = d[o]),
                                        (!i && g !== l.origType) ||
                                            (n && n.guid !== l.guid) ||
                                            (s && !s.test(l.namespace)) ||
                                            (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                                            (d.splice(o, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                                a && !d.length && ((f.teardown && !1 !== f.teardown.call(e, p, v.handle)) || ye.removeEvent(e, h, v.handle), delete u[h]);
                            } else for (h in u) ye.event.remove(e, h + t[c], n, r, !0);
                        ye.isEmptyObject(u) && Ie.remove(e, "handle events");
                    }
                },
                dispatch: function (e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        a,
                        s = ye.event.fix(e),
                        u = new Array(arguments.length),
                        c = (Ie.get(this, "events") || {})[s.type] || [],
                        l = ye.event.special[s.type] || {};
                    for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                    if (((s.delegateTarget = this), !l.preDispatch || !1 !== l.preDispatch.call(this, s))) {
                        for (a = ye.event.handlers.call(this, s, c), t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                            for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                                (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
                                    ((s.handleObj = o), (s.data = o.data), void 0 !== (r = ((ye.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, s), s.result;
                    }
                },
                handlers: function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        s = [],
                        u = t.delegateCount,
                        c = e.target;
                    if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (o = [], a = {}, n = 0; n < u; n++) (r = t[n]), (i = r.selector + " "), void 0 === a[i] && (a[i] = r.needsContext ? ye(i, this).index(c) > -1 : ye.find(i, this, null, [c]).length), a[i] && o.push(r);
                                o.length && s.push({ elem: c, handlers: o });
                            }
                    return (c = this), u < t.length && s.push({ elem: c, handlers: t.slice(u) }), s;
                },
                addProp: function (e, t) {
                    Object.defineProperty(ye.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: ye.isFunction(t)
                            ? function () {
                                  if (this.originalEvent) return t(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[e];
                              },
                        set: function (t) {
                            Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                        },
                    });
                },
                fix: function (e) {
                    return e[ye.expando] ? e : new ye.Event(e);
                },
                special: {
                    load: { noBubble: !0 },
                    focus: {
                        trigger: function () {
                            if (this !== E() && this.focus) return this.focus(), !1;
                        },
                        delegateType: "focusin",
                    },
                    blur: {
                        trigger: function () {
                            if (this === E() && this.blur) return this.blur(), !1;
                        },
                        delegateType: "focusout",
                    },
                    click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && u(this, "input")) return this.click(), !1;
                        },
                        _default: function (e) {
                            return u(e.target, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
            }),
                (ye.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }),
                (ye.Event = function (e, t) {
                    if (!(this instanceof ye.Event)) return new ye.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                          (this.type = e.type),
                          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? k : _),
                          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                          (this.currentTarget = e.currentTarget),
                          (this.relatedTarget = e.relatedTarget))
                        : (this.type = e),
                        t && ye.extend(this, t),
                        (this.timeStamp = (e && e.timeStamp) || ye.now()),
                        (this[ye.expando] = !0);
                }),
                (ye.Event.prototype = {
                    constructor: ye.Event,
                    isDefaultPrevented: _,
                    isPropagationStopped: _,
                    isImmediatePropagationStopped: _,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = k), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = k), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = k), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                ye.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (e) {
                            var t = e.button;
                            return null == e.which && et.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && tt.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                        },
                    },
                    ye.event.addProp
                ),
                ye.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                    ye.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n,
                                r = this,
                                i = e.relatedTarget,
                                o = e.handleObj;
                            return (i && (i === r || ye.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                        },
                    };
                }),
                ye.fn.extend({
                    on: function (e, t, n, r) {
                        return A(this, e, t, n, r);
                    },
                    one: function (e, t, n, r) {
                        return A(this, e, t, n, r, 1);
                    },
                    off: function (e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), ye(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" == typeof e) {
                            for (i in e) this.off(i, t, e[i]);
                            return this;
                        }
                        return (
                            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = _),
                            this.each(function () {
                                ye.event.remove(this, e, n, t);
                            })
                        );
                    },
                });
            var rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                it = /<script|<style|<link/i,
                ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
                at = /^true\/(.*)/,
                st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            ye.extend({
                htmlPrefilter: function (e) {
                    return e.replace(rt, "<$1></$2>");
                },
                clone: function (e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s = e.cloneNode(!0),
                        u = ye.contains(e.ownerDocument, e);
                    if (!(me.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || ye.isXMLDoc(e))) for (a = T(s), o = T(e), r = 0, i = o.length; r < i; r++) O(o[r], a[r]);
                    if (t)
                        if (n) for (o = o || T(e), a = a || T(s), r = 0, i = o.length; r < i; r++) H(o[r], a[r]);
                        else H(e, s);
                    return (a = T(s, "script")), a.length > 0 && C(a, !u && T(e, "script")), s;
                },
                cleanData: function (e) {
                    for (var t, n, r, i = ye.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (qe(n)) {
                            if ((t = n[Ie.expando])) {
                                if (t.events) for (r in t.events) i[r] ? ye.event.remove(n, r) : ye.removeEvent(n, r, t.handle);
                                n[Ie.expando] = void 0;
                            }
                            n[Fe.expando] && (n[Fe.expando] = void 0);
                        }
                },
            }),
                ye.fn.extend({
                    detach: function (e) {
                        return D(this, e, !0);
                    },
                    remove: function (e) {
                        return D(this, e);
                    },
                    text: function (e) {
                        return Pe(
                            this,
                            function (e) {
                                return void 0 === e
                                    ? ye.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                      });
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function () {
                        return L(this, arguments, function (e) {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || j(this, e).appendChild(e);
                        });
                    },
                    prepend: function () {
                        return L(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = j(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return L(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return L(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ye.cleanData(T(e, !1)), (e.textContent = ""));
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function () {
                                return ye.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return Pe(
                            this,
                            function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !it.test(e) && !Ge[(Je.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = ye.htmlPrefilter(e);
                                    try {
                                        for (; n < r; n++) (t = this[n] || {}), 1 === t.nodeType && (ye.cleanData(T(t, !1)), (t.innerHTML = e));
                                        t = 0;
                                    } catch (e) {}
                                }
                                t && this.empty().append(e);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var e = [];
                        return L(
                            this,
                            arguments,
                            function (t) {
                                var n = this.parentNode;
                                ye.inArray(this, e) < 0 && (ye.cleanData(T(this)), n && n.replaceChild(t, this));
                            },
                            e
                        );
                    },
                }),
                ye.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                    ye.fn[e] = function (e) {
                        for (var n, r = [], i = ye(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), ye(i[a])[t](n), le.apply(r, n.get());
                        return this.pushStack(r);
                    };
                });
            var ut = /^margin/,
                ct = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
                lt = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return (t && t.opener) || (t = n), t.getComputedStyle(e);
                };
            !(function () {
                function e() {
                    if (s) {
                        (s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (s.innerHTML = ""), Ze.appendChild(a);
                        var e = n.getComputedStyle(s);
                        (t = "1%" !== e.top), (o = "2px" === e.marginLeft), (r = "4px" === e.width), (s.style.marginRight = "50%"), (i = "4px" === e.marginRight), Ze.removeChild(a), (s = null);
                    }
                }
                var t,
                    r,
                    i,
                    o,
                    a = ae.createElement("div"),
                    s = ae.createElement("div");
                s.style &&
                    ((s.style.backgroundClip = "content-box"),
                    (s.cloneNode(!0).style.backgroundClip = ""),
                    (me.clearCloneStyle = "content-box" === s.style.backgroundClip),
                    (a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                    a.appendChild(s),
                    ye.extend(me, {
                        pixelPosition: function () {
                            return e(), t;
                        },
                        boxSizingReliable: function () {
                            return e(), r;
                        },
                        pixelMarginRight: function () {
                            return e(), i;
                        },
                        reliableMarginLeft: function () {
                            return e(), o;
                        },
                    }));
            })();
            var ft = /^(none|table(?!-c[ea]).+)/,
                dt = /^--/,
                ht = { position: "absolute", visibility: "hidden", display: "block" },
                pt = { letterSpacing: "0", fontWeight: "400" },
                gt = ["Webkit", "Moz", "ms"],
                vt = ae.createElement("div").style;
            ye.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = P(e, "opacity");
                                return "" === n ? "1" : n;
                            }
                        },
                    },
                },
                cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: { float: "cssFloat" },
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i,
                            o,
                            a,
                            s = ye.camelCase(t),
                            u = dt.test(t),
                            c = e.style;
                        if ((u || (t = F(s)), (a = ye.cssHooks[t] || ye.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                        (o = typeof n),
                            "string" === o && (i = We.exec(n)) && i[1] && ((n = b(e, t, i)), (o = "number")),
                            null != n &&
                                n === n &&
                                ("number" === o && (n += (i && i[3]) || (ye.cssNumber[s] ? "" : "px")),
                                me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                                (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? c.setProperty(t, n) : (c[t] = n)));
                    }
                },
                css: function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = ye.camelCase(t);
                    return (
                        dt.test(t) || (t = F(s)),
                        (a = ye.cssHooks[t] || ye.cssHooks[s]),
                        a && "get" in a && (i = a.get(e, !0, n)),
                        void 0 === i && (i = P(e, t, r)),
                        "normal" === i && t in pt && (i = pt[t]),
                        "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
                    );
                },
            }),
                ye.each(["height", "width"], function (e, t) {
                    ye.cssHooks[t] = {
                        get: function (e, n, r) {
                            if (n)
                                return !ft.test(ye.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                    ? $(e, t, r)
                                    : Ve(e, ht, function () {
                                          return $(e, t, r);
                                      });
                        },
                        set: function (e, n, r) {
                            var i,
                                o = r && lt(e),
                                a = r && B(e, t, r, "border-box" === ye.css(e, "boxSizing", !1, o), o);
                            return a && (i = We.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = ye.css(e, t))), R(e, n, a);
                        },
                    };
                }),
                (ye.cssHooks.marginLeft = q(me.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (
                            (parseFloat(P(e, "marginLeft")) ||
                                e.getBoundingClientRect().left -
                                    Ve(e, { marginLeft: 0 }, function () {
                                        return e.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                ye.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                    (ye.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ze[r] + t] = o[r] || o[r - 2] || o[0];
                            return i;
                        },
                    }),
                        ut.test(e) || (ye.cssHooks[e + t].set = R);
                }),
                ye.fn.extend({
                    css: function (e, t) {
                        return Pe(
                            this,
                            function (e, t, n) {
                                var r,
                                    i,
                                    o = {},
                                    a = 0;
                                if (Array.isArray(t)) {
                                    for (r = lt(e), i = t.length; a < i; a++) o[t[a]] = ye.css(e, t[a], !1, r);
                                    return o;
                                }
                                return void 0 !== n ? ye.style(e, t, n) : ye.css(e, t);
                            },
                            e,
                            t,
                            arguments.length > 1
                        );
                    },
                }),
                (ye.Tween = W),
                (W.prototype = {
                    constructor: W,
                    init: function (e, t, n, r, i, o) {
                        (this.elem = e), (this.prop = n), (this.easing = i || ye.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (ye.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var e = W.propHooks[this.prop];
                        return e && e.get ? e.get(this) : W.propHooks._default.get(this);
                    },
                    run: function (e) {
                        var t,
                            n = W.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : W.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (W.prototype.init.prototype = W.prototype),
                (W.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : ((t = ye.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
                        },
                        set: function (e) {
                            ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : ye.style(e.elem, e.prop, e.now + e.unit);
                        },
                    },
                }),
                (W.propHooks.scrollTop = W.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                (ye.easing = {
                    linear: function (e) {
                        return e;
                    },
                    swing: function (e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (ye.fx = W.prototype.init),
                (ye.fx.step = {});
            var mt,
                yt,
                bt = /^(?:toggle|show|hide)$/,
                xt = /queueHooks$/;
            (ye.Animation = ye.extend(K, {
                tweeners: {
                    "*": [
                        function (e, t) {
                            var n = this.createTween(e, t);
                            return b(n.elem, e, We.exec(t), n), n;
                        },
                    ],
                },
                tweener: function (e, t) {
                    ye.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Oe));
                    for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (K.tweeners[n] = K.tweeners[n] || []), K.tweeners[n].unshift(t);
                },
                prefilters: [X],
                prefilter: function (e, t) {
                    t ? K.prefilters.unshift(e) : K.prefilters.push(e);
                },
            })),
                (ye.speed = function (e, t, n) {
                    var r = e && "object" == typeof e ? ye.extend({}, e) : { complete: n || (!n && t) || (ye.isFunction(e) && e), duration: e, easing: (n && t) || (t && !ye.isFunction(t) && t) };
                    return (
                        ye.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in ye.fx.speeds ? (r.duration = ye.fx.speeds[r.duration]) : (r.duration = ye.fx.speeds._default)),
                        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                        (r.old = r.complete),
                        (r.complete = function () {
                            ye.isFunction(r.old) && r.old.call(this), r.queue && ye.dequeue(this, r.queue);
                        }),
                        r
                    );
                }),
                ye.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(Ue).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
                    },
                    animate: function (e, t, n, r) {
                        var i = ye.isEmptyObject(e),
                            o = ye.speed(t, n, r),
                            a = function () {
                                var t = K(this, ye.extend({}, e), o);
                                (i || Ie.get(this, "finish")) && t.stop(!0);
                            };
                        return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
                    },
                    stop: function (e, t, n) {
                        var r = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return (
                            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                            t && !1 !== e && this.queue(e || "fx", []),
                            this.each(function () {
                                var t = !0,
                                    i = null != e && e + "queueHooks",
                                    o = ye.timers,
                                    a = Ie.get(this);
                                if (i) a[i] && a[i].stop && r(a[i]);
                                else for (i in a) a[i] && a[i].stop && xt.test(i) && r(a[i]);
                                for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                                (!t && n) || ye.dequeue(this, e);
                            })
                        );
                    },
                    finish: function (e) {
                        return (
                            !1 !== e && (e = e || "fx"),
                            this.each(function () {
                                var t,
                                    n = Ie.get(this),
                                    r = n[e + "queue"],
                                    i = n[e + "queueHooks"],
                                    o = ye.timers,
                                    a = r ? r.length : 0;
                                for (n.finish = !0, ye.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                ye.each(["toggle", "show", "hide"], function (e, t) {
                    var n = ye.fn[t];
                    ye.fn[t] = function (e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, r, i);
                    };
                }),
                ye.each({ slideDown: V("show"), slideUp: V("hide"), slideToggle: V("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                    ye.fn[e] = function (e, n, r) {
                        return this.animate(t, e, n, r);
                    };
                }),
                (ye.timers = []),
                (ye.fx.tick = function () {
                    var e,
                        t = 0,
                        n = ye.timers;
                    for (mt = ye.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || ye.fx.stop(), (mt = void 0);
                }),
                (ye.fx.timer = function (e) {
                    ye.timers.push(e), ye.fx.start();
                }),
                (ye.fx.interval = 13),
                (ye.fx.start = function () {
                    yt || ((yt = !0), z());
                }),
                (ye.fx.stop = function () {
                    yt = null;
                }),
                (ye.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (ye.fn.delay = function (e, t) {
                    return (
                        (e = ye.fx ? ye.fx.speeds[e] || e : e),
                        (t = t || "fx"),
                        this.queue(t, function (t, r) {
                            var i = n.setTimeout(t, e);
                            r.stop = function () {
                                n.clearTimeout(i);
                            };
                        })
                    );
                }),
                (function () {
                    var e = ae.createElement("input"),
                        t = ae.createElement("select"),
                        n = t.appendChild(ae.createElement("option"));
                    (e.type = "checkbox"), (me.checkOn = "" !== e.value), (me.optSelected = n.selected), (e = ae.createElement("input")), (e.value = "t"), (e.type = "radio"), (me.radioValue = "t" === e.value);
                })();
            var wt,
                Tt = ye.expr.attrHandle;
            ye.fn.extend({
                attr: function (e, t) {
                    return Pe(this, ye.attr, e, t, arguments.length > 1);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        ye.removeAttr(this, e);
                    });
                },
            }),
                ye.extend({
                    attr: function (e, t, n) {
                        var r,
                            i,
                            o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return void 0 === e.getAttribute
                                ? ye.prop(e, t, n)
                                : ((1 === o && ye.isXMLDoc(e)) || (i = ye.attrHooks[t.toLowerCase()] || (ye.expr.match.bool.test(t) ? wt : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void ye.removeAttr(e, t)
                                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                          ? r
                                          : (e.setAttribute(t, n + ""), n)
                                      : i && "get" in i && null !== (r = i.get(e, t))
                                      ? r
                                      : ((r = ye.find.attr(e, t)), null == r ? void 0 : r));
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!me.radioValue && "radio" === t && u(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            },
                        },
                    },
                    removeAttr: function (e, t) {
                        var n,
                            r = 0,
                            i = t && t.match(Oe);
                        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
                    },
                }),
                (wt = {
                    set: function (e, t, n) {
                        return !1 === t ? ye.removeAttr(e, n) : e.setAttribute(n, n), n;
                    },
                }),
                ye.each(ye.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = Tt[t] || ye.find.attr;
                    Tt[t] = function (e, t, r) {
                        var i,
                            o,
                            a = t.toLowerCase();
                        return r || ((o = Tt[a]), (Tt[a] = i), (i = null != n(e, t, r) ? a : null), (Tt[a] = o)), i;
                    };
                });
            var Ct = /^(?:input|select|textarea|button)$/i,
                St = /^(?:a|area)$/i;
            ye.fn.extend({
                prop: function (e, t) {
                    return Pe(this, ye.prop, e, t, arguments.length > 1);
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[ye.propFix[e] || e];
                    });
                },
            }),
                ye.extend({
                    prop: function (e, t, n) {
                        var r,
                            i,
                            o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return (
                                (1 === o && ye.isXMLDoc(e)) || ((t = ye.propFix[t] || t), (i = ye.propHooks[t])),
                                void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = ye.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Ct.test(e.nodeName) || (St.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                me.optSelected ||
                    (ye.propHooks.selected = {
                        get: function (e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null;
                        },
                        set: function (e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                        },
                    }),
                ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    ye.propFix[this.toLowerCase()] = this;
                }),
                ye.fn.extend({
                    addClass: function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u = 0;
                        if (ye.isFunction(e))
                            return this.each(function (t) {
                                ye(this).addClass(e.call(this, t, Q(this)));
                            });
                        if ("string" == typeof e && e)
                            for (t = e.match(Oe) || []; (n = this[u++]); )
                                if (((i = Q(n)), (r = 1 === n.nodeType && " " + G(i) + " "))) {
                                    for (a = 0; (o = t[a++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                    (s = G(r)), i !== s && n.setAttribute("class", s);
                                }
                        return this;
                    },
                    removeClass: function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u = 0;
                        if (ye.isFunction(e))
                            return this.each(function (t) {
                                ye(this).removeClass(e.call(this, t, Q(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ("string" == typeof e && e)
                            for (t = e.match(Oe) || []; (n = this[u++]); )
                                if (((i = Q(n)), (r = 1 === n.nodeType && " " + G(i) + " "))) {
                                    for (a = 0; (o = t[a++]); ) for (; r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                                    (s = G(r)), i !== s && n.setAttribute("class", s);
                                }
                        return this;
                    },
                    toggleClass: function (e, t) {
                        var n = typeof e;
                        return "boolean" == typeof t && "string" === n
                            ? t
                                ? this.addClass(e)
                                : this.removeClass(e)
                            : ye.isFunction(e)
                            ? this.each(function (n) {
                                  ye(this).toggleClass(e.call(this, n, Q(this), t), t);
                              })
                            : this.each(function () {
                                  var t, r, i, o;
                                  if ("string" === n) for (r = 0, i = ye(this), o = e.match(Oe) || []; (t = o[r++]); ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                                  else (void 0 !== e && "boolean" !== n) || ((t = Q(this)), t && Ie.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ie.get(this, "__className__") || ""));
                              });
                    },
                    hasClass: function (e) {
                        var t,
                            n,
                            r = 0;
                        for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + G(Q(n)) + " ").indexOf(t) > -1) return !0;
                        return !1;
                    },
                });
            var kt = /\r/g;
            ye.fn.extend({
                val: function (e) {
                    var t,
                        n,
                        r,
                        i = this[0];
                    return arguments.length
                        ? ((r = ye.isFunction(e)),
                          this.each(function (n) {
                              var i;
                              1 === this.nodeType &&
                                  ((i = r ? e.call(this, n, ye(this).val()) : e),
                                  null == i
                                      ? (i = "")
                                      : "number" == typeof i
                                      ? (i += "")
                                      : Array.isArray(i) &&
                                        (i = ye.map(i, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                  ((t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                          }))
                        : i
                        ? (t = ye.valHooks[i.type] || ye.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                            ? n
                            : ((n = i.value), "string" == typeof n ? n.replace(kt, "") : null == n ? "" : n)
                        : void 0;
                },
            }),
                ye.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = ye.find.attr(e, "value");
                                return null != t ? t : G(ye.text(e));
                            },
                        },
                        select: {
                            get: function (e) {
                                var t,
                                    n,
                                    r,
                                    i = e.options,
                                    o = e.selectedIndex,
                                    a = "select-one" === e.type,
                                    s = a ? null : [],
                                    c = a ? o + 1 : i.length;
                                for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                                    if (((n = i[r]), (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup")))) {
                                        if (((t = ye(n).val()), a)) return t;
                                        s.push(t);
                                    }
                                return s;
                            },
                            set: function (e, t) {
                                for (var n, r, i = e.options, o = ye.makeArray(t), a = i.length; a--; ) (r = i[a]), (r.selected = ye.inArray(ye.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), o;
                            },
                        },
                    },
                }),
                ye.each(["radio", "checkbox"], function () {
                    (ye.valHooks[this] = {
                        set: function (e, t) {
                            if (Array.isArray(t)) return (e.checked = ye.inArray(ye(e).val(), t) > -1);
                        },
                    }),
                        me.checkOn ||
                            (ye.valHooks[this].get = function (e) {
                                return null === e.getAttribute("value") ? "on" : e.value;
                            });
                });
            var _t = /^(?:focusinfocus|focusoutblur)$/;
            ye.extend(ye.event, {
                trigger: function (e, t, r, i) {
                    var o,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f,
                        d = [r || ae],
                        h = pe.call(e, "type") ? e.type : e,
                        p = pe.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (
                        ((a = s = r = r || ae),
                        3 !== r.nodeType &&
                            8 !== r.nodeType &&
                            !_t.test(h + ye.event.triggered) &&
                            (h.indexOf(".") > -1 && ((p = h.split(".")), (h = p.shift()), p.sort()),
                            (c = h.indexOf(":") < 0 && "on" + h),
                            (e = e[ye.expando] ? e : new ye.Event(h, "object" == typeof e && e)),
                            (e.isTrigger = i ? 2 : 3),
                            (e.namespace = p.join(".")),
                            (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (e.result = void 0),
                            e.target || (e.target = r),
                            (t = null == t ? [e] : ye.makeArray(t, [e])),
                            (f = ye.event.special[h] || {}),
                            i || !f.trigger || !1 !== f.trigger.apply(r, t)))
                    ) {
                        if (!i && !f.noBubble && !ye.isWindow(r)) {
                            for (u = f.delegateType || h, _t.test(u + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), (s = a);
                            s === (r.ownerDocument || ae) && d.push(s.defaultView || s.parentWindow || n);
                        }
                        for (o = 0; (a = d[o++]) && !e.isPropagationStopped(); )
                            (e.type = o > 1 ? u : f.bindType || h),
                                (l = (Ie.get(a, "events") || {})[e.type] && Ie.get(a, "handle")),
                                l && l.apply(a, t),
                                (l = c && a[c]) && l.apply && qe(a) && ((e.result = l.apply(a, t)), !1 === e.result && e.preventDefault());
                        return (
                            (e.type = h),
                            i ||
                                e.isDefaultPrevented() ||
                                (f._default && !1 !== f._default.apply(d.pop(), t)) ||
                                !qe(r) ||
                                (c && ye.isFunction(r[h]) && !ye.isWindow(r) && ((s = r[c]), s && (r[c] = null), (ye.event.triggered = h), r[h](), (ye.event.triggered = void 0), s && (r[c] = s))),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    var r = ye.extend(new ye.Event(), n, { type: e, isSimulated: !0 });
                    ye.event.trigger(r, null, t);
                },
            }),
                ye.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            ye.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n) return ye.event.trigger(e, t, n, !0);
                    },
                }),
                ye.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                    ye.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                    };
                }),
                ye.fn.extend({
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                }),
                (me.focusin = "onfocusin" in n),
                me.focusin ||
                    ye.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                        var n = function (e) {
                            ye.event.simulate(t, e.target, ye.event.fix(e));
                        };
                        ye.event.special[t] = {
                            setup: function () {
                                var r = this.ownerDocument || this,
                                    i = Ie.access(r, t);
                                i || r.addEventListener(e, n, !0), Ie.access(r, t, (i || 0) + 1);
                            },
                            teardown: function () {
                                var r = this.ownerDocument || this,
                                    i = Ie.access(r, t) - 1;
                                i ? Ie.access(r, t, i) : (r.removeEventListener(e, n, !0), Ie.remove(r, t));
                            },
                        };
                    });
            var Et = n.location,
                At = ye.now(),
                jt = /\?/;
            ye.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new n.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {
                    t = void 0;
                }
                return (t && !t.getElementsByTagName("parsererror").length) || ye.error("Invalid XML: " + e), t;
            };
            var Nt = /\[\]$/,
                Mt = /\r?\n/g,
                Ht = /^(?:submit|button|image|reset|file)$/i,
                Ot = /^(?:input|select|textarea|keygen)/i;
            (ye.param = function (e, t) {
                var n,
                    r = [],
                    i = function (e, t) {
                        var n = ye.isFunction(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                if (Array.isArray(e) || (e.jquery && !ye.isPlainObject(e)))
                    ye.each(e, function () {
                        i(this.name, this.value);
                    });
                else for (n in e) Z(n, e[n], t, i);
                return r.join("&");
            }),
                ye.fn.extend({
                    serialize: function () {
                        return ye.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = ye.prop(this, "elements");
                            return e ? ye.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !ye(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !Xe.test(e));
                            })
                            .map(function (e, t) {
                                var n = ye(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? ye.map(n, function (e) {
                                          return { name: t.name, value: e.replace(Mt, "\r\n") };
                                      })
                                    : { name: t.name, value: n.replace(Mt, "\r\n") };
                            })
                            .get();
                    },
                });
            var Lt = /%20/g,
                Dt = /#.*$/,
                Pt = /([?&])_=[^&]*/,
                qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Ft = /^(?:GET|HEAD)$/,
                Rt = /^\/\//,
                Bt = {},
                $t = {},
                Wt = "*/".concat("*"),
                zt = ae.createElement("a");
            (zt.href = Et.href),
                ye.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Et.href,
                        type: "GET",
                        isLocal: It.test(Et.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": Wt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ye.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (e, t) {
                        return t ? ne(ne(e, ye.ajaxSettings), t) : ne(ye.ajaxSettings, e);
                    },
                    ajaxPrefilter: ee(Bt),
                    ajaxTransport: ee($t),
                    ajax: function (e, t) {
                        function r(e, t, r, s) {
                            var c,
                                d,
                                h,
                                x,
                                w,
                                T = t;
                            l ||
                                ((l = !0),
                                u && n.clearTimeout(u),
                                (i = void 0),
                                (a = s || ""),
                                (C.readyState = e > 0 ? 4 : 0),
                                (c = (e >= 200 && e < 300) || 304 === e),
                                r && (x = re(p, C, r)),
                                (x = ie(p, x, C, c)),
                                c
                                    ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")), w && (ye.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (ye.etag[o] = w)),
                                      204 === e || "HEAD" === p.type ? (T = "nocontent") : 304 === e ? (T = "notmodified") : ((T = x.state), (d = x.data), (h = x.error), (c = !h)))
                                    : ((h = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                                (C.status = e),
                                (C.statusText = (t || T) + ""),
                                c ? m.resolveWith(g, [d, T, C]) : m.rejectWith(g, [C, T, h]),
                                C.statusCode(b),
                                (b = void 0),
                                f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? d : h]),
                                y.fireWith(g, [C, T]),
                                f && (v.trigger("ajaxComplete", [C, p]), --ye.active || ye.event.trigger("ajaxStop")));
                        }
                        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                        var i,
                            o,
                            a,
                            s,
                            u,
                            c,
                            l,
                            f,
                            d,
                            h,
                            p = ye.ajaxSetup({}, t),
                            g = p.context || p,
                            v = p.context && (g.nodeType || g.jquery) ? ye(g) : ye.event,
                            m = ye.Deferred(),
                            y = ye.Callbacks("once memory"),
                            b = p.statusCode || {},
                            x = {},
                            w = {},
                            T = "canceled",
                            C = {
                                readyState: 0,
                                getResponseHeader: function (e) {
                                    var t;
                                    if (l) {
                                        if (!s) for (s = {}; (t = qt.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                                        t = s[e.toLowerCase()];
                                    }
                                    return null == t ? null : t;
                                },
                                getAllResponseHeaders: function () {
                                    return l ? a : null;
                                },
                                setRequestHeader: function (e, t) {
                                    return null == l && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (x[e] = t)), this;
                                },
                                overrideMimeType: function (e) {
                                    return null == l && (p.mimeType = e), this;
                                },
                                statusCode: function (e) {
                                    var t;
                                    if (e)
                                        if (l) C.always(e[C.status]);
                                        else for (t in e) b[t] = [b[t], e[t]];
                                    return this;
                                },
                                abort: function (e) {
                                    var t = e || T;
                                    return i && i.abort(t), r(0, t), this;
                                },
                            };
                        if (
                            (m.promise(C),
                            (p.url = ((e || p.url || Et.href) + "").replace(Rt, Et.protocol + "//")),
                            (p.type = t.method || t.type || p.method || p.type),
                            (p.dataTypes = (p.dataType || "*").toLowerCase().match(Oe) || [""]),
                            null == p.crossDomain)
                        ) {
                            c = ae.createElement("a");
                            try {
                                (c.href = p.url), (c.href = c.href), (p.crossDomain = zt.protocol + "//" + zt.host != c.protocol + "//" + c.host);
                            } catch (e) {
                                p.crossDomain = !0;
                            }
                        }
                        if ((p.data && p.processData && "string" != typeof p.data && (p.data = ye.param(p.data, p.traditional)), te(Bt, p, t, C), l)) return C;
                        (f = ye.event && p.global),
                            f && 0 == ye.active++ && ye.event.trigger("ajaxStart"),
                            (p.type = p.type.toUpperCase()),
                            (p.hasContent = !Ft.test(p.type)),
                            (o = p.url.replace(Dt, "")),
                            p.hasContent
                                ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+"))
                                : ((h = p.url.slice(o.length)),
                                  p.data && ((o += (jt.test(o) ? "&" : "?") + p.data), delete p.data),
                                  !1 === p.cache && ((o = o.replace(Pt, "$1")), (h = (jt.test(o) ? "&" : "?") + "_=" + At++ + h)),
                                  (p.url = o + h)),
                            p.ifModified && (ye.lastModified[o] && C.setRequestHeader("If-Modified-Since", ye.lastModified[o]), ye.etag[o] && C.setRequestHeader("If-None-Match", ye.etag[o])),
                            ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && C.setRequestHeader("Content-Type", p.contentType),
                            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : p.accepts["*"]);
                        for (d in p.headers) C.setRequestHeader(d, p.headers[d]);
                        if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || l)) return C.abort();
                        if (((T = "abort"), y.add(p.complete), C.done(p.success), C.fail(p.error), (i = te($t, p, t, C)))) {
                            if (((C.readyState = 1), f && v.trigger("ajaxSend", [C, p]), l)) return C;
                            p.async &&
                                p.timeout > 0 &&
                                (u = n.setTimeout(function () {
                                    C.abort("timeout");
                                }, p.timeout));
                            try {
                                (l = !1), i.send(x, r);
                            } catch (e) {
                                if (l) throw e;
                                r(-1, e);
                            }
                        } else r(-1, "No Transport");
                        return C;
                    },
                    getJSON: function (e, t, n) {
                        return ye.get(e, t, n, "json");
                    },
                    getScript: function (e, t) {
                        return ye.get(e, void 0, t, "script");
                    },
                }),
                ye.each(["get", "post"], function (e, t) {
                    ye[t] = function (e, n, r, i) {
                        return ye.isFunction(n) && ((i = i || r), (r = n), (n = void 0)), ye.ajax(ye.extend({ url: e, type: t, dataType: i, data: n, success: r }, ye.isPlainObject(e) && e));
                    };
                }),
                (ye._evalUrl = function (e) {
                    return ye.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
                }),
                ye.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return (
                            this[0] &&
                                (ye.isFunction(e) && (e = e.call(this[0])),
                                (t = ye(e, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && t.insertBefore(this[0]),
                                t
                                    .map(function () {
                                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                        return e;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (e) {
                        return ye.isFunction(e)
                            ? this.each(function (t) {
                                  ye(this).wrapInner(e.call(this, t));
                              })
                            : this.each(function () {
                                  var t = ye(this),
                                      n = t.contents();
                                  n.length ? n.wrapAll(e) : t.append(e);
                              });
                    },
                    wrap: function (e) {
                        var t = ye.isFunction(e);
                        return this.each(function (n) {
                            ye(this).wrapAll(t ? e.call(this, n) : e);
                        });
                    },
                    unwrap: function (e) {
                        return (
                            this.parent(e)
                                .not("body")
                                .each(function () {
                                    ye(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (ye.expr.pseudos.hidden = function (e) {
                    return !ye.expr.pseudos.visible(e);
                }),
                (ye.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }),
                (ye.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (e) {}
                });
            var Ut = { 0: 200, 1223: 204 },
                Vt = ye.ajaxSettings.xhr();
            (me.cors = !!Vt && "withCredentials" in Vt),
                (me.ajax = Vt = !!Vt),
                ye.ajaxTransport(function (e) {
                    var t, r;
                    if (me.cors || (Vt && !e.crossDomain))
                        return {
                            send: function (i, o) {
                                var a,
                                    s = e.xhr();
                                if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                                for (a in i) s.setRequestHeader(a, i[a]);
                                (t = function (e) {
                                    return function () {
                                        t &&
                                            ((t = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null),
                                            "abort" === e
                                                ? s.abort()
                                                : "error" === e
                                                ? "number" != typeof s.status
                                                    ? o(0, "error")
                                                    : o(s.status, s.statusText)
                                                : o(
                                                      Ut[s.status] || s.status,
                                                      s.statusText,
                                                      "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                      s.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (s.onload = t()),
                                    (r = s.onerror = t("error")),
                                    void 0 !== s.onabort
                                        ? (s.onabort = r)
                                        : (s.onreadystatechange = function () {
                                              4 === s.readyState &&
                                                  n.setTimeout(function () {
                                                      t && r();
                                                  });
                                          }),
                                    (t = t("abort"));
                                try {
                                    s.send((e.hasContent && e.data) || null);
                                } catch (e) {
                                    if (t) throw e;
                                }
                            },
                            abort: function () {
                                t && t();
                            },
                        };
                }),
                ye.ajaxPrefilter(function (e) {
                    e.crossDomain && (e.contents.script = !1);
                }),
                ye.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (e) {
                            return ye.globalEval(e), e;
                        },
                    },
                }),
                ye.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                }),
                ye.ajaxTransport("script", function (e) {
                    if (e.crossDomain) {
                        var t, n;
                        return {
                            send: function (r, i) {
                                (t = ye("<script>")
                                    .prop({ charset: e.scriptCharset, src: e.url })
                                    .on(
                                        "load error",
                                        (n = function (e) {
                                            t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                                        })
                                    )),
                                    ae.head.appendChild(t[0]);
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                    }
                });
            var Yt = [],
                Xt = /(=)\?(?=&|$)|\?\?/;
            ye.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Yt.pop() || ye.expando + "_" + At++;
                    return (this[e] = !0), e;
                },
            }),
                ye.ajaxPrefilter("json jsonp", function (e, t, r) {
                    var i,
                        o,
                        a,
                        s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0])
                        return (
                            (i = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                            s ? (e[s] = e[s].replace(Xt, "$1" + i)) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                            (e.converters["script json"] = function () {
                                return a || ye.error(i + " was not called"), a[0];
                            }),
                            (e.dataTypes[0] = "json"),
                            (o = n[i]),
                            (n[i] = function () {
                                a = arguments;
                            }),
                            r.always(function () {
                                void 0 === o ? ye(n).removeProp(i) : (n[i] = o), e[i] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)), a && ye.isFunction(o) && o(a[0]), (a = o = void 0);
                            }),
                            "script"
                        );
                }),
                (me.createHTMLDocument = (function () {
                    var e = ae.implementation.createHTMLDocument("").body;
                    return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
                })()),
                (ye.parseHTML = function (e, t, n) {
                    if ("string" != typeof e) return [];
                    "boolean" == typeof t && ((n = t), (t = !1));
                    var r, i, o;
                    return (
                        t || (me.createHTMLDocument ? ((t = ae.implementation.createHTMLDocument("")), (r = t.createElement("base")), (r.href = ae.location.href), t.head.appendChild(r)) : (t = ae)),
                        (i = Ee.exec(e)),
                        (o = !n && []),
                        i ? [t.createElement(i[1])] : ((i = S([e], t, o)), o && o.length && ye(o).remove(), ye.merge([], i.childNodes))
                    );
                }),
                (ye.fn.load = function (e, t, n) {
                    var r,
                        i,
                        o,
                        a = this,
                        s = e.indexOf(" ");
                    return (
                        s > -1 && ((r = G(e.slice(s))), (e = e.slice(0, s))),
                        ye.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                        a.length > 0 &&
                            ye
                                .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                                .done(function (e) {
                                    (o = arguments), a.html(r ? ye("<div>").append(ye.parseHTML(e)).find(r) : e);
                                })
                                .always(
                                    n &&
                                        function (e, t) {
                                            a.each(function () {
                                                n.apply(this, o || [e.responseText, t, e]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    ye.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }),
                (ye.expr.pseudos.animated = function (e) {
                    return ye.grep(ye.timers, function (t) {
                        return e === t.elem;
                    }).length;
                }),
                (ye.offset = {
                    setOffset: function (e, t, n) {
                        var r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            c,
                            l = ye.css(e, "position"),
                            f = ye(e),
                            d = {};
                        "static" === l && (e.style.position = "relative"),
                            (s = f.offset()),
                            (o = ye.css(e, "top")),
                            (u = ye.css(e, "left")),
                            (c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1),
                            c ? ((r = f.position()), (a = r.top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                            ye.isFunction(t) && (t = t.call(e, n, ye.extend({}, s))),
                            null != t.top && (d.top = t.top - s.top + a),
                            null != t.left && (d.left = t.left - s.left + i),
                            "using" in t ? t.using.call(e, d) : f.css(d);
                    },
                }),
                ye.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e
                                ? this
                                : this.each(function (t) {
                                      ye.offset.setOffset(this, e, t);
                                  });
                        var t,
                            n,
                            r,
                            i,
                            o = this[0];
                        return o
                            ? o.getClientRects().length
                                ? ((r = o.getBoundingClientRect()), (t = o.ownerDocument), (n = t.documentElement), (i = t.defaultView), { top: r.top + i.pageYOffset - n.clientTop, left: r.left + i.pageXOffset - n.clientLeft })
                                : { top: 0, left: 0 }
                            : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var e,
                                t,
                                n = this[0],
                                r = { top: 0, left: 0 };
                            return (
                                "fixed" === ye.css(n, "position")
                                    ? (t = n.getBoundingClientRect())
                                    : ((e = this.offsetParent()), (t = this.offset()), u(e[0], "html") || (r = e.offset()), (r = { top: r.top + ye.css(e[0], "borderTopWidth", !0), left: r.left + ye.css(e[0], "borderLeftWidth", !0) })),
                                { top: t.top - r.top - ye.css(n, "marginTop", !0), left: t.left - r.left - ye.css(n, "marginLeft", !0) }
                            );
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === ye.css(e, "position"); ) e = e.offsetParent;
                            return e || Ze;
                        });
                    },
                }),
                ye.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                    var n = "pageYOffset" === t;
                    ye.fn[e] = function (r) {
                        return Pe(
                            this,
                            function (e, r, i) {
                                var o;
                                if ((ye.isWindow(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                            },
                            e,
                            r,
                            arguments.length
                        );
                    };
                }),
                ye.each(["top", "left"], function (e, t) {
                    ye.cssHooks[t] = q(me.pixelPosition, function (e, n) {
                        if (n) return (n = P(e, t)), ct.test(n) ? ye(e).position()[t] + "px" : n;
                    });
                }),
                ye.each({ Height: "height", Width: "width" }, function (e, t) {
                    ye.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                        ye.fn[r] = function (i, o) {
                            var a = arguments.length && (n || "boolean" != typeof i),
                                s = n || (!0 === i || !0 === o ? "margin" : "border");
                            return Pe(
                                this,
                                function (t, n, i) {
                                    var o;
                                    return ye.isWindow(t)
                                        ? 0 === r.indexOf("outer")
                                            ? t["inner" + e]
                                            : t.document.documentElement["client" + e]
                                        : 9 === t.nodeType
                                        ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                        : void 0 === i
                                        ? ye.css(t, n, s)
                                        : ye.style(t, n, i, s);
                                },
                                t,
                                a ? i : void 0,
                                a
                            );
                        };
                    });
                }),
                ye.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function (e, t, n, r) {
                        return this.on(t, e, n, r);
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                }),
                (ye.holdReady = function (e) {
                    e ? ye.readyWait++ : ye.ready(!0);
                }),
                (ye.isArray = Array.isArray),
                (ye.parseJSON = JSON.parse),
                (ye.nodeName = u),
                (r = []),
                void 0 !==
                    (i = function () {
                        return ye;
                    }.apply(t, r)) && (e.exports = i);
            var Jt = n.jQuery,
                Kt = n.$;
            return (
                (ye.noConflict = function (e) {
                    return n.$ === ye && (n.$ = Kt), e && n.jQuery === ye && (n.jQuery = Jt), ye;
                }),
                o || (n.jQuery = n.$ = ye),
                ye
            );
        });
    },
    function (e, t, n) {
        (function (r) {
            var i, o;
            !(function (a) {
                var s = ("object" == typeof self && self.self === self && self) || ("object" == typeof r && r.global === r && r);
                (i = [n(21), n(0), t]),
                    void 0 !==
                        (o = function (e, t, n) {
                            s.Backbone = a(s, n, e, t);
                        }.apply(t, i)) && (e.exports = o);
            })(function (e, t, n, r) {
                var i = e.Backbone,
                    o = Array.prototype.slice;
                (t.VERSION = "1.3.3"),
                    (t.$ = r),
                    (t.noConflict = function () {
                        return (e.Backbone = i), this;
                    }),
                    (t.emulateHTTP = !1),
                    (t.emulateJSON = !1);
                var a = function (e, t, r) {
                        switch (e) {
                            case 1:
                                return function () {
                                    return n[t](this[r]);
                                };
                            case 2:
                                return function (e) {
                                    return n[t](this[r], e);
                                };
                            case 3:
                                return function (e, i) {
                                    return n[t](this[r], u(e, this), i);
                                };
                            case 4:
                                return function (e, i, o) {
                                    return n[t](this[r], u(e, this), i, o);
                                };
                            default:
                                return function () {
                                    var e = o.call(arguments);
                                    return e.unshift(this[r]), n[t].apply(n, e);
                                };
                        }
                    },
                    s = function (e, t, r) {
                        n.each(t, function (t, i) {
                            n[i] && (e.prototype[i] = a(t, i, r));
                        });
                    },
                    u = function (e, t) {
                        return n.isFunction(e)
                            ? e
                            : n.isObject(e) && !t._isModel(e)
                            ? c(e)
                            : n.isString(e)
                            ? function (t) {
                                  return t.get(e);
                              }
                            : e;
                    },
                    c = function (e) {
                        var t = n.matches(e);
                        return function (e) {
                            return t(e.attributes);
                        };
                    },
                    l = (t.Events = {}),
                    f = /\s+/,
                    d = function (e, t, r, i, o) {
                        var a,
                            s = 0;
                        if (r && "object" == typeof r) {
                            void 0 !== i && "context" in o && void 0 === o.context && (o.context = i);
                            for (a = n.keys(r); s < a.length; s++) t = d(e, t, a[s], r[a[s]], o);
                        } else if (r && f.test(r)) for (a = r.split(f); s < a.length; s++) t = e(t, a[s], i, o);
                        else t = e(t, r, i, o);
                        return t;
                    };
                l.on = function (e, t, n) {
                    return h(this, e, t, n);
                };
                var h = function (e, t, n, r, i) {
                    return (e._events = d(p, e._events || {}, t, n, { context: r, ctx: e, listening: i })), i && ((e._listeners || (e._listeners = {}))[i.id] = i), e;
                };
                l.listenTo = function (e, t, r) {
                    if (!e) return this;
                    var i = e._listenId || (e._listenId = n.uniqueId("l")),
                        o = this._listeningTo || (this._listeningTo = {}),
                        a = o[i];
                    if (!a) {
                        var s = this._listenId || (this._listenId = n.uniqueId("l"));
                        a = o[i] = { obj: e, objId: i, id: s, listeningTo: o, count: 0 };
                    }
                    return h(e, t, r, this, a), this;
                };
                var p = function (e, t, n, r) {
                    if (n) {
                        var i = e[t] || (e[t] = []),
                            o = r.context,
                            a = r.ctx,
                            s = r.listening;
                        s && s.count++, i.push({ callback: n, context: o, ctx: o || a, listening: s });
                    }
                    return e;
                };
                (l.off = function (e, t, n) {
                    return this._events ? ((this._events = d(g, this._events, e, t, { context: n, listeners: this._listeners })), this) : this;
                }),
                    (l.stopListening = function (e, t, r) {
                        var i = this._listeningTo;
                        if (!i) return this;
                        for (var o = e ? [e._listenId] : n.keys(i), a = 0; a < o.length; a++) {
                            var s = i[o[a]];
                            if (!s) break;
                            s.obj.off(t, r, this);
                        }
                        return this;
                    });
                var g = function (e, t, r, i) {
                    if (e) {
                        var o,
                            a = 0,
                            s = i.context,
                            u = i.listeners;
                        if (t || r || s) {
                            for (var c = t ? [t] : n.keys(e); a < c.length; a++) {
                                t = c[a];
                                var l = e[t];
                                if (!l) break;
                                for (var f = [], d = 0; d < l.length; d++) {
                                    var h = l[d];
                                    (r && r !== h.callback && r !== h.callback._callback) || (s && s !== h.context) ? f.push(h) : (o = h.listening) && 0 == --o.count && (delete u[o.id], delete o.listeningTo[o.objId]);
                                }
                                f.length ? (e[t] = f) : delete e[t];
                            }
                            return e;
                        }
                        for (var p = n.keys(u); a < p.length; a++) (o = u[p[a]]), delete u[o.id], delete o.listeningTo[o.objId];
                    }
                };
                (l.once = function (e, t, r) {
                    var i = d(v, {}, e, t, n.bind(this.off, this));
                    return "string" == typeof e && null == r && (t = void 0), this.on(i, t, r);
                }),
                    (l.listenToOnce = function (e, t, r) {
                        var i = d(v, {}, t, r, n.bind(this.stopListening, this, e));
                        return this.listenTo(e, i);
                    });
                var v = function (e, t, r, i) {
                    if (r) {
                        var o = (e[t] = n.once(function () {
                            i(t, o), r.apply(this, arguments);
                        }));
                        o._callback = r;
                    }
                    return e;
                };
                l.trigger = function (e) {
                    if (!this._events) return this;
                    for (var t = Math.max(0, arguments.length - 1), n = Array(t), r = 0; r < t; r++) n[r] = arguments[r + 1];
                    return d(m, this._events, e, void 0, n), this;
                };
                var m = function (e, t, n, r) {
                        if (e) {
                            var i = e[t],
                                o = e.all;
                            i && o && (o = o.slice()), i && y(i, r), o && y(o, [t].concat(r));
                        }
                        return e;
                    },
                    y = function (e, t) {
                        var n,
                            r = -1,
                            i = e.length,
                            o = t[0],
                            a = t[1],
                            s = t[2];
                        switch (t.length) {
                            case 0:
                                for (; ++r < i; ) (n = e[r]).callback.call(n.ctx);
                                return;
                            case 1:
                                for (; ++r < i; ) (n = e[r]).callback.call(n.ctx, o);
                                return;
                            case 2:
                                for (; ++r < i; ) (n = e[r]).callback.call(n.ctx, o, a);
                                return;
                            case 3:
                                for (; ++r < i; ) (n = e[r]).callback.call(n.ctx, o, a, s);
                                return;
                            default:
                                for (; ++r < i; ) (n = e[r]).callback.apply(n.ctx, t);
                                return;
                        }
                    };
                (l.bind = l.on), (l.unbind = l.off), n.extend(t, l);
                var b = (t.Model = function (e, t) {
                    var r = e || {};
                    t || (t = {}), (this.cid = n.uniqueId(this.cidPrefix)), (this.attributes = {}), t.collection && (this.collection = t.collection), t.parse && (r = this.parse(r, t) || {});
                    var i = n.result(this, "defaults");
                    (r = n.defaults(n.extend({}, i, r), i)), this.set(r, t), (this.changed = {}), this.initialize.apply(this, arguments);
                });
                n.extend(b.prototype, l, {
                    changed: null,
                    validationError: null,
                    idAttribute: "id",
                    cidPrefix: "c",
                    initialize: function () {},
                    toJSON: function (e) {
                        return n.clone(this.attributes);
                    },
                    sync: function () {
                        return t.sync.apply(this, arguments);
                    },
                    get: function (e) {
                        return this.attributes[e];
                    },
                    escape: function (e) {
                        return n.escape(this.get(e));
                    },
                    has: function (e) {
                        return null != this.get(e);
                    },
                    matches: function (e) {
                        return !!n.iteratee(e, this)(this.attributes);
                    },
                    set: function (e, t, r) {
                        if (null == e) return this;
                        var i;
                        if (("object" == typeof e ? ((i = e), (r = t)) : ((i = {})[e] = t), r || (r = {}), !this._validate(i, r))) return !1;
                        var o = r.unset,
                            a = r.silent,
                            s = [],
                            u = this._changing;
                        (this._changing = !0), u || ((this._previousAttributes = n.clone(this.attributes)), (this.changed = {}));
                        var c = this.attributes,
                            l = this.changed,
                            f = this._previousAttributes;
                        for (var d in i) (t = i[d]), n.isEqual(c[d], t) || s.push(d), n.isEqual(f[d], t) ? delete l[d] : (l[d] = t), o ? delete c[d] : (c[d] = t);
                        if ((this.idAttribute in i && (this.id = this.get(this.idAttribute)), !a)) {
                            s.length && (this._pending = r);
                            for (var h = 0; h < s.length; h++) this.trigger("change:" + s[h], this, c[s[h]], r);
                        }
                        if (u) return this;
                        if (!a) for (; this._pending; ) (r = this._pending), (this._pending = !1), this.trigger("change", this, r);
                        return (this._pending = !1), (this._changing = !1), this;
                    },
                    unset: function (e, t) {
                        return this.set(e, void 0, n.extend({}, t, { unset: !0 }));
                    },
                    clear: function (e) {
                        var t = {};
                        for (var r in this.attributes) t[r] = void 0;
                        return this.set(t, n.extend({}, e, { unset: !0 }));
                    },
                    hasChanged: function (e) {
                        return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e);
                    },
                    changedAttributes: function (e) {
                        if (!e) return !!this.hasChanged() && n.clone(this.changed);
                        var t = this._changing ? this._previousAttributes : this.attributes,
                            r = {};
                        for (var i in e) {
                            var o = e[i];
                            n.isEqual(t[i], o) || (r[i] = o);
                        }
                        return !!n.size(r) && r;
                    },
                    previous: function (e) {
                        return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
                    },
                    previousAttributes: function () {
                        return n.clone(this._previousAttributes);
                    },
                    fetch: function (e) {
                        e = n.extend({ parse: !0 }, e);
                        var t = this,
                            r = e.success;
                        return (
                            (e.success = function (n) {
                                var i = e.parse ? t.parse(n, e) : n;
                                if (!t.set(i, e)) return !1;
                                r && r.call(e.context, t, n, e), t.trigger("sync", t, n, e);
                            }),
                            F(this, e),
                            this.sync("read", this, e)
                        );
                    },
                    save: function (e, t, r) {
                        var i;
                        null == e || "object" == typeof e ? ((i = e), (r = t)) : ((i = {})[e] = t), (r = n.extend({ validate: !0, parse: !0 }, r));
                        var o = r.wait;
                        if (i && !o) {
                            if (!this.set(i, r)) return !1;
                        } else if (!this._validate(i, r)) return !1;
                        var a = this,
                            s = r.success,
                            u = this.attributes;
                        (r.success = function (e) {
                            a.attributes = u;
                            var t = r.parse ? a.parse(e, r) : e;
                            if ((o && (t = n.extend({}, i, t)), t && !a.set(t, r))) return !1;
                            s && s.call(r.context, a, e, r), a.trigger("sync", a, e, r);
                        }),
                            F(this, r),
                            i && o && (this.attributes = n.extend({}, u, i));
                        var c = this.isNew() ? "create" : r.patch ? "patch" : "update";
                        "patch" !== c || r.attrs || (r.attrs = i);
                        var l = this.sync(c, this, r);
                        return (this.attributes = u), l;
                    },
                    destroy: function (e) {
                        e = e ? n.clone(e) : {};
                        var t = this,
                            r = e.success,
                            i = e.wait,
                            o = function () {
                                t.stopListening(), t.trigger("destroy", t, t.collection, e);
                            };
                        e.success = function (n) {
                            i && o(), r && r.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e);
                        };
                        var a = !1;
                        return this.isNew() ? n.defer(e.success) : (F(this, e), (a = this.sync("delete", this, e))), i || o(), a;
                    },
                    url: function () {
                        var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || I();
                        if (this.isNew()) return e;
                        var t = this.get(this.idAttribute);
                        return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t);
                    },
                    parse: function (e, t) {
                        return e;
                    },
                    clone: function () {
                        return new this.constructor(this.attributes);
                    },
                    isNew: function () {
                        return !this.has(this.idAttribute);
                    },
                    isValid: function (e) {
                        return this._validate({}, n.extend({}, e, { validate: !0 }));
                    },
                    _validate: function (e, t) {
                        if (!t.validate || !this.validate) return !0;
                        e = n.extend({}, this.attributes, e);
                        var r = (this.validationError = this.validate(e, t) || null);
                        return !r || (this.trigger("invalid", this, r, n.extend(t, { validationError: r })), !1);
                    },
                }),
                    s(b, { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 }, "attributes");
                var x = (t.Collection = function (e, t) {
                        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({ silent: !0 }, t));
                    }),
                    w = { add: !0, remove: !0, merge: !0 },
                    T = { add: !0, remove: !1 },
                    C = function (e, t, n) {
                        n = Math.min(Math.max(n, 0), e.length);
                        var r,
                            i = Array(e.length - n),
                            o = t.length;
                        for (r = 0; r < i.length; r++) i[r] = e[r + n];
                        for (r = 0; r < o; r++) e[r + n] = t[r];
                        for (r = 0; r < i.length; r++) e[r + o + n] = i[r];
                    };
                n.extend(x.prototype, l, {
                    model: b,
                    initialize: function () {},
                    toJSON: function (e) {
                        return this.map(function (t) {
                            return t.toJSON(e);
                        });
                    },
                    sync: function () {
                        return t.sync.apply(this, arguments);
                    },
                    add: function (e, t) {
                        return this.set(e, n.extend({ merge: !1 }, t, T));
                    },
                    remove: function (e, t) {
                        t = n.extend({}, t);
                        var r = !n.isArray(e);
                        e = r ? [e] : e.slice();
                        var i = this._removeModels(e, t);
                        return !t.silent && i.length && ((t.changes = { added: [], merged: [], removed: i }), this.trigger("update", this, t)), r ? i[0] : i;
                    },
                    set: function (e, t) {
                        if (null != e) {
                            (t = n.extend({}, w, t)), t.parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                            var r = !n.isArray(e);
                            e = r ? [e] : e.slice();
                            var i = t.at;
                            null != i && (i = +i), i > this.length && (i = this.length), i < 0 && (i += this.length + 1);
                            var o,
                                a,
                                s = [],
                                u = [],
                                c = [],
                                l = [],
                                f = {},
                                d = t.add,
                                h = t.merge,
                                p = t.remove,
                                g = !1,
                                v = this.comparator && null == i && !1 !== t.sort,
                                m = n.isString(this.comparator) ? this.comparator : null;
                            for (a = 0; a < e.length; a++) {
                                o = e[a];
                                var y = this.get(o);
                                if (y) {
                                    if (h && o !== y) {
                                        var b = this._isModel(o) ? o.attributes : o;
                                        t.parse && (b = y.parse(b, t)), y.set(b, t), c.push(y), v && !g && (g = y.hasChanged(m));
                                    }
                                    f[y.cid] || ((f[y.cid] = !0), s.push(y)), (e[a] = y);
                                } else d && (o = e[a] = this._prepareModel(o, t)) && (u.push(o), this._addReference(o, t), (f[o.cid] = !0), s.push(o));
                            }
                            if (p) {
                                for (a = 0; a < this.length; a++) (o = this.models[a]), f[o.cid] || l.push(o);
                                l.length && this._removeModels(l, t);
                            }
                            var x = !1,
                                T = !v && d && p;
                            if (
                                (s.length && T
                                    ? ((x =
                                          this.length !== s.length ||
                                          n.some(this.models, function (e, t) {
                                              return e !== s[t];
                                          })),
                                      (this.models.length = 0),
                                      C(this.models, s, 0),
                                      (this.length = this.models.length))
                                    : u.length && (v && (g = !0), C(this.models, u, null == i ? this.length : i), (this.length = this.models.length)),
                                g && this.sort({ silent: !0 }),
                                !t.silent)
                            ) {
                                for (a = 0; a < u.length; a++) null != i && (t.index = i + a), (o = u[a]), o.trigger("add", o, this, t);
                                (g || x) && this.trigger("sort", this, t), (u.length || l.length || c.length) && ((t.changes = { added: u, removed: l, merged: c }), this.trigger("update", this, t));
                            }
                            return r ? e[0] : e;
                        }
                    },
                    reset: function (e, t) {
                        t = t ? n.clone(t) : {};
                        for (var r = 0; r < this.models.length; r++) this._removeReference(this.models[r], t);
                        return (t.previousModels = this.models), this._reset(), (e = this.add(e, n.extend({ silent: !0 }, t))), t.silent || this.trigger("reset", this, t), e;
                    },
                    push: function (e, t) {
                        return this.add(e, n.extend({ at: this.length }, t));
                    },
                    pop: function (e) {
                        var t = this.at(this.length - 1);
                        return this.remove(t, e);
                    },
                    unshift: function (e, t) {
                        return this.add(e, n.extend({ at: 0 }, t));
                    },
                    shift: function (e) {
                        var t = this.at(0);
                        return this.remove(t, e);
                    },
                    slice: function () {
                        return o.apply(this.models, arguments);
                    },
                    get: function (e) {
                        if (null != e) return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || (e.cid && this._byId[e.cid]);
                    },
                    has: function (e) {
                        return null != this.get(e);
                    },
                    at: function (e) {
                        return e < 0 && (e += this.length), this.models[e];
                    },
                    where: function (e, t) {
                        return this[t ? "find" : "filter"](e);
                    },
                    findWhere: function (e) {
                        return this.where(e, !0);
                    },
                    sort: function (e) {
                        var t = this.comparator;
                        if (!t) throw new Error("Cannot sort a set without a comparator");
                        e || (e = {});
                        var r = t.length;
                        return n.isFunction(t) && (t = n.bind(t, this)), 1 === r || n.isString(t) ? (this.models = this.sortBy(t)) : this.models.sort(t), e.silent || this.trigger("sort", this, e), this;
                    },
                    pluck: function (e) {
                        return this.map(e + "");
                    },
                    fetch: function (e) {
                        e = n.extend({ parse: !0 }, e);
                        var t = e.success,
                            r = this;
                        return (
                            (e.success = function (n) {
                                var i = e.reset ? "reset" : "set";
                                r[i](n, e), t && t.call(e.context, r, n, e), r.trigger("sync", r, n, e);
                            }),
                            F(this, e),
                            this.sync("read", this, e)
                        );
                    },
                    create: function (e, t) {
                        t = t ? n.clone(t) : {};
                        var r = t.wait;
                        if (!(e = this._prepareModel(e, t))) return !1;
                        r || this.add(e, t);
                        var i = this,
                            o = t.success;
                        return (
                            (t.success = function (e, t, n) {
                                r && i.add(e, n), o && o.call(n.context, e, t, n);
                            }),
                            e.save(null, t),
                            e
                        );
                    },
                    parse: function (e, t) {
                        return e;
                    },
                    clone: function () {
                        return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
                    },
                    modelId: function (e) {
                        return e[this.model.prototype.idAttribute || "id"];
                    },
                    _reset: function () {
                        (this.length = 0), (this.models = []), (this._byId = {});
                    },
                    _prepareModel: function (e, t) {
                        if (this._isModel(e)) return e.collection || (e.collection = this), e;
                        (t = t ? n.clone(t) : {}), (t.collection = this);
                        var r = new this.model(e, t);
                        return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r;
                    },
                    _removeModels: function (e, t) {
                        for (var n = [], r = 0; r < e.length; r++) {
                            var i = this.get(e[r]);
                            if (i) {
                                var o = this.indexOf(i);
                                this.models.splice(o, 1), this.length--, delete this._byId[i.cid];
                                var a = this.modelId(i.attributes);
                                null != a && delete this._byId[a], t.silent || ((t.index = o), i.trigger("remove", i, this, t)), n.push(i), this._removeReference(i, t);
                            }
                        }
                        return n;
                    },
                    _isModel: function (e) {
                        return e instanceof b;
                    },
                    _addReference: function (e, t) {
                        this._byId[e.cid] = e;
                        var n = this.modelId(e.attributes);
                        null != n && (this._byId[n] = e), e.on("all", this._onModelEvent, this);
                    },
                    _removeReference: function (e, t) {
                        delete this._byId[e.cid];
                        var n = this.modelId(e.attributes);
                        null != n && delete this._byId[n], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
                    },
                    _onModelEvent: function (e, t, n, r) {
                        if (t) {
                            if (("add" === e || "remove" === e) && n !== this) return;
                            if (("destroy" === e && this.remove(t, r), "change" === e)) {
                                var i = this.modelId(t.previousAttributes()),
                                    o = this.modelId(t.attributes);
                                i !== o && (null != i && delete this._byId[i], null != o && (this._byId[o] = t));
                            }
                        }
                        this.trigger.apply(this, arguments);
                    },
                }),
                    s(
                        x,
                        {
                            forEach: 3,
                            each: 3,
                            map: 3,
                            collect: 3,
                            reduce: 0,
                            foldl: 0,
                            inject: 0,
                            reduceRight: 0,
                            foldr: 0,
                            find: 3,
                            detect: 3,
                            filter: 3,
                            select: 3,
                            reject: 3,
                            every: 3,
                            all: 3,
                            some: 3,
                            any: 3,
                            include: 3,
                            includes: 3,
                            contains: 3,
                            invoke: 0,
                            max: 3,
                            min: 3,
                            toArray: 1,
                            size: 1,
                            first: 3,
                            head: 3,
                            take: 3,
                            initial: 3,
                            rest: 3,
                            tail: 3,
                            drop: 3,
                            last: 3,
                            without: 0,
                            difference: 0,
                            indexOf: 3,
                            shuffle: 1,
                            lastIndexOf: 3,
                            isEmpty: 1,
                            chain: 1,
                            sample: 3,
                            partition: 3,
                            groupBy: 3,
                            countBy: 3,
                            sortBy: 3,
                            indexBy: 3,
                            findIndex: 3,
                            findLastIndex: 3,
                        },
                        "models"
                    );
                var S = (t.View = function (e) {
                        (this.cid = n.uniqueId("view")), n.extend(this, n.pick(e, _)), this._ensureElement(), this.initialize.apply(this, arguments);
                    }),
                    k = /^(\S+)\s*(.*)$/,
                    _ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                n.extend(S.prototype, l, {
                    tagName: "div",
                    $: function (e) {
                        return this.$el.find(e);
                    },
                    initialize: function () {},
                    render: function () {
                        return this;
                    },
                    remove: function () {
                        return this._removeElement(), this.stopListening(), this;
                    },
                    _removeElement: function () {
                        this.$el.remove();
                    },
                    setElement: function (e) {
                        return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this;
                    },
                    _setElement: function (e) {
                        (this.$el = e instanceof t.$ ? e : t.$(e)), (this.el = this.$el[0]);
                    },
                    delegateEvents: function (e) {
                        if ((e || (e = n.result(this, "events")), !e)) return this;
                        this.undelegateEvents();
                        for (var t in e) {
                            var r = e[t];
                            if ((n.isFunction(r) || (r = this[r]), r)) {
                                var i = t.match(k);
                                this.delegate(i[1], i[2], n.bind(r, this));
                            }
                        }
                        return this;
                    },
                    delegate: function (e, t, n) {
                        return this.$el.on(e + ".delegateEvents" + this.cid, t, n), this;
                    },
                    undelegateEvents: function () {
                        return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
                    },
                    undelegate: function (e, t, n) {
                        return this.$el.off(e + ".delegateEvents" + this.cid, t, n), this;
                    },
                    _createElement: function (e) {
                        return document.createElement(e);
                    },
                    _ensureElement: function () {
                        if (this.el) this.setElement(n.result(this, "el"));
                        else {
                            var e = n.extend({}, n.result(this, "attributes"));
                            this.id && (e.id = n.result(this, "id")), this.className && (e.class = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(e);
                        }
                    },
                    _setAttributes: function (e) {
                        this.$el.attr(e);
                    },
                }),
                    (t.sync = function (e, r, i) {
                        var o = E[e];
                        n.defaults(i || (i = {}), { emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON });
                        var a = { type: o, dataType: "json" };
                        if (
                            (i.url || (a.url = n.result(r, "url") || I()),
                            null != i.data || !r || ("create" !== e && "update" !== e && "patch" !== e) || ((a.contentType = "application/json"), (a.data = JSON.stringify(i.attrs || r.toJSON(i)))),
                            i.emulateJSON && ((a.contentType = "application/x-www-form-urlencoded"), (a.data = a.data ? { model: a.data } : {})),
                            i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o))
                        ) {
                            (a.type = "POST"), i.emulateJSON && (a.data._method = o);
                            var s = i.beforeSend;
                            i.beforeSend = function (e) {
                                if ((e.setRequestHeader("X-HTTP-Method-Override", o), s)) return s.apply(this, arguments);
                            };
                        }
                        "GET" === a.type || i.emulateJSON || (a.processData = !1);
                        var u = i.error;
                        i.error = function (e, t, n) {
                            (i.textStatus = t), (i.errorThrown = n), u && u.call(i.context, e, t, n);
                        };
                        var c = (i.xhr = t.ajax(n.extend(a, i)));
                        return r.trigger("request", r, c, i), c;
                    });
                var E = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
                t.ajax = function () {
                    return t.$.ajax.apply(t.$, arguments);
                };
                var A = (t.Router = function (e) {
                        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
                    }),
                    j = /\((.*?)\)/g,
                    N = /(\(\?)?:\w+/g,
                    M = /\*\w+/g,
                    H = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                n.extend(A.prototype, l, {
                    initialize: function () {},
                    route: function (e, r, i) {
                        n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && ((i = r), (r = "")), i || (i = this[r]);
                        var o = this;
                        return (
                            t.history.route(e, function (n) {
                                var a = o._extractParameters(e, n);
                                !1 !== o.execute(i, a, r) && (o.trigger.apply(o, ["route:" + r].concat(a)), o.trigger("route", r, a), t.history.trigger("route", o, r, a));
                            }),
                            this
                        );
                    },
                    execute: function (e, t, n) {
                        e && e.apply(this, t);
                    },
                    navigate: function (e, n) {
                        return t.history.navigate(e, n), this;
                    },
                    _bindRoutes: function () {
                        if (this.routes) {
                            this.routes = n.result(this, "routes");
                            for (var e, t = n.keys(this.routes); null != (e = t.pop()); ) this.route(e, this.routes[e]);
                        }
                    },
                    _routeToRegExp: function (e) {
                        return (
                            (e = e
                                .replace(H, "\\$&")
                                .replace(j, "(?:$1)?")
                                .replace(N, function (e, t) {
                                    return t ? e : "([^/?]+)";
                                })
                                .replace(M, "([^?]*?)")),
                            new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                        );
                    },
                    _extractParameters: function (e, t) {
                        var r = e.exec(t).slice(1);
                        return n.map(r, function (e, t) {
                            return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null;
                        });
                    },
                });
                var O = (t.History = function () {
                        (this.handlers = []), (this.checkUrl = n.bind(this.checkUrl, this)), "undefined" != typeof window && ((this.location = window.location), (this.history = window.history));
                    }),
                    L = /^[#\/]|\s+$/g,
                    D = /^\/+|\/+$/g,
                    P = /#.*$/;
                (O.started = !1),
                    n.extend(O.prototype, l, {
                        interval: 50,
                        atRoot: function () {
                            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
                        },
                        matchRoot: function () {
                            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
                        },
                        decodeFragment: function (e) {
                            return decodeURI(e.replace(/%25/g, "%2525"));
                        },
                        getSearch: function () {
                            var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
                            return e ? e[0] : "";
                        },
                        getHash: function (e) {
                            var t = (e || this).location.href.match(/#(.*)$/);
                            return t ? t[1] : "";
                        },
                        getPath: function () {
                            var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                            return "/" === e.charAt(0) ? e.slice(1) : e;
                        },
                        getFragment: function (e) {
                            return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(L, "");
                        },
                        start: function (e) {
                            if (O.started) throw new Error("Backbone.history has already been started");
                            if (
                                ((O.started = !0),
                                (this.options = n.extend({ root: "/" }, this.options, e)),
                                (this.root = this.options.root),
                                (this._wantsHashChange = !1 !== this.options.hashChange),
                                (this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7)),
                                (this._useHashChange = this._wantsHashChange && this._hasHashChange),
                                (this._wantsPushState = !!this.options.pushState),
                                (this._hasPushState = !(!this.history || !this.history.pushState)),
                                (this._usePushState = this._wantsPushState && this._hasPushState),
                                (this.fragment = this.getFragment()),
                                (this.root = ("/" + this.root + "/").replace(D, "/")),
                                this._wantsHashChange && this._wantsPushState)
                            ) {
                                if (!this._hasPushState && !this.atRoot()) {
                                    var t = this.root.slice(0, -1) || "/";
                                    return this.location.replace(t + "#" + this.getPath()), !0;
                                }
                                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
                            }
                            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                                (this.iframe = document.createElement("iframe")), (this.iframe.src = "javascript:0"), (this.iframe.style.display = "none"), (this.iframe.tabIndex = -1);
                                var r = document.body,
                                    i = r.insertBefore(this.iframe, r.firstChild).contentWindow;
                                i.document.open(), i.document.close(), (i.location.hash = "#" + this.fragment);
                            }
                            var o =
                                window.addEventListener ||
                                function (e, t) {
                                    return attachEvent("on" + e, t);
                                };
                            if (
                                (this._usePushState
                                    ? o("popstate", this.checkUrl, !1)
                                    : this._useHashChange && !this.iframe
                                    ? o("hashchange", this.checkUrl, !1)
                                    : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                                !this.options.silent)
                            )
                                return this.loadUrl();
                        },
                        stop: function () {
                            var e =
                                window.removeEventListener ||
                                function (e, t) {
                                    return detachEvent("on" + e, t);
                                };
                            this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1),
                                this.iframe && (document.body.removeChild(this.iframe), (this.iframe = null)),
                                this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                                (O.started = !1);
                        },
                        route: function (e, t) {
                            this.handlers.unshift({ route: e, callback: t });
                        },
                        checkUrl: function (e) {
                            var t = this.getFragment();
                            if ((t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment)) return !1;
                            this.iframe && this.navigate(t), this.loadUrl();
                        },
                        loadUrl: function (e) {
                            return (
                                !!this.matchRoot() &&
                                ((e = this.fragment = this.getFragment(e)),
                                n.some(this.handlers, function (t) {
                                    if (t.route.test(e)) return t.callback(e), !0;
                                }))
                            );
                        },
                        navigate: function (e, t) {
                            if (!O.started) return !1;
                            (t && !0 !== t) || (t = { trigger: !!t }), (e = this.getFragment(e || ""));
                            var n = this.root;
                            ("" !== e && "?" !== e.charAt(0)) || (n = n.slice(0, -1) || "/");
                            var r = n + e;
                            if (((e = this.decodeFragment(e.replace(P, ""))), this.fragment !== e)) {
                                if (((this.fragment = e), this._usePushState)) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, r);
                                else {
                                    if (!this._wantsHashChange) return this.location.assign(r);
                                    if ((this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow))) {
                                        var i = this.iframe.contentWindow;
                                        t.replace || (i.document.open(), i.document.close()), this._updateHash(i.location, e, t.replace);
                                    }
                                }
                                return t.trigger ? this.loadUrl(e) : void 0;
                            }
                        },
                        _updateHash: function (e, t, n) {
                            if (n) {
                                var r = e.href.replace(/(javascript:|#).*$/, "");
                                e.replace(r + "#" + t);
                            } else e.hash = "#" + t;
                        },
                    }),
                    (t.history = new O());
                var q = function (e, t) {
                    var r,
                        i = this;
                    return (
                        (r =
                            e && n.has(e, "constructor")
                                ? e.constructor
                                : function () {
                                      return i.apply(this, arguments);
                                  }),
                        n.extend(r, i, t),
                        (r.prototype = n.create(i.prototype, e)),
                        (r.prototype.constructor = r),
                        (r.__super__ = i.prototype),
                        r
                    );
                };
                b.extend = x.extend = A.extend = S.extend = O.extend = q;
                var I = function () {
                        throw new Error('A "url" property or function must be specified');
                    },
                    F = function (e, t) {
                        var n = t.error;
                        t.error = function (r) {
                            n && n.call(t.context, e, r, t), e.trigger("error", e, r, t);
                        };
                    };
                return t;
            });
        }.call(t, n(20)));
    },
    function (e, t, n) {
        "use strict";
        function r() {
            var e = /iOS|iPhone/g.test(navigator.userAgent);
            return /Android/g.test(navigator.userAgent) || e;
        }
        var i = n(0),
            o = n(5);
        i(function () {
            var e,
                t,
                n = document.querySelectorAll(".balance-text");
            i(window).on("load", function () {
                o(n);
            }),
                i(window).resize(function () {
                    r() ||
                        (clearTimeout(e),
                        (e = setTimeout(function () {
                            o(n);
                        }, 50)));
                }),
                i(window).on("orientationchange", function () {
                    clearTimeout(t),
                        (t = setTimeout(function () {
                            o(n);
                        }, 50));
                });
        });
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            var t = n(1),
                r = t.View.extend({
                    initialize: function (e) {
                        (this.heightFactor = e.heightFactor), this.resizeContainer(), this.onWindowResize(), this.onOrientationChange();
                    },
                    onOrientationChange: function () {
                        var t = this;
                        e(window).on("orientationchange", function () {
                            setTimeout(t.resizeContainer.bind(t), 100);
                        });
                    },
                    onWindowResize: function () {
                        var t = this;
                        e(window).resize(function () {
                            t.isMobile() || t.resizeContainer();
                        });
                    },
                    isMobile: function () {
                        var e = /iOS|iPhone/g.test(navigator.userAgent);
                        return /Android/g.test(navigator.userAgent) || e;
                    },
                    resizeContainer: function () {
                        var t = Math.round(e(window).innerHeight() * this.heightFactor);
                        this.$el.css("height", t + "px");
                    },
                }),
                i = r.extend({
                    resizeContainer: function () {
                        var t = Math.round(e(window).innerHeight() * this.heightFactor);
                        this.$el.css("min-height", t + "px");
                    },
                });
            e(function () {
                var t = e("[data-viewporter]"),
                    n = e("[data-viewporter-min]");
                t.each(function (t, n) {
                    var i = e(n),
                        o = i.data("viewporter");
                    new r({ el: i, heightFactor: o });
                }),
                    n.each(function (t, n) {
                        var r = e(n),
                            o = r.data("viewporter-min");
                        new i({ el: r, heightFactor: o });
                    });
            });
        }.call(t, n(0)));
    },
    function (e, t, n) {
        "use strict";
        var r = n(18),
            i = (function (e) {
                return e && e.__esModule ? e : { default: e };
            })(r);
        (window.MoMA = window.MoMA || {}), (window.MoMA.ofi = i.default), window.setTimeout(window.MoMA.ofi, 250);
    },
    function (e, t, n) {
        "use strict";
        var r, i, o;
        !(function (n, a) {
            (i = []), (r = a), void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o);
        })(0, function () {
            function e() {}
            function t(e, t) {
                Array.prototype.forEach.call(e, t);
            }
            function n(e) {
                "loading" !== document.readyState
                    ? e()
                    : document.addEventListener
                    ? document.addEventListener("DOMContentLoaded", e)
                    : document.attachEvent("onreadystatechange", function () {
                          "loading" !== document.readyState && e();
                      });
            }
            function r(e, t, n) {
                var r;
                return function () {
                    function i() {
                        n || e.apply(o, a), (r = null);
                    }
                    var o = this,
                        a = arguments;
                    r ? clearTimeout(r) : n && e.apply(o, a), (r = setTimeout(i, t || 100));
                };
            }
            function i() {
                this.reset();
            }
            function o(e) {
                return C.some(function (t) {
                    return t.start < e && e < t.end;
                });
            }
            function a(e, n) {
                if (e.nodeType === e.ELEMENT_NODE)
                    if ("nowrap" === window.getComputedStyle(e).whiteSpace) {
                        var r = e.outerHTML.length;
                        C.push({ start: S, end: S + r }), (S += r);
                    } else
                        t(e.childNodes, function (e) {
                            a(e, !0);
                        }),
                            n && (S += e.outerHTML.length - e.innerHTML.length);
                else e.nodeType === e.COMMENT_NODE ? (S += e.length + 7) : e.nodeType === e.PROCESSING_INSTRUCTION_NODE ? (S += e.length + 2) : (S += e.length);
            }
            function s(e, t, n) {
                if (0 === n) (e.style.whiteSpace = t), (S = 0), (C = []), a(e, !1), (e.style.whiteSpace = "nowrap");
                else {
                    var r = [];
                    C.forEach(function (e) {
                        e.start > n && r.push({ start: e.start - n, end: e.end - n });
                    }),
                        (C = r);
                }
            }
            function u(e) {
                var n = e.querySelectorAll('br[data-owner="balance-text-hyphen"]');
                t(n, function (e) {
                    e.outerHTML = "";
                }),
                    (n = e.querySelectorAll('br[data-owner="balance-text"]')),
                    t(n, function (e) {
                        e.outerHTML = " ";
                    });
                var r = e.querySelectorAll('span[data-owner="balance-text-softhyphen"]');
                if (
                    (r.length > 0 &&
                        t(r, function (e) {
                            var t = document.createTextNode("­");
                            e.parentNode.insertBefore(t, e), e.parentNode.removeChild(e);
                        }),
                    (r = e.querySelectorAll('span[data-owner="balance-text-justify"]')),
                    r.length > 0)
                ) {
                    var i = "";
                    t(r, function (e) {
                        (i += e.textContent), e.parentNode.removeChild(e);
                    }),
                        (e.innerHTML = i);
                }
            }
            function c(e, t, n) {
                var r, i, o, a, s;
                return (
                    (t = t.trim()),
                    (a = t.split(" ").length),
                    (t += " "),
                    a < 2
                        ? t
                        : ((o = document.createElement("span")),
                          (o.innerHTML = t),
                          e.appendChild(o),
                          (i = o.offsetWidth),
                          o.parentNode.removeChild(o),
                          (s = Math.floor((n - i) / (a - 1))),
                          (o.style.wordSpacing = s + "px"),
                          o.setAttribute("data-owner", "balance-text-justify"),
                          (r = document.createElement("div")),
                          r.appendChild(o),
                          r.innerHTML)
                );
            }
            function l(e, t) {
                var n,
                    r = /(\s|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g;
                if (!T) for (T = [], n = r.exec(e); null !== n; ) o(n.index) || T.push(n.index), (n = r.exec(e));
                return -1 !== T.indexOf(t);
            }
            function f(e, t) {
                return 0 === t || t === e.length || (l(e, t - 1) && !l(e, t));
            }
            function d(e, t, n, r, i, o, a) {
                var s;
                if (t && "string" == typeof t)
                    for (;;) {
                        for (; !f(t, o); ) o += i;
                        if (((e.innerHTML = t.substr(0, o)), (s = e.offsetWidth), i < 0)) {
                            if (s <= r || s <= 0 || 0 === o) break;
                        } else if (r <= s || n <= s || o === t.length) break;
                        o += i;
                    }
                (a.index = o), (a.width = s);
            }
            function h(e, t) {
                var n,
                    r,
                    i,
                    o = document.createElement("div");
                return (
                    (o.style.display = "block"),
                    (o.style.position = "absolute"),
                    (o.style.bottom = 0),
                    (o.style.right = 0),
                    (o.style.width = 0),
                    (o.style.height = 0),
                    (o.style.margin = 0),
                    (o.style.padding = 0),
                    (o.style.visibility = "hidden"),
                    (o.style.overflow = "hidden"),
                    (r = document.createElement("span")),
                    (r.style.fontSize = "2000px"),
                    (r.innerHTML = "&nbsp;"),
                    o.appendChild(r),
                    e.appendChild(o),
                    (n = r.getBoundingClientRect()),
                    o.parentNode.removeChild(o),
                    (i = n.height / n.width),
                    t / i
                );
            }
            function p(e) {
                return e ? ("string" == typeof e ? document.querySelectorAll(e) : e.tagName && e.querySelectorAll ? [e] : e) : [];
            }
            function g(e) {
                t(p(e), function (e) {
                    u(e);
                    var t = e.style.whiteSpace,
                        n = e.style.float,
                        r = e.style.display,
                        o = e.style.position,
                        a = e.style.lineHeight;
                    e.style.lineHeight = "normal";
                    var l = e.offsetWidth,
                        f = e.offsetHeight;
                    (e.style.whiteSpace = "nowrap"), (e.style.float = "none"), (e.style.display = "inline"), (e.style.position = "static");
                    var p = e.offsetWidth,
                        g = e.offsetHeight,
                        v = "pre-wrap" === t ? 0 : h(e, g);
                    if (l > 0 && p > l && p < 5e3) {
                        for (var m, y, b, x, w, C, S, k = e.innerHTML, _ = "", E = "", j = A(e), N = Math.round(f / g), M = N, H = 0; M > 1; )
                            (T = null),
                                s(e, t, H),
                                (m = Math.round((p + v) / M - v)),
                                (y = Math.round((k.length + 1) / M) - 1),
                                (b = new i()),
                                d(e, k, l, m, -1, y, b),
                                (x = new i()),
                                (y = b.index),
                                d(e, k, l, m, 1, y, x),
                                b.reset(),
                                (y = x.index),
                                d(e, k, l, m, -1, y, b),
                                (w = 0 === b.index ? x.index : l < x.width || b.index === x.index ? b.index : Math.abs(m - b.width) < Math.abs(x.width - m) ? b.index : x.index),
                                (E = k.substr(0, w).replace(/\s$/, "")),
                                (S = Boolean(E.match(/\u00ad$/))),
                                S && (E = E.replace(/\u00ad$/, '<span data-owner="balance-text-softhyphen">-</span>')),
                                j ? (_ += c(e, E, l)) : ((_ += E), (C = S || Boolean(E.match(/(-|\u2014|\u2013)$/))), (_ += C ? '<br data-owner="balance-text-hyphen" />' : '<br data-owner="balance-text" />')),
                                (k = k.substr(w)),
                                (H = w),
                                M--,
                                (e.innerHTML = k),
                                (p = e.offsetWidth);
                        e.innerHTML = j ? _ + c(e, k, l) : _ + k;
                    }
                    (e.style.whiteSpace = t), (e.style.float = n), (e.style.display = r), (e.style.position = o), (e.style.lineHeight = a);
                });
            }
            function v() {
                var e = k.sel.join(","),
                    t = p(e);
                g(Array.prototype.concat.apply(k.el, t));
            }
            function m() {
                _ || (n(v), window.addEventListener("load", v), window.addEventListener("resize", r(v)), (_ = !0));
            }
            function y(e) {
                "string" == typeof e
                    ? k.sel.push(e)
                    : t(p(e), function (e) {
                          k.el.push(e);
                      }),
                    m(),
                    v();
            }
            function b(e) {
                "string" == typeof e
                    ? (k.sel = k.sel.filter(function (t) {
                          return t !== e;
                      }))
                    : ((e = p(e)),
                      (k.el = k.el.filter(function (t) {
                          return -1 === e.indexOf(t);
                      })));
            }
            function x() {
                E || (k.sel.push(".balance-text"), m(), (E = !0));
            }
            function w(e, t) {
                e ? (t && !0 === t.watch ? y(e) : t && !1 === t.watch ? b(e) : g(e)) : x();
            }
            var T,
                C,
                S,
                k = { sel: [], el: [] },
                _ = !1,
                E = !1;
            i.prototype.reset = function () {
                (this.index = 0), (this.width = 0);
            };
            var A = function (e) {
                return "justify" === (e.currentStyle || window.getComputedStyle(e, null)).textAlign;
            };
            return (
                (w.updateWatched = v),
                (function () {
                    var e = document.documentElement.style;
                    return e.textWrap || e.WebkitTextWrap || e.MozTextWrap || e.MsTextWrap;
                })()
                    ? ((e.updateWatched = e), e)
                    : w
            );
        });
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = function (e) {
                return document.cookie.indexOf(e) > -1;
            },
            o = function () {
                window.setTimeout(function () {
                    r("[data-banner]").addClass("banner--active");
                }, 2e3);
            },
            a = function (e) {
                r("[data-banner-close]").click(function (t) {
                    t.preventDefault(), r("[data-banner]").removeClass("banner--active"), (document.cookie = e + "=closed; path=/;");
                });
            },
            s = function () {
                var e = r("[data-banner-close]").data("banner-close");
                i(e) || (o(), a(e));
            };
        r(window).on("load", s), (e.exports = { showBannerIfRequired: s });
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            e(function () {
                var t = /(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i.test(navigator.userAgent);
                (/(iPad|iPhone|iPod touch);.*CPU.*OS 8_\d/i.test(navigator.userAgent) || t) && e("body").addClass("no-flexbox");
            });
        }.call(t, n(0)));
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = function () {
                r("body").keydown(function (e) {
                    9 == e.which && r("html").addClass("show-focus");
                });
            },
            o = function () {
                r("body").click(function (e) {
                    (0 == e.originalEvent.clientX && 0 == e.originalEvent.clientY) || r("html").removeClass("show-focus");
                });
            };
        r(function () {
            i(), o();
        }),
            (e.exports = { showFocusOnTabPress: i, removeFocusOnClick: o });
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = function (e, t, n, i, o) {
                e.submit(function (a) {
                    a.preventDefault();
                    var s = t.val(),
                        u = e.find("[name='source']").val(),
                        c = e.find("[name='gorilla.csrf.Token']").val();
                    r.ajax("/newsletters/subscribe/", {
                        type: "POST",
                        processData: !1,
                        data: '{ "email": "' + s + '", "source": "' + u + '"}',
                        headers: { "X-CSRF-Token": c, "Content-Type": "application/json" },
                        complete: function (e, t) {
                            n.hide(), i.hide(), o.show(), o.focus();
                        },
                    });
                });
            },
            o = function (e, t) {
                e.on("input", function (n) {
                    "" == e.val() ? t.hide() : t.show();
                });
            },
            a = function (e, t, n, r) {
                e.click(function (i) {
                    i.preventDefault(), t.val(""), n.hide(), e.hide(), r.show();
                });
            };
        r(function () {
            var e = r("[data-newsletter-signup-form]"),
                t = e.find("[name='email']"),
                n = e.find("[data-newsletter-signup-form-wrapper]"),
                s = e.find("[data-newsletter-signup-form-submit]"),
                u = e.find("[data-newsletter-signup-form-clear]");
            i(e, t, n, s, u), o(t, s), a(u, t, s, n);
        }),
            (e.exports = { onFormSubmit: i, onEmailInput: o, onClearButtonClick: a });
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            i = n(22),
            o = n(1);
        r(function () {
            var e = r("[data-nav]")[0];
            new i(e, {
                offset: 0,
                tolerance: { up: 12, down: 20 },
                classes: { top: "header--top", notTop: "header--not-top", notBottom: "header--not-bottom", unpinned: "header--partial", pinned: "header--full", bottom: "header--full" },
            }).init(),
                new u({ el: e }),
                a(),
                s();
        });
        var a = function () {
                var e = r("[data-current-primary-nav-item]").attr("data-current-primary-nav-item");
                r('[data-header-primary-nav-item="' + e + '"]').addClass("header__primary-nav__item--current");
            },
            s = function () {
                var e = r("[data-current-secondary-nav-item]").attr("data-current-secondary-nav-item");
                r('[data-header-secondary-nav-item="' + e + '"]').addClass("header__secondary-nav__item--current");
            },
            u = o.View.extend({
                ESC_KEY: 27,
                TAB_KEY: 9,
                events: { "click [data-header-primary-nav-item]": "navItemClick", "click [data-header-close]": "navClose", "click input": "stopPropagation" },
                initialize: function () {
                    r(window).on("keydown", this.keydown.bind(this));
                },
                stopPropagation: function (e) {
                    e.stopPropagation();
                },
                navItemClick: function (e) {
                    e.preventDefault();
                    var t = r(".header__primary-nav__item--selected"),
                        n = r(".header__secondary-nav--selected"),
                        i = r(e.currentTarget),
                        o = i.data("header-primary-nav-item"),
                        a = r("[data-header-secondary-nav=" + o + "]");
                    if ((0 == t.length && this.initialNavOpen(), n.length && this.hideItem(t, n), t.length && t.is(i))) return void this.navClose(e);
                    i.addClass("header__primary-nav__item--selected"),
                        i.find("a").attr("aria-expanded", "true"),
                        a.addClass("header__secondary-nav--selected").attr("aria-hidden", "false"),
                        r("[data-nav]").addClass("header--selected"),
                        r(".header__overlay").scrollTop(0),
                        "search" == o && this.focusSearchInput();
                },
                initialNavOpen: function () {
                    MoMA.owlCarousel && MoMA.owlCarousel.trigger("stop.owl.autoplay"),
                        r("[data-home-page-sponsor]").addClass("home__sponsors-list__logo--paused"),
                        r("[data-home-collection-works-image]").addClass("home__collection__image--paused"),
                        this.ariaHideAllBackground(),
                        this.disableHeadroom(),
                        MoMA.preventScroll();
                },
                ariaHideAllBackground: function () {
                    r(this.el)
                        .siblings()
                        .each(function (e, t) {
                            r(t).attr("aria-hidden", "true");
                        }),
                        r("[data-header-hidden-when-open]").each(function (e, t) {
                            r(t).attr("aria-hidden", "true");
                        }),
                        r("[data-header-logo]").attr("aria-hidden", "true");
                },
                ariaShowAllBackground: function () {
                    r(this.el)
                        .siblings()
                        .each(function (e, t) {
                            r(t).removeAttr("aria-hidden");
                        }),
                        r("[data-header-hidden-when-open]").each(function (e, t) {
                            r(t).removeAttr("aria-hidden");
                        }),
                        r("[data-header-logo]").removeAttr("aria-hidden");
                },
                disableHeadroom: function () {
                    r("[data-nav]").addClass("headroom--frozen");
                },
                enableHeadroom: function () {
                    r("[data-nav]").removeClass("headroom--frozen");
                },
                focusSearchInput: function () {
                    var e = r("[data-header-search-input]");
                    e.val(""), e[0].focus();
                },
                hideItem: function (e, t) {
                    var n = r(".header__primary-nav__item--selected").find("a");
                    e.removeClass("header__primary-nav__item--selected"), t.removeClass("header__secondary-nav--selected").attr("aria-hidden", "true"), n.attr("aria-expanded", "false");
                },
                keydown: function (e) {
                    e.keyCode == this.ESC_KEY && this.navClose(e), e.keyCode == this.TAB_KEY && r("[data-nav]").hasClass("header--selected") && this.cycleTab(e);
                },
                navClose: function (e) {
                    e.target.closest("a") && "true" === e.target.closest("a").getAttribute("data-header-close-link") && e.preventDefault();
                    var t = r("[data-header-secondary-nav]"),
                        n = r(".header__primary-nav__item--selected").find("a");
                    MoMA.owlCarousel && MoMA.owlCarousel.trigger("play.owl.autoplay"),
                        r("[data-home-page-sponsor]").removeClass("home__sponsors-list__logo--paused"),
                        r("[data-home-collection-works-image]").removeClass("home__collection__image--paused"),
                        r("[data-nav]").removeClass("header--selected"),
                        r("[data-header-primary-nav-item]").removeClass("header__primary-nav__item--selected"),
                        n.attr("aria-expanded", "false"),
                        n.focus(),
                        t.removeClass("header__secondary-nav--selected").attr("aria-hidden", "true"),
                        this.ariaShowAllBackground(),
                        MoMA.enableScroll(),
                        this.enableHeadroom();
                },
                cycleTab: function (e) {
                    var t = r("[data-nav]"),
                        n = t.find("*"),
                        i = n
                            .filter("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]")
                            .filter(":visible")
                            .not("[data-header-hidden-when-open]"),
                        o = r(":focus"),
                        a = i.length,
                        s = i.index(o);
                    e.shiftKey ? 0 == s && (i.get(a - 1).focus(), e.preventDefault()) : s == a - 1 && (i.get(0).focus(), e.preventDefault());
                },
            });
        e.exports = { setSecondaryNavItem: s, setPrimaryNavItem: a, HeaderOverlay: u };
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            e(function () {
                !!window.MSInputMethodContext &&
                    !!document.documentMode &&
                    (e("body").addClass("no-flexbox"),
                    e(window).on("load", function () {
                        e(".sidebar--center img").each(function (t, n) {
                            e(n).height(e(".sidebar-container__upper").height());
                        }),
                            e(".picture--home__store .picture__img--scale").each(function (t, n) {
                                e(n).width(e(n).parent().width());
                            }),
                            e(".picture--home__events .picture__img--scale").each(function (t, n) {
                                e(n).width(e(n).parent().width());
                            }),
                            e(".calendar-tile__link").css({ width: "100%" }),
                            e(".picture__img--scale").css({ width: "100%" }),
                            e(".calendar-tile__tagline").css({ width: "100%" }),
                            e(".balance-text").css({ width: "100%" }),
                            e(".viewporter-container__inner .picture__img--scale").each(function (t, n) {
                                e(n).height(e(n).parent().parent().height());
                            });
                    }));
            });
        }.call(t, n(0)));
    },
    function (e, t, n) {
        "use strict";
        window.MoMA = window.MoMA || {};
        var r = n(0),
            i = function (e) {
                return document.cookie.indexOf(e) > -1;
            },
            o = {
                0: "accent-color--january",
                1: "accent-color--february",
                2: "accent-color--march",
                3: "accent-color--april",
                4: "accent-color--may",
                5: "accent-color--june",
                6: "accent-color--july",
                7: "accent-color--august",
                8: "accent-color--september",
                9: "accent-color--october",
                10: "accent-color--november",
                11: "accent-color--december",
            },
            a = {
                0: "accent-color--january--background",
                1: "accent-color--february--background",
                2: "accent-color--march--background",
                3: "accent-color--april--background",
                4: "accent-color--may--background",
                5: "accent-color--june--background",
                6: "accent-color--july--background",
                7: "accent-color--august--background",
                8: "accent-color--september--background",
                9: "accent-color--october--background",
                10: "accent-color--november--background",
                11: "accent-color--december--background",
            },
            s = function (e, t) {
                return (e = Math.ceil(e)), (t = Math.floor(t)), Math.floor(Math.random() * (t - e)) + e;
            };
        (window.MoMA.setSessionColor = function () {
            var e = Object.keys(o).length - 1,
                t = s(0, e);
            (document.cookie = "sessionHighlightColor=" + t + "; path=/;"), window.MoMA.applySessionColor();
        }),
            (window.MoMA.applySessionColor = function () {
                var e = document.cookie.replace(/(?:(?:^|.*;\s*)sessionHighlightColor\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
                    t = parseInt(e);
                r(".accent-color").removeClass(u(/accent-color--\S+/)), r(".accent-color--background").removeClass(u(/accent-color--\S+--background/)), r(".accent-color").addClass(o[t]), r(".accent-color--background").addClass(a[t]);
            });
        var u = function (e) {
            return function (t, n) {
                var r = n.match(e);
                return r ? r.join(" ") : "";
            };
        };
        r(function () {
            i("sessionHighlightColor") ? window.MoMA.applySessionColor() : window.MoMA.setSessionColor();
        });
    },
    function (e, t, n) {
        "use strict";
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }; /*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-cssfilters-flexbox-touchevents-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
        !(function (e, t, n) {
            function i(e, t) {
                return (void 0 === e ? "undefined" : r(e)) === t;
            }
            function o() {
                return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
            }
            function a() {
                var e = t.body;
                return e || ((e = o(_ ? "svg" : "body")), (e.fake = !0)), e;
            }
            function s(e, n, r, i) {
                var s,
                    u,
                    c,
                    l,
                    f = "modernizr",
                    d = o("div"),
                    h = a();
                if (parseInt(r, 10)) for (; r--; ) (c = o("div")), (c.id = i ? i[r] : f + (r + 1)), d.appendChild(c);
                return (
                    (s = o("style")),
                    (s.type = "text/css"),
                    (s.id = "s" + f),
                    (h.fake ? h : d).appendChild(s),
                    h.appendChild(d),
                    s.styleSheet ? (s.styleSheet.cssText = e) : s.appendChild(t.createTextNode(e)),
                    (d.id = f),
                    h.fake && ((h.style.background = ""), (h.style.overflow = "hidden"), (l = k.style.overflow), (k.style.overflow = "hidden"), k.appendChild(h)),
                    (u = n(d, e)),
                    h.fake ? (h.parentNode.removeChild(h), (k.style.overflow = l), k.offsetHeight) : d.parentNode.removeChild(d),
                    !!u
                );
            }
            function u(e, t) {
                return !!~("" + e).indexOf(t);
            }
            function c(e) {
                return e
                    .replace(/([a-z])-([a-z])/g, function (e, t, n) {
                        return t + n.toUpperCase();
                    })
                    .replace(/^-/, "");
            }
            function l(e, t) {
                return function () {
                    return e.apply(t, arguments);
                };
            }
            function f(e, t, n) {
                var r;
                for (var o in e) if (e[o] in t) return !1 === n ? e[o] : ((r = t[e[o]]), i(r, "function") ? l(r, n || t) : r);
                return !1;
            }
            function d(t, n, r) {
                var i;
                if ("getComputedStyle" in e) {
                    i = getComputedStyle.call(e, t, n);
                    var o = e.console;
                    if (null !== i) r && (i = i.getPropertyValue(r));
                    else if (o) {
                        var a = o.error ? "error" : "log";
                        o[a].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
                    }
                } else i = !n && t.currentStyle && t.currentStyle[r];
                return i;
            }
            function h(e) {
                return e
                    .replace(/([A-Z])/g, function (e, t) {
                        return "-" + t.toLowerCase();
                    })
                    .replace(/^ms-/, "-ms-");
            }
            function p(t, r) {
                var i = t.length;
                if ("CSS" in e && "supports" in e.CSS) {
                    for (; i--; ) if (e.CSS.supports(h(t[i]), r)) return !0;
                    return !1;
                }
                if ("CSSSupportsRule" in e) {
                    for (var o = []; i--; ) o.push("(" + h(t[i]) + ":" + r + ")");
                    return (
                        (o = o.join(" or ")),
                        s("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
                            return "absolute" == d(e, null, "position");
                        })
                    );
                }
                return n;
            }
            function g(e, t, r, a) {
                function s() {
                    f && (delete H.style, delete H.modElem);
                }
                if (((a = !i(a, "undefined") && a), !i(r, "undefined"))) {
                    var l = p(e, r);
                    if (!i(l, "undefined")) return l;
                }
                for (var f, d, h, g, v, m = ["modernizr", "tspan", "samp"]; !H.style && m.length; ) (f = !0), (H.modElem = o(m.shift())), (H.style = H.modElem.style);
                for (h = e.length, d = 0; d < h; d++)
                    if (((g = e[d]), (v = H.style[g]), u(g, "-") && (g = c(g)), H.style[g] !== n)) {
                        if (a || i(r, "undefined")) return s(), "pfx" != t || g;
                        try {
                            H.style[g] = r;
                        } catch (e) {}
                        if (H.style[g] != v) return s(), "pfx" != t || g;
                    }
                return s(), !1;
            }
            function v(e, t, n, r, o) {
                var a = e.charAt(0).toUpperCase() + e.slice(1),
                    s = (e + " " + j.join(a + " ") + a).split(" ");
                return i(t, "string") || i(t, "undefined") ? g(s, t, r, o) : ((s = (e + " " + N.join(a + " ") + a).split(" ")), f(s, t, n));
            }
            function m(e, t, r) {
                return v(e, n, n, t, r);
            }
            var y = [],
                b = [],
                x = {
                    _version: "3.5.0",
                    _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
                    _q: [],
                    on: function (e, t) {
                        var n = this;
                        setTimeout(function () {
                            t(n[e]);
                        }, 0);
                    },
                    addTest: function (e, t, n) {
                        b.push({ name: e, fn: t, options: n });
                    },
                    addAsyncTest: function (e) {
                        b.push({ name: null, fn: e });
                    },
                },
                w = function () {};
            (w.prototype = x), (w = new w());
            var T = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            x._prefixes = T; /*!
  {
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
  }
  !*/
            var C = "CSS" in e && "supports" in e.CSS,
                S = "supportsCSS" in e;
            w.addTest("supports", C || S);
            var k = t.documentElement,
                _ = "svg" === k.nodeName.toLowerCase(),
                E = (x.testStyles = s); /*!
  {
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
  }
  !*/
            w.addTest("touchevents", function () {
                var n;
                if ("ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch)) n = !0;
                else {
                    var r = ["@media (", T.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                    E(r, function (e) {
                        n = 9 === e.offsetTop;
                    });
                }
                return n;
            });
            var A = "Moz O ms Webkit",
                j = x._config.usePrefixes ? A.split(" ") : [];
            x._cssomPrefixes = j;
            var N = x._config.usePrefixes ? A.toLowerCase().split(" ") : [];
            x._domPrefixes = N;
            var M = { elem: o("modernizr") };
            w._q.push(function () {
                delete M.elem;
            });
            var H = { style: M.elem.style };
            w._q.unshift(function () {
                delete H.style;
            }),
                (x.testAllProps = v),
                (x.testAllProps = m) /*!
  {
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
  }
  !*/,
                w.addTest("cssfilters", function () {
                    if (w.supports) return m("filter", "blur(2px)");
                    var e = o("a");
                    return (e.style.cssText = T.join("filter:blur(2px); ")), !!e.style.length && (t.documentMode === n || t.documentMode > 9);
                }) /*!
  {
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
  }
  !*/,
                w.addTest("flexbox", m("flexBasis", "1px", !0)),
                (function () {
                    var e, t, n, r, o, a, s;
                    for (var u in b)
                        if (b.hasOwnProperty(u)) {
                            if (((e = []), (t = b[u]), t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)))
                                for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                            for (r = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)
                                (a = e[o]), (s = a.split(".")), 1 === s.length ? (w[s[0]] = r) : (!w[s[0]] || w[s[0]] instanceof Boolean || (w[s[0]] = new Boolean(w[s[0]])), (w[s[0]][s[1]] = r)), y.push((r ? "" : "no-") + s.join("-"));
                        }
                })(),
                (function (e) {
                    var t = k.className,
                        n = w._config.classPrefix || "";
                    if ((_ && (t = t.baseVal), w._config.enableJSClass)) {
                        var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                        t = t.replace(r, "$1" + n + "js$2");
                    }
                    w._config.enableClasses && ((t += " " + n + e.join(" " + n)), _ ? (k.className.baseVal = t) : (k.className = t));
                })(y),
                delete x.addTest,
                delete x.addAsyncTest;
            for (var O = 0; O < w._q.length; O++) w._q[O]();
            e.Modernizr = w;
        })(window, document);
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            (window.MoMA = window.MoMA || {}),
                (window.MoMA.preventScroll = function () {
                    var t = document.getElementsByTagName("body")[0],
                        n = window.innerWidth - t.clientWidth;
                    e("[data-nav] > *").css({ "padding-right": n + "px" }), (window.MoMA.scrollTo = e(window).scrollTop()), e("body").css({ overflow: "hidden" });
                }),
                (window.MoMA.enableScroll = function () {
                    e("[data-nav] > *").css({ "padding-right": "0px" }), e(window).scrollTop(window.MoMA.scrollTo), e("body").css({ overflow: "auto" });
                });
        }.call(t, n(0)));
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            e(window).on("load", function () {
                var t = function () {
                        return navigator.userAgent.toLowerCase().indexOf("android") > -1;
                    },
                    n = function (t) {
                        t.scrollLeft(0);
                        var n = t.outerWidth(),
                            r = e("[data-static-pages-sub-navigation-is-current-item=true]"),
                            i = r.outerWidth(),
                            o = r.offset().left - n / 2 + i / 2;
                        t.scrollLeft(o);
                    },
                    r = function (t) {
                        var r = e("[data-static-nav-carousel]"),
                            i = e("[data-static-nav-carousel-wrapper]"),
                            o = i.outerWidth();
                        if (o < 768 && t > o) {
                            var a = t + o;
                            r.width(a), n(i);
                        } else r.width("auto");
                    },
                    i = e("[data-static-nav-carousel]"),
                    o = (function (t) {
                        var n = 0;
                        return (
                            t.children().each(function (t, r) {
                                n += e(this).outerWidth(!0);
                            }),
                            n
                        );
                    })(i);
                r(o),
                    (function (n) {
                        e(window).on("orientationchange", function () {
                            t() &&
                                setTimeout(function () {
                                    r(n);
                                }, 500);
                        });
                    })(o),
                    (function (n) {
                        e(window).resize(function () {
                            t() || r(n);
                        });
                    })(o);
            });
        }.call(t, n(0)));
    },
    ,
    ,
    function (e, t, n) {
        "use strict";
        function r(e, t) {
            return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + e + "' height='" + t + "'%3E%3C/svg%3E";
        }
        function i(e) {
            if (e.srcset && !m && window.picturefill) {
                var t = window.picturefill._;
                (e[t.ns] && e[t.ns].evaled) || t.fillImg(e, { reselect: !0 }), e[t.ns].curSrc || ((e[t.ns].supported = !1), t.fillImg(e, { reselect: !0 })), (e.currentSrc = e[t.ns].curSrc || e.src);
            }
        }
        function o(e) {
            for (var t, n = getComputedStyle(e).fontFamily, r = {}; null !== (t = d.exec(n)); ) r[t[1]] = t[2];
            return r;
        }
        function a(e, t, n) {
            var i = r(t || 1, n || 0);
            y.call(e, "src") !== i && b.call(e, "src", i);
        }
        function s(e, t) {
            e.naturalWidth ? t(e) : setTimeout(s, 100, e, t);
        }
        function u(e) {
            var t = o(e),
                n = e[f];
            if (((t["object-fit"] = t["object-fit"] || "fill"), !n.img)) {
                if ("fill" === t["object-fit"]) return;
                if (!n.skipTest && p && !t["object-position"]) return;
            }
            if (!n.img) {
                (n.img = new Image(e.width, e.height)),
                    (n.img.srcset = y.call(e, "data-ofi-srcset") || e.srcset),
                    (n.img.src = y.call(e, "data-ofi-src") || e.src),
                    b.call(e, "data-ofi-src", e.src),
                    e.srcset && b.call(e, "data-ofi-srcset", e.srcset),
                    a(e, e.naturalWidth || e.width, e.naturalHeight || e.height),
                    e.srcset && (e.srcset = "");
                try {
                    c(e);
                } catch (e) {
                    window.console && console.warn("https://bit.ly/ofi-old-browser");
                }
            }
            i(n.img),
                (e.style.backgroundImage = 'url("' + (n.img.currentSrc || n.img.src).replace(/"/g, '\\"') + '")'),
                (e.style.backgroundPosition = t["object-position"] || "center"),
                (e.style.backgroundRepeat = "no-repeat"),
                (e.style.backgroundOrigin = "content-box"),
                /scale-down/.test(t["object-fit"])
                    ? s(n.img, function () {
                          n.img.naturalWidth > e.width || n.img.naturalHeight > e.height ? (e.style.backgroundSize = "contain") : (e.style.backgroundSize = "auto");
                      })
                    : (e.style.backgroundSize = t["object-fit"].replace("none", "auto").replace("fill", "100% 100%")),
                s(n.img, function (t) {
                    a(e, t.naturalWidth, t.naturalHeight);
                });
        }
        function c(e) {
            var t = {
                get: function (t) {
                    return e[f].img[t || "src"];
                },
                set: function (t, n) {
                    return (e[f].img[n || "src"] = t), b.call(e, "data-ofi-" + n, t), u(e), t;
                },
            };
            Object.defineProperty(e, "src", t),
                Object.defineProperty(e, "currentSrc", {
                    get: function () {
                        return t.get("currentSrc");
                    },
                }),
                Object.defineProperty(e, "srcset", {
                    get: function () {
                        return t.get("srcset");
                    },
                    set: function (e) {
                        return t.set(e, "srcset");
                    },
                });
        }
        function l(e, t) {
            var n = !x && !e;
            if (((t = t || {}), (e = e || "img"), (g && !t.skipTest) || !v)) return !1;
            "img" === e ? (e = document.getElementsByTagName("img")) : "string" == typeof e ? (e = document.querySelectorAll(e)) : "length" in e || (e = [e]);
            for (var r = 0; r < e.length; r++) (e[r][f] = e[r][f] || { skipTest: t.skipTest }), u(e[r]);
            n &&
                (document.body.addEventListener(
                    "load",
                    function (e) {
                        "IMG" === e.target.tagName && l(e.target, { skipTest: t.skipTest });
                    },
                    !0
                ),
                (x = !0),
                (e = "img")),
                t.watchMQ && window.addEventListener("resize", l.bind(null, e, { skipTest: t.skipTest }));
        } /*! npm.im/object-fit-images 3.2.3 */
        var f = "bfred-it:object-fit-images",
            d = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
            h = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image(),
            p = "object-fit" in h.style,
            g = "object-position" in h.style,
            v = "background-size" in h.style,
            m = "string" == typeof h.currentSrc,
            y = h.getAttribute,
            b = h.setAttribute,
            x = !1;
        (l.supportsObjectFit = p),
            (l.supportsObjectPosition = g),
            (function () {
                function e(e, t) {
                    return e[f] && e[f].img && ("src" === t || "srcset" === t) ? e[f].img : e;
                }
                g ||
                    ((HTMLImageElement.prototype.getAttribute = function (t) {
                        return y.call(e(this, t), t);
                    }),
                    (HTMLImageElement.prototype.setAttribute = function (t, n) {
                        return b.call(e(this, t), t, String(n));
                    }));
            })(),
            (e.exports = l);
    },
    ,
    function (e, t) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    function (e, t, n) {
        var r, i;
        (function () {
            function n(e) {
                function t(t, n, r, i, o, a) {
                    for (; o >= 0 && o < a; o += e) {
                        var s = i ? i[o] : o;
                        r = n(r, t[s], s, t);
                    }
                    return r;
                }
                return function (n, r, i, o) {
                    r = C(r, o, 4);
                    var a = !N(n) && T.keys(n),
                        s = (a || n).length,
                        u = e > 0 ? 0 : s - 1;
                    return arguments.length < 3 && ((i = n[a ? a[u] : u]), (u += e)), t(n, r, i, a, u, s);
                };
            }
            function o(e) {
                return function (t, n, r) {
                    n = S(n, r);
                    for (var i = j(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e) if (n(t[o], o, t)) return o;
                    return -1;
                };
            }
            function a(e, t, n) {
                return function (r, i, o) {
                    var a = 0,
                        s = j(r);
                    if ("number" == typeof o) e > 0 ? (a = o >= 0 ? o : Math.max(o + s, a)) : (s = o >= 0 ? Math.min(o + 1, s) : o + s + 1);
                    else if (n && o && s) return (o = n(r, i)), r[o] === i ? o : -1;
                    if (i !== i) return (o = t(p.call(r, a, s), T.isNaN)), o >= 0 ? o + a : -1;
                    for (o = e > 0 ? a : s - 1; o >= 0 && o < s; o += e) if (r[o] === i) return o;
                    return -1;
                };
            }
            function s(e, t) {
                var n = D.length,
                    r = e.constructor,
                    i = (T.isFunction(r) && r.prototype) || f,
                    o = "constructor";
                for (T.has(e, o) && !T.contains(t, o) && t.push(o); n--; ) (o = D[n]) in e && e[o] !== i[o] && !T.contains(t, o) && t.push(o);
            }
            var u = this,
                c = u._,
                l = Array.prototype,
                f = Object.prototype,
                d = Function.prototype,
                h = l.push,
                p = l.slice,
                g = f.toString,
                v = f.hasOwnProperty,
                m = Array.isArray,
                y = Object.keys,
                b = d.bind,
                x = Object.create,
                w = function () {},
                T = function (e) {
                    return e instanceof T ? e : this instanceof T ? void (this._wrapped = e) : new T(e);
                };
            void 0 !== e && e.exports && (t = e.exports = T), (t._ = T), (T.VERSION = "1.8.3");
            var C = function (e, t, n) {
                    if (void 0 === t) return e;
                    switch (null == n ? 3 : n) {
                        case 1:
                            return function (n) {
                                return e.call(t, n);
                            };
                        case 2:
                            return function (n, r) {
                                return e.call(t, n, r);
                            };
                        case 3:
                            return function (n, r, i) {
                                return e.call(t, n, r, i);
                            };
                        case 4:
                            return function (n, r, i, o) {
                                return e.call(t, n, r, i, o);
                            };
                    }
                    return function () {
                        return e.apply(t, arguments);
                    };
                },
                S = function (e, t, n) {
                    return null == e ? T.identity : T.isFunction(e) ? C(e, t, n) : T.isObject(e) ? T.matcher(e) : T.property(e);
                };
            T.iteratee = function (e, t) {
                return S(e, t, 1 / 0);
            };
            var k = function (e, t) {
                    return function (n) {
                        var r = arguments.length;
                        if (r < 2 || null == n) return n;
                        for (var i = 1; i < r; i++)
                            for (var o = arguments[i], a = e(o), s = a.length, u = 0; u < s; u++) {
                                var c = a[u];
                                (t && void 0 !== n[c]) || (n[c] = o[c]);
                            }
                        return n;
                    };
                },
                _ = function (e) {
                    if (!T.isObject(e)) return {};
                    if (x) return x(e);
                    w.prototype = e;
                    var t = new w();
                    return (w.prototype = null), t;
                },
                E = function (e) {
                    return function (t) {
                        return null == t ? void 0 : t[e];
                    };
                },
                A = Math.pow(2, 53) - 1,
                j = E("length"),
                N = function (e) {
                    var t = j(e);
                    return "number" == typeof t && t >= 0 && t <= A;
                };
            (T.each = T.forEach = function (e, t, n) {
                t = C(t, n);
                var r, i;
                if (N(e)) for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
                else {
                    var o = T.keys(e);
                    for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e);
                }
                return e;
            }),
                (T.map = T.collect = function (e, t, n) {
                    t = S(t, n);
                    for (var r = !N(e) && T.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
                        var s = r ? r[a] : a;
                        o[a] = t(e[s], s, e);
                    }
                    return o;
                }),
                (T.reduce = T.foldl = T.inject = n(1)),
                (T.reduceRight = T.foldr = n(-1)),
                (T.find = T.detect = function (e, t, n) {
                    var r;
                    if (void 0 !== (r = N(e) ? T.findIndex(e, t, n) : T.findKey(e, t, n)) && -1 !== r) return e[r];
                }),
                (T.filter = T.select = function (e, t, n) {
                    var r = [];
                    return (
                        (t = S(t, n)),
                        T.each(e, function (e, n, i) {
                            t(e, n, i) && r.push(e);
                        }),
                        r
                    );
                }),
                (T.reject = function (e, t, n) {
                    return T.filter(e, T.negate(S(t)), n);
                }),
                (T.every = T.all = function (e, t, n) {
                    t = S(t, n);
                    for (var r = !N(e) && T.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                        var a = r ? r[o] : o;
                        if (!t(e[a], a, e)) return !1;
                    }
                    return !0;
                }),
                (T.some = T.any = function (e, t, n) {
                    t = S(t, n);
                    for (var r = !N(e) && T.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                        var a = r ? r[o] : o;
                        if (t(e[a], a, e)) return !0;
                    }
                    return !1;
                }),
                (T.contains = T.includes = T.include = function (e, t, n, r) {
                    return N(e) || (e = T.values(e)), ("number" != typeof n || r) && (n = 0), T.indexOf(e, t, n) >= 0;
                }),
                (T.invoke = function (e, t) {
                    var n = p.call(arguments, 2),
                        r = T.isFunction(t);
                    return T.map(e, function (e) {
                        var i = r ? t : e[t];
                        return null == i ? i : i.apply(e, n);
                    });
                }),
                (T.pluck = function (e, t) {
                    return T.map(e, T.property(t));
                }),
                (T.where = function (e, t) {
                    return T.filter(e, T.matcher(t));
                }),
                (T.findWhere = function (e, t) {
                    return T.find(e, T.matcher(t));
                }),
                (T.max = function (e, t, n) {
                    var r,
                        i,
                        o = -1 / 0,
                        a = -1 / 0;
                    if (null == t && null != e) {
                        e = N(e) ? e : T.values(e);
                        for (var s = 0, u = e.length; s < u; s++) (r = e[s]) > o && (o = r);
                    } else
                        (t = S(t, n)),
                            T.each(e, function (e, n, r) {
                                ((i = t(e, n, r)) > a || (i === -1 / 0 && o === -1 / 0)) && ((o = e), (a = i));
                            });
                    return o;
                }),
                (T.min = function (e, t, n) {
                    var r,
                        i,
                        o = 1 / 0,
                        a = 1 / 0;
                    if (null == t && null != e) {
                        e = N(e) ? e : T.values(e);
                        for (var s = 0, u = e.length; s < u; s++) (r = e[s]) < o && (o = r);
                    } else
                        (t = S(t, n)),
                            T.each(e, function (e, n, r) {
                                ((i = t(e, n, r)) < a || (i === 1 / 0 && o === 1 / 0)) && ((o = e), (a = i));
                            });
                    return o;
                }),
                (T.shuffle = function (e) {
                    for (var t, n = N(e) ? e : T.values(e), r = n.length, i = Array(r), o = 0; o < r; o++) (t = T.random(0, o)), t !== o && (i[o] = i[t]), (i[t] = n[o]);
                    return i;
                }),
                (T.sample = function (e, t, n) {
                    return null == t || n ? (N(e) || (e = T.values(e)), e[T.random(e.length - 1)]) : T.shuffle(e).slice(0, Math.max(0, t));
                }),
                (T.sortBy = function (e, t, n) {
                    return (
                        (t = S(t, n)),
                        T.pluck(
                            T.map(e, function (e, n, r) {
                                return { value: e, index: n, criteria: t(e, n, r) };
                            }).sort(function (e, t) {
                                var n = e.criteria,
                                    r = t.criteria;
                                if (n !== r) {
                                    if (n > r || void 0 === n) return 1;
                                    if (n < r || void 0 === r) return -1;
                                }
                                return e.index - t.index;
                            }),
                            "value"
                        )
                    );
                });
            var M = function (e) {
                return function (t, n, r) {
                    var i = {};
                    return (
                        (n = S(n, r)),
                        T.each(t, function (r, o) {
                            var a = n(r, o, t);
                            e(i, r, a);
                        }),
                        i
                    );
                };
            };
            (T.groupBy = M(function (e, t, n) {
                T.has(e, n) ? e[n].push(t) : (e[n] = [t]);
            })),
                (T.indexBy = M(function (e, t, n) {
                    e[n] = t;
                })),
                (T.countBy = M(function (e, t, n) {
                    T.has(e, n) ? e[n]++ : (e[n] = 1);
                })),
                (T.toArray = function (e) {
                    return e ? (T.isArray(e) ? p.call(e) : N(e) ? T.map(e, T.identity) : T.values(e)) : [];
                }),
                (T.size = function (e) {
                    return null == e ? 0 : N(e) ? e.length : T.keys(e).length;
                }),
                (T.partition = function (e, t, n) {
                    t = S(t, n);
                    var r = [],
                        i = [];
                    return (
                        T.each(e, function (e, n, o) {
                            (t(e, n, o) ? r : i).push(e);
                        }),
                        [r, i]
                    );
                }),
                (T.first = T.head = T.take = function (e, t, n) {
                    if (null != e) return null == t || n ? e[0] : T.initial(e, e.length - t);
                }),
                (T.initial = function (e, t, n) {
                    return p.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
                }),
                (T.last = function (e, t, n) {
                    if (null != e) return null == t || n ? e[e.length - 1] : T.rest(e, Math.max(0, e.length - t));
                }),
                (T.rest = T.tail = T.drop = function (e, t, n) {
                    return p.call(e, null == t || n ? 1 : t);
                }),
                (T.compact = function (e) {
                    return T.filter(e, T.identity);
                });
            var H = function (e, t, n, r) {
                for (var i = [], o = 0, a = r || 0, s = j(e); a < s; a++) {
                    var u = e[a];
                    if (N(u) && (T.isArray(u) || T.isArguments(u))) {
                        t || (u = H(u, t, n));
                        var c = 0,
                            l = u.length;
                        for (i.length += l; c < l; ) i[o++] = u[c++];
                    } else n || (i[o++] = u);
                }
                return i;
            };
            (T.flatten = function (e, t) {
                return H(e, t, !1);
            }),
                (T.without = function (e) {
                    return T.difference(e, p.call(arguments, 1));
                }),
                (T.uniq = T.unique = function (e, t, n, r) {
                    T.isBoolean(t) || ((r = n), (n = t), (t = !1)), null != n && (n = S(n, r));
                    for (var i = [], o = [], a = 0, s = j(e); a < s; a++) {
                        var u = e[a],
                            c = n ? n(u, a, e) : u;
                        t ? ((a && o === c) || i.push(u), (o = c)) : n ? T.contains(o, c) || (o.push(c), i.push(u)) : T.contains(i, u) || i.push(u);
                    }
                    return i;
                }),
                (T.union = function () {
                    return T.uniq(H(arguments, !0, !0));
                }),
                (T.intersection = function (e) {
                    for (var t = [], n = arguments.length, r = 0, i = j(e); r < i; r++) {
                        var o = e[r];
                        if (!T.contains(t, o)) {
                            for (var a = 1; a < n && T.contains(arguments[a], o); a++);
                            a === n && t.push(o);
                        }
                    }
                    return t;
                }),
                (T.difference = function (e) {
                    var t = H(arguments, !0, !0, 1);
                    return T.filter(e, function (e) {
                        return !T.contains(t, e);
                    });
                }),
                (T.zip = function () {
                    return T.unzip(arguments);
                }),
                (T.unzip = function (e) {
                    for (var t = (e && T.max(e, j).length) || 0, n = Array(t), r = 0; r < t; r++) n[r] = T.pluck(e, r);
                    return n;
                }),
                (T.object = function (e, t) {
                    for (var n = {}, r = 0, i = j(e); r < i; r++) t ? (n[e[r]] = t[r]) : (n[e[r][0]] = e[r][1]);
                    return n;
                }),
                (T.findIndex = o(1)),
                (T.findLastIndex = o(-1)),
                (T.sortedIndex = function (e, t, n, r) {
                    n = S(n, r, 1);
                    for (var i = n(t), o = 0, a = j(e); o < a; ) {
                        var s = Math.floor((o + a) / 2);
                        n(e[s]) < i ? (o = s + 1) : (a = s);
                    }
                    return o;
                }),
                (T.indexOf = a(1, T.findIndex, T.sortedIndex)),
                (T.lastIndexOf = a(-1, T.findLastIndex)),
                (T.range = function (e, t, n) {
                    null == t && ((t = e || 0), (e = 0)), (n = n || 1);
                    for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
                    return i;
                });
            var O = function (e, t, n, r, i) {
                if (!(r instanceof t)) return e.apply(n, i);
                var o = _(e.prototype),
                    a = e.apply(o, i);
                return T.isObject(a) ? a : o;
            };
            (T.bind = function (e, t) {
                if (b && e.bind === b) return b.apply(e, p.call(arguments, 1));
                if (!T.isFunction(e)) throw new TypeError("Bind must be called on a function");
                var n = p.call(arguments, 2),
                    r = function () {
                        return O(e, r, t, this, n.concat(p.call(arguments)));
                    };
                return r;
            }),
                (T.partial = function (e) {
                    var t = p.call(arguments, 1),
                        n = function () {
                            for (var r = 0, i = t.length, o = Array(i), a = 0; a < i; a++) o[a] = t[a] === T ? arguments[r++] : t[a];
                            for (; r < arguments.length; ) o.push(arguments[r++]);
                            return O(e, n, this, this, o);
                        };
                    return n;
                }),
                (T.bindAll = function (e) {
                    var t,
                        n,
                        r = arguments.length;
                    if (r <= 1) throw new Error("bindAll must be passed function names");
                    for (t = 1; t < r; t++) (n = arguments[t]), (e[n] = T.bind(e[n], e));
                    return e;
                }),
                (T.memoize = function (e, t) {
                    var n = function (r) {
                        var i = n.cache,
                            o = "" + (t ? t.apply(this, arguments) : r);
                        return T.has(i, o) || (i[o] = e.apply(this, arguments)), i[o];
                    };
                    return (n.cache = {}), n;
                }),
                (T.delay = function (e, t) {
                    var n = p.call(arguments, 2);
                    return setTimeout(function () {
                        return e.apply(null, n);
                    }, t);
                }),
                (T.defer = T.partial(T.delay, T, 1)),
                (T.throttle = function (e, t, n) {
                    var r,
                        i,
                        o,
                        a = null,
                        s = 0;
                    n || (n = {});
                    var u = function () {
                        (s = !1 === n.leading ? 0 : T.now()), (a = null), (o = e.apply(r, i)), a || (r = i = null);
                    };
                    return function () {
                        var c = T.now();
                        s || !1 !== n.leading || (s = c);
                        var l = t - (c - s);
                        return (r = this), (i = arguments), l <= 0 || l > t ? (a && (clearTimeout(a), (a = null)), (s = c), (o = e.apply(r, i)), a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(u, l)), o;
                    };
                }),
                (T.debounce = function (e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u = function () {
                            var c = T.now() - a;
                            c < t && c >= 0 ? (r = setTimeout(u, t - c)) : ((r = null), n || ((s = e.apply(o, i)), r || (o = i = null)));
                        };
                    return function () {
                        (o = this), (i = arguments), (a = T.now());
                        var c = n && !r;
                        return r || (r = setTimeout(u, t)), c && ((s = e.apply(o, i)), (o = i = null)), s;
                    };
                }),
                (T.wrap = function (e, t) {
                    return T.partial(t, e);
                }),
                (T.negate = function (e) {
                    return function () {
                        return !e.apply(this, arguments);
                    };
                }),
                (T.compose = function () {
                    var e = arguments,
                        t = e.length - 1;
                    return function () {
                        for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
                        return r;
                    };
                }),
                (T.after = function (e, t) {
                    return function () {
                        if (--e < 1) return t.apply(this, arguments);
                    };
                }),
                (T.before = function (e, t) {
                    var n;
                    return function () {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
                    };
                }),
                (T.once = T.partial(T.before, 2));
            var L = !{ toString: null }.propertyIsEnumerable("toString"),
                D = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            (T.keys = function (e) {
                if (!T.isObject(e)) return [];
                if (y) return y(e);
                var t = [];
                for (var n in e) T.has(e, n) && t.push(n);
                return L && s(e, t), t;
            }),
                (T.allKeys = function (e) {
                    if (!T.isObject(e)) return [];
                    var t = [];
                    for (var n in e) t.push(n);
                    return L && s(e, t), t;
                }),
                (T.values = function (e) {
                    for (var t = T.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
                    return r;
                }),
                (T.mapObject = function (e, t, n) {
                    t = S(t, n);
                    for (var r, i = T.keys(e), o = i.length, a = {}, s = 0; s < o; s++) (r = i[s]), (a[r] = t(e[r], r, e));
                    return a;
                }),
                (T.pairs = function (e) {
                    for (var t = T.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
                    return r;
                }),
                (T.invert = function (e) {
                    for (var t = {}, n = T.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                    return t;
                }),
                (T.functions = T.methods = function (e) {
                    var t = [];
                    for (var n in e) T.isFunction(e[n]) && t.push(n);
                    return t.sort();
                }),
                (T.extend = k(T.allKeys)),
                (T.extendOwn = T.assign = k(T.keys)),
                (T.findKey = function (e, t, n) {
                    t = S(t, n);
                    for (var r, i = T.keys(e), o = 0, a = i.length; o < a; o++) if (((r = i[o]), t(e[r], r, e))) return r;
                }),
                (T.pick = function (e, t, n) {
                    var r,
                        i,
                        o = {},
                        a = e;
                    if (null == a) return o;
                    T.isFunction(t)
                        ? ((i = T.allKeys(a)), (r = C(t, n)))
                        : ((i = H(arguments, !1, !1, 1)),
                          (r = function (e, t, n) {
                              return t in n;
                          }),
                          (a = Object(a)));
                    for (var s = 0, u = i.length; s < u; s++) {
                        var c = i[s],
                            l = a[c];
                        r(l, c, a) && (o[c] = l);
                    }
                    return o;
                }),
                (T.omit = function (e, t, n) {
                    if (T.isFunction(t)) t = T.negate(t);
                    else {
                        var r = T.map(H(arguments, !1, !1, 1), String);
                        t = function (e, t) {
                            return !T.contains(r, t);
                        };
                    }
                    return T.pick(e, t, n);
                }),
                (T.defaults = k(T.allKeys, !0)),
                (T.create = function (e, t) {
                    var n = _(e);
                    return t && T.extendOwn(n, t), n;
                }),
                (T.clone = function (e) {
                    return T.isObject(e) ? (T.isArray(e) ? e.slice() : T.extend({}, e)) : e;
                }),
                (T.tap = function (e, t) {
                    return t(e), e;
                }),
                (T.isMatch = function (e, t) {
                    var n = T.keys(t),
                        r = n.length;
                    if (null == e) return !r;
                    for (var i = Object(e), o = 0; o < r; o++) {
                        var a = n[o];
                        if (t[a] !== i[a] || !(a in i)) return !1;
                    }
                    return !0;
                });
            var P = function (e, t, n, r) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return e === t;
                e instanceof T && (e = e._wrapped), t instanceof T && (t = t._wrapped);
                var i = g.call(e);
                if (i !== g.call(t)) return !1;
                switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + e == "" + t;
                    case "[object Number]":
                        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t;
                }
                var o = "[object Array]" === i;
                if (!o) {
                    if ("object" != typeof e || "object" != typeof t) return !1;
                    var a = e.constructor,
                        s = t.constructor;
                    if (a !== s && !(T.isFunction(a) && a instanceof a && T.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1;
                }
                (n = n || []), (r = r || []);
                for (var u = n.length; u--; ) if (n[u] === e) return r[u] === t;
                if ((n.push(e), r.push(t), o)) {
                    if ((u = e.length) !== t.length) return !1;
                    for (; u--; ) if (!P(e[u], t[u], n, r)) return !1;
                } else {
                    var c,
                        l = T.keys(e);
                    if (((u = l.length), T.keys(t).length !== u)) return !1;
                    for (; u--; ) if (((c = l[u]), !T.has(t, c) || !P(e[c], t[c], n, r))) return !1;
                }
                return n.pop(), r.pop(), !0;
            };
            (T.isEqual = function (e, t) {
                return P(e, t);
            }),
                (T.isEmpty = function (e) {
                    return null == e || (N(e) && (T.isArray(e) || T.isString(e) || T.isArguments(e)) ? 0 === e.length : 0 === T.keys(e).length);
                }),
                (T.isElement = function (e) {
                    return !(!e || 1 !== e.nodeType);
                }),
                (T.isArray =
                    m ||
                    function (e) {
                        return "[object Array]" === g.call(e);
                    }),
                (T.isObject = function (e) {
                    var t = typeof e;
                    return "function" === t || ("object" === t && !!e);
                }),
                T.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
                    T["is" + e] = function (t) {
                        return g.call(t) === "[object " + e + "]";
                    };
                }),
                T.isArguments(arguments) ||
                    (T.isArguments = function (e) {
                        return T.has(e, "callee");
                    }),
                "function" != typeof /./ &&
                    "object" != typeof Int8Array &&
                    (T.isFunction = function (e) {
                        return "function" == typeof e || !1;
                    }),
                (T.isFinite = function (e) {
                    return isFinite(e) && !isNaN(parseFloat(e));
                }),
                (T.isNaN = function (e) {
                    return T.isNumber(e) && e !== +e;
                }),
                (T.isBoolean = function (e) {
                    return !0 === e || !1 === e || "[object Boolean]" === g.call(e);
                }),
                (T.isNull = function (e) {
                    return null === e;
                }),
                (T.isUndefined = function (e) {
                    return void 0 === e;
                }),
                (T.has = function (e, t) {
                    return null != e && v.call(e, t);
                }),
                (T.noConflict = function () {
                    return (u._ = c), this;
                }),
                (T.identity = function (e) {
                    return e;
                }),
                (T.constant = function (e) {
                    return function () {
                        return e;
                    };
                }),
                (T.noop = function () {}),
                (T.property = E),
                (T.propertyOf = function (e) {
                    return null == e
                        ? function () {}
                        : function (t) {
                              return e[t];
                          };
                }),
                (T.matcher = T.matches = function (e) {
                    return (
                        (e = T.extendOwn({}, e)),
                        function (t) {
                            return T.isMatch(t, e);
                        }
                    );
                }),
                (T.times = function (e, t, n) {
                    var r = Array(Math.max(0, e));
                    t = C(t, n, 1);
                    for (var i = 0; i < e; i++) r[i] = t(i);
                    return r;
                }),
                (T.random = function (e, t) {
                    return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
                }),
                (T.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    });
            var q = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                I = T.invert(q),
                F = function (e) {
                    var t = function (t) {
                            return e[t];
                        },
                        n = "(?:" + T.keys(e).join("|") + ")",
                        r = RegExp(n),
                        i = RegExp(n, "g");
                    return function (e) {
                        return (e = null == e ? "" : "" + e), r.test(e) ? e.replace(i, t) : e;
                    };
                };
            (T.escape = F(q)),
                (T.unescape = F(I)),
                (T.result = function (e, t, n) {
                    var r = null == e ? void 0 : e[t];
                    return void 0 === r && (r = n), T.isFunction(r) ? r.call(e) : r;
                });
            var R = 0;
            (T.uniqueId = function (e) {
                var t = ++R + "";
                return e ? e + t : t;
            }),
                (T.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
            var B = /(.)^/,
                $ = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                W = /\\|'|\r|\n|\u2028|\u2029/g,
                z = function (e) {
                    return "\\" + $[e];
                };
            (T.template = function (e, t, n) {
                !t && n && (t = n), (t = T.defaults({}, t, T.templateSettings));
                var r = RegExp([(t.escape || B).source, (t.interpolate || B).source, (t.evaluate || B).source].join("|") + "|$", "g"),
                    i = 0,
                    o = "__p+='";
                e.replace(r, function (t, n, r, a, s) {
                    return (
                        (o += e.slice(i, s).replace(W, z)), (i = s + t.length), n ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'") : r ? (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'") : a && (o += "';\n" + a + "\n__p+='"), t
                    );
                }),
                    (o += "';\n"),
                    t.variable || (o = "with(obj||{}){\n" + o + "}\n"),
                    (o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n");
                try {
                    var a = new Function(t.variable || "obj", "_", o);
                } catch (e) {
                    throw ((e.source = o), e);
                }
                var s = function (e) {
                    return a.call(this, e, T);
                };
                return (s.source = "function(" + (t.variable || "obj") + "){\n" + o + "}"), s;
            }),
                (T.chain = function (e) {
                    var t = T(e);
                    return (t._chain = !0), t;
                });
            var U = function (e, t) {
                return e._chain ? T(t).chain() : t;
            };
            (T.mixin = function (e) {
                T.each(T.functions(e), function (t) {
                    var n = (T[t] = e[t]);
                    T.prototype[t] = function () {
                        var e = [this._wrapped];
                        return h.apply(e, arguments), U(this, n.apply(T, e));
                    };
                });
            }),
                T.mixin(T),
                T.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                    var t = l[e];
                    T.prototype[e] = function () {
                        var n = this._wrapped;
                        return t.apply(n, arguments), ("shift" !== e && "splice" !== e) || 0 !== n.length || delete n[0], U(this, n);
                    };
                }),
                T.each(["concat", "join", "slice"], function (e) {
                    var t = l[e];
                    T.prototype[e] = function () {
                        return U(this, t.apply(this._wrapped, arguments));
                    };
                }),
                (T.prototype.value = function () {
                    return this._wrapped;
                }),
                (T.prototype.valueOf = T.prototype.toJSON = T.prototype.value),
                (T.prototype.toString = function () {
                    return "" + this._wrapped;
                }),
                (r = []),
                void 0 !==
                    (i = function () {
                        return T;
                    }.apply(t, r)) && (e.exports = i);
        }.call(this));
    },
    function (e, t, n) {
        var r, i, o;
        /*!
         * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
         * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
         * License: MIT
         */
        !(function (n, a) {
            "use strict";
            (i = []), (r = a), void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o);
        })(0, function () {
            "use strict";
            function e(e) {
                (this.callback = e), (this.ticking = !1);
            }
            function t(e) {
                return e && "undefined" != typeof window && (e === window || e.nodeType);
            }
            function n(e) {
                if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
                var r,
                    i,
                    o = e || {};
                for (i = 1; i < arguments.length; i++) {
                    var a = arguments[i] || {};
                    for (r in a) "object" != typeof o[r] || t(o[r]) ? (o[r] = o[r] || a[r]) : (o[r] = n(o[r], a[r]));
                }
                return o;
            }
            function r(e) {
                return e === Object(e) ? e : { down: e, up: e };
            }
            function i(e, t) {
                (t = n(t, i.options)),
                    (this.lastKnownScrollY = 0),
                    (this.elem = e),
                    (this.tolerance = r(t.tolerance)),
                    (this.classes = t.classes),
                    (this.offset = t.offset),
                    (this.scroller = t.scroller),
                    (this.initialised = !1),
                    (this.onPin = t.onPin),
                    (this.onUnpin = t.onUnpin),
                    (this.onTop = t.onTop),
                    (this.onNotTop = t.onNotTop),
                    (this.onBottom = t.onBottom),
                    (this.onNotBottom = t.onNotBottom);
            }
            var o = { bind: !!function () {}.bind, classList: "classList" in document.documentElement, rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) };
            return (
                (window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame),
                (e.prototype = {
                    constructor: e,
                    update: function () {
                        this.callback && this.callback(), (this.ticking = !1);
                    },
                    requestTick: function () {
                        this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), (this.ticking = !0));
                    },
                    handleEvent: function () {
                        this.requestTick();
                    },
                }),
                (i.prototype = {
                    constructor: i,
                    init: function () {
                        if (i.cutsTheMustard) return (this.debouncer = new e(this.update.bind(this))), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
                    },
                    destroy: function () {
                        var e = this.classes;
                        (this.initialised = !1), this.elem.classList.remove(e.unpinned, e.pinned, e.top, e.notTop, e.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1);
                    },
                    attachEvent: function () {
                        this.initialised || ((this.lastKnownScrollY = this.getScrollY()), (this.initialised = !0), this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
                    },
                    unpin: function () {
                        var e = this.elem.classList,
                            t = this.classes;
                        (!e.contains(t.pinned) && e.contains(t.unpinned)) || (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this));
                    },
                    pin: function () {
                        var e = this.elem.classList,
                            t = this.classes;
                        e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this));
                    },
                    top: function () {
                        var e = this.elem.classList,
                            t = this.classes;
                        e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this));
                    },
                    notTop: function () {
                        var e = this.elem.classList,
                            t = this.classes;
                        e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this));
                    },
                    bottom: function () {
                        var e = this.elem.classList,
                            t = this.classes;
                        e.contains(t.bottom) || (e.add(t.bottom), e.remove(t.notBottom), this.onBottom && this.onBottom.call(this));
                    },
                    notBottom: function () {
                        var e = this.elem.classList,
                            t = this.classes;
                        e.contains(t.notBottom) || (e.add(t.notBottom), e.remove(t.bottom), this.onNotBottom && this.onNotBottom.call(this));
                    },
                    getScrollY: function () {
                        return void 0 !== this.scroller.pageYOffset
                            ? this.scroller.pageYOffset
                            : void 0 !== this.scroller.scrollTop
                            ? this.scroller.scrollTop
                            : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                    },
                    getViewportHeight: function () {
                        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                    },
                    getElementPhysicalHeight: function (e) {
                        return Math.max(e.offsetHeight, e.clientHeight);
                    },
                    getScrollerPhysicalHeight: function () {
                        return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
                    },
                    getDocumentHeight: function () {
                        var e = document.body,
                            t = document.documentElement;
                        return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, e.clientHeight, t.clientHeight);
                    },
                    getElementHeight: function (e) {
                        return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
                    },
                    getScrollerHeight: function () {
                        return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
                    },
                    isOutOfBounds: function (e) {
                        var t = e < 0,
                            n = e + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
                        return t || n;
                    },
                    toleranceExceeded: function (e, t) {
                        return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t];
                    },
                    shouldUnpin: function (e, t) {
                        var n = e > this.lastKnownScrollY,
                            r = e >= this.offset;
                        return n && r && t;
                    },
                    shouldPin: function (e, t) {
                        var n = e < this.lastKnownScrollY,
                            r = e <= this.offset;
                        return (n && t) || r;
                    },
                    update: function () {
                        if (!this.elem.classList.contains(this.classes.frozen)) {
                            var e = this.getScrollY(),
                                t = e > this.lastKnownScrollY ? "down" : "up",
                                n = this.toleranceExceeded(e, t);
                            this.isOutOfBounds(e) ||
                                (e <= this.offset ? this.top() : this.notTop(),
                                e + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(),
                                this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(),
                                (this.lastKnownScrollY = e));
                        }
                    },
                }),
                (i.options = {
                    tolerance: { up: 0, down: 0 },
                    offset: 0,
                    scroller: window,
                    classes: {
                        pinned: "headroom--pinned",
                        unpinned: "headroom--unpinned",
                        top: "headroom--top",
                        notTop: "headroom--not-top",
                        bottom: "headroom--bottom",
                        notBottom: "headroom--not-bottom",
                        initial: "headroom",
                        frozen: "headroom--frozen",
                    },
                }),
                (i.cutsTheMustard = void 0 !== o && o.rAF && o.bind && o.classList),
                i
            );
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
        function n(e, t) {
            var n = e[1] || "",
                i = e[3];
            if (!i) return n;
            if (t && "function" == typeof btoa) {
                var o = r(i);
                return [n]
                    .concat(
                        i.sources.map(function (e) {
                            return "/*# sourceURL=" + i.sourceRoot + e + " */";
                        })
                    )
                    .concat([o])
                    .join("\n");
            }
            return [n].join("\n");
        }
        function r(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */";
        }
        e.exports = function (e) {
            var t = [];
            return (
                (t.toString = function () {
                    return this.map(function (t) {
                        var r = n(t, e);
                        return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
                    }).join("");
                }),
                (t.i = function (e, n) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var r = {}, i = 0; i < this.length; i++) {
                        var o = this[i][0];
                        "number" == typeof o && (r[o] = !0);
                    }
                    for (i = 0; i < e.length; i++) {
                        var a = e[i];
                        ("number" == typeof a[0] && r[a[0]]) || (n && !a[2] ? (a[2] = n) : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
                    }
                }),
                t
            );
        };
    },
]);
