// import classNames from 'classnames';

export const RoundButtonWithIcon = ({
  icon: Icon,
  textColor,
  name,
  onClick,
  datacy,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={name}
      data-cy={datacy}
      className="border-slate flex items-center rounded-full border p-2 outline-slate-300 hover:shadow-inner focus:shadow-inner"
    >
      <Icon className={`h-6 w-6 ${textColor}`} />
    </button>
  );
};
