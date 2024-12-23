import Stepper from "../components/Stepper";
import { StepperProvider } from "../context/StepperContext";
import CodeCraftImage from "../assets/images/codecraft.svg";
import FormBg from "../assets/images/formbg.png";

export const Register = () => {
  return (
    <div className="relative font-robotoMono bg-[#ABD40F] w-[1485px] h-[884px] mx-auto flex px-[200px] z-1">
      <img src={FormBg} className="w-[100%] absolute left-0 opacity-[40%]" />
      <img src={CodeCraftImage} className="absolute right-[100px]" />
      <StepperProvider>
        <Stepper />
      </StepperProvider>
    </div>
  );
};
