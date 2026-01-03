import { Pressable, TextInput, View } from "react-native"; 
import { Type } from "../../Constants/Type";
import { useState } from "react";
import { EyeClosed } from "../../assets/EyeClosed";
import { EyeOpened } from "../../assets/EyeOpened";
import { styles } from "../../Styles/Styles";
import { UserIcon } from "../../assets/UserIcon";

export function Input(props: Type.Input & {isPassword: Boolean}) {
    const [isPwdVisible, setIsPwdVisible] = useState<Boolean>(true);
  return (
    <View>
        <TextInput {...props} secureTextEntry={props.isPassword && !isPwdVisible}/>
        {!props.isPassword ? <View style={styles.eyeIcon}>
            <UserIcon />
            </View> : null}
        {props.isPassword && <Pressable style={styles.eyeIcon} onPress={() => {setIsPwdVisible(!isPwdVisible)}}>
            {/* Здесь можно добавить иконку для показа/скрытия пароля */}
            {isPwdVisible ? <EyeOpened /> : <EyeClosed />}
        </Pressable>}
    </View>
  )
}