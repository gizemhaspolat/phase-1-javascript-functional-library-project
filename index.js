const standardizeInput = function (collection) {
  return collection instanceof Array
    ? collection.slice()
    : Object.values(collection);
};

const thrice = (x) => x * 3;
const acc = (initVal, currVal) => initVal + currVal;
const isEven = (x) => (x % 2 == 0 ? true : false);
const compareNums = function (x, y) {
  return x > y ? 1 : x < y ? -1 : 0;
};
collection = [1, 2, 3, 4];
function myEach(collection, alert) {
  let wCollection = standardizeInput(collection);
  for (let i = 0; i < wCollection.length; i++) {
    alert(wCollection[i]);
  }
  return collection;
}

function myMap(collection, thrice) {
  let newArray = [];
  let wCollection = standardizeInput(collection);
  wCollection.map((x) => newArray.push(thrice(x)));
  return newArray;
}

function myReduce(collection, acc, val) {
  let wCollection = standardizeInput(collection);
  let total = 0;
  if (!val) {
    val = wCollection[0];
    wCollection.shift();
  }
  for (let i = 0; i < wCollection.length; i++) {
    total = acc(total, wCollection[i]);
  }
  return total + val;

  // wCollection.forEach((x) => (total = acc(total, x)));
  // return total + val;
}

function myFind(collection, isEven) {
  let result = undefined;
  let wCollection = standardizeInput(collection);
  for (let i = 0; i < wCollection.length; i++) {
    if (isEven(wCollection[i])) {
      result = wCollection[i];
      return result;
    }
  }
}

function myFilter(collection, isEven) {
  let truthies = [];
  let wCollection = standardizeInput(collection);
  for (let i = 0; i < wCollection.length; i++) {
    if (isEven(wCollection[i])) {
      truthies.push(wCollection[i]);
    }
  }
  return truthies;
}

function mySize(collection) {
  let wCollection = standardizeInput(collection);
  return wCollection.length;
}

function myFirst(arr, n) {
  let result = [];
  if (n == 0 || !n) {
    return arr[0];
  } else if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      result.push(arr[i]);
    }
    return result;
  } else {
    return arr[0];
  }
}

function myLast(arr, n) {
  let result = [];
  if (n == 0 || !n) {
    return arr[arr.length - 1];
  } else if (n <= arr.length) {
    for (let i = arr.length - n; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
  }
}

function myKeys(collection) {
  let keys = [];
  for (let key in collection) {
    keys.push(key);
  }
  return keys;
}

function myValues(collection) {
  let values = [];
  for (let key in collection) {
    values.push(collection[key]);
  }
  return values;
}
//Bonus I
function mySortBy(arr, thrice) {
  const sortedArray = [...arr];
  return sortedArray.sort(function (a, b) {
    if (thrice(a) > thrice(b)) {
      return 1;
    } else if (thrice(b) > thrice(a)) {
      return -1;
    } else {
      return 0;
    }
  });
}
