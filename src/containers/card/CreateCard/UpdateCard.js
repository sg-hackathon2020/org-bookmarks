import React, {Component} from "react";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";
import CardForm from "../../../components/cards/cardform/CardForm";
import {Spinner} from "react-bootstrap";
import {Redirect} from "react-router-dom";

class UpdateCard extends Component {

    state = {
        //title, description, url, groupId
        title: null,
        description: null,
        url: null,
        groupId: this.props.match.params.groupId,
        cardId: this.props.match.params.cardId,
        card: null
    };

    cardSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onCardSave(this.state.title, this.state.description, this.state.url, this.props.card.id, this.state.groupId);
    }

    //consume groupId from route param
    componentDidMount() {
        this.setState({id: this.props.match.params.groupId});
        //fetch the existing object
        const {fetchCard} = this.props;
        fetchCard(this.state.group, this.state.cardId);
    }

    updateStateWithOriginal = (card) => {
        console.log(`inside update state with original: ${card}`);
        this.setState({
            title: card.title,
            description: card.description,
            url: card.url
        });
    };

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
        return (

            <> {spinner}
                {redirect}
                <CardForm whenInputChanges={this.onInputChange} whenFormIsSubmitted={this.cardSubmitHandler}
                          loading={this.props.loading} error={this.props.error} data={cardArray}
                          isUpdating={true}/></>
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
        error: state.card.error,
        card: state.card.update_card,
        redirectTo: state.card.redirectTo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCardSave: (title, description, url, cardId, groupId) => dispatch(actions.updateCard(title, description, url, cardId, groupId)),
        fetchCard: (groupId, cardId) => dispatch(actions.readCard(groupId, cardId, false))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCard);