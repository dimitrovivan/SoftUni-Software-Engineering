function solution() {

    let str = '';

    return {
        append: (word) => str += word.toString(),
        print: () => console.log(str),
        removeStart: (count) => str = str.slice(Number(count)),
        removeEnd: (count) => str = str.slice(0, str.length - Number(count)),
    }
}



let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

