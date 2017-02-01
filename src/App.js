import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            heading: 'Hair world',
            location: 'Watton St.'
        }
    }
    updateHeading(e) {
        this.setState({
            heading: e.target.value,
        })
    }
    updateLocation(e) {
        this.setState({
            location: e.target.value,
        })
    }
    render() {
        let default_message = this.props.default_message;
        let haircut = this.props.haircut;
        let size = this.props.size;
        return (
            <div className="parent">
                <h1>{ this.state.heading }</h1>
                <b>{ default_message }</b>
                <br />
                <i>{ haircut + size }</i>
                <br />
                <br />
                Location: <strong>{this.state.location}</strong>
                <br />
                <br />
                <input name="heading" placeholder="Heading" type="text" onChange={this.updateHeading.bind(this)} />
                <br />
                <br />
                <LocationWidget update={this.updateLocation.bind(this)} />
                <br />
                <br />
                <ButtonComponent> <Heart /> React</ButtonComponent>
                <br />
                <br />
                Attention: <Person firstName="Hafeez"/>
            </div>
        )
    }
}

const LocationWidget = function (props) {
    return <input name="location" placeholder="Location widget" type="text" onChange={props.update} />
};

const ButtonComponent = function (props) {
  return <button>{props.children}</button>
};

const Heart = function (props) {
  return <span>I &hearts;</span>
};

const Person = function (props) {
  return <strong>{props.firstName}</strong>
};

Person.propTypes = {
  firstName(props, propName, component) {
      if(!(propName in props)) {
          return new Error(`missing ${propName}`)
      }

      if(props[propName].length < 4) {
          return new Error(`${propName} was too short`)
      }
  }
};

App.propTypes = {
  message: React.PropTypes.string,
  size: React.PropTypes.number.isRequired
};

App.defaultProps = {
  default_message: 'Bald is graceful'
};

export default App;
