import * as React from "react";
import User from "../classes/User";

interface IProps {
    user: User;
}

interface IState {
    user: User;
}

export default class UserComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            user: props.user
        }
    }
    public render() {
        const imgStyle = {
            height: '100px',
            width: '100px'
        }
        return (
            <ul>
                <li>
                    <div style={imgStyle} >
                        <img src={this.state.user.getAvatarUrl()} alt="" style={imgStyle} />
                    </div>
                </li>
                <li>{this.state.user.getName()}</li>
                <li>
                    <a href={this.state.user.getLinkGithub()}>
                        {this.state.user.getLinkGithub()}
                    </a>
                </li>
            </ul>
        );
    }
}
