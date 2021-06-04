var faker = require('faker/locale/de');

// faker.locale = "fr"

for (let index = 0; index < 10; index++) {
    var a = faker.image.image();

    console.log(a)

    console.log(faker.fake("{{commerce.color}} | {{commerce.department}} | {{commerce.productName}} | {{commerce.price}} | {{commerce.productAdjective}} | {{commerce.productMaterial}} | {{commerce.product}} | {{commerce.productDescription}}"));
    // console.log(faker.fake("{{commerce.color}} | {{commerce.department}} | {{commerce.productName}} | {{commerce.price}} | {{commerce.productAdjective}} | {{commerce.productMaterial}} | {{commerce.product}} | {{commerce.productDescription}}"));

    // console.log(`${color} | ${department} | ${productName} | ${price} | ${productAdjective} | ${productMaterial} | ${product} | ${productDescription}\n`)

}