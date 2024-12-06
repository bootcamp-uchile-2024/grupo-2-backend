import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

// Validador personalizado para correo y teléfono
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
          const tipoSuscripcion = args.object[args.constraints[0]]; // Obtener el valor del campo tipo_suscripcion
          if (tipoSuscripcion === 'SIN_SUSCRIPCION' && !value) {
            return false; // Si tipo_suscripcion es 'SIN_SUSCRIPCION' y el valor de correo o teléfono es vacío, no es válido
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
