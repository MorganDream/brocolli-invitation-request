import React from 'react';
import classNames from 'classnames';
import './FormInput.css';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    const {
      classes,
      name,
      type = 'text',
      placeholder,
      required = false,
      valid = true,
      validationError,
    } = this.props;

    const rootClasses = classNames({
      [classes]: true,
      'input-group': true,
      'input-group-invalid': !valid
    });

    return (
      <div className={rootClasses}>
        <input className={'input'}
               value={this.state.value}
               name={name}
               type={type}
               placeholder={placeholder}
               required={required}
               onChange={this.handleChange_}
        />
        <label className={'input-label'}>{validationError}</label>
      </div>
    )
  }

  handleChange_ = e => {
    this.setState({value: e.target.value});
    this.props.onInputAction(e.target.value, e.target.name);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.value!==prevState.value){
      return { value: nextProps.value};
    }
    return null;
  }
}

export default FormInput;