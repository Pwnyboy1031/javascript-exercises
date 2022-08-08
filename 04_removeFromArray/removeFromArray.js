const removeFromArray = function(array, selection) {
    let args = Array.prototype.slice.call(arguments);
    args.shift();

    for (let number of args) {
        if (array.includes(number)) {
            array.splice(array.indexOf(number),1);
        }
        
    }
    
    console.log(array);
    return array;
    

};

// Do not edit below this line
module.exports = removeFromArray;
