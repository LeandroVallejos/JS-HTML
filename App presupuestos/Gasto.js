class Gasto extends Dato {
  static contadorGastos = 0; //con cada gasto se aumenta este contador, se usara como id
  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._id = ++Gasto.contadorGastos; //el primero es id 1
  }
  get id() {
    return this._id;
  }
}
