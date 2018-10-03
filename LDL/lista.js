/**
 * 
 * 
 */

class lista {

    constructor() {
        this.primero = new nodoDoble();
        this.primero.asignaLCons(this.primero);
        this.primero.asignaLIzq(this.primero);
    }

    primerNodo() {
        return this.primero.retornaLCons();
    }
    cabeza() {
        return this.primero;
    }

    esVacio() {
        return this.primero.retornaLCons == null;
    }

    finDeRecorrido(x) {
        return x == this.primero;
    }

    insertaNodo(d) { //inserta siempre al final
        var x = new nodoDoble();
        x.asignaIndi(d);
        this.conectar(x);
    }
    conectar(x) {
        if (this.primero.retornaLCons() == this.primero) {
            this.primero.asignaLCons(x);
            this.primero.asignaLIzq(x);
            x.asignaLCons(this.primero);
            x.asignaLIzq(this.primero);
        }
        this.primero.retornaLizq().asignaLCons(x);
        x.asignaLIzq(this.primero.retornaLizq());
        x.asignaLCons(this.primero);
        this.primero.asignaLIzq(x);


    }
    asignaSnadder(x, y, d) {
        x.asignaIndi(d);
        x.asignaLInd(y);
    }
    recorre() {
        let i=0;
        let p = new nodoDoble();
        p = this.primerNodo();
        while (!this.finDeRecorrido(p)) {
            //console.log(p.retornaIndi());
            console.log(p);
            p = p.retornaLCons();
            i++;
        }
        //console.log(i);
    }
    retornaNodo(i) {
        let j=1;
        let p = new nodoDoble();
        p = this.primerNodo();
        while (!this.finDeRecorrido(p) && j<i) {
            j++;
            p = p.retornaLCons();
            
        }
        return p;
    }
}