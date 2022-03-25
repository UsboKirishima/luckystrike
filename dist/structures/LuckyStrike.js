var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { RestManager } from "../rest/RestManager";
//LuckyStrike main class
export default class LuckyStrike {
    constructor(creds) {
        this.creds = creds;
        /**
         * Param "creds": Credentials
         */
        this.creds = creds;
        /**
         * Param username from "creds"
         */
        this.username = this.creds.username;
        /**
         * Param token from "creds"
         */
        this.token = this.creds.token;
        /**
         * Class RestManager
         */
        this.REST = new RestManager();
    }
    /**
     * Clone a repository
     * @param repoUrl
     */
    clone(repoUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            this.REST.fetchRepo(repoUrl).then((res) => {
                return res;
            });
        });
    }
}
