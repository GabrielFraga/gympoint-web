import styled from 'styled-components';
import { darken } from 'polished';

// cor principal #ee4d64

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: none !important;
`;

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

export const Search = styled.form`
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

export const Form = styled.form`
  display: flex;
  background: #fff;
  flex-direction: column;

  padding: 40px;

  label {
    font-weight: bold;
    margin-top: 20px;
    color: #555;
  }

  input {
    display: block;
    width: 100%;
    height: 40px;
    border: 1px solid #ccc7;
    border-radius: 4px;

    font-size: 16px;
    padding: 10px;
    color: #444;
  }
`;
