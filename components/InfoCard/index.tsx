import type { InfoItem } from "@/types/InfoItem";
import InfoCardDetails from "../InfoCardDetails";

const infoItems: InfoItem[] = [
  {
    label: "Ip Address",
    value: "192.168.178.21",
  },
  {
    label: "Location",
    value: "London",
  },
  {
    label: "Timezone",
    value: "UTC +2",
  },
  {
    label: "ISP",
    value: "SpaceX Starlink",
  },
];
export default function InfoCard() {
  return (
    <dl className="md:flex-row md:max-w-5xl md:mx-auto md:-mt-14 md:text-left md:divide-x md:divide-gray-400/30  flex flex-col gap-3 text-center bg-white p-6 rounded-2xl shadow-2xl -mt-30 mx-6">
      {infoItems.map((item) => (
        <InfoCardDetails key={item.label} {...item} />
      ))}
    </dl>
  );
}
