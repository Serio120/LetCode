/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    if (totalLength % 2 === 0) {
        const left = findKthElement(nums1, nums2, Math.floor(totalLength / 2));
        const right = findKthElement(nums1, nums2, Math.floor(totalLength / 2) + 1);
        return (left + right) / 2;
    } else {
        return findKthElement(nums1, nums2, Math.floor(totalLength / 2) + 1);
    }
};

function findKthElement(nums1, nums2, k) {
    let index1 = 0;
    let index2 = 0;

    while (true) {
        if (index1 === nums1.length) {
            return nums2[index2 + k - 1];
        }
        if (index2 === nums2.length) {
            return nums1[index1 + k - 1];
        }
        if (k === 1) {
            return Math.min(nums1[index1], nums2[index2]);
        }

        const halfK = Math.floor(k / 2);
        const newIndex1 = Math.min(index1 + halfK, nums1.length) - 1;
        const newIndex2 = Math.min(index2 + halfK, nums2.length) - 1;
        const pivot1 = nums1[newIndex1];
        const pivot2 = nums2[newIndex2];

        if (pivot1 <= pivot2) {
            k -= (newIndex1 - index1 + 1);
            index1 = newIndex1 + 1;
        } else {
            k -= (newIndex2 - index2 + 1);
            index2 = newIndex2 + 1;
        }
    }
}
