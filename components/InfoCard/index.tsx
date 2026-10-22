import type { InfoItem } from "@/types/InfoItem";
import InfoCardDetails from "../InfoCardDetails";
import type { IPifyResponse } from "@/types/IPify";

type InfoCardProps = {
  geoData: IPifyResponse | null;
};

export default function InfoCard({ geoData }: InfoCardProps) {
  const infoItems: InfoItem[] = [
    {
      label: "Ip Address",
      value: geoData?.ip ?? "-",
    },
    {
      label: "Location",
      value: geoData
        ? `${geoData.location.city}, ${geoData.location.region} ${geoData.location.postalCode}`
        : "-",
    },
    {
      label: "Timezone",
      value: geoData ? `UTC ${geoData.location.timezone}` : "-",
    },
    {
      label: "ISP",
      value: geoData?.isp ?? "-",
    },
  ];
  return (
    <dl className="md:flex-row md:max-w-5xl md:mx-auto md:-mt-14 md:text-left md:divide-x md:divide-gray-400/30  flex flex-col gap-3 text-center bg-white p-6 rounded-2xl shadow-2xl -mt-30 mx-6">
      {infoItems.map((item) => (
        <InfoCardDetails key={item.label} {...item} />
      ))}
    </dl>
  );
}
