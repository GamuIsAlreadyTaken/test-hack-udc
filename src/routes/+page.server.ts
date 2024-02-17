import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    process: async (event) => {
        IKERPUTOHAZLOTUYO(await event.request.formData())
    },
} satisfies Actions;