import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt={t('hero.imageAlt')}
          />
          {/* Add an overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:hidden" />
        </div>
      </div>

      <div className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
            <motion.div {...fadeIn} className="text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">{t('hero.title')}</span>
                <span className="block text-primary mt-3">{t('hero.subtitle')}</span>
              </h1>
              <motion.p
                {...slideIn}
                className="mt-6 text-lg text-gray-500 sm:text-xl max-w-3xl"
              >
                {t('hero.description')}
              </motion.p>
              <motion.div
                {...fadeIn}
                className="mt-10 sm:flex sm:gap-4"
              >
                <div className="rounded-md shadow">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/contact">{t('hero.cta.primary')}</Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0">
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="/portfolio">{t('hero.cta.secondary')}</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}