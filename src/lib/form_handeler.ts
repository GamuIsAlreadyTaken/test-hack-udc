type form_fields = {
    field_id: string,
    field_value: string
}
export function processFormData(data: FormData) {
    let parsedData = {
        form_id: data.get('form_id'), // form_id
        form_type_id: data.get('form_type_id'),
        title_field: data.get('title_field'),
        form_fields: [] as form_fields[]
    }

    for (const [id, value] of data) {
        parsedData.form_fields.push({
            field_id: id,
            field_value: value.toString()
        });
    }

    return parsedData;
}
