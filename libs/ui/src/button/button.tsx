import styled from '@emotion/styled';

export interface ButtonProps {
  name: string;
}

const StyledButton = styled.div`
  color: pink;
`;

export const Button = (props: ButtonProps) => {
  return <StyledButton>{props.name}</StyledButton>;
};
