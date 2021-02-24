import {
    request
} from "./core"
import apl from "./path"
 
const APP = {
    login(params) {
        return request(apl.METHODS.POST, apl.URL.Login, params);
    },
    smsCode(params) {
        return request(apl.METHODS.POST, apl.URL.SmsCode, params);
    },
    change(params) {
        return request(apl.METHODS.POST, apl.URL.Change, params);
    },
}
 
export default APP