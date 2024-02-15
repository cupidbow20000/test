import {
  r as d,
  t as i,
  j as e,
  B as r,
  T as S,
  ac as te,
  e as j,
  U as Ie,
  x as Ee,
  m as Pe,
  aU as De,
  bK as Be,
  k as w,
  M as ie,
  bJ as _e,
  bI as Ye,
  b as $e,
  be as We,
  o as N,
  h as Y,
  G as Ue,
  d as T,
  bL as ze,
  bM as Oe,
  v as pe,
  K as He,
  $ as Ge,
  _ as Fe,
  aX as se,
  aY as ae,
  bT as ne,
  b0 as oe,
  Y as re,
  a1 as $,
  b1 as W,
  bU as de,
  bV as U,
  bx as ce,
  g as z,
  bc as Ke,
  bw as X,
  bW as R,
  z as le,
  bp as Xe,
  L as Je,
  bX as Qe
} from "./assets/index-BDcs8OaA.js";
import {
  G as Ze
} from "./CFwsQoKA.js";
import {
  I as O
} from "./nlzjmGkJ.js";
import {
  A as Ve
} from "./HIXFujKF.js";
import {
  P as x,
  L as M
} from "./S2rBcUGO.js";
import {
  L as et
} from "./udakyQVq.js";
import {
  C as ue
} from "./y5ax0GID.js";
import {
  P as tt
} from "./gLsK49VX.js";
import {
  V as it
} from "./bwNrJKc_.js";
import {
  u as st
} from "./wwFkL9Uk.js";
import {
  u as at,
  a as nt,
  b as ot,
  A as rt,
  P as dt
} from "./J0MH6Cmc.js";
import {
  u as ct
} from "./ZLekcFwQ.js";
import {
  u as lt,
  g as me
} from "./kn1s7jTN.js";
import "./8bNoHJzy.js";
import "./6QZjTHo4.js";
import "./xirfvWJJ.js";
import "./xrvJovm6.js";
import "./u_4jEEiW.js";
import "./tX9VNdav.js";
import "./uJJRkjMC.js";
import "./VlgDKYov.js";
import "./FUKZW4Fx.js";
import "./pLeNDp8K.js";
import "./aF5kppaH.js";
import "./g03_-ZTT.js";
import "./0YkWVzPW.js";
(function () {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
      s = new Error().stack;
    s && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[s] = "d5ab8b51-4a5d-410f-82a1-95fdc9765129", t._sentryDebugIdIdentifier = "sentry-dbid-d5ab8b51-4a5d-410f-82a1-95fdc9765129")
  } catch {}
})();
const ut = d.memo(({
    asset: t,
    assetShare: s,
    contentRef: o,
    lastAddedDate: m,
    maxHeightStyle: g,
    poolShare: u,
    runeShare: f,
    shareType: a,
    runePending: p,
    assetPending: h,
    tickerPending: y
  }) => {
    const c = d.useMemo(() => {
        const l = [{
          label: i("views.liquidity.poolShare"),
          value: u === "0 %" ? "~0 %" : u
        }];
        return p.gt(0) && l.push({
          label: i("views.liquidity.runePending"),
          value: p.toSignificant(6)
        }), h.gt(0) && l.push({
          label: i("views.liquidity.assetPending"),
          value: h.toSignificant(6)
        }), [x.SYM, x.ASSET_ASYM].includes(a) && l.unshift({
          label: `${t.ticker} ${i("views.liquidity.share")}`,
          value: e.jsxs(r, {
            center: !0,
            className: "gap-2",
            children: [e.jsx(S, {
              children: `${s.toSignificant(6)} ${t.ticker}`
            }), e.jsx(te, {
              asset: t,
              size: 24
            })]
          })
        }), [x.SYM, x.RUNE_ASYM].includes(a) && l.unshift({
          label: `${j.symbol} ${i("views.liquidity.share")}`,
          value: e.jsxs(r, {
            center: !0,
            className: "gap-2",
            children: [e.jsx(S, {
              children: `${f.toSignificant(4)} ${j.symbol}`
            }), e.jsx(te, {
              asset: j,
              size: 24
            })]
          })
        }), l.push({
          label: i("views.liquidity.lastAdded"),
          value: m
        }), l
      }, [t, s, m, u, f, a, p, h]),
      n = d.useMemo(() => {
        switch (a) {
          case x.SYM:
            return `THUNDER + ${t.ticker} LP`;
          case x.ASSET_ASYM:
            return `${t.ticker} LP`;
          case x.RUNE_ASYM:
            return "THUNDER LP"
        }
      }, [t.ticker, a]);
    return e.jsxs(r, {
      col: !0,
      className: "overflow-hidden ease-in-out transition-all",
      ref: o,
      style: g,
      children: [!!y && e.jsx(S, {
        className: "brightness-90",
        textStyle: "caption",
        variant: "yellow",
        children: i("pendingLiquidity.content", {
          asset: y
        })
      }), e.jsxs(r, {
        col: !0,
        className: "self-stretch pt-1 pb-2",
        children: [e.jsx(r, {
          alignCenter: !0,
          row: !0,
          justify: "between",
          children: e.jsx(S, {
            className: "px-1.5",
            textStyle: "caption",
            variant: "cyan",
            children: n
          })
        }), e.jsx(O, {
          horizontalInset: !0,
          items: c,
          size: "sm"
        })]
      })]
    })
  }),
  mt = ({
    assetPending: t,
    dateLastAdded: s,
    poolDetail: {
      asset: o,
      runeDepth: m,
      assetDepth: g,
      units: u
    },
    runePending: f,
    shareType: a,
    sharedUnits: p,
    withFooter: h
  }) => {
    const y = Ie(),
      c = Ee.fromStringSync(o),
      {
        isActive: n,
        contentRef: l,
        toggle: P,
        maxHeightStyle: D
      } = Pe(),
      {
        isMdActive: B
      } = De(),
      A = d.useMemo(() => Be(new w(p).div(u).getValue("string")), [u, p]),
      [k, L] = d.useMemo(() => {
        const b = a === x.ASSET_ASYM,
          _ = a === x.RUNE_ASYM,
          I = {
            liquidityUnits: p,
            poolUnits: u,
            assetDepth: g,
            runeDepth: m
          };
        if (!b && !_) return [w.fromBigInt(BigInt(I.runeDepth), ie.THUNDER).mul(p).div(u), w.fromBigInt(BigInt(I.assetDepth), ie.THUNDER).mul(p).div(u)];
        const H = _e(I).getValue("string"),
          G = Ye(I).getValue("string");
        return _ ? [new w(G), new w(0)] : [new w(0), new w(H)]
      }, [u, p, m, g, a]),
      v = d.useMemo(() => !!(Number(f) || Number(t)), [f, t]),
      C = v && (Number(f) > 0 ? c.ticker : j.ticker) || "",
      q = d.useMemo(() => {
        switch (a) {
          case x.SYM:
            return `THUNDER + ${c.ticker} LP`;
          case x.ASSET_ASYM:
            return `${c.ticker} LP`;
          case x.RUNE_ASYM:
            return "THUNDER LP"
        }
      }, [c.ticker, a]);
    return e.jsx(r, {
      col: !0,
      justifyCenter: !0,
      className: "self-stretch",
      children: e.jsxs($e, {
        className: "!rounded-2xl p-2 !gap-1",
        type: v ? "warn" : "primary",
        children: [e.jsxs(r, {
          alignCenter: !0,
          className: "cursor-pointer",
          justify: "between",
          onClick: P,
          children: [e.jsxs(r, {
            center: !0,
            children: [v && e.jsx(We, {
              content: i("pendingLiquidity.pendingLiquidity"),
              children: e.jsx(N, {
                className: "mr-3",
                color: "yellow",
                name: "warn",
                size: 24
              })
            }), e.jsx(r, {
              col: !0,
              children: e.jsx(Ve, {
                inline: !0,
                asset1: c,
                asset2: j,
                size: n && B ? 40 : 32
              })
            }), e.jsx(S, {
              className: Y("mx-1 md:mx-3 !transition-all", n ? "text-body md:!text-subtitle1" : "!text-body"),
              fontWeight: "semibold",
              children: q
            })]
          }), e.jsxs(r, {
            center: !0,
            className: "gap-2",
            children: [e.jsxs(r, {
              col: !0,
              align: "end",
              children: [e.jsx(S, {
                className: Y("!transition-all", n ? "!text-body" : "!text-caption"),
                fontWeight: "normal",
                children: ` ${i("views.liquidity.poolShare")}`
              }), e.jsx(S, {
                className: Y("!transition-all", n ? "!text-subtitle1" : "!text-body"),
                fontWeight: "bold",
                children: A === "0 %" ? "~0 %" : A
              })]
            }), e.jsx(N, {
              className: Y("transform duration-300 ease", {
                "-rotate-180": n
              }),
              color: "secondary",
              name: "chevronDown"
            })]
          })]
        }), e.jsx(ut, {
          asset: c,
          assetPending: w.fromBigInt(BigInt(t), 8),
          assetShare: L,
          contentRef: l,
          lastAddedDate: Ue.unix(Number(s)).format("YYYY-MM-DD"),
          maxHeightStyle: D,
          poolShare: A,
          runePending: w.fromBigInt(BigInt(f), 8),
          runeShare: k,
          shareType: a,
          tickerPending: C
        }), h && e.jsxs(r, {
          justifyCenter: !0,
          className: "space-x-6 md:pr-0",
          children: [e.jsx(T, {
            stretch: !0,
            className: "px-8 md:px-12",
            onClick: () => y(ze(c)),
            variant: "primary",
            children: v ? i("views.liquidity.completeButton") : i("views.liquidity.addButton")
          }), e.jsx(T, {
            stretch: !0,
            className: "px-8 md:px-12",
            onClick: () => y(Oe(c)),
            variant: "secondary",
            children: i("common.withdraw")
          })]
        })]
      })
    })
  },
  pt = ({
    poolAssetValue: t,
    runeAssetValue: s,
    poolAddress: o,
    assetAddress: m,
    runeAddress: g,
    symmetric: u,
    isOpened: f,
    onClose: a
  }) => {
    const {
      isWalletLoading: p,
      getWallet: h
    } = pe(), {
      setIsConnectModalOpen: y
    } = He(), c = Ge(), [n, l] = d.useState(s ? "addRune" : "addAsset"), P = d.useCallback(async () => {
      if (n === "completed") return a();
      const {
        addLiquidityPart: L
      } = await (await Fe(() => import("./G7qcxkrX.js"), __vite__mapDeps([0, 1, 2]))).getSwapKitClient(), v = u || !!(s && t), C = se(), q = se();
      if (n === "addRune" && s) {
        l("pendingRune"), c(ae({
          id: C,
          type: ne.TC_LP_ADD,
          inChain: s.chain,
          label: i("txManager.addAmountAsset", {
            asset: s.ticker,
            amount: s.toSignificant(6)
          })
        }));
        try {
          const b = await L({
            address: m,
            assetValue: s,
            poolAddress: o,
            symmetric: v
          });
          b ? (c(oe({
            id: C,
            txid: b,
            status: "pending"
          })), l(v ? "addAsset" : "completed"), re(i("txManager.addLiquidity"), i("txManager.addedAmountAsset", {
            asset: s.ticker,
            amount: s.toSignificant(6)
          }))) : (l("addRune"), $(i("txManager.addLiquidity"), i("txManager.failed")), c(W({
            id: C,
            status: "error"
          })))
        } catch {
          l("addRune"), $(i("txManager.addLiquidity"), i("txManager.failed")), c(W({
            id: C,
            status: "error"
          }))
        }
      }
      if (n === "addAsset" && t) {
        l("pendingAsset"), c(ae({
          id: q,
          type: ne.TC_LP_ADD,
          inChain: t.chain,
          label: i("txManager.addAmountAsset", {
            asset: t.ticker,
            amount: t.toSignificant(6)
          })
        }));
        try {
          const b = await L({
            address: g,
            assetValue: t,
            poolAddress: o,
            symmetric: v
          });
          b ? (l("completed"), c(oe({
            id: q,
            txid: b,
            status: "pending"
          })), re(i("txManager.addLiquidity"), i("txManager.addedAmountAsset", {
            asset: t.ticker,
            amount: t.toSignificant(6)
          }))) : (l("addAsset"), $(i("txManager.addLiquidity"), i("txManager.failed")), c(W({
            id: q,
            status: "error"
          })))
        } catch {
          l("addAsset"), $(i("txManager.addLiquidity"), i("txManager.failed")), c(W({
            id: q,
            status: "error"
          }))
        }
      }
    }, [n, a, u, s, t, c, m, o, g]), D = d.useMemo(() => {
      const L = [];
      return s && L.push({
        label: e.jsxs(r, {
          center: !0,
          children: [e.jsx(r, {
            className: "mr-2",
            children: n === "pendingRune" ? e.jsx(de, {}) : n === "addRune" ? e.jsx(N, {
              color: "yellow",
              name: "inIcon"
            }) : e.jsx(N, {
              color: "green",
              name: "checkBoxChecked"
            })
          }), e.jsx(S, {
            children: i("views.addLiquidity.addAssetStatusLabel", {
              asset: s.ticker
            })
          })]
        }),
        value: `${s.toSignificant(6)} ${s.ticker}`
      }), t && L.push({
        label: e.jsxs(r, {
          center: !0,
          children: [e.jsx(r, {
            className: "mr-2",
            children: n === "completed" ? e.jsx(N, {
              color: "green",
              name: "checkBoxChecked"
            }) : n === "pendingAsset" ? e.jsx(de, {}) : e.jsx(N, {
              color: "yellow",
              name: "inIcon"
            })
          }), e.jsx(S, {
            children: i("views.addLiquidity.addAssetStatusLabel", {
              asset: t.ticker
            })
          })]
        }),
        value: `${t.toSignificant(6)} ${t.ticker}`
      }), L
    }, [t, s, n]), B = d.useMemo(() => {
      switch (n) {
        case "addRune":
          return i("views.addLiquidity.addAssetLabel", {
            asset: s ?.ticker
          });
        case "addAsset":
          return i("views.addLiquidity.addAssetLabel", {
            asset: t ?.ticker
          });
        case "pendingAsset":
          return i("views.addLiquidity.pendingAssetLabel", {
            asset: t ?.ticker
          });
        case "pendingRune":
          return i("views.addLiquidity.pendingAssetLabel", {
            asset: s ?.ticker
          });
        case "completed":
          return i("common.close")
      }
    }, [t, s, n]), A = d.useMemo(() => {
      switch (n) {
        case "addRune":
        case "pendingRune":
          return h(z.THUNDERChain) ?.walletType === U.LEDGER ? i("views.addLiquidity.openLedgerWallet", {
            chain: ce(z.THUNDERChain),
            asset: j.ticker,
            wallet: U.LEDGER
          }) : void 0;
        case "addAsset":
        case "pendingAsset":
          return t && h(t.chain) ?.walletType === U.LEDGER ? i("views.addLiquidity.openLedgerWallet", {
            chain: ce(t.chain),
            asset: t.ticker,
            wallet: U.LEDGER
          }) : void 0;
        case "completed":
          return
      }
    }, [h, t, n]), k = d.useMemo(() => n === "completed", [n]);
    return e.jsx(Ke, {
      isOpened: f,
      onClose: a,
      title: i("views.addLiquidity.lpProgressModalTitle"),
      children: e.jsxs(r, {
        col: !0,
        children: [e.jsx(O, {
          items: D
        }), e.jsx(r, {
          className: "py-4",
          children: e.jsx(X, {
            content: i("views.addLiquidity.lpProgressModalDescription"),
            type: "info"
          })
        }), A && e.jsx(r, {
          className: "py-4",
          children: e.jsx(X, {
            content: A,
            type: "warn"
          })
        }), e.jsxs(r, {
          row: !0,
          className: "pt-4",
          justify: k ? "around" : "between",
          children: [!k && e.jsx(T, {
            onClick: () => y(!0),
            size: "md",
            variant: "outlineSecondary",
            children: i("common.changeWallet")
          }), e.jsx(T, {
            loading: p || ["pendingAsset", "pendingRune"].includes(n),
            onClick: P,
            size: k ? "lg" : "md",
            variant: "fancy",
            children: B
          })]
        })]
      })
    })
  },
  ht = ({
    poolAsset: t
  }) => {
    const {
      getMaxBalance: s,
      isWalletAssetConnected: o
    } = lt(), {
      wallet: m
    } = pe(), [g, u] = d.useState(t ?.set(0)), [f, a] = d.useState(j.set(0)), p = d.useMemo(() => m[t ?.chain || R.chain] ? me(t || R, m) : (t || R).set(10 ** 9), [t, m]);
    d.useEffect(() => {
      t && s(t).then(y => {
        u(y || le)
      })
    }, [t, s]), d.useEffect(() => {
      s(j).then(y => a(y || le))
    }, [s]);
    const h = d.useMemo(() => m[z.THUNDERChain] ? me(j, m) : j.set(10 ** 9), [m]);
    return {
      isWalletAssetConnected: o,
      poolAssetBalance: g,
      maxPoolAssetBalance: p,
      runeBalance: f,
      maxRuneBalance: h
    }
  },
  xt = t => t === M.ASSET ? x.ASSET_ASYM : t === M.THUNDER ? x.RUNE_ASYM : x.SYM,
  Ut = () => {
    const {
      liquidityType: t,
      setLiquidityType: s
    } = at(), {
      poolAsset: o,
      handleSelectPoolAsset: m
    } = nt(), {
      pools: g,
      allPoolAssets: u
    } = ct(), f = ht({
      poolAsset: o
    }), a = Xe(), p = st(), h = d.useMemo(() => g.find(E => E.asset === (o || R).toString().toUpperCase()) || g[0], [g, o]), y = d.useMemo(() => u.map(E => p.find(K => K.asset.eq(E)) || {
      asset: E,
      balance: void 0
    }).sort((E, K) => +(K.asset.type === "Native") - +(E.asset.type === "Native")), [p, u]), {
      addLiquiditySlip: c,
      approveConfirmInfo: n,
      assetAddress: l,
      asymmTipVisible: P,
      btnLabel: D,
      confirmInfo: B,
      depositAssets: A,
      feeInUSD: k,
      symmetric: L,
      handleAddLiquidity: v,
      handleApprove: C,
      handleChangeAssetAmount: q,
      handleChangeRuneAmount: b,
      handleConfirmProgressModal: _,
      handleConfirmApprove: I,
      handleSelectLiquidityType: H,
      isApproveRequired: G,
      isAssetApproveLoading: he,
      isAssetPending: xe,
      isDepositAvailable: ge,
      isRunePending: fe,
      isValidDeposit: J,
      isWalletConnected: ye,
      lpMemberData: F,
      lpProgressModal: Q,
      poolAddress: be,
      poolAssetInput: Z,
      poolAssetValue: je,
      poolShareEst: Le,
      rate: ve,
      runeAddress: we,
      runeAssetInput: V,
      runeAssetValue: Me,
      setAsymmTipVisible: Se,
      setIsConnectModalOpen: Ae,
      setLpProgressModal: Ce,
      setVisibleApproveModal: qe,
      setVisibleConfirmModal: Re,
      visibleApproveModal: Ne,
      visibleConfirmModal: ke
    } = ot({
      depositAssetsBalance: f,
      liquidityType: t,
      poolAsset: o || R,
      poolData: h,
      setLiquidityType: s
    }), ee = d.useMemo(() => o ?.chain === z.Binance, [o]), Te = d.useMemo(() => !!Object.keys(F || {}).length, [F]);
    return e.jsxs(tt, {
      description: i("views.addLiquidity.description"),
      header: e.jsx(it, {
        actionsComponent: e.jsx(Ze, {
          transactionMode: !0
        }),
        title: `${i("common.addLiquidity")} - ${o?.ticker}${h?.status==="staged"?" (Staged)":""}`
      }),
      keywords: "LP, Liquidity provider, THUNDERSwap, THUNDERChain, DEFI, DEX",
      title: i("views.addLiquidity.title"),
      children: [e.jsx(et, {
        onChange: H,
        options: h ?.status === "staged" ? [M.SYMMETRICAL] : [M.ASSET, M.SYMMETRICAL, M.THUNDER],
        poolAsset: o || R,
        selected: t
      }), e.jsx(rt, {
        isAssetPending: xe,
        isRunePending: fe,
        liquidityType: t,
        onAssetAmountChange: q,
        onPoolChange: m,
        onRuneAmountChange: b,
        poolAsset: Z,
        poolAssetList: y,
        runeAsset: V
      }), e.jsx(dt, {
        fee: k,
        poolShare: Le,
        poolTicker: Z.asset.ticker,
        rate: new w(ve).toSignificant(6) || null,
        runeTicker: V.asset.ticker,
        slippage: c
      }), Te && h && e.jsx(mt, {
        ...F,
        poolDetail: h,
        shareType: xt(t)
      }), [M.ASSET, M.THUNDER].includes(t) && P && e.jsx(X, {
        content: e.jsxs(e.Fragment, {
          children: [`${i("views.addLiquidity.asymmetricPoolNotice0",{depositAsset:t===M.ASSET?(o||R).ticker:j,asset:(o||R).ticker})} `]
        }),
        onClose: () => Se(!1),
        title: i("views.addLiquidity.asymmetricPoolTip"),
        type: "warn"
      }), G && e.jsx(r, {
        className: "w-full pt-5",
        children: e.jsx(T, {
          stretch: !0,
          disabled: a,
          error: a,
          loading: he,
          onClick: C,
          rightIcon: a ? e.jsx(N, {
            name: "infoCircle",
            size: 20
          }) : void 0,
          size: "lg",
          tooltip: a ? i("views.liquidity.hardCapReachedTooltip") : void 0,
          variant: "fancy",
          children: i("common.approve")
        })
      }), ge && e.jsx(r, {
        className: "w-full pt-5",
        children: e.jsx(T, {
          stretch: !0,
          disabled: ee || !J.valid || a,
          error: ee || !J.valid || a,
          onClick: v,
          rightIcon: a ? e.jsx(N, {
            name: "infoCircle",
            size: 20
          }) : void 0,
          size: "lg",
          tooltip: a ? i("views.liquidity.hardCapReachedTooltip") : void 0,
          variant: "fancy",
          children: D
        })
      }), !ye && e.jsx(r, {
        className: "w-full pt-5",
        children: e.jsx(T, {
          stretch: !0,
          onClick: () => Ae(!0),
          size: "lg",
          variant: "fancy",
          children: i("common.connectWallet")
        })
      }), e.jsx(ue, {
        inputAssets: A,
        isOpened: ke,
        onClose: () => Re(!1),
        onConfirm: _,
        children: e.jsx(O, {
          items: B
        })
      }), o && e.jsx(ue, {
        inputAssets: [o],
        isOpened: Ne,
        onClose: () => qe(!1),
        onConfirm: I,
        children: e.jsx(O, {
          items: n
        })
      }), Q && e.jsx(pt, {
        assetAddress: l,
        isOpened: Q,
        onClose: () => Ce(!1),
        poolAddress: be,
        poolAssetValue: je,
        runeAddress: we,
        runeAssetValue: Me,
        symmetric: L
      })]
    })
  };
export {
  Ut as
  default
};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["G7qcxkrX.js", "assets/index-BDcs8OaA.js", "assets/index-PWKo4Vxk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}