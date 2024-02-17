<script lang="ts">
    import type {
        FormSchema,
        GenericFormFieldSchema,
    } from "./types/api-schema";

    // import data from "./targets.json";

    import { processors, getFieldType } from "$lib/inputs/components/module";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let form_id: number;

    const url =
        "https://0fcd2366-7de6-464f-b389-b9a5533ed9af.mock.pstmn.io/api/v1/formTypes";
    let fields: GenericFormFieldSchema[] = [];
    onMount(async () => {
        const res = await fetch(url, {
            method: "GET",
            headers: { form_type_id: form_id + "" },
        });
        const formSchema: FormSchema = await res.json();
        // form.set(formSchema);
        fields = formSchema.form_fields
    });
</script>

{#each fields as data}
    {@const type = getFieldType(data)}
    <svelte:component this={processors[type]} {data}></svelte:component>
{:else}
<p>Loading...</p>
{/each}
