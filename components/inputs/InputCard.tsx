import React from 'react'
import { IconTypes } from './BaseInputProps'

export interface InputCardProps {
  title: string
  icon?: IconTypes
  required: boolean
  hasValue: boolean
}

function parseIcon(iconType?: IconTypes) {
  switch (iconType) {
    case 'cone':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
          className="my-0.5 mr-1 inline h-6 w-6 text-amber-600"
        >
          <path
            fill="currentColor"
            d="M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125L7.03 1.88z"
          />
        </svg>
      )
    case 'cube':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="my-0.5 mr-1 inline h-6 w-6 text-purple-500"
        >
          <path
            fill="currentColor"
            d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03ZM128 32l80.34 44L128 120L47.66 76ZM40 90l80 43.78v85.79l-80-43.75Zm96 129.57v-85.75L216 90v85.78Z"
          />
        </svg>
      )
    default:
      return null
  }
}

export default function InputCard(
  props: React.PropsWithChildren<InputCardProps>
) {
  return (
    <div className="mx-1 rounded bg-white leading-tight shadow-sm dark:bg-gray-500">
      <div className="flex flex-row justify-between rounded-t bg-gray-300">
        <p className="py-0.5 pl-2 text-left text-xs font-bold uppercase dark:text-black">
          {parseIcon(props.icon)}
          {props.title}
        </p>
        {props.required && !props.hasValue && (
          <p className="mr-1 h-4 w-4 font-rhr text-red-rhr">!!</p>
        )}
      </div>
      <div>{props.children}</div>
    </div>
  )
}
