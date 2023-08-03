let sum = null;
function treeSum(arr) {
    for (let value of arr) {
        if (Array.isArray(value) == true) {
            treeSum(value);
        } else {
            sum += value;
        }
    }
    return sum;
}

console.log(treeSum([5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
]));
