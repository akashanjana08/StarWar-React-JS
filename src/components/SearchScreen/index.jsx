import React from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/planet';
import CircularProgress from '@material-ui/core/CircularProgress';
import Search from '@material-ui/icons/Search';
import PlanetList from '../../components/common/grid/PlanetList'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { utility } from '../../utils/common-func'
import { token } from '../../utils/Auth';
require('../../common/style.scss');
require('./style.scss');
class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            data:[],
            planetData:[]
        }
        this.planetData=[];
        if(!token.getToken()){
            this.props.history.push("/");
        }
    }

    componentDidMount() {
        this.props.fetchPlanets();
    }

   static getDerivedStateFromProps(props, state){
      let newState=null;
      if((props.planetData !== state.data) ){
        //this.planetData = props.planetData;
        newState = { data:  props.planetData, planetData: props.planetData};
        console.log(newState)
        console.log('New State ==================================')
        return newState;
      }
      return newState;
    }

    _handleChange = (evt) =>{
        const { value } = evt.target;
        if (_.size(this.state.planetData.results) > 0) {
            const searchdataObj = utility.getArrayObjectByMultipleKeySearch(this.state.planetData.results, 'name', value);
            console.log(searchdataObj);
            this.setState({
                data: searchdataObj
            })
        }
    }
    
    handleLogout = (e) =>{
        token.removeToken();
        this.props.history.push("/");
    }

    renderGrid(planetsArray) {
        return (
            <div>
                <Container>
                    <Row>
                        <div className="input-group md-form form-sm form-1 pl-0 row-margin">
                            <div className="input-group-prepend">
                                <span className="input-group-text purple lighten-3" id="basic-text1"><Search /></span>
                            </div>
                            <input className="form-control my-0 py-1" onChange={this._handleChange} type="text" placeholder="Search by Planet name" aria-label="Search" />
                        </div>
                    </Row>
                    <Row className="row-margin">
                        <PlanetList planets={planetsArray} />
                    </Row>
                </Container>
            </div>
        )
    }

    render() {
        //const { planetData } = this.props;
        return (
            <div style={{ backgroundColor: "#c8c8c8", height: '750px' }}>
                <Link onClick={this.handleLogout} className="logout" to="/">Logout</Link>
                {
                    _.size(this.state.data.results) > 0 ?
                        this.renderGrid(this.state.data.results)

                        : <CircularProgress className="loader" color="primary" />
                }
            </div>

        )
    }
}


function mapStateToProps(state) {
    const { planet } = state;
    return {
        fetchingPlanet: planet.fetchingPlanet,
        planetData: planet.planetData || [],
        errorFetchingPlanet: planet.errorFetchingPlanet,
        fetchedPlanet: planet.fetchedPlanet
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(_.assign({}, actionCreators, {}), dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchScreen);
