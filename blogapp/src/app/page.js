import Navbar from "../components/Navbar";
import { Container } from "../assets/Container";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main >
      <div className="">
        <Navbar />
        <Container>
          <Footer />
        </Container>
      </div>
    </main>
  );
}
