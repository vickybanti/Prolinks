"use client";

import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (typeof window !== "undefined" && !window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
          initMap();
        };
      } else {
        initMap();
      }
    };

    const initMap = () => {
      const mapElement = document.getElementById("map");
      if (mapElement && window.google) {
        new google.maps.Map(mapElement as HTMLElement, {
          center: { lat: 30, lng: -110 },
          zoom: 8,
        });
      }
    };

    loadGoogleMaps();
  }, []);

  return <div id="map" className="w-full h-screen bg-black"></div>;
};

export default Map;
