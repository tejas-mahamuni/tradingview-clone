// Global engine routing function to boot/update the line charts safely inside specific views
function updateTradingViewChart(targetWrapperId, symbolName) {
  const container = document.getElementById(targetWrapperId);
  if (!container) return;

  // Clear any existing active chart iframes before re-initializing
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
      "style": "3", // Render crisp Area/Line paths
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
  // 1. Dynamic Script Loader for TradingView Object Frameworks
  if (typeof TradingView === 'undefined') {
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = 'https://s3.tradingview.com/tv.js';
    scriptTag.async = true;
    scriptTag.onload = function() {
      // Synchronize standard landing canvas data points
      updateTradingViewChart("tradingview-chart-wrapper", "SPY");
      updateTradingViewChart("tradingview-chart1-wrapper", "AAPL");
    };
    document.body.appendChild(scriptTag);
  } else {
    updateTradingViewChart("tradingview-chart-wrapper", "SPY");
    updateTradingViewChart("tradingview-chart1-wrapper", "AAPL");
  }

  // 2. Global Selection Handler Loop for Index Cards Trigger
  const indexCards = document.querySelectorAll('.index-card-trigger');
  indexCards.forEach(card => {
    card.addEventListener('click', function() {
      // Find all sibling cards within the same container block row
      const parentRow = this.closest('.row');
      const rowCards = parentRow.querySelectorAll('.index-card-trigger');

      rowCards.forEach(c => {
        c.classList.remove('active-index-capsule');
        c.classList.add('index-capsule');
      });

      this.classList.remove('index-capsule');
      this.classList.add('active-index-capsule');

      const targetSymbol = this.getAttribute('data-symbol');
      
      // Select the correct chart wrapper based on the parent context
      const underlyingChartWrapper = parentRow.nextElementSibling?.querySelector('[id^="tradingview-chart"]');
      if (underlyingChartWrapper) {
        updateTradingViewChart(underlyingChartWrapper.id, targetSymbol);
      }
    });
  });

  // 3. Country Selector Modal Filter Engine Initialization
  const modalSearch = document.getElementById('modal-country-search');
  const modalBody = document.querySelector('.custom-modal-scroll');
  const marketTitle = document.getElementById('selected-market-title');
  const countryModalEl = document.getElementById('countrySelectModal');

  if (modalSearch && modalBody) {
    modalSearch.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase().trim();
      const regionBlocks = modalBody.querySelectorAll('.region-block');

      regionBlocks.forEach(block => {
        const items = block.querySelectorAll('.col');
        let visibleItemsInBlock = 0;

        items.forEach(item => {
          const countryText = item.querySelector('.country-item').textContent.toLowerCase();
          if (countryText.includes(query)) {
            item.style.setProperty('display', 'block', 'important');
            visibleItemsInBlock++;
          } else {
            item.style.setProperty('display', 'none', 'important');
          }
        });

        if (visibleItemsInBlock === 0 && query !== '') {
          block.style.setProperty('display', 'none', 'important');
        } else {
          block.style.setProperty('display', 'block', 'important');
        }
      });
    });

    modalBody.addEventListener('click', function(e) {
      const clickedCard = e.target.closest('.country-item');
      if (!clickedCard) return;

      const selectedValue = clickedCard.getAttribute('data-country');
      marketTitle.textContent = selectedValue === "Everywhere" ? "Markets Everywhere" : `Markets in ${selectedValue}`;

      modalBody.querySelectorAll('.country-item').forEach(item => {
        item.classList.remove('active-market', 'fw-bold');
      });
      clickedCard.classList.add('active-market', 'fw-bold');

      const openModal = bootstrap.Modal.getInstance(countryModalEl);
      if (openModal) openModal.hide();
    });

    countryModalEl.addEventListener('hidden.bs.modal', function () {
      modalSearch.value = '';
      modalBody.querySelectorAll('.col, .region-block').forEach(el => {
        el.style.display = 'block';
      });
    });
  }
});