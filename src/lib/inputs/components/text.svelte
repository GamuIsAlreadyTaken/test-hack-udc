<script lang="ts">
	import type{ TextFormFieldSchema } from './../processors/text.processor';
    export let data: TextFormFieldSchema;

</script>


<label>{data.field_description}<br></label>

{#if data.field_readonly}
<input class="textbox" type="text" bind:value={data.field_default_value} readonly>
{:else}
<input class="textbox" type="text" bind:value={data.field_default_value} >
{/if}


