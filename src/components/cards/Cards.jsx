import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Global</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Broj zarazenih"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Broj trenutno zarazenih od COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Broj oporavljenih"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Broj oporavljenih od COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Broj smrtnih slucajeva"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Broj smrtnih slucajeva od COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
