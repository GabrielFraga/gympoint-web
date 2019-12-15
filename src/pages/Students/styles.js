import styled from 'styled-components';
import { darken } from 'polished';

// cor principal #ee4d64

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: none !important;
`;

export const Button = styled.button`
  background: #ee4d64;
  color: #fff;

  &:hover {
    background: ${darken(0.03, '#ee4d64')};
  }

  span {
    margin-left: 10px;
  }
`;

export const Search = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  align-items: center;
  padding: 5px;

  input {
    display: block;
    height: 100%;
    margin-left: 15px;
    border: none;
  }
`;
