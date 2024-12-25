import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[90vh] bg-white overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10" />
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          alt={t('hero.imageAlt')}
        />
      </div>

      {/* Content section */}
      <div className="relative z-20">
        <div className="min-h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <motion.div {...fadeIn} className="text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block xl:inline">{t('hero.title')}</span>{' '}
                  <span className="block text-primary xl:inline">{t('hero.subtitle')}</span>
                </h1>
                <motion.p
                  {...slideIn}
                  className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl"
                >
                  {t('hero.description')}
                </motion.p>
                <motion.div
                  {...fadeIn}
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/contact">{t('hero.cta.primary')}</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto"
                  >
                    <Link href="/portfolio">{t('hero.cta.secondary')}</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}