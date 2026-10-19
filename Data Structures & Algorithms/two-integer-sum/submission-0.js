class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const obj = {};


        for (let index in nums) {
            var num = nums[index];
            var diff = target - num;

            if (!obj[num]) {
                obj[diff] = index;
            } else {
                return [parseInt(obj[num]), parseInt(index)];
            }
        }

        return [];



    }
}
