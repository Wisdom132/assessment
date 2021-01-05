export default function ({
  $axios
}) {
  $axios.onRequest(config => {

    config.headers['Authorization'] = `Client-ID PJlle6Hv9nuMqDxmpieVj1eK8VLYYq6zkh6S00WmaHk`

  })

}
