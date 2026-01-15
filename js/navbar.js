(function() {
  const style = document.createElement('style');
  style.textContent = `
    html, body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
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
      align-items: center;
      gap: 12px;
      padding: 5px 0; /* 5px top and bottom */
      width: 100%;
      background-color: #0096ff;
      box-shadow: 0 0 10px #0096ff;
      box-sizing: border-box;
    }

    /* Logo */
    .nav-logo {
      height: 40px; /* your desired logo size */
      width: 40px;
      cursor: pointer;
      display: block;
    }

    .nav-logo-link {
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0 8px; /* optional horizontal spacing */
    }

    /* Text links */
    .nav-link {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      padding: 4px 12px;
      border-radius: 6px;
      transition: transform 0.2s;
      white-space: nowrap;
    }

    .nav-link:hover {
      transform: scale(1.05);
    }
  `;
  document.head.appendChild(style);

  // inject navbar
  const container = document.createElement('div');
  container.className = 'navbar-container';
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

  // dynamically push page down based on navbar height
  function updateBodyPadding() {
    const navbar = container.querySelector('.navbar');
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  }

  updateBodyPadding();
  window.addEventListener('resize', updateBodyPadding);
})();
