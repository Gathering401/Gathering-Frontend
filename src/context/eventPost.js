
const eventAPI = 'https://gathering.azurewebsites.net/api/Event';

export default async function CreatEvent(eventName, start, end, dayOfMonth, food, cost, location) {

    await fetch(`${eventAPI}/Event`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventName, start, end, dayOfMonth, food, cost, location }),
    });
}