import Link from "next/link";
import Post from "../models/post";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import parser from "html-react-parser";
import Date from "./date";

const PostPreView = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Post) => {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{parser(title)}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div className="text-lg leading-relaxed mb-4">{parser(excerpt)}</div>
      <Avatar author={author} />
    </div>
  );
};

export default PostPreView;
