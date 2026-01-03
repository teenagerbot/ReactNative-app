import { TextInput, TextInputProps } from "react-native"; 

import { Type } from "../../Constants/Type";

export function Input(props: Type.Input) {
  return (
    <TextInput {...props}/>
  )
}