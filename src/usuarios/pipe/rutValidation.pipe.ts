import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint()
export class RutValidator implements ValidatorConstraintInterface {
    validate(rut: string) {
        console.log('validacion rut')
        const permitidoDV = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'k', 'K'];
        const validacion = [2, 3, 4, 5, 6, 7];
        let suma_validacion: number = 0;
        let digito: number;
        if (9 <= rut.length && rut.length <= 10 && rut.includes('-')) {
            let lista = rut.split('-');
            console.log(lista)
            if (+lista[0]){
                if (permitidoDV.includes(lista[1])){
                    for(let i: number = -1; i >= lista[0].length*-1; i--){
                        digito = +(lista[0].at(i));
                        if(i >= -6){
                            suma_validacion += digito*validacion[(i*-1)-1];
                        }else{
                            suma_validacion += digito*validacion[(i*-1)-7];
                        }
                    }
                    console.log(suma_validacion);
                    console.log(Math.floor(suma_validacion/11));
                    let digitoVerificador = 11 - (suma_validacion - Math.floor(suma_validacion/11)*11);
                    console.log(digitoVerificador);
                    if( digitoVerificador < 10 && `${digitoVerificador}` !== lista[1]){
                        return false;
                    } else if ( digitoVerificador == 10 && 'K' !== lista[1].toUpperCase()){
                        return false;
                    } else if (digitoVerificador == 11 && `0` !== lista[1]){
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
        return true;
    }
    
    defaultMessage() {
        return 'El rut no tiene formato correcto o no es válido el dígito verificador';
      }
}