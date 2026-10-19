class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        var obj = {};

        if (s.length != t.length) {
            return false;
        }

        for (let char of s) {
            obj[char] = obj[char] ? obj[char] + 1 : 1
        }

        for (let char of t) {

            if (obj[char] > 0) {
                obj[char] -= 1;
            } else {
                return false;
            }
        }

        return true;

    }
}
