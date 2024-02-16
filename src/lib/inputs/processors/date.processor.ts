import type { GenericFormFieldSchema } from "$lib/api-schema";
import type { NoValidation } from "$lib/form-validations";

export type DateFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'date',
    field_default_value?: Date,
    field_validations?: NoValidation
}

export function parse(schema: DateFormFieldSchema) {
    return // TODO, devolver el componente con las configuraciones
}