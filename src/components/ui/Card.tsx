import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface CardProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}

export function Card({ children, className, delay = 0 }: CardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.4,
				delay,
				ease: "easeOut",
			}}
			whileHover={{
				y: -4,
				transition: { duration: 0.2 },
			}}
			className={cn(
				"group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-transparent to-accent/5 p-8 backdrop-blur-sm transition-all duration-300",
				className,
			)}
		>
			<div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			<div className="relative z-10">{children}</div>
		</motion.div>
	);
}
