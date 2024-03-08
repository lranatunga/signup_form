import { GoogleLogin } from '@react-oauth/google';

function SignupForm() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <h2>Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
export default SignupForm;