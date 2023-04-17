const getPosts = () =>{
    let fetchPost=fetch("https://jsonplaceholder.typicode.com/posts");
    let allPostsTitle='';

    fetchPost.then((response)=>{
        response.json().then((jsonData)=>{
            console.log(jsonData);
            for(let i=0;i<jsonData.length;i++){
                let post =jsonData[i];
                // debugger;

                // console.log(post.title);
                allPostsTitle=allPostsTitle+ `${post.title} <br> <hr>`;
                
            }
            document.querySelector("#allpost").innerHTML=allPostsTitle;
        });
    });
}