"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
exports.spawnProcess = (pathToImg, args) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const imgProcArgs = args || getDefaultConfigurations(pathToImg);
        const imageProcessor = child_process_1.spawn('python', imgProcArgs);
        imageProcessor.stdout.on('data', (data) => {
            if (data.toString() === 'DONE') {
                imageProcessor.kill();
                return resolve();
            }
        });
        imageProcessor.stderr.on('data', (data) => {
            if (data.toString() === 'DONE') {
                imageProcessor.kill();
                return resolve();
            }
        });
        imageProcessor.on('close', (code) => {
            return resolve();
        });
    });
});
const getDefaultConfigurations = (pathToImg) => {
    return [
        process.env.IMAGE_RECOGNIZER_PAHT,
        '--image', pathToImg,
        '--model', path_1.default.join(process.env.IMAGE_PERFORME_DIR_PATH, 'output/smallvggnet.model'),
        '--label-bin', path_1.default.join(process.env.IMAGE_PERFORME_DIR_PATH, 'output/smallvggnet_lb.pickle'),
        '--width', '64',
        '--height', '64'
    ];
};
//# sourceMappingURL=process.js.map