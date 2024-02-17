import { json, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { processFormData } from '$lib/form_handeler';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    process: async (event) => {
        const processedData = processFormData(await event.request.formData())
        fetch(JSON.stringify(processedData), { method: 'POST', headers: { mock: '1' } })
    },
} satisfies Actions;