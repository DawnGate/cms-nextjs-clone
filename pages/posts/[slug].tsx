import { GetStaticProps } from "next";
import Container from "../../components/container";
import Layout from "../../components/layout";
import posts from "../../data/data";
import Post from "../../models/post";

interface Props {
  preview: boolean;
  post: Post;
  posts: Post[];
}
const SlugPost = ({ post, posts, preview }: Props) => {
  return (
    <Layout preview={preview}>
      <Container>
        <div></div>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}: {
  params: any;
  preview: boolean;
  previewData: "";
}) => {
  const rawData = posts;
  if (params.slug === "another-entry") {
  } else if (params?.slug === "another-entry") {
  }
  const data = "";
  return {
    props: {
      preview,
      post: null,
      posts: null,
    },
  };
};

export default SlugPost;
