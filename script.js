function filterByCity(targetCity, listingCityArray) {
  let targetFmt = universalFormat(targetCity);
  let indexArray = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (universalFormat(listingCityArray[i]) === targetFmt) {
      indexArray.push(i);
    }
  }
  return indexArray;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let indexArray = [];
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (
      Number(listingPriceArray[i]) < maxPrice &&
      Number(listingPriceArray[i]) > minPrice
    ) {
      indexArray.push(i);
    }
  }
  return indexArray;
  // Note: Comment out the following line when you start working on this function!
  //return [...listingPriceArray.keys()];
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  let indexArray = [];
  //Iterate through targetTypes
  for (let i = 0; i < targetTypes.length; i++) {
    //Iterate through listingTypeArray
    for (let j = 0; j < listingTypeArray.length; j++) {
      if (targetTypes[i] === listingTypeArray[j]) {
        indexArray.push(j);
      }
    }
  }
  return indexArray;
  // Note: Comment out the following line when you attempt the LevelUp!
  //return [...listingTypeArray.keys()];
}

//Helper function to remove spaces and set to lowercase
function universalFormat(text) {
  return text.toLowerCase().replaceAll(" ", "");
}
