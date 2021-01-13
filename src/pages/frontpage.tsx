import React from 'react';
import { Station, StationStatus } from '../@Types/Stations';
import { getStations, getStationStatus } from '../services/fetchData';
import { StationList } from '../components/StationList';
import { createStyles, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    body: {
      maxWidth: 1280,
      maxHeight: 1000,
      overflow: 'auto',
      margin: 'auto',
      marginTop: 50,
    },
  }),
);

export const FrontPage: React.FC = () => {
  const [stations, setStations] = React.useState<Station[]>();
  const [stationStatus, setStationStatus] = React.useState<StationStatus[]>();
  const classes = useStyles();
  React.useEffect(() => {
    getStations().then((data) => {
      if (data) setStations(data.data.stations);
    });
    getStationStatus().then((data) => {
      if (data) setStationStatus(data.data.stations);
    });
  }, []);

  return (
    <Paper className={classes.body}>
      {stations && stationStatus && (
        <StationList stations={stations} stationsStatus={stationStatus} />
      )}
    </Paper>
  );
};
