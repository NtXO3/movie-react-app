import styled from "styled-components";

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

export const MoviesWrapper = styled.div`
  padding: 1.5rem 1.5rem 1.5rem;
  width: stretch;
  max-width: calc(100vw - 140px);

  @media (max-width: 980px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ShowsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
