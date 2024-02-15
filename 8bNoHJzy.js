import {
    j as e,
    h as n,
    T as i,
    r as b,
    bb as d,
    d as u,
    t as p,
    a9 as f
} from "./assets/index-BDcs8OaA.js";
(function () {
    try {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
            a = new Error().stack;
        a && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[a] = "1a1bf9bb-fa5e-4243-9272-a4651c05f7e1", r._sentryDebugIdIdentifier = "sentry-dbid-1a1bf9bb-fa5e-4243-9272-a4651c05f7e1")
    } catch {}
})();
const y = ({
        className: r = "",
        selectedText: a = "",
        unselectedText: o = "",
        disabled: s = !1,
        checked: l = !1,
        onChange: c,
        ...t
    }) => e.jsxs("span", {
        className: n("inline-block relative h-10 w-28", s ? "cursor-not-allowed bg-opacity-30 border-opacity-30" : "cursor-pointer", r),
        children: [e.jsxs("span", {
            className: n("rounded-2xl h-full block w-full bg-light-gray-light dark:bg-dark-bg-primary"),
            children: [e.jsx("span", {
                className: n(l ? "translate-x-0 bg-navy" : "translate-x-14 bg-dark-gray-primary", "absolute before:block flex items-center justify-center h-10 w-14 rounded-2xl"),
                style: {
                    transition: "transform 100ms cubic-bezier(0.4, 0, 0.2, 1)"
                },
                children: e.jsx(i, {
                    fontWeight: "semibold",
                    variant: "primary",
                    children: l ? a : o
                })
            }), e.jsxs("span", {
                className: "flex items-center justify-around h-full opacity-60",
                children: [e.jsx(i, {
                    className: n({
                        invisible: l
                    }),
                    fontWeight: "semibold",
                    variant: "secondary",
                    children: a
                }), e.jsx(i, {
                    className: n({
                        invisible: !l
                    }),
                    fontWeight: "semibold",
                    variant: "secondary",
                    children: o
                })]
            })]
        }), e.jsx("input", {
            checked: l,
            className: n("absolute w-full h-full z-10 m-0 rounded-lg top-0 opacity-0", s ? "cursor-not-allowed bg-opacity-30 border-opacity-30" : "cursor-pointer"),
            disabled: s,
            onChange: c,
            type: "checkbox",
            ...t
        })]
    }),
    m = [{
        label: "25%",
        value: .25
    }, {
        label: "50%",
        value: .5
    }, {
        label: "75%",
        value: .75
    }, {
        label: "100%",
        value: 1
    }],
    h = ({
        maxButtonLabel: r,
        onChange: a,
        disabled: o
    }) => {
        const s = b.useRef(null),
            l = () => {
                s.current && s.current.close()
            },
            c = b.useCallback(t => {
                a ?.(t), l()
            }, [a]);
        return e.jsx(d, {
            openOnHover: !0,
            disabled: o,
            ref: s,
            trigger: e.jsx(u, {
                className: "!h-5 !px-1.5",
                onClick: () => a ?.(1),
                textTransform: "uppercase",
                variant: "outlineSecondary",
                children: r || p("common.max")
            }),
            children: e.jsx("div", {
                className: "mr-[-24px] mt-[-4px]",
                children: e.jsx(f, {
                    className: "flex px-1 m-1 mt-2 gap-1 py-1",
                    size: "sm",
                    children: m.map(t => e.jsx(u, {
                        className: "!w-11 !h-6 hover:!border-btn-primary-active",
                        onClick: () => c(t.value),
                        variant: "outlineTint",
                        children: e.jsx(i, {
                            textStyle: "caption-xs",
                            textTransform: "capitalize",
                            children: t.label
                        })
                    }, t.label))
                })
            })
        })
    };
export {
    h as M, y as S
};