import React from "react"
import BackgroundSlider from 'react-background-slider'

function Header(){
    return(
<BackgroundSlider
  images={['https://i.pinimg.com/originals/eb/15/02/eb150222790a631f91e377ae3ee7e030.jpg','https://i.pinimg.com/originals/7b/e3/8f/7be38fc37dd889f3c189cacfa0bfc440.jpg']}
  duration={10} transition={2} />
    );
}

export default Header