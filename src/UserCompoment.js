import React, {Component} from 'react';
import axios from "axios";
import "./UserCompoment.css"
class UserCompoment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      game: null,
      online: false,
      picture: null,
      loading: true
    }
  }
  componentDidMount() {
    console.log(this.props.creator)
    axios.get('http://localhost:3001/' + this.props.creator)
        .then((res)=>{
          if(!res.data.err)
            this.setState({
              user: res.data.user,
              game: res.data.game,
              online: res.data.online,
              picture: res.data.picture_url,
              loading: false
            })
        })
  }

  render() {
    return (
        <div className={`user row ${this.state.online && 'online'}`}>
          <div className="col-xs-2 col-sm-1"><img className="logo" src={this.state.picture} alt={this.state.name}/></div>
          <div className="col-xs-10 col-sm-5">{this.state.loading? 'Loading': `${this.state.user}`} </div>
          <div className="col-xs-10 col-sm-6"> {this.state.online? this.state.game : 'Offline'}</div>
        </div>
    );
  }
}

UserCompoment.propTypes = {};

export default UserCompoment;