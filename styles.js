import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
`;

export const WelcomeText = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SignOutButton = styled(Button)`
  background-color: red;
`;

export const UserPhoto = styled.img`
  width: 100px;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  margin: 10px;
`;
