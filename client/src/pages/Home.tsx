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
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('services.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('services.subtitle')}
            </p>
          </div>

          <motion.div
            {...staggerChildren}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <ServiceCard
              titleKey="services.digitalMarketing.title"
              descriptionKey="services.digitalMarketing.description"
              icon={Megaphone}
            />
            <ServiceCard
              titleKey="services.socialMedia.title"
              descriptionKey="services.socialMedia.description"
              icon={Share2}
            />
            <ServiceCard
              titleKey="services.contentCreation.title"
              descriptionKey="services.contentCreation.description"
              icon={PenTool}
            />
            <ServiceCard
              titleKey="services.analytics.title"
              descriptionKey="services.analytics.description"
              icon={BarChart}
            />
            <ServiceCard
              titleKey="services.communityManagement.title"
              descriptionKey="services.communityManagement.description"
              icon={MessageSquare}
            />
            <ServiceCard
              titleKey="services.seo.title"
              descriptionKey="services.seo.description"
              icon={Search}
            />
          </motion.div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">{t('services.viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('portfolio.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('portfolio.subtitle')}
            </p>
          </div>

          <motion.div
            {...staggerChildren}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <PortfolioCard
              title={t('portfolio.items.techStartup.title')}
              description={t('portfolio.items.techStartup.description')}
              image="https://images.unsplash.com/photo-1556691421-cf15fe27a0b6"
              category={t('portfolio.items.techStartup.category')}
            />
            <PortfolioCard
              title={t('portfolio.items.ecommerce.title')}
              description={t('portfolio.items.ecommerce.description')}
              image="https://images.unsplash.com/photo-1496449903678-68ddcb189a24"
              category={t('portfolio.items.ecommerce.category')}
            />
            <PortfolioCard
              title={t('portfolio.items.socialMedia.title')}
              description={t('portfolio.items.socialMedia.description')}
              image="https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5"
              category={t('portfolio.items.socialMedia.category')}
            />
          </motion.div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/portfolio">{t('portfolio.viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}