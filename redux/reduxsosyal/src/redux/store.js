import { legacy_createStore as createStore } from 'redux'
import reducers from "./reducers"
//buradan direk reducers içindeki index.js'i getirir

export const store = createStore(reducers)
// burada reducers tan fırlatılan değeri yakalıyorum