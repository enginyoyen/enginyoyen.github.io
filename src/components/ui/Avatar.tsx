import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface AvatarProps {
	initials?: string;
	className?: string;
	size?: "sm" | "md" | "lg" | "xl";
}

export function Avatar({ initials = "EY", className, size = "lg" }: AvatarProps) {
	const sizeClasses = {
		sm: "h-16 w-16 text-lg",
		md: "h-24 w-24 text-2xl",
		lg: "h-32 w-32 text-4xl",
		xl: "h-48 w-48 text-6xl",
	};

	return (
		<motion.div
			initial={{ scale: 0.8, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{
				duration: 0.5,
				ease: "easeOut",
			}}
			className={cn(
				"relative flex items-center justify-center overflow-hidden rounded-full border-2 font-bold shadow-lg",
				"border-gray-950/10 bg-gray-950/5",
				"dark:border-gray-50/10 dark:bg-gray-50/10",
				sizeClasses[size],
				className,
			)}
		>
			<span className="relative z-10 select-none font-bold tracking-tight">{initials}</span>
			<motion.div
				className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-950/5 to-transparent dark:via-gray-50/5"
				animate={{
					rotate: [0, 360],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "linear",
				}}
			/>
		</motion.div>
	);
}
