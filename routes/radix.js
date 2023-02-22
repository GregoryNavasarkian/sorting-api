const express = require("express");
const router = express.Router();

const getNum = (num, index) => {
    const strNum = String(num);
    let end = strNum.length - 1;
    const foundNum = strNum[end - index];
    if (foundNum === undefined) {
        return 0;
    } else {
        return foundNum;
    }
};

const largestNum = (arr) => {
    let largest = "0";
    arr.forEach((num) => {
        const strNum = String(num);
        if (strNum.length > largest.length) {
            largest = strNum;
        }
    });
    return largest.length;
};

const radixSort = (arr) => {
    let maxLength = largestNum(arr);
    for (let i = 0; i < maxLength; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let num = getNum(arr[j], i);
            if (num !== undefined) {
                buckets[num].push(arr[j]);
            }
        }
        arr = buckets.flat();
    }
    return arr;
};

const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
});

router.route("/").get((req, res) => {
    const numString = req.body.nums.split(",");
    const numArr = numString.map((num) => parseInt(num));
    start = performance.now();
    let sorted = radixSort(numArr);
    end = performance.now();
    let time = end - start;
    time = formatter.format(time);
    res.json({ sorted, time });
});

module.exports = router;
