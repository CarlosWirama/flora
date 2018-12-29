import React from "react";
import CardFormLayout from './CardFormLayout.jsx';

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
    const { name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({[name]: newValue});
  }

  _onSubmit = e => {
    e.preventDefault();
    this.props.history.push('/form/delivery');
  }

  _onRadioCheckboxChanged = e => {
    if (e.target.name == 'dontUseCard')
      this.setState({ requestBlankCard: false });
    else if (e.target.name == 'requestBlankCard')
      this.setState({ dontUseCard: false });
    this._onInputChange(e);
  }

  _cardAreaClicked = () => {
    this.cardContentTextarea.disabled = false;
    this.cardContentTextarea.focus();
    this.setState({
      dontUseCard: false,
      requestBlankCard: false,
    });
  }

  _refCardContent = ref => this.cardContentTextarea = ref

  render () {
    return (
      <CardFormLayout
        inputState={this.state}
        onChange={this._onInputChange}
        onSubmit={this._onSubmit}
        onRadioCheckboxChanged={this._onRadioCheckboxChanged}
        cardAreaClicked={this._cardAreaClicked}
        refCardContent={this._refCardContent}
      />
    );
  }
}
