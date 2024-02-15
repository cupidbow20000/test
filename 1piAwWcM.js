import {
  r as t,
  k as N,
  j as e,
  a7 as a,
  d7 as _e,
  d8 as X,
  T as l,
  t as n,
  be as Z,
  d9 as ot,
  o as D,
  da as de,
  db as lt,
  cd as ct,
  B as b,
  h as te,
  ac as Q,
  ab as dt,
  bF as ut,
  O as W,
  bw as Fe,
  L as Ae,
  dc as mt,
  x as $,
  v as J,
  dd as pt,
  ae as Ne,
  de as xt,
  d as U,
  $ as We,
  _ as Ue,
  aX as Ve,
  aY as Ge,
  aZ as ue,
  b0 as He,
  b1 as Qe,
  df as gt,
  K as ke,
  a1 as ht,
  bB as ft,
  dg as jt,
  bq as Be,
  R as yt,
  G as wt,
  I as St,
  a8 as bt,
  dh as vt,
  di as Ct,
  q as At,
  a9 as Nt,
  cA as kt,
  dj as Dt
} from "./assets/index-BDcs8OaA.js";
import {
  b as Tt,
  a as Mt,
  c as Pt,
  u as Lt,
  A as Ee
} from "./u_4jEEiW.js";
import {
  G as Ot
} from "./CFwsQoKA.js";
import {
  I as It
} from "./nlzjmGkJ.js";
import {
  u as pe
} from "./tX9VNdav.js";
import {
  u as Bt
} from "./VlgDKYov.js";
import {
  u as De
} from "./kn1s7jTN.js";
import {
  g as Et,
  a as zt,
  u as Rt,
  T as $t,
  b as _t,
  c as ze,
  d as Ft,
  e as Re
} from "./332MWIlb.js";
import {
  C as Ke
} from "./y5ax0GID.js";
import {
  C as Wt
} from "./PY5NJQUD.js";
import {
  u as Ut
} from "./u5k4-5Yk.js";
import {
  R as Vt
} from "./BuU0vr-X.js";
import {
  I as Gt
} from "./uJJRkjMC.js";
import {
  P as Ht
} from "./RP-OqBPd.js";
import {
  u as Qt
} from "./wwFkL9Uk.js";
import {
  a as Ce
} from "./xirfvWJJ.js";
import {
  A as Kt
} from "./tzIo__Ux.js";
import {
  u as Yt
} from "./0YkWVzPW.js";
import "./8bNoHJzy.js";
import "./6QZjTHo4.js";
import "./aF5kppaH.js";
import "./4bNlJGqv.js";
import "./dPAOcghz.js";
import "./-RWyXF4h.js";
import "./ZLekcFwQ.js";
import "./xrvJovm6.js";
import "./FUKZW4Fx.js";
(function () {
  try {
    var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
      g = new Error().stack;
    g && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[g] = "0b5b1183-94a0-4423-90ad-9d8ae327919d", s._sentryDebugIdIdentifier = "sentry-dbid-0b5b1183-94a0-4423-90ad-9d8ae327919d")
  } catch {}
})();
const Ye = ({
    stream: s,
    toggleStream: g,
    canStream: i,
    outputAsset: r,
    quote: o,
    invertedPriceDiff: c,
    title: p
  }) => {
    const h = (o ?.estimatedTime || 0) * 1e3,
      d = (o ?.streamingSwap ?.estimatedTime || 0) * 1e3,
      f = d && h ? d - h : 0,
      S = o ?.streamingSwap ?.expectedOutputUSD ? Number(o.streamingSwap.expectedOutputUSD) - Number(o.expectedOutputUSD) : 0,
      v = o ?.streamingSwap ?.expectedOutputUSD ? Number(o.expectedOutputUSD) - Number(o.streamingSwap.expectedOutputUSD) : 0,
      w = c ? v : S,
      u = t.useMemo(() => new N({
        value: o ?.expectedOutput || "0",
        decimal: r ?.decimal || 0
      }), [r ?.decimal, o ?.expectedOutput]),
      m = t.useMemo(() => new N({
        value: o ?.streamingSwap ?.expectedOutput || "0",
        decimal: r ?.decimal || 0
      }), [r ?.decimal, o ?.streamingSwap ?.expectedOutput]),
      x = pe();
    return e.jsx(a, {
      animateOpacity: !0,
      as: _e,
      in: i,
      w: "100%",
      children: e.jsxs(X, {
        gap: 2,
        p: 3,
        sx: {
          w: "full",
          borderRadius: 16
        },
        variant: "filledContainerTertiary",
        children: [e.jsxs(a, {
          children: [e.jsx(l, {
            color: "textSecondary",
            fontWeight: "semibold",
            ml: 2,
            textStyle: "caption",
            children: p || n("views.swap.priceOptimizationAvailable")
          }), e.jsx(Z, {
            content: n("views.swap.priceOptimizationInfo"),
            onClick: () => ot(lt),
            place: "bottom",
            children: e.jsx(D, {
              className: "ml-1",
              color: "secondary",
              name: "infoCircle",
              size: 18
            })
          })]
        }), e.jsxs(a, {
          gap: 1,
          children: [e.jsx(X, {
            borderColor: s ? "brand.btnPrimary" : void 0,
            flex: 1,
            onClick: () => g(!0),
            px: 2,
            py: 1,
            sx: {
              cursor: "pointer"
            },
            variant: "filledTertiary",
            children: e.jsxs(a, {
              direction: "column",
              children: [e.jsxs(a, {
                align: "center",
                gap: 1,
                justify: "space-between",
                children: [e.jsx(l, {
                  textStyle: "caption-xs",
                  children: n("views.swap.priceOptimized")
                }), e.jsx(D, {
                  color: "yellow",
                  name: "coin",
                  size: 20
                })]
              }), e.jsx(a, {
                gap: 1,
                children: e.jsxs(a, {
                  direction: "column",
                  mt: .5,
                  children: [e.jsx(a, {
                    gap: 1,
                    children: e.jsx(l, {
                      fontWeight: "normal",
                      opacity: d ? 1 : .5,
                      textStyle: "caption-xs",
                      children: d ? de(d, {
                        approx: !0
                      }) : "Time: N/A"
                    })
                  }), e.jsxs(a, {
                    gap: 1,
                    children: [e.jsxs(l, {
                      textStyle: "caption-xs",
                      children: [m.toSignificant(6), " ", r ?.ticker || ""]
                    }), e.jsxs(l, {
                      color: "brand.green",
                      fontWeight: "normal",
                      textStyle: "caption-xs",
                      children: ["(+", x(w), ")"]
                    })]
                  })]
                })
              })]
            })
          }), e.jsx(X, {
            borderColor: s ? void 0 : "brand.alpha.btnPrimary",
            flex: 1,
            onClick: () => g(!1),
            px: 2,
            py: 1,
            sx: {
              cursor: "pointer"
            },
            variant: "filledTertiary",
            children: e.jsxs(a, {
              direction: "column",
              children: [e.jsxs(a, {
                align: "center",
                gap: 1,
                justify: "space-between",
                children: [e.jsx(l, {
                  textStyle: "caption-xs",
                  children: n("views.swap.timeOptimized")
                }), e.jsx(D, {
                  color: "secondaryBtn",
                  name: "timer",
                  size: 22
                })]
              }), e.jsx(a, {
                gap: 1,
                children: e.jsxs(a, {
                  direction: "column",
                  mt: .5,
                  children: [e.jsxs(a, {
                    gap: 1,
                    children: [e.jsx(l, {
                      fontWeight: "normal",
                      opacity: h ? 1 : .5,
                      textStyle: "caption-xs",
                      children: h ? de(h, {
                        approx: !0
                      }) : "Time: N/A"
                    }), !!f && e.jsxs(l, {
                      color: "brand.green",
                      fontWeight: "normal",
                      textStyle: "caption-xs",
                      children: ["(", de(f, {
                        approx: !0
                      }), " faster)"]
                    })]
                  }), e.jsxs(l, {
                    textStyle: "caption-xs",
                    children: [u.toSignificant(6), " ", r ?.ticker || ""]
                  })]
                })
              })]
            })
          })]
        })]
      })
    })
  },
  $e = 6e3;

function Xe() {
  const {
    data: s
  } = ct(), g = s ?. [0] ?.thorchain, i = t.useCallback(o => (o - (g || 0)) * $e, [g]), r = t.useCallback(o => o * $e, []);
  return {
    getBlockTimeDifference: i,
    estimateTimeFromBlocks: r
  }
}
const Xt = t.memo(({
    asset: s,
    logoURI: g,
    select: i,
    extraInfo: r,
    isSelected: o,
    balance: c,
    filled: p
  }) => {
    const h = Number(p) >= 100,
      d = (100 / Number(r) * 100).toFixed(2);
    return e.jsx(b, {
      alignCenter: !0,
      className: te("dark:bg-dark-dark-gray bg-btn-light-tint z-0 lig rounded-3xl p-2 hover:duration-150 transition dark:hover:bg-dark-border-primary hover:bg-btn-light-tint-active border border-transparent", {
        "brightness-90 dark:brightness-110 dark:!bg-dark-border-primary !bg-btn-light-tint-active border-btn-primary": o
      }, h ? "cursor-not-allowed" : "cursor-pointer"),
      onClick: () => {
        !h && i(s)
      },
      children: e.jsxs(b, {
        className: "gap-x-3 pl-2",
        flex: 1,
        children: [e.jsx(b, {
          center: !0,
          className: "gap-x-2",
          children: e.jsx(Q, {
            asset: s,
            logoURI: g,
            size: 34
          })
        }), e.jsxs(b, {
          col: !0,
          flex: 1,
          children: [e.jsx(b, {
            alignCenter: !0,
            justify: "between",
            children: e.jsx(l, {
              fontWeight: "medium",
              textStyle: "body",
              children: s ?.ticker
            })
          }), e.jsx(b, {
            row: !0,
            className: "gap-x-2 justify-between pr-2",
            children: e.jsx(Z, {
              content: d ? n("views.lending.crRatio", {
                cr: d
              }) : "",
              children: e.jsxs(b, {
                center: !0,
                className: "gap-1",
                children: [e.jsx(l, {
                  fontWeight: "light",
                  textStyle: "caption",
                  textTransform: "uppercase",
                  variant: "secondary",
                  children: "LTV"
                }), e.jsx(l, {
                  textStyle: "caption",
                  variant: "primaryBtn",
                  children: r ? `${r}%` : "N/A"
                }), e.jsx(D, {
                  color: "secondary",
                  name: "infoCircle",
                  size: 14
                })]
              })
            })
          })]
        }), e.jsx(b, {
          center: !0,
          className: "gap-2",
          children: !!c && e.jsx(l, {
            fontWeight: "medium",
            textStyle: "caption-xs",
            variant: "secondary",
            children: c.toSignificant(6)
          })
        }), h && e.jsx(b, {
          center: !0,
          children: e.jsx(l, {
            color: "brand.red",
            textStyle: "caption-xs",
            children: n("views.lending.capReached")
          })
        }), typeof p < "u" && e.jsx(Z, {
          content: `${n("common.filled")}: ${Et(p)||"N/A"}`,
          children: e.jsxs(a, {
            position: "relative",
            children: [e.jsx(dt, {
              color: h ? "brand.red" : "brand.btnPrimary",
              size: "35px",
              trackColor: "borderPrimary",
              value: p
            }), e.jsx(a, {
              alignItems: "center",
              bottom: 0,
              justifyContent: "center",
              left: 0,
              position: "absolute",
              right: 0,
              top: 0,
              children: e.jsxs(l, {
                className: te("text-[10px]", {
                  "text-[9px]": p >= 100
                }),
                fontWeight: "semibold",
                textStyle: "caption-xs",
                variant: "secondary",
                children: [Math.floor(p), "%"]
              })
            })]
          })
        })]
      })
    })
  }),
  Zt = ({
    assets: s,
    onSelect: g,
    onClose: i,
    isLoading: r,
    setQuery: o,
    selectedAsset: c
  }) => {
    const {
      filteredAssets: p,
      select: h
    } = Tt({
      assets: s,
      onSelect: g,
      onClose: i
    }), d = t.useCallback(f => {
      h(f), setTimeout(() => o ?.(""), 500)
    }, [h, o]);
    return e.jsxs(b, {
      col: !0,
      className: te("rounded-box-lg justify-center items-start w-2/5 py-5 px-6", ut.secondary),
      flex: 1,
      children: [e.jsx(l, {
        fontWeight: "medium",
        mb: 2,
        ml: 2,
        textStyle: "caption",
        textTransform: "none",
        variant: "secondary",
        children: n("views.lending.selectCollateralAsset")
      }), p.length ? e.jsx(b, {
        className: "!overflow-x-clip flex-col overflow-y-auto gap-1.5 w-full h-full",
        children: p.map(f => t.createElement(Xt, {
          ...f,
          isSelected: c ?.eq(f.asset),
          key: `${f.asset.symbol}${f.asset.type}`,
          select: d
        }))
      }) : e.jsx(b, {
        justifyCenter: !0,
        className: "pt-4",
        flex: 1,
        children: r ? e.jsx(D, {
          spin: !0,
          name: "loader",
          size: 24
        }) : e.jsx(l, {
          children: n("components.assetSelect.noResultsFound")
        })
      })]
    })
  },
  Jt = "https://twitter.com/",
  qt = ({
    isOpened: s,
    onClose: g,
    onConfirm: i,
    asset: r,
    amount: o,
    estimatedTime: c,
    expectedOutputAmount: p,
    collateralAmount: h,
    collateralAsset: d,
    networkFee: f,
    expectedDebtInfo: S
  }) => {
    const v = t.useMemo(() => {
      if (!c) return;
      const w = Math.floor(c / 60),
        u = Math.floor(w / 60),
        m = u > 0 ? `${u}h ` : "",
        x = w > 0 ? `${w%60}m ` : "",
        y = c % 60 > 0 ? ` ${c%60}s` : "";
      return `${m}${x}${y}`
    }, [c]);
    return e.jsx(Ke, {
      inputAssets: [r],
      isOpened: s,
      onClose: g,
      onConfirm: () => i(p ?.toSignificant(6) || "0"),
      children: e.jsxs(b, {
        col: !0,
        className: "mb-5",
        children: [e.jsx(W, {
          label: e.jsxs(a, {
            align: "center",
            alignContent: "center",
            gap: 1,
            children: [e.jsx(l, {
              color: "textSecondary",
              mr: 1,
              textStyle: "caption",
              textTransform: "capitalize",
              children: n("views.views.lending.borrow")
            }), e.jsxs(a, {
              align: "center",
              gap: .5,
              children: [e.jsx(l, {
                textStyle: "caption",
                children: r.ticker
              }), e.jsx(Q, {
                asset: r,
                size: 22
              })]
            }), e.jsxs(a, {
              align: "center",
              gap: .5,
              children: [e.jsx(l, {
                fontWeight: "light",
                mx: 1,
                children: "for"
              }), e.jsx(l, {
                textStyle: "caption",
                children: d.ticker
              }), e.jsx(Q, {
                asset: d,
                size: 22
              })]
            })]
          }),
          value: void 0
        }), e.jsx(W, {
          className: "min-h-[38px]",
          label: n("views.lending.collateral"),
          showBorder: !1,
          value: e.jsxs(a, {
            align: "center",
            gap: .5,
            children: [e.jsxs(l, {
              textStyle: "caption",
              children: [o.toSignificant(6), " ", d.ticker]
            }), e.jsx(Q, {
              asset: d,
              size: 22
            })]
          })
        }), e.jsx(W, {
          className: "min-h-[32px]",
          label: n("views.swap.slippage"),
          showBorder: !1,
          value: e.jsxs(l, {
            textStyle: "caption",
            children: [o.sub(h).toSignificant(6), " ", d.ticker]
          })
        }), e.jsx(W, {
          className: "min-h-[38px]",
          label: n("views.lending.colalteralAfterSlippage"),
          value: e.jsxs(l, {
            textStyle: "caption",
            children: [h.toSignificant(6), " ", d.ticker]
          })
        }), e.jsx(W, {
          className: "min-h-[38px]",
          label: n("views.lending.borrow"),
          showBorder: !1,
          value: e.jsxs(a, {
            align: "center",
            gap: 1,
            children: [e.jsx(l, {
              textStyle: "caption",
              children: p ? `${p.toSignificant(6)} ${r.ticker}` : f ?.gte(o) ? n("views.savings.notEnoughForOutboundFee") : e.jsx(D, {
                spin: !0,
                color: "primary",
                name: "loader",
                size: 24
              })
            }), e.jsx(Q, {
              asset: r,
              size: 22
            })]
          })
        }), e.jsx(W, {
          className: "min-h-[36px]",
          label: n("views.lending.expectedDebt"),
          value: e.jsx(a, {
            align: "center",
            gap: 1,
            children: e.jsx(l, {
              textStyle: "caption",
              children: S || e.jsx(D, {
                spin: !0,
                color: "primary",
                name: "loader",
                size: 24
              })
            })
          })
        }), e.jsx(W, {
          className: "min-h-[38px]",
          label: n("views.wallet.estimatedTime"),
          showBorder: !1,
          value: e.jsx(l, {
            textStyle: "caption",
            children: v || "N/A"
          })
        }), e.jsx(Fe, {
          className: "mt-4",
          title: e.jsx(e.Fragment, {
            children: e.jsxs(l, {
              mx: 2,
              children: [n("views.lending.experimentalDisclaimer"), " ", e.jsx(Ae, {
                className: "text-twitter-blue cursor-pointer",
                to: Jt,
                children: e.jsxs(l, {
                  fontWeight: "medium",
                  noOfLines: 1,
                  variant: "blue",
                  children: [n("views.lending.riskDisclaimer"), " →"]
                })
              })]
            })
          }),
          type: "warn"
        })]
      })
    })
  };

function en() {
  const {
    data: s
  } = mt(), {
    getMaxBalance: g,
    isWalletConnected: i
  } = De(), [r, o] = t.useState([]);
  return t.useEffect(() => {
    s && Promise.all(s.map(async c => {
      const p = $.fromStringSync(c.asset);
      return {
        ...c,
        asset: p,
        derivedDepthPercentage: Number(c.derivedDepthPercentage),
        balance: i(p.chain) ? await g(p) : void 0,
        extraInfo: c.ltvPercentage && c.ltvPercentage !== "NaN" ? c.ltvPercentage : void 0,
        filled: c.filledPercentage ? Number(c.filledPercentage) : void 0,
        lendingAvailable: c.lendingAvailable,
        ltvPercentage: c.ltvPercentage
      }
    })).then(c => o(c.filter(p => p.lendingAvailable)))
  }, [s, g, i]), r
}
const tn = () => {
    const {
      getWalletAddress: s,
      isWalletLoading: g
    } = J(), [i, r] = t.useState(null), [o] = pt(), [c, p] = t.useState(!1), h = t.useMemo(() => i ?.map(m => m.asset) || [], [i]), {
      isLoading: d,
      data: f
    } = Ne(h), S = t.useMemo(() => d ? new N(0) : i ?.reduce((m, {
      asset: x,
      collateralCurrent: y
    }) => {
      const j = f[x.toString()] ?.price_usd || 0,
        A = Number(y.toFixed(2)) || 0;
      return m.add(new N(j).mul(A))
    }, new N(0)), [i, f, d]), v = t.useCallback(async m => {
      const x = s(m.chain);
      if (x) {
        const {
          data: y
        } = await o({
          asset: `${m.chain}.${m.ticker}`,
          address: x
        }), j = $.fromStringSync(m.toString(), y ?.collateralDeposited || "0"), A = $.fromStringSync(m.toString(), y ?.collateralWithdrawn || "0"), k = $.fromStringSync(m.toString(), y ?.collateralCurrent || "0"), L = new N({
          value: y ?.debtIssued || "0",
          decimal: 8
        }), M = new N({
          value: y ?.debtRepaid || "0",
          decimal: 8
        }), E = new N({
          value: y ?.debtCurrent || "0",
          decimal: 8
        });
        return parseFloat(y ?.debtCurrent || "0") ? {
          asset: m,
          collateralCurrent: k,
          collateralDeposited: j,
          collateralWithdrawn: A,
          debtCurrent: E,
          debtIssued: L,
          debtRepaid: M,
          lastOpenHeight: y ?.lastOpenHeight || 0,
          ltvPercentage: y ?.ltvPercentage
        } : null
      }
      return null
    }, [o, s]), w = t.useCallback(async () => {
      if (g) return;
      p(!0);
      const m = xt.map(v),
        y = (await Promise.allSettled(m)).reduce((j, A) => "value" in A && A.value !== null ? [...j, A.value] : j, []);
      r(y), p(!1)
    }, [v, g]), u = i ?.reduce((m, x) => m.add(x.debtCurrent), N.fromBigInt(0n, 8));
    return {
      refreshLoans: w,
      loans: i,
      totalCollateral: S,
      totalBorrowed: u,
      loansData: i || [],
      isLoading: c
    }
  },
  nn = ({
    depth: s,
    totalFeeUsd: g
  }) => {
    const i = sn(Number(s)),
      r = pe();
    return e.jsx(Z, {
      content: i.tooltip,
      children: e.jsxs(a, {
        alignItems: "center",
        gap: 2,
        children: [e.jsx(l, {
          color: i.color,
          textStyle: "caption",
          children: r(g || 0)
        }), e.jsx(D, {
          color: "secondary",
          name: "infoCircle",
          size: 20
        })]
      })
    })
  };

function sn(s) {
  return s ? s > 85 ? {
    color: "brand.green",
    tooltip: n("views.lending.slippage.low")
  } : s > 70 ? {
    color: "brand.yellow",
    tooltip: n("views.lending.slippage.medium")
  } : {
    color: "brand.red",
    tooltip: n("views.lending.slippage.high")
  } : {
    color: "",
    tooltip: ""
  }
}
const rn = t.memo(({
    loading: s,
    label: g,
    disabled: i,
    handleSubmit: r,
    address: o,
    setIsConnectModalOpen: c,
    hasError: p
  }) => e.jsx(b, {
    className: "self-stretch pt-5",
    children: o ? e.jsx(b, {
      className: "w-full",
      children: e.jsx(U, {
        stretch: !0,
        disabled: i,
        error: p,
        loading: s,
        onClick: r,
        size: "lg",
        variant: "fancy",
        children: g
      })
    }) : e.jsx(U, {
      stretch: !0,
      loading: s,
      onClick: () => c(!0),
      size: "lg",
      variant: "fancy",
      children: n("common.connectWallet")
    })
  })),
  an = ({
    header: s,
    value: g,
    tooltipText: i
  }) => e.jsxs(X, {
    flex: 1,
    gap: 4,
    height: "full",
    px: 4,
    variant: "filledContainerSecondary",
    children: [e.jsxs(a, {
      justify: "space-between",
      w: "full",
      children: [e.jsx(l, {
        textStyle: "subtitle1",
        children: s
      }), i && e.jsx(Z, {
        content: i,
        place: "bottom",
        children: e.jsx(D, {
          color: "primaryBtn",
          name: "infoCircle",
          size: 24
        })
      })]
    }), e.jsx(l, {
      textStyle: "h2",
      children: g
    })]
  }),
  on = "https://twitter.com/",
  ln = ({
    isOpened: s,
    onClose: g,
    onConfirm: i,
    asset: r,
    amount: o,
    tabLabel: c,
    estimatedTime: p,
    expectedOutputAmount: h,
    expectedOutputMaxSlippage: d,
    collateralAmount: f,
    collateralAsset: S,
    networkFee: v,
    expectedDebtInfo: w
  }) => {
    const u = t.useMemo(() => {
        if (!p) return;
        const A = Math.floor(p / 60),
          k = Math.floor(A / 60),
          L = k > 0 ? `${k}h ` : "",
          M = A > 0 ? `${A%60}m ` : "",
          E = p % 60 > 0 ? ` ${p%60}s` : "";
        return `${L}${M}${E}`
      }, [p]),
      m = t.useMemo(() => [{
        label: n("common.action"),
        value: c
      }, {
        label: n("common.asset"),
        value: `${r.ticker}`,
        icon: r
      }], [r, c]),
      x = t.useMemo(() => [{
        label: n("views.wallet.estimatedTime"),
        value: u || "N/A"
      }, {
        label: c,
        value: h ? `${h.toSignificant(6)} ${r.ticker}` : v ?.gte(o) ? n("views.savings.notEnoughForOutboundFee") : e.jsx(D, {
          spin: !0,
          color: "primary",
          name: "loader",
          size: 24
        })
      }], [o, r, h, v, c, u]),
      y = t.useMemo(() => [{
        label: n("views.lending.collateral"),
        value: `${S?.ticker}`,
        icon: S
      }, {
        label: n("views.wallet.estimatedTime"),
        value: u || "N/A"
      }, {
        label: c,
        value: h ? `${h.toSignificant(6)} ${r.ticker}` : v ?.gte(o) ? n("views.savings.notEnoughForOutboundFee") : e.jsx(D, {
          spin: !0,
          color: "primary",
          name: "loader",
          size: 24
        })
      }, {
        label: n("common.minReceived"),
        value: d ? `${d?.toSignificant(6)} ${r.ticker}` : e.jsx(D, {
          spin: !0,
          color: "primary",
          name: "loader",
          size: 24
        })
      }, {
        label: n("views.lending.collateralValue"),
        value: f && S ? `${f.toSignificant(6)} ${S.ticker}` : e.jsx(D, {
          spin: !0,
          color: "primary",
          name: "loader",
          size: 24
        })
      }, {
        label: n("views.lending.expectedDebt"),
        value: w || e.jsx(D, {
          spin: !0,
          color: "primary",
          name: "loader",
          size: 24
        })
      }], [o, r, f, S, w, h, d, v, c, u]),
      j = t.useMemo(() => w ? m.concat(y) : m.concat(x), [y, w, x, m]);
    return e.jsx(Ke, {
      inputAssets: [r],
      isOpened: s,
      onClose: g,
      onConfirm: () => i(h ?.toSignificant(6) || "0"),
      children: e.jsxs(b, {
        col: !0,
        className: "mb-5",
        children: [j.map(({
          label: A,
          value: k,
          icon: L
        }) => e.jsx(W, {
          label: A,
          value: e.jsxs(b, {
            center: !0,
            className: "gap-1",
            children: [e.jsx(l, {
              textStyle: "caption",
              children: k
            }), L && e.jsx(Q, {
              asset: L,
              size: 22
            })]
          })
        }, A)), e.jsx(Fe, {
          className: "mt-4",
          title: e.jsx(e.Fragment, {
            children: e.jsxs(l, {
              mx: 2,
              children: [n("views.lending.experimentalDisclaimer"), " ", e.jsx(Ae, {
                className: "text-twitter-blue cursor-pointer",
                to: on,
                children: e.jsxs(l, {
                  fontWeight: "medium",
                  noOfLines: 1,
                  variant: "blue",
                  children: [n("views.lending.riskDisclaimer"), " →"]
                })
              })]
            })
          }),
          type: "warn"
        })]
      })
    })
  };

function ve({
  children: s
}) {
  return e.jsx(a, {
    align: "start",
    direction: "column",
    flex: 1,
    gap: 2,
    justify: "center",
    children: s
  })
}

function cn({
  repayAsset: s,
  collateralAsset: g,
  amount: i,
  onSuccess: r,
  repayQuote: o,
  stream: c
}) {
  const [p, h] = t.useState(!1), d = We(), {
    getWalletAddress: f
  } = J(), S = t.useMemo(() => f(g.chain), [f, g.chain]), v = t.useCallback(async m => {
    const {
      loan: x
    } = await (await Ue(() => import("./G7qcxkrX.js"), __vite__mapDeps([0, 1, 2]))).getSwapKitClient();
    h(!1);
    const y = Ve();
    d(Ge({
      id: y,
      label: n("txManager.closeLoan", {
        asset: s.ticker,
        amount: m
      }),
      type: ue.TC_LENDING_CLOSE,
      inChain: s.chain
    }));
    try {
      const j = await x({
        type: "close",
        memo: c ? o ?.streamingSwap ?.memo : o ?.memo,
        assetValue: $.fromStringSync(s.toString(), s.getValue("string")).add(i),
        minAmount: $.fromStringSync(s.toString(), m)
      });
      r ?.(), j && d(He({
        id: y,
        txid: j,
        timestamp: new Date,
        advancedTracker: !0,
        initialPayload: o ? {
          isLending: !0,
          ...o,
          fromAddress: S
        } : void 0,
        type: ue.TC_LENDING_CLOSE
      }))
    } catch (j) {
      console.error(j), d(Qe({
        id: y,
        status: "error"
      }))
    }
  }, [d, s, c, o, i, r, S]), w = t.useCallback(() => {
    h(!0)
  }, []), u = t.useCallback(() => {
    h(!1)
  }, []);
  return {
    handleRepay: v,
    isConfirmOpen: p,
    openRepayConfirm: w,
    closeRepayConfirm: u
  }
}
const Ze = s => {
    const [g, i] = t.useState(!1), r = t.useMemo(() => !!s, [s]), o = t.useCallback(c => i(c && !!r), [r]);
    return t.useEffect(() => {
      o(r)
    }, [r, o]), {
      toggleStream: o,
      stream: g,
      canStream: r
    }
  },
  dn = ({
    asset: s,
    collateralAsset: g,
    percentage: i
  }) => {
    const {
      getWalletAddress: r
    } = J(), [o, c] = t.useState(new N({
      value: 0,
      decimal: 8
    })), p = t.useMemo(() => r(g.chain), [r, g.chain]), h = t.useMemo(() => r(s.chain), [r, s.chain]), {
      data: d,
      isFetching: f,
      error: S
    } = gt({
      senderAddress: h,
      collateralAddress: p,
      amountPercentage: i.toFixed(),
      collateralAsset: g.toString(),
      repayAsset: s.toString()
    }, {
      skip: !i.toFixed()
    }), {
      canStream: v,
      toggleStream: w,
      stream: u
    } = Ze(d ?.streamingSwap ?.memo), m = t.useMemo(() => u && d ?.streamingSwap ? d.streamingSwap : d, [d, u]);
    t.useEffect(() => {
      (async () => {
        if (!m || S) return c(new N({
          value: 0,
          decimal: 8
        }));
        const j = new N({
          value: m.repayAssetAmount,
          decimal: s.decimal
        });
        c(j)
      })()
    }, [s, m, S]);
    const x = t.useMemo(() => ({
      estimatedTime: d ?.estimatedTime,
      expectedOutput: d ?.repayAssetAmount || "",
      expectedOutputUSD: d ?.repayAssetAmount || "",
      streamingSwap: {
        estimatedTime: d ?.streamingSwap ?.estimatedTime,
        expectedOutput: d ?.streamingSwap ?.repayAssetAmount || "",
        expectedOutputUSD: d ?.streamingSwap ?.repayAssetAmountUSD || ""
      }
    }), [d ?.estimatedTime, d ?.repayAssetAmount, d ?.streamingSwap ?.estimatedTime, d ?.streamingSwap ?.repayAssetAmount, d ?.streamingSwap ?.repayAssetAmountUSD]);
    return {
      isLoading: f,
      repayAssetAmount: o,
      repayQuote: d,
      canStream: v,
      stream: u,
      toggleStream: w,
      repayOptimizeQuoteDetails: x
    }
  },
  un = ({
    loan: {
      collateralCurrent: s,
      debtCurrent: g,
      asset: i,
      lastOpenHeight: r
    },
    setBorrowTab: o,
    setCollateralAsset: c
  }) => {
    const [p, h] = t.useState(!1), [d, f] = t.useState(!1), [S, v] = t.useState(new N({
      decimal: 2,
      value: 0
    })), [w, u] = t.useState(), [m, x] = t.useState($.fromIdentifierSync(Je)), {
      getBlockTimeDifference: y
    } = Xe(), {
      getMaxBalance: j
    } = De(), {
      setIsConnectModalOpen: A
    } = ke(), {
      getWalletAddress: k
    } = J(), L = Qt({
      includeRune: !0
    }), {
      data: M
    } = Ne([i, m]), E = t.useCallback(O => {
      O.stopPropagation(), h(ce => !ce)
    }, []), _ = Ce(S, 500), K = y(r + qe), I = t.useMemo(() => k(m.chain), [k, m.chain]), B = K <= 0, {
      repayAssetAmount: T,
      isLoading: ne,
      repayQuote: xe,
      stream: se,
      canStream: re,
      toggleStream: Y,
      repayOptimizeQuoteDetails: ae
    } = dn({
      asset: m,
      collateralAsset: i,
      percentage: _,
      totalAmount: g,
      hasLoanMatured: B
    }), {
      isApproved: ie,
      isLoading: q
    } = Yt({
      assetValue: m.set(T.getValue("string")),
      force: !0
    }), ge = zt({
      asset: i
    }), he = t.useMemo(() => {
      const O = M[i.toString()] ?.price_usd || 0;
      return s.mul(O).toCurrency("$")
    }, [i, s, M]), oe = t.useMemo(() => m.toString(), [m]), le = t.useMemo(() => (M[oe] ?.price_usd || 0) * Number(T.toFixed(2)), [T, oe, M]);
    t.useEffect(() => {
      I ? j(m).then(O => u(O)) : u(void 0)
    }, [I, m, j]);
    const F = t.useMemo(() => ({
        asset: m,
        value: T,
        balance: w,
        usdPrice: le
      }), [m, T, w, le]),
      z = t.useMemo(() => !(!B || T.lte(0) || w ?.lt(T)), [T, w, B]),
      V = t.useCallback(() => {
        v(new N({
          decimal: 2,
          value: 0
        }))
      }, []),
      {
        openRepayConfirm: ee,
        handleRepay: R,
        isConfirmOpen: fe,
        closeRepayConfirm: P
      } = cn({
        repayAsset: m,
        collateralAsset: i,
        amount: T,
        onSuccess: V,
        repayQuote: xe,
        stream: se
      });
    t.useEffect(() => {
      !B && _.gt(0) && ht(n("views.lending.maturityError"))
    }, [_, B]);
    const je = de(K, {
      approx: !0
    });
    return e.jsxs(a, {
      alignSelf: "stretch",
      direction: "column",
      justify: "center",
      w: "full",
      children: [e.jsxs(X, {
        className: "!rounded-3xl flex-col flex !gap-0 !px-3 !py-3",
        variant: "filledContainerSecondary",
        children: [e.jsxs(a, {
          direction: {
            base: "column",
            lg: "row"
          },
          flex: 4,
          gap: 2,
          children: [e.jsxs(a, {
            flex: 5,
            children: [e.jsx(ve, {
              children: e.jsxs(a, {
                gap: 1,
                children: [e.jsx(a, {
                  align: "center",
                  children: e.jsx(Q, {
                    asset: i,
                    size: 36
                  })
                }), e.jsxs(a, {
                  direction: "column",
                  children: [e.jsx(l, {
                    children: `${s.toSignificant(4)} ${i.symbol}`
                  }), e.jsx(l, {
                    children: he
                  })]
                })]
              })
            }), e.jsx(ve, {
              children: e.jsx(l, {
                textAlign: "end",
                children: `$${g.toFixed(2)}`
              })
            }), e.jsx(ve, {
              children: e.jsx(l, {
                variant: B ? "green" : "primary",
                children: B ? n("views.lending.repayAvailable") : je
              })
            })]
          }), e.jsxs(a, {
            align: "center",
            direction: "row",
            flex: {
              md: 2,
              lg: 3,
              xl: 3
            },
            gap: 2,
            justify: "end",
            mt: {
              base: 2,
              md: 0
            },
            pl: {
              md: 4,
              lg: 8
            },
            children: [e.jsx(U, {
              flex: 1,
              onClick: O => {
                O.stopPropagation(), o(), c(i)
              },
              variant: "outlinePrimary",
              children: n("views.lending.borrow")
            }), e.jsx(U, {
              flex: 1,
              onClick: E,
              rightIcon: e.jsx(D, {
                className: te({
                  "-rotate-180": p
                }),
                name: "chevronDown",
                size: 14
              }),
              variant: "outlineSecondary",
              children: n("views.lending.repay")
            })]
          })]
        }), e.jsx(_e, {
          in: p,
          children: e.jsx(a, {
            align: "center",
            flex: 1,
            justify: "center",
            w: "full",
            children: e.jsx(X, {
              bg: "borderPrimary",
              borderRadius: "3xl",
              mt: {
                base: 2,
                md: 4
              },
              variant: "filledContainerPrimary",
              w: "full",
              children: e.jsxs(a, {
                align: "center",
                direction: "column",
                display: "flex",
                flex: 1,
                justify: "center",
                children: [e.jsxs(a, {
                  alignSelf: "stretch",
                  direction: {
                    base: "column",
                    lg: "row"
                  },
                  flex: 1,
                  gap: {
                    base: 4,
                    lg: 8
                  },
                  children: [e.jsxs(a, {
                    direction: "column",
                    flex: 1,
                    children: [e.jsxs(a, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [e.jsxs(l, {
                        textStyle: "caption",
                        children: [n("views.lending.repayAsset"), ":"]
                      }), e.jsx(Mt, {
                        showAssetType: !0,
                        assets: L,
                        onSelect: x,
                        selected: F.asset
                      })]
                    }), e.jsx(Ht, {
                      highlightDisabled: !0,
                      className: "!p-0",
                      onChange: v,
                      percent: S,
                      slideClassName: "!pb-0",
                      title: n("views.lending.repayPercent")
                    }), e.jsx(Ye, {
                      canStream: re,
                      outputAsset: F.asset,
                      quote: ae,
                      stream: se,
                      title: n("views.lending.txOptimizeTitle"),
                      toggleStream: Y
                    })]
                  }), e.jsxs(a, {
                    direction: "column",
                    flex: 1,
                    children: [e.jsx(a, {
                      alignItems: "center",
                      minH: "40px",
                      children: e.jsxs(l, {
                        textStyle: "caption",
                        children: [n("views.lending.repayAmount"), ":"]
                      })
                    }), e.jsxs(a, {
                      children: [e.jsx(a, {
                        flex: 1,
                        justifyContent: "space-between",
                        children: ne ? e.jsx(a, {
                          alignItems: "center",
                          minH: "44px",
                          children: e.jsx(D, {
                            spin: !0,
                            color: "primary",
                            name: "loader",
                            size: 22
                          })
                        }) : e.jsx(Gt, {
                          disabled: !0,
                          amountValue: T,
                          className: "!text-2xl  pt-[1.5px] md:!w-full"
                        })
                      }), e.jsx(Pt, {
                        showAssetType: !0,
                        className: "cursor-default p-2",
                        selected: F.asset
                      })]
                    }), e.jsx(a, {
                      mt: 3,
                      children: e.jsxs(a, {
                        flex: 1,
                        justifyContent: "space-between",
                        children: [ne ? e.jsx(a, {
                          alignItems: "center",
                          minH: "21px",
                          children: e.jsx(D, {
                            spin: !0,
                            color: "secondary",
                            name: "loader",
                            size: 16
                          })
                        }) : e.jsx(l, {
                          variant: "secondary",
                          children: F.usdPrice.toFixed(2)
                        }), e.jsx(a, {
                          mr: 4,
                          children: e.jsxs(l, {
                            variant: "secondary",
                            children: [n("common.balance"), ":", " ", F.balance ?.toSignificant(6) || "0"]
                          })
                        })]
                      })
                    })]
                  })]
                }), T.getValue("number") > 0 && (!ie || q) ? e.jsx(U, {
                  stretch: !0,
                  disabled: q,
                  loading: q,
                  mt: 6,
                  onClick: () => f(!0),
                  size: "md",
                  variant: "fancy",
                  children: n("common.approve")
                }) : e.jsx(U, {
                  stretch: !0,
                  disabled: !z,
                  error: !z,
                  mt: 6,
                  onClick: O => {
                    if (O.stopPropagation(), !I) {
                      A(!0);
                      return
                    }
                    ee()
                  },
                  size: "md",
                  variant: "fancy",
                  children: I ? n("views.lending.repay") : n("common.connectWallet")
                })]
              })
            })
          })
        })]
      }), e.jsx(Kt, {
        handleApprove: ge,
        inputAsset: m,
        setVisible: f,
        visible: d
      }), e.jsx(ln, {
        amount: T,
        asset: m,
        expectedOutputAmount: T,
        isOpened: fe,
        onClose: P,
        onConfirm: R,
        tabLabel: n("views.lending.repay")
      })]
    }, `${i.symbol} + ${i.symbol}`)
  };
var me = (s => (s.Borrow = "borrow", s.Repay = "repay", s))(me || {}),
  Te = (s => (s[s.Borrow = 0] = "Borrow", s[s.Positions = 1] = "Positions", s))(Te || {});
const mn = ({
    setTab: s,
    setViewTab: g,
    setCollateralAsset: i,
    refreshLoans: r,
    totalBorrowed: o,
    totalCollateral: c,
    loans: p,
    isLoading: h
  }) => {
    const d = pe(),
      {
        setIsConnectModalOpen: f
      } = ke(),
      {
        hasWallet: S
      } = J(),
      v = () => {
        s(me.Borrow), g(Te.Borrow)
      },
      w = t.useMemo(() => [{
        header: n("views.lending.totalCollateralValue"),
        value: c ?.gt(0) ? d(c.toFixed(2)) : "-",
        tooltipText: "Fair market value of the assets used to secure a loan"
      }, {
        header: n("views.lending.totalDebtValue"),
        value: o ?.gt(0) ? d(o) : "-",
        tooltipText: "Value of borrowed assets"
      }], [d, o, c]);
    return t.useEffect(() => {
      r()
    }, [r]), e.jsx(ft, {
      alignSelf: "stretch",
      w: "full",
      children: S ? e.jsxs(a, {
        direction: "column",
        gap: 3,
        mt: 6,
        children: [e.jsx(a, {
          flex: 2,
          justifyContent: "space-between",
          w: "full",
          children: e.jsxs(a, {
            alignItems: "center",
            flex: 1,
            justifyContent: "space-between",
            children: [e.jsx(l, {
              ml: 3,
              mr: 2,
              textStyle: "h3",
              children: n("views.lending.myLoans")
            }), e.jsx(Vt, {
              loading: h,
              onLoad: r,
              size: 16
            })]
          })
        }), e.jsx(a, {
          direction: {
            base: "column",
            md: "row"
          },
          flex: 2,
          gap: 8,
          justifyContent: "space-between",
          mt: 4,
          w: "full",
          children: w.map(u => e.jsx(an, {
            header: u.header,
            tooltipText: u.tooltipText,
            value: u.value
          }, u.header))
        }), e.jsxs(a, {
          direction: "column",
          gap: 2,
          justify: "center",
          mt: 6,
          children: [!!p.length && e.jsx(a, {
            direction: "row",
            px: "12px",
            children: e.jsxs(a, {
              direction: "row",
              flex: 1,
              gap: 2,
              children: [e.jsxs(a, {
                flex: 5,
                children: [e.jsx(a, {
                  flex: 1,
                  children: e.jsx(l, {
                    color: "secondary",
                    ml: 3,
                    textStyle: "caption",
                    children: n("views.lending.collateral")
                  })
                }), e.jsx(a, {
                  flex: 1,
                  children: e.jsx(l, {
                    color: "secondary",
                    textStyle: "caption",
                    children: n("views.lending.debt")
                  })
                }), e.jsx(a, {
                  flex: 1,
                  children: e.jsx(Z, {
                    content: n("views.lending.unlockDescription"),
                    children: e.jsxs(a, {
                      align: "center",
                      flex: 1,
                      gap: 1,
                      children: [e.jsx(l, {
                        color: "secondary",
                        textStyle: "caption",
                        children: n("views.lending.unlock")
                      }), e.jsx(D, {
                        color: "secondary",
                        name: "infoCircle",
                        size: 14
                      })]
                    })
                  })
                })]
              }), e.jsx(a, {
                display: {
                  lg: "flex",
                  base: "none"
                },
                flex: 3,
                pl: "32px",
                children: e.jsx(l, {
                  color: "secondary",
                  textStyle: "caption",
                  children: n("views.lending.actions")
                })
              })]
            })
          }), p.length ? p.map(u => e.jsx(un, {
            loan: u,
            setBorrowTab: v,
            setCollateralAsset: i
          }, u.asset.ticker)) : e.jsx(a, {
            justify: "center",
            w: "full",
            children: h ? e.jsx(D, {
              spin: !0,
              name: "loader",
              size: 32
            }) : e.jsx(l, {
              children: "No open loans to display"
            })
          })]
        })]
      }) : e.jsx(a, {
        alignItems: "center",
        alignSelf: "stretch",
        justifyContent: "center",
        w: "full",
        children: e.jsx(U, {
          stretch: !0,
          alignSelf: "center",
          maxW: "460px",
          mt: 3,
          onClick: () => f(!0),
          size: "lg",
          variant: "fancy",
          children: n("common.connectWallet")
        })
      })
    })
  },
  pn = ({
    recipientAddress: s,
    senderAddress: g,
    assetIn: i,
    assetOut: r,
    amount: o,
    slippage: c
  }) => {
    const p = o.gte(0) ? o.toSignificant(8) : "0",
      h = Ce(p),
      d = Ce(c),
      {
        currentData: f,
        error: S,
        isFetching: v
      } = jt({
        assetIn: i.toString(),
        assetOut: r.toString(),
        amount: h,
        slippage: d.toString(),
        senderAddress: g,
        recipientAddress: s
      }, {
        skip: o.lte(0),
        refetchOnMountOrArgChange: !0
      }),
      {
        canStream: w,
        toggleStream: u,
        stream: m
      } = Ze(f ?.streamingSwap ?.memo || f ?.calldata ?.memo),
      x = t.useMemo(() => m && f ?.streamingSwap ? f.streamingSwap : f, [f, m]),
      y = t.useMemo(() => new N({
        value: x ?.expectedOutput || 0,
        decimal: r.decimal
      }), [r.decimal, x ?.expectedOutput]),
      j = t.useMemo(() => $.fromStringSync(r.toString(), x ?.expectedOutput), [r, x ?.expectedOutput]),
      A = t.useMemo(() => new N({
        value: x ?.expectedOutputMaxSlippage || 0,
        decimal: r.decimal
      }), [r.decimal, x ?.expectedOutputMaxSlippage]),
      k = t.useMemo(() => new N({
        value: x ?.expectedDebtIssued || 0,
        decimal: 8
      }), [x ?.expectedDebtIssued]),
      L = t.useMemo(() => y.sub(A), [y, A]),
      M = t.useMemo(() => new N({
        value: x ?.expectedOutputUSD || 0,
        decimal: 8
      }).sub(new N({
        value: x ?.expectedOutputMaxSlippageUSD || 0,
        decimal: 8
      })), [x ?.expectedOutputMaxSlippageUSD, x ?.expectedOutputUSD]),
      E = t.useMemo(() => new N({
        value: x ?.expectedCollateralDeposited || 0,
        decimal: i.decimal
      }), [i.decimal, x ?.expectedCollateralDeposited]),
      _ = t.useMemo(() => {
        const I = x ?.fees.THUNDER ?.find(B => B.type === "outbound");
        return new N({
          value: I ?.totalFeeUSD || 0,
          decimal: 8
        })
      }, [x ?.fees.THUNDER]);
    return t.useEffect(() => {
      u(!!i.toString() && !!f ?.streamingSwap)
    }, [i, f ?.streamingSwap, u]), {
      collateralAmount: E,
      expectedDebt: k,
      expectedOutput: y,
      expectedOutputMaxSlippage: A,
      hasError: !!S,
      borrowQuote: f,
      slippageAmount: L,
      slippageAmountUsd: M,
      totalFeeUsd: _,
      isFetching: v,
      toggleStream: u,
      stream: m,
      canStream: w,
      expectedOutputAssetValue: j
    }
  },
  xn = "https://docs.thorchain.org/thorchain-finance/lending",
  Je = "ETH.USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48",
  qe = 432e3,
  gn = [{
    value: 1,
    text: "1%"
  }, {
    value: 3,
    text: "3%"
  }, {
    value: 5,
    text: "5%"
  }, {
    value: 10,
    text: "10%"
  }],
  hn = () => {
    const s = We(),
      g = en(),
      {
        getMaxBalance: i
      } = De(),
      {
        isChainHalted: r
      } = Be(),
      {
        setIsConnectModalOpen: o
      } = ke(),
      {
        getWalletAddress: c
      } = J(),
      {
        isLendingPaused: p
      } = Be(),
      {
        tokens: h
      } = Lt(),
      d = Ut(h, !0),
      {
        assetInputProps: f,
        assets: S
      } = Bt(d, {
        thorchainPriority: !0
      }),
      [v, w] = t.useState(10),
      {
        asset: u,
        setAsset: m,
        amount: x,
        setAmount: y
      } = Rt(yt.Lending, Dt),
      [j, A] = t.useState($.fromIdentifierSync(Je)),
      [k, L] = t.useState(""),
      [M, E] = t.useState(),
      [_, K] = t.useState(),
      I = t.useMemo(() => g.find(C => C.asset.eq(u)), [u, g]),
      [B, T] = t.useState(!1),
      [ne, xe] = t.useState(me.Borrow),
      [se, re] = t.useState(Te.Borrow),
      {
        data: Y
      } = Ne([u, j]),
      ae = t.useMemo(() => (Y[u.toString()] ?.price_usd || 0) * Number(x.toFixed(2)), [x, u, Y]),
      ie = pe(),
      {
        refreshLoans: q,
        totalBorrowed: ge,
        totalCollateral: he,
        loansData: oe,
        isLoading: le
      } = tn(),
      {
        estimateTimeFromBlocks: F
      } = Xe(),
      z = t.useMemo(() => c(u.chain), [c, u.chain]),
      V = t.useMemo(() => c(j.chain), [c, j.chain]);
    t.useEffect(() => {
      L(V || "")
    }, [V]);
    const {
      expectedDebt: ee,
      expectedOutput: R,
      hasError: fe,
      borrowQuote: P,
      collateralAmount: je,
      isFetching: O,
      totalFeeUsd: ce,
      stream: ye,
      canStream: et,
      toggleStream: tt,
      expectedOutputAssetValue: we
    } = pn({
      slippage: v,
      senderAddress: z,
      recipientAddress: k,
      amount: x,
      assetIn: u,
      assetOut: j
    }), Me = t.useMemo(() => (Y[j.toString()] ?.price_usd || 0) * Number(R.toFixed(2)) || 0, [j, R, Y]);
    t.useEffect(() => {
      z ? i(u).then(C => E(C)) : E(void 0)
    }, [z, u, i]), t.useEffect(() => {
      V ? i(j).then(C => K(C)) : K(void 0)
    }, [V, j, i]);
    const Se = t.useMemo(() => ie(ee.gt(0) ? ee : 0), [ee, ie]),
      Pe = t.useCallback(async () => {
        const {
          loan: C,
          validateAddress: G
        } = await (await Ue(() => import("./G7qcxkrX.js"), __vite__mapDeps([0, 1, 2]))).getSwapKitClient(), H = G({
          chain: j.chain,
          address: k
        });
        if (typeof H == "boolean" && !H) throw new Error("Invalid recipient address");
        if (!P) throw new Error("Invalid lending quote");
        return C({
          type: "open",
          assetValue: u.add(x),
          minAmount: j.add(R),
          memo: ye ? P.streamingSwap ?.memo || P.calldata ?.memoStreamingSwap : P.memo
        })
      }, [x, j, P, u, R, k, ye]),
      nt = t.useCallback(async C => {
        T(!1);
        const G = Ve();
        s(Ge({
          id: G,
          label: n("txManager.openLoan", {
            asset: u.ticker,
            amount: C
          }),
          type: ue.TC_LENDING_OPEN,
          inChain: u.chain
        }));
        try {
          const H = await Pe();
          y(new N({
            value: 0,
            decimal: u.decimal
          })), H && s(He({
            id: G,
            txid: H,
            timestamp: new Date,
            advancedTracker: !0,
            initialPayload: P ? {
              isLending: !0,
              ...P,
              fromAddress: z
            } : void 0,
            type: ue.TC_LENDING
          }))
        } catch (H) {
          console.error(H), s(Qe({
            id: G,
            status: "error"
          }))
        }
      }, [s, P, z, u.chain, u.decimal, u.ticker, Pe, y]),
      st = t.useMemo(() => !k || p || x.lte(0) || M && x.gt(M) || r[u.chain], [k, p, x, u.chain, M, r]),
      Le = ne === me.Borrow ? n("common.borrow") : n("pcommon.repay"),
      Oe = t.useMemo(() => ({
        asset: u,
        value: x,
        balance: M,
        usdPrice: ae
      }), [u, x, M, ae]),
      Ie = t.useMemo(() => ({
        asset: we || j,
        value: R,
        balance: _,
        usdPrice: Me
      }), [we, j, R, _, Me]),
      rt = t.useMemo(() => k ? P ? Le : n("views.swap.noValidQuote") : n("views.swap.connectOrFillRecipient"), [P, k, Le]),
      be = t.useMemo(() => wt.duration(F(qe)).asDays(), [F]),
      at = t.useMemo(() => [{
        label: n("views.lending.expectedDebt"),
        value: `${Se}`
      }, {
        label: n("views.lending.borrowFee"),
        value: e.jsx(nn, {
          depth: I ?.derivedDepthPercentage || 0,
          totalFeeUsd: ce
        })
      }, {
        label: n("views.lending.repayMaturity"),
        value: e.jsx(b, {
          center: !0,
          children: e.jsx(St, {
            tooltip: n("views.lending.maturityDescription", {
              days: be
            }),
            value: e.jsxs(l, {
              textStyle: "caption",
              children: [be, " ", n("views.savings.days")]
            })
          })
        })
      }, {
        label: n("views.lending.lendingFee"),
        value: e.jsx(l, {
          textStyle: "caption",
          variant: "green",
          children: "FREE"
        })
      }], [I ?.derivedDepthPercentage, Se, be, ce]),
      it = t.useCallback(C => {
        y(C)
      }, [y]);
    return e.jsxs(b, {
      col: !0,
      className: "w-full max-w-[880px] flex self-center gap-3 mt-2",
      children: [e.jsx(bt, {
        content: "Deposit and borrow native assets with THUNDERSwap LENDING",
        keywords: "Borrow, Lending, THUNDERSwap, APY, Native assets",
        title: n("views.lending.borrow")
      }), p && e.jsx(vt, {
        announcement: {
          type: Ct.Error,
          message: n("views.lending.lendingPaused")
        },
        showClose: !1
      }), e.jsxs($t, {
        index: se,
        onChange: re,
        children: [e.jsxs(_t, {
          children: [e.jsx(ze, {
            children: n("views.lending.borrow")
          }), e.jsx(ze, {
            children: n("views.lending.myLoans")
          })]
        }), e.jsxs(Ft, {
          children: [e.jsx(Re, {
            children: e.jsxs(a, {
              direction: "column",
              gap: 3,
              maxWidth: "480px",
              mx: "auto",
              children: [e.jsx(b, {
                className: "flex w-full justify-between",
                children: e.jsx(b, {
                  alignCenter: !0,
                  children: e.jsx(l, {
                    className: "ml-3 mr-2",
                    textStyle: "h3",
                    children: n("views.lending.header", {
                      asset: j.ticker
                    })
                  })
                })
              }), e.jsxs(a, {
                direction: "row",
                justify: "space-between",
                children: [e.jsxs(a, {
                  alignItems: "center",
                  direction: "row",
                  flexWrap: "wrap",
                  gap: 1,
                  px: 3,
                  children: [e.jsx(l, {
                    fontWeight: "medium",
                    noOfLines: 1,
                    textStyle: "body",
                    variant: "primary",
                    children: n("views.lending.liquidationDisclaimer", {
                      asset: u.ticker,
                      borrowAsset: j.ticker
                    })
                  })]
                }), e.jsxs(Ot, {
                  children: [e.jsx(b, {
                    children: e.jsx(l, {
                      textStyle: "caption",
                      children: n("views.swap.transactionSettings")
                    })
                  }), e.jsx(b, {
                    className: "space-x-2",
                    children: e.jsx(l, {
                      textStyle: "caption-xs",
                      variant: "secondary",
                      children: n("views.swap.slippageTolerance")
                    })
                  }), e.jsxs(b, {
                    alignCenter: !0,
                    className: "w-full space-x-2",
                    children: [e.jsx(At, {
                      stretch: !0,
                      border: "rounded",
                      className: "text-right",
                      containerClassName: "bg-light-gray-light dark:bg-dark-gray-light bg-opacity-40",
                      onChange: C => w(Number(C.target.value)),
                      placeholder: n("common.percentage"),
                      symbol: "%",
                      type: "number",
                      value: v
                    }), gn.map(({
                      value: C,
                      text: G
                    }) => e.jsx(U, {
                      onClick: () => w(C),
                      size: "sm",
                      variant: v === C ? "primary" : "outlineTint",
                      children: e.jsx(l, {
                        textStyle: "caption-xs",
                        children: G
                      })
                    }, C))]
                  })]
                })]
              }), e.jsx(b, {
                row: !0,
                className: "justify-center gap-5",
                children: e.jsxs(b, {
                  col: !0,
                  className: te("flex h-full"),
                  children: [e.jsx(Nt, {
                    className: "!rounded-2xl md:!rounded-3xl !p-4 flex-col items-center self-stretch mt-2 space-y-1 shadow-lg md:w-full md:h-auto max-w-[440px]",
                    size: "lg",
                    children: e.jsxs(a, {
                      direction: "column",
                      gap: 2,
                      children: [e.jsxs(a, {
                        direction: "column",
                        children: [e.jsx(a, {
                          alignItems: "center",
                          direction: "row",
                          justifyContent: "space-between",
                          mr: 2,
                          children: e.jsx(l, {
                            mb: 1,
                            ml: 5,
                            textStyle: "caption",
                            children: n("views.lending.collateral")
                          })
                        }), e.jsx(Ee, {
                          noFilters: !0,
                          AssetListComponent: Zt,
                          assets: g,
                          className: "flex-1 !py-1",
                          displayAssetTypeComponent: e.jsxs(b, {
                            center: !0,
                            className: "gap-1",
                            children: [e.jsx(l, {
                              fontWeight: "light",
                              textStyle: "caption",
                              textTransform: "uppercase",
                              variant: "secondary",
                              children: "LTV"
                            }), e.jsx(l, {
                              textStyle: "caption",
                              variant: "primaryBtn",
                              children: I ?.ltvPercentage ? `${I.ltvPercentage}%` : "N/A"
                            })]
                          }),
                          onAssetChange: m,
                          onValueChange: it,
                          poolAsset: Oe,
                          selectedAsset: Oe
                        })]
                      }), e.jsxs(a, {
                        direction: "column",
                        mb: 2,
                        children: [e.jsx(l, {
                          mb: 1,
                          ml: 5,
                          textStyle: "caption",
                          children: n("views.lending.borrow")
                        }), e.jsx(Ee, {
                          ...f,
                          disabled: !0,
                          assets: S.filter(C => kt(C.asset)).filter(C => C.asset.type !== "Synth"),
                          className: "flex-1 !py-1",
                          onAssetChange: A,
                          poolAsset: Ie,
                          selectedAsset: Ie
                        }), !!z && e.jsx(a, {
                          alignContent: "stretch",
                          flex: 1,
                          mt: 1,
                          children: e.jsx(Wt, {
                            isOutputWalletConnected: !!V,
                            outputAssetchain: j.chain,
                            recipient: k,
                            setRecipient: L
                          })
                        })]
                      }), e.jsx(Ye, {
                        canStream: et,
                        outputAsset: j,
                        quote: P,
                        stream: ye,
                        title: n("views.lending.txOptimizeTitle"),
                        toggleStream: tt
                      }), e.jsx(It, {
                        horizontalInset: !0,
                        items: at,
                        size: "sm"
                      }), e.jsx(rn, {
                        address: z,
                        disabled: st,
                        handleSubmit: () => T(!0),
                        hasError: !x || fe || p,
                        label: rt,
                        loading: O,
                        setIsConnectModalOpen: o
                      })]
                    })
                  }), e.jsx(qt, {
                    amount: x,
                    asset: j,
                    collateralAmount: je,
                    collateralAsset: u,
                    estimatedTime: P ?.estimatedTime,
                    expectedDebtInfo: Se,
                    expectedOutputAmount: R,
                    isOpened: B,
                    onClose: () => T(!1),
                    onConfirm: nt
                  })]
                })
              })]
            })
          }), e.jsx(Re, {
            children: e.jsx(mn, {
              isLoading: le,
              loans: oe,
              refreshLoans: q,
              setCollateralAsset: m,
              setTab: xe,
              setViewTab: re,
              totalBorrowed: ge,
              totalCollateral: he
            })
          })]
        })]
      })]
    })
  },
  Vn = hn;
export {
  Vn as
  default
};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["G7qcxkrX.js", "assets/index-BDcs8OaA.js", "assets/index-PWKo4Vxk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}