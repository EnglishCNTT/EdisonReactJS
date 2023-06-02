import axios from 'axios';

const todoService = {
    getTodoList : async params => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {params});

        return res;
    },
};

export default todoService;
