import React, {Component} from "react"
import { FilmData } from "../shared/ListOfFilm";
import FilmPresentation from "./FilmPresentation";
export class FilmContainer extends Component {
    constructor() {
        super();
        this.state = {
            films: FilmData //presentational manage state of app
        };
    }
    render() {
        return <FilmPresentation films={this.state.films}/>//input prop to presentational component
    }
}
//Typically responsible for interacting with data sources, handling state changes, and passing data to child components.
