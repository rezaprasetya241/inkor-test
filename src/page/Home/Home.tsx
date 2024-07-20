import React from "react";
import {
  CardNft,
  Container,
  StyledCover,
  StyledImgNft,
  StyledListNft,
  StyledTrendingCollection,
} from "./Home.styles";
import Button from "../../components/atoms/Button/Button";
import { FaPaperPlane } from "react-icons/fa";
import { CovertNFT } from "../../assets";
import { useCollections } from "../../api/query/collection";
import { Collection } from "../../helper/types/Collection";

const HomePage = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  const { data, isLoading, error } = useCollections();
  console.log("data: ", data);

  function filterUniqueData(data: Collection[]) {
    return data
      ?.filter((item) => item.image_url !== "")
      .reduce<{ [key: string]: Collection }>((acc, item) => {
        if (!acc[item.name]) {
          acc[item.name] = item;
        }
        return acc;
      }, {});
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  return (
    <Container>
      <StyledCover>
        <div className="cover-descriptions">
          <h2>Discover Digital Art & Collect NFTs</h2>
          <p>
            NFT marketplace UI created with Anima for Figma. Co llect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div>
            <Button onClick={() => {}}>
              <FaPaperPlane />
              Get Started
            </Button>
          </div>
          <div className="cover-info-sales">
            <div className="cover-info-sales-item">
              <h3>240k+</h3>
              <p>Total Sale</p>
            </div>
            <div className="cover-info-sales-item">
              <h3>100k+</h3>
              <p>Auctions</p>
            </div>
            <div className="cover-info-sales-item">
              <h3>240k+</h3>
              <p>Artists</p>
            </div>
          </div>
        </div>
        <div className="cover-info-img">
          <img src={CovertNFT} alt="nft-pic" />
          <div className="cover-info-img-description">
            <p>Space Walking</p>
            <div>
              <span>animakid</span>
            </div>
          </div>
        </div>
      </StyledCover>
      <StyledTrendingCollection>
        <h2>Trending Collection</h2>
        <p>Checkout Our Weekly Updated Trending Collection</p>
        <StyledListNft>
          {Object.values(filterUniqueData(data || []) || []).map((item) => (
            <CardNft key={item.name}>
              <StyledImgNft
                src={item.image_url}
                alt={item.name}
                className="img-nft"
              />
              <p>{item.name}</p>
            </CardNft>
          ))}
        </StyledListNft>
      </StyledTrendingCollection>
    </Container>
  );
};

export default HomePage;
