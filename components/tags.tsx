import Category from "../models/categories";

const Tags = ({ tags }: { tags: Category[] }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-8 text-lg font-bold">Tagged</p>
      {tags.map((tag, index) => {
        return (
          <span key={index} className="ml-4 font-normal">
            {tag.node.name}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
