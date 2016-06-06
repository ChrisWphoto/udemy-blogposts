import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        console.log(title);
        return (
            <div>
                <form onSubmit={handleSubmit(this.props.createPost)} >
                    <h3> Create a Posts</h3>
                    <div className="form-group">
                        <label> Title </label>
                        <input type="text" className="form-control" {...title} />
                    </div>
                    <div className="form-group">
                        <label> Category </label>
                        <input type="text" className="form-control" {...categories}/>
                    </div>
                    <div className="form-group">
                        <label> Content </label>
                        <textarea type="text" className="form-control" {...content} />
                    </div>
                     <button type='submit' className="btn btn-primary"> Submit </button>
                </form>
               
            </div>
        );
    }
}

function validate(params) {
    
}

//connect first arg is mapstateToProps, mapDispatchToProps
//reduxForm formConfig, mapstateToProps, mapDispatchToProps
export default reduxForm({
    form: 'PostsNewForm',
    fields: [
        'title',
        'categories',
        'content'
    ]
}, null, { createPost } )(PostsNew);