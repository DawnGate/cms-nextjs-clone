import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically gnerated blog example using{" "}
        <a className="underline hover:text-success duration-200 transition-colors cursor-pointer">
          Next.js
        </a>{" "}
        and{" "}
        <a className="underline hover:text-success duration-200 transition-colors cursor-pointer">
          {CMS_NAME}
        </a>
        .
      </h4>
    </section>
  );
};

export default Intro;
