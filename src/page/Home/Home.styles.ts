import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px; /* Max width of the container */
  margin: 0 auto; /* Center the container */
  padding: 15px; /* Add padding on left and right */

  /* Media query for tablets */
  @media (max-width: 768px) {
    padding: 10px;
  }

  /* Media query for mobile */
  @media (max-width: 480px) {
    padding: 5px;
  }
`;
export const StyledCover = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  .cover-descriptions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    > h2 {
      font-size: 67px;
      font-weight: 600;
      margin: 0;
      text-align: start;
    }
    > p {
      font-size: 22px;
      margin: 0;
    }
    .cover-info-sales {
      display: flex;
      gap: 20px;
      /* grid-template-columns: repeat(3, minmax(0, 1fr)); */

      .cover-info-sales-item {
        > h3 {
          margin: 0;
        }
        > p {
          margin: 4px 0;
        }
      }
    }
  }
  .cover-info-img {
    background: #3b3b3b;
    border-radius: 24px;
    > img {
      width: 100%;
    }
    .cover-info-img-description {
      padding: 22px 20px;

      > p {
        font-weight: 600;
      }
    }
  }
`;

export const StyledTrendingCollection = styled.div`
  margin-top: 80px;
`;

export const CardNft = styled.div`
  background: #3b3b3b;
  padding: 16px 0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;

  > p {
    font-weight: 600;
    color: white;
  }

  &:hover {
    transform: scale(0.9);
  }
`;
export const StyledImgNft = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const StyledListNft = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;
  margin-top: 20px;
`;
