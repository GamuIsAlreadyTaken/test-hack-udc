<script lang="ts">

    const url =
        "https://0fcd2366-7de6-464f-b389-b9a5533ed9af.mock.pstmn.io/api/v1/formTypes";

    const req = fetch(url, { method: "GET" });
</script>

{#await req}
    <p>Loading...</p>
{:then res}
    {#await res.json()}
        <p>Reading...</p>
    {:then data}
        {data}
    {/await}
{/await}
