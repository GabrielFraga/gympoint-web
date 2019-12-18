import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  background: #f5f5f5;
  box-shadow: 0 0 0 1px #e1e8ef;
`;

export const Content = styled.div`
  header {
    margin-top: 40px;
    justify-content: space-between;

    h1 {
      color: #555;
    }

    > div {
      display: flex;
      justify-content: space-between;

      button {
        margin: 0 10px;
      }
    }

    button {
      border: 0;
      border-radius: 6px;
      overflow: hidden;

      font-weight: bold;
      padding: 11px;

      display: flex;
      transition: background 0.2s;

      justify-content: space-between;
    }
  }

  > div {
    background: #fff;
    margin-top: 25px;
    border-radius: 6px;

    padding: 5px;
    display: flex;
    flex-direction: column;
  }

  table {
    width: 100%;
    text-align: left;

    td,
    th {
      padding: 20px 60px;
      font-size: 16px;
    }

    th {
      color: #555;
    }

    td {
      color: #666;

      a {
        color: #7ba4f2;
      }
    }
  }

  input {
    &::placeholder {
      color: #aaa;
    }
  }
`;
