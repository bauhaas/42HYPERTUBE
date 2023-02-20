export const FormField = ({ label, type, placeholder, value, onChange }) => {

  return (
    <label className="flex flex-col">
      <span className="font-bold">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-1 rounded-md outline-blue-400 border border-slate-300"
        autoComplete="current-password"
      />
    </label>
  );
};