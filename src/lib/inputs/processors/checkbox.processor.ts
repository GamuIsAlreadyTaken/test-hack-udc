import type { GenericFormFieldSchema } from "$lib/api-schema";
import type { NoValidation } from "$lib/form-validations";
import Checkbox from "$lib/inputs/components/checkbox.svelte";

export type CheckboxFormFieldSchema = GenericFormFieldSchema &
{
    field_type: 'checkbox',
    field_default_value?: boolean,
    field_validations?: NoValidation
}