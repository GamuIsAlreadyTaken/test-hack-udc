<script lang="ts">
	import type { CheckboxFormFieldSchema } from './../processors/checkbox.processor';
    export let data: CheckboxFormFieldSchema;

</script>

{#if data.field_readonly}
<input class="numero" type="number" readonly>
{:else}
<input class="numero" type="number">
{/if}

<label>{data.field_description}</label>     