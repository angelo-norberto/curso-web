let arr = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false]
]

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]) 
    }
}