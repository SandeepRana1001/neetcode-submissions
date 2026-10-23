class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {


        const map = {};

        for (let str of strs) {

            let sorted = str.split('').sort().join('')

            if (map[sorted]) {
                map[sorted].push(str)
            } else {
                map[sorted] = [str];
            }

        }

       return Object.values(map);

    }
}
