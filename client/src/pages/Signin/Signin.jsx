
import { SignLayout } from "@internals/layouts";
import { useContext, useRef, useState } from "react";
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FcGoogle as GoogleIcon} from 'react-icons/fc'
import { FaFacebook as FacebookIcon } from 'react-icons/fa'
import { RoundButtonWithIcon } from "./Components/RoundButtonWithIcon";
import { Link } from "react-router-dom";
import { FormField } from "./Components/FormField";
import { FortyTwoIcon } from "../../assets/FortyTwoIcon";
import axios from "axios";
import { AlertContext } from "../../contexts/alert";
import { Alert } from "./Components/Alert";
import { API_BASE_URL } from '/src/api/api';

export const Signin = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted login: ${login} and password: ${password}`);
  };

  const ThirdPartyAuthentication = (method) => {
    console.log(method)

    axios.get(`${API_BASE_URL}/auth/${method}`, {})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        setAlert(error.message);
      });
  };

  // make a layout to add Alert on everypage if it's needed
  return (
    <>
        <Alert type="error"/>
        <div className="w-full">
          <div className="flex flex-col">
            <img className="w-6 h-6" src="/src/assets/42logo.svg" alt="42 logo"/>
            <div>Hypertube</div>
            <div>Unlimited streaming, endless entertainment</div>
          </div>
          <div className="bg-white rounded-lg h-fit w-fit shadow-2xl m-10 flex flex-col p-10">
            <h1 className="font-bold text-2xl">Sign in</h1>
            <p>blablabla</p>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <FormField
                label="Email address"
                type="text"
                placeholder="john.doe@gmail.com"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />
              <FormField
                label="Password"
                type="password"
                placeholder="***********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button type="submit" className="text-white p-1 rounded-md bg-blue-500 outline-blue-600">
                Sign in
              </button>
            </form>

            <Link to="/" className="self-end text-blue-500 focus:outline-none focus:underline focus:decoration-blue-500 focus:decoration-2 focus:underline-offset-4 hover:underline-offset-4 hover:decoration-blue-500 hover:underline hover:decoration-2 cursor-pointer">
              Forgot your password?
            </Link>

            <div className="divider">OR</div>
            <div className="flex justify-center gap-2 mb-10">
              <RoundButtonWithIcon icon={GoogleIcon}    name="Google login"   onClick={()=> ThirdPartyAuthentication('google')} />
              <RoundButtonWithIcon icon={GithubIcon}    name="Github login"   onClick={()=> ThirdPartyAuthentication('github')} />
              <RoundButtonWithIcon icon={FacebookIcon}  name="Facebook login" onClick={()=> ThirdPartyAuthentication('facebook')}  textColor="text-[#3b5998]"/>
              <RoundButtonWithIcon icon={FortyTwoIcon}  name="42 login"       onClick={()=> ThirdPartyAuthentication('42')}/>
            </div>

            <p className="self-end">
              Not registered ?{' '}
              <Link to="/" className=" text-blue-500 focus:outline-none focus:underline focus:decoration-blue-500 focus:decoration-2 focus:underline-offset-4 hover:underline-offset-4 hover:decoration-blue-500 hover:underline hover:decoration-2 cursor-pointer">
                Create an account
              </Link>
            </p>

          </div>
        </div>
    </>
  );
}