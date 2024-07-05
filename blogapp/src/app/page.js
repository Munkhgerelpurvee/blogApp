"use client";
import Navbar from "../components/Navbar";
import { Container } from "../assets/Container";
// import Footer from "../components/Footer";
import { Slider } from "../components/Slider";
import { Allblog } from "../components/Allblog";
import { useState, useEffect } from "react";

// import Custom404 from "../components/404"
// import { format } from "date-fns";

export default function Home() {
  const [a, setA] = useState(0);

  return (
    <main>
      <button
        className="p-2 text-white bg-red-500 rounded-md"
        onClick={() => {
          setA(a + 1);
        }}
      >
        Add button
      </button>

      <Navbar />
      {/* <Container background="[#F9FAFB] dark:bg-[#111827]">
          <Footer />
        </Container> */}
      {/* <Container background="bg-[#fff] dark:bg-[#030712]">
          <Slider/>
        </Container> */}
      <Container background="red">
        <Allblog />
      </Container>
    </main>
  );
}
