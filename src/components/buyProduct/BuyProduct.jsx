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
                                <br />
                                <h2><strong>Nombre de produits :</strong> {post.nbaliments}</h2>
                                <h3><strong>Listes des produits </strong>{post.enuma}</h3>

                                <h2><strong>Remarques du vendeur : </strong>{post.postText}</h2>
                                <h3><strong>Prix du panier : </strong>{post.prix}</h3>
                                <h3><strong>Date de péremption minimale : </strong>{post.dateper}</h3>

                                <h5><strong>Mis en vente par : </strong> {post.id}</h5>

                                <a classname="contactvendeur" href="/Chat">Contacter le Vendeur</a>

                            </div>

                        </div>

                    </div>
                );
            })}
        </div >
    );
}

export default BuyProduct;
