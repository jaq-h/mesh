import Headers from "./Headers";
import Routes from "./Routes";

export default class Auth{
  static login(code){
    return fetch("http://mesh-meida.herokuapp.com/api/login",{
      method: "POST",
      headers: Headers,
      body: JSON.stringify({code})
    }).then(res => res.json());
  }
}
