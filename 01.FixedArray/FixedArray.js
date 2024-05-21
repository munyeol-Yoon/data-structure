class FixedArray {
    #arrayLength;
    #array;
    // 필요한변수 추가 가능

    // #arrayLength와 #array를 알맞게 초기화
    // 생성자 파라미터에는 FixedArray의 고정된 길이를 받아야됨.
    // #array초기화 시 각요소의 값은 undefined
    constructor() { }

    //////////////////////////////
    //////      LEVEL 1      /////
    //////////////////////////////
    // 배열 맨 뒤에 요소 추가
    // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.
    push(element) { }

    // 배열의 맨 마지막 요소를 제거하고 그 요소를 반환
    pop() { }

    // 현재 배열의 사용되고 있는 크기를 반환
    getLength() { }

    // 현재 배열의 상태를 string으로 반환
    stringify() { }
}


