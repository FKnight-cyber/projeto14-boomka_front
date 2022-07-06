import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Timer() {
    const [time, setTime] = useState(0);
    let endTime = dayjs().endOf('M');
    let endTime2 = dayjs(endTime).get('millisecond');

  useEffect(() => {
    setInterval(()=>{
        let duration = Date.now();
        let newTime = endTime2 - duration;
        setTime(newTime);
    },1000);
    
  }, [time,endTime2]);

  return(
    dayjs(time).format('DD[D] HH:mm:ss')
  );
}