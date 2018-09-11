import * as filter from "./filter.module";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();

function drawCanvas() {
  ctx.save();
  ctx.translate(
    (canvas.width - img.width) / 2,
    (canvas.height - img.height) / 2
  );
  ctx.drawImage(img, 0, 0);
  ctx.restore();
}

export function load() {
  function resizeCanvas() {
    const container = document.getElementById("canvasContainer");
    canvas.style.width = `${container.clientWidth}px`;
    canvas.style.height = `${container.clientHeight}px`;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    drawCanvas();
  }

  window.onresize = resizeCanvas;
  resizeCanvas();

  img.onload = function() {
    filter.loadPreview(this);
    drawCanvas();
  };

  img.src = "img/demo.png";
}

export function getCtx() {
  return ctx;
}
export function getCanvas() {
  return canvas;
}
export function clearFilters() {
  drawCanvas();
}
