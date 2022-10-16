import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./PostProducts.css"
import { Button } from "react-bootstrap";




function CreatePost({ }) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [prix, setprix] = useState("");
    const [dateper, setDateper] = useState("");


    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            prix,
            dateper,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/BuyProduct");
    };


    return (
        <div className="createPostPage">
            <div className="cpContainer">




                <div className="inputGp">
                    <label>Nombre d'aliments à mettre en vente</label>
                    <input
                        placeholder="Donnez le nombre exact d'aliment"
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>

                <div className="inputGp">
                    <label>Date de péremption maximale</label>
                    <input
                        placeholder="Donner le nombre de jours restants "
                        onChange={(event) => {
                            setDateper(event.target.value);
                        }}
                    />
                </div>

                <div className="inputGp">
                    <label>Prix initiale suggéré</label>
                    <input
                        placeholder="0 - 200 $"
                        onChange={(event) => {
                            setprix(event.target.value);
                        }}
                    />
                </div>

                <div className="inputGp">
                    <label> Post:</label>
                    <textarea
                        placeholder="Remarques et conseils à faire communiquer à l'acheteur sur les produits"
                        onChange={(event) => {
                            setPostText(event.target.value);
                        }}
                    />
                </div>

                <div className="inputGp">
                    <h3> Prenez en photo vos aliments </h3>
                    <input type="file" />

                </div>

                <button classname="submitpost" onClick={createPost}> Submit Post</button>


            </div>
        </div>
    );
}

export default CreatePost;
