import React, { useState, useEffect } from 'react';
import Stories from "../data/Stories";

function Article() {
  const [stories, setStories] = useState(Stories);

  // Function to shuffle the array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    // Shuffle the stories array when the component mounts
    setStories(shuffleArray(Stories));
  }, []); // Empty dependency array ensures it only runs once when the component mounts

  return (
    <article className='article'>
      <div className="article-section">
        {stories.map((story, index) => (
          <div key={story.id} className={`article-story ${index === 0 ? 'article-featured-story' : ''}`}>
            <img className='article-img' src={`/Images/${story.image}`} alt={story.headline} />
            <div className='article-copy'>
              <h2>{story.headline}</h2>
              <p>{story.excerpt}</p>
              <p>by {story.author}</p>
              <p>{story.published_date}</p>
              <a href="#">{story.category}</a>
              <div className="article-tags">
                {story.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Article;
