/**
 * Clase Lista:
 * Genera una lista doblemente ligada con nodo cabeza, donde el dato del nodo, consta de un indicador y una liga extra
 * @class
 * @author Alejandro Mesa Gómez, Hernán Javier Aguilar.
 */
class lista {
    /**
    * construye la lista, asigna primero como nodo cabeza y sus ligas apuntando a si mismp
    * @constructor
    */
    constructor() {
        this.primero = new nodoDoble();
        this.primero.asignaLCons(this.primero);
        this.primero.asignaLIzq(this.primero);
    }
    /**
     * retorna el primer nodo de la lista
     * @return {nodoDoble} primer nodo
     */
    primerNodo() {
        return this.primero.retornaLCons();
    }
     /**
     * retorna la cabeza de la lista
     * @return {nodoDoble} cabeza de la lista
     */
    cabeza() {
        return this.primero;
    }
     /**
     * retorna si la lista está vacia
     * @return {boolean} True si está vacia, False en caso contrario
     */
    esVacio() {
        return this.primero.retornaLCons == null;
    }
    /**
     * verifica si el nodo enviado es la cabeza de la lista, indicando el fin del recorrido
     * @param {nodoDoble} x nodo a comparar
     * @return {boolean} True si es igual a primero, False en caso contrario
     */
    finDeRecorrido(x) {
        return x == this.primero;
    }
    /**
     * inserta el nodo ingresado siempre al final de la lista
     * @param {nodoDoble} d nodo a insertar
     */
    insertaNodo(d) {
        var x = new nodoDoble();
        x.asignaIndi(d);
        this.conectar(x);
    }
    /**
     * realiza las conecciones de memoria pertinentes entre el ultimo nodo y el nodo a insertar
     * @param {nodoDoble} x nodo a conectar
     */
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
    /**
     * Asigna el tipo escalera o serpiente según sea necesario y agrega una liga al final de la misma.
     * si d es 0, el nodo será una serpiente, si es 1 será una escalera, el valor null indica el comportamiento por defecto
     * @param {nodoDoble} x nodo a modificar
     * @param {nodoDoble} y liga de indicador
     * @param {number} d indicador (0/1)
     */
    asignaSnadder(x, y, d) {
        x.asignaIndi(d);
        x.asignaLInd(y);
    }/**
     * metodo auxiliar para visualizar por medio de consola como está conectada la lista
     */
    recorre() {
        let i = 0;
        let p = new nodoDoble();
        p = this.primerNodo();
        while (!this.finDeRecorrido(p)) {

            console.log(p);
            p = p.retornaLCons();
            i++;
        }

    }
    /**
     * retorna el nodo que se encuentra en un indice i, para facilitar la comunicación entre el modelo y la visualización.
     * la enumeración inicia en 1 a partir del primer nodo, 0 equivale al nodo cabeza
     * @param {number} i indice del nodo
     * @return {nodoDoble} nodo conectdado en el indice i
     */
    retornaNodo(i) {
        let j = 1;
        let p = new nodoDoble();
        p = this.primerNodo();
        while (!this.finDeRecorrido(p) && j < i) {
            j++;
            p = p.retornaLCons();

        }
        return p;
    }
    /**
     *
     * retorna el indice donde debería estar conectado un nodo, cabe aclarar que este indice nohace parte de la lista, solo facilita la visualización
     *  
     * @param {nodoDoble} n nodo a buscar en la Lista
     * @return {number} indice del nodo dentro de la lista
     */
    retornaIndex(n) {
        let j = 1;
        let p = new nodoDoble();
        p = this.primerNodo();
        while (!this.finDeRecorrido(p) && n != p) {
            j++;
            p = p.retornaLCons();

        }
        return j;
    }
    /**
     * verifica si la casilla (nodo) en la que se encuentra un jugador es serpiente o escalera, para realizar el desplazamiento pertinente, usando la liga del indicador.
     * @param {nodoDoble} n posición actual del jugador
     * @return {nodoDoble} posición final del jugador
     */
    verificaSnadder(n) {

        if (n.retornaIndi() != null) {
            return n.retornaLInd();
        }else{
            return n;
        }

    }
    /**
     * avanza el jugador la cantidad i de nodos dentro del modelo
     * @param {number} i cantidad de movimientos a realizar
     * @param {nodoDoble} n nodo a avanzar dentro de la lista
     * @return {nodoDoble} nodo de la posición del jugador actualizada
     */
    avanzar(i, n) {

        for (let j=1; j<=i; j++){
            n=n.retornaLCons();
        }
        return n;
    }
}
