
const editorsPickData = [
  {
    img: "./assets/img/c1.png",
    title: "SpaceX IPO Rocket Soars 20% in Public Debut. What Happens Next?",
    desc: "SpaceX (NASDAQ:SPCX) finally arrived on the public markets, and the debut looked a lot like one of its Falcon rocket...",
    author: "TradingView",
    date: "5 hours ago",
    comments: 9,
    rockets: 23
  },
  {
    img: "./assets/img/i2.png",
    title: "Potential Value Play on Tesla: Massive Cup and Handle to $765",
    desc: "Tesla is starting to look pretty interesting on the daily/weekly. There's a possible massive cup-and-handle structure forming...",
    author: "Alchemy_Markets",
    date: "6 hours ago",
    comments: 1,
    rockets: 6
  },
  {
    img: "./assets/img/c3.png",
    title: "$MSFT - 200-Week EMA Test. What The Chart Says.",
    desc: "Microsoft (NASDAQ:MSFT) is sitting at $324.74, touching the 200-week EMA for the first time since the 2022 low at $222...",
    author: "Fil_T",
    date: "11 hours ago",
    comments: 2,
    rockets: 8
  },
  {
    img: "./assets/img/c1.png",
    title: "Macro Data Dashboard Review - June 2026",
    desc: "With the economy seemingly in a perpetual state of uncertainty this decade, I have decided to make sense of it myself...",
    author: "az761",
    date: "8 hours ago",
    comments: 1,
    rockets: 2
  },
  {
    img: "./assets/img/c2.png",
    title: "Micron Hit an All-Time High, Then Fell. What Does Its Chart Say?",
    desc: "Micron Technology (NASDAQ:MU) fell some 6% Thursday morning after rising nearly 1,000% over 12 months, taking the stock to...",
    author: "moomoo",
    date: "11 hours ago",
    comments: 12,
    rockets: 55
  },
  {
    img: "./assets/img/i3.png",
    title: "Brent's April 17 Low Is Back In Play",
    desc: "Our Brent Crude contract is testing the April 17 low at $82.10, marking another occasion when we saw a raft of 'Hormuz strait' headlines...",
    author: "FOREX.com",
    date: "11 hours ago",
    comments: 1,
    rockets: 3
  }
];

// 2. DATA EXTRACTED FROM THE FIRST IMAGE (Popular)
const popularData = [
  {
    img: "./assets/img/c1.png",
    title: "Gold Breakout: Target 2,175. Recovery Toward All-Time High Levels?",
    desc: "Gold makes a massive structural comeback above the key daily support boundaries, displaying clean chart patterns pointing north...",
    author: "Hamed_AZ",
    date: "Jun 14",
    comments: 15,
    rockets: 239
  },
  {
    img: "./assets/img/i2.png",
    title: "BTCUSD: 61,000 Support Holds - 68,000 Next Targets Target",
    desc: "Bitcoin price successfully cleared the overhead historical resistance block and is now gathering momentum for a clear retest...",
    author: "Babenski",
    date: "Jun 13",
    comments: 73,
    rockets: 109
  },
  {
    img: "./assets/img/c3.png",
    title: "The US30/DJI Short Term Setup Analysis",
    desc: "The Dow Jones Industrial Average shows signs of temporary consolidation beneath the recent psychological milestone highs...",
    author: "MohsenNirumand",
    date: "Jun 13",
    comments: 19,
    rockets: 40
  },
  {
    img: "./assets/img/i1.png",
    title: "BTC another drop loading, but a potential pump first",
    desc: "BTC / USDT Check my last very successful analysis (see here). What's next? We now observe that the price is forming a triangle...",
    author: "Babenski",
    date: "4 hours ago",
    comments: 73,
    rockets: 109
  },
  {
    img: "./assets/img/c2.png",
    title: "Bitcoin Progress Update: Risk Managed, Upside Still in Focus",
    desc: "The highlighted zone remains my primary area of interest. As long as price continues to trade within this range, I am...",
    author: "MohsenNirumand",
    date: "Updated Jun 13",
    comments: 19,
    rockets: 40
  },
  {
    img: "./assets/img/i3.png",
    title: "Why Higher Timeframes Control Lower Timeframe Moves",
    desc: "The 15m chart can show you your entry. The higher timeframes decide if that entry is fighting the real move. Higher...",
    author: "TradingAcademy",
    date: "Jun 12",
    comments: 31,
    rockets: 315
  }
];

function renderIdeasGrid(dataset) {
  const container = document.getElementById('ideas-grid');
  if (!container) return;

  container.innerHTML = '';

  dataset.forEach(item => {
    const cardMarkup = `
      <div class="col mb-5">
        <div class="market-item p-3 h-100 d-flex flex-column justify-content-between">
          <div>
            <div class="border border-dark border-opacity-10 rounded-3 overflow-hidden mb-2">
              <img src="${item.img}" class="img-fluid w-100 object-fit-cover" style="height: 200px;" alt="Idea Image" />
            </div>
            <div class="fw-bolder text-dark mb-1" style="font-size: 1.1rem; line-height: 1.35;">
              ${item.title}
            </div>
            <p class="text-muted small text-truncate mb-3">
              ${item.desc}
            </p>
          </div>

          <div class="d-flex w-100 justify-content-between align-items-center pt-2 mt-auto">
            <div>
              <div class="fw-bold text-dark small">by ${item.author}</div>
              <span class="text-muted" style="font-size: 0.75rem;">${item.date}</span>
            </div>
            <div class="ideas d-flex gap-2 align-items-center">
              <button class="btn btn-sm d-flex align-items-center gap-1 text-muted border-0 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-text"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/></svg>
                <span class="small fw-semibold">${item.comments}</span>
              </button>
              <button class="btn btn-sm d-flex align-items-center gap-1 text-muted border-0 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>
                <span class="small fw-semibold">${item.rockets}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardMarkup;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const btnEditors = document.getElementById('btn-editors');
  const btnPopular = document.getElementById('btn-popular');

  if (btnEditors && btnPopular) {
    btnEditors.addEventListener('click', () => {
      btnEditors.className = "btn fw-bold p-0 border-0 text-dark";
      btnPopular.className = "btn fw-bold p-0 border-0 text-muted";
      renderIdeasGrid(editorsPickData);
    });

    btnPopular.addEventListener('click', () => {
      btnEditors.className = "btn fw-bold p-0 border-0 text-muted";
      btnPopular.className = "btn fw-bold p-0 border-0 text-dark";
      renderIdeasGrid(popularData);
    });
  }

  renderIdeasGrid(editorsPickData);
});

document.addEventListener("DOMContentLoaded", function() {
  const btnPopular = document.getElementById('btn-popular');
  const btnEditors = document.getElementById('btn-editors');

  if (btnPopular && btnEditors) {
    btnPopular.addEventListener('click', () => {
      btnPopular.className = "btn rounded-pill px-4 py-2 fw-bold active-pill";
      btnEditors.className = "btn rounded-pill px-4 py-2 fw-bold text-muted variant-pill";
      renderIdeasGrid(popularData); 
    });

    btnEditors.addEventListener('click', () => {
      btnEditors.className = "btn rounded-pill px-4 py-2 fw-bold active-pill";
      btnPopular.className = "btn rounded-pill px-4 py-2 fw-bold text-muted variant-pill";
      renderIdeasGrid(editorsPickData);
    });
  }
});