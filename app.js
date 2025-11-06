// ------------------ FIZA HIJAB Firebase Connection ------------------
var firebaseConfig = {
  apiKey: "AIzaSyBzIEcNfwmKiw8zFpY62ljdDFJsblRWp10",
  authDomain: "fiza-hijab.firebaseapp.com",
  databaseURL: "https://fiza-hijab-default-rtdb.firebaseio.com",
  projectId: "fiza-hijab",
  storageBucket: "fiza-hijab.firebasestorage.app",
  messagingSenderId: "312434601563",
  appId: "1:312434601563:web:6b09944c0a36183c86197e"
};

// Initialize Firebase
var app =firebase. initializeApp(firebaseConfig);
var database = firebase.database();
  // ---------------- ADD TO CART FUNCTION ----------------
  var buttons = document.getElementsByClassName("btn-outline-warning");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      event.preventDefault();

      var card = this.parentNode.parentNode; // get card
      var img = card.getElementsByTagName("img")[0].src;
      var name = card.getElementsByClassName("card-text")[0].innerText;
      var priceLine = card.getElementsByTagName("p")[1].innerText;

      // clean price
      var price = priceLine.replace("Rs.", "").replace("PKR", "").replace(/[^0-9.]/g, "").trim();

      var itemId = new Date().getTime(); // unique ID
      var cartItem = {
        id: itemId,
        name: name,
        image: img,
        price: price,
        quantity: 1,
        time: new Date().toLocaleString()
      };

      database.ref("cart/" + itemId).set(cartItem, function (error) {
        if (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again.',
            confirmButtonColor: '#d33'
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Added to Cart!',
            text: name + ' has been added successfully.',
            confirmButtonColor: '#f1ae12',
            background: '#fff8e1'
          });
        }
      });
    });
  }
// get elements
var nav = document.getElementById("nav");
var footer = document.getElementById("footer");
var footer2 = document.getElementById("footer2");

// move footer inside footer2
footer2.appendChild(footer);
console.log("footer moved:", footer2);

