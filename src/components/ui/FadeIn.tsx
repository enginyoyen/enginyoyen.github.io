import { motion, type Variants } from "framer-motion";
import { cn } from "@/utils/cn";

interface FadeInProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
	duration?: number;
}

export function FadeIn({
	children,
	className,
	delay = 0,
	direction = "up",
	duration = 0.5,
}: FadeInProps) {
	const directionOffset = {
		up: { y: 20 },
		down: { y: -20 },
		left: { x: 20 },
		right: { x: -20 },
	};

	const variants: Variants = {
		hidden: {
			opacity: 0,
			...directionOffset[direction],
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
		},
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={variants}
			transition={{
				duration,
				delay,
				ease: "easeOut",
			}}
			className={cn(className)}
		>
			{children}
		</motion.div>
	);
}
