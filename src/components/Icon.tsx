import {
  Building2, CloudLightning, Droplets, FileCheck2, HardHat, Home, House, Layers, LayoutGrid,
  PaintRoller, Rows3, ScanSearch, Square, Wrench, type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Building2, CloudLightning, Droplets, FileCheck2, HardHat, Home, House, Layers, LayoutGrid,
  PaintRoller, Rows3, ScanSearch, Square, Wrench,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = ICONS[name] ?? Home;
  return <C className={className} strokeWidth={1.75} />;
}
