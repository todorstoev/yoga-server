const postedBy = (parent, _args, context) => {
  return context.prisma.campaign({ id: parent.id }).postedBy()
}

const sparks = (parent, _args, context) => {
  return context.prisma.campaign({ id: parent.id }).sparks()
}

const likes = (parent, _args, context) => {
  return context.prisma.campaign({ id: parent.id }).likes()
}

const dislikes = (parent, _args, context) => {
  return context.prisma.campaign({ id: parent.id }).dislikes()
}

const Campaign = { postedBy, sparks, likes, dislikes }

export default Campaign
