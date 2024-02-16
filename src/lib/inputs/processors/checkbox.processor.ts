import type { GenericFormFieldSchema } from "$lib/api-schema";
import type { NoValidation } from "$lib/form-validations";

export type CheckboxFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'checkbox',
    field_default_value?: boolean,
    field_validations?: NoValidation
}

export function parse(schema: CheckboxFormFieldSchema) {
    return // TODO, devolver el componente de checkbox con las configuraciones
}