function reverseInt(num: number): number {
    let compareValue: number = num < 0 ? 2**31 : 2**31 - 1;
    let x: number = Math.abs(num);
    let res: number = 0;
    while(x != 0) {
        res = res * 10 + Math.floor(x % 10);
        if(res > compareValue) {
            return 0;
        }
        x = Math.floor(x/10);

    }
    return num < 0 ? -res : res
}
console.log(reverseInt(+(2**31+1).toString().split('').reverse().join('')))
console.log(reverseInt(+(2**31).toString().split('').reverse().join('')))
console.log(reverseInt(+(2**31-1).toString().split('').reverse().join('')))
console.log(reverseInt(-+(2**31).toString().split('').reverse().join('')))
console.log(reverseInt(-+(2**31+1).toString().split('').reverse().join('')))