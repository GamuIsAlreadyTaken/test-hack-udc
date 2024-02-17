<script lang="ts">
    import type {
        FormSchema,
        GenericFormFieldSchema,
    } from "./types/api-schema";

    import data from "./targets.json";

    import { processors, getFieldType } from "$lib/inputs/components/module";
    import { onMount } from "svelte";

    const url =
        "https://0fcd2366-7de6-464f-b389-b9a5533ed9af.mock.pstmn.io/api/v1/formTypes";
    let req: Promise<Response>;
    onMount(() => {
        req = fetch(url, { method: "GET" });
    });

    async function getFormSchema(): FormSchema {}

    const fields = data.form_fields as GenericFormFieldSchema[];
</script>

{#each fields as data}
    {@const type = getFieldType(data)}
    <svelte:component this={processors[type]} {data}></svelte:component>
{/each}
