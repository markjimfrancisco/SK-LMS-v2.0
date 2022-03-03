import socketio from "socket.io-client";
import React from 'react'

export const socket = socketio.connect(`${process.env.SERVER_DOMAIN}`);
export const SocketContext = React.createContext();
