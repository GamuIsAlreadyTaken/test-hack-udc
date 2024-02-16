<script lang="ts">
	import type { CheckboxFormFieldSchema } from './../lib/inputs/processors/checkbox.processor';
	import Checkbox from './../lib/inputs/components/checkbox.svelte';

	let data:CheckboxFormFieldSchema = {
	field_default_value: true,
	field_dependent_on: {
		field_id: 1
	}

	};
	let field_readonly = true;
	let field_description = "CHECK";

</script>

<h1>Reto de disashop</h1>
<p></p>

<Checkbox data={field_description} {field_readonly}></Checkbox>
