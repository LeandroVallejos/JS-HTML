class Ingreso extends Dato{
    static contadorIngresos = 0; //con cada ingreso se aumenta este contador, se usara como id
    constructor(descripcion, valor){
        super(descripcion,valor);
        this._id = ++Ingreso.contadorIngresos; //el primero es id 1
    }
    get id(){
        return this._id;
    }
}