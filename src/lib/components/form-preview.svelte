<script lang="ts" context="module">
    export type FormRequestEvent = { formRequest: { id: string } };
    type FormBrief = {
        // move to api-schema
        form_id: string;
        title_field: string;
        form_type_id: string;
    };
</script>

<script lang="ts">
    import Chargeicon from "$lib/assets/chargeicon.svelte";
    import { apiUrl, forms } from "$lib/env";
    import { createEventDispatcher, onMount } from "svelte";

    let formTypes: FormBrief[] = [];

    onMount(async () => {
        let res = await fetch(apiUrl + forms, {
            method: "GET",
            headers: { mock: "1" },
        });
        formTypes = await res.json();
    });
    const dispatch = createEventDispatcher<FormRequestEvent>();
</script>

<h2>FormTypes disponibles:</h2>
<div>
    {#each formTypes as formType}
        <button
            class="accent-button"
            on:click={() =>
                dispatch("formRequest", { id: formType.form_type_id })}
        >
            {formType.title_field}
        </button>
    {:else}
        <Chargeicon />
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
