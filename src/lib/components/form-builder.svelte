<script lang="ts">
    import Chargeicon from "../assets/chargeicon.svelte";
    import type { FormSchema, GroupSchema } from "../types/api-schema";
    import {
        processors,
        getFieldType,
        groupElements,
        orderBy,
        getWritables,
    } from "$lib/inputs/module";
    import { onMount } from "svelte";
    import type { Writable } from "svelte/store";
    import MaybeDependant from "$lib/components/maybe-dependant.svelte";
    import { apiUrl, formsTypes } from "$lib/env";

    export let form_id: string;

    const url = apiUrl + formsTypes;

    let form: FormSchema;
    let groups: GroupSchema[] = [];
    let groupedFields: ReturnType<typeof groupElements> = {};
    let dependees: Record<string, Writable<any>>;

    onMount(async () => {
        const res = await fetch(url, {
            method: "GET",
            headers: { form_type_id: form_id },
        });
        const formSchema: FormSchema = await res.json();

        form = formSchema;
        groupedFields = groupElements(formSchema.form_fields ?? []);
        groups = formSchema.form_groups?.toSorted(orderBy("group_order")) ?? [];
        dependees = getWritables(formSchema.form_fields ?? []);
    });
</script>

{#if form}
    <form method="POST" action="?/process">
        <h5>{form.title_field.field_description}:</h5>
        <h2>{form.form_type_name}</h2>
        <p>{form.form_type_description}</p>
        {#each groups as group (group.group_id)}
            <fieldset>
                <legend>{group.group_name}</legend>
                {#each groupedFields[group.group_id] as field (field.field_order)}
                    <MaybeDependant data={field} {dependees} />
                {/each}
            </fieldset>
        {/each}

        {#each groupedFields["__ungrouped"] ?? [] as freeField (freeField.field_order)}
            {@const type = getFieldType(freeField)}
            <svelte:component this={processors[type]} data={freeField} />
        {/each}

        <input type="submit" value="Enviar" />
    </form>
{:else}
    <Chargeicon />
{/if}

<style>
    @import url("https://fonts.cdnfonts.com/css/roboto");
    fieldset {
        font-family: "Roboto", sans-serif;
        background-color: #f2dede;
    }
    form {
        position: absolute;
        right: 30%;
        width: 60%;
        padding: 10px;
    }

</style>
