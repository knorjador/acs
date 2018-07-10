
! function() {
  var e;
  if (void 0 === window.jQuery || "1.11.1" !== window.jQuery.fn.jquery) {
      var t = document.createElement("script");
      t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"), t.readyState ? t.onreadystatechange = function() {
          "complete" != this.readyState && "loaded" != this.readyState || a()
      } : t.onload = a, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(t)
  } else e = window.jQuery, r();

  function a() {
      e = window.jQuery.noConflict(!0), r()
  }

  function i(e) {
      var t = " " + document.cookie,
          a = " " + e + "=",
          i = null,
          r = 0,
          n = 0;
      return 0 < t.length && -1 != (r = t.indexOf(a)) && (r += a.length, -1 == (n = t.indexOf(";", r)) && (n = t.length), i = unescape(t.substring(r, n))), i
  }

  function r() {
      var s, d, L = (s = i("_locale") || void 0, d = !("object" != typeof Intl || !Intl || "function" != typeof Intl.NumberFormat), {
          toLocaleString: function(e, t) {
              var a = Number(e);
              if (isNaN(a)) return e;
              var i, r, n, o, c = t && t.minDecimalPlaces,
                  l = t && t.maxDecimalPlaces;
              return void 0 === c || void 0 === l ? (i = a, d ? i.toLocaleString(s) : i.toLocaleString()) : (r = a, n = c, o = l, d ? r.toLocaleString(s, {
                  minimumFractionDigits: n,
                  maximumFractionDigits: o
              }) : r.toFixed(o))
          }
      });

      function k(e, t) {
          var a = t;
          t = Math.pow(10, t);
          for (var i = ["K", "M", "B", "T"], r = i.length - 1; 0 <= r; r--) {
              var n = Math.pow(10, 3 * (r + 1));
              if (n <= e) {
                  1e3 == (e = Math.round(e * t / n) / t) && r < i.length - 1 && (e = 1, r++), e = L.toLocaleString(Number(e), {
                      minDecimalPlaces: a,
                      maxDecimalPlaces: a
                  }), e += " " + i[r];
                  break
              }
          }
          return e
      }

      function P(e, t) {
          return "BTC" == t ? function(e) {
              e = 1e3 <= e ? L.toLocaleString(Math.round(e)) : 1 <= e ? L.toLocaleString(e, {
                  minDecimalPlaces: 8,
                  maxDecimalPlaces: 8
              }) : e < 1e-8 ? Number(e).toExponential(4) : L.toLocaleString(e, {
                  minDecimalPlaces: 8,
                  maxDecimalPlaces: 8
              });
              return e
          }(e) : function(e) {
              e = 1 <= e ? 1e5 <= e ? L.toLocaleString(Math.round(e)) : L.toLocaleString(e, {
                  minDecimalPlaces: 2,
                  maxDecimalPlaces: 2
              }) : e < 1e-6 ? Number(e).toExponential(2) : L.toLocaleString(e, {
                  minDecimalPlaces: 6,
                  maxDecimalPlaces: 6
              });
              return e
          }(e)
      }

      function C(e, t, a) {
          var i = t,
              r = {
                  btc: "Ã Â¸Â¿",
                  usd: "$",
                  eur: "Ã¢â€šÂ¬",
                  cny: "Ã‚Â¥",
                  gbp: "Ã‚Â£",
                  cad: "$",
                  rub: "<img src='/static/img/fiat/ruble.gif'/>",
                  hkd: "$",
                  jpy: "Ã‚Â¥",
                  aud: "$",
                  brl: "R$",
                  inr: "Ã¢â€šÂ¹",
                  krw: "Ã¢â€šÂ©",
                  mxn: "$",
                  idr: "Rp",
                  chf: "Fr"
              };
          return e.toLowerCase() in r && (i = r[e.toLowerCase()] + i), a && (i = i + ' <span style="font-size:9px">' + e.toUpperCase() + "</span>"), i
      }

      function S(e, t, a, i, r, n, o, c, l, s, d, p, m, u, h, g, v, f) {
          var x = f ? "https://s2.coinmarketcap.com/static/img/coins/64x64/" + f + ".png" : "https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/" + e + ".png",
              b = "#009e73";
          l < 0 && (b = "#d94040"), l = L.toLocaleString(l, {
              minDecimalPlaces: 2,
              maxDecimalPlaces: 2
          }), valTickerHTML = m ? "(" + a + ")" : "", valPrice = n ? P(n, i) : "?", valPercentHTML = l ? '<span style="color:' + b + '">(' + l + "%)" : "", valMarketCap = s ? k(s, 2) : "?", valVolume = d ? k(d, 2) : "?", o ? (mainLineHeight = 25, valPriceSecondary = c ? P(c, o) : "?", secondaryHTML = '<br><span style="font-size: 12px; color: rgba(39, 52, 64, 0.5)">' + valPriceSecondary + " " + o + " </span>") : (mainLineHeight = 30, secondaryHTML = "");
          var y = "utm_medium=widget&utm_campaign=cmcwidget&utm_source=" + location.hostname + "&utm_content=" + e
              w = '<div style="">    <div>        <div class="btc-widget" style="">  <img src="' + x + '" style="width:40px">          <span style="font-size: 18px;"></span> <br>            <span style="font-size: 16px;text-align:center">' + valPrice + " " + i + "<br>" + valPercentHTML + "</span></span>            " + secondaryHTML + '        </div>            </div>';
          return w += function(e, t, a, i, r, n, o, c) {
              var l = 0,
                  s = 0,
                  d = "",
                  p = "",
                  m = "";
              if (e && l++, t && l++, a && l++, 0 == l) return "";
              1 == l && (s = 100), 2 == l && (s = 49.8), 3 == l && (s = 33), e && (borderWidth = 0, (a || t) && (borderWidth = 1), d = '                    <div style="text-align:center;float:left;width:' + s + "%;font-size:12px;padding:12px 0;border-right:" + borderWidth + 'px solid #e1e5ea;line-height:1.25em;">                        RANK                        <br><br>                        <span style="font-size: 17px; ">' + n + "</span>                    </div>");
              a && (borderWidth = 0, t && (borderWidth = 1), p = '                    <div style="text-align:center;float:left;width:' + s + "%;font-size:12px;padding:12px 0 16px 0;border-right:" + borderWidth + 'px solid #e1e5ea;line-height:1.25em;">                        MARKET CAP                        <br><br>                        <span style="font-size: 14px; ">' + C(r, o, i) + "</span>                    </div>");
              t && (m = '                    <div style="text-align:center;float:left;width:' + s + '%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;">                        VOLUME (24H)                        <br><br>                        <span style="font-size: 14px; ">' + C(r, c, i) + "</span>                    </div>");
              return detailedHTML = '<div style="">' + d + p + m + "</div>", detailedHTML
          }(u, h, g, v, r, p, valMarketCap, valVolume), w += '    <div style=""></div></div>'
      }
      e(document).ready(function(M) {
          M(".coinmarketcap-currency-widget").each(function() {
              var v = M(this).attr("data-currency"),
                  f = M(this).data("currencyid"),
                  x = M(this).attr("data-base").toUpperCase(),
                  b = M(this).attr("data-secondary");
              b = "BTC" == (b = b ? b.toUpperCase() : null) || "USD" == b ? b : null;
              var y = M(this).attr("data-stats");
              y = (y = y ? y.toUpperCase() : null) == x ? x : "USD";
              var e, w = !1 !== M(this).data("ticker"),
                  L = !1 !== M(this).data("rank"),
                  k = !1 !== M(this).data("marketcap"),
                  P = !1 !== M(this).data("volume"),
                  C = !1 !== M(this).data("statsticker"),
                  _ = this;
              e = f ? "https://widgets.coinmarketcap.com/v2/ticker/" + f + "/?ref=widget&convert=" + x : "https://widgets.coinmarketcap.com/v1/ticker/" + v + "/?ref=widget&convert=" + x, M.get({
                  url: e,
                  success: function(e) {
                      if (e = e.length ? e[0] : e.data, v || (v = e.website_slug), f) var t = e.quotes[x.toUpperCase()],
                          a = b ? e.quotes[b.toUpperCase()] : null,
                          i = parseFloat(t.price),
                          r = a ? parseFloat(a.price) : null,
                          n = parseInt(t.market_cap),
                          o = parseInt(t.volume_24h),
                          c = Number(t.percent_change_24h);
                      else {
                          var l = "price_" + x.toLowerCase(),
                              s = b ? "price_" + b.toLowerCase() : null,
                              d = "market_cap_" + y.toLowerCase(),
                              p = "24h_volume_" + y.toLowerCase();
                          i = parseFloat(e[l]), r = s ? parseFloat(e[s]) : null, n = parseInt(e[d]), o = parseInt(e[p]), c = Number(e.percent_change_24h)
                      }
                      var m = e.name,
                          u = e.symbol,
                          h = e.rank,
                          g = S(v, m, u, x, y, i, b, r, c, n, o, h, w, L, P, k, C, f);
                      M(_).html(g), M(_).find("a").css({
                          "text-decoration": "none",
                          color: "#1070e0"
                      })
                  }
              })
          })
      })
  }
}();
