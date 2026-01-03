import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image } from 'react-native';
import { styles } from './Styles/Styles';
import { Input } from './Shared/Input/Input';
import { Colors } from './Constants/Colors';
import { ButtonLink } from './Shared/ButtonLink/ButtonLink';
import { EyeClosed } from './assets/EyeClosed';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('./assets/favicon.png')} style={styles.logo}
        resizeMode='center'
        />
        <Text style={styles.textContainer}>Мое первое приложение</Text>
        <Input 
          style={styles.inputContainer}
          textContentType='emailAddress'
          cursorColor={Colors.caretColor}
          placeholder='Email'
          placeholderTextColor={Colors.placeholderColor}
        />
        <Input 
          style={styles.inputContainer}
          textContentType='password'
          placeholder='Password'
          placeholderTextColor={Colors.placeholderColor}
          isPassword
        />
        <Button title="Войти в приложение" onPress={() => {
          alert('Кнопка нажата');
        }} />
        <ButtonLink title='восстановить пароль'
        style={styles.buttonLink} 
        onPress={() => {
          alert('Кнопка восстановить пароль');
        }} />
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}


