import React, {Component} from 'react';
import axios from "axios";
import userCompoment from "./UserCompoment";
import UserCompoment from "./UserCompoment";
const creators =
    ["freeCodeCamp",
      "Scarra",
      "Pokimane",
      "LilyPichu",
      "DisguisedToast",
      "michaelreeves",
      "QuarterJade",
      "Masayoshi",
      "Sydeon",
      "Yvonnie"
    ];



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const creatorlist = creators.map((creator) =>(
        <UserCompoment creator={creator}/>
    ))
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          {creatorlist}
        </div>
    );
  }
}

export default App;
