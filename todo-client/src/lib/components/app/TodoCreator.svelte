<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import type TodoItem from "../../scripts/interfaces/TodoItem";

    export let creatorMode: 'create' | 'edit' = 'create';

    const dispatch = createEventDispatcher();

    let deadlineToggleText:string = 'Enable Deadline';
    let deadlineEnabled:boolean = false;

    function toggleDeadline(){
        deadlineEnabled = !deadlineEnabled;
        deadlineEnabled? deadlineToggleText = 'Disable Deadline': deadlineToggleText = 'Enable Deadline';
    }

    function creatorSubmit(event){
        const formData = new FormData(event.target);

        switch(creatorMode){
            case 'create':
                const id:string =`todo-item-test`;
                const text:string = formData.get('todo-text-input').toString();
                const priority: 'low' | 'medium' | 'high' = (formData.get('todo-priority').toString() as 'low' | 'medium' | 'high');
                const deadline:Date | null = deadlineEnabled? new Date(formData.get('todo-deadline').toString().replaceAll('-', '/')): null;

                const todoItem:TodoItem = {
                    id,        
                    text,
                    priority,
                    deadline,
                    creator: 'test'
                }

                dispatch('modify-todo', {message: 'todo-created', data: todoItem});
                break;
            case 'edit':
                break;
        }
    }
</script>

<section class="todo-creator">
    <!-- Create Mode -->
    {#if creatorMode == 'create'}
        <h2 class="todo-creator-header">Create Todo</h2>

        <form on:submit|preventDefault={creatorSubmit}>
            <input type="text" name="todo-text-input" placeholder="What do you need to do?" required>
            <select name="todo-priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <div class="todo-creator-deadline-container">
                <button on:click|preventDefault={toggleDeadline}>{deadlineToggleText}</button>
                {#if deadlineEnabled}
                    <input type="date" name="todo-deadline">
                {/if}
            </div>
            <button type="submit">Create Todo</button>
        </form>
    
    <!-- Edit Mode -->
    {:else if creatorMode == 'edit'}
        <h2 class="todo-creator-header">Edit Todo</h2>
        <form on:submit|preventDefault={creatorSubmit}>
        </form>
    {/if}
</section>

<style lang="scss">
    .todo-creator{
        margin: 1rem 0;
        &-header{
            text-align: center;
            text-decoration: underline;
            margin-bottom: 0.6rem;
        }
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.4rem;
        }
    }
</style>