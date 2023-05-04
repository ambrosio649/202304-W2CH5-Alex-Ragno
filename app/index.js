export const replaceLenght = (array) => {
  let count = 0;

  for (const i in array) {
    count++;
  }

  return count;
};

export const replacePush = (array, ...element) => {
  const splitedArray = [...array];

  const mixedArrays = [...splitedArray, ...element];

  return replaceLenght(mixedArrays);
};
