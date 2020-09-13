import React, {Component} from "react";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";
import CardForm from "../../../components/cards/cardform/CardForm";

class CreateCard extends Component {
    state = {
        //title, description, url, groupId
        title: null,
        description: null,
        url: null,
        groupId: this.props.match.params.groupId
    }

    cardSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onCardSave(this.state.title, this.state.description, this.state.url, this.state.groupId);
    }

    //consume groupId from route param
    componentDidMount() {
        this.setState({id: this.props.match.params.groupId});
    }

    render() {

        return (
            <CardForm whenInputChanges={this.onInputChange} whenFormIsSubmitted={this.cardSubmitHandler}
                      loading={this.props.loading} error={this.props.error} isUpdating={false}/>
        );
    }

    onInputChange = (id, value) => {
        switch (id) {
            case 'title':
                this.setState({title: value});
                break;
            case 'description':
                this.setState({description: value});
                break;
            case 'url':
                this.setState({url: value});
                break;
            default:
                break;
        }
    };
}

const mapStateToProps = state => {
    return {
        loading: state.card.loading,
        error: state.card.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCardSave: (title, description, url, groupId) => dispatch(actions.createCard(title, description, url, groupId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);