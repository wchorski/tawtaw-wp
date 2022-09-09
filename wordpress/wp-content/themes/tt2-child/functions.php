<?php

add_action( 'wp_enqueue_scripts', 'tt2child_enqueue_assets' );
function tt2child_enqueue_assets() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );
}

/**
	 * Customize rest base url.
	 * When we set site address url to frontend url, by default wp rest endpoint gets that frontend url as base point.
	 * So we must update that to actual backend url.
	 *
	 * @param string $url url of the backend.
	 *
	 * @return string backend url.
	 */
	// function next_update_rest_url( $url ) {
	// 	return str_replace( get_home_url(), get_site_url(), $url );
	// }

  update_option( 'siteurl', 'http://localhost:3000' );