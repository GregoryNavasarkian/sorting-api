const express = require("express");
const router = express.Router();

function bubbleSort(arr) {
    start = performance.now();
    let n = arr.length;
    for (let i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
    end = performance.now();
    let time = end - start;
    time = formatter.format(time);
    return { arr, time };
}

const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
});

router.route("/").get((req, res) => {
    const numString = req.body.nums.split(",");
    const numArr = numString.map((num) => parseInt(num));
    res.json(bubbleSort(numArr));
});

module.exports = router;
