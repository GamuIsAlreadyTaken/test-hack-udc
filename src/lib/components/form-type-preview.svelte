<script lang="ts" context="module">
    export type FormRequestEvent = { formRequest: { id: string } };
</script>

<script lang="ts">
    import { apiUrl, formsTypes } from "$lib/env";
    import { add, sub } from "$lib/inputs/module";
    import type { FormTypeBrief } from "$lib/types/api-schema";
    import { createEventDispatcher, getContext, onMount } from "svelte";
    import type { Writable } from "svelte/store";

    let formTypes: FormTypeBrief[] = [];
    let loading: Writable<number> = getContext("loading");

    onMount(async () => {
        let res = await fetch(apiUrl + formsTypes, {
            method: "GET",
            headers: { mock: "1" },
        });
        formTypes = await res.json();
        loading.update(sub);
    });
    const dispatch = createEventDispatcher<FormRequestEvent>();
    function handleClick(id: string) {
        dispatch("formRequest", { id });
        loading.update(add);
    }
</script>

<h2>FormTypes disponibles:</h2>
<div>
    {#each formTypes as formType}
        <button
            class="accent-button"
            on:click={() => handleClick(formType.form_type_id)}
        >
            {formType.form_type_name}
        </button>
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 5px;
    }
</style>
