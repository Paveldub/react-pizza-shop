import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="132" cy="139" r="135" />
    <rect x="-24" y="293" rx="0" ry="0" width="322" height="31" />
    <rect x="201" y="317" rx="0" ry="0" width="27" height="2" />
    <rect x="0" y="341" rx="0" ry="0" width="305" height="69" />
    <rect x="3" y="459" rx="0" ry="0" width="238" height="30" />
    <rect x="3" y="424" rx="0" ry="0" width="332" height="31" />
  </ContentLoader>
);

export default Loader;
