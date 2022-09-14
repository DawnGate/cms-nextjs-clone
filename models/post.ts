import Author from "./author";
import Category from "./categories";

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
  categories?: Category[];
  content?: string;
  tags?: Category[];
}
