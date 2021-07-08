const bcrypt  = require('bcrypt')

const password = 'Password123456'

bcrypt.hash(password,6,function(err, hash){
    console.log(hash);

    bcrypt.compare(password,hash,function(err,res){
        console.log(res);
    })
})