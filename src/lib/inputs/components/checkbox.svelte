<script lang="ts">
	import type { CheckboxFormFieldSchema } from './../processors/checkbox.processor';
    export let data: CheckboxFormFieldSchema;

</script>

{#if data.field_readonly}
<input class="check" type="checkbox"  bind:checked={data.field_default_value} disabled>
{:else}
<input class="check" type="checkbox" >
{/if}   

<label>{data.field_description}</label>