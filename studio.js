(() => {
  const root = document.documentElement;
  document.querySelectorAll('.theme-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = theme;
      try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
    });
  });
  document.querySelectorAll('[data-language]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('portfolio-language', link.dataset.language); } catch (_) {}
    });
  });
  const updateNavigation = () => {
    const hash = location.hash || '#inicio';
    document.querySelectorAll('.rail-link').forEach(link => {
      const active = link.getAttribute('href') === hash;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('hashchange', updateNavigation);
  updateNavigation();
  document.getElementById('year').textContent = new Date().getFullYear();
})();
