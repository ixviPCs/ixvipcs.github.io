const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let stars = [];
const starCount = 800;

function makeStar() {
  return {
    x: Math.random() * canvas.width - canvas.width / 2,
    y: Math.random() * canvas.height - canvas.height / 2,
    z: Math.random() * canvas.width * 0.9 + 50,
  };
}

for (let i = 0; i < starCount; i++) stars.push(makeStar());

function drawStars() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  for (const star of stars) {
    const k = 128.0 / star.z;
    const px = star.x * k + canvas.width / 2;
    const py = star.y * k + canvas.height / 2;
    const size = Math.max((1 - star.z / canvas.width) * 3, 0.5);

    ctx.beginPath();
    ctx.arc(px, py, size, 0, Math.PI * 2);
    ctx.fill();

    star.z -= 2;
    if (star.z <= 50) {
      Object.assign(star, makeStar(), { z: canvas.width });
    }
  }
}

window.addEventListener("wheel", (e) => {
  for (const star of stars) {
    star.z -= e.deltaY * 0.5;
    if (star.z < 50) Object.assign(star, makeStar(), { z: canvas.width });
  }
}, { passive: true });

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}
animate();
