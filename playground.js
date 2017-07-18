// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};
// console.log(bar)


function add(value){
    return function(nvalue){
        return value+nvalue
    }

}
console.log({}+{})
