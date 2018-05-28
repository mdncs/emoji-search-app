import React from 'react';

class FilterByNameOrKeyword extends React.Component {

    render () {
        return <fieldset id="searchEmoji">
            Find an emoji by name or by keyword
            <br/>
            <p id="inputBox"><input id="inputText" type="text" placeholder="Type here..." onChange={this.props.handleInput} /></p>
 </fieldset>
    }
}


export default FilterByNameOrKeyword;