<script lang="ts">
    import type {
        FormSchema,
        GenericFormFieldSchema,
        GroupSchema,
    } from "./types/api-schema";

    import {
        processors,
        getFieldType,
        groupElements,
        orderBy,
    } from "$lib/inputs/components/module";
    import { onMount } from "svelte";

    export let form_id: number;

    const url =
        "https://0fcd2366-7de6-464f-b389-b9a5533ed9af.mock.pstmn.io/api/v1/formTypes";

    let groupedFields: ReturnType<typeof groupElements> = {};
    let groups: GroupSchema[] = [];

    onMount(async () => {
        const res = await fetch(url, {
            method: "GET",
            headers: { form_type_id: form_id.toString() },
        });
        const formSchema: FormSchema = await res.json();

        groupedFields = groupElements(formSchema.form_fields);
        groups = formSchema.form_groups.toSorted(orderBy("group_order"));
    });
</script>

<form action="">
    {#each groups as group (group.group_id)}
        <fieldset>
            <legend>{group.group_name}</legend>
            {#each groupedFields[group.group_id] as field (field.field_order)}
                {@const type = getFieldType(field)}
                <svelte:component this={processors[type]} data={field} />
            {:else}
                <p>Loading fields...</p>
            {/each}
        </fieldset>
    {:else}
        <p>Loading groups...</p>
    {/each}

    {#each groupedFields["__ungrouped"] ?? [] as freeField (freeField.field_order)}
        {@const type = getFieldType(freeField)}
        <svelte:component this={processors[type]} data={freeField} />
    {/each}
</form>

<style>
    fieldset {
        display: flex;
        flex-direction: column;
        width: 500px;
    }
</style>
