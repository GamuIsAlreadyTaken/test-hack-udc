import { apiUrl, formsTypes } from '$lib/env.js';
import { processFormData } from '$lib/form_handeler.js';
import type { FormSchema } from '$lib/types/api-schema.js';
import { error, type Actions, redirect, fail } from '@sveltejs/kit';

export async function load({ params }) {

    const res = await fetch(apiUrl + formsTypes, {
        method: "GET",
        headers: { form_type_id: params.id },
    });

    const schema: FormSchema = await res.json()

    if (schema.form_type_id == undefined)
        error(418, { message: 'El esquema del formulario no es valido' })

    return schema
}

export const actions = {
    postForm: async (event) => {
        const formdata = await event.request.formData()
        const parsedJson = processFormData(formdata)

        if (parsedJson.form_id == '' ||
            parsedJson.form_type_id == '' ||
            parsedJson.title_field == ''
        ) return fail(418, {
            message: 'Los datos suplimentados no son validos',
            prevData: parsedJson
        })

        let res = await fetch(apiUrl + formsTypes, {
            method: 'POST',
            headers: { mock: '1' },
            body: JSON.stringify(parsedJson)
        })

        if (res.ok) redirect(300, '/')
        return { failStatus: res.status }
    }
} satisfies Actions;