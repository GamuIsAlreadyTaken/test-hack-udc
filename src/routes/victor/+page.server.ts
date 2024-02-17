import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { processFormData } from '$lib/form_handeler';
import { apiUrl, forms } from '$lib/env';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    process: async (event) => {
        const processedData = processFormData(await event.request.formData())
        let response = await fetch(apiUrl + forms, { method: 'POST', body: JSON.stringify(processedData) })
        if (response.ok) {
            return { success: true }
        }
        return { success: false }

    },
} satisfies Actions;