class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let arr=[]
        let outputobj={}
        for(let i=0;i<strs.length;i++){
            let curobj={}
            for(let j=0;j<strs[i].length;j++){
                if(!curobj[strs[i][j]]){
                    curobj[strs[i][j]]=1
                }
                else{
                    curobj[strs[i][j]]+=1
                }
            }
const arrformat=(Object.entries(curobj)).sort((a,b)=>a[0][0].localeCompare(b[0][0]))
 let objformat=arrformat.map(item=>item[0]+item[1]).join("")
          arr.push(objformat)
        }
       for(let k=0;k<arr.length;k++){
         if(!outputobj[arr[k]]){
            outputobj[arr[k]]=[]
         }
         outputobj[arr[k]].push(strs[k])
       }
       return Object.values(outputobj)
    }
}
