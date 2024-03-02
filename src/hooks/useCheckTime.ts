import { useEffect, useState } from 'react';

export default function useCheckTime() {
  const START_DATE = new Date('2024-03-03 00:00:00');
  const [timeDiff, setTimeDiff] = useState<number>(START_DATE.getTime() - Date.now());
  
  useEffect(()=>{
    setTimeDiff(START_DATE.getTime() - Date.now());
  }, []);

  return timeDiff<=0 ;
}