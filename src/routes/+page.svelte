<script lang="ts">
	import Checkbox from './../lib/inputs/components/checkbox.svelte';

	let field_default_value = true;
	let field_readonly = true;
	let field_description = "CHECK";

</script>

<h1>Reto de disashop</h1>
<p></p>

<Checkbox {field_default_value} {field_description}  {field_readonly}></Checkbox>

