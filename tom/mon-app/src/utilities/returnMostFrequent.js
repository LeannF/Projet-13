function returnMostFrequent(arr){

    var actualCount = 0
    var higherCount = -1
    var mostFrequent = ""

    arr.forEach(element => {
        actualCount = 0;
        arr.forEach(elements =>{
            if (element === elements){
                actualCount++;
            }
            if (actualCount >= higherCount){
                higherCount = actualCount;
                mostFrequent = element;
            }
        })
    });
    return mostFrequent;
}

export {returnMostFrequent}