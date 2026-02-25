import { Star, Shield, MapPin } from "lucide-react";
import Link from "next/link";

const TrustBar = () => {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {/* Google Reviews */}
          <Link
            href="https://www.google.com/search?q=uniguru+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2B59C3] transition-colors">
                97+ Google Reviews
              </p>
              <p className="text-xs text-gray-500">Trusted by students</p>
            </div>
          </Link>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

          {/* IAA Regulated */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#2B59C3]/5 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#2B59C3]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                IAA Regulated
              </p>
              <p className="text-xs text-gray-500">
                Immigration Advisers Authority
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

          {/* London Registered Address */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#2B59C3]/5 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#2B59C3]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                London Registered
              </p>
              <p className="text-xs text-gray-500">
                128 City Road, London EC1V 2NX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
