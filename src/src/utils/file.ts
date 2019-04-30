import fs from 'fs';
import uuid from 'uuid/v4';
import path from 'path';
export const pathToProcessedImg = path.join(__dirname, 'tmp', 'process_image.png');

export const saveFileForImgProcessing = (img: any): string => {
  const tempFileName = uuid();
  const pathToFile = path.join(process.env.IMAGE_PERFORME_PATH, tempFileName + '.png');
  const updatedBase64Img = img.replace(/^data:image\/(png;base64|jpg;base64|jpeg;base64),/, '')
  fs.writeFileSync(pathToFile, updatedBase64Img, 'base64');
  return pathToFile
}

export const deleteUsedFiles = (pathToFile: string): void => {
  fs.unlinkSync(pathToFile);
  fs.unlinkSync(pathToProcessedImg);
}

export const readProcessedImg = (filePath: string): Buffer => {
  return fs.readFileSync(pathToProcessedImg);
}
