 //anonymous fun:

var oddNums = function (arr) {
    let odd = [];
    arr.filter(num => {
        if (num % 2 !== 0)
            odd.push(num);
    })

    console.log(`${odd}`);
}
oddNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19, 20, 29, 30, 32]);


var str = function (array) {
    var titleCaps = [];
    for (var i = 0; i < array.length; i++) {
        titleCaps += array[i][0].toUpperCase() + array[i].slice(1);
    } console.log(titleCaps);
}
str(["hjas ", "abu ", "nihal"]);



var sum = function (array) {
    var tsum = 0;
    for (i = 0; i < array.length; i++) { tsum += array[i]; }
    console.log(`${tsum}`);
}
sum([2, 4, 6, 8, 10]);




var primeNum = function (arr) {
    let p = [];
    arr.forEach(num => {
        if (num <= 1)
            return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0)
                return false;
        }
        return p.push(num);
    })
    console.log(`${p}`);
}
primeNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19, 20, 29, 30, 32]);





var ispalindrome = function (arr) {
    var palintrome = [];
    arr.filter(element => {
        var str = String(element);
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
            if (str[i] == str[j]) {
                i++;
                j--;
            }
            else
                return false;
        }
        return palintrome.push(element);
    })
    console.log(`${palintrome}`);

}
ispalindrome(["wow", "cool", "tit", "moon", "dad", "sun", "rar"]);




var arr = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(`${newArr}`);
}
arr([55, 60, 65, 60, 70, 80, 55, 'hijas', 'abu', 65, 'nihal, hijas']);


// IIFE fun:


(function (arr) {
    let odd = [];
    arr.filter(num => {
        if (num % 2 !== 0)
            odd.push(num);
    })

    console.log(`${odd}`);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19, 20, 29, 30, 32]);


(function (arr) {
    var a = [];
    for (var i = 0; i < arr.length; i++) {
        a += arr[i][0].toUpperCase() + arr[i].slice(1);
    } console.log(a);
})(["hjas ", "abu ", "nihal"]);



(function (array) {
    var a = 0;
    for (i = 0; i < array.length; i++) { a += array[i]; }
    console.log(`${a}`);
})([20, 40, 100]);




(function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(`${newArr}`);
})([55, 60, 65, 60, 70, 80, 55, 'hijas', 'abu', 65, 'nihal, hijas']);




