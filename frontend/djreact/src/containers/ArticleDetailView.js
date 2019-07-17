import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            // use apostrophe
            .then(res => {
                this.setState({
                    article: res.data
                });
                console.log(res.data)
                /*
                use console to see values and renders
                res is response
               */
            })
    }

    render() {
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.description}</p>
                <p>{this.state.article.content}</p>
            </Card>
        )
    }
}

export default ArticleDetail;