import React, { useEffect, useState } from "react";
import Header from "./header";
import AWS from "aws-sdk";
import "./imageshow.css";

AWS.config.update({
  region: 'ap-south-1',
  credentials: new AWS.Credentials('AKIAW3MEAGPEVWKIQJ7T', 'S3M6q9XhFHxnEuptsWeQeyzCY2CR2Fm0koO3mZkC'), 
});

const s3 = new AWS.S3();

function Exibution() {
  const [imageUrls, setImageUrls] = useState([]);
  const [fullScreenImage, setFullScreenImage] = useState(null); 

  useEffect(() => {
    const fetchImages = async () => {
      const params = {
        Bucket: 'premium-arts123', 
      };

      try {
        const data = await s3.listObjectsV2(params).promise();
        const urls = data.Contents.map(item =>
          `https://${params.Bucket}.s3.ap-south-1.amazonaws.com/${item.Key}`
        );
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const openFullScreen = (url) => {
    setFullScreenImage(url);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div>
      <Header />
      <div className="gallery-container">
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <div key={index} className="card" onClick={() => openFullScreen(url)}>
              <img src={url} alt={`Images not found`} />
            </div>
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>

      {fullScreenImage && (
        <div className="fullscreen" onClick={closeFullScreen}>
          <img src={fullScreenImage} alt="Full screen" />
        </div>
      )}
    </div>
  );
}

export default Exibution;