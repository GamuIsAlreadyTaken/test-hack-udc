import type { GenericFormFieldSchema } from "$lib/api-schema";

export type TextFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'text',
    field_default_value: string,
    field_validations:
    { min_length: number } |
    { format: string } |
    {}
}

export function parse(schema: CheckboxFormFieldSchema) {
    return // TODO, devolver el componente de checkbox con las configuraciones
}