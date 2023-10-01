import Empleado from "./empleado.mjs";
class Empresa{
    constructor(){
        const empleados = [];

        this.getEmpleados = () => empleados;

        this.agregar = (empleadoNuevo) => {
            if (empleadoNuevo instanceof Empleado && !(empleados.find(empleado => empleado.getId() === empleadoNuevo.getId()))){
                empleados.push(empleadoNuevo);
            }else {
                throw Error("Este empleado ya existe o los datos introducidos son incorrectos");
            }
        }

        this.eliminar = (empleadoDelete) => {
            let index = empleados.findIndex(emp => emp.getId() === empleadoDelete);
            empleados.splice(index, 1);
        }

        this.editar = (empleadoId, nuevosDatos) => {
            let empleado = empleados.find(emp => emp.getId() === empleadoId);
            if (empleado){
                if (nuevosDatos.nombre){
                    empleado.setNombre(nuevosDatos.nombre);
                }
                if (nuevosDatos.cargo){
                    empleado.setCargo(nuevosDatos.cargo);
                }
                if (nuevosDatos.salario){
                    empleado.setSalario(nuevosDatos.salario);
                }
                if (nuevosDatos.id){
                    if(!(empleados.find(empleado => empleado.getId() === nuevosDatos.id))){
                        empleado.setId(nuevosDatos.id);
                    }else {
                        throw Error('Ya existe un usuario con ese identificador');
                    }
                }
            }else 
            throw Error('Empleado no encontrado');
        }

        this.salarioPromedio = () => {
            return empleados.reduce((acumulador, empActual) => acumulador + empActual.getSalario(), 0)/empleados.length;
        }
        
    }

}

const empleado1 = new Empleado(1, 'Juana', 'Jefa', 345);
const empleado2 = new Empleado(2, 'German', 'Empleado', 200);
const empleado3 = new Empleado(3, 'Marian', 'Subordinada', 100);

const empresa = new Empresa();

empresa.agregar(empleado1);
empresa.agregar(empleado2);
empresa.agregar(empleado3);

empresa.editar(2, {nombre: 'Jose', id: '4', cargo: 'secretario', salario:'210'});

console.log(empresa.salarioPromedio());

empresa.eliminar(empleado3)



