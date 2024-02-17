<script lang="ts">
    import type { ParsedFormData } from "$lib/types/api-schema";
    import { onMount } from "svelte";
    import type { Writable } from "svelte/store";

    export let values: Record<string, Writable<any>>;
    export let data: ParsedFormData;

    onMount(() => {
        for (const fields of data.form_fields)
            values[fields.field_id].set(fields.field_value);
    });
</script>
