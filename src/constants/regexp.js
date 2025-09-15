let emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

let userName = /^[a-zA-Z0-9_]{3,16}$/;

let passwordRegexp = /^(?=.*[a-zA-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,20}$/;



let regexpObj = {
    emailRegexp,
    userName,
    passwordRegexp
}
export default regexpObj;
