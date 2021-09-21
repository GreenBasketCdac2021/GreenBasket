
const USER_API_BASE_URL = 'http://localhost:8080/user/login';

class UserServiceFetch{
    getUser(){
        return fetch(USER_API_BASE_URL).then((res=>res.json()));
    }
}

export default new UserServiceFetch();