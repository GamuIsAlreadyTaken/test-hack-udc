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

function groupElements(
    fields: GenericFormFieldSchema[],
): Record<string, GenericFormFieldSchema[]> {
    let result: ReturnType<typeof groupElements> = { __ungrouped: [] };
    for (const field of fields) {
        if (field.field_group == undefined) {
            result["__ungrouped"].push(field);
            continue;
        }
        const group = field.field_group;
        if (result[group] == undefined) {
            result[group] = [];
        }
        result[group].push(field);
    }
    for (const arr of Object.values(result)) {
        arr.sort(orderBy('field_order'));
    }
    return result;
}

function orderBy<T>(key: keyof T) {
    return (e1: T, e2: T) => (e1[key] as number) - (e2[key] as number)
}


export { processors, getFieldType, groupElements, orderBy }