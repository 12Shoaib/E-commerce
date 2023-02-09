import {atom} from 'recoil';

export const searchInput = atom({
    key:'search',
    default:[]
})
export const isDialogBox = atom({
    key:'Dialog',
    default:false
})
export const logInUser = atom({
    key:'presentUser',
    default:[]
})

export const userCredentials = atom({
    key:'userDetails',
    default:[]
})

export const subsriptionDetails = atom({
    key:'details',
    default: []
})

export const cartDetails = atom({
    key:'cart',
    default: []

})
export const favoriteDetails = atom({
    key:'details',
    default: []

})
export const homeCarousel = atom({
    key:'home',
    default:[{
        image:'https://images.bewakoof.com/uploads/grid/app/revamped-banner-MID-SIZE-B1G1-02-1673359273.jpg'
    },
    {
        image:'https://images.bewakoof.com/uploads/grid/app/new-mid-banner-buy2get1free-1674817171.jpg'
    },
    {
        image:'https://images.bewakoof.com/uploads/grid/app/new-mid-banner-ovrszd-srtwr-dresses-1675243399.jpg'
    },
    {
        image:'https://images.bewakoof.com/uploads/grid/app/midsize-banners-air-ovrszd-cargo-jogs-m-1674133076.jpg'
    }
]
})

export const carouselData = atom({
    key:'carousel',
    default: [
        {
            image:'https://images.bewakoof.com/t640/no-mad-layered-sweatshirt-hoodie-368592-1656181273-1.jpg'
        },
        {
            image:'https://images.bewakoof.com/t640/women-s-sun-kissed-green-joggers-492739-1656146240-1.jpg'
        },
        {
            image:'https://rukminim1.flixcart.com/image/832/832/l5h2xe80/t-shirt/p/b/k/m-gsfshignk2213mrn-gritstones-original-imagg58ywuadf5h5.jpeg?q=70'
        },
        {
            image:'https://images.bewakoof.com/t1080/women-s-blue-shorts-459424-1655836369-1.jpg'
        },
        {
            image:'https://images.bewakoof.com/t640/savvy-red-regular-side-stripes-shorts-459394-1656043789-1.jpg'
        },
        {
            image:'https://images.bewakoof.com/t640/men-s-grey-sleeveless-puffer-jacket-498955-1675062693-1.jpg'
        }
    ]
})

export const womens = atom({
    key:'women',
    default:[
        {
            brandName: 'Zara',
            tshirt : 'Womens Grey Hooded Graphic T-shirt',
            price: '$269',
            image:'https://images.bewakoof.com/t640/women-harbor-gray-colorblock-oversized-sweatshirt-504141-1670307191-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Louis Philleppe',
            tshirt : 'Womens High Neck Sweatshirt',
            price: '$380',
            image:'https://images.bewakoof.com/t640/women-s-pastel-lilac-solid-sweater-497716-1664286938-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Allen Solly',
            tshirt : 'Womens Brown Graphic T-shirt',
            price: '$177',
            image:'https://images.bewakoof.com/t640/daffy-awesome-fleece-sweatshirt-306267-1656193968-4.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Zara',
            tshirt : 'Womens Green Hooded Graphic Printed T-shirt',
            price: '$249',
            image:'https://images.bewakoof.com/t640/women-s-green-tropical-vibes-graphic-printed-oversized-t-shirt-578842-1675679409-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Gucci',
            tshirt : 'Womens Black Graphic Printed T-shirt',
            price: '$399',
            image:'https://images.bewakoof.com/t640/women-s-black-tropical-vibes-graphic-printed-boyfriend-t-shirt-578832-1675678965-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'H & M',
            tshirt : 'Womens Pink Graphic Printed T-shirt',
            price: '$179',
            image:'https://images.bewakoof.com/t640/women-s-lilac-bloom-minions-looking-cute-graphic-printed-oversized-t-shirt-546430-1669805937-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'White House',
            tshirt : 'Womens White & Yellow Stripes Printed T-shirt',
            price: '$197',
            image:'https://images.bewakoof.com/t640/women-s-birthday-yellow-tie-dye-oversized-boyfriend-t-shirt-479963-1667493544-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'John Players',
            tshirt : 'Womens Peri Slim Fit Dress',
            price: '$197',
            image:'https://images.bewakoof.com/t640/women-s-very-peri-slip-dress-521199-1659110753-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Roadster',
            tshirt : 'Womens Brown Graphic T-shirt',
            price: '$177',
            image:'https://images.bewakoof.com/t1080/women-s-brown-harry-s-house-graphic-printed-oversized-t-shirt-565911-1672383768-1.jpg',
            cart: 'Add To Cart'
        },


    ]
})

export const mens = atom({
    key:'Men',
    default:[
        
        {
            brandName: 'Zara',
            tshirt : 'Mens White Hooded Graphic Printed T-shirt',
            price: '$249',
            image:'https://ziyastores.com/wp-content/uploads/2022/11/2019-Spring-Autumn-Bomber-Hooded-Jacket-Men-Casual-Slim-Patchwork-Windbreaker-Jacket-Male-Outwear-Zipper-Thin.jpg',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'Louis Phillippe',
            tshirt : 'Mens White Stay Graphic Printed T-shirt',
            price: '$229',
            image:'https://imagescdn.louisphilippe.com/img/app/product/8/800404-9447181.jpg?auto=format',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'Street Side',
            tshirt : 'Mens Green Hooded Plane Joggers',
            price: '$249',
            image:'https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_700x933.jpg',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'Armani',
            tshirt : 'Mens White Custom Text Graphic Printed T-shirt',
            price: '$161',
            image:'https://images.bewakoof.com/t640/men-s-black-customizable-oversized-fit-t-shirt-504365-1667496998-1.jpg',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'Gucci',
            tshirt : 'Mens Blue Graphic Printed T-shirt',
            price: '$141',
            image:'https://th.bing.com/th/id/OIP.d-TUuDon64v-g61f_jbykgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'John Players',
            tshirt : 'Mens Blue Graphic Printed T-shirt',
            price: '$141',
            image:'https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/7/q/w/s-all-rbc-white-one-nb-nicky-boy-original-imagjz5bgpmhcaea.jpeg?q=70',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'White House',
            tshirt : 'Mens Orange Graphic Printed T-shirt',
            price: '$171',
            image:'https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/sleep_more_work_less_half_sleeve_-t-shirt_for_men_base_700x933.jpg',
            cart: 'Add To Cart',
            isLike:false
        },
        {   
            brandName: 'Bhuvan Bum',
            tshirt : 'Mens White Graphic Printed T-shirt',
            price: '$199',
            image:'https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/travel_signboard_white_t-shirt_for_men_base_19_10_2022_700x933.jpg',
            cart: 'Add To Cart',
            isLike:false

        },
        {   
            brandName: 'H & M',
            tshirt : 'Mens White Graphic Printed T-shirt',
            price: '$203',
            image:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffa%2Fd3%2Ffad3994a451262dd8e8b7be727cfb7ab0bc86b18.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            cart: 'Add To Cart',
            isLike:false

        },
        {   
            brandName: 'Roadsters',
            tshirt : 'Mens White Graphic Printed T-shirt',
            price: '$169',
            image:'https://www.grabfly.com/wp-content/uploads/2018/10/roadster-men-charcoal-grey-printed-round-neck-t-shirt.jpg',
            cart: 'Add To Cart',
            isLike:false

        }
    ]
})

export const unisex = atom({
    key:'clothes',
    default:[
        {
            brandName: 'Allen Solly',
            tshirt : 'Unisex Yellow Stay Real Graphic Printed T-shirt',
            price: '$90',
            image:'https://images.bewakoof.com/t640/unisex-stay-real-printed-t-shirt-557813-1673872413-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Calvin Klien',
            tshirt : 'Unisex Black Balance Baby Graphic Printed T-shirt',
            price: '$79',
            image:'https://images.bewakoof.com/t640/unisex-black-balance-baby-graphic-printed-t-shirt-546435-1669818702-1.jpg',
            cart: 'Add To Cart'

        },
        {
            brandName: 'H & M',
            tshirt : 'Unisex Green Stay Real Graphic Printed T-shirt',
            price: '$200',
            image:'https://images.bewakoof.com/t640/unisex-stay-real-printed-t-shirt-557811-1674478296-1.jpg',
            cart: 'Add To Cart'


        },
        {
            brandName: 'John Players',
            tshirt : 'Unisex White Stay Real Graphic Printed T-shirt',
            price: '$149',
            image:'https://images.bewakoof.com/t640/unisex-white-kol-typography-t-shirt-472539-1656154888-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Gucci',
            tshirt : 'Unisex Cheeky Pink Color Printed T-shirt',
            price: '$239',
            image:'https://images.bewakoof.com/t640/unisex-cheeky-pink-color-block-t-shirt-501445-1656584402-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Armani',
            tshirt : 'Unisex Red Striped Printed T-shirt',
            price: '$349',
            image:'https://images.bewakoof.com/t640/unisex-white-striped-t-shirt-544717-1674140830-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Players',
            tshirt : 'Unisex Grey Micky Printed T-shirt',
            price: '$349',
            image:'https://images.bewakoof.com/t640/unisex-mickey-upside-down-printed-t-shirt-563343-1672135188-1.jpg',
            cart: 'Add To Cart'
        },
        {   
            brandName: 'Biba',
            tshirt : 'Unisex White Striped Printed T-shirt',
            price: '$149',
            image:'https://images.bewakoof.com/t640/unisex-white-blue-striped-t-shirt-544712-1671616200-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Flying Machine',
            tshirt : 'Unisex Green & White Level Up T-shirt',
            price: '$149',   
            image:'https://images.bewakoof.com/t640/unisex-green-white-level-up-tie-dye-typography-t-shirt-469221-1656139397-1.jpg',
            cart: 'Add To Cart'
        },
        {   
            brandName: 'Prada',
            tshirt : 'Unisex Yellow Couple T-shirt',
            price: '$149',   
            image:'https://www.beyoung.in/api/cache/catalog/products/new_couple_tshirt_images/mr_and_mrs_mustard_couple_base_700x933.jpg',
            cart: 'Add To Cart'
        }
    ]
})

export const unfilteredItems = atom({
    key:'Items',
    default:[
        {
            brandName: 'Allen Solly',
            tshirt : 'Unisex Yellow Stay Real Graphic Printed T-shirt',
            price: '$90',
            image:'https://images.bewakoof.com/t640/unisex-stay-real-printed-t-shirt-557813-1673872413-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Calvin Klien',
            tshirt : 'Unisex Black Balance Baby Graphic Printed T-shirt',
            price: '$79',
            image:'https://images.bewakoof.com/t640/unisex-black-balance-baby-graphic-printed-t-shirt-546435-1669818702-1.jpg',
            cart: 'Add To Cart'

        },
        {
            brandName: 'H & M',
            tshirt : 'Unisex Green Stay Real Graphic Printed T-shirt',
            price: '$200',
            image:'https://images.bewakoof.com/t640/unisex-stay-real-printed-t-shirt-557811-1674478296-1.jpg',
            cart: 'Add To Cart'


        },
        {
            brandName: 'John Players',
            tshirt : 'Unisex White Stay Real Graphic Printed T-shirt',
            price: '$149',
            image:'https://images.bewakoof.com/t640/unisex-white-kol-typography-t-shirt-472539-1656154888-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Gucci',
            tshirt : 'Unisex Cheeky Pink Color Printed T-shirt',
            price: '$239',
            image:'https://images.bewakoof.com/t640/unisex-cheeky-pink-color-block-t-shirt-501445-1656584402-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Armani',
            tshirt : 'Unisex Red Striped Printed T-shirt',
            price: '$349',
            image:'https://images.bewakoof.com/t640/unisex-white-striped-t-shirt-544717-1674140830-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Players',
            tshirt : 'Unisex Grey Micky Printed T-shirt',
            price: '$349',
            image:'https://images.bewakoof.com/t640/unisex-mickey-upside-down-printed-t-shirt-563343-1672135188-1.jpg',
            cart: 'Add To Cart'
        },
        {   
            brandName: 'Biba',
            tshirt : 'Unisex White Striped Printed T-shirt',
            price: '$149',
            image:'https://images.bewakoof.com/t640/unisex-white-blue-striped-t-shirt-544712-1671616200-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Flying Machine',
            tshirt : 'Unisex Green & White Level Up T-shirt',
            price: '$149',   
            image:'https://images.bewakoof.com/t640/unisex-green-white-level-up-tie-dye-typography-t-shirt-469221-1656139397-1.jpg',
            cart: 'Add To Cart'
        },
        {   
            brandName: 'Prada',
            tshirt : 'Unisex Yellow Couple T-shirt',
            price: '$149',   
            image:'https://www.beyoung.in/api/cache/catalog/products/new_couple_tshirt_images/mr_and_mrs_mustard_couple_base_700x933.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Zara',
            tshirt : 'Mens White Hooded Graphic Printed T-shirt',
            price: '$249',
            image:'https://ziyastores.com/wp-content/uploads/2022/11/2019-Spring-Autumn-Bomber-Hooded-Jacket-Men-Casual-Slim-Patchwork-Windbreaker-Jacket-Male-Outwear-Zipper-Thin.jpg',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'Louis Phillippe',
            tshirt : 'Mens White Stay Graphic Printed T-shirt',
            price: '$229',
            image:'https://imagescdn.louisphilippe.com/img/app/product/8/800404-9447181.jpg?auto=format',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'Street Side',
            tshirt : 'Mens Green Hooded Plane Joggers',
            price: '$249',
            image:'https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_700x933.jpg',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'Armani',
            tshirt : 'Mens White Custom Text Graphic Printed T-shirt',
            price: '$161',
            image:'https://images.bewakoof.com/t640/men-s-black-customizable-oversized-fit-t-shirt-504365-1667496998-1.jpg',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'Gucci',
            tshirt : 'Mens Blue Graphic Printed T-shirt',
            price: '$141',
            image:'https://th.bing.com/th/id/OIP.d-TUuDon64v-g61f_jbykgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'John Players',
            tshirt : 'Mens Blue Graphic Printed T-shirt',
            price: '$141',
            image:'https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/7/q/w/s-all-rbc-white-one-nb-nicky-boy-original-imagjz5bgpmhcaea.jpeg?q=70',
            cart: 'Add To Cart',
            isLike:false
        },
        {
            brandName: 'White House',
            tshirt : 'Mens Orange Graphic Printed T-shirt',
            price: '$171',
            image:'https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/sleep_more_work_less_half_sleeve_-t-shirt_for_men_base_700x933.jpg',
            cart: 'Add To Cart',
            isLike:false
        },
        {   
            brandName: 'Bhuvan Bum',
            tshirt : 'Mens White Graphic Printed T-shirt',
            price: '$199',
            image:'https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/travel_signboard_white_t-shirt_for_men_base_19_10_2022_700x933.jpg',
            cart: 'Add To Cart',
            isLike:false

        },
        {   
            brandName: 'H & M',
            tshirt : 'Mens White Graphic Printed T-shirt',
            price: '$203',
            image:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffa%2Fd3%2Ffad3994a451262dd8e8b7be727cfb7ab0bc86b18.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
            cart: 'Add To Cart',
            isLike:false

        },
        {   
            brandName: 'Roadsters',
            tshirt : 'Mens White Graphic Printed T-shirt',
            price: '$169',
            image:'https://www.grabfly.com/wp-content/uploads/2018/10/roadster-men-charcoal-grey-printed-round-neck-t-shirt.jpg',
            cart: 'Add To Cart',
            isLike:false

        },
        {
            brandName: 'Zara',
            tshirt : 'Womens Grey Hooded Graphic T-shirt',
            price: '$269',
            image:'https://images.bewakoof.com/t640/women-harbor-gray-colorblock-oversized-sweatshirt-504141-1670307191-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Louis Philleppe',
            tshirt : 'Womens High Neck Sweatshirt',
            price: '$380',
            image:'https://images.bewakoof.com/t640/women-s-pastel-lilac-solid-sweater-497716-1664286938-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Allen Solly',
            tshirt : 'Womens Brown Graphic T-shirt',
            price: '$177',
            image:'https://images.bewakoof.com/t640/daffy-awesome-fleece-sweatshirt-306267-1656193968-4.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Zara',
            tshirt : 'Womens Green Hooded Graphic Printed T-shirt',
            price: '$249',
            image:'https://images.bewakoof.com/t640/women-s-green-tropical-vibes-graphic-printed-oversized-t-shirt-578842-1675679409-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Gucci',
            tshirt : 'Womens Black Graphic Printed T-shirt',
            price: '$399',
            image:'https://images.bewakoof.com/t640/women-s-black-tropical-vibes-graphic-printed-boyfriend-t-shirt-578832-1675678965-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'H & M',
            tshirt : 'Womens Pink Graphic Printed T-shirt',
            price: '$179',
            image:'https://images.bewakoof.com/t640/women-s-lilac-bloom-minions-looking-cute-graphic-printed-oversized-t-shirt-546430-1669805937-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'White House',
            tshirt : 'Womens White & Yellow Stripes Printed T-shirt',
            price: '$197',
            image:'https://images.bewakoof.com/t640/women-s-birthday-yellow-tie-dye-oversized-boyfriend-t-shirt-479963-1667493544-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'John Players',
            tshirt : 'Womens Peri Slim Fit Dress',
            price: '$197',
            image:'https://images.bewakoof.com/t640/women-s-very-peri-slip-dress-521199-1659110753-1.jpg',
            cart: 'Add To Cart'
        },
        {
            brandName: 'Roadster',
            tshirt : 'Womens Brown Graphic T-shirt',
            price: '$177',
            image:'https://images.bewakoof.com/t1080/women-s-brown-harry-s-house-graphic-printed-oversized-t-shirt-565911-1672383768-1.jpg',
            cart: 'Add To Cart'
        },

    ]
})