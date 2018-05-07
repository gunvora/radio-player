import React from "react"
import Station from "./station.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radioChannels: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      console.log("here is data:", json)
      this.setState({
        radioChannels: json.channels
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.radioChannels.map((channel, index) => {
          if (index === 16 || index === 18 || index === 2) {
            return <Station
              color={channel.color}
              name={channel.name}
              audio={channel.liveaudio.url}
              image={channel.image} />
          }
        })
        }
      </div>
    )
  }
}

export default App
