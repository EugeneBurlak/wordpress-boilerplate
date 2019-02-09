<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="<?php echo bloginfo('template_directory'); ?>/favicon.ico" type="image/x-icon" />
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
	<meta name="theme-color" content="#1c2545">
	<?php get_template_part('open-graph') ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="app">
		<header class="header">
			<div class="container container__wide">
				<div class="header-inner">
					<div class="header-logo">
						<a title="<?= bloginfo('name'); ?>" class="ajax" href="<?= esc_url( home_url( '/' ) ); ?>"></a>
					</div>
					<div class="header-navigation">
						<?php
							wp_nav_menu(array(
								'theme_location' => 'main',
								'menu_class' => 'navigation'
							));
						?>
					</div>
					<div class="header-search">
						<button class="header-search-toggle"></button>
					</div>
					<div class="header-toggle">
						<a href="#" class="nav-toggle">
							<span></span>
						</a>
					</div>
				</div>
			</div>
			<div class="header-search-panel">
				<?php get_template_part('search/form') ?>
			</div>
			<div class="header-navigation header-navigation__mobile">
				<?php
					wp_nav_menu(array(
						'theme_location' => 'main',
						'menu_class' => 'navigation'
					));
				?>
			</div>
		</header>