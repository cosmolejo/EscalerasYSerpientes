class LDL
{
    constructor()
    {
        primero=último=null
    }

    esVacía()
    {
        if(primero==null) { return true; }
        else { return false; }
    }

    get primerNodo()
    {
        return this.primero;
    }

    get últimoNodo()
    {
        return this.último;
    }

    finDeRecorrido(x)
    {
        if (x==null) { return true; }
        else {return false; }
    }

}

void insertar (dato, y)
{
    conectar(x,y);
}

function buscarDato (d)
{
    while(!finDeRecorrido(d) && x.retornaDato!=d)
    {
        x=x.retornaLd();
    }
    return x;
}

function borrar (x) 
{ 
    if(x==null) 
    { 
        console.log("No existe"); 
        return;
    }
    desconectar(x);
 }
 
 function buscaDondeInsertar(d)
 {
    p = primerNodo();
    y = p.retornaLi();
    while (!fin(p)&& p.retornaDato()<d)
    {
        y=p;
        p=p.retornaLd();
    }
    return y;
 }
 void conectar()
 {
    if(y==null)
    {
        x.asignaLd(primero);
        if(primero!=null)
        {
            primero.asginaLi(x);
        }
        else 
        {
             último=x; 
        } 
        primero=x; 
    }
    if(y.retornaLd()==null) 
    {
        y.asignaLd(x); 
        x.asignaLi(y); 
        último=x; 
    }
    else 
    { 
        x.asignaLd(y.retornaLd()); 
        x.asignaLi(y); 
        x.retornaLd().asignaLi(x); 
        y.asignaLd(x); 
    } 
 }

 void desconectar (x) 
 {
    if(x.retornaLi()==null) 
    {
        primero = x.retornaLd(); 
        if(primero==null) 
        { 
            último=null; 
        } 
        else 
        { 
            primero.asignaLi(null); 
        } 
    }
    if(x.retornaLd()==null) 
    { 
        último = x.retornaLi(); 
        último.asignaLd(null); 
    }
    else 
    { 
        x.retornaLd().asignaLi(x.retornaLi()); 
        x.retornaLi().asignaLd(x.retornaLd()); 
    }
}