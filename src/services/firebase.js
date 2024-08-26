// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2LUOESwDAoyp-O4Ni3MAzJR6e3hg2xqo",
  authDomain: "urbann-coderhouse.firebaseapp.com",
  projectId: "urbann-coderhouse",
  storageBucket: "urbann-coderhouse.appspot.com",
  messagingSenderId: "557418589624",
  appId: "1:557418589624:web:ee9ea0bf0fc477287cb34d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* Incluir massivamente itens no Firestore */
/* export const produtos = [
    { id: 0, name: "Camiseta branca feminina 1", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.", price: 45.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 1, name: "Camiseta branca feminina 2", stock: 15, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 50.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 2, name: "Camiseta branca feminina 3", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 65.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 3, name: "Camiseta branca feminina 4", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 60.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 4, name: "Camiseta branca feminina 5", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 70.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 5, name: "Camiseta branca feminina 6", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 47.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 6, name: "Camiseta branca feminina 7", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 40.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 7, name: "Camiseta branca feminina 8", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 49.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 8, name: "Camiseta branca feminina 9", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 41.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 9, name: "Camiseta branca feminina 10", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.", price: 44.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" }
]
console.log("Teste firebase");

produtos.forEach(async(obj) => {
    const docRef = await addDoc(collection(db, "produtos"), obj);
    console.log("Document written with ID: ", docRef.id);
}); */

const ItemsCollection = collection(db,"produtos");
getDocs(ItemsCollection).then((snapshot)=>{
        //console.log("snapshot: ",snapshot.docs);
        snapshot.docs.forEach((item)=>{
            /* console.log("Item id -> ",item.id);
            console.log("Item -> ",item.data()); */
        })
});


export {db,ItemsCollection};