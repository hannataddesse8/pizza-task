export const getDistinctArrays = (array = []) => {
  let distinctArray = [];
  for (let i = 0; i < array.length; i++) {
    let distinctArrayExists = false;
    for (let j = 0; j < distinctArray.length; j++) {
      if (distinctArray[j].data.length === array[i].length) {
        for (let k = 0; k < array[i].length; k++) {
          if (!distinctArray[j].data.includes(array[i][k])) {
            break;
          }
          if (k === array[i].length - 1) {
            distinctArrayExists = true;
          }
        }
      }
      if (distinctArrayExists) {
        distinctArray[j].count++;
        break;
      }
    }
    if (!distinctArrayExists) {
      distinctArray.push({
        data: array[i],
        count: 1,
      });
    }
  }

  return distinctArray;
};
