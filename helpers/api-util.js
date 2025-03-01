export async function getAllEvents(){
    return fetch('https://aslam-aa561-default-rtdb.firebaseio.com/events.json').then(res=>res.json()).then(data=>{
        const events=[]
        for(const key in data)
        {
            events.push({
                id:key,
                ...data[key]
            })
        }
        return events
    })
}

export async function getFeaturedEvents(){
        const allEvents=await getAllEvents();
        return allEvents.filter((event) => event.isFeatured);

}
export async function getEventById(id) {
    const allEvents=await getAllEvents();
    return allEvents.find((event) => event.id === id);
  }