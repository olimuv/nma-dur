
const postPhotos = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/photos", {
        method: "POST",
        body: JSON.stringify({
            albumId: 1,
            title: "Rest API"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    let data = await res.json();
    console.log(data);
};

const postComments = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: "Humoyun",
            email: "test@example.com",
            body: "Rest API"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    let data = await res.json();
    console.log(data);
};

postPhotos();
postComments();
