interface InputFieldProps {
  id: string,
  name: string,
  label: string,
  type?: string,
  placeholder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({id, name,label, type='text', placeholder, value, onChange}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label 
        htmlFor={id}
        className='font-medium text-gray-900'
       >
        {label}
      </label>
      <input
        className="input input-bordered w-full"
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
