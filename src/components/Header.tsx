import {
  AppBar,
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      textTransform: 'none',
      fontSize: 14,
      color: 'inherit',
      float: 'right',
    },
  }),
);

export const Header: React.FC = (props) => {
  const classes = useStyles();
  const [locale, setLocale] = React.useState('nb');
  /*
  Verdi for å "bytte språk" gjør igjenting men kunne ha blitt propegert til app for ev oversettelse.
  synes bare headeren ble litt tom..
  */
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Grid container>
            <Grid item xs={10}>
              <Typography variant={'h5'}>Bysykkel stasjons liste</Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={() => setLocale(locale === 'en' ? 'nb' : 'en')}
                className={classes.button}
              >
                <Box fontWeight={locale === 'nb' ? 'bold' : ''}>Norsk</Box>
                <Box>/</Box>
                <Box fontWeight={locale === 'en' ? 'bold' : ''}>English</Box>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
