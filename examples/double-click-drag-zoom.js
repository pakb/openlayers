import Map from '../src/ol/Map.js';
import View from '../src/ol/View.js';
import DblClickDragZoom from '../src/ol/interaction/DblClickDragZoom.js';
import {defaults as defaultInteractions} from '../src/ol/interaction/defaults.js';
import TileLayer from '../src/ol/layer/Tile.js';
import OSM from '../src/ol/source/OSM.js';

const map = new Map({
  interactions: defaultInteractions().extend([new DblClickDragZoom()]),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});
