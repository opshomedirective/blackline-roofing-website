import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function NotFound() {
  useSEO({ title: "Page not found | Blackline Roofing", description: "This page doesn't exist." });
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden pt-32 text-center">
      <img src={IMG.aerialDrone} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="wrap relative">
        <p className="font-display text-[9rem] leading-none font-extrabold text-sky sm:text-[14rem]">404</p>
        <h1 className="text-4xl font-extrabold">This page blew off in the monsoon.</h1>
        <Link to="/" className="btn btn-sky mt-10">
          Back to home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
