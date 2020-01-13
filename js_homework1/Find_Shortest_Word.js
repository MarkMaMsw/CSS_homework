let string = "Simple, given a string of words, return the length of the shortest word(s). String will never be empty " +
    "and you do not need to account for different data types.?";

function findShortest(sentence){
    let word_list = sentence.split(/[\s,.?]+/);
    word_list.pop();
    let shortest = word_list[0];
    for(let i=1; i<word_list.length; i++){
        if (word_list[i].length < shortest.length){
            shortest = word_list[i];
        }
    }
    return shortest;
}

console.log(findShortest(string));