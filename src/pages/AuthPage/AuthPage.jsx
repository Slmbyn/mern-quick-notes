import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
// import SignUp from "../../utilities/users-service"

export default function AuthPage({ setUser }){
    return(
        <main>
            <h1>AuthPage</h1>
            <SignUpForm />
            <LoginForm setUser={setUser} />
        </main>
    )
}