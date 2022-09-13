export default interface Author {
  node?: {
    firstName?: string;
    lastName?: string;
    name?: string;
    avatar: {
      url: string;
    };
  };
}
