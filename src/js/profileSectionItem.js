import React, { Component } from 'react';

class ProfileSectionItem extends Component {
    render() {
        return (
            <div>
                <label className="left">{this.props.label1}<i class="fa fa-pencil-square-o"></i></label>
                <label>{this.props.label2}</label>
                <br />
            </div>
        );
    }
}

export default ProfileSectionItem;
