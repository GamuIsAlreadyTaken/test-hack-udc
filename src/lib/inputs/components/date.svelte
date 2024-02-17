<script lang="ts">
    import type { DateFormFieldSchema } from "../processors/date.processor";

    export let data: DateFormFieldSchema;

</script>

{#if data.field_readonly}
<input class="fecha" type="date" bind:value={data.field_default_value} readonly>
{:else}
<input class="fecha" type="date" bind:value={data.field_default_value} >
{/if}

<label>{data.field_description}</label>     