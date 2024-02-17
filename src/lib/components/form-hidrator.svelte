<script lang="ts">
    import { add, sub } from "$lib/inputs/module";
    import type { ParsedFormData } from "$lib/types/api-schema";
    import { getContext, onMount } from "svelte";
    import type { Writable } from "svelte/store";

    export let values: Record<string, Writable<any>>;
    export let data: ParsedFormData;

    let loading: Writable<number> = getContext("loading");
    loading.update(add);
    onMount(() => {
        for (const field of data.form_fields)
            if (values[field.field_id])
                values[field.field_id].set(field.field_value);
        loading.update(sub);
    });
</script>
