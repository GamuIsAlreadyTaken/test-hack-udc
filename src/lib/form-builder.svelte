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
        getWritables,
    } from "$lib/inputs/components/module";
    import { onMount } from "svelte";
    import DependentElement from "./dependent-element.svelte";
    import type { Readable, Writable } from "svelte/store";

    export let form_id: number;

    const url =
        "https://0fcd2366-7de6-464f-b389-b9a5533ed9af.mock.pstmn.io/api/v1/formTypes";

    let form: FormSchema;
    let groups: GroupSchema[] = [];
    let groupedFields: ReturnType<typeof groupElements> = {};
    let dependees: Record<string, Writable<any>>;

    onMount(async () => {
        const res = await fetch(url, {
            method: "GET",
            headers: { form_type_id: form_id.toString() },
        });
        const formSchema: FormSchema = await res.json();

        form = formSchema;
        groupedFields = groupElements(formSchema.form_fields);
        groups = formSchema.form_groups.toSorted(orderBy("group_order"));
        dependees = getWritables(formSchema.form_fields);
    });
</script>

<!-- Dependencia, solo aparece si el valor del objetivo es x -->
{#if form}
    <form action="">
        <h5>{form.title_field.field_description}:</h5>
        <h2>{form.form_type_name}</h2>
        <p>{form.form_type_description}</p>
        {#each groups as group (group.group_id)}
            <fieldset>
                <legend>{group.group_name}</legend>
                {#each groupedFields[group.group_id] as field (field.field_order)}
                    {@const component = processors[getFieldType(field)]}
                    {#if field.field_dependent_on}
                        <DependentElement
                            {component}
                            data={field}
                            dependantValue={dependees[
                                field.field_dependent_on.field_id
                            ]}
                            bind:value={dependees[field.field_id]}
                        />
                    {:else}
                        <svelte:component
                            this={component}
                            data={field}
                            bind:value={dependees[field.field_id]}
                        />
                    {/if}
                {/each}
            </fieldset>
        {/each}

        {#each groupedFields["__ungrouped"] ?? [] as freeField (freeField.field_order)}
            {@const type = getFieldType(freeField)}
            <svelte:component this={processors[type]} data={freeField} />
        {/each}
    </form>
{:else}
    <p>Loading...</p>
{/if}

<style>
    fieldset {
        display: flex;
        flex-direction: column;
        width: 500px;
    }
</style>
