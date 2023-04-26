import styled from '@emotion/styled';

export const UserMenuHeader = styled.header`
  display: flex;
  justify-content: center;
`;

export const UserBtn = styled.button`
  padding: 8px 16px;
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor:pointer;
  &.active {
    color: white;
    background: rgb(38, 38, 39);
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background: rgb(38, 38, 39);
  }
`;
export const UserText = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: black;
`;
export const UserName = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #4ec6ef;
  text-transform: uppercase;
  margin-right: 25px;
`;