import { services } from "@/constant/service";
import Service from "./Service";

function OurServices() {
  return (
    <div className="flex justify-center py-16 mb-24">
      <div className="relative w-[1200px] mt-16">
        <span className="absolute text-8xl font-bold opacity-5">
          Our Services
        </span>
        <div className="flex items-end gap-3 ">
          <h1 className="text-5xl text-[#10217d] font-bold">Our Services</h1>
          <span className="w-16 h-1 bg-gray-400"></span>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 mt-24 justify-between gap-10">
          {services.map((service) => (
            <Service
              key={service.icon}
              description={service.description}
              title={service.title}
              icon={service.icon}
              alt={service.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
