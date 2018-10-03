/**
 * 
 */

class nodoDoble {

    constructor() {
        this.indicador = null; //indicador del tipo de casilla
        this.lInd = null; // liga del indicador
        this.lCons = null; // liga consecutiva / Ld
        
    }

    asignaIndi(i) {
        this.indicador = i;
    }

    asignaLInd(l) {
        this.lInd = l;
    }

    asignaLCons(l) {
        this.lCons = l;
    }
    
    retornaIndi() {
        return this.indicador;
    }
    retornaLInd() {
        return this.lInd;
    }
    retornaLCons() {
        return this.lCons;
    }
    
}