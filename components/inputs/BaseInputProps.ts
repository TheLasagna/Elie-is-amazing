export default interface BaseInputProps extends InputProps {
  section: string
  onChange: (value: any) => void
}
export interface Config {
  title: string
  version: number
  page_title: string
  sections: SectionProps[]
}

export interface SectionProps {
  name: string
  preserveDataOnReset?: boolean
  fields: InputProps[]
}

export interface InputProps {
  title: string
  icon?: IconTypes
  type: InputTypes
  required: boolean
  // A shorthand code for this input
  code: string
  disabled?: boolean
  value?: any
  choices?: Record<string, string>
  defaultValue?: any
  min?: number
  max?: number
}

export type InputTypes =
  | 'text'
  | 'number'
  | 'boolean'
  | 'range'
  | 'select'
  | 'counter'
  | 'image'

export type IconTypes = 'cube' | 'cone'
