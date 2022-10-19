import React from "react";
import NewArtForm from "./NewArtForm";
import ArtList from "./ArtList";
import ArtDetail from "./ArtDetail";


class ArtControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisible: false,
      mainArtList: [],
      selectedArt: null
    };
  }


// We can choose to just pass in an object (the stateChange), but we can also pass in an arrow function that takes the current state and props as arguments. As we just mentioned, there are plenty of use cases where we need to know about the current state. Here are some examples:

// We want to toggle a boolean. That means we need to know the current state of the boolean so we can toggle it to its opposite state.
// We want to increment or decrement a value. A prime example is a counter that we need to increment by one or some other value each time a button is clicked.
// We want to update the state of a game.
  handleClick = () => {
    if(this.state.selectedArt != null) {
      this.setState({
        formVisible: false,
        selectedArt: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddingNewArtToList = (newArt) => {
    const newMainArtList = this.state.mainArtList.concat(newArt);
    this.setState({mainArtList: newMainArtList, formVisible: false});
  }

  handleChangingSelectedArt = (id) => {
    const selectedArt = this.state.mainArtList.filter(art => art.id === id)[0];
    this.setState({selectedArt: selectedArt});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedArt != null) {
        currentlyVisibleState = <ArtDetail art = {this.state.selectedArt} />
        buttonText="Return to Art List";
      } else {
      if (this.state.formVisible) {
          currentlyVisibleState = <NewArtForm onNewArtCreation={this.handleAddingNewArtToList} />;
          buttonText = "Return to Art List";
      } else {
        currentlyVisibleState = <ArtList onTicketSelection={this.handleChangingSelectedTicket} artList={this.state.mainArtList} />;
        buttonText = "Add Art";
      }
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