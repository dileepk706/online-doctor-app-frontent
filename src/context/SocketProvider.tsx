

import React, { createContext, useMemo, useContext } from "react";
import { io } from 'socket.io-client';

interface SocketProviderProps {
  children: React.ReactNode;
}


// export const useSocket = () => {
//   const socket = useContext(SocketContext);
//   return socket;
// };

const ENDPOINT = 'https://shopsmart.cloud'

const SocketContext = createContext<any>(null);

export const useSocket = () => {
  const socket = io(ENDPOINT)
  return socket;
};

// const socket = io('http://localhost:5000');


const ContextProvider:React.FC<SocketProviderProps> = ({ children }) => {
  const socket = useMemo(() => io(ENDPOINT), []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}



export { ContextProvider, SocketContext };
