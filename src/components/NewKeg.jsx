import React from 'react';
import PropTypes from 'prop-types';

function NewKeg(props){
  let _names = null;
  let _brewer = null;
  let _abv = null;
  let _description = null;
  let _price = null;
  let _remaining = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({names: _names.value, brewer: _brewer.value, abv: _abv.value, description: _description.value, price: _price.value, remaining: parseInt(_remaining.value) });
    _names.value = '';
    _brewer.value = '';
    _abv.value = '';
    _description.value = '';
    _price.value = '';
    _remaining.value = '';
  }

  let formStyle = {
    padding: "20px",
  }

  let inputStyle = {
    display: "block",
    width: "60%",
    margin: "0 auto",
    textAlign: "center",
    height: "30px"
  }


  return (
    <div style={formStyle}>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          style={inputStyle}
          type='text'
          id='names'
          placeholder='Name'
          ref={(input) => {_names = input;}}/>
        <input
          style={inputStyle}
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <input
          style={inputStyle}
          type='text'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input;}}/>
        <input
          style={inputStyle}        
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
        <input
          style={inputStyle}
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          style={inputStyle}
          type='text'
          id='remaining'
          placeholder='Remaining'
          ref={(input) => {_remaining = input;}}/>
        
        <button style={inputStyle} type='submit'>Make new Keg</button>
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKeg;