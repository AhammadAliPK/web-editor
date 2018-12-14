import React, { Component } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Vector from 'ol/layer/Vector';
import Source from 'ol/source/Vector';



class App extends Component {


    componentDidMount() {
        // create feature layer and vector source
        var featuresLayer = new Vector({
            source: new Source({
                features: [],
            })
        });

        console.log('rand',this.getRandom(2,3));
        // create map object with feature layer
        var map1 = new Map({
            target: this.refs.mapContainer,
            layers: [
                //default OSM layer
                new Tile({
                    source: new OSM()
                }),
               // featuresLayer
            ],
            view: new View({
                center: [-11718716.28195593, 4869217.172379018], //Boulder, CO
                zoom: 13,
            })
        });

        // save map and layer references to local state
        this.setState({
            map: map1,
            featuresLayer: featuresLayer
        });

        map1.on('click', this.handleMapClick.bind(this));
    }
   
    getRandom(min,max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
    createRandom(){
        let a = new Array(50).fill(false);
        let lowerLimit=1;
        let upperLimit=50;
        let numstring='';
    }
    handleMapClick(event) {

       debugger;
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href='https://openlayers.org/en/v5.3.0/css/ol.css' />
                <div ref="mapContainer"></div>
            </div>

        );
    }
}

export default App;