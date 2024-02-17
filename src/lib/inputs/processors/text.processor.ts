import type { GenericFormFieldSchema } from "$lib/api-schema";
import type { MaxLength, MinLength } from "$lib/form-validations";

export type TextFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'text',
    field_default_value?: string,
    field_validations?:
    MinLength |
    MaxLength |
    MinLength & MaxLength
}
