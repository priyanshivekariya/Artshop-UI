import { useState } from 'react';
import './Login.css';
function Login() {
const [email, setEmail] = useState('');
const [check, setCheck] = useState(false);
const [pass, setPass] = useState('');
const handlesubmit = (event) => {
event.preventDefault();
console.log("Email:", email);
console.log("Password:", pass);
console.log("Accept terms:", check);
setEmail('');
setCheck('');
setPass('');
}
return (
<>
<div className='parent'>
<div className='child'>
<h1> <center>LOGIN FORM </center></h1>
<form onSubmit={handlesubmit}>
<label>Email : <input type='Email' placeholder='xyz@gmail.com' value={email}
onChange={(e) => setEmail(e.target.value)}className='field'/></label>
<br/><br/>
<label>Password : <input type='password' placeholder='Enter Your password'
value={pass} onChange={(e) => setPass(e.target.value)}className='field'/></label>
<br/><br/>
<label><input type='checkbox' checked={check} onChange={(e) =>
setCheck(e.target.checked)}/>I Accept The Terms And Conditions</label>
<br/><br/>
<button type='submit' className='btn'>submit</button>
</form>
</div>
</div>
</>
);
}
export default Login;