// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.dark-mode-toggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Optionally, save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // On page load, set theme from localStorage if available
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
