function getmaxchildstringlength(str: String): number {
    let left: number = 0;
    let res: number = 0;
    let dic: { [id: string]: number} = {};
    for(let right = 0; right < str.length; right++) {
        if(typeof dic[str[right]] !== 'undefined') {
            left = dic[str[right]];
        }
        dic[str[right]] = right + 1;
        res = res > (right - left + 1) ? res : (right - left + 1)
    }
    return res
}
console.log(getmaxchildstringlength('abcdea1234'))