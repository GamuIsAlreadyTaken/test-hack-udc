import type { GenericFormFieldSchema } from "$lib/api-schema";
import type { AllowMultipleOptions, Options } from "$lib/form-validations";

export type SelectFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'select',
    field_default_value?: string, // TODO si está vacio, es el primero, chequear si da igual 
    field_validations?:
    Options |
    AllowMultipleOptions & Options
}

export function parse(schema: SelectFormFieldSchema) {
    return // TODO, devolver el componente de checkbox con las configuraciones
}