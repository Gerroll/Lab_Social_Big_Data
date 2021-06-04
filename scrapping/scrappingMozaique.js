$(".Article-mosaicItem").each((k, item) => {
  const title = $(".thumbnail-titleLink", item)[0].text.trim()
  if (title)
    console.log("Title : " + title)

  const fnacUrl = $(".thumbnail-titleLink", item)[0].href
  if (fnacUrl)
    console.log("FnacUrl : " + fnacUrl)

  const price = $(".thumbnail-price", item)[0].innerText.trim()
  if (price)
    console.log("Price : " + price)

  let imgLink = $(".thumbnail-imgContent", item)[0].getAttribute("data-lazyimage")
  if (!imgLink)
    imgLink = $(".thumbnail-imgContent", item)[0].getAttribute("src")
  if (imgLink)
    console.log("ImgLink : " + imgLink)

  let review = $(".f-star--small", item)[0].innerText
  if (review) {
    if (review > 9)
      review /= 10
    console.log("Review : " + review + " / 5")
  }

  console.log("_____________________________________")
})

