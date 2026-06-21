(function() {
  const container = document.getElementById('tradingview-chart');
  
  if (container) {
    const widgetDiv = document.createElement('div');
    widgetDiv.id = 'tradingview_advanced_chart';
    container.appendChild(widgetDiv);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;

    script.onload = function() {
      if (typeof TradingView !== 'undefined') {
        new TradingView.widget({
          "width": "100%",
          "height": "100%",
          "symbol": "SPY", 
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light", 
          "style": "1",     
          "locale": "en",
          "container_id": "tradingview_advanced_chart",
          "allow_symbol_change": true,
          "calendar": true,
          "support_host": "https://www.tradingview.com",
          "hide_top_toolbar": false,     
          "hide_side_toolbar": false,   
          "hide_legend": false,    
        });
      }
    };

    container.appendChild(script);
  }
})();