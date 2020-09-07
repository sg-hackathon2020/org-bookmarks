import React, {Component} from "react";
import BookMarkCard from "../../components/cards/BookMarkCard";
import axios from 'axios';
import BookMarkNavbar from "../../components/navbar/BookMarkNavbar";

class CardsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            showSinglePost: null,
            singleCard: null

        };

    }

    //on click show the single element somewhere else
    componentDidUpdate(prevProps, prevState, snapshot) {
        const id = 1;
        if (this.state.showSinglePost) {
            //only call if new id has been requested, otherwise will go in infinite loop
            if (!this.state.singleCard || (this.state.singleCard && this.state.singleCard.id !== this.state.showSinglePost)) {
                axios.get('http://localhost:8080/api/v1/cards/' + this.state.showSinglePost)
                    .then(response => {
                        this.setState({singleCard: response.data})
                    });
            }

        }
    }

    //lifecycle method
    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/cards')
            .then(response => {
                this.setState({cards: response.data});
                //console.log(response)
            });
    }


    cardSelectedHandler = (id) => {
        this.setState({showSinglePost: id})
        console.log('selected post');
        console.log(id);
    }


    /*todo: make cards visually clickable and show modal
    *  i have already added on on click even and method cardSelectedHandler*/
    render() {
        const cards = this.state.cards.map(card => {

            return <BookMarkCard key={card.id}
                                 title={card.title}
                                 description={card.description}
                                 tinyUrl={card.shortUrl}
                                 clicked={() => this.cardSelectedHandler(card.id)}/>

        });
        /*
                const [modalShow, setModalShow] = React.useState(false);
        */
        /*  const showData = () => {
              if(this.state.singleCard.id===null){
                  return <></>;
              }else {
                  console.log('i am here');
                  return <h1>{this.state.singleCard.id}</h1>
              }
          };*/
        return ( 
            <>
                <div className="container p-5">
                    <div className="row row justify-content-around">
                        {cards}
                    </div>
                </div>
                {/*{showData}*/}
            </>
        );
    }
}

CardsPage.propTypes = {};

export default CardsPage;