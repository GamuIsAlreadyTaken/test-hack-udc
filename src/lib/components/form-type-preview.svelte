<script lang="ts" context="module">
    export type FormRequestEvent = { formRequest: { id: string } };
    type FormTypeBrief = {
        // move to api-schema
        form_type_id: string;
        form_type_name: string;
    };
</script>

<script lang="ts">
    import Chargeicon from "$lib/assets/chargeicon.svelte";
    import { apiUrl, formsTypes } from "$lib/env";
    import { createEventDispatcher, onMount } from "svelte";

    let formTypes: FormTypeBrief[] = [];

    onMount(async () => {
        let res = await fetch(apiUrl + formsTypes, {
            method: "GET",
            headers: { mock: "1" },
        });
        formTypes = await res.json();
        console.log(formTypes);
    });
    const dispatch = createEventDispatcher<FormRequestEvent>();
</script>

<h2>FormTypes disponibles:</h2>
<ul>
    {#each formTypes as formType}
        <button
            on:click={() =>
                dispatch("formRequest", { id: formType.form_type_id })}
            >{formType.form_type_name}</button
        >
    {:else}
        <Chargeicon />
    {/each}
</ul>
