class nodoDoble
{

    constructor (dato)
    {
        this.dato = dato;
        this.Ld = null;
        this.Li = null;
    }

    set asignaDato (dato)
    {
        this.dato = dato;
    }
        
    get retornaDato()
    {
        return this.dato;
    }

    set asignaLd (Ld)
    {
        this.Ld = Ld;
    }

    set asignaLi (Li)
    {
        this.Li = Li;
    }

    get retornaLd()
    {
        return this.Ld;
    }

    get retornaLi()
    {
        return this.Li;
    }

}
