const getTodo = async () => {
    try{
        const response = await fetch('http://localhost:8000/todos');
        const result = await response.json();

        return result;
    } catch(err) {
        throw new Error('error getting data');
    }
}


const postTodo = async (newTodo) => {
    try{
        const response = await fetch('http://localhost:8000/todos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        });
        const result = await response.json();

        return result;
    } catch(err) {
        throw new Error('error posting data');
    }
}

const updateTodo = async (id, putTodo) => {
    try{
        await fetch(`http://localhost:8000/todos/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(putTodo)
        });
      
    } catch(err) {
        throw new Error('error updating data');
    }
}

const deleteTodo = async (id) => {
    try{
        await fetch(`http://localhost:8000/todos/${id}`,{
            method: 'DELETE',
        });
        
    } catch(err) {
        throw new Error('error deleting data');
    }
}

export {
    getTodo,
    postTodo,
    updateTodo,
    deleteTodo
}