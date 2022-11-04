import React, { useContext } from 'react'
import io from 'socket.io-client'
import { v4 as uuidV4 } from 'uuid'

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

const ENDPOINT = 'https://www.xpresspassphoto.com/'
const socketID = 'NorthAmerica1234'
let socket = io(ENDPOINT)
socket.emit('setup', socketID)

export function SocketProvider() {
    return socket
}