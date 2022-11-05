import React from 'react';
import './card.css';

export default function Card(props) {
	return (
		<section className='card'>
			<figure>
				<img
					src={`./public/images/${props.data.photo}`}
					alt={props.data.title}
				/>
			</figure>
			<div className='details'>
				<p className='location'>
					<div className='country'>
						<i className='fa-solid fa-location-dot location-icon'>
							<span>{props.data.country}</span>
						</i>
						<a href={props.data.link} target='_blank'>
							View on Google Maps
						</a>
					</div>
					<h2 className='title'>{props.data.title}</h2>
				</p>
				<p className='date'>{props.data.date}</p>
				<p className='description'>{props.data.description}</p>
			</div>
		</section>
	);
}
