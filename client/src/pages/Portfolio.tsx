import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">{t('portfolio.title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <motion.div
          {...staggerChildren}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
      </div>
    </div>
  );
}