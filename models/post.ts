import Author from "./author";

export default interface Post {
  title: string;
  coverImage?: {
    node: {
      sourceUrl: string;
    };
  };
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}
