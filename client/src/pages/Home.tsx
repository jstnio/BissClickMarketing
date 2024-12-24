import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { motion } from "framer-motion";
import { staggerChildren } from "@/lib/animations";
import {
  Megaphone,
  Share2,
  PenTool,
  BarChart,
  MessageSquare,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive digital marketing solutions tailored to your needs
            </p>
          </div>

          <motion.div
            {...staggerChildren}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <ServiceCard
              title="Digital Marketing"
              description="Strategic digital marketing campaigns that drive results and ROI"
              icon={Megaphone}
            />
            <ServiceCard
              title="Social Media"
              description="Engaging social media management to build your brand presence"
              icon={Share2}
            />
            <ServiceCard
              title="Content Creation"
              description="Compelling content that tells your brand story"
              icon={PenTool}
            />
            <ServiceCard
              title="Analytics"
              description="Data-driven insights to optimize your marketing strategy"
              icon={BarChart}
            />
            <ServiceCard
              title="Community Management"
              description="Building and nurturing your online community"
              icon={MessageSquare}
            />
            <ServiceCard
              title="SEO"
              description="Improving your visibility in search results"
              icon={Search}
            />
          </motion.div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured Work</h2>
            <p className="mt-4 text-lg text-gray-600">
              Recent projects that showcase our expertise
            </p>
          </div>

          <motion.div
            {...staggerChildren}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <PortfolioCard
              title="Tech Startup Rebrand"
              description="Complete digital transformation for a growing tech company"
              image="https://images.unsplash.com/photo-1556691421-cf15fe27a0b6"
              category="Branding & Strategy"
            />
            <PortfolioCard
              title="E-commerce Growth"
              description="Increased online sales by 200% through strategic marketing"
              image="https://images.unsplash.com/photo-1496449903678-68ddcb189a24"
              category="Digital Marketing"
            />
            <PortfolioCard
              title="Social Media Campaign"
              description="Viral campaign reaching millions of engaged users"
              image="https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5"
              category="Social Media"
            />
          </motion.div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
