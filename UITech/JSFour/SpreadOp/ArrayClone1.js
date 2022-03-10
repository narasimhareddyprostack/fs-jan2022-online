let size = [38, 40, 42, 44];
let new_Size = []
for (x of size) {
    new_Size.push(x)
}
size[0] = 39
console.log(size)
console.log(new_Size)