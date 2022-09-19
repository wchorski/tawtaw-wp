# tawtaw-wp
## There's a Will There's a Website - Wordpress Developer Edition
a start with customizing Wordpress's TwentyTwentyTwo Theme



# ⚙ Dev evn 
0. `cp compose-dev.yml compose.yml` -> change env if needed
0. install wp (with TwentyTwentyTwo Theme)
0. install woocommerce plugin
+ + import default /woocommerce/sample-data/sample_products.csv
0. phpMyAdmin => `wp_options` "Site Address (URL)" "siteurl" => http://localhost:3000
0. child theme functions.php => `update_option( 'siteurl', 'http://localhost:3000' );`


# 📃 TODO List
+ ✅ `get-products.js` move to native Woocommerce API and ditch the npm plugin
+ use woocommerce native api endpoint `/wp-json/wc/store/cart/add-item`
+ figure out why images are being loaded in like `http://localhost:3000/_next/image?url=https%3A%2F%2Fi0.wp.com%2Fmobibooth.com%2Fstore%2Fwp-content%2Fuploads%2F2022%2F09%2Fsingle-1.jpg%3Ffit%3D800%252C800%26ssl%3D1&w=384&q=75`


# 🙏 Special Thanks
+ create gutenberg blocks with pure React
+ + <a href="https://medium.com/geekculture/headless-wordpress-gutenberg-next-js-part-1-3-creating-a-block-with-react-e8d69e8460d4"> https://medium.com/geekculture/headless-wordpress-gutenberg-next-js-part-1-3-creating-a-block-with-react-e8d69e8460d4 </a>