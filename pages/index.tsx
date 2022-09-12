import type { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";

interface HomeProps {
  preview: boolean;
}

const Home = (props: HomeProps) => {
  return (
    <Layout preview={props.preview}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: { preview: true },
  };
};

export default Home;
