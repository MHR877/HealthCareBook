import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="relative h-[750px] overflow-hidden flex items-center">
      <img
        src="/hero.jpg"
        alt="hero page"
        className="absolute inset-0 object-cover w-full h-full brightness-50 blur-sm"
      />
      <div className="    relative z-10 ml-24">
        <h1 className="text-8xl text-white font-bold">Health Care</h1>
        <h3 className="text-5xl text-white mt-6 font-extralight">
          Medical Social Media
        </h3>
        <p className="text-white w-[500px] text-lg mt-2">
          Seamless patient-doctor communication. The HealthCare makes healthcare
          closer and more convenient than ever.
        </p>
        <Button className="bg-[#10217d] px-9 py-8 text-white font-bold rounded-full mt-8 text-xl">
          Read more
        </Button>
      </div>
    </div>
  );
}

export default Hero;
