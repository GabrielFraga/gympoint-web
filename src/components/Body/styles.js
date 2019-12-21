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

    font-size: 16px;

    td,
    th {
      padding: 20px 60px;
    }

    th {
      color: #555;
    }

    tbody {
      tr {
        border-bottom: 1px solid #ccc;
        margin: 0 10px;

        &:last-of-type {
          border: none;
        }
      }
    }

    td {
      color: #666;

      a {
        color: #7ba4f2;
      }
      button {
        color: #e77575;
        background: none;
        border: none;
        font-size: 16px;
      }
    }
  }

  input {
    &::placeholder {
      color: #aaa;
    }
  }
`;
