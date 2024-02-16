import type { GenericFormFieldSchema } from "$lib/api-schema";

export type DateFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'date',
    field_default_value: any, // TODO, especificar el valor por defecto, si es que existe
    field_validations: any// TODO, especificar tipo de validaciones, si es que existe
}

export function parse(schema: DateFormFieldSchema) {
    return // TODO, devolver el componente con las configuraciones
}