import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  height: 50vh;

  @media screen and (min-width: 768px) {
    height: 70vh;
  }
  form {
    width: 500px;
    background-color: #fff;
    padding: 60px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    h3 {
      text-align: center;
      margin-bottom: 20px;
      letter-spacing: 2px;
      font-size: 20px;
    }
    label {
      display: block;
    }
    input {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
      height: 25px;
      background-color: #eeeeee;
      border: transparent;
      outline: none;
      border-radius: 8px;
      padding-left: 10px;
    }
    button {
      width: 100%;
      display: inline-block;
      padding: 5px 15px;
      background-color: #ce375c;
      text-decoration: none;
      color: #fff;
      border-radius: 6px;
      border: transparent;
      cursor: pointer;
      margin-top: 1rem;
    }
  }
`;

export default Wrapper;
