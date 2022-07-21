const insertionSort = arrayNumbers => {
  for (let i = 1; i < arrayNumbers.length; i++) {
      let currentIndex = i;
      while (currentIndex > 0 && arrayNumbers[currentIndex - 1] > arrayNumbers[currentIndex]) {
          [arrayNumbers[currentIndex - 1], arrayNumbers[currentIndex]] = [arrayNumbers[currentIndex], arrayNumbers[currentIndex - 1]]
          currentIndex--
      }
  }
  return arrayNumbers;
}