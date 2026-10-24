"use client";
import Header from "../Header";
import InfoCard from "../InfoCard";
import type { IPifyResponse } from "@/types/IPify";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

async function getGeoData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch geolocation data");
  }
  const data: IPifyResponse = await response.json();
  return data;
}

export default function IpTracker() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const url = query
    ? `/api/geolocation?query=${encodeURIComponent(query)}`
    : "/api/geolocation";

  const { data, error, isLoading } = useSWR<IPifyResponse>(url, getGeoData);

  if (error) {
    return (
      <>
        <Header />
        <p>{error.message} </p>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <Header />
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <InfoCard geoData={data ?? null} />
        {data && <Map lat={data.location.lat} lng={data.location.lng} />}
      </main>
    </>
  );
}
