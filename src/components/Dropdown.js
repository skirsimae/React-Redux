import React from 'react'
import ui from '@rcsole/redux-ui'

class Dropdown extends React.Component {
   constructor(props) {
      super(props);
      this.state = {value: 'lsk'};

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({value: event.target.value});
   }

   render() {
      return (
         <form className="dropdown">
            <label>
               Enter Threshold<br/>
               <select value={this.state.value} onChange={this.handleChange}>
                  <option value="lsk">Lisk (LSK)</option>
                  <option value="eth">Etherium (ETH)</option>
                  <option value="xmr">Monero (XMR)</option>
                  <option value="strat">Stratis (STRAT)</option>
                  <option value="bch">Bitcoin Cash (BCH)</option>
               </select>
            </label>
         </form>
      );
   }
}

function select(state) {
   return {};
};

export default Dropdown

