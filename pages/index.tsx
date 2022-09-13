import type { GetStaticProps } from "next";
import Head from "next/head";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import { CMS_NAME } from "../lib/constants";
import Post from "../models/post";

import { index } from "../data/data";

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
        {props.morePosts.length > 0 && <MoreStories posts={props.morePosts} />}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts: Post[] = index.pageProps.allPosts.edges.map((item) => ({
    ...item.node,
    coverImage: item.node.featuredImage,
  }));
  const morePosts: Post[] = posts.slice(1);
  const heroPost: Post = posts[0];
  return {
    props: { preview: false, morePosts, heroPost },
  };
};

export default Home;
