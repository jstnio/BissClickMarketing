import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";

const portfolioItems = [
  {
    title: "Tech Startup Rebrand",
    description: "Complete digital transformation for a growing tech company, including new brand identity and marketing strategy",
    image: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6",
    category: "Branding & Strategy"
  },
  {
    title: "E-commerce Growth",
    description: "Increased online sales by 200% through strategic digital marketing and optimization",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
    category: "Digital Marketing"
  },
  {
    title: "Social Media Campaign",
    description: "Viral social media campaign reaching millions of engaged users across platforms",
    image: "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5",
    category: "Social Media"
  },
  {
    title: "Content Strategy",
    description: "Comprehensive content strategy that doubled organic traffic in 6 months",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "Content Marketing"
  },
  {
    title: "Brand Awareness",
    description: "Successful brand awareness campaign for a new market entrant",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31",
    category: "Brand Marketing"
  },
  {
    title: "Digital Transformation",
    description: "Digital transformation project for a traditional business entering the online space",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Digital Strategy"
  }
];

export default function Portfolio() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Portfolio</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve their marketing goals
            through innovative digital solutions
          </p>
        </motion.div>

        <motion.div
          {...staggerChildren}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
