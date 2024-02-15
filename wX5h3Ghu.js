import {
  r as t,
  j as e,
  B as l,
  h as V,
  ac as Y,
  T as b,
  t as c,
  bv as Le,
  be as Q,
  a7 as T,
  ab as Fe,
  bF as Oe,
  o as B,
  O as He,
  ae as Z,
  cO as M,
  I as G,
  z as be,
  b as je,
  d as $,
  v as L,
  K as we,
  bq as ye,
  k as y,
  M as qe,
  x as Ue,
  $ as Ge,
  bp as Qe,
  R as Ye,
  aU as Ke,
  _ as Xe,
  aX as Ze,
  aY as Je,
  aZ as pe,
  b0 as et,
  b1 as tt,
  g as st,
  a8 as at,
  L as nt,
  cP as rt,
  a9 as ot
} from "./assets/index-BDcs8OaA.js";
import {
  b as it,
  A as lt
} from "./u_4jEEiW.js";
import {
  I as Ce
} from "./nlzjmGkJ.js";
import {
  P as ct
} from "./RP-OqBPd.js";
import {
  T as ut
} from "./6QZjTHo4.js";
import {
  u as dt
} from "./wwFkL9Uk.js";
import {
  u as mt
} from "./kn1s7jTN.js";
import {
  g as Se,
  u as pt,
  a as ht,
  T as xt,
  b as gt,
  c as he,
  d as ft,
  e as xe
} from "./332MWIlb.js";
import {
  C as vt
} from "./y5ax0GID.js";
import {
  S as Ae,
  C as bt,
  s as jt
} from "./qKy98dVq.js";
import {
  D as wt,
  S as yt,
  a as Ct,
  c as St,
  d as At,
  e as kt,
  f as Nt,
  g as Tt,
  h as It
} from "./lTzDYV02.js";
import {
  R as Pt
} from "./BuU0vr-X.js";
import {
  u as ke
} from "./ZLekcFwQ.js";
import {
  a as ge
} from "./xirfvWJJ.js";
import {
  u as Et
} from "./aF5kppaH.js";
import {
  b as Mt,
  c as Bt,
  d as Dt
} from "./g03_-ZTT.js";
import {
  A as $t
} from "./tzIo__Ux.js";
import {
  u as Wt
} from "./0YkWVzPW.js";
import "./8bNoHJzy.js";
import "./tX9VNdav.js";
import "./uJJRkjMC.js";
import "./xrvJovm6.js";
import "./FUKZW4Fx.js";
(function () {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
      s = new Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "ed21718a-5c68-443f-853e-a0632ce054ef", a._sentryDebugIdIdentifier = "sentry-dbid-ed21718a-5c68-443f-853e-a0632ce054ef")
  } catch {}
})();
const _t = t.memo(({
    asset: a,
    logoURI: s,
    select: x,
    apr: d,
    filled: o,
    isSelected: m,
    balance: p
  }) => e.jsx(l, {
    alignCenter: !0,
    className: V("dark:bg-dark-dark-gray bg-btn-light-tint z-0 lig rounded-3xl p-2 hover:duration-150 transition cursor-pointer  dark:hover:bg-dark-border-primary hover:bg-btn-light-tint-active border border-transparent", {
      "brightness-90 dark:brightness-110 dark:!bg-dark-border-primary !bg-btn-light-tint-active border-btn-primary": m
    }),
    onClick: () => x(a),
    children: e.jsxs(l, {
      className: "gap-x-3 pl-2",
      flex: 1,
      children: [e.jsx(l, {
        center: !0,
        className: "gap-x-2",
        children: e.jsx(Y, {
          asset: a,
          logoURI: s,
          size: 34
        })
      }), e.jsxs(l, {
        col: !0,
        flex: 1,
        children: [e.jsx(l, {
          alignCenter: !0,
          justify: "between",
          children: e.jsx(b, {
            fontWeight: "medium",
            textStyle: "body",
            children: a ?.ticker
          })
        }), e.jsx(l, {
          row: !0,
          className: "gap-x-2 justify-between pr-2",
          children: e.jsxs(l, {
            center: !0,
            className: "gap-1",
            children: [e.jsx(b, {
              fontWeight: "light",
              textStyle: "caption",
              textTransform: "uppercase",
              variant: "secondary",
              children: c("common.APR")
            }), typeof d < "u" ? e.jsx(b, {
              textStyle: "caption",
              variant: "primaryBtn",
              children: d || "N/A"
            }) : e.jsx(Le, {
              size: "xs"
            })]
          })
        })]
      }), e.jsxs(l, {
        center: !0,
        className: "gap-2",
        children: [!!p && e.jsx(b, {
          fontWeight: "medium",
          textStyle: "caption-xs",
          variant: "secondary",
          children: p.toSignificant(6)
        }), typeof o < "u" && e.jsx(Q, {
          content: `${c("common.filled")}: ${Se(o)||"N/A"}`,
          children: e.jsxs(T, {
            position: "relative",
            children: [e.jsx(Fe, {
              color: "brand.btnPrimary",
              size: "35px",
              trackColor: "borderPrimary",
              value: o
            }), e.jsx(T, {
              alignItems: "center",
              bottom: 0,
              justifyContent: "center",
              left: 0,
              position: "absolute",
              right: 0,
              top: 0,
              children: e.jsxs(b, {
                className: V("text-[10px]", {
                  "text-[9px]": o >= 100
                }),
                fontWeight: "semibold",
                textStyle: "caption-xs",
                variant: "secondary",
                children: [Math.floor(o), "%"]
              })
            })]
          })
        })]
      })]
    })
  })),
  fe = ({
    assets: a,
    onSelect: s,
    onClose: x,
    isLoading: d,
    setQuery: o,
    selectedAsset: m
  }) => {
    const {
      filteredAssets: p,
      select: v
    } = it({
      assets: a,
      onSelect: s,
      onClose: x
    }), C = t.useCallback(g => {
      v(g), setTimeout(() => o ?.(""), 500)
    }, [v, o]);
    return e.jsxs(l, {
      col: !0,
      className: V("rounded-box-lg justify-center items-start w-2/5 py-5 px-6", Oe.secondary),
      flex: 1,
      children: [e.jsx(l, {
        className: "w-full -mt-2 mb-2 pr-3.5",
        flex: 1,
        justify: "end",
        children: e.jsx(Q, {
          content: c("views.savings.aprTooltip"),
          place: "bottom",
          children: e.jsx(B, {
            className: "ml-1",
            color: "primaryBtn",
            name: "infoCircle",
            size: 24
          })
        })
      }), p.length ? e.jsx(l, {
        className: "!overflow-x-clip flex-col overflow-y-auto gap-1.5 w-full h-full",
        children: p.map(g => t.createElement(_t, {
          ...g,
          isSelected: m ?.eq(g.asset),
          key: g.asset.toString(),
          select: C
        }))
      }) : e.jsx(l, {
        justifyCenter: !0,
        className: "pt-4",
        flex: 1,
        children: d ? e.jsx(B, {
          spin: !0,
          name: "loader",
          size: 24
        }) : e.jsx(b, {
          children: c("components.assetSelect.noResultsFound")
        })
      })]
    })
  },
  zt = ({
    isOpened: a,
    onClose: s,
    onConfirm: x,
    asset: d,
    amount: o,
    tabLabel: m,
    outboundDelay: p,
    expectedAmountOut: v,
    slippage: C,
    expectedOutputAmount: g,
    networkFee: A,
    timeToBreakEvenInfo: j
  }) => {
    const r = t.useMemo(() => {
        if (!p) return;
        const i = Math.floor(p / 60),
          n = Math.floor(i / 60),
          u = n > 0 ? `${n}h ` : "",
          f = i > 0 ? `${i%60}m ` : "",
          w = p % 60 > 0 ? ` ${p%60}s` : "";
        return `${u}${f}${w}`
      }, [p]),
      S = [{
        label: c("common.action"),
        value: m
      }, {
        label: c("common.asset"),
        value: `${d.ticker}`,
        icon: d
      }, {
        label: c("views.wallet.estimatedTime"),
        value: r || "N/A"
      }, {
        label: c("views.wallet.networkFee"),
        value: `${A.toSignificant(6)} ${A.ticker}`
      }, {
        label: c("common.slippage"),
        value: `${C?.toSignificant(6)||0} ${d.ticker}`
      }, {
        label: m,
        value: g ? `${g.toSignificant(6)} ${d.ticker}` : A.gte(o) ? c("views.savings.notEnoughForOutboundFee") : e.jsx(B, {
          spin: !0,
          color: "primary",
          name: "loader",
          size: 24
        })
      }, {
        label: c("views.savings.timeToBrakeEven"),
        value: j
      }];
    return e.jsx(vt, {
      buttonDisabled: !parseInt(v || "0"),
      inputAssets: [d],
      isOpened: a,
      onClose: s,
      onConfirm: () => x(g ?.toSignificant(6) || "0"),
      children: e.jsx(l, {
        col: !0,
        className: "mb-5",
        children: S.map(({
          label: i,
          value: n,
          icon: u
        }) => e.jsx(He, {
          label: i,
          value: e.jsxs(l, {
            center: !0,
            className: "gap-1",
            children: [e.jsx(b, {
              textStyle: "caption",
              children: n
            }), u && e.jsx(Y, {
              asset: u,
              size: 22
            })]
          })
        }, i))
      })
    })
  },
  ve = [yt, Ct, St, At, kt, Nt, Tt, It],
  Rt = ({
    data: a,
    unit: s = "$",
    chartIndexes: x,
    selectChart: d,
    selectedIndex: o,
    title: m
  }) => {
    const p = t.useRef(null),
      [v, C] = t.useState(null),
      g = t.useMemo(() => a.map(({
        asset: n
      }) => n), [a]),
      {
        data: A
      } = Z(g),
      j = o === Ae.Earned,
      r = t.useCallback(n => {
        const u = n === null ? [] : [{
          datasetIndex: 0,
          index: n
        }];
        p.current ?.tooltip ?.setActiveElements(u, {
          x: 0,
          y: 0
        }), p.current ?.setActiveElements(u), p.current ?.update()
      }, []),
      S = t.useMemo(() => ({
        cutout: "70%",
        padding: 0,
        responsive: !0,
        plugins: {
          legend: {
            display: !1
          },
          tooltip: {
            displayColors: !1,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            bodyFont: {
              size: 12
            },
            cornerRadius: 16,
            padding: 14,
            titleFont: {
              size: 14
            },
            titleSpacing: 8,
            callbacks: {
              label: n => `${n.formattedValue} ${s}`
            }
          }
        },
        onHover: (n, u) => {
          u[0] ?.index !== v && C(u[0] ?.index)
        }
      }), [v, s]),
      i = t.useMemo(() => {
        const n = a.map(({
          asset: u,
          amount: f,
          earnedAmount: w
        }) => {
          const I = j ? w ?.getValue("number") || 0 : f.getValue("number");
          return (A[u.toString()] ?.price_usd || 0) * I
        });
        return {
          labels: a.map(u => u.asset.ticker),
          datasets: [{
            label: j ? "Earned" : "Total",
            data: n,
            backgroundColor: ve.map(u => u + "50"),
            borderColor: ve,
            borderWidth: 1
          }]
        }
      }, [a, j, A]);
    return e.jsxs(T, {
      direction: "column",
      p: 2,
      w: "full",
      children: [e.jsxs(T, {
        justify: "space-between",
        pb: 4,
        children: [e.jsx(b, {
          textStyle: "subtitle2",
          children: m
        }), e.jsx(bt, {
          chartTypeIndexes: x,
          selectChartTypeIndex: d,
          selectedChartTypeIndex: o
        })]
      }), e.jsxs(T, {
        align: "center",
        justify: "space-between",
        children: [e.jsx(T, {
          height: 150,
          width: 40,
          children: e.jsx(wt, {
            data: i,
            id: "myChart",
            options: S,
            ref: p
          })
        }), e.jsx(T, {
          direction: "column",
          gap: 1,
          h: "full",
          pl: 2,
          w: "full",
          children: a.map((n, u) => {
            const f = j ? n.earnedAmount : n.amount,
              w = v === u;
            return e.jsxs(T, {
              _dark: {
                bgColor: w ? M.gray : M.bgDarkGray,
                _hover: {
                  bgColor: M.gray
                }
              },
              _hover: {
                border: `1px solid ${M.btnPrimary}`,
                bgColor: M.bgBtnLightTintActive
              },
              align: "center",
              bgColor: w ? M.bgBtnLightTintActive : M.bgLightGray,
              border: w ? `1px solid ${M.btnPrimary}` : "1px solid transparent",
              borderRadius: "3xl",
              display: "flex",
              gap: 2,
              justify: "space-between",
              onMouseEnter: () => r(a.indexOf(n)),
              onMouseLeave: () => r(null),
              p: 1,
              pl: 3,
              children: [e.jsxs(T, {
                gap: 1,
                children: [e.jsx(b, {
                  children: f ?.toSignificant(6)
                }), e.jsx(b, {
                  children: n.asset.ticker
                })]
              }), e.jsx(Y, {
                asset: n.asset,
                size: 28
              })]
            }, `${n.amount.getValue("string")}-${n.earnedAmount?.getValue("string")}`)
          })
        })]
      })]
    })
  },
  Vt = ({
    assetPriceUSD: a,
    position: s,
    withdraw: x,
    deposit: d
  }) => {
    const o = t.useCallback(p => `$${(a*p.getValue("number")).toFixed(2)}`, [a]),
      m = t.useMemo(() => [{
        label: "Amount Deposited",
        value: e.jsx(G, {
          icon: "usdCircle",
          tooltip: o(s.depositAmount),
          value: `${s.depositAmount.toSignificant(6)} ${s.asset.ticker}`
        })
      }, {
        label: "Amount Redeemable",
        value: e.jsx(G, {
          icon: "usdCircle",
          tooltip: o(s.amount),
          value: `${s?.amount?.toSignificant(6)} ${s.asset.ticker}`
        })
      }, {
        label: "Total Earned",
        value: e.jsx(G, {
          icon: "usdCircle",
          tooltip: o(s.earnedAmount || be),
          value: `${s?.earnedAmount?.toSignificant(6)} ${s.asset.ticker}`
        })
      }], [o, s]);
    return e.jsx(l, {
      col: !0,
      justifyCenter: !0,
      className: "self-stretch",
      children: e.jsxs(je, {
        className: "!rounded-2xl pt-2 !pb-0 !gap-0",
        type: "primary",
        children: [e.jsx(l, {
          alignCenter: !0,
          className: "cursor-pointer",
          justify: "between",
          children: e.jsxs(l, {
            alignCenter: !0,
            flex: 1,
            justify: "between",
            children: [e.jsxs(l, {
              center: !0,
              children: [e.jsx(l, {
                col: !0,
                children: e.jsx(Y, {
                  asset: s.asset,
                  size: 32
                })
              }), e.jsx(b, {
                className: V("mx-1 md:mx-3 !transition-all"),
                fontWeight: "semibold",
                children: s.asset.ticker
              })]
            }), e.jsxs(T, {
              children: [e.jsxs(b, {
                fontWeight: "bold",
                children: [s.amount ?.toSignificant(6), " ", s.asset.ticker]
              }), e.jsx(b, {
                children: " "
              }), e.jsx(b, {
                fontWeight: "light",
                children: `(${o(s.amount)})`
              })]
            })]
          })
        }), e.jsxs(l, {
          className: "gap-2",
          children: [e.jsx(Ce, {
            horizontalInset: !0,
            className: "my-3",
            items: m,
            size: "sm"
          }), e.jsxs(l, {
            col: !0,
            justifyCenter: !0,
            className: "gap-1",
            children: [e.jsx($, {
              stretch: !0,
              className: "!h-[32px]",
              onClick: () => d(s.asset),
              variant: "primary",
              children: c("views.liquidity.addButton")
            }), e.jsx($, {
              stretch: !0,
              className: "md:min-w-[100px] !h-[32px]",
              onClick: () => x(s.asset),
              variant: "outlineSecondary",
              children: c("common.withdraw")
            })]
          })]
        })]
      })
    }, s.asset.toString())
  },
  Lt = ({
    positions: a,
    refresh: s,
    withdrawAsset: x,
    depositAsset: d
  }) => {
    const [o, m] = t.useState(!1), [p, v] = t.useState(Ae.Earned), {
      isWalletLoading: C
    } = L(), g = t.useCallback(() => {
      m(!0), s(), setTimeout(() => m(!1), 500)
    }, [s]), {
      data: A
    } = Z(a.map(j => j.asset));
    return e.jsx(l, {
      center: !0,
      col: !0,
      className: "w-full",
      children: e.jsxs(l, {
        col: !0,
        className: "max-w-[480px] w-full gap-1",
        children: [!!a.length && e.jsxs(e.Fragment, {
          children: [e.jsxs(l, {
            className: "gap-x-2 mb-1 w-full",
            justify: "between",
            children: [e.jsx(l, {}), e.jsx(Pt, {
              loading: o,
              onLoad: g,
              size: 16
            })]
          }), e.jsx(je, {
            children: e.jsx(Rt, {
              chartIndexes: jt,
              data: a,
              selectChart: v,
              selectedIndex: p,
              title: "Earn positions"
            })
          })]
        }), a.length ? a.map(j => e.jsx(Vt, {
          assetPriceUSD: A ?. [j.asset.toString()] ?.price_usd || 0,
          deposit: d,
          position: j,
          withdraw: x
        }, j.asset.toString())) : e.jsxs(l, {
          center: !0,
          className: "gap-2",
          flex: 1,
          children: [e.jsx(b, {
            textStyle: "subtitle2",
            variant: "primary",
            children: C ? c("common.loading") : c("views.wallet.noDataToShow")
          }), C && e.jsx(B, {
            spin: !0,
            name: "loader",
            size: 32
          })]
        })]
      })
    })
  },
  Ft = ({
    onWithdraw: a,
    onDeposit: s,
    positions: x,
    refreshPositions: d
  }) => {
    const {
      setIsConnectModalOpen: o
    } = we(), {
      hasWallet: m
    } = L();
    return e.jsx(l, {
      className: "w-full self-stretch",
      children: m ? e.jsx(Lt, {
        depositAsset: s,
        positions: x,
        refresh: d,
        withdrawAsset: a
      }) : e.jsx(l, {
        center: !0,
        className: "self-stretch w-full",
        children: e.jsx($, {
          stretch: !0,
          className: "mt-3 max-w-[460px] self-center",
          onClick: () => o(!0),
          size: "lg",
          variant: "fancy",
          children: c("common.connectWallet")
        })
      })
    })
  },
  Ot = () => {
    const {
      pools: a
    } = ke("7d"), {
      synthCap: s
    } = ye();
    return t.useMemo(() => a.filter(o => o.saversDepth !== "0" && o.saversUnits !== "0").map(o => {
      const m = Number(o.saversAPR || 0) * 100,
        v = y.fromBigInt(BigInt(o.assetDepth), 8).mul(s),
        C = y.fromBigInt(BigInt(o.synthSupply), 8),
        g = v.gt(0) ? Number(C.div(v).mul(100).toFixed(2)) : 0;
      return {
        apr: Se(m),
        aprRaw: m / 100,
        asset: o.asset,
        filled: Math.min(100, Number(g))
      }
    }).sort((o, m) => m.filled - o.filled), [s, a])
  },
  Ht = ({
    isDeposit: a,
    asset: s,
    withdrawPercent: x,
    amount: d,
    apr: o
  }) => {
    const [m, p] = t.useState(), {
      getWalletAddress: v
    } = L(), C = t.useMemo(() => new y({
      value: d.getValue("number"),
      decimal: s.decimal
    }), [d, s.decimal]), g = ge(C), A = ge(x), j = t.useMemo(() => v(s.chain), [v, s.chain]), r = t.useCallback(async () => {
      if (!s.decimal || !g ?.gt(0)) return;
      const f = y.shiftDecimals({
          value: g,
          from: s.decimal,
          to: 8
        }).getBaseValue("string"),
        w = `${parseInt(A?.mul(100).getValue("string")||"10000")}`,
        N = await Mt({
          ...a ? {
            type: "deposit",
            amount: f
          } : {
            address: j,
            type: "withdraw",
            withdraw_bps: w
          },
          asset: s.toString().toLowerCase()
        });
      p(N)
    }, [g, a, j, A, s]);
    t.useEffect(() => {
      r()
    }, [r]);
    const S = t.useMemo(() => y.fromBigInt(BigInt(m ?.expected_amount_out || 0), 8), [m ?.expected_amount_out]),
      i = y.fromBigInt(BigInt(m ?.fees ?.total || "0"), qe.THUNDER),
      {
        inputFee: n
      } = Et({
        inputAsset: s,
        outputAsset: s
      }),
      u = t.useMemo(() => {
        const w = S.mul(o || 0).mul(1 / 365),
          I = i.add(n),
          N = w.gt(0) ? I.div(w) : 0;
        return Math.round(Number(N.toFixed(2)))
      }, [o, S, n, i]);
    return {
      slippage: i,
      getConfirmData: r,
      saverQuote: m,
      expectedOutputAmount: S,
      networkFee: n,
      daysToBreakEven: u
    }
  },
  qt = t.memo(({
    loading: a,
    hardCapReached: s,
    label: x,
    disabled: d,
    handleSubmit: o,
    address: m,
    setIsConnectModalOpen: p
  }) => e.jsx(l, {
    className: "self-stretch pt-5",
    children: m ? e.jsx(l, {
      className: "w-full",
      children: e.jsx($, {
        stretch: !0,
        disabled: d || s,
        error: s,
        loading: a,
        onClick: o,
        rightIcon: s ? e.jsx(B, {
          name: "infoCircle",
          size: 20
        }) : void 0,
        size: "lg",
        tooltip: s ? c("views.liquidity.hardCapReachedTooltip") : void 0,
        tooltipClasses: "text-center mx-[-2px]",
        variant: "fancy",
        children: x
      })
    }) : e.jsx($, {
      stretch: !0,
      onClick: () => p(!0),
      size: "lg",
      variant: "fancy",
      children: c("common.connectWallet")
    })
  }));
var k = (a => (a.Deposit = "deposit", a.Withdraw = "withdraw", a))(k || {}),
  X = (a => (a[a.Earn = 0] = "Earn", a[a.Positions = 1] = "Positions", a))(X || {});
const Ut = () => {
    const {
      getWalletAddress: a,
      isWalletLoading: s
    } = L(), [x, d] = t.useState([]), {
      pools: o
    } = ke(), [m, p] = t.useState(), [v, C] = t.useState([]), g = t.useMemo(() => v.length ? x.map(i => {
      const n = v.find(({
        asset: I
      }) => I === i.asset.toString().toUpperCase());
      if (!n) return i;
      const u = y.fromBigInt(BigInt(n.savers_depth), 8),
        f = y.fromBigInt(BigInt(n.savers_units), 8),
        w = i.units.div(f).mul(u);
      return {
        ...i,
        saverPool: n,
        amount: w,
        earnedAmount: i.depositAmount && w.gt(i.depositAmount) ? w.sub(i.depositAmount) : null
      }
    }) : x, [x, v]), A = t.useCallback(async i => {
      const n = a(i.chain);
      if (n) {
        const u = await Bt({
            asset: i.toString(),
            address: n
          }),
          f = y.fromBigInt(BigInt(u.units), 8),
          w = y.fromBigInt(BigInt(u.asset_deposit_value), 8);
        return f.gt(0) ? {
          asset: i,
          units: f,
          provider: u,
          amount: f,
          depositAmount: w
        } : null
      }
    }, [a]), j = t.useCallback(async () => {
      if (s) return;
      const n = (o ?.filter(f => f.saversDepth !== "0").map(f => Ue.fromStringSync(f.asset)) || []).map(A),
        u = await Promise.all(n);
      d(u.filter(Boolean))
    }, [s, o]), r = t.useCallback(i => g.find(n => n.asset.eq(i)), [g]), S = t.useCallback(async () => {
      const i = await Dt();
      C(i);
      const n = i.reduce((u, f) => (u[f.asset] = f.synth_mint_paused, u), {});
      p(n)
    }, []);
    return t.useEffect(() => {
      S()
    }, [S]), {
      getPosition: r,
      getSaverPosition: A,
      positions: g,
      refreshPositions: j,
      synthAvailability: m
    }
  },
  Gt = () => {
    const a = Ge(),
      s = Ot(),
      x = dt(),
      d = Qe(),
      {
        getMaxBalance: o
      } = mt(),
      {
        isChainHalted: m
      } = ye(),
      {
        positions: p,
        refreshPositions: v,
        getPosition: C,
        synthAvailability: g
      } = Ut(),
      {
        setIsConnectModalOpen: A
      } = we(),
      {
        getWalletAddress: j
      } = L(),
      {
        asset: r,
        setAsset: S,
        amount: i,
        setAmount: n
      } = pt(Ye.Earn),
      [u, f] = t.useState(!1),
      [w, I] = t.useState(!1),
      [N, Ne] = t.useState(k.Deposit),
      [Te, J] = t.useState(X.Earn),
      [F, Ie] = t.useState(new y({
        decimal: 2,
        value: 0
      })),
      [ee, Pe] = t.useState(be),
      [W, te] = t.useState(),
      O = t.useMemo(() => x.map(h => ({
        ...s.find(({
          asset: E
        }) => h.asset.toString().toLowerCase() === E.toLowerCase()),
        ...h
      })), [s, x]),
      P = N === k.Deposit,
      {
        data: se
      } = Z([r]),
      ae = t.useMemo(() => (se[r.toString()] ?.price_usd || 0) * i.getValue("number"), [i, r, se]),
      {
        isApproved: Ee,
        isLoading: ne
      } = Wt({
        assetValue: r.set(i.getValue("string")),
        force: !0
      }),
      Me = ht({
        asset: r
      }),
      _ = t.useMemo(() => O.find(({
        asset: {
          ticker: h
        }
      }) => h === r.ticker), [r.ticker, O]),
      {
        slippage: H,
        saverQuote: re,
        expectedOutputAmount: Be,
        networkFee: De,
        daysToBreakEven: q
      } = Ht({
        isDeposit: P,
        asset: r,
        withdrawPercent: F,
        amount: i,
        apr: _ ?.aprRaw
      }),
      {
        isLgActive: oe
      } = Ke(),
      z = t.useMemo(() => j(r.chain), [j, r.chain]);
    t.useEffect(() => {
      z ? o(r).then(h => te(h)) : te(void 0)
    }, [r, o, z]);
    const $e = t.useMemo(() => [{
        label: c("common.deposit"),
        value: k.Deposit
      }, {
        label: c("common.withdraw"),
        value: k.Withdraw
      }], []),
      R = t.useCallback(h => {
        J(X.Earn), Ne(h), n(new y({
          value: 0,
          decimal: r.decimal
        }))
      }, [r.decimal, n]),
      We = t.useCallback(h => {
        R(k.Deposit), S(h), n(new y({
          value: 0,
          decimal: h.decimal
        }))
      }, [n, S, R]),
      _e = t.useCallback(h => {
        R(k.Withdraw), S(h), n(new y({
          value: 0,
          decimal: h.decimal
        }))
      }, [n, S, R]),
      ze = t.useCallback(h => {
        Ie(h), z && n(ee.mul(h.div(100)))
      }, [z, ee, n]);
    t.useEffect(() => {
      const h = C(r);
      Pe(h ?.amount || new y({
        value: 0,
        decimal: 8
      }))
    }, [r, C, p]), t.useEffect(() => {
      v()
    }, [v]);
    const ie = t.useCallback(h => {
        S(h), n(new y({
          value: 0,
          decimal: h.decimal
        }))
      }, [S, n]),
      le = t.useCallback(async () => {
        const {
          savings: h
        } = await (await Xe(() => import("./G7qcxkrX.js"), __vite__mapDeps([0, 1, 2]))).getSwapKitClient(), D = F.getValue("number"), E = P ? {
          assetValue: r.set(i.getValue("string")),
          type: "add"
        } : {
          assetValue: r,
          type: "withdraw",
          percent: D
        };
        return h(E)
      }, [i, r, P, F]),
      Re = t.useCallback(async h => {
        f(!1);
        const D = Ze();
        a(Je({
          id: D,
          label: c(P ? "txManager.addAmountAsset" : "txManager.withdrawAmountAsset", {
            asset: r.ticker,
            amount: h
          }),
          type: P ? pe.TC_SAVINGS_ADD : pe.TC_SAVINGS_WITHDRAW,
          inChain: r.chain
        }));
        try {
          const E = await le();
          n(new y({
            value: 0,
            decimal: 8
          })), E && a(et({
            id: D,
            txid: E
          }))
        } catch (E) {
          console.error(E), a(tt({
            id: D,
            status: "error"
          }))
        }
      }, [a, r.chain, r.ticker, le, P, n]),
      ce = t.useMemo(() => !g ?. [r.toString()] && (_ ?.filled || 0) < 99.5, [r, _ ?.filled, g]),
      U = t.useMemo(() => r.chain === st.Binance, [r.chain]),
      ue = t.useMemo(() => U || i.lte(new y({
        value: 0,
        decimal: 8
      })) || P && (W && i.gt(W) || !ce) || m[r.chain], [i, r.chain, W, U, m, P, ce]),
      de = N === k.Deposit ? c("common.deposit") : c("common.withdraw"),
      me = t.useMemo(() => ({
        asset: r,
        value: i,
        balance: W,
        usdPrice: ae
      }), [r, i, W, ae]),
      K = t.useMemo(() => e.jsx(l, {
        center: !0,
        children: e.jsx(b, {
          textStyle: "caption",
          textTransform: "uppercase",
          children: e.jsx(G, {
            tooltip: c("views.savings.timeToBrakeEvenTip"),
            value: `${isFinite(q)?q:0} ${q===1?c("views.savings.day"):c("views.savings.days")}`
          })
        })
      }), [q]),
      Ve = t.useMemo(() => [{
        label: c("common.slippage"),
        value: e.jsx(l, {
          center: !0,
          children: e.jsx(b, {
            textStyle: "caption",
            children: `${H?H?.toSignificant(6):0} ${r.ticker}`
          })
        })
      }, {
        label: c("views.savings.timeToBrakeEven"),
        value: K
      }], [H, r.ticker, K]);
    return e.jsxs(l, {
      col: !0,
      className: "w-full max-w-[880px] flex self-center gap-3 mt-2",
      children: [e.jsx(at, {
        content: "Earn APY on native assets with THUNDERSwap EARN",
        keywords: "Earn, Savings, THUNDERSwap, APY, Native assets",
        title: c("views.savings.earn")
      }), e.jsxs(xt, {
        index: Te,
        onChange: J,
        children: [e.jsxs(gt, {
          children: [e.jsx(he, {
            children: c("views.savings.earn")
          }), e.jsx(he, {
            children: c("views.savings.myPositions")
          })]
        }), e.jsxs(ft, {
          children: [e.jsx(xe, {
            children: e.jsxs(l, {
              col: !0,
              className: "gap-3",
              children: [e.jsx(l, {
                className: "flex w-full justify-between",
                children: e.jsxs(l, {
                  alignCenter: !0,
                  children: [e.jsxs(b, {
                    className: "ml-3 mr-2",
                    textStyle: "h3",
                    children: [c("views.savings.earn"), " ", r.ticker]
                  }), e.jsx(b, {
                    textStyle: "h3",
                    variant: "primaryBtn",
                    children: _ ?.apr ? `${_?.apr} ${c("common.apr").toUpperCase()}` : ""
                  }), e.jsx(Q, {
                    content: c("views.savings.aprTooltip", {
                      asset: r.ticker
                    }),
                    place: "bottom",
                    children: e.jsx(B, {
                      className: "ml-1",
                      color: "primaryBtn",
                      name: "infoCircle",
                      size: 24
                    })
                  })]
                })
              }), e.jsxs(l, {
                alignCenter: !0,
                className: "px-3",
                justify: "between",
                children: [e.jsxs(b, {
                  fontWeight: "medium",
                  textStyle: "caption",
                  variant: "secondary",
                  children: [c("views.savings.description", {
                    asset: r.ticker
                  })]
                }), e.jsx(Q, {
                  content: c("views.savings.tooltipDescription", {
                    asset: r.ticker
                  }),
                  place: "bottom",
                  children: e.jsx(B, {
                    color: "primaryBtn",
                    name: "infoCircle",
                    size: 24
                  })
                })]
              }), e.jsxs(l, {
                row: !0,
                className: "w-full justify-center gap-5",
                children: [oe && e.jsx(l, {
                  className: "w-9/12",
                  children: e.jsx(fe, {
                    assets: O,
                    onSelect: ie,
                    selectedAsset: r
                  })
                }), e.jsxs(l, {
                  col: !0,
                  className: V("flex h-full", oe && "w-full"),
                  children: [e.jsx(ot, {
                    stretch: !0,
                    className: "!rounded-2xl md:!rounded-3xl !p-4 flex-col items-center self-stretch mt-2 space-y-1 shadow-lg md:w-full md:h-auto",
                    size: "lg",
                    children: e.jsxs(l, {
                      col: !0,
                      className: "self-stretch gap-2",
                      children: [e.jsx(ut, {
                        onChange: h => R(h),
                        tabs: $e,
                        value: N
                      }), N === k.Withdraw && e.jsx(ct, {
                        onChange: ze,
                        percent: F,
                        title: c("common.withdrawPercent")
                      }), e.jsx(lt, {
                        noFilters: !0,
                        AssetListComponent: fe,
                        assets: O,
                        className: "flex-1",
                        disabled: N === k.Withdraw,
                        onAssetChange: ie,
                        onValueChange: n,
                        poolAsset: me,
                        selectedAsset: me
                      }), e.jsx(Ce, {
                        horizontalInset: !0,
                        items: Ve
                      }), !ue && (!Ee || ne) && P ? e.jsx(l, {
                        className: "w-full pt-5",
                        children: e.jsx($, {
                          stretch: !0,
                          disabled: U || d,
                          error: U || d,
                          loading: ne,
                          onClick: () => I(!0),
                          size: "lg",
                          tooltip: d ? c("views.liquidity.hardCapReachedTooltip") : void 0,
                          variant: "fancy",
                          children: c("common.approve")
                        })
                      }) : e.jsx(qt, {
                        address: z,
                        disabled: ue,
                        handleSubmit: () => f(!0),
                        hardCapReached: N === k.Deposit && d,
                        label: de,
                        setIsConnectModalOpen: A
                      })]
                    })
                  }), e.jsx($t, {
                    handleApprove: Me,
                    inputAsset: r,
                    setVisible: I,
                    visible: w
                  }), e.jsx(zt, {
                    amount: i,
                    asset: r,
                    expectedAmountOut: re ?.expected_amount_out,
                    expectedOutputAmount: Be,
                    isOpened: u,
                    networkFee: De,
                    onClose: () => f(!1),
                    onConfirm: Re,
                    outboundDelay: re ?.outbound_delay_seconds || 0,
                    slippage: H,
                    tabLabel: de,
                    timeToBreakEvenInfo: K
                  })]
                })]
              })]
            })
          }), e.jsx(xe, {
            children: e.jsx(Ft, {
              onDeposit: We,
              onWithdraw: _e,
              positions: p,
              refreshPositions: v
            })
          })]
        })]
      })]
    })
  },
  fs = Gt;
export {
  fs as
  default
};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["G7qcxkrX.js", "assets/index-BDcs8OaA.js", "assets/index-PWKo4Vxk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}