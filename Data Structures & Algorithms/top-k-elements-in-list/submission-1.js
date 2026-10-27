class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap=new Map()
        let outputarr=[]
        for(let i=0;i<nums.length;i++){
           if(!hashMap.has(nums[i])){
            hashMap.set(nums[i],1)
           }
           else{
            hashMap.set(nums[i],hashMap.get(nums[i])+1)
           }
        }
        for(let item of hashMap){
            outputarr.push([item[0],item[1]])
        }
       let sortedarr= outputarr.sort((a,b)=>b[1]-a[1]).map(item=>item[0])
        return sortedarr.slice(0,k)
    }
}
