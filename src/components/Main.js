import React, {Component} from "react"
import { PlayersData } from "../shared/ListOfPlayers"
import PlayersPresentation from "./PlayerPresentation";
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: PlayersData //presentational manage state of app
        };
    }
    render() {
        return <PlayersPresentation players={this.state.players}/>//input prop to presentational component
    }
}
//Typically responsible for interacting with data sources, handling state changes, and passing data to child components.

