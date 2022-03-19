function meval(s) { return Math.floor(eval(s))}
function zero(a) { return a?meval('0' + a):'0'}
function one(a) { return a?meval('1' + a):'1'}
function two(a) { return a?meval('2' + a):'2'}
function three(a) { return a?meval('3' + a):'3'}
function four(a) { return a?meval('4' + a):'4'}
function five(a) { return a?meval('5' + a):'5'}
function six(a) { return a?meval('6' + a):'6'}
function seven(a) { return a?meval('7' + a):'7'}
function eight(a) { return a?meval('8' + a):'8'}
function nine(a) { return a?meval('9' + a):'9'}

function plus(a) { return '+' + a }
function minus(a) { return '-' + a }
function times(a) { return '*' + a }
function dividedBy(a) {return '/' + a }


console.log('zero', zero(minus(five())))
console.log('zero', one(plus(two())))
console.log('zero', two(plus(one())))
console.log('zero', zero(minus(one())))
