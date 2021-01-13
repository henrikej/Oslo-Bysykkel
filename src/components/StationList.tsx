import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React from 'react';
import { Station, StationStatus } from '../@Types/Stations';

interface StationListProps {
  stations: Station[];
  stationsStatus: StationStatus[];
}
export const StationList: React.FC<StationListProps> = ({
  stations,
  stationsStatus,
}) => {
  const [selectedStation, setSelectedStation] = React.useState('627');
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    stationId: string,
  ) => {
    setSelectedStation(stationId);
  };

  function stationStatusList(station: Station) {
    const stationInfo = stationsStatus.find(
      (elem) => elem.station_id === station.station_id,
    );
    return (
      <List>
        <ListItem>
          <ListItemText
            primary={
              'Available spots: ' +
              (stationInfo ? stationInfo.num_docks_available : 'missing value')
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              'Number of available bikes: ' +
              (stationInfo ? stationInfo.num_bikes_available : 'missing value')
            }
          />
        </ListItem>
      </List>
    );
  }

  return (
    <div>
      {stations.map((station: Station) => {
        return (
          <List key={station.station_id}>
            <ListItem
              button
              selected={selectedStation === station.station_id}
              onClick={(event) =>
                handleListItemClick(event, station.station_id)
              }
            >
              <ListItemText primary={station.name} />
              {selectedStation === station.station_id ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItem>
            <Collapse
              in={selectedStation === station.station_id}
              timeout="auto"
              unmountOnExit
            >
              {stationStatusList(station)}
            </Collapse>
          </List>
        );
      })}
    </div>
  );
};
