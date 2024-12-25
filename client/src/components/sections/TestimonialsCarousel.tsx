import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";

export function TestimonialsCarousel() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = Array.from({ length: 3 }).map((_, i) => ({
    id: i + 1,
    text: t(`testimonials.items.${i + 1}.text`),
    author: t(`testimonials.items.${i + 1}.author`),
    role: t(`testimonials.items.${i + 1}.role`),
    company: t(`testimonials.items.${i + 1}.company`),
    image: t(`testimonials.items.${i + 1}.image`)
  }));

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('testimonials.title')}</h2>
          <p className="mt-4 text-lg text-gray-600">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <motion.div {...staggerChildren} className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 pl-4 sm:pl-6 lg:pl-8">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <blockquote className="flex-grow">
                          <p className="text-lg text-gray-600 italic mb-6">
                            "{testimonial.text}"
                          </p>
                        </blockquote>
                        <div className="flex items-center gap-4 mt-6">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={testimonial.image} alt={testimonial.author} />
                            <AvatarFallback>
                              {testimonial.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.author}</div>
                            <div className="text-sm text-gray-600">
                              {testimonial.role}, {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
              aria-label={t('testimonials.previous')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
              aria-label={t('testimonials.next')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
