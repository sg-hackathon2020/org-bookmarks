import React, {Component} from "react";
import GroupTable from "../../components/group/grouptable/GroupTable";
import NewGroupButton from "../../components/group/newgroupbutton/NewGroupButton";

class GroupsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="container">
                <div className="row p-1"><NewGroupButton/></div>
                <div className="row p-1">
                    <GroupTable/>
                </div>
            </div>
        );
    }
}

GroupsPage.propTypes = {};

export default GroupsPage;