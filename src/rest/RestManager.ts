import fetch from 'node-fetch';

//Options of RestManager class contructor
export interface RestManagerOptions {
    repoUrl?: string;
}

//RestManager fetches urls and apis
export class RestManager {

    /**
     * Git repository url
     */
    public repoUrl?: string;

    public constructor(public options?: RestManagerOptions) {
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
    public async fetchRepo(
        repoUrl: string
    ): Promise<any> {
        if(!repoUrl.toLowerCase().includes('http')) return new Error(`"${repoUrl}" is not an url.`);

        await fetch(repoUrl).then(async (res: any) => {
            //Repository info mapping
            (await res).map(async (commit: any) => {
                return commit;
            })
        })
    }
}