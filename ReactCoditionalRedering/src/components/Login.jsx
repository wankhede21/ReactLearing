
function Login() {
      const isLoggedIn = true;
      const isAdmin = true;
      if (isLoggedIn) {
            return (
      <>
        <h1>React Conditional Rendering</h1>
        <div>
          {isAdmin ? <h2>Welcome Admin</h2> : <h2>Welcome User</h2>}
        </div>
      
      </>
    )
      } else {
            return (  
      <>
        <h1>please Login to Continue</h1>
      
      </>
    )
      }
}
export default Login;
