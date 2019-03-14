const spark = (parent, _args, context) => {
  return context.prisma.like({ id: parent.id }).spark()
}

const campaign = (parent, _args, context) => {
  return context.prisma.like({ id: parent.id }).campaign()
}

const user = (parent, _args, context) => {
  return context.prisma.like({ id: parent.id }).user()
}

const Like = { spark, campaign, user }

export default Like
