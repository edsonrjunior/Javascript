function bhaskara(ax2, bx, c){
    delta = (bx**2) - 4 * ax2 * c
    x1 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    x2 = (-bx + Math.sqrt(delta)) / (2 * ax2)

    const x1Ex2 = [x1, x2]

    return delta < 0 ? 'Delta é negativo' : x1Ex2

    /*
    if (delta < 0){
        return 'Delta é negativo'
    }else{
        return x1Ex2
    }
    */
}

console.log(bhaskara(1, 6, 5))