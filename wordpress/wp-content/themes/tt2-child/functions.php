<?php

add_action( 'wp_enqueue_scripts', 'tt2child_enqueue_assets' );
function tt2child_enqueue_assets() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );
}
