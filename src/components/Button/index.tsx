import { TouchableOpacityProps } from "react-native";

import { Container, Title, ButtonTypeStyleProps } from "./style";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
      <Title>{title}</Title>
    </Container>
  );
}
