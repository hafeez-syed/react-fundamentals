import React from 'react';

class App extends React.Component {
  render() {
    return (
        <div className="parent">
          <h1>Hello world</h1> <b>{this.props.message}</b> <i>{this.props.haircut}</i>
        </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  message: "Blad is gold"
};

export default App;
