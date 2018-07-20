
export default class User {
    constructor(
        private name: string,
        private avatarUrl: string,
        private linkGithub: string
    ) { }
    public getName(): string {
        return this.name;
    };
    public getAvatarUrl(): string {
        return this.avatarUrl;
    };
    public getLinkGithub(): string {
        return this.linkGithub;
    }
}
