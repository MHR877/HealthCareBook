import OurServices from "@/components/home/OurServices";
import HomeLayout from "../components/HomeLayout";
import Hero from "@/components/home/Hero";
import Footer from "@/components/home/Footer";

function Home() {
  return (
    <HomeLayout>
      <div>
        <Hero />
        <OurServices />
        <Footer />
      </div>
    </HomeLayout>
  );
}

export default Home;
