import { TextStyle, StyleProp, Text } from "react-native";

type ButtonLinkProps = {
  title: string;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
};

export function ButtonLink({ title, onPress, style }: ButtonLinkProps) {
  return <Text onPress={onPress} style={style}>{title}</Text>;
}