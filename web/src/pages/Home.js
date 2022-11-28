import React, {useState} from "react";
import './../css/nicepage.css'
import './../css/Main.css'

import StripeContainer from "../components/StripeContainer";


function Home() {
	return (
		<>
			<section className="u-clearfix u-palette-4-base u-section-1" id="sec-8d51">
				<div className="u-clearfix u-sheet u-sheet-1">
					<div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
						<div className="u-layout">
							<div className="u-layout-row">
								<div className="u-container-style u-image u-layout-cell u-size-30 u-image-1"
										 data-image-width="500"
										 data-image-height="333">
									<div className="u-container-layout u-container-layout-1">
										<h2 className="u-text u-text-body-alt-color u-text-default u-text-1">School</h2>
									</div>
								</div>
								<div className="u-container-style u-image u-layout-cell u-size-30 u-image-2"
										 data-image-width="500"
										 data-image-height="333">
									<div className="u-container-layout u-valign-top u-container-layout-2">
										<h3 className="u-text u-text-body-alt-color u-text-default u-text-2">Coffee </h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<StripeContainer/>
		</>
	)
}


export default Home