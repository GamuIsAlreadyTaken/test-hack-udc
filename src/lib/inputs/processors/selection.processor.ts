import type { GenericFormFieldSchema } from "$lib/api-schema";

export type SelectFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'select',
    field_default_value: string, // TODO si está vacio, es el primero, chequear si da igual 
    field_validations: {
        options: string[]
    }
}

export function parse(schema: SelectFormFieldSchema) {
    return // TODO, devolver el componente de checkbox con las configuraciones
}