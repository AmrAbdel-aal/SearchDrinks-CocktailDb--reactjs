import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  place-items: center;

  .card {
    background-color: #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    .image {
      height: 300px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      img {
        height: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
    }

    .info {
      padding-left: 1rem;
      h4,
      h5,
      p {
        padding: 7px 0px;
        letter-spacing: 2px;
      }
      h5 {
        color: #444;
      }
      p {
        color: #999;
      }
      .details-btn {
        display: inline-block;
        padding: 5px 15px;
        background-color: #ce375c;
        text-decoration: none;
        color: #fff;
        border-radius: 6px;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
  }
`;
export default Wrapper;
