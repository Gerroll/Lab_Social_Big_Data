(function () {
  class Product {
    title = ""
    fnacUrl = ""
    descSub = ""
    price = ""
    imgLink = ""
    review = ""
    reviewNumber = ""

    toCsvFormat() {
      return `${this.title};${this.fnacUrl};${this.descSub};${this.price};${this.imgLink};${this.review};${this.reviewNumber};`
    }

    static getCsvTitle() {
      return 'title;fnacUrl;descSub;price;imgLink;review;reviewNumber'
    }
  }

  const productList = []

  $(".Article-item").each((k, item) => {
    const currentProduct = new Product()

    const title = $(".Article-title", item)[0].text.trim()
    if (title) {
      currentProduct.title = title
      console.log("Title : " + title)
    }

    const fnacUrl = $(".Article-title", item)[0].href
    if (fnacUrl) {
      currentProduct.fnacUrl = fnacUrl
      console.log("FnacUrl : " + fnacUrl)
    }

    let descSub = $(".Article-descSub", item)
    if (descSub.length > 0) {
      descSub = descSub[0].innerText.trim()
      currentProduct.descSub = descSub
      console.log("DescSub : " + descSub)
    }

    let price = $(".userPrice", item)
    if (price.length > 0) {
      price = price[0].innerText.trim()
      currentProduct.price = price
      console.log("Price : " + price)
    }

    let imgLink = $(".Article-itemVisualImg", item)[0].getAttribute("data-lazyimage")
    if (!imgLink) {
      imgLink = $(".Article-itemVisualImg", item)[0].getAttribute("src")
    }
    if (imgLink) {
      currentProduct.imgLink = imgLink
      console.log("ImgLink : " + imgLink)
    }

    let review = $(".f-star--small", item)
    if (review.length > 0) {
      review = review[0].innerText
      if (review > 9) {
        review /= 10
      }
      currentProduct.review = review

      console.log("Review : " + review + " / 5")

      let reviewNumber = $(".f-star--small", item).next().text().trim()
      reviewNumber = reviewNumber.substring(2, reviewNumber.length - 2)
      currentProduct.reviewNumber = reviewNumber
      console.log("ReviewNumber : " + reviewNumber)
    }

    productList.push(currentProduct)

    console.log("_____________________________________")
  })

  let csvContent = Product.getCsvTitle() + "\r\n"

  productList.forEach(product => {
    csvContent += product.toCsvFormat() + "\r\n"
  })

  let a = document.createElement('a');
  a.href = 'data:attachment/csv,' + csvContent;
  a.target = '_blank';
  a.download = 'myFile.csv';

  document.body.appendChild(a);
  a.click();
})();