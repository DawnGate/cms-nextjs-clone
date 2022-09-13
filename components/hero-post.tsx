import Link from "next/link";
import Post from "../models/post";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Date from "./date";
import parser from "html-react-parser";

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }: Post) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage && (
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
          ></CoverImage>
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`posts/${slug}`}>
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              ></a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date}></Date>
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            // dangerouslySetInnerHTML={{ __html: "excerpt" }}
          >
            {parser(excerpt)}
            <Avatar author={author}></Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
