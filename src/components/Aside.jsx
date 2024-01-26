import React from 'react'
import asideData from '../data/asideData.json'
import { useState, useEffect } from 'react'



function Aside() {
    const [asides, setAsides] = useState(asideData);
    return (
        <div className='sidebar'>

            {asides.map((asideCategory) => (
                <div key={asideCategory.id}>
                    <h2>{asideCategory.category}</h2>

                    {asideCategory.items && asideCategory.items.map((item, index) => (
                        <div className='sidebar-wrapper' key={item.title}>
                            <h3>{item.title}</h3>
                            <img src={item.img} alt={item.title} className={`sidebar-img ${index === 0 ? 'sidebar-react' : ''}`} />
                            <p>{item.description}</p>

                        </div>
                    ))}
                    {asideCategory.tips && asideCategory.tips.map((tip, index) => (
                        <p key={index}>{tip}</p>
                    ))}
                    {asideCategory.content && asideCategory.content.map((content) => (
                        <div className='sidebar-wrapper' key={content.type}>

                            {content.img && <img src={content.img} alt={content.type} className='sidebar-img' />}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Aside;