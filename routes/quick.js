const express = require("express");
const router = express.Router();

function quickSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	let pivot = arr[0];
	let less = arr.slice(1).filter((el) => el <= pivot);
	let greater = arr.slice(1).filter((el) => el > pivot);
	return [...quickSort(less), pivot, ...quickSort(greater)];
}

const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
});

router.route("/").get((req, res) => {
    const numString = req.body.nums.split(",");
    const numArr = numString.map((num) => parseInt(num));
    start = performance.now();
    let arr = quickSort(numArr);
    end = performance.now();
    let time = end - start;
    time = formatter.format(time);
    res.json({ arr, time });
});

module.exports = router;