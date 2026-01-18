import { motion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { cn } from "@/utils/cn";

interface DotsProps {
	className?: string;
	dotSize?: number;
	dotColor?: string;
	backgroundColor?: string;
}

export function Dots({
	className,
	dotSize = 1,
	dotColor = "rgba(139, 92, 246, 0.3)",
	backgroundColor = "transparent",
}: DotsProps) {
	const id = useId();
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const updateDimensions = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		updateDimensions();
		window.addEventListener("resize", updateDimensions);

		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	return (
		<div
			className={cn(
				"pointer-events-none absolute inset-0 overflow-hidden",
				className,
			)}
			style={{ backgroundColor }}
		>
			<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<pattern
						id={`dots-${id}`}
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<motion.circle
							cx="1"
							cy="1"
							r={dotSize}
							fill={dotColor}
							initial={{ opacity: 0.3 }}
							animate={{ opacity: [0.3, 0.6, 0.3] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill={`url(#dots-${id})`} />
			</svg>
		</div>
	);
}
