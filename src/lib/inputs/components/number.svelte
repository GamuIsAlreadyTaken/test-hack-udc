<script lang="ts">
	import type { MaxValue } from './../../form-validations';
    import type { MinValue } from "$lib/form-validations";
    import type { NumberFormFieldSchema } from "../processors/number.processor";

    export let data: NumberFormFieldSchema;

    let min = (data.field_validations as MinValue).min_value
    let max = (data.field_validations as MaxValue).max_value

    
</script>




{#if data.field_readonly}
<input class="numero" type="number"  bind:value={data.field_default_value}   {min} {max} readonly>
{:else}
<input class="numero" type="number"  bind:value={data.field_default_value}  {min} {max}>
{/if}

<label>{data.field_description}</label>     