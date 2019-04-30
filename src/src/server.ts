import socket from 'socket.io';
import dotenv from 'dotenv';
import ImageService from './services/ImageService';

dotenv.config({ path: ".env.stage" });

const io = socket(process.env.SOCKET_IO_PORT || 80);

io.on('connection', (socket) => {
  socket.on('startImageProcessing', async (img) => {
    const processedImg = await ImageService.manageImgProcess(img);
    socket.emit('processedImg', processedImg);
  })
});
