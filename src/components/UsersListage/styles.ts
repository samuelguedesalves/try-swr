import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .content {
    width: 100%;
    max-width: 1080px;

    margin: 0 auto;
    padding: 24px 12px;
  }

  .content ul {
    list-style: none;

    & li a{
      font-size: 18px;
      line-height: 24px;
      text-decoration: none;
    }
  }
`;