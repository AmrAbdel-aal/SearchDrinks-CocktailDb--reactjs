import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  width: 60vw;
  margin: 2rem auto 3rem auto;
  padding: 15px 30px;
  form {
    padding: 20px 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    input {
      padding: 3px;
      border-radius: 6px;
      border: transparent;
      background-color: #eeeeee;
    }
    button {
      padding: 5px 15px;
      background-color: #ce375c;
      text-decoration: none;
      color: #fff;
      border-radius: 6px;
      border: transparent;
      cursor: pointer;
    }
  }
`;
export default Wrapper;
