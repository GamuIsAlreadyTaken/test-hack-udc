import { apiUrl, forms, formsTypes } from '$lib/env.js';
import type { FormSchema, ParsedFormData } from '$lib/types/api-schema.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {

    const res = await fetch(apiUrl + forms, {
        method: "GET",
        headers: { form_id: params.id },
    });

    if (!res.ok) error(404, { message: 'Los datos del formulario no se encontraron' })

    const parsedData: ParsedFormData = await res.json()

    if (parsedData.form_type_id == undefined ||
        parsedData.form_id == undefined)
        error(418, { message: 'Los datos del formulario no son validos' })

    const typeRes = await fetch(apiUrl + formsTypes, {
        method: "GET",
        headers: { form_type_id: parsedData.form_type_id },
    });

    if (!typeRes.ok) error(404, { message: 'El esquema del formulario no se encontró' })

    const schema: FormSchema = await typeRes.json()

    if (schema.form_type_id == undefined)
        error(418, { message: 'El esquema del formulario no es valido' })

    return { parsedData, schema }
}