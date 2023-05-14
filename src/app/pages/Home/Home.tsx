import ReactAudioPlayer from 'react-audio-player';
import './styles/index.css';
const Home = () => {
  return (
  <div>
  <h3>Home</h3>

  <div className='Player'>
  <ReactAudioPlayer
  src="my_audio_file.ogg"
  autoPlay
  controls
  
/>
</div>
</div>
);
};

export default Home;
