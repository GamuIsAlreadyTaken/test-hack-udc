<script lang="ts">
    import { getWritables, groupElements } from "$lib/inputs/module.js";
    import FormBuilder from "$lib/components/form-builder.svelte";
    import type { PageData, ActionData } from "./$types";
    import { setContext } from "svelte";
    import Chargeicon from "$lib/assets/chargeicon.svelte";
    import { writable, type Writable } from "svelte/store";

    export let data: PageData;
    export let form: ActionData;

    let schema = data;
    let values = getWritables(data.form_fields ?? []);
    let groups = groupElements(data.form_fields ?? []);

    let loading = writable<boolean>(false);
    setContext<Writable<boolean>>("loading", loading);
</script>

{#if $loading}
    <Chargeicon />
{/if}

<FormBuilder {schema} {values} groupedFields={groups} route={"?/postForm"} />
{#if form?.message}
    <p>Error al enviar los datos, {form.message}</p>
{/if}
