var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from 'node-fetch';
//RestManager fetches urls and apis
export class RestManager {
    constructor(options) {
        this.options = options;
        /**
         * Param "options"
         * @type object
         */
        this.options = options;
        /**
         * Param "repoUrl" from "options"
         */
        this.repoUrl = options.repoUrl;
    }
    /**
     * Fetch info of a repository
     * @param repoUrl
     */
    fetchRepo(repoUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!repoUrl.toLowerCase().includes('http'))
                return new Error(`"${repoUrl}" is not an url.`);
            yield fetch(repoUrl).then((res) => __awaiter(this, void 0, void 0, function* () {
                //Repository info mapping
                (yield res).map((commit) => __awaiter(this, void 0, void 0, function* () {
                    return commit;
                }));
            }));
        });
    }
}
