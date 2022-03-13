const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class Edit extends React.Component{
    render(){
        const {spot} = this.props;
        return(
            <DefaultLayout>
            <form action={`/spots/${spot._id}?_method=PUT`} method="post">
              <fieldset>
                <legend>Edit {spot.name}</legend>
                <label>
                  NAME:<input
                    type="text"
                    name="name"
                    placeholder="enter resturant name"
                    value={spot.name}
                  />
                </label>
                <label>
                  URL:<input
                    type="url"
                    name="uResturant"
                    placeholder="enter resturant name"
                    value={spot.url}
                  />
                </label>
                <label>
                  Image:<input
                    type="file"
                    name="file"
                    placeholder="sumbit image"
                    value={spot.image}
                  />
                </label>
                
              </fieldset>
              <input type="submit" value={`Edit ${spot.name}`} />
            </form>
            <a href="/nights/"><button>Back to Bars</button></a>
          <a href="/spots/"><button>Back to Resturants</button></a>
          </DefaultLayout>
        )
    }
}

module.exports = Edit;