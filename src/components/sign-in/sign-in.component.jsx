import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../sign-up/sign-up.component'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page </h1>
            <button onClick={logGoogleUser}>Log In With Google</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn