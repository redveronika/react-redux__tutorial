export const getTodos = async () => {
    const res = await fetch('http://localhost:8080/todos');
    return res.json();
};

export const createTodo = async (name) => {
    const res = await fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, isCompleted: false})
    });
    return res.json();
};