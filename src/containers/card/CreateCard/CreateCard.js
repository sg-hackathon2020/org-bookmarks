import React, {Component} from "react";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";
import CardForm from "../../../components/cards/cardform/CardForm";
import {Redirect} from "react-router-dom";
import {Spinner} from "react-bootstrap";

class CreateCard extends Component {
    state = {
        //title, description, url, groupId
        title: null,
        description: null,
        url: null,
        prefix: null,
        groupId: this.props.match.params.groupId
    }

    cardSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onCardSave(this.state.title, this.state.description, this.state.url, this.state.groupId, this.state.prefix);
    }

    //consume groupId from route param
    componentDidMount() {
        this.setState({id: this.props.match.params.groupId});
    }

    render() {
        const redirectLink = `/cards-page/${this.state.groupId}`;
        const {card, loading} = this.props;
        const cardArray = {...card};

        let spinner = null;

        if (loading) {
            spinner = <Spinner animation="grow" variant="success"/>
        }
        let redirect = null;
        if (this.props.redirectTo) {
            redirect = <Redirect to={redirectLink}/>
        }

        return (<>
                {redirect}
                {spinner}
                <CardForm whenInputChanges={this.onInputChange} whenFormIsSubmitted={this.cardSubmitHandler}
                          loading={this.props.loading} error={this.props.error} isUpdating={false}/>
            </>
        );
    }

    onInputChange = (id, value) => {
        switch (id) {
            case 'title':
                this.setState({title: value});
                break;
            case 'prefix':
                this.setState({prefix: value});
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
        error: state.card.error,
        redirectTo: state.card.redirectTo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCardSave: (title, description, url, groupId, prefix) => dispatch(actions.createCard(title, description, url, groupId, prefix))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);