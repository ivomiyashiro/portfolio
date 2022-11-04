import { useEffect, useState } from 'react';

export const useMenuItems = () => {
  const [link1, setLink1] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);

  useEffect(() => {
    const animation1 = setInterval(() => {
      setLink1(true);
    }, [500]);
    const animation2 = setInterval(() => {
      setLink2(true);
    }, [600]);
    const animation3 = setInterval(() => {
      setLink3(true);
    }, [700]);
    const animation4 = setInterval(() => {
      setLink4(true);
    }, [800]);
    const animation5 = setInterval(() => {
      setLink5(true);
    }, [900]);
    return () => {
      clearInterval(animation1);
      clearInterval(animation2);
      clearInterval(animation3);
      clearInterval(animation4);
      clearInterval(animation5);
    };
  }, []);

  return {
    link1,
    link2,
    link3,
    link4,
    link5
  };
};
