<script lang="ts">
	import type{ TextFormFieldSchema } from './../processors/text.processor';
    export let data: TextFormFieldSchema;

</script>

{#if data.field_readonly}
<input class="textbox" type="text" readonly>
{:else}
<input class="textbox" type="text" >
{/if}

<label>{data.field_description}</label>
