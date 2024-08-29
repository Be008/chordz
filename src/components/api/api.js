import axios from 'axios';

export default async function handler(req, res) {
  const API_KEY = 'YAIzaSyAP1VXjOUQzS6_NGOmMt0qt8pnWJWvq1bQ'; // Substitua pelo seu YouTube API key
  const HASHTAG = 'blues';
  const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=%23${HASHTAG}&type=video&key=${API_KEY}`;

  try {
    const response = await axios.get(YOUTUBE_API_URL);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Error fetching videos' });
  }
}
