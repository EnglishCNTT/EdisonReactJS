function findMaxNumber(numbers) {
    if (!numbers || !numbers.length) return "Lỗi";
    
    let max = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
    if (max < numbers[index]) {
    max = numbers[index];
    }
    }
    
    return max;
    }
    
    console.log("Max number is ", findMaxNumber([1, 2, 3]));