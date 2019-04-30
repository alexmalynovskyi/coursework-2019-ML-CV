"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("../utils/process");
const file_1 = require("../utils/file");
class ImageService {
    static manageImgProcess(img) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = file_1.saveFileForImgProcessing(img);
            yield process_1.spawnProcess(fileName);
            const processedImg = file_1.readProcessedImg(file_1.pathToProcessedImg);
            file_1.deleteUsedFiles(fileName);
            return processedImg;
        });
    }
}
exports.default = ImageService;
//# sourceMappingURL=ImageService.js.map