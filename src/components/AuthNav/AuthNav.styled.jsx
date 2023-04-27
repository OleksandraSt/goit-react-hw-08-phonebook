import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthHeader = styled.header`
  display: flex;
  justify-content: center;
`;
export const AuthNavigate = styled(NavLink)`
  margin-right: 30px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;
  &.active {
    color: white;
    background: #4ec6ef;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background: #4ec6ef;
  }
`;