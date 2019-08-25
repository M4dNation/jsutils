const each = require("../collection/each");
const isArray = require("../object/isArray");

/**
 * Transform an array to an object.
 * @returns {Object} The converted object
 */
function toObject(...args) {
  const arrs = [];
  const ret = {};
  let allArrays = true;
  let i = 0;

  each(args, value => {
    if (isArray(value)) {
      arrs.push(value);
    } else {
      allArrays = false;
    }
  });

  if (allArrays && arrs.length === 2) {
    const keys = arrs[1];
    for (; i < arrs[0].length; i++) {
      ret[arrs[0][i]] = keys[i];
    }
  } else if (allArrays && arrs.length > 1) {
    for (; i < arrs.length; i++) {
      const key = arrs[i][0];
      ret[key] = arrs[i][1];
    }
  } else if (allArrays && arrs.length === 1) {
    for (; i < arrs[0].length; i += 2) {
      ret[arrs[0][i]] = arrs[0][i + 1];
    }
  } else {
    for (; i < args.length; i += 2) {
      ret[args[i]] = args[i + 1];
    }
  }

  return ret;
}

module.exports = toObject;
