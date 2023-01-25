import { ReactNode } from "react";

export const PageContainer = ({ children }: { children: ReactNode }) => {
	return <main className="min-h-screen">{children}</main>;
};
