type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// export type Store = {
//   id: string;
//   name: string;
//   imageUrl: string;
//   createdAt: string;
//   votes: number;
//   streetAddress: string;
//   city: string;
//   state: string;
// };

export type Store = {
  fsq_id: string;
  categories: [
    {
      id: number;
      name: string;
      icon: {
        prefix: string;
        suffix: string;
      };
    },
    {
      id: number;
      name: string;
      icon: {
        prefix: string;
        suffix: string;
      };
    }
  ];
  chains: [];
  distance: number;
  geocodes: {
    main: {
      latitude: number;
      longitude: number;
    };
    roof: {
      latitude: number;
      longitude: number;
    };
  };
  link: string;
  location: {
    address: string;
    address_extended: string;
    census_block: string;
    country: string;
    dma: string;
    formatted_address: string;
    locality: string;
    postcode: string;
    region: string;
  };
  name: string;
  related_places: {};
  timezone: string;
};
