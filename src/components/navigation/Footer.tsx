import { SITE_NAME, YEAR } from "@/utils/constant";

export const Footer = () => {
  return (
    <footer>
      <p className="text-center text-xs text-neutral-500 md:text-base">
        &copy; {YEAR} {SITE_NAME}
      </p>
    </footer>
  );
};
