import { auth, provider } from "../firebase/FirebaseConfig";
//Girish etmek ucun gerekli ozel funksiya
import { signInWithPopup } from "firebase/auth";

const Auth = ({ setIsAuth }) => {
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                localStorage.setItem("token", res.user.refreshToken);
                setIsAuth(true);
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="auth">
            <h1>Chat Room</h1>
            <p>Login to continue.. </p>
            <button onClick={signIn}>Log in with Google</button>
        </div>
    )
}

export default Auth