import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  height: 40px;
  margin-top: 8px;
  padding: 4px;
  background-color: #eaf7c1;
  border: 1 solid #bbb3b3;
  border-radius: 3px;
`;
export const RegisterBtn = styled.button`
  border-radius: 3px;
  height: 50px;
  margin-top: 8px;
  background: rgb(38, 38, 39);
  text-transform: uppercase;
  color: #fff;
  border: none;
  cursor:pointer;
  &.active {
    color: white;
    background: #4ec6ef;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background: #4ec6ef;
  }
`;