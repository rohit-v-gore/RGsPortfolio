import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const TacticalMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState("");
  const [isMapReady, setIsMapReady] = useState(false);

  const visitedLocations = [
    { name: "Washington DC", coordinates: [-77.0369, 38.9072] },
    { name: "New York", coordinates: [-74.006, 40.7128] },
    { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
    { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !apiKey) return;

    mapboxgl.accessToken = apiKey;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-98.5795, 39.8283],
      zoom: 3,
      pitch: 45,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", () => {
      setIsMapReady(true);

      // Add markers for visited locations
      visitedLocations.forEach((location) => {
        const el = document.createElement("div");
        el.className = "w-4 h-4 bg-primary rounded-full border-2 border-primary-foreground shadow-tactical";

        new mapboxgl.Marker(el)
          .setLngLat(location.coordinates as [number, number])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<div class="bg-card p-2 text-foreground font-mono text-sm">${location.name}</div>`
            )
          )
          .addTo(map.current!);
      });
    });
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      {!isMapReady && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/95 backdrop-blur">
          <div className="w-full max-w-md space-y-4 p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Enter Mapbox API Key</h3>
              <p className="text-sm text-muted-foreground">
                Get your free public token at{" "}
                <a
                  href="https://mapbox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>
            </div>
            <Input
              type="text"
              placeholder="pk.eyJ1..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="font-mono"
            />
            <Button onClick={initializeMap} className="w-full" disabled={!apiKey}>
              Initialize Map
            </Button>
          </div>
        </div>
      )}
      <div ref={mapContainer} className="h-full w-full rounded-lg border border-border" />
    </div>
  );
};

export default TacticalMap;
