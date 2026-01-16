import Banner from "@/components/Home/Banner/Banner";
import FeaturedProducts from "@/components/Home/FeaturedProducts/FeaturedProducts";
import Features from "@/components/Home/Features/Features";
import Container from "@/components/Shared/Container";

export default function Home() {
  return (
    <Container>
      <Banner />
      <Features />
      <FeaturedProducts />
    </Container>
  );
}
