import React from "react";
import { connect } from 'react-redux'
// import { increment, decrement, reset } from './actionCreators'
import CardFormLayout from './CardFormLayout.jsx';

class CardForm extends React.Component {
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

const CHANGE_TEXT_INPUT = 'CHANGE_TEXT_INPUT';

const changeTextInput = e => {
  const { name, type, checked, value } = e.target;
  // let value = type === 'checkbox' ? checked : e.target.value;
  // this.setState({[name]: value});
  return {
    type: CHANGE_TEXT_INPUT,
    payload: { name, type, checked, value },
  };
}

function mapStateToProps(state /*, ownProps*/) {
  return {
    cardContent: state.cardContent,
  }
}
// bkin reducer
// perlu bkin terpisah tiap input ga?

const mapDispatchToProps = { changeTextInput };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);
