import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Container from "../../components/container";
import Layout from "../../components/layout";
import posts, { another_entry, index, second_entry } from "../../data/data";
import Post from "../../models/post";
import ErrorPage from "next/error";
import Header from "../../components/header";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
import Tags from "../../components/tags";
import SectionSeparator from "../../components/section-seperator";
import MoreStories from "../../components/more-stories";

interface Props {
  preview: boolean;
  post: Post;
  posts: Post[];
}
const SlugPost = ({ post, posts, preview }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading...</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.coverImage?.node.sourceUrl}
                ></meta>
              </Head>

              <PostHeader {...post} />
              <PostBody content={post.content || ""} />
              <footer>
                {post.tags && post.tags?.length > 0 && (
                  <Tags tags={post.tags} />
                )}
              </footer>
            </article>
            <SectionSeparator />
            {posts.length > 0 && <MoreStories posts={posts} />}
          </>
        )}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
  preview = false,
  previewData,
}) => {
  var rawData = posts;
  if (params?.slug === "another-entry") {
    rawData = another_entry;
  } else if (params?.slug === "second-entry") {
    rawData = second_entry;
  }
  const data = {
    post: {
      ...rawData.pageProps.post,
      categories: rawData.pageProps.post.categories.edges,
      tags: rawData.pageProps.post.tags.edges,
    },
    posts: rawData.pageProps.posts.edges.map((item) => ({
      ...item.node,
      categories: item.node.categories.edges,
      tags: item.node.tags.edges,
    })),
  };
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = index;
  return {
    paths:
      allPosts.pageProps.allPosts.edges.map(
        (item) => `/posts/${item.node.slug}`
      ) || [],
    fallback: true,
  };
};

export default SlugPost;
