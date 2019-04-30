import { spawn } from 'child_process';
import path from 'path';

export const spawnProcess = async (pathToImg: string, args?: string[]): Promise<any> => {
	return new Promise((resolve, reject) => {
    const imgProcArgs = args || getDefaultConfigurations(pathToImg);
    const imageProcessor = spawn('python', imgProcArgs);

    imageProcessor.stdout.on('data', (data) => {
      if(data.toString() === 'DONE') {
        imageProcessor.kill();
        return resolve()
      }
    });

    imageProcessor.stderr.on('data', (data) => {
      if(data.toString() === 'DONE') {
        imageProcessor.kill();
        return resolve()
      }
    });

    imageProcessor.on('error', () => {
      return reject();
    })

    imageProcessor.on('close', (code) => {
      return resolve();
    });

	});
};

const getDefaultConfigurations = (pathToImg: string): string[] => {
  return [
    process.env.IMAGE_RECOGNIZER_PAHT,
    '--image', pathToImg,
    '--model', path.join(process.env.IMAGE_PERFORME_DIR_PATH, 'output/smallvggnet.model'),
    '--label-bin', path.join(process.env.IMAGE_PERFORME_DIR_PATH, 'output/smallvggnet_lb.pickle'),
    '--width', '64',
    '--height', '64'
  ];
};