<script lang="ts">
    import Chargeicon from "../assets/chargeicon.svelte";
    import type { FormSchema, GroupSchema } from "../types/api-schema";
    import {
        processors,
        getFieldType,
        groupElements,
        orderBy,
        add,
        sub,
    } from "$lib/inputs/module";
    import type { Writable } from "svelte/store";
    import MaybeDependant from "$lib/components/maybe-dependant.svelte";
    import { getContext, setContext } from "svelte";
    import { applyAction, enhance } from "$app/forms";
    import { goto } from "$app/navigation";

    export let schema: FormSchema;
    export let values: Record<string, Writable<any>> = {};
    export let groupedFields: ReturnType<typeof groupElements>;
    export let route: string;

    export let readOnly: boolean = false;
    setContext("readOnly", readOnly);
    let loading = getContext<Writable<number>>("loading");

    let groups: GroupSchema[] =
        schema.form_groups?.toSorted(orderBy("group_order")) ?? [];
</script>

{#if schema}
    <form
        method="POST"
        action={route}
        use:enhance={() => {
            loading.update(add);
            return async ({ result }) => {
                loading.update(sub);
                if (result.type === "redirect") {
                    close();
                } else {
                    await applyAction(result);
                }
            };
        }}
    >
        <h5>{schema.title_field.field_description}:</h5>
        <h2>{schema.form_type_name}</h2>
        <p>{schema.form_type_description}</p>
        <input type="hidden" name="form_type_id" value={schema.form_type_id} />
        <input type="hidden" name="title_field" value={schema.title_field} />
        {#each groups as group (group.group_id)}
            <fieldset>
                <legend>{group.group_name}</legend>
                {#each groupedFields[group.group_id] as field (field.field_order)}
                    <MaybeDependant data={field} dependees={values} />
                {/each}
            </fieldset>
        {/each}

        {#each groupedFields["__ungrouped"] ?? [] as freeField (freeField.field_order)}
            {@const type = getFieldType(freeField)}
            <svelte:component this={processors[type]} data={freeField} />
        {/each}

        {#if !readOnly}
            <input type="submit" value="Enviar" class="accent-button" />
        {/if}
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
