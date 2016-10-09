import {task} from '@briancavalier/yet'
import Either from 'data.either'

const {Left, Right} = Either

const compose2 = (f, g) => (...args) => f(g(...args))
export const compose = (...fns) => fns.reduce(compose2)

const taskOf = value => task(resolve => resolve(value))

const resolveRight = resolve => (...args) => resolve(Right(...args))
const resolveLeft = resolve => err => resolve(Left(err))

const getFromPromise = type => resp => fromPromise(resp[type]())
export const getFromEither = type => either => either.bimap(taskOf, getFromPromise(type)).merge()

export const fromPromise = promise => task(resolve => promise.then(resolveRight(resolve), resolveLeft(resolve)))
