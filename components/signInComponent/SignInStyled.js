import styled from "@emotion/styled";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 100%;
`;

export const SeparatorContainer = styled.p`
  width: 100%;
  text-align: center;
`;

export const SocialButton = styled.div`
  width: 70%;
  text-align: center;
  display: flex;
  color: white;
  background: ${props => props.backgroundColor};
  height: 50px;
  border-radius: 0.8em;
  border-color: ${props => props.backgroundColor};
  margin-bottom: 6px;
`;

export const IconContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
`;

export const SocialTextContainer = styled.a`
  color: white;
  display: block;
  width: 85%;
  height: 100%;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
