<script lang="ts">
    import FormBuilder from "$lib/components/form-builder.svelte";
    import type { ActionData } from "./$types";

    export let form: ActionData;
</script>

<FormBuilder form_id={1} />

{#if form?.success}
    <p>Los datos se han subido correctamente</p>
{/if}
