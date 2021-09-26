/**
 *
 * @param {Number} index the current index number
 * @param {Number} length the data array length
 * @returns grid length number
 *
 * if the length is not divisible by 3 (which is used to make a grid of 3 items with length of 4)
 * then take the first 3 and separate the rest to equal parts on the grid
 */
const gridSeparator = (index, length, section, sectionLength) => {
  let remaining = length % section;
  let fittingLength = length - remaining;
  if (fittingLength !== length) {
    if (index < fittingLength) {
      return sectionLength;
    } else if (remaining === 2) {
      return 6;
    } else if (remaining === 1) {
      return 12;
    }
  }
};

export default gridSeparator;
