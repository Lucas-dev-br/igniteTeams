import { Container, Message } from "./style";

type Props = {
  message: string;
};

export function ListEmpety({ message }: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
