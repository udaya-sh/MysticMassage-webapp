interface Photo {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "photo";
  slug: {
    _type: "photo";
    current: string;
  };
  name: string;
  url;
}

interface Post {
  _id: string;
  _createdAt: string;
  name: string;
  poster: [
    {
      asset: {
        url: string;
      };
    }
  ];
  slug: {
    current: string;
  };
}
