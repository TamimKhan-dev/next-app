import Banner from "@/components/Home/Banner/Banner";
import FAQ from "@/components/Home/FAQ/FAQ";
import FeaturedProducts from "@/components/Home/FeaturedProducts/FeaturedProducts";
import Features from "@/components/Home/Features/Features";
import TopBrands from "@/components/Home/TopBrands/TopBrands";
import Container from "@/components/Shared/Container";

export default function Home() {
  return (
    <Container>
      <Banner />
      <Features />
      <FeaturedProducts />
      <TopBrands />
      <FAQ />
    </Container>
  );
}
