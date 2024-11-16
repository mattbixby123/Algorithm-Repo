/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  let stack = [[nums[0],0]];// max->min
  let max = 0;
  //keep stack minimal
  for(let i = 1;i<nums.length;i++){
      if(stack.length && nums[i]<stack[stack.length-1][0]){
          stack.push([nums[i],i])
      }
  }
  for(let i = nums.length-1;i>=0;i--){
      while(stack.length && nums[i]>=stack[stack.length-1][0]){
          let popped = stack.pop();
          max = Math.max(max,i-popped[1]);
      }
  }
  return max;
};