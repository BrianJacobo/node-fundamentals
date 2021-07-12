function lanzar(){
    return Math.random() >= 0.5;
}
const lanzamientos = 100
function juego(){
    cara = 0
    cruz =  0
    for (let index = 1; index <= lanzamientos; index++) {
        if(lanzar()){
            cara++
            console.log(`lanzamiento #${index}: cara`); 
        }else{
            cruz++
            console.log(`lanzamiento #${index}: cruz`); 

        }
    }
    console.log(`TOTAL LANZAMIENTOS:${lanzamientos}\n-cara: ${cara}\n-cruz: ${cruz}`);
}
juego()