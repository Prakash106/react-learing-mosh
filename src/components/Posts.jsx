import React, { Component } from "react";
import http from "../services/httpService";
import config from "../config.json";

class Posts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({
      posts
    });
  }

  createPost = async () => {
    const data = {
      title: "Here is the new post",
      body: "Post body content is here with all the information and tags."
    };
    const { data: post } = await http.post(config.apiEndpoint, data);
    const posts = [post, ...this.state.posts];
    this.setState({
      posts
    });
  };

  deletePost = async post => {
    const { posts: originalState } = this.state;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    try {
      await http.delete(`${config.apiEndpoint}/${post.id}`);
    } catch (ex) {
      this.setState({ posts: originalState });
    }
  };

  updatePost = async post => {
    post.title = "New Title";
    await http.put(`${config.apiEndpoint}/${post.id}`, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = post;
    this.setState({ posts });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Posts</h1>
          <button onClick={this.createPost} className="btn btn-primary my-3">
            Add New Post
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>title</th>
                <th colSpan={2} className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((post, index) => (
                <tr key={index}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>
                    <button
                      onClick={() => this.updatePost(post)}
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.deletePost(post)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
