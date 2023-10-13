import { people01, nftart01, nftart02, nftart03 } from "../assets";

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "collection",
      title: "Collection",
    },
    {
      id: "howitworks",
      title: "How it Works",
    },
    {
      id: "creators",
      title: "Creators",
    },
  ];

  export const stats = [
    {
      id: "stats-1",
      title: "ACTIVE USERS",
      value: "95K+",
    },
    {
      id: "stats-2",
      title: "NFT ARTWORKS",
      value: "75K+",
    },
    {
      id: "stats-3",
      title: "AVAILABLE ARTIST",
      value: "45K+",
    },
    {
        id: "stats-4",
        title: "TOTAL PRODUCTS",
        value: "105K+",
      },
  ];


  export const collections = [
    {
      id: "collections-1",
      userImg: people01,
      name:"@amandy",
      nftArt:  nftart01,
      currentPrice: "0.93 ETH",
      standard:"ERC-155",
      chain: 'Ethereum',
      bid:"15.90 ETH"
    },

    {
      id: "collections-2",
      userImg: people01,
      name:"@jemsey",
      nftArt:  nftart02,
      currentPrice: "0.03 ETH",
      standard:"ERC-155",
      chain: 'Ethereum',
      bid:"12.50 ETH"
    },
    {
      id: "collections-3",
      userImg: people01,
      name:"@yaskoshi",
      nftArt:  nftart03,
      currentPrice: "0.03 ETH",
      standard:"ERC-125",
      chain: 'Ethereum',
      bid:"10.70 ETH"
    },
   
  ];
  