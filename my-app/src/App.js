import React, { Component } from 'react';

import './App.css';
import $ from 'jquery';


class App extends Component {

constructor(props) {
    super(props);
    this.state = { 
      interest:'',
      places: []
    }
 this.search=this.search.bind(this);
 this.onChange=this.onChange.bind(this);
 //this.getPlaces=this.getPlaces.bind(this);

}


  search () {
    //console.log(this)
    //console.log(`${term} was searched`);
    // TODO
    var that=this;
    var place=this.state.interest;
    //console.log(place)
    $.ajax({
      type:'POST',
      url:'/api/places',
      dataType: 'json',

      data:{place:place},

      success:function (data) {
         // retrive the data send GET
         that.getPlaces(); 


      },

      error:function( err){
        console.log(err)
      }
    });

 
  }

  getPlaces(){
    console.log("in the function");
    var that=this;
    $.ajax({
      type:'GET',
      url:'/api/places',
      dataType: 'json',

      //data:{place:place},

      success:function (data) {
          if(data){
            that.setState({
              places:data

            })
          }
         //console.log(that.state.places);
          


      },

      error:function( err){
        console.log(err)
      }
    });

  }

onChange (e) {
  //console.log(this)
      this.setState({
      interest: e.target.value
    });

  }


  render() {
    console.log(this.state.places)
    return (
      <div className="App">
        
        <p className="App-intro">  </p>
         <h2>Travel</h2>
      	<br/>
      	<br/>
      	<h4>Choose a destination</h4> 
      	<input type="text" value= {this.state.interest} onChange={this.onChange}/>
        <button onClick={this.search}>Show places</button>

        <div>
        {this.state.places.map((place,i)=>
              <div key={i}>{place.placeName}</div>

            )}
        

        </div>
      

    </div>
    )
  }
}

export default App;
