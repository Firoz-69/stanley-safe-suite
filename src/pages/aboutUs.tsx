import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-black text-white font-sans">
        {/* Top Image Section */}
        <section className="relative w-full h-[650px]">
          <img
            src="/src/assets/aboutUs.jpg" // 🔸 replace with your actual image path
            alt="Stanley Safety Team"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h1 className="text-yellow-400 text-5xl font-bold tracking-wide">
              About Stanley Safety
            </h1>
          </div>
        </section>

        {/* About Content */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl text-yellow-400 font-semibold mb-6">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            At{" "}
            <span className="text-yellow-400 font-semibold">
              Stanley Safety
            </span>
            , we are committed to protecting lives through innovative and
            high-quality safety solutions. Our mission is to create a safer work
            environment by delivering reliable, comfortable, and durable
            protective equipment designed for professionals across industries.
          </p>
          <p className="text-gray-300 leading-relaxed mb-5">
            From fall protection gear to personal safety tools, we provide a
            comprehensive range of products that meet international safety
            standards. Every product is designed with precision and passion — to
            ensure that safety is never compromised.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We believe that safety is not just a requirement — it’s a
            responsibility. And at Stanley Safety, that responsibility drives
            everything we do.
          </p>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
