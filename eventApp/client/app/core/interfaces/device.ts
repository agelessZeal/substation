interface Device {
  baymrid: string;
  mrid: string;
  name: string;
  devicetypemrid: string;
  location: Location;
  iec61850: Array<Iec61850>;
  description: string;
}
