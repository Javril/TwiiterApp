import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { IProps } from '../IProps';
import Iframe from 'react-iframe';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const url1 = 'https://twitter.com/realdonaldtrump';
const name1 = 'Donald Trump';
const url2 = 'https://twitter.com/hillaryclinton';
const name2 = 'Hilary Cliton';

class Tweet extends React.Component<any, any> {

    constructor(props: IProps) {
        super(props);
        this.state = { url: '', dTrumpTweets: [], hClitonTweets: [], errorMessage: '' };
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({ url: url1, name: name2 });
        axios.get(this.state.url).then(response => {
            const tweets = this.setState({ dTrumpTweets: response.data });
            this.props.dispatch(new actions.FetchTweets(tweets));
        }, err => {
            const tweetError = this.setState({ errorMessage: err });
            this.props.dispatch(new actions.FailedTweets(tweetError));    
        });
    }

    componentDidUpdate() {
        axios.get(this.state.url).then(response => {
            const tweets = this.setState({ hClitonTweets: response.data });
            this.props.dispatch(new actions.FetchTweets(tweets));
        }, err => {
            const tweetError = this.setState({ errorMessage: err });
            this.props.dispatch(new actions.FailedTweets(tweetError));  
        });
    }

    handleClick = () => {

        if (this.state.url === url1) {
            this.setState({ url: url2 , name: name1 });
        } else {
            this.setState({ url: url1 , name: name2 });
        }
    }

    render() {
        return (
            <div className="embedresize">
                <Grid container spacing={3}>     
                    <Grid>
                        <Paper>
                            <Iframe url={this.state.url}
                                id="myId"
                                className="myClassname"
                                position="relative"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={this.handleClick} variant="contained" color="primary">
                            {this.state.name}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
    
}

function mapStateToProps(state: any) {
    return {
        tweets: state.tweets
    };
}

export default connect(mapStateToProps)(Tweet as any)