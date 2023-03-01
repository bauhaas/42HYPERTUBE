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
        <span className={`italic text-sm my-auto text-red-500`}>{error}</span>
      </div>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`p-1 rounded-md outline-blue-400 border border-slate-300 ${
          error ? 'border-red-500' : ''
        }`}
        autoComplete="current-password"
        data-cy={datacy}
        required
      />
    </label>
  );
};
