const express = require("express");
const router = express.Router();

function mergeSort(array) {
    const half = array.length / 2;
    if (array.length < 2) {
        return array;
    }
    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}

const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
});

router.route("/").get((req, res) => {
    const numString = req.body.nums.split(",");
    const numArr = numString.map((num) => parseInt(num));
	start = performance.now();
	let arr = mergeSort(numArr);
	end = performance.now();
	let time = end - start;
	time = formatter.format(time);
    res.json({ arr, time });
});

module.exports = router;
