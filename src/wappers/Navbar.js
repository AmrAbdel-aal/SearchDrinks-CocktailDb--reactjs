import styled from "styled-components";

const Wrapper = styled.nav`
  background-color: #fff;
  .nav-center {
    width: 90vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    .logo span {
      font-size: clamp(1.5rem, 2.5vw, 3rem);
      letter-spacing: 2px;
      color: #ce375c;
      font-weight: 500;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 10px;
      a {
        color: #000;
        text-decoration: none;
        font-size: 1.2rem;
        letter-spacing: 2px;
        display: block;
        padding: 1rem 1rem 0.1rem 0;
        transition: color 0.3s ease-in-out;
      }
      a:hover {
        color: #ce375c;
      }
      .active {
        color: #ce375c;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      ul {
        flex-direction: row;
        margin-top: 0px;
      }
      ul a {
        padding-top: 0px;
      }
    }
  }
`;

export default Wrapper;
