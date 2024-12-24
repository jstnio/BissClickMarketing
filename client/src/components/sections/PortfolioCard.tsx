import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { ExternalLink } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

export function PortfolioCard({
  title,
  description,
  image,
  category,
  link,
}: PortfolioCardProps) {
  return (
    <motion.div {...fadeIn}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{title}</CardTitle>
            {link && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="ml-2"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
          <CardDescription className="text-sm text-primary">
            {category}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
