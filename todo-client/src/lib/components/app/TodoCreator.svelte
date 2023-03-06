<script lang="ts">
    import type TodoItem from "./TodoItem.svelte";

    export let creatorMode: 'create' | 'edit' = 'create';

    function creatorSubmit(event){
        switch(creatorMode){
            case 'create':
                break;
            case 'edit':
                break;
        }
    }
</script>

<section class="todo-creator">
    <!-- Create Mode -->
    {#if creatorMode == 'create'}
        <form on:submit|preventDefault={creatorSubmit}>
        </form>
    
    <!-- Edit Mode -->
    {:else if creatorMode == 'edit'}
        <form on:submit|preventDefault={creatorSubmit}>
        </form>
    {/if}
</section>

<style lang="scss">

</style>