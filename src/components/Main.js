import React, {Component} from "react"
import { PlayersData } from "../shared/ListOfPlayers"
import PlayersPresentation from "./PlayerPresentation";
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: PlayersData
        };
    }
    render() {
        return <PlayersPresentation players={this.state.players}/>
    }
}

