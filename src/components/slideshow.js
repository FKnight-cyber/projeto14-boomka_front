import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
 
export const slider = (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    bullets={false}
    style={{ "--slider-height-percentage": "30%" }}
  >
    <div><img src="https://themes.kabum.com.br/conteudo/carrossel/2414/cel/MOBILE-JULHO-GAMER-TEMA.jpg" alt="" srcset="" /></div>
    <div><img src="https://themes.kabum.com.br/conteudo/carrossel/2218/cel/MOBILE-ODD-TEMA.jpg" alt="" srcset="" /></div>
    <div><img src="https://themes.kabum.com.br/conteudo/carrossel/2427/cel/MOBILE-JULHO-GAMER-PERIFERICOS-TEMA.jpg" alt="" srcset="" /></div>
  </AutoplaySlider>
);
