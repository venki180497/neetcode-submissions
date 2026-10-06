class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj={}
        for(let i=0;i<nums.length;i++){
          let req=target-nums[i]
          if(obj[req]!=undefined){
             return [obj[req],i]
          }
                    obj[nums[i]]=i

        }
    }
}
