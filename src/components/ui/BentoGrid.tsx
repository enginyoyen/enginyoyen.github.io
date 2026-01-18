import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface BentoGridProps {
	children: React.ReactNode;
	className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
	return (
		<div
			className={cn(
				"grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-3",
				className,
			)}
		>
			{children}
		</div>
	);
}

interface BentoCardProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	colSpan?: number;
	rowSpan?: number;
}

export function BentoCard({
	children,
	className,
	delay = 0,
	colSpan = 1,
	rowSpan = 1,
}: BentoCardProps) {
	const spanClasses = cn(
		colSpan === 2 && "md:col-span-2",
		colSpan === 3 && "md:col-span-3",
		rowSpan === 2 && "md:row-span-2",
	);

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
				"group relative overflow-hidden rounded-xl border p-6 transition-all duration-300",
				"border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
				"dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15",
				spanClasses,
				className,
			)}
		>
			<div className="relative z-10 h-full">{children}</div>
		</motion.div>
	);
}
