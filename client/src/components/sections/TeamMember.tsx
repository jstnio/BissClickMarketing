import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export function TeamMember({ name, role, bio, image }: TeamMemberProps) {
  return (
    <motion.div {...fadeIn}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription className="text-primary">{role}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
