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
            Images: <input type="file" name="file" placeholder="sumbit image here"/>
      </label>    
    </fieldset>
    <input type="submit" value=" New Resturant" />
  </form>
</DefaultLayout>
        )
    }
}

module.exports = New;