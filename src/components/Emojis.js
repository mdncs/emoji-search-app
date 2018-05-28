import React from 'react';

function Emojis ({ emojis }) {
    const removeDuplicateKeywords = (keyword, i, array) => array.indexOf(keyword) === i;
    if (!emojis.length) return "Emoji not found";
    return (
        <div id="emojiList">
            <ul>
        {emojis.map((emoji, i) => {
            return <li key={i}>{emoji.symbol} - {emoji.title} (keywords: {emoji.keywords.split(' ').filter(removeDuplicateKeywords).join(' ')})</li>
        })}
        </ul>
        </div>
    )
}

export default Emojis;