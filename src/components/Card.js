import React from 'react';



export default function Card(card) {
    let textBadge
    if (card.item.openSpots === 0) {
        textBadge = "SOLD OUT"
    }  else if (card.item.location === 'Online') {
        textBadge = 'ONLINE'
    }
    
    return (
        <div className='card'>
            {textBadge && <div className='text-badge'>{textBadge}</div>}
            <img src= {card.item.coverImg} alt='' className='card-img'/>
            <div className='card-stats'>
                <img src={'images/star.png'} className='card-star'/>
                <span>{card.item.rating}</span>
                <span className='gray'>({card.item.stats.reviewCount}) *</span>
                <span className='gray'>{card.item.location}</span>
            </div>
            <p className="card-title">{card.item.title}</p>
            <p className="card-price"><span className='bold'>From ${card.item.price}</span> / person</p>
        </div>
    )
} 

