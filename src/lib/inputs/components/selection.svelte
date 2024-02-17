<script lang="ts">
	import type{ SelectFormFieldSchema } from './../processors/selection.processor';
    export let data: SelectFormFieldSchema;
    let opciones = data.field_validations?.options ?? []
</script>



{#if data.field_readonly}
<select name="select" bind:value={data.field_default_value} disabled> 
    {#each opciones as opt}
        <option value={opt}>{opt}</option>
    {/each}

</select>
{:else}
<select name="select" bind:value={data.field_default_value}> 
    {#each opciones as opt}
        <option value={opt}>{opt}</option>
    {/each}

</select>
{/if}

<label>{data.field_description}</label>