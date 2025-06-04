import eventCardImage from "../assets/images/event-card-image.jpg";

export default function EventCard( {event}) {
    return(
        <div>
            <img src={event.image} alt="Event Card"/>
            <h1>Besteller Book Bootcamp -write, Market & Publish Your Book -Lucknow</h1>
            <h2>Saturday, March 18, 9.30</h2>
            <h3>Online Event- Attend anywhere</h3>
        </div>
    )
}