<script lang="ts">
    import type {
        FormSchema,
        GenericFormFieldSchema,
        GroupSchema,
    } from "./types/api-schema";

    // import data from "./targets.json";

    import { processors, getFieldType } from "$lib/inputs/components/module";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let form_id: number;

    const url =
        "https://0fcd2366-7de6-464f-b389-b9a5533ed9af.mock.pstmn.io/api/v1/formTypes";

    let groupedFields: ReturnType<typeof groupElements> = {};
    let groups: GroupSchema[] = [];
    onMount(async () => {
        const res = await fetch(url, {
            method: "GET",
            headers: { form_type_id: form_id + "" },
        });
        const formSchema: FormSchema = await res.json();

        groupedFields = groupElements(formSchema.form_fields);
        groups = formSchema.form_groups.toSorted(
            (g1, g2) => g1.group_order - g2.group_order,
        );
    });
    function groupElements(
        fields: GenericFormFieldSchema[],
    ): Record<string, GenericFormFieldSchema[]> {
        let result: ReturnType<typeof groupElements> = { __ungrouped: [] };
        for (const field of fields) {
            if (field.field_group == undefined) {
                result["__ungrouped"].push(field);
                continue;
            }
            const group = field.field_group;
            if (result[group] == undefined) {
                result[group] = [];
            }
            result[group].push(field);
        }
        for (const arr of Object.values(result)) {
            arr.sort((e1, e2) => e1.field_order - e2.field_order);
        }
        return result;
    }
</script>

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

<style>
    fieldset {
        display: flex;
        flex-direction: column;
    }
</style>
