export function apply(imageData, adjustment = -100) {
  let d = imageData.data;
  for (let i = 0; i < d.length; i += 4) {
    d[i] += adjustment;
    d[i + 1] += adjustment;
    d[i + 2] += adjustment;
  }
  return imageData;
};
