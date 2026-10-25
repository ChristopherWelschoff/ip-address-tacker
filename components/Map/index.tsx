"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMap } from "react-leaflet/hooks";
import { useEffect } from "react";

const locationIcon = L.icon({
  iconUrl: "/icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

type MapProps = {
  lat: number;
  lng: number;
};

function MapUpdater({ lat, lng }: MapProps) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], map.getZoom(), { animate: false });
    map.panBy([0, -100], { animate: false });
  }, [map, lat, lng]);

  return null;
}

export default function Map({ lat, lng }: MapProps) {
  return (
    <MapContainer
      className="md:h-[calc(100dvh-244px)] h-[calc(100dvh-290px)] isolate  -mt-50 md:-mt-30"
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <MapUpdater lat={lat} lng={lng} />
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={locationIcon} position={[lat, lng]}>
        <Popup>You´re serarched location</Popup>
      </Marker>
    </MapContainer>
  );
}
