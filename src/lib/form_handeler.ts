import type { FormValue, ParsedFormData } from "./types/api-schema";

export function processFormData(data: FormData): ParsedFormData {
    let parsedData: ParsedFormData = {
        form_id: data.get('form_id')?.toString() ?? '',
        form_type_id: data.get('form_type_id')?.toString() ?? '',
        title_field: data.get('title_field')?.toString() ?? '',
        form_fields: [] as FormValue[]
    }

    for (const [id, value] of data) {
        parsedData.form_fields.push({
            field_id: id,
            field_value: value.toString()
        });
    }

    return parsedData;
}
