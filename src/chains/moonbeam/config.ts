const config = {
    chainName: 'moonbeam',
    prefix: '',
    dataSource: {
        archive: 'https://moonbeam.archive.subsquid.io/graphql',
        chain: process.env.MOONBEAM_CHAIN_NODE || 'wss://wss.api.moonbeam.network',
    },
    typesBundle: 'moonbeam',
    blockRange: {
         from: 1,
    },
}

export default config