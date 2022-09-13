import Image from "next/image";
import Author from "../models/author";
const Avatar = ({ author }: { author: Author }) => {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node?.firstName} ${author.node?.lastName}`
    : author.node?.name || undefined;
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={author.node?.avatar.url || ""}
          layout="fill"
          className="rounded-full"
          alt={name}
        ></Image>
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
