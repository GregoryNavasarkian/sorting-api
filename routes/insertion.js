const express = require("express");
const router = express.Router();

function insertionSort(arr) {
    start = performance.now();
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j > -1 && current < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    end = performance.now();
    let time = end - start;
    time = formatter.format(time);
    return {arr, time};
}

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
});

router.route("/").get((req, res) => {
    const numString = req.body.nums.split(",");
    const numArr = numString.map((num) => parseInt(num));
    res.json(insertionSort(numArr));
});

module.exports = router;