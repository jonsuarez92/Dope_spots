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
                    type="text"
                    name="url"
                    placeholder="enter resturant name"
                    value={spot.url}
                  />
                </label>
                
              </fieldset>
              <input type="submit" value={`Edit ${spot.name}`} />
            </form>
          </DefaultLayout>
        )
    }
}

module.exports = Edit;