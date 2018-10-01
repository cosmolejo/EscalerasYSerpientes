/**
 * 
 */

class nodoDoble {

    constructor() {
        this.indicador = null;  //indicador del tipo de casilla
        this.lInd = null;       // liga del indicador
        this.lCons = null;      // liga consecutiva / Ld
        this.lIzq = null;       // liga izquierda
    }

    asignaIndi(i) {
        this.indicador = i;
    }

    set asignaLInd(l) {
        this.lInd = l;
    }

    set asignaLCons(l) {
        this.lCons = l;
    }
    set asignaLIzq(l){
        this.lIzq=l;
    }
    get retornaIndi() {
        return this.indicador;
    }
    get retornaLInd() {
        return this.lInd;
    }
    get retornaLCons() {
        return this.lCons;
    }
    get retornaLizq(){
        return this.lIzq;
    }
}