import React from "react";

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: '',
      dontUseCard: '',
      requestBlankCard: '',
    };
  }

  _onInputChange = e => {
    const {name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({[name]: newValue});
  }

  _onSubmit = e => {
    e.preventDefault();
  }

  _onRadioCheckboxChanged = e => {
    if (e.target.name == 'dontUseCard')
      this.setState({ requestBlankCard: false });
    else if (e.target.name == 'requestBlankCard')
      this.setState({ dontUseCard: false });
    this._onInputChange(e);
  }

  _cardAreaClicked = () => {
    this.refs.cardContent.disabled = false;
    this.refs.cardContent.focus();
    this.setState({
      dontUseCard: false,
      requestBlankCard: false,
    });
  }

  render () {
    return (
      <CardFormLayout
        inputState={this.state}
        onChange={this._onInputChange}
        onSubmit={this._onSubmit}
        onRadioCheckboxChanged={this._onRadioCheckboxChanged}
        cardAreaClicked={this._cardAreaClicked}
      />
    );
  }
}
