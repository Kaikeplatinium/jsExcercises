var normalList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var pairNumbers = []

for (let i = 0; i < normalList.length; i++) {
    if(normalList[i] % 2 == 0){
        pairNumbers.push(normalList[i])
    }
}
console.log(pairNumbers);