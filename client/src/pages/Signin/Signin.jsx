import axios from 'axios';
import { useContext, useRef, useState } from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FaFacebook as FacebookIcon } from 'react-icons/fa';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { isEmail, isStrongPassword } from 'validator';

import { SignLayout } from '@internals/layouts';

import { FortyTwoIcon } from '../../assets/FortyTwoIcon';
import { AlertContext } from '../../contexts/alert';
import { Alert } from './Components/Alert';
import { FormField } from './Components/FormField';
import { RoundButtonWithIcon } from './Components/RoundButtonWithIcon';
import { API_BASE_URL } from '/src/api/api';

export const Signin = () => {
  const initialErrors = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState(initialErrors);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data and update errors
    const newErrors = { ...initialErrors };

    if (!isEmail(formData.email)) {
      newErrors.email = 'is invalid';
    }

    //8 characters, 1 uppercase letter, 1 digit, and 1 special character
    if (!isStrongPassword(formData.password)) {
      newErrors.password = '8min, 1upper, 1digit, 1 special';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      console.log('no error, form is valid');
    } else {
      console.log('error, form is invalid');
    }
  };

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setAlert } = useContext(AlertContext);

  const navigate = useNavigate();
  const localAuthentication = () => {
    axios
      .post(`${API_BASE_URL}/auth/login`, {
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        console.log(response);
        navigate('/home');
      })
      .catch((error) => {
        setAlert(error.message);
      });
  };

  const handleBlur = (field) => {
    if (field === 'email' && isEmail(formData.email)) {
      setErrors({ ...errors, email: '' });
    } else if (field === 'password' && isStrongPassword(formData.password)) {
      setErrors({ ...errors, password: '' });
    }
  };

  const ThirdPartyAuthentication = (method) => {
    console.log(method);
    window.location.href = `${API_BASE_URL}/auth/${method}`;
  };

  // make a layout to add Alert on everypage if it's needed
  return (
    <>
      <Alert type="error" />
      <div className="w-full">
        <div className="flex flex-col">
          <img className="w-6 h-6" src="/src/assets/42logo.svg" alt="42 logo" />
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
              placeholder="john.doe@example.com"
              value={formData.email}
              onBlur={() => handleBlur('email')}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              datacy="email"
              error={errors.email}
            />
            <FormField
              label="Password"
              type="password"
              placeholder="***********"
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
              onBlur={() => handleBlur('password')}
              datacy="password"
              error={errors.password}
            />
            <button
              type="submit"
              className="text-white p-1 rounded-md bg-blue-500 outline-blue-600"
              onClick={() => localAuthentication()}
            >
              Sign in
            </button>
          </form>

          <Link
            to="/"
            className="self-end text-blue-500 focus:outline-none focus:underline focus:decoration-blue-500 focus:decoration-2 focus:underline-offset-4 hover:underline-offset-4 hover:decoration-blue-500 hover:underline hover:decoration-2 cursor-pointer"
          >
            Forgot your password?
          </Link>

          <div className="divider">OR</div>
          <div className="flex justify-center gap-2 mb-10">
            <RoundButtonWithIcon
              icon={GoogleIcon}
              datacy="googleAuth"
              name="Google login"
              onClick={() => ThirdPartyAuthentication('google')}
            />
            <RoundButtonWithIcon
              icon={GithubIcon}
              datacy="githubAuth"
              name="Github login"
              onClick={() => ThirdPartyAuthentication('github')}
            />
            <RoundButtonWithIcon
              icon={FacebookIcon}
              datacy="facebookAuth"
              name="Facebook login"
              onClick={() => ThirdPartyAuthentication('facebook')}
              textColor="text-[#3b5998]"
            />
            <RoundButtonWithIcon
              icon={FortyTwoIcon}
              datacy="fortytwoAuth"
              name="42 login"
              onClick={() => ThirdPartyAuthentication('42')}
            />
          </div>

          <p className="self-end">
            Not registered ?{' '}
            <Link
              to="/"
              className=" text-blue-500 focus:outline-none focus:underline focus:decoration-blue-500 focus:decoration-2 focus:underline-offset-4 hover:underline-offset-4 hover:decoration-blue-500 hover:underline hover:decoration-2 cursor-pointer"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
