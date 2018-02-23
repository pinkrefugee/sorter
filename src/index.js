class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    indices.sort();
    var temp = [];

    for(var i=0; i < indices.length; i++)
    {
      temp.push(this.array[indices[i]]);
    }

    temp.sort(this.comparator);
    
    for (var j=0; j < indices.length; j++)
    {
      this.array[indices[j]] = temp[j];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;