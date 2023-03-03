import { useContext } from 'react';
import {
  AiFillCloseCircle as Error,
  AiFillExclamationCircle as Info,
  AiFillCheckCircle as Success,
  AiFillWarning as Warning,
} from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

import { AlertContext } from '/src/contexts/alert';

export const Alert = ({ type }) => {
  const { alert, setAlert } = useContext(AlertContext);

  const level = {
    error: { color: 'bg-red-400', icon: Error },
    warning: { color: 'bg-yellow-400', icon: Warning },
    success: { color: 'bg-green-400', icon: Success },
    info: { color: 'bg-blue-400', icon: Info },
  };

  const { color, icon: Icon } = level[type];

  return (
    <div
      className={`absolute flex w-full flex-row items-center gap-2 rounded-2xl p-4 ${
        alert !== '' ? color : 'hidden'
      }`}
      data-cy="alert"
    >
      <Icon className="h-6 w-6" />
      <span className="grow">{alert}</span>
      <MdClose
        className="h-6 w-6 cursor-pointer rounded-full focus:outline-none focus:ring-1 focus:ring-black"
        tabIndex={0}
        onClick={() => {
          setAlert('');
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            setAlert('');
          }
        }}
      />
    </div>
  );
};
