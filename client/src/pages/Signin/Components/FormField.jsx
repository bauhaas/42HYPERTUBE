export const FormField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  datacy,
  error,
}) => {
  return (
    <label className="flex flex-col">
      <div className="flex">
        <span className={`font-bold ${error ? 'text-red-500' : ''}`}>
          {label}
        </span>
        <span>&nbsp;</span>
        <span className={`my-auto text-sm italic text-red-500`}>{error}</span>
      </div>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`rounded-md border border-slate-300 p-1 outline-blue-400 ${
          error ? 'border-red-500' : ''
        }`}
        autoComplete="current-password"
        data-cy={datacy}
        required
      />
    </label>
  );
};
