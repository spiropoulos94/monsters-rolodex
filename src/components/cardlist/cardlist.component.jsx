import React from 'react';
import "./cardlist.styles.css"

const CardList = (props) => {

    return (
        <div className={'card-list'}>
            {props.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
        </div>
    );
};

export default CardList;
