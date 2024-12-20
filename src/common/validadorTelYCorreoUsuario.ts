import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';


export function IsCorreoTelefonoRequerido(tipoSuscripcionField: string, validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsCorreoTelefonoRequerido',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [tipoSuscripcionField],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const tipoSuscripcion = args.object[args.constraints[0]]; 
          if (tipoSuscripcion === 'SIN_SUSCRIPCION' && !value) {
            return false; 
          }
          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} es obligatorio cuando el tipo de suscripción es 'SIN_SUSCRIPCION'`;
        },
      },
    });
  };
}
