import React from 'react'
import BaseInputProps from './BaseInputProps'

export default function RangeInput(data: BaseInputProps) {
  const [value, setValue] = React.useState(data.defaultValue)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    data.onChange(e.target.value)
    e.preventDefault()
    setValue(e.target.value)
  }

  return (
    <div className="flex items-center justify-center gap-2 px-2">
      <input
        className="w-full py-2"
        type="range"
        min={data.min}
        max={data.max}
        step={5}
        defaultValue={data.defaultValue}
        id={data.title}
        onChange={handleChange}
      />
      <label className="my-2 mr-1 w-10 text-lg" htmlFor={data.title}>
        {value}s
      </label>
    </div>
  )
}
