import React from 'react';
import Emojis from './Emojis';
import emojiArr from '../emojiList';
import FilterByNameOrKeyword from './FilterByName';

class AppV1 extends React.Component {
    state = {
        emojis: emojiArr,
        filter: ''
    }

    render () {
        return <div>
            <h1 id="header"> Emoji Search App </h1>
            <p id="image">
                <img src="https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https:%2F%2Fwww.emojirequest.com%2Fimg%2FrequestEmojisBlackBG.jpg&sp=85e2a884754e8c2802fc91883c0d8fbc" alt="emojis" />
            </p>
            <FilterByNameOrKeyword handleInput={this.handleInput} handleKeywordInput={this.handleKeywordInput} emojis={this.state.emojis} />
            <Emojis emojis={this.state.filter === "" ? this.state.emojis : this.state.emojis.filter(
                      emoji => {
                          const filterWords = this.state.filter.split(' ')
                        return (
                            filterWords.every(word => emoji.keywords.includes(word))
                            || emoji.title.toLowerCase().includes(filterWords)
                        );
                      }
                    )} />
          </div>;
    }

    handleInput = event => {
        this.setState({
            filter: event.target.value
        });
    };

    handleKeywordInput = event => {
        this.setState({
            filter: event.target.value
        });
    };
}


export default AppV1;