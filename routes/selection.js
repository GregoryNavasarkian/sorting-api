const express = require("express");
const router = express.Router();

function selectionSort(arr) {
	start = performance.now();
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }
	end = performance.now();
	let time = formatter.format(end - start);
    return {arr, time};
}

const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
});

router.route("/").get((req, res) => {
    const numString = req.body.nums.split(",");
    const numArr = numString.map((num) => parseInt(num));
    res.json(selectionSort(numArr));
});

module.exports = router;
