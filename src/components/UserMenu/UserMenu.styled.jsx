import styled from '@emotion/styled';

export const UserMenuHeader = styled.header`
  display: flex;
  justify-content: center;
`;

export const UserBtn = styled.button`
  padding: 8px 16px;
  font-weight: 600;
  font-size: 24px;
  font-family: inherit;
  color: #2a2a2a;
  text-decoration: none;
  background-color: transparent;
  border: none;
  border-radius: 3px;
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
export const UserText = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #2a2a2a;
`;
export const UserName = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #4ec6ef;
  margin-right: 25px;
`;