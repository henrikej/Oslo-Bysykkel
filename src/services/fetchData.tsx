import { Stations, StationStatusData } from '../@Types/Stations';

const checkStatus = (res: Response) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    const error = new Error(res.statusText);
    throw error;
  }
};

export function getStations(): Promise<Stations> {
  return fetch(
    'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json',
  )
    .then(checkStatus)
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

export function getStationStatus(): Promise<StationStatusData> {
  return fetch(
    'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json',
  )
    .then(checkStatus)
    .then((res) => res.json())
    .catch((error) => console.log(error));
}
