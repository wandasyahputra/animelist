import React, { ChangeEvent } from 'react'
import { css } from '@emotion/css'
import { backgroundColor, textColor } from '../../assets/var'

interface InputInterface {
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
}

function Input({
  placeholder,
  value,
  onChange
}:InputInterface):React.ReactElement<InputInterface> {
  const inputStyle = css`
    padding: 10px;
    border: solid 1px rgb(70, 70, 70);
    border-radius: 5px;
    background: ${backgroundColor};
    color: ${textColor};
    outline: none !important;
    display: flex;
    margin-bottom: 10px;
  `
  return (
    <input className={inputStyle}
      placeholder={placeholder}
      value={value}
      onChange={(e:ChangeEvent<HTMLInputElement>) =>onChange(e.target.value) }
    />
  )
}
export default Input