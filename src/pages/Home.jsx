import { CodeBuildRepeat } from "../components/CodeBuildRepeat";
import { Countdown } from "../components/Countdown";
import { Header } from "../components/Header";
import { Mentors } from "../components/Mentors";
import { Participate } from "../components/Participate";
import { ProblemStatements } from "../components/ProblemStatements";

export const Home = () => {
  return (
    <div className="w-full md:w-[1728px] mx-auto">
      <div>
        <Header />
      </div>
      <main className="bg-black">
        <CodeBuildRepeat />
        <Countdown />
        <Mentors />
        {/* <div className="py-8 md:py-16">
       <main>
        <Countdown />
       {/*  <div className="py-8 md:py-16">
          <Event />
        </div>
        <div className="py-8 md:py-16 mx-4">
          <Rules />
        </div>
        <div className="py-8 md:py-16">
          <Mentors />
        </div>*/}
        <ProblemStatements />
        <Participate />
        {/*<div className="py-8 md:py-16">
          <Prizes />
        </div>
        <div className="py-8 md:py-16 relative z-10">
          <Faqs />
        </div>
        <div className="py-8 md:py-16 mt-[-230px] md:pb-[330px] hidden md:block">
          <Images />
        </div> */}
      </main>
      {/*  <div>
        <Footer />
      </div> */}
    </div>
  );
};
