package LDL;

public class nodoDoble
{
    private int dato;
    private nodoDoble Li;
    private nodoDoble Ld;
    
    public nodoDoble (int d)           { dato = d; Ld = null; Li = null; }
    public void asignaDato (int d)     { dato = d;    }
    public int  retornaDato ()         { return dato; }
    public void asignaLd (nodoDoble x) { Ld = x;      }
    public void asignaLi (nodoDoble x) { Li = x;      }
    public nodoDoble retornaLd ()      { return Ld;   }
    public nodoDoble retornaLi ()      { return Li;   }
}
