import React from 'react';


// Define the Image component
function Image({ src, width, height, alt }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img 
      src={src} 
      width={width} 
      height={height} 
      alt={alt} 
    />;
}
function App() {

   // Example data or props for the image
  const imageData = {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2Fcd3181ece7214376be89dd9cb5ee98ab',
    width: '100',
    alt: 'Favorite Button',
  };

 return (
    <div className="App">
      {/* Your App Components */}
        <a href=''>
            <div className="fav-icon">
                <span className="fav-button">
                <i className="fav-button">
                    <Image
                    src={imageData.src}
                    width={imageData.width}
                    height={imageData.height}
                    alt={imageData.alt}
                    />
                </i>
                </span>
            </div>
        </a>
    </div>
 );
}

export default App;