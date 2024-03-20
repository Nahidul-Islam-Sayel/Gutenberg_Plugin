<?php
/**
 * Plugin Name:       Easy Sliderr
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       easy-slider
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function easy_slider_easy_slider_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'easy_slider_easy_slider_block_init' );

function enqueue_custom_scripts() {

	// Enqueue your custom slider script
	wp_enqueue_script( 'custom-slider', plugin_dir_url( __FILE__ ) . './src/function/slider.js', array( 'jquery' ), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_custom_scripts' );
