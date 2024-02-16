import type { GenericFormFieldSchema } from "$lib/api-schema";
import type { MaxValue, MinValue } from "$lib/form-validations";

export type NumberFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'number',
    field_default_value?: number,
    field_validations?:
    MinValue |
    MaxValue |
    MinValue & MaxValue
}

export function parse(schema: NumberFormFieldSchema) {
    return // TODO, devolver el componente de checkbox con las configuraciones
}