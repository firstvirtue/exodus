const colors = ["#468966", "#FFF0A5", "#FFB03B", "#B64926", "#8E2800"];

const Particle = function ({ x, y, ww, wh, ctx }) {
  this.ctx = ctx;
  this.x = Math.random() * ww;
  this.y = Math.random() * wh;
  this.dest = {
    x: x,
    y: y,
  };

  this.r = Math.random() * 5 + 2;
  this.vx = (Math.random() - 0.5) * 20;
  this.vy = (Math.random() - 0.5) * 20;
  this.accX = 0;
  this.accY = 0;
  this.friction = Math.random() * 0.05 + 0.94;

  this.color = colors[Math.floor(Math.random() * (colors.length + 1))];
};

Particle.prototype.render = function () {
  this.accX = (this.dest.x - this.x) / 1000;
  this.accY = (this.dest.y - this.y) / 1000;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vw *= this.friction;
  this.vy *= this.friction;

  this.x += this.vx;
  this.y += this.vy;

  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
  this.ctx.fill();

  // [TODO] Add interaction
};

export default Particle;
