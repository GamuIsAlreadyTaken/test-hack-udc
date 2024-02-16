import type { GenericFormFieldSchema } from "$lib/api-schema";

export type CheckboxFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'checkbox',
    field_default_value: boolean,
    field_validations: {}
}

export function parse(schema: CheckboxFormFieldSchema) {
    return // TODO, devolver el componente de checkbox con las configuraciones
}