function getBiggestNumber(arr) {
    const sortedArr = arr.sort((l, r) => {
        const xy = "" + l + r
        const yx = "" + r + l

        // console.log(xy, yx, yx - xy, typeof l, typeof r)
        return yx - xy
    })
    return sortedArr.join("")
}

module.exports = {
    getBiggestNumber
};