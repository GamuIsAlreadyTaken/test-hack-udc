<script lang="ts">
	import type { CheckboxFormFieldSchema } from './../processors/checkbox.processor';
    export let data: CheckboxFormFieldSchema;

</script>

{#if data.field_readonly}
<input class="textbox" type="text" readonly>
{:else}
<input class="textbox" type="text" >
{/if}

<label>{data.field_description}</label>
