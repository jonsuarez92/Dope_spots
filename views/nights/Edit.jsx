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
                    name="uBar"
                    placeholder="enter bar name"
                    value={night.url}
                  />
                </label>
                
              </fieldset>
              <input type="submit" value={`Edit ${night.name}`} />
            </form>
          </DefaultLayout>
        )
    }
}

module.exports = Edit;