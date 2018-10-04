/**
 * Clase nodoDoble:
 * probee de un modelo para la configuración de los nodos de la clase lista, contiene un dato numerico para le indicador y tres ligas distintas
 * @class
 * @author Alejandro Mesa Gómez, Hernán Javier Aguilar.
 */
class nodoDoble {
    /**
     * construye el nodo, donde indicador es un valor numérico que indica si el nodo es serpiente, escalera o genérico, recibe 0 para serpiente, 1 para escalera y null para el default.
     * LInd es una liga que enlaza la casilla con el nodo donde finaliza la escaler ao la serpiente, null para el default.
     * LCons es una liga que enlaza el nodo con el directamente siguiente. 
     * LIzq enlaza el nodo con el anterior a el
     * @constructor
     */
    constructor() {
        this.indicador = null; //indicador del tipo de casilla
        this.lInd = null; // liga del indicador
        this.lCons = null; // liga consecutiva / Ld
        this.lIzq = null; // liga izquierda
    }
    /**
     * modifica el valor de indicador
     * @param {number} i  valor a ingresar en indicador (1/0/null)
     */
    asignaIndi(i) {
        this.indicador = i;
    }
    /**
     * modifica la liga del indicador
     * @param {nodoDoble} l  nodo a conectar
     */
    asignaLInd(l) {
        this.lInd = l;
    }
    /**
     * modifica la liga consecutiva
     * @param {nodoDoble} l  nodo a conectar
     */
    asignaLCons(l) {
        this.lCons = l;
    }
     /**
     * modifica la liga izquierda
     * @param {nodoDoble} l  nodo a conectar
     */
    asignaLIzq(l) {
        this.lIzq = l;
    }
    /**
     * retorna el valor del indicador
     * @return {number} valor del ind.
     */
    retornaIndi() {
        return this.indicador;
    }
     /**
     * retorna el nodo de la liga del indicador
     * @return {nodoDoble} liga del ind.
     */
    retornaLInd() {
        return this.lInd;
    }
     /**
     * retorna el nodo de la liga consecutiva
     * @return {nodoDoble} liga cons.
     */
    retornaLCons() {
        return this.lCons;
    }
     /**
     * retorna el nodo de la liga izquierda
     * @return {nodoDoble} liga izq.
     */
    retornaLizq() {
        return this.lIzq;
    }
}