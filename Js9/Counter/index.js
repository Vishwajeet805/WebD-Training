const targetDate = new Date("2026-05-20T18:10:00+05:30");

function updateCountdown() {

      const now = new Date();

      const diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "Time Up!";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor((diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60));

      const minutes = Math.floor((diff % (1000 * 60 * 60))
        / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60))
        / 1000);

      document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    }

    setInterval(updateCountdown, 1000);

    updateCountdown();

