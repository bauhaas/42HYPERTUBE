import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { useState } from 'react';
import { BsCheck as CheckIcon, BsX as CloseIcon } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { isEmail, isStrongPassword } from 'validator';

import { Toggle } from '../../components/Toggle';
import { Button } from '../../components/ui/Button';
import { FormField } from '../Signin/Components/FormField';

const DialogDemo = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Edit profile</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0" />
        <Dialog.Content className="w-90vw  max-w-450px max-h-85vh p-25 fixed top-1/2 left-1/2 flex min-w-[50%] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-lg bg-slate-200 p-4">
          <div className="flex justify-between">
            <Dialog.Title className="textl-lg pb-2 font-bold">
              Edit profile
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="" aria-label="Close">
                <CloseIcon className="h-6 w-6" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="pb-4 text-sm">
            This is a testing modal.
          </Dialog.Description>
          <Dialog.Close asChild className="self-end">
            <Button variant="success">Confirm</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

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
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users', {
        withCredentials: true,
      });
      console.log(response);
      const users = response.data;
      return users;
    } catch (error) {
      console.error(error);
      return null;
    }
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
          console.log(response);
          setUsers(response);
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
      <div className="min-h-screen w-full">
        <div className="flex min-h-[inherit]">
          <div className="w-1/2 ">
            <form className="m-2 flex flex-col gap-2" onSubmit={handleSubmit}>
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
                className="rounded-md bg-blue-500 p-1 text-white outline-blue-600"
              >
                Sign in
              </button>
            </form>

            <button
              className="m-1 rounded-md bg-blue-500 p-1 text-white outline-blue-600"
              onClick={getUsers}
            >
              GET USERS
            </button>
            {/* <input type="checkbox" className="toggle bg-red-500 text-green-400" /> */}
            <Toggle />
            <Link
              to="/"
              data-cy="link"
              className="absolute bottom-0 m-2 rounded-lg bg-blue-500 p-2"
            >
              go to signin
            </Link>
            <DialogDemo />
          </div>
          <div className="w-1/2 bg-red-500">
            <div className="flex flex-col gap-4" data-cy="users-map">
              {users &&
                users.map((user, index) => (
                  <div
                    key={index}
                    className="mx-2 w-1/2 items-center rounded-lg bg-blue-500 p-1"
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
