export const getTodos = async () => {
    const res = await fetch('http://localhost:8080/todos');
    return res.json();
};