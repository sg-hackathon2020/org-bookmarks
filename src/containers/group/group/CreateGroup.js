import React, {Component} from 'react';
import Input from "../../../components/UI/Input/Input";
import {Card, Spinner} from "react-bootstrap";
import {connect} from "react-redux";
import Button from "../../../components/UI/Button/Button";
import * as actions from "../../../store/actions";

class CreateGroup extends Component {

    state = {
        controls: {
            groupName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Group Name'
                },
                value: '',
                validation: {
                    required: true
                }
            },
            clusterName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Cluster Name'
                },
                value: '',
                validation: {
                    required: false
                }
            },
            tribeName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Tribe Name'
                },
                value: '',
                validation: {
                    required: false
                }
            },
            ftName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Feature Team Name'
                },
                value: '',
                validation: {
                    required: false
                }
            }
        }
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onGroupSave(this.state.controls.groupName.value, this.state.controls.clusterName.value,this.state.controls.tribeName.value,this.state.controls.ftName.value );
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ));

        if (this.props.loading) {
            form = <Spinner animation="grow" variant="success"/>
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return (
            <div className="container p-lg-5 m-2 align-content-center d-flex align-items-stretch">
                <Card style={{width: '30rem'}}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
                    <Card.Body>
                        {errorMessage}
                        <form onSubmit={this.submitHandler}>
                            {form}
                            <Button btnType="Success">SUBMIT</Button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}


const mapStateToPros = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGroupSave: (groupName, clusterName, tribeName, ftName) => dispatch(actions.groupSave(groupName, clusterName, tribeName, ftName))
    };
};



/*
export default connect(mapStateToPros, mapDispatchToProps)(CreateGroup);*/

export default connect(mapStateToPros, mapDispatchToProps) (CreateGroup);