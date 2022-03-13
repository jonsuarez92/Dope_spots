const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class New extends React.Component{
    render(){
        const {night} = this.props;
        return(
            <DefaultLayout>
  <form action="/nights" method="post">
    <fieldset>
      <legend>Show Your Favorite Night life spot</legend>
      <label>
        NAME:<input type="text" name="name" placeholder="enter bar name" />
      </label>
      <label>
        Url:<input type="url" name="url" placeholder="enter the url here " />
      </label>  
      <label>
            Images: <input type="text" name="img" placeholder="sumbit image here"/>
      </label>   
      <label>
            Detail: <input type="text" name="details" placeholder=" deatils here"/>
      </label>   
    </fieldset>
    <input type="submit" value=" New Bar" />
  </form>
</DefaultLayout>
        )
    }
}

module.exports = New;