/**
 * 
 * 
 */

class lista {

    constructor() {
        this.primero = new nodoDoble();
        this.ultimo = new nodoDoble();
    }

    primerNodo() {
        return primero;
    }
    ultimoNodo() {
        return this.ultimo;
    }

    esVacio() {
        return this.primero.retornaLCons == null;
    }

    finDeRecorrido(x) {
        return x == null;
    }

    insertaNodo(d) { //inserta siempre al final
        var x = new nodoDoble();
        x.asignaIndi(d);
        this.conectar(x);
    }
    conectar(x) {
        this.ultimo.asignaLCons(x);
        x.asignaLIzq(this.ultimo);
        this.ultimo = x;
    }
    asignaSnadder(x, y, d) {
        x.asignaIndi(d);
        x.asignaLInd(y);
    }
}