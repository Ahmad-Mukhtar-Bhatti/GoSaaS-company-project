import "./login.css";
// import { Link } from "react-router-dom";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";


import img from "../images/gosaas.jpg";

interface Props2 {
  title?: string;
  placeholder?: string;
  onChange?: () => void;
  onClick?: () => void;
}

const Login = () => {

  // const navigate = useNavigate();
  

  const handleClick = async (username: string, password: string) => {
    console.log("The form was submitted with the following data:");
    console.log({ username, password });

  };

  return (
    <>
      {/* <head>
        <link rel="icon" href={img} />
      </head> */}
      <body className="li-body">


        <div id="loginform">
          <br></br>
          <img src={img} alt="PlanIt Pro logo" />
          <FormHeader title="login to continue" />
          <Form onClick={handleClick} />
          {/* <OtherMethods /> */}
          {/* <p> Forgot Password?</p>
          <p>
            {" "}
            Don't have an account? 
            <Link to="/signup">Sign Up</Link>
          </p> */}
        </div>
      </body>
    </>
  );
};

export default Login;

const FormHeader = (props: Props2) => (
  <h1 id="login-headerTitle">{props.title}</h1>
);

const Form = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <span>
      <FormInput
        description="Username"
        placeholder="Enter your username"
        type="text"
        value={username}
        onChange={handleUsernameChange}
      />
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <FormButton
        title="Log in"
        onClick={() => props.onClick(username, password)}
      />
    </span>
  );
};

const FormButton = (props: Props2) => (
  <div id="button" className="row">
    <button onClick={()=>{props.onClick; alert("Log-in not implemented!!");}}>{props.title}</button>
  </div>
);

const FormInput = (props: any) => (
  <div className="row">
    <label> {props.description}</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);
