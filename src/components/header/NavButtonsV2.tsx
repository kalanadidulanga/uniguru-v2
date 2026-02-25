import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavButtonsV2Props {
  className?: string;
}

const NavButtonsV2 = ({ className }: NavButtonsV2Props) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Link href="/login" className="w-full sm:w-auto">
        <button className="w-full sm:w-auto px-5 py-2.5 rounded-full font-semibold bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#c4a030] transition-all shadow-md hover:shadow-lg text-sm whitespace-nowrap">
          Login
        </button>
      </Link>
      <Link href="/book" className="w-full sm:w-auto hidden xl:block">
        <button className="w-full sm:w-auto bg-[#1a3b85] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#152d6b] transition-all shadow-md hover:shadow-lg whitespace-nowrap text-sm relative overflow-hidden group">
          <span className="relative z-10">Book a Consultation</span>
          <span className="absolute top-0 right-0 w-1 h-full bg-[#D4AF37]"></span>
        </button>
      </Link>
      {/* Mobile/Tablet version of Book button */}
      <Link href="/book" className="w-full sm:w-auto xl:hidden">
        <button className="w-full sm:w-auto bg-[#1a3b85] text-white px-4 py-2.5 rounded-full font-semibold hover:bg-[#152d6b] transition-all shadow-md hover:shadow-lg whitespace-nowrap text-sm relative overflow-hidden group">
          <span className="relative z-10">Book</span>
          <span className="absolute top-0 right-0 w-1 h-full bg-[#D4AF37]"></span>
        </button>
      </Link>
    </div>
  );
};

export default NavButtonsV2;
