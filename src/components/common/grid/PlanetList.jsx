import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ItemCard from './ItemCard';

const styles = {
  planetColumn: {
    marginBottom: 20
  }
}
const PlanetListComponent = ({planets}) => {
  const planetColumns = planets ? planets.map(planet => (
    <Col style={styles.planetColumn}  xs={12} sm={4} md={3} lg={3}>
      <ItemCard planet={planet}/>
    </Col>
  )) : null;

  console.log(planetColumns)
  return (
    <Row>
      {planetColumns}
    </Row>
  );
}

export default PlanetListComponent;