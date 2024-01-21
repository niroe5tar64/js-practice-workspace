
let card = [1,2,3,4]

let total = 0


for (let i = 0; i < card.length; i++) {
  console.log(`[start] i = ${i}, card[${i}] = ${card[i]}, total = ${total}`);
  total += card[i]
  console.log(`[ end ] i = ${i}, card[${i}] = ${card[i]}, total = ${total}`);
}


/* 下記と同じ意味 
  
let i = 0;
while (i < card.length) {
  console.log(`[start] i = ${i}, card[${i}] = ${card[i]}, total = ${total}`);
  total += card[i]
  console.log(`[ end ] i = ${i}, card[${i}] = ${card[i]}, total = ${total}`);

  i++;
}
*/