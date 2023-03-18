// Write your solution here!
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(){
    return (cats.push("Ralph"));
}
function destructivelyPrependCat(){
    return (cats.unshift("Bob"));
}
function destructivelyRemoveLastCat(){
    return (cats.pop());
}
function destructivelyRemoveFirstCat(){
    return (cats.shift());
}
function appendCat(){
    const copyCatsLast = [...cats,"Broom"];
    return copyCatsLast;
}
function prependCat(){
    const copyCatsFirst = ["Arnold",...cats]
    return (copyCatsFirst);
}
function removeLastCat(){
    const removeLast = cats.slice(0,2)
    return removeLast;
}
function removeFirstCat(){
    const removeFirst = cats.slice(1,3);
    return removeFirst;
}