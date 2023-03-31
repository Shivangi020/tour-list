import React, { useState } from 'react'


function TourCard({id,image,price,info,name,deleteAction}) {
  const [readMore ,setReadMore] = useState(false)

  const clickToggle = ()=>{
    setReadMore(!readMore)
  }

  return (
    <div className='tour-card'>
        <section className='tour-image'>
            <img src={image} alt={name}></img>
        </section>
        <span className='tour-price'>$ {price}</span>
        <section className='tour-detail'>
            <h5 className='tour-name'>{name}</h5>
            <article className='tour-info'>
                <p>{readMore ? info : `${info.substring(0,200)}...`}<span onClick={clickToggle} className='read-more'>{readMore?`Show less`:`Read more`}</span></p>
            </article>
            <button className='tour-delete-btn' onClick={()=>deleteAction(id)}>Not Interested</button>
        </section>
    </div>
  )
}

export default TourCard