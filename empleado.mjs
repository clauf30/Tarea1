export default class Empleado{
    constructor(id, nombre, cargo, salario){
        let _nombreE = nombre;
        let _idE = id;
        let _cargoE = cargo;
        let _salarioE = salario;

        this.getNombre = () => _nombreE;
        this.getCargo = () => _cargoE;
        this.getSalario = () => _salarioE;
        this.getId = () => _idE;

        this.setNombre = function(nombreNuevo){
            _nombreE = nombreNuevo;
        };

        this.setCargo = function(cargoNuevo){
            _cargoE = cargoNuevo;
        };

        this.setSalario = function(salarioNuevo){
            _salarioE = salarioNuevo;
        };

        this.setId = function(id){
            _idE = id;
        };
    }
}


