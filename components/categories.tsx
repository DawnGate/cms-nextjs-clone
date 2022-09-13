import Category from "../models/categories";

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <span className="ml-1">
      under
      {categories.map((category, index) => {
        return (
          <span key={index} className="ml-1">
            {category.node.name}
          </span>
        );
      })}
    </span>
  );
};

export default Categories;
