import React from 'react';

function NewLetter(props) {
    return (
        <div className="sidebar-widget newsletter outer-bottom-small">
            <h3 className="section-title">Newsletters</h3>
            <div className="sidebar-widget-body outer-top-xs">
                <p>Sign Up for Our Newsletter!</p>
                <form>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Subscribe to our newsletter"/>
                </div>
                <button className="btn btn-primary">Subscribe</button>
                </form>
            </div>
            {/* <!-- /.sidebar-widget-body -->  */}
        </div>
    );
}

export default NewLetter;