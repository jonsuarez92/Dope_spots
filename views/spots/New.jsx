const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class New extends React.Component{
    render(){
        const {spots} = this.props;
        return(
            <DefaultLayout>
  <form action="/spots" method="post">
    <fieldset>
      <legend>Show Your Favorite Resturant</legend>
      <label>
        NAME:<input type="text" name="name" placeholder="enter Resturant name" />
      </label>
      <label>
        Url:<input type="url" name="url" placeholder="enter the url here" />
      </label>    
       <label>
            Images: <input type="text" name="img" placeholder="sumbit image here"/>
      </label>   
      <label>
            Detail: <input type="text" name="details" placeholder=" deatils here"/>
      </label>    
    </fieldset>
    <input type="submit" value=" New Resturant" />
  </form>
          <a href="/nights/"><button>Back to Bars</button></a>
          <a href="/spots/"><button>Back to Resturants</button></a>
</DefaultLayout>
        )
    }
}

module.exports = New;