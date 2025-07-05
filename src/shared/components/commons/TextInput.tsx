import { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

function TextInput({
  label,
  error,
  helperText,
  className = '',
  ...props
}: TextInputProps) {
  return (
    <div className='w-full'>
      {label && (
        <label
          htmlFor={props.id}
          className='mb-1 block text-sm font-medium text-gray-700'
        >
          {label}
        </label>
      )}
      <input
        aria-label={label || props.placeholder}
        className={`
          block w-full rounded-md bg-white px-3 py-1.5 
          text-base text-gray-900 
          outline-1 -outline-offset-1 outline-gray-300 
          placeholder:text-gray-400 
          focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 
          sm:text-sm/6
          disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
          ${error ? 'outline-red-500 focus:outline-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
      {helperText && !error && (
        <p className='mt-1 text-sm text-gray-500'>{helperText}</p>
      )}
    </div>
  );
}

export default TextInput;
