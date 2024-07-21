const ar = [1, 2, 3,{a:'1',c:'3',d:5}, [4, [5, 6], 7, 8]];

const res = [];
function customFlat(ar) {
    for (let i = 0; i < ar.length; i++) {
        if (!Array.isArray(ar[i])) {
            res.push(ar[i]);
        } else {
            customFlat(ar[i]);
        }
    }
    return res;
}
customFlat(ar);
console.log(res);

console.log(typeof ar[0])
