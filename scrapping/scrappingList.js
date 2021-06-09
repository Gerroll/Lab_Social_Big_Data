/*
  Scrapping fnac
  Fetch information product on product page in "list" format not "mosaïque"
  page to fetch example : https://www.fnac.com/Brosse-a-dents-electrique/Soin-dentaire/nsh530912/w-4?sl&ssi=7&sso=2
*/

(function () {

  // Store prodcut info in a class
  class Product { // TODO ADD CATEGORIE
    category = ""
    title = ""
    fnacUrl = ""
    descSub = ""
    price = ""
    imgLink = ""
    review = ""
    reviewNumber = ""

    constructor(category_init) {
      this.category = category_init
    }

    toCsvFormat() {
      return `"${this.category}";"${this.title}";"${this.fnacUrl}";"${this.descSub}";${this.price};"${this.imgLink}";"${this.review}";${this.reviewNumber}`
    }

    static getCsvTitle() {
      return 'category;title;fnacUrl;descSub;price;imgLink;review;reviewNumber'
    }
  }

  // const category = "Livres, BD, Ebooks, Papeterie"
  // const category = "Billetterie"
  // const category = "Musique, CD, Vinyles"              // DONE
  // const category = "Jeux vidéo, Consoles"              // DONE
  // const category = "Films, Séries TV, DVD, Blu-Ray"    // PAS DE RETOUR UTILISATEUR
  // const category = "Enfants, Jouets, Bébés"            // DONE
  // const category = "Informatique, Tablettes"           // DONE
  // const category = "Smartphones & Objets connectés"    // DONE
  // const category = "Photo, Caméras, Tirages photo"     // DONE
  // const category = "Son, Casques, Enceintes"           // DONE
  // const category = "TV, Vidéo, Home cinema"            // DONE
  // const category = "Electroménager, Cuisine"           // DONE
  // const category = "Beauté, Santé, Forme"              // DONE
  // const category = "Mobilité, Sport, Bagagerie"
  // const category = "Maison, Décoration "
  // const category = "Bricolage, Jardin"
  // const category = "E-cartes & Coffrets cadeaux"

  const productList = []

  $(".Article-item").each((k, item) => {
    const currentProduct = new Product(category)

    // TITLE
    const title = $(".Article-title", item)[0].text.trim()
    if (title) {
      currentProduct.title = title
    }

    // Fnac Url
    const fnacUrl = $(".Article-title", item)[0].href
    if (fnacUrl) {
      currentProduct.fnacUrl = fnacUrl.split('#')[0]
    }

    // Description
    let descSub = $(".Article-descSub", item)
    if (descSub.length > 0) {
      descSub = descSub[0].innerText.trim()
      currentProduct.descSub = descSub
    }

    // PRICE
    let price = $(".userPrice", item)
    if (price.length > 0) {
      price = price[0].innerText.trim()
      price = parseFloat(price.replace("€", "."))
      currentProduct.price = price
    }

    // IMG LINK
    let imgLink = $(".Article-itemVisualImg", item)[0].getAttribute("data-lazyimage")
    if (!imgLink) {
      imgLink = $(".Article-itemVisualImg", item)[0].getAttribute("src")
    }
    if (imgLink) {
      currentProduct.imgLink = imgLink
    }

    // NUMBER OF STARS
    let review = $(".f-star--small", item)
    if (review.length > 0) {
      review = review[0].innerText
      if (review > 9) {
        review /= 10
      }
      currentProduct.review = review

      // NUMBER OF REVIEW
      let reviewNumber = $(".f-star--small", item).next().text().trim()
      reviewNumber = reviewNumber.substring(2, reviewNumber.length - 2)
      currentProduct.reviewNumber = reviewNumber
    }

    // Add Product in list
    productList.push(currentProduct)
  })


  /* Convert product list to csv format and download it

    productListToCsv -- list of Product class
  */
  function downloadProductListAsCsv(productListToCsv) {
    let csvContent = ""

    csvContent = "data:text/csv;charset=utf-8,";
  
    // Add next line if you need columns title in csv
    // csvContent += Product.getCsvTitle() + "\r\n"
  
    productListToCsv.forEach(product => {
      csvContent += product.toCsvFormat() + "\r\n"
    })
  
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link);
    link.click(); // This will download the data file named "my_data.csv".
  }

  downloadProductListAsCsv(productList)

})();