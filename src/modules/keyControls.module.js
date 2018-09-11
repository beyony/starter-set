import * as canvas from "./canvas.module";

document.addEventListener(
  "keydown",
  event => {
    const keyName = event.key;

    if (keyName === "c") {
      // not alert when only Control key is pressed.

      canvas.clearFilters();

      return;
    }

    if (event.ctrlKey) {
      // Even though event.key is not 'Control' (i.e. 'a' is pressed),
      // event.ctrlKey may be true if Ctrl key is pressed at the time.
      // alert(`Combination of ctrlKey + ${keyName}`);
    }
  },
  false
);
