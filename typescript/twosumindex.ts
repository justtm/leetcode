function findIndex(arr: number[], target: number): number[] {
    let data: {[id: number]: number} = {};
    for(let index=0; index < arr.length; index++) {
        let item1 = arr[index];
        let item2 = target - item1;
        if(typeof data[item2] !== 'undefined') {
            return [data[item2], index];
        }
        data[item1] = index;
    
    }
    return [-1, -1]
}

console.log(findIndex([1, 2, 3, 3,4], 6));
console.log(findIndex([1, 2, 3, 3], 4))