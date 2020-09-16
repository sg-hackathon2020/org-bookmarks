import React, {Component} from "react";
import InfoCards from "../../components/infocards/InfoCards";
import TinyUrl from "../tinyurl/TinyUrl";

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        const firstCardTitle = "Active Cards";
        const secondCardTitle = "Expiring Today";
        const thirdCardTitle = "Created Today";
        return (
            /*-fluid d-flex*/
            <div className="container justify-content-center bg-Info">
                <div className="row">
                    <div className="col-4">
                        <InfoCards cardTitle={firstCardTitle} vals={2}/>
                    </div>
                    <div className="col-4">
                        <InfoCards cardTitle={secondCardTitle} vals={4}/>
                    </div>
                    <div className="col-4">
                        <InfoCards cardTitle={thirdCardTitle} vals={5}/>
                    </div>
                </div>
                <TinyUrl/>
            </div>
        )
            ;
    }
}

LandingPage.propTypes = {};

export default LandingPage;