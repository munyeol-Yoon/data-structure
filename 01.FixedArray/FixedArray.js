class FixedArray {
  #arrayLength;
  #array = [];
  #index = 0;
  // 필요한변수 추가 가능

  // #arrayLength와 #array를 알맞게 초기화
  // 생성자 파라미터에는 FixedArray의 고정된 길이를 받아야됨.
  // #array초기화 시 각요소의 값은 undefined
  constructor(arrayLength) {
    this.#arrayLength = arrayLength;
    for (let i = 0; i < arrayLength; i++) {
      this.#array[i] = undefined;
    }
  }

  //////////////////////////////
  //////      LEVEL 1      /////
  //////////////////////////////
  // 배열 맨 뒤에 요소 추가
  // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.
  push(element) {
    if (this.#arrayLength <= this.#index) {
      throw new Error("배열 크기 초과");
    }
    this.#array[this.#index] = element;
    this.#index++;

    return element;
  }

  // 배열의 맨 마지막 요소를 제거하고 그 요소를 반환
  pop() {
    if (this.#index === 0 && this.#array[this.#index - 1] === undefined) {
      throw new Error("제거할 요소 없음");
    }
    const element = this.#array[this.#index - 1];
    this.#array[this.#index] = undefined;
    this.#index--;

    return element;
  }

  // 현재 배열의 사용되고 있는 크기를 반환
  getLength() {
    return this.#index;
  }

  // 현재 배열의 상태를 string으로 반환
  stringify() {
    let strArr = "";
    for (let i = 0; i < this.#index; i++) {
      if (i === this.#index - 1) {
        strArr += `${this.#array[i]}`;
      } else {
        strArr += `${this.#array[i]}, `;
      }
    }

    return `[${strArr}]`;
  }

  //////////////////////////////
  //////      LEVEL 2      /////
  //////////////////////////////
  // 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 요소가 없으면 -1을 반환합니다.
  indexOf(searchElement) {
    const arr = this.#array;
    let result = -1;
    for (let i = 0; i < this.getLength(); i++) {
      if (searchElement === arr[i]) {
        result = i;
        return result;
      }
    }
    return result;
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소 1개만 반환
  // true 가 없으면 null 반환
  find(predicate) {
    for (let i = 0; i < this.getLength(); i++) {
      if (predicate(this.#array[i])) return this.#array[i];
    }
    return null;
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소의 index반환
  // true 가 없으면 -1 반환
  findIndex(predicate) {
    for (let i = 0; i < this.getLength(); i++) {
      if (predicate(this.#array[i])) return i;
    }
    return -1;
  }

  // 배열에 특정 요소가 포함되어 있는지 여부를 확인합니다. (true or false)
  includes(searchElement) {
    return this.indexOf(searchElement) !== -1;
  }

  //////////////////////////////
  //////      LEVEL 3      /////
  //////////////////////////////
  // 배열의 각 요소에 대해 제공된 함수를 한 번씩 실행합니다.
  forEach(callback) {
    for (let i = 0; i < this.getLength(); i++) {
      callback(this.#array[i]);
    }
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소를 모아 새로운 배열 반환
  filter(predicate) {
    const length = this.getLength();
    const filteredArray = new FixedArray(length);

    for (let i = 0; i < length; i++) {
      if (predicate(this.#array[i])) filteredArray.push(this.#array[i]);
    }

    return filteredArray;
  }

  // 배열의 각 요소에 대해 callback 함수를 호출한 결과를 모아 새로운 배열로 반환
  map(callback) {
    const length = this.getLength();
    const mapArray = new FixedArray(length);

    for (let i = 0; i < length; i++) {
      mapArray.push(callback(this.#array[i]));
    }
    return mapArray;
  }

  // 배열의 각 요소에 대해 제공된 함수를 호출하여 누산기에 값을 축적
  reduce(callback, initValue) {
    const length = this.getLength();
    let acc = initValue;

    for (let i = 0; i < length; i++) {
      acc = callback(acc, this.#array[i]);
    }

    return acc;
  }
}

const arr = new FixedArray(5);

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);

console.log(arr.stringify());
console.log(arr.indexOf(1));

console.log(arr.find((element) => element > 2));
console.log(arr.findIndex((element) => element > 2));
console.log(arr.includes(0));
arr.forEach((e) => console.log(e));

console.log(arr.filter((e) => e !== 1).stringify());
console.log(arr.map((e) => e * 2).stringify());

console.log(arr.reduce((a, c) => a + c, 0));
