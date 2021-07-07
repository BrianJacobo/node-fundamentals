const os = require('os')

// console.log(os);
// x64  x32
console.log(os.arch());
// linux windows etc
console.log(os.platform());

console.log(os.cpus());
console.log(os.cpus().length);

// 
console.log(os.constants);

const SIZE =1024
function kb(bytes){return bytes/SIZE}
function mb(bytes){return kb(bytes)/SIZE}
function gb(bytes){return mb(bytes)/SIZE+' GB'}

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(`total de memoria ${gb(os.totalmem())}`);

console.log(os.hostname());
console.log(os.networkInterfaces());