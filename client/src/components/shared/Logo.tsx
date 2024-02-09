function Logo() {
  return (
    <div className="flex items-center gap-1">
      <img src="/stethoscope.png" alt="Stethoscope" className="w-10" />
      <h1 className="text-3xl font-bold">
        <span className="text-[#10217d]">Health</span>
        <span className="font-light text-[#2e4450]">Care</span>
      </h1>
    </div>
  );
}

export default Logo;
