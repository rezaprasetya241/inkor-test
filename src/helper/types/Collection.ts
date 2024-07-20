export interface Collection {
  banner_image_url: string;
  category: string;
  collection: string;
  collection_offers_enabled: boolean;
  name: string;
  description: "";
  image_url: string;
  owner: string;
  safelist_status: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  trait_offers_enabled: boolean;
  opensea_url: string;
  project_url: string;
  wiki_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  contracts: Contract[];
}

interface Contract {
  address: string;
  chain: string;
}
