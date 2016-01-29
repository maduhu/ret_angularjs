<!DOCTYPE html>
<html>
<head>
	<base href="<?php $url_info = parse_url( home_url() ); echo trailingslashit( $url_info['path'] ); ?>">
	<title>Home | Reporte de estado y tendencias de la biodiversidad continental de Colombia</title>
	<?php wp_head(); ?>
</head>
<body>
	<div id="page" ng-app="app" class="wrapper white"  ng-class="fondo">
			<nav>
				<ul class="breadcrumb">
					<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php bloginfo('template_directory'); ?>/img/logo_s_w.png"></a></li>
					<li><a href="#">2015</a></li>
					<li><a href="#">CAPÍTULO DE BIODIVERSIDAD</a></li>
				</ul>
				<div>
					<div href="#" class="search">
						<a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/search.png"></a>
						<input type="text" placeholder="BUSCA EN EL RET"/>
					</div>
					
					<div class="menu_open">
						<img src="<?php bloginfo('template_directory'); ?>/img/icon/menu.png"/>
							<!--a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/close.png"></a-->
							<ul>
								<li><a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_tag.png"> TEMAS</a></li>
								<li><a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_cal.png"> 2015</a></li>
								<li><a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_cal.png"> 2014</a></li>
								<li><a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_map.png"> MAPA</a></li>
								<li><a href="#">AUTORES</a></li>
<li><a href="#">GLOSARIO</a></li>
								<li><a href="#">AGRADECIMIENTOS</a></li>
								<li><a href="#">BIBLIOGRAFÍA CITADA</a></li>
								<li>
									<a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_twitter.png"></a>
									<a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_fb.png"></a>
									<a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_mail.png"></a>
									<a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_share.png"></a>
								</li>
							</ul>
						</div>
				</div>
			</nav>
		<div ng-view>
		</div>

	<?php wp_footer(); ?>

	<footer class="black">
			<a href="#">INSTITUTO DE INVESTIGACIÓN DE RECURSOS BIOLÓGICOS ALEXANDER VON HUMBOLDT COLOMBIA</a>
			<div><a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/logo_blanco.png"></a></div>
			<div>
				<p><img src="<?php bloginfo('template_directory'); ?>/img/icon/pin_blanco.png"> <strong>SEDE PRINCIPAL</strong> CALLE 28A # 15-09 BOGOTÁ D.C.</p>
				<p><img src="<?php bloginfo('template_directory'); ?>/img/icon/tel_blanco.png"> <strong>PBX </strong>320 27 67 </p>
				<p><img src="<?php bloginfo('template_directory'); ?>/img/icon/reloj_blanco.png"> <strong>HORARIO DE ATENCIÓN</strong> LUNES A VIERNES, 8:30A.M.-5:30P.M.</p>
				<p>© 2015 INSTITUTO HUMBOLDT. TODOS LOS DERECHOS RESERVADOS.</p>
			</div>
			<div>
				<strong>
					<a href="#">BIODIVERSIDAD</a>
					<a href="#">SERVICIOS</a>
					<a href="#">INVESTIGACIÓN</a>
					<a href="#">DANOS FEEDBACK</a>
				</strong>
			</div>
			<div>
				<strong>
					<a href="#">MAPA DE SITIO</a>
					<a href="#">EL INSTITUTO</a>
				</strong>
			</div>
			<div>
				<p><strong>COMPÁRTENOS</strong></p>
				<a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_twitter.png"></a>
				<a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_fb.png"></a>
				<a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_mail.png"></a>
				<a href="#"><img src="<?php bloginfo('template_directory'); ?>/img/icon/ico_share.png"></a>
			</div>
		</footer>

	</div>
</body>
</html>