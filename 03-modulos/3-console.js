console.log()
console.error();
var tabla = [
    {
        a:1,
        b:'x'
    },
    {
        a:2,
        b:'y'
    },
    {
        a:2,
        b:'y'
    },
    {
        a:2,
        b:'y'
    },
    {
        a:2,
        b:'y'
    }
]
console.table(tabla)
console.group('conversacion')
console.log('bla bla bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.groupEnd('conversacion')
//---------------------------
console.count('item');
console.count('item');
console.count('item');
console.countReset('item');
console.count('item');
console.count('item');