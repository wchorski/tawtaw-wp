/**
 * Registers a new block variation provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-blocks/#registerBlockVariation
 */

import { registerBlockVariation } from '@wordpress/blocks';

/**
* Retrieves the translation of text.
*
* @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
*/
import { __ } from '@wordpress/i18n';

/**
* Variation content
*/

const CONTENT = [
  [ 'core/cover', 
    {"overlayColor":"secondary","isDark":false,"style":{"color":{}}},
    [
      ['core/heading', {"textAlign":"center", "level":2, placeholder: '<Heading>'} ],
      ['core/paragraph', {"align":"center","fontSize":"large", placeholder: '<paragraph>'} ],
    ]
  ]
];

/*
* New `core/group` block variation.
*/
const tawtaw_ImageOverText = {
name: 'tawtaw-textoverimage',
title: __( 'tawtaw Text Over Image', 'tawtaw-blocks' ),
description: __( 'first Will variation.', 'tawtaw-blocks' ),
scope: [ 'inserter' ],
attributes: {"align":"wide","style":{"spacing":{"padding":{"top":"3px","right":"3px","bottom":"3px","left":"3px"}}},"gradient":"diagonal-primary-to-foreground","layout":{"contentSize":"","wideSize":""}},
icon: {
  background: '#61a96c',
  foreground: '#fff',
  src: 'cover-image'
},
innerBlocks: CONTENT,
};

registerBlockVariation( 'core/group', tawtaw_ImageOverText );