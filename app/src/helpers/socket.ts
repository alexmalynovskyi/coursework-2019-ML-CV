import io from 'socket.io-client';

const connectionUri = 'http://localhost:80/';

export const socket = io(connectionUri);
