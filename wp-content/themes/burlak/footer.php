<?php
	$rights = get_option('copyrights');
	$address = get_option('address');
	$phone = get_option('phone');
	$mail = get_option('mail');
?>
	<footer class="footer">
		<div class="container">
			<div class="footer-left">
				<div class="footer-naviagtion">
					<?php
						wp_nav_menu(array(
							'theme_location' => 'footer',
							'menu_class' => 'navigation navigation__footer',
							'container' => ''
						));
					?>
				</div>
			</div>
			<div class="footer-right">
				<?php
					if($address):
					?>
						<div class="footer-address">
							<?= $address ?>
						</div>
					<?php
					endif;	
				?>
				<?php
					if($phone):
					?>
						<div class="footer-phone">
							<a href="tel:<?= phone_replace($phone) ?>">
								<?= $phone ?>
							</a>
						</div>
					<?php
					endif;	
				?>
				<?php
					if($mail):
					?>
						<div class="footer-mail">
							<a href="mailto:<?= $mail ?>">
								<?= $mail ?>
							</a>
						</div>
					<?php
					endif;
					get_template_part('blocks/links');
				?>
			</div>
			<?php
				if($rights):
				?>
					<div class="footer-rights">
						<?= $rights ?>
					</div>
				<?php
				endif;	
			?>
		</div>
	</footer>
</div>
<div class="preloader preloader__visible">
	<div class="preloader-spinner">
		<svg class="preloader-spinner-inner" viewBox="25 25 50 50">
			<circle class="preloader-spinner-inner-path" cx="50" cy="50" r="20" fill="none" stroke-width="2"/>
		</svg>
	</div>
</div>
<?php get_template_part('blocks/registration-form'); ?>
<?php wp_footer(); ?>
<script>
	<?= get_option('common_scripts'); ?>
</script>
</body>
</html>
