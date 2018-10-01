/**
 * 
 */

class nodoDoble {

    constructor(){
        this.indicador= null;
        this.lInd=null;
        this.lCons=null; 
    }

    asignaIndi( i ){
        this.indicador=i;
    }
    
    asignaLInd(l){
        this.lInd=l;
    }

    asignaLCons(l){
        this.lCons=l;
    }
    retornaIndi(){
        return this.indicador;
    }
    retornaLInd(){
        return this.lInd;
    }
    retornaLCons(){
        return this.lCons;
    }
}

