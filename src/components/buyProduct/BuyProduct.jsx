import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import "./BuyProduct.css"

function BuyProduct() {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPosts();
    })


    return (
        <div className="homePage">
            {postLists.map((post) => {
                return (
                    <div className="post">
                        <div className="postHeader">
                            <div className="title">
                                <h1><strong>Nouvelle annonce !</strong></h1>
                                <h2>{post.title}</h2>
                                <h2>{post.postText}</h2>
                                <h3>{post.prix}</h3>
                                <h4>{post.dateper}</h4>

                                <h5>Mis en vente par {post.id}</h5>

                            </div>

                        </div>

                    </div>
                );
            })}
        </div>
    );
}

export default BuyProduct;
