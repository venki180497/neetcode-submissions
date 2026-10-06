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
          console.log(obj[req],"req")
          if(obj[req]!=undefined){
            console.log(obj[req],i)
             return [obj[req],i]
          }
                    obj[nums[i]]=i

        }
    }
}
