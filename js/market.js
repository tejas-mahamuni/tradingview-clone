function updateTradingViewChart(targetWrapperId, symbolName) {
  const container = document.getElementById(targetWrapperId);
  if (!container) return;

  container.innerHTML = '';

  const widgetDiv = document.createElement('div');
  const customWidgetId = 'tv_canvas_' + targetWrapperId;
  widgetDiv.id = customWidgetId;
  container.appendChild(widgetDiv);

  if (typeof TradingView !== 'undefined') {
    new TradingView.widget({
      "width": "100%",
      "height": "100%",
      "symbol": symbolName,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "3",
      "locale": "en",
      "container_id": customWidgetId,
      "allow_symbol_change": false,
      "calendar": false,
      "support_host": "https://www.tradingview.com",
      "hide_top_toolbar": true,
      "hide_side_toolbar": true,
      "hide_legend": true,
      "overrides": {
        "paneProperties.background": "#ffffff",
        "paneProperties.backgroundType": "solid",
        "paneProperties.vertGridProperties.color": "rgba(0,0,0,0)",
        "paneProperties.horzGridProperties.color": "rgba(0,0,0,0)",
        "mainSeriesProperties.style": 3,
        "mainSeriesProperties.areaStyle.linewidth": 3,
        "mainSeriesProperties.areaStyle.linecolor": "#2b61ff",
        "mainSeriesProperties.areaStyle.color1": "rgba(43, 97, 255, 0.0)",
        "mainSeriesProperties.areaStyle.color2": "rgba(43, 97, 255, 0.0)"
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (typeof TradingView === 'undefined') {
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = 'https://s3.tradingview.com/tv.js';
    scriptTag.async = true;
    scriptTag.onload = function() {
      updateTradingViewChart("tradingview-chart-wrapper", "SPY");
      updateTradingViewChart("tradingview-chart1-wrapper", "AAPL");
    };
    document.body.appendChild(scriptTag);
  } else {
    updateTradingViewChart("tradingview-chart-wrapper", "SPY");
    updateTradingViewChart("tradingview-chart1-wrapper", "AAPL");
  }

  const indexCards = document.querySelectorAll('.index-card-trigger');
  indexCards.forEach(card => {
    card.addEventListener('click', function() {
      const parentRow = this.closest('.row');
      const rowCards = parentRow.querySelectorAll('.index-card-trigger');

      rowCards.forEach(c => {
        c.classList.remove('active-index-capsule');
        c.classList.add('index-capsule');
      });

      this.classList.remove('index-capsule');
      this.classList.add('active-index-capsule');

      const targetSymbol = this.getAttribute('data-symbol');
      
      const underlyingChartWrapper = parentRow.nextElementSibling?.querySelector('[id^="tradingview-chart"]');
      if (underlyingChartWrapper) {
        updateTradingViewChart(underlyingChartWrapper.id, targetSymbol);
      }
    });
  });

});