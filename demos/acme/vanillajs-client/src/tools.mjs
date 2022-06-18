//
export function* zip(xs, ys) {
  if (!Array.isArray(xs) || !Array.isArray(ys)) {
    throw new Error('Both arguments must be arrays.');
  }

  if (xs.length !== ys.length) {
    throw new Error('Only arrays of the same length are zippable.');
  }

  for (let i = 0; i < xs.length; i++) {
    yield [xs[i], ys[i]];
  }
}
