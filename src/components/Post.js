import React from 'react'
// import marked from 'marked'

const Post = ({ article }) => {
    console.log(article) 
    const { name, description, featuredImage } = article.fields
    // const postDescription = marked(description)
    return (
        <div className='post'>
            <h2 className='title'>{name}</h2>
            {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={name} title={name} />}
            <section>{description}</section>
            {/* <section dangerouslySetInnerHTML={{ __html: postDescription }} /> */}
        </div>
    )
}
export default Post