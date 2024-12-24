import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                {...fadeIn}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block">{t('hero.title')}</span>{" "}
                <span className="block text-primary">{t('hero.subtitle')}</span>
              </motion.h1>
              <motion.p
                {...slideIn}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                {t('hero.description')}
              </motion.p>
              <motion.div
                {...fadeIn}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow">
                  <Button asChild size="lg">
                    <Link href="/contact">{t('hero.cta.primary')}</Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button asChild variant="outline" size="lg">
                    <Link href="/portfolio">{t('hero.cta.secondary')}</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt={t('hero.imageAlt')}
        />
      </div>
    </div>
  );
}