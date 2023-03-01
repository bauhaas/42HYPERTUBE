import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { isEmail, isStrongPassword } from 'validator';

import { FormField } from '../Signin/Components/FormField';

export const Test = () => {
  const initialErrors = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState(initialErrors);
  const [users, setUsers] = useState([
    // {
    //   "id": 1,
    //   "firstName": "John",
    //   "lastName": "Doe"
    // },
    // {
    //   "id": 2,
    //   "firstName": "Jane",
    //   "lastName": "Smith"
    // },
    // {
    //   "id": 3,
    //   "firstName": "Bob",
    //   "lastName": "Johnson"
    // }
  ]);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      console.log(response);
      const users = response.data;
      return users;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const tt = (t) => {
    setUsers(t);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data and update errors
    const newErrors = { ...initialErrors };

    if (!isEmail(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    //8 characters, 1 uppercase letter, 1 digit, and 1 special character
    if (!isStrongPassword(formData.password)) {
      newErrors.password = '8min, 1upper, 1digit, 1 special';
    }

    setErrors(newErrors);
    if (Object.values(newErrors).every((error) => error === '')) {
      getUsers()
        .then((response) => {
          console.log(response.data, 'lol');
          setUsers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log('error');
    }
  };

  const handleBlur = (field) => {
    if (field === 'email' && isEmail(formData.email)) {
      setErrors({ ...errors, email: '' });
    } else if (field === 'password' && isStrongPassword(formData.password)) {
      setErrors({ ...errors, password: '' });
    }
  };

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="flex min-h-[inherit]">
          <div className=" w-1/2">
            <form className="flex flex-col gap-2 m-2" onSubmit={handleSubmit}>
              <FormField
                label="Email address"
                type="text"
                placeholder="john.doe@gmail.com"
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
              >
                Sign in
              </button>
            </form>
            <Link
              to="/signin"
              data-cy="link"
              className="bg-blue-500 rounded-lg p-2 m-2 absolute bottom-0"
            >
              go to signin
            </Link>
          </div>
          <div className="bg-red-500 w-1/2">
            <div className="flex flex-col gap-4">
              {users &&
                users.map((user, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 mx-2 items-center rounded-lg p-1 w-1/2"
                  >
                    <p>{user.id}</p>
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
