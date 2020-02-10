import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ""
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts1')
            .then((response) => {
                this.setState({ posts: response.data })
            }
            )
            .catch((exception) => {
                this.setState({ errorMsg: "Error while retrieving data" })
                console.log(this.state.errorMsg)
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            < div >
                <h1>Post List</h1>
                <div>
                    {
                        errorMsg ? <div> {errorMsg} </div> : null
                    }
                    {
                        posts.length > 1 ?
                            posts.map((post) =>
                                <div key={'div' + post.id}>
                                    <h3 id={'h' + post.id}>{post.title}</h3>
                                    <input type="textarea" value={post.body}></input>
                                </div>) :
                            errorMsg ? null : <div>No data to display</div>
                    }

                </div>
            </div >
        )
    }
}

export default PostList
