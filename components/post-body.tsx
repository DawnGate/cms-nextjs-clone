import styles from "./post-body.module.css";
const PostBody = ({ content }: { content: string }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default PostBody;
