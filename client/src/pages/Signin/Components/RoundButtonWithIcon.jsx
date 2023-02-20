// import classNames from 'classnames';

export const RoundButtonWithIcon = ({icon: Icon, textColor, name, onClick}) => {
  return (
      <button onClick={onClick} aria-label={name} className="flex items-center border rounded-full border-slate p-2 hover:shadow-inner outline-slate-300 focus:shadow-inner">
        <Icon className={`h-6 w-6 ${textColor}`} />
      </button>
  );
};
