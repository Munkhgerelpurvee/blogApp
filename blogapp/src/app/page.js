import Navbar from "../components/Navbar";
import { Container } from "../assets/Container";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main >
      <div className="">
        <Navbar/>
        <Container className="bg-red">
          <Footer />
        </Container>
      </div>
    </main>
  );
}
