const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class Edit extends React.Component{
    render(){
        const {night} = this.props;
        return(
            <DefaultLayout>
            <form action={`/nights/${night._id}?_method=PUT`} method="post">
              <fieldset>
                <legend>Edit {night.name}</legend>
                <label>
                  NAME:<input
                    type="text"
                    name="name"
                    placeholder="enter bar name"
                    value={night.name}
                  />
                </label>
                <label>
                  URL:<input
                    type="url"
                    name="url"
                    placeholder="enter bar name"
                    value={night.url}
                  />
                </label>
                <label>
                  Image:<input
                    type="text"
                    name="img"
                    placeholder="sumbit image"
                    value={night.image}
                  />
                </label>
                <label>
                  Details:<input
                    type="text"
                    name="details"
                    placeholder="deatils here"
                    value={night.details}
                  />
                </label>
                
              </fieldset>
              <input type="submit" value={`Edit ${night.name}`} />
            </form>
            <a href="/nights/"><button>Back to Bars</button></a>
          <a href="/spots/"><button>Back to Resturants</button></a>
          </DefaultLayout>
        )
    }
}

module.exports = Edit;