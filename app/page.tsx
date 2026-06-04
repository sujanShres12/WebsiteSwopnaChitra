"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Camera, Video, Users, Share2, Play, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section
        id="home"
        className="vh-100 d-flex align-items-center position-relative overflow-hidden pt-5"
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 z-n1 opacity-25">
          <Image
            src="https://picsum.photos/1920/1080?grayscale"
            alt="Hero Background"
            fill
            className="object-fit-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container text-center mt-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-1 fw-bold mb-3 text-gold">SWOPNA CHITRA</h1>
            <p className="lead fs-3 text-white-50 mb-5">
              Crafting Visual Dreams into Reality
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link
                href="#portfolio"
                style={{}}
                className="btn btn-outline-warning btn-lg px-5 py-3 text-gold"
              >
                View Portfolio
              </Link>
              <Link
                href="#services"
                className="btn btn-outline-warning btn-lg px-5 py-3 text-gold"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-midnight">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="display-4 mb-4">About Us</h2>
                <p className="lead text-white-50">
                  At SWOPNA CHITRA, we believe that every brand has a story
                  waiting to be told. With over a decade of experience in the
                  production industry, we specialize in creating impactful
                  visual content that resonates with audiences globally.
                </p>
                <p className="text-white-50">
                  Our team of creative visionaries, directors, and editors work
                  tirelessly to ensure that every frame we produce is a
                  masterpiece of cinematic excellence.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="position-relative overflow-hidden rounded-4"
                style={{ height: "400px" }}
              >
                <Image
                  src="https://picsum.photos/800/600?random=1"
                  alt="About Us"
                  fill
                  className="rounded-4 object-fit-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-dark bg-opacity-25">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4">Our Services</h2>
            <div
              className="mx-auto bg-gold"
              style={{ height: "3px", width: "80px" }}
            ></div>
          </div>
          <div className="row g-4">
            {[
              {
                title: "TV Commercials",
                icon: <Video size={40} />,
                desc: "High-end television advertisements that capture attention and drive results.",
              },
              {
                title: "Social Media Content",
                icon: <Share2 size={40} />,
                desc: "Engaging, viral-ready content tailored for Instagram, TikTok, and YouTube.",
              },
              {
                title: "Corporate Events",
                icon: <Users size={40} />,
                desc: "Professional coverage of your most important corporate milestones and events.",
              },
              {
                title: "Digital Marketing",
                icon: <Camera size={40} />,
                desc: "Strategic social media marketing to amplify your brand presence online.",
              },
            ].map((service, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card h-100 p-4 text-center"
                >
                  <div className="text-gold mb-3">{service.icon}</div>
                  <h3 className="h4 mb-3">{service.title}</h3>
                  <p className="text-white-50 small">{service.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4">Recent Portfolio</h2>
            <p className="text-white-50">
              A glimpse into our cinematic journey.
            </p>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="col-md-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="position-relative rounded-4 overflow-hidden shadow"
                  style={{ height: "300px" }}
                >
                  <Image
                    src={`https://picsum.photos/600/400?random=${item + 10}`}
                    alt={`Portfolio ${item}`}
                    fill
                    className="object-fit-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-all"
                    style={{ transition: "0.3s" }}
                  >
                    <Play className="text-gold" size={48} />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Summary Section */}
      <section id="team-summary" className="bg-midnight">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <h2 className="display-4 mb-4">Meet the Visionaries</h2>
              <p className="lead text-white-50 mb-4">
                Our team is a blend of experienced veterans and young creative
                minds, all united by a passion for visual storytelling.
              </p>
              <Link
                href="/team"
                className="btn btn-gold btn-lg d-inline-flex align-items-center gap-2"
              >
                Read More About the Team <ArrowRight size={20} />
              </Link>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="row g-2">
                <div className="col-6">
                  <Image
                    src="https://picsum.photos/400/500?random=20"
                    alt="Team 1"
                    width={400}
                    height={500}
                    className="img-fluid rounded-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="col-6 mt-4">
                  <Image
                    src="https://picsum.photos/400/500?random=21"
                    alt="Team 2"
                    width={400}
                    height={500}
                    className="img-fluid rounded-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Summary Section */}
      <section id="contact-summary" className="bg-dark bg-opacity-25">
        <div className="container text-center">
          <h2 className="display-4 mb-4">
            Let&apos;s Create Something Amazing
          </h2>
          <p
            className="lead text-white-50 mb-5 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Ready to take your brand to the next level? Get in touch with us
            today and let&apos;s discuss how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="btn btn-outline-gold btn-lg px-5 py-3"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      <style jsx>{`
        .hover-opacity-100:hover {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
