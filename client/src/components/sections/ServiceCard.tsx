import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  titleKey: string;
  descriptionKey: string;
  icon: LucideIcon;
}

export function ServiceCard({ titleKey, descriptionKey, icon: Icon }: ServiceCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div {...fadeIn}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <Icon className="h-10 w-10 text-primary mb-4" />
          <CardTitle className="text-xl">{t(titleKey)}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{t(descriptionKey)}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}