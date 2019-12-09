const products = [
    {
      name: `Red Tonic`,
      id: `#Ton999`,
      description: `Become lightning with our revitalizing blend`,
      price: 200,
      quantity: `Limited Release`,
      category: `limited`,
      img: `img/potion-1249050_1920.png`
    }, {
      name: `Birthright Tonic`,
      id: `#Ton921`,
      description: `Take flight with this classic tonic`,
      price: 155,
      quantity: `In-stock`,
      category: `in-stock`,
      img: `img/d0b0eb5c50ded77a191902fce45e09dc.png`
    }, {
      name: `Shimmerwind Tonic`,
      id: `#Ton932`,
      description: `Float at will with this concentrated blend`,
      price: 300,
      quantity: `Low-supply`,
      category: `low-sup`,
      img: `img/6d9a5e465747e2e14e7305e917e2b2cf.png`
    },
     {
      name: `Fury Tonic`,
      id: `#Ton321`,
      description: `Obtian the speed of the elements with this enchanted blend`,
      price: 500,
      quantity: `Limited Release`,
      category: `limited`,
      img: `img/218162e95777343fb7ca6dea3d399a64.png`
    },
     {
      name: `Health Tonic`,
      id: `#Ton241`,
      description: `Heal all wounds with our time honoured recipe`,
      price: 305,
      quantity: `In-stock`,
      category: `in-stock`,
      img: `img/rpot.png`
    },
     {
      name: `Shadowstep Tonic`,
      id: `#Ton992`,
      description: `Step into the shadow relm with this potent tonic`,
      price: 421,
      quantity: `Low-supply`,
      category: `low-sup`,
      img: `img/fe5e67ded6b70b88cab51090fd5fed99.png`
    },
     {
      name: `Bluevein Tonic`,
      id: `#Ton909`,
      description: `manipulate lighting with this revatalizing tonic`,
      price: 404,
      quantity: `In-stock`,
      category: `in-stock`,
      img: `img/My world.png`
    },
     {
      name: `Shimmerturn Tonic`,
      id: `#Ton882`,
      description: `Travel to the relm of the Fey with this special blend`,
      price: 313,
      quantity: `In-stock`,
      category: `in-stock`,
      img: `img/purple-3102305_1920.png`
    },
     {
      name: `Hearth Tonic`,
      id: `#Ton832`,
      description: `Glow with the light of the core with this fermented tonic `,
      price: 110,
      quantity: `In-stock`,
      category: `in-stock`,
      img: `img/7c391e5e2f99fc67aca990398e8360de.png`
    },
     {
      name: `Evergreen Tonic`,
      id: `#Ton722`,
      description: `Speak to the trees with this special blend`,
      price: 689,
      quantity: `Low-supply`,
      category: `low-sup`,
      img: `img/Bohemian Moser Green Perfume Bottle.png`
    },
     {
      name: `Cloud Tonic`,
      id: `#Ton333`,
      description: `Gain calm within an instant with this refreshing tonic`,
      price: 290,
      quantity: `Limited Release`,
      category: `limited`,
      img: `img/blpot.png`
    },
     {
      name: `Lightdance Tonic`,
      id: `#Ton897`,
      description: `Gain invisibility with our special mix`,
      price: 875,
      quantity: `Limited Release`,
      category: `limited`,
      img: `img/Lalique Les Elfes Crystal Perfume Bottle _BellaDonna_.png`
    },
     {
      name: `Lionheart Tonic`,
      id: `#Ton329`,
      description: `Gain the strength of a Titan with this powerful tonic`,
      price: 910,
      quantity: `In-stock`,
      category: `in-stock`,
      img: `img/Czech Crystal & Black Cameo Perfume Bottle 1920's.png`
    },
     {
      name: `Songbird Tonic`,
      id: `#Ton777`,
      description: `Gain the voice of spring with this sweet tonic`,
      price: 439,
      quantity: `Low-supply`,
      category: `low-sup`,
      img: `img/istockphoto-870133436-612x612.png`
    },
     {
      name: `Bloombreath Tonic`,
      id: `#Ton562`,
      description: `Breathe under water with this handy tonic `,
      price: 409,
      quantity: `Low-supply`,
      category: `low-sup`,
      img: `img/Saba Frères -1995.png`
    },
     {
      name: `Reedblight Tonic`,
      id: `#Ton845`,
      description: `Communicate pure kindness with our time honered mix `,
      price: 215,
      quantity: `Limited Release`,
      category: `limited`,
      img: `img/1502861fac50a7c85893e5d8fc86c628.png`
    },
     {
      name: `Fountain Tonic`,
      id: `#Ton721`,
      description: `Suspend aging with this effectice tonic `,
      price: 995,
      quantity: `Limited Release`,
      category: `limited`,
      img: `img/eBaum's Premium Image Collection.png`
    },
     {
      name: `Wingspan Tonic`,
      id: `#Ton532`,
      description: `Gain the ability to fly with this potent tonic`,
      price: 250,
      quantity: `Limited Release`,
      category: `limited`,
      img: `img/9757a257873353926794dd007b86b52f.png`
    },
     {
      name: `Shapeblend Tonic`,
      id: `#Ton212`,
      description: `Become a changeling with this concentrated blend`,
      price: 749,
      quantity: `Low-supply`,
      category: `low-sup`,
      img: `img/e12fe17c310b8cea5f2b57a191617862.png`
    },
     {
      name: `Helmwill Tonic`,
      id: `#Ton969`,
      description: `Gian the ability to bend light with our special blend`,
      price: 908,
      quantity: `In-stock`,
      category: `in-stock`,
      img: `img/Antiques Atlas - Vintage Perfume Bottles.png`
    }
  ];
  
  
  
  function getProductAsHtmlString(product) {
  
    return `<article class="product ${product.category}">
      <img src="${product.img}" alt="Image for ${product.name}" class="product-img">
      <ul class="course-info">
      <li class="price" >${product.price}</li>   
      <li class="name">${product.name}</li>
        <li class="des" >${product.description}</li>    
          <li class="id" >${product.id}</li>
          <li class="quantity" >${product.quantity}</li>
          <a class="botn" href="">Add to Cart</a>
      </ul>
    </article>`;
  }
  
  
  function loadAll() {
    renderProducts(products.slice(0, 20));
  }
  
  function filterByPrice(product) {
    return product.price < 250;
  }
  
  function checkInput(event) {
    const userIsLookingFor = event.target.value.toLowerCase();
   
    const onlyMatchingNames = products.filter(prod => prod.name.toLowerCase().includes(userIsLookingFor));
    renderProducts(onlyMatchingNames);
  }
  
  
  function renderProducts(arr) {
    
    const arrOfHtml = arr.map(getProductAsHtmlString)
  
    
    const strOfHtml = arrOfHtml.join('\n')
  
    document.getElementById('products').innerHTML = strOfHtml;
  }
  
  
  
  
  const midpriceStock = products.filter(filterByPrice);
  renderProducts(midpriceStock);
  
  function checkStock(event) {
    const userIsLookingFor = event.target.value;
  
    const onlyMatchingStock = products.filter(prod => prod.category == userIsLookingFor);
    renderProducts(onlyMatchingStock);
  }
  
  
  
  document.getElementById('load').addEventListener('click', event => loadAll() )
  document.getElementById('productName').addEventListener('input', event => checkInput(event) )
  document.getElementById('supplvl').addEventListener('change', event => checkStock(event) )
  
  
  