/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var map = new Map();
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);

    var char = s.split("");
    let sum = 0;
    for (let i = 0; i < char.length - 1; i++) {
        if (map.get(char[i]) < map.get(char[i + 1])) sum -= map.get(char[i]);
        else sum += map.get(char[i]);
    }
    sum += map.get(char[char.length - 1]);

    return sum;
};

console.log(romanToInt("MCMXCIV"));
