import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

class App extends Component {
   
    componentDidMount(){
        this.props.onRobotRequest();
    }
    
    render(){
        const { searchField, robots, isPending, error } = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return isPending ? <h1>Loading</h1> :
            <div className="tc">
                <h1 className="title">RoboFriends</h1>
                <SearchBox searchBoxChange={this.props.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div> 
    }
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRobotRequest: () => dispatch(requestRobots())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);