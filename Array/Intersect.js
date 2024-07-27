ar1 = [1, 2, 2, 3, 4, 4];
ar2 = [2, 2, 4, 5, 6, 200];

// 2 2 4
ans = [];
let i = 0;
let j = 0;
while (i < ar1.length && j < ar2.length) {
    if (ar1[i] === ar2[j]) {
        ans.push(ar1[i]);
        i++;
        j++;
    } else {
        if (ar1[i] < ar2[j]) {
            i++;
        } else {
            j++;
        }
    }
}
console.log(ans)
