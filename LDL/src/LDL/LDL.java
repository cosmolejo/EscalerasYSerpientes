package LDL;

public class LDL
{
    private nodoDoble primero;
    private nodoDoble último;
 
    LDL()                     { primero =último=null; }
    boolean esVacía()         { return primero==null; }
    nodoDoble primerNodo()    { return primero;       }
    nodoDoble últimoNodo()    { return último;        }
    boolean fin (nodoDoble x) { return x==null;       }
    
    
    
    
    
    
    
    
    
    void insertar (int d, nodoDoble y)   { nodoDoble x = new nodoDoble(d); conectar(x,y); }
    nodoDoble buscarDato (int d)         { nodoDoble x = primerNodo(); while(!fin(x) && x.retornaDato()!=d){ x=x.retornaLd(); } return x; }
    void borrar (nodoDoble x)            { if(x==null) { System.out.println("No existe"); return; } desconectar(x); }
    nodoDoble buscaDondeInsertar (int d) { nodoDoble p=primerNodo(),y=p.retornaLi(); while(!fin(p)&& p.retornaDato()<d) { y=p; p=p.retornaLd(); } return y; }
    void conectar (nodoDoble x, nodoDoble y) {
        if(y==null) { x.asignaLd(primero); if(primero!=null) { primero.asignaLi(x); } else { último=x; } primero=x; }
        if(y.retornaLd()==null) { y.asignaLd(x); x.asignaLi(y); último=x; }
        else { x.asignaLd(y.retornaLd()); x.asignaLi(y); x.retornaLd().asignaLi(x); y.asignaLd(x); } }
    void desconectar (nodoDoble x) {
        if(x.retornaLi()==null) { primero = x.retornaLd(); if(primero==null) { último=null; } else { primero.asignaLi(null); } }
        if(x.retornaLd()==null) { último = x.retornaLi(); último.asignaLd(null); }
        else { x.retornaLd().asignaLi(x.retornaLi()); x.retornaLi().asignaLd(x.retornaLd()); } }
}