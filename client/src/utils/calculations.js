export const convertToArray = (string) => string
  .replace(/[\W_]+/g, ' ')
  .split(' ')
  .sort();

export const countEntries = (array, exceptions) => {
  const map = {};

  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    if (
      !exceptions.includes(item)
      && !exceptions.includes(item.toLowerCase())
    ) {
      map[item] = map[item] + 1 || 1;
    }
  }

  return Object.entries(map).map(([key, value]) => ({
    keyword: key,
    count: value,
  }));
};

export const sortByCount = (arr) => {
  // const order = [];
  // const res = {};
  // // eslint-disable-next-line
  // Object.keys(obj).forEach((key) => {
  //   return (order[obj[key].count - 1] = key);
  // });
  // order.forEach((key) => {
  //   res[key] = obj[key];
  // });
  // return res;

  const res = [...arr];

  for (let i = 0; i < res.length; i += 1) {
    // Last i elements are already in place
    for (let j = 0; j < res.length - i - 1; j += 1) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (res[j].count < res[j + 1].count) {
        // If the condition is true then swap them
        const temp = res[j];
        res[j] = res[j + 1];
        res[j + 1] = temp;
      }
    }
  }
  // Print the sorted array
  return res;
  // Object.entries(obj).map(([key, value]) => {});
};
