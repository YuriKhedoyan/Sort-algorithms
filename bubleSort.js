const bubbleSort = arrayNumbers => {
  for (let i = 0; i < arrayNumbers.length; i++) {
    for (let j = 0; j < arrayNumbers.length; j++) {
      if (arrayNumbers[i] < arrayNumbers[j]) {
        [arrayNumbers[i], arrayNumbers[j]] = [arrayNumbers[j]];
      }
    }
  }
  return arrayNumbers;
}