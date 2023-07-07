const getEventData = function(){

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZTM5MTEyYjUwYzAwMTQ5ZTUwZjciLCJpYXQiOjE2ODg3MjQzNjksImV4cCI6MTY4OTkzMzk2OX0.-kpEJFuBdkzqN5dM8BJyclFx98ufehlgTSO1eu1FprQ"
        },
    })
    fetch(URL)
    .then((res) => {
      console.log('Response della GET', res)
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Errore nella chiamata API')
      }
    })
    .then((events) => {
      console.log('EVENTS', events)
      events.forEach((event) => {
        let newCol = document.createElement('div')
        newCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3')
        newCol.innerHTML = `
          <div class="card">${event.image}
              <img
                src=" "
                class="card-img-top"
                alt="concert placeholder image"
              />
              <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">
                  ${event.description}
                </p>
                <p class="card-text">
                  ${event.brand}
                </p>
                <p class="card-text fw-bold">
                  ${event.price}€
                </p>
        `
        const eventsRow = document.getElementById('events-row')
        eventsRow.appendChild(newCol)
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

getEventData()