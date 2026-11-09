"use client";

import { Map, type MapProps } from "@/components/ui/nicaragua-map-utils/map";
import { nicaraguaMapData } from "@/components/ui/nicaragua-map-utils/nicaragua-data";

export type RegionId = (typeof nicaraguaMapData)["regions"][number]["id"];

export interface NicaraguaMapProps extends Omit<MapProps, "data"> {}

export function NicaraguaMap(props: NicaraguaMapProps) {
  return <Map data={nicaraguaMapData} {...props} />;
}

export default NicaraguaMap;
