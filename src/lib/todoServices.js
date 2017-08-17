const baseUrl = process.env.REACT_APP_BASE_URL;
export const getTodos = async () => {
    const res = await fetch(baseUrl);
    return res.json();
};

export const createTodo = async (name) => {
    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, isCompleted: false})
    });
    return res.json();
};

export const updateTodo = async (todo) => {
    const res = await fetch(`${baseUrl}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    return res.json();
};

export const destroyTodo = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};