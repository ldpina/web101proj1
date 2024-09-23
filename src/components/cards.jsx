import React from "react";
import Card from './card'



const Cards = () => {
    return (
        <div className="Cards">
            <table>
                <tr>
                    <Card name = 'Philippes' type = 'Sandwiches' menu = 'https://philippes.com/french-dips/#' img = 'https://api.xtremefoodies.com/uploads/images/item/74076545825448427400715.jpg'/>
                    <Card name = 'Board & Brew' type = 'Sandwiches' menu = 'https://www.boardandbrew.com/home/#jump' img ='https://images.squarespace-cdn.com/content/v1/65bd1b087b225d223664bf7b/a1861d3c-203e-4b8f-822a-a81cdef272c4/Baja+Beefv1.jpg?format=750w'/>
                    <Card name = 'Howlin Rays' type = 'Chicken Sandwiches' menu ='https://howlinrays.com/#menu-anchor' img = 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*OlYg6ks1wznCiS_E'/>
                    <Card name = 'Easy Street' type = 'Burgers' menu = 'https://easystreetburgers.com/menu' img = 'https://preview.redd.it/6ql11adbhqw61.jpg?width=1080&crop=smart&auto=webp&s=173f225be4baf3984258bec3931e45eab33779ee'/>
                </tr>

                <tr>
                    <Card name = 'Snooze A.M Eatery' type = 'Breakfast' menu = 'https://www.snoozeeatery.com/menu/' img = 'https://www.snoozeeatery.com/wp-content/uploads/2021/05/Classics-Snooze-Classic_MG_4588-Edit.jpg' />
                    <Card name = 'Breakfast Republic' type = 'Breakfast' menu ='https://breakfastrepublic.com/food-menu' img = 'https://orangecoast.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk3NjY1NTE4NjYyNTI2MjUz/breakfast-republic_french-toasts-flight2.jpg'/>
                    <Card name = 'The Cottage' type = 'Breakfast' menu = 'https://cottagelajolla.com/la-jolla-the-cottage-la-jolla-food-menu' img = 'https://lh3.googleusercontent.com/p/AF1QipPvxJJWqborBWmtajk6NQJ8K2Jli9U7BWphotnR=s680-w680-h510'/>
                    <Card name = 'Shorehouse Kitchen' type = 'Breakfast' menu = 'https://shorehousekitchen.com/la-jolla-la-jolla-shores-shorehouse-kitchen-food-menu' img = 'https://static.spotapps.co/spots/f1/94bf534d78461aa6ced78fcd6b3faf/full'/>

                </tr>

                <tr>
                    <Card name = 'Tacos Gavilan' type = 'Mexican Food' menu = 'https://tacosgavilan.com/menu/' img = 'https://fastly.4sqi.net/img/general/600x600/39203332_YBAGRa2h2v6JdEaFvVDz9EsW3n_4XNI0BfQ95j5Uudo.jpg'/>
                    <Card name = 'Tacos El Gordo' type = 'Mexican Food' menu = 'http://tacoselgordobc.com/menu/' img = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e0/8e/7b/photo0jpg.jpg?w=1200&h=-1&s=1'/>
                </tr>

            </table>
        </div>
        
    )
}
export default Cards;