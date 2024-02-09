import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ topics, photos }) => {
  const [likesArray, setLikesArray] = useState([]);
  const likesStoringFunction = (photoId) => {
    setLikesArray((prev) => {
      // first condition: likesStoringFunction is called when like button is clicked. if id already exists in array, that means the photo was UNliked (as id was previously liked and added). Now id needs to be removed from array. remove id using filter: return new array containing all items from prev that =/= photoId
      // second condition:  If the ID is not in the array, add it and return the new array
      return prev.includes(photoId) ? prev.filter(id => id !== photoId) : prev = [...prev, photoId];

    })
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics} likesArray={likesArray} />
      <PhotoList photos={photos} likesArray={likesArray} likesStoringFunction={likesStoringFunction} />
    </div>
  );
};

export default HomeRoute;
