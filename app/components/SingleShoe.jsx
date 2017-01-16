import React, { Component } from 'react'

export default class SCC extends Component {
  constructor(props){
    super(props)
    this.state = {
      shoe: {},
      inventories: [],
      comments: []
    }
  }


  componentWillReceiveProps(nextProps){
    this.setState({shoe:nextProps.shoeModel, inventories:nextProps.shoeModel.shoe_inventories, comments:nextProps.shoeModel.comments})
  }

  render(){
    {console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^', this.props)}
      return (
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
                      <select className="form-control" id="sel1" name='sizecolor'>
                        <option>SELECT SIZE / COLOR</option>
                          {this.state.inventories.map(shoe=> {
                            return <option key={shoe.id}>{shoe.size} / {shoe.color}</option>
                          })}
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
            <div>
              <h4>Product Reviews</h4>
              {this.state.comments.map(comment=> {
                return ( <div key={comment.id}>
                         <p>Date: {comment.created_at.slice(0,10)}</p>
                         <p>{comment.body}</p>
                         <p>{comment.upvotes} users found this comment helpful</p>
                         </div>
                )
              })}
            </div>
            </div>
      )
    }
}
