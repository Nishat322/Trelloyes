import React from 'react'

import Card from './Card'

import './List.css'

class List extends React.Component{
    static defaultProps = {
        cards: [],
        header: ""
    }

    render(){
        const {cards, header} = this.props
        return (
            <div className="List">
                <section className="List">
                    <header className="List-header">
                        <h2>{header}</h2>
                    </header>
                    <div className="List-cards">
                        {cards.map(card => (
                            <Card
                            key = {card.id}
                            title = {card.title}
                            content = {card.content}
                        />
                        ))}
                    </div>
                    <button type="button" className="List-add-button">
                        + Add Random Card
                    </button>
                </section>
            </div>
        )
    }
}
    


export default List