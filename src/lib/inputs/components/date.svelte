<script lang="ts">
	import type { CheckboxFormFieldSchema } from './../processors/checkbox.processor';
    export let data: CheckboxFormFieldSchema;

</script>

{#if data.field_readonly}
<input class="fecha" type="date" readonly>
{:else}
<input class="fecha" type="date" >
{/if}

<label>{data.field_description}</label>     