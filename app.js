/**
 * ==============================================
 * App.js v1.0
 * ==============================================
 * Framework Name: Static Website Framework
 * Framework Codename: swf_
 * Author: Beta Projects
 * Copyright: © 2023 Beta Projects. All rights reserved.
 * Project Type: Closed Source
 * Author Domain: https://beta-projects.nl
 * Chamber of Commerce Registration Number: 60772298
 * Country of Origin: The Netherlands
 * Admin Email: admin@beta-projects.nl
 * 
 * Disclaimer of Liability:
 * Beta Projects, the creator of the Static Website Framework,
 * hereby disclaims all liability for any damages or losses,
 * whether direct, indirect, incidental, special, or consequential,
 * arising out of or in connection with the use or abuse of this project.
 * Users are encouraged to use this framework at their own discretion,
 * understanding that any decisions made while using it are their sole responsibility.
 * 
 * "Beta Projects shall not be held liable for any issues, errors,
 *  or consequences that may arise from the use of this project. 
 *  By using this framework, you agree to this disclaimer
 *  and accept full responsibility for your actions."
 * ==============================================
 */

console.log('[SYSTEM]: Initialising App.js');
console.log('[SYSTEM]: Loading Modules...');

/*
 * ----------------------------------
 * Load Rive Event Types
 * ----------------------------------
 */

//import { Rive, EventType, RiveEventType } from "/assets/js/modules/@rive-app/canvas/rive.js";
//import { Rive, EventType, RiveEventType } from "/assets/js/modules/@rive-app/canvas";

console.log('[SYSTEM]: Modules Loaded!');

/*
 * ----------------------------------------------
 * Fires when DOM is fully parsed and Ready
 * ----------------------------------------------
 */

document.addEventListener('DOMContentLoaded', () => {

	/*
	 * ----------------------------------------------
	 * Inititiate Rive
	 * ----------------------------------------------
	 */

	// Fill the canvas, cropping Rive if necessary
	let rMobileMenuBtnLayout = new rive.Layout({
		fit: rive.Fit.Contain,
	});

	// Instantiate Animation
	const rMobileMenuBtn = new rive.Rive({
		src: "assets/img/careforwomen-site-anim.riv",
		canvas: document.getElementById("be-rive-mobile-menu-btn"),
		layout: rMobileMenuBtnLayout,
		artboard: 'Mobile Menu Button',
		autoplay: true,
		stateMachines: "State Machine 1",
		onLoad: () => {
			rMobileMenuBtn.resizeDrawingSurfaceToCanvas();
		},
	});

	// Resize the drawing surface if the window resizes
	window.addEventListener("resize", () => {
		rMobileMenuBtn.resizeDrawingSurfaceToCanvas();
	}, false);

	const onRiveEventReceived = (riveEvent) => {
	    const eventData = riveEvent.data;
	    const eventProperties = eventData.properties;

	    if (eventData.type === RiveEventType.General) {
	        console.log("Event name", eventData.name);

	    } else if (eventData.type === RiveEventType.OpenUrl) {
	        console.log("Event name", eventData.name);
	        // Manually handle OpenUrl events
	        // window.location.href = eventData.url;
	    }
	};

	rMobileMenuBtn.on(EventType.RiveEvent, onRiveEventReceived);
});
