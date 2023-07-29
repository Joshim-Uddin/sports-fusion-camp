import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

const Map = () => {
  const markerIcon = new L.Icon({
    iconUrl: "https://i.ibb.co/9hG8s4G/locate.png",
    iconSize: [25, 41],
    iconAnchor: [22, 41],
    popupAnchor: [1, -34],
  });
    return (
    <div>
        <MapContainer center={[24.0030981,88.8790879]} zoom={10} scrollWheelZoom={false} className="lg:h-[400px] h-[250px]">
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[24.0030981,88.8790879]} icon={markerIcon}/>
</MapContainer>
    </div>
        
    );
};

export default Map;