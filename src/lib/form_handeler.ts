export function form_data_recieve: FormData
export let keyvalue:

    function form_data_recieve(formData: FormData) {
        let parsedData = {
            form_id: formData.get()
            form_type_id: 1,
            title_field: "Raspberry Pi 5"
        }
        interface form_fields {
            field_id:number,
            field_value:string
        }
        let forms: form_fields[] = [];

        for (const [id, value] of formData) {
            forms.push({
                field_id: datos[i].field_id,
                field_value: datos[i].field_value
            });
        }

    }