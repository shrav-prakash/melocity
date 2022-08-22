function LoginForm() {
    return (
        <div>
            <p>Enter name: </p>
            <input type="text" placeholder="abc"></input>
            <p>Enter password: </p>
            <input type="password" required></input>
            <p>Enter email: </p>
            <input type="email" placeholder="abc@xyz.com"></input>
        </div>
    )
}

export default LoginForm;