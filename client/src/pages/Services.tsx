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
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">{t('services.title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          {...staggerChildren}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
          <ServiceCard
            titleKey="services.email.title"
            descriptionKey="services.email.description"
            icon={Mail}
          />
          <ServiceCard
            titleKey="services.growth.title"
            descriptionKey="services.growth.description"
            icon={TrendingUp}
          />
          <ServiceCard
            titleKey="services.visual.title"
            descriptionKey="services.visual.description"
            icon={Camera}
          />
        </motion.div>
      </div>
    </div>
  );
}