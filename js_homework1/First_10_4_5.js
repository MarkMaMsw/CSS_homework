const four = 4;
const five = 5;
let count = 0;
for (let i=0; i<=100; i++){
    if ((i%four === 0) && (i%five !== 0) && (count < 10)) {
        console.log(i);
        count = count+1;
    }
}