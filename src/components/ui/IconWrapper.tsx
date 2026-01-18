import type { LucideIcon } from "lucide-react";

interface IconWrapperProps {
	icon: LucideIcon;
	className?: string;
}

export function IconWrapper({ icon: Icon, className = "" }: IconWrapperProps) {
	return <Icon className={className} strokeWidth={1.5} />;
}
