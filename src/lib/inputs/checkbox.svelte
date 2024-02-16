<script lang="ts">
    export let field_readonly: boolean;
    export let field_description: string;
    export let field_default_value: boolean;
    

</script>

{#if field_readonly}
<input class="patata" type="Checkbox" readonly >
{:else}
<input class="patata" type="Checkbox" >
{/if}

<label for="patata">{field_description}</label>

