import React from 'react';

function BlogItem(props) {
    return (
        <div className="item" style={{ width: props.width }}>
            <div className="blog-post">
                <div className="blog-post-image">
                <div className="image"> <a href="blog.html"><img src={props.image} alt=""/></a> </div>
                </div>
                {/* <!-- /.blog-post-image --> */}
                
                <div className="blog-post-info text-left">
                <h3 className="name"><a href="!#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                <p className="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                {/* <!-- /.blog-post-info -->  */}
                
            </div>
            {/* <!-- /.blog-post -->  */}
        </div>
    );
}

export default BlogItem;