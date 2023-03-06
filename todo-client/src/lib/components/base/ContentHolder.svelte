<script lang="ts">
    import { StateManager } from '../../scripts/util/state_manager';
    import type AppState from "../../scripts/interfaces/AppState";

    import TodoCreator from '../app/TodoCreator.svelte';

    const appStates = [
        { stateID: 'auth' },
        { stateID: 'home' },
        { stateID: 'modify' },
        { stateID: 'settings' },
    ] satisfies AppState[];

    const stateManager = new StateManager(appStates, 2);

</script>

<section class="content-holder">
    {#if stateManager.currentState == appStates[0]}
        <h1>Auth</h1>
    {:else if stateManager.currentState == appStates[1]}
        <h1>Home</h1>
    {:else if stateManager.currentState == appStates[2]}
        <h1>Modify</h1>
        <TodoCreator />
    {:else if stateManager.currentState == appStates[3]}
        <h1>Settings</h1>
    {/if}
</section>

<style lang="scss">

</style>