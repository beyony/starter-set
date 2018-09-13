import * as grayscale from "./filters/grayscale.filter";
import * as brightness from "./filters/brightness.filter";
import * as threshold from "./filters/threshold.filter";
import * as viewmodel from "./viewmodel.module";
import * as canvas from "./canvas.module";

const filters = [grayscale, brightness, threshold];

export function test(ctx, ca) {
    // const imageData = ctx.getImageData(0, 0, c.width, c.height);
    // let grayscaleImageData = grayscale.apply(imageData);
    // ctx.putImageData(grayscaleImageData, 0, 0);
    // let brightnessImageData = brightness.apply(imageData, -100);
    // ctx.putImageData(brightnessImageData, 0, 0);
    // let thresholdImageData = threshold.apply(imageData, 120);
    // ctx.putImageData(thresholdImageData, 0, 0);
}

export function loadPreview(img) {
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");

    // minify img size by defining previewHeight
    const previewHeight = 70;
    const quotient = img.height / previewHeight;
    const previewWidth = img.width / quotient;

    c.width = previewWidth;
    c.height = previewHeight;

    // add filter and pass DataUrl to viewmodel
    for (let id = 0; id < 3; id += 1) {
        ctx.drawImage(img, 0, 0, previewWidth, previewHeight);
        const imageData = ctx.getImageData(0, 0, c.width, c.height);
        const filterImageData = filters[id].apply(imageData);
        ctx.putImageData(filterImageData, 0, 0);
        viewmodel.addFilterPreview(id, c.toDataURL());
    }
}

export function activate(id) {
    const ctx = canvas.getCtx();
    const c = canvas.getCanvas();
    const imageData = ctx.getImageData(0, 0, c.width, c.height);
    const filterImageData = filters[id].apply(imageData);
    ctx.putImageData(filterImageData, 0, 0);
}
