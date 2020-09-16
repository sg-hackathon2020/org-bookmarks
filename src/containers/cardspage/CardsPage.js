import React, {Component} from "react";
import BookMarkCard from "../../components/cards/BookMarkCard";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import LoadingComponent from "../../components/UI/loading/LoadingComponent";
import {Redirect} from "react-router-dom";
import {Button} from "react-bootstrap";


class CardsPage extends Component {

    state = {
        cards: [],
        groupId: this.props.match.params.groupId,
        loading: null,
        error: null,
        editPressed: false,
        editUrl: null,
        addPressed: false,
        addUrl: null
    };

    componentDidMount() {
        this.setState({groupId: this.props.match.params.groupId});
        const {fetchCards} = this.props;
        fetchCards(this.state.groupId);
    }


    cardSelectedHandler = (id) => {
        this.setState({showSinglePost: id})
        console.log('selected post');
        console.log(id);
    }

    createCard = (groupId) => {

        this.setState({
            editPressed: true,
            editUrl: `/card-create/${groupId}`
        });
    }

    cardEditHandler = (id) => {
        console.log(`on edit clicked: ${id}`);
        this.setState({
            editPressed: true,
            editUrl: `/card-update/1/${id}`
        });

    };


    /*todo: make cards visually clickable and show modal
    *  i have already added on on click even and method cardSelectedHandler*/
    render() {
        console.log(this.props);
        const {cards, error, loading} = this.props;
        if (this.state.editPressed) {
            return <Redirect to={this.state.editUrl}/>
        }
        let fetchedCards = null;
        let loadingOrNoItems = null;
        if (loading) {
            loadingOrNoItems = <LoadingComponent loading={loading}/>
        }

        /*TODO: add error message*/
        /* if (error) {

         }*/

        if (cards && !loading) {
            fetchedCards = [...cards].map((card, index) => {
                return <BookMarkCard key={card.id}
                                     title={card.title}
                                     description={card.description}
                                     tinyUrl={card.shortUrl}
                                     clicked={() => this.cardSelectedHandler(card.id)}
                                     whenEdit={() => this.cardEditHandler(card.id)}/>
            });
        }
        return (
            <>
                <div className="container p-5">
                    <Button variant="outline-info" onClick={() => this.createCard(this.state.groupId)}>Crate A
                        Card</Button>
                    {loadingOrNoItems}
                    <div className="row row justify-content-around">
                        {fetchedCards}
                    </div>
                </div>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        loading: state.card.loading,
        error: state.card.error,
        cards: state.card.cards
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCards: (groupId) => dispatch(actions.readGroupCard(groupId))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CardsPage);