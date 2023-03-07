export default interface TodoItem{
    id: string,
    priority: 'low' | 'medium' | 'high',
    deadline?: Date | null;
    creator: string,
    text: string
}