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
    import { createEventDispatcher, getContext, onMount } from "svelte";
    import type { Writable } from "svelte/store";

    let formTypes: FormBrief[] = [];

    onMount(async () => {
        let res = await fetch(apiUrl + forms, {
            method: "GET",
            headers: { mock: "1" },
        });
        formTypes = await res.json();
    });
    const dispatch = createEventDispatcher<FormRequestEvent>();
    function handleClick(id: string) {
        dispatch("formRequest", { id });
        let loading: Writable<boolean> = getContext("loading");
        loading.set(true);
    }
</script>

<h2>Forms hechos disponibles:</h2>
<div>
    {#each formTypes as formType}
        <button
            class="accent-button"
            on:click={() => handleClick(formType.form_id)}
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
