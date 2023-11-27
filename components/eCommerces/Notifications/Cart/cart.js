import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import '../Cart/cart.css';
import 'react-toastify/dist/ReactToastify.css';
//import '../Cart/'

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
 const [cartItems, setCartItems] = useState(0);

 const handleAddToCart = () => {// This is handle the add to cart.
    setCartItems(cartItems + 1); //When every then click add to cart will add plus 1 or product.
    toast.success('Product added to cart!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
 };

   // Example data or props for the image
  const imageData = {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2F7615d681a83f41b49eeb7e2030d33e9a',
    width: '100',
    alt: 'shop cart',
  };

 return (
    <div className="App">
      {/* Your App Components */}
      {/* <button onClick={handleAddToCart}>Button</button> */}
        <div className="1Z8I3E cart-icon">
            <span className="shopping-cart">
              <i className="shopping-cart">
                <Image
                  src={imageData.src}
                  width={imageData.width}
                  height={imageData.height}
                  alt={imageData.alt}
                />
              </i>
            </span>
            <span className="cart-count">
              {cartItems}
            </span>
        </div>
    </div>
 );
}

export default App;

