function juego(jugador){
    let rd=Math.floor(Math.random()*3);
    let cpu="";
    switch(rd){
        case 0:
            cpu="piedra";
            break;
        case 1:
            cpu="papel";
            break;
        case 2:
            cpu="tijera";
            break;
    }
    if ((jugador=="piedra" && cpu=="tijera") || (jugador=="papel" && cpu=="piedra") || (jugador=="tijera" && cpu=="papel")){
        console.log("Tú ganaste " + cpu);
    }
    else if((jugador=="piedra" && cpu=="papel") || (jugador=="papel" && cpu=="tijera") || (jugador=="tijera" && cpu=="piedra")){
        console.log("Tú perdiste " + cpu);
    }
    else {
        console.log("Empate, vuelve a jugar " + cpu);
    }
}
juego("tijera"); //agregar piedra papel o tijera


