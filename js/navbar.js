(function() {
  // inject CSS
  const style = document.createElement('style');
  style.textContent = `
    html, body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .navbar-container {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
    }

    .navbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      padding: 12px 20px;
      width: 100%;
      background-color: #0096ff;
      box-shadow: 0 0 15px #0096ff;
      box-sizing: border-box;
      font-family: inherit;
    }

    /* Logo */
    .nav-logo {
      height: 40px;
      width: 40px;
      cursor: pointer;
      display: block;
    }

    .nav-logo-link {
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0;
    }

    /* Text links */
    .nav-link {
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
      padding: 8px 16px;
      border-radius: 6px;
      transition: transform 0.2s;
      white-space: nowrap;
      font-family: inherit;
    }

    .nav-link:hover {
      transform: scale(1.05);
    }
  `;
  document.head.appendChild(style);

  // inject navbar HTML wrapped in container
  const container = document.createElement('div');
  container.className = 'navbar-container';
  container.style.fontFamily = 'Arial, sans-serif';
  container.innerHTML = `
    <div class="navbar">
      <a href="/" class="nav-logo-link">
        <img src="/favicon.ico" class="nav-logo" alt="Home" />
      </a>
      <a href="/Pre-Built-PCs" class="nav-link">Browse PCs</a>
      <a href="/Order" class="nav-link">Order</a>
      <a href="/About-Us" class="nav-link">About Us</a>
      <a href="/More" class="nav-link">More</a>
    </div>
  `;
  document.body.prepend(container);

  // dynamically set body padding based on navbar height
  function updateBodyPadding() {
    const navbar = container.querySelector('.navbar');
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  }

  // initial padding
  updateBodyPadding();

  // update padding if window resizes
  window.addEventListener('resize', updateBodyPadding);
})();
