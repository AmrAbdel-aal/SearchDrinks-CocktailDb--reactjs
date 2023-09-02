import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  .return-btn {
    display: inline-block;
    padding: 5px 15px;
    background-color: #ce375c;
    text-decoration: none;
    color: #fff;
    border-radius: 6px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .drink-name {
    font-size: 2rem;
  }

  .image {
    width: 90%;
    margin: 1rem auto;
    border-radius: 8px;
    img {
      width: 100%;
      border-radius: 8px;
    }
  }
  .info {
    width: 90%;
    display: grid;
    place-items: flex-start;
    margin: auto;
    p {
      margin: 10px 0px;
      line-height: 2rem;
    }
    p span {
      padding: 5px 15px;
      background-color: #ce375c;
      text-decoration: none;
      color: #fff;
      border-radius: 6px;
      margin-right: 1rem;
    }
  }
  @media screen and (min-width: 992px) {
    .card {
      display: flex;
      .image {
        width: 100%;
      }
      .info {
        display: flex;
        flex-direction: column;
        margin: 10px 0px 0px 20px;
      }
    }
  }
`;
export default Wrapper;
