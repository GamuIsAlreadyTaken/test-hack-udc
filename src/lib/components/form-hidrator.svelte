<script lang="ts">
    import type { ParsedFormData } from "$lib/types/api-schema";
    import { onMount } from "svelte";
    import type { Writable } from "svelte/store";

    export let values: Record<string, Writable<any>>;
    export let data: ParsedFormData;

    onMount(() => {
        for (const field of data.form_fields)
            if (values[field.field_id])
                values[field.field_id].set(field.field_value);
    });
</script>
