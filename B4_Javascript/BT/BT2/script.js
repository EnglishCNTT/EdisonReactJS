function canNest(arr1, arr2) {
    let min1 = arr1[0]
    let max1 = arr1[0]
    for (let i = 0; i < arr1.length; i++) {
        if (min1 > arr1[i]) {
            min1 = arr1[i]
        }
        if (max1 < arr1[i]) {
            max1 = arr1[i]
        }
    }


    let min2 = arr2[0]
    let max2 = arr2[0]
    for (let i = 0; i < arr2.length; i++) {
        if (min2 > arr2[i]) {
            min2 = arr2[i]
        }
        if (max2 < arr2[i]) {
            max2 = arr2[i]
        }
    }

    if (min1 > min2 && max1 < max2) {
        return true
    } else {
        return false
    }
}
console.log(canNest([1, 2, 3, 4], [0, 10]));
console.log(canNest([3, 1], [6, 0]));
console.log(canNest([1, 2, 3], [2, 3])); 