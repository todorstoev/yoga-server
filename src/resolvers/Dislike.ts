const spark = (parent, _args, context) => {
  return context.prisma.dislike({ id: parent.id }).spark()
}

const campaign = (parent, _args, context) => {
  return context.prisma.dislike({ id: parent.id }).campaign()
}

const user = (parent, _args, context) => {
  return context.prisma.dislike({ id: parent.id }).user()
}

const Dislike = { spark, campaign, user }

export default Dislike
