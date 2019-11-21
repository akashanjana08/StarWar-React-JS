import React from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/planet';
import CircularProgress from '@material-ui/core/CircularProgress';
require('../../common/style.scss');

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
      console.log(this.props)
      this.props.fetchPlanets();
    }

    render() {
        return (
            <CircularProgress className="loader" color="primary" />
        )
    }
}


function mapStateToProps(state) {
    const { planet } = state;
    return {
        fetchingPlanet: planet.fetchingPlanet,
        planetData: planet.planetData,
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
