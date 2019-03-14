const sparks = (parent, _args, context) => {
  return context.prisma.user({ id: parent.id }).sparks()
}

const campaigns = (parent, _args, context) => {
  return context.prisma.user({ id: parent.id }).campaigns()
}

const likes = (parent, _args, context) => {
  return context.prisma.user({ id: parent.id }).likes()
}

const dislikes = (parent, _args, context) => {
  return context.prisma.user({ id: parent.id }).dislikes()
}

const User = { sparks, campaigns, likes, dislikes }

export default User
