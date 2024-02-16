<script lang="ts">

    export let field_readonly: boolean;
    export let field_description: string;
    export let field_default_value: boolean;

</script>

{#if field_readonly}
<input class="check" type="checkbox"  bind:checked={field_default_value} readonly>
{:else}
<input class="check" type="checkbox" >
{/if}

<label>{field_description}</label>