//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function missingNumber(nums) {
  let longitud = nums.length
  let sumatoria = (longitud*(longitud+1))/2
  let suma = 0
  for (let i = 0; i < nums.length; i++) {
    suma = suma + nums[i]
  }
  return sumatoria - suma
}
console.log(missingNumber([3,0,1]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2