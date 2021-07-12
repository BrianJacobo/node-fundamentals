// divisores de 9 =>1,3,9
// diviroes de 12 =>1,2,3,4,6,12

function MCD(x,y){
    const verdadero = x>y
    switch(verdadero) {
        case true:
            if(y==0){
                return x
            }else{
                return MCD(y,x%y)
            }
          break;
        default:
            return`${x} debe ser mayor que ${y}`;
      }    
}
console.log(MCD(24,17));