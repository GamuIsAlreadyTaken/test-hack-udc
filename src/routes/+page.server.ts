import { json, type Actions, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { processFormData } from '$lib/form_handeler';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    process: async (event) => {
        const processedData = processFormData(await event.request.formData())
        let response = await fetch(, { method: 'POST', body: JSON.stringify(processedData) })
        if (response.ok) {
            return {}
        }

        redirect(300, '/')
    },
} satisfies Actions;