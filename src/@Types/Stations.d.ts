export interface Stations {
    last_updated: number;
    ttl:          number;
    data:         Data;
}

export interface Data {
    stations: Station[];
}

export interface Station {
    station_id: string;
    name:       string;
    address:    string;
    lat:        number;
    lon:        number;
    capacity:   number;
}

export interface StationStatusData {
    last_updated: number;
    data:         StatusData;
}

export interface StatusData {
    stations: StationStatus[];
}

export interface StationStatus {
    is_installed:        number;
    is_renting:          number;
    num_bikes_available: number;
    num_docks_available: number;
    last_reported:       number;
    is_returning:        number;
    station_id:          string;
}