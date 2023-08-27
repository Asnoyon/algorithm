// For input= [5,4,6], elementToReplace =1 and subtractionElement = 3,

// the output should be arrayReplace(inputArray.elementToReplace,subtractionElement)=[5,3,6]

function arrReplace(inputArray, elementToReplace, subtractionElement) {
  inputArray.forEach((element, index) => {
    if (element === elementToReplace) {
      inputArray[index] = subtractionElement;
    }
  });
  console.log(inputArray);
}

arrReplace([5,4,6],4,3)

