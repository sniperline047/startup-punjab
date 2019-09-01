import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer className="bottom pv4 ph3 ph5-m ph6-l mid-gray bg-black mt7">
			  	<small className="f6 db tc">© 2016 <b class="ttu">A Punjab Government Product</b>., All Rights Reserved</small>
			  	<div className="tc mt3">
				    <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
				    <a href="/terms/"    title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
				    <a href="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
			  	</div>
			</footer>
		</div>
	);
}

export default Footer;