import { useState } from 'react';
import { useRouter } from 'next/router';

export default function EventList({ eventLists }) {
	const router = useRouter();
	const [event, setEvent] = useState(eventLists);

	const fetchSportEvents = async (param) => {
		const response = await fetch(
			`http://localhost:4000/events?category=${param}`
		);
		const data = await response.json();

		setEvent(data);
		router.push(`/events?category=${param}`, undefined, { shallow: true });
	};

	return (
		<>
			<h1>Events holding today</h1>
			<span>
				<button onClick={() => fetchSportEvents('sports')}>
					See Sports Only
				</button>
				<button onClick={() => fetchSportEvents('food')}>See Food Only</button>
				<button onClick={() => fetchSportEvents('art')}>See Art Only</button>
				<button onClick={() => fetchSportEvents('technology')}>
					See Technology Only
				</button>
			</span>
			{event.map((eventList) => {
				return (
					<div key={eventList.id}>
						<h2>
							{eventList.id} {eventList.title} {eventList.date} |{' '}
							{eventList.category}
						</h2>
						<h4>{eventList.description}</h4>
						<hr />
					</div>
				);
			})}
		</>
	);
}

export async function getServerSideProps(context) {
	const { query } = context;
	const { category } = query;
	const queryString = category ? `category=${category}` : '';
	const response = await fetch(`http://localhost:4000/events?${queryString}`);
	const data = await response.json();

	return {
		props: {
			eventLists: data,
		},
	};
}
