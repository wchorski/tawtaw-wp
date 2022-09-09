# tawtaw-wp
## There's a Will There's a Website - Wordpress Developer Edition
a start with customizing Wordpress's TwentyTwentyTwo Theme



# ⚙ Dev evn 
0. install wp (with TwentyTwentyTwo Theme)
0. install woocommerce plugin
+ + import default /woocommerce/sample-data/sample_products.csv
0. phpMyAdmin => `wp_options` "Site Address (URL)" "siteurl" => http://localhost:3000
0. child theme functions.php => `update_option( 'siteurl', 'http://localhost:3000' );`


# 🙏 Special Thanks
+ create gutenberg blocks with pure React
+ + <a href="https://medium.com/geekculture/headless-wordpress-gutenberg-next-js-part-1-3-creating-a-block-with-react-e8d69e8460d4"> https://medium.com/geekculture/headless-wordpress-gutenberg-next-js-part-1-3-creating-a-block-with-react-e8d69e8460d4 </a>