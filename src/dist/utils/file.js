"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const v4_1 = __importDefault(require("uuid/v4"));
const path_1 = __importDefault(require("path"));
exports.pathToProcessedImg = path_1.default.join(__dirname, 'tmp', 'process_image.png');
exports.saveFileForImgProcessing = (img) => {
    const tempFileName = v4_1.default();
    const pathToFile = path_1.default.join(process.env.IMAGE_PERFORME_PATH, tempFileName + '.png');
    const updatedBase64Img = img.replace(/^data:image\/(png;base64|jpg;base64|jpeg;base64),/, '');
    fs_1.default.writeFileSync(pathToFile, updatedBase64Img, 'base64');
    return pathToFile;
};
exports.deleteUsedFiles = (pathToFile) => {
    fs_1.default.unlinkSync(pathToFile);
    fs_1.default.unlinkSync(exports.pathToProcessedImg);
};
exports.readProcessedImg = (filePath) => {
    return fs_1.default.readFileSync(exports.pathToProcessedImg);
};
//# sourceMappingURL=file.js.map