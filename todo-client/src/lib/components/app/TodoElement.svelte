<script lang="ts">
    import type TodoItem from "../../scripts/interfaces/TodoItem";

    export let todoItem:TodoItem;
</script>

<div class="todo-element">
    <p>{todoItem.text}</p>
</div>

<style lang="scss">

</style>