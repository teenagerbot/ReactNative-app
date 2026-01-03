import { Pressable, TextInput } from "react-native"; 

import { Type } from "../../Constants/Type";
import { useState } from "react";
import { EyeClosed } from "../../assets/EyeClosed";
import { EyeOpened } from "../../assets/EyeOpened";

export function Input(props: Type.Input & {isPassword: Boolean}) {
    const [isPwdVisible, setIsPwdVisible] = useState<Boolean>(true);
  return (
    <>
        <TextInput {...props} secureTextEntry={!isPwdVisible}/>
        {props.isPassword && <Pressable>
            {/* Здесь можно добавить иконку для показа/скрытия пароля */}
            {isPwdVisible ? <EyeOpened /> : <EyeClosed />}
        </Pressable>}
    </>
  )
}