import './App.css';
import Intro from './Components/Intro-bar';
import ComponentSea from './Components/Component1sea.js';
import ThirdComponent from './Components/icons-component';
import Pic_Text from './Components/images';
import Circular from './Components/circular-images.js';
import Bottom from './Components/bottom-comp';
function App() {
  return (
    <div>
      <div><Intro/></div>
        <ComponentSea height={600} text="Build a landing page for your business or project and generate more leads!"/>
        <ThirdComponent/>
        <Pic_Text/>
        <Circular/>
        <ComponentSea height={400} text="Ready to get started? Sign up now!"/>
        <Bottom/>
    </div>
  );
}
export default App;
