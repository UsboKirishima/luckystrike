import { RestManager } from "../rest/RestManager";

//Git credentials for login.
export interface Credentials {
    username: string;
    token: string;
}

//LuckyStrike main class
export default class LuckyStrike {

    /**
     * Git username
     */
    private readonly username: string;
    /**
     * Git token
     */
    private readonly token: string;
    /**
     * Rest manager
     */
    public REST: RestManager;

    public constructor(private readonly creds: Credentials) {
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
    public async clone(repoUrl: string) {
        this.REST.fetchRepo(repoUrl).then((res) => {
            return res;
        })
    }
}