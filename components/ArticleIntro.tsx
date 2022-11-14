type IntroProps = {
  date: string;
  title: string;
  description: string;
};

const ArticleIntro = (props: IntroProps) => {
  return (
    <>
      <small>Posted on {props.date}</small>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </>
  );
};

export default ArticleIntro;
