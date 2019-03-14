import * as jwt from 'jsonwebtoken'

export const isLoggedIn = async (resolve, _parent, _args, context, _info) => {
  const Authorization = context.request.get('Authorization')

  if (!Authorization) {
    throw new Error(`Not authorised!`)
  }

  const token = Authorization.replace('Bearer ', '')

  if (!token) {
    throw new Error(`Not authorised!`)
  }

  const decodedToken = jwt.verify(token, process.env.APP_SECRET)

  if (!decodedToken) {
    throw new Error(`Not authorised!`)
  }

  return resolve()
}
