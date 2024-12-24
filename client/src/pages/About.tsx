import { TeamMember } from "@/components/sections/TeamMember";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">{t('about.title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="mt-16">
          <div className="bg-primary/5 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{t('about.mission.title')}</h2>
                <p className="mt-4 text-gray-600">
                  {t('about.mission.description')}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{t('about.vision.title')}</h2>
                <p className="mt-4 text-gray-600">
                  {t('about.vision.description')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center">{t('about.team.title')}</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {t('about.team.description')}
          </p>

          <motion.div
            {...staggerChildren}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[1, 2, 3, 4].map((index) => (
              <TeamMember
                key={index}
                name={t(`about.team.members.${index}.name`)}
                role={t(`about.team.members.${index}.role`)}
                bio={t(`about.team.members.${index}.bio`)}
                image={t(`about.team.members.${index}.image`)}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div {...fadeIn} className="mt-24">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center">{t('about.values.title')}</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t(`about.values.items.${index}.title`)}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {t(`about.values.items.${index}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}