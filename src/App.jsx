import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Fooder from "./compounent/Fooder";
import Detail from "./compounent/Detail";
import Cantact_Us from "./compounent/Cantact_Us";
import My_Skill from "./compounent/My_Skill";

const App = () => {
  // spring animation settings for the whole page
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1500 },
  });


  return (
    <animated.div style={fadeIn} className="space-y-10 p-10">
      <div className="bg-gradient-to-r from-pink-500 via-orange-400 to-green-400 p-10 rounded-2xl shadow-lg">
        <Fooder />
      </div>

      <Detail />

      <My_Skill />

      <Cantact_Us />
    </animated.div>
  );
};

export default App;
