<script lang="ts">
    import { derived, type Writable } from "svelte/store";
    import FormBuilder from "./form-builder.svelte";
    import { afterUpdate, onMount, tick } from "svelte";
    import { apiUrl, forms } from "$lib/env";
    import type {
        FormData,
        FormSchema,
        GenericFormFieldSchema,
    } from "$lib/types/api-schema";
    import Chargeicon from "$lib/assets/chargeicon.svelte";
    import { getFormTypeProcessedData } from "$lib/inputs/module";
    import { error, redirect } from "@sveltejs/kit";

    export let form_id: string;
    let dependees: Record<string, Writable<any>>;
    let form_type_id: string;
    let data: FormData;

    let form: FormSchema;
    let groups: Record<string, GenericFormFieldSchema[]>;
    let values: Record<string, Writable<any>>;
    onMount(async () => {
        const res = await fetch(apiUrl + forms, {
            method: "GET",
            headers: { form_id },
        });

        data = await res.json();
        if (data.form_id == undefined) {
            redirect(308, "/error");
        }
        [form, groups, values] = await getFormTypeProcessedData(
            data.form_type_id,
        );
        dependees = values;

        form_type_id = data.form_type_id;
        for (const value of data.form_fields) {
            dependees[value.field_id].set(value.field_value);
        }
    });
</script>

{#if form_type_id}
    <FormBuilder
        schema={form}
        groupedFields={groups}
        values={dependees}
        readOnly={true}
    />
{:else}
    <Chargeicon />
{/if}
