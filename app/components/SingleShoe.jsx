import React, { Component } from 'react'

export default class SCC extends Component {
  constructor(props){
    super(props)
    this.state = {
      shoe: {}
    }
    console.log('*!*!*!*!*!*!*!*!*!', this.state.shoe);
  }


  componentWillReceiveProps(nextProps){
    this.setState({shoe:nextProps.shoeModel})
  }

  render(){
    {console.log('THIS STATE SHOE',this.state.shoe)}
      return (
        <div>
            <div>
              <div className="col-l-12">
                <p style={{fontSize: '2em'}}>
                  {this.state.shoe.brand} {this.state.shoe.name}
                </p>
                <img src={this.state.shoe.image_url} style={{height:500, width:500}} />
                </div>
                  <div className="col-xs-4">
                    <form className="form-horizontal">
                      <fieldset>
                    <div className="form-group" style={{display: 'block'}}>
                      <label htmlFor="sel2">SIZE:</label>
                      <select className="form-control" id="sel1" name='courseId'>
                        <option>SIZE</option>
                      </select>
                      <label htmlFor="sel2">COLOR:</label>
                      <select className="form-control" id="sel2" name='color' >
                        <option>COLOR</option>
                      </select>
                    </div>
                      </fieldset>
                    </form>
                  </div>
                <div>
                    <p style={{fontSize: '2em'}}>
                      {this.state.shoe.gender}
                    </p>
                    <p style={{fontSize: '2em'}}>
                      {this.state.shoe.price}
                    </p>
            </div>
            <div className="col-l-10">
                    <p style={{fontSize: '2em'}}>
                      Description: Bacon ipsum dolor amet beef ribs landjaeger andouille rump pork shoulder biltong. Swine tenderloin filet mignon tri-tip biltong meatball chicken sirloin. Boudin meatloaf turkey filet mignon, chicken bacon beef ribs prosciutto bresaola shankle tongue. Turkey boudin salami beef ribs fatback venison strip steak filet mignon pig kielbasa tail pork pork loin flank. Fatback rump hamburger, boudin biltong chicken porchetta picanha swine salami cupim. Ground round ham corned beef, beef ribs ham hock tenderloin picanha cow jowl short loin jerky.
                    </p>
                    <a href="#" className="btn btn-primary btn-warning"><span className="glyphicon glyphicon-shopping-cart"></span> ADD TO CART</a>
              </div>
            </div>
        </div>
      )
    }
}
