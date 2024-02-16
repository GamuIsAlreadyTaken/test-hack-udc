import type { GenericFormFieldSchema } from "$lib/api-schema";

export type NumberFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'number',
    field_default_value: number,
    field_validations: {
        max_value: number,
        min_value: number
    }
}

export function parse(schema: NumberFormFieldSchema) {
    return // TODO, devolver el componente de checkbox con las configuraciones
}