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


  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <input
          type='text'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input;}}/>
        <input
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='remaining'
          placeholder='Remaining'
          ref={(input) => {_remaining = input;}}/>
        
        <button type='submit'>Make new Keg</button>
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKeg;