import { Link } from "react-router-dom";
import { IMG } from "../data/images";
import { BUSINESS } from "../data/site";

export default function Logo({ className = "h-11" }: { className?: string }) {
  return (
    <Link to="/" aria-label={`${BUSINESS.name} — home`} className="shrink-0">
      <img src={IMG.logo} alt={`${BUSINESS.shortName} logo`} className={`${className} w-auto`} />
    </Link>
  );
}
