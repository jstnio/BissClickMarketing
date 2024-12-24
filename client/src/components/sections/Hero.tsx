import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background image container */}
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-full w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt={t('hero.imageAlt')}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
      </div>

      {/* Mobile image for better responsive design */}
      <div className="relative lg:hidden h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt={t('hero.imageAlt')}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white" />
      </div>

      {/* Content section */}
      <div className="relative mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:pt-24 pb-20 lg:pb-28 lg:w-1/2">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">{t('hero.title')}</span>
                <span className="block text-primary mt-3">{t('hero.subtitle')}</span>
              </h1>
              <motion.p
                {...slideIn}
                className="mt-6 text-lg text-gray-600 sm:text-xl max-w-xl"
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
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/portfolio">{t('hero.cta.secondary')}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}