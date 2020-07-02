function largestSubarraySum(arr) {
    // slice of array that produces the largest result
    // shoot for O(n) eventually
    let max = arr[0];
    let temp = arr[0];
    // start at arr[0], create slices from arr[0] to arr[arr.length - 1]
    // compare temp to max, replace if greater
    // move index and slice again
    // let index = 0;
    // let count = 1;
    // while (index <= arr.length) {
    //     while(count <= arr.length) {
    //         temp = arr.slice(index, count)
    //         if (temp.reduce((a,b) => a+b) > max.reduce((a,b) => a+b)) {
    //             max = temp
    //         }
    //         count += 1
    //     }
    //     index += 1
    //     count = index + 1
    // }
    // // summing negatives can't equal a positive you ponces
    // let bullshit = max.reduce((a,b) => a+b)
    // if (bullshit < 0){
    //     return 0
    // } else {
    //     return bullshit
    // }
    // don't really get it, but here's kadane's algo
    for (let i = 1; i < arr.length; i++) {
        temp = Math.max(arr[i], temp + arr[i])
        max = Math.max(temp, max)
    }
    if (max < 0){
        max = 0
    }
    return max
}

