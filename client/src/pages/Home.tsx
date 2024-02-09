import OurServices from "@/components/home/OurServices";
import Layout from "../components/Layout";
import Hero from "@/components/home/Hero";
import Footer from "@/components/home/Footer";

function Home() {
  return (
    <Layout>
      <div>
        <Hero />
        <OurServices />
        <Footer />
      </div>
    </Layout>
  );
}

export default Home;
