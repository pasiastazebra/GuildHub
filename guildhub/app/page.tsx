import Carousel from "@/components/carousel";

const testArrays: { id: number; title: string; image: string }[] = [
  {
    id: 0,
    title: "Test1",
    image: "https://www.svgrepo.com/show/525258/box-minimalistic.svg",
  },
  {
    id: 1,
    title: "Test2",
    image: "https://www.svgrepo.com/show/502532/box.svg",
  },
  {
    id: 2,
    title: "Test3",
    image: "https://www.svgrepo.com/show/502532/box.svg",
  },
  {
    id: 3,
    title: "Test4",
    image: "https://www.svgrepo.com/show/502532/box.svg",
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
