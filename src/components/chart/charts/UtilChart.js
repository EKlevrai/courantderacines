const componentToHex = (c) => {
  c = Math.round(c * 255).toString(16);
  return c.length === 1 ? "0" + c : c;
};

const hslToHex = (h, s, l) => {
  var r, g, b;
  var v, min, sv, sextant, fract, vsf;
  if (l <= 0.5) {
    v = l * (1 + s);
  } else {
    v = l + s - l * s;
  }
  if (v === 0) {
    return '#000';
  } else {
    min = 2 * l - v;
    sv = (v - min) / v;
    h = h/60;
    sextant = Math.floor(h);
    fract = h - sextant;
    vsf = v * sv * fract;
    if (sextant === 0 || sextant === 6) {
      r = v;
      g = min + vsf;
      b = min;
    } else if (sextant === 1) {
      r = v - vsf;
      g = v;
      b = min;
    } else if (sextant === 2) {
      r = min;
      g = v;
      b = min + vsf;
    } else if (sextant === 3) {
      r = min;
      g = v - vsf;
      b = v;
    } else if (sextant === 4) {
      r = min + vsf;
      g = min;
      b = v;
    } else {
      r = v;
      g = min;
      b = v - vsf;
    }
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
};

export const hsl = hslToHex;
