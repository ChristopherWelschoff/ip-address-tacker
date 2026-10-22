"use client";
import Header from "../Header";
import InfoCard from "../InfoCard";
import { useEffect, useState } from "react";
import type { IPifyResponse } from "@/types/IPify";

async function getGeoData(query?: string) {
  const url = query
    ? `/api/geolocation?query=${encodeURIComponent(query)}`
    : "/api/geolocation";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch geolocation data");
  }
  const data: IPifyResponse = await response.json();
  return data;
}

export default function IpTracker() {
  const [geoData, setGeoData] = useState<IPifyResponse | null>(null);

  async function handleSearch(query: string) {
    try {
      const data = await getGeoData(query);
      setGeoData(data);
    } catch (error) {
      //todo toast message for users
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchGeoData() {
      const data = await getGeoData();
      setGeoData(data);
    }
    fetchGeoData();
  }, []);

  return (
    <>
      <Header onSearch={handleSearch} />
      <main>
        <InfoCard geoData={geoData} />
      </main>
    </>
  );
}
