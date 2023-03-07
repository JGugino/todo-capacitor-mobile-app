<script lang="ts">
    import { StateManager } from '../../scripts/util/state_manager';
    import type AppState from "../../scripts/interfaces/AppState";

    import TodoCreator from '../app/TodoCreator.svelte';
    import TodoElement from '../app/TodoElement.svelte';
    import type TodoItem from '../../scripts/interfaces/TodoItem';

    const appStates = [
        { stateID: 'auth' },
        { stateID: 'home' },
        { stateID: 'modify' },
        { stateID: 'settings' },
    ] satisfies AppState[];

    const stateManager = new StateManager(appStates, 2);

    let todoCreatorMode: "create" | "edit" = "create";

    let activeTodos = [] satisfies TodoItem[]

    function modifyTodo( { detail } ){
        const todoMessage = detail.message;
        const todoInfo = detail.data;

        switch(todoMessage){
            case 'todo-created':
                activeTodos.push(todoInfo);
                stateManager.currentState = stateManager.changeState(1);
                break;
            case 'todo-modified':
                break;
        }
    }

</script>

<section class="content-holder">
    {#if stateManager.currentState == appStates[0]}
        <h1>Auth</h1>
    {:else if stateManager.currentState == appStates[1]}
        {#each activeTodos as todo}
            <TodoElement todoItem={todo} />
        {/each}
    {:else if stateManager.currentState == appStates[2]}
        <TodoCreator creatorMode={todoCreatorMode} on:modify-todo={modifyTodo} />
    {:else if stateManager.currentState == appStates[3]}
        <h1>Settings</h1>
    {/if}
</section>

<style lang="scss">
    
</style>