<script lang="ts">
    import Chargeicon from "$lib/assets/chargeicon.svelte";
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    let loading = writable<number>(0);
    setContext("loading", loading);
</script>

{#if $loading > 0}
    <Chargeicon />
{/if}

<slot />
