import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey=process.env.REACT_APP_NEWS_API
  pageSize=5;

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />  
          <Routes>
            <Route path="/"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey} pageSize={12} country="in" category="general" key="general" />} />
            <Route exact strict path="/business"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey} pageSize={12} country="in" category="business" key="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress}  pageSize={12} apiKey={this.apiKey} country="in" category="entertainment" key="entertainment" />} />
            <Route path="/home"  element={<News setProgress={this.setProgress}  pageSize={12} apiKey={this.apiKey} country="in" category="general" key="general" />} />
            <Route path="/health"  element={<News setProgress={this.setProgress}  pageSize={12} apiKey={this.apiKey} country="in" category="health" key="health" />} />
            <Route path="/science"  element={<News setProgress={this.setProgress}  pageSize={12} apiKey={this.apiKey} country="in" category="science" key="science" />} />
            <Route path="/sports"  element={<News setProgress={this.setProgress}  pageSize={12} apiKey={this.apiKey} country="in" category="sports" key="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress}  pageSize={12} apiKey={this.apiKey} country="in" category="technology" key="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
