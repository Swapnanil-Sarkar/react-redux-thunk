import axios from 'axios';

const fetchDataAction = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => dispatch({
                type: 'FETCH_DATA',
                payload: response
            }))
    }
}

export default fetchDataAction;
