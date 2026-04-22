const weddingDate = new Date('2024-04-22T00:00:00');

function updateCounter() {
  const now = new Date();
  const diff = now - weddingDate;

  if (diff <= 0) return;

  const totalMinutes = Math.floor(diff / (1000 * 60));
  const totalHours = Math.floor(diff / (1000 * 60 * 60));
  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  const years = Math.floor(totalDays / 365);
  const days = totalDays % 365;
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  document.getElementById('years').textContent = years;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
}

updateCounter();
setInterval(updateCounter, 60000);
