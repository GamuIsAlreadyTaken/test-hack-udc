<script lang="ts">


</script>


<div class="barra_carga">
    <div class="carga"></div>
</div>

<style>
    .barra_carga{
        background-color: rgba(255, 255, 255, 0.9);
        height: 100%;
        width: 100%;
        position: fixed;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        z-index: 10000;
    }
    .carga{
        border: 15 px solid #ccc;
        border-top-color: aqua;
        border-top-style: groove;
        height: 100px;
        width: 100px;
        border-radius: 100%;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;

        -webkit-animation: girar 1.5s linear infinite;
            -o-animation: girar 1.5s linear infinite;
            animation: girar 1.5s linear infinite;
    }

    @keyframes girar{
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}

    }
</style>