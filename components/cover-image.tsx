import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage?: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

const CoverImage = ({ title, coverImage, slug }: Props) => {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl || ""}
      className={cn("shadow-small", {
        "hover:shadow-medium trasition-shadow duration-200": slug,
      })}
    ></Image>
  );
  return (
    <div>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
