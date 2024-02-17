import type { FormFieldType, GenericFormFieldSchema } from "$lib/types/api-schema";
import Checkbox from "./checkbox.svelte";
import Date from "./date.svelte";
import Number from "./number.svelte";
import Selection from "./selection.svelte";
import Text from "./text.svelte";

const processors: Record<
    FormFieldType,
    ConstructorOfATypedSvelteComponent
> = {
    checkbox: Checkbox,
    number: Number,
    text: Text,
    date: Date,
    select: Selection,
};


function getFieldType(field: GenericFormFieldSchema): FormFieldType {
    return field.field_type;
}


export { processors, getFieldType }