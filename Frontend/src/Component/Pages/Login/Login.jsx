import React, { useContext } from 'react'
import app from '../../Firebase/firebase.config';
import { AuthContext } from '../../Provaider/AuthProvaiders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  useTitle from '../../hooks/useTitle'
import { FcGoogle } from "react-icons/fc";

const Login =() => {
  
    const {signIn, signWithGoogle}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    useTitle("Login")
    const form =location.state?.from?.pathname || '/';

     const handleLogin=(event)=>{
        event.preventDefault();
        const from=event.target;
        const email=from.email.value;
        const password=from.password.value;
        console.log(email, password);

      signIn(email, password)
      .then(result=>{
        const sineddUser=result.user;
        console.log(sineddUser);
        from.reset()
        navigate(form, {replace:true})
      })
      .catch(error=>{
        console.log(error);
      })

  }

  const handleGogleSignIn=()=>{
        signWithGoogle()
        .then(result=>{
        const logedGogle=result.user
        console.log(logedGogle);
        navigate(form, {replace:true})
      })
      .catch(error=>{
      console.log(error)
     })
   }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 lg:px-[100px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                  <span className="label-text">Password</span>
                </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <button className="btn btn-active btn-link"> Forget Password</button>
                    </label>
                </div>
                <div className="form-control mt-2">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-6">
                  <button onClick={handleGogleSignIn} className="btn btn-primary"><FcGoogle />  Google Login</button>
                </div>
              </form>
                <Link to="/register"><button className="btn pl-8 btn-active btn-link">Register Now </button></Link>

           </div>
        </div>
      </div>
    </div>
  )
}

export default Login;