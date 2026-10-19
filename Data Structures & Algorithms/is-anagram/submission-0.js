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
            if (obj[char]) {
                obj[char] += 1;
            } else {
                obj[char] = 1;
            }
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
