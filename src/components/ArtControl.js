import React from "react";
import NewArtForm from "./NewArtForm";
import ArtList from "./ArtList";
import ArtDetail from "./ArtDetail";
import EditArtForm from "./EditArtForm";


class ArtControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisible: false,
      mainArtList: [],
      selectedArt: null,
      editing: false,
      sightings: 1
    };
  }


// We can choose to just pass in an object (the stateChange), but we can also pass in an arrow function that takes the current state and props as arguments. As we just mentioned, there are plenty of use cases where we need to know about the current state. Here are some examples:

// We want to toggle a boolean. That means we need to know the current state of the boolean so we can toggle it to its opposite state.
// We want to increment or decrement a value. A prime example is a counter that we need to increment by one or some other value each time a button is clicked.
// We want to update the state of a game.
  handleClick = () => {
    if(this.state.selectedArt !== null) {
      this.setState({
        formVisible: false,
        selectedArt: null, 
        editing: false, 
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  handleAddingNewArtToList = (newArt) => {
    const newMainArtList = this.state.mainArtList.concat(newArt);
    this.setState({mainArtList: newMainArtList});
    this.setState({formVisible: false});
  }

  handleChangingSelectedArt = (id) => {
    const selectedArt = this.state.mainArtList.filter(art => art.id === id)[0];
    this.setState({selectedArt: selectedArt});
  }

  handleDeletingArt = (id) => {
    const newMainArtList = this.state.mainArtList.filter(art => art.id !== id);
    this.setState({
      mainArtList: newMainArtList,
      selectedArt: null
    })
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingArtInList = (artToEdit) => {
    const editedmainArtList = this.state.mainArtList
      .filter(art => art.id !== this.state.selectedArt.id)
      .concat(artToEdit);
    this.setState({
      mainArtList: editedmainArtList,
      editing: false,
      selectedArt: null
    });
  }

  handleIncrementSightings = () => {
    this.setState({ sightings: this.state.sightings + 1 });
    console.log(this.state.sightings);
  }

  
  handleDecreaseSightings = () => {
    this.setState({ sightings: this.state.sightings - 1 });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditArtForm art = {this.state.selectedArt} />
      buttonText="Return to Art List";
    } else if (this.state.selectedArt != null) {
      currentlyVisibleState = <ArtDetail 
      art = {this.state.selectedArt} 
      onClickingDelete = {this.handleDeletingArt} 
      onClickingEdit = {this.handleEditClick} />
      buttonText="Return to Art List";
    } else if (this.state.formVisible) {
        currentlyVisibleState = <NewArtForm onNewArtCreation={this.handleAddingNewArtToList} />;
        buttonText = "Return to Art List";
    } else {
      currentlyVisibleState = <ArtList onIncrement={this.handleIncrementSightings} onArtSelection={this.handleChangingSelectedArt} artList={this.state.mainArtList} />;
      
      buttonText = "Add Art";
    }
  
    
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ArtControl;