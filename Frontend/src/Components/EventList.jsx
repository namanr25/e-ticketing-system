import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events }) => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Upcoming Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {events.map((event) => (
                    <EventCard
                        key={event._id} // Assuming _id is unique for each event
                        photo={event.photo}
                        title={event.title}
                        description={event.description}
                        city={event.city}
                        location={event.location}
                        availableSeats={event.availableSeats}
                        eventDate={event.eventDate}
                        amount={event.amount}
                        postedBy={event.postedBy}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventList;
