import { ServiceProps } from "@/constant/service";

function Service({ icon, title, description, alt }: ServiceProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col gap-7">
        <img src={icon} alt={alt} className="w-12"/>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="mt-5 text-gray-500 w-10/12">{description}</p>
    </div>
  );
}

export default Service;
