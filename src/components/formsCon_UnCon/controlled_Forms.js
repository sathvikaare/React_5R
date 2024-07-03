import { LockClosedIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import SuccessScreen from "./success";

export default function ControlledForm() {
    const [username,setUserName]=useState("");
    const[userNameError,setUserNameError]=useState(false)
    const [password,setPassword]=useState("");
    const[passwordError,setPasswordError]=useState(false)
    const [remember,setRemember]=useState("");
    const [serverError,setServerError]=useState(false);
    const [islogin, setIsLogin]=useState(false);
    const [userDetails,setUserdetails]=useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!passwordError && !userNameError){
        asynPostCall(username,password);

    }

  };

  const asynPostCall = (email, password) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then(response=>{console.log(response);
        if(response.message){
            setServerError(response.message);
        }else{
            setUserdetails(response);
            setServerError(false);
            //user exist in database
            // alert("login success")
            setIsLogin(true)
        }
      });
  };
  const userNameValidation=(name)=>{
    let validUserName=false;
    if(name.length > 10){
        validUserName=false;
    }
    else{
        validUserName=true;
    }
    return validUserName;
  };
  const usenameHandler=(event)=>{

    const userEnteredUserName=event.target.value;
    console.log(userEnteredUserName);
     setUserName(userEnteredUserName);
    if(userNameValidation(userEnteredUserName)){
        setUserNameError(false);
    }
    else{
        setUserNameError(true);
        
    }
  };
  const passwordValidation=(password)=>{
    return password.length > 15 ? false : true;

  }
  const passwordHandler=(event)=>{
    const userEnteredPassword=event.target.value;
    setPassword(userEnteredPassword);
    console.log(userEnteredPassword)
    if(passwordValidation(userEnteredPassword)){
        setPasswordError(false)

    }
    else{
        setPasswordError(true);
    }
  }
  return (
    <>
    {islogin?(<SuccessScreen data={userDetails}/>):
    (<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        {/* <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        /> */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <a href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500">
            start your 14-day free trial
          </a>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="text"
              autoComplete="email"
              required
              value={username}
              onChange={usenameHandler}
              className="appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-t-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            {userNameError && <span style={{color:"red"}}>Invalid User name</span>}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              autoComplete="current-password"
              required
              onChange={passwordHandler}
              className="appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-b-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
            {passwordError && <span style={{color:"red"}}>Invalid password</span>}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
             value={remember}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                border-gray-300 rounded"/>
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>
        {
          serverError && <span>{serverError}</span>
        }

        <div>
          {!userNameError && (
          <button
            type="submit"
            className="group relative w-full flex justify-center
              py-2 px-4 border border-transparent text-sm font-medium
              rounded-md text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>)}
        </div>
      </form>
    </div>
  </div>)}
    </>
  );
}