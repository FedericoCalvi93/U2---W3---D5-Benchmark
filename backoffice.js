const eventForm = document.getElementById('event-form')
eventForm.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('raccolgo i dati dal form')

  const nameInput = document.getElementById('event-name')
  const descriptionInput = document.getElementById('event-description')
  const priceInput = document.getElementById('event-price')
  const brandInput = document.getElementById('brand')
  const imageInput = document.getElementById('image-selector')

  const newEvent = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    brand: brandInput.value,
    image: imageInput.value,
  }

  console.log('ecco i valori recuperati dal form:', newEvent)

  const URL = 'https://striveschool-api.herokuapp.com/api/product/'

    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  let urlToUse
  if (eventId) {
    urlToUse = URL
  } else {
    urlToUse = URL
  }


  fetch(urlToUse, {
    method: methodToUse,
    body: JSON.stringify(newEvent),
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZTM5MTEyYjUwYzAwMTQ5ZTUwZjciLCJpYXQiOjE2ODg3MjQzNjksImV4cCI6MTY4OTkzMzk2OX0.-kpEJFuBdkzqN5dM8BJyclFx98ufehlgTSO1eu1FprQ',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {!
        alert('EVENTO SALVATO!')
        nameInput.value = ''
        descriptionInput.value = ''
        priceInput.value = ''
        brandInput.value = ''
        imageInput.value = ''
        location.assign('index.html')
      } else {
        throw new Error("Errore nel salvataggio dell'evento")
      }
    })
    .catch((err) => {
      console.log(err)
    })
})