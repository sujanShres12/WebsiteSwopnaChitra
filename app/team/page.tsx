'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  photoUrl: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    designation: "Founder & Creative Director",
    photoUrl: "https://picsum.photos/400/500?random=30",
    bio: "With over 15 years in the film industry, Aarav has directed award-winning commercials for global brands. His vision is the driving force behind SWOPNA CHITRA."
  },
  {
    id: 2,
    name: "Ishani Verma",
    designation: "Head of Production",
    photoUrl: "https://picsum.photos/400/500?random=31",
    bio: "Ishani ensures that every project runs smoothly from pre-production to final delivery. Her organizational skills are legendary in the industry."
  },
  {
    id: 3,
    name: "Rohan Das",
    designation: "Lead Cinematographer",
    photoUrl: "https://picsum.photos/400/500?random=32",
    bio: "Rohan's eye for lighting and composition brings a unique cinematic quality to every frame. He specializes in high-speed and anamorphic cinematography."
  },
  {
    id: 4,
    name: "Meera Iyer",
    designation: "Senior Editor & Colorist",
    photoUrl: "https://picsum.photos/400/500?random=33",
    bio: "Meera is a wizard in the edit suite. Her sense of rhythm and color grading transforms raw footage into emotional storytelling."
  }
];

export default function TeamPage() {
  return (
    <div className="team-page pt-5">
      <section className="bg-midnight pt-5 mt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-3 fw-bold mb-3">Meet Our Team</h1>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '800px' }}>
              The creative minds and technical experts dedicated to bringing your vision to life.
            </p>
            <div className="mx-auto bg-gold mt-4" style={{ height: '3px', width: '100px' }}></div>
          </div>

          <div className="row g-5 mt-4">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-0 overflow-hidden border-0 bg-transparent"
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-md-5 position-relative" style={{ height: '350px' }}>
                      <Image 
                        src={member.photoUrl} 
                        alt={member.name} 
                        fill 
                        className="object-fit-cover rounded-4"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4 p-lg-5">
                        <h2 className="h3 text-gold mb-1">{member.name}</h2>
                        <p className="text-white-50 fw-bold mb-3">{member.designation}</p>
                        <p className="small text-white-50 mb-4">{member.bio}</p>
                        <div className="d-flex gap-3">
                          <a href="#" className="text-gold hover-opacity-75"><Linkedin size={20} /></a>
                          <a href="#" className="text-gold hover-opacity-75"><Twitter size={20} /></a>
                          <a href="#" className="text-gold hover-opacity-75"><Mail size={20} /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark bg-opacity-25 text-center py-5">
        <div className="container">
          <h2 className="h1 mb-4">Want to Join Us?</h2>
          <p className="text-white-50 mb-4">We are always looking for passionate creators to join our journey.</p>
          <Link href="/contact" className="btn btn-gold btn-lg px-5">Send Your Portfolio</Link>
        </div>
      </section>

      <style jsx>{`
        .hover-opacity-75:hover {
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}
