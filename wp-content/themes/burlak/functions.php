<?php
/**
 * burlak functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package burlak
 */

if ( ! function_exists( 'burlak_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function burlak_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on burlak, use a find and replace
		 * to change 'burlak' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'burlak', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'burlak' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'burlak_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'burlak_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function burlak_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'burlak_content_width', 640 );
}
add_action( 'after_setup_theme', 'burlak_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function burlak_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'burlak' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'burlak' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'burlak_widgets_init' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

// burlak code

function burlak_scripts() {
	wp_enqueue_style( 'burlak-style', get_stylesheet_uri() );
	wp_enqueue_script( 'burlak-bundle', get_template_directory_uri() . '/dist/js/bundle.js');
	wp_enqueue_style( 'burlak-theme', get_template_directory_uri() . '/dist/css/main.css' );
	
}
add_action( 'wp_enqueue_scripts', 'burlak_scripts' );
show_admin_bar(false);

function add_fancybox ($content){	
	global $post;
	$pattern = "/<a(.*?)href=('|\")(.*?).(bmp|gif|jpeg|jpg|png)('|\")(.*?)>/i";
	$replacement = '<a$1href=$2$3.$4$5 data-fancybox="%POSTID%"$6>';
	$content = preg_replace($pattern, $replacement, $content);
	$content = str_replace("%POSTID%", $post->ID, $content);
	return $content;
}

add_filter('the_content', 'add_fancybox');

function phone_replace($string){
	$string = ereg_replace(" ","",$string);
	$string = ereg_replace("-","",$string);
	$string = ereg_replace("\(","",$string);
	$string = ereg_replace("\)","",$string);
	return $string;
}

function generate_youtube( $atts ) {
	$atts = shortcode_atts( array(
		'src'   => 'A3nEH-cqwE4',
		'height' => '450px',
		'width'  => '100%',     
	), $atts );
	return '<iframe src="'. $atts['src'] .'" width="100%" height="'. $atts['height'] .'" frameborder="0" allowfullscreen> <p>Your Browser does not support Iframes.</p></iframe>';
}

add_shortcode('youtube', 'generate_youtube');

add_image_size( 'face-big', 300, 300, true );

function getMonth($month){
	$months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
	return $months[$month - 1];
}

// function filter_search($query) {
// 	if ($query->is_search) {
// 		$query->set('post_type', array('post', 'page', 'projects', 'events', 'news'));
// 	};
// 	return $query;
// };
// add_filter('pre_get_posts', 'filter_search');

// add_filter('navigation_markup_template', 'my_navigation_template', 10, 2 );
// function my_navigation_template( $template, $class ){
// 	return '<div class="ajax-pagination pagination" role="navigation">
// 			<div class="pagination-links">%3$s</div>
// 			<button class="ajax-pagination-more" data-enable="true" data-scroll-enable="false">
// 				Показать еще
// 				<div class="ajax-pagination-more-loader"></div>
// 			</button>
// 		</div>';
// }

// function devise_number_displayed_posts($query) {
// 	if(is_post_type_archive('events')) {
// 		$query->set('posts_per_page', 9);
// 		return;
// 	}
// }
// add_action('pre_get_posts', 'devise_number_displayed_posts', 1);

add_action('admin_menu', function() {
	add_options_page( 'Theme settings page', 'Theme settings', 'manage_options', 'theme-page', 'theme_settings_page' );
});

add_action( 'admin_init', function() {
	register_setting( 'theme-page-settings', 'common_scripts');
});

function theme_settings_page() {
	?>
	  <div class="wrap theme-settings">
		  <h1>Theme settings</h1>
		  <form action="options.php" method="post"> 
			  <?php
				settings_fields( 'theme-page-settings' );
				do_settings_sections( 'theme-page-settings' );
			  ?>
			  <label>
				  <div>Common scripts</div>
				  <textarea name="common_scripts"><?= esc_attr( get_option('common_scripts') ); ?></textarea>
			  </label>
			  <?php submit_button(); ?>
			</form>
	  </div>    
	  <style>
		  .theme-settings{
			  max-width: 600px;
		  }
		  .theme-settings input{
			  width: 100%;
		  }
		  .theme-settings input[type="checkbox"]{
			  width: auto;
		  }
		  .theme-settings textarea{
			  width: 100%;
			  resize: none;
			  height: 150px;
		  }
		  .theme-settings label{
			  margin-bottom: 10px;
			  display: block;
		  }
		  .theme-settings .submit{
			  margin-top: 0;
		  }
		  .theme-settings input[type='submit']{
			  width: auto;
		  }
		  .theme-settings h1{
			  margin-bottom: 20px;
		  }
	  </style>
	<?php
}