import React from "react";

function BlogDetails() {
  // Conditional rendering using function return approach
  function renderBlog(showBlog) {
    if (!showBlog) return <div>No Blogs</div>;

    // Example blog data
    return (
      <div>
        <h2 style={{ fontWeight: "bold", margin: 0 }}>React Learning</h2>
        <div style={{ fontWeight: "bold", fontSize: 15, marginBottom: 3 }}>
          Stephen Biz
        </div>
        <div style={{ marginBottom: 20 }}>Welcome to learning React!</div>

        <h2 style={{ fontWeight: "bold", margin: 0 }}>Installation</h2>
        <div style={{ fontWeight: "bold", fontSize: 15, marginBottom: 3 }}>
          Schwezdenier
        </div>
        <div>You can install React from npm.</div>
      </div>
    );
  }

  const showBlogInfo = true; // Toggle to false to show 'No Blogs'

  return (
    <div>
      <h1 style={{ fontWeight: "bold", marginBottom: 20 }}>Blog Details</h1>
      {renderBlog(showBlogInfo)}
    </div>
  );
}

export default BlogDetails;
