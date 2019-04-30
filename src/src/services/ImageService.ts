import { spawnProcess } from '../utils/process';
import {
  saveFileForImgProcessing,
  readProcessedImg,
  deleteUsedFiles,
  pathToProcessedImg
} from '../utils/file';

class ImageService {
  static async manageImgProcess(img: Buffer | string): Promise<Buffer | any> {
    const fileName = saveFileForImgProcessing(img);
    await spawnProcess(fileName);
    const processedImg = readProcessedImg(pathToProcessedImg);
    deleteUsedFiles(fileName);
    return processedImg;
  }
}

export default ImageService;