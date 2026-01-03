import { Button, TextInput } from 'react-native';

export namespace Type {
  export type Input = React.ComponentProps<typeof TextInput>;
  export type Button = React.ComponentProps<typeof Button>;
}