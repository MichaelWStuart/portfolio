import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    maxWidth: '546px',
    minWidth: '370px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '0 auto',
    padding: '10px',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: '#CFD8DC',
    textAlign: 'left',
    marginLeft: 0
  },
};

const tilesData = [
  {
    img: 'images/projects/HeatMap.png',
    title: 'Heat Graph',
    url: 'http://codepen.io/MichaelWStuart/full/LxprYe/',
  },
  {
    img: 'images/projects/GameOfLife.png',
    title: 'Game of Life',
    url: 'http://codepen.io/MichaelWStuart/full/yVjJxE/',
  },
  {
    img: 'images/projects/Contiguity.png',
    title: 'Force Diagram',
    url: 'http://codepen.io/MichaelWStuart/full/ggrJOv/',
  },
  {
    img: 'images/projects/Dungeon.png',
    title: 'Dungeon Crawler',
    url: 'https://miwst.github.io/FCC-Dungeon-Crawler/',
  },
  {
    img: 'images/projects/Meteorites.png',
    title: 'Meteorite Map',
    url: 'http://codepen.io/MichaelWStuart/full/JEKOaa/',
  },
  {
    img: 'images/projects/BarChart.png',
    title: 'Bar Chart',
    url: 'http://codepen.io/MichaelWStuart/full/xgGmPq/',
  },
];

const Projects = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          className='projects'
          onClick={() => window.open(tile.url)}
          alt='tile.url'
        >
          <img src={tile.img} role="presentation"/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Projects;
