<script lang="ts" context="module">
    export type FormRequestEvent = { formRequest: { id: string } };
</script>

<script lang="ts">
    import { apiUrl, forms } from "$lib/env";
    import { add, sub } from "$lib/inputs/module";
    import type { FormBrief } from "$lib/types/api-schema";
    import { createEventDispatcher, getContext, onMount } from "svelte";
    import type { Writable } from "svelte/store";

    let formTypes: FormBrief[] = [];
    let loading: Writable<number> = getContext("loading");

    onMount(async () => {
        let res = await fetch(apiUrl + forms, {
            method: "GET",
            headers: { mock: "1" },
        });
        formTypes = await res.json();
        loading.update(sub);
    });

    const dispatch = createEventDispatcher<FormRequestEvent>();

    function handleClick(id: string) {
        loading.update(add);
        window.open("/done/" + id, "newwindow", "width=400,height=300");
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
