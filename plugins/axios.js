export default function ({
  $axios
}) {
  $axios.onRequest(config => {

    config.headers['Authorization'] = `Client-ID ${process.env.VUE_APP_CLIENT_ID}`

  })

}
