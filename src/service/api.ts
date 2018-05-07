import { Http } from './http';
interface User {
    id: number;
    username: string;
    password: string;
    sex: number;

}
export class ClientApi {
    clientApi = {
        /**
         * method post
         * 
         * body:{username:string,password:string}
         * 
         * response: success  =>User
         * 
         * response: error =>string
         */
        signin: '/signin',
        signup: '/signup'
    }


    private http = new Http();

    private signin(username, password): Promise<User> {
        return this.http.Post(this.clientApi.signin, { username, password })
    }

}
