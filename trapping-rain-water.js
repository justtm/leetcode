var trap = function(height) {
    while(height[0] === 0) {
        height.shift();
    }
    while(height[height.length - 1] === 0) {
        height.pop();
    }
    var leftMax = new Array(height.length).fill(0);
    leftMax[0] = height[0]
    var rightMax = new Array(height.length).fill(0);
    rightMax[height.length - 1] = height[height.length - 1];
    for(let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }

    for(let i = height.length -2; i >= 0 ; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }
    let sum = 0;
    for(let i = 1; i < height.length - 1; i++) {
        let minHeigth = Math.min(leftMax[i], rightMax[i]);
        sum += minHeigth - height[i]
    }
    return sum;
};

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// time O(n) space O(n)

var trapV2 = function(height) {
    if(height.length < 3) {
        return 0;
    }
    let sum = 0;
    let i = 0;
    let j = height.length - 1;
    let leftMax = height[i];
    let rightMax = height[j];
    while (i <= j) {
        leftMax = Math.max(leftMax, height[i]);
        rightMax = Math.max(rightMax, height[j]);
        if (leftMax >= rightMax) {
            sum += (rightMax - height[j]);
            j--;
        } else if(leftMax <= rightMax){
            sum += (leftMax - height[i]);
            i++;
        }

    }
    return sum;
};
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// time O(n) space O(1)