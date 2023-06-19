

    document.addEventListener('DOMContentLoaded', function () {
      const toggleThemeButtons = document.querySelectorAll('.dropdown-item');

      toggleThemeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          const themeValue = this.getAttribute('data-bs-theme-value');
          const themeIconActive = document.querySelector('.theme-icon-active');
          const themeIcon = this.querySelector('.theme-icon');
          const bdThemeText = document.querySelector('#bd-theme-text');

          document.documentElement.setAttribute('data-bs-theme', themeValue);
          themeIconActive.setAttribute('src', themeIcon.getAttribute('src'));
          bdThemeText.textContent = this.textContent.trim();
          toggleThemeButtons.forEach(function (button) {
            button.setAttribute('aria-pressed', false);
            button.querySelector('.theme-icon').classList.add('d-none');
          });
          this.setAttribute('aria-pressed', true);
          themeIcon.classList.remove('d-none');
        });
      });
    });

    // JavaScript code for navbar collapse
    document.addEventListener('DOMContentLoaded', function () {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const navbarToggler = document.querySelector('.navbar-toggler');

      navbarToggler.addEventListener('click', function () {
        const expanded = navbarToggler.getAttribute('aria-expanded') === 'true' || false;

        navbarCollapse.style.display = expanded ? 'none' : 'block';
        navbarToggler.setAttribute('aria-expanded', !expanded);
      });
    });

    // JavaScript code for enabling/disabling nav link
    document.addEventListener('DOMContentLoaded', function () {
      const enableLink = document.querySelector('.enable');
      const isEnabled = true; // Set this to false to disable the link

      if (!isEnabled) {
        enableLink.classList.add('disabled');
        enableLink.removeAttribute('href');
      }
    });

