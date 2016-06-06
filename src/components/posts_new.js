import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link, browserHistory  } from 'react-router';

class PostsNew extends Component {
    
    
    onSubmit(props){
        this.props.createPost(props)
            .then( () => {
               //blog post created
              browserHistory.push('/') 
            });
    }
    
    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        console.log(title);
        return (
            <div>
                <form onSubmit={handleSubmit( this.onSubmit.bind(this) )} >
                    <h3> Create a Posts</h3>
                    
                    <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                        <label> Title </label>
                        <input type="text" className="form-control" {...title} />
                        <div className="text-help">
                            {title.touched ? title.error : null}
                        </div>
                    </div>
                    <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                        <label> Category </label>
                        <input type="text" className="form-control" {...categories}/>
                        <div className="text-help">
                            {categories.touched ? categories.error : null}
                        </div>
                    </div>
                    <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                        <label> Content </label>
                        <textarea type="text" className="form-control" {...content} />
                        <div className="text-help">
                            {content.touched ? content.error : null}
                        </div>
                    </div>
                     <button type='submit' className="btn btn-primary"> Submit </button>
                     <Link to='/' className="btn btn-danger">  cancel</Link>
                </form>
               
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    
    if (!values.title){
        errors.title = "Enter a Username";
    }
    
     if (!values.categories){
        errors.categories = "Enter a Username";
    }
    
     if (!values.content){
        errors.content = "Enter a Username";
    }
    
    return errors;
}

//connect first arg is mapstateToProps, mapDispatchToProps
//reduxForm formConfig, mapstateToProps, mapDispatchToProps
export default reduxForm({
    form: 'PostsNewForm',
    fields: [
        'title',
        'categories',
        'content'
    ], 
    validate
}, null, { createPost } )(PostsNew);