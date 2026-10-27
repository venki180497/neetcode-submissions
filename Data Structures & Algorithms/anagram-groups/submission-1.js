class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mapobj=new Map()
        let outputarr=[]
        for(let i=0;i<strs.length;i++){
           let sortedval=[...strs[i]].sort((a,b)=>a.localeCompare(b)).join("")
         if(!mapobj.has(sortedval)){
            mapobj.set(sortedval,[])
         }
         mapobj.get(sortedval).push(strs[i])
    }
    for(let item of mapobj){
        outputarr.push(item[1])
    }
return outputarr
}
}