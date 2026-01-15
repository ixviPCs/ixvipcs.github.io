(function() {
  // inject CSS
  const style = document.createElement('style');
  style.textContent = `
    style.textContent = `
  .navbar {
    width: 100vw;       /* full width */
    background-color: #0096ff;
    padding: 12px 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    box-shadow: 0 0 15px #0096ff;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;            /* make sure it starts at left */
    z-index: 100;
  }

  .nav-logo {
    height: 40px;
    width: 40px;
    cursor: pointer;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 8px 16px;
    border-radius: 6px;
    transition: transform 0.2s;
    white-space: nowrap;
  }

  .nav-link:hover {
    transform: scale(1.05);
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
  document.head.appendChild(style);

  // inject navbar HTML at top of body
  const navbar = document.createElement('div');
  navbar.innerHTML = `
    <div class="navbar">
      <img src="/favicon.ico" class="nav-logo" alt="Home" />
      <a href="/Pre-Built-PCs" class="nav-link">Browse PCs</a>
      <a href="/Order" class="nav-link">Order</a>
      <a href="/About-Us" class="nav-link">About Us</a>
      <a href="/More" class="nav-link">More</a>
    </div>
  `;
  document.body.prepend(navbar);
})();
