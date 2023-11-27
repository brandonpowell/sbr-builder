// src/components/CollectionPage.js
import React, { useState, useEffect } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';

// Replace with your Public API Key.
builder.init(YOUR_API_KEY);

const CollectionPage = ({ urlPath }) => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedHero = await builder
        .get('collection-hero', {
          userAttributes: {
            urlPath,
          },
        })
        .toPromise();
      setHero(fetchedHero);
    }

    fetchData();
  }, [urlPath]);

  return (
    <>
      {/* Put your header here. */}
      <YourHeader />
      {hero && <BuilderComponent model="collection-hero" content={hero} />}
      {/* Put the rest of your page here. */}
      <TheRestOfYourPage />
    </>
  );
};

export default CollectionPage;