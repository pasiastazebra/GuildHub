import Carousel from "@/components/carousel";

const testArrays: { title: string; image: string }[] = [
  {
    title: "Test1",
    image: "https://www.svgrepo.com/show/525258/box-minimalistic.svg",
  },
  {
    title: "Test2",
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
    </>
  );
};

export default mainPage;
