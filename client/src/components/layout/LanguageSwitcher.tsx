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
  { code: "es", name: "Español" }
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { toast } = useToast();

  const changeLanguage = useCallback((langCode: string) => {
    i18n.changeLanguage(langCode).then(() => {
      localStorage.setItem('i18nextLng', langCode);
      toast({
        title: langCode === 'en' ? 'Language Changed' : 'Idioma Cambiado',
        description: langCode === 'en' 
          ? 'The language has been set to English'
          : 'El idioma ha sido configurado a Español',
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