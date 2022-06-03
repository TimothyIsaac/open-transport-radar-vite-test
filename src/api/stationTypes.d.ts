declare module StationType {
  export interface Location {
    type: string;
    id: string;
    latitude: number;
    longitude: number;
  }

  export interface Products {
    "express-train": boolean;
    "long-distance-train": boolean;
    "regiona-train": boolean;
    "s-bahn": boolean;
    "u-bahn": boolean;
    tram: boolean;
    bus: boolean;
    watercraft: boolean;
    ast: boolean;
    "cable-car": boolean;
  }

  export interface Station {
    type: string;
    id: string;
    name: string;
    location: Location;
    products: Products;
    distance: number;
  }
}

