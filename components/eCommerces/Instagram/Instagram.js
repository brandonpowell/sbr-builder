/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function InstagramReels() {
  const { data: session } = useSession();
  const [reelsData, setReelsData] = useState([]);

  useEffect(() => {
    const fetchReels = async () => {
      if (!session) {
        return;
      }

      // Fetch user's Instagram media based on a specific hashtag
      try {
        const response = await axios.get(
          `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${session.accessToken}`
        );

        // Filter media based on a specific hashtag
        const hashtagReels = response.data.data.filter(
          (reel) => reel.caption && reel.caption.includes('#yourhashtag')
        );

        setReelsData(hashtagReels);
      } catch (error) {
        console.error('Error fetching reels:', error);
      }
    };

    fetchReels();
  }, [session]);

  if (!session) {
    return <p>Please sign in</p>;
  }

  return (
    <div>
      {reelsData.length > 0 ? (
        <div className="reels-grid">
          {reelsData.map((reel) => (
            <div key={reel.id} className="reel-item">
              <img src={reel.thumbnail_url} alt={reel.caption} />
            </div>
          ))}
        </div>
        
      ) : (
        <p>No reels found. Please use the hashtag to be featured on our website.</p>
      )}
    </div>
  );
}
