import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { useTranslation } from "react-i18next";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface Message {
  content: string;
  isUser: boolean;
}

export default function Chat() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    { content: t('chat.welcome'), isUser: false }
  ]);
  const [input, setInput] = useState("");

  const mutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          context: messages.length > 1 ? messages[messages.length - 1].content : undefined
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setMessages(prev => [...prev, { content: data.message, isUser: false }]);
      } else {
        toast({
          title: t('chat.error.title'),
          description: data.message,
          variant: "destructive",
        });
      }
    },
    onError: () => {
      toast({
        title: t('chat.error.title'),
        description: t('chat.error.description'),
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || mutation.isPending) return;

    setMessages(prev => [...prev, { content: input, isUser: true }]);
    mutation.mutate(input);
    setInput("");
  };

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{t('chat.title')}</h1>
          <p className="mt-4 text-xl text-gray-600">
            {t('chat.description')}
          </p>
        </motion.div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="space-y-4 mb-4 max-h-[500px] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chat.inputPlaceholder')}
                className="resize-none"
                rows={1}
              />
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
