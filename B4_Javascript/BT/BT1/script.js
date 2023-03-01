let array = [8, 9, 10];
function average(array) {
    let sum = 0;
    let average = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return average = sum / array.length;
}
console.log("Average: " + average(array));

if (0<=average(array) && average(array)<=7)    {
    console.log("Grade : D");
}
else if (7<average(array) && average(array)<8)    {
    console.log("Grade : C");
}
else if (8<=average(array) && average(array)<9)    {
    console.log("Grade : B");
}
else if (9<=average(array) && average(array)<=10)    {
    console.log("Grade : A");
}