import User from "../classes/User";

export default class UserService {
    private users: User[];
    constructor() {
        const usersFetch = [
            {
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
                "followers_url": "https://api.github.com/users/mojombo/followers",
                "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
                "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/mojombo",
                "id": 1,
                "login": "mojombo",
                "node_id": "MDQ6VXNlcjE=",
                "organizations_url": "https://api.github.com/users/mojombo/orgs",
                "received_events_url": "https://api.github.com/users/mojombo/received_events",
                "repos_url": "https://api.github.com/users/mojombo/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/mojombo"
            },
            {
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
                "followers_url": "https://api.github.com/users/defunkt/followers",
                "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/defunkt",
                "id": 2,
                "login": "defunkt",
                "node_id": "MDQ6VXNlcjI=",
                "organizations_url": "https://api.github.com/users/defunkt/orgs",
                "received_events_url": "https://api.github.com/users/defunkt/received_events",
                "repos_url": "https://api.github.com/users/defunkt/repos",
                "site_admin": true,
                "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/defunkt"
            },
            {
                "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
                "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
                "followers_url": "https://api.github.com/users/pjhyett/followers",
                "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
                "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/pjhyett",
                "id": 3,
                "login": "pjhyett",
                "node_id": "MDQ6VXNlcjM=",
                "organizations_url": "https://api.github.com/users/pjhyett/orgs",
                "received_events_url": "https://api.github.com/users/pjhyett/received_events",
                "repos_url": "https://api.github.com/users/pjhyett/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/pjhyett"
            },
            {
                "avatar_url": "https://avatars0.githubusercontent.com/u/4?v=4",
                "events_url": "https://api.github.com/users/wycats/events{/privacy}",
                "followers_url": "https://api.github.com/users/wycats/followers",
                "following_url": "https://api.github.com/users/wycats/following{/other_user}",
                "gists_url": "https://api.github.com/users/wycats/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/wycats",
                "id": 4,
                "login": "wycats",
                "node_id": "MDQ6VXNlcjQ=",
                "organizations_url": "https://api.github.com/users/wycats/orgs",
                "received_events_url": "https://api.github.com/users/wycats/received_events",
                "repos_url": "https://api.github.com/users/wycats/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/wycats/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/wycats/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/wycats"
            }
        ]

        this.users = this.mapUserList(usersFetch);
    }

    public getUsers(): User[] {
        return this.users;
    }

    private mapUserList(userList: any[]): User[] {
        const validUserList: any[] = userList.filter((user: any) =>
            this.isUser(user)
        );

        return validUserList.map((user: any) => {
            return new User(user.login, user.avatar_url, user.html_url);
        });
    }

    private isUser(user: any): user is User {
        return typeof user.login === 'string' &&
            typeof user.avatar_url === 'string' &&
            typeof user.html_url === 'string';
    }
};
