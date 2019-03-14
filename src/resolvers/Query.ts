const allCampaigns = (_root, _args, context, _info) => {
  return context.prisma.campaigns()
}

const allSparks = (_root, _args, context, _info) => {
  return context.prisma.sparks()
}

const Query = { allCampaigns, allSparks }

export default Query
