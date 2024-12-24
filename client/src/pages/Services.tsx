import { ServiceCard } from "@/components/sections/ServiceCard";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import {
  Megaphone,
  Share2,
  PenTool,
  BarChart,
  MessageSquare,
  Search,
  Mail,
  TrendingUp,
  Camera,
} from "lucide-react";

export default function Services() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to help your business grow
            and succeed in the digital landscape
          </p>
        </motion.div>

        <motion.div
          {...staggerChildren}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ServiceCard
            title="Digital Marketing"
            description="Strategic campaigns across multiple channels to reach your target audience and drive conversions"
            icon={Megaphone}
          />
          <ServiceCard
            title="Social Media Management"
            description="Expert management of your social media presence to build engagement and brand awareness"
            icon={Share2}
          />
          <ServiceCard
            title="Content Creation"
            description="High-quality, engaging content that resonates with your audience and tells your brand story"
            icon={PenTool}
          />
          <ServiceCard
            title="Analytics & Reporting"
            description="In-depth analysis and reporting to track performance and optimize your marketing strategy"
            icon={BarChart}
          />
          <ServiceCard
            title="Community Management"
            description="Active engagement with your online community to build loyalty and trust"
            icon={MessageSquare}
          />
          <ServiceCard
            title="SEO Optimization"
            description="Technical and content optimization to improve your search engine rankings"
            icon={Search}
          />
          <ServiceCard
            title="Email Marketing"
            description="Targeted email campaigns to nurture leads and drive customer retention"
            icon={Mail}
          />
          <ServiceCard
            title="Growth Strategy"
            description="Custom growth strategies aligned with your business objectives"
            icon={TrendingUp}
          />
          <ServiceCard
            title="Visual Content"
            description="Professional photography and video content for your marketing needs"
            icon={Camera}
          />
        </motion.div>
      </div>
    </div>
  );
}
