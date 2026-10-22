import type { InfoItem } from "@/types/InfoItem";

export default function InfoCardDetails({ label, value }: InfoItem) {
  return (
    <div className="md:flex-1 md:px-7">
      <dt className="md:text-l text-gray-400 text-xs font-bold uppercase tracking-widest">
        {label}
      </dt>
      <dd className="md:text-2xl text-xl font-medium text-gray-950 mt-1">
        {value}
      </dd>
    </div>
  );
}
