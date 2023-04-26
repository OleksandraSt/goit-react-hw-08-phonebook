import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UserMenuNavigate = styled(NavLink)`
  margin-right: 30px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 24px;
  color: #212121;
  text-decoration: none;
  &.active {
    color: white;
    background: rgb(38, 38, 39);
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background: rgb(38, 38, 39);
  }
`;