(() => {
  const root = document.documentElement;
  document.querySelectorAll('.stack').forEach(ribbon => {
    const track = ribbon.querySelector('.stack-track');
    const original = track.querySelector('.stack-group');
    const fillRibbon = () => {
      const width = original.getBoundingClientRect().width;
      if (!width) return;
      // Keep enough copies after the first group to cover even ultrawide screens.
      const count = Math.max(2, Math.ceil(ribbon.clientWidth / width) + 1);
      while (track.children.length > count) track.lastElementChild.remove();
      while (track.children.length < count) {
        const copy = original.cloneNode(true);
        copy.setAttribute('aria-hidden', 'true');
        track.appendChild(copy);
      }
      track.style.setProperty('--ribbon-distance', `-${width}px`);
      track.style.animationDuration = `${width / 36}s`;
    };
    new ResizeObserver(fillRibbon).observe(ribbon);
    document.fonts.ready.then(fillRibbon);
    fillRibbon();
  });
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
