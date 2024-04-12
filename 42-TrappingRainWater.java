//********Trapping Rain Water**************
//DESCRIPTION
//Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


//SOLUTION
class Solution {
    public int trap(int[] height) {
        
        if (height == null || height.length <= 2) {
            return 0;
        }

        int left = 0;
        int right = height.length - 1;
        int leftMax = height[left];
        int rightMax = height[right];
        int trappedWater = 0;

        while (left < right) {
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);

            if (leftMax < rightMax) {
                trappedWater += leftMax - height[left];
                left++;
            } else {
                trappedWater += rightMax - height[right];
                right--;
            }
        }

        return trappedWater;
    }
}


/*//FUNCTIONING
*
*
*
Runtime
0ms
Beats
100.00% of users with Java

Memory
46.36 MB
Beats 31.73% of users with Java
*
*
*/
