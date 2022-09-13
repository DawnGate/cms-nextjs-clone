import Post from "../models/post";
import PostPreView from "./post-preview";

const MoreStories = ({ posts }: { posts: Post[] }) => {
  return (
    <section>
      <h2 className="mb-8 tex-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post, index) => {
          return <PostPreView {...post} key={index} />;
        })}
      </div>
    </section>
  );
};

export default MoreStories;
