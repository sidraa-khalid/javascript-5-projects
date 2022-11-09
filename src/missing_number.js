let arr = [12, 13, 16, 19];
firstvalue = arr[0];
lastvalue = arr[arr.length - 1];
let newArray = [];

for (let i = firstvalue; i <= lastvalue; i++) {
  newArray.push(i);
}
newArray.map((item, index) => {
  if (!arr.includes(item)) {
   console.log(`${item} is missing on index ${index}`)
  } 
  }
)
