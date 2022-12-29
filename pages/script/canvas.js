import Particle from "./particle";

const main = () => {
  if (typeof window !== "object") return;

  const scene = document.querySelector("#scene"),
    ctx = scene.getContext("2d", { willReadFrequently: true }),
    mouse = { x: 0, y: 0 },
    radius = 1;

  let amount = 0,
    particles = [];

  const copy = document.querySelector("#copy");

  let ww = scene.width = window.innerWidth;
  let wh = scene.height = window.innerHeight / 2;

  function initScene() {
    ww = scene.width = window.innerWidth;
    wh = scene.height = window.innerHeight / 2;

    ctx.clearRect(0, 0, scene.width, scene.height);

    ctx.font = "bold " + ww / 10 + "px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(copy.innerText, ww / 2, wh / 2);

    let data = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, scene.width, scene.height);
    ctx.globalCompositeOperation = "screen";

    particles = [];
    for (let i = 0; i < ww; i += Math.round(ww / 150)) {
      for (let j = 0; j < wh; j += Math.round(ww / 150)) {
        if (data[((i + j * ww) * 4) + 3] > 150) {
          const x = i
          const y = j
          particles.push(new Particle({ x, y, ww, wh, ctx }));
        }
      }
    }

    amount = particles.length;
    // console.log(amount)
  }

  function render() {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, scene.width, scene.height);
    for (let i = 0; i < amount; i++) {
      particles[i].render();
    }
  }

  initScene();
  render();
};

export default main;
