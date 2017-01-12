import React, { Component } from 'react'

export default class SingleShoe extends Component {

  constructor(props) {
    super(props)
    }


  render() {
      return (
        <div>
            <div>
              <div className="col-l-12">
                <p style={{fontSize: '2em'}}>
                  Name: SHOE BRAND AND NAME
                </p>
                <img src='https://img1.etsystatic.com/000/0/5120282/il_570xN.266946931.jpg' />
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
                      Gender: SHOE GENDER
                    </p>
                    <p style={{fontSize: '2em'}}>
                      Price: SHOE PRICE
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
