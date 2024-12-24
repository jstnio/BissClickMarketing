import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" }
];

const languageMessages = {
  en: {
    title: 'Language Changed',
    description: 'The language has been set to English'
  },
  es: {
    title: 'Idioma Cambiado',
    description: 'El idioma ha sido configurado a Español'
  },
  fr: {
    title: 'Langue Modifiée',
    description: 'La langue a été configurée en Français'
  },
  it: {
    title: 'Lingua Cambiata',
    description: 'La lingua è stata impostata su Italiano'
  },
  pt: {
    title: 'Idioma Alterado',
    description: 'O idioma foi configurado para Português'
  }
};

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { toast } = useToast();

  const changeLanguage = useCallback((langCode: string) => {
    i18n.changeLanguage(langCode).then(() => {
      localStorage.setItem('i18nextLng', langCode);
      const messages = languageMessages[langCode as keyof typeof languageMessages];
      toast({
        title: messages.title,
        description: messages.description,
        duration: 2000
      });
    });
  }, [i18n, toast]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`cursor-pointer ${
              i18n.language === lang.code ? 'bg-primary/10' : ''
            }`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}