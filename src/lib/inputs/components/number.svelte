<script lang="ts">
    import type { NumberFormFieldSchema } from "../processors/number.processor";

    export let data: NumberFormFieldSchema;

</script>

{#if data.field_readonly}
<input class="numero" type="number"  bind:value={data.field_default_value} readonly>
{:else}
<input class="numero" type="number"  bind:value={data.field_default_value}>
{/if}

<label>{data.field_description}</label>     