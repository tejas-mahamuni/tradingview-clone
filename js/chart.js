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
          "height": 400,
          "symbol": "SPY", 
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light", 
          "style": "3",     
          "locale": "en",
          "container_id": "tradingview_advanced_chart",
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
    };

    container.appendChild(script);
  }
})();

function checkMarketHours() {
  const btn = document.getElementById('market-status-btn');
  if (!btn) return;

  const estTime = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
  
  const day = estTime.getDay(); 
  const hours = estTime.getHours();
  const minutes = estTime.getMinutes();
  
  const currentTimeInHours = hours + (minutes / 60);
  const isWeekday = day >= 1 && day <= 5;
  const isMarketOpen = currentTimeInHours >= 9.5 && currentTimeInHours < 16.0;

  if (isWeekday && isMarketOpen) {
    btn.style.Color = '#056656'; 
    btn.style.backgroundColor = 'rgb(5, 102, 86, 0.4)'; 
    
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#056656" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus">
        <path d="M5 12h14" />
      </svg>
    `;
  } else {

    btn.style.backgroundColor = '#f2f2f2';
    btn.style.boxShadow = 'none';
    
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A4A4A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus">
        <path d="M5 12h14" />
      </svg>
    `;
  }
}

checkMarketHours();
setInterval(checkMarketHours, 15000);

function handleScrollbar() {
    const nav = document.getElementById('main-navbar');

    if (!nav) return;

    const triggerHeight = window.innerHeight * 2;
    if (window.scrollY > triggerHeight) {
        nav.classList.add('sticky-nav');
    }
    else {
        nav.classList.remove('sticky-nav');
    }
}

window.addEventListener('scroll', handleScrollbar);

function createResponsiveChart(canvasId, dataPoints) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const canvasContext = ctx.getContext('2d');
  
  // Dynamic gradient calculation matching responsive width bounds
  const gradientFill = canvasContext.createLinearGradient(0, 0, 0, 88);
  gradientFill.addColorStop(0, 'rgba(239, 68, 68, 0.22)'); 
  gradientFill.addColorStop(1, 'rgba(239, 68, 68, 0.0)');   

  const labels = new Array(dataPoints.length).fill('');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        data: dataPoints,
        borderColor: '#ef4444',        
        borderWidth: 2,               
        pointRadius: 0,               
        pointHoverRadius: 5,          
        pointBackgroundColor: '#ef4444',
        fill: true,                   
        backgroundColor: gradientFill, 
        tension: 0.35                  
      }]
    },
    options: {
      responsive: true,              // Enforce viewport fluid tracking scaling
      maintainAspectRatio: false,    // Allows height to stay constant at 88px
      interaction: { intersect: false, mode: 'index' },
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } }
    }
  });
}

// Instantiate all charts simultaneously with responsive settings
createResponsiveChart('cryptoMarketChart', [2.35, 2.31, 2.28, 2.25, 2.21, 2.18, 2.17]);
createResponsiveChart('usDollarIndex', [97.5, 97.8, 98.1, 98.0, 98.4, 98.6, 98.8]);
createResponsiveChart('us10Yield', [4.31, 4.35, 4.41, 4.39, 4.43, 4.45, 4.473]);