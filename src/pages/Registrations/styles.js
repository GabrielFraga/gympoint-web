import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const Content = styled.div``;

export const ConfirmButton = styled.button`
  background: #ee4d64;
  color: #fff;

  &:hover {
    background: ${darken(0.03, '#ee4d64')};
  }

  span {
    margin-left: 10px;
  }
`;
export const BackButton = styled.button`
  background: #ccc;
  color: #fff;

  &:hover {
    background: ${darken(0.03, '#ccc')};
  }

  span {
    margin-left: 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: none !important;
`;
