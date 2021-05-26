import React from "react"
import ReactDOM from "react-dom"
import Gallery from "./component/gallery"
import Preview from "./component/preview"
import SearchBar from "./component/searchbar"

class App extends React.Component{

    state = {
        photos: [],
        chooseImageIndex: null
    }

    savePhotos = (results) => {
        this.setState({photos: results, chooseImageIndex:null})
    }

    previewImage = (idx) => {
        this.setState({chooseImageIndex: idx})
    }

    render(){
        return (
          <>
            <SearchBar save={this.savePhotos} />
            {this.state.photos.length &&
            this.state.chooseImageIndex !== null ? (
              <Preview
                photoUrl={
                  this.state.photos[this.state.chooseImageIndex].largeImageURL
                }
              />
            ) : null}

            <Gallery preview={this.previewImage} photos={this.state.photos} />
          </>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))
