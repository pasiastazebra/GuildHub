import Carousel from "@/components/carousel";

const testArrays: { id: number; title: string; image: string }[] = [
  {
    id: 0,
    title: "Forgot Jira",
    image: "https://www.svgrepo.com/show/376328/jira.svg",
  },
  {
    id: 1,
    title: "Forgot Excel",
    image: "https://www.svgrepo.com/show/373589/excel.svg",
  },
  {
    id: 2,
    title: "Forgot coding",
    image: "https://www.svgrepo.com/show/349419/javascript.svg",
  },
];

const mainPage = () => {
  return (
    <>
      <h1>Are you tired of managing your Albion guild?</h1>
      <h2>We developed a tool from your dreams, so you don't have to.</h2>
      <Carousel objectsArray={testArrays}></Carousel>
      <div className="details">
        <h2 className="details-title">Intrested? Check details!</h2>
        <a href="/features" className="details-arrow">
          {"->"}
        </a>
      </div>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
      <p>pyr</p>
    </>
  );
};

export default mainPage;
