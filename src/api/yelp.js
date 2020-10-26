import axios from 'axios'
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 4ohdvF-qx7rPDafDNDFMdO8DtjToWeTOkf9Iq-KOl2Tr7L-4Z_Y40XLvT6s9PaVLvFdcJBBiJacMoKF3NwexWieFHpTzQV6fazckjRgvnVMKLQLDzxxp9o8U4P-SX3Yx'
    }
})