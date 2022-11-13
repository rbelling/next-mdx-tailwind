export type IntroProps = {
  todaysDate: string;
};

const Intro = (props: IntroProps) => {
  const onClick = () => alert(`Clicked!`);
  return (
    <>
      <p className="text-italic">Today is {props.todaysDate}.</p>
      <br />
      <button
        className="rounded-full bg-orange-400	text-white px-4 py-2"
        onClick={onClick}
      >
        Click me
      </button>
    </>
  );
};

export default Intro;
