class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let obj1={}
        let obj2={}
        for(let i=0;i<s.length;i++){
           if(!obj1[s[i]]){
             obj1[s[i]]=1
           }
           else{
            obj1[s[i]]+=1
           }
        }
        for(let i=0;i<t.length;i++){
           if(!obj2[t[i]]){
             obj2[t[i]]=1
           }
           else{
            obj2[t[i]]+=1
           }
        }
        if(Object.keys(obj1).length!=Object.keys(obj2).length){
            return false
        }
        else{
            for(let i in obj1){
               if(obj1[i]!==obj2[i]){
                return false
               }
            }
        }
        return true
    }
}
