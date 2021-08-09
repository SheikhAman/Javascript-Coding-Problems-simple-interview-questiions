// var numbers = [45, 65, 78, 12, 3, 54, 65];
// var sum = 0;
// for(var i = 0; i<numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;
// }
// console.log("total of the number:", sum);

function getArraySum(numbers){
    var sum =0;
    for(var i = 0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;

}
var numbers = [45,65,78,12];
var result = getArraySum(numbers);
console.log("total of the numbers:",result);
var total = getArraySum([50, 40, 30, 20]);
console.log("total of the numbers:", total)