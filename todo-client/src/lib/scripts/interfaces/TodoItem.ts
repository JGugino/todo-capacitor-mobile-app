export default interface TodoItem{
    id: string,
    priority: 'low' | 'medium' | 'high',
    deadline: 'none' | Date;
    creator: string,
    text: string
}