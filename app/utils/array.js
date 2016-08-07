'use strict';

export const partition = (xs, length = 4) => {
  if (length <= 0) {
    throw new Error('length should be greater than 0');
  }

  const newArr = [];
  xs.forEach((x, idx) => {
    if(idx % length === 0) {
      newArr.push([x]);
    } else {
      newArr[newArr.length -1].push(x);
    }

  });
  return newArr;
}
