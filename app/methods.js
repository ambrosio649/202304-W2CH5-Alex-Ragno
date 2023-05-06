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

export const replacePop = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  const lastElement = array[array.length - 1];
  array.length -= 1;
  return lastElement;
};

export const replaceUnShift = (array, ...newElement) => {
  const elementsToAdd = [...newElement, ...array];
  array.length = 0;

  for (let index = 0; index < elementsToAdd.length; index++) {
    array[index] = elementsToAdd[index];
  }

  return array.length;
};
