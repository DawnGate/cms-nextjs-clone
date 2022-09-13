import type { GetStaticProps } from "next";
import Head from "next/head";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import posts from "../data/data";
import { CMS_NAME } from "../lib/constants";
import Post from "../models/post";

interface HomeProps {
  preview: boolean;
  morePosts: Post[];
  heroPost: Post;
}

const Home = (props: HomeProps) => {
  return (
    <Layout preview={props.preview}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {props.heroPost && <HeroPost {...props.heroPost} />}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const morePosts: Post[] = posts.pageProps.posts.edges.map((item) => ({
    ...item.node,
    coverImage: item.node.featuredImage,
  }));
  const heroPost: Post = {
    ...posts.pageProps.post,
    coverImage: posts.pageProps.post.featuredImage,
  };
  return {
    props: { preview: false, morePosts, heroPost },
  };
};

export default Home;
