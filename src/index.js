import {getFromEither, compose, fromPromise} from './fn'

export const fetchT = compose(fromPromise, fetch)
export const textT = fetchTask => fetchTask.chain(getFromEither('text'))
export const jsonT = fetchTask => fetchTask.chain(getFromEither('json'))
export const blobT = fetchTask => fetchTask.chain(getFromEither('blob'))
export const arrayBufferT = fetchTask => fetchTask.chain(getFromEither('arrayBuffer'))
export const formDataT = fetchTask => fetchTask.chain(getFromEither('formData'))

export const taskStr = compose(textT, fetchT)
export const taskJson = compose(jsonT, fetchT)
export const taskBlob = compose(blobT, fetchT)
export const taskBuffer = compose(arrayBufferT, fetchT)
export const taskForm = compose(formDataT, fetchT)
