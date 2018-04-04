import React from "react"

class Station extends React.Component {

  render() {
    return (
      <div className="station" style={{backgroundColor: '#' + this.props.color}}>
        <div>
          <img src={this.props.image} alt="img" />
        </div>
        <div>
          <div className="name-audio">
            <h1> {this.props.name}</h1>
          </div>
          <div>
            <audio controls>
              <source src={this.props.audio} />
            </audio>
          </div>
        </div>
      </div>
    )
  }
}

export default Station
