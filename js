/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var NFT=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, price, type) {
const token={

"name": name,
"price": price,
"type": type
}
NFT.push(token);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(var i=0;i<NFT.length;i++)
  {
 console.log("\nS no. : "+ (i+1));
    console.log("\nname:\t"+ NFT[i].name);
    console.log("\nprice:\t"+ NFT[i].price);
    console.log("\ntype:\t"+ NFT[i].type);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\nTOTAL:   " + NFT.length);
}

// call your functions below this line
mintNFT("yashika",200,"pizza");
mintNFT("sneha",333,"sushi");
mintNFT("yashika",100,"pasta");
listNFTs();
getTotalSupply();
