const postedBy = (parent, _args, context) => {
  return context.prisma.spark({ id: parent.id }).postedBy()
}

const campaign = (parent, _args, context) => {
  return context.prisma.spark({ id: parent.id }).campaign()
}

const likes = (parent, _args, context) => {
  return context.prisma.spark({ id: parent.id }).likes()
}

const dislikes = (parent, _args, context) => {
  return context.prisma.spark({ id: parent.id }).dislikes()
}

const Spark = { postedBy, campaign, likes, dislikes }

export default Spark
