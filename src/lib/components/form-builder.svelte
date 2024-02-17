<script lang="ts">
    import Chargeicon from "../assets/chargeicon.svelte";
    import type { FormSchema, GroupSchema } from "../types/api-schema";
    import {
        processors,
        getFieldType,
        groupElements,
        orderBy,
    } from "$lib/inputs/module";
    import type { Writable } from "svelte/store";
    import MaybeDependant from "$lib/components/maybe-dependant.svelte";
    import { apiUrl, formsTypes } from "$lib/env";

    const url = apiUrl + formsTypes;

    export let form: FormSchema;
    export let dependees: Record<string, Writable<any>> = {};
    export let groupedFields: ReturnType<typeof groupElements>;
    let groups: GroupSchema[] =
        form.form_groups?.toSorted(orderBy("group_order")) ?? [];
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

        <input type="submit" value="Enviar" class="accent-button" />
    </form>
{:else}
    <Chargeicon />
{/if}

<style>
    @import url("https://fonts.cdnfonts.com/css/roboto");
    fieldset {
        font-family: "Roboto", sans-serif;
        background-color: var(--background);
        border: 1px solid var(--border);
        border-radius: 15px;
        margin: 10px 0;
    }
    legend {
        border: 1px solid var(--border);
        border-radius: 3px;
    }
    form {
        padding: 10px;
    }
    input {
        width: 100%;
    }
</style>
