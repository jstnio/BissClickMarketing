import { TeamMember } from "@/components/sections/TeamMember";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of marketing experience, Sarah leads our team with vision and expertise.",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
  },
  {
    name: "Michael Chen",
    role: "Digital Marketing Director",
    bio: "Michael specializes in creating data-driven marketing strategies that deliver results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    name: "Emma Wilson",
    role: "Creative Director",
    bio: "Emma brings brands to life through compelling visual storytelling and design.",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24"
  },
  {
    name: "David Park",
    role: "Social Media Manager",
    bio: "David is an expert in building engaging social media communities and campaigns.",
    image: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6"
  }
];

export default function About() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            BissClick is a full-service digital marketing agency dedicated to helping businesses 
            thrive in the digital age. Our team of experts combines creativity with data-driven 
            strategies to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="mt-16">
          <div className="bg-primary/5 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-gray-600">
                  To empower businesses with innovative digital marketing solutions that drive 
                  growth, enhance brand visibility, and create meaningful connections with their 
                  audience.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                <p className="mt-4 text-gray-600">
                  To be the leading digital marketing partner for businesses seeking transformative 
                  growth through creative and results-driven marketing strategies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Meet the passionate experts behind BissClick's success. Our diverse team brings together
            years of experience in digital marketing, design, and strategy.
          </p>

          <motion.div
            {...staggerChildren}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div {...fadeIn} className="mt-24">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Our Values</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
                <p className="mt-2 text-gray-600">
                  We stay ahead of digital trends to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
                <p className="mt-2 text-gray-600">
                  We maintain the highest standards in everything we do.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">Collaboration</h3>
                <p className="mt-2 text-gray-600">
                  We work closely with our clients to achieve shared success.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
