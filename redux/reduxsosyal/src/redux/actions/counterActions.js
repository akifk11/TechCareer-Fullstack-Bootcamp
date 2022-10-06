import ActionTypes from "../actionTypes";


const sayiArttir = (val) => {
    return { type: ActionTypes.count.SAYI_ARTTIR, payload: val }
}
const sayiAzalt = (val) => {
    return { type: ActionTypes.count.SAYI_AZALAT, payload: val }
    //burada payload a sabit bir şeyde yazılabilir yoksa fonksiyondan gelen parametrede verilebilir
}

const sayiAksiyon = { sayiArttir, sayiAzalt }

export default sayiAksiyon