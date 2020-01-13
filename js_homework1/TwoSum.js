var arr_1 = [9,8,7,1,2,3,6,5,4,11,12,13,16,14,15];
var key_index = new Map();

function SumTwo(arr, target){
    for(let i=0; i<arr.length; i++){
        key_index.set(arr[i], i);
        if (key_index.has(target-arr[i])){
            console.log([key_index.get(target-arr[i]), i]);
        }
    }
}

SumTwo(arr_1, 17)