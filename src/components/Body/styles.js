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
    margin-top: 20px;

    h1 {
      color: #555;
    }

    button {
      height: 39px;
    }
  }

  div {
    background: #fff;
    margin-top: 25px;
    min-width: 500px;
    border-radius: 6px;

    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  table {
    width: 100%;
    text-align: left;

    td,
    th {
      padding: 20px;
      font-size: 16px;
    }

    th {
      color: #555;
    }

    td {
      color: #666;

      a {
        color: #71c;
      }
    }
  }
`;
