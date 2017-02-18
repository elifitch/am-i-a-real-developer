import React from 'react';
import { css } from 'glamor';
import { TweenMax, Power4 } from 'gsap';
import * as physics2D from '../../vendor/physics-2d-plugin';

import { 
	random as loRandom, 
	uniqueId as loUniqueId, 
	pull as loPull 
} from 'lodash';

const canvasContainer = css({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
});
const canvasStyles = css({
	width: '100%',
	height: '100%',
});

function getDegAngle(x0, y0, x1, y1) {
	const y = y1 - y0;
	const x = x1 - x0;
	return Math.atan2(y, x) * (180 / Math.PI);
}

function addClass(el, className) {
	el.classList.add(className);
}
function removeClass(el, className) {
	el.classList.remove(className);
}

const DECAY = 4;
const SPREAD = 50;
const GRAVITY = 1200;

export class Confetti extends React.Component {
	constructor() {
		super();

		this.angle = 270;

		this.confettiSpriteIds = [];
		this.confettiSprites = {};

		this.addConfettiParticles = this.addConfettiParticles.bind(this);
		this.updateConfettiParticle = this.updateConfettiParticle.bind(this);
		this.tweenConfettiParticle = this.tweenConfettiParticle.bind(this);
		this.shootConfetti = this.shootConfetti.bind(this);
		this.drawConfetti = this.drawConfetti.bind(this);
		this.renderCanvas = this.renderCanvas.bind(this);
		this.handleMousedown = this.handleMousedown.bind(this);
		this.handleMouseup = this.handleMouseup.bind(this);
		this.setCanvasSize = this.setCanvasSize.bind(this);
	}

	componentDidMount() {
		const canvas = this.refs.canvas;
		this.dpr = window.devicePixelRatio || 1;
		this.ctx = canvas.getContext('2d');
		this.ctx.scale(this.dpr, this.dpr);

		TweenMax.ticker.addEventListener('tick', this.renderCanvas);
	
		canvas.addEventListener('mousedown', this.handleMousedown);
		canvas.addEventListener('mouseup', this.handleMouseup);
		canvas.addEventListener('touchstart', this.handleMousedown);
		canvas.addEventListener('touchend', this.handleMouseup);
		canvas.addEventListener('resize', this.setCanvasSize);

		this.setCanvasSize();
		this.shootConfetti();
	}

	handleMousedown() {
		// this.shoot = true;
	}

	handleMouseup() {
		// this.shoot = false;
	}

	setCanvasSize() {
		const canvas = this.refs.canvas;
		canvas.width = window.innerWidth * this.dpr;
		canvas.height = window.innerHeight * this.dpr;
	}

	addConfettiParticles(amount, angle, velocity, x, y) {
		let i = 0;
		while (i < amount) {
			// sprite
			const r = loRandom(4, 6) * this.dpr;
			const d = loRandom(15, 25) * this.dpr;
			
			const cr = loRandom(50, 255);
			const cg = loRandom(50, 200);
			const cb = loRandom(50, 200);
			const color = `rgb(${cr}, ${cg}, ${cb})`;
			
			const tilt = loRandom(10, -10);
			const tiltAngleIncremental = loRandom(0.07, 0.05);
			const tiltAngle = 0;

			const id = loUniqueId();
			const sprite = {
				[id]: {
					angle,
					velocity,
					x,
					y,
					r,
					d,
					color,
					tilt,
					tiltAngleIncremental,
					tiltAngle,
				},
			};

			Object.assign(this.confettiSprites, sprite);
			this.confettiSpriteIds.push(id);
			this.tweenConfettiParticle(id);
			i++;
		}
	}

	tweenConfettiParticle(id) {
		const minAngle = this.confettiSprites[id].angle - SPREAD / 2;
		const maxAngle = this.confettiSprites[id].angle + SPREAD / 2;
		
		const minVelocity = this.confettiSprites[id].velocity / 4;
		const maxVelocity = this.confettiSprites[id].velocity;

		// Physics Props
		const velocity = loRandom(minVelocity, maxVelocity);
		const angle = loRandom(minAngle, maxAngle);
		const gravity = GRAVITY;
		// const friction = loRandom(0.1, 0.25);
		const friction = loRandom(0.01, 0.05);
		const d = 0;

		TweenMax.to(this.confettiSprites[id], DECAY, {
			physics2D: {
				velocity,
				angle,
				gravity,
				friction,
			},
			d,
			ease: Power4.easeIn,
			onComplete: () => {
				// remove confetti sprite and id
				loPull(this.confettiSpriteIds, id);
				delete this.confettiSprites[id];
			},
		});
	}

	updateConfettiParticle(id) {
		const sprite = this.confettiSprites[id];
		
		const tiltAngle = 0.0005 * sprite.d;
		
		sprite.angle += 0.01;
		sprite.tiltAngle += tiltAngle;
		sprite.tiltAngle += sprite.tiltAngleIncremental;
		sprite.tilt = (Math.sin(sprite.tiltAngle - (sprite.r / 2))) * sprite.r * 2;
		sprite.y += Math.sin(sprite.angle + sprite.r / 2) * 2;
		sprite.x += Math.cos(sprite.angle) / 2;
	}

	drawConfetti() {
		this.confettiSpriteIds.forEach(id => {
			const sprite = this.confettiSprites[id];
			
			this.ctx.beginPath();
			this.ctx.lineWidth = sprite.d / 2;
			this.ctx.strokeStyle = sprite.color;
			this.ctx.moveTo(sprite.x + sprite.tilt + sprite.r, sprite.y);
			this.ctx.lineTo(sprite.x + sprite.tilt, sprite.y + sprite.tilt + sprite.r);
			this.ctx.stroke();

			this.updateConfettiParticle(id);
		});
	}

	renderCanvas() {
		const canvas = this.refs.canvas;
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		this.drawConfetti();
	}

	shootConfetti() {
		const canvas = this.refs.canvas;
		requestAnimationFrame(this.shootConfetti);
		if (this.props.shoot) {
			this.addConfettiParticles(10, this.angle, 5000, canvas.width/2, canvas.height*.9);   
		}
	}

	render() {
		return (
			<div {...canvasContainer}>
				<canvas {...canvasStyles}
					ref="canvas"
				></canvas>
			</div>
		)
	}
}