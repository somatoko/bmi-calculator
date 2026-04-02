import React from 'react'

interface FormInputProps {
  name: string
  title: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: 'text' | 'password' | 'number'
}

const FormInput = ({ name, title, value, onChange, type = 'text' }: FormInputProps) => {
  return (
    <div className="input-groups">
      <span className="label">{title}</span>
      <div className="range-container">
        <input
          type={type}
          name={name}
          className="range-input"
          value={value}
          onChange={onChange}
          autoComplete="false"
        />
      </div>
    </div>
  )
}

export default FormInput
